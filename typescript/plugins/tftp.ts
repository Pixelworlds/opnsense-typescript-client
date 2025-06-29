import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Tftp module

// Model field types

// General types
export interface TftpGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TftpGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TftpGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface TftpServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TftpServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TftpServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TftpServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TftpServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TftpServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TftpServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TftpServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TftpServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class TftpApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/tftp';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TftpGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: TftpGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TftpGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: TftpServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TftpServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: TftpServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TftpServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: TftpServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TftpServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<TftpServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: TftpServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TftpServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
