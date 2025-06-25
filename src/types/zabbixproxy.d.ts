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
export interface ZabbixproxyGeneralController {
  /** Get get for zabbixproxy general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for zabbixproxy general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface ZabbixproxyServiceController {
  /** Execute reconfigure for zabbixproxy service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for zabbixproxy service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for zabbixproxy service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for zabbixproxy service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for zabbixproxy service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface ZabbixproxyModule {
  general: ZabbixproxyGeneralController;
  service: ZabbixproxyServiceController;
}

// Record interfaces