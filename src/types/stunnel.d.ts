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
export interface StunnelServiceController {
  /** Execute reconfigure for stunnel service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for stunnel service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for stunnel service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for stunnel service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for stunnel service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface StunnelServicesController {
  /** Execute add item for stunnel services */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for stunnel services */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for stunnel services */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for stunnel services */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for stunnel services */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for stunnel services */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle item for stunnel services */
  toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface StunnelModule {
  service: StunnelServiceController;
  services: StunnelServicesController;
}

// Record interfaces
export interface StunnelRecord extends BaseRecord {
 
  [key: string]: any;
}