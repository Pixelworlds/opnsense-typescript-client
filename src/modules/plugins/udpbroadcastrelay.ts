import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class UdpbroadcastrelayService extends BaseModule {
  /**
   * Get config for udpbroadcastrelay service
   */
  async config(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/udpbroadcastrelay/udpbroadcastrelay/service/config`);
  }

  /**
   * Get get for udpbroadcastrelay service
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/udpbroadcastrelay/udpbroadcastrelay/service/get`);
  }

  /**
   * Get reload for udpbroadcastrelay service
   */
  async reload(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/udpbroadcastrelay/udpbroadcastrelay/service/reload`);
  }

  /**
   * Get restart for udpbroadcastrelay service
   */
  async restart(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/udpbroadcastrelay/udpbroadcastrelay/service/restart/${uuid}`);
  }

  /**
   * Execute set for udpbroadcastrelay service
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/udpbroadcastrelay/udpbroadcastrelay/service/set`, data);
  }

  /**
   * Get start for udpbroadcastrelay service
   */
  async start(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/udpbroadcastrelay/udpbroadcastrelay/service/start/${uuid}`);
  }

  /**
   * Get status for udpbroadcastrelay service
   */
  async status(uuid: string): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/udpbroadcastrelay/udpbroadcastrelay/service/status/${uuid}`);
  }

  /**
   * Get stop for udpbroadcastrelay service
   */
  async stop(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/udpbroadcastrelay/udpbroadcastrelay/service/stop/${uuid}`);
  }
}

export class UdpbroadcastrelaySettings extends BaseModule {
  /**
   * Execute add relay for udpbroadcastrelay settings
   */
  async addRelay(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/udpbroadcastrelay/udpbroadcastrelay/settings/add_relay`, data);
  }

  /**
   * Execute del relay for udpbroadcastrelay settings
   */
  async delRelay(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/udpbroadcastrelay/udpbroadcastrelay/settings/del_relay/${uuid}`, data);
  }

  /**
   * Get get for udpbroadcastrelay settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/udpbroadcastrelay/udpbroadcastrelay/settings/get`);
  }

  /**
   * Get get relay for udpbroadcastrelay settings
   */
  async getRelay(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/udpbroadcastrelay/udpbroadcastrelay/settings/get_relay/${uuid}`);
  }

  /**
   * Get search relay for udpbroadcastrelay settings
   */
  async searchRelay(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/udpbroadcastrelay/udpbroadcastrelay/settings/search_relay`);
  }

  /**
   * Execute set for udpbroadcastrelay settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/udpbroadcastrelay/udpbroadcastrelay/settings/set`, data);
  }

  /**
   * Execute set relay for udpbroadcastrelay settings
   */
  async setRelay(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/udpbroadcastrelay/udpbroadcastrelay/settings/set_relay/${uuid}`, data);
  }

  /**
   * Execute toggle relay for udpbroadcastrelay settings
   */
  async toggleRelay(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/udpbroadcastrelay/udpbroadcastrelay/settings/toggle_relay/${uuid}`, data);
  }
}

// Main module class
export class UdpbroadcastrelayModule extends BaseModule {
  public readonly service: UdpbroadcastrelayService;
  public readonly settings: UdpbroadcastrelaySettings;

  constructor(http: any) {
    super(http);
    this.service = new UdpbroadcastrelayService(http);
    this.settings = new UdpbroadcastrelaySettings(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/udpbroadcastrelay/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/udpbroadcastrelay/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/udpbroadcastrelay/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/udpbroadcastrelay/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/udpbroadcastrelay/service/reconfigure');
  }
}