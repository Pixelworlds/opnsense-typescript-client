import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Cloak methods
  async cloakAddCloak(data?: DnscryptproxyCloakAddCloakRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyCloakAddCloakResponse>> {
    return this.http.post(`/api/dnscryptproxy/cloak/add_cloak`, data, config);
  }

  async cloakDelCloak(uuid: string, data?: DnscryptproxyCloakDelCloakRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyCloakDelCloakResponse>> {
    return this.http.post(`/api/dnscryptproxy/cloak/del_cloak/${uuid}`, data, config);
  }

  async cloakGet(config?: RequestConfig): Promise<ApiResponse<DnscryptproxyCloakGetResponse>> {
    return this.http.get(`/api/dnscryptproxy/cloak/get`, config);
  }

  async cloakGetCloak(uuid?: string, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyCloakGetCloakResponse>> {
    return this.http.get(`/api/dnscryptproxy/cloak/get_cloak/${uuid}`, config);
  }

  async cloakSet(data?: DnscryptproxyCloakSetRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyCloakSetResponse>> {
    return this.http.post(`/api/dnscryptproxy/cloak/set`, data, config);
  }

  async cloakSetCloak(uuid: string, data?: DnscryptproxyCloakSetCloakRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyCloakSetCloakResponse>> {
    return this.http.post(`/api/dnscryptproxy/cloak/set_cloak/${uuid}`, data, config);
  }

  async cloakToggleCloak(uuid: string, data?: DnscryptproxyCloakToggleCloakRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyCloakToggleCloakResponse>> {
    return this.http.post(`/api/dnscryptproxy/cloak/toggle_cloak/${uuid}`, data, config);
  }


  // Dnsbl methods
  async dnsblGet(config?: RequestConfig): Promise<ApiResponse<DnscryptproxyDnsblGetResponse>> {
    return this.http.get(`/api/dnscryptproxy/dnsbl/get`, config);
  }

  async dnsblSet(data?: DnscryptproxyDnsblSetRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyDnsblSetResponse>> {
    return this.http.post(`/api/dnscryptproxy/dnsbl/set`, data, config);
  }


  // Forward methods
  async forwardAddForward(data?: DnscryptproxyForwardAddForwardRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyForwardAddForwardResponse>> {
    return this.http.post(`/api/dnscryptproxy/forward/add_forward`, data, config);
  }

  async forwardDelForward(uuid: string, data?: DnscryptproxyForwardDelForwardRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyForwardDelForwardResponse>> {
    return this.http.post(`/api/dnscryptproxy/forward/del_forward/${uuid}`, data, config);
  }

  async forwardGet(config?: RequestConfig): Promise<ApiResponse<DnscryptproxyForwardGetResponse>> {
    return this.http.get(`/api/dnscryptproxy/forward/get`, config);
  }

  async forwardGetForward(uuid?: string, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyForwardGetForwardResponse>> {
    return this.http.get(`/api/dnscryptproxy/forward/get_forward/${uuid}`, config);
  }

  async forwardSet(data?: DnscryptproxyForwardSetRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyForwardSetResponse>> {
    return this.http.post(`/api/dnscryptproxy/forward/set`, data, config);
  }

  async forwardSetForward(uuid: string, data?: DnscryptproxyForwardSetForwardRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyForwardSetForwardResponse>> {
    return this.http.post(`/api/dnscryptproxy/forward/set_forward/${uuid}`, data, config);
  }

  async forwardToggleForward(uuid: string, data?: DnscryptproxyForwardToggleForwardRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyForwardToggleForwardResponse>> {
    return this.http.post(`/api/dnscryptproxy/forward/toggle_forward/${uuid}`, data, config);
  }


  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<DnscryptproxyGeneralGetResponse>> {
    return this.http.get(`/api/dnscryptproxy/general/get`, config);
  }

  async generalSet(data?: DnscryptproxyGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyGeneralSetResponse>> {
    return this.http.post(`/api/dnscryptproxy/general/set`, data, config);
  }


  // Server methods
  async serverAddServer(data?: DnscryptproxyServerAddServerRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyServerAddServerResponse>> {
    return this.http.post(`/api/dnscryptproxy/server/add_server`, data, config);
  }

  async serverDelServer(uuid: string, data?: DnscryptproxyServerDelServerRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyServerDelServerResponse>> {
    return this.http.post(`/api/dnscryptproxy/server/del_server/${uuid}`, data, config);
  }

  async serverGet(config?: RequestConfig): Promise<ApiResponse<DnscryptproxyServerGetResponse>> {
    return this.http.get(`/api/dnscryptproxy/server/get`, config);
  }

  async serverGetServer(uuid?: string, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyServerGetServerResponse>> {
    return this.http.get(`/api/dnscryptproxy/server/get_server/${uuid}`, config);
  }

  async serverSet(data?: DnscryptproxyServerSetRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyServerSetResponse>> {
    return this.http.post(`/api/dnscryptproxy/server/set`, data, config);
  }

  async serverSetServer(uuid: string, data?: DnscryptproxyServerSetServerRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyServerSetServerResponse>> {
    return this.http.post(`/api/dnscryptproxy/server/set_server/${uuid}`, data, config);
  }

  async serverToggleServer(uuid: string, data?: DnscryptproxyServerToggleServerRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyServerToggleServerResponse>> {
    return this.http.post(`/api/dnscryptproxy/server/toggle_server/${uuid}`, data, config);
  }


  // Service methods
  async serviceDnsbl(config?: RequestConfig): Promise<ApiResponse<DnscryptproxyServiceDnsblResponse>> {
    return this.http.get(`/api/dnscryptproxy/service/dnsbl`, config);
  }

  async serviceReconfigure(data?: DnscryptproxyServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyServiceReconfigureResponse>> {
    return this.http.post(`/api/dnscryptproxy/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: DnscryptproxyServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyServiceRestartResponse>> {
    return this.http.post(`/api/dnscryptproxy/service/restart`, data, config);
  }

  async serviceStart(data?: DnscryptproxyServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyServiceStartResponse>> {
    return this.http.post(`/api/dnscryptproxy/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<DnscryptproxyServiceStatusResponse>> {
    return this.http.get(`/api/dnscryptproxy/service/status`, config);
  }

  async serviceStop(data?: DnscryptproxyServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyServiceStopResponse>> {
    return this.http.post(`/api/dnscryptproxy/service/stop`, data, config);
  }


  // Whitelist methods
  async whitelistAddWhitelist(data?: DnscryptproxyWhitelistAddWhitelistRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyWhitelistAddWhitelistResponse>> {
    return this.http.post(`/api/dnscryptproxy/whitelist/add_whitelist`, data, config);
  }

  async whitelistDelWhitelist(uuid: string, data?: DnscryptproxyWhitelistDelWhitelistRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyWhitelistDelWhitelistResponse>> {
    return this.http.post(`/api/dnscryptproxy/whitelist/del_whitelist/${uuid}`, data, config);
  }

  async whitelistGet(config?: RequestConfig): Promise<ApiResponse<DnscryptproxyWhitelistGetResponse>> {
    return this.http.get(`/api/dnscryptproxy/whitelist/get`, config);
  }

  async whitelistGetWhitelist(uuid?: string, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyWhitelistGetWhitelistResponse>> {
    return this.http.get(`/api/dnscryptproxy/whitelist/get_whitelist/${uuid}`, config);
  }

  async whitelistSet(data?: DnscryptproxyWhitelistSetRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyWhitelistSetResponse>> {
    return this.http.post(`/api/dnscryptproxy/whitelist/set`, data, config);
  }

  async whitelistSetWhitelist(uuid: string, data?: DnscryptproxyWhitelistSetWhitelistRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyWhitelistSetWhitelistResponse>> {
    return this.http.post(`/api/dnscryptproxy/whitelist/set_whitelist/${uuid}`, data, config);
  }

  async whitelistToggleWhitelist(uuid: string, data?: DnscryptproxyWhitelistToggleWhitelistRequest, config?: RequestConfig): Promise<ApiResponse<DnscryptproxyWhitelistToggleWhitelistResponse>> {
    return this.http.post(`/api/dnscryptproxy/whitelist/toggle_whitelist/${uuid}`, data, config);
  }

}
