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
export interface CaddyDiagnosticsController {
  /** Get caddyfile for caddy diagnostics */
  caddyfile(): Promise<ApiResponse<any>>;
  /** Get config for caddy diagnostics */
  config(): Promise<ApiResponse<any>>;
  /** Get get for caddy diagnostics */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for caddy diagnostics */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface CaddyGeneralController {
  /** Get get for caddy general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for caddy general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface CaddyReverse_proxyController {
  /** Execute add access list for caddy reverse_proxy */
  addAccessList(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add basic auth for caddy reverse_proxy */
  addBasicAuth(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add handle for caddy reverse_proxy */
  addHandle(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add header for caddy reverse_proxy */
  addHeader(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add layer4 for caddy reverse_proxy */
  addLayer4(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add layer4 openvpn for caddy reverse_proxy */
  addLayer4Openvpn(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add reverse proxy for caddy reverse_proxy */
  addReverseProxy(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add subdomain for caddy reverse_proxy */
  addSubdomain(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del access list for caddy reverse_proxy */
  delAccessList(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del basic auth for caddy reverse_proxy */
  delBasicAuth(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del handle for caddy reverse_proxy */
  delHandle(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del header for caddy reverse_proxy */
  delHeader(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del layer4 for caddy reverse_proxy */
  delLayer4(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del layer4 openvpn for caddy reverse_proxy */
  delLayer4Openvpn(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del reverse proxy for caddy reverse_proxy */
  delReverseProxy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del subdomain for caddy reverse_proxy */
  delSubdomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for caddy reverse_proxy */
  get(): Promise<ApiResponse<any>>;
  /** Get get access list for caddy reverse_proxy */
  getAccessList(uuid: string): Promise<ApiResponse<any>>;
  /** Get get all reverse domains for caddy reverse_proxy */
  getAllReverseDomains(): Promise<ApiResponse<any>>;
  /** Get get basic auth for caddy reverse_proxy */
  getBasicAuth(uuid: string): Promise<ApiResponse<any>>;
  /** Get get handle for caddy reverse_proxy */
  getHandle(uuid: string): Promise<ApiResponse<any>>;
  /** Get get header for caddy reverse_proxy */
  getHeader(uuid: string): Promise<ApiResponse<any>>;
  /** Get get layer4 for caddy reverse_proxy */
  getLayer4(uuid: string): Promise<ApiResponse<any>>;
  /** Get get layer4 openvpn for caddy reverse_proxy */
  getLayer4Openvpn(uuid: string): Promise<ApiResponse<any>>;
  /** Get get reverse proxy for caddy reverse_proxy */
  getReverseProxy(uuid: string): Promise<ApiResponse<any>>;
  /** Get get subdomain for caddy reverse_proxy */
  getSubdomain(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for caddy reverse_proxy */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set access list for caddy reverse_proxy */
  setAccessList(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set basic auth for caddy reverse_proxy */
  setBasicAuth(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set handle for caddy reverse_proxy */
  setHandle(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set header for caddy reverse_proxy */
  setHeader(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set layer4 for caddy reverse_proxy */
  setLayer4(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set layer4 openvpn for caddy reverse_proxy */
  setLayer4Openvpn(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set reverse proxy for caddy reverse_proxy */
  setReverseProxy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set subdomain for caddy reverse_proxy */
  setSubdomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle handle for caddy reverse_proxy */
  toggleHandle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle layer4 for caddy reverse_proxy */
  toggleLayer4(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle layer4 openvpn for caddy reverse_proxy */
  toggleLayer4Openvpn(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle reverse proxy for caddy reverse_proxy */
  toggleReverseProxy(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle subdomain for caddy reverse_proxy */
  toggleSubdomain(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface CaddyServiceController {
  /** Execute reconfigure for caddy service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for caddy service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for caddy service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for caddy service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for caddy service */
  stop(): Promise<ApiResponse<ServiceControl>>;
  /** Get validate for caddy service */
  validate(): Promise<ApiResponse<any>>;
}

// Main module interface
export interface CaddyModule {
  diagnostics: CaddyDiagnosticsController;
  general: CaddyGeneralController;
  reverse_proxy: CaddyReverse_proxyController;
  service: CaddyServiceController;
}

// Record interfaces
export interface CaddyRecord extends BaseRecord {
 
  [key: string]: any;
}