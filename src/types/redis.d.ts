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
export interface RedisServiceController {
  /** Execute reconfigure for redis service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Get resetdb for redis service */
  resetdb(): Promise<ApiResponse<any>>;
  /** Execute restart for redis service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for redis service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for redis service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for redis service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface RedisSettingsController {
  /** Get get for redis settings */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for redis settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface RedisModule {
  service: RedisServiceController;
  settings: RedisSettingsController;
}

// Record interfaces