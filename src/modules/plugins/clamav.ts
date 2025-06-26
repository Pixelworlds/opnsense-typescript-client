import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class ClamavGeneral extends BaseModule {
  /**
   * Get get for clamav general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/clamav/clamav/general/get`);
  }

  /**
   * Execute set for clamav general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/clamav/clamav/general/set`, data);
  }
}

export class ClamavService extends BaseModule {
  /**
   * Execute freshclam for clamav service
   */
  async freshclam(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/clamav/clamav/service/freshclam`, data);
  }

  /**
   * Execute reconfigure for clamav service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/clamav/clamav/service/reconfigure`);
  }

  /**
   * Execute restart for clamav service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/clamav/clamav/service/restart`);
  }

  /**
   * Execute start for clamav service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/clamav/clamav/service/start`);
  }

  /**
   * Get status for clamav service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/clamav/clamav/service/status`);
  }

  /**
   * Execute stop for clamav service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/clamav/clamav/service/stop`);
  }

  /**
   * Get version for clamav service
   */
  async version(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/clamav/clamav/service/version`);
  }
}

export class ClamavUrl extends BaseModule {
  /**
   * Execute add url for clamav url
   */
  async addUrl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/clamav/clamav/url/add_url`, data);
  }

  /**
   * Execute del url for clamav url
   */
  async delUrl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/clamav/clamav/url/del_url/${uuid}`, data);
  }

  /**
   * Get get for clamav url
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/clamav/clamav/url/get`);
  }

  /**
   * Get get url for clamav url
   */
  async getUrl(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/clamav/clamav/url/get_url/${uuid}`);
  }

  /**
   * Execute set for clamav url
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/clamav/clamav/url/set`, data);
  }

  /**
   * Execute set url for clamav url
   */
  async setUrl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/clamav/clamav/url/set_url/${uuid}`, data);
  }

  /**
   * Execute toggle url for clamav url
   */
  async toggleUrl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/clamav/clamav/url/toggle_url/${uuid}`, data);
  }
}

// Main module class
export class ClamavModule extends BaseModule {
  public readonly general: ClamavGeneral;
  public readonly service: ClamavService;
  public readonly url: ClamavUrl;

  constructor(http: any) {
    super(http);
    this.general = new ClamavGeneral(http);
    this.service = new ClamavService(http);
    this.url = new ClamavUrl(http);
  }

}