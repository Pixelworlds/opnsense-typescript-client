import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Export methods
  async exportConfig(config?: RequestConfig): Promise<ApiResponse<HaproxyExportConfigResponse>> {
    return this.http.get(`/api/haproxy/export/config`, config);
  }

  async exportDiff(config?: RequestConfig): Promise<ApiResponse<HaproxyExportDiffResponse>> {
    return this.http.get(`/api/haproxy/export/diff`, config);
  }

  async exportDownload(type: string, config?: RequestConfig): Promise<ApiResponse<HaproxyExportDownloadResponse>> {
    return this.http.get(`/api/haproxy/export/download/${type}`, config);
  }


  // Maintenance methods
  async maintenanceCertActions(config?: RequestConfig): Promise<ApiResponse<HaproxyMaintenanceCertActionsResponse>> {
    return this.http.get(`/api/haproxy/maintenance/cert_actions`, config);
  }

  async maintenanceCertDiff(config?: RequestConfig): Promise<ApiResponse<HaproxyMaintenanceCertDiffResponse>> {
    return this.http.get(`/api/haproxy/maintenance/cert_diff`, config);
  }

  async maintenanceCertSync(config?: RequestConfig): Promise<ApiResponse<HaproxyMaintenanceCertSyncResponse>> {
    return this.http.get(`/api/haproxy/maintenance/cert_sync`, config);
  }

  async maintenanceCertSyncBulk(config?: RequestConfig): Promise<ApiResponse<HaproxyMaintenanceCertSyncBulkResponse>> {
    return this.http.get(`/api/haproxy/maintenance/cert_sync_bulk`, config);
  }

  async maintenanceFetchCronIntegration(data?: HaproxyMaintenanceFetchCronIntegrationRequest, config?: RequestConfig): Promise<ApiResponse<HaproxyMaintenanceFetchCronIntegrationResponse>> {
    return this.http.post(`/api/haproxy/maintenance/fetch_cron_integration`, data, config);
  }

  async maintenanceGet(config?: RequestConfig): Promise<ApiResponse<HaproxyMaintenanceGetResponse>> {
    return this.http.get(`/api/haproxy/maintenance/get`, config);
  }

  async maintenanceSearchCertificateDiff(config?: RequestConfig): Promise<ApiResponse<HaproxyMaintenanceSearchCertificateDiffResponse>> {
    return this.http.get(`/api/haproxy/maintenance/search_certificate_diff`, config);
  }

  async maintenanceSearchServer(config?: RequestConfig): Promise<ApiResponse<HaproxyMaintenanceSearchServerResponse>> {
    return this.http.get(`/api/haproxy/maintenance/search_server`, config);
  }

  async maintenanceServerState(config?: RequestConfig): Promise<ApiResponse<HaproxyMaintenanceServerStateResponse>> {
    return this.http.get(`/api/haproxy/maintenance/server_state`, config);
  }

  async maintenanceServerStateBulk(config?: RequestConfig): Promise<ApiResponse<HaproxyMaintenanceServerStateBulkResponse>> {
    return this.http.get(`/api/haproxy/maintenance/server_state_bulk`, config);
  }

  async maintenanceServerWeight(config?: RequestConfig): Promise<ApiResponse<HaproxyMaintenanceServerWeightResponse>> {
    return this.http.get(`/api/haproxy/maintenance/server_weight`, config);
  }

  async maintenanceServerWeightBulk(config?: RequestConfig): Promise<ApiResponse<HaproxyMaintenanceServerWeightBulkResponse>> {
    return this.http.get(`/api/haproxy/maintenance/server_weight_bulk`, config);
  }

  async maintenanceSet(data?: HaproxyMaintenanceSetRequest, config?: RequestConfig): Promise<ApiResponse<HaproxyMaintenanceSetResponse>> {
    return this.http.post(`/api/haproxy/maintenance/set`, data, config);
  }


  // Service methods
  async serviceConfigtest(config?: RequestConfig): Promise<ApiResponse<HaproxyServiceConfigtestResponse>> {
    return this.http.get(`/api/haproxy/service/configtest`, config);
  }

  async serviceReconfigure(data?: HaproxyServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<HaproxyServiceReconfigureResponse>> {
    return this.http.post(`/api/haproxy/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: HaproxyServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<HaproxyServiceRestartResponse>> {
    return this.http.post(`/api/haproxy/service/restart`, data, config);
  }

  async serviceStart(data?: HaproxyServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<HaproxyServiceStartResponse>> {
    return this.http.post(`/api/haproxy/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<HaproxyServiceStatusResponse>> {
    return this.http.get(`/api/haproxy/service/status`, config);
  }

  async serviceStop(data?: HaproxyServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<HaproxyServiceStopResponse>> {
    return this.http.post(`/api/haproxy/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddAcl(data?: HaproxySettingsAddAclRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsAddAclResponse>> {
    return this.http.post(`/api/haproxy/settings/add_acl`, data, config);
  }

  async settingsAddAction(data?: HaproxySettingsAddActionRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsAddActionResponse>> {
    return this.http.post(`/api/haproxy/settings/add_action`, data, config);
  }

  async settingsAddBackend(data?: HaproxySettingsAddBackendRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsAddBackendResponse>> {
    return this.http.post(`/api/haproxy/settings/add_backend`, data, config);
  }

  async settingsAddCpu(data?: HaproxySettingsAddCpuRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsAddCpuResponse>> {
    return this.http.post(`/api/haproxy/settings/add_cpu`, data, config);
  }

  async settingsAddErrorfile(data?: HaproxySettingsAddErrorfileRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsAddErrorfileResponse>> {
    return this.http.post(`/api/haproxy/settings/add_errorfile`, data, config);
  }

  async settingsAddFcgi(data?: HaproxySettingsAddFcgiRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsAddFcgiResponse>> {
    return this.http.post(`/api/haproxy/settings/add_fcgi`, data, config);
  }

  async settingsAddFrontend(data?: HaproxySettingsAddFrontendRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsAddFrontendResponse>> {
    return this.http.post(`/api/haproxy/settings/add_frontend`, data, config);
  }

  async settingsAddGroup(data?: HaproxySettingsAddGroupRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsAddGroupResponse>> {
    return this.http.post(`/api/haproxy/settings/add_group`, data, config);
  }

  async settingsAddHealthcheck(data?: HaproxySettingsAddHealthcheckRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsAddHealthcheckResponse>> {
    return this.http.post(`/api/haproxy/settings/add_healthcheck`, data, config);
  }

  async settingsAddLua(data?: HaproxySettingsAddLuaRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsAddLuaResponse>> {
    return this.http.post(`/api/haproxy/settings/add_lua`, data, config);
  }

  async settingsAddMapfile(data?: HaproxySettingsAddMapfileRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsAddMapfileResponse>> {
    return this.http.post(`/api/haproxy/settings/add_mapfile`, data, config);
  }

  async settingsAddServer(data?: HaproxySettingsAddServerRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsAddServerResponse>> {
    return this.http.post(`/api/haproxy/settings/add_server`, data, config);
  }

  async settingsAddUser(data?: HaproxySettingsAddUserRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsAddUserResponse>> {
    return this.http.post(`/api/haproxy/settings/add_user`, data, config);
  }

  async settingsAddmailer(data?: HaproxySettingsAddmailerRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsAddmailerResponse>> {
    return this.http.post(`/api/haproxy/settings/addmailer`, data, config);
  }

  async settingsAddresolver(data?: HaproxySettingsAddresolverRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsAddresolverResponse>> {
    return this.http.post(`/api/haproxy/settings/addresolver`, data, config);
  }

  async settingsDelAcl(uuid: string, data?: HaproxySettingsDelAclRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsDelAclResponse>> {
    return this.http.post(`/api/haproxy/settings/del_acl/${uuid}`, data, config);
  }

  async settingsDelAction(uuid: string, data?: HaproxySettingsDelActionRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsDelActionResponse>> {
    return this.http.post(`/api/haproxy/settings/del_action/${uuid}`, data, config);
  }

  async settingsDelBackend(uuid: string, data?: HaproxySettingsDelBackendRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsDelBackendResponse>> {
    return this.http.post(`/api/haproxy/settings/del_backend/${uuid}`, data, config);
  }

  async settingsDelCpu(uuid: string, data?: HaproxySettingsDelCpuRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsDelCpuResponse>> {
    return this.http.post(`/api/haproxy/settings/del_cpu/${uuid}`, data, config);
  }

  async settingsDelErrorfile(uuid: string, data?: HaproxySettingsDelErrorfileRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsDelErrorfileResponse>> {
    return this.http.post(`/api/haproxy/settings/del_errorfile/${uuid}`, data, config);
  }

  async settingsDelFcgi(uuid: string, data?: HaproxySettingsDelFcgiRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsDelFcgiResponse>> {
    return this.http.post(`/api/haproxy/settings/del_fcgi/${uuid}`, data, config);
  }

  async settingsDelFrontend(uuid: string, data?: HaproxySettingsDelFrontendRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsDelFrontendResponse>> {
    return this.http.post(`/api/haproxy/settings/del_frontend/${uuid}`, data, config);
  }

  async settingsDelGroup(uuid: string, data?: HaproxySettingsDelGroupRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsDelGroupResponse>> {
    return this.http.post(`/api/haproxy/settings/del_group/${uuid}`, data, config);
  }

  async settingsDelHealthcheck(uuid: string, data?: HaproxySettingsDelHealthcheckRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsDelHealthcheckResponse>> {
    return this.http.post(`/api/haproxy/settings/del_healthcheck/${uuid}`, data, config);
  }

  async settingsDelLua(uuid: string, data?: HaproxySettingsDelLuaRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsDelLuaResponse>> {
    return this.http.post(`/api/haproxy/settings/del_lua/${uuid}`, data, config);
  }

  async settingsDelMapfile(uuid: string, data?: HaproxySettingsDelMapfileRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsDelMapfileResponse>> {
    return this.http.post(`/api/haproxy/settings/del_mapfile/${uuid}`, data, config);
  }

  async settingsDelServer(uuid: string, data?: HaproxySettingsDelServerRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsDelServerResponse>> {
    return this.http.post(`/api/haproxy/settings/del_server/${uuid}`, data, config);
  }

  async settingsDelUser(uuid: string, data?: HaproxySettingsDelUserRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsDelUserResponse>> {
    return this.http.post(`/api/haproxy/settings/del_user/${uuid}`, data, config);
  }

  async settingsDelmailer(uuid: string, data?: HaproxySettingsDelmailerRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsDelmailerResponse>> {
    return this.http.post(`/api/haproxy/settings/delmailer/${uuid}`, data, config);
  }

  async settingsDelresolver(uuid: string, data?: HaproxySettingsDelresolverRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsDelresolverResponse>> {
    return this.http.post(`/api/haproxy/settings/delresolver/${uuid}`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetResponse>> {
    return this.http.get(`/api/haproxy/settings/get`, config);
  }

  async settingsGetAcl(uuid?: string, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetAclResponse>> {
    return this.http.get(`/api/haproxy/settings/get_acl/${uuid}`, config);
  }

  async settingsGetAction(uuid?: string, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetActionResponse>> {
    return this.http.get(`/api/haproxy/settings/get_action/${uuid}`, config);
  }

  async settingsGetBackend(uuid?: string, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetBackendResponse>> {
    return this.http.get(`/api/haproxy/settings/get_backend/${uuid}`, config);
  }

  async settingsGetCpu(uuid?: string, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetCpuResponse>> {
    return this.http.get(`/api/haproxy/settings/get_cpu/${uuid}`, config);
  }

  async settingsGetErrorfile(uuid?: string, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetErrorfileResponse>> {
    return this.http.get(`/api/haproxy/settings/get_errorfile/${uuid}`, config);
  }

  async settingsGetFcgi(uuid?: string, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetFcgiResponse>> {
    return this.http.get(`/api/haproxy/settings/get_fcgi/${uuid}`, config);
  }

  async settingsGetFrontend(uuid?: string, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetFrontendResponse>> {
    return this.http.get(`/api/haproxy/settings/get_frontend/${uuid}`, config);
  }

  async settingsGetGroup(uuid?: string, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetGroupResponse>> {
    return this.http.get(`/api/haproxy/settings/get_group/${uuid}`, config);
  }

  async settingsGetHealthcheck(uuid?: string, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetHealthcheckResponse>> {
    return this.http.get(`/api/haproxy/settings/get_healthcheck/${uuid}`, config);
  }

  async settingsGetLua(uuid?: string, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetLuaResponse>> {
    return this.http.get(`/api/haproxy/settings/get_lua/${uuid}`, config);
  }

  async settingsGetMapfile(uuid?: string, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetMapfileResponse>> {
    return this.http.get(`/api/haproxy/settings/get_mapfile/${uuid}`, config);
  }

  async settingsGetServer(uuid?: string, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetServerResponse>> {
    return this.http.get(`/api/haproxy/settings/get_server/${uuid}`, config);
  }

  async settingsGetUser(uuid?: string, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetUserResponse>> {
    return this.http.get(`/api/haproxy/settings/get_user/${uuid}`, config);
  }

  async settingsGetmailer(uuid?: string, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetmailerResponse>> {
    return this.http.get(`/api/haproxy/settings/getmailer/${uuid}`, config);
  }

  async settingsGetresolver(uuid?: string, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsGetresolverResponse>> {
    return this.http.get(`/api/haproxy/settings/getresolver/${uuid}`, config);
  }

  async settingsSet(data?: HaproxySettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetResponse>> {
    return this.http.post(`/api/haproxy/settings/set`, data, config);
  }

  async settingsSetAcl(uuid: string, data?: HaproxySettingsSetAclRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetAclResponse>> {
    return this.http.post(`/api/haproxy/settings/set_acl/${uuid}`, data, config);
  }

  async settingsSetAction(uuid: string, data?: HaproxySettingsSetActionRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetActionResponse>> {
    return this.http.post(`/api/haproxy/settings/set_action/${uuid}`, data, config);
  }

  async settingsSetBackend(uuid: string, data?: HaproxySettingsSetBackendRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetBackendResponse>> {
    return this.http.post(`/api/haproxy/settings/set_backend/${uuid}`, data, config);
  }

  async settingsSetCpu(uuid: string, data?: HaproxySettingsSetCpuRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetCpuResponse>> {
    return this.http.post(`/api/haproxy/settings/set_cpu/${uuid}`, data, config);
  }

  async settingsSetErrorfile(uuid: string, data?: HaproxySettingsSetErrorfileRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetErrorfileResponse>> {
    return this.http.post(`/api/haproxy/settings/set_errorfile/${uuid}`, data, config);
  }

  async settingsSetFcgi(uuid: string, data?: HaproxySettingsSetFcgiRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetFcgiResponse>> {
    return this.http.post(`/api/haproxy/settings/set_fcgi/${uuid}`, data, config);
  }

  async settingsSetFrontend(uuid: string, data?: HaproxySettingsSetFrontendRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetFrontendResponse>> {
    return this.http.post(`/api/haproxy/settings/set_frontend/${uuid}`, data, config);
  }

  async settingsSetGroup(uuid: string, data?: HaproxySettingsSetGroupRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetGroupResponse>> {
    return this.http.post(`/api/haproxy/settings/set_group/${uuid}`, data, config);
  }

  async settingsSetHealthcheck(uuid: string, data?: HaproxySettingsSetHealthcheckRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetHealthcheckResponse>> {
    return this.http.post(`/api/haproxy/settings/set_healthcheck/${uuid}`, data, config);
  }

  async settingsSetLua(uuid: string, data?: HaproxySettingsSetLuaRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetLuaResponse>> {
    return this.http.post(`/api/haproxy/settings/set_lua/${uuid}`, data, config);
  }

  async settingsSetMapfile(uuid: string, data?: HaproxySettingsSetMapfileRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetMapfileResponse>> {
    return this.http.post(`/api/haproxy/settings/set_mapfile/${uuid}`, data, config);
  }

  async settingsSetServer(uuid: string, data?: HaproxySettingsSetServerRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetServerResponse>> {
    return this.http.post(`/api/haproxy/settings/set_server/${uuid}`, data, config);
  }

  async settingsSetUser(uuid: string, data?: HaproxySettingsSetUserRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetUserResponse>> {
    return this.http.post(`/api/haproxy/settings/set_user/${uuid}`, data, config);
  }

  async settingsSetmailer(uuid: string, data?: HaproxySettingsSetmailerRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetmailerResponse>> {
    return this.http.post(`/api/haproxy/settings/setmailer/${uuid}`, data, config);
  }

  async settingsSetresolver(uuid: string, data?: HaproxySettingsSetresolverRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsSetresolverResponse>> {
    return this.http.post(`/api/haproxy/settings/setresolver/${uuid}`, data, config);
  }

  async settingsToggleBackend(uuid: string, enabled?: string, data?: HaproxySettingsToggleBackendRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsToggleBackendResponse>> {
    return this.http.post(`/api/haproxy/settings/toggle_backend/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleCpu(uuid: string, enabled?: string, data?: HaproxySettingsToggleCpuRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsToggleCpuResponse>> {
    return this.http.post(`/api/haproxy/settings/toggle_cpu/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleFrontend(uuid: string, data?: HaproxySettingsToggleFrontendRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsToggleFrontendResponse>> {
    return this.http.post(`/api/haproxy/settings/toggle_frontend/${uuid}`, data, config);
  }

  async settingsToggleGroup(uuid: string, enabled?: string, data?: HaproxySettingsToggleGroupRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsToggleGroupResponse>> {
    return this.http.post(`/api/haproxy/settings/toggle_group/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleLua(uuid: string, enabled?: string, data?: HaproxySettingsToggleLuaRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsToggleLuaResponse>> {
    return this.http.post(`/api/haproxy/settings/toggle_lua/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleServer(uuid: string, enabled?: string, data?: HaproxySettingsToggleServerRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsToggleServerResponse>> {
    return this.http.post(`/api/haproxy/settings/toggle_server/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleUser(uuid: string, enabled?: string, data?: HaproxySettingsToggleUserRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsToggleUserResponse>> {
    return this.http.post(`/api/haproxy/settings/toggle_user/${uuid}/${enabled}`, data, config);
  }

  async settingsTogglemailer(uuid: string, enabled?: string, data?: HaproxySettingsTogglemailerRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsTogglemailerResponse>> {
    return this.http.post(`/api/haproxy/settings/togglemailer/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleresolver(uuid: string, enabled?: string, data?: HaproxySettingsToggleresolverRequest, config?: RequestConfig): Promise<ApiResponse<HaproxySettingsToggleresolverResponse>> {
    return this.http.post(`/api/haproxy/settings/toggleresolver/${uuid}/${enabled}`, data, config);
  }


  // Statistics methods
  async statisticsCounters(config?: RequestConfig): Promise<ApiResponse<HaproxyStatisticsCountersResponse>> {
    return this.http.get(`/api/haproxy/statistics/counters`, config);
  }

  async statisticsInfo(config?: RequestConfig): Promise<ApiResponse<HaproxyStatisticsInfoResponse>> {
    return this.http.get(`/api/haproxy/statistics/info`, config);
  }

  async statisticsTables(config?: RequestConfig): Promise<ApiResponse<HaproxyStatisticsTablesResponse>> {
    return this.http.get(`/api/haproxy/statistics/tables`, config);
  }

}
