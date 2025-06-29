import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Ntopng module

// Model field types

// General types
export interface NtopngGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NtopngGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NtopngGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface NtopngServiceCheckredisResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NtopngServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NtopngServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NtopngServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NtopngServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NtopngServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NtopngServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NtopngServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NtopngServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NtopngServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class NtopngApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/ntopng';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<NtopngGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: NtopngGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NtopngGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceCheckredis(config?: AxiosRequestConfig): Promise<AxiosResponse<NtopngServiceCheckredisResponse>> {
    return this.client.get(`${this.basePath}/service/checkredis`, config);
  }

  async serviceReconfigure(data?: NtopngServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NtopngServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NtopngServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NtopngServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: NtopngServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NtopngServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<NtopngServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: NtopngServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NtopngServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
