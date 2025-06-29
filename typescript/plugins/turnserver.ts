import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Turnserver module

// Model field types

// Service types
export interface TurnserverServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TurnserverServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TurnserverServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TurnserverServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TurnserverServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TurnserverServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TurnserverServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TurnserverServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TurnserverServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface TurnserverSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TurnserverSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TurnserverSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class TurnserverApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/turnserver';
  }

  // Service methods
  async serviceReconfigure(data?: TurnserverServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TurnserverServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: TurnserverServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TurnserverServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: TurnserverServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TurnserverServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<TurnserverServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: TurnserverServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TurnserverServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TurnserverSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsSet(data?: TurnserverSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TurnserverSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

}
