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
export interface QemuguestagentServiceController {
  /** Execute reconfigure for qemuguestagent service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for qemuguestagent service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for qemuguestagent service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for qemuguestagent service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for qemuguestagent service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface QemuguestagentSettingsController {
  /** Get get for qemuguestagent settings */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for qemuguestagent settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface QemuguestagentModule {
  service: QemuguestagentServiceController;
  settings: QemuguestagentSettingsController;
}

// Record interfaces