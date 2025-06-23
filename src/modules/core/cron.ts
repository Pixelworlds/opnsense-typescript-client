import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class CronModule extends BaseModule {
  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/cron/settings/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/cron/settings/set', config);
  }

  async searchJobs(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/cron/settings/search_jobs', params);
  }

  async addJob(job: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/cron/settings/add_job', job);
  }

  async getJob(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/cron/settings/get_job/${uuid}` : '/api/cron/settings/get_job';
    return this.http.get(path);
  }

  async updateJob(uuid: string, job: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/cron/settings/set_job/${uuid}`, job);
  }

  async deleteJob(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/cron/settings/del_job/${uuid}`);
  }

  async toggleJob(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/cron/settings/toggle_job', uuid, enabled);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('cron', 'reconfigure');
  }
}
