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
export interface NrpeCommandController {
  /** Execute add command for nrpe command */
  addCommand(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del command for nrpe command */
  delCommand(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for nrpe command */
  get(): Promise<ApiResponse<any>>;
  /** Get get command for nrpe command */
  getCommand(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for nrpe command */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set command for nrpe command */
  setCommand(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle command for nrpe command */
  toggleCommand(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface NrpeGeneralController {
  /** Get get for nrpe general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for nrpe general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface NrpeServiceController {
  /** Execute reconfigure for nrpe service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for nrpe service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for nrpe service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for nrpe service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for nrpe service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface NrpeModule {
  command: NrpeCommandController;
  general: NrpeGeneralController;
  service: NrpeServiceController;
}

// Record interfaces
export interface NrpeRecord extends BaseRecord {
 
  [key: string]: any;
}