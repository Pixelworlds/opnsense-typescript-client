import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Zabbixproxy module

// Model field types

// General types
export interface ZabbixproxyGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixproxyGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixproxyGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface ZabbixproxyServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixproxyServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixproxyServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixproxyServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixproxyServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixproxyServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixproxyServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixproxyServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixproxyServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class ZabbixproxyApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<ZabbixproxyGeneralGetResponse>> {
    return this.http.get(`/api/zabbixproxy/general/get`, config);
  }

  async generalSet(data?: ZabbixproxyGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixproxyGeneralSetResponse>> {
    return this.http.post(`/api/zabbixproxy/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: ZabbixproxyServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixproxyServiceReconfigureResponse>> {
    return this.http.post(`/api/zabbixproxy/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: ZabbixproxyServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixproxyServiceRestartResponse>> {
    return this.http.post(`/api/zabbixproxy/service/restart`, data, config);
  }

  async serviceStart(data?: ZabbixproxyServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixproxyServiceStartResponse>> {
    return this.http.post(`/api/zabbixproxy/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<ZabbixproxyServiceStatusResponse>> {
    return this.http.get(`/api/zabbixproxy/service/status`, config);
  }

  async serviceStop(data?: ZabbixproxyServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixproxyServiceStopResponse>> {
    return this.http.post(`/api/zabbixproxy/service/stop`, data, config);
  }

}
