import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Dnscryptproxy module

// Model field types

// Cloak types
export interface DnscryptproxyCloakAddCloakRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyCloakAddCloakResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyCloakDelCloakRequest {
  uuid: string;
}

export interface DnscryptproxyCloakDelCloakResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyCloakGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyCloakGetCloakResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyCloakSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyCloakSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyCloakSetCloakRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyCloakSetCloakResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyCloakToggleCloakRequest {
  enabled?: boolean;
}

export interface DnscryptproxyCloakToggleCloakResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Dnsbl types
export interface DnscryptproxyDnsblGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyDnsblSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyDnsblSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Forward types
export interface DnscryptproxyForwardAddForwardRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyForwardAddForwardResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyForwardDelForwardRequest {
  uuid: string;
}

export interface DnscryptproxyForwardDelForwardResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyForwardGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyForwardGetForwardResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyForwardSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyForwardSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyForwardSetForwardRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyForwardSetForwardResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyForwardToggleForwardRequest {
  enabled?: boolean;
}

export interface DnscryptproxyForwardToggleForwardResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// General types
export interface DnscryptproxyGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Server types
export interface DnscryptproxyServerAddServerRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyServerAddServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyServerDelServerRequest {
  uuid: string;
}

export interface DnscryptproxyServerDelServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyServerGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyServerGetServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyServerSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyServerSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyServerSetServerRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyServerSetServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyServerToggleServerRequest {
  enabled?: boolean;
}

export interface DnscryptproxyServerToggleServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface DnscryptproxyServiceDnsblResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Whitelist types
export interface DnscryptproxyWhitelistAddWhitelistRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyWhitelistAddWhitelistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyWhitelistDelWhitelistRequest {
  uuid: string;
}

export interface DnscryptproxyWhitelistDelWhitelistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyWhitelistGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyWhitelistGetWhitelistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyWhitelistSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyWhitelistSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyWhitelistSetWhitelistRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DnscryptproxyWhitelistSetWhitelistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DnscryptproxyWhitelistToggleWhitelistRequest {
  enabled?: boolean;
}

export interface DnscryptproxyWhitelistToggleWhitelistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface DnscryptproxyCloak {
}

export class DnscryptproxyApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/dnscryptproxy';
  }

  // Cloak methods
  async cloakAddCloak(data?: DnscryptproxyCloakAddCloakRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyCloakAddCloakResponse>> {
    return this.client.post(`${this.basePath}/cloak/add_cloak`, data, config);
  }

  async cloakDelCloak(uuid: string, data?: DnscryptproxyCloakDelCloakRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyCloakDelCloakResponse>> {
    return this.client.post(`${this.basePath}/cloak/del_cloak/${uuid}`, data, config);
  }

  async cloakGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyCloakGetResponse>> {
    return this.client.get(`${this.basePath}/cloak/get`, config);
  }

  async cloakGetCloak(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyCloakGetCloakResponse>> {
    return this.client.get(`${this.basePath}/cloak/get_cloak/${uuid}`, config);
  }

  async cloakSet(data?: DnscryptproxyCloakSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyCloakSetResponse>> {
    return this.client.post(`${this.basePath}/cloak/set`, data, config);
  }

  async cloakSetCloak(uuid: string, data?: DnscryptproxyCloakSetCloakRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyCloakSetCloakResponse>> {
    return this.client.post(`${this.basePath}/cloak/set_cloak/${uuid}`, data, config);
  }

  async cloakToggleCloak(uuid: string, data?: DnscryptproxyCloakToggleCloakRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyCloakToggleCloakResponse>> {
    return this.client.post(`${this.basePath}/cloak/toggle_cloak/${uuid}`, data, config);
  }


  // Dnsbl methods
  async dnsblGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyDnsblGetResponse>> {
    return this.client.get(`${this.basePath}/dnsbl/get`, config);
  }

  async dnsblSet(data?: DnscryptproxyDnsblSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyDnsblSetResponse>> {
    return this.client.post(`${this.basePath}/dnsbl/set`, data, config);
  }


  // Forward methods
  async forwardAddForward(data?: DnscryptproxyForwardAddForwardRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyForwardAddForwardResponse>> {
    return this.client.post(`${this.basePath}/forward/add_forward`, data, config);
  }

  async forwardDelForward(uuid: string, data?: DnscryptproxyForwardDelForwardRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyForwardDelForwardResponse>> {
    return this.client.post(`${this.basePath}/forward/del_forward/${uuid}`, data, config);
  }

  async forwardGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyForwardGetResponse>> {
    return this.client.get(`${this.basePath}/forward/get`, config);
  }

  async forwardGetForward(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyForwardGetForwardResponse>> {
    return this.client.get(`${this.basePath}/forward/get_forward/${uuid}`, config);
  }

  async forwardSet(data?: DnscryptproxyForwardSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyForwardSetResponse>> {
    return this.client.post(`${this.basePath}/forward/set`, data, config);
  }

  async forwardSetForward(uuid: string, data?: DnscryptproxyForwardSetForwardRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyForwardSetForwardResponse>> {
    return this.client.post(`${this.basePath}/forward/set_forward/${uuid}`, data, config);
  }

  async forwardToggleForward(uuid: string, data?: DnscryptproxyForwardToggleForwardRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyForwardToggleForwardResponse>> {
    return this.client.post(`${this.basePath}/forward/toggle_forward/${uuid}`, data, config);
  }


  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: DnscryptproxyGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Server methods
  async serverAddServer(data?: DnscryptproxyServerAddServerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyServerAddServerResponse>> {
    return this.client.post(`${this.basePath}/server/add_server`, data, config);
  }

  async serverDelServer(uuid: string, data?: DnscryptproxyServerDelServerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyServerDelServerResponse>> {
    return this.client.post(`${this.basePath}/server/del_server/${uuid}`, data, config);
  }

  async serverGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyServerGetResponse>> {
    return this.client.get(`${this.basePath}/server/get`, config);
  }

  async serverGetServer(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyServerGetServerResponse>> {
    return this.client.get(`${this.basePath}/server/get_server/${uuid}`, config);
  }

  async serverSet(data?: DnscryptproxyServerSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyServerSetResponse>> {
    return this.client.post(`${this.basePath}/server/set`, data, config);
  }

  async serverSetServer(uuid: string, data?: DnscryptproxyServerSetServerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyServerSetServerResponse>> {
    return this.client.post(`${this.basePath}/server/set_server/${uuid}`, data, config);
  }

  async serverToggleServer(uuid: string, data?: DnscryptproxyServerToggleServerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyServerToggleServerResponse>> {
    return this.client.post(`${this.basePath}/server/toggle_server/${uuid}`, data, config);
  }


  // Service methods
  async serviceDnsbl(config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyServiceDnsblResponse>> {
    return this.client.get(`${this.basePath}/service/dnsbl`, config);
  }

  async serviceReconfigure(data?: DnscryptproxyServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: DnscryptproxyServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: DnscryptproxyServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: DnscryptproxyServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Whitelist methods
  async whitelistAddWhitelist(data?: DnscryptproxyWhitelistAddWhitelistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyWhitelistAddWhitelistResponse>> {
    return this.client.post(`${this.basePath}/whitelist/add_whitelist`, data, config);
  }

  async whitelistDelWhitelist(uuid: string, data?: DnscryptproxyWhitelistDelWhitelistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyWhitelistDelWhitelistResponse>> {
    return this.client.post(`${this.basePath}/whitelist/del_whitelist/${uuid}`, data, config);
  }

  async whitelistGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyWhitelistGetResponse>> {
    return this.client.get(`${this.basePath}/whitelist/get`, config);
  }

  async whitelistGetWhitelist(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyWhitelistGetWhitelistResponse>> {
    return this.client.get(`${this.basePath}/whitelist/get_whitelist/${uuid}`, config);
  }

  async whitelistSet(data?: DnscryptproxyWhitelistSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyWhitelistSetResponse>> {
    return this.client.post(`${this.basePath}/whitelist/set`, data, config);
  }

  async whitelistSetWhitelist(uuid: string, data?: DnscryptproxyWhitelistSetWhitelistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyWhitelistSetWhitelistResponse>> {
    return this.client.post(`${this.basePath}/whitelist/set_whitelist/${uuid}`, data, config);
  }

  async whitelistToggleWhitelist(uuid: string, data?: DnscryptproxyWhitelistToggleWhitelistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DnscryptproxyWhitelistToggleWhitelistResponse>> {
    return this.client.post(`${this.basePath}/whitelist/toggle_whitelist/${uuid}`, data, config);
  }

}
