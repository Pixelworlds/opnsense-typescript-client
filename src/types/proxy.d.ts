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
export interface ProxyServiceController {
  /** Execute downloadacls for proxy service */
  downloadacls(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute fetchacls for proxy service */
  fetchacls(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute reconfigure for proxy service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute refresh template for proxy service */
  refreshTemplate(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute reset for proxy service */
  reset(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get restart for proxy service */
  restart(): Promise<ApiResponse<any>>;
  /** Get start for proxy service */
  start(): Promise<ApiResponse<any>>;
  /** Get status for proxy service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for proxy service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface ProxySettingsController {
  /** Execute add p a c match for proxy settings */
  addPACMatch(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add p a c proxy for proxy settings */
  addPACProxy(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add p a c rule for proxy settings */
  addPACRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add remote blacklist for proxy settings */
  addRemoteBlacklist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del p a c match for proxy settings */
  delPACMatch(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del p a c proxy for proxy settings */
  delPACProxy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del p a c rule for proxy settings */
  delPACRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del remote blacklist for proxy settings */
  delRemoteBlacklist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute fetch r b cron for proxy settings */
  fetchRBCron(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for proxy settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get p a c match for proxy settings */
  getPACMatch(uuid: string): Promise<ApiResponse<any>>;
  /** Get get p a c proxy for proxy settings */
  getPACProxy(uuid: string): Promise<ApiResponse<any>>;
  /** Get get p a c rule for proxy settings */
  getPACRule(uuid: string): Promise<ApiResponse<any>>;
  /** Get get remote blacklist for proxy settings */
  getRemoteBlacklist(uuid: string): Promise<ApiResponse<any>>;
  /** Get search remote blacklists for proxy settings */
  searchRemoteBlacklists(): Promise<ApiResponse<SearchResult>>;
  /** Execute set for proxy settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set p a c match for proxy settings */
  setPACMatch(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set p a c proxy for proxy settings */
  setPACProxy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set p a c rule for proxy settings */
  setPACRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set remote blacklist for proxy settings */
  setRemoteBlacklist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle p a c rule for proxy settings */
  togglePACRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle remote blacklist for proxy settings */
  toggleRemoteBlacklist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface ProxyTemplateController {
  /** Get get for proxy template */
  get(): Promise<ApiResponse<any>>;
  /** Execute reset for proxy template */
  reset(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set for proxy template */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface ProxyAclController {
  /** Execute add custom policy for proxy acl */
  addCustomPolicy(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add policy for proxy acl */
  addPolicy(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute apply for proxy acl */
  apply(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del custom policy for proxy acl */
  delCustomPolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del policy for proxy acl */
  delPolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for proxy acl */
  get(): Promise<ApiResponse<any>>;
  /** Get get custom policy for proxy acl */
  getCustomPolicy(uuid: string): Promise<ApiResponse<any>>;
  /** Get get policy for proxy acl */
  getPolicy(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for proxy acl */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set custom policy for proxy acl */
  setCustomPolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set policy for proxy acl */
  setPolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute test for proxy acl */
  test(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle custom policy for proxy acl */
  toggleCustomPolicy(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle policy for proxy acl */
  togglePolicy(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface ProxyModule {
  service: ProxyServiceController;
  settings: ProxySettingsController;
  template: ProxyTemplateController;
  acl: ProxyAclController;
}

// Record interfaces
export interface ProxyRecord extends BaseRecord {
 
  [key: string]: any;
}