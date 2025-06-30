import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Bfd methods
  async bfdAddNeighbor(data?: QuaggaBfdAddNeighborRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBfdAddNeighborResponse>> {
    return this.http.post(`/api/quagga/bfd/add_neighbor`, data, config);
  }

  async bfdDelNeighbor(uuid: string, data?: QuaggaBfdDelNeighborRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBfdDelNeighborResponse>> {
    return this.http.post(`/api/quagga/bfd/del_neighbor/${uuid}`, data, config);
  }

  async bfdGet(config?: RequestConfig): Promise<ApiResponse<QuaggaBfdGetResponse>> {
    return this.http.get(`/api/quagga/bfd/get`, config);
  }

  async bfdGetNeighbor(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaBfdGetNeighborResponse>> {
    return this.http.get(`/api/quagga/bfd/get_neighbor/${uuid}`, config);
  }

  async bfdSet(data?: QuaggaBfdSetRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBfdSetResponse>> {
    return this.http.post(`/api/quagga/bfd/set`, data, config);
  }

  async bfdSetNeighbor(uuid: string, data?: QuaggaBfdSetNeighborRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBfdSetNeighborResponse>> {
    return this.http.post(`/api/quagga/bfd/set_neighbor/${uuid}`, data, config);
  }

  async bfdToggleNeighbor(uuid: string, data?: QuaggaBfdToggleNeighborRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBfdToggleNeighborResponse>> {
    return this.http.post(`/api/quagga/bfd/toggle_neighbor/${uuid}`, data, config);
  }


  // Bgp methods
  async bgpAddAspath(data?: QuaggaBgpAddAspathRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpAddAspathResponse>> {
    return this.http.post(`/api/quagga/bgp/add_aspath`, data, config);
  }

  async bgpAddCommunitylist(data?: QuaggaBgpAddCommunitylistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpAddCommunitylistResponse>> {
    return this.http.post(`/api/quagga/bgp/add_communitylist`, data, config);
  }

  async bgpAddNeighbor(data?: QuaggaBgpAddNeighborRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpAddNeighborResponse>> {
    return this.http.post(`/api/quagga/bgp/add_neighbor`, data, config);
  }

  async bgpAddPeergroup(data?: QuaggaBgpAddPeergroupRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpAddPeergroupResponse>> {
    return this.http.post(`/api/quagga/bgp/add_peergroup`, data, config);
  }

  async bgpAddPrefixlist(data?: QuaggaBgpAddPrefixlistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpAddPrefixlistResponse>> {
    return this.http.post(`/api/quagga/bgp/add_prefixlist`, data, config);
  }

  async bgpAddRedistribution(data?: QuaggaBgpAddRedistributionRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpAddRedistributionResponse>> {
    return this.http.post(`/api/quagga/bgp/add_redistribution`, data, config);
  }

  async bgpAddRoutemap(data?: QuaggaBgpAddRoutemapRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpAddRoutemapResponse>> {
    return this.http.post(`/api/quagga/bgp/add_routemap`, data, config);
  }

  async bgpDelAspath(uuid: string, data?: QuaggaBgpDelAspathRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpDelAspathResponse>> {
    return this.http.post(`/api/quagga/bgp/del_aspath/${uuid}`, data, config);
  }

  async bgpDelCommunitylist(uuid: string, data?: QuaggaBgpDelCommunitylistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpDelCommunitylistResponse>> {
    return this.http.post(`/api/quagga/bgp/del_communitylist/${uuid}`, data, config);
  }

  async bgpDelNeighbor(uuid: string, data?: QuaggaBgpDelNeighborRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpDelNeighborResponse>> {
    return this.http.post(`/api/quagga/bgp/del_neighbor/${uuid}`, data, config);
  }

  async bgpDelPeergroup(uuid: string, data?: QuaggaBgpDelPeergroupRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpDelPeergroupResponse>> {
    return this.http.post(`/api/quagga/bgp/del_peergroup/${uuid}`, data, config);
  }

  async bgpDelPrefixlist(uuid: string, data?: QuaggaBgpDelPrefixlistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpDelPrefixlistResponse>> {
    return this.http.post(`/api/quagga/bgp/del_prefixlist/${uuid}`, data, config);
  }

  async bgpDelRedistribution(uuid: string, data?: QuaggaBgpDelRedistributionRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpDelRedistributionResponse>> {
    return this.http.post(`/api/quagga/bgp/del_redistribution/${uuid}`, data, config);
  }

  async bgpDelRoutemap(uuid: string, data?: QuaggaBgpDelRoutemapRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpDelRoutemapResponse>> {
    return this.http.post(`/api/quagga/bgp/del_routemap/${uuid}`, data, config);
  }

  async bgpGet(config?: RequestConfig): Promise<ApiResponse<QuaggaBgpGetResponse>> {
    return this.http.get(`/api/quagga/bgp/get`, config);
  }

  async bgpGetAspath(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpGetAspathResponse>> {
    return this.http.get(`/api/quagga/bgp/get_aspath/${uuid}`, config);
  }

  async bgpGetCommunitylist(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpGetCommunitylistResponse>> {
    return this.http.get(`/api/quagga/bgp/get_communitylist/${uuid}`, config);
  }

  async bgpGetNeighbor(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpGetNeighborResponse>> {
    return this.http.get(`/api/quagga/bgp/get_neighbor/${uuid}`, config);
  }

  async bgpGetPeergroup(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpGetPeergroupResponse>> {
    return this.http.get(`/api/quagga/bgp/get_peergroup/${uuid}`, config);
  }

  async bgpGetPrefixlist(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpGetPrefixlistResponse>> {
    return this.http.get(`/api/quagga/bgp/get_prefixlist/${uuid}`, config);
  }

  async bgpGetRedistribution(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpGetRedistributionResponse>> {
    return this.http.get(`/api/quagga/bgp/get_redistribution/${uuid}`, config);
  }

  async bgpGetRoutemap(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpGetRoutemapResponse>> {
    return this.http.get(`/api/quagga/bgp/get_routemap/${uuid}`, config);
  }

  async bgpSet(data?: QuaggaBgpSetRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpSetResponse>> {
    return this.http.post(`/api/quagga/bgp/set`, data, config);
  }

  async bgpSetAspath(uuid: string, data?: QuaggaBgpSetAspathRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpSetAspathResponse>> {
    return this.http.post(`/api/quagga/bgp/set_aspath/${uuid}`, data, config);
  }

  async bgpSetCommunitylist(uuid: string, data?: QuaggaBgpSetCommunitylistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpSetCommunitylistResponse>> {
    return this.http.post(`/api/quagga/bgp/set_communitylist/${uuid}`, data, config);
  }

  async bgpSetNeighbor(uuid: string, data?: QuaggaBgpSetNeighborRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpSetNeighborResponse>> {
    return this.http.post(`/api/quagga/bgp/set_neighbor/${uuid}`, data, config);
  }

  async bgpSetPeergroup(uuid: string, data?: QuaggaBgpSetPeergroupRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpSetPeergroupResponse>> {
    return this.http.post(`/api/quagga/bgp/set_peergroup/${uuid}`, data, config);
  }

  async bgpSetPrefixlist(uuid: string, data?: QuaggaBgpSetPrefixlistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpSetPrefixlistResponse>> {
    return this.http.post(`/api/quagga/bgp/set_prefixlist/${uuid}`, data, config);
  }

  async bgpSetRedistribution(uuid: string, data?: QuaggaBgpSetRedistributionRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpSetRedistributionResponse>> {
    return this.http.post(`/api/quagga/bgp/set_redistribution/${uuid}`, data, config);
  }

  async bgpSetRoutemap(uuid: string, data?: QuaggaBgpSetRoutemapRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpSetRoutemapResponse>> {
    return this.http.post(`/api/quagga/bgp/set_routemap/${uuid}`, data, config);
  }

  async bgpToggleAspath(uuid: string, data?: QuaggaBgpToggleAspathRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpToggleAspathResponse>> {
    return this.http.post(`/api/quagga/bgp/toggle_aspath/${uuid}`, data, config);
  }

  async bgpToggleCommunitylist(uuid: string, data?: QuaggaBgpToggleCommunitylistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpToggleCommunitylistResponse>> {
    return this.http.post(`/api/quagga/bgp/toggle_communitylist/${uuid}`, data, config);
  }

  async bgpToggleNeighbor(uuid: string, data?: QuaggaBgpToggleNeighborRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpToggleNeighborResponse>> {
    return this.http.post(`/api/quagga/bgp/toggle_neighbor/${uuid}`, data, config);
  }

  async bgpTogglePeergroup(uuid: string, data?: QuaggaBgpTogglePeergroupRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpTogglePeergroupResponse>> {
    return this.http.post(`/api/quagga/bgp/toggle_peergroup/${uuid}`, data, config);
  }

  async bgpTogglePrefixlist(uuid: string, data?: QuaggaBgpTogglePrefixlistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpTogglePrefixlistResponse>> {
    return this.http.post(`/api/quagga/bgp/toggle_prefixlist/${uuid}`, data, config);
  }

  async bgpToggleRedistribution(uuid: string, data?: QuaggaBgpToggleRedistributionRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpToggleRedistributionResponse>> {
    return this.http.post(`/api/quagga/bgp/toggle_redistribution/${uuid}`, data, config);
  }

  async bgpToggleRoutemap(uuid: string, data?: QuaggaBgpToggleRoutemapRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaBgpToggleRoutemapResponse>> {
    return this.http.post(`/api/quagga/bgp/toggle_routemap/${uuid}`, data, config);
  }


  // Diagnostics methods
  async diagnosticsBfdcounters(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsBfdcountersResponse>> {
    return this.http.get(`/api/quagga/diagnostics/bfdcounters`, config);
  }

  async diagnosticsBfdneighbors(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsBfdneighborsResponse>> {
    return this.http.get(`/api/quagga/diagnostics/bfdneighbors`, config);
  }

  async diagnosticsBfdsummary(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsBfdsummaryResponse>> {
    return this.http.get(`/api/quagga/diagnostics/bfdsummary`, config);
  }

  async diagnosticsBgpneighbors(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsBgpneighborsResponse>> {
    return this.http.get(`/api/quagga/diagnostics/bgpneighbors`, config);
  }

  async diagnosticsBgpsummary(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsBgpsummaryResponse>> {
    return this.http.get(`/api/quagga/diagnostics/bgpsummary`, config);
  }

  async diagnosticsGeneralrunningconfig(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsGeneralrunningconfigResponse>> {
    return this.http.get(`/api/quagga/diagnostics/generalrunningconfig`, config);
  }

  async diagnosticsOspfdatabase(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsOspfdatabaseResponse>> {
    return this.http.get(`/api/quagga/diagnostics/ospfdatabase`, config);
  }

  async diagnosticsOspfinterface(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsOspfinterfaceResponse>> {
    return this.http.get(`/api/quagga/diagnostics/ospfinterface`, config);
  }

  async diagnosticsOspfoverview(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsOspfoverviewResponse>> {
    return this.http.get(`/api/quagga/diagnostics/ospfoverview`, config);
  }

  async diagnosticsOspfv3interface(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsOspfv3interfaceResponse>> {
    return this.http.get(`/api/quagga/diagnostics/ospfv3interface`, config);
  }

  async diagnosticsOspfv3overview(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsOspfv3overviewResponse>> {
    return this.http.get(`/api/quagga/diagnostics/ospfv3overview`, config);
  }

  async diagnosticsSearchBgproute4(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsSearchBgproute4Response>> {
    return this.http.get(`/api/quagga/diagnostics/search_bgproute4`, config);
  }

  async diagnosticsSearchBgproute6(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsSearchBgproute6Response>> {
    return this.http.get(`/api/quagga/diagnostics/search_bgproute6`, config);
  }

  async diagnosticsSearchGeneralroute4(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsSearchGeneralroute4Response>> {
    return this.http.get(`/api/quagga/diagnostics/search_generalroute4`, config);
  }

  async diagnosticsSearchGeneralroute6(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsSearchGeneralroute6Response>> {
    return this.http.get(`/api/quagga/diagnostics/search_generalroute6`, config);
  }

  async diagnosticsSearchOspfneighbor(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsSearchOspfneighborResponse>> {
    return this.http.get(`/api/quagga/diagnostics/search_ospfneighbor`, config);
  }

  async diagnosticsSearchOspfroute(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsSearchOspfrouteResponse>> {
    return this.http.get(`/api/quagga/diagnostics/search_ospfroute`, config);
  }

  async diagnosticsSearchOspfv3database(config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsSearchOspfv3databaseResponse>> {
    return this.http.get(`/api/quagga/diagnostics/search_ospfv3database`, config);
  }

  async diagnosticsSearchOspfv3route(format?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaDiagnosticsSearchOspfv3routeResponse>> {
    return this.http.get(`/api/quagga/diagnostics/search_ospfv3route/${format}`, config);
  }


  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<QuaggaGeneralGetResponse>> {
    return this.http.get(`/api/quagga/general/get`, config);
  }

  async generalSet(data?: QuaggaGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaGeneralSetResponse>> {
    return this.http.post(`/api/quagga/general/set`, data, config);
  }


  // Ospf6settings methods
  async ospf6settingsAddInterface(data?: QuaggaOspf6settingsAddInterfaceRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsAddInterfaceResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/add_interface`, data, config);
  }

  async ospf6settingsAddNetwork(data?: QuaggaOspf6settingsAddNetworkRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsAddNetworkResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/add_network`, data, config);
  }

  async ospf6settingsAddPrefixlist(data?: QuaggaOspf6settingsAddPrefixlistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsAddPrefixlistResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/add_prefixlist`, data, config);
  }

  async ospf6settingsAddRedistribution(data?: QuaggaOspf6settingsAddRedistributionRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsAddRedistributionResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/add_redistribution`, data, config);
  }

  async ospf6settingsAddRoutemap(data?: QuaggaOspf6settingsAddRoutemapRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsAddRoutemapResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/add_routemap`, data, config);
  }

  async ospf6settingsDelInterface(uuid: string, data?: QuaggaOspf6settingsDelInterfaceRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsDelInterfaceResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/del_interface/${uuid}`, data, config);
  }

  async ospf6settingsDelNetwork(uuid: string, data?: QuaggaOspf6settingsDelNetworkRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsDelNetworkResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/del_network/${uuid}`, data, config);
  }

  async ospf6settingsDelPrefixlist(uuid: string, data?: QuaggaOspf6settingsDelPrefixlistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsDelPrefixlistResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/del_prefixlist/${uuid}`, data, config);
  }

  async ospf6settingsDelRedistribution(uuid: string, data?: QuaggaOspf6settingsDelRedistributionRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsDelRedistributionResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/del_redistribution/${uuid}`, data, config);
  }

  async ospf6settingsDelRoutemap(uuid: string, data?: QuaggaOspf6settingsDelRoutemapRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsDelRoutemapResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/del_routemap/${uuid}`, data, config);
  }

  async ospf6settingsGet(config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsGetResponse>> {
    return this.http.get(`/api/quagga/ospf6settings/get`, config);
  }

  async ospf6settingsGetInterface(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsGetInterfaceResponse>> {
    return this.http.get(`/api/quagga/ospf6settings/get_interface/${uuid}`, config);
  }

  async ospf6settingsGetNetwork(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsGetNetworkResponse>> {
    return this.http.get(`/api/quagga/ospf6settings/get_network/${uuid}`, config);
  }

  async ospf6settingsGetPrefixlist(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsGetPrefixlistResponse>> {
    return this.http.get(`/api/quagga/ospf6settings/get_prefixlist/${uuid}`, config);
  }

  async ospf6settingsGetRedistribution(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsGetRedistributionResponse>> {
    return this.http.get(`/api/quagga/ospf6settings/get_redistribution/${uuid}`, config);
  }

  async ospf6settingsGetRoutemap(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsGetRoutemapResponse>> {
    return this.http.get(`/api/quagga/ospf6settings/get_routemap/${uuid}`, config);
  }

  async ospf6settingsSet(data?: QuaggaOspf6settingsSetRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsSetResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/set`, data, config);
  }

  async ospf6settingsSetInterface(uuid: string, data?: QuaggaOspf6settingsSetInterfaceRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsSetInterfaceResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/set_interface/${uuid}`, data, config);
  }

  async ospf6settingsSetNetwork(uuid: string, data?: QuaggaOspf6settingsSetNetworkRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsSetNetworkResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/set_network/${uuid}`, data, config);
  }

  async ospf6settingsSetPrefixlist(uuid: string, data?: QuaggaOspf6settingsSetPrefixlistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsSetPrefixlistResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/set_prefixlist/${uuid}`, data, config);
  }

  async ospf6settingsSetRedistribution(uuid: string, data?: QuaggaOspf6settingsSetRedistributionRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsSetRedistributionResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/set_redistribution/${uuid}`, data, config);
  }

  async ospf6settingsSetRoutemap(uuid: string, data?: QuaggaOspf6settingsSetRoutemapRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsSetRoutemapResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/set_routemap/${uuid}`, data, config);
  }

  async ospf6settingsToggleInterface(uuid: string, data?: QuaggaOspf6settingsToggleInterfaceRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsToggleInterfaceResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/toggle_interface/${uuid}`, data, config);
  }

  async ospf6settingsToggleNetwork(uuid: string, data?: QuaggaOspf6settingsToggleNetworkRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsToggleNetworkResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/toggle_network/${uuid}`, data, config);
  }

  async ospf6settingsTogglePrefixlist(uuid: string, data?: QuaggaOspf6settingsTogglePrefixlistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsTogglePrefixlistResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/toggle_prefixlist/${uuid}`, data, config);
  }

  async ospf6settingsToggleRedistribution(uuid: string, data?: QuaggaOspf6settingsToggleRedistributionRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsToggleRedistributionResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/toggle_redistribution/${uuid}`, data, config);
  }

  async ospf6settingsToggleRoutemap(uuid: string, data?: QuaggaOspf6settingsToggleRoutemapRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspf6settingsToggleRoutemapResponse>> {
    return this.http.post(`/api/quagga/ospf6settings/toggle_routemap/${uuid}`, data, config);
  }


  // Ospfsettings methods
  async ospfsettingsAddInterface(data?: QuaggaOspfsettingsAddInterfaceRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsAddInterfaceResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/add_interface`, data, config);
  }

  async ospfsettingsAddNetwork(data?: QuaggaOspfsettingsAddNetworkRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsAddNetworkResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/add_network`, data, config);
  }

  async ospfsettingsAddPrefixlist(data?: QuaggaOspfsettingsAddPrefixlistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsAddPrefixlistResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/add_prefixlist`, data, config);
  }

  async ospfsettingsAddRedistribution(data?: QuaggaOspfsettingsAddRedistributionRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsAddRedistributionResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/add_redistribution`, data, config);
  }

  async ospfsettingsAddRoutemap(data?: QuaggaOspfsettingsAddRoutemapRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsAddRoutemapResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/add_routemap`, data, config);
  }

  async ospfsettingsDelInterface(uuid: string, data?: QuaggaOspfsettingsDelInterfaceRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsDelInterfaceResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/del_interface/${uuid}`, data, config);
  }

  async ospfsettingsDelNetwork(uuid: string, data?: QuaggaOspfsettingsDelNetworkRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsDelNetworkResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/del_network/${uuid}`, data, config);
  }

  async ospfsettingsDelPrefixlist(uuid: string, data?: QuaggaOspfsettingsDelPrefixlistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsDelPrefixlistResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/del_prefixlist/${uuid}`, data, config);
  }

  async ospfsettingsDelRedistribution(uuid: string, data?: QuaggaOspfsettingsDelRedistributionRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsDelRedistributionResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/del_redistribution/${uuid}`, data, config);
  }

  async ospfsettingsDelRoutemap(uuid: string, data?: QuaggaOspfsettingsDelRoutemapRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsDelRoutemapResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/del_routemap/${uuid}`, data, config);
  }

  async ospfsettingsGet(config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsGetResponse>> {
    return this.http.get(`/api/quagga/ospfsettings/get`, config);
  }

  async ospfsettingsGetInterface(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsGetInterfaceResponse>> {
    return this.http.get(`/api/quagga/ospfsettings/get_interface/${uuid}`, config);
  }

  async ospfsettingsGetNetwork(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsGetNetworkResponse>> {
    return this.http.get(`/api/quagga/ospfsettings/get_network/${uuid}`, config);
  }

  async ospfsettingsGetPrefixlist(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsGetPrefixlistResponse>> {
    return this.http.get(`/api/quagga/ospfsettings/get_prefixlist/${uuid}`, config);
  }

  async ospfsettingsGetRedistribution(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsGetRedistributionResponse>> {
    return this.http.get(`/api/quagga/ospfsettings/get_redistribution/${uuid}`, config);
  }

  async ospfsettingsGetRoutemap(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsGetRoutemapResponse>> {
    return this.http.get(`/api/quagga/ospfsettings/get_routemap/${uuid}`, config);
  }

  async ospfsettingsSet(data?: QuaggaOspfsettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsSetResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/set`, data, config);
  }

  async ospfsettingsSetInterface(uuid: string, data?: QuaggaOspfsettingsSetInterfaceRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsSetInterfaceResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/set_interface/${uuid}`, data, config);
  }

  async ospfsettingsSetNetwork(uuid: string, data?: QuaggaOspfsettingsSetNetworkRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsSetNetworkResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/set_network/${uuid}`, data, config);
  }

  async ospfsettingsSetPrefixlist(uuid: string, data?: QuaggaOspfsettingsSetPrefixlistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsSetPrefixlistResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/set_prefixlist/${uuid}`, data, config);
  }

  async ospfsettingsSetRedistribution(uuid: string, data?: QuaggaOspfsettingsSetRedistributionRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsSetRedistributionResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/set_redistribution/${uuid}`, data, config);
  }

  async ospfsettingsSetRoutemap(uuid: string, data?: QuaggaOspfsettingsSetRoutemapRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsSetRoutemapResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/set_routemap/${uuid}`, data, config);
  }

  async ospfsettingsToggleInterface(uuid: string, data?: QuaggaOspfsettingsToggleInterfaceRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsToggleInterfaceResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/toggle_interface/${uuid}`, data, config);
  }

  async ospfsettingsToggleNetwork(uuid: string, data?: QuaggaOspfsettingsToggleNetworkRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsToggleNetworkResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/toggle_network/${uuid}`, data, config);
  }

  async ospfsettingsTogglePrefixlist(uuid: string, data?: QuaggaOspfsettingsTogglePrefixlistRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsTogglePrefixlistResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/toggle_prefixlist/${uuid}`, data, config);
  }

  async ospfsettingsToggleRedistribution(uuid: string, data?: QuaggaOspfsettingsToggleRedistributionRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsToggleRedistributionResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/toggle_redistribution/${uuid}`, data, config);
  }

  async ospfsettingsToggleRoutemap(uuid: string, data?: QuaggaOspfsettingsToggleRoutemapRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaOspfsettingsToggleRoutemapResponse>> {
    return this.http.post(`/api/quagga/ospfsettings/toggle_routemap/${uuid}`, data, config);
  }


  // Rip methods
  async ripGet(config?: RequestConfig): Promise<ApiResponse<QuaggaRipGetResponse>> {
    return this.http.get(`/api/quagga/rip/get`, config);
  }

  async ripSet(data?: QuaggaRipSetRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaRipSetResponse>> {
    return this.http.post(`/api/quagga/rip/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: QuaggaServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaServiceReconfigureResponse>> {
    return this.http.post(`/api/quagga/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: QuaggaServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaServiceRestartResponse>> {
    return this.http.post(`/api/quagga/service/restart`, data, config);
  }

  async serviceStart(data?: QuaggaServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaServiceStartResponse>> {
    return this.http.post(`/api/quagga/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<QuaggaServiceStatusResponse>> {
    return this.http.get(`/api/quagga/service/status`, config);
  }

  async serviceStop(data?: QuaggaServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaServiceStopResponse>> {
    return this.http.post(`/api/quagga/service/stop`, data, config);
  }


  // Static methods
  async staticAddRoute(data?: QuaggaStaticAddRouteRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaStaticAddRouteResponse>> {
    return this.http.post(`/api/quagga/static/add_route`, data, config);
  }

  async staticDelRoute(uuid: string, data?: QuaggaStaticDelRouteRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaStaticDelRouteResponse>> {
    return this.http.post(`/api/quagga/static/del_route/${uuid}`, data, config);
  }

  async staticGet(config?: RequestConfig): Promise<ApiResponse<QuaggaStaticGetResponse>> {
    return this.http.get(`/api/quagga/static/get`, config);
  }

  async staticGetRoute(uuid?: string, config?: RequestConfig): Promise<ApiResponse<QuaggaStaticGetRouteResponse>> {
    return this.http.get(`/api/quagga/static/get_route/${uuid}`, config);
  }

  async staticSet(data?: QuaggaStaticSetRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaStaticSetResponse>> {
    return this.http.post(`/api/quagga/static/set`, data, config);
  }

  async staticSetRoute(uuid: string, data?: QuaggaStaticSetRouteRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaStaticSetRouteResponse>> {
    return this.http.post(`/api/quagga/static/set_route/${uuid}`, data, config);
  }

  async staticToggleRoute(uuid: string, data?: QuaggaStaticToggleRouteRequest, config?: RequestConfig): Promise<ApiResponse<QuaggaStaticToggleRouteResponse>> {
    return this.http.post(`/api/quagga/static/toggle_route/${uuid}`, data, config);
  }

}
