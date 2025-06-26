import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class SyslogService extends BaseModule {
  /**
   * Execute reconfigure for syslog service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/syslog/syslog/service/reconfigure`, data);
  }

  /**
   * Execute reset for syslog service
   */
  async reset(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/syslog/syslog/service/reset`, data);
  }

  /**
   * Execute restart for syslog service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/syslog/syslog/service/restart`, data);
  }

  /**
   * Execute start for syslog service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/syslog/syslog/service/start`, data);
  }

  /**
   * Get stats for syslog service
   */
  async stats(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/syslog/syslog/service/stats`);
  }

  /**
   * Get status for syslog service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/syslog/syslog/service/status`);
  }

  /**
   * Execute stop for syslog service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/syslog/syslog/service/stop`, data);
  }
}

export class SyslogSettings extends BaseModule {
  /**
   * Execute add destination for syslog settings
   */
  async addDestination(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/syslog/syslog/settings/add_destination`, data);
  }

  /**
   * Execute del destination for syslog settings
   */
  async delDestination(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/syslog/syslog/settings/del_destination/${uuid}`, data);
  }

  /**
   * Get get for syslog settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/syslog/syslog/settings/get`);
  }

  /**
   * Get get destination for syslog settings
   */
  async getDestination(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/syslog/syslog/settings/get_destination/${uuid}`);
  }

  /**
   * Execute set for syslog settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/syslog/syslog/settings/set`, data);
  }

  /**
   * Execute set destination for syslog settings
   */
  async setDestination(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/syslog/syslog/settings/set_destination/${uuid}`, data);
  }

  /**
   * Execute toggle destination for syslog settings
   */
  async toggleDestination(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/syslog/syslog/settings/toggle_destination/${uuid}/${enabled}`, data);
  }
}

// Main module class
export class SyslogModule extends BaseModule {
  public readonly service: SyslogService;
  public readonly settings: SyslogSettings;

  constructor(http: any) {
    super(http);
    this.service = new SyslogService(http);
    this.settings = new SyslogSettings(http);
  }

}