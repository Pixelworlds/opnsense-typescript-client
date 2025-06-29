import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Helloworld module

// Model field types

// Service types
export interface HelloworldServiceReloadRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HelloworldServiceReloadResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HelloworldServiceTestRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HelloworldServiceTestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface HelloworldSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HelloworldSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HelloworldSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class HelloworldApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/helloworld';
  }

  // Service methods
  async serviceReload(data?: HelloworldServiceReloadRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HelloworldServiceReloadResponse>> {
    return this.client.post(`${this.basePath}/service/reload`, data, config);
  }

  async serviceTest(data?: HelloworldServiceTestRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HelloworldServiceTestResponse>> {
    return this.client.post(`${this.basePath}/service/test`, data, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<HelloworldSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsSet(data?: HelloworldSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HelloworldSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

}
