import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class KeaCtrlAgent extends BaseModule {
  /**
   * Get get for kea ctrl_agent
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/kea/kea/ctrl_agent/get`);
  }

  /**
   * Execute set for kea ctrl_agent
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/kea/ctrl_agent/set`, data);
  }
}

export class KeaDhcpv4 extends BaseModule {
  /**
   * Execute add peer for kea dhcpv4
   */
  async addPeer(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/kea/dhcpv4/add_peer`, data);
  }

  /**
   * Execute add reservation for kea dhcpv4
   */
  async addReservation(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/kea/dhcpv4/add_reservation`, data);
  }

  /**
   * Execute add subnet for kea dhcpv4
   */
  async addSubnet(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/kea/dhcpv4/add_subnet`, data);
  }

  /**
   * Execute del peer for kea dhcpv4
   */
  async delPeer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/kea/dhcpv4/del_peer/${uuid}`, data);
  }

  /**
   * Execute del reservation for kea dhcpv4
   */
  async delReservation(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/kea/dhcpv4/del_reservation/${uuid}`, data);
  }

  /**
   * Execute del subnet for kea dhcpv4
   */
  async delSubnet(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/kea/dhcpv4/del_subnet/${uuid}`, data);
  }

  /**
   * Get download reservations for kea dhcpv4
   */
  async downloadReservations(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/kea/kea/dhcpv4/download_reservations`);
  }

  /**
   * Get get for kea dhcpv4
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/kea/kea/dhcpv4/get`);
  }

  /**
   * Get get peer for kea dhcpv4
   */
  async getPeer(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/kea/kea/dhcpv4/get_peer/${uuid}`);
  }

  /**
   * Get get reservation for kea dhcpv4
   */
  async getReservation(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/kea/kea/dhcpv4/get_reservation/${uuid}`);
  }

  /**
   * Get get subnet for kea dhcpv4
   */
  async getSubnet(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/kea/kea/dhcpv4/get_subnet/${uuid}`);
  }

  /**
   * Execute set for kea dhcpv4
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/kea/dhcpv4/set`, data);
  }

  /**
   * Execute set peer for kea dhcpv4
   */
  async setPeer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/kea/dhcpv4/set_peer/${uuid}`, data);
  }

  /**
   * Execute set reservation for kea dhcpv4
   */
  async setReservation(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/kea/dhcpv4/set_reservation/${uuid}`, data);
  }

  /**
   * Execute set subnet for kea dhcpv4
   */
  async setSubnet(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/kea/dhcpv4/set_subnet/${uuid}`, data);
  }

  /**
   * Execute upload reservations for kea dhcpv4
   */
  async uploadReservations(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/kea/dhcpv4/upload_reservations`, data);
  }
}

export class KeaLeases4 extends BaseModule {
  /**
   * Get search for kea leases4
   */
  async search(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/kea/kea/leases4/search`);
  }
}

export class KeaService extends BaseModule {
  /**
   * Execute reconfigure for kea service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/kea/kea/service/reconfigure`, data);
  }

  /**
   * Execute restart for kea service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/kea/kea/service/restart`, data);
  }

  /**
   * Execute start for kea service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/kea/kea/service/start`, data);
  }

  /**
   * Get status for kea service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/kea/kea/service/status`);
  }

  /**
   * Execute stop for kea service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/kea/kea/service/stop`, data);
  }
}

// Main module class
export class KeaModule extends BaseModule {
  public readonly ctrlAgent: KeaCtrlAgent;
  public readonly dhcpv4: KeaDhcpv4;
  public readonly leases4: KeaLeases4;
  public readonly service: KeaService;

  constructor(http: any) {
    super(http);
    this.ctrlAgent = new KeaCtrlAgent(http);
    this.dhcpv4 = new KeaDhcpv4(http);
    this.leases4 = new KeaLeases4(http);
    this.service = new KeaService(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/kea/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/kea/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/kea/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/kea/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/kea/service/reconfigure');
  }
}