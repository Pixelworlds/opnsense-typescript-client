import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Muninnode module

// Model field types

// General types
export interface MuninnodeGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MuninnodeGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MuninnodeGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface MuninnodeServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MuninnodeServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MuninnodeServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MuninnodeServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MuninnodeServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MuninnodeServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MuninnodeServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MuninnodeServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MuninnodeServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class MuninnodeApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/muninnode';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<MuninnodeGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: MuninnodeGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MuninnodeGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: MuninnodeServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MuninnodeServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: MuninnodeServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MuninnodeServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: MuninnodeServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MuninnodeServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<MuninnodeServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: MuninnodeServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MuninnodeServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
