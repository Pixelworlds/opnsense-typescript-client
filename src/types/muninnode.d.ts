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
export interface MuninnodeGeneralController {
  /** Get get for muninnode general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for muninnode general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface MuninnodeServiceController {
  /** Execute reconfigure for muninnode service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for muninnode service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for muninnode service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for muninnode service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for muninnode service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface MuninnodeModule {
  general: MuninnodeGeneralController;
  service: MuninnodeServiceController;
}

// Record interfaces