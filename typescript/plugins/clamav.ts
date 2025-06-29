import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Clamav module

// Model field types

// General types
export interface ClamavGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface ClamavServiceFreshclamRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavServiceFreshclamResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavServiceVersionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Url types
export interface ClamavUrlAddUrlRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavUrlAddUrlResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavUrlDelUrlRequest {
  uuid: string;
}

export interface ClamavUrlDelUrlResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavUrlGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavUrlGetUrlResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavUrlSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavUrlSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavUrlSetUrlRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavUrlSetUrlResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavUrlToggleUrlRequest {
  enabled?: boolean;
}

export interface ClamavUrlToggleUrlResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class ClamavApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/clamav';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: ClamavGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceFreshclam(data?: ClamavServiceFreshclamRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavServiceFreshclamResponse>> {
    return this.client.post(`${this.basePath}/service/freshclam`, data, config);
  }

  async serviceReconfigure(data?: ClamavServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: ClamavServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: ClamavServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: ClamavServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

  async serviceVersion(config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavServiceVersionResponse>> {
    return this.client.get(`${this.basePath}/service/version`, config);
  }


  // Url methods
  async urlAddUrl(data?: ClamavUrlAddUrlRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavUrlAddUrlResponse>> {
    return this.client.post(`${this.basePath}/url/add_url`, data, config);
  }

  async urlDelUrl(uuid: string, data?: ClamavUrlDelUrlRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavUrlDelUrlResponse>> {
    return this.client.post(`${this.basePath}/url/del_url/${uuid}`, data, config);
  }

  async urlGet(config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavUrlGetResponse>> {
    return this.client.get(`${this.basePath}/url/get`, config);
  }

  async urlGetUrl(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavUrlGetUrlResponse>> {
    return this.client.get(`${this.basePath}/url/get_url/${uuid}`, config);
  }

  async urlSet(data?: ClamavUrlSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavUrlSetResponse>> {
    return this.client.post(`${this.basePath}/url/set`, data, config);
  }

  async urlSetUrl(uuid: string, data?: ClamavUrlSetUrlRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavUrlSetUrlResponse>> {
    return this.client.post(`${this.basePath}/url/set_url/${uuid}`, data, config);
  }

  async urlToggleUrl(uuid: string, data?: ClamavUrlToggleUrlRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ClamavUrlToggleUrlResponse>> {
    return this.client.post(`${this.basePath}/url/toggle_url/${uuid}`, data, config);
  }

}
