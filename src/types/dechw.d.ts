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
export interface DechwInfoController {
  /** Get power status for dechw info */
  powerStatus(): Promise<ApiResponse<any>>;
}

// Main module interface
export interface DechwModule {
  info: DechwInfoController;
}

// Record interfaces