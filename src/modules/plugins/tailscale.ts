import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class TailscaleAuthentication extends BaseModule {
  /**
   * Get get for tailscale authentication
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tailscale/tailscale/authentication/get`);
  }

  /**
   * Execute set for tailscale authentication
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tailscale/tailscale/authentication/set`, data);
  }
}

export class TailscaleService extends BaseModule {
  /**
   * Execute reconfigure for tailscale service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tailscale/tailscale/service/reconfigure`);
  }

  /**
   * Execute restart for tailscale service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tailscale/tailscale/service/restart`);
  }

  /**
   * Execute start for tailscale service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tailscale/tailscale/service/start`);
  }

  /**
   * Get status for tailscale service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/tailscale/tailscale/service/status`);
  }

  /**
   * Execute stop for tailscale service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tailscale/tailscale/service/stop`);
  }
}

export class TailscaleSettings extends BaseModule {
  /**
   * Execute add subnet for tailscale settings
   */
  async addSubnet(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tailscale/tailscale/settings/add_subnet`, data);
  }

  /**
   * Execute del subnet for tailscale settings
   */
  async delSubnet(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tailscale/tailscale/settings/del_subnet/${uuid}`, data);
  }

  /**
   * Get get for tailscale settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tailscale/tailscale/settings/get`);
  }

  /**
   * Get get subnet for tailscale settings
   */
  async getSubnet(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tailscale/tailscale/settings/get_subnet/${uuid}`);
  }

  /**
   * Get reload for tailscale settings
   */
  async reload(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tailscale/tailscale/settings/reload`);
  }

  /**
   * Execute set for tailscale settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tailscale/tailscale/settings/set`, data);
  }

  /**
   * Execute set subnet for tailscale settings
   */
  async setSubnet(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tailscale/tailscale/settings/set_subnet/${uuid}`, data);
  }
}

export class TailscaleStatus extends BaseModule {
  /**
   * Get get for tailscale status
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tailscale/tailscale/status/get`);
  }

  /**
   * Get ip for tailscale status
   */
  async ip(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tailscale/tailscale/status/ip`);
  }

  /**
   * Get net for tailscale status
   */
  async net(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tailscale/tailscale/status/net`);
  }

  /**
   * Execute set for tailscale status
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tailscale/tailscale/status/set`, data);
  }

  /**
   * Get status for tailscale status
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/tailscale/tailscale/status/status`);
  }
}

// Main module class
export class TailscaleModule extends BaseModule {
  public readonly authentication: TailscaleAuthentication;
  public readonly service: TailscaleService;
  public readonly settings: TailscaleSettings;
  public readonly status: TailscaleStatus;

  constructor(http: any) {
    super(http);
    this.authentication = new TailscaleAuthentication(http);
    this.service = new TailscaleService(http);
    this.settings = new TailscaleSettings(http);
    this.status = new TailscaleStatus(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/tailscale/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/tailscale/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/tailscale/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/tailscale/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/tailscale/service/reconfigure');
  }
}