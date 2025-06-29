import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/zabbixagent';
  }

  // Service methods
  async serviceReconfigure(data?: ZabbixagentServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: ZabbixagentServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: ZabbixagentServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: ZabbixagentServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddAlias(data?: ZabbixagentSettingsAddAliasRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentSettingsAddAliasResponse>> {
    return this.client.post(`${this.basePath}/settings/add_alias`, data, config);
  }

  async settingsAddUserparameter(data?: ZabbixagentSettingsAddUserparameterRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentSettingsAddUserparameterResponse>> {
    return this.client.post(`${this.basePath}/settings/add_userparameter`, data, config);
  }

  async settingsDelAlias(uuid: string, data?: ZabbixagentSettingsDelAliasRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentSettingsDelAliasResponse>> {
    return this.client.post(`${this.basePath}/settings/del_alias/${uuid}`, data, config);
  }

  async settingsDelUserparameter(uuid: string, data?: ZabbixagentSettingsDelUserparameterRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentSettingsDelUserparameterResponse>> {
    return this.client.post(`${this.basePath}/settings/del_userparameter/${uuid}`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetAlias(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentSettingsGetAliasResponse>> {
    return this.client.get(`${this.basePath}/settings/get_alias/${uuid}`, config);
  }

  async settingsGetUserparameter(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentSettingsGetUserparameterResponse>> {
    return this.client.get(`${this.basePath}/settings/get_userparameter/${uuid}`, config);
  }

  async settingsSet(data?: ZabbixagentSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetAlias(uuid: string, data?: ZabbixagentSettingsSetAliasRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentSettingsSetAliasResponse>> {
    return this.client.post(`${this.basePath}/settings/set_alias/${uuid}`, data, config);
  }

  async settingsSetUserparameter(uuid: string, data?: ZabbixagentSettingsSetUserparameterRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentSettingsSetUserparameterResponse>> {
    return this.client.post(`${this.basePath}/settings/set_userparameter/${uuid}`, data, config);
  }

  async settingsToggleAlias(uuid: string, data?: ZabbixagentSettingsToggleAliasRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentSettingsToggleAliasResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_alias/${uuid}`, data, config);
  }

  async settingsToggleUserparameter(uuid: string, data?: ZabbixagentSettingsToggleUserparameterRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<ZabbixagentSettingsToggleUserparameterResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_userparameter/${uuid}`, data, config);
  }

}
