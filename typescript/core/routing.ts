import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/routing';
  }

  // Settings methods
  async settingsAddGateway(data?: RoutingSettingsAddGatewayRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RoutingSettingsAddGatewayResponse>> {
    return this.client.post(`${this.basePath}/settings/add_gateway`, data, config);
  }

  async settingsDelGateway(uuid: string, data?: RoutingSettingsDelGatewayRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RoutingSettingsDelGatewayResponse>> {
    return this.client.post(`${this.basePath}/settings/del_gateway/${uuid}`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<RoutingSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetGateway(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<RoutingSettingsGetGatewayResponse>> {
    return this.client.get(`${this.basePath}/settings/get_gateway/${uuid}`, config);
  }

  async settingsReconfigure(data?: RoutingSettingsReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RoutingSettingsReconfigureResponse>> {
    return this.client.post(`${this.basePath}/settings/reconfigure`, data, config);
  }

  async settingsSearchGateway(config?: AxiosRequestConfig): Promise<AxiosResponse<RoutingSettingsSearchGatewayResponse>> {
    return this.client.get(`${this.basePath}/settings/search_gateway`, config);
  }

  async settingsSet(data?: RoutingSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RoutingSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetGateway(uuid: string, data?: RoutingSettingsSetGatewayRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RoutingSettingsSetGatewayResponse>> {
    return this.client.post(`${this.basePath}/settings/set_gateway/${uuid}`, data, config);
  }

  async settingsToggleGateway(uuid: string, enabled?: string, data?: RoutingSettingsToggleGatewayRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RoutingSettingsToggleGatewayResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_gateway/${uuid}/${enabled}`, data, config);
  }

}
