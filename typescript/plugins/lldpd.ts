import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Lldpd module

// Model field types

// General types
export interface LldpdGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface LldpdGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface LldpdGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface LldpdServiceNeighborResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface LldpdServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface LldpdServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface LldpdServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface LldpdServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface LldpdServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface LldpdServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface LldpdServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface LldpdServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface LldpdServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class LldpdApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/lldpd';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<LldpdGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: LldpdGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<LldpdGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceNeighbor(config?: AxiosRequestConfig): Promise<AxiosResponse<LldpdServiceNeighborResponse>> {
    return this.client.get(`${this.basePath}/service/neighbor`, config);
  }

  async serviceReconfigure(data?: LldpdServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<LldpdServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: LldpdServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<LldpdServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: LldpdServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<LldpdServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<LldpdServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: LldpdServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<LldpdServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
