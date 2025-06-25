import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class DmidecodeService extends BaseModule {
  /**
   * Get get for dmidecode service
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dmidecode/dmidecode/service/get`);
  }
}

// Main module class
export class DmidecodeModule extends BaseModule {
  public readonly service: DmidecodeService;

  constructor(http: any) {
    super(http);
    this.service = new DmidecodeService(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/dmidecode/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/dmidecode/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/dmidecode/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/dmidecode/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/dmidecode/service/reconfigure');
  }
}