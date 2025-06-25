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
export interface DyndnsAccountsController {
  /** Execute add item for dyndns accounts */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for dyndns accounts */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for dyndns accounts */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for dyndns accounts */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for dyndns accounts */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for dyndns accounts */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle item for dyndns accounts */
  toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface DyndnsServiceController {
  /** Execute reconfigure for dyndns service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for dyndns service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for dyndns service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for dyndns service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for dyndns service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface DyndnsSettingsController {
  /** Get get for dyndns settings */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for dyndns settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface DyndnsModule {
  accounts: DyndnsAccountsController;
  service: DyndnsServiceController;
  settings: DyndnsSettingsController;
}

// Record interfaces
export interface DyndnsRecord extends BaseRecord {
 
  [key: string]: any;
}