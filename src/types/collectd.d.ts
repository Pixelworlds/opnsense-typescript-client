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
export interface CollectdGeneralController {
  /** Get get for collectd general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for collectd general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface CollectdServiceController {
  /** Execute reconfigure for collectd service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for collectd service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for collectd service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for collectd service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for collectd service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface CollectdModule {
  general: CollectdGeneralController;
  service: CollectdServiceController;
}

// Record interfaces