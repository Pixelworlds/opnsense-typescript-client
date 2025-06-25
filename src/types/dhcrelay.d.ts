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
export interface DhcrelayServiceController {
  /** Execute reconfigure for dhcrelay service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
}
export interface DhcrelaySettingsController {
  /** Execute add dest for dhcrelay settings */
  addDest(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add relay for dhcrelay settings */
  addRelay(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del dest for dhcrelay settings */
  delDest(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del relay for dhcrelay settings */
  delRelay(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for dhcrelay settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get dest for dhcrelay settings */
  getDest(uuid: string): Promise<ApiResponse<any>>;
  /** Get get relay for dhcrelay settings */
  getRelay(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for dhcrelay settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set dest for dhcrelay settings */
  setDest(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set relay for dhcrelay settings */
  setRelay(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle relay for dhcrelay settings */
  toggleRelay(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface DhcrelayModule {
  service: DhcrelayServiceController;
  settings: DhcrelaySettingsController;
}

// Record interfaces
export interface DhcrelayRecord extends BaseRecord {
 
  [key: string]: any;
}