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
export interface UnboundDiagnosticsController {
  /** Get dumpcache for unbound diagnostics */
  dumpcache(): Promise<ApiResponse<any>>;
  /** Get dumpinfra for unbound diagnostics */
  dumpinfra(): Promise<ApiResponse<any>>;
  /** Get listinsecure for unbound diagnostics */
  listinsecure(): Promise<ApiResponse<any>>;
  /** Get listlocaldata for unbound diagnostics */
  listlocaldata(): Promise<ApiResponse<any>>;
  /** Get listlocalzones for unbound diagnostics */
  listlocalzones(): Promise<ApiResponse<any>>;
  /** Get stats for unbound diagnostics */
  stats(): Promise<ApiResponse<any>>;
}
export interface UnboundOverviewController {
  /** Get  rolling for unbound overview */
  rolling(): Promise<ApiResponse<any>>;
  /** Get is block list enabled for unbound overview */
  isBlockListEnabled(): Promise<ApiResponse<any>>;
  /** Get is enabled for unbound overview */
  isEnabled(): Promise<ApiResponse<any>>;
  /** Get search queries for unbound overview */
  searchQueries(): Promise<ApiResponse<SearchResult>>;
  /** Get totals for unbound overview */
  totals(): Promise<ApiResponse<any>>;
}
export interface UnboundServiceController {
  /** Get dnsbl for unbound service */
  dnsbl(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for unbound service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Get reconfigure general for unbound service */
  reconfigureGeneral(): Promise<ApiResponse<any>>;
  /** Execute restart for unbound service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for unbound service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for unbound service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for unbound service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface UnboundSettingsController {
  /** Execute add acl for unbound settings */
  addAcl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add forward for unbound settings */
  addForward(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add host alias for unbound settings */
  addHostAlias(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add host override for unbound settings */
  addHostOverride(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del acl for unbound settings */
  delAcl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del forward for unbound settings */
  delForward(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del host alias for unbound settings */
  delHostAlias(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del host override for unbound settings */
  delHostOverride(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for unbound settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get acl for unbound settings */
  getAcl(uuid: string): Promise<ApiResponse<any>>;
  /** Get get forward for unbound settings */
  getForward(uuid: string): Promise<ApiResponse<any>>;
  /** Get get host alias for unbound settings */
  getHostAlias(uuid: string): Promise<ApiResponse<any>>;
  /** Get get host override for unbound settings */
  getHostOverride(uuid: string): Promise<ApiResponse<any>>;
  /** Get get nameservers for unbound settings */
  getNameservers(): Promise<ApiResponse<any>>;
  /** Execute set for unbound settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set acl for unbound settings */
  setAcl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set forward for unbound settings */
  setForward(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set host alias for unbound settings */
  setHostAlias(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set host override for unbound settings */
  setHostOverride(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle acl for unbound settings */
  toggleAcl(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle forward for unbound settings */
  toggleForward(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle host alias for unbound settings */
  toggleHostAlias(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle host override for unbound settings */
  toggleHostOverride(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute update blocklist for unbound settings */
  updateBlocklist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface UnboundModule {
  diagnostics: UnboundDiagnosticsController;
  overview: UnboundOverviewController;
  service: UnboundServiceController;
  settings: UnboundSettingsController;
}

// Record interfaces
export interface UnboundRecord extends BaseRecord {
 
  [key: string]: any;
}