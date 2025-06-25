import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class RoutesGateway {
  constructor(private http: any) {}

  async getStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routes/gateway/status');
  }
}

export class RoutesRoutes {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routes/routes/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routes/routes/set', config);
  }

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/routes/routes/searchroute');
    }
    return this.http.post('/api/routes/routes/searchroute', params);
  }

  async add(route: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routes/routes/addroute', route);
  }

  async getRoute(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/routes/routes/getroute/${uuid}` : '/api/routes/routes/getroute';
    return this.http.get(path);
  }

  async setRoute(uuid: string, route: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routes/routes/setroute/${uuid}`, route);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routes/routes/delroute/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/routes/routes/toggleroute/${uuid}/${enabled ? '1' : '0'}`
      : `/api/routes/routes/toggleroute/${uuid}`;
    return this.http.post(path);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routes/routes/reconfigure');
  }
}

export class RoutesModule extends BaseModule {
  public readonly gateway: RoutesGateway;
  public readonly routes: RoutesRoutes;

  constructor(httpClient: any) {
    super(httpClient);
    this.gateway = new RoutesGateway(this.http);
    this.routes = new RoutesRoutes(this.http);
  }

  // Legacy methods for backward compatibility
  async getConfig(): Promise<ApiResponse<any>> {
    return this.routes.get();
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.routes.set(config);
  }

  async searchRoutes(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.routes.search(params);
  }

  async addRoute(route: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.routes.add(route);
  }

  async getRoute(uuid?: string): Promise<ApiResponse<any>> {
    return this.routes.getRoute(uuid);
  }

  async updateRoute(uuid: string, route: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.routes.setRoute(uuid, route);
  }

  async deleteRoute(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.routes.delete(uuid);
  }

  async toggleRoute(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.routes.toggle(uuid, enabled);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.routes.reconfigure();
  }

  async getGateways(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routes/routes/get_gateways');
  }

  async searchGatewayRoutes(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/routes/routes/search_gateway_route', params);
  }

  // New convenience methods
  async getAllRoutes(): Promise<ApiResponse<any>> {
    return this.routes.search();
  }

  async getGatewayStatus(): Promise<ApiResponse<any>> {
    return this.gateway.getStatus();
  }

  async enableRoute(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.routes.toggle(uuid, true);
  }

  async disableRoute(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.routes.toggle(uuid, false);
  }

  async createRoute(network: string, gateway: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const route = {
      enabled: '1',
      network,
      gateway,
      descr: description || `Route to ${network} via ${gateway}`
    };
    return this.routes.add(route);
  }

  async createStaticRoute(destination: string, gateway: string, metric: number = 1, description?: string): Promise<ApiResponse<ApiResult>> {
    const route = {
      enabled: '1',
      network: destination,
      gateway,
      metric: metric.toString(),
      descr: description || `Static route to ${destination}`
    };
    return this.routes.add(route);
  }

  async getRoutingOverview(): Promise<{
    routes: any;
    gateways: any;
    gatewayStatus: any;
    gatewayRoutes: any;
    config: any;
    timestamp: string;
  }> {
    const [routes, gateways, gatewayStatus, gatewayRoutes, config] = await Promise.allSettled([
      this.getAllRoutes(),
      this.getGateways(),
      this.getGatewayStatus(),
      this.searchGatewayRoutes(),
      this.getConfig(),
    ]);

    return {
      routes: routes.status === 'fulfilled' ? routes.value.data : null,
      gateways: gateways.status === 'fulfilled' ? gateways.value.data : null,
      gatewayStatus: gatewayStatus.status === 'fulfilled' ? gatewayStatus.value.data : null,
      gatewayRoutes: gatewayRoutes.status === 'fulfilled' ? gatewayRoutes.value.data : null,
      config: config.status === 'fulfilled' ? config.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }

  async validateGateways(): Promise<{
    results: Array<{ gateway: string; reachable: boolean; status?: any }>;
    summary: { total: number; reachable: number; unreachable: number };
  }> {
    const gatewayStatus = await this.getGatewayStatus();
    const gatewayData = gatewayStatus.data || {};
    
    const results = [];
    let reachable = 0;
    let unreachable = 0;

    for (const [gateway, status] of Object.entries(gatewayData)) {
      const isReachable = Boolean(status && typeof status === 'object' && (status as any).status === 'online');
      results.push({
        gateway,
        reachable: isReachable,
        status
      });
      
      if (isReachable) {
        reachable++;
      } else {
        unreachable++;
      }
    }

    return {
      results,
      summary: { 
        total: results.length,
        reachable,
        unreachable
      }
    };
  }

  async reconfigureAndValidate(): Promise<{
    reconfigureResult: any;
    gatewayValidation: any;
    routeCount: number;
  }> {
    const [reconfigureResult, routes, gatewayValidation] = await Promise.allSettled([
      this.reconfigure(),
      this.getAllRoutes(),
      this.validateGateways(),
    ]);

    const routeData = routes.status === 'fulfilled' ? routes.value.data : { rows: [] };

    return {
      reconfigureResult: reconfigureResult.status === 'fulfilled' ? reconfigureResult.value.data : null,
      gatewayValidation: gatewayValidation.status === 'fulfilled' ? gatewayValidation.value : null,
      routeCount: routeData.rows?.length || 0,
    };
  }
}