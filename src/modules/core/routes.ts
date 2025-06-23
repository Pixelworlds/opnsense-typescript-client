import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class RoutesModule extends BaseModule {
  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routes/routes/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routes/routes/set', config);
  }

  async searchRoutes(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/routes/routes/search_route', params);
  }

  async addRoute(route: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routes/routes/add_route', route);
  }

  async getRoute(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/routes/routes/get_route/${uuid}` : '/api/routes/routes/get_route';
    return this.http.get(path);
  }

  async updateRoute(uuid: string, route: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routes/routes/set_route/${uuid}`, route);
  }

  async deleteRoute(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routes/routes/del_route/${uuid}`);
  }

  async toggleRoute(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/routes/routes/toggle_route', uuid, enabled);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routes/routes/reconfigure');
  }

  async getGateways(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routes/routes/get_gateways');
  }

  async searchGatewayRoutes(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/routes/routes/search_gateway_route', params);
  }
}
