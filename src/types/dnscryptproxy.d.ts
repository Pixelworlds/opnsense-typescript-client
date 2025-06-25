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
export interface DnscryptproxyCloakController {
  /** Execute add cloak for dnscryptproxy cloak */
  addCloak(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del cloak for dnscryptproxy cloak */
  delCloak(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for dnscryptproxy cloak */
  get(): Promise<ApiResponse<any>>;
  /** Get get cloak for dnscryptproxy cloak */
  getCloak(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for dnscryptproxy cloak */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set cloak for dnscryptproxy cloak */
  setCloak(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle cloak for dnscryptproxy cloak */
  toggleCloak(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface DnscryptproxyDnsblController {
  /** Get get for dnscryptproxy dnsbl */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for dnscryptproxy dnsbl */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface DnscryptproxyForwardController {
  /** Execute add forward for dnscryptproxy forward */
  addForward(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del forward for dnscryptproxy forward */
  delForward(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for dnscryptproxy forward */
  get(): Promise<ApiResponse<any>>;
  /** Get get forward for dnscryptproxy forward */
  getForward(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for dnscryptproxy forward */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set forward for dnscryptproxy forward */
  setForward(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle forward for dnscryptproxy forward */
  toggleForward(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface DnscryptproxyGeneralController {
  /** Get get for dnscryptproxy general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for dnscryptproxy general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface DnscryptproxyServerController {
  /** Execute add server for dnscryptproxy server */
  addServer(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del server for dnscryptproxy server */
  delServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for dnscryptproxy server */
  get(): Promise<ApiResponse<any>>;
  /** Get get server for dnscryptproxy server */
  getServer(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for dnscryptproxy server */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set server for dnscryptproxy server */
  setServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle server for dnscryptproxy server */
  toggleServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface DnscryptproxyServiceController {
  /** Get dnsbl for dnscryptproxy service */
  dnsbl(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for dnscryptproxy service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for dnscryptproxy service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for dnscryptproxy service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for dnscryptproxy service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for dnscryptproxy service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface DnscryptproxyWhitelistController {
  /** Execute add whitelist for dnscryptproxy whitelist */
  addWhitelist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del whitelist for dnscryptproxy whitelist */
  delWhitelist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for dnscryptproxy whitelist */
  get(): Promise<ApiResponse<any>>;
  /** Get get whitelist for dnscryptproxy whitelist */
  getWhitelist(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for dnscryptproxy whitelist */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set whitelist for dnscryptproxy whitelist */
  setWhitelist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle whitelist for dnscryptproxy whitelist */
  toggleWhitelist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface DnscryptproxyModule {
  cloak: DnscryptproxyCloakController;
  dnsbl: DnscryptproxyDnsblController;
  forward: DnscryptproxyForwardController;
  general: DnscryptproxyGeneralController;
  server: DnscryptproxyServerController;
  service: DnscryptproxyServiceController;
  whitelist: DnscryptproxyWhitelistController;
}

// Record interfaces
export interface DnscryptproxyRecord extends BaseRecord {
 
  [key: string]: any;
}