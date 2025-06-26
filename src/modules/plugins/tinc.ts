import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class TincService extends BaseModule {
  /**
   * Execute reconfigure for tinc service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tinc/tinc/service/reconfigure`);
  }

  /**
   * Execute restart for tinc service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tinc/tinc/service/restart`);
  }

  /**
   * Execute start for tinc service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tinc/tinc/service/start`);
  }

  /**
   * Execute stop for tinc service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tinc/tinc/service/stop`);
  }
}

export class TincSettings extends BaseModule {
  /**
   * Execute del host for tinc settings
   */
  async delHost(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tinc/tinc/settings/del_host/${uuid}`, data);
  }

  /**
   * Execute del network for tinc settings
   */
  async delNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tinc/tinc/settings/del_network/${uuid}`, data);
  }

  /**
   * Get get for tinc settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tinc/tinc/settings/get`);
  }

  /**
   * Get get host for tinc settings
   */
  async getHost(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tinc/tinc/settings/get_host/${uuid}`);
  }

  /**
   * Get get network for tinc settings
   */
  async getNetwork(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tinc/tinc/settings/get_network/${uuid}`);
  }

  /**
   * Get search host for tinc settings
   */
  async searchHost(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/tinc/tinc/settings/search_host`);
  }

  /**
   * Get search network for tinc settings
   */
  async searchNetwork(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/tinc/tinc/settings/search_network`);
  }

  /**
   * Execute set for tinc settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tinc/tinc/settings/set`, data);
  }

  /**
   * Execute set host for tinc settings
   */
  async setHost(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tinc/tinc/settings/set_host/${uuid}`, data);
  }

  /**
   * Execute set network for tinc settings
   */
  async setNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tinc/tinc/settings/set_network/${uuid}`, data);
  }

  /**
   * Execute toggle host for tinc settings
   */
  async toggleHost(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tinc/tinc/settings/toggle_host/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle network for tinc settings
   */
  async toggleNetwork(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tinc/tinc/settings/toggle_network/${uuid}/${enabled}`, data);
  }
}

// Main module class
export class TincModule extends BaseModule {
  public readonly service: TincService;
  public readonly settings: TincSettings;

  constructor(http: any) {
    super(http);
    this.service = new TincService(http);
    this.settings = new TincSettings(http);
  }

}