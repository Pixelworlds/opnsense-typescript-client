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
export interface NetsnmpGeneralController {
  /** Get get for netsnmp general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for netsnmp general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface NetsnmpServiceController {
  /** Execute reconfigure for netsnmp service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for netsnmp service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for netsnmp service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for netsnmp service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for netsnmp service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface NetsnmpUserController {
  /** Execute add user for netsnmp user */
  addUser(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del user for netsnmp user */
  delUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for netsnmp user */
  get(): Promise<ApiResponse<any>>;
  /** Get get user for netsnmp user */
  getUser(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for netsnmp user */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set user for netsnmp user */
  setUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle user for netsnmp user */
  toggleUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface NetsnmpModule {
  general: NetsnmpGeneralController;
  service: NetsnmpServiceController;
  user: NetsnmpUserController;
}

// Record interfaces
export interface NetsnmpRecord extends BaseRecord {
 
  [key: string]: any;
}