import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Puppetagent module

// Model field types

// Service types
export interface PuppetagentServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PuppetagentServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PuppetagentServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PuppetagentServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PuppetagentServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PuppetagentServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PuppetagentServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PuppetagentServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PuppetagentServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface PuppetagentSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PuppetagentSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PuppetagentSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class PuppetagentApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/puppetagent';
  }

  // Service methods
  async serviceReconfigure(data?: PuppetagentServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PuppetagentServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: PuppetagentServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PuppetagentServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: PuppetagentServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PuppetagentServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<PuppetagentServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: PuppetagentServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PuppetagentServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<PuppetagentSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsSet(data?: PuppetagentSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PuppetagentSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

}
