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
export interface WazuhagentServiceController {
  /** Execute reconfigure for wazuhagent service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for wazuhagent service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for wazuhagent service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for wazuhagent service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for wazuhagent service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface WazuhagentSettingsController {
  /** Get get for wazuhagent settings */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for wazuhagent settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface WazuhagentModule {
  service: WazuhagentServiceController;
  settings: WazuhagentSettingsController;
}

// Record interfaces