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
export interface TftpGeneralController {
  /** Get get for tftp general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for tftp general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface TftpServiceController {
  /** Execute reconfigure for tftp service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for tftp service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for tftp service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for tftp service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for tftp service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface TftpModule {
  general: TftpGeneralController;
  service: TftpServiceController;
}

// Record interfaces