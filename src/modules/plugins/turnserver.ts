import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class TurnserverService extends BaseModule {
  /**
   * Execute reconfigure for turnserver service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/turnserver/turnserver/service/reconfigure`);
  }

  /**
   * Execute restart for turnserver service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/turnserver/turnserver/service/restart`);
  }

  /**
   * Execute start for turnserver service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/turnserver/turnserver/service/start`);
  }

  /**
   * Get status for turnserver service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/turnserver/turnserver/service/status`);
  }

  /**
   * Execute stop for turnserver service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/turnserver/turnserver/service/stop`);
  }
}

export class TurnserverSettings extends BaseModule {
  /**
   * Get get for turnserver settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/turnserver/turnserver/settings/get`);
  }

  /**
   * Execute set for turnserver settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/turnserver/turnserver/settings/set`, data);
  }
}

// Main module class
export class TurnserverModule extends BaseModule {
  public readonly service: TurnserverService;
  public readonly settings: TurnserverSettings;

  constructor(http: any) {
    super(http);
    this.service = new TurnserverService(http);
    this.settings = new TurnserverSettings(http);
  }

}