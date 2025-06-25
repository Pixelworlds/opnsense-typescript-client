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
export interface ProxyssoServiceController {
  /** Execute createkeytab for proxysso service */
  createkeytab(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get deletekeytab for proxysso service */
  deletekeytab(): Promise<ApiResponse<any>>;
  /** Get get check list for proxysso service */
  getCheckList(): Promise<ApiResponse<any>>;
  /** Get showkeytab for proxysso service */
  showkeytab(): Promise<ApiResponse<any>>;
  /** Execute testkerblogin for proxysso service */
  testkerblogin(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface ProxyssoSettingsController {
  /** Get get for proxysso settings */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for proxysso settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface ProxyssoModule {
  service: ProxyssoServiceController;
  settings: ProxyssoSettingsController;
}

// Record interfaces
export interface ProxyssoRecord extends BaseRecord {
 
  [key: string]: any;
}