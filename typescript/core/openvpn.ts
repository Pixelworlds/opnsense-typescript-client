import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/openvpn';
  }

  // ClientOverwrites methods
  async clientOverwritesAdd(data?: OpenvpnClientOverwritesAddRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnClientOverwritesAddResponse>> {
    return this.client.post(`${this.basePath}/client_overwrites/add`, data, config);
  }

  async clientOverwritesDel(uuid: string, data?: OpenvpnClientOverwritesDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnClientOverwritesDelResponse>> {
    return this.client.post(`${this.basePath}/client_overwrites/del/${uuid}`, data, config);
  }

  async clientOverwritesGet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnClientOverwritesGetResponse>> {
    return this.client.get(`${this.basePath}/client_overwrites/get/${uuid}`, config);
  }

  async clientOverwritesSet(uuid?: string, data?: OpenvpnClientOverwritesSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnClientOverwritesSetResponse>> {
    return this.client.post(`${this.basePath}/client_overwrites/set/${uuid}`, data, config);
  }

  async clientOverwritesToggle(uuid: string, enabled?: string, data?: OpenvpnClientOverwritesToggleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnClientOverwritesToggleResponse>> {
    return this.client.post(`${this.basePath}/client_overwrites/toggle/${uuid}/${enabled}`, data, config);
  }


  // Export methods
  async exportAccounts(vpnid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnExportAccountsResponse>> {
    return this.client.get(`${this.basePath}/export/accounts/${vpnid}`, config);
  }

  async exportDownload(vpnid: string, certref?: string, data?: OpenvpnExportDownloadRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnExportDownloadResponse>> {
    return this.client.post(`${this.basePath}/export/download/${vpnid}/${certref}`, data, config);
  }

  async exportProviders(config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnExportProvidersResponse>> {
    return this.client.get(`${this.basePath}/export/providers`, config);
  }

  async exportStorePresets(vpnid: string, data?: OpenvpnExportStorePresetsRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnExportStorePresetsResponse>> {
    return this.client.post(`${this.basePath}/export/store_presets/${vpnid}`, data, config);
  }

  async exportTemplates(config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnExportTemplatesResponse>> {
    return this.client.get(`${this.basePath}/export/templates`, config);
  }

  async exportValidatePresets(vpnid: string, data?: OpenvpnExportValidatePresetsRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnExportValidatePresetsResponse>> {
    return this.client.post(`${this.basePath}/export/validate_presets/${vpnid}`, data, config);
  }


  // Instances methods
  async instancesAdd(data?: OpenvpnInstancesAddRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnInstancesAddResponse>> {
    return this.client.post(`${this.basePath}/instances/add`, data, config);
  }

  async instancesAddStaticKey(data?: OpenvpnInstancesAddStaticKeyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnInstancesAddStaticKeyResponse>> {
    return this.client.post(`${this.basePath}/instances/add_static_key`, data, config);
  }

  async instancesDel(uuid: string, data?: OpenvpnInstancesDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnInstancesDelResponse>> {
    return this.client.post(`${this.basePath}/instances/del/${uuid}`, data, config);
  }

  async instancesDelStaticKey(uuid: string, data?: OpenvpnInstancesDelStaticKeyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnInstancesDelStaticKeyResponse>> {
    return this.client.post(`${this.basePath}/instances/del_static_key/${uuid}`, data, config);
  }

  async instancesGenKey(type?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnInstancesGenKeyResponse>> {
    return this.client.get(`${this.basePath}/instances/gen_key/${type}`, config);
  }

  async instancesGet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnInstancesGetResponse>> {
    return this.client.get(`${this.basePath}/instances/get/${uuid}`, config);
  }

  async instancesGetStaticKey(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnInstancesGetStaticKeyResponse>> {
    return this.client.get(`${this.basePath}/instances/get_static_key/${uuid}`, config);
  }

  async instancesSet(uuid?: string, data?: OpenvpnInstancesSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnInstancesSetResponse>> {
    return this.client.post(`${this.basePath}/instances/set/${uuid}`, data, config);
  }

  async instancesSetStaticKey(uuid?: string, data?: OpenvpnInstancesSetStaticKeyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnInstancesSetStaticKeyResponse>> {
    return this.client.post(`${this.basePath}/instances/set_static_key/${uuid}`, data, config);
  }

  async instancesToggle(uuid: string, enabled?: string, data?: OpenvpnInstancesToggleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnInstancesToggleResponse>> {
    return this.client.post(`${this.basePath}/instances/toggle/${uuid}/${enabled}`, data, config);
  }


  // Service methods
  async serviceKillSession(data?: OpenvpnServiceKillSessionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnServiceKillSessionResponse>> {
    return this.client.post(`${this.basePath}/service/kill_session`, data, config);
  }

  async serviceReconfigure(data?: OpenvpnServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestartService(id?: string, data?: OpenvpnServiceRestartServiceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnServiceRestartServiceResponse>> {
    return this.client.post(`${this.basePath}/service/restart_service/${id}`, data, config);
  }

  async serviceSearchRoutes(config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnServiceSearchRoutesResponse>> {
    return this.client.get(`${this.basePath}/service/search_routes`, config);
  }

  async serviceSearchSessions(config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnServiceSearchSessionsResponse>> {
    return this.client.get(`${this.basePath}/service/search_sessions`, config);
  }

  async serviceStartService(id?: string, data?: OpenvpnServiceStartServiceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnServiceStartServiceResponse>> {
    return this.client.post(`${this.basePath}/service/start_service/${id}`, data, config);
  }

  async serviceStopService(id?: string, data?: OpenvpnServiceStopServiceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<OpenvpnServiceStopServiceResponse>> {
    return this.client.post(`${this.basePath}/service/stop_service/${id}`, data, config);
  }

}
