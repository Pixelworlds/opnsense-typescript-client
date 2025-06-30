import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Chrony module

// Model field types

// General types
export interface ChronyGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ChronyGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface ChronyServiceChronyauthdataResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceChronysourcesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceChronysourcestatsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceChronytrackingResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ChronyServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ChronyServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ChronyServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ChronyServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class ChronyApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<ChronyGeneralGetResponse>> {
    return this.http.get(`/api/chrony/general/get`, config);
  }

  async generalSet(data?: ChronyGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<ChronyGeneralSetResponse>> {
    return this.http.post(`/api/chrony/general/set`, data, config);
  }


  // Service methods
  async serviceChronyauthdata(config?: RequestConfig): Promise<ApiResponse<ChronyServiceChronyauthdataResponse>> {
    return this.http.get(`/api/chrony/service/chronyauthdata`, config);
  }

  async serviceChronysources(config?: RequestConfig): Promise<ApiResponse<ChronyServiceChronysourcesResponse>> {
    return this.http.get(`/api/chrony/service/chronysources`, config);
  }

  async serviceChronysourcestats(config?: RequestConfig): Promise<ApiResponse<ChronyServiceChronysourcestatsResponse>> {
    return this.http.get(`/api/chrony/service/chronysourcestats`, config);
  }

  async serviceChronytracking(config?: RequestConfig): Promise<ApiResponse<ChronyServiceChronytrackingResponse>> {
    return this.http.get(`/api/chrony/service/chronytracking`, config);
  }

  async serviceReconfigure(data?: ChronyServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<ChronyServiceReconfigureResponse>> {
    return this.http.post(`/api/chrony/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: ChronyServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<ChronyServiceRestartResponse>> {
    return this.http.post(`/api/chrony/service/restart`, data, config);
  }

  async serviceStart(data?: ChronyServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<ChronyServiceStartResponse>> {
    return this.http.post(`/api/chrony/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<ChronyServiceStatusResponse>> {
    return this.http.get(`/api/chrony/service/status`, config);
  }

  async serviceStop(data?: ChronyServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<ChronyServiceStopResponse>> {
    return this.http.post(`/api/chrony/service/stop`, data, config);
  }

}
