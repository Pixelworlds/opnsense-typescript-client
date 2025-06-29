import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Wol module

// Model field types

// Wol types
export interface WolWolAddHostRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WolWolAddHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WolWolDelHostRequest {
  uuid: string;
}

export interface WolWolDelHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WolWolGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WolWolGetHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WolWolGetwakeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WolWolSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WolWolSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WolWolSetHostRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WolWolSetHostResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WolWolWakeallRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WolWolWakeallResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface WolWolentry {
}

export class WolApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/wol';
  }

  // Wol methods
  async wolAddHost(data?: WolWolAddHostRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WolWolAddHostResponse>> {
    return this.client.post(`${this.basePath}/wol/add_host`, data, config);
  }

  async wolDelHost(uuid: string, data?: WolWolDelHostRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WolWolDelHostResponse>> {
    return this.client.post(`${this.basePath}/wol/del_host/${uuid}`, data, config);
  }

  async wolGet(config?: AxiosRequestConfig): Promise<AxiosResponse<WolWolGetResponse>> {
    return this.client.get(`${this.basePath}/wol/get`, config);
  }

  async wolGetHost(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<WolWolGetHostResponse>> {
    return this.client.get(`${this.basePath}/wol/get_host/${uuid}`, config);
  }

  async wolGetwake(config?: AxiosRequestConfig): Promise<AxiosResponse<WolWolGetwakeResponse>> {
    return this.client.get(`${this.basePath}/wol/getwake`, config);
  }

  async wolSet(data?: WolWolSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WolWolSetResponse>> {
    return this.client.post(`${this.basePath}/wol/set`, data, config);
  }

  async wolSetHost(uuid: string, data?: WolWolSetHostRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WolWolSetHostResponse>> {
    return this.client.post(`${this.basePath}/wol/set_host/${uuid}`, data, config);
  }

  async wolWakeall(data?: WolWolWakeallRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WolWolWakeallResponse>> {
    return this.client.post(`${this.basePath}/wol/wakeall`, data, config);
  }

}
