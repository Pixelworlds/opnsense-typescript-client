import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Gridexample module

// Model field types

// Settings types
export interface GridexampleSettingsAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface GridexampleSettingsAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface GridexampleSettingsDelItemRequest {
  uuid: string;
}

export interface GridexampleSettingsDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface GridexampleSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface GridexampleSettingsGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface GridexampleSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface GridexampleSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface GridexampleSettingsSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface GridexampleSettingsSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface GridexampleSettingsToggleItemRequest {
  enabled?: boolean;
}

export interface GridexampleSettingsToggleItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface GridexampleAddress {
}

export class GridexampleApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/gridexample';
  }

  // Settings methods
  async settingsAddItem(data?: GridexampleSettingsAddItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<GridexampleSettingsAddItemResponse>> {
    return this.client.post(`${this.basePath}/settings/add_item`, data, config);
  }

  async settingsDelItem(uuid: string, data?: GridexampleSettingsDelItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<GridexampleSettingsDelItemResponse>> {
    return this.client.post(`${this.basePath}/settings/del_item/${uuid}`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<GridexampleSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetItem(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<GridexampleSettingsGetItemResponse>> {
    return this.client.get(`${this.basePath}/settings/get_item/${uuid}`, config);
  }

  async settingsSet(data?: GridexampleSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<GridexampleSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetItem(uuid: string, data?: GridexampleSettingsSetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<GridexampleSettingsSetItemResponse>> {
    return this.client.post(`${this.basePath}/settings/set_item/${uuid}`, data, config);
  }

  async settingsToggleItem(uuid: string, enabled?: string, data?: GridexampleSettingsToggleItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<GridexampleSettingsToggleItemResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_item/${uuid}/${enabled}`, data, config);
  }

}
