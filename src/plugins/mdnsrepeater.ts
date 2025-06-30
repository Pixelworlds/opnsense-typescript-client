import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Mdnsrepeater module

// Model field types

// Service types
export interface MdnsrepeaterServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MdnsrepeaterServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MdnsrepeaterServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MdnsrepeaterServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MdnsrepeaterServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MdnsrepeaterServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MdnsrepeaterServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MdnsrepeaterServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MdnsrepeaterServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface MdnsrepeaterSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MdnsrepeaterSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MdnsrepeaterSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class MdnsrepeaterApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceReconfigure(data?: MdnsrepeaterServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<MdnsrepeaterServiceReconfigureResponse>> {
    return this.http.post(`/api/mdnsrepeater/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: MdnsrepeaterServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<MdnsrepeaterServiceRestartResponse>> {
    return this.http.post(`/api/mdnsrepeater/service/restart`, data, config);
  }

  async serviceStart(data?: MdnsrepeaterServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<MdnsrepeaterServiceStartResponse>> {
    return this.http.post(`/api/mdnsrepeater/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<MdnsrepeaterServiceStatusResponse>> {
    return this.http.get(`/api/mdnsrepeater/service/status`, config);
  }

  async serviceStop(data?: MdnsrepeaterServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<MdnsrepeaterServiceStopResponse>> {
    return this.http.post(`/api/mdnsrepeater/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<MdnsrepeaterSettingsGetResponse>> {
    return this.http.get(`/api/mdnsrepeater/settings/get`, config);
  }

  async settingsSet(data?: MdnsrepeaterSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<MdnsrepeaterSettingsSetResponse>> {
    return this.http.post(`/api/mdnsrepeater/settings/set`, data, config);
  }

}
