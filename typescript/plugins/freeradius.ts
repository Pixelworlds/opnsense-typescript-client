import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/freeradius';
  }

  // Avpair methods
  async avpairAddAvpair(data?: FreeradiusAvpairAddAvpairRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusAvpairAddAvpairResponse>> {
    return this.client.post(`${this.basePath}/avpair/add_avpair`, data, config);
  }

  async avpairDelAvpair(uuid: string, data?: FreeradiusAvpairDelAvpairRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusAvpairDelAvpairResponse>> {
    return this.client.post(`${this.basePath}/avpair/del_avpair/${uuid}`, data, config);
  }

  async avpairGet(config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusAvpairGetResponse>> {
    return this.client.get(`${this.basePath}/avpair/get`, config);
  }

  async avpairGetAvpair(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusAvpairGetAvpairResponse>> {
    return this.client.get(`${this.basePath}/avpair/get_avpair/${uuid}`, config);
  }

  async avpairSet(data?: FreeradiusAvpairSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusAvpairSetResponse>> {
    return this.client.post(`${this.basePath}/avpair/set`, data, config);
  }

  async avpairSetAvpair(uuid: string, data?: FreeradiusAvpairSetAvpairRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusAvpairSetAvpairResponse>> {
    return this.client.post(`${this.basePath}/avpair/set_avpair/${uuid}`, data, config);
  }

  async avpairToggleAvpair(uuid: string, data?: FreeradiusAvpairToggleAvpairRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusAvpairToggleAvpairResponse>> {
    return this.client.post(`${this.basePath}/avpair/toggle_avpair/${uuid}`, data, config);
  }


  // Client methods
  async clientAddClient(data?: FreeradiusClientAddClientRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusClientAddClientResponse>> {
    return this.client.post(`${this.basePath}/client/add_client`, data, config);
  }

  async clientDelClient(uuid: string, data?: FreeradiusClientDelClientRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusClientDelClientResponse>> {
    return this.client.post(`${this.basePath}/client/del_client/${uuid}`, data, config);
  }

  async clientGet(config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusClientGetResponse>> {
    return this.client.get(`${this.basePath}/client/get`, config);
  }

  async clientGetClient(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusClientGetClientResponse>> {
    return this.client.get(`${this.basePath}/client/get_client/${uuid}`, config);
  }

  async clientSearchClient(config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusClientSearchClientResponse>> {
    return this.client.get(`${this.basePath}/client/search_client`, config);
  }

  async clientSet(data?: FreeradiusClientSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusClientSetResponse>> {
    return this.client.post(`${this.basePath}/client/set`, data, config);
  }

  async clientSetClient(uuid: string, data?: FreeradiusClientSetClientRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusClientSetClientResponse>> {
    return this.client.post(`${this.basePath}/client/set_client/${uuid}`, data, config);
  }

  async clientToggleClient(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusClientToggleClientResponse>> {
    return this.client.get(`${this.basePath}/client/toggle_client/${uuid}`, config);
  }


  // Dhcp methods
  async dhcpAddDhcp(data?: FreeradiusDhcpAddDhcpRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusDhcpAddDhcpResponse>> {
    return this.client.post(`${this.basePath}/dhcp/add_dhcp`, data, config);
  }

  async dhcpDelDhcp(uuid: string, data?: FreeradiusDhcpDelDhcpRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusDhcpDelDhcpResponse>> {
    return this.client.post(`${this.basePath}/dhcp/del_dhcp/${uuid}`, data, config);
  }

  async dhcpGet(config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusDhcpGetResponse>> {
    return this.client.get(`${this.basePath}/dhcp/get`, config);
  }

  async dhcpGetDhcp(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusDhcpGetDhcpResponse>> {
    return this.client.get(`${this.basePath}/dhcp/get_dhcp/${uuid}`, config);
  }

  async dhcpSet(data?: FreeradiusDhcpSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusDhcpSetResponse>> {
    return this.client.post(`${this.basePath}/dhcp/set`, data, config);
  }

  async dhcpSetDhcp(uuid: string, data?: FreeradiusDhcpSetDhcpRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusDhcpSetDhcpResponse>> {
    return this.client.post(`${this.basePath}/dhcp/set_dhcp/${uuid}`, data, config);
  }

  async dhcpToggleDhcp(uuid: string, data?: FreeradiusDhcpToggleDhcpRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusDhcpToggleDhcpResponse>> {
    return this.client.post(`${this.basePath}/dhcp/toggle_dhcp/${uuid}`, data, config);
  }


  // Eap methods
  async eapGet(config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusEapGetResponse>> {
    return this.client.get(`${this.basePath}/eap/get`, config);
  }

  async eapSet(data?: FreeradiusEapSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusEapSetResponse>> {
    return this.client.post(`${this.basePath}/eap/set`, data, config);
  }


  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: FreeradiusGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Ldap methods
  async ldapGet(config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusLdapGetResponse>> {
    return this.client.get(`${this.basePath}/ldap/get`, config);
  }

  async ldapSet(data?: FreeradiusLdapSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusLdapSetResponse>> {
    return this.client.post(`${this.basePath}/ldap/set`, data, config);
  }


  // Lease methods
  async leaseAddLease(data?: FreeradiusLeaseAddLeaseRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusLeaseAddLeaseResponse>> {
    return this.client.post(`${this.basePath}/lease/add_lease`, data, config);
  }

  async leaseDelLease(uuid: string, data?: FreeradiusLeaseDelLeaseRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusLeaseDelLeaseResponse>> {
    return this.client.post(`${this.basePath}/lease/del_lease/${uuid}`, data, config);
  }

  async leaseGet(config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusLeaseGetResponse>> {
    return this.client.get(`${this.basePath}/lease/get`, config);
  }

  async leaseGetLease(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusLeaseGetLeaseResponse>> {
    return this.client.get(`${this.basePath}/lease/get_lease/${uuid}`, config);
  }

  async leaseSet(data?: FreeradiusLeaseSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusLeaseSetResponse>> {
    return this.client.post(`${this.basePath}/lease/set`, data, config);
  }

  async leaseSetLease(uuid: string, data?: FreeradiusLeaseSetLeaseRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusLeaseSetLeaseResponse>> {
    return this.client.post(`${this.basePath}/lease/set_lease/${uuid}`, data, config);
  }

  async leaseToggleLease(uuid: string, data?: FreeradiusLeaseToggleLeaseRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusLeaseToggleLeaseResponse>> {
    return this.client.post(`${this.basePath}/lease/toggle_lease/${uuid}`, data, config);
  }


  // Proxy methods
  async proxyAddHomeserver(data?: FreeradiusProxyAddHomeserverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxyAddHomeserverResponse>> {
    return this.client.post(`${this.basePath}/proxy/add_homeserver`, data, config);
  }

  async proxyAddHomeserverpool(data?: FreeradiusProxyAddHomeserverpoolRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxyAddHomeserverpoolResponse>> {
    return this.client.post(`${this.basePath}/proxy/add_homeserverpool`, data, config);
  }

  async proxyAddRealm(data?: FreeradiusProxyAddRealmRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxyAddRealmResponse>> {
    return this.client.post(`${this.basePath}/proxy/add_realm`, data, config);
  }

  async proxyDelHomeserver(uuid: string, data?: FreeradiusProxyDelHomeserverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxyDelHomeserverResponse>> {
    return this.client.post(`${this.basePath}/proxy/del_homeserver/${uuid}`, data, config);
  }

  async proxyDelHomeserverpool(uuid: string, data?: FreeradiusProxyDelHomeserverpoolRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxyDelHomeserverpoolResponse>> {
    return this.client.post(`${this.basePath}/proxy/del_homeserverpool/${uuid}`, data, config);
  }

  async proxyDelRealm(uuid: string, data?: FreeradiusProxyDelRealmRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxyDelRealmResponse>> {
    return this.client.post(`${this.basePath}/proxy/del_realm/${uuid}`, data, config);
  }

  async proxyGet(config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxyGetResponse>> {
    return this.client.get(`${this.basePath}/proxy/get`, config);
  }

  async proxyGetHomeserver(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxyGetHomeserverResponse>> {
    return this.client.get(`${this.basePath}/proxy/get_homeserver/${uuid}`, config);
  }

  async proxyGetHomeserverpool(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxyGetHomeserverpoolResponse>> {
    return this.client.get(`${this.basePath}/proxy/get_homeserverpool/${uuid}`, config);
  }

  async proxyGetRealm(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxyGetRealmResponse>> {
    return this.client.get(`${this.basePath}/proxy/get_realm/${uuid}`, config);
  }

  async proxySearchHomeserver(config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxySearchHomeserverResponse>> {
    return this.client.get(`${this.basePath}/proxy/search_homeserver`, config);
  }

  async proxySearchHomeserverpool(config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxySearchHomeserverpoolResponse>> {
    return this.client.get(`${this.basePath}/proxy/search_homeserverpool`, config);
  }

  async proxySearchRealm(config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxySearchRealmResponse>> {
    return this.client.get(`${this.basePath}/proxy/search_realm`, config);
  }

  async proxySet(data?: FreeradiusProxySetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxySetResponse>> {
    return this.client.post(`${this.basePath}/proxy/set`, data, config);
  }

  async proxySetHomeserver(uuid: string, data?: FreeradiusProxySetHomeserverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxySetHomeserverResponse>> {
    return this.client.post(`${this.basePath}/proxy/set_homeserver/${uuid}`, data, config);
  }

  async proxySetHomeserverpool(uuid: string, data?: FreeradiusProxySetHomeserverpoolRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxySetHomeserverpoolResponse>> {
    return this.client.post(`${this.basePath}/proxy/set_homeserverpool/${uuid}`, data, config);
  }

  async proxySetRealm(uuid: string, data?: FreeradiusProxySetRealmRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxySetRealmResponse>> {
    return this.client.post(`${this.basePath}/proxy/set_realm/${uuid}`, data, config);
  }

  async proxyToggleHomeserver(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxyToggleHomeserverResponse>> {
    return this.client.get(`${this.basePath}/proxy/toggle_homeserver/${uuid}`, config);
  }

  async proxyToggleHomeserverpool(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxyToggleHomeserverpoolResponse>> {
    return this.client.get(`${this.basePath}/proxy/toggle_homeserverpool/${uuid}`, config);
  }

  async proxyToggleRealm(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusProxyToggleRealmResponse>> {
    return this.client.get(`${this.basePath}/proxy/toggle_realm/${uuid}`, config);
  }


  // Service methods
  async serviceReconfigure(data?: FreeradiusServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: FreeradiusServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: FreeradiusServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: FreeradiusServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // User methods
  async userAddUser(data?: FreeradiusUserAddUserRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusUserAddUserResponse>> {
    return this.client.post(`${this.basePath}/user/add_user`, data, config);
  }

  async userDelUser(uuid: string, data?: FreeradiusUserDelUserRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusUserDelUserResponse>> {
    return this.client.post(`${this.basePath}/user/del_user/${uuid}`, data, config);
  }

  async userGet(config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusUserGetResponse>> {
    return this.client.get(`${this.basePath}/user/get`, config);
  }

  async userGetUser(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusUserGetUserResponse>> {
    return this.client.get(`${this.basePath}/user/get_user/${uuid}`, config);
  }

  async userSearchUser(config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusUserSearchUserResponse>> {
    return this.client.get(`${this.basePath}/user/search_user`, config);
  }

  async userSet(data?: FreeradiusUserSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusUserSetResponse>> {
    return this.client.post(`${this.basePath}/user/set`, data, config);
  }

  async userSetUser(uuid: string, data?: FreeradiusUserSetUserRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusUserSetUserResponse>> {
    return this.client.post(`${this.basePath}/user/set_user/${uuid}`, data, config);
  }

  async userToggleUser(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FreeradiusUserToggleUserResponse>> {
    return this.client.get(`${this.basePath}/user/toggle_user/${uuid}`, config);
  }

}
