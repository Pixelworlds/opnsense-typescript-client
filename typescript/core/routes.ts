import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Routes module

// Model field types

// Gateway types
export interface RoutesGatewayStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Routes types
export interface RoutesRoutesAddrouteRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RoutesRoutesAddrouteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RoutesRoutesDelrouteRequest {
  uuid: string;
}

export interface RoutesRoutesDelrouteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RoutesRoutesGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RoutesRoutesGetrouteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RoutesRoutesReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RoutesRoutesReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RoutesRoutesSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RoutesRoutesSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RoutesRoutesSetrouteRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RoutesRoutesSetrouteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RoutesRoutesTogglerouteRequest {
  enabled?: boolean;
}

export interface RoutesRoutesTogglerouteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface RoutesRoute {
}

export class RoutesApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/routes';
  }

  // Gateway methods
  async gatewayStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<RoutesGatewayStatusResponse>> {
    return this.client.get(`${this.basePath}/gateway/status`, config);
  }


  // Routes methods
  async routesAddroute(data?: RoutesRoutesAddrouteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RoutesRoutesAddrouteResponse>> {
    return this.client.post(`${this.basePath}/routes/addroute`, data, config);
  }

  async routesDelroute(uuid: string, data?: RoutesRoutesDelrouteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RoutesRoutesDelrouteResponse>> {
    return this.client.post(`${this.basePath}/routes/delroute/${uuid}`, data, config);
  }

  async routesGet(config?: AxiosRequestConfig): Promise<AxiosResponse<RoutesRoutesGetResponse>> {
    return this.client.get(`${this.basePath}/routes/get`, config);
  }

  async routesGetroute(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<RoutesRoutesGetrouteResponse>> {
    return this.client.get(`${this.basePath}/routes/getroute/${uuid}`, config);
  }

  async routesReconfigure(data?: RoutesRoutesReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RoutesRoutesReconfigureResponse>> {
    return this.client.post(`${this.basePath}/routes/reconfigure`, data, config);
  }

  async routesSet(data?: RoutesRoutesSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RoutesRoutesSetResponse>> {
    return this.client.post(`${this.basePath}/routes/set`, data, config);
  }

  async routesSetroute(uuid: string, data?: RoutesRoutesSetrouteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RoutesRoutesSetrouteResponse>> {
    return this.client.post(`${this.basePath}/routes/setroute/${uuid}`, data, config);
  }

  async routesToggleroute(uuid: string, disabled?: string, data?: RoutesRoutesTogglerouteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RoutesRoutesTogglerouteResponse>> {
    return this.client.post(`${this.basePath}/routes/toggleroute/${uuid}/${disabled}`, data, config);
  }

}
