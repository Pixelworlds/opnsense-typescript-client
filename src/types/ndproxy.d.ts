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
export interface NdproxyGeneralController {
  /** Get get for ndproxy general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for ndproxy general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface NdproxyServiceController {
  /** Execute reconfigure for ndproxy service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for ndproxy service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for ndproxy service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for ndproxy service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for ndproxy service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface NdproxyModule {
  general: NdproxyGeneralController;
  service: NdproxyServiceController;
}

// Record interfaces