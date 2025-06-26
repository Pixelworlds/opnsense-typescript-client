import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class NdproxyGeneral extends BaseModule {
  /**
   * Get get for ndproxy general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ndproxy/ndproxy/general/get`);
  }

  /**
   * Execute set for ndproxy general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ndproxy/ndproxy/general/set`, data);
  }
}

export class NdproxyService extends BaseModule {
  /**
   * Execute reconfigure for ndproxy service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ndproxy/ndproxy/service/reconfigure`);
  }

  /**
   * Execute restart for ndproxy service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ndproxy/ndproxy/service/restart`);
  }

  /**
   * Execute start for ndproxy service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ndproxy/ndproxy/service/start`);
  }

  /**
   * Get status for ndproxy service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/ndproxy/ndproxy/service/status`);
  }

  /**
   * Execute stop for ndproxy service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ndproxy/ndproxy/service/stop`);
  }
}

// Main module class
export class NdproxyModule extends BaseModule {
  public readonly general: NdproxyGeneral;
  public readonly service: NdproxyService;

  constructor(http: any) {
    super(http);
    this.general = new NdproxyGeneral(http);
    this.service = new NdproxyService(http);
  }

}