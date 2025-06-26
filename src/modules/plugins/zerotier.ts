import type { ApiResponse, ApiResult, ServiceStatus } from '../../types/common';
import { BaseModule } from '../base';

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
  override async search<T = any>(path?: string, searchParams: Record<string, any> = {}): Promise<ApiResponse<T>> {
    return super.search<T>(path || '/api/zerotier/zerotier/network/search', searchParams);
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
  override async toggle(path: string, uuid: string, enabled?: boolean): Promise<ApiResponse<any>> {
    // This module has a different toggle implementation that doesn't use enabled parameter
    // Use toggleNetwork for the specific functionality
    return this.toggleNetwork(uuid);
  }

  /**
   * Execute toggle network for zerotier network
   */
  async toggleNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
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
}
