import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Openconnect module

// Model field types

// General types
export interface OpenconnectGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenconnectGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenconnectGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface OpenconnectServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenconnectServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenconnectServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenconnectServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenconnectServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenconnectServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenconnectServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenconnectServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenconnectServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class OpenconnectApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/openconnect';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<OpenconnectGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: OpenconnectGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenconnectGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: OpenconnectServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenconnectServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: OpenconnectServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenconnectServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: OpenconnectServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenconnectServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<OpenconnectServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: OpenconnectServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenconnectServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
