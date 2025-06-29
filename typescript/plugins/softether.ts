import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Softether module

// Model field types

// General types
export interface SoftetherGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SoftetherGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SoftetherGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface SoftetherServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SoftetherServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SoftetherServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SoftetherServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SoftetherServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SoftetherServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SoftetherServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SoftetherServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SoftetherServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class SoftetherApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/softether';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<SoftetherGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: SoftetherGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SoftetherGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: SoftetherServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SoftetherServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: SoftetherServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SoftetherServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: SoftetherServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SoftetherServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<SoftetherServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: SoftetherServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SoftetherServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
