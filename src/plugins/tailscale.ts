import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Authentication methods
  async authenticationGet(config?: RequestConfig): Promise<ApiResponse<TailscaleAuthenticationGetResponse>> {
    return this.http.get(`/api/tailscale/authentication/get`, config);
  }

  async authenticationSet(data?: TailscaleAuthenticationSetRequest, config?: RequestConfig): Promise<ApiResponse<TailscaleAuthenticationSetResponse>> {
    return this.http.post(`/api/tailscale/authentication/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: TailscaleServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<TailscaleServiceReconfigureResponse>> {
    return this.http.post(`/api/tailscale/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: TailscaleServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<TailscaleServiceRestartResponse>> {
    return this.http.post(`/api/tailscale/service/restart`, data, config);
  }

  async serviceStart(data?: TailscaleServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<TailscaleServiceStartResponse>> {
    return this.http.post(`/api/tailscale/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<TailscaleServiceStatusResponse>> {
    return this.http.get(`/api/tailscale/service/status`, config);
  }

  async serviceStop(data?: TailscaleServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<TailscaleServiceStopResponse>> {
    return this.http.post(`/api/tailscale/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddSubnet(data?: TailscaleSettingsAddSubnetRequest, config?: RequestConfig): Promise<ApiResponse<TailscaleSettingsAddSubnetResponse>> {
    return this.http.post(`/api/tailscale/settings/add_subnet`, data, config);
  }

  async settingsDelSubnet(uuid: string, data?: TailscaleSettingsDelSubnetRequest, config?: RequestConfig): Promise<ApiResponse<TailscaleSettingsDelSubnetResponse>> {
    return this.http.post(`/api/tailscale/settings/del_subnet/${uuid}`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<TailscaleSettingsGetResponse>> {
    return this.http.get(`/api/tailscale/settings/get`, config);
  }

  async settingsGetSubnet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<TailscaleSettingsGetSubnetResponse>> {
    return this.http.get(`/api/tailscale/settings/get_subnet/${uuid}`, config);
  }

  async settingsReload(config?: RequestConfig): Promise<ApiResponse<TailscaleSettingsReloadResponse>> {
    return this.http.get(`/api/tailscale/settings/reload`, config);
  }

  async settingsSet(data?: TailscaleSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<TailscaleSettingsSetResponse>> {
    return this.http.post(`/api/tailscale/settings/set`, data, config);
  }

  async settingsSetSubnet(uuid: string, data?: TailscaleSettingsSetSubnetRequest, config?: RequestConfig): Promise<ApiResponse<TailscaleSettingsSetSubnetResponse>> {
    return this.http.post(`/api/tailscale/settings/set_subnet/${uuid}`, data, config);
  }


  // Status methods
  async statusGet(config?: RequestConfig): Promise<ApiResponse<TailscaleStatusGetResponse>> {
    return this.http.get(`/api/tailscale/status/get`, config);
  }

  async statusIp(config?: RequestConfig): Promise<ApiResponse<TailscaleStatusIpResponse>> {
    return this.http.get(`/api/tailscale/status/ip`, config);
  }

  async statusNet(config?: RequestConfig): Promise<ApiResponse<TailscaleStatusNetResponse>> {
    return this.http.get(`/api/tailscale/status/net`, config);
  }

  async statusSet(data?: TailscaleStatusSetRequest, config?: RequestConfig): Promise<ApiResponse<TailscaleStatusSetResponse>> {
    return this.http.post(`/api/tailscale/status/set`, data, config);
  }

  async status(config?: RequestConfig): Promise<ApiResponse<TailscaleStatusStatusResponse>> {
    return this.http.get(`/api/tailscale/status/status`, config);
  }

}
