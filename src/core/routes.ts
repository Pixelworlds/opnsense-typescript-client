import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Gateway methods
  async gatewayStatus(config?: RequestConfig): Promise<ApiResponse<RoutesGatewayStatusResponse>> {
    return this.http.get(`/api/routes/gateway/status`, config);
  }


  // Routes methods
  async routesAddroute(data?: RoutesRoutesAddrouteRequest, config?: RequestConfig): Promise<ApiResponse<RoutesRoutesAddrouteResponse>> {
    return this.http.post(`/api/routes/routes/addroute`, data, config);
  }

  async routesDelroute(uuid: string, data?: RoutesRoutesDelrouteRequest, config?: RequestConfig): Promise<ApiResponse<RoutesRoutesDelrouteResponse>> {
    return this.http.post(`/api/routes/routes/delroute/${uuid}`, data, config);
  }

  async routesGet(config?: RequestConfig): Promise<ApiResponse<RoutesRoutesGetResponse>> {
    return this.http.get(`/api/routes/routes/get`, config);
  }

  async routesGetroute(uuid?: string, config?: RequestConfig): Promise<ApiResponse<RoutesRoutesGetrouteResponse>> {
    return this.http.get(`/api/routes/routes/getroute/${uuid}`, config);
  }

  async routesReconfigure(data?: RoutesRoutesReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<RoutesRoutesReconfigureResponse>> {
    return this.http.post(`/api/routes/routes/reconfigure`, data, config);
  }

  async routesSet(data?: RoutesRoutesSetRequest, config?: RequestConfig): Promise<ApiResponse<RoutesRoutesSetResponse>> {
    return this.http.post(`/api/routes/routes/set`, data, config);
  }

  async routesSetroute(uuid: string, data?: RoutesRoutesSetrouteRequest, config?: RequestConfig): Promise<ApiResponse<RoutesRoutesSetrouteResponse>> {
    return this.http.post(`/api/routes/routes/setroute/${uuid}`, data, config);
  }

  async routesToggleroute(uuid: string, disabled?: string, data?: RoutesRoutesTogglerouteRequest, config?: RequestConfig): Promise<ApiResponse<RoutesRoutesTogglerouteResponse>> {
    return this.http.post(`/api/routes/routes/toggleroute/${uuid}/${disabled}`, data, config);
  }

}
