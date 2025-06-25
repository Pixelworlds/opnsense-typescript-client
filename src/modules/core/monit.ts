import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class MonitService extends BaseModule {
  /**
   * Execute check for monit service
   */
  async check(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/monit/service/check`, data);
  }

  /**
   * Execute reconfigure for monit service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/monit/monit/service/reconfigure`, data);
  }

  /**
   * Execute restart for monit service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/monit/monit/service/restart`, data);
  }

  /**
   * Execute start for monit service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/monit/monit/service/start`, data);
  }

  /**
   * Get status for monit service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/monit/monit/service/status`);
  }

  /**
   * Execute stop for monit service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/monit/monit/service/stop`, data);
  }
}

export class MonitSettings extends BaseModule {
  /**
   * Execute add alert for monit settings
   */
  async addAlert(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/monit/settings/add_alert`, data);
  }

  /**
   * Execute add service for monit settings
   */
  async addService(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/monit/settings/add_service`, data);
  }

  /**
   * Execute add test for monit settings
   */
  async addTest(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/monit/settings/add_test`, data);
  }

  /**
   * Execute del alert for monit settings
   */
  async delAlert(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/monit/settings/del_alert/${uuid}`, data);
  }

  /**
   * Execute del service for monit settings
   */
  async delService(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/monit/settings/del_service/${uuid}`, data);
  }

  /**
   * Execute del test for monit settings
   */
  async delTest(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/monit/settings/del_test/${uuid}`, data);
  }

  /**
   * Get dirty for monit settings
   */
  async dirty(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/monit/monit/settings/dirty`);
  }

  /**
   * Get get for monit settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/monit/monit/settings/get`);
  }

  /**
   * Get get alert for monit settings
   */
  async getAlert(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/monit/monit/settings/get_alert/${uuid}`);
  }

  /**
   * Get get general for monit settings
   */
  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/monit/monit/settings/get_general`);
  }

  /**
   * Get get service for monit settings
   */
  async getService(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/monit/monit/settings/get_service/${uuid}`);
  }

  /**
   * Get get test for monit settings
   */
  async getTest(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/monit/monit/settings/get_test/${uuid}`);
  }

  /**
   * Execute set for monit settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/monit/settings/set`, data);
  }

  /**
   * Execute set alert for monit settings
   */
  async setAlert(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/monit/settings/set_alert/${uuid}`, data);
  }

  /**
   * Execute set service for monit settings
   */
  async setService(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/monit/settings/set_service/${uuid}`, data);
  }

  /**
   * Execute set test for monit settings
   */
  async setTest(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/monit/settings/set_test/${uuid}`, data);
  }

  /**
   * Execute toggle alert for monit settings
   */
  async toggleAlert(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/monit/settings/toggle_alert/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle service for monit settings
   */
  async toggleService(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/monit/settings/toggle_service/${uuid}/${enabled}`, data);
  }
}

export class MonitStatus extends BaseModule {
  /**
   * Get get for monit status
   */
  async get(format: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/monit/monit/status/get/${format}`);
  }
}

// Main module class
export class MonitModule extends BaseModule {
  public readonly service: MonitService;
  public readonly settings: MonitSettings;
  public readonly status: MonitStatus;

  constructor(http: any) {
    super(http);
    this.service = new MonitService(http);
    this.settings = new MonitSettings(http);
    this.status = new MonitStatus(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/monit/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/monit/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/monit/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/monit/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/monit/service/reconfigure');
  }
}