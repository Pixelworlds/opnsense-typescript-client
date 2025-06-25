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
export interface TincServiceController {
  /** Execute reconfigure for tinc service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for tinc service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for tinc service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Execute stop for tinc service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface TincSettingsController {
  /** Execute del host for tinc settings */
  delHost(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del network for tinc settings */
  delNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for tinc settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get host for tinc settings */
  getHost(uuid: string): Promise<ApiResponse<any>>;
  /** Get get network for tinc settings */
  getNetwork(uuid: string): Promise<ApiResponse<any>>;
  /** Get search host for tinc settings */
  searchHost(): Promise<ApiResponse<SearchResult>>;
  /** Get search network for tinc settings */
  searchNetwork(): Promise<ApiResponse<SearchResult>>;
  /** Execute set for tinc settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set host for tinc settings */
  setHost(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set network for tinc settings */
  setNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle host for tinc settings */
  toggleHost(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle network for tinc settings */
  toggleNetwork(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface TincModule {
  service: TincServiceController;
  settings: TincSettingsController;
}

// Record interfaces