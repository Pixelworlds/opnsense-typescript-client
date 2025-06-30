import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Netdata module

// Model field types

// General types
export interface NetdataGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetdataGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetdataGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface NetdataServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetdataServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetdataServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetdataServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetdataServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetdataServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetdataServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetdataServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetdataServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class NetdataApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<NetdataGeneralGetResponse>> {
    return this.http.get(`/api/netdata/general/get`, config);
  }

  async generalSet(data?: NetdataGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<NetdataGeneralSetResponse>> {
    return this.http.post(`/api/netdata/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: NetdataServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<NetdataServiceReconfigureResponse>> {
    return this.http.post(`/api/netdata/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NetdataServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<NetdataServiceRestartResponse>> {
    return this.http.post(`/api/netdata/service/restart`, data, config);
  }

  async serviceStart(data?: NetdataServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<NetdataServiceStartResponse>> {
    return this.http.post(`/api/netdata/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<NetdataServiceStatusResponse>> {
    return this.http.get(`/api/netdata/service/status`, config);
  }

  async serviceStop(data?: NetdataServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<NetdataServiceStopResponse>> {
    return this.http.post(`/api/netdata/service/stop`, data, config);
  }

}
