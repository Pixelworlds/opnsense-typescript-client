import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Ndproxy module

// Model field types

// General types
export interface NdproxyGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NdproxyGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NdproxyGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface NdproxyServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NdproxyServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NdproxyServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NdproxyServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NdproxyServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NdproxyServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NdproxyServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NdproxyServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NdproxyServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class NdproxyApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/ndproxy';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<NdproxyGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: NdproxyGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NdproxyGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: NdproxyServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NdproxyServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NdproxyServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NdproxyServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: NdproxyServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NdproxyServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<NdproxyServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: NdproxyServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NdproxyServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
