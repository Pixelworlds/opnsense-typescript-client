import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Hwprobe module

// Model field types

// General types
export interface HwprobeGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HwprobeGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HwprobeGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface HwprobeServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HwprobeServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HwprobeServiceReportResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HwprobeServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HwprobeServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HwprobeServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HwprobeServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HwprobeServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HwprobeServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HwprobeServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class HwprobeApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<HwprobeGeneralGetResponse>> {
    return this.http.get(`/api/hwprobe/general/get`, config);
  }

  async generalSet(data?: HwprobeGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<HwprobeGeneralSetResponse>> {
    return this.http.post(`/api/hwprobe/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: HwprobeServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<HwprobeServiceReconfigureResponse>> {
    return this.http.post(`/api/hwprobe/service/reconfigure`, data, config);
  }

  async serviceReport(config?: RequestConfig): Promise<ApiResponse<HwprobeServiceReportResponse>> {
    return this.http.get(`/api/hwprobe/service/report`, config);
  }

  async serviceRestart(data?: HwprobeServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<HwprobeServiceRestartResponse>> {
    return this.http.post(`/api/hwprobe/service/restart`, data, config);
  }

  async serviceStart(data?: HwprobeServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<HwprobeServiceStartResponse>> {
    return this.http.post(`/api/hwprobe/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<HwprobeServiceStatusResponse>> {
    return this.http.get(`/api/hwprobe/service/status`, config);
  }

  async serviceStop(data?: HwprobeServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<HwprobeServiceStopResponse>> {
    return this.http.post(`/api/hwprobe/service/stop`, data, config);
  }

}
