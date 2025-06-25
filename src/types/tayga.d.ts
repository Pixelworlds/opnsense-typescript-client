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
export interface TaygaGeneralController {
  /** Get get for tayga general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for tayga general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface TaygaServiceController {
  /** Execute reconfigure for tayga service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for tayga service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for tayga service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for tayga service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for tayga service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface TaygaModule {
  general: TaygaGeneralController;
  service: TaygaServiceController;
}

// Record interfaces