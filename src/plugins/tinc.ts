import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Tinc module

// Model field types

// Service types
export interface TincServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TincServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TincServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TincServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TincServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface TincSettingsDelHostRequest {
  uuid: string;
}

export interface TincSettingsDelHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsDelNetworkRequest {
  uuid: string;
}

export interface TincSettingsDelNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsGetHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsGetNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsSearchHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsSearchNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TincSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsSetHostRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TincSettingsSetHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsSetNetworkRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TincSettingsSetNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsToggleHostRequest {
  enabled?: boolean;
}

export interface TincSettingsToggleHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsToggleNetworkRequest {
  enabled?: boolean;
}

export interface TincSettingsToggleNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface TincNetwork {
}

export interface TincHost {
}

export class TincApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceReconfigure(data?: TincServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<TincServiceReconfigureResponse>> {
    return this.http.post(`/api/tinc/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: TincServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<TincServiceRestartResponse>> {
    return this.http.post(`/api/tinc/service/restart`, data, config);
  }

  async serviceStart(data?: TincServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<TincServiceStartResponse>> {
    return this.http.post(`/api/tinc/service/start`, data, config);
  }

  async serviceStop(data?: TincServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<TincServiceStopResponse>> {
    return this.http.post(`/api/tinc/service/stop`, data, config);
  }


  // Settings methods
  async settingsDelHost(uuid: string, data?: TincSettingsDelHostRequest, config?: RequestConfig): Promise<ApiResponse<TincSettingsDelHostResponse>> {
    return this.http.post(`/api/tinc/settings/del_host/${uuid}`, data, config);
  }

  async settingsDelNetwork(uuid: string, data?: TincSettingsDelNetworkRequest, config?: RequestConfig): Promise<ApiResponse<TincSettingsDelNetworkResponse>> {
    return this.http.post(`/api/tinc/settings/del_network/${uuid}`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<TincSettingsGetResponse>> {
    return this.http.get(`/api/tinc/settings/get`, config);
  }

  async settingsGetHost(uuid?: string, config?: RequestConfig): Promise<ApiResponse<TincSettingsGetHostResponse>> {
    return this.http.get(`/api/tinc/settings/get_host/${uuid}`, config);
  }

  async settingsGetNetwork(uuid?: string, config?: RequestConfig): Promise<ApiResponse<TincSettingsGetNetworkResponse>> {
    return this.http.get(`/api/tinc/settings/get_network/${uuid}`, config);
  }

  async settingsSearchHost(config?: RequestConfig): Promise<ApiResponse<TincSettingsSearchHostResponse>> {
    return this.http.get(`/api/tinc/settings/search_host`, config);
  }

  async settingsSearchNetwork(config?: RequestConfig): Promise<ApiResponse<TincSettingsSearchNetworkResponse>> {
    return this.http.get(`/api/tinc/settings/search_network`, config);
  }

  async settingsSet(data?: TincSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<TincSettingsSetResponse>> {
    return this.http.post(`/api/tinc/settings/set`, data, config);
  }

  async settingsSetHost(uuid?: string, data?: TincSettingsSetHostRequest, config?: RequestConfig): Promise<ApiResponse<TincSettingsSetHostResponse>> {
    return this.http.post(`/api/tinc/settings/set_host/${uuid}`, data, config);
  }

  async settingsSetNetwork(uuid?: string, data?: TincSettingsSetNetworkRequest, config?: RequestConfig): Promise<ApiResponse<TincSettingsSetNetworkResponse>> {
    return this.http.post(`/api/tinc/settings/set_network/${uuid}`, data, config);
  }

  async settingsToggleHost(uuid: string, enabled?: string, data?: TincSettingsToggleHostRequest, config?: RequestConfig): Promise<ApiResponse<TincSettingsToggleHostResponse>> {
    return this.http.post(`/api/tinc/settings/toggle_host/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleNetwork(uuid: string, enabled?: string, data?: TincSettingsToggleNetworkRequest, config?: RequestConfig): Promise<ApiResponse<TincSettingsToggleNetworkResponse>> {
    return this.http.post(`/api/tinc/settings/toggle_network/${uuid}/${enabled}`, data, config);
  }

}
