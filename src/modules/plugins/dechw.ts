import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class DechwInfo extends BaseModule {
  /**
   * Get power status for dechw info
   */
  async powerStatus(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dechw/dechw/info/power_status`);
  }
}

// Main module class
export class DechwModule extends BaseModule {
  public readonly info: DechwInfo;

  constructor(http: any) {
    super(http);
    this.info = new DechwInfo(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/dechw/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/dechw/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/dechw/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/dechw/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/dechw/service/reconfigure');
  }
}