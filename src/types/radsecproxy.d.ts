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
export interface RadsecproxyClientsController {
  /** Execute add item for radsecproxy clients */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for radsecproxy clients */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for radsecproxy clients */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for radsecproxy clients */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for radsecproxy clients */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for radsecproxy clients */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle item for radsecproxy clients */
  toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface RadsecproxyGeneralController {
  /** Get get for radsecproxy general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for radsecproxy general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface RadsecproxyRealmsController {
  /** Execute add item for radsecproxy realms */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for radsecproxy realms */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for radsecproxy realms */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for radsecproxy realms */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for radsecproxy realms */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for radsecproxy realms */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle item for radsecproxy realms */
  toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface RadsecproxyRewritesController {
  /** Execute add item for radsecproxy rewrites */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for radsecproxy rewrites */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for radsecproxy rewrites */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for radsecproxy rewrites */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for radsecproxy rewrites */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for radsecproxy rewrites */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle item for radsecproxy rewrites */
  toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface RadsecproxyServersController {
  /** Execute add item for radsecproxy servers */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for radsecproxy servers */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for radsecproxy servers */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for radsecproxy servers */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for radsecproxy servers */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for radsecproxy servers */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle item for radsecproxy servers */
  toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface RadsecproxyServiceController {
  /** Execute reconfigure for radsecproxy service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for radsecproxy service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for radsecproxy service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for radsecproxy service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for radsecproxy service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface RadsecproxyTlsController {
  /** Execute add item for radsecproxy tls */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for radsecproxy tls */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for radsecproxy tls */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for radsecproxy tls */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for radsecproxy tls */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for radsecproxy tls */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle item for radsecproxy tls */
  toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface RadsecproxyModule {
  clients: RadsecproxyClientsController;
  general: RadsecproxyGeneralController;
  realms: RadsecproxyRealmsController;
  rewrites: RadsecproxyRewritesController;
  servers: RadsecproxyServersController;
  service: RadsecproxyServiceController;
  tls: RadsecproxyTlsController;
}

// Record interfaces
export interface RadsecproxyRecord extends BaseRecord {
 
  [key: string]: any;
}