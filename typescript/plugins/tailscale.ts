import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Tailscale module

// Model field types

// Authentication types
export interface TailscaleAuthenticationGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TailscaleAuthenticationSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TailscaleAuthenticationSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface TailscaleServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TailscaleServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TailscaleServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TailscaleServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TailscaleServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TailscaleServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TailscaleServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TailscaleServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TailscaleServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface TailscaleSettingsAddSubnetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TailscaleSettingsAddSubnetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TailscaleSettingsDelSubnetRequest {
  uuid: string;
}

export interface TailscaleSettingsDelSubnetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TailscaleSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TailscaleSettingsGetSubnetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TailscaleSettingsReloadResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TailscaleSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TailscaleSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TailscaleSettingsSetSubnetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TailscaleSettingsSetSubnetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Status types
export interface TailscaleStatusGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TailscaleStatusIpResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TailscaleStatusNetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TailscaleStatusSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TailscaleStatusSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TailscaleStatusStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class TailscaleApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/tailscale';
  }

  // Authentication methods
  async authenticationGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleAuthenticationGetResponse>> {
    return this.client.get(`${this.basePath}/authentication/get`, config);
  }

  async authenticationSet(data?: TailscaleAuthenticationSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleAuthenticationSetResponse>> {
    return this.client.post(`${this.basePath}/authentication/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: TailscaleServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: TailscaleServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: TailscaleServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: TailscaleServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddSubnet(data?: TailscaleSettingsAddSubnetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleSettingsAddSubnetResponse>> {
    return this.client.post(`${this.basePath}/settings/add_subnet`, data, config);
  }

  async settingsDelSubnet(uuid: string, data?: TailscaleSettingsDelSubnetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleSettingsDelSubnetResponse>> {
    return this.client.post(`${this.basePath}/settings/del_subnet/${uuid}`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetSubnet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleSettingsGetSubnetResponse>> {
    return this.client.get(`${this.basePath}/settings/get_subnet/${uuid}`, config);
  }

  async settingsReload(config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleSettingsReloadResponse>> {
    return this.client.get(`${this.basePath}/settings/reload`, config);
  }

  async settingsSet(data?: TailscaleSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetSubnet(uuid: string, data?: TailscaleSettingsSetSubnetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleSettingsSetSubnetResponse>> {
    return this.client.post(`${this.basePath}/settings/set_subnet/${uuid}`, data, config);
  }


  // Status methods
  async statusGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleStatusGetResponse>> {
    return this.client.get(`${this.basePath}/status/get`, config);
  }

  async statusIp(config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleStatusIpResponse>> {
    return this.client.get(`${this.basePath}/status/ip`, config);
  }

  async statusNet(config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleStatusNetResponse>> {
    return this.client.get(`${this.basePath}/status/net`, config);
  }

  async statusSet(data?: TailscaleStatusSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleStatusSetResponse>> {
    return this.client.post(`${this.basePath}/status/set`, data, config);
  }

  async status(config?: AxiosRequestConfig): Promise<AxiosResponse<TailscaleStatusStatusResponse>> {
    return this.client.get(`${this.basePath}/status/status`, config);
  }

}
