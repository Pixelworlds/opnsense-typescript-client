import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class LldpdGeneral extends BaseModule {
  /**
   * Get get for lldpd general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/lldpd/lldpd/general/get`);
  }

  /**
   * Execute set for lldpd general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/lldpd/lldpd/general/set`, data);
  }
}

export class LldpdService extends BaseModule {
  /**
   * Get neighbor for lldpd service
   */
  async neighbor(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/lldpd/lldpd/service/neighbor`);
  }

  /**
   * Execute reconfigure for lldpd service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/lldpd/lldpd/service/reconfigure`);
  }

  /**
   * Execute restart for lldpd service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/lldpd/lldpd/service/restart`);
  }

  /**
   * Execute start for lldpd service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/lldpd/lldpd/service/start`);
  }

  /**
   * Get status for lldpd service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/lldpd/lldpd/service/status`);
  }

  /**
   * Execute stop for lldpd service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/lldpd/lldpd/service/stop`);
  }
}

// Main module class
export class LldpdModule extends BaseModule {
  public readonly general: LldpdGeneral;
  public readonly service: LldpdService;

  constructor(http: any) {
    super(http);
    this.general = new LldpdGeneral(http);
    this.service = new LldpdService(http);
  }

}