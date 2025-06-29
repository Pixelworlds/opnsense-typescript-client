import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Chrony module

// Model field types

// General types
export interface ChronyGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ChronyGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface ChronyServiceChronyauthdataResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceChronysourcesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceChronysourcestatsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceChronytrackingResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ChronyServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ChronyServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ChronyServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ChronyServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ChronyServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class ChronyApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/chrony';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<ChronyGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: ChronyGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ChronyGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceChronyauthdata(config?: AxiosRequestConfig): Promise<AxiosResponse<ChronyServiceChronyauthdataResponse>> {
    return this.client.get(`${this.basePath}/service/chronyauthdata`, config);
  }

  async serviceChronysources(config?: AxiosRequestConfig): Promise<AxiosResponse<ChronyServiceChronysourcesResponse>> {
    return this.client.get(`${this.basePath}/service/chronysources`, config);
  }

  async serviceChronysourcestats(config?: AxiosRequestConfig): Promise<AxiosResponse<ChronyServiceChronysourcestatsResponse>> {
    return this.client.get(`${this.basePath}/service/chronysourcestats`, config);
  }

  async serviceChronytracking(config?: AxiosRequestConfig): Promise<AxiosResponse<ChronyServiceChronytrackingResponse>> {
    return this.client.get(`${this.basePath}/service/chronytracking`, config);
  }

  async serviceReconfigure(data?: ChronyServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ChronyServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: ChronyServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ChronyServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: ChronyServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ChronyServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<ChronyServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: ChronyServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ChronyServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
