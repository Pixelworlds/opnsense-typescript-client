import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class SoftetherGeneral extends BaseModule {
  /**
   * Get get for softether general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/softether/softether/general/get`);
  }

  /**
   * Execute set for softether general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/softether/softether/general/set`, data);
  }
}

export class SoftetherService extends BaseModule {
  /**
   * Execute reconfigure for softether service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/softether/softether/service/reconfigure`);
  }

  /**
   * Execute restart for softether service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/softether/softether/service/restart`);
  }

  /**
   * Execute start for softether service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/softether/softether/service/start`);
  }

  /**
   * Get status for softether service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/softether/softether/service/status`);
  }

  /**
   * Execute stop for softether service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/softether/softether/service/stop`);
  }
}

// Main module class
export class SoftetherModule extends BaseModule {
  public readonly general: SoftetherGeneral;
  public readonly service: SoftetherService;

  constructor(http: any) {
    super(http);
    this.general = new SoftetherGeneral(http);
    this.service = new SoftetherService(http);
  }

}