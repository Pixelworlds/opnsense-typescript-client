import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Zabbixagent module

// Model field types

// Service types
export interface ZabbixagentServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixagentServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixagentServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixagentServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixagentServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixagentServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixagentServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixagentServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixagentServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface ZabbixagentSettingsAddAliasRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixagentSettingsAddAliasResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixagentSettingsAddUserparameterRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixagentSettingsAddUserparameterResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixagentSettingsDelAliasRequest {
  uuid: string;
}

export interface ZabbixagentSettingsDelAliasResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixagentSettingsDelUserparameterRequest {
  uuid: string;
}

export interface ZabbixagentSettingsDelUserparameterResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixagentSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixagentSettingsGetAliasResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixagentSettingsGetUserparameterResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixagentSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixagentSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixagentSettingsSetAliasRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixagentSettingsSetAliasResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixagentSettingsSetUserparameterRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ZabbixagentSettingsSetUserparameterResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixagentSettingsToggleAliasRequest {
  enabled?: boolean;
}

export interface ZabbixagentSettingsToggleAliasResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ZabbixagentSettingsToggleUserparameterRequest {
  enabled?: boolean;
}

export interface ZabbixagentSettingsToggleUserparameterResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface ZabbixagentUserparameter {
}

export interface ZabbixagentAlias {
}

export class ZabbixagentApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceReconfigure(data?: ZabbixagentServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixagentServiceReconfigureResponse>> {
    return this.http.post(`/api/zabbixagent/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: ZabbixagentServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixagentServiceRestartResponse>> {
    return this.http.post(`/api/zabbixagent/service/restart`, data, config);
  }

  async serviceStart(data?: ZabbixagentServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixagentServiceStartResponse>> {
    return this.http.post(`/api/zabbixagent/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<ZabbixagentServiceStatusResponse>> {
    return this.http.get(`/api/zabbixagent/service/status`, config);
  }

  async serviceStop(data?: ZabbixagentServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixagentServiceStopResponse>> {
    return this.http.post(`/api/zabbixagent/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddAlias(data?: ZabbixagentSettingsAddAliasRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixagentSettingsAddAliasResponse>> {
    return this.http.post(`/api/zabbixagent/settings/add_alias`, data, config);
  }

  async settingsAddUserparameter(data?: ZabbixagentSettingsAddUserparameterRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixagentSettingsAddUserparameterResponse>> {
    return this.http.post(`/api/zabbixagent/settings/add_userparameter`, data, config);
  }

  async settingsDelAlias(uuid: string, data?: ZabbixagentSettingsDelAliasRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixagentSettingsDelAliasResponse>> {
    return this.http.post(`/api/zabbixagent/settings/del_alias/${uuid}`, data, config);
  }

  async settingsDelUserparameter(uuid: string, data?: ZabbixagentSettingsDelUserparameterRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixagentSettingsDelUserparameterResponse>> {
    return this.http.post(`/api/zabbixagent/settings/del_userparameter/${uuid}`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<ZabbixagentSettingsGetResponse>> {
    return this.http.get(`/api/zabbixagent/settings/get`, config);
  }

  async settingsGetAlias(uuid?: string, config?: RequestConfig): Promise<ApiResponse<ZabbixagentSettingsGetAliasResponse>> {
    return this.http.get(`/api/zabbixagent/settings/get_alias/${uuid}`, config);
  }

  async settingsGetUserparameter(uuid?: string, config?: RequestConfig): Promise<ApiResponse<ZabbixagentSettingsGetUserparameterResponse>> {
    return this.http.get(`/api/zabbixagent/settings/get_userparameter/${uuid}`, config);
  }

  async settingsSet(data?: ZabbixagentSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixagentSettingsSetResponse>> {
    return this.http.post(`/api/zabbixagent/settings/set`, data, config);
  }

  async settingsSetAlias(uuid: string, data?: ZabbixagentSettingsSetAliasRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixagentSettingsSetAliasResponse>> {
    return this.http.post(`/api/zabbixagent/settings/set_alias/${uuid}`, data, config);
  }

  async settingsSetUserparameter(uuid: string, data?: ZabbixagentSettingsSetUserparameterRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixagentSettingsSetUserparameterResponse>> {
    return this.http.post(`/api/zabbixagent/settings/set_userparameter/${uuid}`, data, config);
  }

  async settingsToggleAlias(uuid: string, data?: ZabbixagentSettingsToggleAliasRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixagentSettingsToggleAliasResponse>> {
    return this.http.post(`/api/zabbixagent/settings/toggle_alias/${uuid}`, data, config);
  }

  async settingsToggleUserparameter(uuid: string, data?: ZabbixagentSettingsToggleUserparameterRequest, config?: RequestConfig): Promise<ApiResponse<ZabbixagentSettingsToggleUserparameterResponse>> {
    return this.http.post(`/api/zabbixagent/settings/toggle_userparameter/${uuid}`, data, config);
  }

}
