import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class TrafficshaperService extends BaseModule {
  /**
   * Execute flushreload for trafficshaper service
   */
  async flushreload(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/trafficshaper/service/flushreload`, data);
  }

  /**
   * Execute reconfigure for trafficshaper service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/trafficshaper/trafficshaper/service/reconfigure`, data);
  }

  /**
   * Get statistics for trafficshaper service
   */
  async statistics(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trafficshaper/trafficshaper/service/statistics`);
  }
}

export class TrafficshaperSettings extends BaseModule {
  /**
   * Execute add pipe for trafficshaper settings
   */
  async addPipe(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/trafficshaper/settings/add_pipe`, data);
  }

  /**
   * Execute add queue for trafficshaper settings
   */
  async addQueue(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/trafficshaper/settings/add_queue`, data);
  }

  /**
   * Execute add rule for trafficshaper settings
   */
  async addRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/trafficshaper/settings/add_rule`, data);
  }

  /**
   * Execute del pipe for trafficshaper settings
   */
  async delPipe(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/trafficshaper/settings/del_pipe/${uuid}`, data);
  }

  /**
   * Execute del queue for trafficshaper settings
   */
  async delQueue(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/trafficshaper/settings/del_queue/${uuid}`, data);
  }

  /**
   * Execute del rule for trafficshaper settings
   */
  async delRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/trafficshaper/settings/del_rule/${uuid}`, data);
  }

  /**
   * Get get for trafficshaper settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trafficshaper/trafficshaper/settings/get`);
  }

  /**
   * Get get pipe for trafficshaper settings
   */
  async getPipe(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trafficshaper/trafficshaper/settings/get_pipe/${uuid}`);
  }

  /**
   * Get get queue for trafficshaper settings
   */
  async getQueue(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trafficshaper/trafficshaper/settings/get_queue/${uuid}`);
  }

  /**
   * Get get rule for trafficshaper settings
   */
  async getRule(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trafficshaper/trafficshaper/settings/get_rule/${uuid}`);
  }

  /**
   * Execute set for trafficshaper settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/trafficshaper/settings/set`, data);
  }

  /**
   * Execute set pipe for trafficshaper settings
   */
  async setPipe(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/trafficshaper/settings/set_pipe/${uuid}`, data);
  }

  /**
   * Execute set queue for trafficshaper settings
   */
  async setQueue(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/trafficshaper/settings/set_queue/${uuid}`, data);
  }

  /**
   * Execute set rule for trafficshaper settings
   */
  async setRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/trafficshaper/settings/set_rule/${uuid}`, data);
  }

  /**
   * Execute toggle pipe for trafficshaper settings
   */
  async togglePipe(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/trafficshaper/settings/toggle_pipe/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle queue for trafficshaper settings
   */
  async toggleQueue(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/trafficshaper/settings/toggle_queue/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle rule for trafficshaper settings
   */
  async toggleRule(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/trafficshaper/settings/toggle_rule/${uuid}/${enabled}`, data);
  }
}

// Main module class
export class TrafficshaperModule extends BaseModule {
  public readonly service: TrafficshaperService;
  public readonly settings: TrafficshaperSettings;

  constructor(http: any) {
    super(http);
    this.service = new TrafficshaperService(http);
    this.settings = new TrafficshaperSettings(http);
  }

}