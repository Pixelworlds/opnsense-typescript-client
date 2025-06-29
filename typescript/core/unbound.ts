import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/unbound';
  }

  // Diagnostics methods
  async diagnosticsDumpcache(config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundDiagnosticsDumpcacheResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/dumpcache`, config);
  }

  async diagnosticsDumpinfra(config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundDiagnosticsDumpinfraResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/dumpinfra`, config);
  }

  async diagnosticsListinsecure(config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundDiagnosticsListinsecureResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/listinsecure`, config);
  }

  async diagnosticsListlocaldata(config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundDiagnosticsListlocaldataResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/listlocaldata`, config);
  }

  async diagnosticsListlocalzones(config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundDiagnosticsListlocalzonesResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/listlocalzones`, config);
  }

  async diagnosticsStats(config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundDiagnosticsStatsResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/stats`, config);
  }


  // Overview methods
  async overviewRolling(timeperiod: string, clients?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundOverviewRollingResponse>> {
    return this.client.get(`${this.basePath}/overview/_rolling/${timeperiod}/${clients}`, config);
  }

  async overviewIsBlockListEnabled(config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundOverviewIsBlockListEnabledResponse>> {
    return this.client.get(`${this.basePath}/overview/is_block_list_enabled`, config);
  }

  async overviewIsEnabled(config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundOverviewIsEnabledResponse>> {
    return this.client.get(`${this.basePath}/overview/is_enabled`, config);
  }

  async overviewSearchQueries(config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundOverviewSearchQueriesResponse>> {
    return this.client.get(`${this.basePath}/overview/search_queries`, config);
  }

  async overviewTotals(maximum: string, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundOverviewTotalsResponse>> {
    return this.client.get(`${this.basePath}/overview/totals/${maximum}`, config);
  }


  // Service methods
  async serviceDnsbl(config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundServiceDnsblResponse>> {
    return this.client.get(`${this.basePath}/service/dnsbl`, config);
  }

  async serviceReconfigure(data?: UnboundServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceReconfigureGeneral(config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundServiceReconfigureGeneralResponse>> {
    return this.client.get(`${this.basePath}/service/reconfigure_general`, config);
  }

  async serviceRestart(data?: UnboundServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: UnboundServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: UnboundServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddAcl(data?: UnboundSettingsAddAclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsAddAclResponse>> {
    return this.client.post(`${this.basePath}/settings/add_acl`, data, config);
  }

  async settingsAddForward(data?: UnboundSettingsAddForwardRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsAddForwardResponse>> {
    return this.client.post(`${this.basePath}/settings/add_forward`, data, config);
  }

  async settingsAddHostAlias(data?: UnboundSettingsAddHostAliasRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsAddHostAliasResponse>> {
    return this.client.post(`${this.basePath}/settings/add_host_alias`, data, config);
  }

  async settingsAddHostOverride(data?: UnboundSettingsAddHostOverrideRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsAddHostOverrideResponse>> {
    return this.client.post(`${this.basePath}/settings/add_host_override`, data, config);
  }

  async settingsDelAcl(uuid: string, data?: UnboundSettingsDelAclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsDelAclResponse>> {
    return this.client.post(`${this.basePath}/settings/del_acl/${uuid}`, data, config);
  }

  async settingsDelForward(uuid: string, data?: UnboundSettingsDelForwardRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsDelForwardResponse>> {
    return this.client.post(`${this.basePath}/settings/del_forward/${uuid}`, data, config);
  }

  async settingsDelHostAlias(uuid: string, data?: UnboundSettingsDelHostAliasRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsDelHostAliasResponse>> {
    return this.client.post(`${this.basePath}/settings/del_host_alias/${uuid}`, data, config);
  }

  async settingsDelHostOverride(uuid: string, data?: UnboundSettingsDelHostOverrideRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsDelHostOverrideResponse>> {
    return this.client.post(`${this.basePath}/settings/del_host_override/${uuid}`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetAcl(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsGetAclResponse>> {
    return this.client.get(`${this.basePath}/settings/get_acl/${uuid}`, config);
  }

  async settingsGetForward(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsGetForwardResponse>> {
    return this.client.get(`${this.basePath}/settings/get_forward/${uuid}`, config);
  }

  async settingsGetHostAlias(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsGetHostAliasResponse>> {
    return this.client.get(`${this.basePath}/settings/get_host_alias/${uuid}`, config);
  }

  async settingsGetHostOverride(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsGetHostOverrideResponse>> {
    return this.client.get(`${this.basePath}/settings/get_host_override/${uuid}`, config);
  }

  async settingsGetNameservers(config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsGetNameserversResponse>> {
    return this.client.get(`${this.basePath}/settings/get_nameservers`, config);
  }

  async settingsSet(data?: UnboundSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetAcl(uuid: string, data?: UnboundSettingsSetAclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsSetAclResponse>> {
    return this.client.post(`${this.basePath}/settings/set_acl/${uuid}`, data, config);
  }

  async settingsSetForward(uuid: string, data?: UnboundSettingsSetForwardRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsSetForwardResponse>> {
    return this.client.post(`${this.basePath}/settings/set_forward/${uuid}`, data, config);
  }

  async settingsSetHostAlias(uuid: string, data?: UnboundSettingsSetHostAliasRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsSetHostAliasResponse>> {
    return this.client.post(`${this.basePath}/settings/set_host_alias/${uuid}`, data, config);
  }

  async settingsSetHostOverride(uuid: string, data?: UnboundSettingsSetHostOverrideRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsSetHostOverrideResponse>> {
    return this.client.post(`${this.basePath}/settings/set_host_override/${uuid}`, data, config);
  }

  async settingsToggleAcl(uuid: string, enabled?: string, data?: UnboundSettingsToggleAclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsToggleAclResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_acl/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleForward(uuid: string, enabled?: string, data?: UnboundSettingsToggleForwardRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsToggleForwardResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_forward/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleHostAlias(uuid: string, enabled?: string, data?: UnboundSettingsToggleHostAliasRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsToggleHostAliasResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_host_alias/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleHostOverride(uuid: string, enabled?: string, data?: UnboundSettingsToggleHostOverrideRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsToggleHostOverrideResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_host_override/${uuid}/${enabled}`, data, config);
  }

  async settingsUpdateBlocklist(data?: UnboundSettingsUpdateBlocklistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UnboundSettingsUpdateBlocklistResponse>> {
    return this.client.post(`${this.basePath}/settings/update_blocklist`, data, config);
  }

}
