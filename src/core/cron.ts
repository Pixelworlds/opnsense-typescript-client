import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceReconfigure(data?: CronServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<CronServiceReconfigureResponse>> {
    return this.http.post(`/api/cron/service/reconfigure`, data, config);
  }


  // Settings methods
  async settingsAddJob(data?: CronSettingsAddJobRequest, config?: RequestConfig): Promise<ApiResponse<CronSettingsAddJobResponse>> {
    return this.http.post(`/api/cron/settings/add_job`, data, config);
  }

  async settingsDelJob(uuid: string, data?: CronSettingsDelJobRequest, config?: RequestConfig): Promise<ApiResponse<CronSettingsDelJobResponse>> {
    return this.http.post(`/api/cron/settings/del_job/${uuid}`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<CronSettingsGetResponse>> {
    return this.http.get(`/api/cron/settings/get`, config);
  }

  async settingsGetJob(uuid?: string, config?: RequestConfig): Promise<ApiResponse<CronSettingsGetJobResponse>> {
    return this.http.get(`/api/cron/settings/get_job/${uuid}`, config);
  }

  async settingsSet(data?: CronSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<CronSettingsSetResponse>> {
    return this.http.post(`/api/cron/settings/set`, data, config);
  }

  async settingsSetJob(uuid: string, data?: CronSettingsSetJobRequest, config?: RequestConfig): Promise<ApiResponse<CronSettingsSetJobResponse>> {
    return this.http.post(`/api/cron/settings/set_job/${uuid}`, data, config);
  }

  async settingsToggleJob(uuid: string, enabled?: string, data?: CronSettingsToggleJobRequest, config?: RequestConfig): Promise<ApiResponse<CronSettingsToggleJobResponse>> {
    return this.http.post(`/api/cron/settings/toggle_job/${uuid}/${enabled}`, data, config);
  }

}
