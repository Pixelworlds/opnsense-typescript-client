import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Helloworld module

// Model field types

// Service types
export interface HelloworldServiceReloadRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HelloworldServiceReloadResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HelloworldServiceTestRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HelloworldServiceTestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface HelloworldSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HelloworldSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HelloworldSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class HelloworldApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceReload(data?: HelloworldServiceReloadRequest, config?: RequestConfig): Promise<ApiResponse<HelloworldServiceReloadResponse>> {
    return this.http.post(`/api/helloworld/service/reload`, data, config);
  }

  async serviceTest(data?: HelloworldServiceTestRequest, config?: RequestConfig): Promise<ApiResponse<HelloworldServiceTestResponse>> {
    return this.http.post(`/api/helloworld/service/test`, data, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<HelloworldSettingsGetResponse>> {
    return this.http.get(`/api/helloworld/settings/get`, config);
  }

  async settingsSet(data?: HelloworldSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<HelloworldSettingsSetResponse>> {
    return this.http.post(`/api/helloworld/settings/set`, data, config);
  }

}
