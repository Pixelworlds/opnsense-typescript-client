import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Zerotier module

// Model field types

// Network types
export interface ZerotierNetworkAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZerotierNetworkAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierNetworkDelRequest {
  uuid: string;
}

export interface ZerotierNetworkDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierNetworkGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierNetworkInfoResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierNetworkSearchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierNetworkSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZerotierNetworkSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierNetworkToggleRequest {
  enabled?: boolean;
}

export interface ZerotierNetworkToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface ZerotierSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZerotierSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZerotierSettingsStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface ZerotierNetwork {
}

export class ZerotierApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/zerotier';
  }

  // Network methods
  async networkAdd(data?: ZerotierNetworkAddRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZerotierNetworkAddResponse>> {
    return this.client.post(`${this.basePath}/network/add`, data, config);
  }

  async networkDel(uuid?: string, data?: ZerotierNetworkDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZerotierNetworkDelResponse>> {
    return this.client.post(`${this.basePath}/network/del/${uuid}`, data, config);
  }

  async networkGet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ZerotierNetworkGetResponse>> {
    return this.client.get(`${this.basePath}/network/get/${uuid}`, config);
  }

  async networkInfo(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ZerotierNetworkInfoResponse>> {
    return this.client.get(`${this.basePath}/network/info/${uuid}`, config);
  }

  async networkSearch(config?: AxiosRequestConfig): Promise<AxiosResponse<ZerotierNetworkSearchResponse>> {
    return this.client.get(`${this.basePath}/network/search`, config);
  }

  async networkSet(uuid?: string, data?: ZerotierNetworkSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZerotierNetworkSetResponse>> {
    return this.client.post(`${this.basePath}/network/set/${uuid}`, data, config);
  }

  async networkToggle(uuid?: string, data?: ZerotierNetworkToggleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZerotierNetworkToggleResponse>> {
    return this.client.post(`${this.basePath}/network/toggle/${uuid}`, data, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<ZerotierSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsSet(data?: ZerotierSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZerotierSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<ZerotierSettingsStatusResponse>> {
    return this.client.get(`${this.basePath}/settings/status`, config);
  }

}
