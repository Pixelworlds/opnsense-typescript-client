import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Muninnode module

// Model field types

// General types
export interface MuninnodeGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MuninnodeGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MuninnodeGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface MuninnodeServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MuninnodeServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MuninnodeServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MuninnodeServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MuninnodeServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MuninnodeServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MuninnodeServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MuninnodeServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MuninnodeServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class MuninnodeApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<MuninnodeGeneralGetResponse>> {
    return this.http.get(`/api/muninnode/general/get`, config);
  }

  async generalSet(data?: MuninnodeGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<MuninnodeGeneralSetResponse>> {
    return this.http.post(`/api/muninnode/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: MuninnodeServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<MuninnodeServiceReconfigureResponse>> {
    return this.http.post(`/api/muninnode/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: MuninnodeServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<MuninnodeServiceRestartResponse>> {
    return this.http.post(`/api/muninnode/service/restart`, data, config);
  }

  async serviceStart(data?: MuninnodeServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<MuninnodeServiceStartResponse>> {
    return this.http.post(`/api/muninnode/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<MuninnodeServiceStatusResponse>> {
    return this.http.get(`/api/muninnode/service/status`, config);
  }

  async serviceStop(data?: MuninnodeServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<MuninnodeServiceStopResponse>> {
    return this.http.post(`/api/muninnode/service/stop`, data, config);
  }

}
