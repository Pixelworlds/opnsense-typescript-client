import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Ids module

// Model field types

// Service types
export interface IdsServiceDropAlertLogRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsServiceDropAlertLogResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsServiceGetAlertInfoResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsServiceGetAlertLogsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsServiceQueryAlertsRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsServiceQueryAlertsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsServiceReloadRulesRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsServiceReloadRulesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsServiceUpdateRulesRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsServiceUpdateRulesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface IdsSettingsAddPolicyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsSettingsAddPolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsAddPolicyRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsSettingsAddPolicyRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsAddUserRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsSettingsAddUserRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsCheckPolicyRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsDelPolicyRequest {
  uuid: string;
}

export interface IdsSettingsDelPolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsDelPolicyRuleRequest {
  uuid: string;
}

export interface IdsSettingsDelPolicyRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsDelUserRuleRequest {
  uuid: string;
}

export interface IdsSettingsDelUserRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsGetPolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsGetPolicyRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsGetRuleInfoResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsGetRulesetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsGetRulesetpropertiesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsGetUserRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsListRuleMetadataResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsListRulesetsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsSearchInstalledRulesRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsSettingsSearchInstalledRulesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsSetPolicyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsSettingsSetPolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsSetPolicyRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsSettingsSetPolicyRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsSetRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsSettingsSetRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsSetRulesetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsSettingsSetRulesetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsSetRulesetpropertiesRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsSettingsSetRulesetpropertiesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsSetUserRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IdsSettingsSetUserRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsTogglePolicyRequest {
  enabled?: boolean;
}

export interface IdsSettingsTogglePolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsTogglePolicyRuleRequest {
  enabled?: boolean;
}

export interface IdsSettingsTogglePolicyRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsToggleRuleRequest {
  enabled?: boolean;
}

export interface IdsSettingsToggleRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsToggleRulesetRequest {
  enabled?: boolean;
}

export interface IdsSettingsToggleRulesetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IdsSettingsToggleUserRuleRequest {
  enabled?: boolean;
}

export interface IdsSettingsToggleUserRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface IdsPolicy {
}

export interface IdsRule {
}

export interface IdsFile {
}

export interface IdsTag {
}

export class IdsApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/ids';
  }

  // Service methods
  async serviceDropAlertLog(data?: IdsServiceDropAlertLogRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsServiceDropAlertLogResponse>> {
    return this.client.post(`${this.basePath}/service/drop_alert_log`, data, config);
  }

  async serviceGetAlertInfo(alertId: string, fileid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsServiceGetAlertInfoResponse>> {
    return this.client.get(`${this.basePath}/service/get_alert_info/${alertId}/${fileid}`, config);
  }

  async serviceGetAlertLogs(config?: AxiosRequestConfig): Promise<AxiosResponse<IdsServiceGetAlertLogsResponse>> {
    return this.client.get(`${this.basePath}/service/get_alert_logs`, config);
  }

  async serviceQueryAlerts(data?: IdsServiceQueryAlertsRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsServiceQueryAlertsResponse>> {
    return this.client.post(`${this.basePath}/service/query_alerts`, data, config);
  }

  async serviceReconfigure(data?: IdsServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceReloadRules(data?: IdsServiceReloadRulesRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsServiceReloadRulesResponse>> {
    return this.client.post(`${this.basePath}/service/reload_rules`, data, config);
  }

  async serviceRestart(data?: IdsServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: IdsServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<IdsServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: IdsServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

  async serviceUpdateRules(wait?: string, data?: IdsServiceUpdateRulesRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsServiceUpdateRulesResponse>> {
    return this.client.post(`${this.basePath}/service/update_rules/${wait}`, data, config);
  }


  // Settings methods
  async settingsAddPolicy(data?: IdsSettingsAddPolicyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsAddPolicyResponse>> {
    return this.client.post(`${this.basePath}/settings/add_policy`, data, config);
  }

  async settingsAddPolicyRule(data?: IdsSettingsAddPolicyRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsAddPolicyRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/add_policy_rule`, data, config);
  }

  async settingsAddUserRule(data?: IdsSettingsAddUserRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsAddUserRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/add_user_rule`, data, config);
  }

  async settingsCheckPolicyRule(config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsCheckPolicyRuleResponse>> {
    return this.client.get(`${this.basePath}/settings/check_policy_rule`, config);
  }

  async settingsDelPolicy(uuid: string, data?: IdsSettingsDelPolicyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsDelPolicyResponse>> {
    return this.client.post(`${this.basePath}/settings/del_policy/${uuid}`, data, config);
  }

  async settingsDelPolicyRule(uuid: string, data?: IdsSettingsDelPolicyRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsDelPolicyRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/del_policy_rule/${uuid}`, data, config);
  }

  async settingsDelUserRule(uuid: string, data?: IdsSettingsDelUserRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsDelUserRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/del_user_rule/${uuid}`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetPolicy(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsGetPolicyResponse>> {
    return this.client.get(`${this.basePath}/settings/get_policy/${uuid}`, config);
  }

  async settingsGetPolicyRule(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsGetPolicyRuleResponse>> {
    return this.client.get(`${this.basePath}/settings/get_policy_rule/${uuid}`, config);
  }

  async settingsGetRuleInfo(sid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsGetRuleInfoResponse>> {
    return this.client.get(`${this.basePath}/settings/get_rule_info/${sid}`, config);
  }

  async settingsGetRuleset(id: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsGetRulesetResponse>> {
    return this.client.get(`${this.basePath}/settings/get_ruleset/${id}`, config);
  }

  async settingsGetRulesetproperties(config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsGetRulesetpropertiesResponse>> {
    return this.client.get(`${this.basePath}/settings/get_rulesetproperties`, config);
  }

  async settingsGetUserRule(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsGetUserRuleResponse>> {
    return this.client.get(`${this.basePath}/settings/get_user_rule/${uuid}`, config);
  }

  async settingsListRuleMetadata(config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsListRuleMetadataResponse>> {
    return this.client.get(`${this.basePath}/settings/list_rule_metadata`, config);
  }

  async settingsListRulesets(config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsListRulesetsResponse>> {
    return this.client.get(`${this.basePath}/settings/list_rulesets`, config);
  }

  async settingsSearchInstalledRules(data?: IdsSettingsSearchInstalledRulesRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsSearchInstalledRulesResponse>> {
    return this.client.post(`${this.basePath}/settings/search_installed_rules`, data, config);
  }

  async settingsSet(data?: IdsSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetPolicy(uuid: string, data?: IdsSettingsSetPolicyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsSetPolicyResponse>> {
    return this.client.post(`${this.basePath}/settings/set_policy/${uuid}`, data, config);
  }

  async settingsSetPolicyRule(uuid: string, data?: IdsSettingsSetPolicyRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsSetPolicyRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/set_policy_rule/${uuid}`, data, config);
  }

  async settingsSetRule(sid: string, data?: IdsSettingsSetRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsSetRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/set_rule/${sid}`, data, config);
  }

  async settingsSetRuleset(filename: string, data?: IdsSettingsSetRulesetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsSetRulesetResponse>> {
    return this.client.post(`${this.basePath}/settings/set_ruleset/${filename}`, data, config);
  }

  async settingsSetRulesetproperties(data?: IdsSettingsSetRulesetpropertiesRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsSetRulesetpropertiesResponse>> {
    return this.client.post(`${this.basePath}/settings/set_rulesetproperties`, data, config);
  }

  async settingsSetUserRule(uuid: string, data?: IdsSettingsSetUserRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsSetUserRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/set_user_rule/${uuid}`, data, config);
  }

  async settingsTogglePolicy(uuid: string, enabled?: string, data?: IdsSettingsTogglePolicyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsTogglePolicyResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_policy/${uuid}/${enabled}`, data, config);
  }

  async settingsTogglePolicyRule(uuid: string, enabled?: string, data?: IdsSettingsTogglePolicyRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsTogglePolicyRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_policy_rule/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleRule(sids: string, enabled?: string, data?: IdsSettingsToggleRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsToggleRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_rule/${sids}/${enabled}`, data, config);
  }

  async settingsToggleRuleset(filenames: string, enabled?: string, data?: IdsSettingsToggleRulesetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsToggleRulesetResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_ruleset/${filenames}/${enabled}`, data, config);
  }

  async settingsToggleUserRule(uuid: string, enabled?: string, data?: IdsSettingsToggleUserRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IdsSettingsToggleUserRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_user_rule/${uuid}/${enabled}`, data, config);
  }

}
