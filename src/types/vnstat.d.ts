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
export interface VnstatGeneralController {
  /** Get get for vnstat general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for vnstat general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface VnstatServiceController {
  /** Get daily for vnstat service */
  daily(): Promise<ApiResponse<any>>;
  /** Get hourly for vnstat service */
  hourly(): Promise<ApiResponse<any>>;
  /** Get monthly for vnstat service */
  monthly(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for vnstat service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Get resetdb for vnstat service */
  resetdb(): Promise<ApiResponse<any>>;
  /** Execute restart for vnstat service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for vnstat service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for vnstat service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for vnstat service */
  stop(): Promise<ApiResponse<ServiceControl>>;
  /** Get yearly for vnstat service */
  yearly(): Promise<ApiResponse<any>>;
}

// Main module interface
export interface VnstatModule {
  general: VnstatGeneralController;
  service: VnstatServiceController;
}

// Record interfaces