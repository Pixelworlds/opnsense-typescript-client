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
export interface RoutesGatewayController {
  /** Get status for routes gateway */
  status(): Promise<ApiResponse<ServiceStatus>>;
}
export interface RoutesRoutesController {
  /** Execute addroute for routes routes */
  addroute(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delroute for routes routes */
  delroute(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for routes routes */
  get(): Promise<ApiResponse<any>>;
  /** Get getroute for routes routes */
  getroute(uuid: string): Promise<ApiResponse<any>>;
  /** Execute reconfigure for routes routes */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute set for routes routes */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setroute for routes routes */
  setroute(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggleroute for routes routes */
  toggleroute(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface RoutesModule {
  gateway: RoutesGatewayController;
  routes: RoutesRoutesController;
}

// Record interfaces
export interface RoutesRecord extends BaseRecord {
 
  [key: string]: any;
}