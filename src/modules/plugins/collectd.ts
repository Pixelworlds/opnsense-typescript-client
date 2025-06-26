import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class CollectdGeneral extends BaseModule {
  /**
   * Get get for collectd general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/collectd/collectd/general/get`);
  }

  /**
   * Execute set for collectd general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/collectd/collectd/general/set`, data);
  }
}

export class CollectdService extends BaseModule {
  /**
   * Execute reconfigure for collectd service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/collectd/collectd/service/reconfigure`);
  }

  /**
   * Execute restart for collectd service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/collectd/collectd/service/restart`);
  }

  /**
   * Execute start for collectd service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/collectd/collectd/service/start`);
  }

  /**
   * Get status for collectd service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/collectd/collectd/service/status`);
  }

  /**
   * Execute stop for collectd service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/collectd/collectd/service/stop`);
  }
}

// Main module class
export class CollectdModule extends BaseModule {
  public readonly general: CollectdGeneral;
  public readonly service: CollectdService;

  constructor(http: any) {
    super(http);
    this.general = new CollectdGeneral(http);
    this.service = new CollectdService(http);
  }

}