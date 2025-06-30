import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Tftp module

// Model field types

// General types
export interface TftpGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TftpGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TftpGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface TftpServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TftpServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TftpServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TftpServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TftpServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TftpServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TftpServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TftpServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TftpServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class TftpApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<TftpGeneralGetResponse>> {
    return this.http.get(`/api/tftp/general/get`, config);
  }

  async generalSet(data?: TftpGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<TftpGeneralSetResponse>> {
    return this.http.post(`/api/tftp/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: TftpServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<TftpServiceReconfigureResponse>> {
    return this.http.post(`/api/tftp/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: TftpServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<TftpServiceRestartResponse>> {
    return this.http.post(`/api/tftp/service/restart`, data, config);
  }

  async serviceStart(data?: TftpServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<TftpServiceStartResponse>> {
    return this.http.post(`/api/tftp/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<TftpServiceStatusResponse>> {
    return this.http.get(`/api/tftp/service/status`, config);
  }

  async serviceStop(data?: TftpServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<TftpServiceStopResponse>> {
    return this.http.post(`/api/tftp/service/stop`, data, config);
  }

}
