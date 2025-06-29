import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/proxy';
  }

  // Service methods
  async serviceDownloadacls(data?: ProxyServiceDownloadaclsRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyServiceDownloadaclsResponse>> {
    return this.client.post(`${this.basePath}/service/downloadacls`, data, config);
  }

  async serviceFetchacls(data?: ProxyServiceFetchaclsRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyServiceFetchaclsResponse>> {
    return this.client.post(`${this.basePath}/service/fetchacls`, data, config);
  }

  async serviceReconfigure(data?: ProxyServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRefreshTemplate(data?: ProxyServiceRefreshTemplateRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyServiceRefreshTemplateResponse>> {
    return this.client.post(`${this.basePath}/service/refresh_template`, data, config);
  }

  async serviceReset(data?: ProxyServiceResetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyServiceResetResponse>> {
    return this.client.post(`${this.basePath}/service/reset`, data, config);
  }

  async serviceRestart(config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyServiceRestartResponse>> {
    return this.client.get(`${this.basePath}/service/restart`, config);
  }

  async serviceStart(config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyServiceStartResponse>> {
    return this.client.get(`${this.basePath}/service/start`, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: ProxyServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddPACMatch(data?: ProxySettingsAddPACMatchRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsAddPACMatchResponse>> {
    return this.client.post(`${this.basePath}/settings/add_p_a_c_match`, data, config);
  }

  async settingsAddPACProxy(data?: ProxySettingsAddPACProxyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsAddPACProxyResponse>> {
    return this.client.post(`${this.basePath}/settings/add_p_a_c_proxy`, data, config);
  }

  async settingsAddPACRule(data?: ProxySettingsAddPACRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsAddPACRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/add_p_a_c_rule`, data, config);
  }

  async settingsAddRemoteBlacklist(data?: ProxySettingsAddRemoteBlacklistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsAddRemoteBlacklistResponse>> {
    return this.client.post(`${this.basePath}/settings/add_remote_blacklist`, data, config);
  }

  async settingsDelPACMatch(uuid: string, data?: ProxySettingsDelPACMatchRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsDelPACMatchResponse>> {
    return this.client.post(`${this.basePath}/settings/del_p_a_c_match/${uuid}`, data, config);
  }

  async settingsDelPACProxy(uuid: string, data?: ProxySettingsDelPACProxyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsDelPACProxyResponse>> {
    return this.client.post(`${this.basePath}/settings/del_p_a_c_proxy/${uuid}`, data, config);
  }

  async settingsDelPACRule(uuid: string, data?: ProxySettingsDelPACRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsDelPACRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/del_p_a_c_rule/${uuid}`, data, config);
  }

  async settingsDelRemoteBlacklist(uuid: string, data?: ProxySettingsDelRemoteBlacklistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsDelRemoteBlacklistResponse>> {
    return this.client.post(`${this.basePath}/settings/del_remote_blacklist/${uuid}`, data, config);
  }

  async settingsFetchRBCron(data?: ProxySettingsFetchRBCronRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsFetchRBCronResponse>> {
    return this.client.post(`${this.basePath}/settings/fetch_r_b_cron`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetPACMatch(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsGetPACMatchResponse>> {
    return this.client.get(`${this.basePath}/settings/get_p_a_c_match/${uuid}`, config);
  }

  async settingsGetPACProxy(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsGetPACProxyResponse>> {
    return this.client.get(`${this.basePath}/settings/get_p_a_c_proxy/${uuid}`, config);
  }

  async settingsGetPACRule(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsGetPACRuleResponse>> {
    return this.client.get(`${this.basePath}/settings/get_p_a_c_rule/${uuid}`, config);
  }

  async settingsGetRemoteBlacklist(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsGetRemoteBlacklistResponse>> {
    return this.client.get(`${this.basePath}/settings/get_remote_blacklist/${uuid}`, config);
  }

  async settingsSearchRemoteBlacklists(config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsSearchRemoteBlacklistsResponse>> {
    return this.client.get(`${this.basePath}/settings/search_remote_blacklists`, config);
  }

  async settingsSet(data?: ProxySettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetPACMatch(uuid: string, data?: ProxySettingsSetPACMatchRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsSetPACMatchResponse>> {
    return this.client.post(`${this.basePath}/settings/set_p_a_c_match/${uuid}`, data, config);
  }

  async settingsSetPACProxy(uuid: string, data?: ProxySettingsSetPACProxyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsSetPACProxyResponse>> {
    return this.client.post(`${this.basePath}/settings/set_p_a_c_proxy/${uuid}`, data, config);
  }

  async settingsSetPACRule(uuid: string, data?: ProxySettingsSetPACRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsSetPACRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/set_p_a_c_rule/${uuid}`, data, config);
  }

  async settingsSetRemoteBlacklist(uuid: string, data?: ProxySettingsSetRemoteBlacklistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsSetRemoteBlacklistResponse>> {
    return this.client.post(`${this.basePath}/settings/set_remote_blacklist/${uuid}`, data, config);
  }

  async settingsTogglePACRule(uuid: string, data?: ProxySettingsTogglePACRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsTogglePACRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_p_a_c_rule/${uuid}`, data, config);
  }

  async settingsToggleRemoteBlacklist(uuid: string, data?: ProxySettingsToggleRemoteBlacklistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxySettingsToggleRemoteBlacklistResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_remote_blacklist/${uuid}`, data, config);
  }


  // Template methods
  async templateGet(config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyTemplateGetResponse>> {
    return this.client.get(`${this.basePath}/template/get`, config);
  }

  async templateReset(data?: ProxyTemplateResetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyTemplateResetResponse>> {
    return this.client.post(`${this.basePath}/template/reset`, data, config);
  }

  async templateSet(data?: ProxyTemplateSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyTemplateSetResponse>> {
    return this.client.post(`${this.basePath}/template/set`, data, config);
  }


  // Acl methods
  async aclAddCustomPolicy(data?: ProxyAclAddCustomPolicyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyAclAddCustomPolicyResponse>> {
    return this.client.post(`${this.basePath}/acl/add_custom_policy`, data, config);
  }

  async aclAddPolicy(data?: ProxyAclAddPolicyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyAclAddPolicyResponse>> {
    return this.client.post(`${this.basePath}/acl/add_policy`, data, config);
  }

  async aclApply(data?: ProxyAclApplyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyAclApplyResponse>> {
    return this.client.post(`${this.basePath}/acl/apply`, data, config);
  }

  async aclDelCustomPolicy(uuid: string, data?: ProxyAclDelCustomPolicyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyAclDelCustomPolicyResponse>> {
    return this.client.post(`${this.basePath}/acl/del_custom_policy/${uuid}`, data, config);
  }

  async aclDelPolicy(uuid: string, data?: ProxyAclDelPolicyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyAclDelPolicyResponse>> {
    return this.client.post(`${this.basePath}/acl/del_policy/${uuid}`, data, config);
  }

  async aclGet(config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyAclGetResponse>> {
    return this.client.get(`${this.basePath}/acl/get`, config);
  }

  async aclGetCustomPolicy(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyAclGetCustomPolicyResponse>> {
    return this.client.get(`${this.basePath}/acl/get_custom_policy/${uuid}`, config);
  }

  async aclGetPolicy(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyAclGetPolicyResponse>> {
    return this.client.get(`${this.basePath}/acl/get_policy/${uuid}`, config);
  }

  async aclSet(data?: ProxyAclSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyAclSetResponse>> {
    return this.client.post(`${this.basePath}/acl/set`, data, config);
  }

  async aclSetCustomPolicy(uuid: string, data?: ProxyAclSetCustomPolicyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyAclSetCustomPolicyResponse>> {
    return this.client.post(`${this.basePath}/acl/set_custom_policy/${uuid}`, data, config);
  }

  async aclSetPolicy(uuid: string, data?: ProxyAclSetPolicyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyAclSetPolicyResponse>> {
    return this.client.post(`${this.basePath}/acl/set_policy/${uuid}`, data, config);
  }

  async aclTest(data?: ProxyAclTestRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyAclTestResponse>> {
    return this.client.post(`${this.basePath}/acl/test`, data, config);
  }

  async aclToggleCustomPolicy(uuid: string, enabled?: string, data?: ProxyAclToggleCustomPolicyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyAclToggleCustomPolicyResponse>> {
    return this.client.post(`${this.basePath}/acl/toggle_custom_policy/${uuid}/${enabled}`, data, config);
  }

  async aclTogglePolicy(uuid: string, enabled?: string, data?: ProxyAclTogglePolicyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyAclTogglePolicyResponse>> {
    return this.client.post(`${this.basePath}/acl/toggle_policy/${uuid}/${enabled}`, data, config);
  }

}
