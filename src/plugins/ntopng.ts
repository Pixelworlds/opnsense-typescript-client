import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Ntopng module

// Model field types

// General types
export interface NtopngGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NtopngGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NtopngGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface NtopngServiceCheckredisResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NtopngServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NtopngServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NtopngServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NtopngServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NtopngServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NtopngServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NtopngServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NtopngServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NtopngServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class NtopngApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<NtopngGeneralGetResponse>> {
    return this.http.get(`/api/ntopng/general/get`, config);
  }

  async generalSet(data?: NtopngGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<NtopngGeneralSetResponse>> {
    return this.http.post(`/api/ntopng/general/set`, data, config);
  }


  // Service methods
  async serviceCheckredis(config?: RequestConfig): Promise<ApiResponse<NtopngServiceCheckredisResponse>> {
    return this.http.get(`/api/ntopng/service/checkredis`, config);
  }

  async serviceReconfigure(data?: NtopngServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<NtopngServiceReconfigureResponse>> {
    return this.http.post(`/api/ntopng/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NtopngServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<NtopngServiceRestartResponse>> {
    return this.http.post(`/api/ntopng/service/restart`, data, config);
  }

  async serviceStart(data?: NtopngServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<NtopngServiceStartResponse>> {
    return this.http.post(`/api/ntopng/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<NtopngServiceStatusResponse>> {
    return this.http.get(`/api/ntopng/service/status`, config);
  }

  async serviceStop(data?: NtopngServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<NtopngServiceStopResponse>> {
    return this.http.post(`/api/ntopng/service/stop`, data, config);
  }

}
