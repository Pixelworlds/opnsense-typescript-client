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
export interface FtpproxyServiceController {
  /** Get config for ftpproxy service */
  config(): Promise<ApiResponse<any>>;
  /** Get reload for ftpproxy service */
  reload(): Promise<ApiResponse<any>>;
  /** Get restart for ftpproxy service */
  restart(uuid: string): Promise<ApiResponse<any>>;
  /** Get start for ftpproxy service */
  start(uuid: string): Promise<ApiResponse<any>>;
  /** Get status for ftpproxy service */
  status(uuid: string): Promise<ApiResponse<ServiceStatus>>;
  /** Get stop for ftpproxy service */
  stop(uuid: string): Promise<ApiResponse<any>>;
}
export interface FtpproxySettingsController {
  /** Execute add proxy for ftpproxy settings */
  addProxy(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del proxy for ftpproxy settings */
  delProxy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get proxy for ftpproxy settings */
  getProxy(uuid: string): Promise<ApiResponse<any>>;
  /** Get search proxy for ftpproxy settings */
  searchProxy(): Promise<ApiResponse<SearchResult>>;
  /** Execute set proxy for ftpproxy settings */
  setProxy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle proxy for ftpproxy settings */
  toggleProxy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface FtpproxyModule {
  service: FtpproxyServiceController;
  settings: FtpproxySettingsController;
}

// Record interfaces
export interface FtpproxyRecord extends BaseRecord {
 
  [key: string]: any;
}