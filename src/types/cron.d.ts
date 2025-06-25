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
export interface CronServiceController {
  /** Execute reconfigure for cron service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
}
export interface CronSettingsController {
  /** Execute add job for cron settings */
  addJob(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del job for cron settings */
  delJob(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for cron settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get job for cron settings */
  getJob(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for cron settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set job for cron settings */
  setJob(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle job for cron settings */
  toggleJob(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface CronModule {
  service: CronServiceController;
  settings: CronSettingsController;
}

// Record interfaces
export interface CronRecord extends BaseRecord {
 
  [key: string]: any;
}