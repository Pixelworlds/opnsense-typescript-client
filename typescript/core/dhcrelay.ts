import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Dhcrelay module

// Model field types

// Service types
export interface DhcrelayServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DhcrelayServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface DhcrelaySettingsAddDestRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DhcrelaySettingsAddDestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DhcrelaySettingsAddRelayRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DhcrelaySettingsAddRelayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DhcrelaySettingsDelDestRequest {
  uuid: string;
}

export interface DhcrelaySettingsDelDestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DhcrelaySettingsDelRelayRequest {
  uuid: string;
}

export interface DhcrelaySettingsDelRelayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DhcrelaySettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DhcrelaySettingsGetDestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DhcrelaySettingsGetRelayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DhcrelaySettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DhcrelaySettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DhcrelaySettingsSetDestRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DhcrelaySettingsSetDestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DhcrelaySettingsSetRelayRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DhcrelaySettingsSetRelayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DhcrelaySettingsToggleRelayRequest {
  enabled?: boolean;
}

export interface DhcrelaySettingsToggleRelayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface DhcrelayRelays {
}

export interface DhcrelayDestinations {
}

export class DhcrelayApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/dhcrelay';
  }

  // Service methods
  async serviceReconfigure(data?: DhcrelayServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DhcrelayServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }


  // Settings methods
  async settingsAddDest(data?: DhcrelaySettingsAddDestRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DhcrelaySettingsAddDestResponse>> {
    return this.client.post(`${this.basePath}/settings/add_dest`, data, config);
  }

  async settingsAddRelay(data?: DhcrelaySettingsAddRelayRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DhcrelaySettingsAddRelayResponse>> {
    return this.client.post(`${this.basePath}/settings/add_relay`, data, config);
  }

  async settingsDelDest(uuid: string, data?: DhcrelaySettingsDelDestRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DhcrelaySettingsDelDestResponse>> {
    return this.client.post(`${this.basePath}/settings/del_dest/${uuid}`, data, config);
  }

  async settingsDelRelay(uuid: string, data?: DhcrelaySettingsDelRelayRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DhcrelaySettingsDelRelayResponse>> {
    return this.client.post(`${this.basePath}/settings/del_relay/${uuid}`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DhcrelaySettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetDest(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DhcrelaySettingsGetDestResponse>> {
    return this.client.get(`${this.basePath}/settings/get_dest/${uuid}`, config);
  }

  async settingsGetRelay(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DhcrelaySettingsGetRelayResponse>> {
    return this.client.get(`${this.basePath}/settings/get_relay/${uuid}`, config);
  }

  async settingsSet(data?: DhcrelaySettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DhcrelaySettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetDest(uuid: string, data?: DhcrelaySettingsSetDestRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DhcrelaySettingsSetDestResponse>> {
    return this.client.post(`${this.basePath}/settings/set_dest/${uuid}`, data, config);
  }

  async settingsSetRelay(uuid: string, data?: DhcrelaySettingsSetRelayRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DhcrelaySettingsSetRelayResponse>> {
    return this.client.post(`${this.basePath}/settings/set_relay/${uuid}`, data, config);
  }

  async settingsToggleRelay(uuid: string, enabled?: string, data?: DhcrelaySettingsToggleRelayRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DhcrelaySettingsToggleRelayResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_relay/${uuid}/${enabled}`, data, config);
  }

}
