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
export interface SoftetherGeneralController {
  /** Get get for softether general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for softether general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface SoftetherServiceController {
  /** Execute reconfigure for softether service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for softether service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for softether service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for softether service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for softether service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface SoftetherModule {
  general: SoftetherGeneralController;
  service: SoftetherServiceController;
}

// Record interfaces