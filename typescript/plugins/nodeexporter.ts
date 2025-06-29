import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Nodeexporter module

// Model field types

// General types
export interface NodeexporterGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NodeexporterGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NodeexporterGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface NodeexporterServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NodeexporterServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NodeexporterServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NodeexporterServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NodeexporterServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NodeexporterServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NodeexporterServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NodeexporterServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NodeexporterServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class NodeexporterApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/nodeexporter';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<NodeexporterGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: NodeexporterGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NodeexporterGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: NodeexporterServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NodeexporterServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NodeexporterServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NodeexporterServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: NodeexporterServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NodeexporterServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<NodeexporterServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: NodeexporterServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NodeexporterServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
