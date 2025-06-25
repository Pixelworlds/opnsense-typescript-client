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
export interface PuppetagentServiceController {
  /** Execute reconfigure for puppetagent service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for puppetagent service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for puppetagent service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for puppetagent service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for puppetagent service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface PuppetagentSettingsController {
  /** Get get for puppetagent settings */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for puppetagent settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface PuppetagentModule {
  service: PuppetagentServiceController;
  settings: PuppetagentSettingsController;
}

// Record interfaces