import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class RedisService extends BaseModule {
  /**
   * Execute reconfigure for redis service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/redis/redis/service/reconfigure`);
  }

  /**
   * Get resetdb for redis service
   */
  async resetdb(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/redis/redis/service/resetdb`);
  }

  /**
   * Execute restart for redis service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/redis/redis/service/restart`);
  }

  /**
   * Execute start for redis service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/redis/redis/service/start`);
  }

  /**
   * Get status for redis service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/redis/redis/service/status`);
  }

  /**
   * Execute stop for redis service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/redis/redis/service/stop`);
  }
}

export class RedisSettings extends BaseModule {
  /**
   * Get get for redis settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/redis/redis/settings/get`);
  }

  /**
   * Execute set for redis settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/redis/redis/settings/set`, data);
  }
}

// Main module class
export class RedisModule extends BaseModule {
  public readonly service: RedisService;
  public readonly settings: RedisSettings;

  constructor(http: any) {
    super(http);
    this.service = new RedisService(http);
    this.settings = new RedisSettings(http);
  }

}