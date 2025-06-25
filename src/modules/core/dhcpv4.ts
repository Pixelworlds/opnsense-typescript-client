import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class Dhcpv4Leases extends BaseModule {
  /**
   * Execute del lease for dhcpv4 leases
   */
  async delLease(ip: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcpv4/dhcpv4/leases/del_lease/${ip}`, data);
  }

  /**
   * Get search lease for dhcpv4 leases
   */
  async searchLease(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/dhcpv4/dhcpv4/leases/search_lease`);
  }
}

export class Dhcpv4Service extends BaseModule {
  /**
   * Execute reconfigure for dhcpv4 service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dhcpv4/dhcpv4/service/reconfigure`, data);
  }

  /**
   * Execute restart for dhcpv4 service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dhcpv4/dhcpv4/service/restart`, data);
  }

  /**
   * Execute start for dhcpv4 service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dhcpv4/dhcpv4/service/start`, data);
  }

  /**
   * Get status for dhcpv4 service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/dhcpv4/dhcpv4/service/status`);
  }

  /**
   * Execute stop for dhcpv4 service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dhcpv4/dhcpv4/service/stop`, data);
  }
}

// Main module class
export class Dhcpv4Module extends BaseModule {
  public readonly leases: Dhcpv4Leases;
  public readonly service: Dhcpv4Service;

  constructor(http: any) {
    super(http);
    this.leases = new Dhcpv4Leases(http);
    this.service = new Dhcpv4Service(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/dhcpv4/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/dhcpv4/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/dhcpv4/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/dhcpv4/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/dhcpv4/service/reconfigure');
  }
}