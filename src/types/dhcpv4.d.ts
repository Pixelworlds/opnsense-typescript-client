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
export interface Dhcpv4LeasesController {
  /** Execute del lease for dhcpv4 leases */
  delLease(): Promise<ApiResponse<ApiResult>>;
  /** Get search lease for dhcpv4 leases */
  searchLease(): Promise<ApiResponse<SearchResult>>;
}
export interface Dhcpv4ServiceController {
  /** Execute reconfigure for dhcpv4 service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for dhcpv4 service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for dhcpv4 service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for dhcpv4 service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for dhcpv4 service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface Dhcpv4Module {
  leases: Dhcpv4LeasesController;
  service: Dhcpv4ServiceController;
}

// Record interfaces