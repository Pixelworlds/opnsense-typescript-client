import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class PuppetagentService extends BaseModule {
  /**
   * Execute reconfigure for puppetagent service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/puppetagent/puppetagent/service/reconfigure`);
  }

  /**
   * Execute restart for puppetagent service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/puppetagent/puppetagent/service/restart`);
  }

  /**
   * Execute start for puppetagent service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/puppetagent/puppetagent/service/start`);
  }

  /**
   * Get status for puppetagent service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/puppetagent/puppetagent/service/status`);
  }

  /**
   * Execute stop for puppetagent service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/puppetagent/puppetagent/service/stop`);
  }
}

export class PuppetagentSettings extends BaseModule {
  /**
   * Get get for puppetagent settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/puppetagent/puppetagent/settings/get`);
  }

  /**
   * Execute set for puppetagent settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/puppetagent/puppetagent/settings/set`, data);
  }
}

// Main module class
export class PuppetagentModule extends BaseModule {
  public readonly service: PuppetagentService;
  public readonly settings: PuppetagentSettings;

  constructor(http: any) {
    super(http);
    this.service = new PuppetagentService(http);
    this.settings = new PuppetagentSettings(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/puppetagent/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/puppetagent/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/puppetagent/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/puppetagent/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/puppetagent/service/reconfigure');
  }
}