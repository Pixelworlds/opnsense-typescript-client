import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class CronService {
  constructor(private http: any) {}

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/cron/service/reconfigure');
  }
}

export class CronSettings {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/cron/settings/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/cron/settings/set', config);
  }

  async searchJobs(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    // Support both GET and POST methods as per documentation
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/cron/settings/search_jobs');
    }
    return this.http.post('/api/cron/settings/search_jobs', params);
  }

  async addJob(job: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/cron/settings/add_job', job);
  }

  async getJob(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/cron/settings/get_job/${uuid}` : '/api/cron/settings/get_job';
    return this.http.get(path);
  }

  async setJob(uuid: string, job: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/cron/settings/set_job/${uuid}`, job);
  }

  async deleteJob(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/cron/settings/del_job/${uuid}`);
  }

  async toggleJob(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/cron/settings/toggle_job/${uuid}/${enabled ? '1' : '0'}`
        : `/api/cron/settings/toggle_job/${uuid}`;
    return this.http.post(path);
  }
}

export class CronModule extends BaseModule {
  public readonly service: CronService;
  public readonly settings: CronSettings;

  constructor(httpClient: any) {
    super(httpClient);
    this.service = new CronService(this.http);
    this.settings = new CronSettings(this.http);
  }

  // Legacy methods for backward compatibility
  async getConfig(): Promise<ApiResponse<any>> {
    return this.settings.get();
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.set(config);
  }

  async searchJobs(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.settings.searchJobs(params);
  }

  async addJob(job: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.addJob(job);
  }

  async getJob(uuid?: string): Promise<ApiResponse<any>> {
    return this.settings.getJob(uuid);
  }

  async updateJob(uuid: string, job: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.setJob(uuid, job);
  }

  async deleteJob(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.deleteJob(uuid);
  }

  async toggleJob(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleJob(uuid, enabled);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.service.reconfigure();
  }

  // Convenience methods for common operations
  async createDailyJob(
    command: string,
    hour: number = 0,
    minute: number = 0,
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    return this.addJob({
      enabled: '1',
      command,
      description: description || `Daily job: ${command}`,
      minute: minute.toString(),
      hour: hour.toString(),
      day: '*',
      month: '*',
      weekday: '*',
      who: 'root',
    });
  }

  async createWeeklyJob(
    command: string,
    weekday: number = 0,
    hour: number = 0,
    minute: number = 0,
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    return this.addJob({
      enabled: '1',
      command,
      description: description || `Weekly job: ${command}`,
      minute: minute.toString(),
      hour: hour.toString(),
      day: '*',
      month: '*',
      weekday: weekday.toString(),
      who: 'root',
    });
  }

  async createMonthlyJob(
    command: string,
    day: number = 1,
    hour: number = 0,
    minute: number = 0,
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    return this.addJob({
      enabled: '1',
      command,
      description: description || `Monthly job: ${command}`,
      minute: minute.toString(),
      hour: hour.toString(),
      day: day.toString(),
      month: '*',
      weekday: '*',
      who: 'root',
    });
  }

  async createHourlyJob(command: string, minute: number = 0, description?: string): Promise<ApiResponse<ApiResult>> {
    return this.addJob({
      enabled: '1',
      command,
      description: description || `Hourly job: ${command}`,
      minute: minute.toString(),
      hour: '*',
      day: '*',
      month: '*',
      weekday: '*',
      who: 'root',
    });
  }

  async createCustomJob(
    cronExpression: string,
    command: string,
    description?: string,
    user: string = 'root'
  ): Promise<ApiResponse<ApiResult>> {
    const [minute, hour, day, month, weekday] = cronExpression.split(' ');

    return this.addJob({
      enabled: '1',
      command,
      description: description || `Custom job: ${command}`,
      minute: minute || '*',
      hour: hour || '*',
      day: day || '*',
      month: month || '*',
      weekday: weekday || '*',
      who: user,
    });
  }

  async enableJob(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.toggleJob(uuid, true);
  }

  async disableJob(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.toggleJob(uuid, false);
  }

  async findJobsByCommand(command: string): Promise<ApiResponse<any>> {
    return this.searchJobs({ searchPhrase: command });
  }

  async findJobsByDescription(description: string): Promise<ApiResponse<any>> {
    return this.searchJobs({ searchPhrase: description });
  }

  async getEnabledJobs(): Promise<ApiResponse<any>> {
    return this.searchJobs({ enabled: '1' });
  }

  async getDisabledJobs(): Promise<ApiResponse<any>> {
    return this.searchJobs({ enabled: '0' });
  }

  async getAllJobs(): Promise<ApiResponse<any>> {
    return this.searchJobs();
  }

  async exportJobs(): Promise<any[]> {
    const result = await this.getAllJobs();
    return result.data?.rows || [];
  }

  async importJobs(jobs: any[]): Promise<ApiResponse<ApiResult>[]> {
    const results: ApiResponse<ApiResult>[] = [];

    for (const job of jobs) {
      try {
        const result = await this.addJob(job);
        results.push(result);
      } catch (error) {
        results.push({
          data: { result: 'failed', error: String(error) },
          status: 'error',
          statusText: 'Error',
          headers: {},
        } as unknown as ApiResponse<ApiResult>);
      }
    }

    return results;
  }

  async bulkToggleJobs(uuids: string[], enabled: boolean): Promise<ApiResponse<ApiResult>[]> {
    const results: ApiResponse<ApiResult>[] = [];

    for (const uuid of uuids) {
      try {
        const result = await this.toggleJob(uuid, enabled);
        results.push(result);
      } catch (error) {
        results.push({
          data: { result: 'failed', error: String(error) },
          status: 'error',
          statusText: 'Error',
          headers: {},
        } as unknown as ApiResponse<ApiResult>);
      }
    }

    return results;
  }

  async bulkDeleteJobs(uuids: string[]): Promise<ApiResponse<ApiResult>[]> {
    const results: ApiResponse<ApiResult>[] = [];

    for (const uuid of uuids) {
      try {
        const result = await this.deleteJob(uuid);
        results.push(result);
      } catch (error) {
        results.push({
          data: { result: 'failed', error: String(error) },
          status: 'error',
          statusText: 'Error',
          headers: {},
        } as unknown as ApiResponse<ApiResult>);
      }
    }

    return results;
  }
}
