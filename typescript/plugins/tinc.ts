import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Tinc module

// Model field types

// Service types
export interface TincServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TincServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TincServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TincServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TincServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface TincSettingsDelHostRequest {
  uuid: string;
}

export interface TincSettingsDelHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsDelNetworkRequest {
  uuid: string;
}

export interface TincSettingsDelNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsGetHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsGetNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsSearchHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsSearchNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TincSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsSetHostRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TincSettingsSetHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsSetNetworkRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TincSettingsSetNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsToggleHostRequest {
  enabled?: boolean;
}

export interface TincSettingsToggleHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TincSettingsToggleNetworkRequest {
  enabled?: boolean;
}

export interface TincSettingsToggleNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface TincNetwork {
}

export interface TincHost {
}

export class TincApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/tinc';
  }

  // Service methods
  async serviceReconfigure(data?: TincServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TincServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: TincServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TincServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: TincServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TincServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStop(data?: TincServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TincServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsDelHost(uuid: string, data?: TincSettingsDelHostRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TincSettingsDelHostResponse>> {
    return this.client.post(`${this.basePath}/settings/del_host/${uuid}`, data, config);
  }

  async settingsDelNetwork(uuid: string, data?: TincSettingsDelNetworkRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TincSettingsDelNetworkResponse>> {
    return this.client.post(`${this.basePath}/settings/del_network/${uuid}`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TincSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetHost(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TincSettingsGetHostResponse>> {
    return this.client.get(`${this.basePath}/settings/get_host/${uuid}`, config);
  }

  async settingsGetNetwork(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TincSettingsGetNetworkResponse>> {
    return this.client.get(`${this.basePath}/settings/get_network/${uuid}`, config);
  }

  async settingsSearchHost(config?: AxiosRequestConfig): Promise<AxiosResponse<TincSettingsSearchHostResponse>> {
    return this.client.get(`${this.basePath}/settings/search_host`, config);
  }

  async settingsSearchNetwork(config?: AxiosRequestConfig): Promise<AxiosResponse<TincSettingsSearchNetworkResponse>> {
    return this.client.get(`${this.basePath}/settings/search_network`, config);
  }

  async settingsSet(data?: TincSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TincSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetHost(uuid?: string, data?: TincSettingsSetHostRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TincSettingsSetHostResponse>> {
    return this.client.post(`${this.basePath}/settings/set_host/${uuid}`, data, config);
  }

  async settingsSetNetwork(uuid?: string, data?: TincSettingsSetNetworkRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TincSettingsSetNetworkResponse>> {
    return this.client.post(`${this.basePath}/settings/set_network/${uuid}`, data, config);
  }

  async settingsToggleHost(uuid: string, enabled?: string, data?: TincSettingsToggleHostRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TincSettingsToggleHostResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_host/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleNetwork(uuid: string, enabled?: string, data?: TincSettingsToggleNetworkRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TincSettingsToggleNetworkResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_network/${uuid}/${enabled}`, data, config);
  }

}
