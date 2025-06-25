import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class RspamdService extends BaseModule {
  /**
   * Execute reconfigure for rspamd service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/rspamd/rspamd/service/reconfigure`);
  }

  /**
   * Execute restart for rspamd service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/rspamd/rspamd/service/restart`);
  }

  /**
   * Execute start for rspamd service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/rspamd/rspamd/service/start`);
  }

  /**
   * Get status for rspamd service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/rspamd/rspamd/service/status`);
  }

  /**
   * Execute stop for rspamd service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/rspamd/rspamd/service/stop`);
  }
}

export class RspamdSettings extends BaseModule {
  /**
   * Get get for rspamd settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/rspamd/rspamd/settings/get`);
  }

  /**
   * Execute set for rspamd settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/rspamd/rspamd/settings/set`, data);
  }
}

// Main module class
export class RspamdModule extends BaseModule {
  public readonly service: RspamdService;
  public readonly settings: RspamdSettings;

  constructor(http: any) {
    super(http);
    this.service = new RspamdService(http);
    this.settings = new RspamdSettings(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/rspamd/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/rspamd/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/rspamd/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/rspamd/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/rspamd/service/reconfigure');
  }
}