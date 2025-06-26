import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class NtopngGeneral extends BaseModule {
  /**
   * Get get for ntopng general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ntopng/ntopng/general/get`);
  }

  /**
   * Execute set for ntopng general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ntopng/ntopng/general/set`, data);
  }
}

export class NtopngService extends BaseModule {
  /**
   * Get checkredis for ntopng service
   */
  async checkredis(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ntopng/ntopng/service/checkredis`);
  }

  /**
   * Execute reconfigure for ntopng service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ntopng/ntopng/service/reconfigure`);
  }

  /**
   * Execute restart for ntopng service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ntopng/ntopng/service/restart`);
  }

  /**
   * Execute start for ntopng service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ntopng/ntopng/service/start`);
  }

  /**
   * Get status for ntopng service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/ntopng/ntopng/service/status`);
  }

  /**
   * Execute stop for ntopng service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ntopng/ntopng/service/stop`);
  }
}

// Main module class
export class NtopngModule extends BaseModule {
  public readonly general: NtopngGeneral;
  public readonly service: NtopngService;

  constructor(http: any) {
    super(http);
    this.general = new NtopngGeneral(http);
    this.service = new NtopngService(http);
  }

}