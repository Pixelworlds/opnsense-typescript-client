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
export interface MdnsrepeaterServiceController {
  /** Execute reconfigure for mdnsrepeater service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for mdnsrepeater service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for mdnsrepeater service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for mdnsrepeater service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for mdnsrepeater service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface MdnsrepeaterSettingsController {
  /** Get get for mdnsrepeater settings */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for mdnsrepeater settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface MdnsrepeaterModule {
  service: MdnsrepeaterServiceController;
  settings: MdnsrepeaterSettingsController;
}

// Record interfaces