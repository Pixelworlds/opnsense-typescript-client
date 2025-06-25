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
export interface MonitServiceController {
  /** Execute check for monit service */
  check(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute reconfigure for monit service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for monit service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for monit service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for monit service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for monit service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface MonitSettingsController {
  /** Execute add alert for monit settings */
  addAlert(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add service for monit settings */
  addService(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add test for monit settings */
  addTest(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del alert for monit settings */
  delAlert(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del service for monit settings */
  delService(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del test for monit settings */
  delTest(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get dirty for monit settings */
  dirty(): Promise<ApiResponse<any>>;
  /** Get get for monit settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get alert for monit settings */
  getAlert(uuid: string): Promise<ApiResponse<any>>;
  /** Get get general for monit settings */
  getGeneral(): Promise<ApiResponse<any>>;
  /** Get get service for monit settings */
  getService(uuid: string): Promise<ApiResponse<any>>;
  /** Get get test for monit settings */
  getTest(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for monit settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set alert for monit settings */
  setAlert(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set service for monit settings */
  setService(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set test for monit settings */
  setTest(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle alert for monit settings */
  toggleAlert(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle service for monit settings */
  toggleService(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface MonitStatusController {
  /** Get get for monit status */
  get(): Promise<ApiResponse<any>>;
}

// Main module interface
export interface MonitModule {
  service: MonitServiceController;
  settings: MonitSettingsController;
  status: MonitStatusController;
}

// Record interfaces
export interface MonitRecord extends BaseRecord {
 
  [key: string]: any;
}