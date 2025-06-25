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
export interface TorExitaclController {
  /** Execute addacl for tor exitacl */
  addacl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delacl for tor exitacl */
  delacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for tor exitacl */
  get(): Promise<ApiResponse<any>>;
  /** Get getacl for tor exitacl */
  getacl(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for tor exitacl */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setacl for tor exitacl */
  setacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggleacl for tor exitacl */
  toggleacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface TorGeneralController {
  /** Execute addhidservauth for tor general */
  addhidservauth(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delhidservauth for tor general */
  delhidservauth(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for tor general */
  get(): Promise<ApiResponse<any>>;
  /** Get gethidservauth for tor general */
  gethidservauth(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for tor general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute sethidservauth for tor general */
  sethidservauth(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute togglehidservauth for tor general */
  togglehidservauth(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface TorHiddenserviceController {
  /** Execute addservice for tor hiddenservice */
  addservice(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delservice for tor hiddenservice */
  delservice(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for tor hiddenservice */
  get(): Promise<ApiResponse<any>>;
  /** Get getservice for tor hiddenservice */
  getservice(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for tor hiddenservice */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setservice for tor hiddenservice */
  setservice(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggleservice for tor hiddenservice */
  toggleservice(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface TorHiddenserviceaclController {
  /** Execute addacl for tor hiddenserviceacl */
  addacl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delacl for tor hiddenserviceacl */
  delacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for tor hiddenserviceacl */
  get(): Promise<ApiResponse<any>>;
  /** Get getacl for tor hiddenserviceacl */
  getacl(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for tor hiddenserviceacl */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setacl for tor hiddenserviceacl */
  setacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggleacl for tor hiddenserviceacl */
  toggleacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface TorRelayController {
  /** Get get for tor relay */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for tor relay */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface TorServiceController {
  /** Get circuits for tor service */
  circuits(): Promise<ApiResponse<any>>;
  /** Get get hidden services for tor service */
  getHiddenServices(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for tor service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for tor service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for tor service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for tor service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for tor service */
  stop(): Promise<ApiResponse<ServiceControl>>;
  /** Get streams for tor service */
  streams(): Promise<ApiResponse<any>>;
}
export interface TorSocksaclController {
  /** Execute addacl for tor socksacl */
  addacl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delacl for tor socksacl */
  delacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for tor socksacl */
  get(): Promise<ApiResponse<any>>;
  /** Get getacl for tor socksacl */
  getacl(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for tor socksacl */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setacl for tor socksacl */
  setacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggleacl for tor socksacl */
  toggleacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface TorModule {
  exitacl: TorExitaclController;
  general: TorGeneralController;
  hiddenservice: TorHiddenserviceController;
  hiddenserviceacl: TorHiddenserviceaclController;
  relay: TorRelayController;
  service: TorServiceController;
  socksacl: TorSocksaclController;
}

// Record interfaces
export interface TorRecord extends BaseRecord {
 
  [key: string]: any;
}