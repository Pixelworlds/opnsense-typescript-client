import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Dmidecode module

// Service types
export interface DmidecodeServiceGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class DmidecodeApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/dmidecode';
  }

  // Service methods
  async serviceGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DmidecodeServiceGetResponse>> {
    return this.client.get(`${this.basePath}/service/get`, config);
  }

}
