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
export interface TrafficshaperServiceController {
  /** Execute flushreload for trafficshaper service */
  flushreload(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute reconfigure for trafficshaper service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Get statistics for trafficshaper service */
  statistics(): Promise<ApiResponse<any>>;
}
export interface TrafficshaperSettingsController {
  /** Execute add pipe for trafficshaper settings */
  addPipe(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add queue for trafficshaper settings */
  addQueue(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add rule for trafficshaper settings */
  addRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del pipe for trafficshaper settings */
  delPipe(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del queue for trafficshaper settings */
  delQueue(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del rule for trafficshaper settings */
  delRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for trafficshaper settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get pipe for trafficshaper settings */
  getPipe(uuid: string): Promise<ApiResponse<any>>;
  /** Get get queue for trafficshaper settings */
  getQueue(uuid: string): Promise<ApiResponse<any>>;
  /** Get get rule for trafficshaper settings */
  getRule(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for trafficshaper settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set pipe for trafficshaper settings */
  setPipe(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set queue for trafficshaper settings */
  setQueue(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set rule for trafficshaper settings */
  setRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle pipe for trafficshaper settings */
  togglePipe(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle queue for trafficshaper settings */
  toggleQueue(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle rule for trafficshaper settings */
  toggleRule(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface TrafficshaperModule {
  service: TrafficshaperServiceController;
  settings: TrafficshaperSettingsController;
}

// Record interfaces
export interface TrafficshaperRecord extends BaseRecord {
 
  [key: string]: any;
}