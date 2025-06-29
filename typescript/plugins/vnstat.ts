import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Vnstat module

// Model field types

// General types
export interface VnstatGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface VnstatGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface VnstatServiceDailyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceHourlyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceMonthlyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface VnstatServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceResetdbResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface VnstatServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface VnstatServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface VnstatServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface VnstatServiceYearlyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class VnstatApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/vnstat';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<VnstatGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: VnstatGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<VnstatGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceDaily(config?: AxiosRequestConfig): Promise<AxiosResponse<VnstatServiceDailyResponse>> {
    return this.client.get(`${this.basePath}/service/daily`, config);
  }

  async serviceHourly(config?: AxiosRequestConfig): Promise<AxiosResponse<VnstatServiceHourlyResponse>> {
    return this.client.get(`${this.basePath}/service/hourly`, config);
  }

  async serviceMonthly(config?: AxiosRequestConfig): Promise<AxiosResponse<VnstatServiceMonthlyResponse>> {
    return this.client.get(`${this.basePath}/service/monthly`, config);
  }

  async serviceReconfigure(data?: VnstatServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<VnstatServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceResetdb(config?: AxiosRequestConfig): Promise<AxiosResponse<VnstatServiceResetdbResponse>> {
    return this.client.get(`${this.basePath}/service/resetdb`, config);
  }

  async serviceRestart(data?: VnstatServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<VnstatServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: VnstatServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<VnstatServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<VnstatServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: VnstatServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<VnstatServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

  async serviceYearly(config?: AxiosRequestConfig): Promise<AxiosResponse<VnstatServiceYearlyResponse>> {
    return this.client.get(`${this.basePath}/service/yearly`, config);
  }

}
