import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Tayga module

// Model field types

// General types
export interface TaygaGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TaygaGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TaygaGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface TaygaServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TaygaServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TaygaServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TaygaServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TaygaServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TaygaServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TaygaServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TaygaServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TaygaServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class TaygaApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/tayga';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TaygaGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: TaygaGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TaygaGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: TaygaServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TaygaServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: TaygaServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TaygaServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: TaygaServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TaygaServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<TaygaServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: TaygaServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TaygaServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
