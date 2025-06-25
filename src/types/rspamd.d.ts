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
export interface RspamdServiceController {
  /** Execute reconfigure for rspamd service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for rspamd service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for rspamd service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for rspamd service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for rspamd service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface RspamdSettingsController {
  /** Get get for rspamd settings */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for rspamd settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface RspamdModule {
  service: RspamdServiceController;
  settings: RspamdSettingsController;
}

// Record interfaces