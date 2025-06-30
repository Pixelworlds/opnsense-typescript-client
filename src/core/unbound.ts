import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Unbound module

// Model field types

// Diagnostics types
export interface UnboundDiagnosticsDumpcacheResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundDiagnosticsDumpinfraResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundDiagnosticsListinsecureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundDiagnosticsListlocaldataResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundDiagnosticsListlocalzonesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundDiagnosticsStatsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Overview types
export interface UnboundOverviewRollingResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundOverviewIsBlockListEnabledResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundOverviewIsEnabledResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundOverviewSearchQueriesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundOverviewTotalsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface UnboundServiceDnsblResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UnboundServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundServiceReconfigureGeneralResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UnboundServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UnboundServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UnboundServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface UnboundSettingsAddAclRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UnboundSettingsAddAclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsAddForwardRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UnboundSettingsAddForwardResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsAddHostAliasRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UnboundSettingsAddHostAliasResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsAddHostOverrideRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UnboundSettingsAddHostOverrideResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsDelAclRequest {
  uuid: string;
}

export interface UnboundSettingsDelAclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsDelForwardRequest {
  uuid: string;
}

export interface UnboundSettingsDelForwardResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsDelHostAliasRequest {
  uuid: string;
}

export interface UnboundSettingsDelHostAliasResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsDelHostOverrideRequest {
  uuid: string;
}

export interface UnboundSettingsDelHostOverrideResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsGetAclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsGetForwardResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsGetHostAliasResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsGetHostOverrideResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsGetNameserversResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UnboundSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsSetAclRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UnboundSettingsSetAclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsSetForwardRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UnboundSettingsSetForwardResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsSetHostAliasRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UnboundSettingsSetHostAliasResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsSetHostOverrideRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UnboundSettingsSetHostOverrideResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsToggleAclRequest {
  enabled?: boolean;
}

export interface UnboundSettingsToggleAclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsToggleForwardRequest {
  enabled?: boolean;
}

export interface UnboundSettingsToggleForwardResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsToggleHostAliasRequest {
  enabled?: boolean;
}

export interface UnboundSettingsToggleHostAliasResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsToggleHostOverrideRequest {
  enabled?: boolean;
}

export interface UnboundSettingsToggleHostOverrideResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UnboundSettingsUpdateBlocklistRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UnboundSettingsUpdateBlocklistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface UnboundAcl {
}

export interface UnboundDot {
}

export interface UnboundHost {
}

export interface UnboundAlias {
}

export class UnboundApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Diagnostics methods
  async diagnosticsDumpcache(config?: RequestConfig): Promise<ApiResponse<UnboundDiagnosticsDumpcacheResponse>> {
    return this.http.get(`/api/unbound/diagnostics/dumpcache`, config);
  }

  async diagnosticsDumpinfra(config?: RequestConfig): Promise<ApiResponse<UnboundDiagnosticsDumpinfraResponse>> {
    return this.http.get(`/api/unbound/diagnostics/dumpinfra`, config);
  }

  async diagnosticsListinsecure(config?: RequestConfig): Promise<ApiResponse<UnboundDiagnosticsListinsecureResponse>> {
    return this.http.get(`/api/unbound/diagnostics/listinsecure`, config);
  }

  async diagnosticsListlocaldata(config?: RequestConfig): Promise<ApiResponse<UnboundDiagnosticsListlocaldataResponse>> {
    return this.http.get(`/api/unbound/diagnostics/listlocaldata`, config);
  }

  async diagnosticsListlocalzones(config?: RequestConfig): Promise<ApiResponse<UnboundDiagnosticsListlocalzonesResponse>> {
    return this.http.get(`/api/unbound/diagnostics/listlocalzones`, config);
  }

  async diagnosticsStats(config?: RequestConfig): Promise<ApiResponse<UnboundDiagnosticsStatsResponse>> {
    return this.http.get(`/api/unbound/diagnostics/stats`, config);
  }


  // Overview methods
  async overviewRolling(timeperiod: string, clients?: string, config?: RequestConfig): Promise<ApiResponse<UnboundOverviewRollingResponse>> {
    return this.http.get(`/api/unbound/overview/_rolling/${timeperiod}/${clients}`, config);
  }

  async overviewIsBlockListEnabled(config?: RequestConfig): Promise<ApiResponse<UnboundOverviewIsBlockListEnabledResponse>> {
    return this.http.get(`/api/unbound/overview/is_block_list_enabled`, config);
  }

  async overviewIsEnabled(config?: RequestConfig): Promise<ApiResponse<UnboundOverviewIsEnabledResponse>> {
    return this.http.get(`/api/unbound/overview/is_enabled`, config);
  }

  async overviewSearchQueries(config?: RequestConfig): Promise<ApiResponse<UnboundOverviewSearchQueriesResponse>> {
    return this.http.get(`/api/unbound/overview/search_queries`, config);
  }

  async overviewTotals(maximum: string, config?: RequestConfig): Promise<ApiResponse<UnboundOverviewTotalsResponse>> {
    return this.http.get(`/api/unbound/overview/totals/${maximum}`, config);
  }


  // Service methods
  async serviceDnsbl(config?: RequestConfig): Promise<ApiResponse<UnboundServiceDnsblResponse>> {
    return this.http.get(`/api/unbound/service/dnsbl`, config);
  }

  async serviceReconfigure(data?: UnboundServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<UnboundServiceReconfigureResponse>> {
    return this.http.post(`/api/unbound/service/reconfigure`, data, config);
  }

  async serviceReconfigureGeneral(config?: RequestConfig): Promise<ApiResponse<UnboundServiceReconfigureGeneralResponse>> {
    return this.http.get(`/api/unbound/service/reconfigure_general`, config);
  }

  async serviceRestart(data?: UnboundServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<UnboundServiceRestartResponse>> {
    return this.http.post(`/api/unbound/service/restart`, data, config);
  }

  async serviceStart(data?: UnboundServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<UnboundServiceStartResponse>> {
    return this.http.post(`/api/unbound/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<UnboundServiceStatusResponse>> {
    return this.http.get(`/api/unbound/service/status`, config);
  }

  async serviceStop(data?: UnboundServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<UnboundServiceStopResponse>> {
    return this.http.post(`/api/unbound/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddAcl(data?: UnboundSettingsAddAclRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsAddAclResponse>> {
    return this.http.post(`/api/unbound/settings/add_acl`, data, config);
  }

  async settingsAddForward(data?: UnboundSettingsAddForwardRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsAddForwardResponse>> {
    return this.http.post(`/api/unbound/settings/add_forward`, data, config);
  }

  async settingsAddHostAlias(data?: UnboundSettingsAddHostAliasRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsAddHostAliasResponse>> {
    return this.http.post(`/api/unbound/settings/add_host_alias`, data, config);
  }

  async settingsAddHostOverride(data?: UnboundSettingsAddHostOverrideRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsAddHostOverrideResponse>> {
    return this.http.post(`/api/unbound/settings/add_host_override`, data, config);
  }

  async settingsDelAcl(uuid: string, data?: UnboundSettingsDelAclRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsDelAclResponse>> {
    return this.http.post(`/api/unbound/settings/del_acl/${uuid}`, data, config);
  }

  async settingsDelForward(uuid: string, data?: UnboundSettingsDelForwardRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsDelForwardResponse>> {
    return this.http.post(`/api/unbound/settings/del_forward/${uuid}`, data, config);
  }

  async settingsDelHostAlias(uuid: string, data?: UnboundSettingsDelHostAliasRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsDelHostAliasResponse>> {
    return this.http.post(`/api/unbound/settings/del_host_alias/${uuid}`, data, config);
  }

  async settingsDelHostOverride(uuid: string, data?: UnboundSettingsDelHostOverrideRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsDelHostOverrideResponse>> {
    return this.http.post(`/api/unbound/settings/del_host_override/${uuid}`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<UnboundSettingsGetResponse>> {
    return this.http.get(`/api/unbound/settings/get`, config);
  }

  async settingsGetAcl(uuid?: string, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsGetAclResponse>> {
    return this.http.get(`/api/unbound/settings/get_acl/${uuid}`, config);
  }

  async settingsGetForward(uuid?: string, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsGetForwardResponse>> {
    return this.http.get(`/api/unbound/settings/get_forward/${uuid}`, config);
  }

  async settingsGetHostAlias(uuid?: string, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsGetHostAliasResponse>> {
    return this.http.get(`/api/unbound/settings/get_host_alias/${uuid}`, config);
  }

  async settingsGetHostOverride(uuid?: string, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsGetHostOverrideResponse>> {
    return this.http.get(`/api/unbound/settings/get_host_override/${uuid}`, config);
  }

  async settingsGetNameservers(config?: RequestConfig): Promise<ApiResponse<UnboundSettingsGetNameserversResponse>> {
    return this.http.get(`/api/unbound/settings/get_nameservers`, config);
  }

  async settingsSet(data?: UnboundSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsSetResponse>> {
    return this.http.post(`/api/unbound/settings/set`, data, config);
  }

  async settingsSetAcl(uuid: string, data?: UnboundSettingsSetAclRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsSetAclResponse>> {
    return this.http.post(`/api/unbound/settings/set_acl/${uuid}`, data, config);
  }

  async settingsSetForward(uuid: string, data?: UnboundSettingsSetForwardRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsSetForwardResponse>> {
    return this.http.post(`/api/unbound/settings/set_forward/${uuid}`, data, config);
  }

  async settingsSetHostAlias(uuid: string, data?: UnboundSettingsSetHostAliasRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsSetHostAliasResponse>> {
    return this.http.post(`/api/unbound/settings/set_host_alias/${uuid}`, data, config);
  }

  async settingsSetHostOverride(uuid: string, data?: UnboundSettingsSetHostOverrideRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsSetHostOverrideResponse>> {
    return this.http.post(`/api/unbound/settings/set_host_override/${uuid}`, data, config);
  }

  async settingsToggleAcl(uuid: string, enabled?: string, data?: UnboundSettingsToggleAclRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsToggleAclResponse>> {
    return this.http.post(`/api/unbound/settings/toggle_acl/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleForward(uuid: string, enabled?: string, data?: UnboundSettingsToggleForwardRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsToggleForwardResponse>> {
    return this.http.post(`/api/unbound/settings/toggle_forward/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleHostAlias(uuid: string, enabled?: string, data?: UnboundSettingsToggleHostAliasRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsToggleHostAliasResponse>> {
    return this.http.post(`/api/unbound/settings/toggle_host_alias/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleHostOverride(uuid: string, enabled?: string, data?: UnboundSettingsToggleHostOverrideRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsToggleHostOverrideResponse>> {
    return this.http.post(`/api/unbound/settings/toggle_host_override/${uuid}/${enabled}`, data, config);
  }

  async settingsUpdateBlocklist(data?: UnboundSettingsUpdateBlocklistRequest, config?: RequestConfig): Promise<ApiResponse<UnboundSettingsUpdateBlocklistResponse>> {
    return this.http.post(`/api/unbound/settings/update_blocklist`, data, config);
  }

}
