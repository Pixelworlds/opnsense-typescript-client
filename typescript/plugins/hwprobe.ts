import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Hwprobe module

// Model field types

// General types
export interface HwprobeGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HwprobeGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HwprobeGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface HwprobeServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HwprobeServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HwprobeServiceReportResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HwprobeServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HwprobeServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HwprobeServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HwprobeServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HwprobeServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HwprobeServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HwprobeServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class HwprobeApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/hwprobe';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<HwprobeGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: HwprobeGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HwprobeGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: HwprobeServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HwprobeServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceReport(config?: AxiosRequestConfig): Promise<AxiosResponse<HwprobeServiceReportResponse>> {
    return this.client.get(`${this.basePath}/service/report`, config);
  }

  async serviceRestart(data?: HwprobeServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HwprobeServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: HwprobeServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HwprobeServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<HwprobeServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: HwprobeServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HwprobeServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
