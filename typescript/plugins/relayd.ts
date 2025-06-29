import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Relayd module

// Model field types

// Service types
export interface RelaydServiceConfigtestRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RelaydServiceConfigtestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RelaydServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RelaydServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RelaydServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RelaydServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface RelaydSettingsDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydSettingsDirtyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydSettingsSearchRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RelaydSettingsSearchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RelaydSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydSettingsToggleRequest {
  enabled?: boolean;
}

export interface RelaydSettingsToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Status types
export interface RelaydStatusSumResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydStatusToggleRequest {
  enabled?: boolean;
}

export interface RelaydStatusToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface RelaydHost {
}

export interface RelaydTable {
}

export interface RelaydTablecheck {
}

export interface RelaydVirtualserver {
}

export interface RelaydProtocol {
}

export class RelaydApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/relayd';
  }

  // Service methods
  async serviceConfigtest(data?: RelaydServiceConfigtestRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RelaydServiceConfigtestResponse>> {
    return this.client.post(`${this.basePath}/service/configtest`, data, config);
  }

  async serviceReconfigure(data?: RelaydServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RelaydServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: RelaydServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RelaydServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: RelaydServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RelaydServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<RelaydServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: RelaydServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RelaydServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsDel(nodeType?: string, uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<RelaydSettingsDelResponse>> {
    return this.client.get(`${this.basePath}/settings/del/${nodeType}/${uuid}`, config);
  }

  async settingsDirty(config?: AxiosRequestConfig): Promise<AxiosResponse<RelaydSettingsDirtyResponse>> {
    return this.client.get(`${this.basePath}/settings/dirty`, config);
  }

  async settingsGet(nodeType?: string, uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<RelaydSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get/${nodeType}/${uuid}`, config);
  }

  async settingsSearch(nodeType?: string, data?: RelaydSettingsSearchRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RelaydSettingsSearchResponse>> {
    return this.client.post(`${this.basePath}/settings/search/${nodeType}`, data, config);
  }

  async settingsSet(nodeType?: string, uuid?: string, data?: RelaydSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RelaydSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set/${nodeType}/${uuid}`, data, config);
  }

  async settingsToggle(nodeType: string, uuid: string, enabled?: string, data?: RelaydSettingsToggleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RelaydSettingsToggleResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle/${nodeType}/${uuid}/${enabled}`, data, config);
  }


  // Status methods
  async statusSum(wait?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<RelaydStatusSumResponse>> {
    return this.client.get(`${this.basePath}/status/sum/${wait}`, config);
  }

  async statusToggle(nodeType?: string, id?: string, action?: string, data?: RelaydStatusToggleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RelaydStatusToggleResponse>> {
    return this.client.post(`${this.basePath}/status/toggle/${nodeType}/${id}/${action}`, data, config);
  }

}
