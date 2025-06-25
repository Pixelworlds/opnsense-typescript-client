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
export interface AcmeclientAccountsController {
  /** Execute add for acmeclient accounts */
  add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del for acmeclient accounts */
  del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for acmeclient accounts */
  get(uuid: string): Promise<ApiResponse<any>>;
  /** Execute register for acmeclient accounts */
  register(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set for acmeclient accounts */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle for acmeclient accounts */
  toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute update for acmeclient accounts */
  update(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface AcmeclientActionsController {
  /** Execute add for acmeclient actions */
  add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del for acmeclient actions */
  del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for acmeclient actions */
  get(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for acmeclient actions */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get sftp get identity for acmeclient actions */
  sftpGetIdentity(): Promise<ApiResponse<any>>;
  /** Get sftp test connection for acmeclient actions */
  sftpTestConnection(): Promise<ApiResponse<any>>;
  /** Get ssh get identity for acmeclient actions */
  sshGetIdentity(): Promise<ApiResponse<any>>;
  /** Get ssh test connection for acmeclient actions */
  sshTestConnection(): Promise<ApiResponse<any>>;
  /** Execute toggle for acmeclient actions */
  toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute update for acmeclient actions */
  update(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface AcmeclientCertificatesController {
  /** Execute add for acmeclient certificates */
  add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get automation for acmeclient certificates */
  automation(uuid: string): Promise<ApiResponse<any>>;
  /** Execute del for acmeclient certificates */
  del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for acmeclient certificates */
  get(uuid: string): Promise<ApiResponse<any>>;
  /** Get import for acmeclient certificates */
  import(uuid: string): Promise<ApiResponse<any>>;
  /** Get removekey for acmeclient certificates */
  removekey(uuid: string): Promise<ApiResponse<any>>;
  /** Execute revoke for acmeclient certificates */
  revoke(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set for acmeclient certificates */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute sign for acmeclient certificates */
  sign(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle for acmeclient certificates */
  toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute update for acmeclient certificates */
  update(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface AcmeclientServiceController {
  /** Get configtest for acmeclient service */
  configtest(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for acmeclient service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Get reset for acmeclient service */
  reset(): Promise<ApiResponse<any>>;
  /** Execute restart for acmeclient service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Get signallcerts for acmeclient service */
  signallcerts(): Promise<ApiResponse<any>>;
  /** Execute start for acmeclient service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for acmeclient service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for acmeclient service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface AcmeclientSettingsController {
  /** Execute fetch cron integration for acmeclient settings */
  fetchCronIntegration(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute fetch h a proxy integration for acmeclient settings */
  fetchHAProxyIntegration(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for acmeclient settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get bind plugin status for acmeclient settings */
  getBindPluginStatus(): Promise<ApiResponse<any>>;
  /** Get get gcloud plugin status for acmeclient settings */
  getGcloudPluginStatus(): Promise<ApiResponse<any>>;
  /** Execute set for acmeclient settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface AcmeclientValidationsController {
  /** Execute add for acmeclient validations */
  add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del for acmeclient validations */
  del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for acmeclient validations */
  get(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for acmeclient validations */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle for acmeclient validations */
  toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute update for acmeclient validations */
  update(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface AcmeclientModule {
  accounts: AcmeclientAccountsController;
  actions: AcmeclientActionsController;
  certificates: AcmeclientCertificatesController;
  service: AcmeclientServiceController;
  settings: AcmeclientSettingsController;
  validations: AcmeclientValidationsController;
}

// Record interfaces
export interface AcmeclientRecord extends BaseRecord {
 
  [key: string]: any;
}