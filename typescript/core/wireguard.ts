import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/wireguard';
  }

  // Client methods
  async clientAddClient(config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardClientAddClientResponse>> {
    return this.client.get(`${this.basePath}/client/add_client`, config);
  }

  async clientAddClientBuilder(data?: WireguardClientAddClientBuilderRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardClientAddClientBuilderResponse>> {
    return this.client.post(`${this.basePath}/client/add_client_builder`, data, config);
  }

  async clientDelClient(uuid: string, data?: WireguardClientDelClientRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardClientDelClientResponse>> {
    return this.client.post(`${this.basePath}/client/del_client/${uuid}`, data, config);
  }

  async clientGet(config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardClientGetResponse>> {
    return this.client.get(`${this.basePath}/client/get`, config);
  }

  async clientGetClient(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardClientGetClientResponse>> {
    return this.client.get(`${this.basePath}/client/get_client/${uuid}`, config);
  }

  async clientGetClientBuilder(config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardClientGetClientBuilderResponse>> {
    return this.client.get(`${this.basePath}/client/get_client_builder`, config);
  }

  async clientGetServerInfo(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardClientGetServerInfoResponse>> {
    return this.client.get(`${this.basePath}/client/get_server_info/${uuid}`, config);
  }

  async clientListServers(config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardClientListServersResponse>> {
    return this.client.get(`${this.basePath}/client/list_servers`, config);
  }

  async clientPsk(config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardClientPskResponse>> {
    return this.client.get(`${this.basePath}/client/psk`, config);
  }

  async clientSet(data?: WireguardClientSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardClientSetResponse>> {
    return this.client.post(`${this.basePath}/client/set`, data, config);
  }

  async clientSetClient(uuid: string, data?: WireguardClientSetClientRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardClientSetClientResponse>> {
    return this.client.post(`${this.basePath}/client/set_client/${uuid}`, data, config);
  }

  async clientToggleClient(uuid: string, data?: WireguardClientToggleClientRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardClientToggleClientResponse>> {
    return this.client.post(`${this.basePath}/client/toggle_client/${uuid}`, data, config);
  }


  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: WireguardGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Server methods
  async serverAddServer(uuid?: string, data?: WireguardServerAddServerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardServerAddServerResponse>> {
    return this.client.post(`${this.basePath}/server/add_server/${uuid}`, data, config);
  }

  async serverDelServer(uuid: string, data?: WireguardServerDelServerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardServerDelServerResponse>> {
    return this.client.post(`${this.basePath}/server/del_server/${uuid}`, data, config);
  }

  async serverGet(config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardServerGetResponse>> {
    return this.client.get(`${this.basePath}/server/get`, config);
  }

  async serverGetServer(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardServerGetServerResponse>> {
    return this.client.get(`${this.basePath}/server/get_server/${uuid}`, config);
  }

  async serverKeyPair(config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardServerKeyPairResponse>> {
    return this.client.get(`${this.basePath}/server/key_pair`, config);
  }

  async serverSet(data?: WireguardServerSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardServerSetResponse>> {
    return this.client.post(`${this.basePath}/server/set`, data, config);
  }

  async serverSetServer(uuid?: string, data?: WireguardServerSetServerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardServerSetServerResponse>> {
    return this.client.post(`${this.basePath}/server/set_server/${uuid}`, data, config);
  }

  async serverToggleServer(uuid: string, data?: WireguardServerToggleServerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardServerToggleServerResponse>> {
    return this.client.post(`${this.basePath}/server/toggle_server/${uuid}`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: WireguardServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: WireguardServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceShow(config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardServiceShowResponse>> {
    return this.client.get(`${this.basePath}/service/show`, config);
  }

  async serviceStart(data?: WireguardServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: WireguardServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<WireguardServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
