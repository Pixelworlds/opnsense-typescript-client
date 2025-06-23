import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class MonitModule extends BaseModule {
  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/monit/settings/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/monit/settings/set', config);
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/monit/settings/get_general');
  }

  async isDirty(): Promise<ApiResponse<any>> {
    return this.http.get('/api/monit/settings/dirty');
  }

  async searchServices(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/monit/settings/search_service', params);
  }

  async addService(service: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/monit/settings/add_service', service);
  }

  async getService(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/monit/settings/get_service/${uuid}` : '/api/monit/settings/get_service';
    return this.http.get(path);
  }

  async updateService(uuid: string, service: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/settings/set_service/${uuid}`, service);
  }

  async deleteService(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/settings/del_service/${uuid}`);
  }

  async toggleService(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/monit/settings/toggle_service', uuid, enabled);
  }

  async searchTests(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/monit/settings/search_test', params);
  }

  async addTest(test: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/monit/settings/add_test', test);
  }

  async getTest(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/monit/settings/get_test/${uuid}` : '/api/monit/settings/get_test';
    return this.http.get(path);
  }

  async updateTest(uuid: string, test: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/settings/set_test/${uuid}`, test);
  }

  async deleteTest(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/settings/del_test/${uuid}`);
  }

  async searchAlerts(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/monit/settings/search_alert', params);
  }

  async addAlert(alert: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/monit/settings/add_alert', alert);
  }

  async getAlert(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/monit/settings/get_alert/${uuid}` : '/api/monit/settings/get_alert';
    return this.http.get(path);
  }

  async updateAlert(uuid: string, alert: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/settings/set_alert/${uuid}`, alert);
  }

  async deleteAlert(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/settings/del_alert/${uuid}`);
  }

  async toggleAlert(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/monit/settings/toggle_alert', uuid, enabled);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('monit', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('monit', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('monit', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('monit', 'reconfigure');
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('monit', 'status');
  }

  async check(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/monit/service/check');
  }

  async getMonitStatus(format: string = 'xml'): Promise<ApiResponse<any>> {
    return this.http.get(`/api/monit/status/get/${format}`);
  }
}
