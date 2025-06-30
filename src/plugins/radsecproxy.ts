import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Radsecproxy module

// Model field types

// Clients types
export interface RadsecproxyClientsAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyClientsAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyClientsDelItemRequest {
  uuid: string;
}

export interface RadsecproxyClientsDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyClientsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyClientsGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyClientsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyClientsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyClientsSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyClientsSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyClientsToggleItemRequest {
  enabled?: boolean;
}

export interface RadsecproxyClientsToggleItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// General types
export interface RadsecproxyGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Realms types
export interface RadsecproxyRealmsAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyRealmsAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyRealmsDelItemRequest {
  uuid: string;
}

export interface RadsecproxyRealmsDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyRealmsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyRealmsGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyRealmsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyRealmsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyRealmsSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyRealmsSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyRealmsToggleItemRequest {
  enabled?: boolean;
}

export interface RadsecproxyRealmsToggleItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Rewrites types
export interface RadsecproxyRewritesAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyRewritesAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyRewritesDelItemRequest {
  uuid: string;
}

export interface RadsecproxyRewritesDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyRewritesGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyRewritesGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyRewritesSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyRewritesSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyRewritesSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyRewritesSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyRewritesToggleItemRequest {
  enabled?: boolean;
}

export interface RadsecproxyRewritesToggleItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Servers types
export interface RadsecproxyServersAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyServersAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyServersDelItemRequest {
  uuid: string;
}

export interface RadsecproxyServersDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyServersGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyServersGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyServersSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyServersSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyServersSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyServersSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyServersToggleItemRequest {
  enabled?: boolean;
}

export interface RadsecproxyServersToggleItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface RadsecproxyServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Tls types
export interface RadsecproxyTlsAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyTlsAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyTlsDelItemRequest {
  uuid: string;
}

export interface RadsecproxyTlsDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyTlsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyTlsGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyTlsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyTlsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyTlsSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface RadsecproxyTlsSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface RadsecproxyTlsToggleItemRequest {
  enabled?: boolean;
}

export interface RadsecproxyTlsToggleItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface RadsecproxyClient {
}

export interface RadsecproxyServer {
}

export interface RadsecproxyTlsConfig {
}

export interface RadsecproxyRealm {
}

export interface RadsecproxyRewrite {
}

export class RadsecproxyApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Clients methods
  async clientsAddItem(data?: RadsecproxyClientsAddItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyClientsAddItemResponse>> {
    return this.http.post(`/api/radsecproxy/clients/add_item`, data, config);
  }

  async clientsDelItem(uuid: string, data?: RadsecproxyClientsDelItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyClientsDelItemResponse>> {
    return this.http.post(`/api/radsecproxy/clients/del_item/${uuid}`, data, config);
  }

  async clientsGet(config?: RequestConfig): Promise<ApiResponse<RadsecproxyClientsGetResponse>> {
    return this.http.get(`/api/radsecproxy/clients/get`, config);
  }

  async clientsGetItem(uuid?: string, config?: RequestConfig): Promise<ApiResponse<RadsecproxyClientsGetItemResponse>> {
    return this.http.get(`/api/radsecproxy/clients/get_item/${uuid}`, config);
  }

  async clientsSet(data?: RadsecproxyClientsSetRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyClientsSetResponse>> {
    return this.http.post(`/api/radsecproxy/clients/set`, data, config);
  }

  async clientsSetItem(uuid: string, data?: RadsecproxyClientsSetItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyClientsSetItemResponse>> {
    return this.http.post(`/api/radsecproxy/clients/set_item/${uuid}`, data, config);
  }

  async clientsToggleItem(uuid: string, enabled?: string, data?: RadsecproxyClientsToggleItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyClientsToggleItemResponse>> {
    return this.http.post(`/api/radsecproxy/clients/toggle_item/${uuid}/${enabled}`, data, config);
  }


  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<RadsecproxyGeneralGetResponse>> {
    return this.http.get(`/api/radsecproxy/general/get`, config);
  }

  async generalSet(data?: RadsecproxyGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyGeneralSetResponse>> {
    return this.http.post(`/api/radsecproxy/general/set`, data, config);
  }


  // Realms methods
  async realmsAddItem(data?: RadsecproxyRealmsAddItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyRealmsAddItemResponse>> {
    return this.http.post(`/api/radsecproxy/realms/add_item`, data, config);
  }

  async realmsDelItem(uuid: string, data?: RadsecproxyRealmsDelItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyRealmsDelItemResponse>> {
    return this.http.post(`/api/radsecproxy/realms/del_item/${uuid}`, data, config);
  }

  async realmsGet(config?: RequestConfig): Promise<ApiResponse<RadsecproxyRealmsGetResponse>> {
    return this.http.get(`/api/radsecproxy/realms/get`, config);
  }

  async realmsGetItem(uuid?: string, config?: RequestConfig): Promise<ApiResponse<RadsecproxyRealmsGetItemResponse>> {
    return this.http.get(`/api/radsecproxy/realms/get_item/${uuid}`, config);
  }

  async realmsSet(data?: RadsecproxyRealmsSetRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyRealmsSetResponse>> {
    return this.http.post(`/api/radsecproxy/realms/set`, data, config);
  }

  async realmsSetItem(uuid: string, data?: RadsecproxyRealmsSetItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyRealmsSetItemResponse>> {
    return this.http.post(`/api/radsecproxy/realms/set_item/${uuid}`, data, config);
  }

  async realmsToggleItem(uuid: string, enabled?: string, data?: RadsecproxyRealmsToggleItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyRealmsToggleItemResponse>> {
    return this.http.post(`/api/radsecproxy/realms/toggle_item/${uuid}/${enabled}`, data, config);
  }


  // Rewrites methods
  async rewritesAddItem(data?: RadsecproxyRewritesAddItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyRewritesAddItemResponse>> {
    return this.http.post(`/api/radsecproxy/rewrites/add_item`, data, config);
  }

  async rewritesDelItem(uuid: string, data?: RadsecproxyRewritesDelItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyRewritesDelItemResponse>> {
    return this.http.post(`/api/radsecproxy/rewrites/del_item/${uuid}`, data, config);
  }

  async rewritesGet(config?: RequestConfig): Promise<ApiResponse<RadsecproxyRewritesGetResponse>> {
    return this.http.get(`/api/radsecproxy/rewrites/get`, config);
  }

  async rewritesGetItem(uuid?: string, config?: RequestConfig): Promise<ApiResponse<RadsecproxyRewritesGetItemResponse>> {
    return this.http.get(`/api/radsecproxy/rewrites/get_item/${uuid}`, config);
  }

  async rewritesSet(data?: RadsecproxyRewritesSetRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyRewritesSetResponse>> {
    return this.http.post(`/api/radsecproxy/rewrites/set`, data, config);
  }

  async rewritesSetItem(uuid: string, data?: RadsecproxyRewritesSetItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyRewritesSetItemResponse>> {
    return this.http.post(`/api/radsecproxy/rewrites/set_item/${uuid}`, data, config);
  }

  async rewritesToggleItem(uuid: string, enabled?: string, data?: RadsecproxyRewritesToggleItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyRewritesToggleItemResponse>> {
    return this.http.post(`/api/radsecproxy/rewrites/toggle_item/${uuid}/${enabled}`, data, config);
  }


  // Servers methods
  async serversAddItem(data?: RadsecproxyServersAddItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyServersAddItemResponse>> {
    return this.http.post(`/api/radsecproxy/servers/add_item`, data, config);
  }

  async serversDelItem(uuid: string, data?: RadsecproxyServersDelItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyServersDelItemResponse>> {
    return this.http.post(`/api/radsecproxy/servers/del_item/${uuid}`, data, config);
  }

  async serversGet(config?: RequestConfig): Promise<ApiResponse<RadsecproxyServersGetResponse>> {
    return this.http.get(`/api/radsecproxy/servers/get`, config);
  }

  async serversGetItem(uuid?: string, config?: RequestConfig): Promise<ApiResponse<RadsecproxyServersGetItemResponse>> {
    return this.http.get(`/api/radsecproxy/servers/get_item/${uuid}`, config);
  }

  async serversSet(data?: RadsecproxyServersSetRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyServersSetResponse>> {
    return this.http.post(`/api/radsecproxy/servers/set`, data, config);
  }

  async serversSetItem(uuid: string, data?: RadsecproxyServersSetItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyServersSetItemResponse>> {
    return this.http.post(`/api/radsecproxy/servers/set_item/${uuid}`, data, config);
  }

  async serversToggleItem(uuid: string, enabled?: string, data?: RadsecproxyServersToggleItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyServersToggleItemResponse>> {
    return this.http.post(`/api/radsecproxy/servers/toggle_item/${uuid}/${enabled}`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: RadsecproxyServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyServiceReconfigureResponse>> {
    return this.http.post(`/api/radsecproxy/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: RadsecproxyServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyServiceRestartResponse>> {
    return this.http.post(`/api/radsecproxy/service/restart`, data, config);
  }

  async serviceStart(data?: RadsecproxyServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyServiceStartResponse>> {
    return this.http.post(`/api/radsecproxy/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<RadsecproxyServiceStatusResponse>> {
    return this.http.get(`/api/radsecproxy/service/status`, config);
  }

  async serviceStop(data?: RadsecproxyServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyServiceStopResponse>> {
    return this.http.post(`/api/radsecproxy/service/stop`, data, config);
  }


  // Tls methods
  async tlsAddItem(data?: RadsecproxyTlsAddItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyTlsAddItemResponse>> {
    return this.http.post(`/api/radsecproxy/tls/add_item`, data, config);
  }

  async tlsDelItem(uuid: string, data?: RadsecproxyTlsDelItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyTlsDelItemResponse>> {
    return this.http.post(`/api/radsecproxy/tls/del_item/${uuid}`, data, config);
  }

  async tlsGet(config?: RequestConfig): Promise<ApiResponse<RadsecproxyTlsGetResponse>> {
    return this.http.get(`/api/radsecproxy/tls/get`, config);
  }

  async tlsGetItem(uuid?: string, config?: RequestConfig): Promise<ApiResponse<RadsecproxyTlsGetItemResponse>> {
    return this.http.get(`/api/radsecproxy/tls/get_item/${uuid}`, config);
  }

  async tlsSet(data?: RadsecproxyTlsSetRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyTlsSetResponse>> {
    return this.http.post(`/api/radsecproxy/tls/set`, data, config);
  }

  async tlsSetItem(uuid: string, data?: RadsecproxyTlsSetItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyTlsSetItemResponse>> {
    return this.http.post(`/api/radsecproxy/tls/set_item/${uuid}`, data, config);
  }

  async tlsToggleItem(uuid: string, enabled?: string, data?: RadsecproxyTlsToggleItemRequest, config?: RequestConfig): Promise<ApiResponse<RadsecproxyTlsToggleItemResponse>> {
    return this.http.post(`/api/radsecproxy/tls/toggle_item/${uuid}/${enabled}`, data, config);
  }

}
