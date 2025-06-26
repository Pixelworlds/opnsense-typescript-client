import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class CicapAntivirus extends BaseModule {
  /**
   * Get get for cicap antivirus
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/cicap/cicap/antivirus/get`);
  }

  /**
   * Execute set for cicap antivirus
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/cicap/cicap/antivirus/set`, data);
  }
}

export class CicapGeneral extends BaseModule {
  /**
   * Get get for cicap general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/cicap/cicap/general/get`);
  }

  /**
   * Execute set for cicap general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/cicap/cicap/general/set`, data);
  }
}

export class CicapService extends BaseModule {
  /**
   * Get checkclamav for cicap service
   */
  async checkclamav(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/cicap/cicap/service/checkclamav`);
  }

  /**
   * Execute reconfigure for cicap service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/cicap/cicap/service/reconfigure`);
  }

  /**
   * Execute restart for cicap service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/cicap/cicap/service/restart`);
  }

  /**
   * Execute start for cicap service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/cicap/cicap/service/start`);
  }

  /**
   * Get status for cicap service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/cicap/cicap/service/status`);
  }

  /**
   * Execute stop for cicap service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/cicap/cicap/service/stop`);
  }
}

// Main module class
export class CicapModule extends BaseModule {
  public readonly antivirus: CicapAntivirus;
  public readonly general: CicapGeneral;
  public readonly service: CicapService;

  constructor(http: any) {
    super(http);
    this.antivirus = new CicapAntivirus(http);
    this.general = new CicapGeneral(http);
    this.service = new CicapService(http);
  }

}