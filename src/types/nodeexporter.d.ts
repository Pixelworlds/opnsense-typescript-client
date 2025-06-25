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
export interface NodeexporterGeneralController {
  /** Get get for nodeexporter general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for nodeexporter general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface NodeexporterServiceController {
  /** Execute reconfigure for nodeexporter service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for nodeexporter service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for nodeexporter service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for nodeexporter service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for nodeexporter service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface NodeexporterModule {
  general: NodeexporterGeneralController;
  service: NodeexporterServiceController;
}

// Record interfaces