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
export interface OpenvpnClient_overwritesController {
  /** Execute add for openvpn client_overwrites */
  add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del for openvpn client_overwrites */
  del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for openvpn client_overwrites */
  get(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for openvpn client_overwrites */
  set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle for openvpn client_overwrites */
  toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface OpenvpnExportController {
  /** Get accounts for openvpn export */
  accounts(): Promise<ApiResponse<any>>;
  /** Execute download for openvpn export */
  download(): Promise<ApiResponse<ApiResult>>;
  /** Get providers for openvpn export */
  providers(): Promise<ApiResponse<any>>;
  /** Execute store presets for openvpn export */
  storePresets(): Promise<ApiResponse<ApiResult>>;
  /** Get templates for openvpn export */
  templates(): Promise<ApiResponse<any>>;
  /** Execute validate presets for openvpn export */
  validatePresets(): Promise<ApiResponse<ApiResult>>;
}
export interface OpenvpnInstancesController {
  /** Execute add for openvpn instances */
  add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add static key for openvpn instances */
  addStaticKey(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del for openvpn instances */
  del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del static key for openvpn instances */
  delStaticKey(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get gen key for openvpn instances */
  genKey(): Promise<ApiResponse<any>>;
  /** Get get for openvpn instances */
  get(uuid: string): Promise<ApiResponse<any>>;
  /** Get get static key for openvpn instances */
  getStaticKey(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for openvpn instances */
  set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set static key for openvpn instances */
  setStaticKey(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle for openvpn instances */
  toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface OpenvpnServiceController {
  /** Execute kill session for openvpn service */
  killSession(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute reconfigure for openvpn service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart service for openvpn service */
  restartService(): Promise<ApiResponse<ApiResult>>;
  /** Get search routes for openvpn service */
  searchRoutes(): Promise<ApiResponse<SearchResult>>;
  /** Get search sessions for openvpn service */
  searchSessions(): Promise<ApiResponse<SearchResult>>;
  /** Execute start service for openvpn service */
  startService(): Promise<ApiResponse<ApiResult>>;
  /** Execute stop service for openvpn service */
  stopService(): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface OpenvpnModule {
  client_overwrites: OpenvpnClient_overwritesController;
  export: OpenvpnExportController;
  instances: OpenvpnInstancesController;
  service: OpenvpnServiceController;
}

// Record interfaces
export interface OpenvpnRecord extends BaseRecord {
 
  [key: string]: any;
}