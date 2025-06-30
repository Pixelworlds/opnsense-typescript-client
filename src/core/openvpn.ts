import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Openvpn module

// Model field types

// ClientOverwrites types
export interface OpenvpnClientOverwritesAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenvpnClientOverwritesAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnClientOverwritesDelRequest {
  uuid: string;
}

export interface OpenvpnClientOverwritesDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnClientOverwritesGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnClientOverwritesSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenvpnClientOverwritesSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnClientOverwritesToggleRequest {
  enabled?: boolean;
}

export interface OpenvpnClientOverwritesToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Export types
export interface OpenvpnExportAccountsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnExportDownloadRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenvpnExportDownloadResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnExportProvidersResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnExportStorePresetsRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenvpnExportStorePresetsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnExportTemplatesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnExportValidatePresetsRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenvpnExportValidatePresetsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Instances types
export interface OpenvpnInstancesAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenvpnInstancesAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnInstancesAddStaticKeyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenvpnInstancesAddStaticKeyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnInstancesDelRequest {
  uuid: string;
}

export interface OpenvpnInstancesDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnInstancesDelStaticKeyRequest {
  uuid: string;
}

export interface OpenvpnInstancesDelStaticKeyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnInstancesGenKeyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnInstancesGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnInstancesGetStaticKeyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnInstancesSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenvpnInstancesSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnInstancesSetStaticKeyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenvpnInstancesSetStaticKeyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnInstancesToggleRequest {
  enabled?: boolean;
}

export interface OpenvpnInstancesToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface OpenvpnServiceKillSessionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenvpnServiceKillSessionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenvpnServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnServiceRestartServiceRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenvpnServiceRestartServiceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnServiceSearchRoutesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnServiceSearchSessionsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnServiceStartServiceRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenvpnServiceStartServiceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface OpenvpnServiceStopServiceRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface OpenvpnServiceStopServiceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface OpenvpnOverwrite {
}

export interface OpenvpnStaticKey {
}

export class OpenvpnApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // ClientOverwrites methods
  async clientOverwritesAdd(data?: OpenvpnClientOverwritesAddRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnClientOverwritesAddResponse>> {
    return this.http.post(`/api/openvpn/client_overwrites/add`, data, config);
  }

  async clientOverwritesDel(uuid: string, data?: OpenvpnClientOverwritesDelRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnClientOverwritesDelResponse>> {
    return this.http.post(`/api/openvpn/client_overwrites/del/${uuid}`, data, config);
  }

  async clientOverwritesGet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<OpenvpnClientOverwritesGetResponse>> {
    return this.http.get(`/api/openvpn/client_overwrites/get/${uuid}`, config);
  }

  async clientOverwritesSet(uuid?: string, data?: OpenvpnClientOverwritesSetRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnClientOverwritesSetResponse>> {
    return this.http.post(`/api/openvpn/client_overwrites/set/${uuid}`, data, config);
  }

  async clientOverwritesToggle(uuid: string, enabled?: string, data?: OpenvpnClientOverwritesToggleRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnClientOverwritesToggleResponse>> {
    return this.http.post(`/api/openvpn/client_overwrites/toggle/${uuid}/${enabled}`, data, config);
  }


  // Export methods
  async exportAccounts(vpnid?: string, config?: RequestConfig): Promise<ApiResponse<OpenvpnExportAccountsResponse>> {
    return this.http.get(`/api/openvpn/export/accounts/${vpnid}`, config);
  }

  async exportDownload(vpnid: string, certref?: string, data?: OpenvpnExportDownloadRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnExportDownloadResponse>> {
    return this.http.post(`/api/openvpn/export/download/${vpnid}/${certref}`, data, config);
  }

  async exportProviders(config?: RequestConfig): Promise<ApiResponse<OpenvpnExportProvidersResponse>> {
    return this.http.get(`/api/openvpn/export/providers`, config);
  }

  async exportStorePresets(vpnid: string, data?: OpenvpnExportStorePresetsRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnExportStorePresetsResponse>> {
    return this.http.post(`/api/openvpn/export/store_presets/${vpnid}`, data, config);
  }

  async exportTemplates(config?: RequestConfig): Promise<ApiResponse<OpenvpnExportTemplatesResponse>> {
    return this.http.get(`/api/openvpn/export/templates`, config);
  }

  async exportValidatePresets(vpnid: string, data?: OpenvpnExportValidatePresetsRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnExportValidatePresetsResponse>> {
    return this.http.post(`/api/openvpn/export/validate_presets/${vpnid}`, data, config);
  }


  // Instances methods
  async instancesAdd(data?: OpenvpnInstancesAddRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnInstancesAddResponse>> {
    return this.http.post(`/api/openvpn/instances/add`, data, config);
  }

  async instancesAddStaticKey(data?: OpenvpnInstancesAddStaticKeyRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnInstancesAddStaticKeyResponse>> {
    return this.http.post(`/api/openvpn/instances/add_static_key`, data, config);
  }

  async instancesDel(uuid: string, data?: OpenvpnInstancesDelRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnInstancesDelResponse>> {
    return this.http.post(`/api/openvpn/instances/del/${uuid}`, data, config);
  }

  async instancesDelStaticKey(uuid: string, data?: OpenvpnInstancesDelStaticKeyRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnInstancesDelStaticKeyResponse>> {
    return this.http.post(`/api/openvpn/instances/del_static_key/${uuid}`, data, config);
  }

  async instancesGenKey(type?: string, config?: RequestConfig): Promise<ApiResponse<OpenvpnInstancesGenKeyResponse>> {
    return this.http.get(`/api/openvpn/instances/gen_key/${type}`, config);
  }

  async instancesGet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<OpenvpnInstancesGetResponse>> {
    return this.http.get(`/api/openvpn/instances/get/${uuid}`, config);
  }

  async instancesGetStaticKey(uuid?: string, config?: RequestConfig): Promise<ApiResponse<OpenvpnInstancesGetStaticKeyResponse>> {
    return this.http.get(`/api/openvpn/instances/get_static_key/${uuid}`, config);
  }

  async instancesSet(uuid?: string, data?: OpenvpnInstancesSetRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnInstancesSetResponse>> {
    return this.http.post(`/api/openvpn/instances/set/${uuid}`, data, config);
  }

  async instancesSetStaticKey(uuid?: string, data?: OpenvpnInstancesSetStaticKeyRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnInstancesSetStaticKeyResponse>> {
    return this.http.post(`/api/openvpn/instances/set_static_key/${uuid}`, data, config);
  }

  async instancesToggle(uuid: string, enabled?: string, data?: OpenvpnInstancesToggleRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnInstancesToggleResponse>> {
    return this.http.post(`/api/openvpn/instances/toggle/${uuid}/${enabled}`, data, config);
  }


  // Service methods
  async serviceKillSession(data?: OpenvpnServiceKillSessionRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnServiceKillSessionResponse>> {
    return this.http.post(`/api/openvpn/service/kill_session`, data, config);
  }

  async serviceReconfigure(data?: OpenvpnServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnServiceReconfigureResponse>> {
    return this.http.post(`/api/openvpn/service/reconfigure`, data, config);
  }

  async serviceRestartService(id?: string, data?: OpenvpnServiceRestartServiceRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnServiceRestartServiceResponse>> {
    return this.http.post(`/api/openvpn/service/restart_service/${id}`, data, config);
  }

  async serviceSearchRoutes(config?: RequestConfig): Promise<ApiResponse<OpenvpnServiceSearchRoutesResponse>> {
    return this.http.get(`/api/openvpn/service/search_routes`, config);
  }

  async serviceSearchSessions(config?: RequestConfig): Promise<ApiResponse<OpenvpnServiceSearchSessionsResponse>> {
    return this.http.get(`/api/openvpn/service/search_sessions`, config);
  }

  async serviceStartService(id?: string, data?: OpenvpnServiceStartServiceRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnServiceStartServiceResponse>> {
    return this.http.post(`/api/openvpn/service/start_service/${id}`, data, config);
  }

  async serviceStopService(id?: string, data?: OpenvpnServiceStopServiceRequest, config?: RequestConfig): Promise<ApiResponse<OpenvpnServiceStopServiceResponse>> {
    return this.http.post(`/api/openvpn/service/stop_service/${id}`, data, config);
  }

}
