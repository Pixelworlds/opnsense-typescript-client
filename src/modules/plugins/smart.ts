import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class SmartService extends BaseModule {
  /**
   * Execute abort for smart service
   */
  async abort(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/smart/smart/service/abort`, data);
  }

  /**
   * Execute info for smart service
   */
  async info(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/smart/smart/service/info`, data);
  }

  /**
   * Execute list for smart service
   */
  async list(details: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/smart/smart/service/list/${details}`, data);
  }

  /**
   * Execute logs for smart service
   */
  async logs(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/smart/smart/service/logs`, data);
  }

  /**
   * Execute test for smart service
   */
  async test(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/smart/smart/service/test`, data);
  }
}

// Main module class
export class SmartModule extends BaseModule {
  public readonly service: SmartService;

  constructor(http: any) {
    super(http);
    this.service = new SmartService(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/smart/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/smart/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/smart/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/smart/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/smart/service/reconfigure');
  }
}