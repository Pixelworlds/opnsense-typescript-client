import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class NutDiagnostics extends BaseModule {
  /**
   * Get upsstatus for nut diagnostics
   */
  async upsstatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/nut/nut/diagnostics/upsstatus`);
  }
}

export class NutService extends BaseModule {
  /**
   * Execute reconfigure for nut service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/nut/nut/service/reconfigure`);
  }

  /**
   * Execute restart for nut service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/nut/nut/service/restart`);
  }

  /**
   * Execute start for nut service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/nut/nut/service/start`);
  }

  /**
   * Get status for nut service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/nut/nut/service/status`);
  }

  /**
   * Execute stop for nut service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/nut/nut/service/stop`);
  }
}

export class NutSettings extends BaseModule {
  /**
   * Get get for nut settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nut/nut/settings/get`);
  }

  /**
   * Execute set for nut settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nut/nut/settings/set`, data);
  }
}

// Main module class
export class NutModule extends BaseModule {
  public readonly diagnostics: NutDiagnostics;
  public readonly service: NutService;
  public readonly settings: NutSettings;

  constructor(http: any) {
    super(http);
    this.diagnostics = new NutDiagnostics(http);
    this.service = new NutService(http);
    this.settings = new NutSettings(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/nut/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/nut/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/nut/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/nut/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/nut/service/reconfigure');
  }
}