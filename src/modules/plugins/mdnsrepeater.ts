import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class MdnsrepeaterService extends BaseModule {
  /**
   * Execute reconfigure for mdnsrepeater service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/mdnsrepeater/mdnsrepeater/service/reconfigure`);
  }

  /**
   * Execute restart for mdnsrepeater service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/mdnsrepeater/mdnsrepeater/service/restart`);
  }

  /**
   * Execute start for mdnsrepeater service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/mdnsrepeater/mdnsrepeater/service/start`);
  }

  /**
   * Get status for mdnsrepeater service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/mdnsrepeater/mdnsrepeater/service/status`);
  }

  /**
   * Execute stop for mdnsrepeater service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/mdnsrepeater/mdnsrepeater/service/stop`);
  }
}

export class MdnsrepeaterSettings extends BaseModule {
  /**
   * Get get for mdnsrepeater settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/mdnsrepeater/mdnsrepeater/settings/get`);
  }

  /**
   * Execute set for mdnsrepeater settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/mdnsrepeater/mdnsrepeater/settings/set`, data);
  }
}

// Main module class
export class MdnsrepeaterModule extends BaseModule {
  public readonly service: MdnsrepeaterService;
  public readonly settings: MdnsrepeaterSettings;

  constructor(http: any) {
    super(http);
    this.service = new MdnsrepeaterService(http);
    this.settings = new MdnsrepeaterSettings(http);
  }

}