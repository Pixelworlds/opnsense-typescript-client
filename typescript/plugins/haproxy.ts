import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Haproxy module

// Model field types

// Export types
export interface HaproxyExportConfigResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyExportDiffResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyExportDownloadResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Maintenance types
export interface HaproxyMaintenanceCertActionsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyMaintenanceCertDiffResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyMaintenanceCertSyncResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyMaintenanceCertSyncBulkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyMaintenanceFetchCronIntegrationRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxyMaintenanceFetchCronIntegrationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyMaintenanceGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyMaintenanceSearchCertificateDiffResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyMaintenanceSearchServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyMaintenanceServerStateResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyMaintenanceServerStateBulkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyMaintenanceServerWeightResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyMaintenanceServerWeightBulkResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyMaintenanceSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxyMaintenanceSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface HaproxyServiceConfigtestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxyServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxyServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxyServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxyServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface HaproxySettingsAddAclRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsAddAclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsAddActionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsAddActionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsAddBackendRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsAddBackendResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsAddCpuRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsAddCpuResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsAddErrorfileRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsAddErrorfileResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsAddFcgiRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsAddFcgiResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsAddFrontendRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsAddFrontendResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsAddGroupRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsAddGroupResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsAddHealthcheckRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsAddHealthcheckResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsAddLuaRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsAddLuaResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsAddMapfileRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsAddMapfileResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsAddServerRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsAddServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsAddUserRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsAddUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsAddmailerRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsAddmailerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsAddresolverRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsAddresolverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsDelAclRequest {
  uuid: string;
}

export interface HaproxySettingsDelAclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsDelActionRequest {
  uuid: string;
}

export interface HaproxySettingsDelActionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsDelBackendRequest {
  uuid: string;
}

export interface HaproxySettingsDelBackendResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsDelCpuRequest {
  uuid: string;
}

export interface HaproxySettingsDelCpuResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsDelErrorfileRequest {
  uuid: string;
}

export interface HaproxySettingsDelErrorfileResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsDelFcgiRequest {
  uuid: string;
}

export interface HaproxySettingsDelFcgiResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsDelFrontendRequest {
  uuid: string;
}

export interface HaproxySettingsDelFrontendResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsDelGroupRequest {
  uuid: string;
}

export interface HaproxySettingsDelGroupResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsDelHealthcheckRequest {
  uuid: string;
}

export interface HaproxySettingsDelHealthcheckResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsDelLuaRequest {
  uuid: string;
}

export interface HaproxySettingsDelLuaResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsDelMapfileRequest {
  uuid: string;
}

export interface HaproxySettingsDelMapfileResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsDelServerRequest {
  uuid: string;
}

export interface HaproxySettingsDelServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsDelUserRequest {
  uuid: string;
}

export interface HaproxySettingsDelUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsDelmailerRequest {
  uuid: string;
}

export interface HaproxySettingsDelmailerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsDelresolverRequest {
  uuid: string;
}

export interface HaproxySettingsDelresolverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetAclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetActionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetBackendResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetCpuResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetErrorfileResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetFcgiResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetFrontendResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetGroupResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetHealthcheckResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetLuaResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetMapfileResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetmailerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsGetresolverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetAclRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetAclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetActionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetActionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetBackendRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetBackendResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetCpuRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetCpuResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetErrorfileRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetErrorfileResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetFcgiRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetFcgiResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetFrontendRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetFrontendResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetGroupRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetGroupResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetHealthcheckRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetHealthcheckResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetLuaRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetLuaResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetMapfileRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetMapfileResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetServerRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetUserRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetmailerRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetmailerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsSetresolverRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface HaproxySettingsSetresolverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsToggleBackendRequest {
  enabled?: boolean;
}

export interface HaproxySettingsToggleBackendResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsToggleCpuRequest {
  enabled?: boolean;
}

export interface HaproxySettingsToggleCpuResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsToggleFrontendRequest {
  enabled?: boolean;
}

export interface HaproxySettingsToggleFrontendResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsToggleGroupRequest {
  enabled?: boolean;
}

export interface HaproxySettingsToggleGroupResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsToggleLuaRequest {
  enabled?: boolean;
}

export interface HaproxySettingsToggleLuaResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsToggleServerRequest {
  enabled?: boolean;
}

export interface HaproxySettingsToggleServerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsToggleUserRequest {
  enabled?: boolean;
}

export interface HaproxySettingsToggleUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsTogglemailerRequest {
  enabled?: boolean;
}

export interface HaproxySettingsTogglemailerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxySettingsToggleresolverRequest {
  enabled?: boolean;
}

export interface HaproxySettingsToggleresolverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Statistics types
export interface HaproxyStatisticsCountersResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyStatisticsInfoResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface HaproxyStatisticsTablesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface HaproxyFrontend {
}

export interface HaproxyBackend {
}

export interface HaproxyServer {
}

export interface HaproxyHealthcheck {
}

export interface HaproxyAcl {
}

export interface HaproxyAction {
}

export interface HaproxyLua {
}

export interface HaproxyFcgi {
}

export interface HaproxyErrorfile {
}

export interface HaproxyMapfile {
}

export interface HaproxyGroup {
}

export interface HaproxyUser {
}

export interface HaproxyCpu {
}

export interface HaproxyResolver {
}

export interface HaproxyMailer {
}

export class HaproxyApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/haproxy';
  }

  // Export methods
  async exportConfig(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyExportConfigResponse>> {
    return this.client.get(`${this.basePath}/export/config`, config);
  }

  async exportDiff(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyExportDiffResponse>> {
    return this.client.get(`${this.basePath}/export/diff`, config);
  }

  async exportDownload(type: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyExportDownloadResponse>> {
    return this.client.get(`${this.basePath}/export/download/${type}`, config);
  }


  // Maintenance methods
  async maintenanceCertActions(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyMaintenanceCertActionsResponse>> {
    return this.client.get(`${this.basePath}/maintenance/cert_actions`, config);
  }

  async maintenanceCertDiff(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyMaintenanceCertDiffResponse>> {
    return this.client.get(`${this.basePath}/maintenance/cert_diff`, config);
  }

  async maintenanceCertSync(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyMaintenanceCertSyncResponse>> {
    return this.client.get(`${this.basePath}/maintenance/cert_sync`, config);
  }

  async maintenanceCertSyncBulk(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyMaintenanceCertSyncBulkResponse>> {
    return this.client.get(`${this.basePath}/maintenance/cert_sync_bulk`, config);
  }

  async maintenanceFetchCronIntegration(data?: HaproxyMaintenanceFetchCronIntegrationRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyMaintenanceFetchCronIntegrationResponse>> {
    return this.client.post(`${this.basePath}/maintenance/fetch_cron_integration`, data, config);
  }

  async maintenanceGet(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyMaintenanceGetResponse>> {
    return this.client.get(`${this.basePath}/maintenance/get`, config);
  }

  async maintenanceSearchCertificateDiff(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyMaintenanceSearchCertificateDiffResponse>> {
    return this.client.get(`${this.basePath}/maintenance/search_certificate_diff`, config);
  }

  async maintenanceSearchServer(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyMaintenanceSearchServerResponse>> {
    return this.client.get(`${this.basePath}/maintenance/search_server`, config);
  }

  async maintenanceServerState(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyMaintenanceServerStateResponse>> {
    return this.client.get(`${this.basePath}/maintenance/server_state`, config);
  }

  async maintenanceServerStateBulk(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyMaintenanceServerStateBulkResponse>> {
    return this.client.get(`${this.basePath}/maintenance/server_state_bulk`, config);
  }

  async maintenanceServerWeight(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyMaintenanceServerWeightResponse>> {
    return this.client.get(`${this.basePath}/maintenance/server_weight`, config);
  }

  async maintenanceServerWeightBulk(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyMaintenanceServerWeightBulkResponse>> {
    return this.client.get(`${this.basePath}/maintenance/server_weight_bulk`, config);
  }

  async maintenanceSet(data?: HaproxyMaintenanceSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyMaintenanceSetResponse>> {
    return this.client.post(`${this.basePath}/maintenance/set`, data, config);
  }


  // Service methods
  async serviceConfigtest(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyServiceConfigtestResponse>> {
    return this.client.get(`${this.basePath}/service/configtest`, config);
  }

  async serviceReconfigure(data?: HaproxyServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: HaproxyServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: HaproxyServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: HaproxyServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddAcl(data?: HaproxySettingsAddAclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsAddAclResponse>> {
    return this.client.post(`${this.basePath}/settings/add_acl`, data, config);
  }

  async settingsAddAction(data?: HaproxySettingsAddActionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsAddActionResponse>> {
    return this.client.post(`${this.basePath}/settings/add_action`, data, config);
  }

  async settingsAddBackend(data?: HaproxySettingsAddBackendRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsAddBackendResponse>> {
    return this.client.post(`${this.basePath}/settings/add_backend`, data, config);
  }

  async settingsAddCpu(data?: HaproxySettingsAddCpuRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsAddCpuResponse>> {
    return this.client.post(`${this.basePath}/settings/add_cpu`, data, config);
  }

  async settingsAddErrorfile(data?: HaproxySettingsAddErrorfileRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsAddErrorfileResponse>> {
    return this.client.post(`${this.basePath}/settings/add_errorfile`, data, config);
  }

  async settingsAddFcgi(data?: HaproxySettingsAddFcgiRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsAddFcgiResponse>> {
    return this.client.post(`${this.basePath}/settings/add_fcgi`, data, config);
  }

  async settingsAddFrontend(data?: HaproxySettingsAddFrontendRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsAddFrontendResponse>> {
    return this.client.post(`${this.basePath}/settings/add_frontend`, data, config);
  }

  async settingsAddGroup(data?: HaproxySettingsAddGroupRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsAddGroupResponse>> {
    return this.client.post(`${this.basePath}/settings/add_group`, data, config);
  }

  async settingsAddHealthcheck(data?: HaproxySettingsAddHealthcheckRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsAddHealthcheckResponse>> {
    return this.client.post(`${this.basePath}/settings/add_healthcheck`, data, config);
  }

  async settingsAddLua(data?: HaproxySettingsAddLuaRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsAddLuaResponse>> {
    return this.client.post(`${this.basePath}/settings/add_lua`, data, config);
  }

  async settingsAddMapfile(data?: HaproxySettingsAddMapfileRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsAddMapfileResponse>> {
    return this.client.post(`${this.basePath}/settings/add_mapfile`, data, config);
  }

  async settingsAddServer(data?: HaproxySettingsAddServerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsAddServerResponse>> {
    return this.client.post(`${this.basePath}/settings/add_server`, data, config);
  }

  async settingsAddUser(data?: HaproxySettingsAddUserRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsAddUserResponse>> {
    return this.client.post(`${this.basePath}/settings/add_user`, data, config);
  }

  async settingsAddmailer(data?: HaproxySettingsAddmailerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsAddmailerResponse>> {
    return this.client.post(`${this.basePath}/settings/addmailer`, data, config);
  }

  async settingsAddresolver(data?: HaproxySettingsAddresolverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsAddresolverResponse>> {
    return this.client.post(`${this.basePath}/settings/addresolver`, data, config);
  }

  async settingsDelAcl(uuid: string, data?: HaproxySettingsDelAclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsDelAclResponse>> {
    return this.client.post(`${this.basePath}/settings/del_acl/${uuid}`, data, config);
  }

  async settingsDelAction(uuid: string, data?: HaproxySettingsDelActionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsDelActionResponse>> {
    return this.client.post(`${this.basePath}/settings/del_action/${uuid}`, data, config);
  }

  async settingsDelBackend(uuid: string, data?: HaproxySettingsDelBackendRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsDelBackendResponse>> {
    return this.client.post(`${this.basePath}/settings/del_backend/${uuid}`, data, config);
  }

  async settingsDelCpu(uuid: string, data?: HaproxySettingsDelCpuRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsDelCpuResponse>> {
    return this.client.post(`${this.basePath}/settings/del_cpu/${uuid}`, data, config);
  }

  async settingsDelErrorfile(uuid: string, data?: HaproxySettingsDelErrorfileRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsDelErrorfileResponse>> {
    return this.client.post(`${this.basePath}/settings/del_errorfile/${uuid}`, data, config);
  }

  async settingsDelFcgi(uuid: string, data?: HaproxySettingsDelFcgiRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsDelFcgiResponse>> {
    return this.client.post(`${this.basePath}/settings/del_fcgi/${uuid}`, data, config);
  }

  async settingsDelFrontend(uuid: string, data?: HaproxySettingsDelFrontendRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsDelFrontendResponse>> {
    return this.client.post(`${this.basePath}/settings/del_frontend/${uuid}`, data, config);
  }

  async settingsDelGroup(uuid: string, data?: HaproxySettingsDelGroupRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsDelGroupResponse>> {
    return this.client.post(`${this.basePath}/settings/del_group/${uuid}`, data, config);
  }

  async settingsDelHealthcheck(uuid: string, data?: HaproxySettingsDelHealthcheckRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsDelHealthcheckResponse>> {
    return this.client.post(`${this.basePath}/settings/del_healthcheck/${uuid}`, data, config);
  }

  async settingsDelLua(uuid: string, data?: HaproxySettingsDelLuaRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsDelLuaResponse>> {
    return this.client.post(`${this.basePath}/settings/del_lua/${uuid}`, data, config);
  }

  async settingsDelMapfile(uuid: string, data?: HaproxySettingsDelMapfileRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsDelMapfileResponse>> {
    return this.client.post(`${this.basePath}/settings/del_mapfile/${uuid}`, data, config);
  }

  async settingsDelServer(uuid: string, data?: HaproxySettingsDelServerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsDelServerResponse>> {
    return this.client.post(`${this.basePath}/settings/del_server/${uuid}`, data, config);
  }

  async settingsDelUser(uuid: string, data?: HaproxySettingsDelUserRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsDelUserResponse>> {
    return this.client.post(`${this.basePath}/settings/del_user/${uuid}`, data, config);
  }

  async settingsDelmailer(uuid: string, data?: HaproxySettingsDelmailerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsDelmailerResponse>> {
    return this.client.post(`${this.basePath}/settings/delmailer/${uuid}`, data, config);
  }

  async settingsDelresolver(uuid: string, data?: HaproxySettingsDelresolverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsDelresolverResponse>> {
    return this.client.post(`${this.basePath}/settings/delresolver/${uuid}`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetAcl(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetAclResponse>> {
    return this.client.get(`${this.basePath}/settings/get_acl/${uuid}`, config);
  }

  async settingsGetAction(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetActionResponse>> {
    return this.client.get(`${this.basePath}/settings/get_action/${uuid}`, config);
  }

  async settingsGetBackend(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetBackendResponse>> {
    return this.client.get(`${this.basePath}/settings/get_backend/${uuid}`, config);
  }

  async settingsGetCpu(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetCpuResponse>> {
    return this.client.get(`${this.basePath}/settings/get_cpu/${uuid}`, config);
  }

  async settingsGetErrorfile(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetErrorfileResponse>> {
    return this.client.get(`${this.basePath}/settings/get_errorfile/${uuid}`, config);
  }

  async settingsGetFcgi(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetFcgiResponse>> {
    return this.client.get(`${this.basePath}/settings/get_fcgi/${uuid}`, config);
  }

  async settingsGetFrontend(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetFrontendResponse>> {
    return this.client.get(`${this.basePath}/settings/get_frontend/${uuid}`, config);
  }

  async settingsGetGroup(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetGroupResponse>> {
    return this.client.get(`${this.basePath}/settings/get_group/${uuid}`, config);
  }

  async settingsGetHealthcheck(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetHealthcheckResponse>> {
    return this.client.get(`${this.basePath}/settings/get_healthcheck/${uuid}`, config);
  }

  async settingsGetLua(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetLuaResponse>> {
    return this.client.get(`${this.basePath}/settings/get_lua/${uuid}`, config);
  }

  async settingsGetMapfile(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetMapfileResponse>> {
    return this.client.get(`${this.basePath}/settings/get_mapfile/${uuid}`, config);
  }

  async settingsGetServer(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetServerResponse>> {
    return this.client.get(`${this.basePath}/settings/get_server/${uuid}`, config);
  }

  async settingsGetUser(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetUserResponse>> {
    return this.client.get(`${this.basePath}/settings/get_user/${uuid}`, config);
  }

  async settingsGetmailer(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetmailerResponse>> {
    return this.client.get(`${this.basePath}/settings/getmailer/${uuid}`, config);
  }

  async settingsGetresolver(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsGetresolverResponse>> {
    return this.client.get(`${this.basePath}/settings/getresolver/${uuid}`, config);
  }

  async settingsSet(data?: HaproxySettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetAcl(uuid: string, data?: HaproxySettingsSetAclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetAclResponse>> {
    return this.client.post(`${this.basePath}/settings/set_acl/${uuid}`, data, config);
  }

  async settingsSetAction(uuid: string, data?: HaproxySettingsSetActionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetActionResponse>> {
    return this.client.post(`${this.basePath}/settings/set_action/${uuid}`, data, config);
  }

  async settingsSetBackend(uuid: string, data?: HaproxySettingsSetBackendRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetBackendResponse>> {
    return this.client.post(`${this.basePath}/settings/set_backend/${uuid}`, data, config);
  }

  async settingsSetCpu(uuid: string, data?: HaproxySettingsSetCpuRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetCpuResponse>> {
    return this.client.post(`${this.basePath}/settings/set_cpu/${uuid}`, data, config);
  }

  async settingsSetErrorfile(uuid: string, data?: HaproxySettingsSetErrorfileRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetErrorfileResponse>> {
    return this.client.post(`${this.basePath}/settings/set_errorfile/${uuid}`, data, config);
  }

  async settingsSetFcgi(uuid: string, data?: HaproxySettingsSetFcgiRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetFcgiResponse>> {
    return this.client.post(`${this.basePath}/settings/set_fcgi/${uuid}`, data, config);
  }

  async settingsSetFrontend(uuid: string, data?: HaproxySettingsSetFrontendRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetFrontendResponse>> {
    return this.client.post(`${this.basePath}/settings/set_frontend/${uuid}`, data, config);
  }

  async settingsSetGroup(uuid: string, data?: HaproxySettingsSetGroupRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetGroupResponse>> {
    return this.client.post(`${this.basePath}/settings/set_group/${uuid}`, data, config);
  }

  async settingsSetHealthcheck(uuid: string, data?: HaproxySettingsSetHealthcheckRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetHealthcheckResponse>> {
    return this.client.post(`${this.basePath}/settings/set_healthcheck/${uuid}`, data, config);
  }

  async settingsSetLua(uuid: string, data?: HaproxySettingsSetLuaRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetLuaResponse>> {
    return this.client.post(`${this.basePath}/settings/set_lua/${uuid}`, data, config);
  }

  async settingsSetMapfile(uuid: string, data?: HaproxySettingsSetMapfileRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetMapfileResponse>> {
    return this.client.post(`${this.basePath}/settings/set_mapfile/${uuid}`, data, config);
  }

  async settingsSetServer(uuid: string, data?: HaproxySettingsSetServerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetServerResponse>> {
    return this.client.post(`${this.basePath}/settings/set_server/${uuid}`, data, config);
  }

  async settingsSetUser(uuid: string, data?: HaproxySettingsSetUserRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetUserResponse>> {
    return this.client.post(`${this.basePath}/settings/set_user/${uuid}`, data, config);
  }

  async settingsSetmailer(uuid: string, data?: HaproxySettingsSetmailerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetmailerResponse>> {
    return this.client.post(`${this.basePath}/settings/setmailer/${uuid}`, data, config);
  }

  async settingsSetresolver(uuid: string, data?: HaproxySettingsSetresolverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsSetresolverResponse>> {
    return this.client.post(`${this.basePath}/settings/setresolver/${uuid}`, data, config);
  }

  async settingsToggleBackend(uuid: string, enabled?: string, data?: HaproxySettingsToggleBackendRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsToggleBackendResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_backend/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleCpu(uuid: string, enabled?: string, data?: HaproxySettingsToggleCpuRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsToggleCpuResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_cpu/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleFrontend(uuid: string, data?: HaproxySettingsToggleFrontendRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsToggleFrontendResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_frontend/${uuid}`, data, config);
  }

  async settingsToggleGroup(uuid: string, enabled?: string, data?: HaproxySettingsToggleGroupRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsToggleGroupResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_group/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleLua(uuid: string, enabled?: string, data?: HaproxySettingsToggleLuaRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsToggleLuaResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_lua/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleServer(uuid: string, enabled?: string, data?: HaproxySettingsToggleServerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsToggleServerResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_server/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleUser(uuid: string, enabled?: string, data?: HaproxySettingsToggleUserRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsToggleUserResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_user/${uuid}/${enabled}`, data, config);
  }

  async settingsTogglemailer(uuid: string, enabled?: string, data?: HaproxySettingsTogglemailerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsTogglemailerResponse>> {
    return this.client.post(`${this.basePath}/settings/togglemailer/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleresolver(uuid: string, enabled?: string, data?: HaproxySettingsToggleresolverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxySettingsToggleresolverResponse>> {
    return this.client.post(`${this.basePath}/settings/toggleresolver/${uuid}/${enabled}`, data, config);
  }


  // Statistics methods
  async statisticsCounters(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyStatisticsCountersResponse>> {
    return this.client.get(`${this.basePath}/statistics/counters`, config);
  }

  async statisticsInfo(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyStatisticsInfoResponse>> {
    return this.client.get(`${this.basePath}/statistics/info`, config);
  }

  async statisticsTables(config?: AxiosRequestConfig): Promise<AxiosResponse<HaproxyStatisticsTablesResponse>> {
    return this.client.get(`${this.basePath}/statistics/tables`, config);
  }

}
