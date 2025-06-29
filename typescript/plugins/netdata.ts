import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Netdata module

// Model field types

// General types
export interface NetdataGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetdataGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetdataGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface NetdataServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetdataServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetdataServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetdataServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetdataServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetdataServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetdataServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetdataServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetdataServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class NetdataApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/netdata';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<NetdataGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: NetdataGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NetdataGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: NetdataServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NetdataServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NetdataServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NetdataServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: NetdataServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NetdataServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<NetdataServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: NetdataServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NetdataServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
