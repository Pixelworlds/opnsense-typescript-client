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
export interface TelegrafGeneralController {
  /** Get get for telegraf general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for telegraf general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface TelegrafInputController {
  /** Get get for telegraf input */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for telegraf input */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface TelegrafKeyController {
  /** Execute add key for telegraf key */
  addKey(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del key for telegraf key */
  delKey(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for telegraf key */
  get(): Promise<ApiResponse<any>>;
  /** Get get key for telegraf key */
  getKey(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for telegraf key */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set key for telegraf key */
  setKey(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle key for telegraf key */
  toggleKey(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface TelegrafOutputController {
  /** Get get for telegraf output */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for telegraf output */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface TelegrafServiceController {
  /** Execute reconfigure for telegraf service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for telegraf service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for telegraf service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for telegraf service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for telegraf service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface TelegrafModule {
  general: TelegrafGeneralController;
  input: TelegrafInputController;
  key: TelegrafKeyController;
  output: TelegrafOutputController;
  service: TelegrafServiceController;
}

// Record interfaces
export interface TelegrafRecord extends BaseRecord {
 
  [key: string]: any;
}