import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class ChronyGeneral extends BaseModule {
  /**
   * Get get for chrony general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/chrony/chrony/general/get`);
  }

  /**
   * Execute set for chrony general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/chrony/chrony/general/set`, data);
  }
}

export class ChronyService extends BaseModule {
  /**
   * Get chronyauthdata for chrony service
   */
  async chronyauthdata(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/chrony/chrony/service/chronyauthdata`);
  }

  /**
   * Get chronysources for chrony service
   */
  async chronysources(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/chrony/chrony/service/chronysources`);
  }

  /**
   * Get chronysourcestats for chrony service
   */
  async chronysourcestats(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/chrony/chrony/service/chronysourcestats`);
  }

  /**
   * Get chronytracking for chrony service
   */
  async chronytracking(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/chrony/chrony/service/chronytracking`);
  }

  /**
   * Execute reconfigure for chrony service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/chrony/chrony/service/reconfigure`);
  }

  /**
   * Execute restart for chrony service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/chrony/chrony/service/restart`);
  }

  /**
   * Execute start for chrony service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/chrony/chrony/service/start`);
  }

  /**
   * Get status for chrony service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/chrony/chrony/service/status`);
  }

  /**
   * Execute stop for chrony service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/chrony/chrony/service/stop`);
  }
}

// Main module class
export class ChronyModule extends BaseModule {
  public readonly general: ChronyGeneral;
  public readonly service: ChronyService;

  constructor(http: any) {
    super(http);
    this.general = new ChronyGeneral(http);
    this.service = new ChronyService(http);
  }

}