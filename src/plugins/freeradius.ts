import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Freeradius module

// Model field types

// Avpair types
export interface FreeradiusAvpairAddAvpairRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusAvpairAddAvpairResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusAvpairDelAvpairRequest {
  uuid: string;
}

export interface FreeradiusAvpairDelAvpairResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusAvpairGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusAvpairGetAvpairResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusAvpairSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusAvpairSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusAvpairSetAvpairRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusAvpairSetAvpairResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusAvpairToggleAvpairRequest {
  enabled?: boolean;
}

export interface FreeradiusAvpairToggleAvpairResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Client types
export interface FreeradiusClientAddClientRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusClientAddClientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusClientDelClientRequest {
  uuid: string;
}

export interface FreeradiusClientDelClientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusClientGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusClientGetClientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusClientSearchClientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusClientSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusClientSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusClientSetClientRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusClientSetClientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusClientToggleClientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Dhcp types
export interface FreeradiusDhcpAddDhcpRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusDhcpAddDhcpResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusDhcpDelDhcpRequest {
  uuid: string;
}

export interface FreeradiusDhcpDelDhcpResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusDhcpGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusDhcpGetDhcpResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusDhcpSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusDhcpSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusDhcpSetDhcpRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusDhcpSetDhcpResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusDhcpToggleDhcpRequest {
  enabled?: boolean;
}

export interface FreeradiusDhcpToggleDhcpResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Eap types
export interface FreeradiusEapGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusEapSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusEapSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// General types
export interface FreeradiusGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Ldap types
export interface FreeradiusLdapGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusLdapSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusLdapSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Lease types
export interface FreeradiusLeaseAddLeaseRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusLeaseAddLeaseResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusLeaseDelLeaseRequest {
  uuid: string;
}

export interface FreeradiusLeaseDelLeaseResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusLeaseGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusLeaseGetLeaseResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusLeaseSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusLeaseSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusLeaseSetLeaseRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusLeaseSetLeaseResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusLeaseToggleLeaseRequest {
  enabled?: boolean;
}

export interface FreeradiusLeaseToggleLeaseResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Proxy types
export interface FreeradiusProxyAddHomeserverRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusProxyAddHomeserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxyAddHomeserverpoolRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusProxyAddHomeserverpoolResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxyAddRealmRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusProxyAddRealmResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxyDelHomeserverRequest {
  uuid: string;
}

export interface FreeradiusProxyDelHomeserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxyDelHomeserverpoolRequest {
  uuid: string;
}

export interface FreeradiusProxyDelHomeserverpoolResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxyDelRealmRequest {
  uuid: string;
}

export interface FreeradiusProxyDelRealmResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxyGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxyGetHomeserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxyGetHomeserverpoolResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxyGetRealmResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxySearchHomeserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxySearchHomeserverpoolResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxySearchRealmResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxySetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusProxySetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxySetHomeserverRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusProxySetHomeserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxySetHomeserverpoolRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusProxySetHomeserverpoolResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxySetRealmRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusProxySetRealmResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxyToggleHomeserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxyToggleHomeserverpoolResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusProxyToggleRealmResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface FreeradiusServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// User types
export interface FreeradiusUserAddUserRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusUserAddUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusUserDelUserRequest {
  uuid: string;
}

export interface FreeradiusUserDelUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusUserGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusUserGetUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusUserSearchUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusUserSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusUserSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusUserSetUserRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FreeradiusUserSetUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FreeradiusUserToggleUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface FreeradiusAvpair {
}

export class FreeradiusApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Avpair methods
  async avpairAddAvpair(data?: FreeradiusAvpairAddAvpairRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusAvpairAddAvpairResponse>> {
    return this.http.post(`/api/freeradius/avpair/add_avpair`, data, config);
  }

  async avpairDelAvpair(uuid: string, data?: FreeradiusAvpairDelAvpairRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusAvpairDelAvpairResponse>> {
    return this.http.post(`/api/freeradius/avpair/del_avpair/${uuid}`, data, config);
  }

  async avpairGet(config?: RequestConfig): Promise<ApiResponse<FreeradiusAvpairGetResponse>> {
    return this.http.get(`/api/freeradius/avpair/get`, config);
  }

  async avpairGetAvpair(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FreeradiusAvpairGetAvpairResponse>> {
    return this.http.get(`/api/freeradius/avpair/get_avpair/${uuid}`, config);
  }

  async avpairSet(data?: FreeradiusAvpairSetRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusAvpairSetResponse>> {
    return this.http.post(`/api/freeradius/avpair/set`, data, config);
  }

  async avpairSetAvpair(uuid: string, data?: FreeradiusAvpairSetAvpairRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusAvpairSetAvpairResponse>> {
    return this.http.post(`/api/freeradius/avpair/set_avpair/${uuid}`, data, config);
  }

  async avpairToggleAvpair(uuid: string, data?: FreeradiusAvpairToggleAvpairRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusAvpairToggleAvpairResponse>> {
    return this.http.post(`/api/freeradius/avpair/toggle_avpair/${uuid}`, data, config);
  }


  // Client methods
  async clientAddClient(data?: FreeradiusClientAddClientRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusClientAddClientResponse>> {
    return this.http.post(`/api/freeradius/client/add_client`, data, config);
  }

  async clientDelClient(uuid: string, data?: FreeradiusClientDelClientRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusClientDelClientResponse>> {
    return this.http.post(`/api/freeradius/client/del_client/${uuid}`, data, config);
  }

  async clientGet(config?: RequestConfig): Promise<ApiResponse<FreeradiusClientGetResponse>> {
    return this.http.get(`/api/freeradius/client/get`, config);
  }

  async clientGetClient(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FreeradiusClientGetClientResponse>> {
    return this.http.get(`/api/freeradius/client/get_client/${uuid}`, config);
  }

  async clientSearchClient(config?: RequestConfig): Promise<ApiResponse<FreeradiusClientSearchClientResponse>> {
    return this.http.get(`/api/freeradius/client/search_client`, config);
  }

  async clientSet(data?: FreeradiusClientSetRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusClientSetResponse>> {
    return this.http.post(`/api/freeradius/client/set`, data, config);
  }

  async clientSetClient(uuid: string, data?: FreeradiusClientSetClientRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusClientSetClientResponse>> {
    return this.http.post(`/api/freeradius/client/set_client/${uuid}`, data, config);
  }

  async clientToggleClient(uuid: string, config?: RequestConfig): Promise<ApiResponse<FreeradiusClientToggleClientResponse>> {
    return this.http.get(`/api/freeradius/client/toggle_client/${uuid}`, config);
  }


  // Dhcp methods
  async dhcpAddDhcp(data?: FreeradiusDhcpAddDhcpRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusDhcpAddDhcpResponse>> {
    return this.http.post(`/api/freeradius/dhcp/add_dhcp`, data, config);
  }

  async dhcpDelDhcp(uuid: string, data?: FreeradiusDhcpDelDhcpRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusDhcpDelDhcpResponse>> {
    return this.http.post(`/api/freeradius/dhcp/del_dhcp/${uuid}`, data, config);
  }

  async dhcpGet(config?: RequestConfig): Promise<ApiResponse<FreeradiusDhcpGetResponse>> {
    return this.http.get(`/api/freeradius/dhcp/get`, config);
  }

  async dhcpGetDhcp(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FreeradiusDhcpGetDhcpResponse>> {
    return this.http.get(`/api/freeradius/dhcp/get_dhcp/${uuid}`, config);
  }

  async dhcpSet(data?: FreeradiusDhcpSetRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusDhcpSetResponse>> {
    return this.http.post(`/api/freeradius/dhcp/set`, data, config);
  }

  async dhcpSetDhcp(uuid: string, data?: FreeradiusDhcpSetDhcpRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusDhcpSetDhcpResponse>> {
    return this.http.post(`/api/freeradius/dhcp/set_dhcp/${uuid}`, data, config);
  }

  async dhcpToggleDhcp(uuid: string, data?: FreeradiusDhcpToggleDhcpRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusDhcpToggleDhcpResponse>> {
    return this.http.post(`/api/freeradius/dhcp/toggle_dhcp/${uuid}`, data, config);
  }


  // Eap methods
  async eapGet(config?: RequestConfig): Promise<ApiResponse<FreeradiusEapGetResponse>> {
    return this.http.get(`/api/freeradius/eap/get`, config);
  }

  async eapSet(data?: FreeradiusEapSetRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusEapSetResponse>> {
    return this.http.post(`/api/freeradius/eap/set`, data, config);
  }


  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<FreeradiusGeneralGetResponse>> {
    return this.http.get(`/api/freeradius/general/get`, config);
  }

  async generalSet(data?: FreeradiusGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusGeneralSetResponse>> {
    return this.http.post(`/api/freeradius/general/set`, data, config);
  }


  // Ldap methods
  async ldapGet(config?: RequestConfig): Promise<ApiResponse<FreeradiusLdapGetResponse>> {
    return this.http.get(`/api/freeradius/ldap/get`, config);
  }

  async ldapSet(data?: FreeradiusLdapSetRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusLdapSetResponse>> {
    return this.http.post(`/api/freeradius/ldap/set`, data, config);
  }


  // Lease methods
  async leaseAddLease(data?: FreeradiusLeaseAddLeaseRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusLeaseAddLeaseResponse>> {
    return this.http.post(`/api/freeradius/lease/add_lease`, data, config);
  }

  async leaseDelLease(uuid: string, data?: FreeradiusLeaseDelLeaseRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusLeaseDelLeaseResponse>> {
    return this.http.post(`/api/freeradius/lease/del_lease/${uuid}`, data, config);
  }

  async leaseGet(config?: RequestConfig): Promise<ApiResponse<FreeradiusLeaseGetResponse>> {
    return this.http.get(`/api/freeradius/lease/get`, config);
  }

  async leaseGetLease(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FreeradiusLeaseGetLeaseResponse>> {
    return this.http.get(`/api/freeradius/lease/get_lease/${uuid}`, config);
  }

  async leaseSet(data?: FreeradiusLeaseSetRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusLeaseSetResponse>> {
    return this.http.post(`/api/freeradius/lease/set`, data, config);
  }

  async leaseSetLease(uuid: string, data?: FreeradiusLeaseSetLeaseRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusLeaseSetLeaseResponse>> {
    return this.http.post(`/api/freeradius/lease/set_lease/${uuid}`, data, config);
  }

  async leaseToggleLease(uuid: string, data?: FreeradiusLeaseToggleLeaseRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusLeaseToggleLeaseResponse>> {
    return this.http.post(`/api/freeradius/lease/toggle_lease/${uuid}`, data, config);
  }


  // Proxy methods
  async proxyAddHomeserver(data?: FreeradiusProxyAddHomeserverRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxyAddHomeserverResponse>> {
    return this.http.post(`/api/freeradius/proxy/add_homeserver`, data, config);
  }

  async proxyAddHomeserverpool(data?: FreeradiusProxyAddHomeserverpoolRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxyAddHomeserverpoolResponse>> {
    return this.http.post(`/api/freeradius/proxy/add_homeserverpool`, data, config);
  }

  async proxyAddRealm(data?: FreeradiusProxyAddRealmRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxyAddRealmResponse>> {
    return this.http.post(`/api/freeradius/proxy/add_realm`, data, config);
  }

  async proxyDelHomeserver(uuid: string, data?: FreeradiusProxyDelHomeserverRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxyDelHomeserverResponse>> {
    return this.http.post(`/api/freeradius/proxy/del_homeserver/${uuid}`, data, config);
  }

  async proxyDelHomeserverpool(uuid: string, data?: FreeradiusProxyDelHomeserverpoolRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxyDelHomeserverpoolResponse>> {
    return this.http.post(`/api/freeradius/proxy/del_homeserverpool/${uuid}`, data, config);
  }

  async proxyDelRealm(uuid: string, data?: FreeradiusProxyDelRealmRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxyDelRealmResponse>> {
    return this.http.post(`/api/freeradius/proxy/del_realm/${uuid}`, data, config);
  }

  async proxyGet(config?: RequestConfig): Promise<ApiResponse<FreeradiusProxyGetResponse>> {
    return this.http.get(`/api/freeradius/proxy/get`, config);
  }

  async proxyGetHomeserver(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxyGetHomeserverResponse>> {
    return this.http.get(`/api/freeradius/proxy/get_homeserver/${uuid}`, config);
  }

  async proxyGetHomeserverpool(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxyGetHomeserverpoolResponse>> {
    return this.http.get(`/api/freeradius/proxy/get_homeserverpool/${uuid}`, config);
  }

  async proxyGetRealm(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxyGetRealmResponse>> {
    return this.http.get(`/api/freeradius/proxy/get_realm/${uuid}`, config);
  }

  async proxySearchHomeserver(config?: RequestConfig): Promise<ApiResponse<FreeradiusProxySearchHomeserverResponse>> {
    return this.http.get(`/api/freeradius/proxy/search_homeserver`, config);
  }

  async proxySearchHomeserverpool(config?: RequestConfig): Promise<ApiResponse<FreeradiusProxySearchHomeserverpoolResponse>> {
    return this.http.get(`/api/freeradius/proxy/search_homeserverpool`, config);
  }

  async proxySearchRealm(config?: RequestConfig): Promise<ApiResponse<FreeradiusProxySearchRealmResponse>> {
    return this.http.get(`/api/freeradius/proxy/search_realm`, config);
  }

  async proxySet(data?: FreeradiusProxySetRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxySetResponse>> {
    return this.http.post(`/api/freeradius/proxy/set`, data, config);
  }

  async proxySetHomeserver(uuid: string, data?: FreeradiusProxySetHomeserverRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxySetHomeserverResponse>> {
    return this.http.post(`/api/freeradius/proxy/set_homeserver/${uuid}`, data, config);
  }

  async proxySetHomeserverpool(uuid: string, data?: FreeradiusProxySetHomeserverpoolRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxySetHomeserverpoolResponse>> {
    return this.http.post(`/api/freeradius/proxy/set_homeserverpool/${uuid}`, data, config);
  }

  async proxySetRealm(uuid: string, data?: FreeradiusProxySetRealmRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxySetRealmResponse>> {
    return this.http.post(`/api/freeradius/proxy/set_realm/${uuid}`, data, config);
  }

  async proxyToggleHomeserver(uuid: string, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxyToggleHomeserverResponse>> {
    return this.http.get(`/api/freeradius/proxy/toggle_homeserver/${uuid}`, config);
  }

  async proxyToggleHomeserverpool(uuid: string, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxyToggleHomeserverpoolResponse>> {
    return this.http.get(`/api/freeradius/proxy/toggle_homeserverpool/${uuid}`, config);
  }

  async proxyToggleRealm(uuid: string, config?: RequestConfig): Promise<ApiResponse<FreeradiusProxyToggleRealmResponse>> {
    return this.http.get(`/api/freeradius/proxy/toggle_realm/${uuid}`, config);
  }


  // Service methods
  async serviceReconfigure(data?: FreeradiusServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusServiceReconfigureResponse>> {
    return this.http.post(`/api/freeradius/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: FreeradiusServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusServiceRestartResponse>> {
    return this.http.post(`/api/freeradius/service/restart`, data, config);
  }

  async serviceStart(data?: FreeradiusServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusServiceStartResponse>> {
    return this.http.post(`/api/freeradius/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<FreeradiusServiceStatusResponse>> {
    return this.http.get(`/api/freeradius/service/status`, config);
  }

  async serviceStop(data?: FreeradiusServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusServiceStopResponse>> {
    return this.http.post(`/api/freeradius/service/stop`, data, config);
  }


  // User methods
  async userAddUser(data?: FreeradiusUserAddUserRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusUserAddUserResponse>> {
    return this.http.post(`/api/freeradius/user/add_user`, data, config);
  }

  async userDelUser(uuid: string, data?: FreeradiusUserDelUserRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusUserDelUserResponse>> {
    return this.http.post(`/api/freeradius/user/del_user/${uuid}`, data, config);
  }

  async userGet(config?: RequestConfig): Promise<ApiResponse<FreeradiusUserGetResponse>> {
    return this.http.get(`/api/freeradius/user/get`, config);
  }

  async userGetUser(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FreeradiusUserGetUserResponse>> {
    return this.http.get(`/api/freeradius/user/get_user/${uuid}`, config);
  }

  async userSearchUser(config?: RequestConfig): Promise<ApiResponse<FreeradiusUserSearchUserResponse>> {
    return this.http.get(`/api/freeradius/user/search_user`, config);
  }

  async userSet(data?: FreeradiusUserSetRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusUserSetResponse>> {
    return this.http.post(`/api/freeradius/user/set`, data, config);
  }

  async userSetUser(uuid: string, data?: FreeradiusUserSetUserRequest, config?: RequestConfig): Promise<ApiResponse<FreeradiusUserSetUserResponse>> {
    return this.http.post(`/api/freeradius/user/set_user/${uuid}`, data, config);
  }

  async userToggleUser(uuid: string, config?: RequestConfig): Promise<ApiResponse<FreeradiusUserToggleUserResponse>> {
    return this.http.get(`/api/freeradius/user/toggle_user/${uuid}`, config);
  }

}
