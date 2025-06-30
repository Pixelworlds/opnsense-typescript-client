import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Softether module

// Model field types

// General types
export interface SoftetherGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SoftetherGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SoftetherGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface SoftetherServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SoftetherServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SoftetherServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SoftetherServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SoftetherServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SoftetherServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SoftetherServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SoftetherServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SoftetherServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class SoftetherApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<SoftetherGeneralGetResponse>> {
    return this.http.get(`/api/softether/general/get`, config);
  }

  async generalSet(data?: SoftetherGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<SoftetherGeneralSetResponse>> {
    return this.http.post(`/api/softether/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: SoftetherServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<SoftetherServiceReconfigureResponse>> {
    return this.http.post(`/api/softether/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: SoftetherServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<SoftetherServiceRestartResponse>> {
    return this.http.post(`/api/softether/service/restart`, data, config);
  }

  async serviceStart(data?: SoftetherServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<SoftetherServiceStartResponse>> {
    return this.http.post(`/api/softether/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<SoftetherServiceStatusResponse>> {
    return this.http.get(`/api/softether/service/status`, config);
  }

  async serviceStop(data?: SoftetherServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<SoftetherServiceStopResponse>> {
    return this.http.post(`/api/softether/service/stop`, data, config);
  }

}
