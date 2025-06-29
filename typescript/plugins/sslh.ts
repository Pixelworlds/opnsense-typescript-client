import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Sslh module

// Model field types

// Service types
export interface SslhServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SslhServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SslhServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SslhServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SslhServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SslhServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SslhServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SslhServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SslhServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface SslhSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SslhSettingsIndexResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SslhSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SslhSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class SslhApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/sslh';
  }

  // Service methods
  async serviceReconfigure(data?: SslhServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SslhServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: SslhServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SslhServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: SslhServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SslhServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<SslhServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: SslhServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SslhServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<SslhSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsIndex(config?: AxiosRequestConfig): Promise<AxiosResponse<SslhSettingsIndexResponse>> {
    return this.client.get(`${this.basePath}/settings/index`, config);
  }

  async settingsSet(data?: SslhSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SslhSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

}
