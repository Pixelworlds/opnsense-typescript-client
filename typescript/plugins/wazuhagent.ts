import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Wazuhagent module

// Model field types

// Service types
export interface WazuhagentServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WazuhagentServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WazuhagentServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WazuhagentServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WazuhagentServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WazuhagentServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WazuhagentServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WazuhagentServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WazuhagentServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface WazuhagentSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WazuhagentSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WazuhagentSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class WazuhagentApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/wazuhagent';
  }

  // Service methods
  async serviceReconfigure(data?: WazuhagentServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WazuhagentServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: WazuhagentServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WazuhagentServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: WazuhagentServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WazuhagentServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<WazuhagentServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: WazuhagentServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WazuhagentServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<WazuhagentSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsSet(data?: WazuhagentSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WazuhagentSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

}
