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
export interface MaltrailGeneralController {
  /** Get get for maltrail general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for maltrail general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface MaltrailSensorController {
  /** Get get for maltrail sensor */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for maltrail sensor */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface MaltrailServerController {
  /** Get get for maltrail server */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for maltrail server */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface MaltrailServerserviceController {
  /** Execute reconfigure for maltrail serverservice */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for maltrail serverservice */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for maltrail serverservice */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for maltrail serverservice */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for maltrail serverservice */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface MaltrailServiceController {
  /** Execute reconfigure for maltrail service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for maltrail service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for maltrail service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for maltrail service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for maltrail service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface MaltrailModule {
  general: MaltrailGeneralController;
  sensor: MaltrailSensorController;
  server: MaltrailServerController;
  serverservice: MaltrailServerserviceController;
  service: MaltrailServiceController;
}

// Record interfaces