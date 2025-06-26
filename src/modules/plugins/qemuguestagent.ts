import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class QemuguestagentService extends BaseModule {
  /**
   * Execute reconfigure for qemuguestagent service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/qemuguestagent/qemuguestagent/service/reconfigure`);
  }

  /**
   * Execute restart for qemuguestagent service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/qemuguestagent/qemuguestagent/service/restart`);
  }

  /**
   * Execute start for qemuguestagent service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/qemuguestagent/qemuguestagent/service/start`);
  }

  /**
   * Get status for qemuguestagent service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/qemuguestagent/qemuguestagent/service/status`);
  }

  /**
   * Execute stop for qemuguestagent service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/qemuguestagent/qemuguestagent/service/stop`);
  }
}

export class QemuguestagentSettings extends BaseModule {
  /**
   * Get get for qemuguestagent settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/qemuguestagent/qemuguestagent/settings/get`);
  }

  /**
   * Execute set for qemuguestagent settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/qemuguestagent/qemuguestagent/settings/set`, data);
  }
}

// Main module class
export class QemuguestagentModule extends BaseModule {
  public readonly service: QemuguestagentService;
  public readonly settings: QemuguestagentSettings;

  constructor(http: any) {
    super(http);
    this.service = new QemuguestagentService(http);
    this.settings = new QemuguestagentSettings(http);
  }

}