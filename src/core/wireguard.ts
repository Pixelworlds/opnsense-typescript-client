import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Wireguard module

// Model field types

// Client types
export interface WireguardClientAddClientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardClientAddClientBuilderRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WireguardClientAddClientBuilderResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardClientDelClientRequest {
  uuid: string;
}

export interface WireguardClientDelClientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardClientGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardClientGetClientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardClientGetClientBuilderResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardClientGetServerInfoResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardClientListServersResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardClientPskResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardClientSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WireguardClientSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardClientSetClientRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WireguardClientSetClientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardClientToggleClientRequest {
  enabled?: boolean;
}

export interface WireguardClientToggleClientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// General types
export interface WireguardGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WireguardGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Server types
export interface WireguardServerAddServerRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WireguardServerAddServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardServerDelServerRequest {
  uuid: string;
}

export interface WireguardServerDelServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardServerGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardServerGetServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardServerKeyPairResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardServerSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WireguardServerSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardServerSetServerRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WireguardServerSetServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardServerToggleServerRequest {
  enabled?: boolean;
}

export interface WireguardServerToggleServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface WireguardServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WireguardServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WireguardServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardServiceShowResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WireguardServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface WireguardServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface WireguardServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class WireguardApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Client methods
  async clientAddClient(config?: RequestConfig): Promise<ApiResponse<WireguardClientAddClientResponse>> {
    return this.http.get(`/api/wireguard/client/add_client`, config);
  }

  async clientAddClientBuilder(data?: WireguardClientAddClientBuilderRequest, config?: RequestConfig): Promise<ApiResponse<WireguardClientAddClientBuilderResponse>> {
    return this.http.post(`/api/wireguard/client/add_client_builder`, data, config);
  }

  async clientDelClient(uuid: string, data?: WireguardClientDelClientRequest, config?: RequestConfig): Promise<ApiResponse<WireguardClientDelClientResponse>> {
    return this.http.post(`/api/wireguard/client/del_client/${uuid}`, data, config);
  }

  async clientGet(config?: RequestConfig): Promise<ApiResponse<WireguardClientGetResponse>> {
    return this.http.get(`/api/wireguard/client/get`, config);
  }

  async clientGetClient(uuid?: string, config?: RequestConfig): Promise<ApiResponse<WireguardClientGetClientResponse>> {
    return this.http.get(`/api/wireguard/client/get_client/${uuid}`, config);
  }

  async clientGetClientBuilder(config?: RequestConfig): Promise<ApiResponse<WireguardClientGetClientBuilderResponse>> {
    return this.http.get(`/api/wireguard/client/get_client_builder`, config);
  }

  async clientGetServerInfo(uuid?: string, config?: RequestConfig): Promise<ApiResponse<WireguardClientGetServerInfoResponse>> {
    return this.http.get(`/api/wireguard/client/get_server_info/${uuid}`, config);
  }

  async clientListServers(config?: RequestConfig): Promise<ApiResponse<WireguardClientListServersResponse>> {
    return this.http.get(`/api/wireguard/client/list_servers`, config);
  }

  async clientPsk(config?: RequestConfig): Promise<ApiResponse<WireguardClientPskResponse>> {
    return this.http.get(`/api/wireguard/client/psk`, config);
  }

  async clientSet(data?: WireguardClientSetRequest, config?: RequestConfig): Promise<ApiResponse<WireguardClientSetResponse>> {
    return this.http.post(`/api/wireguard/client/set`, data, config);
  }

  async clientSetClient(uuid: string, data?: WireguardClientSetClientRequest, config?: RequestConfig): Promise<ApiResponse<WireguardClientSetClientResponse>> {
    return this.http.post(`/api/wireguard/client/set_client/${uuid}`, data, config);
  }

  async clientToggleClient(uuid: string, data?: WireguardClientToggleClientRequest, config?: RequestConfig): Promise<ApiResponse<WireguardClientToggleClientResponse>> {
    return this.http.post(`/api/wireguard/client/toggle_client/${uuid}`, data, config);
  }


  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<WireguardGeneralGetResponse>> {
    return this.http.get(`/api/wireguard/general/get`, config);
  }

  async generalSet(data?: WireguardGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<WireguardGeneralSetResponse>> {
    return this.http.post(`/api/wireguard/general/set`, data, config);
  }


  // Server methods
  async serverAddServer(uuid?: string, data?: WireguardServerAddServerRequest, config?: RequestConfig): Promise<ApiResponse<WireguardServerAddServerResponse>> {
    return this.http.post(`/api/wireguard/server/add_server/${uuid}`, data, config);
  }

  async serverDelServer(uuid: string, data?: WireguardServerDelServerRequest, config?: RequestConfig): Promise<ApiResponse<WireguardServerDelServerResponse>> {
    return this.http.post(`/api/wireguard/server/del_server/${uuid}`, data, config);
  }

  async serverGet(config?: RequestConfig): Promise<ApiResponse<WireguardServerGetResponse>> {
    return this.http.get(`/api/wireguard/server/get`, config);
  }

  async serverGetServer(uuid?: string, config?: RequestConfig): Promise<ApiResponse<WireguardServerGetServerResponse>> {
    return this.http.get(`/api/wireguard/server/get_server/${uuid}`, config);
  }

  async serverKeyPair(config?: RequestConfig): Promise<ApiResponse<WireguardServerKeyPairResponse>> {
    return this.http.get(`/api/wireguard/server/key_pair`, config);
  }

  async serverSet(data?: WireguardServerSetRequest, config?: RequestConfig): Promise<ApiResponse<WireguardServerSetResponse>> {
    return this.http.post(`/api/wireguard/server/set`, data, config);
  }

  async serverSetServer(uuid?: string, data?: WireguardServerSetServerRequest, config?: RequestConfig): Promise<ApiResponse<WireguardServerSetServerResponse>> {
    return this.http.post(`/api/wireguard/server/set_server/${uuid}`, data, config);
  }

  async serverToggleServer(uuid: string, data?: WireguardServerToggleServerRequest, config?: RequestConfig): Promise<ApiResponse<WireguardServerToggleServerResponse>> {
    return this.http.post(`/api/wireguard/server/toggle_server/${uuid}`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: WireguardServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<WireguardServiceReconfigureResponse>> {
    return this.http.post(`/api/wireguard/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: WireguardServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<WireguardServiceRestartResponse>> {
    return this.http.post(`/api/wireguard/service/restart`, data, config);
  }

  async serviceShow(config?: RequestConfig): Promise<ApiResponse<WireguardServiceShowResponse>> {
    return this.http.get(`/api/wireguard/service/show`, config);
  }

  async serviceStart(data?: WireguardServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<WireguardServiceStartResponse>> {
    return this.http.post(`/api/wireguard/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<WireguardServiceStatusResponse>> {
    return this.http.get(`/api/wireguard/service/status`, config);
  }

  async serviceStop(data?: WireguardServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<WireguardServiceStopResponse>> {
    return this.http.post(`/api/wireguard/service/stop`, data, config);
  }

}
