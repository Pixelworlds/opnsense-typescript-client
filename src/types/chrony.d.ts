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
export interface ChronyGeneralController {
  /** Get get for chrony general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for chrony general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface ChronyServiceController {
  /** Get chronyauthdata for chrony service */
  chronyauthdata(): Promise<ApiResponse<any>>;
  /** Get chronysources for chrony service */
  chronysources(): Promise<ApiResponse<any>>;
  /** Get chronysourcestats for chrony service */
  chronysourcestats(): Promise<ApiResponse<any>>;
  /** Get chronytracking for chrony service */
  chronytracking(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for chrony service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for chrony service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for chrony service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for chrony service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for chrony service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface ChronyModule {
  general: ChronyGeneralController;
  service: ChronyServiceController;
}

// Record interfaces