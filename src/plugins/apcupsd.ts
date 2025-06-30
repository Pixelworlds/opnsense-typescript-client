import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Apcupsd module

// Model field types

// Service types
export interface ApcupsdServiceGetUpsStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ApcupsdServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ApcupsdServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ApcupsdServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ApcupsdServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ApcupsdServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ApcupsdServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ApcupsdServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ApcupsdServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ApcupsdServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface ApcupsdSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ApcupsdSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ApcupsdSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class ApcupsdApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceGetUpsStatus(config?: RequestConfig): Promise<ApiResponse<ApcupsdServiceGetUpsStatusResponse>> {
    return this.http.get(`/api/apcupsd/service/get_ups_status`, config);
  }

  async serviceReconfigure(data?: ApcupsdServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<ApcupsdServiceReconfigureResponse>> {
    return this.http.post(`/api/apcupsd/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: ApcupsdServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<ApcupsdServiceRestartResponse>> {
    return this.http.post(`/api/apcupsd/service/restart`, data, config);
  }

  async serviceStart(data?: ApcupsdServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<ApcupsdServiceStartResponse>> {
    return this.http.post(`/api/apcupsd/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<ApcupsdServiceStatusResponse>> {
    return this.http.get(`/api/apcupsd/service/status`, config);
  }

  async serviceStop(data?: ApcupsdServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<ApcupsdServiceStopResponse>> {
    return this.http.post(`/api/apcupsd/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<ApcupsdSettingsGetResponse>> {
    return this.http.get(`/api/apcupsd/settings/get`, config);
  }

  async settingsSet(data?: ApcupsdSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<ApcupsdSettingsSetResponse>> {
    return this.http.post(`/api/apcupsd/settings/set`, data, config);
  }

}
