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
export interface TurnserverServiceController {
  /** Execute reconfigure for turnserver service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for turnserver service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for turnserver service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for turnserver service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for turnserver service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface TurnserverSettingsController {
  /** Get get for turnserver settings */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for turnserver settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface TurnserverModule {
  service: TurnserverServiceController;
  settings: TurnserverSettingsController;
}

// Record interfaces