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
export interface CrowdsecAlertsController {
  /** Get get for crowdsec alerts */
  get(): Promise<ApiResponse<any>>;
}
export interface CrowdsecBouncersController {
  /** Get get for crowdsec bouncers */
  get(): Promise<ApiResponse<any>>;
}
export interface CrowdsecDecisionsController {
  /** Get delete for crowdsec decisions */
  delete(): Promise<ApiResponse<any>>;
  /** Get get for crowdsec decisions */
  get(): Promise<ApiResponse<any>>;
}
export interface CrowdsecGeneralController {
  /** Get get for crowdsec general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for crowdsec general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface CrowdsecHubController {
  /** Get get for crowdsec hub */
  get(): Promise<ApiResponse<any>>;
}
export interface CrowdsecMachinesController {
  /** Get get for crowdsec machines */
  get(): Promise<ApiResponse<any>>;
}
export interface CrowdsecServiceController {
  /** Get debug for crowdsec service */
  debug(): Promise<ApiResponse<any>>;
  /** Execute reload for crowdsec service */
  reload(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get status for crowdsec service */
  status(): Promise<ApiResponse<ServiceStatus>>;
}
export interface CrowdsecVersionController {
  /** Get get for crowdsec version */
  get(): Promise<ApiResponse<any>>;
}

// Main module interface
export interface CrowdsecModule {
  alerts: CrowdsecAlertsController;
  bouncers: CrowdsecBouncersController;
  decisions: CrowdsecDecisionsController;
  general: CrowdsecGeneralController;
  hub: CrowdsecHubController;
  machines: CrowdsecMachinesController;
  service: CrowdsecServiceController;
  version: CrowdsecVersionController;
}

// Record interfaces
export interface CrowdsecRecord extends BaseRecord {
 
  [key: string]: any;
}