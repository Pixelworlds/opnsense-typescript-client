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
export interface DmidecodeServiceController {
  /** Get get for dmidecode service */
  get(): Promise<ApiResponse<any>>;
}

// Main module interface
export interface DmidecodeModule {
  service: DmidecodeServiceController;
}

// Record interfaces