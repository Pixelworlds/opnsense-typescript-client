import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Dyndns module

// Model field types

// Accounts types
export interface DyndnsAccountsAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsAccountsAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsAccountsDelItemRequest {
  uuid: string;
}

export interface DyndnsAccountsDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsAccountsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsAccountsGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsAccountsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsAccountsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsAccountsSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsAccountsSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsAccountsToggleItemRequest {
  enabled?: boolean;
}

export interface DyndnsAccountsToggleItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface DyndnsServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface DyndnsSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class DyndnsApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/dyndns';
  }

  // Accounts methods
  async accountsAddItem(data?: DyndnsAccountsAddItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DyndnsAccountsAddItemResponse>> {
    return this.client.post(`${this.basePath}/accounts/add_item`, data, config);
  }

  async accountsDelItem(uuid: string, data?: DyndnsAccountsDelItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DyndnsAccountsDelItemResponse>> {
    return this.client.post(`${this.basePath}/accounts/del_item/${uuid}`, data, config);
  }

  async accountsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DyndnsAccountsGetResponse>> {
    return this.client.get(`${this.basePath}/accounts/get`, config);
  }

  async accountsGetItem(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DyndnsAccountsGetItemResponse>> {
    return this.client.get(`${this.basePath}/accounts/get_item/${uuid}`, config);
  }

  async accountsSet(data?: DyndnsAccountsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DyndnsAccountsSetResponse>> {
    return this.client.post(`${this.basePath}/accounts/set`, data, config);
  }

  async accountsSetItem(uuid: string, data?: DyndnsAccountsSetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DyndnsAccountsSetItemResponse>> {
    return this.client.post(`${this.basePath}/accounts/set_item/${uuid}`, data, config);
  }

  async accountsToggleItem(uuid: string, enabled?: string, data?: DyndnsAccountsToggleItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DyndnsAccountsToggleItemResponse>> {
    return this.client.post(`${this.basePath}/accounts/toggle_item/${uuid}/${enabled}`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: DyndnsServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DyndnsServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: DyndnsServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DyndnsServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: DyndnsServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DyndnsServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<DyndnsServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: DyndnsServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DyndnsServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DyndnsSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsSet(data?: DyndnsSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DyndnsSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

}
