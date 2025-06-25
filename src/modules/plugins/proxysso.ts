import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class ProxyssoService extends BaseModule {
  /**
   * Execute createkeytab for proxysso service
   */
  async createkeytab(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxysso/proxysso/service/createkeytab`, data);
  }

  /**
   * Get deletekeytab for proxysso service
   */
  async deletekeytab(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/proxysso/proxysso/service/deletekeytab`);
  }

  /**
   * Get get check list for proxysso service
   */
  async getCheckList(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/proxysso/proxysso/service/get_check_list`);
  }

  /**
   * Get showkeytab for proxysso service
   */
  async showkeytab(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/proxysso/proxysso/service/showkeytab`);
  }

  /**
   * Execute testkerblogin for proxysso service
   */
  async testkerblogin(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxysso/proxysso/service/testkerblogin`, data);
  }
}

export class ProxyssoSettings extends BaseModule {
  /**
   * Get get for proxysso settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/proxysso/proxysso/settings/get`);
  }

  /**
   * Execute set for proxysso settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxysso/proxysso/settings/set`, data);
  }
}

// Main module class
export class ProxyssoModule extends BaseModule {
  public readonly service: ProxyssoService;
  public readonly settings: ProxyssoSettings;

  constructor(http: any) {
    super(http);
    this.service = new ProxyssoService(http);
    this.settings = new ProxyssoSettings(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/proxysso/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/proxysso/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/proxysso/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/proxysso/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/proxysso/service/reconfigure');
  }
}