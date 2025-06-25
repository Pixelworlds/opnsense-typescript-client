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
export interface RelaydServiceController {
  /** Execute configtest for relayd service */
  configtest(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute reconfigure for relayd service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for relayd service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for relayd service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for relayd service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for relayd service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface RelaydSettingsController {
  /** Get del for relayd settings */
  del(uuid: string): Promise<ApiResponse<any>>;
  /** Get dirty for relayd settings */
  dirty(): Promise<ApiResponse<any>>;
  /** Get get for relayd settings */
  get(uuid: string): Promise<ApiResponse<any>>;
  /** Execute search for relayd settings */
  search(params?: Record<string, any>): Promise<ApiResponse<SearchResult>>;
  /** Execute set for relayd settings */
  set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle for relayd settings */
  toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface RelaydStatusController {
  /** Get sum for relayd status */
  sum(): Promise<ApiResponse<any>>;
  /** Execute toggle for relayd status */
  toggle(): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface RelaydModule {
  service: RelaydServiceController;
  settings: RelaydSettingsController;
  status: RelaydStatusController;
}

// Record interfaces