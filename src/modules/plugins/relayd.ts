import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class RelaydService extends BaseModule {
  /**
   * Execute configtest for relayd service
   */
  async configtest(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/relayd/relayd/service/configtest`, data);
  }

  /**
   * Execute reconfigure for relayd service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/relayd/relayd/service/reconfigure`);
  }

  /**
   * Execute restart for relayd service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/relayd/relayd/service/restart`);
  }

  /**
   * Execute start for relayd service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/relayd/relayd/service/start`);
  }

  /**
   * Get status for relayd service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/relayd/relayd/service/status`);
  }

  /**
   * Execute stop for relayd service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/relayd/relayd/service/stop`);
  }
}

export class RelaydSettings extends BaseModule {
  /**
   * Get del for relayd settings
   */
  async del(nodeType: string, uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/relayd/relayd/settings/del/${nodeType}/${uuid}`);
  }

  /**
   * Get dirty for relayd settings
   */
  async dirty(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/relayd/relayd/settings/dirty`);
  }

  /**
   * Get get for relayd settings
   */
  async get(nodeType: string, uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/relayd/relayd/settings/get/${nodeType}/${uuid}`);
  }

  /**
   * Execute search for relayd settings
   */
  async search(nodeType: string, params?: Record<string, any>): Promise<ApiResponse<SearchResult>> {
    return this.http.post(`/api/relayd/relayd/settings/search/${nodeType}`, data);
  }

  /**
   * Execute set for relayd settings
   */
  async set(nodeType: string, uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/relayd/relayd/settings/set/${nodeType}/${uuid}`, data);
  }

  /**
   * Execute toggle for relayd settings
   */
  async toggle(nodeType: string, uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/relayd/relayd/settings/toggle/${nodeType}/${uuid}/${enabled}`, data);
  }
}

export class RelaydStatus extends BaseModule {
  /**
   * Get sum for relayd status
   */
  async sum(wait: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/relayd/relayd/status/sum/${wait}`);
  }

  /**
   * Execute toggle for relayd status
   */
  async toggle(nodeType: string, id: string, action: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/relayd/relayd/status/toggle/${nodeType}/${id}/${action}`, data);
  }
}

// Main module class
export class RelaydModule extends BaseModule {
  public readonly service: RelaydService;
  public readonly settings: RelaydSettings;
  public readonly status: RelaydStatus;

  constructor(http: any) {
    super(http);
    this.service = new RelaydService(http);
    this.settings = new RelaydSettings(http);
    this.status = new RelaydStatus(http);
  }

}