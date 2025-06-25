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
export interface WireguardClientController {
  /** Get add client for wireguard client */
  addClient(): Promise<ApiResponse<any>>;
  /** Execute add client builder for wireguard client */
  addClientBuilder(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del client for wireguard client */
  delClient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for wireguard client */
  get(): Promise<ApiResponse<any>>;
  /** Get get client for wireguard client */
  getClient(uuid: string): Promise<ApiResponse<any>>;
  /** Get get client builder for wireguard client */
  getClientBuilder(): Promise<ApiResponse<any>>;
  /** Get get server info for wireguard client */
  getServerInfo(uuid: string): Promise<ApiResponse<any>>;
  /** Get list servers for wireguard client */
  listServers(): Promise<ApiResponse<any>>;
  /** Get psk for wireguard client */
  psk(): Promise<ApiResponse<any>>;
  /** Execute set for wireguard client */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set client for wireguard client */
  setClient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle client for wireguard client */
  toggleClient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface WireguardGeneralController {
  /** Get get for wireguard general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for wireguard general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface WireguardServerController {
  /** Execute add server for wireguard server */
  addServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del server for wireguard server */
  delServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for wireguard server */
  get(): Promise<ApiResponse<any>>;
  /** Get get server for wireguard server */
  getServer(uuid: string): Promise<ApiResponse<any>>;
  /** Get key pair for wireguard server */
  keyPair(): Promise<ApiResponse<any>>;
  /** Execute set for wireguard server */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set server for wireguard server */
  setServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle server for wireguard server */
  toggleServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface WireguardServiceController {
  /** Execute reconfigure for wireguard service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for wireguard service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Get show for wireguard service */
  show(): Promise<ApiResponse<any>>;
  /** Execute start for wireguard service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for wireguard service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for wireguard service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface WireguardModule {
  client: WireguardClientController;
  general: WireguardGeneralController;
  server: WireguardServerController;
  service: WireguardServiceController;
}

// Record interfaces
export interface WireguardRecord extends BaseRecord {
 
  [key: string]: any;
}