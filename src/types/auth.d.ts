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
export interface AuthGroupController {
  /** Execute add for auth group */
  add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del for auth group */
  del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for auth group */
  get(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for auth group */
  set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface AuthPrivController {
  /** Get get for auth priv */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for auth priv */
  getItem(): Promise<ApiResponse<any>>;
  /** Get search for auth priv */
  search(): Promise<ApiResponse<SearchResult>>;
  /** Execute set for auth priv */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for auth priv */
  setItem(): Promise<ApiResponse<ApiResult>>;
}
export interface AuthUserController {
  /** Execute add for auth user */
  add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add api key for auth user */
  addApiKey(): Promise<ApiResponse<ApiResult>>;
  /** Execute del for auth user */
  del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del api key for auth user */
  delApiKey(): Promise<ApiResponse<ApiResult>>;
  /** Get download for auth user */
  download(): Promise<ApiResponse<any>>;
  /** Get get for auth user */
  get(uuid: string): Promise<ApiResponse<any>>;
  /** Get new otp seed for auth user */
  newOtpSeed(): Promise<ApiResponse<any>>;
  /** Get search api key for auth user */
  searchApiKey(): Promise<ApiResponse<SearchResult>>;
  /** Execute set for auth user */
  set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute upload for auth user */
  upload(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface AuthModule {
  group: AuthGroupController;
  priv: AuthPrivController;
  user: AuthUserController;
}

// Record interfaces
export interface AuthRecord extends BaseRecord {
 
  [key: string]: any;
}