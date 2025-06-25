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
export interface HwprobeGeneralController {
  /** Get get for hwprobe general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for hwprobe general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface HwprobeServiceController {
  /** Execute reconfigure for hwprobe service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Get report for hwprobe service */
  report(): Promise<ApiResponse<any>>;
  /** Execute restart for hwprobe service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for hwprobe service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for hwprobe service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for hwprobe service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface HwprobeModule {
  general: HwprobeGeneralController;
  service: HwprobeServiceController;
}

// Record interfaces