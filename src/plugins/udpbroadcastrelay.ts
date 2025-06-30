import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceConfig(config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelayServiceConfigResponse>> {
    return this.http.get(`/api/udpbroadcastrelay/service/config`, config);
  }

  async serviceGet(config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelayServiceGetResponse>> {
    return this.http.get(`/api/udpbroadcastrelay/service/get`, config);
  }

  async serviceReload(config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelayServiceReloadResponse>> {
    return this.http.get(`/api/udpbroadcastrelay/service/reload`, config);
  }

  async serviceRestart(uuid: string, config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelayServiceRestartResponse>> {
    return this.http.get(`/api/udpbroadcastrelay/service/restart/${uuid}`, config);
  }

  async serviceSet(data?: UdpbroadcastrelayServiceSetRequest, config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelayServiceSetResponse>> {
    return this.http.post(`/api/udpbroadcastrelay/service/set`, data, config);
  }

  async serviceStart(uuid: string, config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelayServiceStartResponse>> {
    return this.http.get(`/api/udpbroadcastrelay/service/start/${uuid}`, config);
  }

  async serviceStatus(uuid: string, config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelayServiceStatusResponse>> {
    return this.http.get(`/api/udpbroadcastrelay/service/status/${uuid}`, config);
  }

  async serviceStop(uuid: string, config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelayServiceStopResponse>> {
    return this.http.get(`/api/udpbroadcastrelay/service/stop/${uuid}`, config);
  }


  // Settings methods
  async settingsAddRelay(data?: UdpbroadcastrelaySettingsAddRelayRequest, config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelaySettingsAddRelayResponse>> {
    return this.http.post(`/api/udpbroadcastrelay/settings/add_relay`, data, config);
  }

  async settingsDelRelay(uuid: string, data?: UdpbroadcastrelaySettingsDelRelayRequest, config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelaySettingsDelRelayResponse>> {
    return this.http.post(`/api/udpbroadcastrelay/settings/del_relay/${uuid}`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelaySettingsGetResponse>> {
    return this.http.get(`/api/udpbroadcastrelay/settings/get`, config);
  }

  async settingsGetRelay(uuid?: string, config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelaySettingsGetRelayResponse>> {
    return this.http.get(`/api/udpbroadcastrelay/settings/get_relay/${uuid}`, config);
  }

  async settingsSearchRelay(config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelaySettingsSearchRelayResponse>> {
    return this.http.get(`/api/udpbroadcastrelay/settings/search_relay`, config);
  }

  async settingsSet(data?: UdpbroadcastrelaySettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelaySettingsSetResponse>> {
    return this.http.post(`/api/udpbroadcastrelay/settings/set`, data, config);
  }

  async settingsSetRelay(uuid: string, data?: UdpbroadcastrelaySettingsSetRelayRequest, config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelaySettingsSetRelayResponse>> {
    return this.http.post(`/api/udpbroadcastrelay/settings/set_relay/${uuid}`, data, config);
  }

  async settingsToggleRelay(uuid: string, data?: UdpbroadcastrelaySettingsToggleRelayRequest, config?: RequestConfig): Promise<ApiResponse<UdpbroadcastrelaySettingsToggleRelayResponse>> {
    return this.http.post(`/api/udpbroadcastrelay/settings/toggle_relay/${uuid}`, data, config);
  }

}
