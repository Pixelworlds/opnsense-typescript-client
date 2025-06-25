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
export interface HaproxyExportController {
  /** Get config for haproxy export */
  config(): Promise<ApiResponse<any>>;
  /** Get diff for haproxy export */
  diff(): Promise<ApiResponse<any>>;
  /** Get download for haproxy export */
  download(): Promise<ApiResponse<any>>;
}
export interface HaproxyMaintenanceController {
  /** Get cert actions for haproxy maintenance */
  certActions(): Promise<ApiResponse<any>>;
  /** Get cert diff for haproxy maintenance */
  certDiff(): Promise<ApiResponse<any>>;
  /** Get cert sync for haproxy maintenance */
  certSync(): Promise<ApiResponse<any>>;
  /** Get cert sync bulk for haproxy maintenance */
  certSyncBulk(): Promise<ApiResponse<any>>;
  /** Execute fetch cron integration for haproxy maintenance */
  fetchCronIntegration(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for haproxy maintenance */
  get(): Promise<ApiResponse<any>>;
  /** Get search certificate diff for haproxy maintenance */
  searchCertificateDiff(): Promise<ApiResponse<SearchResult>>;
  /** Get search server for haproxy maintenance */
  searchServer(): Promise<ApiResponse<SearchResult>>;
  /** Get server state for haproxy maintenance */
  serverState(): Promise<ApiResponse<any>>;
  /** Get server state bulk for haproxy maintenance */
  serverStateBulk(): Promise<ApiResponse<any>>;
  /** Get server weight for haproxy maintenance */
  serverWeight(): Promise<ApiResponse<any>>;
  /** Get server weight bulk for haproxy maintenance */
  serverWeightBulk(): Promise<ApiResponse<any>>;
  /** Execute set for haproxy maintenance */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface HaproxyServiceController {
  /** Get configtest for haproxy service */
  configtest(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for haproxy service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for haproxy service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for haproxy service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for haproxy service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for haproxy service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface HaproxySettingsController {
  /** Execute add acl for haproxy settings */
  addAcl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add action for haproxy settings */
  addAction(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add backend for haproxy settings */
  addBackend(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add cpu for haproxy settings */
  addCpu(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add errorfile for haproxy settings */
  addErrorfile(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add fcgi for haproxy settings */
  addFcgi(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add frontend for haproxy settings */
  addFrontend(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add group for haproxy settings */
  addGroup(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add healthcheck for haproxy settings */
  addHealthcheck(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add lua for haproxy settings */
  addLua(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add mapfile for haproxy settings */
  addMapfile(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add server for haproxy settings */
  addServer(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add user for haproxy settings */
  addUser(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addmailer for haproxy settings */
  addmailer(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addresolver for haproxy settings */
  addresolver(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del acl for haproxy settings */
  delAcl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del action for haproxy settings */
  delAction(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del backend for haproxy settings */
  delBackend(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del cpu for haproxy settings */
  delCpu(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del errorfile for haproxy settings */
  delErrorfile(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del fcgi for haproxy settings */
  delFcgi(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del frontend for haproxy settings */
  delFrontend(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del group for haproxy settings */
  delGroup(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del healthcheck for haproxy settings */
  delHealthcheck(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del lua for haproxy settings */
  delLua(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del mapfile for haproxy settings */
  delMapfile(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del server for haproxy settings */
  delServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del user for haproxy settings */
  delUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delmailer for haproxy settings */
  delmailer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delresolver for haproxy settings */
  delresolver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for haproxy settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get acl for haproxy settings */
  getAcl(uuid: string): Promise<ApiResponse<any>>;
  /** Get get action for haproxy settings */
  getAction(uuid: string): Promise<ApiResponse<any>>;
  /** Get get backend for haproxy settings */
  getBackend(uuid: string): Promise<ApiResponse<any>>;
  /** Get get cpu for haproxy settings */
  getCpu(uuid: string): Promise<ApiResponse<any>>;
  /** Get get errorfile for haproxy settings */
  getErrorfile(uuid: string): Promise<ApiResponse<any>>;
  /** Get get fcgi for haproxy settings */
  getFcgi(uuid: string): Promise<ApiResponse<any>>;
  /** Get get frontend for haproxy settings */
  getFrontend(uuid: string): Promise<ApiResponse<any>>;
  /** Get get group for haproxy settings */
  getGroup(uuid: string): Promise<ApiResponse<any>>;
  /** Get get healthcheck for haproxy settings */
  getHealthcheck(uuid: string): Promise<ApiResponse<any>>;
  /** Get get lua for haproxy settings */
  getLua(uuid: string): Promise<ApiResponse<any>>;
  /** Get get mapfile for haproxy settings */
  getMapfile(uuid: string): Promise<ApiResponse<any>>;
  /** Get get server for haproxy settings */
  getServer(uuid: string): Promise<ApiResponse<any>>;
  /** Get get user for haproxy settings */
  getUser(uuid: string): Promise<ApiResponse<any>>;
  /** Get getmailer for haproxy settings */
  getmailer(uuid: string): Promise<ApiResponse<any>>;
  /** Get getresolver for haproxy settings */
  getresolver(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for haproxy settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set acl for haproxy settings */
  setAcl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set action for haproxy settings */
  setAction(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set backend for haproxy settings */
  setBackend(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set cpu for haproxy settings */
  setCpu(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set errorfile for haproxy settings */
  setErrorfile(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set fcgi for haproxy settings */
  setFcgi(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set frontend for haproxy settings */
  setFrontend(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set group for haproxy settings */
  setGroup(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set healthcheck for haproxy settings */
  setHealthcheck(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set lua for haproxy settings */
  setLua(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set mapfile for haproxy settings */
  setMapfile(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set server for haproxy settings */
  setServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set user for haproxy settings */
  setUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setmailer for haproxy settings */
  setmailer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setresolver for haproxy settings */
  setresolver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle backend for haproxy settings */
  toggleBackend(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle cpu for haproxy settings */
  toggleCpu(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle frontend for haproxy settings */
  toggleFrontend(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle group for haproxy settings */
  toggleGroup(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle lua for haproxy settings */
  toggleLua(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle server for haproxy settings */
  toggleServer(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle user for haproxy settings */
  toggleUser(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute togglemailer for haproxy settings */
  togglemailer(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggleresolver for haproxy settings */
  toggleresolver(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface HaproxyStatisticsController {
  /** Get counters for haproxy statistics */
  counters(): Promise<ApiResponse<any>>;
  /** Get info for haproxy statistics */
  info(): Promise<ApiResponse<any>>;
  /** Get tables for haproxy statistics */
  tables(): Promise<ApiResponse<any>>;
}

// Main module interface
export interface HaproxyModule {
  export: HaproxyExportController;
  maintenance: HaproxyMaintenanceController;
  service: HaproxyServiceController;
  settings: HaproxySettingsController;
  statistics: HaproxyStatisticsController;
}

// Record interfaces
export interface HaproxyRecord extends BaseRecord {
 
  [key: string]: any;
}