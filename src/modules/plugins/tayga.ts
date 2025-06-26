import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class TaygaGeneral extends BaseModule {
  /**
   * Get get for tayga general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tayga/tayga/general/get`);
  }

  /**
   * Execute set for tayga general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tayga/tayga/general/set`, data);
  }
}

export class TaygaService extends BaseModule {
  /**
   * Execute reconfigure for tayga service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tayga/tayga/service/reconfigure`);
  }

  /**
   * Execute restart for tayga service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tayga/tayga/service/restart`);
  }

  /**
   * Execute start for tayga service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tayga/tayga/service/start`);
  }

  /**
   * Get status for tayga service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/tayga/tayga/service/status`);
  }

  /**
   * Execute stop for tayga service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tayga/tayga/service/stop`);
  }
}

// Main module class
export class TaygaModule extends BaseModule {
  public readonly general: TaygaGeneral;
  public readonly service: TaygaService;

  constructor(http: any) {
    super(http);
    this.general = new TaygaGeneral(http);
    this.service = new TaygaService(http);
  }

}