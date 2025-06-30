import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Relayd module

// Model field types

// Service types
export interface RelaydServiceConfigtestRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RelaydServiceConfigtestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RelaydServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RelaydServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RelaydServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RelaydServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface RelaydSettingsDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydSettingsDirtyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydSettingsSearchRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RelaydSettingsSearchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RelaydSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydSettingsToggleRequest {
  enabled?: boolean;
}

export interface RelaydSettingsToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Status types
export interface RelaydStatusSumResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RelaydStatusToggleRequest {
  enabled?: boolean;
}

export interface RelaydStatusToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface RelaydHost {
}

export interface RelaydTable {
}

export interface RelaydTablecheck {
}

export interface RelaydVirtualserver {
}

export interface RelaydProtocol {
}

export class RelaydApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceConfigtest(data?: RelaydServiceConfigtestRequest, config?: RequestConfig): Promise<ApiResponse<RelaydServiceConfigtestResponse>> {
    return this.http.post(`/api/relayd/service/configtest`, data, config);
  }

  async serviceReconfigure(data?: RelaydServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<RelaydServiceReconfigureResponse>> {
    return this.http.post(`/api/relayd/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: RelaydServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<RelaydServiceRestartResponse>> {
    return this.http.post(`/api/relayd/service/restart`, data, config);
  }

  async serviceStart(data?: RelaydServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<RelaydServiceStartResponse>> {
    return this.http.post(`/api/relayd/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<RelaydServiceStatusResponse>> {
    return this.http.get(`/api/relayd/service/status`, config);
  }

  async serviceStop(data?: RelaydServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<RelaydServiceStopResponse>> {
    return this.http.post(`/api/relayd/service/stop`, data, config);
  }


  // Settings methods
  async settingsDel(nodeType?: string, uuid?: string, config?: RequestConfig): Promise<ApiResponse<RelaydSettingsDelResponse>> {
    return this.http.get(`/api/relayd/settings/del/${nodeType}/${uuid}`, config);
  }

  async settingsDirty(config?: RequestConfig): Promise<ApiResponse<RelaydSettingsDirtyResponse>> {
    return this.http.get(`/api/relayd/settings/dirty`, config);
  }

  async settingsGet(nodeType?: string, uuid?: string, config?: RequestConfig): Promise<ApiResponse<RelaydSettingsGetResponse>> {
    return this.http.get(`/api/relayd/settings/get/${nodeType}/${uuid}`, config);
  }

  async settingsSearch(nodeType?: string, data?: RelaydSettingsSearchRequest, config?: RequestConfig): Promise<ApiResponse<RelaydSettingsSearchResponse>> {
    return this.http.post(`/api/relayd/settings/search/${nodeType}`, data, config);
  }

  async settingsSet(nodeType?: string, uuid?: string, data?: RelaydSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<RelaydSettingsSetResponse>> {
    return this.http.post(`/api/relayd/settings/set/${nodeType}/${uuid}`, data, config);
  }

  async settingsToggle(nodeType: string, uuid: string, enabled?: string, data?: RelaydSettingsToggleRequest, config?: RequestConfig): Promise<ApiResponse<RelaydSettingsToggleResponse>> {
    return this.http.post(`/api/relayd/settings/toggle/${nodeType}/${uuid}/${enabled}`, data, config);
  }


  // Status methods
  async statusSum(wait?: string, config?: RequestConfig): Promise<ApiResponse<RelaydStatusSumResponse>> {
    return this.http.get(`/api/relayd/status/sum/${wait}`, config);
  }

  async statusToggle(nodeType?: string, id?: string, action?: string, data?: RelaydStatusToggleRequest, config?: RequestConfig): Promise<ApiResponse<RelaydStatusToggleResponse>> {
    return this.http.post(`/api/relayd/status/toggle/${nodeType}/${id}/${action}`, data, config);
  }

}
