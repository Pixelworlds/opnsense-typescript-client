import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class IdsAlerts {
  constructor(private http: any) {}

  async query(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/ids/service/query_alerts', params);
  }

  async getInfo(alertId: string, fileId?: string): Promise<ApiResponse<any>> {
    const path = fileId
      ? `/api/ids/service/get_alert_info/${alertId}/${fileId}`
      : `/api/ids/service/get_alert_info/${alertId}`;
    return this.http.get(path);
  }

  async drop(alertId: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/service/drop_alert/${alertId}`);
  }

  async dropLog(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/service/drop_alert_log');
  }

  async getLogs(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ids/service/get_alert_logs');
  }
}

export class IdsPolicies {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/ids/settings/search_policy');
    }
    return this.http.post('/api/ids/settings/search_policy', params);
  }

  async add(policy: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/settings/add_policy', policy);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ids/settings/get_policy/${uuid}` : '/api/ids/settings/get_policy';
    return this.http.get(path);
  }

  async set(uuid: string, policy: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/set_policy/${uuid}`, policy);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/del_policy/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/ids/settings/toggle_policy/${uuid}/${enabled ? '1' : '0'}`
        : `/api/ids/settings/toggle_policy/${uuid}`;
    return this.http.post(path);
  }

  // Policy rule management
  async addRule(policyUuid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/add_policy_rule/${policyUuid}`, rule);
  }

  async deleteRule(policyUuid: string, ruleUuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/del_policy_rule/${policyUuid}/${ruleUuid}`);
  }

  async getRule(policyUuid: string, ruleUuid?: string): Promise<ApiResponse<any>> {
    const path = ruleUuid
      ? `/api/ids/settings/get_policy_rule/${policyUuid}/${ruleUuid}`
      : `/api/ids/settings/get_policy_rule/${policyUuid}`;
    return this.http.get(path);
  }

  async setRule(policyUuid: string, ruleUuid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/set_policy_rule/${policyUuid}/${ruleUuid}`, rule);
  }

  async toggleRule(policyUuid: string, ruleUuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/ids/settings/toggle_policy_rule/${policyUuid}/${ruleUuid}/${enabled ? '1' : '0'}`
        : `/api/ids/settings/toggle_policy_rule/${policyUuid}/${ruleUuid}`;
    return this.http.post(path);
  }
}

export class IdsRules {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/ids/settings/search_rule');
    }
    return this.http.post('/api/ids/settings/search_rule', params);
  }

  async get(sid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/settings/get_rule/${sid}`);
  }

  async set(sid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/set_rule/${sid}`, rule);
  }

  async getInfo(sid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/settings/rule_info/${sid}`);
  }

  async enable(sid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/enable_rule/${sid}`);
  }

  async disable(sid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/disable_rule/${sid}`);
  }

  async toggle(sid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/toggle_rule/${sid}`);
  }
}

export class IdsRulesets {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ids/settings/get_ruleset');
  }

  async toggle(rulesetName: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/ids/settings/toggle_ruleset/${rulesetName}/${enabled ? '1' : '0'}`
        : `/api/ids/settings/toggle_ruleset/${rulesetName}`;
    return this.http.post(path);
  }

  async enable(rulesetName: string): Promise<ApiResponse<ApiResult>> {
    return this.toggle(rulesetName, true);
  }

  async disable(rulesetName: string): Promise<ApiResponse<ApiResult>> {
    return this.toggle(rulesetName, false);
  }
}

export class IdsService {
  constructor(private http: any) {}

  async getStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ids/service/status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/service/start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/service/stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/service/reconfigure');
  }

  async reload(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/service/reload');
  }

  async reloadRules(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/service/reload_rules');
  }

  async updateRules(wait?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      wait !== undefined ? `/api/ids/service/update_rules/${wait ? '1' : '0'}` : '/api/ids/service/update_rules';
    return this.http.post(path);
  }
}

export class IdsSettings {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ids/settings/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/settings/set', config);
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ids/settings/get_general');
  }

  async setGeneral(settings: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/settings/set_general', settings);
  }
}

export class IdsUserRules {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/ids/settings/search_userrule');
    }
    return this.http.post('/api/ids/settings/search_userrule', params);
  }

  async add(rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ids/settings/add_userrule', rule);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ids/settings/get_userrule/${uuid}` : '/api/ids/settings/get_userrule';
    return this.http.get(path);
  }

  async set(uuid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/set_userrule/${uuid}`, rule);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/settings/del_userrule/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/ids/settings/toggle_userrule/${uuid}/${enabled ? '1' : '0'}`
        : `/api/ids/settings/toggle_userrule/${uuid}`;
    return this.http.post(path);
  }
}

export class IdsModule extends BaseModule {
  public readonly alerts: IdsAlerts;
  public readonly policies: IdsPolicies;
  public readonly rules: IdsRules;
  public readonly rulesets: IdsRulesets;
  public readonly service: IdsService;
  public readonly settings: IdsSettings;
  public readonly userRules: IdsUserRules;

  constructor(httpClient: any) {
    super(httpClient);
    this.alerts = new IdsAlerts(this.http);
    this.policies = new IdsPolicies(this.http);
    this.rules = new IdsRules(this.http);
    this.rulesets = new IdsRulesets(this.http);
    this.service = new IdsService(this.http);
    this.settings = new IdsSettings(this.http);
    this.userRules = new IdsUserRules(this.http);
  }

  // Legacy methods for backward compatibility
  async getConfig(): Promise<ApiResponse<any>> {
    return this.settings.get();
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.set(config);
  }

  async getGeneralSettings(): Promise<ApiResponse<any>> {
    return this.settings.getGeneral();
  }

  async setGeneralSettings(settings: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.setGeneral(settings);
  }

  async searchPolicies(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.policies.search(params);
  }

  async addPolicy(policy: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.policies.add(policy);
  }

  async getPolicy(uuid?: string): Promise<ApiResponse<any>> {
    return this.policies.get(uuid);
  }

  async updatePolicy(uuid: string, policy: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.policies.set(uuid, policy);
  }

  async deletePolicy(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.policies.delete(uuid);
  }

  async togglePolicy(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.policies.toggle(uuid, enabled);
  }

  async searchUserRules(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.userRules.search(params);
  }

  async addUserRule(rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.userRules.add(rule);
  }

  async getUserRule(uuid?: string): Promise<ApiResponse<any>> {
    return this.userRules.get(uuid);
  }

  async updateUserRule(uuid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.userRules.set(uuid, rule);
  }

  async deleteUserRule(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.userRules.delete(uuid);
  }

  async toggleUserRule(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.userRules.toggle(uuid, enabled);
  }

  async searchRules(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.rules.search(params);
  }

  async getRule(sid: string): Promise<ApiResponse<any>> {
    return this.rules.get(sid);
  }

  async setRule(sid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.rules.set(sid, rule);
  }

  async getRuleInfo(sid: string): Promise<ApiResponse<any>> {
    return this.rules.getInfo(sid);
  }

  async toggleRule(sid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    if (enabled !== undefined) {
      return enabled ? this.rules.enable(sid) : this.rules.disable(sid);
    }
    return this.rules.toggle(sid);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.service.start();
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.service.stop();
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.service.restart();
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.service.reconfigure();
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.service.getStatus();
  }

  async reload(): Promise<ApiResponse<ApiResult>> {
    return this.service.reload();
  }

  async updateRules(): Promise<ApiResponse<ApiResult>> {
    return this.service.updateRules();
  }

  async queryAlerts(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.alerts.query(params);
  }

  async getAlertInfo(alertId: string): Promise<ApiResponse<any>> {
    return this.alerts.getInfo(alertId);
  }

  async dropAlert(alertId: string): Promise<ApiResponse<ApiResult>> {
    return this.alerts.drop(alertId);
  }

  // New convenience methods
  async getAllPolicies(): Promise<ApiResponse<any>> {
    return this.policies.search();
  }

  async getAllUserRules(): Promise<ApiResponse<any>> {
    return this.userRules.search();
  }

  async getAllRules(): Promise<ApiResponse<any>> {
    return this.rules.search();
  }

  async enablePolicy(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.policies.toggle(uuid, true);
  }

  async disablePolicy(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.policies.toggle(uuid, false);
  }

  async enableUserRule(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.userRules.toggle(uuid, true);
  }

  async disableUserRule(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.userRules.toggle(uuid, false);
  }

  async enableRule(sid: string): Promise<ApiResponse<ApiResult>> {
    return this.rules.enable(sid);
  }

  async disableRule(sid: string): Promise<ApiResponse<ApiResult>> {
    return this.rules.disable(sid);
  }

  async enableRuleset(rulesetName: string): Promise<ApiResponse<ApiResult>> {
    return this.rulesets.enable(rulesetName);
  }

  async disableRuleset(rulesetName: string): Promise<ApiResponse<ApiResult>> {
    return this.rulesets.disable(rulesetName);
  }

  async clearAlertLog(): Promise<ApiResponse<ApiResult>> {
    return this.alerts.dropLog();
  }

  async getAllAlertLogs(): Promise<ApiResponse<any>> {
    return this.alerts.getLogs();
  }

  async updateRulesAndWait(): Promise<ApiResponse<ApiResult>> {
    return this.service.updateRules(true);
  }

  async getIdsOverview(): Promise<{
    status: any;
    policies: any;
    userRules: any;
    rulesets: any;
    alerts: any;
    config: any;
    timestamp: string;
  }> {
    const [status, policies, userRules, rulesets, config, alerts] = await Promise.allSettled([
      this.getStatus(),
      this.getAllPolicies(),
      this.getAllUserRules(),
      this.rulesets.get(),
      this.getConfig(),
      this.queryAlerts({ limit: 10 }).catch(() => ({ data: null })),
    ]);

    return {
      status: status.status === 'fulfilled' ? status.value.data : null,
      policies: policies.status === 'fulfilled' ? policies.value.data : null,
      userRules: userRules.status === 'fulfilled' ? userRules.value.data : null,
      rulesets: rulesets.status === 'fulfilled' ? rulesets.value.data : null,
      alerts: alerts.status === 'fulfilled' ? alerts.value.data : null,
      config: config.status === 'fulfilled' ? config.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }

  async createPolicy(name: string, description?: string, enabled = true): Promise<ApiResponse<ApiResult>> {
    const policy = {
      enabled: enabled ? '1' : '0',
      name,
      description: description || `IDS policy ${name}`,
    };
    return this.addPolicy(policy);
  }

  async createUserRule(rule: string, description?: string, enabled = true): Promise<ApiResponse<ApiResult>> {
    const userRule = {
      enabled: enabled ? '1' : '0',
      rule,
      description: description || 'Custom user rule',
    };
    return this.addUserRule(userRule);
  }
}
