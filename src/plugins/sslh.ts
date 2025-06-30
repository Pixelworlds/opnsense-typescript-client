import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Sslh module

// Model field types

// Service types
export interface SslhServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SslhServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SslhServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SslhServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SslhServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SslhServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SslhServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SslhServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SslhServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface SslhSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SslhSettingsIndexResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SslhSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SslhSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class SslhApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceReconfigure(data?: SslhServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<SslhServiceReconfigureResponse>> {
    return this.http.post(`/api/sslh/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: SslhServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<SslhServiceRestartResponse>> {
    return this.http.post(`/api/sslh/service/restart`, data, config);
  }

  async serviceStart(data?: SslhServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<SslhServiceStartResponse>> {
    return this.http.post(`/api/sslh/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<SslhServiceStatusResponse>> {
    return this.http.get(`/api/sslh/service/status`, config);
  }

  async serviceStop(data?: SslhServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<SslhServiceStopResponse>> {
    return this.http.post(`/api/sslh/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<SslhSettingsGetResponse>> {
    return this.http.get(`/api/sslh/settings/get`, config);
  }

  async settingsIndex(config?: RequestConfig): Promise<ApiResponse<SslhSettingsIndexResponse>> {
    return this.http.get(`/api/sslh/settings/index`, config);
  }

  async settingsSet(data?: SslhSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<SslhSettingsSetResponse>> {
    return this.http.post(`/api/sslh/settings/set`, data, config);
  }

}
