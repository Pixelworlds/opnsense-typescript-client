import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class ApcupsdService extends BaseModule {
  /**
   * Get get ups status for apcupsd service
   */
  async getUpsStatus(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/apcupsd/apcupsd/service/get_ups_status`);
  }

  /**
   * Execute reconfigure for apcupsd service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/apcupsd/apcupsd/service/reconfigure`);
  }

  /**
   * Execute restart for apcupsd service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/apcupsd/apcupsd/service/restart`);
  }

  /**
   * Execute start for apcupsd service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/apcupsd/apcupsd/service/start`);
  }

  /**
   * Get status for apcupsd service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/apcupsd/apcupsd/service/status`);
  }

  /**
   * Execute stop for apcupsd service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/apcupsd/apcupsd/service/stop`);
  }
}

export class ApcupsdSettings extends BaseModule {
  /**
   * Get get for apcupsd settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/apcupsd/apcupsd/settings/get`);
  }

  /**
   * Execute set for apcupsd settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/apcupsd/apcupsd/settings/set`, data);
  }
}

// Main module class
export class ApcupsdModule extends BaseModule {
  public readonly service: ApcupsdService;
  public readonly settings: ApcupsdSettings;

  constructor(http: any) {
    super(http);
    this.service = new ApcupsdService(http);
    this.settings = new ApcupsdSettings(http);
  }

}