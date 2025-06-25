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
export interface GridexampleSettingsController {
  /** Execute add item for gridexample settings */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for gridexample settings */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for gridexample settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for gridexample settings */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for gridexample settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for gridexample settings */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle item for gridexample settings */
  toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface GridexampleModule {
  settings: GridexampleSettingsController;
}

// Record interfaces
export interface GridexampleRecord extends BaseRecord {
 
  [key: string]: any;
}