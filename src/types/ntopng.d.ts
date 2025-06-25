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
export interface NtopngGeneralController {
  /** Get get for ntopng general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for ntopng general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface NtopngServiceController {
  /** Get checkredis for ntopng service */
  checkredis(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for ntopng service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for ntopng service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for ntopng service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for ntopng service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for ntopng service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface NtopngModule {
  general: NtopngGeneralController;
  service: NtopngServiceController;
}

// Record interfaces