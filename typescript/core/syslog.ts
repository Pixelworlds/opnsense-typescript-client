import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Syslog module

// Model field types

// Service types
export interface SyslogServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SyslogServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SyslogServiceResetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SyslogServiceResetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SyslogServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SyslogServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SyslogServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SyslogServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SyslogServiceStatsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SyslogServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SyslogServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SyslogServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface SyslogSettingsAddDestinationRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SyslogSettingsAddDestinationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SyslogSettingsDelDestinationRequest {
  uuid: string;
}

export interface SyslogSettingsDelDestinationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SyslogSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SyslogSettingsGetDestinationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SyslogSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SyslogSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SyslogSettingsSetDestinationRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SyslogSettingsSetDestinationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SyslogSettingsToggleDestinationRequest {
  enabled?: boolean;
}

export interface SyslogSettingsToggleDestinationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface SyslogDestination {
}

export class SyslogApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/syslog';
  }

  // Service methods
  async serviceReconfigure(data?: SyslogServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SyslogServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceReset(data?: SyslogServiceResetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SyslogServiceResetResponse>> {
    return this.client.post(`${this.basePath}/service/reset`, data, config);
  }

  async serviceRestart(data?: SyslogServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SyslogServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: SyslogServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SyslogServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStats(config?: AxiosRequestConfig): Promise<AxiosResponse<SyslogServiceStatsResponse>> {
    return this.client.get(`${this.basePath}/service/stats`, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<SyslogServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: SyslogServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SyslogServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddDestination(data?: SyslogSettingsAddDestinationRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SyslogSettingsAddDestinationResponse>> {
    return this.client.post(`${this.basePath}/settings/add_destination`, data, config);
  }

  async settingsDelDestination(uuid: string, data?: SyslogSettingsDelDestinationRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SyslogSettingsDelDestinationResponse>> {
    return this.client.post(`${this.basePath}/settings/del_destination/${uuid}`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<SyslogSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetDestination(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<SyslogSettingsGetDestinationResponse>> {
    return this.client.get(`${this.basePath}/settings/get_destination/${uuid}`, config);
  }

  async settingsSet(data?: SyslogSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SyslogSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetDestination(uuid: string, data?: SyslogSettingsSetDestinationRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SyslogSettingsSetDestinationResponse>> {
    return this.client.post(`${this.basePath}/settings/set_destination/${uuid}`, data, config);
  }

  async settingsToggleDestination(uuid: string, enabled?: string, data?: SyslogSettingsToggleDestinationRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SyslogSettingsToggleDestinationResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_destination/${uuid}/${enabled}`, data, config);
  }

}
