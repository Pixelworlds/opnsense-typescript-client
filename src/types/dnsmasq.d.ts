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
export interface DnsmasqLeasesController {
  /** Get search for dnsmasq leases */
  search(): Promise<ApiResponse<SearchResult>>;
}
export interface DnsmasqServiceController {
  /** Execute reconfigure for dnsmasq service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for dnsmasq service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for dnsmasq service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for dnsmasq service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for dnsmasq service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface DnsmasqSettingsController {
  /** Execute add boot for dnsmasq settings */
  addBoot(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add domain for dnsmasq settings */
  addDomain(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add host for dnsmasq settings */
  addHost(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add option for dnsmasq settings */
  addOption(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add range for dnsmasq settings */
  addRange(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add tag for dnsmasq settings */
  addTag(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del boot for dnsmasq settings */
  delBoot(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del domain for dnsmasq settings */
  delDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del host for dnsmasq settings */
  delHost(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del option for dnsmasq settings */
  delOption(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del range for dnsmasq settings */
  delRange(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del tag for dnsmasq settings */
  delTag(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get download hosts for dnsmasq settings */
  downloadHosts(): Promise<ApiResponse<any>>;
  /** Get get for dnsmasq settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get boot for dnsmasq settings */
  getBoot(uuid: string): Promise<ApiResponse<any>>;
  /** Get get domain for dnsmasq settings */
  getDomain(uuid: string): Promise<ApiResponse<any>>;
  /** Get get host for dnsmasq settings */
  getHost(uuid: string): Promise<ApiResponse<any>>;
  /** Get get option for dnsmasq settings */
  getOption(uuid: string): Promise<ApiResponse<any>>;
  /** Get get range for dnsmasq settings */
  getRange(uuid: string): Promise<ApiResponse<any>>;
  /** Get get tag for dnsmasq settings */
  getTag(uuid: string): Promise<ApiResponse<any>>;
  /** Get get tag list for dnsmasq settings */
  getTagList(): Promise<ApiResponse<any>>;
  /** Execute set for dnsmasq settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set boot for dnsmasq settings */
  setBoot(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set domain for dnsmasq settings */
  setDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set host for dnsmasq settings */
  setHost(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set option for dnsmasq settings */
  setOption(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set range for dnsmasq settings */
  setRange(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set tag for dnsmasq settings */
  setTag(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute upload hosts for dnsmasq settings */
  uploadHosts(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface DnsmasqModule {
  leases: DnsmasqLeasesController;
  service: DnsmasqServiceController;
  settings: DnsmasqSettingsController;
}

// Record interfaces
export interface DnsmasqRecord extends BaseRecord {
 
  [key: string]: any;
}