import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class HwprobeGeneral extends BaseModule {
  /**
   * Get get for hwprobe general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/hwprobe/hwprobe/general/get`);
  }

  /**
   * Execute set for hwprobe general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/hwprobe/hwprobe/general/set`, data);
  }
}

export class HwprobeService extends BaseModule {
  /**
   * Execute reconfigure for hwprobe service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/hwprobe/hwprobe/service/reconfigure`);
  }

  /**
   * Get report for hwprobe service
   */
  async report(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/hwprobe/hwprobe/service/report`);
  }

  /**
   * Execute restart for hwprobe service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/hwprobe/hwprobe/service/restart`);
  }

  /**
   * Execute start for hwprobe service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/hwprobe/hwprobe/service/start`);
  }

  /**
   * Get status for hwprobe service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/hwprobe/hwprobe/service/status`);
  }

  /**
   * Execute stop for hwprobe service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/hwprobe/hwprobe/service/stop`);
  }
}

// Main module class
export class HwprobeModule extends BaseModule {
  public readonly general: HwprobeGeneral;
  public readonly service: HwprobeService;

  constructor(http: any) {
    super(http);
    this.general = new HwprobeGeneral(http);
    this.service = new HwprobeService(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/hwprobe/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/hwprobe/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/hwprobe/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/hwprobe/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/hwprobe/service/reconfigure');
  }
}