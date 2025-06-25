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
export interface ZerotierNetworkController {
  /** Execute add for zerotier network */
  add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del for zerotier network */
  del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for zerotier network */
  get(uuid: string): Promise<ApiResponse<any>>;
  /** Get info for zerotier network */
  info(uuid: string): Promise<ApiResponse<any>>;
  /** Get search for zerotier network */
  search(): Promise<ApiResponse<SearchResult>>;
  /** Execute set for zerotier network */
  set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle for zerotier network */
  toggle(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface ZerotierSettingsController {
  /** Get get for zerotier settings */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for zerotier settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get status for zerotier settings */
  status(): Promise<ApiResponse<ServiceStatus>>;
}

// Main module interface
export interface ZerotierModule {
  network: ZerotierNetworkController;
  settings: ZerotierSettingsController;
}

// Record interfaces
export interface ZerotierRecord extends BaseRecord {
 
  [key: string]: any;
}