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
export interface WolWolController {
  /** Execute add host for wol wol */
  addHost(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del host for wol wol */
  delHost(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for wol wol */
  get(): Promise<ApiResponse<any>>;
  /** Get get host for wol wol */
  getHost(uuid: string): Promise<ApiResponse<any>>;
  /** Get getwake for wol wol */
  getwake(): Promise<ApiResponse<any>>;
  /** Execute set for wol wol */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set host for wol wol */
  setHost(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute wakeall for wol wol */
  wakeall(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface WolModule {
  wol: WolWolController;
}

// Record interfaces
export interface WolRecord extends BaseRecord {
 
  [key: string]: any;
}