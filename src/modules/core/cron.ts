import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class CronService extends BaseModule {
  /**
   * Execute reconfigure for cron service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/cron/cron/service/reconfigure`, data);
  }
}

export class CronSettings extends BaseModule {
  /**
   * Execute add job for cron settings
   */
  async addJob(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/cron/cron/settings/add_job`, data);
  }

  /**
   * Execute del job for cron settings
   */
  async delJob(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/cron/cron/settings/del_job/${uuid}`, data);
  }

  /**
   * Get get for cron settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/cron/cron/settings/get`);
  }

  /**
   * Get get job for cron settings
   */
  async getJob(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/cron/cron/settings/get_job/${uuid}`);
  }

  /**
   * Execute set for cron settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/cron/cron/settings/set`, data);
  }

  /**
   * Execute set job for cron settings
   */
  async setJob(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/cron/cron/settings/set_job/${uuid}`, data);
  }

  /**
   * Execute toggle job for cron settings
   */
  async toggleJob(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/cron/cron/settings/toggle_job/${uuid}/${enabled}`, data);
  }
}

// Main module class
export class CronModule extends BaseModule {
  public readonly service: CronService;
  public readonly settings: CronSettings;

  constructor(http: any) {
    super(http);
    this.service = new CronService(http);
    this.settings = new CronSettings(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/cron/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/cron/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/cron/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/cron/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/cron/service/reconfigure');
  }
}