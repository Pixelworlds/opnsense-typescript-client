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
export interface ApcupsdServiceController {
  /** Get get ups status for apcupsd service */
  getUpsStatus(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for apcupsd service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for apcupsd service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for apcupsd service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for apcupsd service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for apcupsd service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface ApcupsdSettingsController {
  /** Get get for apcupsd settings */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for apcupsd settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface ApcupsdModule {
  service: ApcupsdServiceController;
  settings: ApcupsdSettingsController;
}

// Record interfaces