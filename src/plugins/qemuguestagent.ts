import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Qemuguestagent module

// Model field types

// Service types
export interface QemuguestagentServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QemuguestagentServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QemuguestagentServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QemuguestagentServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QemuguestagentServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QemuguestagentServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QemuguestagentServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QemuguestagentServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QemuguestagentServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface QemuguestagentSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QemuguestagentSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QemuguestagentSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class QemuguestagentApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceReconfigure(data?: QemuguestagentServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<QemuguestagentServiceReconfigureResponse>> {
    return this.http.post(`/api/qemuguestagent/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: QemuguestagentServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<QemuguestagentServiceRestartResponse>> {
    return this.http.post(`/api/qemuguestagent/service/restart`, data, config);
  }

  async serviceStart(data?: QemuguestagentServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<QemuguestagentServiceStartResponse>> {
    return this.http.post(`/api/qemuguestagent/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<QemuguestagentServiceStatusResponse>> {
    return this.http.get(`/api/qemuguestagent/service/status`, config);
  }

  async serviceStop(data?: QemuguestagentServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<QemuguestagentServiceStopResponse>> {
    return this.http.post(`/api/qemuguestagent/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<QemuguestagentSettingsGetResponse>> {
    return this.http.get(`/api/qemuguestagent/settings/get`, config);
  }

  async settingsSet(data?: QemuguestagentSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<QemuguestagentSettingsSetResponse>> {
    return this.http.post(`/api/qemuguestagent/settings/set`, data, config);
  }

}
