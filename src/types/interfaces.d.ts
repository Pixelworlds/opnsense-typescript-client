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
export interface InterfacesGif_settingsController {
  /** Execute add item for interfaces gif_settings */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for interfaces gif_settings */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for interfaces gif_settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get if options for interfaces gif_settings */
  getIfOptions(): Promise<ApiResponse<any>>;
  /** Get get item for interfaces gif_settings */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute reconfigure for interfaces gif_settings */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute set for interfaces gif_settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for interfaces gif_settings */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface InterfacesGre_settingsController {
  /** Execute add item for interfaces gre_settings */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for interfaces gre_settings */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for interfaces gre_settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get if options for interfaces gre_settings */
  getIfOptions(): Promise<ApiResponse<any>>;
  /** Get get item for interfaces gre_settings */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute reconfigure for interfaces gre_settings */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute set for interfaces gre_settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for interfaces gre_settings */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface InterfacesLagg_settingsController {
  /** Execute add item for interfaces lagg_settings */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for interfaces lagg_settings */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for interfaces lagg_settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for interfaces lagg_settings */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute reconfigure for interfaces lagg_settings */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute set for interfaces lagg_settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for interfaces lagg_settings */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface InterfacesLoopback_settingsController {
  /** Execute add item for interfaces loopback_settings */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for interfaces loopback_settings */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for interfaces loopback_settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for interfaces loopback_settings */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute reconfigure for interfaces loopback_settings */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute set for interfaces loopback_settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for interfaces loopback_settings */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface InterfacesNeighbor_settingsController {
  /** Execute add item for interfaces neighbor_settings */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for interfaces neighbor_settings */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for interfaces neighbor_settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for interfaces neighbor_settings */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute reconfigure for interfaces neighbor_settings */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute set for interfaces neighbor_settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for interfaces neighbor_settings */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface InterfacesOverviewController {
  /** Get export for interfaces overview */
  export(): Promise<ApiResponse<any>>;
  /** Get get interface for interfaces overview */
  getInterface(): Promise<ApiResponse<any>>;
  /** Get interfaces info for interfaces overview */
  interfacesInfo(): Promise<ApiResponse<any>>;
  /** Get reload interface for interfaces overview */
  reloadInterface(): Promise<ApiResponse<any>>;
}
export interface InterfacesVip_settingsController {
  /** Execute add item for interfaces vip_settings */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for interfaces vip_settings */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for interfaces vip_settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for interfaces vip_settings */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Get get unused vhid for interfaces vip_settings */
  getUnusedVhid(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for interfaces vip_settings */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute set for interfaces vip_settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for interfaces vip_settings */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface InterfacesVlan_settingsController {
  /** Execute add item for interfaces vlan_settings */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for interfaces vlan_settings */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for interfaces vlan_settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for interfaces vlan_settings */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute reconfigure for interfaces vlan_settings */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute set for interfaces vlan_settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for interfaces vlan_settings */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface InterfacesVxlan_settingsController {
  /** Execute add item for interfaces vxlan_settings */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for interfaces vxlan_settings */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for interfaces vxlan_settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for interfaces vxlan_settings */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute reconfigure for interfaces vxlan_settings */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute set for interfaces vxlan_settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for interfaces vxlan_settings */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface InterfacesModule {
  gif_settings: InterfacesGif_settingsController;
  gre_settings: InterfacesGre_settingsController;
  lagg_settings: InterfacesLagg_settingsController;
  loopback_settings: InterfacesLoopback_settingsController;
  neighbor_settings: InterfacesNeighbor_settingsController;
  overview: InterfacesOverviewController;
  vip_settings: InterfacesVip_settingsController;
  vlan_settings: InterfacesVlan_settingsController;
  vxlan_settings: InterfacesVxlan_settingsController;
}

// Record interfaces
export interface InterfacesRecord extends BaseRecord {
 
  [key: string]: any;
}