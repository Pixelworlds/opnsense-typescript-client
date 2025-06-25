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
export interface IpsecConnectionsController {
  /** Execute add child for ipsec connections */
  addChild(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add connection for ipsec connections */
  addConnection(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add local for ipsec connections */
  addLocal(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add remote for ipsec connections */
  addRemote(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get connection exists for ipsec connections */
  connectionExists(uuid: string): Promise<ApiResponse<any>>;
  /** Execute del child for ipsec connections */
  delChild(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del connection for ipsec connections */
  delConnection(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del local for ipsec connections */
  delLocal(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del remote for ipsec connections */
  delRemote(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for ipsec connections */
  get(): Promise<ApiResponse<any>>;
  /** Get get child for ipsec connections */
  getChild(uuid: string): Promise<ApiResponse<any>>;
  /** Get get connection for ipsec connections */
  getConnection(uuid: string): Promise<ApiResponse<any>>;
  /** Get get local for ipsec connections */
  getLocal(uuid: string): Promise<ApiResponse<any>>;
  /** Get get remote for ipsec connections */
  getRemote(uuid: string): Promise<ApiResponse<any>>;
  /** Get is enabled for ipsec connections */
  isEnabled(): Promise<ApiResponse<any>>;
  /** Execute set for ipsec connections */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set child for ipsec connections */
  setChild(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set connection for ipsec connections */
  setConnection(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set local for ipsec connections */
  setLocal(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set remote for ipsec connections */
  setRemote(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get swanctl for ipsec connections */
  swanctl(): Promise<ApiResponse<any>>;
  /** Execute toggle for ipsec connections */
  toggle(enabled?: boolean): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle child for ipsec connections */
  toggleChild(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle connection for ipsec connections */
  toggleConnection(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle local for ipsec connections */
  toggleLocal(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle remote for ipsec connections */
  toggleRemote(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface IpsecKey_pairsController {
  /** Execute add item for ipsec key_pairs */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for ipsec key_pairs */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get gen key pair for ipsec key_pairs */
  genKeyPair(): Promise<ApiResponse<any>>;
  /** Get get for ipsec key_pairs */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for ipsec key_pairs */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for ipsec key_pairs */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for ipsec key_pairs */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface IpsecLeasesController {
  /** Get pools for ipsec leases */
  pools(): Promise<ApiResponse<any>>;
  /** Get search for ipsec leases */
  search(): Promise<ApiResponse<SearchResult>>;
}
export interface IpsecLegacy_subsystemController {
  /** Execute apply config for ipsec legacy_subsystem */
  applyConfig(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get status for ipsec legacy_subsystem */
  status(): Promise<ApiResponse<ServiceStatus>>;
}
export interface IpsecManual_spdController {
  /** Execute add for ipsec manual_spd */
  add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del for ipsec manual_spd */
  del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for ipsec manual_spd */
  get(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for ipsec manual_spd */
  set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle for ipsec manual_spd */
  toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface IpsecPoolsController {
  /** Execute add for ipsec pools */
  add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del for ipsec pools */
  del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for ipsec pools */
  get(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for ipsec pools */
  set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle for ipsec pools */
  toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface IpsecPre_shared_keysController {
  /** Execute add item for ipsec pre_shared_keys */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for ipsec pre_shared_keys */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for ipsec pre_shared_keys */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for ipsec pre_shared_keys */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for ipsec pre_shared_keys */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for ipsec pre_shared_keys */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface IpsecSadController {
  /** Execute delete for ipsec sad */
  delete(): Promise<ApiResponse<ApiResult>>;
  /** Get search for ipsec sad */
  search(): Promise<ApiResponse<SearchResult>>;
}
export interface IpsecServiceController {
  /** Execute reconfigure for ipsec service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for ipsec service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for ipsec service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for ipsec service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for ipsec service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface IpsecSessionsController {
  /** Execute connect for ipsec sessions */
  connect(): Promise<ApiResponse<ApiResult>>;
  /** Execute disconnect for ipsec sessions */
  disconnect(): Promise<ApiResponse<ApiResult>>;
  /** Get search phase1 for ipsec sessions */
  searchPhase1(): Promise<ApiResponse<SearchResult>>;
  /** Get search phase2 for ipsec sessions */
  searchPhase2(): Promise<ApiResponse<SearchResult>>;
}
export interface IpsecSettingsController {
  /** Get get for ipsec settings */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for ipsec settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface IpsecSpdController {
  /** Execute delete for ipsec spd */
  delete(): Promise<ApiResponse<ApiResult>>;
  /** Get search for ipsec spd */
  search(): Promise<ApiResponse<SearchResult>>;
}
export interface IpsecTunnelController {
  /** Execute del phase1 for ipsec tunnel */
  delPhase1(): Promise<ApiResponse<ApiResult>>;
  /** Execute del phase2 for ipsec tunnel */
  delPhase2(): Promise<ApiResponse<ApiResult>>;
  /** Get search phase1 for ipsec tunnel */
  searchPhase1(): Promise<ApiResponse<SearchResult>>;
  /** Get search phase2 for ipsec tunnel */
  searchPhase2(): Promise<ApiResponse<SearchResult>>;
  /** Execute toggle for ipsec tunnel */
  toggle(enabled?: boolean): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle phase1 for ipsec tunnel */
  togglePhase1(enabled?: boolean): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle phase2 for ipsec tunnel */
  togglePhase2(enabled?: boolean): Promise<ApiResponse<ApiResult>>;
}
export interface IpsecVtiController {
  /** Execute add for ipsec vti */
  add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del for ipsec vti */
  del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for ipsec vti */
  get(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for ipsec vti */
  set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle for ipsec vti */
  toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface IpsecModule {
  connections: IpsecConnectionsController;
  key_pairs: IpsecKey_pairsController;
  leases: IpsecLeasesController;
  legacy_subsystem: IpsecLegacy_subsystemController;
  manual_spd: IpsecManual_spdController;
  pools: IpsecPoolsController;
  pre_shared_keys: IpsecPre_shared_keysController;
  sad: IpsecSadController;
  service: IpsecServiceController;
  sessions: IpsecSessionsController;
  settings: IpsecSettingsController;
  spd: IpsecSpdController;
  tunnel: IpsecTunnelController;
  vti: IpsecVtiController;
}

// Record interfaces
export interface IpsecRecord extends BaseRecord {
 
  [key: string]: any;
}