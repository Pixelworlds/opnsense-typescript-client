import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class IdsModule extends BaseModule {
  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ids/settings/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/settings/set', config);
  }

  async getGeneralSettings(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ids/settings/get_general');
  }

  async setGeneralSettings(settings: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/settings/set_general', settings);
  }

  async searchPolicies(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/ids/settings/search_policy', params);
  }

  async addPolicy(policy: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/settings/add_policy', policy);
  }

  async getPolicy(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ids/settings/get_policy/${uuid}` : '/api/ids/settings/get_policy';
    return this.http.get(path);
  }

  async updatePolicy(uuid: string, policy: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/set_policy/${uuid}`, policy);
  }

  async deletePolicy(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/del_policy/${uuid}`);
  }

  async togglePolicy(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/ids/settings/toggle_policy', uuid, enabled);
  }

  async searchUserRules(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/ids/settings/search_userrule', params);
  }

  async addUserRule(rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/settings/add_userrule', rule);
  }

  async getUserRule(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ids/settings/get_userrule/${uuid}` : '/api/ids/settings/get_userrule';
    return this.http.get(path);
  }

  async updateUserRule(uuid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/set_userrule/${uuid}`, rule);
  }

  async deleteUserRule(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/del_userrule/${uuid}`);
  }

  async toggleUserRule(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/ids/settings/toggle_userrule', uuid, enabled);
  }

  async searchRules(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/ids/settings/search_rule', params);
  }

  async getRule(sid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/settings/get_rule/${sid}`);
  }

  async setRule(sid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/set_rule/${sid}`, rule);
  }

  async getRuleInfo(sid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/settings/rule_info/${sid}`);
  }

  async toggleRule(sid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const action = enabled !== undefined ? (enabled ? 'enable' : 'disable') : 'toggle';
    return this.http.post(`/api/ids/settings/${action}_rule/${sid}`);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ids', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ids', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ids', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ids', 'reconfigure');
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('ids', 'status');
  }

  async reload(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/service/reload');
  }

  async updateRules(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/service/update_rules');
  }

  async queryAlerts(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/ids/service/query_alerts', params);
  }

  async getAlertInfo(alertId: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/service/get_alert_info/${alertId}`);
  }

  async dropAlert(alertId: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/service/drop_alert/${alertId}`);
  }
}
