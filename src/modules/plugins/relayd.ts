import type { ApiResponse, ApiResult, SearchResult, ServiceControl, ServiceStatus } from '../../types/common';
import { BaseModule } from '../base';

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
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/relayd/relayd/service/reconfigure`);
  }

  /**
   * Execute restart for relayd service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/relayd/relayd/service/restart`);
  }

  /**
   * Execute start for relayd service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
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
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
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
  override async search<T = any>(path: string, searchParams: Record<string, any> = {}): Promise<ApiResponse<T>> {
    // This module has a different search implementation
    // Use searchByNodeType for the specific functionality
    return super.search<T>(path, searchParams);
  }

  /**
   * Execute search by node type for relayd settings
   */
  async searchByNodeType(nodeType: string, params?: Record<string, any>): Promise<ApiResponse<SearchResult>> {
    return this.http.post(`/api/relayd/relayd/settings/search/${nodeType}`, params);
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
  override async toggle(path: string, uuid: string, enabled?: boolean): Promise<ApiResponse<any>> {
    // This module has a different toggle implementation
    // Use toggleNode for the specific functionality
    return super.toggle(path, uuid, enabled);
  }

  /**
   * Execute toggle node for relayd settings
   */
  async toggleNode(
    nodeType: string,
    uuid: string,
    enabled?: boolean,
    data?: Record<string, any>
  ): Promise<ApiResponse<ApiResult>> {
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
  override async toggle(path: string, uuid: string, enabled?: boolean): Promise<ApiResponse<any>> {
    // This module has a different toggle implementation
    // Use toggleStatus for the specific functionality
    return super.toggle(path, uuid, enabled);
  }

  /**
   * Execute toggle status for relayd status
   */
  async toggleStatus(
    nodeType: string,
    id: string,
    action: string,
    data?: Record<string, any>
  ): Promise<ApiResponse<ApiResult>> {
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
