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
export interface CicapAntivirusController {
  /** Get get for cicap antivirus */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for cicap antivirus */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface CicapGeneralController {
  /** Get get for cicap general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for cicap general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface CicapServiceController {
  /** Get checkclamav for cicap service */
  checkclamav(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for cicap service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for cicap service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for cicap service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for cicap service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for cicap service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface CicapModule {
  antivirus: CicapAntivirusController;
  general: CicapGeneralController;
  service: CicapServiceController;
}

// Record interfaces