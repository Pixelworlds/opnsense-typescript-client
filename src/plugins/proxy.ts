import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Proxy module

// Model field types

// Service types
export interface ProxyServiceDownloadaclsRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyServiceDownloadaclsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyServiceFetchaclsRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyServiceFetchaclsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyServiceRefreshTemplateRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyServiceRefreshTemplateResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyServiceResetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyServiceResetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface ProxySettingsAddPACMatchRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxySettingsAddPACMatchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsAddPACProxyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxySettingsAddPACProxyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsAddPACRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxySettingsAddPACRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsAddRemoteBlacklistRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxySettingsAddRemoteBlacklistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsDelPACMatchRequest {
  uuid: string;
}

export interface ProxySettingsDelPACMatchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsDelPACProxyRequest {
  uuid: string;
}

export interface ProxySettingsDelPACProxyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsDelPACRuleRequest {
  uuid: string;
}

export interface ProxySettingsDelPACRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsDelRemoteBlacklistRequest {
  uuid: string;
}

export interface ProxySettingsDelRemoteBlacklistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsFetchRBCronRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxySettingsFetchRBCronResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsGetPACMatchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsGetPACProxyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsGetPACRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsGetRemoteBlacklistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsSearchRemoteBlacklistsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxySettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsSetPACMatchRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxySettingsSetPACMatchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsSetPACProxyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxySettingsSetPACProxyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsSetPACRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxySettingsSetPACRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsSetRemoteBlacklistRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxySettingsSetRemoteBlacklistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsTogglePACRuleRequest {
  enabled?: boolean;
}

export interface ProxySettingsTogglePACRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxySettingsToggleRemoteBlacklistRequest {
  enabled?: boolean;
}

export interface ProxySettingsToggleRemoteBlacklistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Template types
export interface ProxyTemplateGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyTemplateResetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyTemplateResetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyTemplateSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyTemplateSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Acl types
export interface ProxyAclAddCustomPolicyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyAclAddCustomPolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyAclAddPolicyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyAclAddPolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyAclApplyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyAclApplyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyAclDelCustomPolicyRequest {
  uuid: string;
}

export interface ProxyAclDelCustomPolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyAclDelPolicyRequest {
  uuid: string;
}

export interface ProxyAclDelPolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyAclGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyAclGetCustomPolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyAclGetPolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyAclSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyAclSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyAclSetCustomPolicyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyAclSetCustomPolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyAclSetPolicyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyAclSetPolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyAclTestRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyAclTestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyAclToggleCustomPolicyRequest {
  enabled?: boolean;
}

export interface ProxyAclToggleCustomPolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyAclTogglePolicyRequest {
  enabled?: boolean;
}

export interface ProxyAclTogglePolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface ProxyBlacklist {
}

export interface ProxyProxy {
}

export interface ProxyMatch {
}

export interface ProxyRule {
}

export class ProxyApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceDownloadacls(data?: ProxyServiceDownloadaclsRequest, config?: RequestConfig): Promise<ApiResponse<ProxyServiceDownloadaclsResponse>> {
    return this.http.post(`/api/proxy/service/downloadacls`, data, config);
  }

  async serviceFetchacls(data?: ProxyServiceFetchaclsRequest, config?: RequestConfig): Promise<ApiResponse<ProxyServiceFetchaclsResponse>> {
    return this.http.post(`/api/proxy/service/fetchacls`, data, config);
  }

  async serviceReconfigure(data?: ProxyServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<ProxyServiceReconfigureResponse>> {
    return this.http.post(`/api/proxy/service/reconfigure`, data, config);
  }

  async serviceRefreshTemplate(data?: ProxyServiceRefreshTemplateRequest, config?: RequestConfig): Promise<ApiResponse<ProxyServiceRefreshTemplateResponse>> {
    return this.http.post(`/api/proxy/service/refresh_template`, data, config);
  }

  async serviceReset(data?: ProxyServiceResetRequest, config?: RequestConfig): Promise<ApiResponse<ProxyServiceResetResponse>> {
    return this.http.post(`/api/proxy/service/reset`, data, config);
  }

  async serviceRestart(config?: RequestConfig): Promise<ApiResponse<ProxyServiceRestartResponse>> {
    return this.http.get(`/api/proxy/service/restart`, config);
  }

  async serviceStart(config?: RequestConfig): Promise<ApiResponse<ProxyServiceStartResponse>> {
    return this.http.get(`/api/proxy/service/start`, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<ProxyServiceStatusResponse>> {
    return this.http.get(`/api/proxy/service/status`, config);
  }

  async serviceStop(data?: ProxyServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<ProxyServiceStopResponse>> {
    return this.http.post(`/api/proxy/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddPACMatch(data?: ProxySettingsAddPACMatchRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsAddPACMatchResponse>> {
    return this.http.post(`/api/proxy/settings/add_p_a_c_match`, data, config);
  }

  async settingsAddPACProxy(data?: ProxySettingsAddPACProxyRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsAddPACProxyResponse>> {
    return this.http.post(`/api/proxy/settings/add_p_a_c_proxy`, data, config);
  }

  async settingsAddPACRule(data?: ProxySettingsAddPACRuleRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsAddPACRuleResponse>> {
    return this.http.post(`/api/proxy/settings/add_p_a_c_rule`, data, config);
  }

  async settingsAddRemoteBlacklist(data?: ProxySettingsAddRemoteBlacklistRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsAddRemoteBlacklistResponse>> {
    return this.http.post(`/api/proxy/settings/add_remote_blacklist`, data, config);
  }

  async settingsDelPACMatch(uuid: string, data?: ProxySettingsDelPACMatchRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsDelPACMatchResponse>> {
    return this.http.post(`/api/proxy/settings/del_p_a_c_match/${uuid}`, data, config);
  }

  async settingsDelPACProxy(uuid: string, data?: ProxySettingsDelPACProxyRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsDelPACProxyResponse>> {
    return this.http.post(`/api/proxy/settings/del_p_a_c_proxy/${uuid}`, data, config);
  }

  async settingsDelPACRule(uuid: string, data?: ProxySettingsDelPACRuleRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsDelPACRuleResponse>> {
    return this.http.post(`/api/proxy/settings/del_p_a_c_rule/${uuid}`, data, config);
  }

  async settingsDelRemoteBlacklist(uuid: string, data?: ProxySettingsDelRemoteBlacklistRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsDelRemoteBlacklistResponse>> {
    return this.http.post(`/api/proxy/settings/del_remote_blacklist/${uuid}`, data, config);
  }

  async settingsFetchRBCron(data?: ProxySettingsFetchRBCronRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsFetchRBCronResponse>> {
    return this.http.post(`/api/proxy/settings/fetch_r_b_cron`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<ProxySettingsGetResponse>> {
    return this.http.get(`/api/proxy/settings/get`, config);
  }

  async settingsGetPACMatch(uuid?: string, config?: RequestConfig): Promise<ApiResponse<ProxySettingsGetPACMatchResponse>> {
    return this.http.get(`/api/proxy/settings/get_p_a_c_match/${uuid}`, config);
  }

  async settingsGetPACProxy(uuid?: string, config?: RequestConfig): Promise<ApiResponse<ProxySettingsGetPACProxyResponse>> {
    return this.http.get(`/api/proxy/settings/get_p_a_c_proxy/${uuid}`, config);
  }

  async settingsGetPACRule(uuid?: string, config?: RequestConfig): Promise<ApiResponse<ProxySettingsGetPACRuleResponse>> {
    return this.http.get(`/api/proxy/settings/get_p_a_c_rule/${uuid}`, config);
  }

  async settingsGetRemoteBlacklist(uuid?: string, config?: RequestConfig): Promise<ApiResponse<ProxySettingsGetRemoteBlacklistResponse>> {
    return this.http.get(`/api/proxy/settings/get_remote_blacklist/${uuid}`, config);
  }

  async settingsSearchRemoteBlacklists(config?: RequestConfig): Promise<ApiResponse<ProxySettingsSearchRemoteBlacklistsResponse>> {
    return this.http.get(`/api/proxy/settings/search_remote_blacklists`, config);
  }

  async settingsSet(data?: ProxySettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsSetResponse>> {
    return this.http.post(`/api/proxy/settings/set`, data, config);
  }

  async settingsSetPACMatch(uuid: string, data?: ProxySettingsSetPACMatchRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsSetPACMatchResponse>> {
    return this.http.post(`/api/proxy/settings/set_p_a_c_match/${uuid}`, data, config);
  }

  async settingsSetPACProxy(uuid: string, data?: ProxySettingsSetPACProxyRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsSetPACProxyResponse>> {
    return this.http.post(`/api/proxy/settings/set_p_a_c_proxy/${uuid}`, data, config);
  }

  async settingsSetPACRule(uuid: string, data?: ProxySettingsSetPACRuleRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsSetPACRuleResponse>> {
    return this.http.post(`/api/proxy/settings/set_p_a_c_rule/${uuid}`, data, config);
  }

  async settingsSetRemoteBlacklist(uuid: string, data?: ProxySettingsSetRemoteBlacklistRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsSetRemoteBlacklistResponse>> {
    return this.http.post(`/api/proxy/settings/set_remote_blacklist/${uuid}`, data, config);
  }

  async settingsTogglePACRule(uuid: string, data?: ProxySettingsTogglePACRuleRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsTogglePACRuleResponse>> {
    return this.http.post(`/api/proxy/settings/toggle_p_a_c_rule/${uuid}`, data, config);
  }

  async settingsToggleRemoteBlacklist(uuid: string, data?: ProxySettingsToggleRemoteBlacklistRequest, config?: RequestConfig): Promise<ApiResponse<ProxySettingsToggleRemoteBlacklistResponse>> {
    return this.http.post(`/api/proxy/settings/toggle_remote_blacklist/${uuid}`, data, config);
  }


  // Template methods
  async templateGet(config?: RequestConfig): Promise<ApiResponse<ProxyTemplateGetResponse>> {
    return this.http.get(`/api/proxy/template/get`, config);
  }

  async templateReset(data?: ProxyTemplateResetRequest, config?: RequestConfig): Promise<ApiResponse<ProxyTemplateResetResponse>> {
    return this.http.post(`/api/proxy/template/reset`, data, config);
  }

  async templateSet(data?: ProxyTemplateSetRequest, config?: RequestConfig): Promise<ApiResponse<ProxyTemplateSetResponse>> {
    return this.http.post(`/api/proxy/template/set`, data, config);
  }


  // Acl methods
  async aclAddCustomPolicy(data?: ProxyAclAddCustomPolicyRequest, config?: RequestConfig): Promise<ApiResponse<ProxyAclAddCustomPolicyResponse>> {
    return this.http.post(`/api/proxy/acl/add_custom_policy`, data, config);
  }

  async aclAddPolicy(data?: ProxyAclAddPolicyRequest, config?: RequestConfig): Promise<ApiResponse<ProxyAclAddPolicyResponse>> {
    return this.http.post(`/api/proxy/acl/add_policy`, data, config);
  }

  async aclApply(data?: ProxyAclApplyRequest, config?: RequestConfig): Promise<ApiResponse<ProxyAclApplyResponse>> {
    return this.http.post(`/api/proxy/acl/apply`, data, config);
  }

  async aclDelCustomPolicy(uuid: string, data?: ProxyAclDelCustomPolicyRequest, config?: RequestConfig): Promise<ApiResponse<ProxyAclDelCustomPolicyResponse>> {
    return this.http.post(`/api/proxy/acl/del_custom_policy/${uuid}`, data, config);
  }

  async aclDelPolicy(uuid: string, data?: ProxyAclDelPolicyRequest, config?: RequestConfig): Promise<ApiResponse<ProxyAclDelPolicyResponse>> {
    return this.http.post(`/api/proxy/acl/del_policy/${uuid}`, data, config);
  }

  async aclGet(config?: RequestConfig): Promise<ApiResponse<ProxyAclGetResponse>> {
    return this.http.get(`/api/proxy/acl/get`, config);
  }

  async aclGetCustomPolicy(uuid?: string, config?: RequestConfig): Promise<ApiResponse<ProxyAclGetCustomPolicyResponse>> {
    return this.http.get(`/api/proxy/acl/get_custom_policy/${uuid}`, config);
  }

  async aclGetPolicy(uuid?: string, config?: RequestConfig): Promise<ApiResponse<ProxyAclGetPolicyResponse>> {
    return this.http.get(`/api/proxy/acl/get_policy/${uuid}`, config);
  }

  async aclSet(data?: ProxyAclSetRequest, config?: RequestConfig): Promise<ApiResponse<ProxyAclSetResponse>> {
    return this.http.post(`/api/proxy/acl/set`, data, config);
  }

  async aclSetCustomPolicy(uuid: string, data?: ProxyAclSetCustomPolicyRequest, config?: RequestConfig): Promise<ApiResponse<ProxyAclSetCustomPolicyResponse>> {
    return this.http.post(`/api/proxy/acl/set_custom_policy/${uuid}`, data, config);
  }

  async aclSetPolicy(uuid: string, data?: ProxyAclSetPolicyRequest, config?: RequestConfig): Promise<ApiResponse<ProxyAclSetPolicyResponse>> {
    return this.http.post(`/api/proxy/acl/set_policy/${uuid}`, data, config);
  }

  async aclTest(data?: ProxyAclTestRequest, config?: RequestConfig): Promise<ApiResponse<ProxyAclTestResponse>> {
    return this.http.post(`/api/proxy/acl/test`, data, config);
  }

  async aclToggleCustomPolicy(uuid: string, enabled?: string, data?: ProxyAclToggleCustomPolicyRequest, config?: RequestConfig): Promise<ApiResponse<ProxyAclToggleCustomPolicyResponse>> {
    return this.http.post(`/api/proxy/acl/toggle_custom_policy/${uuid}/${enabled}`, data, config);
  }

  async aclTogglePolicy(uuid: string, enabled?: string, data?: ProxyAclTogglePolicyRequest, config?: RequestConfig): Promise<ApiResponse<ProxyAclTogglePolicyResponse>> {
    return this.http.post(`/api/proxy/acl/toggle_policy/${uuid}/${enabled}`, data, config);
  }

}
