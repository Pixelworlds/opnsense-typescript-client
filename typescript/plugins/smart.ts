import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Smart module

// Service types
export interface SmartServiceAbortRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SmartServiceAbortResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SmartServiceInfoRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SmartServiceInfoResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SmartServiceListRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SmartServiceListResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SmartServiceLogsRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SmartServiceLogsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SmartServiceTestRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SmartServiceTestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class SmartApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/smart';
  }

  // Service methods
  async serviceAbort(data?: SmartServiceAbortRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SmartServiceAbortResponse>> {
    return this.client.post(`${this.basePath}/service/abort`, data, config);
  }

  async serviceInfo(data?: SmartServiceInfoRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SmartServiceInfoResponse>> {
    return this.client.post(`${this.basePath}/service/info`, data, config);
  }

  async serviceList(details?: string, data?: SmartServiceListRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SmartServiceListResponse>> {
    return this.client.post(`${this.basePath}/service/list/${details}`, data, config);
  }

  async serviceLogs(data?: SmartServiceLogsRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SmartServiceLogsResponse>> {
    return this.client.post(`${this.basePath}/service/logs`, data, config);
  }

  async serviceTest(data?: SmartServiceTestRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SmartServiceTestResponse>> {
    return this.client.post(`${this.basePath}/service/test`, data, config);
  }

}
