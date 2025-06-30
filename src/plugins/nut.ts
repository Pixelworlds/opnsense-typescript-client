import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Nut module

// Model field types

// Diagnostics types
export interface NutDiagnosticsUpsstatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface NutServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NutServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NutServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NutServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NutServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NutServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NutServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NutServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NutServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface NutSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NutSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NutSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class NutApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Diagnostics methods
  async diagnosticsUpsstatus(config?: RequestConfig): Promise<ApiResponse<NutDiagnosticsUpsstatusResponse>> {
    return this.http.get(`/api/nut/diagnostics/upsstatus`, config);
  }


  // Service methods
  async serviceReconfigure(data?: NutServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<NutServiceReconfigureResponse>> {
    return this.http.post(`/api/nut/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NutServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<NutServiceRestartResponse>> {
    return this.http.post(`/api/nut/service/restart`, data, config);
  }

  async serviceStart(data?: NutServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<NutServiceStartResponse>> {
    return this.http.post(`/api/nut/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<NutServiceStatusResponse>> {
    return this.http.get(`/api/nut/service/status`, config);
  }

  async serviceStop(data?: NutServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<NutServiceStopResponse>> {
    return this.http.post(`/api/nut/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<NutSettingsGetResponse>> {
    return this.http.get(`/api/nut/settings/get`, config);
  }

  async settingsSet(data?: NutSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<NutSettingsSetResponse>> {
    return this.http.post(`/api/nut/settings/set`, data, config);
  }

}
