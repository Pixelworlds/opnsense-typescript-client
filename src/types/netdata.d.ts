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
export interface NetdataGeneralController {
  /** Get get for netdata general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for netdata general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface NetdataServiceController {
  /** Execute reconfigure for netdata service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for netdata service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for netdata service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for netdata service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for netdata service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface NetdataModule {
  general: NetdataGeneralController;
  service: NetdataServiceController;
}

// Record interfaces