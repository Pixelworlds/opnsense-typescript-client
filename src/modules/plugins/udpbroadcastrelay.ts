import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class UdpbroadcastrelayModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('udpbroadcastrelay', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('udpbroadcastrelay', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('udpbroadcastrelay', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('udpbroadcastrelay', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('udpbroadcastrelay', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/udpbroadcastrelay/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/udpbroadcastrelay/general/set', config);
  }

  async searchRules(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/udpbroadcastrelay/settings/search_rule', params);
  }

  async addRule(rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/udpbroadcastrelay/settings/add_rule', rule);
  }

  async getRule(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/udpbroadcastrelay/settings/get_rule/${uuid}` : '/api/udpbroadcastrelay/settings/get_rule';
    return this.http.get(path);
  }

  async updateRule(uuid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/udpbroadcastrelay/settings/set_rule/${uuid}`, rule);
  }

  async deleteRule(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/udpbroadcastrelay/settings/del_rule/${uuid}`);
  }

  async toggleRule(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/udpbroadcastrelay/settings/toggle_rule', uuid, enabled);
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/udpbroadcastrelay/service/statistics');
  }

  async getConnections(): Promise<ApiResponse<any>> {
    return this.http.get('/api/udpbroadcastrelay/service/connections');
  }

  async getLogs(): Promise<ApiResponse<any>> {
    return this.http.get('/api/udpbroadcastrelay/service/logs');
  }
}
