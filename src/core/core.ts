import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Core module

// Model field types

// Backup types
export interface CoreBackupBackupsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreBackupDeleteBackupResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreBackupDiffResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreBackupDownloadResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreBackupProvidersResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreBackupRevertBackupResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Dashboard types
export interface CoreDashboardGetDashboardResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreDashboardPictureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreDashboardProductInfoFeedResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreDashboardRestoreDefaultsRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreDashboardRestoreDefaultsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreDashboardSaveWidgetsRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreDashboardSaveWidgetsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Hasync types
export interface CoreHasyncGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreHasyncReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreHasyncReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreHasyncSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreHasyncSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// HasyncStatus types
export interface CoreHasyncStatusRemoteServiceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreHasyncStatusRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreHasyncStatusRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreHasyncStatusRestartAllRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreHasyncStatusRestartAllResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreHasyncStatusServicesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreHasyncStatusStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreHasyncStatusStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreHasyncStatusStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreHasyncStatusStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreHasyncStatusVersionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Menu types
export interface CoreMenuSearchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreMenuTreeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface CoreServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreServiceSearchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Snapshots types
export interface CoreSnapshotsActivateRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreSnapshotsActivateResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreSnapshotsAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreSnapshotsAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreSnapshotsDelRequest {
  uuid: string;
}

export interface CoreSnapshotsDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreSnapshotsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreSnapshotsIsSupportedResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreSnapshotsSearchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreSnapshotsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreSnapshotsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// System types
export interface CoreSystemDismissStatusRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreSystemDismissStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreSystemHaltRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreSystemHaltResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreSystemRebootRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreSystemRebootResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreSystemStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Tunables types
export interface CoreTunablesAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreTunablesAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreTunablesDelItemRequest {
  uuid: string;
}

export interface CoreTunablesDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreTunablesGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreTunablesGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreTunablesReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreTunablesReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreTunablesResetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreTunablesResetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreTunablesSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreTunablesSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CoreTunablesSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CoreTunablesSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class CoreApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Backup methods
  async backupBackups(host: string, config?: RequestConfig): Promise<ApiResponse<CoreBackupBackupsResponse>> {
    return this.http.get(`/api/core/backup/backups/${host}`, config);
  }

  async backupDeleteBackup(backup: string, config?: RequestConfig): Promise<ApiResponse<CoreBackupDeleteBackupResponse>> {
    return this.http.get(`/api/core/backup/delete_backup/${backup}`, config);
  }

  async backupDiff(host: string, backup1: string, backup2: string, config?: RequestConfig): Promise<ApiResponse<CoreBackupDiffResponse>> {
    return this.http.get(`/api/core/backup/diff/${host}/${backup1}/${backup2}`, config);
  }

  async backupDownload(host: string, backup?: string, config?: RequestConfig): Promise<ApiResponse<CoreBackupDownloadResponse>> {
    return this.http.get(`/api/core/backup/download/${host}/${backup}`, config);
  }

  async backupProviders(config?: RequestConfig): Promise<ApiResponse<CoreBackupProvidersResponse>> {
    return this.http.get(`/api/core/backup/providers`, config);
  }

  async backupRevertBackup(backup: string, config?: RequestConfig): Promise<ApiResponse<CoreBackupRevertBackupResponse>> {
    return this.http.get(`/api/core/backup/revert_backup/${backup}`, config);
  }


  // Dashboard methods
  async dashboardGetDashboard(config?: RequestConfig): Promise<ApiResponse<CoreDashboardGetDashboardResponse>> {
    return this.http.get(`/api/core/dashboard/get_dashboard`, config);
  }

  async dashboardPicture(config?: RequestConfig): Promise<ApiResponse<CoreDashboardPictureResponse>> {
    return this.http.get(`/api/core/dashboard/picture`, config);
  }

  async dashboardProductInfoFeed(config?: RequestConfig): Promise<ApiResponse<CoreDashboardProductInfoFeedResponse>> {
    return this.http.get(`/api/core/dashboard/product_info_feed`, config);
  }

  async dashboardRestoreDefaults(data?: CoreDashboardRestoreDefaultsRequest, config?: RequestConfig): Promise<ApiResponse<CoreDashboardRestoreDefaultsResponse>> {
    return this.http.post(`/api/core/dashboard/restore_defaults`, data, config);
  }

  async dashboardSaveWidgets(data?: CoreDashboardSaveWidgetsRequest, config?: RequestConfig): Promise<ApiResponse<CoreDashboardSaveWidgetsResponse>> {
    return this.http.post(`/api/core/dashboard/save_widgets`, data, config);
  }


  // Hasync methods
  async hasyncGet(config?: RequestConfig): Promise<ApiResponse<CoreHasyncGetResponse>> {
    return this.http.get(`/api/core/hasync/get`, config);
  }

  async hasyncReconfigure(data?: CoreHasyncReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<CoreHasyncReconfigureResponse>> {
    return this.http.post(`/api/core/hasync/reconfigure`, data, config);
  }

  async hasyncSet(data?: CoreHasyncSetRequest, config?: RequestConfig): Promise<ApiResponse<CoreHasyncSetResponse>> {
    return this.http.post(`/api/core/hasync/set`, data, config);
  }


  // HasyncStatus methods
  async hasyncStatusRemoteService(action: string, service: string, serviceId: string, config?: RequestConfig): Promise<ApiResponse<CoreHasyncStatusRemoteServiceResponse>> {
    return this.http.get(`/api/core/hasync_status/remote_service/${action}/${service}/${serviceId}`, config);
  }

  async hasyncStatusRestart(service?: string, serviceId?: string, data?: CoreHasyncStatusRestartRequest, config?: RequestConfig): Promise<ApiResponse<CoreHasyncStatusRestartResponse>> {
    return this.http.post(`/api/core/hasync_status/restart/${service}/${serviceId}`, data, config);
  }

  async hasyncStatusRestartAll(service?: string, serviceId?: string, data?: CoreHasyncStatusRestartAllRequest, config?: RequestConfig): Promise<ApiResponse<CoreHasyncStatusRestartAllResponse>> {
    return this.http.post(`/api/core/hasync_status/restart_all/${service}/${serviceId}`, data, config);
  }

  async hasyncStatusServices(config?: RequestConfig): Promise<ApiResponse<CoreHasyncStatusServicesResponse>> {
    return this.http.get(`/api/core/hasync_status/services`, config);
  }

  async hasyncStatusStart(service?: string, serviceId?: string, data?: CoreHasyncStatusStartRequest, config?: RequestConfig): Promise<ApiResponse<CoreHasyncStatusStartResponse>> {
    return this.http.post(`/api/core/hasync_status/start/${service}/${serviceId}`, data, config);
  }

  async hasyncStatusStop(service?: string, serviceId?: string, data?: CoreHasyncStatusStopRequest, config?: RequestConfig): Promise<ApiResponse<CoreHasyncStatusStopResponse>> {
    return this.http.post(`/api/core/hasync_status/stop/${service}/${serviceId}`, data, config);
  }

  async hasyncStatusVersion(config?: RequestConfig): Promise<ApiResponse<CoreHasyncStatusVersionResponse>> {
    return this.http.get(`/api/core/hasync_status/version`, config);
  }


  // Menu methods
  async menuSearch(config?: RequestConfig): Promise<ApiResponse<CoreMenuSearchResponse>> {
    return this.http.get(`/api/core/menu/search`, config);
  }

  async menuTree(config?: RequestConfig): Promise<ApiResponse<CoreMenuTreeResponse>> {
    return this.http.get(`/api/core/menu/tree`, config);
  }


  // Service methods
  async serviceRestart(name: string, id?: string, data?: CoreServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<CoreServiceRestartResponse>> {
    return this.http.post(`/api/core/service/restart/${name}/${id}`, data, config);
  }

  async serviceSearch(config?: RequestConfig): Promise<ApiResponse<CoreServiceSearchResponse>> {
    return this.http.get(`/api/core/service/search`, config);
  }

  async serviceStart(name: string, id?: string, data?: CoreServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<CoreServiceStartResponse>> {
    return this.http.post(`/api/core/service/start/${name}/${id}`, data, config);
  }

  async serviceStop(name: string, id?: string, data?: CoreServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<CoreServiceStopResponse>> {
    return this.http.post(`/api/core/service/stop/${name}/${id}`, data, config);
  }


  // Snapshots methods
  async snapshotsActivate(uuid: string, data?: CoreSnapshotsActivateRequest, config?: RequestConfig): Promise<ApiResponse<CoreSnapshotsActivateResponse>> {
    return this.http.post(`/api/core/snapshots/activate/${uuid}`, data, config);
  }

  async snapshotsAdd(data?: CoreSnapshotsAddRequest, config?: RequestConfig): Promise<ApiResponse<CoreSnapshotsAddResponse>> {
    return this.http.post(`/api/core/snapshots/add`, data, config);
  }

  async snapshotsDel(uuid: string, data?: CoreSnapshotsDelRequest, config?: RequestConfig): Promise<ApiResponse<CoreSnapshotsDelResponse>> {
    return this.http.post(`/api/core/snapshots/del/${uuid}`, data, config);
  }

  async snapshotsGet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<CoreSnapshotsGetResponse>> {
    return this.http.get(`/api/core/snapshots/get/${uuid}`, config);
  }

  async snapshotsIsSupported(config?: RequestConfig): Promise<ApiResponse<CoreSnapshotsIsSupportedResponse>> {
    return this.http.get(`/api/core/snapshots/is_supported`, config);
  }

  async snapshotsSearch(config?: RequestConfig): Promise<ApiResponse<CoreSnapshotsSearchResponse>> {
    return this.http.get(`/api/core/snapshots/search`, config);
  }

  async snapshotsSet(uuid: string, data?: CoreSnapshotsSetRequest, config?: RequestConfig): Promise<ApiResponse<CoreSnapshotsSetResponse>> {
    return this.http.post(`/api/core/snapshots/set/${uuid}`, data, config);
  }


  // System methods
  async systemDismissStatus(data?: CoreSystemDismissStatusRequest, config?: RequestConfig): Promise<ApiResponse<CoreSystemDismissStatusResponse>> {
    return this.http.post(`/api/core/system/dismiss_status`, data, config);
  }

  async systemHalt(data?: CoreSystemHaltRequest, config?: RequestConfig): Promise<ApiResponse<CoreSystemHaltResponse>> {
    return this.http.post(`/api/core/system/halt`, data, config);
  }

  async systemReboot(data?: CoreSystemRebootRequest, config?: RequestConfig): Promise<ApiResponse<CoreSystemRebootResponse>> {
    return this.http.post(`/api/core/system/reboot`, data, config);
  }

  async systemStatus(config?: RequestConfig): Promise<ApiResponse<CoreSystemStatusResponse>> {
    return this.http.get(`/api/core/system/status`, config);
  }


  // Tunables methods
  async tunablesAddItem(data?: CoreTunablesAddItemRequest, config?: RequestConfig): Promise<ApiResponse<CoreTunablesAddItemResponse>> {
    return this.http.post(`/api/core/tunables/add_item`, data, config);
  }

  async tunablesDelItem(uuid: string, data?: CoreTunablesDelItemRequest, config?: RequestConfig): Promise<ApiResponse<CoreTunablesDelItemResponse>> {
    return this.http.post(`/api/core/tunables/del_item/${uuid}`, data, config);
  }

  async tunablesGet(config?: RequestConfig): Promise<ApiResponse<CoreTunablesGetResponse>> {
    return this.http.get(`/api/core/tunables/get`, config);
  }

  async tunablesGetItem(uuid?: string, config?: RequestConfig): Promise<ApiResponse<CoreTunablesGetItemResponse>> {
    return this.http.get(`/api/core/tunables/get_item/${uuid}`, config);
  }

  async tunablesReconfigure(data?: CoreTunablesReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<CoreTunablesReconfigureResponse>> {
    return this.http.post(`/api/core/tunables/reconfigure`, data, config);
  }

  async tunablesReset(data?: CoreTunablesResetRequest, config?: RequestConfig): Promise<ApiResponse<CoreTunablesResetResponse>> {
    return this.http.post(`/api/core/tunables/reset`, data, config);
  }

  async tunablesSet(data?: CoreTunablesSetRequest, config?: RequestConfig): Promise<ApiResponse<CoreTunablesSetResponse>> {
    return this.http.post(`/api/core/tunables/set`, data, config);
  }

  async tunablesSetItem(uuid: string, data?: CoreTunablesSetItemRequest, config?: RequestConfig): Promise<ApiResponse<CoreTunablesSetItemResponse>> {
    return this.http.post(`/api/core/tunables/set_item/${uuid}`, data, config);
  }

}
