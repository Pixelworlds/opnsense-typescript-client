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
export interface TrustCaController {
  /** Get ca info for trust ca */
  caInfo(): Promise<ApiResponse<any>>;
  /** Get ca list for trust ca */
  caList(): Promise<ApiResponse<any>>;
  /** Execute del for trust ca */
  del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute generate file for trust ca */
  generateFile(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for trust ca */
  get(): Promise<ApiResponse<any>>;
  /** Get raw dump for trust ca */
  rawDump(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for trust ca */
  set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface TrustCertController {
  /** Execute add for trust cert */
  add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get ca info for trust cert */
  caInfo(): Promise<ApiResponse<any>>;
  /** Get ca list for trust cert */
  caList(): Promise<ApiResponse<any>>;
  /** Execute del for trust cert */
  del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute generate file for trust cert */
  generateFile(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for trust cert */
  get(uuid: string): Promise<ApiResponse<any>>;
  /** Get raw dump for trust cert */
  rawDump(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for trust cert */
  set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get user list for trust cert */
  userList(): Promise<ApiResponse<any>>;
}
export interface TrustCrlController {
  /** Execute del for trust crl */
  del(): Promise<ApiResponse<ApiResult>>;
  /** Get get for trust crl */
  get(): Promise<ApiResponse<any>>;
  /** Get get ocsp info data for trust crl */
  getOcspInfoData(): Promise<ApiResponse<any>>;
  /** Get raw dump for trust crl */
  rawDump(): Promise<ApiResponse<any>>;
  /** Get search for trust crl */
  search(): Promise<ApiResponse<SearchResult>>;
  /** Execute set for trust crl */
  set(): Promise<ApiResponse<ApiResult>>;
}
export interface TrustSettingsController {
  /** Get get for trust settings */
  get(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for trust settings */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute set for trust settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface TrustModule {
  ca: TrustCaController;
  cert: TrustCertController;
  crl: TrustCrlController;
  settings: TrustSettingsController;
}

// Record interfaces
export interface TrustRecord extends BaseRecord {
 
  [key: string]: any;
}