import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceReconfigure(data?: DhcrelayServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<DhcrelayServiceReconfigureResponse>> {
    return this.http.post(`/api/dhcrelay/service/reconfigure`, data, config);
  }


  // Settings methods
  async settingsAddDest(data?: DhcrelaySettingsAddDestRequest, config?: RequestConfig): Promise<ApiResponse<DhcrelaySettingsAddDestResponse>> {
    return this.http.post(`/api/dhcrelay/settings/add_dest`, data, config);
  }

  async settingsAddRelay(data?: DhcrelaySettingsAddRelayRequest, config?: RequestConfig): Promise<ApiResponse<DhcrelaySettingsAddRelayResponse>> {
    return this.http.post(`/api/dhcrelay/settings/add_relay`, data, config);
  }

  async settingsDelDest(uuid: string, data?: DhcrelaySettingsDelDestRequest, config?: RequestConfig): Promise<ApiResponse<DhcrelaySettingsDelDestResponse>> {
    return this.http.post(`/api/dhcrelay/settings/del_dest/${uuid}`, data, config);
  }

  async settingsDelRelay(uuid: string, data?: DhcrelaySettingsDelRelayRequest, config?: RequestConfig): Promise<ApiResponse<DhcrelaySettingsDelRelayResponse>> {
    return this.http.post(`/api/dhcrelay/settings/del_relay/${uuid}`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<DhcrelaySettingsGetResponse>> {
    return this.http.get(`/api/dhcrelay/settings/get`, config);
  }

  async settingsGetDest(uuid?: string, config?: RequestConfig): Promise<ApiResponse<DhcrelaySettingsGetDestResponse>> {
    return this.http.get(`/api/dhcrelay/settings/get_dest/${uuid}`, config);
  }

  async settingsGetRelay(uuid?: string, config?: RequestConfig): Promise<ApiResponse<DhcrelaySettingsGetRelayResponse>> {
    return this.http.get(`/api/dhcrelay/settings/get_relay/${uuid}`, config);
  }

  async settingsSet(data?: DhcrelaySettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<DhcrelaySettingsSetResponse>> {
    return this.http.post(`/api/dhcrelay/settings/set`, data, config);
  }

  async settingsSetDest(uuid: string, data?: DhcrelaySettingsSetDestRequest, config?: RequestConfig): Promise<ApiResponse<DhcrelaySettingsSetDestResponse>> {
    return this.http.post(`/api/dhcrelay/settings/set_dest/${uuid}`, data, config);
  }

  async settingsSetRelay(uuid: string, data?: DhcrelaySettingsSetRelayRequest, config?: RequestConfig): Promise<ApiResponse<DhcrelaySettingsSetRelayResponse>> {
    return this.http.post(`/api/dhcrelay/settings/set_relay/${uuid}`, data, config);
  }

  async settingsToggleRelay(uuid: string, enabled?: string, data?: DhcrelaySettingsToggleRelayRequest, config?: RequestConfig): Promise<ApiResponse<DhcrelaySettingsToggleRelayResponse>> {
    return this.http.post(`/api/dhcrelay/settings/toggle_relay/${uuid}/${enabled}`, data, config);
  }

}
