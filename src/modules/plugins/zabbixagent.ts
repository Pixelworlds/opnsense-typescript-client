import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class ZabbixagentService extends BaseModule {
  /**
   * Execute reconfigure for zabbixagent service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/zabbixagent/zabbixagent/service/reconfigure`);
  }

  /**
   * Execute restart for zabbixagent service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/zabbixagent/zabbixagent/service/restart`);
  }

  /**
   * Execute start for zabbixagent service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/zabbixagent/zabbixagent/service/start`);
  }

  /**
   * Get status for zabbixagent service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/zabbixagent/zabbixagent/service/status`);
  }

  /**
   * Execute stop for zabbixagent service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/zabbixagent/zabbixagent/service/stop`);
  }
}

export class ZabbixagentSettings extends BaseModule {
  /**
   * Execute add alias for zabbixagent settings
   */
  async addAlias(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zabbixagent/zabbixagent/settings/add_alias`, data);
  }

  /**
   * Execute add userparameter for zabbixagent settings
   */
  async addUserparameter(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zabbixagent/zabbixagent/settings/add_userparameter`, data);
  }

  /**
   * Execute del alias for zabbixagent settings
   */
  async delAlias(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zabbixagent/zabbixagent/settings/del_alias/${uuid}`, data);
  }

  /**
   * Execute del userparameter for zabbixagent settings
   */
  async delUserparameter(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zabbixagent/zabbixagent/settings/del_userparameter/${uuid}`, data);
  }

  /**
   * Get get for zabbixagent settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/zabbixagent/zabbixagent/settings/get`);
  }

  /**
   * Get get alias for zabbixagent settings
   */
  async getAlias(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/zabbixagent/zabbixagent/settings/get_alias/${uuid}`);
  }

  /**
   * Get get userparameter for zabbixagent settings
   */
  async getUserparameter(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/zabbixagent/zabbixagent/settings/get_userparameter/${uuid}`);
  }

  /**
   * Execute set for zabbixagent settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zabbixagent/zabbixagent/settings/set`, data);
  }

  /**
   * Execute set alias for zabbixagent settings
   */
  async setAlias(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zabbixagent/zabbixagent/settings/set_alias/${uuid}`, data);
  }

  /**
   * Execute set userparameter for zabbixagent settings
   */
  async setUserparameter(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zabbixagent/zabbixagent/settings/set_userparameter/${uuid}`, data);
  }

  /**
   * Execute toggle alias for zabbixagent settings
   */
  async toggleAlias(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zabbixagent/zabbixagent/settings/toggle_alias/${uuid}`, data);
  }

  /**
   * Execute toggle userparameter for zabbixagent settings
   */
  async toggleUserparameter(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zabbixagent/zabbixagent/settings/toggle_userparameter/${uuid}`, data);
  }
}

// Main module class
export class ZabbixagentModule extends BaseModule {
  public readonly service: ZabbixagentService;
  public readonly settings: ZabbixagentSettings;

  constructor(http: any) {
    super(http);
    this.service = new ZabbixagentService(http);
    this.settings = new ZabbixagentSettings(http);
  }

}