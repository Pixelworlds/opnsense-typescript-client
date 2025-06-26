import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class DyndnsAccounts extends BaseModule {
  /**
   * Execute add item for dyndns accounts
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dyndns/dyndns/accounts/add_item`, data);
  }

  /**
   * Execute del item for dyndns accounts
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dyndns/dyndns/accounts/del_item/${uuid}`, data);
  }

  /**
   * Get get for dyndns accounts
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dyndns/dyndns/accounts/get`);
  }

  /**
   * Get get item for dyndns accounts
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dyndns/dyndns/accounts/get_item/${uuid}`);
  }

  /**
   * Execute set for dyndns accounts
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dyndns/dyndns/accounts/set`, data);
  }

  /**
   * Execute set item for dyndns accounts
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dyndns/dyndns/accounts/set_item/${uuid}`, data);
  }

  /**
   * Execute toggle item for dyndns accounts
   */
  async toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dyndns/dyndns/accounts/toggle_item/${uuid}/${enabled}`, data);
  }
}

export class DyndnsService extends BaseModule {
  /**
   * Execute reconfigure for dyndns service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dyndns/dyndns/service/reconfigure`);
  }

  /**
   * Execute restart for dyndns service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dyndns/dyndns/service/restart`);
  }

  /**
   * Execute start for dyndns service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dyndns/dyndns/service/start`);
  }

  /**
   * Get status for dyndns service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/dyndns/dyndns/service/status`);
  }

  /**
   * Execute stop for dyndns service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dyndns/dyndns/service/stop`);
  }
}

export class DyndnsSettings extends BaseModule {
  /**
   * Get get for dyndns settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dyndns/dyndns/settings/get`);
  }

  /**
   * Execute set for dyndns settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dyndns/dyndns/settings/set`, data);
  }
}

// Main module class
export class DyndnsModule extends BaseModule {
  public readonly accounts: DyndnsAccounts;
  public readonly service: DyndnsService;
  public readonly settings: DyndnsSettings;

  constructor(http: any) {
    super(http);
    this.accounts = new DyndnsAccounts(http);
    this.service = new DyndnsService(http);
    this.settings = new DyndnsSettings(http);
  }

}