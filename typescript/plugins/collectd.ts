import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Collectd module

// General types
export interface CollectdGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CollectdGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CollectdGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface CollectdServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CollectdServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CollectdServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CollectdServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CollectdServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CollectdServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CollectdServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CollectdServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CollectdServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class CollectdApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/collectd';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<CollectdGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: CollectdGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CollectdGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: CollectdServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CollectdServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: CollectdServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CollectdServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: CollectdServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CollectdServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<CollectdServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: CollectdServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CollectdServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
