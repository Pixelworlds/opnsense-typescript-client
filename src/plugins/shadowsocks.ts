import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Shadowsocks module

// Model field types

// General types
export interface ShadowsocksGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Local types
export interface ShadowsocksLocalGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksLocalSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksLocalSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Localservice types
export interface ShadowsocksLocalserviceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksLocalserviceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksLocalserviceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksLocalserviceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksLocalserviceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksLocalserviceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksLocalserviceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksLocalserviceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksLocalserviceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface ShadowsocksServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class ShadowsocksApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<ShadowsocksGeneralGetResponse>> {
    return this.http.get(`/api/shadowsocks/general/get`, config);
  }

  async generalSet(data?: ShadowsocksGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<ShadowsocksGeneralSetResponse>> {
    return this.http.post(`/api/shadowsocks/general/set`, data, config);
  }


  // Local methods
  async localGet(config?: RequestConfig): Promise<ApiResponse<ShadowsocksLocalGetResponse>> {
    return this.http.get(`/api/shadowsocks/local/get`, config);
  }

  async localSet(data?: ShadowsocksLocalSetRequest, config?: RequestConfig): Promise<ApiResponse<ShadowsocksLocalSetResponse>> {
    return this.http.post(`/api/shadowsocks/local/set`, data, config);
  }


  // Localservice methods
  async localserviceReconfigure(data?: ShadowsocksLocalserviceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<ShadowsocksLocalserviceReconfigureResponse>> {
    return this.http.post(`/api/shadowsocks/localservice/reconfigure`, data, config);
  }

  async localserviceRestart(data?: ShadowsocksLocalserviceRestartRequest, config?: RequestConfig): Promise<ApiResponse<ShadowsocksLocalserviceRestartResponse>> {
    return this.http.post(`/api/shadowsocks/localservice/restart`, data, config);
  }

  async localserviceStart(data?: ShadowsocksLocalserviceStartRequest, config?: RequestConfig): Promise<ApiResponse<ShadowsocksLocalserviceStartResponse>> {
    return this.http.post(`/api/shadowsocks/localservice/start`, data, config);
  }

  async localserviceStatus(config?: RequestConfig): Promise<ApiResponse<ShadowsocksLocalserviceStatusResponse>> {
    return this.http.get(`/api/shadowsocks/localservice/status`, config);
  }

  async localserviceStop(data?: ShadowsocksLocalserviceStopRequest, config?: RequestConfig): Promise<ApiResponse<ShadowsocksLocalserviceStopResponse>> {
    return this.http.post(`/api/shadowsocks/localservice/stop`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: ShadowsocksServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<ShadowsocksServiceReconfigureResponse>> {
    return this.http.post(`/api/shadowsocks/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: ShadowsocksServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<ShadowsocksServiceRestartResponse>> {
    return this.http.post(`/api/shadowsocks/service/restart`, data, config);
  }

  async serviceStart(data?: ShadowsocksServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<ShadowsocksServiceStartResponse>> {
    return this.http.post(`/api/shadowsocks/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<ShadowsocksServiceStatusResponse>> {
    return this.http.get(`/api/shadowsocks/service/status`, config);
  }

  async serviceStop(data?: ShadowsocksServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<ShadowsocksServiceStopResponse>> {
    return this.http.post(`/api/shadowsocks/service/stop`, data, config);
  }

}
