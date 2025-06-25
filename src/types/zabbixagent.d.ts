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
export interface ZabbixagentServiceController {
  /** Execute reconfigure for zabbixagent service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for zabbixagent service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for zabbixagent service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for zabbixagent service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for zabbixagent service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface ZabbixagentSettingsController {
  /** Execute add alias for zabbixagent settings */
  addAlias(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add userparameter for zabbixagent settings */
  addUserparameter(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del alias for zabbixagent settings */
  delAlias(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del userparameter for zabbixagent settings */
  delUserparameter(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for zabbixagent settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get alias for zabbixagent settings */
  getAlias(uuid: string): Promise<ApiResponse<any>>;
  /** Get get userparameter for zabbixagent settings */
  getUserparameter(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for zabbixagent settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set alias for zabbixagent settings */
  setAlias(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set userparameter for zabbixagent settings */
  setUserparameter(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle alias for zabbixagent settings */
  toggleAlias(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle userparameter for zabbixagent settings */
  toggleUserparameter(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface ZabbixagentModule {
  service: ZabbixagentServiceController;
  settings: ZabbixagentSettingsController;
}

// Record interfaces
export interface ZabbixagentRecord extends BaseRecord {
 
  [key: string]: any;
}