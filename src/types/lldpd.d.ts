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
export interface LldpdGeneralController {
  /** Get get for lldpd general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for lldpd general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface LldpdServiceController {
  /** Get neighbor for lldpd service */
  neighbor(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for lldpd service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for lldpd service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for lldpd service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for lldpd service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for lldpd service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface LldpdModule {
  general: LldpdGeneralController;
  service: LldpdServiceController;
}

// Record interfaces