import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class HelloworldService extends BaseModule {
  /**
   * Execute reload for helloworld service
   */
  async reload(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/helloworld/helloworld/service/reload`);
  }

  /**
   * Execute test for helloworld service
   */
  async test(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/helloworld/helloworld/service/test`, data);
  }
}

export class HelloworldSettings extends BaseModule {
  /**
   * Get get for helloworld settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/helloworld/helloworld/settings/get`);
  }

  /**
   * Execute set for helloworld settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/helloworld/helloworld/settings/set`, data);
  }
}

// Main module class
export class HelloworldModule extends BaseModule {
  public readonly service: HelloworldService;
  public readonly settings: HelloworldSettings;

  constructor(http: any) {
    super(http);
    this.service = new HelloworldService(http);
    this.settings = new HelloworldSettings(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/helloworld/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/helloworld/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/helloworld/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/helloworld/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/helloworld/service/reconfigure');
  }
}