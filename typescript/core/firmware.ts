import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/firmware';
  }

  // Firmware methods
  async firmwareAudit(data?: FirmwareFirmwareAuditRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareAuditResponse>> {
    return this.client.post(`${this.basePath}/firmware/audit`, data, config);
  }

  async firmwareChangelog(version: string, data?: FirmwareFirmwareChangelogRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareChangelogResponse>> {
    return this.client.post(`${this.basePath}/firmware/changelog/${version}`, data, config);
  }

  async firmwareCheck(data?: FirmwareFirmwareCheckRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareCheckResponse>> {
    return this.client.post(`${this.basePath}/firmware/check`, data, config);
  }

  async firmwareConnection(data?: FirmwareFirmwareConnectionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareConnectionResponse>> {
    return this.client.post(`${this.basePath}/firmware/connection`, data, config);
  }

  async firmwareGet(config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareGetResponse>> {
    return this.client.get(`${this.basePath}/firmware/get`, config);
  }

  async firmwareGetOptions(config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareGetOptionsResponse>> {
    return this.client.get(`${this.basePath}/firmware/getOptions`, config);
  }

  async firmwareHealth(data?: FirmwareFirmwareHealthRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareHealthResponse>> {
    return this.client.post(`${this.basePath}/firmware/health`, data, config);
  }

  async firmwareInfo(config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareInfoResponse>> {
    return this.client.get(`${this.basePath}/firmware/info`, config);
  }

  async firmwareLog(clear: string, data?: FirmwareFirmwareLogRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareLogResponse>> {
    return this.client.post(`${this.basePath}/firmware/log/${clear}`, data, config);
  }

  async firmwarePoweroff(data?: FirmwareFirmwarePoweroffRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwarePoweroffResponse>> {
    return this.client.post(`${this.basePath}/firmware/poweroff`, data, config);
  }

  async firmwareReboot(data?: FirmwareFirmwareRebootRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareRebootResponse>> {
    return this.client.post(`${this.basePath}/firmware/reboot`, data, config);
  }

  async firmwareResyncPlugins(data?: FirmwareFirmwareResyncPluginsRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareResyncPluginsResponse>> {
    return this.client.post(`${this.basePath}/firmware/resyncPlugins`, data, config);
  }

  async firmwareRunning(config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareRunningResponse>> {
    return this.client.get(`${this.basePath}/firmware/running`, config);
  }

  async firmwareSet(data?: FirmwareFirmwareSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareSetResponse>> {
    return this.client.post(`${this.basePath}/firmware/set`, data, config);
  }

  async firmwareStatus(data?: FirmwareFirmwareStatusRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareStatusResponse>> {
    return this.client.post(`${this.basePath}/firmware/status`, data, config);
  }

  async firmwareSyncPlugins(data?: FirmwareFirmwareSyncPluginsRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareSyncPluginsResponse>> {
    return this.client.post(`${this.basePath}/firmware/syncPlugins`, data, config);
  }

  async firmwareUpdate(data?: FirmwareFirmwareUpdateRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareUpdateResponse>> {
    return this.client.post(`${this.basePath}/firmware/update`, data, config);
  }

  async firmwareUpgrade(data?: FirmwareFirmwareUpgradeRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareUpgradeResponse>> {
    return this.client.post(`${this.basePath}/firmware/upgrade`, data, config);
  }

  async firmwareUpgradestatus(config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareUpgradestatusResponse>> {
    return this.client.get(`${this.basePath}/firmware/upgradestatus`, config);
  }

  async firmwareDetails(pkgName: string, data?: FirmwareFirmwareDetailsRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareDetailsResponse>> {
    return this.client.post(`${this.basePath}/firmware/details/${pkgName}`, data, config);
  }

  async firmwareInstall(pkgName: string, data?: FirmwareFirmwareInstallRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareInstallResponse>> {
    return this.client.post(`${this.basePath}/firmware/install/${pkgName}`, data, config);
  }

  async firmwareLicense(pkgName: string, data?: FirmwareFirmwareLicenseRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareLicenseResponse>> {
    return this.client.post(`${this.basePath}/firmware/license/${pkgName}`, data, config);
  }

  async firmwareLock(pkgName: string, data?: FirmwareFirmwareLockRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareLockResponse>> {
    return this.client.post(`${this.basePath}/firmware/lock/${pkgName}`, data, config);
  }

  async firmwareRemove(pkgName: string, data?: FirmwareFirmwareRemoveRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareRemoveResponse>> {
    return this.client.post(`${this.basePath}/firmware/remove/${pkgName}`, data, config);
  }

  async firmwareReinstall(pkgName: string, data?: FirmwareFirmwareReinstallRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareReinstallResponse>> {
    return this.client.post(`${this.basePath}/firmware/reinstall/${pkgName}`, data, config);
  }

  async firmwareUnlock(pkgName: string, data?: FirmwareFirmwareUnlockRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirmwareFirmwareUnlockResponse>> {
    return this.client.post(`${this.basePath}/firmware/unlock/${pkgName}`, data, config);
  }

}
