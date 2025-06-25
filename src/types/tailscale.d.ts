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
export interface TailscaleAuthenticationController {
  /** Get get for tailscale authentication */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for tailscale authentication */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface TailscaleServiceController {
  /** Execute reconfigure for tailscale service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for tailscale service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for tailscale service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for tailscale service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for tailscale service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface TailscaleSettingsController {
  /** Execute add subnet for tailscale settings */
  addSubnet(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del subnet for tailscale settings */
  delSubnet(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for tailscale settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get subnet for tailscale settings */
  getSubnet(uuid: string): Promise<ApiResponse<any>>;
  /** Get reload for tailscale settings */
  reload(): Promise<ApiResponse<any>>;
  /** Execute set for tailscale settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set subnet for tailscale settings */
  setSubnet(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface TailscaleStatusController {
  /** Get get for tailscale status */
  get(): Promise<ApiResponse<any>>;
  /** Get ip for tailscale status */
  ip(): Promise<ApiResponse<any>>;
  /** Get net for tailscale status */
  net(): Promise<ApiResponse<any>>;
  /** Execute set for tailscale status */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get status for tailscale status */
  status(): Promise<ApiResponse<ServiceStatus>>;
}

// Main module interface
export interface TailscaleModule {
  authentication: TailscaleAuthenticationController;
  service: TailscaleServiceController;
  settings: TailscaleSettingsController;
  status: TailscaleStatusController;
}

// Record interfaces
export interface TailscaleRecord extends BaseRecord {
 
  [key: string]: any;
}