import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Routing module

// Model field types

// Settings types
export interface RoutingSettingsAddGatewayRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RoutingSettingsAddGatewayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RoutingSettingsDelGatewayRequest {
  uuid: string;
}

export interface RoutingSettingsDelGatewayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RoutingSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RoutingSettingsGetGatewayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RoutingSettingsReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RoutingSettingsReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RoutingSettingsSearchGatewayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RoutingSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RoutingSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RoutingSettingsSetGatewayRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RoutingSettingsSetGatewayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RoutingSettingsToggleGatewayRequest {
  enabled?: boolean;
}

export interface RoutingSettingsToggleGatewayResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class RoutingApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Settings methods
  async settingsAddGateway(data?: RoutingSettingsAddGatewayRequest, config?: RequestConfig): Promise<ApiResponse<RoutingSettingsAddGatewayResponse>> {
    return this.http.post(`/api/routing/settings/add_gateway`, data, config);
  }

  async settingsDelGateway(uuid: string, data?: RoutingSettingsDelGatewayRequest, config?: RequestConfig): Promise<ApiResponse<RoutingSettingsDelGatewayResponse>> {
    return this.http.post(`/api/routing/settings/del_gateway/${uuid}`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<RoutingSettingsGetResponse>> {
    return this.http.get(`/api/routing/settings/get`, config);
  }

  async settingsGetGateway(uuid?: string, config?: RequestConfig): Promise<ApiResponse<RoutingSettingsGetGatewayResponse>> {
    return this.http.get(`/api/routing/settings/get_gateway/${uuid}`, config);
  }

  async settingsReconfigure(data?: RoutingSettingsReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<RoutingSettingsReconfigureResponse>> {
    return this.http.post(`/api/routing/settings/reconfigure`, data, config);
  }

  async settingsSearchGateway(config?: RequestConfig): Promise<ApiResponse<RoutingSettingsSearchGatewayResponse>> {
    return this.http.get(`/api/routing/settings/search_gateway`, config);
  }

  async settingsSet(data?: RoutingSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<RoutingSettingsSetResponse>> {
    return this.http.post(`/api/routing/settings/set`, data, config);
  }

  async settingsSetGateway(uuid: string, data?: RoutingSettingsSetGatewayRequest, config?: RequestConfig): Promise<ApiResponse<RoutingSettingsSetGatewayResponse>> {
    return this.http.post(`/api/routing/settings/set_gateway/${uuid}`, data, config);
  }

  async settingsToggleGateway(uuid: string, enabled?: string, data?: RoutingSettingsToggleGatewayRequest, config?: RequestConfig): Promise<ApiResponse<RoutingSettingsToggleGatewayResponse>> {
    return this.http.post(`/api/routing/settings/toggle_gateway/${uuid}/${enabled}`, data, config);
  }

}
