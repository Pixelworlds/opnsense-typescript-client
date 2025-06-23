import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class TelegrafModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('telegraf', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('telegraf', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('telegraf', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('telegraf', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('telegraf', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/telegraf/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/telegraf/general/set', config);
  }

  async searchInputs(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/telegraf/settings/search_input', params);
  }

  async addInput(input: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/telegraf/settings/add_input', input);
  }

  async getInput(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/telegraf/settings/get_input/${uuid}` : '/api/telegraf/settings/get_input';
    return this.http.get(path);
  }

  async updateInput(uuid: string, input: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/telegraf/settings/set_input/${uuid}`, input);
  }

  async deleteInput(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/telegraf/settings/del_input/${uuid}`);
  }

  async toggleInput(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/telegraf/settings/toggle_input', uuid, enabled);
  }

  async searchOutputs(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/telegraf/settings/search_output', params);
  }

  async addOutput(output: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/telegraf/settings/add_output', output);
  }

  async getOutput(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/telegraf/settings/get_output/${uuid}` : '/api/telegraf/settings/get_output';
    return this.http.get(path);
  }

  async updateOutput(uuid: string, output: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/telegraf/settings/set_output/${uuid}`, output);
  }

  async deleteOutput(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/telegraf/settings/del_output/${uuid}`);
  }

  async toggleOutput(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/telegraf/settings/toggle_output', uuid, enabled);
  }

  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/telegraf/service/config');
  }

  async testConfig(): Promise<ApiResponse<any>> {
    return this.http.post('/api/telegraf/service/test');
  }

  async getMetrics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/telegraf/service/metrics');
  }

  async reloadConfig(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/telegraf/service/reload');
  }
}
