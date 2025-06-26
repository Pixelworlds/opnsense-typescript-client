import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class RoutingSettings extends BaseModule {
  /**
   * Execute add gateway for routing settings
   */
  async addGateway(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routing/routing/settings/add_gateway`, data);
  }

  /**
   * Execute del gateway for routing settings
   */
  async delGateway(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routing/routing/settings/del_gateway/${uuid}`, data);
  }

  /**
   * Get get for routing settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/routing/routing/settings/get`);
  }

  /**
   * Get get gateway for routing settings
   */
  async getGateway(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/routing/routing/settings/get_gateway/${uuid}`);
  }

  /**
   * Execute reconfigure for routing settings
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/routing/routing/settings/reconfigure`, data);
  }

  /**
   * Get search gateway for routing settings
   */
  async searchGateway(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/routing/routing/settings/search_gateway`);
  }

  /**
   * Execute set for routing settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routing/routing/settings/set`, data);
  }

  /**
   * Execute set gateway for routing settings
   */
  async setGateway(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routing/routing/settings/set_gateway/${uuid}`, data);
  }

  /**
   * Execute toggle gateway for routing settings
   */
  async toggleGateway(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routing/routing/settings/toggle_gateway/${uuid}/${enabled}`, data);
  }
}

// Main module class
export class RoutingModule extends BaseModule {
  public readonly settings: RoutingSettings;

  constructor(http: any) {
    super(http);
    this.settings = new RoutingSettings(http);
  }

}