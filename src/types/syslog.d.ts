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
export interface SyslogServiceController {
  /** Execute reconfigure for syslog service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute reset for syslog service */
  reset(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute restart for syslog service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for syslog service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get stats for syslog service */
  stats(): Promise<ApiResponse<any>>;
  /** Get status for syslog service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for syslog service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface SyslogSettingsController {
  /** Execute add destination for syslog settings */
  addDestination(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del destination for syslog settings */
  delDestination(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for syslog settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get destination for syslog settings */
  getDestination(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for syslog settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set destination for syslog settings */
  setDestination(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle destination for syslog settings */
  toggleDestination(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface SyslogModule {
  service: SyslogServiceController;
  settings: SyslogSettingsController;
}

// Record interfaces
export interface SyslogRecord extends BaseRecord {
 
  [key: string]: any;
}