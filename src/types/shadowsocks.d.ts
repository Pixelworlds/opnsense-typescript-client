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
export interface ShadowsocksGeneralController {
  /** Get get for shadowsocks general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for shadowsocks general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface ShadowsocksLocalController {
  /** Get get for shadowsocks local */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for shadowsocks local */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface ShadowsocksLocalserviceController {
  /** Execute reconfigure for shadowsocks localservice */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for shadowsocks localservice */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for shadowsocks localservice */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for shadowsocks localservice */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for shadowsocks localservice */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface ShadowsocksServiceController {
  /** Execute reconfigure for shadowsocks service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for shadowsocks service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for shadowsocks service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for shadowsocks service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for shadowsocks service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface ShadowsocksModule {
  general: ShadowsocksGeneralController;
  local: ShadowsocksLocalController;
  localservice: ShadowsocksLocalserviceController;
  service: ShadowsocksServiceController;
}

// Record interfaces