import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/core';
  }

  // Backup methods
  async backupBackups(host: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreBackupBackupsResponse>> {
    return this.client.get(`${this.basePath}/backup/backups/${host}`, config);
  }

  async backupDeleteBackup(backup: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreBackupDeleteBackupResponse>> {
    return this.client.get(`${this.basePath}/backup/delete_backup/${backup}`, config);
  }

  async backupDiff(host: string, backup1: string, backup2: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreBackupDiffResponse>> {
    return this.client.get(`${this.basePath}/backup/diff/${host}/${backup1}/${backup2}`, config);
  }

  async backupDownload(host: string, backup?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreBackupDownloadResponse>> {
    return this.client.get(`${this.basePath}/backup/download/${host}/${backup}`, config);
  }

  async backupProviders(config?: AxiosRequestConfig): Promise<AxiosResponse<CoreBackupProvidersResponse>> {
    return this.client.get(`${this.basePath}/backup/providers`, config);
  }

  async backupRevertBackup(backup: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreBackupRevertBackupResponse>> {
    return this.client.get(`${this.basePath}/backup/revert_backup/${backup}`, config);
  }


  // Dashboard methods
  async dashboardGetDashboard(config?: AxiosRequestConfig): Promise<AxiosResponse<CoreDashboardGetDashboardResponse>> {
    return this.client.get(`${this.basePath}/dashboard/get_dashboard`, config);
  }

  async dashboardPicture(config?: AxiosRequestConfig): Promise<AxiosResponse<CoreDashboardPictureResponse>> {
    return this.client.get(`${this.basePath}/dashboard/picture`, config);
  }

  async dashboardProductInfoFeed(config?: AxiosRequestConfig): Promise<AxiosResponse<CoreDashboardProductInfoFeedResponse>> {
    return this.client.get(`${this.basePath}/dashboard/product_info_feed`, config);
  }

  async dashboardRestoreDefaults(data?: CoreDashboardRestoreDefaultsRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreDashboardRestoreDefaultsResponse>> {
    return this.client.post(`${this.basePath}/dashboard/restore_defaults`, data, config);
  }

  async dashboardSaveWidgets(data?: CoreDashboardSaveWidgetsRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreDashboardSaveWidgetsResponse>> {
    return this.client.post(`${this.basePath}/dashboard/save_widgets`, data, config);
  }


  // Hasync methods
  async hasyncGet(config?: AxiosRequestConfig): Promise<AxiosResponse<CoreHasyncGetResponse>> {
    return this.client.get(`${this.basePath}/hasync/get`, config);
  }

  async hasyncReconfigure(data?: CoreHasyncReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreHasyncReconfigureResponse>> {
    return this.client.post(`${this.basePath}/hasync/reconfigure`, data, config);
  }

  async hasyncSet(data?: CoreHasyncSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreHasyncSetResponse>> {
    return this.client.post(`${this.basePath}/hasync/set`, data, config);
  }


  // HasyncStatus methods
  async hasyncStatusRemoteService(action: string, service: string, serviceId: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreHasyncStatusRemoteServiceResponse>> {
    return this.client.get(`${this.basePath}/hasync_status/remote_service/${action}/${service}/${serviceId}`, config);
  }

  async hasyncStatusRestart(service?: string, serviceId?: string, data?: CoreHasyncStatusRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreHasyncStatusRestartResponse>> {
    return this.client.post(`${this.basePath}/hasync_status/restart/${service}/${serviceId}`, data, config);
  }

  async hasyncStatusRestartAll(service?: string, serviceId?: string, data?: CoreHasyncStatusRestartAllRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreHasyncStatusRestartAllResponse>> {
    return this.client.post(`${this.basePath}/hasync_status/restart_all/${service}/${serviceId}`, data, config);
  }

  async hasyncStatusServices(config?: AxiosRequestConfig): Promise<AxiosResponse<CoreHasyncStatusServicesResponse>> {
    return this.client.get(`${this.basePath}/hasync_status/services`, config);
  }

  async hasyncStatusStart(service?: string, serviceId?: string, data?: CoreHasyncStatusStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreHasyncStatusStartResponse>> {
    return this.client.post(`${this.basePath}/hasync_status/start/${service}/${serviceId}`, data, config);
  }

  async hasyncStatusStop(service?: string, serviceId?: string, data?: CoreHasyncStatusStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreHasyncStatusStopResponse>> {
    return this.client.post(`${this.basePath}/hasync_status/stop/${service}/${serviceId}`, data, config);
  }

  async hasyncStatusVersion(config?: AxiosRequestConfig): Promise<AxiosResponse<CoreHasyncStatusVersionResponse>> {
    return this.client.get(`${this.basePath}/hasync_status/version`, config);
  }


  // Menu methods
  async menuSearch(config?: AxiosRequestConfig): Promise<AxiosResponse<CoreMenuSearchResponse>> {
    return this.client.get(`${this.basePath}/menu/search`, config);
  }

  async menuTree(config?: AxiosRequestConfig): Promise<AxiosResponse<CoreMenuTreeResponse>> {
    return this.client.get(`${this.basePath}/menu/tree`, config);
  }


  // Service methods
  async serviceRestart(name: string, id?: string, data?: CoreServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart/${name}/${id}`, data, config);
  }

  async serviceSearch(config?: AxiosRequestConfig): Promise<AxiosResponse<CoreServiceSearchResponse>> {
    return this.client.get(`${this.basePath}/service/search`, config);
  }

  async serviceStart(name: string, id?: string, data?: CoreServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start/${name}/${id}`, data, config);
  }

  async serviceStop(name: string, id?: string, data?: CoreServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop/${name}/${id}`, data, config);
  }


  // Snapshots methods
  async snapshotsActivate(uuid: string, data?: CoreSnapshotsActivateRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreSnapshotsActivateResponse>> {
    return this.client.post(`${this.basePath}/snapshots/activate/${uuid}`, data, config);
  }

  async snapshotsAdd(data?: CoreSnapshotsAddRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreSnapshotsAddResponse>> {
    return this.client.post(`${this.basePath}/snapshots/add`, data, config);
  }

  async snapshotsDel(uuid: string, data?: CoreSnapshotsDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreSnapshotsDelResponse>> {
    return this.client.post(`${this.basePath}/snapshots/del/${uuid}`, data, config);
  }

  async snapshotsGet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreSnapshotsGetResponse>> {
    return this.client.get(`${this.basePath}/snapshots/get/${uuid}`, config);
  }

  async snapshotsIsSupported(config?: AxiosRequestConfig): Promise<AxiosResponse<CoreSnapshotsIsSupportedResponse>> {
    return this.client.get(`${this.basePath}/snapshots/is_supported`, config);
  }

  async snapshotsSearch(config?: AxiosRequestConfig): Promise<AxiosResponse<CoreSnapshotsSearchResponse>> {
    return this.client.get(`${this.basePath}/snapshots/search`, config);
  }

  async snapshotsSet(uuid: string, data?: CoreSnapshotsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreSnapshotsSetResponse>> {
    return this.client.post(`${this.basePath}/snapshots/set/${uuid}`, data, config);
  }


  // System methods
  async systemDismissStatus(data?: CoreSystemDismissStatusRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreSystemDismissStatusResponse>> {
    return this.client.post(`${this.basePath}/system/dismiss_status`, data, config);
  }

  async systemHalt(data?: CoreSystemHaltRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreSystemHaltResponse>> {
    return this.client.post(`${this.basePath}/system/halt`, data, config);
  }

  async systemReboot(data?: CoreSystemRebootRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreSystemRebootResponse>> {
    return this.client.post(`${this.basePath}/system/reboot`, data, config);
  }

  async systemStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<CoreSystemStatusResponse>> {
    return this.client.get(`${this.basePath}/system/status`, config);
  }


  // Tunables methods
  async tunablesAddItem(data?: CoreTunablesAddItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreTunablesAddItemResponse>> {
    return this.client.post(`${this.basePath}/tunables/add_item`, data, config);
  }

  async tunablesDelItem(uuid: string, data?: CoreTunablesDelItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreTunablesDelItemResponse>> {
    return this.client.post(`${this.basePath}/tunables/del_item/${uuid}`, data, config);
  }

  async tunablesGet(config?: AxiosRequestConfig): Promise<AxiosResponse<CoreTunablesGetResponse>> {
    return this.client.get(`${this.basePath}/tunables/get`, config);
  }

  async tunablesGetItem(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreTunablesGetItemResponse>> {
    return this.client.get(`${this.basePath}/tunables/get_item/${uuid}`, config);
  }

  async tunablesReconfigure(data?: CoreTunablesReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreTunablesReconfigureResponse>> {
    return this.client.post(`${this.basePath}/tunables/reconfigure`, data, config);
  }

  async tunablesReset(data?: CoreTunablesResetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreTunablesResetResponse>> {
    return this.client.post(`${this.basePath}/tunables/reset`, data, config);
  }

  async tunablesSet(data?: CoreTunablesSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreTunablesSetResponse>> {
    return this.client.post(`${this.basePath}/tunables/set`, data, config);
  }

  async tunablesSetItem(uuid: string, data?: CoreTunablesSetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CoreTunablesSetItemResponse>> {
    return this.client.post(`${this.basePath}/tunables/set_item/${uuid}`, data, config);
  }

}
