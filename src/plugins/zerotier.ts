import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Zerotier module

// Model field types

// Network types
export interface ZerotierNetworkAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZerotierNetworkAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierNetworkDelRequest {
  uuid: string;
}

export interface ZerotierNetworkDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierNetworkGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierNetworkInfoResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierNetworkSearchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierNetworkSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZerotierNetworkSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierNetworkToggleRequest {
  enabled?: boolean;
}

export interface ZerotierNetworkToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface ZerotierSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZerotierSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierSettingsStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface ZerotierNetwork {
}

export class ZerotierApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Network methods
  async networkAdd(data?: ZerotierNetworkAddRequest, config?: RequestConfig): Promise<ApiResponse<ZerotierNetworkAddResponse>> {
    return this.http.post(`/api/zerotier/network/add`, data, config);
  }

  async networkDel(uuid?: string, data?: ZerotierNetworkDelRequest, config?: RequestConfig): Promise<ApiResponse<ZerotierNetworkDelResponse>> {
    return this.http.post(`/api/zerotier/network/del/${uuid}`, data, config);
  }

  async networkGet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<ZerotierNetworkGetResponse>> {
    return this.http.get(`/api/zerotier/network/get/${uuid}`, config);
  }

  async networkInfo(uuid?: string, config?: RequestConfig): Promise<ApiResponse<ZerotierNetworkInfoResponse>> {
    return this.http.get(`/api/zerotier/network/info/${uuid}`, config);
  }

  async networkSearch(config?: RequestConfig): Promise<ApiResponse<ZerotierNetworkSearchResponse>> {
    return this.http.get(`/api/zerotier/network/search`, config);
  }

  async networkSet(uuid?: string, data?: ZerotierNetworkSetRequest, config?: RequestConfig): Promise<ApiResponse<ZerotierNetworkSetResponse>> {
    return this.http.post(`/api/zerotier/network/set/${uuid}`, data, config);
  }

  async networkToggle(uuid?: string, data?: ZerotierNetworkToggleRequest, config?: RequestConfig): Promise<ApiResponse<ZerotierNetworkToggleResponse>> {
    return this.http.post(`/api/zerotier/network/toggle/${uuid}`, data, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<ZerotierSettingsGetResponse>> {
    return this.http.get(`/api/zerotier/settings/get`, config);
  }

  async settingsSet(data?: ZerotierSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<ZerotierSettingsSetResponse>> {
    return this.http.post(`/api/zerotier/settings/set`, data, config);
  }

  async settingsStatus(config?: RequestConfig): Promise<ApiResponse<ZerotierSettingsStatusResponse>> {
    return this.http.get(`/api/zerotier/settings/status`, config);
  }

}
