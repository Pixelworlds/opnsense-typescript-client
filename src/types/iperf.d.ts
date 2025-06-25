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
export interface IperfInstanceController {
  /** Get get for iperf instance */
  get(): Promise<ApiResponse<any>>;
  /** Get query for iperf instance */
  query(): Promise<ApiResponse<any>>;
  /** Execute set for iperf instance */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface IperfServiceController {
  /** Get restart for iperf service */
  restart(): Promise<ApiResponse<any>>;
  /** Get start for iperf service */
  start(): Promise<ApiResponse<any>>;
  /** Get status for iperf service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Get stop for iperf service */
  stop(): Promise<ApiResponse<any>>;
}

// Main module interface
export interface IperfModule {
  instance: IperfInstanceController;
  service: IperfServiceController;
}

// Record interfaces