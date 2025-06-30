import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Redis module

// Model field types

// Service types
export interface RedisServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RedisServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RedisServiceResetdbResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RedisServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RedisServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RedisServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RedisServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RedisServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RedisServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RedisServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface RedisSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RedisSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RedisSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class RedisApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceReconfigure(data?: RedisServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<RedisServiceReconfigureResponse>> {
    return this.http.post(`/api/redis/service/reconfigure`, data, config);
  }

  async serviceResetdb(config?: RequestConfig): Promise<ApiResponse<RedisServiceResetdbResponse>> {
    return this.http.get(`/api/redis/service/resetdb`, config);
  }

  async serviceRestart(data?: RedisServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<RedisServiceRestartResponse>> {
    return this.http.post(`/api/redis/service/restart`, data, config);
  }

  async serviceStart(data?: RedisServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<RedisServiceStartResponse>> {
    return this.http.post(`/api/redis/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<RedisServiceStatusResponse>> {
    return this.http.get(`/api/redis/service/status`, config);
  }

  async serviceStop(data?: RedisServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<RedisServiceStopResponse>> {
    return this.http.post(`/api/redis/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<RedisSettingsGetResponse>> {
    return this.http.get(`/api/redis/settings/get`, config);
  }

  async settingsSet(data?: RedisSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<RedisSettingsSetResponse>> {
    return this.http.post(`/api/redis/settings/set`, data, config);
  }

}
