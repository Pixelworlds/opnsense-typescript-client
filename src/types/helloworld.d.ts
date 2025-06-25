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
export interface HelloworldServiceController {
  /** Execute reload for helloworld service */
  reload(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute test for helloworld service */
  test(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface HelloworldSettingsController {
  /** Get get for helloworld settings */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for helloworld settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface HelloworldModule {
  service: HelloworldServiceController;
  settings: HelloworldSettingsController;
}

// Record interfaces