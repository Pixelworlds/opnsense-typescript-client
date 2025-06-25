import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class KeaCtrlAgent {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/kea/ctrl_agent/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/ctrl_agent/set', config);
  }
}

export class KeaDhcpv4 {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/kea/dhcpv4/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/dhcpv4/set', config);
  }

  // Subnet management
  async searchSubnets(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/kea/dhcpv4/search_subnet');
    }
    return this.http.post('/api/kea/dhcpv4/search_subnet', params);
  }

  async addSubnet(subnet: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/dhcpv4/add_subnet', subnet);
  }

  async getSubnet(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/kea/dhcpv4/get_subnet/${uuid}` : '/api/kea/dhcpv4/get_subnet';
    return this.http.get(path);
  }

  async setSubnet(uuid: string, subnet: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv4/set_subnet/${uuid}`, subnet);
  }

  async deleteSubnet(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv4/del_subnet/${uuid}`);
  }

  async toggleSubnet(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/kea/dhcpv4/toggle_subnet/${uuid}/${enabled ? '1' : '0'}`
        : `/api/kea/dhcpv4/toggle_subnet/${uuid}`;
    return this.http.post(path);
  }

  // Reservation management
  async searchReservations(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/kea/dhcpv4/search_reservation');
    }
    return this.http.post('/api/kea/dhcpv4/search_reservation', params);
  }

  async addReservation(reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/dhcpv4/add_reservation', reservation);
  }

  async getReservation(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/kea/dhcpv4/get_reservation/${uuid}` : '/api/kea/dhcpv4/get_reservation';
    return this.http.get(path);
  }

  async setReservation(uuid: string, reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv4/set_reservation/${uuid}`, reservation);
  }

  async deleteReservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv4/del_reservation/${uuid}`);
  }

  async toggleReservation(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/kea/dhcpv4/toggle_reservation/${uuid}/${enabled ? '1' : '0'}`
        : `/api/kea/dhcpv4/toggle_reservation/${uuid}`;
    return this.http.post(path);
  }

  // HA Peer management
  async searchPeers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/kea/dhcpv4/search_peer');
    }
    return this.http.post('/api/kea/dhcpv4/search_peer', params);
  }

  async addPeer(peer: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/dhcpv4/add_peer', peer);
  }

  async getPeer(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/kea/dhcpv4/get_peer/${uuid}` : '/api/kea/dhcpv4/get_peer';
    return this.http.get(path);
  }

  async setPeer(uuid: string, peer: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv4/set_peer/${uuid}`, peer);
  }

  async deletePeer(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv4/del_peer/${uuid}`);
  }

  // Reservation import/export
  async downloadReservations(): Promise<ApiResponse<any>> {
    return this.http.get('/api/kea/dhcpv4/download_reservations');
  }

  async uploadReservations(reservations: any): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/dhcpv4/upload_reservations', reservations);
  }
}

export class KeaDhcpv6 {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/kea/dhcpv6/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/dhcpv6/set', config);
  }

  // Subnet management
  async searchSubnets(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/kea/dhcpv6/search_subnet');
    }
    return this.http.post('/api/kea/dhcpv6/search_subnet', params);
  }

  async addSubnet(subnet: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/dhcpv6/add_subnet', subnet);
  }

  async getSubnet(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/kea/dhcpv6/get_subnet/${uuid}` : '/api/kea/dhcpv6/get_subnet';
    return this.http.get(path);
  }

  async setSubnet(uuid: string, subnet: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv6/set_subnet/${uuid}`, subnet);
  }

  async deleteSubnet(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv6/del_subnet/${uuid}`);
  }

  async toggleSubnet(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/kea/dhcpv6/toggle_subnet/${uuid}/${enabled ? '1' : '0'}`
        : `/api/kea/dhcpv6/toggle_subnet/${uuid}`;
    return this.http.post(path);
  }

  // Reservation management
  async searchReservations(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/kea/dhcpv6/search_reservation');
    }
    return this.http.post('/api/kea/dhcpv6/search_reservation', params);
  }

  async addReservation(reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/dhcpv6/add_reservation', reservation);
  }

  async getReservation(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/kea/dhcpv6/get_reservation/${uuid}` : '/api/kea/dhcpv6/get_reservation';
    return this.http.get(path);
  }

  async setReservation(uuid: string, reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv6/set_reservation/${uuid}`, reservation);
  }

  async deleteReservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv6/del_reservation/${uuid}`);
  }

  async toggleReservation(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/kea/dhcpv6/toggle_reservation/${uuid}/${enabled ? '1' : '0'}`
        : `/api/kea/dhcpv6/toggle_reservation/${uuid}`;
    return this.http.post(path);
  }

  // HA Peer management (for feature parity)
  async searchPeers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/kea/dhcpv6/search_peer');
    }
    return this.http.post('/api/kea/dhcpv6/search_peer', params);
  }

  async addPeer(peer: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/dhcpv6/add_peer', peer);
  }

  async getPeer(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/kea/dhcpv6/get_peer/${uuid}` : '/api/kea/dhcpv6/get_peer';
    return this.http.get(path);
  }

  async setPeer(uuid: string, peer: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv6/set_peer/${uuid}`, peer);
  }

  async deletePeer(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv6/del_peer/${uuid}`);
  }

  // Reservation import/export (for feature parity)
  async downloadReservations(): Promise<ApiResponse<any>> {
    return this.http.get('/api/kea/dhcpv6/download_reservations');
  }

  async uploadReservations(reservations: any): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/dhcpv6/upload_reservations', reservations);
  }
}

export class KeaLeases {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/kea/leases/search_lease');
    }
    return this.http.post('/api/kea/leases/search_lease', params);
  }

  async searchLeases4(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/kea/leases4/search', params);
  }

  async searchLeases6(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/kea/leases6/search', params);
  }

  async getStats(): Promise<ApiResponse<any>> {
    return this.http.get('/api/kea/leases/stats');
  }
}

export class KeaService {
  constructor(private http: any) {}

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/service/reconfigure');
  }

  async getDhcpv4Status(): Promise<ApiResponse<any>> {
    return this.http.get('/api/kea/service/dhcpv4/status');
  }

  async startDhcpv4(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/service/dhcpv4/start');
  }

  async stopDhcpv4(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/service/dhcpv4/stop');
  }

  async restartDhcpv4(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/service/dhcpv4/restart');
  }

  async getDhcpv6Status(): Promise<ApiResponse<any>> {
    return this.http.get('/api/kea/service/dhcpv6/status');
  }

  async startDhcpv6(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/service/dhcpv6/start');
  }

  async stopDhcpv6(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/service/dhcpv6/stop');
  }

  async restartDhcpv6(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/service/dhcpv6/restart');
  }
}

export class KeaModule extends BaseModule {
  public readonly ctrlAgent: KeaCtrlAgent;
  public readonly dhcpv4: KeaDhcpv4;
  public readonly dhcpv6: KeaDhcpv6;
  public readonly leases: KeaLeases;
  public readonly service: KeaService;

  constructor(httpClient: any) {
    super(httpClient);
    this.ctrlAgent = new KeaCtrlAgent(this.http);
    this.dhcpv4 = new KeaDhcpv4(this.http);
    this.dhcpv6 = new KeaDhcpv6(this.http);
    this.leases = new KeaLeases(this.http);
    this.service = new KeaService(this.http);
  }

  // Legacy methods for backward compatibility
  async getConfig(): Promise<ApiResponse<any>> {
    return this.dhcpv4.get();
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv4.set(config);
  }

  async searchDhcpv4Subnets(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.dhcpv4.searchSubnets(params);
  }

  async addDhcpv4Subnet(subnet: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv4.addSubnet(subnet);
  }

  async getDhcpv4Subnet(uuid?: string): Promise<ApiResponse<any>> {
    return this.dhcpv4.getSubnet(uuid);
  }

  async updateDhcpv4Subnet(uuid: string, subnet: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv4.setSubnet(uuid, subnet);
  }

  async deleteDhcpv4Subnet(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv4.deleteSubnet(uuid);
  }

  async toggleDhcpv4Subnet(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv4.toggleSubnet(uuid, enabled);
  }

  async searchDhcpv4Reservations(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.dhcpv4.searchReservations(params);
  }

  async addDhcpv4Reservation(reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv4.addReservation(reservation);
  }

  async getDhcpv4Reservation(uuid?: string): Promise<ApiResponse<any>> {
    return this.dhcpv4.getReservation(uuid);
  }

  async updateDhcpv4Reservation(uuid: string, reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv4.setReservation(uuid, reservation);
  }

  async deleteDhcpv4Reservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv4.deleteReservation(uuid);
  }

  async toggleDhcpv4Reservation(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv4.toggleReservation(uuid, enabled);
  }

  async getDhcpv6Config(): Promise<ApiResponse<any>> {
    return this.dhcpv6.get();
  }

  async setDhcpv6Config(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv6.set(config);
  }

  async searchDhcpv6Subnets(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.dhcpv6.searchSubnets(params);
  }

  async addDhcpv6Subnet(subnet: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv6.addSubnet(subnet);
  }

  async getDhcpv6Subnet(uuid?: string): Promise<ApiResponse<any>> {
    return this.dhcpv6.getSubnet(uuid);
  }

  async updateDhcpv6Subnet(uuid: string, subnet: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv6.setSubnet(uuid, subnet);
  }

  async deleteDhcpv6Subnet(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv6.deleteSubnet(uuid);
  }

  async toggleDhcpv6Subnet(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv6.toggleSubnet(uuid, enabled);
  }

  async startDhcpv4(): Promise<ApiResponse<ApiResult>> {
    return this.service.startDhcpv4();
  }

  async stopDhcpv4(): Promise<ApiResponse<ApiResult>> {
    return this.service.stopDhcpv4();
  }

  async restartDhcpv4(): Promise<ApiResponse<ApiResult>> {
    return this.service.restartDhcpv4();
  }

  async getDhcpv4Status(): Promise<ApiResponse<any>> {
    return this.service.getDhcpv4Status();
  }

  async startDhcpv6(): Promise<ApiResponse<ApiResult>> {
    return this.service.startDhcpv6();
  }

  async stopDhcpv6(): Promise<ApiResponse<ApiResult>> {
    return this.service.stopDhcpv6();
  }

  async restartDhcpv6(): Promise<ApiResponse<ApiResult>> {
    return this.service.restartDhcpv6();
  }

  async getDhcpv6Status(): Promise<ApiResponse<any>> {
    return this.service.getDhcpv6Status();
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.service.reconfigure();
  }

  async searchLeases(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.leases.search(params);
  }

  async getLeaseStats(): Promise<ApiResponse<any>> {
    return this.leases.getStats();
  }

  // New convenience methods
  async getAllDhcpv4Subnets(): Promise<ApiResponse<any>> {
    return this.dhcpv4.searchSubnets();
  }

  async getAllDhcpv4Reservations(): Promise<ApiResponse<any>> {
    return this.dhcpv4.searchReservations();
  }

  async getAllDhcpv4Peers(): Promise<ApiResponse<any>> {
    return this.dhcpv4.searchPeers();
  }

  async getAllDhcpv6Subnets(): Promise<ApiResponse<any>> {
    return this.dhcpv6.searchSubnets();
  }

  async getAllDhcpv6Reservations(): Promise<ApiResponse<any>> {
    return this.dhcpv6.searchReservations();
  }

  async getAllDhcpv6Peers(): Promise<ApiResponse<any>> {
    return this.dhcpv6.searchPeers();
  }

  async enableDhcpv4Subnet(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv4.toggleSubnet(uuid, true);
  }

  async disableDhcpv4Subnet(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv4.toggleSubnet(uuid, false);
  }

  async enableDhcpv6Subnet(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv6.toggleSubnet(uuid, true);
  }

  async disableDhcpv6Subnet(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv6.toggleSubnet(uuid, false);
  }

  async enableDhcpv4Reservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv4.toggleReservation(uuid, true);
  }

  async disableDhcpv4Reservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv4.toggleReservation(uuid, false);
  }

  async enableDhcpv6Reservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv6.toggleReservation(uuid, true);
  }

  async disableDhcpv6Reservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv6.toggleReservation(uuid, false);
  }

  async createDhcpv4Subnet(
    subnet: string,
    range_from: string,
    range_to: string,
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const subnetConfig = {
      enabled: '1',
      subnet,
      pools: [
        {
          start_address: range_from,
          end_address: range_to,
        },
      ],
      description: description || `DHCPv4 subnet ${subnet}`,
    };
    return this.dhcpv4.addSubnet(subnetConfig);
  }

  async createDhcpv6Subnet(
    subnet: string,
    range_from: string,
    range_to: string,
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const subnetConfig = {
      enabled: '1',
      subnet,
      pools: [
        {
          start_address: range_from,
          end_address: range_to,
        },
      ],
      description: description || `DHCPv6 subnet ${subnet}`,
    };
    return this.dhcpv6.addSubnet(subnetConfig);
  }

  async createDhcpv4Reservation(
    hw_address: string,
    ip_address: string,
    hostname?: string,
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const reservation = {
      enabled: '1',
      hw_address,
      ip_address,
      hostname: hostname || '',
      description: description || `Reservation for ${hw_address}`,
    };
    return this.dhcpv4.addReservation(reservation);
  }

  async createDhcpv6Reservation(
    duid: string,
    ip_address: string,
    hostname?: string,
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const reservation = {
      enabled: '1',
      duid,
      ip_address,
      hostname: hostname || '',
      description: description || `IPv6 reservation for ${duid}`,
    };
    return this.dhcpv6.addReservation(reservation);
  }

  async createHaPeer(
    name: string,
    url: string,
    role: string = 'standby',
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const peer = {
      enabled: '1',
      name,
      url,
      role,
      description: description || `HA peer ${name}`,
    };
    return this.dhcpv4.addPeer(peer);
  }

  async exportDhcpv4Reservations(): Promise<ApiResponse<any>> {
    return this.dhcpv4.downloadReservations();
  }

  async importDhcpv4Reservations(reservations: any): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv4.uploadReservations(reservations);
  }

  async exportDhcpv6Reservations(): Promise<ApiResponse<any>> {
    return this.dhcpv6.downloadReservations();
  }

  async importDhcpv6Reservations(reservations: any): Promise<ApiResponse<ApiResult>> {
    return this.dhcpv6.uploadReservations(reservations);
  }

  async getKeaOverview(): Promise<{
    dhcpv4: { status: any; subnets: any; reservations: any; peers: any };
    dhcpv6: { status: any; subnets: any; reservations: any; peers: any };
    leases: { stats: any; v4: any; v6: any };
    ctrlAgent: any;
    timestamp: string;
  }> {
    const [
      dhcpv4Status,
      dhcpv4Subnets,
      dhcpv4Reservations,
      dhcpv4Peers,
      dhcpv6Status,
      dhcpv6Subnets,
      dhcpv6Reservations,
      dhcpv6Peers,
      leaseStats,
      leases4,
      leases6,
      ctrlAgent,
    ] = await Promise.allSettled([
      this.getDhcpv4Status(),
      this.getAllDhcpv4Subnets(),
      this.getAllDhcpv4Reservations(),
      this.getAllDhcpv4Peers(),
      this.getDhcpv6Status(),
      this.getAllDhcpv6Subnets(),
      this.getAllDhcpv6Reservations(),
      this.getAllDhcpv6Peers(),
      this.getLeaseStats(),
      this.leases.searchLeases4().catch(() => ({ data: null })),
      this.leases.searchLeases6().catch(() => ({ data: null })),
      this.ctrlAgent.get(),
    ]);

    return {
      dhcpv4: {
        status: dhcpv4Status.status === 'fulfilled' ? dhcpv4Status.value.data : null,
        subnets: dhcpv4Subnets.status === 'fulfilled' ? dhcpv4Subnets.value.data : null,
        reservations: dhcpv4Reservations.status === 'fulfilled' ? dhcpv4Reservations.value.data : null,
        peers: dhcpv4Peers.status === 'fulfilled' ? dhcpv4Peers.value.data : null,
      },
      dhcpv6: {
        status: dhcpv6Status.status === 'fulfilled' ? dhcpv6Status.value.data : null,
        subnets: dhcpv6Subnets.status === 'fulfilled' ? dhcpv6Subnets.value.data : null,
        reservations: dhcpv6Reservations.status === 'fulfilled' ? dhcpv6Reservations.value.data : null,
        peers: dhcpv6Peers.status === 'fulfilled' ? dhcpv6Peers.value.data : null,
      },
      leases: {
        stats: leaseStats.status === 'fulfilled' ? leaseStats.value.data : null,
        v4: leases4.status === 'fulfilled' ? leases4.value.data : null,
        v6: leases6.status === 'fulfilled' ? leases6.value.data : null,
      },
      ctrlAgent: ctrlAgent.status === 'fulfilled' ? ctrlAgent.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }

  async restartAllServices(): Promise<{
    results: Array<{ service: string; success: boolean; error?: any }>;
    summary: { restarted: number; failed: number };
  }> {
    const services = [
      { name: 'dhcpv4', op: () => this.restartDhcpv4() },
      { name: 'dhcpv6', op: () => this.restartDhcpv6() },
    ];

    const results = [];
    let restarted = 0;
    let failed = 0;

    for (const { name, op } of services) {
      try {
        await op();
        results.push({ service: name, success: true });
        restarted++;
      } catch (error) {
        results.push({ service: name, success: false, error });
        failed++;
      }
    }

    return {
      results,
      summary: { restarted, failed },
    };
  }

  async getServiceStatus(): Promise<{
    dhcpv4: any;
    dhcpv6: any;
    running: { dhcpv4: boolean; dhcpv6: boolean };
    timestamp: string;
  }> {
    const [dhcpv4Status, dhcpv6Status] = await Promise.allSettled([this.getDhcpv4Status(), this.getDhcpv6Status()]);

    const dhcpv4Data = dhcpv4Status.status === 'fulfilled' ? dhcpv4Status.value.data : null;
    const dhcpv6Data = dhcpv6Status.status === 'fulfilled' ? dhcpv6Status.value.data : null;

    return {
      dhcpv4: dhcpv4Data,
      dhcpv6: dhcpv6Data,
      running: {
        dhcpv4: dhcpv4Data?.status === 'running',
        dhcpv6: dhcpv6Data?.status === 'running',
      },
      timestamp: new Date().toISOString(),
    };
  }
}
