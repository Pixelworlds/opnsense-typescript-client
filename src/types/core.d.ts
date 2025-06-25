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
export interface CoreBackupController {
  /** Get backups for core backup */
  backups(): Promise<ApiResponse<any>>;
  /** Get delete backup for core backup */
  deleteBackup(): Promise<ApiResponse<any>>;
  /** Get diff for core backup */
  diff(): Promise<ApiResponse<any>>;
  /** Get download for core backup */
  download(): Promise<ApiResponse<any>>;
  /** Get providers for core backup */
  providers(): Promise<ApiResponse<any>>;
  /** Get revert backup for core backup */
  revertBackup(): Promise<ApiResponse<any>>;
}
export interface CoreDashboardController {
  /** Get get dashboard for core dashboard */
  getDashboard(): Promise<ApiResponse<any>>;
  /** Get picture for core dashboard */
  picture(): Promise<ApiResponse<any>>;
  /** Get product info feed for core dashboard */
  productInfoFeed(): Promise<ApiResponse<any>>;
  /** Execute restore defaults for core dashboard */
  restoreDefaults(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute save widgets for core dashboard */
  saveWidgets(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface CoreHasyncController {
  /** Get get for core hasync */
  get(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for core hasync */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute set for core hasync */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface CoreHasync_statusController {
  /** Get remote service for core hasync_status */
  remoteService(): Promise<ApiResponse<any>>;
  /** Execute restart for core hasync_status */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart all for core hasync_status */
  restartAll(): Promise<ApiResponse<ApiResult>>;
  /** Get services for core hasync_status */
  services(): Promise<ApiResponse<any>>;
  /** Execute start for core hasync_status */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Execute stop for core hasync_status */
  stop(): Promise<ApiResponse<ServiceControl>>;
  /** Get version for core hasync_status */
  version(): Promise<ApiResponse<any>>;
}
export interface CoreMenuController {
  /** Get search for core menu */
  search(): Promise<ApiResponse<SearchResult>>;
  /** Get tree for core menu */
  tree(): Promise<ApiResponse<any>>;
}
export interface CoreServiceController {
  /** Execute restart for core service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Get search for core service */
  search(): Promise<ApiResponse<SearchResult>>;
  /** Execute start for core service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Execute stop for core service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface CoreSnapshotsController {
  /** Execute activate for core snapshots */
  activate(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add for core snapshots */
  add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del for core snapshots */
  del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for core snapshots */
  get(uuid: string): Promise<ApiResponse<any>>;
  /** Get is supported for core snapshots */
  isSupported(): Promise<ApiResponse<any>>;
  /** Get search for core snapshots */
  search(): Promise<ApiResponse<SearchResult>>;
  /** Execute set for core snapshots */
  set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface CoreSystemController {
  /** Execute dismiss status for core system */
  dismissStatus(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute halt for core system */
  halt(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute reboot for core system */
  reboot(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get status for core system */
  status(): Promise<ApiResponse<ServiceStatus>>;
}
export interface CoreTunablesController {
  /** Execute add item for core tunables */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for core tunables */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for core tunables */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for core tunables */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute reconfigure for core tunables */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute reset for core tunables */
  reset(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set for core tunables */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for core tunables */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface CoreModule {
  backup: CoreBackupController;
  dashboard: CoreDashboardController;
  hasync: CoreHasyncController;
  hasync_status: CoreHasync_statusController;
  menu: CoreMenuController;
  service: CoreServiceController;
  snapshots: CoreSnapshotsController;
  system: CoreSystemController;
  tunables: CoreTunablesController;
}

// Record interfaces
export interface CoreRecord extends BaseRecord {
 
  [key: string]: any;
}