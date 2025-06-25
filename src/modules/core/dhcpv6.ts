import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class Dhcpv6Leases {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.get('/api/dhcpv6/leases/search_lease', params);
  }

  async searchPrefix(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.get('/api/dhcpv6/leases/search_prefix', params);
  }

  async deleteLease(ip: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcpv6/leases/del_lease/${ip}`);
  }
}

export class Dhcpv6Service {
  constructor(private http: any) {}

  async getStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dhcpv6/service/status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcpv6/service/start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcpv6/service/stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcpv6/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcpv6/service/reconfigure');
  }
}

export class Dhcpv6Settings {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dhcpv6/settings/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcpv6/settings/set', config);
  }

  async searchReservations(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/dhcpv6/settings/search_reservation');
    }
    return this.http.post('/api/dhcpv6/settings/search_reservation', params);
  }

  async addReservation(reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcpv6/settings/add_reservation', reservation);
  }

  async getReservation(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/dhcpv6/settings/get_reservation/${uuid}` : '/api/dhcpv6/settings/get_reservation';
    return this.http.get(path);
  }

  async setReservation(uuid: string, reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcpv6/settings/set_reservation/${uuid}`, reservation);
  }

  async deleteReservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcpv6/settings/del_reservation/${uuid}`);
  }

  async toggleReservation(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/dhcpv6/settings/toggle_reservation/${uuid}/${enabled ? '1' : '0'}`
        : `/api/dhcpv6/settings/toggle_reservation/${uuid}`;
    return this.http.post(path);
  }
}

export class Dhcpv6Module extends BaseModule {
  public readonly leases: Dhcpv6Leases;
  public readonly service: Dhcpv6Service;
  public readonly settings: Dhcpv6Settings;

  constructor(httpClient: any) {
    super(httpClient);
    this.leases = new Dhcpv6Leases(this.http);
    this.service = new Dhcpv6Service(this.http);
    this.settings = new Dhcpv6Settings(this.http);
  }

  // Legacy methods for backward compatibility
  async getConfig(): Promise<ApiResponse<any>> {
    return this.settings.get();
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.set(config);
  }

  async searchLeases(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.leases.search(params);
  }

  async searchReservations(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.settings.searchReservations(params);
  }

  async addReservation(reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.addReservation(reservation);
  }

  async getReservation(uuid?: string): Promise<ApiResponse<any>> {
    return this.settings.getReservation(uuid);
  }

  async updateReservation(uuid: string, reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.setReservation(uuid, reservation);
  }

  async deleteReservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.deleteReservation(uuid);
  }

  async toggleReservation(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleReservation(uuid, enabled);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.service.start();
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.service.stop();
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.service.restart();
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.service.reconfigure();
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.service.getStatus();
  }

  // New convenience methods
  async deleteLease(ip: string): Promise<ApiResponse<ApiResult>> {
    return this.leases.deleteLease(ip);
  }

  async searchPrefix(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.leases.searchPrefix(params);
  }

  async getAllLeases(): Promise<ApiResponse<any>> {
    return this.searchLeases();
  }

  async getAllPrefixes(): Promise<ApiResponse<any>> {
    return this.searchPrefix();
  }

  async findLeasesByDuid(duid: string): Promise<ApiResponse<any>> {
    return this.searchLeases({ duid });
  }

  async findLeasesByHostname(hostname: string): Promise<ApiResponse<any>> {
    return this.searchLeases({ hostname });
  }

  async getAllReservations(): Promise<ApiResponse<any>> {
    return this.searchReservations();
  }

  async getEnabledReservations(): Promise<ApiResponse<any>> {
    return this.searchReservations({ enabled: '1' });
  }

  async getDisabledReservations(): Promise<ApiResponse<any>> {
    return this.searchReservations({ enabled: '0' });
  }

  async createStaticReservation(
    duid: string,
    ipv6: string,
    hostname?: string,
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const reservation = {
      enabled: '1',
      duid,
      ipv6,
      hostname: hostname || '',
      descr: description || `Static IPv6 reservation for ${duid}`,
    };
    return this.addReservation(reservation);
  }

  async enableReservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.toggleReservation(uuid, true);
  }

  async disableReservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.toggleReservation(uuid, false);
  }

  async getServiceInfo(): Promise<{
    status: any;
    leases: any;
    prefixes: any;
    reservations: any;
    timestamp: string;
  }> {
    const [status, leases, prefixes, reservations] = await Promise.allSettled([
      this.getStatus(),
      this.getAllLeases(),
      this.getAllPrefixes(),
      this.getAllReservations(),
    ]);

    return {
      status: status.status === 'fulfilled' ? status.value.data : null,
      leases: leases.status === 'fulfilled' ? leases.value.data : null,
      prefixes: prefixes.status === 'fulfilled' ? prefixes.value.data : null,
      reservations: reservations.status === 'fulfilled' ? reservations.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }
}
