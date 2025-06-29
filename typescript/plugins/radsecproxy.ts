import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/radsecproxy';
  }

  // Clients methods
  async clientsAddItem(data?: RadsecproxyClientsAddItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyClientsAddItemResponse>> {
    return this.client.post(`${this.basePath}/clients/add_item`, data, config);
  }

  async clientsDelItem(uuid: string, data?: RadsecproxyClientsDelItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyClientsDelItemResponse>> {
    return this.client.post(`${this.basePath}/clients/del_item/${uuid}`, data, config);
  }

  async clientsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyClientsGetResponse>> {
    return this.client.get(`${this.basePath}/clients/get`, config);
  }

  async clientsGetItem(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyClientsGetItemResponse>> {
    return this.client.get(`${this.basePath}/clients/get_item/${uuid}`, config);
  }

  async clientsSet(data?: RadsecproxyClientsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyClientsSetResponse>> {
    return this.client.post(`${this.basePath}/clients/set`, data, config);
  }

  async clientsSetItem(uuid: string, data?: RadsecproxyClientsSetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyClientsSetItemResponse>> {
    return this.client.post(`${this.basePath}/clients/set_item/${uuid}`, data, config);
  }

  async clientsToggleItem(uuid: string, enabled?: string, data?: RadsecproxyClientsToggleItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyClientsToggleItemResponse>> {
    return this.client.post(`${this.basePath}/clients/toggle_item/${uuid}/${enabled}`, data, config);
  }


  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: RadsecproxyGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Realms methods
  async realmsAddItem(data?: RadsecproxyRealmsAddItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyRealmsAddItemResponse>> {
    return this.client.post(`${this.basePath}/realms/add_item`, data, config);
  }

  async realmsDelItem(uuid: string, data?: RadsecproxyRealmsDelItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyRealmsDelItemResponse>> {
    return this.client.post(`${this.basePath}/realms/del_item/${uuid}`, data, config);
  }

  async realmsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyRealmsGetResponse>> {
    return this.client.get(`${this.basePath}/realms/get`, config);
  }

  async realmsGetItem(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyRealmsGetItemResponse>> {
    return this.client.get(`${this.basePath}/realms/get_item/${uuid}`, config);
  }

  async realmsSet(data?: RadsecproxyRealmsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyRealmsSetResponse>> {
    return this.client.post(`${this.basePath}/realms/set`, data, config);
  }

  async realmsSetItem(uuid: string, data?: RadsecproxyRealmsSetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyRealmsSetItemResponse>> {
    return this.client.post(`${this.basePath}/realms/set_item/${uuid}`, data, config);
  }

  async realmsToggleItem(uuid: string, enabled?: string, data?: RadsecproxyRealmsToggleItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyRealmsToggleItemResponse>> {
    return this.client.post(`${this.basePath}/realms/toggle_item/${uuid}/${enabled}`, data, config);
  }


  // Rewrites methods
  async rewritesAddItem(data?: RadsecproxyRewritesAddItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyRewritesAddItemResponse>> {
    return this.client.post(`${this.basePath}/rewrites/add_item`, data, config);
  }

  async rewritesDelItem(uuid: string, data?: RadsecproxyRewritesDelItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyRewritesDelItemResponse>> {
    return this.client.post(`${this.basePath}/rewrites/del_item/${uuid}`, data, config);
  }

  async rewritesGet(config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyRewritesGetResponse>> {
    return this.client.get(`${this.basePath}/rewrites/get`, config);
  }

  async rewritesGetItem(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyRewritesGetItemResponse>> {
    return this.client.get(`${this.basePath}/rewrites/get_item/${uuid}`, config);
  }

  async rewritesSet(data?: RadsecproxyRewritesSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyRewritesSetResponse>> {
    return this.client.post(`${this.basePath}/rewrites/set`, data, config);
  }

  async rewritesSetItem(uuid: string, data?: RadsecproxyRewritesSetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyRewritesSetItemResponse>> {
    return this.client.post(`${this.basePath}/rewrites/set_item/${uuid}`, data, config);
  }

  async rewritesToggleItem(uuid: string, enabled?: string, data?: RadsecproxyRewritesToggleItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyRewritesToggleItemResponse>> {
    return this.client.post(`${this.basePath}/rewrites/toggle_item/${uuid}/${enabled}`, data, config);
  }


  // Servers methods
  async serversAddItem(data?: RadsecproxyServersAddItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyServersAddItemResponse>> {
    return this.client.post(`${this.basePath}/servers/add_item`, data, config);
  }

  async serversDelItem(uuid: string, data?: RadsecproxyServersDelItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyServersDelItemResponse>> {
    return this.client.post(`${this.basePath}/servers/del_item/${uuid}`, data, config);
  }

  async serversGet(config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyServersGetResponse>> {
    return this.client.get(`${this.basePath}/servers/get`, config);
  }

  async serversGetItem(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyServersGetItemResponse>> {
    return this.client.get(`${this.basePath}/servers/get_item/${uuid}`, config);
  }

  async serversSet(data?: RadsecproxyServersSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyServersSetResponse>> {
    return this.client.post(`${this.basePath}/servers/set`, data, config);
  }

  async serversSetItem(uuid: string, data?: RadsecproxyServersSetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyServersSetItemResponse>> {
    return this.client.post(`${this.basePath}/servers/set_item/${uuid}`, data, config);
  }

  async serversToggleItem(uuid: string, enabled?: string, data?: RadsecproxyServersToggleItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyServersToggleItemResponse>> {
    return this.client.post(`${this.basePath}/servers/toggle_item/${uuid}/${enabled}`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: RadsecproxyServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: RadsecproxyServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: RadsecproxyServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: RadsecproxyServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Tls methods
  async tlsAddItem(data?: RadsecproxyTlsAddItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyTlsAddItemResponse>> {
    return this.client.post(`${this.basePath}/tls/add_item`, data, config);
  }

  async tlsDelItem(uuid: string, data?: RadsecproxyTlsDelItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyTlsDelItemResponse>> {
    return this.client.post(`${this.basePath}/tls/del_item/${uuid}`, data, config);
  }

  async tlsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyTlsGetResponse>> {
    return this.client.get(`${this.basePath}/tls/get`, config);
  }

  async tlsGetItem(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyTlsGetItemResponse>> {
    return this.client.get(`${this.basePath}/tls/get_item/${uuid}`, config);
  }

  async tlsSet(data?: RadsecproxyTlsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyTlsSetResponse>> {
    return this.client.post(`${this.basePath}/tls/set`, data, config);
  }

  async tlsSetItem(uuid: string, data?: RadsecproxyTlsSetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyTlsSetItemResponse>> {
    return this.client.post(`${this.basePath}/tls/set_item/${uuid}`, data, config);
  }

  async tlsToggleItem(uuid: string, enabled?: string, data?: RadsecproxyTlsToggleItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<RadsecproxyTlsToggleItemResponse>> {
    return this.client.post(`${this.basePath}/tls/toggle_item/${uuid}/${enabled}`, data, config);
  }

}
