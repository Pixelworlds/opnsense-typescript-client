import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class SslhService extends BaseModule {
  /**
   * Execute reconfigure for sslh service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/sslh/sslh/service/reconfigure`);
  }

  /**
   * Execute restart for sslh service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/sslh/sslh/service/restart`);
  }

  /**
   * Execute start for sslh service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/sslh/sslh/service/start`);
  }

  /**
   * Get status for sslh service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/sslh/sslh/service/status`);
  }

  /**
   * Execute stop for sslh service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/sslh/sslh/service/stop`);
  }
}

export class SslhSettings extends BaseModule {
  /**
   * Get get for sslh settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/sslh/sslh/settings/get`);
  }

  /**
   * Get index for sslh settings
   */
  async index(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/sslh/sslh/settings/index`);
  }

  /**
   * Execute set for sslh settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/sslh/sslh/settings/set`, data);
  }
}

// Main module class
export class SslhModule extends BaseModule {
  public readonly service: SslhService;
  public readonly settings: SslhSettings;

  constructor(http: any) {
    super(http);
    this.service = new SslhService(http);
    this.settings = new SslhSettings(http);
  }

}