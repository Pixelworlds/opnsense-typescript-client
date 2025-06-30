import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceReconfigure(data?: SyslogServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<SyslogServiceReconfigureResponse>> {
    return this.http.post(`/api/syslog/service/reconfigure`, data, config);
  }

  async serviceReset(data?: SyslogServiceResetRequest, config?: RequestConfig): Promise<ApiResponse<SyslogServiceResetResponse>> {
    return this.http.post(`/api/syslog/service/reset`, data, config);
  }

  async serviceRestart(data?: SyslogServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<SyslogServiceRestartResponse>> {
    return this.http.post(`/api/syslog/service/restart`, data, config);
  }

  async serviceStart(data?: SyslogServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<SyslogServiceStartResponse>> {
    return this.http.post(`/api/syslog/service/start`, data, config);
  }

  async serviceStats(config?: RequestConfig): Promise<ApiResponse<SyslogServiceStatsResponse>> {
    return this.http.get(`/api/syslog/service/stats`, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<SyslogServiceStatusResponse>> {
    return this.http.get(`/api/syslog/service/status`, config);
  }

  async serviceStop(data?: SyslogServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<SyslogServiceStopResponse>> {
    return this.http.post(`/api/syslog/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddDestination(data?: SyslogSettingsAddDestinationRequest, config?: RequestConfig): Promise<ApiResponse<SyslogSettingsAddDestinationResponse>> {
    return this.http.post(`/api/syslog/settings/add_destination`, data, config);
  }

  async settingsDelDestination(uuid: string, data?: SyslogSettingsDelDestinationRequest, config?: RequestConfig): Promise<ApiResponse<SyslogSettingsDelDestinationResponse>> {
    return this.http.post(`/api/syslog/settings/del_destination/${uuid}`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<SyslogSettingsGetResponse>> {
    return this.http.get(`/api/syslog/settings/get`, config);
  }

  async settingsGetDestination(uuid?: string, config?: RequestConfig): Promise<ApiResponse<SyslogSettingsGetDestinationResponse>> {
    return this.http.get(`/api/syslog/settings/get_destination/${uuid}`, config);
  }

  async settingsSet(data?: SyslogSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<SyslogSettingsSetResponse>> {
    return this.http.post(`/api/syslog/settings/set`, data, config);
  }

  async settingsSetDestination(uuid: string, data?: SyslogSettingsSetDestinationRequest, config?: RequestConfig): Promise<ApiResponse<SyslogSettingsSetDestinationResponse>> {
    return this.http.post(`/api/syslog/settings/set_destination/${uuid}`, data, config);
  }

  async settingsToggleDestination(uuid: string, enabled?: string, data?: SyslogSettingsToggleDestinationRequest, config?: RequestConfig): Promise<ApiResponse<SyslogSettingsToggleDestinationResponse>> {
    return this.http.post(`/api/syslog/settings/toggle_destination/${uuid}/${enabled}`, data, config);
  }

}
