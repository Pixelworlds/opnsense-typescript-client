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
export interface Dhcpv6LeasesController {
  /** Execute del lease for dhcpv6 leases */
  delLease(): Promise<ApiResponse<ApiResult>>;
  /** Get search lease for dhcpv6 leases */
  searchLease(): Promise<ApiResponse<SearchResult>>;
  /** Get search prefix for dhcpv6 leases */
  searchPrefix(): Promise<ApiResponse<SearchResult>>;
}
export interface Dhcpv6ServiceController {
  /** Execute reconfigure for dhcpv6 service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for dhcpv6 service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for dhcpv6 service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for dhcpv6 service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for dhcpv6 service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface Dhcpv6Module {
  leases: Dhcpv6LeasesController;
  service: Dhcpv6ServiceController;
}

// Record interfaces