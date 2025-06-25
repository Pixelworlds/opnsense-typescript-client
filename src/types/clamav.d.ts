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
export interface ClamavGeneralController {
  /** Get get for clamav general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for clamav general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface ClamavServiceController {
  /** Execute freshclam for clamav service */
  freshclam(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute reconfigure for clamav service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for clamav service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for clamav service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for clamav service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for clamav service */
  stop(): Promise<ApiResponse<ServiceControl>>;
  /** Get version for clamav service */
  version(): Promise<ApiResponse<any>>;
}
export interface ClamavUrlController {
  /** Execute add url for clamav url */
  addUrl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del url for clamav url */
  delUrl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for clamav url */
  get(): Promise<ApiResponse<any>>;
  /** Get get url for clamav url */
  getUrl(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for clamav url */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set url for clamav url */
  setUrl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle url for clamav url */
  toggleUrl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface ClamavModule {
  general: ClamavGeneralController;
  service: ClamavServiceController;
  url: ClamavUrlController;
}

// Record interfaces
export interface ClamavRecord extends BaseRecord {
 
  [key: string]: any;
}