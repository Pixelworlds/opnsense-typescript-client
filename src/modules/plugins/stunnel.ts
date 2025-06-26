import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class StunnelService extends BaseModule {
  /**
   * Execute reconfigure for stunnel service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/stunnel/stunnel/service/reconfigure`);
  }

  /**
   * Execute restart for stunnel service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/stunnel/stunnel/service/restart`);
  }

  /**
   * Execute start for stunnel service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/stunnel/stunnel/service/start`);
  }

  /**
   * Get status for stunnel service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/stunnel/stunnel/service/status`);
  }

  /**
   * Execute stop for stunnel service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/stunnel/stunnel/service/stop`);
  }
}

export class StunnelServices extends BaseModule {
  /**
   * Execute add item for stunnel services
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/stunnel/stunnel/services/add_item`, data);
  }

  /**
   * Execute del item for stunnel services
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/stunnel/stunnel/services/del_item/${uuid}`, data);
  }

  /**
   * Get get for stunnel services
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/stunnel/stunnel/services/get`);
  }

  /**
   * Get get item for stunnel services
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/stunnel/stunnel/services/get_item/${uuid}`);
  }

  /**
   * Execute set for stunnel services
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/stunnel/stunnel/services/set`, data);
  }

  /**
   * Execute set item for stunnel services
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/stunnel/stunnel/services/set_item/${uuid}`, data);
  }

  /**
   * Execute toggle item for stunnel services
   */
  async toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/stunnel/stunnel/services/toggle_item/${uuid}/${enabled}`, data);
  }
}

// Main module class
export class StunnelModule extends BaseModule {
  public readonly service: StunnelService;
  public readonly services: StunnelServices;

  constructor(http: any) {
    super(http);
    this.service = new StunnelService(http);
    this.services = new StunnelServices(http);
  }

}