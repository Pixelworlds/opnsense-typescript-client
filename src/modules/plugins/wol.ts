import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class WolWol extends BaseModule {
  /**
   * Execute add host for wol wol
   */
  async addHost(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wol/wol/wol/add_host`, data);
  }

  /**
   * Execute del host for wol wol
   */
  async delHost(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wol/wol/wol/del_host/${uuid}`, data);
  }

  /**
   * Get get for wol wol
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wol/wol/wol/get`);
  }

  /**
   * Get get host for wol wol
   */
  async getHost(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wol/wol/wol/get_host/${uuid}`);
  }

  /**
   * Get getwake for wol wol
   */
  async getwake(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wol/wol/wol/getwake`);
  }

  /**
   * Execute set for wol wol
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wol/wol/wol/set`, data);
  }

  /**
   * Execute set host for wol wol
   */
  async setHost(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wol/wol/wol/set_host/${uuid}`, data);
  }

  /**
   * Execute wakeall for wol wol
   */
  async wakeall(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wol/wol/wol/wakeall`, data);
  }
}

// Main module class
export class WolModule extends BaseModule {
  public readonly wol: WolWol;

  constructor(http: any) {
    super(http);
    this.wol = new WolWol(http);
  }

}