import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Nodeexporter module

// Model field types

// General types
export interface NodeexporterGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NodeexporterGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NodeexporterGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface NodeexporterServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NodeexporterServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NodeexporterServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NodeexporterServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NodeexporterServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NodeexporterServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NodeexporterServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NodeexporterServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NodeexporterServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class NodeexporterApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<NodeexporterGeneralGetResponse>> {
    return this.http.get(`/api/nodeexporter/general/get`, config);
  }

  async generalSet(data?: NodeexporterGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<NodeexporterGeneralSetResponse>> {
    return this.http.post(`/api/nodeexporter/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: NodeexporterServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<NodeexporterServiceReconfigureResponse>> {
    return this.http.post(`/api/nodeexporter/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NodeexporterServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<NodeexporterServiceRestartResponse>> {
    return this.http.post(`/api/nodeexporter/service/restart`, data, config);
  }

  async serviceStart(data?: NodeexporterServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<NodeexporterServiceStartResponse>> {
    return this.http.post(`/api/nodeexporter/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<NodeexporterServiceStatusResponse>> {
    return this.http.get(`/api/nodeexporter/service/status`, config);
  }

  async serviceStop(data?: NodeexporterServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<NodeexporterServiceStopResponse>> {
    return this.http.post(`/api/nodeexporter/service/stop`, data, config);
  }

}
