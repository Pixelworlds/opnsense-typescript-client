import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Rspamd module

// Model field types

// Service types
export interface RspamdServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RspamdServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RspamdServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RspamdServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RspamdServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RspamdServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RspamdServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RspamdServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RspamdServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface RspamdSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RspamdSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RspamdSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class RspamdApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceReconfigure(data?: RspamdServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<RspamdServiceReconfigureResponse>> {
    return this.http.post(`/api/rspamd/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: RspamdServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<RspamdServiceRestartResponse>> {
    return this.http.post(`/api/rspamd/service/restart`, data, config);
  }

  async serviceStart(data?: RspamdServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<RspamdServiceStartResponse>> {
    return this.http.post(`/api/rspamd/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<RspamdServiceStatusResponse>> {
    return this.http.get(`/api/rspamd/service/status`, config);
  }

  async serviceStop(data?: RspamdServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<RspamdServiceStopResponse>> {
    return this.http.post(`/api/rspamd/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<RspamdSettingsGetResponse>> {
    return this.http.get(`/api/rspamd/settings/get`, config);
  }

  async settingsSet(data?: RspamdSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<RspamdSettingsSetResponse>> {
    return this.http.post(`/api/rspamd/settings/set`, data, config);
  }

}
