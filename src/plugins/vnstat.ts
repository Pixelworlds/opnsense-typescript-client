import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Vnstat module

// Model field types

// General types
export interface VnstatGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface VnstatGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface VnstatServiceDailyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceHourlyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceMonthlyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface VnstatServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceResetdbResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface VnstatServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface VnstatServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface VnstatServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceYearlyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class VnstatApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<VnstatGeneralGetResponse>> {
    return this.http.get(`/api/vnstat/general/get`, config);
  }

  async generalSet(data?: VnstatGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<VnstatGeneralSetResponse>> {
    return this.http.post(`/api/vnstat/general/set`, data, config);
  }


  // Service methods
  async serviceDaily(config?: RequestConfig): Promise<ApiResponse<VnstatServiceDailyResponse>> {
    return this.http.get(`/api/vnstat/service/daily`, config);
  }

  async serviceHourly(config?: RequestConfig): Promise<ApiResponse<VnstatServiceHourlyResponse>> {
    return this.http.get(`/api/vnstat/service/hourly`, config);
  }

  async serviceMonthly(config?: RequestConfig): Promise<ApiResponse<VnstatServiceMonthlyResponse>> {
    return this.http.get(`/api/vnstat/service/monthly`, config);
  }

  async serviceReconfigure(data?: VnstatServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<VnstatServiceReconfigureResponse>> {
    return this.http.post(`/api/vnstat/service/reconfigure`, data, config);
  }

  async serviceResetdb(config?: RequestConfig): Promise<ApiResponse<VnstatServiceResetdbResponse>> {
    return this.http.get(`/api/vnstat/service/resetdb`, config);
  }

  async serviceRestart(data?: VnstatServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<VnstatServiceRestartResponse>> {
    return this.http.post(`/api/vnstat/service/restart`, data, config);
  }

  async serviceStart(data?: VnstatServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<VnstatServiceStartResponse>> {
    return this.http.post(`/api/vnstat/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<VnstatServiceStatusResponse>> {
    return this.http.get(`/api/vnstat/service/status`, config);
  }

  async serviceStop(data?: VnstatServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<VnstatServiceStopResponse>> {
    return this.http.post(`/api/vnstat/service/stop`, data, config);
  }

  async serviceYearly(config?: RequestConfig): Promise<ApiResponse<VnstatServiceYearlyResponse>> {
    return this.http.get(`/api/vnstat/service/yearly`, config);
  }

}
