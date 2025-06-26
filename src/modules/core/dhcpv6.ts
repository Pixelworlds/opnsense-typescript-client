import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class Dhcpv6Leases extends BaseModule {
  /**
   * Execute del lease for dhcpv6 leases
   */
  async delLease(ip: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcpv6/dhcpv6/leases/del_lease/${ip}`, data);
  }

  /**
   * Get search lease for dhcpv6 leases
   */
  async searchLease(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/dhcpv6/dhcpv6/leases/search_lease`);
  }

  /**
   * Get search prefix for dhcpv6 leases
   */
  async searchPrefix(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/dhcpv6/dhcpv6/leases/search_prefix`);
  }
}

export class Dhcpv6Service extends BaseModule {
  /**
   * Execute reconfigure for dhcpv6 service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dhcpv6/dhcpv6/service/reconfigure`, data);
  }

  /**
   * Execute restart for dhcpv6 service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dhcpv6/dhcpv6/service/restart`, data);
  }

  /**
   * Execute start for dhcpv6 service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dhcpv6/dhcpv6/service/start`, data);
  }

  /**
   * Get status for dhcpv6 service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/dhcpv6/dhcpv6/service/status`);
  }

  /**
   * Execute stop for dhcpv6 service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dhcpv6/dhcpv6/service/stop`, data);
  }
}

// Main module class
export class Dhcpv6Module extends BaseModule {
  public readonly leases: Dhcpv6Leases;
  public readonly service: Dhcpv6Service;

  constructor(http: any) {
    super(http);
    this.leases = new Dhcpv6Leases(http);
    this.service = new Dhcpv6Service(http);
  }

}