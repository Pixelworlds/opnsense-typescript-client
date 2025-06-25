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
export interface FirewallAliasController {
  /** Execute add item for firewall alias */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for firewall alias */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for firewall alias */
  get(): Promise<ApiResponse<any>>;
  /** Get get alias u u i d for firewall alias */
  getAliasUUID(): Promise<ApiResponse<any>>;
  /** Get get geo i p for firewall alias */
  getGeoIP(): Promise<ApiResponse<any>>;
  /** Get get item for firewall alias */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Get get table size for firewall alias */
  getTableSize(): Promise<ApiResponse<any>>;
  /** Execute import for firewall alias */
  import(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get list categories for firewall alias */
  listCategories(): Promise<ApiResponse<any>>;
  /** Get list countries for firewall alias */
  listCountries(): Promise<ApiResponse<any>>;
  /** Get list network aliases for firewall alias */
  listNetworkAliases(): Promise<ApiResponse<any>>;
  /** Get list user groups for firewall alias */
  listUserGroups(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for firewall alias */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute set for firewall alias */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for firewall alias */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle item for firewall alias */
  toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface FirewallAlias_utilController {
  /** Execute add for firewall alias_util */
  add(): Promise<ApiResponse<ApiResult>>;
  /** Get aliases for firewall alias_util */
  aliases(): Promise<ApiResponse<any>>;
  /** Execute delete for firewall alias_util */
  delete(): Promise<ApiResponse<ApiResult>>;
  /** Execute find references for firewall alias_util */
  findReferences(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute flush for firewall alias_util */
  flush(): Promise<ApiResponse<ApiResult>>;
  /** Get list for firewall alias_util */
  list(): Promise<ApiResponse<any>>;
  /** Get update bogons for firewall alias_util */
  updateBogons(): Promise<ApiResponse<any>>;
}
export interface FirewallCategoryController {
  /** Execute add item for firewall category */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for firewall category */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for firewall category */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for firewall category */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for firewall category */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for firewall category */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface FirewallFilter_baseController {
  /** Execute apply for firewall filter_base */
  apply(): Promise<ApiResponse<ApiResult>>;
  /** Execute cancel rollback for firewall filter_base */
  cancelRollback(): Promise<ApiResponse<ApiResult>>;
  /** Get get for firewall filter_base */
  get(): Promise<ApiResponse<any>>;
  /** Get list categories for firewall filter_base */
  listCategories(): Promise<ApiResponse<any>>;
  /** Get list network select options for firewall filter_base */
  listNetworkSelectOptions(): Promise<ApiResponse<any>>;
  /** Execute revert for firewall filter_base */
  revert(): Promise<ApiResponse<ApiResult>>;
  /** Execute savepoint for firewall filter_base */
  savepoint(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set for firewall filter_base */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface FirewallFilterController {
  /** Execute add rule for firewall filter */
  addRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del rule for firewall filter */
  delRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get interface list for firewall filter */
  getInterfaceList(): Promise<ApiResponse<any>>;
  /** Get get rule for firewall filter */
  getRule(uuid: string): Promise<ApiResponse<any>>;
  /** Execute move rule before for firewall filter */
  moveRuleBefore(): Promise<ApiResponse<ApiResult>>;
  /** Execute set rule for firewall filter */
  setRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle rule for firewall filter */
  toggleRule(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface FirewallFilter_utilController {
  /** Get rule stats for firewall filter_util */
  ruleStats(): Promise<ApiResponse<any>>;
}
export interface FirewallGroupController {
  /** Execute add item for firewall group */
  addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del item for firewall group */
  delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for firewall group */
  get(): Promise<ApiResponse<any>>;
  /** Get get item for firewall group */
  getItem(uuid: string): Promise<ApiResponse<any>>;
  /** Execute reconfigure for firewall group */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute set for firewall group */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set item for firewall group */
  setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface FirewallNptController {
  /** Execute add rule for firewall npt */
  addRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del rule for firewall npt */
  delRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get rule for firewall npt */
  getRule(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set rule for firewall npt */
  setRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle rule for firewall npt */
  toggleRule(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface FirewallOne_to_oneController {
  /** Execute add rule for firewall one_to_one */
  addRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del rule for firewall one_to_one */
  delRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get rule for firewall one_to_one */
  getRule(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set rule for firewall one_to_one */
  setRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle rule for firewall one_to_one */
  toggleRule(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface FirewallSource_natController {
  /** Execute add rule for firewall source_nat */
  addRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del rule for firewall source_nat */
  delRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get rule for firewall source_nat */
  getRule(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set rule for firewall source_nat */
  setRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle rule for firewall source_nat */
  toggleRule(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface FirewallModule {
  alias: FirewallAliasController;
  alias_util: FirewallAlias_utilController;
  category: FirewallCategoryController;
  filter_base: FirewallFilter_baseController;
  filter: FirewallFilterController;
  filter_util: FirewallFilter_utilController;
  group: FirewallGroupController;
  npt: FirewallNptController;
  one_to_one: FirewallOne_to_oneController;
  source_nat: FirewallSource_natController;
}

// Record interfaces
export interface FirewallRecord extends BaseRecord {
 
  [key: string]: any;
}