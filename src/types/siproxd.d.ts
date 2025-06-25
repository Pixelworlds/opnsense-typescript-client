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
export interface SiproxdDomainController {
  /** Execute add domain for siproxd domain */
  addDomain(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del domain for siproxd domain */
  delDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for siproxd domain */
  get(): Promise<ApiResponse<any>>;
  /** Get get domain for siproxd domain */
  getDomain(uuid: string): Promise<ApiResponse<any>>;
  /** Get search domain for siproxd domain */
  searchDomain(): Promise<ApiResponse<SearchResult>>;
  /** Execute set for siproxd domain */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set domain for siproxd domain */
  setDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get toggle domain for siproxd domain */
  toggleDomain(uuid: string): Promise<ApiResponse<any>>;
}
export interface SiproxdGeneralController {
  /** Get get for siproxd general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for siproxd general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface SiproxdServiceController {
  /** Execute reconfigure for siproxd service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for siproxd service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Get showregistrations for siproxd service */
  showregistrations(): Promise<ApiResponse<any>>;
  /** Execute start for siproxd service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for siproxd service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for siproxd service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface SiproxdUserController {
  /** Execute add user for siproxd user */
  addUser(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del user for siproxd user */
  delUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for siproxd user */
  get(): Promise<ApiResponse<any>>;
  /** Get get user for siproxd user */
  getUser(uuid: string): Promise<ApiResponse<any>>;
  /** Get search user for siproxd user */
  searchUser(): Promise<ApiResponse<SearchResult>>;
  /** Execute set for siproxd user */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set user for siproxd user */
  setUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get toggle user for siproxd user */
  toggleUser(uuid: string): Promise<ApiResponse<any>>;
}

// Main module interface
export interface SiproxdModule {
  domain: SiproxdDomainController;
  general: SiproxdGeneralController;
  service: SiproxdServiceController;
  user: SiproxdUserController;
}

// Record interfaces
export interface SiproxdRecord extends BaseRecord {
 
  [key: string]: any;
}