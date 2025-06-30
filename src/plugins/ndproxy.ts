import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Ndproxy module

// Model field types

// General types
export interface NdproxyGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NdproxyGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NdproxyGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface NdproxyServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NdproxyServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NdproxyServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NdproxyServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NdproxyServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NdproxyServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NdproxyServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NdproxyServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NdproxyServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class NdproxyApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<NdproxyGeneralGetResponse>> {
    return this.http.get(`/api/ndproxy/general/get`, config);
  }

  async generalSet(data?: NdproxyGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<NdproxyGeneralSetResponse>> {
    return this.http.post(`/api/ndproxy/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: NdproxyServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<NdproxyServiceReconfigureResponse>> {
    return this.http.post(`/api/ndproxy/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NdproxyServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<NdproxyServiceRestartResponse>> {
    return this.http.post(`/api/ndproxy/service/restart`, data, config);
  }

  async serviceStart(data?: NdproxyServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<NdproxyServiceStartResponse>> {
    return this.http.post(`/api/ndproxy/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<NdproxyServiceStatusResponse>> {
    return this.http.get(`/api/ndproxy/service/status`, config);
  }

  async serviceStop(data?: NdproxyServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<NdproxyServiceStopResponse>> {
    return this.http.post(`/api/ndproxy/service/stop`, data, config);
  }

}
