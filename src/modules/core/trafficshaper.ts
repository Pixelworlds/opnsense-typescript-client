import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class TrafficshaperSettings {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/trafficshaper/settings/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trafficshaper/settings/set', config);
  }

  // Pipes management
  async searchPipes(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/trafficshaper/settings/search_pipe');
    }
    return this.http.post('/api/trafficshaper/settings/search_pipe', params);
  }

  async addPipe(pipe: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trafficshaper/settings/add_pipe', pipe);
  }

  async getPipe(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/trafficshaper/settings/get_pipe/${uuid}` : '/api/trafficshaper/settings/get_pipe';
    return this.http.get(path);
  }

  async setPipe(uuid: string, pipe: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/settings/set_pipe/${uuid}`, pipe);
  }

  async deletePipe(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/settings/del_pipe/${uuid}`);
  }

  async togglePipe(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/trafficshaper/settings/toggle_pipe/${uuid}/${enabled ? '1' : '0'}`
      : `/api/trafficshaper/settings/toggle_pipe/${uuid}`;
    return this.http.post(path);
  }

  // Queues management
  async searchQueues(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/trafficshaper/settings/search_queue');
    }
    return this.http.post('/api/trafficshaper/settings/search_queue', params);
  }

  async addQueue(queue: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trafficshaper/settings/add_queue', queue);
  }

  async getQueue(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/trafficshaper/settings/get_queue/${uuid}` : '/api/trafficshaper/settings/get_queue';
    return this.http.get(path);
  }

  async setQueue(uuid: string, queue: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/settings/set_queue/${uuid}`, queue);
  }

  async deleteQueue(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/settings/del_queue/${uuid}`);
  }

  async toggleQueue(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/trafficshaper/settings/toggle_queue/${uuid}/${enabled ? '1' : '0'}`
      : `/api/trafficshaper/settings/toggle_queue/${uuid}`;
    return this.http.post(path);
  }

  // Rules management
  async searchRules(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/trafficshaper/settings/search_rule');
    }
    return this.http.post('/api/trafficshaper/settings/search_rule', params);
  }

  async addRule(rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trafficshaper/settings/add_rule', rule);
  }

  async getRule(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/trafficshaper/settings/get_rule/${uuid}` : '/api/trafficshaper/settings/get_rule';
    return this.http.get(path);
  }

  async setRule(uuid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/settings/set_rule/${uuid}`, rule);
  }

  async deleteRule(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trafficshaper/settings/del_rule/${uuid}`);
  }

  async toggleRule(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/trafficshaper/settings/toggle_rule/${uuid}/${enabled ? '1' : '0'}`
      : `/api/trafficshaper/settings/toggle_rule/${uuid}`;
    return this.http.post(path);
  }
}

export class TrafficshaperService {
  constructor(private http: any) {}

  async flushreload(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trafficshaper/service/flushreload');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trafficshaper/service/reconfigure');
  }

  async statistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/trafficshaper/service/statistics');
  }
}

export class TrafficshaperModule extends BaseModule {
  public readonly settings: TrafficshaperSettings;
  public readonly service: TrafficshaperService;

  constructor(httpClient: any) {
    super(httpClient);
    this.settings = new TrafficshaperSettings(this.http);
    this.service = new TrafficshaperService(this.http);
  }

  // Legacy methods for backward compatibility
  async getConfig(): Promise<ApiResponse<any>> {
    return this.settings.get();
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.set(config);
  }

  async searchPipes(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.settings.searchPipes(params);
  }

  async addPipe(pipe: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.addPipe(pipe);
  }

  async getPipe(uuid?: string): Promise<ApiResponse<any>> {
    return this.settings.getPipe(uuid);
  }

  async updatePipe(uuid: string, pipe: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.setPipe(uuid, pipe);
  }

  async deletePipe(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.deletePipe(uuid);
  }

  async togglePipe(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.settings.togglePipe(uuid, enabled);
  }

  async searchQueues(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.settings.searchQueues(params);
  }

  async addQueue(queue: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.addQueue(queue);
  }

  async getQueue(uuid?: string): Promise<ApiResponse<any>> {
    return this.settings.getQueue(uuid);
  }

  async updateQueue(uuid: string, queue: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.setQueue(uuid, queue);
  }

  async deleteQueue(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.deleteQueue(uuid);
  }

  async toggleQueue(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleQueue(uuid, enabled);
  }

  async searchRules(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.settings.searchRules(params);
  }

  async addRule(rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.addRule(rule);
  }

  async getRule(uuid?: string): Promise<ApiResponse<any>> {
    return this.settings.getRule(uuid);
  }

  async updateRule(uuid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.setRule(uuid, rule);
  }

  async deleteRule(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.deleteRule(uuid);
  }

  async toggleRule(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleRule(uuid, enabled);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.service.reconfigure();
  }

  async flushreload(): Promise<ApiResponse<ApiResult>> {
    return this.service.flushreload();
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.service.statistics();
  }

  // New convenience methods
  async getAllPipes(): Promise<ApiResponse<any>> {
    return this.settings.searchPipes();
  }

  async getAllQueues(): Promise<ApiResponse<any>> {
    return this.settings.searchQueues();
  }

  async getAllRules(): Promise<ApiResponse<any>> {
    return this.settings.searchRules();
  }

  async enablePipe(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.togglePipe(uuid, true);
  }

  async disablePipe(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.togglePipe(uuid, false);
  }

  async enableQueue(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleQueue(uuid, true);
  }

  async disableQueue(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleQueue(uuid, false);
  }

  async enableRule(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleRule(uuid, true);
  }

  async disableRule(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleRule(uuid, false);
  }

  async createBandwidthPipe(
    bandwidth: number,
    bandwidthMetric: string = 'Kbit',
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const pipe = {
      enabled: '1',
      bandwidth: bandwidth.toString(),
      bandwidthMetric,
      description: description || `Bandwidth pipe ${bandwidth}${bandwidthMetric}`
    };
    return this.settings.addPipe(pipe);
  }

  async createTrafficRule(
    source: string,
    destination: string,
    target: string,
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const rule = {
      enabled: '1',
      source,
      destination,
      target,
      description: description || `Traffic rule ${source} -> ${destination}`
    };
    return this.settings.addRule(rule);
  }

  async getTrafficShaperOverview(): Promise<{
    config: any;
    pipes: any;
    queues: any;
    rules: any;
    statistics: any;
    timestamp: string;
  }> {
    const [config, pipes, queues, rules, statistics] = await Promise.allSettled([
      this.getConfig(),
      this.getAllPipes(),
      this.getAllQueues(),
      this.getAllRules(),
      this.getStatistics()
    ]);

    return {
      config: config.status === 'fulfilled' ? config.value.data : null,
      pipes: pipes.status === 'fulfilled' ? pipes.value.data : null,
      queues: queues.status === 'fulfilled' ? queues.value.data : null,
      rules: rules.status === 'fulfilled' ? rules.value.data : null,
      statistics: statistics.status === 'fulfilled' ? statistics.value.data : null,
      timestamp: new Date().toISOString()
    };
  }
}
