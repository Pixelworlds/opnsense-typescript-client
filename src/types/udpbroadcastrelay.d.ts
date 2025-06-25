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
export interface UdpbroadcastrelayServiceController {
  /** Get config for udpbroadcastrelay service */
  config(): Promise<ApiResponse<any>>;
  /** Get get for udpbroadcastrelay service */
  get(): Promise<ApiResponse<any>>;
  /** Get reload for udpbroadcastrelay service */
  reload(): Promise<ApiResponse<any>>;
  /** Get restart for udpbroadcastrelay service */
  restart(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for udpbroadcastrelay service */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get start for udpbroadcastrelay service */
  start(uuid: string): Promise<ApiResponse<any>>;
  /** Get status for udpbroadcastrelay service */
  status(uuid: string): Promise<ApiResponse<ServiceStatus>>;
  /** Get stop for udpbroadcastrelay service */
  stop(uuid: string): Promise<ApiResponse<any>>;
}
export interface UdpbroadcastrelaySettingsController {
  /** Execute add relay for udpbroadcastrelay settings */
  addRelay(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del relay for udpbroadcastrelay settings */
  delRelay(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for udpbroadcastrelay settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get relay for udpbroadcastrelay settings */
  getRelay(uuid: string): Promise<ApiResponse<any>>;
  /** Get search relay for udpbroadcastrelay settings */
  searchRelay(): Promise<ApiResponse<SearchResult>>;
  /** Execute set for udpbroadcastrelay settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set relay for udpbroadcastrelay settings */
  setRelay(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle relay for udpbroadcastrelay settings */
  toggleRelay(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface UdpbroadcastrelayModule {
  service: UdpbroadcastrelayServiceController;
  settings: UdpbroadcastrelaySettingsController;
}

// Record interfaces
export interface UdpbroadcastrelayRecord extends BaseRecord {
 
  [key: string]: any;
}