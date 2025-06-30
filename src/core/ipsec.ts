import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Connections methods
  async connectionsAddChild(data?: IpsecConnectionsAddChildRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsAddChildResponse>> {
    return this.http.post(`/api/ipsec/connections/add_child`, data, config);
  }

  async connectionsAddConnection(data?: IpsecConnectionsAddConnectionRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsAddConnectionResponse>> {
    return this.http.post(`/api/ipsec/connections/add_connection`, data, config);
  }

  async connectionsAddLocal(data?: IpsecConnectionsAddLocalRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsAddLocalResponse>> {
    return this.http.post(`/api/ipsec/connections/add_local`, data, config);
  }

  async connectionsAddRemote(data?: IpsecConnectionsAddRemoteRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsAddRemoteResponse>> {
    return this.http.post(`/api/ipsec/connections/add_remote`, data, config);
  }

  async connectionsConnectionExists(uuid: string, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsConnectionExistsResponse>> {
    return this.http.get(`/api/ipsec/connections/connection_exists/${uuid}`, config);
  }

  async connectionsDelChild(uuid: string, data?: IpsecConnectionsDelChildRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsDelChildResponse>> {
    return this.http.post(`/api/ipsec/connections/del_child/${uuid}`, data, config);
  }

  async connectionsDelConnection(uuid: string, data?: IpsecConnectionsDelConnectionRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsDelConnectionResponse>> {
    return this.http.post(`/api/ipsec/connections/del_connection/${uuid}`, data, config);
  }

  async connectionsDelLocal(uuid: string, data?: IpsecConnectionsDelLocalRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsDelLocalResponse>> {
    return this.http.post(`/api/ipsec/connections/del_local/${uuid}`, data, config);
  }

  async connectionsDelRemote(uuid: string, data?: IpsecConnectionsDelRemoteRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsDelRemoteResponse>> {
    return this.http.post(`/api/ipsec/connections/del_remote/${uuid}`, data, config);
  }

  async connectionsGet(config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsGetResponse>> {
    return this.http.get(`/api/ipsec/connections/get`, config);
  }

  async connectionsGetChild(uuid?: string, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsGetChildResponse>> {
    return this.http.get(`/api/ipsec/connections/get_child/${uuid}`, config);
  }

  async connectionsGetConnection(uuid?: string, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsGetConnectionResponse>> {
    return this.http.get(`/api/ipsec/connections/get_connection/${uuid}`, config);
  }

  async connectionsGetLocal(uuid?: string, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsGetLocalResponse>> {
    return this.http.get(`/api/ipsec/connections/get_local/${uuid}`, config);
  }

  async connectionsGetRemote(uuid?: string, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsGetRemoteResponse>> {
    return this.http.get(`/api/ipsec/connections/get_remote/${uuid}`, config);
  }

  async connectionsIsEnabled(config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsIsEnabledResponse>> {
    return this.http.get(`/api/ipsec/connections/is_enabled`, config);
  }

  async connectionsSet(data?: IpsecConnectionsSetRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsSetResponse>> {
    return this.http.post(`/api/ipsec/connections/set`, data, config);
  }

  async connectionsSetChild(uuid?: string, data?: IpsecConnectionsSetChildRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsSetChildResponse>> {
    return this.http.post(`/api/ipsec/connections/set_child/${uuid}`, data, config);
  }

  async connectionsSetConnection(uuid?: string, data?: IpsecConnectionsSetConnectionRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsSetConnectionResponse>> {
    return this.http.post(`/api/ipsec/connections/set_connection/${uuid}`, data, config);
  }

  async connectionsSetLocal(uuid?: string, data?: IpsecConnectionsSetLocalRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsSetLocalResponse>> {
    return this.http.post(`/api/ipsec/connections/set_local/${uuid}`, data, config);
  }

  async connectionsSetRemote(uuid?: string, data?: IpsecConnectionsSetRemoteRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsSetRemoteResponse>> {
    return this.http.post(`/api/ipsec/connections/set_remote/${uuid}`, data, config);
  }

  async connectionsSwanctl(config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsSwanctlResponse>> {
    return this.http.get(`/api/ipsec/connections/swanctl`, config);
  }

  async connectionsToggle(enabled?: string, data?: IpsecConnectionsToggleRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsToggleResponse>> {
    return this.http.post(`/api/ipsec/connections/toggle/${enabled}`, data, config);
  }

  async connectionsToggleChild(uuid: string, enabled?: string, data?: IpsecConnectionsToggleChildRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsToggleChildResponse>> {
    return this.http.post(`/api/ipsec/connections/toggle_child/${uuid}/${enabled}`, data, config);
  }

  async connectionsToggleConnection(uuid: string, enabled?: string, data?: IpsecConnectionsToggleConnectionRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsToggleConnectionResponse>> {
    return this.http.post(`/api/ipsec/connections/toggle_connection/${uuid}/${enabled}`, data, config);
  }

  async connectionsToggleLocal(uuid: string, enabled?: string, data?: IpsecConnectionsToggleLocalRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsToggleLocalResponse>> {
    return this.http.post(`/api/ipsec/connections/toggle_local/${uuid}/${enabled}`, data, config);
  }

  async connectionsToggleRemote(uuid: string, enabled?: string, data?: IpsecConnectionsToggleRemoteRequest, config?: RequestConfig): Promise<ApiResponse<IpsecConnectionsToggleRemoteResponse>> {
    return this.http.post(`/api/ipsec/connections/toggle_remote/${uuid}/${enabled}`, data, config);
  }


  // KeyPairs methods
  async keyPairsAddItem(data?: IpsecKeyPairsAddItemRequest, config?: RequestConfig): Promise<ApiResponse<IpsecKeyPairsAddItemResponse>> {
    return this.http.post(`/api/ipsec/key_pairs/add_item`, data, config);
  }

  async keyPairsDelItem(uuid: string, data?: IpsecKeyPairsDelItemRequest, config?: RequestConfig): Promise<ApiResponse<IpsecKeyPairsDelItemResponse>> {
    return this.http.post(`/api/ipsec/key_pairs/del_item/${uuid}`, data, config);
  }

  async keyPairsGenKeyPair(type: string, size?: string, config?: RequestConfig): Promise<ApiResponse<IpsecKeyPairsGenKeyPairResponse>> {
    return this.http.get(`/api/ipsec/key_pairs/gen_key_pair/${type}/${size}`, config);
  }

  async keyPairsGet(config?: RequestConfig): Promise<ApiResponse<IpsecKeyPairsGetResponse>> {
    return this.http.get(`/api/ipsec/key_pairs/get`, config);
  }

  async keyPairsGetItem(uuid?: string, config?: RequestConfig): Promise<ApiResponse<IpsecKeyPairsGetItemResponse>> {
    return this.http.get(`/api/ipsec/key_pairs/get_item/${uuid}`, config);
  }

  async keyPairsSet(data?: IpsecKeyPairsSetRequest, config?: RequestConfig): Promise<ApiResponse<IpsecKeyPairsSetResponse>> {
    return this.http.post(`/api/ipsec/key_pairs/set`, data, config);
  }

  async keyPairsSetItem(uuid?: string, data?: IpsecKeyPairsSetItemRequest, config?: RequestConfig): Promise<ApiResponse<IpsecKeyPairsSetItemResponse>> {
    return this.http.post(`/api/ipsec/key_pairs/set_item/${uuid}`, data, config);
  }


  // Leases methods
  async leasesPools(config?: RequestConfig): Promise<ApiResponse<IpsecLeasesPoolsResponse>> {
    return this.http.get(`/api/ipsec/leases/pools`, config);
  }

  async leasesSearch(config?: RequestConfig): Promise<ApiResponse<IpsecLeasesSearchResponse>> {
    return this.http.get(`/api/ipsec/leases/search`, config);
  }


  // LegacySubsystem methods
  async legacySubsystemApplyConfig(data?: IpsecLegacySubsystemApplyConfigRequest, config?: RequestConfig): Promise<ApiResponse<IpsecLegacySubsystemApplyConfigResponse>> {
    return this.http.post(`/api/ipsec/legacy_subsystem/apply_config`, data, config);
  }

  async legacySubsystemStatus(config?: RequestConfig): Promise<ApiResponse<IpsecLegacySubsystemStatusResponse>> {
    return this.http.get(`/api/ipsec/legacy_subsystem/status`, config);
  }


  // ManualSpd methods
  async manualSpdAdd(data?: IpsecManualSpdAddRequest, config?: RequestConfig): Promise<ApiResponse<IpsecManualSpdAddResponse>> {
    return this.http.post(`/api/ipsec/manual_spd/add`, data, config);
  }

  async manualSpdDel(uuid: string, data?: IpsecManualSpdDelRequest, config?: RequestConfig): Promise<ApiResponse<IpsecManualSpdDelResponse>> {
    return this.http.post(`/api/ipsec/manual_spd/del/${uuid}`, data, config);
  }

  async manualSpdGet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<IpsecManualSpdGetResponse>> {
    return this.http.get(`/api/ipsec/manual_spd/get/${uuid}`, config);
  }

  async manualSpdSet(uuid?: string, data?: IpsecManualSpdSetRequest, config?: RequestConfig): Promise<ApiResponse<IpsecManualSpdSetResponse>> {
    return this.http.post(`/api/ipsec/manual_spd/set/${uuid}`, data, config);
  }

  async manualSpdToggle(uuid: string, enabled?: string, data?: IpsecManualSpdToggleRequest, config?: RequestConfig): Promise<ApiResponse<IpsecManualSpdToggleResponse>> {
    return this.http.post(`/api/ipsec/manual_spd/toggle/${uuid}/${enabled}`, data, config);
  }


  // Pools methods
  async poolsAdd(data?: IpsecPoolsAddRequest, config?: RequestConfig): Promise<ApiResponse<IpsecPoolsAddResponse>> {
    return this.http.post(`/api/ipsec/pools/add`, data, config);
  }

  async poolsDel(uuid: string, data?: IpsecPoolsDelRequest, config?: RequestConfig): Promise<ApiResponse<IpsecPoolsDelResponse>> {
    return this.http.post(`/api/ipsec/pools/del/${uuid}`, data, config);
  }

  async poolsGet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<IpsecPoolsGetResponse>> {
    return this.http.get(`/api/ipsec/pools/get/${uuid}`, config);
  }

  async poolsSet(uuid?: string, data?: IpsecPoolsSetRequest, config?: RequestConfig): Promise<ApiResponse<IpsecPoolsSetResponse>> {
    return this.http.post(`/api/ipsec/pools/set/${uuid}`, data, config);
  }

  async poolsToggle(uuid: string, enabled?: string, data?: IpsecPoolsToggleRequest, config?: RequestConfig): Promise<ApiResponse<IpsecPoolsToggleResponse>> {
    return this.http.post(`/api/ipsec/pools/toggle/${uuid}/${enabled}`, data, config);
  }


  // PreSharedKeys methods
  async preSharedKeysAddItem(data?: IpsecPreSharedKeysAddItemRequest, config?: RequestConfig): Promise<ApiResponse<IpsecPreSharedKeysAddItemResponse>> {
    return this.http.post(`/api/ipsec/pre_shared_keys/add_item`, data, config);
  }

  async preSharedKeysDelItem(uuid: string, data?: IpsecPreSharedKeysDelItemRequest, config?: RequestConfig): Promise<ApiResponse<IpsecPreSharedKeysDelItemResponse>> {
    return this.http.post(`/api/ipsec/pre_shared_keys/del_item/${uuid}`, data, config);
  }

  async preSharedKeysGet(config?: RequestConfig): Promise<ApiResponse<IpsecPreSharedKeysGetResponse>> {
    return this.http.get(`/api/ipsec/pre_shared_keys/get`, config);
  }

  async preSharedKeysGetItem(uuid?: string, config?: RequestConfig): Promise<ApiResponse<IpsecPreSharedKeysGetItemResponse>> {
    return this.http.get(`/api/ipsec/pre_shared_keys/get_item/${uuid}`, config);
  }

  async preSharedKeysSet(data?: IpsecPreSharedKeysSetRequest, config?: RequestConfig): Promise<ApiResponse<IpsecPreSharedKeysSetResponse>> {
    return this.http.post(`/api/ipsec/pre_shared_keys/set`, data, config);
  }

  async preSharedKeysSetItem(uuid?: string, data?: IpsecPreSharedKeysSetItemRequest, config?: RequestConfig): Promise<ApiResponse<IpsecPreSharedKeysSetItemResponse>> {
    return this.http.post(`/api/ipsec/pre_shared_keys/set_item/${uuid}`, data, config);
  }


  // Sad methods
  async sadDelete(id: string, data?: IpsecSadDeleteRequest, config?: RequestConfig): Promise<ApiResponse<IpsecSadDeleteResponse>> {
    return this.http.post(`/api/ipsec/sad/delete/${id}`, data, config);
  }

  async sadSearch(config?: RequestConfig): Promise<ApiResponse<IpsecSadSearchResponse>> {
    return this.http.get(`/api/ipsec/sad/search`, config);
  }


  // Service methods
  async serviceReconfigure(data?: IpsecServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<IpsecServiceReconfigureResponse>> {
    return this.http.post(`/api/ipsec/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: IpsecServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<IpsecServiceRestartResponse>> {
    return this.http.post(`/api/ipsec/service/restart`, data, config);
  }

  async serviceStart(data?: IpsecServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<IpsecServiceStartResponse>> {
    return this.http.post(`/api/ipsec/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<IpsecServiceStatusResponse>> {
    return this.http.get(`/api/ipsec/service/status`, config);
  }

  async serviceStop(data?: IpsecServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<IpsecServiceStopResponse>> {
    return this.http.post(`/api/ipsec/service/stop`, data, config);
  }


  // Sessions methods
  async sessionsConnect(id: string, data?: IpsecSessionsConnectRequest, config?: RequestConfig): Promise<ApiResponse<IpsecSessionsConnectResponse>> {
    return this.http.post(`/api/ipsec/sessions/connect/${id}`, data, config);
  }

  async sessionsDisconnect(id: string, data?: IpsecSessionsDisconnectRequest, config?: RequestConfig): Promise<ApiResponse<IpsecSessionsDisconnectResponse>> {
    return this.http.post(`/api/ipsec/sessions/disconnect/${id}`, data, config);
  }

  async sessionsSearchPhase1(config?: RequestConfig): Promise<ApiResponse<IpsecSessionsSearchPhase1Response>> {
    return this.http.get(`/api/ipsec/sessions/search_phase1`, config);
  }

  async sessionsSearchPhase2(config?: RequestConfig): Promise<ApiResponse<IpsecSessionsSearchPhase2Response>> {
    return this.http.get(`/api/ipsec/sessions/search_phase2`, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<IpsecSettingsGetResponse>> {
    return this.http.get(`/api/ipsec/settings/get`, config);
  }

  async settingsSet(data?: IpsecSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<IpsecSettingsSetResponse>> {
    return this.http.post(`/api/ipsec/settings/set`, data, config);
  }


  // Spd methods
  async spdDelete(id: string, data?: IpsecSpdDeleteRequest, config?: RequestConfig): Promise<ApiResponse<IpsecSpdDeleteResponse>> {
    return this.http.post(`/api/ipsec/spd/delete/${id}`, data, config);
  }

  async spdSearch(config?: RequestConfig): Promise<ApiResponse<IpsecSpdSearchResponse>> {
    return this.http.get(`/api/ipsec/spd/search`, config);
  }


  // Tunnel methods
  async tunnelDelPhase1(ikeid: string, data?: IpsecTunnelDelPhase1Request, config?: RequestConfig): Promise<ApiResponse<IpsecTunnelDelPhase1Response>> {
    return this.http.post(`/api/ipsec/tunnel/del_phase1/${ikeid}`, data, config);
  }

  async tunnelDelPhase2(seqid: string, data?: IpsecTunnelDelPhase2Request, config?: RequestConfig): Promise<ApiResponse<IpsecTunnelDelPhase2Response>> {
    return this.http.post(`/api/ipsec/tunnel/del_phase2/${seqid}`, data, config);
  }

  async tunnelSearchPhase1(config?: RequestConfig): Promise<ApiResponse<IpsecTunnelSearchPhase1Response>> {
    return this.http.get(`/api/ipsec/tunnel/search_phase1`, config);
  }

  async tunnelSearchPhase2(config?: RequestConfig): Promise<ApiResponse<IpsecTunnelSearchPhase2Response>> {
    return this.http.get(`/api/ipsec/tunnel/search_phase2`, config);
  }

  async tunnelToggle(enabled?: string, data?: IpsecTunnelToggleRequest, config?: RequestConfig): Promise<ApiResponse<IpsecTunnelToggleResponse>> {
    return this.http.post(`/api/ipsec/tunnel/toggle/${enabled}`, data, config);
  }

  async tunnelTogglePhase1(ikeid: string, enabled?: string, data?: IpsecTunnelTogglePhase1Request, config?: RequestConfig): Promise<ApiResponse<IpsecTunnelTogglePhase1Response>> {
    return this.http.post(`/api/ipsec/tunnel/toggle_phase1/${ikeid}/${enabled}`, data, config);
  }

  async tunnelTogglePhase2(seqid: string, enabled?: string, data?: IpsecTunnelTogglePhase2Request, config?: RequestConfig): Promise<ApiResponse<IpsecTunnelTogglePhase2Response>> {
    return this.http.post(`/api/ipsec/tunnel/toggle_phase2/${seqid}/${enabled}`, data, config);
  }


  // Vti methods
  async vtiAdd(data?: IpsecVtiAddRequest, config?: RequestConfig): Promise<ApiResponse<IpsecVtiAddResponse>> {
    return this.http.post(`/api/ipsec/vti/add`, data, config);
  }

  async vtiDel(uuid: string, data?: IpsecVtiDelRequest, config?: RequestConfig): Promise<ApiResponse<IpsecVtiDelResponse>> {
    return this.http.post(`/api/ipsec/vti/del/${uuid}`, data, config);
  }

  async vtiGet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<IpsecVtiGetResponse>> {
    return this.http.get(`/api/ipsec/vti/get/${uuid}`, config);
  }

  async vtiSet(uuid?: string, data?: IpsecVtiSetRequest, config?: RequestConfig): Promise<ApiResponse<IpsecVtiSetResponse>> {
    return this.http.post(`/api/ipsec/vti/set/${uuid}`, data, config);
  }

  async vtiToggle(uuid: string, enabled?: string, data?: IpsecVtiToggleRequest, config?: RequestConfig): Promise<ApiResponse<IpsecVtiToggleResponse>> {
    return this.http.post(`/api/ipsec/vti/toggle/${uuid}/${enabled}`, data, config);
  }

}
