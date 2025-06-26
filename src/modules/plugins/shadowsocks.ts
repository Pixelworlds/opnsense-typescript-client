import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class ShadowsocksGeneral extends BaseModule {
  /**
   * Get get for shadowsocks general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/shadowsocks/shadowsocks/general/get`);
  }

  /**
   * Execute set for shadowsocks general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/shadowsocks/shadowsocks/general/set`, data);
  }
}

export class ShadowsocksLocal extends BaseModule {
  /**
   * Get get for shadowsocks local
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/shadowsocks/shadowsocks/local/get`);
  }

  /**
   * Execute set for shadowsocks local
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/shadowsocks/shadowsocks/local/set`, data);
  }
}

export class ShadowsocksLocalservice extends BaseModule {
  /**
   * Execute reconfigure for shadowsocks localservice
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/shadowsocks/shadowsocks/localservice/reconfigure`);
  }

  /**
   * Execute restart for shadowsocks localservice
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/shadowsocks/shadowsocks/localservice/restart`);
  }

  /**
   * Execute start for shadowsocks localservice
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/shadowsocks/shadowsocks/localservice/start`);
  }

  /**
   * Get status for shadowsocks localservice
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/shadowsocks/shadowsocks/localservice/status`);
  }

  /**
   * Execute stop for shadowsocks localservice
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/shadowsocks/shadowsocks/localservice/stop`);
  }
}

export class ShadowsocksService extends BaseModule {
  /**
   * Execute reconfigure for shadowsocks service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/shadowsocks/shadowsocks/service/reconfigure`);
  }

  /**
   * Execute restart for shadowsocks service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/shadowsocks/shadowsocks/service/restart`);
  }

  /**
   * Execute start for shadowsocks service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/shadowsocks/shadowsocks/service/start`);
  }

  /**
   * Get status for shadowsocks service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/shadowsocks/shadowsocks/service/status`);
  }

  /**
   * Execute stop for shadowsocks service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/shadowsocks/shadowsocks/service/stop`);
  }
}

// Main module class
export class ShadowsocksModule extends BaseModule {
  public readonly general: ShadowsocksGeneral;
  public readonly local: ShadowsocksLocal;
  public readonly localservice: ShadowsocksLocalservice;
  public readonly service: ShadowsocksService;

  constructor(http: any) {
    super(http);
    this.general = new ShadowsocksGeneral(http);
    this.local = new ShadowsocksLocal(http);
    this.localservice = new ShadowsocksLocalservice(http);
    this.service = new ShadowsocksService(http);
  }

}