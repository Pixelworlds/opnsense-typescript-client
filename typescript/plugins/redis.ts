import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Redis module

// Model field types

// Service types
export interface RedisServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RedisServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RedisServiceResetdbResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RedisServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RedisServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RedisServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RedisServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RedisServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RedisServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RedisServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface RedisSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RedisSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RedisSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class RedisApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/redis';
  }

  // Service methods
  async serviceReconfigure(data?: RedisServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RedisServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceResetdb(config?: AxiosRequestConfig): Promise<AxiosResponse<RedisServiceResetdbResponse>> {
    return this.client.get(`${this.basePath}/service/resetdb`, config);
  }

  async serviceRestart(data?: RedisServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RedisServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: RedisServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RedisServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<RedisServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: RedisServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RedisServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<RedisSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsSet(data?: RedisSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RedisSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

}
