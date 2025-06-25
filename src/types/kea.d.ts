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
export interface KeaCtrl_agentController {
  /** Get get for kea ctrl_agent */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for kea ctrl_agent */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface KeaDhcpv4Controller {
  /** Execute add peer for kea dhcpv4 */
  addPeer(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add reservation for kea dhcpv4 */
  addReservation(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add subnet for kea dhcpv4 */
  addSubnet(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del peer for kea dhcpv4 */
  delPeer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del reservation for kea dhcpv4 */
  delReservation(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del subnet for kea dhcpv4 */
  delSubnet(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get download reservations for kea dhcpv4 */
  downloadReservations(): Promise<ApiResponse<any>>;
  /** Get get for kea dhcpv4 */
  get(): Promise<ApiResponse<any>>;
  /** Get get peer for kea dhcpv4 */
  getPeer(uuid: string): Promise<ApiResponse<any>>;
  /** Get get reservation for kea dhcpv4 */
  getReservation(uuid: string): Promise<ApiResponse<any>>;
  /** Get get subnet for kea dhcpv4 */
  getSubnet(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for kea dhcpv4 */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set peer for kea dhcpv4 */
  setPeer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set reservation for kea dhcpv4 */
  setReservation(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set subnet for kea dhcpv4 */
  setSubnet(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute upload reservations for kea dhcpv4 */
  uploadReservations(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface KeaLeases4Controller {
  /** Get search for kea leases4 */
  search(): Promise<ApiResponse<SearchResult>>;
}
export interface KeaServiceController {
  /** Execute reconfigure for kea service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for kea service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for kea service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for kea service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for kea service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface KeaModule {
  ctrl_agent: KeaCtrl_agentController;
  dhcpv4: KeaDhcpv4Controller;
  leases4: KeaLeases4Controller;
  service: KeaServiceController;
}

// Record interfaces
export interface KeaRecord extends BaseRecord {
 
  [key: string]: any;
}