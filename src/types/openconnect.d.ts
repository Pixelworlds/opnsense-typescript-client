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
export interface OpenconnectGeneralController {
  /** Get get for openconnect general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for openconnect general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface OpenconnectServiceController {
  /** Execute reconfigure for openconnect service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for openconnect service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for openconnect service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for openconnect service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for openconnect service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface OpenconnectModule {
  general: OpenconnectGeneralController;
  service: OpenconnectServiceController;
}

// Record interfaces