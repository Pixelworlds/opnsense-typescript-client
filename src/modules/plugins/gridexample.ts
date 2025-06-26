import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class GridexampleSettings extends BaseModule {
  /**
   * Execute add item for gridexample settings
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/gridexample/gridexample/settings/add_item`, data);
  }

  /**
   * Execute del item for gridexample settings
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/gridexample/gridexample/settings/del_item/${uuid}`, data);
  }

  /**
   * Get get for gridexample settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/gridexample/gridexample/settings/get`);
  }

  /**
   * Get get item for gridexample settings
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/gridexample/gridexample/settings/get_item/${uuid}`);
  }

  /**
   * Execute set for gridexample settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/gridexample/gridexample/settings/set`, data);
  }

  /**
   * Execute set item for gridexample settings
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/gridexample/gridexample/settings/set_item/${uuid}`, data);
  }

  /**
   * Execute toggle item for gridexample settings
   */
  async toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/gridexample/gridexample/settings/toggle_item/${uuid}/${enabled}`, data);
  }
}

// Main module class
export class GridexampleModule extends BaseModule {
  public readonly settings: GridexampleSettings;

  constructor(http: any) {
    super(http);
    this.settings = new GridexampleSettings(http);
  }

}