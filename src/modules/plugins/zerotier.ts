import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class ZerotierNetwork extends BaseModule {
  /**
   * Execute add for zerotier network
   */
  async add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zerotier/zerotier/network/add`, data);
  }

  /**
   * Execute del for zerotier network
   */
  async del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zerotier/zerotier/network/del/${uuid}`, data);
  }

  /**
   * Get get for zerotier network
   */
  async get(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/zerotier/zerotier/network/get/${uuid}`);
  }

  /**
   * Get info for zerotier network
   */
  async info(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/zerotier/zerotier/network/info/${uuid}`);
  }

  /**
   * Get search for zerotier network
   */
  async search(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/zerotier/zerotier/network/search`);
  }

  /**
   * Execute set for zerotier network
   */
  async set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zerotier/zerotier/network/set/${uuid}`, data);
  }

  /**
   * Execute toggle for zerotier network
   */
  async toggle(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zerotier/zerotier/network/toggle/${uuid}`, data);
  }
}

export class ZerotierSettings extends BaseModule {
  /**
   * Get get for zerotier settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/zerotier/zerotier/settings/get`);
  }

  /**
   * Execute set for zerotier settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zerotier/zerotier/settings/set`, data);
  }

  /**
   * Get status for zerotier settings
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/zerotier/zerotier/settings/status`);
  }
}

// Main module class
export class ZerotierModule extends BaseModule {
  public readonly network: ZerotierNetwork;
  public readonly settings: ZerotierSettings;

  constructor(http: any) {
    super(http);
    this.network = new ZerotierNetwork(http);
    this.settings = new ZerotierSettings(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/zerotier/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/zerotier/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/zerotier/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/zerotier/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/zerotier/service/reconfigure');
  }
}