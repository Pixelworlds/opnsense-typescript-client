import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class FtpproxyService extends BaseModule {
  /**
   * Get config for ftpproxy service
   */
  async config(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ftpproxy/ftpproxy/service/config`);
  }

  /**
   * Get reload for ftpproxy service
   */
  async reload(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ftpproxy/ftpproxy/service/reload`);
  }

  /**
   * Get restart for ftpproxy service
   */
  async restart(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ftpproxy/ftpproxy/service/restart/${uuid}`);
  }

  /**
   * Get start for ftpproxy service
   */
  async start(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ftpproxy/ftpproxy/service/start/${uuid}`);
  }

  /**
   * Get status for ftpproxy service
   */
  async status(uuid: string): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/ftpproxy/ftpproxy/service/status/${uuid}`);
  }

  /**
   * Get stop for ftpproxy service
   */
  async stop(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ftpproxy/ftpproxy/service/stop/${uuid}`);
  }
}

export class FtpproxySettings extends BaseModule {
  /**
   * Execute add proxy for ftpproxy settings
   */
  async addProxy(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ftpproxy/ftpproxy/settings/add_proxy`, data);
  }

  /**
   * Execute del proxy for ftpproxy settings
   */
  async delProxy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ftpproxy/ftpproxy/settings/del_proxy/${uuid}`, data);
  }

  /**
   * Get get proxy for ftpproxy settings
   */
  async getProxy(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ftpproxy/ftpproxy/settings/get_proxy/${uuid}`);
  }

  /**
   * Get search proxy for ftpproxy settings
   */
  async searchProxy(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/ftpproxy/ftpproxy/settings/search_proxy`);
  }

  /**
   * Execute set proxy for ftpproxy settings
   */
  async setProxy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ftpproxy/ftpproxy/settings/set_proxy/${uuid}`, data);
  }

  /**
   * Execute toggle proxy for ftpproxy settings
   */
  async toggleProxy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ftpproxy/ftpproxy/settings/toggle_proxy/${uuid}`, data);
  }
}

// Main module class
export class FtpproxyModule extends BaseModule {
  public readonly service: FtpproxyService;
  public readonly settings: FtpproxySettings;

  constructor(http: any) {
    super(http);
    this.service = new FtpproxyService(http);
    this.settings = new FtpproxySettings(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/ftpproxy/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/ftpproxy/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/ftpproxy/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/ftpproxy/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/ftpproxy/service/reconfigure');
  }
}