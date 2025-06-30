import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Firmware module

// Firmware types
export interface FirmwareFirmwareAuditRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareAuditResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareChangelogRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareChangelogResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareCheckRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareCheckResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareConnectionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareConnectionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareGetOptionsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareHealthRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareHealthResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareInfoResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareLogRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareLogResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwarePoweroffRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwarePoweroffResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareRebootRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareRebootResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareResyncPluginsRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareResyncPluginsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareRunningResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareStatusRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareSyncPluginsRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareSyncPluginsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareUpdateRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareUpdateResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareUpgradeRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareUpgradeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareUpgradestatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareDetailsRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareDetailsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareInstallRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareInstallResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareLicenseRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareLicenseResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareLockRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareLockResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareRemoveRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareRemoveResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareReinstallRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareReinstallResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirmwareFirmwareUnlockRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirmwareFirmwareUnlockResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class FirmwareApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Firmware methods
  async firmwareAudit(data?: FirmwareFirmwareAuditRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareAuditResponse>> {
    return this.http.post(`/api/firmware/firmware/audit`, data, config);
  }

  async firmwareChangelog(version: string, data?: FirmwareFirmwareChangelogRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareChangelogResponse>> {
    return this.http.post(`/api/firmware/firmware/changelog/${version}`, data, config);
  }

  async firmwareCheck(data?: FirmwareFirmwareCheckRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareCheckResponse>> {
    return this.http.post(`/api/firmware/firmware/check`, data, config);
  }

  async firmwareConnection(data?: FirmwareFirmwareConnectionRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareConnectionResponse>> {
    return this.http.post(`/api/firmware/firmware/connection`, data, config);
  }

  async firmwareGet(config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareGetResponse>> {
    return this.http.get(`/api/firmware/firmware/get`, config);
  }

  async firmwareGetOptions(config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareGetOptionsResponse>> {
    return this.http.get(`/api/firmware/firmware/getOptions`, config);
  }

  async firmwareHealth(data?: FirmwareFirmwareHealthRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareHealthResponse>> {
    return this.http.post(`/api/firmware/firmware/health`, data, config);
  }

  async firmwareInfo(config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareInfoResponse>> {
    return this.http.get(`/api/firmware/firmware/info`, config);
  }

  async firmwareLog(clear: string, data?: FirmwareFirmwareLogRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareLogResponse>> {
    return this.http.post(`/api/firmware/firmware/log/${clear}`, data, config);
  }

  async firmwarePoweroff(data?: FirmwareFirmwarePoweroffRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwarePoweroffResponse>> {
    return this.http.post(`/api/firmware/firmware/poweroff`, data, config);
  }

  async firmwareReboot(data?: FirmwareFirmwareRebootRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareRebootResponse>> {
    return this.http.post(`/api/firmware/firmware/reboot`, data, config);
  }

  async firmwareResyncPlugins(data?: FirmwareFirmwareResyncPluginsRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareResyncPluginsResponse>> {
    return this.http.post(`/api/firmware/firmware/resyncPlugins`, data, config);
  }

  async firmwareRunning(config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareRunningResponse>> {
    return this.http.get(`/api/firmware/firmware/running`, config);
  }

  async firmwareSet(data?: FirmwareFirmwareSetRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareSetResponse>> {
    return this.http.post(`/api/firmware/firmware/set`, data, config);
  }

  async firmwareStatus(data?: FirmwareFirmwareStatusRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareStatusResponse>> {
    return this.http.post(`/api/firmware/firmware/status`, data, config);
  }

  async firmwareSyncPlugins(data?: FirmwareFirmwareSyncPluginsRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareSyncPluginsResponse>> {
    return this.http.post(`/api/firmware/firmware/syncPlugins`, data, config);
  }

  async firmwareUpdate(data?: FirmwareFirmwareUpdateRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareUpdateResponse>> {
    return this.http.post(`/api/firmware/firmware/update`, data, config);
  }

  async firmwareUpgrade(data?: FirmwareFirmwareUpgradeRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareUpgradeResponse>> {
    return this.http.post(`/api/firmware/firmware/upgrade`, data, config);
  }

  async firmwareUpgradestatus(config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareUpgradestatusResponse>> {
    return this.http.get(`/api/firmware/firmware/upgradestatus`, config);
  }

  async firmwareDetails(pkgName: string, data?: FirmwareFirmwareDetailsRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareDetailsResponse>> {
    return this.http.post(`/api/firmware/firmware/details/${pkgName}`, data, config);
  }

  async firmwareInstall(pkgName: string, data?: FirmwareFirmwareInstallRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareInstallResponse>> {
    return this.http.post(`/api/firmware/firmware/install/${pkgName}`, data, config);
  }

  async firmwareLicense(pkgName: string, data?: FirmwareFirmwareLicenseRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareLicenseResponse>> {
    return this.http.post(`/api/firmware/firmware/license/${pkgName}`, data, config);
  }

  async firmwareLock(pkgName: string, data?: FirmwareFirmwareLockRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareLockResponse>> {
    return this.http.post(`/api/firmware/firmware/lock/${pkgName}`, data, config);
  }

  async firmwareRemove(pkgName: string, data?: FirmwareFirmwareRemoveRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareRemoveResponse>> {
    return this.http.post(`/api/firmware/firmware/remove/${pkgName}`, data, config);
  }

  async firmwareReinstall(pkgName: string, data?: FirmwareFirmwareReinstallRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareReinstallResponse>> {
    return this.http.post(`/api/firmware/firmware/reinstall/${pkgName}`, data, config);
  }

  async firmwareUnlock(pkgName: string, data?: FirmwareFirmwareUnlockRequest, config?: RequestConfig): Promise<ApiResponse<FirmwareFirmwareUnlockResponse>> {
    return this.http.post(`/api/firmware/firmware/unlock/${pkgName}`, data, config);
  }

}
