import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Rspamd module

// Model field types

// Service types
export interface RspamdServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RspamdServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RspamdServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RspamdServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RspamdServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RspamdServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RspamdServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RspamdServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RspamdServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface RspamdSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RspamdSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RspamdSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class RspamdApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/rspamd';
  }

  // Service methods
  async serviceReconfigure(data?: RspamdServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RspamdServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: RspamdServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RspamdServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: RspamdServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RspamdServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<RspamdServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: RspamdServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RspamdServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<RspamdSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsSet(data?: RspamdSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RspamdSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

}
