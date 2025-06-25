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
export interface SmartServiceController {
  /** Execute abort for smart service */
  abort(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute info for smart service */
  info(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute list for smart service */
  list(): Promise<ApiResponse<ApiResult>>;
  /** Execute logs for smart service */
  logs(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute test for smart service */
  test(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface SmartModule {
  service: SmartServiceController;
}

// Record interfaces