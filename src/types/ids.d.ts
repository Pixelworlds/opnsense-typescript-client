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
export interface IdsServiceController {
  /** Execute drop alert log for ids service */
  dropAlertLog(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get alert info for ids service */
  getAlertInfo(): Promise<ApiResponse<any>>;
  /** Get get alert logs for ids service */
  getAlertLogs(): Promise<ApiResponse<any>>;
  /** Execute query alerts for ids service */
  queryAlerts(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute reconfigure for ids service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute reload rules for ids service */
  reloadRules(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute restart for ids service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for ids service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for ids service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for ids service */
  stop(): Promise<ApiResponse<ServiceControl>>;
  /** Execute update rules for ids service */
  updateRules(): Promise<ApiResponse<ApiResult>>;
}
export interface IdsSettingsController {
  /** Execute add policy for ids settings */
  addPolicy(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add policy rule for ids settings */
  addPolicyRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add user rule for ids settings */
  addUserRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get check policy rule for ids settings */
  checkPolicyRule(): Promise<ApiResponse<any>>;
  /** Execute del policy for ids settings */
  delPolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del policy rule for ids settings */
  delPolicyRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del user rule for ids settings */
  delUserRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for ids settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get policy for ids settings */
  getPolicy(uuid: string): Promise<ApiResponse<any>>;
  /** Get get policy rule for ids settings */
  getPolicyRule(uuid: string): Promise<ApiResponse<any>>;
  /** Get get rule info for ids settings */
  getRuleInfo(): Promise<ApiResponse<any>>;
  /** Get get ruleset for ids settings */
  getRuleset(): Promise<ApiResponse<any>>;
  /** Get get rulesetproperties for ids settings */
  getRulesetproperties(): Promise<ApiResponse<any>>;
  /** Get get user rule for ids settings */
  getUserRule(uuid: string): Promise<ApiResponse<any>>;
  /** Get list rule metadata for ids settings */
  listRuleMetadata(): Promise<ApiResponse<any>>;
  /** Get list rulesets for ids settings */
  listRulesets(): Promise<ApiResponse<any>>;
  /** Execute search installed rules for ids settings */
  searchInstalledRules(params?: Record<string, any>): Promise<ApiResponse<SearchResult>>;
  /** Execute set for ids settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set policy for ids settings */
  setPolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set policy rule for ids settings */
  setPolicyRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set rule for ids settings */
  setRule(): Promise<ApiResponse<ApiResult>>;
  /** Execute set ruleset for ids settings */
  setRuleset(): Promise<ApiResponse<ApiResult>>;
  /** Execute set rulesetproperties for ids settings */
  setRulesetproperties(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set user rule for ids settings */
  setUserRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle policy for ids settings */
  togglePolicy(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle policy rule for ids settings */
  togglePolicyRule(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle rule for ids settings */
  toggleRule(enabled?: boolean): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle ruleset for ids settings */
  toggleRuleset(enabled?: boolean): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle user rule for ids settings */
  toggleUserRule(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface IdsModule {
  service: IdsServiceController;
  settings: IdsSettingsController;
}

// Record interfaces
export interface IdsRecord extends BaseRecord {
 
  [key: string]: any;
}