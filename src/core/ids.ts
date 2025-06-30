import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceDropAlertLog(data?: IdsServiceDropAlertLogRequest, config?: RequestConfig): Promise<ApiResponse<IdsServiceDropAlertLogResponse>> {
    return this.http.post(`/api/ids/service/drop_alert_log`, data, config);
  }

  async serviceGetAlertInfo(alertId: string, fileid?: string, config?: RequestConfig): Promise<ApiResponse<IdsServiceGetAlertInfoResponse>> {
    return this.http.get(`/api/ids/service/get_alert_info/${alertId}/${fileid}`, config);
  }

  async serviceGetAlertLogs(config?: RequestConfig): Promise<ApiResponse<IdsServiceGetAlertLogsResponse>> {
    return this.http.get(`/api/ids/service/get_alert_logs`, config);
  }

  async serviceQueryAlerts(data?: IdsServiceQueryAlertsRequest, config?: RequestConfig): Promise<ApiResponse<IdsServiceQueryAlertsResponse>> {
    return this.http.post(`/api/ids/service/query_alerts`, data, config);
  }

  async serviceReconfigure(data?: IdsServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<IdsServiceReconfigureResponse>> {
    return this.http.post(`/api/ids/service/reconfigure`, data, config);
  }

  async serviceReloadRules(data?: IdsServiceReloadRulesRequest, config?: RequestConfig): Promise<ApiResponse<IdsServiceReloadRulesResponse>> {
    return this.http.post(`/api/ids/service/reload_rules`, data, config);
  }

  async serviceRestart(data?: IdsServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<IdsServiceRestartResponse>> {
    return this.http.post(`/api/ids/service/restart`, data, config);
  }

  async serviceStart(data?: IdsServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<IdsServiceStartResponse>> {
    return this.http.post(`/api/ids/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<IdsServiceStatusResponse>> {
    return this.http.get(`/api/ids/service/status`, config);
  }

  async serviceStop(data?: IdsServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<IdsServiceStopResponse>> {
    return this.http.post(`/api/ids/service/stop`, data, config);
  }

  async serviceUpdateRules(wait?: string, data?: IdsServiceUpdateRulesRequest, config?: RequestConfig): Promise<ApiResponse<IdsServiceUpdateRulesResponse>> {
    return this.http.post(`/api/ids/service/update_rules/${wait}`, data, config);
  }


  // Settings methods
  async settingsAddPolicy(data?: IdsSettingsAddPolicyRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsAddPolicyResponse>> {
    return this.http.post(`/api/ids/settings/add_policy`, data, config);
  }

  async settingsAddPolicyRule(data?: IdsSettingsAddPolicyRuleRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsAddPolicyRuleResponse>> {
    return this.http.post(`/api/ids/settings/add_policy_rule`, data, config);
  }

  async settingsAddUserRule(data?: IdsSettingsAddUserRuleRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsAddUserRuleResponse>> {
    return this.http.post(`/api/ids/settings/add_user_rule`, data, config);
  }

  async settingsCheckPolicyRule(config?: RequestConfig): Promise<ApiResponse<IdsSettingsCheckPolicyRuleResponse>> {
    return this.http.get(`/api/ids/settings/check_policy_rule`, config);
  }

  async settingsDelPolicy(uuid: string, data?: IdsSettingsDelPolicyRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsDelPolicyResponse>> {
    return this.http.post(`/api/ids/settings/del_policy/${uuid}`, data, config);
  }

  async settingsDelPolicyRule(uuid: string, data?: IdsSettingsDelPolicyRuleRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsDelPolicyRuleResponse>> {
    return this.http.post(`/api/ids/settings/del_policy_rule/${uuid}`, data, config);
  }

  async settingsDelUserRule(uuid: string, data?: IdsSettingsDelUserRuleRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsDelUserRuleResponse>> {
    return this.http.post(`/api/ids/settings/del_user_rule/${uuid}`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<IdsSettingsGetResponse>> {
    return this.http.get(`/api/ids/settings/get`, config);
  }

  async settingsGetPolicy(uuid?: string, config?: RequestConfig): Promise<ApiResponse<IdsSettingsGetPolicyResponse>> {
    return this.http.get(`/api/ids/settings/get_policy/${uuid}`, config);
  }

  async settingsGetPolicyRule(uuid?: string, config?: RequestConfig): Promise<ApiResponse<IdsSettingsGetPolicyRuleResponse>> {
    return this.http.get(`/api/ids/settings/get_policy_rule/${uuid}`, config);
  }

  async settingsGetRuleInfo(sid?: string, config?: RequestConfig): Promise<ApiResponse<IdsSettingsGetRuleInfoResponse>> {
    return this.http.get(`/api/ids/settings/get_rule_info/${sid}`, config);
  }

  async settingsGetRuleset(id: string, config?: RequestConfig): Promise<ApiResponse<IdsSettingsGetRulesetResponse>> {
    return this.http.get(`/api/ids/settings/get_ruleset/${id}`, config);
  }

  async settingsGetRulesetproperties(config?: RequestConfig): Promise<ApiResponse<IdsSettingsGetRulesetpropertiesResponse>> {
    return this.http.get(`/api/ids/settings/get_rulesetproperties`, config);
  }

  async settingsGetUserRule(uuid?: string, config?: RequestConfig): Promise<ApiResponse<IdsSettingsGetUserRuleResponse>> {
    return this.http.get(`/api/ids/settings/get_user_rule/${uuid}`, config);
  }

  async settingsListRuleMetadata(config?: RequestConfig): Promise<ApiResponse<IdsSettingsListRuleMetadataResponse>> {
    return this.http.get(`/api/ids/settings/list_rule_metadata`, config);
  }

  async settingsListRulesets(config?: RequestConfig): Promise<ApiResponse<IdsSettingsListRulesetsResponse>> {
    return this.http.get(`/api/ids/settings/list_rulesets`, config);
  }

  async settingsSearchInstalledRules(data?: IdsSettingsSearchInstalledRulesRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsSearchInstalledRulesResponse>> {
    return this.http.post(`/api/ids/settings/search_installed_rules`, data, config);
  }

  async settingsSet(data?: IdsSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsSetResponse>> {
    return this.http.post(`/api/ids/settings/set`, data, config);
  }

  async settingsSetPolicy(uuid: string, data?: IdsSettingsSetPolicyRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsSetPolicyResponse>> {
    return this.http.post(`/api/ids/settings/set_policy/${uuid}`, data, config);
  }

  async settingsSetPolicyRule(uuid: string, data?: IdsSettingsSetPolicyRuleRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsSetPolicyRuleResponse>> {
    return this.http.post(`/api/ids/settings/set_policy_rule/${uuid}`, data, config);
  }

  async settingsSetRule(sid: string, data?: IdsSettingsSetRuleRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsSetRuleResponse>> {
    return this.http.post(`/api/ids/settings/set_rule/${sid}`, data, config);
  }

  async settingsSetRuleset(filename: string, data?: IdsSettingsSetRulesetRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsSetRulesetResponse>> {
    return this.http.post(`/api/ids/settings/set_ruleset/${filename}`, data, config);
  }

  async settingsSetRulesetproperties(data?: IdsSettingsSetRulesetpropertiesRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsSetRulesetpropertiesResponse>> {
    return this.http.post(`/api/ids/settings/set_rulesetproperties`, data, config);
  }

  async settingsSetUserRule(uuid: string, data?: IdsSettingsSetUserRuleRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsSetUserRuleResponse>> {
    return this.http.post(`/api/ids/settings/set_user_rule/${uuid}`, data, config);
  }

  async settingsTogglePolicy(uuid: string, enabled?: string, data?: IdsSettingsTogglePolicyRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsTogglePolicyResponse>> {
    return this.http.post(`/api/ids/settings/toggle_policy/${uuid}/${enabled}`, data, config);
  }

  async settingsTogglePolicyRule(uuid: string, enabled?: string, data?: IdsSettingsTogglePolicyRuleRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsTogglePolicyRuleResponse>> {
    return this.http.post(`/api/ids/settings/toggle_policy_rule/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleRule(sids: string, enabled?: string, data?: IdsSettingsToggleRuleRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsToggleRuleResponse>> {
    return this.http.post(`/api/ids/settings/toggle_rule/${sids}/${enabled}`, data, config);
  }

  async settingsToggleRuleset(filenames: string, enabled?: string, data?: IdsSettingsToggleRulesetRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsToggleRulesetResponse>> {
    return this.http.post(`/api/ids/settings/toggle_ruleset/${filenames}/${enabled}`, data, config);
  }

  async settingsToggleUserRule(uuid: string, enabled?: string, data?: IdsSettingsToggleUserRuleRequest, config?: RequestConfig): Promise<ApiResponse<IdsSettingsToggleUserRuleResponse>> {
    return this.http.post(`/api/ids/settings/toggle_user_rule/${uuid}/${enabled}`, data, config);
  }

}
