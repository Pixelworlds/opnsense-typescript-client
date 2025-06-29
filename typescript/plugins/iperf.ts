import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Iperf module

// Model field types

// Instance types
export interface IperfInstanceGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IperfInstanceQueryResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IperfInstanceSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IperfInstanceSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface IperfServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IperfServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IperfServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IperfServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class IperfApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/iperf';
  }

  // Instance methods
  async instanceGet(config?: AxiosRequestConfig): Promise<AxiosResponse<IperfInstanceGetResponse>> {
    return this.client.get(`${this.basePath}/instance/get`, config);
  }

  async instanceQuery(config?: AxiosRequestConfig): Promise<AxiosResponse<IperfInstanceQueryResponse>> {
    return this.client.get(`${this.basePath}/instance/query`, config);
  }

  async instanceSet(data?: IperfInstanceSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IperfInstanceSetResponse>> {
    return this.client.post(`${this.basePath}/instance/set`, data, config);
  }


  // Service methods
  async serviceRestart(config?: AxiosRequestConfig): Promise<AxiosResponse<IperfServiceRestartResponse>> {
    return this.client.get(`${this.basePath}/service/restart`, config);
  }

  async serviceStart(config?: AxiosRequestConfig): Promise<AxiosResponse<IperfServiceStartResponse>> {
    return this.client.get(`${this.basePath}/service/start`, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<IperfServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(config?: AxiosRequestConfig): Promise<AxiosResponse<IperfServiceStopResponse>> {
    return this.client.get(`${this.basePath}/service/stop`, config);
  }

}
