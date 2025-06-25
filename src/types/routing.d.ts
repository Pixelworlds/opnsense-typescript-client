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
export interface RoutingSettingsController {
  /** Execute add gateway for routing settings */
  addGateway(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del gateway for routing settings */
  delGateway(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for routing settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get gateway for routing settings */
  getGateway(uuid: string): Promise<ApiResponse<any>>;
  /** Execute reconfigure for routing settings */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Get search gateway for routing settings */
  searchGateway(): Promise<ApiResponse<SearchResult>>;
  /** Execute set for routing settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set gateway for routing settings */
  setGateway(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle gateway for routing settings */
  toggleGateway(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface RoutingModule {
  settings: RoutingSettingsController;
}

// Record interfaces
export interface RoutingRecord extends BaseRecord {
 
  [key: string]: any;
}