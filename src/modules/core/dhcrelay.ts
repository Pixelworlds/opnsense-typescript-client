import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class DhcrelayService extends BaseModule {
  /**
   * Execute reconfigure for dhcrelay service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dhcrelay/dhcrelay/service/reconfigure`, data);
  }
}

export class DhcrelaySettings extends BaseModule {
  /**
   * Execute add dest for dhcrelay settings
   */
  async addDest(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcrelay/dhcrelay/settings/add_dest`, data);
  }

  /**
   * Execute add relay for dhcrelay settings
   */
  async addRelay(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcrelay/dhcrelay/settings/add_relay`, data);
  }

  /**
   * Execute del dest for dhcrelay settings
   */
  async delDest(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcrelay/dhcrelay/settings/del_dest/${uuid}`, data);
  }

  /**
   * Execute del relay for dhcrelay settings
   */
  async delRelay(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcrelay/dhcrelay/settings/del_relay/${uuid}`, data);
  }

  /**
   * Get get for dhcrelay settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dhcrelay/dhcrelay/settings/get`);
  }

  /**
   * Get get dest for dhcrelay settings
   */
  async getDest(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dhcrelay/dhcrelay/settings/get_dest/${uuid}`);
  }

  /**
   * Get get relay for dhcrelay settings
   */
  async getRelay(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dhcrelay/dhcrelay/settings/get_relay/${uuid}`);
  }

  /**
   * Execute set for dhcrelay settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcrelay/dhcrelay/settings/set`, data);
  }

  /**
   * Execute set dest for dhcrelay settings
   */
  async setDest(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcrelay/dhcrelay/settings/set_dest/${uuid}`, data);
  }

  /**
   * Execute set relay for dhcrelay settings
   */
  async setRelay(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcrelay/dhcrelay/settings/set_relay/${uuid}`, data);
  }

  /**
   * Execute toggle relay for dhcrelay settings
   */
  async toggleRelay(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcrelay/dhcrelay/settings/toggle_relay/${uuid}/${enabled}`, data);
  }
}

// Main module class
export class DhcrelayModule extends BaseModule {
  public readonly service: DhcrelayService;
  public readonly settings: DhcrelaySettings;

  constructor(http: any) {
    super(http);
    this.service = new DhcrelayService(http);
    this.settings = new DhcrelaySettings(http);
  }

}