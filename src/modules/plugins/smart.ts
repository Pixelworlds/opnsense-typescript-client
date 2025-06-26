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

}