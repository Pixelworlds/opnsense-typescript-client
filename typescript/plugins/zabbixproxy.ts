import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Zabbixproxy module

// Model field types

// General types
export interface ZabbixproxyGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixproxyGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixproxyGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface ZabbixproxyServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixproxyServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixproxyServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixproxyServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixproxyServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixproxyServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixproxyServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixproxyServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixproxyServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class ZabbixproxyApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/zabbixproxy';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixproxyGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: ZabbixproxyGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixproxyGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: ZabbixproxyServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixproxyServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: ZabbixproxyServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixproxyServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: ZabbixproxyServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixproxyServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixproxyServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: ZabbixproxyServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixproxyServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
