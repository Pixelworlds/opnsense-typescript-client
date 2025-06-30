import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Wol module

// Model field types

// Wol types
export interface WolWolAddHostRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WolWolAddHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WolWolDelHostRequest {
  uuid: string;
}

export interface WolWolDelHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WolWolGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WolWolGetHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WolWolGetwakeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WolWolSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WolWolSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WolWolSetHostRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WolWolSetHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WolWolWakeallRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WolWolWakeallResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface WolWolentry {
}

export class WolApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Wol methods
  async wolAddHost(data?: WolWolAddHostRequest, config?: RequestConfig): Promise<ApiResponse<WolWolAddHostResponse>> {
    return this.http.post(`/api/wol/wol/add_host`, data, config);
  }

  async wolDelHost(uuid: string, data?: WolWolDelHostRequest, config?: RequestConfig): Promise<ApiResponse<WolWolDelHostResponse>> {
    return this.http.post(`/api/wol/wol/del_host/${uuid}`, data, config);
  }

  async wolGet(config?: RequestConfig): Promise<ApiResponse<WolWolGetResponse>> {
    return this.http.get(`/api/wol/wol/get`, config);
  }

  async wolGetHost(uuid?: string, config?: RequestConfig): Promise<ApiResponse<WolWolGetHostResponse>> {
    return this.http.get(`/api/wol/wol/get_host/${uuid}`, config);
  }

  async wolGetwake(config?: RequestConfig): Promise<ApiResponse<WolWolGetwakeResponse>> {
    return this.http.get(`/api/wol/wol/getwake`, config);
  }

  async wolSet(data?: WolWolSetRequest, config?: RequestConfig): Promise<ApiResponse<WolWolSetResponse>> {
    return this.http.post(`/api/wol/wol/set`, data, config);
  }

  async wolSetHost(uuid: string, data?: WolWolSetHostRequest, config?: RequestConfig): Promise<ApiResponse<WolWolSetHostResponse>> {
    return this.http.post(`/api/wol/wol/set_host/${uuid}`, data, config);
  }

  async wolWakeall(data?: WolWolWakeallRequest, config?: RequestConfig): Promise<ApiResponse<WolWolWakeallResponse>> {
    return this.http.post(`/api/wol/wol/wakeall`, data, config);
  }

}
