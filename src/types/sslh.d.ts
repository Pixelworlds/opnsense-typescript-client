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
export interface SslhServiceController {
  /** Execute reconfigure for sslh service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for sslh service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for sslh service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for sslh service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for sslh service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface SslhSettingsController {
  /** Get get for sslh settings */
  get(): Promise<ApiResponse<any>>;
  /** Get index for sslh settings */
  index(): Promise<ApiResponse<any>>;
  /** Execute set for sslh settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface SslhModule {
  service: SslhServiceController;
  settings: SslhSettingsController;
}

// Record interfaces