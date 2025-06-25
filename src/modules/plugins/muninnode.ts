import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class MuninnodeGeneral extends BaseModule {
  /**
   * Get get for muninnode general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/muninnode/muninnode/general/get`);
  }

  /**
   * Execute set for muninnode general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/muninnode/muninnode/general/set`, data);
  }
}

export class MuninnodeService extends BaseModule {
  /**
   * Execute reconfigure for muninnode service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/muninnode/muninnode/service/reconfigure`);
  }

  /**
   * Execute restart for muninnode service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/muninnode/muninnode/service/restart`);
  }

  /**
   * Execute start for muninnode service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/muninnode/muninnode/service/start`);
  }

  /**
   * Get status for muninnode service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/muninnode/muninnode/service/status`);
  }

  /**
   * Execute stop for muninnode service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/muninnode/muninnode/service/stop`);
  }
}

// Main module class
export class MuninnodeModule extends BaseModule {
  public readonly general: MuninnodeGeneral;
  public readonly service: MuninnodeService;

  constructor(http: any) {
    super(http);
    this.general = new MuninnodeGeneral(http);
    this.service = new MuninnodeService(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/muninnode/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/muninnode/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/muninnode/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/muninnode/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/muninnode/service/reconfigure');
  }
}