import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Cron module

// Model field types

// Service types
export interface CronServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CronServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface CronSettingsAddJobRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CronSettingsAddJobResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CronSettingsDelJobRequest {
  uuid: string;
}

export interface CronSettingsDelJobResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CronSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CronSettingsGetJobResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CronSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CronSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CronSettingsSetJobRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CronSettingsSetJobResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CronSettingsToggleJobRequest {
  enabled?: boolean;
}

export interface CronSettingsToggleJobResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface CronJob {
}

export class CronApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/cron';
  }

  // Service methods
  async serviceReconfigure(data?: CronServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CronServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }


  // Settings methods
  async settingsAddJob(data?: CronSettingsAddJobRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CronSettingsAddJobResponse>> {
    return this.client.post(`${this.basePath}/settings/add_job`, data, config);
  }

  async settingsDelJob(uuid: string, data?: CronSettingsDelJobRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CronSettingsDelJobResponse>> {
    return this.client.post(`${this.basePath}/settings/del_job/${uuid}`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<CronSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetJob(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CronSettingsGetJobResponse>> {
    return this.client.get(`${this.basePath}/settings/get_job/${uuid}`, config);
  }

  async settingsSet(data?: CronSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CronSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetJob(uuid: string, data?: CronSettingsSetJobRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CronSettingsSetJobResponse>> {
    return this.client.post(`${this.basePath}/settings/set_job/${uuid}`, data, config);
  }

  async settingsToggleJob(uuid: string, enabled?: string, data?: CronSettingsToggleJobRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CronSettingsToggleJobResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_job/${uuid}/${enabled}`, data, config);
  }

}
