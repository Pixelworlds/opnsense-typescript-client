import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Nut module

// Model field types

// Diagnostics types
export interface NutDiagnosticsUpsstatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface NutServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NutServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NutServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NutServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NutServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NutServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NutServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NutServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NutServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface NutSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NutSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NutSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class NutApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/nut';
  }

  // Diagnostics methods
  async diagnosticsUpsstatus(config?: AxiosRequestConfig): Promise<AxiosResponse<NutDiagnosticsUpsstatusResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/upsstatus`, config);
  }


  // Service methods
  async serviceReconfigure(data?: NutServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NutServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NutServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NutServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: NutServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NutServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<NutServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: NutServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NutServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<NutSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsSet(data?: NutSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NutSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

}
