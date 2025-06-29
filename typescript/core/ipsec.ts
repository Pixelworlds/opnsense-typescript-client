import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Ipsec module

// Model field types

// Connections types
export interface IpsecConnectionsAddChildRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecConnectionsAddChildResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsAddConnectionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecConnectionsAddConnectionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsAddLocalRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecConnectionsAddLocalResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsAddRemoteRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecConnectionsAddRemoteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsConnectionExistsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsDelChildRequest {
  uuid: string;
}

export interface IpsecConnectionsDelChildResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsDelConnectionRequest {
  uuid: string;
}

export interface IpsecConnectionsDelConnectionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsDelLocalRequest {
  uuid: string;
}

export interface IpsecConnectionsDelLocalResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsDelRemoteRequest {
  uuid: string;
}

export interface IpsecConnectionsDelRemoteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsGetChildResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsGetConnectionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsGetLocalResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsGetRemoteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsIsEnabledResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecConnectionsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsSetChildRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecConnectionsSetChildResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsSetConnectionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecConnectionsSetConnectionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsSetLocalRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecConnectionsSetLocalResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsSetRemoteRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecConnectionsSetRemoteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsSwanctlResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsToggleRequest {
  enabled?: boolean;
}

export interface IpsecConnectionsToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsToggleChildRequest {
  enabled?: boolean;
}

export interface IpsecConnectionsToggleChildResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsToggleConnectionRequest {
  enabled?: boolean;
}

export interface IpsecConnectionsToggleConnectionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsToggleLocalRequest {
  enabled?: boolean;
}

export interface IpsecConnectionsToggleLocalResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecConnectionsToggleRemoteRequest {
  enabled?: boolean;
}

export interface IpsecConnectionsToggleRemoteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// KeyPairs types
export interface IpsecKeyPairsAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecKeyPairsAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecKeyPairsDelItemRequest {
  uuid: string;
}

export interface IpsecKeyPairsDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecKeyPairsGenKeyPairResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecKeyPairsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecKeyPairsGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecKeyPairsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecKeyPairsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecKeyPairsSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecKeyPairsSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Leases types
export interface IpsecLeasesPoolsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecLeasesSearchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// LegacySubsystem types
export interface IpsecLegacySubsystemApplyConfigRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecLegacySubsystemApplyConfigResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecLegacySubsystemStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// ManualSpd types
export interface IpsecManualSpdAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecManualSpdAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecManualSpdDelRequest {
  uuid: string;
}

export interface IpsecManualSpdDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecManualSpdGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecManualSpdSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecManualSpdSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecManualSpdToggleRequest {
  enabled?: boolean;
}

export interface IpsecManualSpdToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Pools types
export interface IpsecPoolsAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecPoolsAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecPoolsDelRequest {
  uuid: string;
}

export interface IpsecPoolsDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecPoolsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecPoolsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecPoolsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecPoolsToggleRequest {
  enabled?: boolean;
}

export interface IpsecPoolsToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// PreSharedKeys types
export interface IpsecPreSharedKeysAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecPreSharedKeysAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecPreSharedKeysDelItemRequest {
  uuid: string;
}

export interface IpsecPreSharedKeysDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecPreSharedKeysGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecPreSharedKeysGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecPreSharedKeysSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecPreSharedKeysSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecPreSharedKeysSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecPreSharedKeysSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Sad types
export interface IpsecSadDeleteRequest {
  uuid: string;
}

export interface IpsecSadDeleteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecSadSearchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface IpsecServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Sessions types
export interface IpsecSessionsConnectRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecSessionsConnectResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecSessionsDisconnectRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecSessionsDisconnectResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecSessionsSearchPhase1Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecSessionsSearchPhase2Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface IpsecSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Spd types
export interface IpsecSpdDeleteRequest {
  uuid: string;
}

export interface IpsecSpdDeleteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecSpdSearchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Tunnel types
export interface IpsecTunnelDelPhase1Request {
  uuid: string;
}

export interface IpsecTunnelDelPhase1Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecTunnelDelPhase2Request {
  uuid: string;
}

export interface IpsecTunnelDelPhase2Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecTunnelSearchPhase1Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecTunnelSearchPhase2Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecTunnelToggleRequest {
  enabled?: boolean;
}

export interface IpsecTunnelToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecTunnelTogglePhase1Request {
  enabled?: boolean;
}

export interface IpsecTunnelTogglePhase1Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecTunnelTogglePhase2Request {
  enabled?: boolean;
}

export interface IpsecTunnelTogglePhase2Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Vti types
export interface IpsecVtiAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecVtiAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecVtiDelRequest {
  uuid: string;
}

export interface IpsecVtiDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecVtiGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecVtiSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IpsecVtiSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IpsecVtiToggleRequest {
  enabled?: boolean;
}

export interface IpsecVtiToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface IpsecLocal {
}

export interface IpsecRemote {
}

export interface IpsecChild {
}

export interface IpsecPool {
}

export class IpsecApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/ipsec';
  }

  // Connections methods
  async connectionsAddChild(data?: IpsecConnectionsAddChildRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsAddChildResponse>> {
    return this.client.post(`${this.basePath}/connections/add_child`, data, config);
  }

  async connectionsAddConnection(data?: IpsecConnectionsAddConnectionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsAddConnectionResponse>> {
    return this.client.post(`${this.basePath}/connections/add_connection`, data, config);
  }

  async connectionsAddLocal(data?: IpsecConnectionsAddLocalRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsAddLocalResponse>> {
    return this.client.post(`${this.basePath}/connections/add_local`, data, config);
  }

  async connectionsAddRemote(data?: IpsecConnectionsAddRemoteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsAddRemoteResponse>> {
    return this.client.post(`${this.basePath}/connections/add_remote`, data, config);
  }

  async connectionsConnectionExists(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsConnectionExistsResponse>> {
    return this.client.get(`${this.basePath}/connections/connection_exists/${uuid}`, config);
  }

  async connectionsDelChild(uuid: string, data?: IpsecConnectionsDelChildRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsDelChildResponse>> {
    return this.client.post(`${this.basePath}/connections/del_child/${uuid}`, data, config);
  }

  async connectionsDelConnection(uuid: string, data?: IpsecConnectionsDelConnectionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsDelConnectionResponse>> {
    return this.client.post(`${this.basePath}/connections/del_connection/${uuid}`, data, config);
  }

  async connectionsDelLocal(uuid: string, data?: IpsecConnectionsDelLocalRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsDelLocalResponse>> {
    return this.client.post(`${this.basePath}/connections/del_local/${uuid}`, data, config);
  }

  async connectionsDelRemote(uuid: string, data?: IpsecConnectionsDelRemoteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsDelRemoteResponse>> {
    return this.client.post(`${this.basePath}/connections/del_remote/${uuid}`, data, config);
  }

  async connectionsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsGetResponse>> {
    return this.client.get(`${this.basePath}/connections/get`, config);
  }

  async connectionsGetChild(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsGetChildResponse>> {
    return this.client.get(`${this.basePath}/connections/get_child/${uuid}`, config);
  }

  async connectionsGetConnection(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsGetConnectionResponse>> {
    return this.client.get(`${this.basePath}/connections/get_connection/${uuid}`, config);
  }

  async connectionsGetLocal(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsGetLocalResponse>> {
    return this.client.get(`${this.basePath}/connections/get_local/${uuid}`, config);
  }

  async connectionsGetRemote(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsGetRemoteResponse>> {
    return this.client.get(`${this.basePath}/connections/get_remote/${uuid}`, config);
  }

  async connectionsIsEnabled(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsIsEnabledResponse>> {
    return this.client.get(`${this.basePath}/connections/is_enabled`, config);
  }

  async connectionsSet(data?: IpsecConnectionsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsSetResponse>> {
    return this.client.post(`${this.basePath}/connections/set`, data, config);
  }

  async connectionsSetChild(uuid?: string, data?: IpsecConnectionsSetChildRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsSetChildResponse>> {
    return this.client.post(`${this.basePath}/connections/set_child/${uuid}`, data, config);
  }

  async connectionsSetConnection(uuid?: string, data?: IpsecConnectionsSetConnectionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsSetConnectionResponse>> {
    return this.client.post(`${this.basePath}/connections/set_connection/${uuid}`, data, config);
  }

  async connectionsSetLocal(uuid?: string, data?: IpsecConnectionsSetLocalRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsSetLocalResponse>> {
    return this.client.post(`${this.basePath}/connections/set_local/${uuid}`, data, config);
  }

  async connectionsSetRemote(uuid?: string, data?: IpsecConnectionsSetRemoteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsSetRemoteResponse>> {
    return this.client.post(`${this.basePath}/connections/set_remote/${uuid}`, data, config);
  }

  async connectionsSwanctl(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsSwanctlResponse>> {
    return this.client.get(`${this.basePath}/connections/swanctl`, config);
  }

  async connectionsToggle(enabled?: string, data?: IpsecConnectionsToggleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsToggleResponse>> {
    return this.client.post(`${this.basePath}/connections/toggle/${enabled}`, data, config);
  }

  async connectionsToggleChild(uuid: string, enabled?: string, data?: IpsecConnectionsToggleChildRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsToggleChildResponse>> {
    return this.client.post(`${this.basePath}/connections/toggle_child/${uuid}/${enabled}`, data, config);
  }

  async connectionsToggleConnection(uuid: string, enabled?: string, data?: IpsecConnectionsToggleConnectionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsToggleConnectionResponse>> {
    return this.client.post(`${this.basePath}/connections/toggle_connection/${uuid}/${enabled}`, data, config);
  }

  async connectionsToggleLocal(uuid: string, enabled?: string, data?: IpsecConnectionsToggleLocalRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsToggleLocalResponse>> {
    return this.client.post(`${this.basePath}/connections/toggle_local/${uuid}/${enabled}`, data, config);
  }

  async connectionsToggleRemote(uuid: string, enabled?: string, data?: IpsecConnectionsToggleRemoteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecConnectionsToggleRemoteResponse>> {
    return this.client.post(`${this.basePath}/connections/toggle_remote/${uuid}/${enabled}`, data, config);
  }


  // KeyPairs methods
  async keyPairsAddItem(data?: IpsecKeyPairsAddItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecKeyPairsAddItemResponse>> {
    return this.client.post(`${this.basePath}/key_pairs/add_item`, data, config);
  }

  async keyPairsDelItem(uuid: string, data?: IpsecKeyPairsDelItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecKeyPairsDelItemResponse>> {
    return this.client.post(`${this.basePath}/key_pairs/del_item/${uuid}`, data, config);
  }

  async keyPairsGenKeyPair(type: string, size?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecKeyPairsGenKeyPairResponse>> {
    return this.client.get(`${this.basePath}/key_pairs/gen_key_pair/${type}/${size}`, config);
  }

  async keyPairsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecKeyPairsGetResponse>> {
    return this.client.get(`${this.basePath}/key_pairs/get`, config);
  }

  async keyPairsGetItem(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecKeyPairsGetItemResponse>> {
    return this.client.get(`${this.basePath}/key_pairs/get_item/${uuid}`, config);
  }

  async keyPairsSet(data?: IpsecKeyPairsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecKeyPairsSetResponse>> {
    return this.client.post(`${this.basePath}/key_pairs/set`, data, config);
  }

  async keyPairsSetItem(uuid?: string, data?: IpsecKeyPairsSetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecKeyPairsSetItemResponse>> {
    return this.client.post(`${this.basePath}/key_pairs/set_item/${uuid}`, data, config);
  }


  // Leases methods
  async leasesPools(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecLeasesPoolsResponse>> {
    return this.client.get(`${this.basePath}/leases/pools`, config);
  }

  async leasesSearch(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecLeasesSearchResponse>> {
    return this.client.get(`${this.basePath}/leases/search`, config);
  }


  // LegacySubsystem methods
  async legacySubsystemApplyConfig(data?: IpsecLegacySubsystemApplyConfigRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecLegacySubsystemApplyConfigResponse>> {
    return this.client.post(`${this.basePath}/legacy_subsystem/apply_config`, data, config);
  }

  async legacySubsystemStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecLegacySubsystemStatusResponse>> {
    return this.client.get(`${this.basePath}/legacy_subsystem/status`, config);
  }


  // ManualSpd methods
  async manualSpdAdd(data?: IpsecManualSpdAddRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecManualSpdAddResponse>> {
    return this.client.post(`${this.basePath}/manual_spd/add`, data, config);
  }

  async manualSpdDel(uuid: string, data?: IpsecManualSpdDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecManualSpdDelResponse>> {
    return this.client.post(`${this.basePath}/manual_spd/del/${uuid}`, data, config);
  }

  async manualSpdGet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecManualSpdGetResponse>> {
    return this.client.get(`${this.basePath}/manual_spd/get/${uuid}`, config);
  }

  async manualSpdSet(uuid?: string, data?: IpsecManualSpdSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecManualSpdSetResponse>> {
    return this.client.post(`${this.basePath}/manual_spd/set/${uuid}`, data, config);
  }

  async manualSpdToggle(uuid: string, enabled?: string, data?: IpsecManualSpdToggleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecManualSpdToggleResponse>> {
    return this.client.post(`${this.basePath}/manual_spd/toggle/${uuid}/${enabled}`, data, config);
  }


  // Pools methods
  async poolsAdd(data?: IpsecPoolsAddRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecPoolsAddResponse>> {
    return this.client.post(`${this.basePath}/pools/add`, data, config);
  }

  async poolsDel(uuid: string, data?: IpsecPoolsDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecPoolsDelResponse>> {
    return this.client.post(`${this.basePath}/pools/del/${uuid}`, data, config);
  }

  async poolsGet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecPoolsGetResponse>> {
    return this.client.get(`${this.basePath}/pools/get/${uuid}`, config);
  }

  async poolsSet(uuid?: string, data?: IpsecPoolsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecPoolsSetResponse>> {
    return this.client.post(`${this.basePath}/pools/set/${uuid}`, data, config);
  }

  async poolsToggle(uuid: string, enabled?: string, data?: IpsecPoolsToggleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecPoolsToggleResponse>> {
    return this.client.post(`${this.basePath}/pools/toggle/${uuid}/${enabled}`, data, config);
  }


  // PreSharedKeys methods
  async preSharedKeysAddItem(data?: IpsecPreSharedKeysAddItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecPreSharedKeysAddItemResponse>> {
    return this.client.post(`${this.basePath}/pre_shared_keys/add_item`, data, config);
  }

  async preSharedKeysDelItem(uuid: string, data?: IpsecPreSharedKeysDelItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecPreSharedKeysDelItemResponse>> {
    return this.client.post(`${this.basePath}/pre_shared_keys/del_item/${uuid}`, data, config);
  }

  async preSharedKeysGet(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecPreSharedKeysGetResponse>> {
    return this.client.get(`${this.basePath}/pre_shared_keys/get`, config);
  }

  async preSharedKeysGetItem(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecPreSharedKeysGetItemResponse>> {
    return this.client.get(`${this.basePath}/pre_shared_keys/get_item/${uuid}`, config);
  }

  async preSharedKeysSet(data?: IpsecPreSharedKeysSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecPreSharedKeysSetResponse>> {
    return this.client.post(`${this.basePath}/pre_shared_keys/set`, data, config);
  }

  async preSharedKeysSetItem(uuid?: string, data?: IpsecPreSharedKeysSetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecPreSharedKeysSetItemResponse>> {
    return this.client.post(`${this.basePath}/pre_shared_keys/set_item/${uuid}`, data, config);
  }


  // Sad methods
  async sadDelete(id: string, data?: IpsecSadDeleteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecSadDeleteResponse>> {
    return this.client.post(`${this.basePath}/sad/delete/${id}`, data, config);
  }

  async sadSearch(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecSadSearchResponse>> {
    return this.client.get(`${this.basePath}/sad/search`, config);
  }


  // Service methods
  async serviceReconfigure(data?: IpsecServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: IpsecServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: IpsecServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: IpsecServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Sessions methods
  async sessionsConnect(id: string, data?: IpsecSessionsConnectRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecSessionsConnectResponse>> {
    return this.client.post(`${this.basePath}/sessions/connect/${id}`, data, config);
  }

  async sessionsDisconnect(id: string, data?: IpsecSessionsDisconnectRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecSessionsDisconnectResponse>> {
    return this.client.post(`${this.basePath}/sessions/disconnect/${id}`, data, config);
  }

  async sessionsSearchPhase1(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecSessionsSearchPhase1Response>> {
    return this.client.get(`${this.basePath}/sessions/search_phase1`, config);
  }

  async sessionsSearchPhase2(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecSessionsSearchPhase2Response>> {
    return this.client.get(`${this.basePath}/sessions/search_phase2`, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsSet(data?: IpsecSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }


  // Spd methods
  async spdDelete(id: string, data?: IpsecSpdDeleteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecSpdDeleteResponse>> {
    return this.client.post(`${this.basePath}/spd/delete/${id}`, data, config);
  }

  async spdSearch(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecSpdSearchResponse>> {
    return this.client.get(`${this.basePath}/spd/search`, config);
  }


  // Tunnel methods
  async tunnelDelPhase1(ikeid: string, data?: IpsecTunnelDelPhase1Request, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecTunnelDelPhase1Response>> {
    return this.client.post(`${this.basePath}/tunnel/del_phase1/${ikeid}`, data, config);
  }

  async tunnelDelPhase2(seqid: string, data?: IpsecTunnelDelPhase2Request, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecTunnelDelPhase2Response>> {
    return this.client.post(`${this.basePath}/tunnel/del_phase2/${seqid}`, data, config);
  }

  async tunnelSearchPhase1(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecTunnelSearchPhase1Response>> {
    return this.client.get(`${this.basePath}/tunnel/search_phase1`, config);
  }

  async tunnelSearchPhase2(config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecTunnelSearchPhase2Response>> {
    return this.client.get(`${this.basePath}/tunnel/search_phase2`, config);
  }

  async tunnelToggle(enabled?: string, data?: IpsecTunnelToggleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecTunnelToggleResponse>> {
    return this.client.post(`${this.basePath}/tunnel/toggle/${enabled}`, data, config);
  }

  async tunnelTogglePhase1(ikeid: string, enabled?: string, data?: IpsecTunnelTogglePhase1Request, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecTunnelTogglePhase1Response>> {
    return this.client.post(`${this.basePath}/tunnel/toggle_phase1/${ikeid}/${enabled}`, data, config);
  }

  async tunnelTogglePhase2(seqid: string, enabled?: string, data?: IpsecTunnelTogglePhase2Request, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecTunnelTogglePhase2Response>> {
    return this.client.post(`${this.basePath}/tunnel/toggle_phase2/${seqid}/${enabled}`, data, config);
  }


  // Vti methods
  async vtiAdd(data?: IpsecVtiAddRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecVtiAddResponse>> {
    return this.client.post(`${this.basePath}/vti/add`, data, config);
  }

  async vtiDel(uuid: string, data?: IpsecVtiDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecVtiDelResponse>> {
    return this.client.post(`${this.basePath}/vti/del/${uuid}`, data, config);
  }

  async vtiGet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecVtiGetResponse>> {
    return this.client.get(`${this.basePath}/vti/get/${uuid}`, config);
  }

  async vtiSet(uuid?: string, data?: IpsecVtiSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecVtiSetResponse>> {
    return this.client.post(`${this.basePath}/vti/set/${uuid}`, data, config);
  }

  async vtiToggle(uuid: string, enabled?: string, data?: IpsecVtiToggleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<IpsecVtiToggleResponse>> {
    return this.client.post(`${this.basePath}/vti/toggle/${uuid}/${enabled}`, data, config);
  }

}
