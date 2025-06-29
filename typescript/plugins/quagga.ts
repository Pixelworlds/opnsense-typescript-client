import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Quagga module

// Model field types

// Bfd types
export interface QuaggaBfdAddNeighborRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBfdAddNeighborResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBfdDelNeighborRequest {
  uuid: string;
}

export interface QuaggaBfdDelNeighborResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBfdGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBfdGetNeighborResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBfdSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBfdSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBfdSetNeighborRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBfdSetNeighborResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBfdToggleNeighborRequest {
  enabled?: boolean;
}

export interface QuaggaBfdToggleNeighborResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Bgp types
export interface QuaggaBgpAddAspathRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBgpAddAspathResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpAddCommunitylistRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBgpAddCommunitylistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpAddNeighborRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBgpAddNeighborResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpAddPeergroupRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBgpAddPeergroupResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpAddPrefixlistRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBgpAddPrefixlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpAddRedistributionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBgpAddRedistributionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpAddRoutemapRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBgpAddRoutemapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpDelAspathRequest {
  uuid: string;
}

export interface QuaggaBgpDelAspathResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpDelCommunitylistRequest {
  uuid: string;
}

export interface QuaggaBgpDelCommunitylistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpDelNeighborRequest {
  uuid: string;
}

export interface QuaggaBgpDelNeighborResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpDelPeergroupRequest {
  uuid: string;
}

export interface QuaggaBgpDelPeergroupResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpDelPrefixlistRequest {
  uuid: string;
}

export interface QuaggaBgpDelPrefixlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpDelRedistributionRequest {
  uuid: string;
}

export interface QuaggaBgpDelRedistributionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpDelRoutemapRequest {
  uuid: string;
}

export interface QuaggaBgpDelRoutemapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpGetAspathResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpGetCommunitylistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpGetNeighborResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpGetPeergroupResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpGetPrefixlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpGetRedistributionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpGetRoutemapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBgpSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpSetAspathRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBgpSetAspathResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpSetCommunitylistRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBgpSetCommunitylistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpSetNeighborRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBgpSetNeighborResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpSetPeergroupRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBgpSetPeergroupResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpSetPrefixlistRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBgpSetPrefixlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpSetRedistributionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBgpSetRedistributionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpSetRoutemapRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaBgpSetRoutemapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpToggleAspathRequest {
  enabled?: boolean;
}

export interface QuaggaBgpToggleAspathResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpToggleCommunitylistRequest {
  enabled?: boolean;
}

export interface QuaggaBgpToggleCommunitylistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpToggleNeighborRequest {
  enabled?: boolean;
}

export interface QuaggaBgpToggleNeighborResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpTogglePeergroupRequest {
  enabled?: boolean;
}

export interface QuaggaBgpTogglePeergroupResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpTogglePrefixlistRequest {
  enabled?: boolean;
}

export interface QuaggaBgpTogglePrefixlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpToggleRedistributionRequest {
  enabled?: boolean;
}

export interface QuaggaBgpToggleRedistributionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaBgpToggleRoutemapRequest {
  enabled?: boolean;
}

export interface QuaggaBgpToggleRoutemapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Diagnostics types
export interface QuaggaDiagnosticsBfdcountersResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsBfdneighborsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsBfdsummaryResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsBgpneighborsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsBgpsummaryResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsGeneralrunningconfigResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsOspfdatabaseResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsOspfinterfaceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsOspfoverviewResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsOspfv3interfaceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsOspfv3overviewResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsSearchBgproute4Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsSearchBgproute6Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsSearchGeneralroute4Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsSearchGeneralroute6Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsSearchOspfneighborResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsSearchOspfrouteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsSearchOspfv3databaseResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaDiagnosticsSearchOspfv3routeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// General types
export interface QuaggaGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Ospf6settings types
export interface QuaggaOspf6settingsAddInterfaceRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspf6settingsAddInterfaceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsAddNetworkRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspf6settingsAddNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsAddPrefixlistRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspf6settingsAddPrefixlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsAddRedistributionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspf6settingsAddRedistributionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsAddRoutemapRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspf6settingsAddRoutemapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsDelInterfaceRequest {
  uuid: string;
}

export interface QuaggaOspf6settingsDelInterfaceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsDelNetworkRequest {
  uuid: string;
}

export interface QuaggaOspf6settingsDelNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsDelPrefixlistRequest {
  uuid: string;
}

export interface QuaggaOspf6settingsDelPrefixlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsDelRedistributionRequest {
  uuid: string;
}

export interface QuaggaOspf6settingsDelRedistributionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsDelRoutemapRequest {
  uuid: string;
}

export interface QuaggaOspf6settingsDelRoutemapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsGetInterfaceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsGetNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsGetPrefixlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsGetRedistributionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsGetRoutemapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspf6settingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsSetInterfaceRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspf6settingsSetInterfaceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsSetNetworkRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspf6settingsSetNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsSetPrefixlistRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspf6settingsSetPrefixlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsSetRedistributionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspf6settingsSetRedistributionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsSetRoutemapRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspf6settingsSetRoutemapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsToggleInterfaceRequest {
  enabled?: boolean;
}

export interface QuaggaOspf6settingsToggleInterfaceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsToggleNetworkRequest {
  enabled?: boolean;
}

export interface QuaggaOspf6settingsToggleNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsTogglePrefixlistRequest {
  enabled?: boolean;
}

export interface QuaggaOspf6settingsTogglePrefixlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsToggleRedistributionRequest {
  enabled?: boolean;
}

export interface QuaggaOspf6settingsToggleRedistributionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspf6settingsToggleRoutemapRequest {
  enabled?: boolean;
}

export interface QuaggaOspf6settingsToggleRoutemapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Ospfsettings types
export interface QuaggaOspfsettingsAddInterfaceRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspfsettingsAddInterfaceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsAddNetworkRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspfsettingsAddNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsAddPrefixlistRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspfsettingsAddPrefixlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsAddRedistributionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspfsettingsAddRedistributionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsAddRoutemapRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspfsettingsAddRoutemapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsDelInterfaceRequest {
  uuid: string;
}

export interface QuaggaOspfsettingsDelInterfaceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsDelNetworkRequest {
  uuid: string;
}

export interface QuaggaOspfsettingsDelNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsDelPrefixlistRequest {
  uuid: string;
}

export interface QuaggaOspfsettingsDelPrefixlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsDelRedistributionRequest {
  uuid: string;
}

export interface QuaggaOspfsettingsDelRedistributionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsDelRoutemapRequest {
  uuid: string;
}

export interface QuaggaOspfsettingsDelRoutemapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsGetInterfaceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsGetNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsGetPrefixlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsGetRedistributionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsGetRoutemapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspfsettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsSetInterfaceRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspfsettingsSetInterfaceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsSetNetworkRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspfsettingsSetNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsSetPrefixlistRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspfsettingsSetPrefixlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsSetRedistributionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspfsettingsSetRedistributionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsSetRoutemapRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaOspfsettingsSetRoutemapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsToggleInterfaceRequest {
  enabled?: boolean;
}

export interface QuaggaOspfsettingsToggleInterfaceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsToggleNetworkRequest {
  enabled?: boolean;
}

export interface QuaggaOspfsettingsToggleNetworkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsTogglePrefixlistRequest {
  enabled?: boolean;
}

export interface QuaggaOspfsettingsTogglePrefixlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsToggleRedistributionRequest {
  enabled?: boolean;
}

export interface QuaggaOspfsettingsToggleRedistributionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaOspfsettingsToggleRoutemapRequest {
  enabled?: boolean;
}

export interface QuaggaOspfsettingsToggleRoutemapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Rip types
export interface QuaggaRipGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaRipSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaRipSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface QuaggaServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Static types
export interface QuaggaStaticAddRouteRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaStaticAddRouteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaStaticDelRouteRequest {
  uuid: string;
}

export interface QuaggaStaticDelRouteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaStaticGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaStaticGetRouteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaStaticSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaStaticSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaStaticSetRouteRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface QuaggaStaticSetRouteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface QuaggaStaticToggleRouteRequest {
  enabled?: boolean;
}

export interface QuaggaStaticToggleRouteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface QuaggaNeighbor {
}

export class QuaggaApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/quagga';
  }

  // Bfd methods
  async bfdAddNeighbor(data?: QuaggaBfdAddNeighborRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBfdAddNeighborResponse>> {
    return this.client.post(`${this.basePath}/bfd/add_neighbor`, data, config);
  }

  async bfdDelNeighbor(uuid: string, data?: QuaggaBfdDelNeighborRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBfdDelNeighborResponse>> {
    return this.client.post(`${this.basePath}/bfd/del_neighbor/${uuid}`, data, config);
  }

  async bfdGet(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBfdGetResponse>> {
    return this.client.get(`${this.basePath}/bfd/get`, config);
  }

  async bfdGetNeighbor(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBfdGetNeighborResponse>> {
    return this.client.get(`${this.basePath}/bfd/get_neighbor/${uuid}`, config);
  }

  async bfdSet(data?: QuaggaBfdSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBfdSetResponse>> {
    return this.client.post(`${this.basePath}/bfd/set`, data, config);
  }

  async bfdSetNeighbor(uuid: string, data?: QuaggaBfdSetNeighborRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBfdSetNeighborResponse>> {
    return this.client.post(`${this.basePath}/bfd/set_neighbor/${uuid}`, data, config);
  }

  async bfdToggleNeighbor(uuid: string, data?: QuaggaBfdToggleNeighborRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBfdToggleNeighborResponse>> {
    return this.client.post(`${this.basePath}/bfd/toggle_neighbor/${uuid}`, data, config);
  }


  // Bgp methods
  async bgpAddAspath(data?: QuaggaBgpAddAspathRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpAddAspathResponse>> {
    return this.client.post(`${this.basePath}/bgp/add_aspath`, data, config);
  }

  async bgpAddCommunitylist(data?: QuaggaBgpAddCommunitylistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpAddCommunitylistResponse>> {
    return this.client.post(`${this.basePath}/bgp/add_communitylist`, data, config);
  }

  async bgpAddNeighbor(data?: QuaggaBgpAddNeighborRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpAddNeighborResponse>> {
    return this.client.post(`${this.basePath}/bgp/add_neighbor`, data, config);
  }

  async bgpAddPeergroup(data?: QuaggaBgpAddPeergroupRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpAddPeergroupResponse>> {
    return this.client.post(`${this.basePath}/bgp/add_peergroup`, data, config);
  }

  async bgpAddPrefixlist(data?: QuaggaBgpAddPrefixlistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpAddPrefixlistResponse>> {
    return this.client.post(`${this.basePath}/bgp/add_prefixlist`, data, config);
  }

  async bgpAddRedistribution(data?: QuaggaBgpAddRedistributionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpAddRedistributionResponse>> {
    return this.client.post(`${this.basePath}/bgp/add_redistribution`, data, config);
  }

  async bgpAddRoutemap(data?: QuaggaBgpAddRoutemapRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpAddRoutemapResponse>> {
    return this.client.post(`${this.basePath}/bgp/add_routemap`, data, config);
  }

  async bgpDelAspath(uuid: string, data?: QuaggaBgpDelAspathRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpDelAspathResponse>> {
    return this.client.post(`${this.basePath}/bgp/del_aspath/${uuid}`, data, config);
  }

  async bgpDelCommunitylist(uuid: string, data?: QuaggaBgpDelCommunitylistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpDelCommunitylistResponse>> {
    return this.client.post(`${this.basePath}/bgp/del_communitylist/${uuid}`, data, config);
  }

  async bgpDelNeighbor(uuid: string, data?: QuaggaBgpDelNeighborRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpDelNeighborResponse>> {
    return this.client.post(`${this.basePath}/bgp/del_neighbor/${uuid}`, data, config);
  }

  async bgpDelPeergroup(uuid: string, data?: QuaggaBgpDelPeergroupRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpDelPeergroupResponse>> {
    return this.client.post(`${this.basePath}/bgp/del_peergroup/${uuid}`, data, config);
  }

  async bgpDelPrefixlist(uuid: string, data?: QuaggaBgpDelPrefixlistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpDelPrefixlistResponse>> {
    return this.client.post(`${this.basePath}/bgp/del_prefixlist/${uuid}`, data, config);
  }

  async bgpDelRedistribution(uuid: string, data?: QuaggaBgpDelRedistributionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpDelRedistributionResponse>> {
    return this.client.post(`${this.basePath}/bgp/del_redistribution/${uuid}`, data, config);
  }

  async bgpDelRoutemap(uuid: string, data?: QuaggaBgpDelRoutemapRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpDelRoutemapResponse>> {
    return this.client.post(`${this.basePath}/bgp/del_routemap/${uuid}`, data, config);
  }

  async bgpGet(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpGetResponse>> {
    return this.client.get(`${this.basePath}/bgp/get`, config);
  }

  async bgpGetAspath(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpGetAspathResponse>> {
    return this.client.get(`${this.basePath}/bgp/get_aspath/${uuid}`, config);
  }

  async bgpGetCommunitylist(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpGetCommunitylistResponse>> {
    return this.client.get(`${this.basePath}/bgp/get_communitylist/${uuid}`, config);
  }

  async bgpGetNeighbor(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpGetNeighborResponse>> {
    return this.client.get(`${this.basePath}/bgp/get_neighbor/${uuid}`, config);
  }

  async bgpGetPeergroup(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpGetPeergroupResponse>> {
    return this.client.get(`${this.basePath}/bgp/get_peergroup/${uuid}`, config);
  }

  async bgpGetPrefixlist(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpGetPrefixlistResponse>> {
    return this.client.get(`${this.basePath}/bgp/get_prefixlist/${uuid}`, config);
  }

  async bgpGetRedistribution(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpGetRedistributionResponse>> {
    return this.client.get(`${this.basePath}/bgp/get_redistribution/${uuid}`, config);
  }

  async bgpGetRoutemap(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpGetRoutemapResponse>> {
    return this.client.get(`${this.basePath}/bgp/get_routemap/${uuid}`, config);
  }

  async bgpSet(data?: QuaggaBgpSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpSetResponse>> {
    return this.client.post(`${this.basePath}/bgp/set`, data, config);
  }

  async bgpSetAspath(uuid: string, data?: QuaggaBgpSetAspathRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpSetAspathResponse>> {
    return this.client.post(`${this.basePath}/bgp/set_aspath/${uuid}`, data, config);
  }

  async bgpSetCommunitylist(uuid: string, data?: QuaggaBgpSetCommunitylistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpSetCommunitylistResponse>> {
    return this.client.post(`${this.basePath}/bgp/set_communitylist/${uuid}`, data, config);
  }

  async bgpSetNeighbor(uuid: string, data?: QuaggaBgpSetNeighborRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpSetNeighborResponse>> {
    return this.client.post(`${this.basePath}/bgp/set_neighbor/${uuid}`, data, config);
  }

  async bgpSetPeergroup(uuid: string, data?: QuaggaBgpSetPeergroupRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpSetPeergroupResponse>> {
    return this.client.post(`${this.basePath}/bgp/set_peergroup/${uuid}`, data, config);
  }

  async bgpSetPrefixlist(uuid: string, data?: QuaggaBgpSetPrefixlistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpSetPrefixlistResponse>> {
    return this.client.post(`${this.basePath}/bgp/set_prefixlist/${uuid}`, data, config);
  }

  async bgpSetRedistribution(uuid: string, data?: QuaggaBgpSetRedistributionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpSetRedistributionResponse>> {
    return this.client.post(`${this.basePath}/bgp/set_redistribution/${uuid}`, data, config);
  }

  async bgpSetRoutemap(uuid: string, data?: QuaggaBgpSetRoutemapRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpSetRoutemapResponse>> {
    return this.client.post(`${this.basePath}/bgp/set_routemap/${uuid}`, data, config);
  }

  async bgpToggleAspath(uuid: string, data?: QuaggaBgpToggleAspathRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpToggleAspathResponse>> {
    return this.client.post(`${this.basePath}/bgp/toggle_aspath/${uuid}`, data, config);
  }

  async bgpToggleCommunitylist(uuid: string, data?: QuaggaBgpToggleCommunitylistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpToggleCommunitylistResponse>> {
    return this.client.post(`${this.basePath}/bgp/toggle_communitylist/${uuid}`, data, config);
  }

  async bgpToggleNeighbor(uuid: string, data?: QuaggaBgpToggleNeighborRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpToggleNeighborResponse>> {
    return this.client.post(`${this.basePath}/bgp/toggle_neighbor/${uuid}`, data, config);
  }

  async bgpTogglePeergroup(uuid: string, data?: QuaggaBgpTogglePeergroupRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpTogglePeergroupResponse>> {
    return this.client.post(`${this.basePath}/bgp/toggle_peergroup/${uuid}`, data, config);
  }

  async bgpTogglePrefixlist(uuid: string, data?: QuaggaBgpTogglePrefixlistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpTogglePrefixlistResponse>> {
    return this.client.post(`${this.basePath}/bgp/toggle_prefixlist/${uuid}`, data, config);
  }

  async bgpToggleRedistribution(uuid: string, data?: QuaggaBgpToggleRedistributionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpToggleRedistributionResponse>> {
    return this.client.post(`${this.basePath}/bgp/toggle_redistribution/${uuid}`, data, config);
  }

  async bgpToggleRoutemap(uuid: string, data?: QuaggaBgpToggleRoutemapRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaBgpToggleRoutemapResponse>> {
    return this.client.post(`${this.basePath}/bgp/toggle_routemap/${uuid}`, data, config);
  }


  // Diagnostics methods
  async diagnosticsBfdcounters(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsBfdcountersResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/bfdcounters`, config);
  }

  async diagnosticsBfdneighbors(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsBfdneighborsResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/bfdneighbors`, config);
  }

  async diagnosticsBfdsummary(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsBfdsummaryResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/bfdsummary`, config);
  }

  async diagnosticsBgpneighbors(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsBgpneighborsResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/bgpneighbors`, config);
  }

  async diagnosticsBgpsummary(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsBgpsummaryResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/bgpsummary`, config);
  }

  async diagnosticsGeneralrunningconfig(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsGeneralrunningconfigResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/generalrunningconfig`, config);
  }

  async diagnosticsOspfdatabase(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsOspfdatabaseResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/ospfdatabase`, config);
  }

  async diagnosticsOspfinterface(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsOspfinterfaceResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/ospfinterface`, config);
  }

  async diagnosticsOspfoverview(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsOspfoverviewResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/ospfoverview`, config);
  }

  async diagnosticsOspfv3interface(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsOspfv3interfaceResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/ospfv3interface`, config);
  }

  async diagnosticsOspfv3overview(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsOspfv3overviewResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/ospfv3overview`, config);
  }

  async diagnosticsSearchBgproute4(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsSearchBgproute4Response>> {
    return this.client.get(`${this.basePath}/diagnostics/search_bgproute4`, config);
  }

  async diagnosticsSearchBgproute6(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsSearchBgproute6Response>> {
    return this.client.get(`${this.basePath}/diagnostics/search_bgproute6`, config);
  }

  async diagnosticsSearchGeneralroute4(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsSearchGeneralroute4Response>> {
    return this.client.get(`${this.basePath}/diagnostics/search_generalroute4`, config);
  }

  async diagnosticsSearchGeneralroute6(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsSearchGeneralroute6Response>> {
    return this.client.get(`${this.basePath}/diagnostics/search_generalroute6`, config);
  }

  async diagnosticsSearchOspfneighbor(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsSearchOspfneighborResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/search_ospfneighbor`, config);
  }

  async diagnosticsSearchOspfroute(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsSearchOspfrouteResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/search_ospfroute`, config);
  }

  async diagnosticsSearchOspfv3database(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsSearchOspfv3databaseResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/search_ospfv3database`, config);
  }

  async diagnosticsSearchOspfv3route(format?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaDiagnosticsSearchOspfv3routeResponse>> {
    return this.client.get(`${this.basePath}/diagnostics/search_ospfv3route/${format}`, config);
  }


  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: QuaggaGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Ospf6settings methods
  async ospf6settingsAddInterface(data?: QuaggaOspf6settingsAddInterfaceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsAddInterfaceResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/add_interface`, data, config);
  }

  async ospf6settingsAddNetwork(data?: QuaggaOspf6settingsAddNetworkRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsAddNetworkResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/add_network`, data, config);
  }

  async ospf6settingsAddPrefixlist(data?: QuaggaOspf6settingsAddPrefixlistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsAddPrefixlistResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/add_prefixlist`, data, config);
  }

  async ospf6settingsAddRedistribution(data?: QuaggaOspf6settingsAddRedistributionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsAddRedistributionResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/add_redistribution`, data, config);
  }

  async ospf6settingsAddRoutemap(data?: QuaggaOspf6settingsAddRoutemapRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsAddRoutemapResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/add_routemap`, data, config);
  }

  async ospf6settingsDelInterface(uuid: string, data?: QuaggaOspf6settingsDelInterfaceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsDelInterfaceResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/del_interface/${uuid}`, data, config);
  }

  async ospf6settingsDelNetwork(uuid: string, data?: QuaggaOspf6settingsDelNetworkRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsDelNetworkResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/del_network/${uuid}`, data, config);
  }

  async ospf6settingsDelPrefixlist(uuid: string, data?: QuaggaOspf6settingsDelPrefixlistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsDelPrefixlistResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/del_prefixlist/${uuid}`, data, config);
  }

  async ospf6settingsDelRedistribution(uuid: string, data?: QuaggaOspf6settingsDelRedistributionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsDelRedistributionResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/del_redistribution/${uuid}`, data, config);
  }

  async ospf6settingsDelRoutemap(uuid: string, data?: QuaggaOspf6settingsDelRoutemapRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsDelRoutemapResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/del_routemap/${uuid}`, data, config);
  }

  async ospf6settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsGetResponse>> {
    return this.client.get(`${this.basePath}/ospf6settings/get`, config);
  }

  async ospf6settingsGetInterface(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsGetInterfaceResponse>> {
    return this.client.get(`${this.basePath}/ospf6settings/get_interface/${uuid}`, config);
  }

  async ospf6settingsGetNetwork(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsGetNetworkResponse>> {
    return this.client.get(`${this.basePath}/ospf6settings/get_network/${uuid}`, config);
  }

  async ospf6settingsGetPrefixlist(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsGetPrefixlistResponse>> {
    return this.client.get(`${this.basePath}/ospf6settings/get_prefixlist/${uuid}`, config);
  }

  async ospf6settingsGetRedistribution(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsGetRedistributionResponse>> {
    return this.client.get(`${this.basePath}/ospf6settings/get_redistribution/${uuid}`, config);
  }

  async ospf6settingsGetRoutemap(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsGetRoutemapResponse>> {
    return this.client.get(`${this.basePath}/ospf6settings/get_routemap/${uuid}`, config);
  }

  async ospf6settingsSet(data?: QuaggaOspf6settingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsSetResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/set`, data, config);
  }

  async ospf6settingsSetInterface(uuid: string, data?: QuaggaOspf6settingsSetInterfaceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsSetInterfaceResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/set_interface/${uuid}`, data, config);
  }

  async ospf6settingsSetNetwork(uuid: string, data?: QuaggaOspf6settingsSetNetworkRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsSetNetworkResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/set_network/${uuid}`, data, config);
  }

  async ospf6settingsSetPrefixlist(uuid: string, data?: QuaggaOspf6settingsSetPrefixlistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsSetPrefixlistResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/set_prefixlist/${uuid}`, data, config);
  }

  async ospf6settingsSetRedistribution(uuid: string, data?: QuaggaOspf6settingsSetRedistributionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsSetRedistributionResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/set_redistribution/${uuid}`, data, config);
  }

  async ospf6settingsSetRoutemap(uuid: string, data?: QuaggaOspf6settingsSetRoutemapRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsSetRoutemapResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/set_routemap/${uuid}`, data, config);
  }

  async ospf6settingsToggleInterface(uuid: string, data?: QuaggaOspf6settingsToggleInterfaceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsToggleInterfaceResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/toggle_interface/${uuid}`, data, config);
  }

  async ospf6settingsToggleNetwork(uuid: string, data?: QuaggaOspf6settingsToggleNetworkRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsToggleNetworkResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/toggle_network/${uuid}`, data, config);
  }

  async ospf6settingsTogglePrefixlist(uuid: string, data?: QuaggaOspf6settingsTogglePrefixlistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsTogglePrefixlistResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/toggle_prefixlist/${uuid}`, data, config);
  }

  async ospf6settingsToggleRedistribution(uuid: string, data?: QuaggaOspf6settingsToggleRedistributionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsToggleRedistributionResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/toggle_redistribution/${uuid}`, data, config);
  }

  async ospf6settingsToggleRoutemap(uuid: string, data?: QuaggaOspf6settingsToggleRoutemapRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspf6settingsToggleRoutemapResponse>> {
    return this.client.post(`${this.basePath}/ospf6settings/toggle_routemap/${uuid}`, data, config);
  }


  // Ospfsettings methods
  async ospfsettingsAddInterface(data?: QuaggaOspfsettingsAddInterfaceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsAddInterfaceResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/add_interface`, data, config);
  }

  async ospfsettingsAddNetwork(data?: QuaggaOspfsettingsAddNetworkRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsAddNetworkResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/add_network`, data, config);
  }

  async ospfsettingsAddPrefixlist(data?: QuaggaOspfsettingsAddPrefixlistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsAddPrefixlistResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/add_prefixlist`, data, config);
  }

  async ospfsettingsAddRedistribution(data?: QuaggaOspfsettingsAddRedistributionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsAddRedistributionResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/add_redistribution`, data, config);
  }

  async ospfsettingsAddRoutemap(data?: QuaggaOspfsettingsAddRoutemapRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsAddRoutemapResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/add_routemap`, data, config);
  }

  async ospfsettingsDelInterface(uuid: string, data?: QuaggaOspfsettingsDelInterfaceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsDelInterfaceResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/del_interface/${uuid}`, data, config);
  }

  async ospfsettingsDelNetwork(uuid: string, data?: QuaggaOspfsettingsDelNetworkRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsDelNetworkResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/del_network/${uuid}`, data, config);
  }

  async ospfsettingsDelPrefixlist(uuid: string, data?: QuaggaOspfsettingsDelPrefixlistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsDelPrefixlistResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/del_prefixlist/${uuid}`, data, config);
  }

  async ospfsettingsDelRedistribution(uuid: string, data?: QuaggaOspfsettingsDelRedistributionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsDelRedistributionResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/del_redistribution/${uuid}`, data, config);
  }

  async ospfsettingsDelRoutemap(uuid: string, data?: QuaggaOspfsettingsDelRoutemapRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsDelRoutemapResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/del_routemap/${uuid}`, data, config);
  }

  async ospfsettingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsGetResponse>> {
    return this.client.get(`${this.basePath}/ospfsettings/get`, config);
  }

  async ospfsettingsGetInterface(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsGetInterfaceResponse>> {
    return this.client.get(`${this.basePath}/ospfsettings/get_interface/${uuid}`, config);
  }

  async ospfsettingsGetNetwork(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsGetNetworkResponse>> {
    return this.client.get(`${this.basePath}/ospfsettings/get_network/${uuid}`, config);
  }

  async ospfsettingsGetPrefixlist(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsGetPrefixlistResponse>> {
    return this.client.get(`${this.basePath}/ospfsettings/get_prefixlist/${uuid}`, config);
  }

  async ospfsettingsGetRedistribution(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsGetRedistributionResponse>> {
    return this.client.get(`${this.basePath}/ospfsettings/get_redistribution/${uuid}`, config);
  }

  async ospfsettingsGetRoutemap(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsGetRoutemapResponse>> {
    return this.client.get(`${this.basePath}/ospfsettings/get_routemap/${uuid}`, config);
  }

  async ospfsettingsSet(data?: QuaggaOspfsettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsSetResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/set`, data, config);
  }

  async ospfsettingsSetInterface(uuid: string, data?: QuaggaOspfsettingsSetInterfaceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsSetInterfaceResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/set_interface/${uuid}`, data, config);
  }

  async ospfsettingsSetNetwork(uuid: string, data?: QuaggaOspfsettingsSetNetworkRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsSetNetworkResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/set_network/${uuid}`, data, config);
  }

  async ospfsettingsSetPrefixlist(uuid: string, data?: QuaggaOspfsettingsSetPrefixlistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsSetPrefixlistResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/set_prefixlist/${uuid}`, data, config);
  }

  async ospfsettingsSetRedistribution(uuid: string, data?: QuaggaOspfsettingsSetRedistributionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsSetRedistributionResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/set_redistribution/${uuid}`, data, config);
  }

  async ospfsettingsSetRoutemap(uuid: string, data?: QuaggaOspfsettingsSetRoutemapRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsSetRoutemapResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/set_routemap/${uuid}`, data, config);
  }

  async ospfsettingsToggleInterface(uuid: string, data?: QuaggaOspfsettingsToggleInterfaceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsToggleInterfaceResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/toggle_interface/${uuid}`, data, config);
  }

  async ospfsettingsToggleNetwork(uuid: string, data?: QuaggaOspfsettingsToggleNetworkRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsToggleNetworkResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/toggle_network/${uuid}`, data, config);
  }

  async ospfsettingsTogglePrefixlist(uuid: string, data?: QuaggaOspfsettingsTogglePrefixlistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsTogglePrefixlistResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/toggle_prefixlist/${uuid}`, data, config);
  }

  async ospfsettingsToggleRedistribution(uuid: string, data?: QuaggaOspfsettingsToggleRedistributionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsToggleRedistributionResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/toggle_redistribution/${uuid}`, data, config);
  }

  async ospfsettingsToggleRoutemap(uuid: string, data?: QuaggaOspfsettingsToggleRoutemapRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaOspfsettingsToggleRoutemapResponse>> {
    return this.client.post(`${this.basePath}/ospfsettings/toggle_routemap/${uuid}`, data, config);
  }


  // Rip methods
  async ripGet(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaRipGetResponse>> {
    return this.client.get(`${this.basePath}/rip/get`, config);
  }

  async ripSet(data?: QuaggaRipSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaRipSetResponse>> {
    return this.client.post(`${this.basePath}/rip/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: QuaggaServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: QuaggaServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: QuaggaServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: QuaggaServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Static methods
  async staticAddRoute(data?: QuaggaStaticAddRouteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaStaticAddRouteResponse>> {
    return this.client.post(`${this.basePath}/static/add_route`, data, config);
  }

  async staticDelRoute(uuid: string, data?: QuaggaStaticDelRouteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaStaticDelRouteResponse>> {
    return this.client.post(`${this.basePath}/static/del_route/${uuid}`, data, config);
  }

  async staticGet(config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaStaticGetResponse>> {
    return this.client.get(`${this.basePath}/static/get`, config);
  }

  async staticGetRoute(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaStaticGetRouteResponse>> {
    return this.client.get(`${this.basePath}/static/get_route/${uuid}`, config);
  }

  async staticSet(data?: QuaggaStaticSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaStaticSetResponse>> {
    return this.client.post(`${this.basePath}/static/set`, data, config);
  }

  async staticSetRoute(uuid: string, data?: QuaggaStaticSetRouteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaStaticSetRouteResponse>> {
    return this.client.post(`${this.basePath}/static/set_route/${uuid}`, data, config);
  }

  async staticToggleRoute(uuid: string, data?: QuaggaStaticToggleRouteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<QuaggaStaticToggleRouteResponse>> {
    return this.client.post(`${this.basePath}/static/toggle_route/${uuid}`, data, config);
  }

}
