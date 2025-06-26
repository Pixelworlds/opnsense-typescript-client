import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class TftpGeneral extends BaseModule {
  /**
   * Get get for tftp general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tftp/tftp/general/get`);
  }

  /**
   * Execute set for tftp general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tftp/tftp/general/set`, data);
  }
}

export class TftpService extends BaseModule {
  /**
   * Execute reconfigure for tftp service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tftp/tftp/service/reconfigure`);
  }

  /**
   * Execute restart for tftp service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tftp/tftp/service/restart`);
  }

  /**
   * Execute start for tftp service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tftp/tftp/service/start`);
  }

  /**
   * Get status for tftp service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/tftp/tftp/service/status`);
  }

  /**
   * Execute stop for tftp service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tftp/tftp/service/stop`);
  }
}

// Main module class
export class TftpModule extends BaseModule {
  public readonly general: TftpGeneral;
  public readonly service: TftpService;

  constructor(http: any) {
    super(http);
    this.general = new TftpGeneral(http);
    this.service = new TftpService(http);
  }

}