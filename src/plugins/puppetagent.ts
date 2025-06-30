import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Puppetagent module

// Model field types

// Service types
export interface PuppetagentServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PuppetagentServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PuppetagentServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PuppetagentServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PuppetagentServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PuppetagentServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PuppetagentServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PuppetagentServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PuppetagentServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface PuppetagentSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PuppetagentSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PuppetagentSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class PuppetagentApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceReconfigure(data?: PuppetagentServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<PuppetagentServiceReconfigureResponse>> {
    return this.http.post(`/api/puppetagent/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: PuppetagentServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<PuppetagentServiceRestartResponse>> {
    return this.http.post(`/api/puppetagent/service/restart`, data, config);
  }

  async serviceStart(data?: PuppetagentServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<PuppetagentServiceStartResponse>> {
    return this.http.post(`/api/puppetagent/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<PuppetagentServiceStatusResponse>> {
    return this.http.get(`/api/puppetagent/service/status`, config);
  }

  async serviceStop(data?: PuppetagentServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<PuppetagentServiceStopResponse>> {
    return this.http.post(`/api/puppetagent/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<PuppetagentSettingsGetResponse>> {
    return this.http.get(`/api/puppetagent/settings/get`, config);
  }

  async settingsSet(data?: PuppetagentSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<PuppetagentSettingsSetResponse>> {
    return this.http.post(`/api/puppetagent/settings/set`, data, config);
  }

}
