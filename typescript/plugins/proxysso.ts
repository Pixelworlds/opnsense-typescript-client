import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Proxysso module

// Service types
export interface ProxyssoServiceCreatekeytabRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyssoServiceCreatekeytabResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyssoServiceDeletekeytabResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyssoServiceGetCheckListResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyssoServiceShowkeytabResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyssoServiceTestkerbloginRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyssoServiceTestkerbloginResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface ProxyssoSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyssoSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyssoSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class ProxyssoApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/proxysso';
  }

  // Service methods
  async serviceCreatekeytab(data?: ProxyssoServiceCreatekeytabRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyssoServiceCreatekeytabResponse>> {
    return this.client.post(`${this.basePath}/service/createkeytab`, data, config);
  }

  async serviceDeletekeytab(config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyssoServiceDeletekeytabResponse>> {
    return this.client.get(`${this.basePath}/service/deletekeytab`, config);
  }

  async serviceGetCheckList(config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyssoServiceGetCheckListResponse>> {
    return this.client.get(`${this.basePath}/service/get_check_list`, config);
  }

  async serviceShowkeytab(config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyssoServiceShowkeytabResponse>> {
    return this.client.get(`${this.basePath}/service/showkeytab`, config);
  }

  async serviceTestkerblogin(data?: ProxyssoServiceTestkerbloginRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyssoServiceTestkerbloginResponse>> {
    return this.client.post(`${this.basePath}/service/testkerblogin`, data, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyssoSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsSet(data?: ProxyssoSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ProxyssoSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

}
