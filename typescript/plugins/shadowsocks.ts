import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Shadowsocks module

// Model field types

// General types
export interface ShadowsocksGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Local types
export interface ShadowsocksLocalGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksLocalSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksLocalSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Localservice types
export interface ShadowsocksLocalserviceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksLocalserviceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksLocalserviceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksLocalserviceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksLocalserviceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksLocalserviceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksLocalserviceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksLocalserviceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksLocalserviceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface ShadowsocksServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ShadowsocksServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ShadowsocksServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class ShadowsocksApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/shadowsocks';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<ShadowsocksGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: ShadowsocksGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ShadowsocksGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Local methods
  async localGet(config?: AxiosRequestConfig): Promise<AxiosResponse<ShadowsocksLocalGetResponse>> {
    return this.client.get(`${this.basePath}/local/get`, config);
  }

  async localSet(data?: ShadowsocksLocalSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ShadowsocksLocalSetResponse>> {
    return this.client.post(`${this.basePath}/local/set`, data, config);
  }


  // Localservice methods
  async localserviceReconfigure(data?: ShadowsocksLocalserviceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ShadowsocksLocalserviceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/localservice/reconfigure`, data, config);
  }

  async localserviceRestart(data?: ShadowsocksLocalserviceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ShadowsocksLocalserviceRestartResponse>> {
    return this.client.post(`${this.basePath}/localservice/restart`, data, config);
  }

  async localserviceStart(data?: ShadowsocksLocalserviceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ShadowsocksLocalserviceStartResponse>> {
    return this.client.post(`${this.basePath}/localservice/start`, data, config);
  }

  async localserviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<ShadowsocksLocalserviceStatusResponse>> {
    return this.client.get(`${this.basePath}/localservice/status`, config);
  }

  async localserviceStop(data?: ShadowsocksLocalserviceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ShadowsocksLocalserviceStopResponse>> {
    return this.client.post(`${this.basePath}/localservice/stop`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: ShadowsocksServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ShadowsocksServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: ShadowsocksServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ShadowsocksServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: ShadowsocksServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ShadowsocksServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<ShadowsocksServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: ShadowsocksServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ShadowsocksServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
