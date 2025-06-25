import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class OpenconnectGeneral extends BaseModule {
  /**
   * Get get for openconnect general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/openconnect/openconnect/general/get`);
  }

  /**
   * Execute set for openconnect general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openconnect/openconnect/general/set`, data);
  }
}

export class OpenconnectService extends BaseModule {
  /**
   * Execute reconfigure for openconnect service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/openconnect/openconnect/service/reconfigure`);
  }

  /**
   * Execute restart for openconnect service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/openconnect/openconnect/service/restart`);
  }

  /**
   * Execute start for openconnect service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/openconnect/openconnect/service/start`);
  }

  /**
   * Get status for openconnect service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/openconnect/openconnect/service/status`);
  }

  /**
   * Execute stop for openconnect service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/openconnect/openconnect/service/stop`);
  }
}

// Main module class
export class OpenconnectModule extends BaseModule {
  public readonly general: OpenconnectGeneral;
  public readonly service: OpenconnectService;

  constructor(http: any) {
    super(http);
    this.general = new OpenconnectGeneral(http);
    this.service = new OpenconnectService(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/openconnect/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/openconnect/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/openconnect/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/openconnect/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/openconnect/service/reconfigure');
  }
}