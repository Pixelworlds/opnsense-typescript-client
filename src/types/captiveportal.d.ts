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
export interface CaptiveportalAccessController {
  /** Get api for captiveportal access */
  api(): Promise<ApiResponse<any>>;
  /** Get logoff for captiveportal access */
  logoff(): Promise<ApiResponse<any>>;
  /** Execute logon for captiveportal access */
  logon(): Promise<ApiResponse<ApiResult>>;
}
export interface CaptiveportalServiceController {
  /** Execute del template for captiveportal service */
  delTemplate(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get template for captiveportal service */
  getTemplate(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for captiveportal service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute save template for captiveportal service */
  saveTemplate(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get search templates for captiveportal service */
  searchTemplates(): Promise<ApiResponse<SearchResult>>;
}
export interface CaptiveportalSessionController {
  /** Execute connect for captiveportal session */
  connect(): Promise<ApiResponse<ApiResult>>;
  /** Execute disconnect for captiveportal session */
  disconnect(): Promise<ApiResponse<ApiResult>>;
  /** Get list for captiveportal session */
  list(): Promise<ApiResponse<any>>;
  /** Get search for captiveportal session */
  search(): Promise<ApiResponse<SearchResult>>;
  /** Get zones for captiveportal session */
  zones(): Promise<ApiResponse<any>>;
}
export interface CaptiveportalSettingsController {
  /** Execute add zone for captiveportal settings */
  addZone(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del zone for captiveportal settings */
  delZone(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for captiveportal settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get zone for captiveportal settings */
  getZone(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for captiveportal settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set zone for captiveportal settings */
  setZone(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle zone for captiveportal settings */
  toggleZone(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface CaptiveportalVoucherController {
  /** Execute drop expired vouchers for captiveportal voucher */
  dropExpiredVouchers(): Promise<ApiResponse<ApiResult>>;
  /** Execute drop voucher group for captiveportal voucher */
  dropVoucherGroup(): Promise<ApiResponse<ApiResult>>;
  /** Execute expire voucher for captiveportal voucher */
  expireVoucher(): Promise<ApiResponse<ApiResult>>;
  /** Execute generate vouchers for captiveportal voucher */
  generateVouchers(): Promise<ApiResponse<ApiResult>>;
  /** Get list providers for captiveportal voucher */
  listProviders(): Promise<ApiResponse<any>>;
  /** Get list voucher groups for captiveportal voucher */
  listVoucherGroups(): Promise<ApiResponse<any>>;
  /** Get list vouchers for captiveportal voucher */
  listVouchers(): Promise<ApiResponse<any>>;
}

// Main module interface
export interface CaptiveportalModule {
  access: CaptiveportalAccessController;
  service: CaptiveportalServiceController;
  session: CaptiveportalSessionController;
  settings: CaptiveportalSettingsController;
  voucher: CaptiveportalVoucherController;
}

// Record interfaces
export interface CaptiveportalRecord extends BaseRecord {
 
  [key: string]: any;
}