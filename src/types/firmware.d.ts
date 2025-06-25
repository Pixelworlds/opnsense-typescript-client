import type {
      ApiResponse,
      ApiResult,
      SearchResult,
      BaseRecord,
      ServiceStatus,
      ServiceControl,
      ConfigTest,
      CrudOperations,
      ServiceOperations,
      SettingsOperations
    } from './common';

// Controller interfaces
export interface FirmwareFirmwareController {
  /** Execute audit for core firmware */
  audit(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute changelog for core firmware */
  changelog(): Promise<ApiResponse<ApiResult>>;
  /** Execute check for core firmware */
  check(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute connection for core firmware */
  connection(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for core firmware */
  get(): Promise<ApiResponse<any>>;
  /** Get getOptions for core firmware */
  getoptions(): Promise<ApiResponse<any>>;
  /** Execute health for core firmware */
  health(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get info for core firmware */
  info(): Promise<ApiResponse<any>>;
  /** Execute log for core firmware */
  log(): Promise<ApiResponse<ApiResult>>;
  /** Execute poweroff for core firmware */
  poweroff(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute reboot for core firmware */
  reboot(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute resyncPlugins for core firmware */
  resyncplugins(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get running for core firmware */
  running(): Promise<ApiResponse<any>>;
  /** Execute set for core firmware */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute status for core firmware */
  status(): Promise<ApiResponse<ApiResult>>;
  /** Execute syncPlugins for core firmware */
  syncplugins(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute update for core firmware */
  update(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute upgrade for core firmware */
  upgrade(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get upgradestatus for core firmware */
  upgradestatus(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute details for core firmware */
  details(): Promise<ApiResponse<ApiResult>>;
  /** Execute install for core firmware */
  install(): Promise<ApiResponse<ApiResult>>;
  /** Execute license for core firmware */
  license(): Promise<ApiResponse<ApiResult>>;
  /** Execute lock for core firmware */
  lock(): Promise<ApiResponse<ApiResult>>;
  /** Execute remove for core firmware */
  remove(): Promise<ApiResponse<ApiResult>>;
  /** Execute reinstall for core firmware */
  reinstall(): Promise<ApiResponse<ApiResult>>;
  /** Execute unlock for core firmware */
  unlock(): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface FirmwareModule {
  firmware: FirmwareFirmwareController;
}

// Record interfaces
export interface FirmwareRecord extends BaseRecord {
 
  [key: string]: any;
}