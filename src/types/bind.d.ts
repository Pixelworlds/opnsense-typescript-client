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
export interface BindAclController {
  /** Execute add acl for bind acl */
  addAcl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del acl for bind acl */
  delAcl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for bind acl */
  get(): Promise<ApiResponse<any>>;
  /** Get get acl for bind acl */
  getAcl(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for bind acl */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set acl for bind acl */
  setAcl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle acl for bind acl */
  toggleAcl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface BindDnsblController {
  /** Get get for bind dnsbl */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for bind dnsbl */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface BindDomainController {
  /** Execute add primary domain for bind domain */
  addPrimaryDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add secondary domain for bind domain */
  addSecondaryDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del domain for bind domain */
  delDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for bind domain */
  get(): Promise<ApiResponse<any>>;
  /** Get get domain for bind domain */
  getDomain(uuid: string): Promise<ApiResponse<any>>;
  /** Get search master domain for bind domain */
  searchMasterDomain(): Promise<ApiResponse<SearchResult>>;
  /** Get search slave domain for bind domain */
  searchSlaveDomain(): Promise<ApiResponse<SearchResult>>;
  /** Execute set for bind domain */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set domain for bind domain */
  setDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle domain for bind domain */
  toggleDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface BindGeneralController {
  /** Get get for bind general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for bind general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get zoneshow for bind general */
  zoneshow(): Promise<ApiResponse<any>>;
  /** Get zonetest for bind general */
  zonetest(): Promise<ApiResponse<any>>;
}
export interface BindRecordController {
  /** Execute add record for bind record */
  addRecord(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del record for bind record */
  delRecord(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for bind record */
  get(): Promise<ApiResponse<any>>;
  /** Get get record for bind record */
  getRecord(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for bind record */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set record for bind record */
  setRecord(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle record for bind record */
  toggleRecord(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface BindServiceController {
  /** Get dnsbl for bind service */
  dnsbl(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for bind service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for bind service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for bind service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for bind service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for bind service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface BindModule {
  acl: BindAclController;
  dnsbl: BindDnsblController;
  domain: BindDomainController;
  general: BindGeneralController;
  record: BindRecordController;
  service: BindServiceController;
}

// Record interfaces
export interface BindRecord extends BaseRecord {
 
  [key: string]: any;
}