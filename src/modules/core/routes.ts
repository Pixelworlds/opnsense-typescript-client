import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class RoutesGateway extends BaseModule {
  /**
   * Get status for routes gateway
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/routes/routes/gateway/status`);
  }
}

export class RoutesRoutes extends BaseModule {
  /**
   * Execute addroute for routes routes
   */
  async addroute(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routes/routes/routes/addroute`, data);
  }

  /**
   * Execute delroute for routes routes
   */
  async delroute(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routes/routes/routes/delroute/${uuid}`, data);
  }

  /**
   * Get get for routes routes
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/routes/routes/routes/get`);
  }

  /**
   * Get getroute for routes routes
   */
  async getroute(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/routes/routes/routes/getroute/${uuid}`);
  }

  /**
   * Execute reconfigure for routes routes
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/routes/routes/routes/reconfigure`, data);
  }

  /**
   * Execute set for routes routes
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routes/routes/routes/set`, data);
  }

  /**
   * Execute setroute for routes routes
   */
  async setroute(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routes/routes/routes/setroute/${uuid}`, data);
  }

  /**
   * Execute toggleroute for routes routes
   */
  async toggleroute(uuid: string, disabled: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routes/routes/routes/toggleroute/${uuid}/${disabled}`, data);
  }
}

// Main module class
export class RoutesModule extends BaseModule {
  public readonly gateway: RoutesGateway;
  public readonly routes: RoutesRoutes;

  constructor(http: any) {
    super(http);
    this.gateway = new RoutesGateway(http);
    this.routes = new RoutesRoutes(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/routes/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/routes/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/routes/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/routes/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/routes/service/reconfigure');
  }
}