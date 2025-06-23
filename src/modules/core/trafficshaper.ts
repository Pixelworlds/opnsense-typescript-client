import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class TrafficshaperModule extends BaseModule {
  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/trafficshaper/settings/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trafficshaper/settings/set', config);
  }

  async searchPipes(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/trafficshaper/settings/search_pipe', params);
  }

  async addPipe(pipe: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trafficshaper/settings/add_pipe', pipe);
  }

  async getPipe(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/trafficshaper/settings/get_pipe/${uuid}` : '/api/trafficshaper/settings/get_pipe';
    return this.http.get(path);
  }

  async updatePipe(uuid: string, pipe: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/settings/set_pipe/${uuid}`, pipe);
  }

  async deletePipe(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/settings/del_pipe/${uuid}`);
  }

  async togglePipe(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/trafficshaper/settings/toggle_pipe', uuid, enabled);
  }

  async searchQueues(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/trafficshaper/settings/search_queue', params);
  }

  async addQueue(queue: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trafficshaper/settings/add_queue', queue);
  }

  async getQueue(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/trafficshaper/settings/get_queue/${uuid}` : '/api/trafficshaper/settings/get_queue';
    return this.http.get(path);
  }

  async updateQueue(uuid: string, queue: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/settings/set_queue/${uuid}`, queue);
  }

  async deleteQueue(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/settings/del_queue/${uuid}`);
  }

  async toggleQueue(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/trafficshaper/settings/toggle_queue', uuid, enabled);
  }

  async searchRules(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/trafficshaper/settings/search_rule', params);
  }

  async addRule(rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trafficshaper/settings/add_rule', rule);
  }

  async getRule(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/trafficshaper/settings/get_rule/${uuid}` : '/api/trafficshaper/settings/get_rule';
    return this.http.get(path);
  }

  async updateRule(uuid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/settings/set_rule/${uuid}`, rule);
  }

  async deleteRule(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/settings/del_rule/${uuid}`);
  }

  async toggleRule(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/trafficshaper/settings/toggle_rule', uuid, enabled);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trafficshaper/service/reconfigure');
  }

  async flushStates(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trafficshaper/service/flush_states');
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/trafficshaper/service/statistics');
  }

  async getQueueStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/trafficshaper/service/queue_statistics');
  }

  async getPipeStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/trafficshaper/service/pipe_statistics');
  }
}
