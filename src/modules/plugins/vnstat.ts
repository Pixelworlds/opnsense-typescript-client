import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class VnstatGeneral extends BaseModule {
  /**
   * Get get for vnstat general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/vnstat/vnstat/general/get`);
  }

  /**
   * Execute set for vnstat general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/vnstat/vnstat/general/set`, data);
  }
}

export class VnstatService extends BaseModule {
  /**
   * Get daily for vnstat service
   */
  async daily(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/vnstat/vnstat/service/daily`);
  }

  /**
   * Get hourly for vnstat service
   */
  async hourly(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/vnstat/vnstat/service/hourly`);
  }

  /**
   * Get monthly for vnstat service
   */
  async monthly(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/vnstat/vnstat/service/monthly`);
  }

  /**
   * Execute reconfigure for vnstat service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/vnstat/vnstat/service/reconfigure`);
  }

  /**
   * Get resetdb for vnstat service
   */
  async resetdb(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/vnstat/vnstat/service/resetdb`);
  }

  /**
   * Execute restart for vnstat service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/vnstat/vnstat/service/restart`);
  }

  /**
   * Execute start for vnstat service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/vnstat/vnstat/service/start`);
  }

  /**
   * Get status for vnstat service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/vnstat/vnstat/service/status`);
  }

  /**
   * Execute stop for vnstat service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/vnstat/vnstat/service/stop`);
  }

  /**
   * Get yearly for vnstat service
   */
  async yearly(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/vnstat/vnstat/service/yearly`);
  }
}

// Main module class
export class VnstatModule extends BaseModule {
  public readonly general: VnstatGeneral;
  public readonly service: VnstatService;

  constructor(http: any) {
    super(http);
    this.general = new VnstatGeneral(http);
    this.service = new VnstatService(http);
  }

}