import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Wazuhagent module

// Model field types

// Service types
export interface WazuhagentServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WazuhagentServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WazuhagentServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WazuhagentServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WazuhagentServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WazuhagentServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WazuhagentServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WazuhagentServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WazuhagentServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface WazuhagentSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WazuhagentSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WazuhagentSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class WazuhagentApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceReconfigure(data?: WazuhagentServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<WazuhagentServiceReconfigureResponse>> {
    return this.http.post(`/api/wazuhagent/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: WazuhagentServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<WazuhagentServiceRestartResponse>> {
    return this.http.post(`/api/wazuhagent/service/restart`, data, config);
  }

  async serviceStart(data?: WazuhagentServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<WazuhagentServiceStartResponse>> {
    return this.http.post(`/api/wazuhagent/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<WazuhagentServiceStatusResponse>> {
    return this.http.get(`/api/wazuhagent/service/status`, config);
  }

  async serviceStop(data?: WazuhagentServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<WazuhagentServiceStopResponse>> {
    return this.http.post(`/api/wazuhagent/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<WazuhagentSettingsGetResponse>> {
    return this.http.get(`/api/wazuhagent/settings/get`, config);
  }

  async settingsSet(data?: WazuhagentSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<WazuhagentSettingsSetResponse>> {
    return this.http.post(`/api/wazuhagent/settings/set`, data, config);
  }

}
