import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Openconnect module

// Model field types

// General types
export interface OpenconnectGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenconnectGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenconnectGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface OpenconnectServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenconnectServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenconnectServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenconnectServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenconnectServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenconnectServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenconnectServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenconnectServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenconnectServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class OpenconnectApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<OpenconnectGeneralGetResponse>> {
    return this.http.get(`/api/openconnect/general/get`, config);
  }

  async generalSet(data?: OpenconnectGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<OpenconnectGeneralSetResponse>> {
    return this.http.post(`/api/openconnect/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: OpenconnectServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<OpenconnectServiceReconfigureResponse>> {
    return this.http.post(`/api/openconnect/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: OpenconnectServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<OpenconnectServiceRestartResponse>> {
    return this.http.post(`/api/openconnect/service/restart`, data, config);
  }

  async serviceStart(data?: OpenconnectServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<OpenconnectServiceStartResponse>> {
    return this.http.post(`/api/openconnect/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<OpenconnectServiceStatusResponse>> {
    return this.http.get(`/api/openconnect/service/status`, config);
  }

  async serviceStop(data?: OpenconnectServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<OpenconnectServiceStopResponse>> {
    return this.http.post(`/api/openconnect/service/stop`, data, config);
  }

}
