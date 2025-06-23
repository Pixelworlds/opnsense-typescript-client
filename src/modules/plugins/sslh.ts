import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class SslhModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('sslh', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('sslh', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('sslh', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('sslh', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('sslh', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/sslh/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/sslh/general/set', config);
  }

  async searchRules(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/sslh/settings/search_rule', params);
  }

  async addRule(rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/sslh/settings/add_rule', rule);
  }

  async getRule(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/sslh/settings/get_rule/${uuid}` : '/api/sslh/settings/get_rule';
    return this.http.get(path);
  }

  async updateRule(uuid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/sslh/settings/set_rule/${uuid}`, rule);
  }

  async deleteRule(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/sslh/settings/del_rule/${uuid}`);
  }

  async toggleRule(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/sslh/settings/toggle_rule', uuid, enabled);
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/sslh/service/statistics');
  }

  async getConnections(): Promise<ApiResponse<any>> {
    return this.http.get('/api/sslh/service/connections');
  }
}
