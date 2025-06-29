import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Udpbroadcastrelay module

// Model field types

// Service types
export interface UdpbroadcastrelayServiceConfigResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UdpbroadcastrelayServiceGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UdpbroadcastrelayServiceReloadResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UdpbroadcastrelayServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UdpbroadcastrelayServiceSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UdpbroadcastrelayServiceSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UdpbroadcastrelayServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UdpbroadcastrelayServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UdpbroadcastrelayServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface UdpbroadcastrelaySettingsAddRelayRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UdpbroadcastrelaySettingsAddRelayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UdpbroadcastrelaySettingsDelRelayRequest {
  uuid: string;
}

export interface UdpbroadcastrelaySettingsDelRelayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UdpbroadcastrelaySettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UdpbroadcastrelaySettingsGetRelayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UdpbroadcastrelaySettingsSearchRelayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UdpbroadcastrelaySettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UdpbroadcastrelaySettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UdpbroadcastrelaySettingsSetRelayRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface UdpbroadcastrelaySettingsSetRelayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface UdpbroadcastrelaySettingsToggleRelayRequest {
  enabled?: boolean;
}

export interface UdpbroadcastrelaySettingsToggleRelayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface UdpbroadcastrelayUdpbroadcastrelay {
}

export class UdpbroadcastrelayApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/udpbroadcastrelay';
  }

  // Service methods
  async serviceConfig(config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelayServiceConfigResponse>> {
    return this.client.get(`${this.basePath}/service/config`, config);
  }

  async serviceGet(config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelayServiceGetResponse>> {
    return this.client.get(`${this.basePath}/service/get`, config);
  }

  async serviceReload(config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelayServiceReloadResponse>> {
    return this.client.get(`${this.basePath}/service/reload`, config);
  }

  async serviceRestart(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelayServiceRestartResponse>> {
    return this.client.get(`${this.basePath}/service/restart/${uuid}`, config);
  }

  async serviceSet(data?: UdpbroadcastrelayServiceSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelayServiceSetResponse>> {
    return this.client.post(`${this.basePath}/service/set`, data, config);
  }

  async serviceStart(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelayServiceStartResponse>> {
    return this.client.get(`${this.basePath}/service/start/${uuid}`, config);
  }

  async serviceStatus(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelayServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status/${uuid}`, config);
  }

  async serviceStop(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelayServiceStopResponse>> {
    return this.client.get(`${this.basePath}/service/stop/${uuid}`, config);
  }


  // Settings methods
  async settingsAddRelay(data?: UdpbroadcastrelaySettingsAddRelayRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelaySettingsAddRelayResponse>> {
    return this.client.post(`${this.basePath}/settings/add_relay`, data, config);
  }

  async settingsDelRelay(uuid: string, data?: UdpbroadcastrelaySettingsDelRelayRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelaySettingsDelRelayResponse>> {
    return this.client.post(`${this.basePath}/settings/del_relay/${uuid}`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelaySettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetRelay(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelaySettingsGetRelayResponse>> {
    return this.client.get(`${this.basePath}/settings/get_relay/${uuid}`, config);
  }

  async settingsSearchRelay(config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelaySettingsSearchRelayResponse>> {
    return this.client.get(`${this.basePath}/settings/search_relay`, config);
  }

  async settingsSet(data?: UdpbroadcastrelaySettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelaySettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetRelay(uuid: string, data?: UdpbroadcastrelaySettingsSetRelayRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelaySettingsSetRelayResponse>> {
    return this.client.post(`${this.basePath}/settings/set_relay/${uuid}`, data, config);
  }

  async settingsToggleRelay(uuid: string, data?: UdpbroadcastrelaySettingsToggleRelayRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<UdpbroadcastrelaySettingsToggleRelayResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_relay/${uuid}`, data, config);
  }

}
