import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Smart module

// Service types
export interface SmartServiceAbortRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SmartServiceAbortResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SmartServiceInfoRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SmartServiceInfoResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SmartServiceListRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SmartServiceListResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SmartServiceLogsRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SmartServiceLogsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SmartServiceTestRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SmartServiceTestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class SmartApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceAbort(data?: SmartServiceAbortRequest, config?: RequestConfig): Promise<ApiResponse<SmartServiceAbortResponse>> {
    return this.http.post(`/api/smart/service/abort`, data, config);
  }

  async serviceInfo(data?: SmartServiceInfoRequest, config?: RequestConfig): Promise<ApiResponse<SmartServiceInfoResponse>> {
    return this.http.post(`/api/smart/service/info`, data, config);
  }

  async serviceList(details?: string, data?: SmartServiceListRequest, config?: RequestConfig): Promise<ApiResponse<SmartServiceListResponse>> {
    return this.http.post(`/api/smart/service/list/${details}`, data, config);
  }

  async serviceLogs(data?: SmartServiceLogsRequest, config?: RequestConfig): Promise<ApiResponse<SmartServiceLogsResponse>> {
    return this.http.post(`/api/smart/service/logs`, data, config);
  }

  async serviceTest(data?: SmartServiceTestRequest, config?: RequestConfig): Promise<ApiResponse<SmartServiceTestResponse>> {
    return this.http.post(`/api/smart/service/test`, data, config);
  }

}
