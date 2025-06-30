import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Collectd module

// General types
export interface CollectdGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CollectdGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CollectdGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface CollectdServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CollectdServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CollectdServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CollectdServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CollectdServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CollectdServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CollectdServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CollectdServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CollectdServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class CollectdApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<CollectdGeneralGetResponse>> {
    return this.http.get(`/api/collectd/general/get`, config);
  }

  async generalSet(data?: CollectdGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<CollectdGeneralSetResponse>> {
    return this.http.post(`/api/collectd/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: CollectdServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<CollectdServiceReconfigureResponse>> {
    return this.http.post(`/api/collectd/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: CollectdServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<CollectdServiceRestartResponse>> {
    return this.http.post(`/api/collectd/service/restart`, data, config);
  }

  async serviceStart(data?: CollectdServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<CollectdServiceStartResponse>> {
    return this.http.post(`/api/collectd/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<CollectdServiceStatusResponse>> {
    return this.http.get(`/api/collectd/service/status`, config);
  }

  async serviceStop(data?: CollectdServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<CollectdServiceStopResponse>> {
    return this.http.post(`/api/collectd/service/stop`, data, config);
  }

}
