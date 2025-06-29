import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Qemuguestagent module

// Model field types

// Service types
export interface QemuguestagentServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QemuguestagentServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QemuguestagentServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QemuguestagentServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QemuguestagentServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QemuguestagentServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QemuguestagentServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QemuguestagentServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QemuguestagentServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface QemuguestagentSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QemuguestagentSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QemuguestagentSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class QemuguestagentApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/qemuguestagent';
  }

  // Service methods
  async serviceReconfigure(data?: QemuguestagentServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QemuguestagentServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: QemuguestagentServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QemuguestagentServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: QemuguestagentServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QemuguestagentServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<QemuguestagentServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: QemuguestagentServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QemuguestagentServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<QemuguestagentSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsSet(data?: QemuguestagentSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QemuguestagentSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

}
