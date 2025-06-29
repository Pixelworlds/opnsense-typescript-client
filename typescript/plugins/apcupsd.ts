import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Apcupsd module

// Model field types

// Service types
export interface ApcupsdServiceGetUpsStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ApcupsdServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ApcupsdServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ApcupsdServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ApcupsdServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ApcupsdServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ApcupsdServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ApcupsdServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ApcupsdServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ApcupsdServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface ApcupsdSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ApcupsdSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ApcupsdSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class ApcupsdApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/apcupsd';
  }

  // Service methods
  async serviceGetUpsStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<ApcupsdServiceGetUpsStatusResponse>> {
    return this.client.get(`${this.basePath}/service/get_ups_status`, config);
  }

  async serviceReconfigure(data?: ApcupsdServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ApcupsdServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: ApcupsdServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ApcupsdServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: ApcupsdServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ApcupsdServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<ApcupsdServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: ApcupsdServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ApcupsdServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<ApcupsdSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsSet(data?: ApcupsdSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ApcupsdSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

}
