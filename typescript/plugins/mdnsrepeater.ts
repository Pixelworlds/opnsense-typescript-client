import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Mdnsrepeater module

// Model field types

// Service types
export interface MdnsrepeaterServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MdnsrepeaterServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MdnsrepeaterServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MdnsrepeaterServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MdnsrepeaterServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MdnsrepeaterServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MdnsrepeaterServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MdnsrepeaterServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MdnsrepeaterServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface MdnsrepeaterSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MdnsrepeaterSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MdnsrepeaterSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class MdnsrepeaterApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/mdnsrepeater';
  }

  // Service methods
  async serviceReconfigure(data?: MdnsrepeaterServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MdnsrepeaterServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: MdnsrepeaterServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MdnsrepeaterServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: MdnsrepeaterServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MdnsrepeaterServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<MdnsrepeaterServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: MdnsrepeaterServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MdnsrepeaterServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<MdnsrepeaterSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsSet(data?: MdnsrepeaterSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MdnsrepeaterSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

}
