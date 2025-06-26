import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class NetdataGeneral extends BaseModule {
  /**
   * Get get for netdata general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/netdata/netdata/general/get`);
  }

  /**
   * Execute set for netdata general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/netdata/netdata/general/set`, data);
  }
}

export class NetdataService extends BaseModule {
  /**
   * Execute reconfigure for netdata service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/netdata/netdata/service/reconfigure`);
  }

  /**
   * Execute restart for netdata service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/netdata/netdata/service/restart`);
  }

  /**
   * Execute start for netdata service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/netdata/netdata/service/start`);
  }

  /**
   * Get status for netdata service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/netdata/netdata/service/status`);
  }

  /**
   * Execute stop for netdata service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/netdata/netdata/service/stop`);
  }
}

// Main module class
export class NetdataModule extends BaseModule {
  public readonly general: NetdataGeneral;
  public readonly service: NetdataService;

  constructor(http: any) {
    super(http);
    this.general = new NetdataGeneral(http);
    this.service = new NetdataService(http);
  }

}