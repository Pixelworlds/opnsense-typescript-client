import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Lldpd module

// Model field types

// General types
export interface LldpdGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface LldpdGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface LldpdGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface LldpdServiceNeighborResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface LldpdServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface LldpdServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface LldpdServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface LldpdServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface LldpdServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface LldpdServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface LldpdServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface LldpdServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface LldpdServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class LldpdApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<LldpdGeneralGetResponse>> {
    return this.http.get(`/api/lldpd/general/get`, config);
  }

  async generalSet(data?: LldpdGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<LldpdGeneralSetResponse>> {
    return this.http.post(`/api/lldpd/general/set`, data, config);
  }


  // Service methods
  async serviceNeighbor(config?: RequestConfig): Promise<ApiResponse<LldpdServiceNeighborResponse>> {
    return this.http.get(`/api/lldpd/service/neighbor`, config);
  }

  async serviceReconfigure(data?: LldpdServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<LldpdServiceReconfigureResponse>> {
    return this.http.post(`/api/lldpd/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: LldpdServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<LldpdServiceRestartResponse>> {
    return this.http.post(`/api/lldpd/service/restart`, data, config);
  }

  async serviceStart(data?: LldpdServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<LldpdServiceStartResponse>> {
    return this.http.post(`/api/lldpd/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<LldpdServiceStatusResponse>> {
    return this.http.get(`/api/lldpd/service/status`, config);
  }

  async serviceStop(data?: LldpdServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<LldpdServiceStopResponse>> {
    return this.http.post(`/api/lldpd/service/stop`, data, config);
  }

}
