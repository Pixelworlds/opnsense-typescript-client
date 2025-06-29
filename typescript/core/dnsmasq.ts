import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/dnsmasq';
  }

  // Leases methods
  async leasesSearch(config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqLeasesSearchResponse>> {
    return this.client.get(`${this.basePath}/leases/search`, config);
  }


  // Service methods
  async serviceReconfigure(data?: DnsmasqServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: DnsmasqServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: DnsmasqServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: DnsmasqServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddBoot(data?: DnsmasqSettingsAddBootRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsAddBootResponse>> {
    return this.client.post(`${this.basePath}/settings/add_boot`, data, config);
  }

  async settingsAddDomain(data?: DnsmasqSettingsAddDomainRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsAddDomainResponse>> {
    return this.client.post(`${this.basePath}/settings/add_domain`, data, config);
  }

  async settingsAddHost(data?: DnsmasqSettingsAddHostRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsAddHostResponse>> {
    return this.client.post(`${this.basePath}/settings/add_host`, data, config);
  }

  async settingsAddOption(data?: DnsmasqSettingsAddOptionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsAddOptionResponse>> {
    return this.client.post(`${this.basePath}/settings/add_option`, data, config);
  }

  async settingsAddRange(data?: DnsmasqSettingsAddRangeRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsAddRangeResponse>> {
    return this.client.post(`${this.basePath}/settings/add_range`, data, config);
  }

  async settingsAddTag(data?: DnsmasqSettingsAddTagRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsAddTagResponse>> {
    return this.client.post(`${this.basePath}/settings/add_tag`, data, config);
  }

  async settingsDelBoot(uuid: string, data?: DnsmasqSettingsDelBootRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsDelBootResponse>> {
    return this.client.post(`${this.basePath}/settings/del_boot/${uuid}`, data, config);
  }

  async settingsDelDomain(uuid: string, data?: DnsmasqSettingsDelDomainRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsDelDomainResponse>> {
    return this.client.post(`${this.basePath}/settings/del_domain/${uuid}`, data, config);
  }

  async settingsDelHost(uuid: string, data?: DnsmasqSettingsDelHostRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsDelHostResponse>> {
    return this.client.post(`${this.basePath}/settings/del_host/${uuid}`, data, config);
  }

  async settingsDelOption(uuid: string, data?: DnsmasqSettingsDelOptionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsDelOptionResponse>> {
    return this.client.post(`${this.basePath}/settings/del_option/${uuid}`, data, config);
  }

  async settingsDelRange(uuid: string, data?: DnsmasqSettingsDelRangeRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsDelRangeResponse>> {
    return this.client.post(`${this.basePath}/settings/del_range/${uuid}`, data, config);
  }

  async settingsDelTag(uuid: string, data?: DnsmasqSettingsDelTagRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsDelTagResponse>> {
    return this.client.post(`${this.basePath}/settings/del_tag/${uuid}`, data, config);
  }

  async settingsDownloadHosts(config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsDownloadHostsResponse>> {
    return this.client.get(`${this.basePath}/settings/download_hosts`, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetBoot(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsGetBootResponse>> {
    return this.client.get(`${this.basePath}/settings/get_boot/${uuid}`, config);
  }

  async settingsGetDomain(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsGetDomainResponse>> {
    return this.client.get(`${this.basePath}/settings/get_domain/${uuid}`, config);
  }

  async settingsGetHost(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsGetHostResponse>> {
    return this.client.get(`${this.basePath}/settings/get_host/${uuid}`, config);
  }

  async settingsGetOption(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsGetOptionResponse>> {
    return this.client.get(`${this.basePath}/settings/get_option/${uuid}`, config);
  }

  async settingsGetRange(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsGetRangeResponse>> {
    return this.client.get(`${this.basePath}/settings/get_range/${uuid}`, config);
  }

  async settingsGetTag(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsGetTagResponse>> {
    return this.client.get(`${this.basePath}/settings/get_tag/${uuid}`, config);
  }

  async settingsGetTagList(config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsGetTagListResponse>> {
    return this.client.get(`${this.basePath}/settings/get_tag_list`, config);
  }

  async settingsSet(data?: DnsmasqSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetBoot(uuid: string, data?: DnsmasqSettingsSetBootRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsSetBootResponse>> {
    return this.client.post(`${this.basePath}/settings/set_boot/${uuid}`, data, config);
  }

  async settingsSetDomain(uuid: string, data?: DnsmasqSettingsSetDomainRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsSetDomainResponse>> {
    return this.client.post(`${this.basePath}/settings/set_domain/${uuid}`, data, config);
  }

  async settingsSetHost(uuid: string, data?: DnsmasqSettingsSetHostRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsSetHostResponse>> {
    return this.client.post(`${this.basePath}/settings/set_host/${uuid}`, data, config);
  }

  async settingsSetOption(uuid: string, data?: DnsmasqSettingsSetOptionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsSetOptionResponse>> {
    return this.client.post(`${this.basePath}/settings/set_option/${uuid}`, data, config);
  }

  async settingsSetRange(uuid: string, data?: DnsmasqSettingsSetRangeRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsSetRangeResponse>> {
    return this.client.post(`${this.basePath}/settings/set_range/${uuid}`, data, config);
  }

  async settingsSetTag(uuid: string, data?: DnsmasqSettingsSetTagRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsSetTagResponse>> {
    return this.client.post(`${this.basePath}/settings/set_tag/${uuid}`, data, config);
  }

  async settingsUploadHosts(data?: DnsmasqSettingsUploadHostsRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnsmasqSettingsUploadHostsResponse>> {
    return this.client.post(`${this.basePath}/settings/upload_hosts`, data, config);
  }

}
