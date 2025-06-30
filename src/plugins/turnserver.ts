import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Turnserver module

// Model field types

// Service types
export interface TurnserverServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TurnserverServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TurnserverServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TurnserverServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TurnserverServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TurnserverServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TurnserverServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TurnserverServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TurnserverServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface TurnserverSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TurnserverSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TurnserverSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class TurnserverApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceReconfigure(data?: TurnserverServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<TurnserverServiceReconfigureResponse>> {
    return this.http.post(`/api/turnserver/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: TurnserverServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<TurnserverServiceRestartResponse>> {
    return this.http.post(`/api/turnserver/service/restart`, data, config);
  }

  async serviceStart(data?: TurnserverServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<TurnserverServiceStartResponse>> {
    return this.http.post(`/api/turnserver/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<TurnserverServiceStatusResponse>> {
    return this.http.get(`/api/turnserver/service/status`, config);
  }

  async serviceStop(data?: TurnserverServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<TurnserverServiceStopResponse>> {
    return this.http.post(`/api/turnserver/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<TurnserverSettingsGetResponse>> {
    return this.http.get(`/api/turnserver/settings/get`, config);
  }

  async settingsSet(data?: TurnserverSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<TurnserverSettingsSetResponse>> {
    return this.http.post(`/api/turnserver/settings/set`, data, config);
  }

}
