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
export interface NutDiagnosticsController {
  /** Get upsstatus for nut diagnostics */
  upsstatus(): Promise<ApiResponse<ServiceStatus>>;
}
export interface NutServiceController {
  /** Execute reconfigure for nut service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for nut service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for nut service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for nut service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for nut service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface NutSettingsController {
  /** Get get for nut settings */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for nut settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface NutModule {
  diagnostics: NutDiagnosticsController;
  service: NutServiceController;
  settings: NutSettingsController;
}

// Record interfaces