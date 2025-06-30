import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Tayga module

// Model field types

// General types
export interface TaygaGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TaygaGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TaygaGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface TaygaServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TaygaServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TaygaServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TaygaServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TaygaServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TaygaServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TaygaServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TaygaServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TaygaServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class TaygaApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<TaygaGeneralGetResponse>> {
    return this.http.get(`/api/tayga/general/get`, config);
  }

  async generalSet(data?: TaygaGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<TaygaGeneralSetResponse>> {
    return this.http.post(`/api/tayga/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: TaygaServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<TaygaServiceReconfigureResponse>> {
    return this.http.post(`/api/tayga/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: TaygaServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<TaygaServiceRestartResponse>> {
    return this.http.post(`/api/tayga/service/restart`, data, config);
  }

  async serviceStart(data?: TaygaServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<TaygaServiceStartResponse>> {
    return this.http.post(`/api/tayga/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<TaygaServiceStatusResponse>> {
    return this.http.get(`/api/tayga/service/status`, config);
  }

  async serviceStop(data?: TaygaServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<TaygaServiceStopResponse>> {
    return this.http.post(`/api/tayga/service/stop`, data, config);
  }

}
