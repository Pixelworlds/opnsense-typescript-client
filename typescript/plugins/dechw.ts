import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Dechw module

// Info types
export interface DechwInfoPowerStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class DechwApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/dechw';
  }

  // Info methods
  async infoPowerStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<DechwInfoPowerStatusResponse>> {
    return this.client.get(`${this.basePath}/info/power_status`, config);
  }

}
