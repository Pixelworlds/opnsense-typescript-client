import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class IdsService extends BaseModule {
  /**
   * Execute drop alert log for ids service
   */
  async dropAlertLog(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/service/drop_alert_log`, data);
  }

  /**
   * Get get alert info for ids service
   */
  async getAlertInfo(alertId: string, fileid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/ids/service/get_alert_info/${alertId}/${fileid}`);
  }

  /**
   * Get get alert logs for ids service
   */
  async getAlertLogs(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/ids/service/get_alert_logs`);
  }

  /**
   * Execute query alerts for ids service
   */
  async queryAlerts(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/service/query_alerts`, data);
  }

  /**
   * Execute reconfigure for ids service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ids/ids/service/reconfigure`, data);
  }

  /**
   * Execute reload rules for ids service
   */
  async reloadRules(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/service/reload_rules`, data);
  }

  /**
   * Execute restart for ids service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ids/ids/service/restart`, data);
  }

  /**
   * Execute start for ids service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ids/ids/service/start`, data);
  }

  /**
   * Get status for ids service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/ids/ids/service/status`);
  }

  /**
   * Execute stop for ids service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ids/ids/service/stop`, data);
  }

  /**
   * Execute update rules for ids service
   */
  async updateRules(wait: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/service/update_rules/${wait}`, data);
  }
}

export class IdsSettings extends BaseModule {
  /**
   * Execute add policy for ids settings
   */
  async addPolicy(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/add_policy`, data);
  }

  /**
   * Execute add policy rule for ids settings
   */
  async addPolicyRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/add_policy_rule`, data);
  }

  /**
   * Execute add user rule for ids settings
   */
  async addUserRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/add_user_rule`, data);
  }

  /**
   * Get check policy rule for ids settings
   */
  async checkPolicyRule(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/ids/settings/check_policy_rule`);
  }

  /**
   * Execute del policy for ids settings
   */
  async delPolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/del_policy/${uuid}`, data);
  }

  /**
   * Execute del policy rule for ids settings
   */
  async delPolicyRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/del_policy_rule/${uuid}`, data);
  }

  /**
   * Execute del user rule for ids settings
   */
  async delUserRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/del_user_rule/${uuid}`, data);
  }

  /**
   * Get get for ids settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/ids/settings/get`);
  }

  /**
   * Get get policy for ids settings
   */
  async getPolicy(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/ids/settings/get_policy/${uuid}`);
  }

  /**
   * Get get policy rule for ids settings
   */
  async getPolicyRule(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/ids/settings/get_policy_rule/${uuid}`);
  }

  /**
   * Get get rule info for ids settings
   */
  async getRuleInfo(sid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/ids/settings/get_rule_info/${sid}`);
  }

  /**
   * Get get ruleset for ids settings
   */
  async getRuleset(id: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/ids/settings/get_ruleset/${id}`);
  }

  /**
   * Get get rulesetproperties for ids settings
   */
  async getRulesetproperties(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/ids/settings/get_rulesetproperties`);
  }

  /**
   * Get get user rule for ids settings
   */
  async getUserRule(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/ids/settings/get_user_rule/${uuid}`);
  }

  /**
   * Get list rule metadata for ids settings
   */
  async listRuleMetadata(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/ids/settings/list_rule_metadata`);
  }

  /**
   * Get list rulesets for ids settings
   */
  async listRulesets(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ids/ids/settings/list_rulesets`);
  }

  /**
   * Execute search installed rules for ids settings
   */
  async searchInstalledRules(params?: Record<string, any>): Promise<ApiResponse<SearchResult>> {
    return this.http.post(`/api/ids/ids/settings/search_installed_rules`, data);
  }

  /**
   * Execute set for ids settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/set`, data);
  }

  /**
   * Execute set policy for ids settings
   */
  async setPolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/set_policy/${uuid}`, data);
  }

  /**
   * Execute set policy rule for ids settings
   */
  async setPolicyRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/set_policy_rule/${uuid}`, data);
  }

  /**
   * Execute set rule for ids settings
   */
  async setRule(sid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/set_rule/${sid}`, data);
  }

  /**
   * Execute set ruleset for ids settings
   */
  async setRuleset(filename: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/set_ruleset/${filename}`, data);
  }

  /**
   * Execute set rulesetproperties for ids settings
   */
  async setRulesetproperties(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/set_rulesetproperties`, data);
  }

  /**
   * Execute set user rule for ids settings
   */
  async setUserRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/set_user_rule/${uuid}`, data);
  }

  /**
   * Execute toggle policy for ids settings
   */
  async togglePolicy(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/toggle_policy/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle policy rule for ids settings
   */
  async togglePolicyRule(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/toggle_policy_rule/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle rule for ids settings
   */
  async toggleRule(sids: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/toggle_rule/${sids}/${enabled}`, data);
  }

  /**
   * Execute toggle ruleset for ids settings
   */
  async toggleRuleset(filenames: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/toggle_ruleset/${filenames}/${enabled}`, data);
  }

  /**
   * Execute toggle user rule for ids settings
   */
  async toggleUserRule(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ids/ids/settings/toggle_user_rule/${uuid}/${enabled}`, data);
  }
}

// Main module class
export class IdsModule extends BaseModule {
  public readonly service: IdsService;
  public readonly settings: IdsSettings;

  constructor(http: any) {
    super(http);
    this.service = new IdsService(http);
    this.settings = new IdsSettings(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/ids/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/ids/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/ids/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/ids/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/ids/service/reconfigure');
  }
}