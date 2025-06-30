import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Dnsmasq module

// Model field types

// Leases types
export interface DnsmasqLeasesSearchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface DnsmasqServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface DnsmasqSettingsAddBootRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqSettingsAddBootResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsAddDomainRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqSettingsAddDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsAddHostRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqSettingsAddHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsAddOptionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqSettingsAddOptionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsAddRangeRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqSettingsAddRangeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsAddTagRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqSettingsAddTagResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsDelBootRequest {
  uuid: string;
}

export interface DnsmasqSettingsDelBootResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsDelDomainRequest {
  uuid: string;
}

export interface DnsmasqSettingsDelDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsDelHostRequest {
  uuid: string;
}

export interface DnsmasqSettingsDelHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsDelOptionRequest {
  uuid: string;
}

export interface DnsmasqSettingsDelOptionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsDelRangeRequest {
  uuid: string;
}

export interface DnsmasqSettingsDelRangeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsDelTagRequest {
  uuid: string;
}

export interface DnsmasqSettingsDelTagResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsDownloadHostsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsGetBootResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsGetDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsGetHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsGetOptionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsGetRangeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsGetTagResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsGetTagListResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsSetBootRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqSettingsSetBootResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsSetDomainRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqSettingsSetDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsSetHostRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqSettingsSetHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsSetOptionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqSettingsSetOptionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsSetRangeRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqSettingsSetRangeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsSetTagRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqSettingsSetTagResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnsmasqSettingsUploadHostsRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnsmasqSettingsUploadHostsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface DnsmasqHosts {
}

export interface DnsmasqDomainoverrides {
}

export interface DnsmasqDhcpTags {
}

export interface DnsmasqDhcpRanges {
}

export interface DnsmasqDhcpOptions {
}

export interface DnsmasqDhcpBoot {
}

export class DnsmasqApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Leases methods
  async leasesSearch(config?: RequestConfig): Promise<ApiResponse<DnsmasqLeasesSearchResponse>> {
    return this.http.get(`/api/dnsmasq/leases/search`, config);
  }


  // Service methods
  async serviceReconfigure(data?: DnsmasqServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqServiceReconfigureResponse>> {
    return this.http.post(`/api/dnsmasq/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: DnsmasqServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqServiceRestartResponse>> {
    return this.http.post(`/api/dnsmasq/service/restart`, data, config);
  }

  async serviceStart(data?: DnsmasqServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqServiceStartResponse>> {
    return this.http.post(`/api/dnsmasq/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<DnsmasqServiceStatusResponse>> {
    return this.http.get(`/api/dnsmasq/service/status`, config);
  }

  async serviceStop(data?: DnsmasqServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqServiceStopResponse>> {
    return this.http.post(`/api/dnsmasq/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddBoot(data?: DnsmasqSettingsAddBootRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsAddBootResponse>> {
    return this.http.post(`/api/dnsmasq/settings/add_boot`, data, config);
  }

  async settingsAddDomain(data?: DnsmasqSettingsAddDomainRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsAddDomainResponse>> {
    return this.http.post(`/api/dnsmasq/settings/add_domain`, data, config);
  }

  async settingsAddHost(data?: DnsmasqSettingsAddHostRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsAddHostResponse>> {
    return this.http.post(`/api/dnsmasq/settings/add_host`, data, config);
  }

  async settingsAddOption(data?: DnsmasqSettingsAddOptionRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsAddOptionResponse>> {
    return this.http.post(`/api/dnsmasq/settings/add_option`, data, config);
  }

  async settingsAddRange(data?: DnsmasqSettingsAddRangeRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsAddRangeResponse>> {
    return this.http.post(`/api/dnsmasq/settings/add_range`, data, config);
  }

  async settingsAddTag(data?: DnsmasqSettingsAddTagRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsAddTagResponse>> {
    return this.http.post(`/api/dnsmasq/settings/add_tag`, data, config);
  }

  async settingsDelBoot(uuid: string, data?: DnsmasqSettingsDelBootRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsDelBootResponse>> {
    return this.http.post(`/api/dnsmasq/settings/del_boot/${uuid}`, data, config);
  }

  async settingsDelDomain(uuid: string, data?: DnsmasqSettingsDelDomainRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsDelDomainResponse>> {
    return this.http.post(`/api/dnsmasq/settings/del_domain/${uuid}`, data, config);
  }

  async settingsDelHost(uuid: string, data?: DnsmasqSettingsDelHostRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsDelHostResponse>> {
    return this.http.post(`/api/dnsmasq/settings/del_host/${uuid}`, data, config);
  }

  async settingsDelOption(uuid: string, data?: DnsmasqSettingsDelOptionRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsDelOptionResponse>> {
    return this.http.post(`/api/dnsmasq/settings/del_option/${uuid}`, data, config);
  }

  async settingsDelRange(uuid: string, data?: DnsmasqSettingsDelRangeRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsDelRangeResponse>> {
    return this.http.post(`/api/dnsmasq/settings/del_range/${uuid}`, data, config);
  }

  async settingsDelTag(uuid: string, data?: DnsmasqSettingsDelTagRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsDelTagResponse>> {
    return this.http.post(`/api/dnsmasq/settings/del_tag/${uuid}`, data, config);
  }

  async settingsDownloadHosts(config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsDownloadHostsResponse>> {
    return this.http.get(`/api/dnsmasq/settings/download_hosts`, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsGetResponse>> {
    return this.http.get(`/api/dnsmasq/settings/get`, config);
  }

  async settingsGetBoot(uuid?: string, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsGetBootResponse>> {
    return this.http.get(`/api/dnsmasq/settings/get_boot/${uuid}`, config);
  }

  async settingsGetDomain(uuid?: string, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsGetDomainResponse>> {
    return this.http.get(`/api/dnsmasq/settings/get_domain/${uuid}`, config);
  }

  async settingsGetHost(uuid?: string, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsGetHostResponse>> {
    return this.http.get(`/api/dnsmasq/settings/get_host/${uuid}`, config);
  }

  async settingsGetOption(uuid?: string, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsGetOptionResponse>> {
    return this.http.get(`/api/dnsmasq/settings/get_option/${uuid}`, config);
  }

  async settingsGetRange(uuid?: string, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsGetRangeResponse>> {
    return this.http.get(`/api/dnsmasq/settings/get_range/${uuid}`, config);
  }

  async settingsGetTag(uuid?: string, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsGetTagResponse>> {
    return this.http.get(`/api/dnsmasq/settings/get_tag/${uuid}`, config);
  }

  async settingsGetTagList(config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsGetTagListResponse>> {
    return this.http.get(`/api/dnsmasq/settings/get_tag_list`, config);
  }

  async settingsSet(data?: DnsmasqSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsSetResponse>> {
    return this.http.post(`/api/dnsmasq/settings/set`, data, config);
  }

  async settingsSetBoot(uuid: string, data?: DnsmasqSettingsSetBootRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsSetBootResponse>> {
    return this.http.post(`/api/dnsmasq/settings/set_boot/${uuid}`, data, config);
  }

  async settingsSetDomain(uuid: string, data?: DnsmasqSettingsSetDomainRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsSetDomainResponse>> {
    return this.http.post(`/api/dnsmasq/settings/set_domain/${uuid}`, data, config);
  }

  async settingsSetHost(uuid: string, data?: DnsmasqSettingsSetHostRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsSetHostResponse>> {
    return this.http.post(`/api/dnsmasq/settings/set_host/${uuid}`, data, config);
  }

  async settingsSetOption(uuid: string, data?: DnsmasqSettingsSetOptionRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsSetOptionResponse>> {
    return this.http.post(`/api/dnsmasq/settings/set_option/${uuid}`, data, config);
  }

  async settingsSetRange(uuid: string, data?: DnsmasqSettingsSetRangeRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsSetRangeResponse>> {
    return this.http.post(`/api/dnsmasq/settings/set_range/${uuid}`, data, config);
  }

  async settingsSetTag(uuid: string, data?: DnsmasqSettingsSetTagRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsSetTagResponse>> {
    return this.http.post(`/api/dnsmasq/settings/set_tag/${uuid}`, data, config);
  }

  async settingsUploadHosts(data?: DnsmasqSettingsUploadHostsRequest, config?: RequestConfig): Promise<ApiResponse<DnsmasqSettingsUploadHostsResponse>> {
    return this.http.post(`/api/dnsmasq/settings/upload_hosts`, data, config);
  }

}
