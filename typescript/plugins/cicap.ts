import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Cicap module

// Model field types

// Antivirus types
export interface CicapAntivirusGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CicapAntivirusSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CicapAntivirusSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// General types
export interface CicapGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CicapGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CicapGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface CicapServiceCheckclamavResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CicapServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CicapServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CicapServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CicapServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CicapServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CicapServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CicapServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CicapServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CicapServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class CicapApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/cicap';
  }

  // Antivirus methods
  async antivirusGet(config?: AxiosRequestConfig): Promise<AxiosResponse<CicapAntivirusGetResponse>> {
    return this.client.get(`${this.basePath}/antivirus/get`, config);
  }

  async antivirusSet(data?: CicapAntivirusSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CicapAntivirusSetResponse>> {
    return this.client.post(`${this.basePath}/antivirus/set`, data, config);
  }


  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<CicapGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: CicapGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CicapGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceCheckclamav(config?: AxiosRequestConfig): Promise<AxiosResponse<CicapServiceCheckclamavResponse>> {
    return this.client.get(`${this.basePath}/service/checkclamav`, config);
  }

  async serviceReconfigure(data?: CicapServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CicapServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: CicapServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CicapServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: CicapServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CicapServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<CicapServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: CicapServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CicapServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
