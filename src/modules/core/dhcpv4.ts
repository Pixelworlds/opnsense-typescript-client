import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class Dhcpv4Leases {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.get('/api/dhcpv4/leases/search_lease', params);
  }

  async deleteLease(ip: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcpv4/leases/del_lease/${ip}`);
  }
}

export class Dhcpv4Service {
  constructor(private http: any) {}

  async getStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dhcpv4/service/status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcpv4/service/start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcpv4/service/stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcpv4/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcpv4/service/reconfigure');
  }
}

export class Dhcpv4Settings {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dhcpv4/settings/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcpv4/settings/set', config);
  }

  async searchReservations(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    // Support both GET and POST methods
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/dhcpv4/settings/search_reservation');
    }
    return this.http.post('/api/dhcpv4/settings/search_reservation', params);
  }

  async addReservation(reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcpv4/settings/add_reservation', reservation);
  }

  async getReservation(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/dhcpv4/settings/get_reservation/${uuid}` : '/api/dhcpv4/settings/get_reservation';
    return this.http.get(path);
  }

  async setReservation(uuid: string, reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcpv4/settings/set_reservation/${uuid}`, reservation);
  }

  async deleteReservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcpv4/settings/del_reservation/${uuid}`);
  }

  async toggleReservation(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/dhcpv4/settings/toggle_reservation/${uuid}/${enabled ? '1' : '0'}`
        : `/api/dhcpv4/settings/toggle_reservation/${uuid}`;
    return this.http.post(path);
  }
}

export class Dhcpv4Module extends BaseModule {
  public readonly leases: Dhcpv4Leases;
  public readonly service: Dhcpv4Service;
  public readonly settings: Dhcpv4Settings;

  constructor(httpClient: any) {
    super(httpClient);
    this.leases = new Dhcpv4Leases(this.http);
    this.service = new Dhcpv4Service(this.http);
    this.settings = new Dhcpv4Settings(this.http);
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

  async getAllLeases(): Promise<ApiResponse<any>> {
    return this.searchLeases();
  }

  async getActiveLeases(): Promise<ApiResponse<any>> {
    return this.searchLeases({ active: true });
  }

  async getExpiredLeases(): Promise<ApiResponse<any>> {
    return this.searchLeases({ expired: true });
  }

  async findLeasesByMac(mac: string): Promise<ApiResponse<any>> {
    return this.searchLeases({ mac });
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

  async findReservationsByMac(mac: string): Promise<ApiResponse<any>> {
    return this.searchReservations({ searchPhrase: mac });
  }

  async findReservationsByIP(ip: string): Promise<ApiResponse<any>> {
    return this.searchReservations({ searchPhrase: ip });
  }

  async createStaticReservation(
    mac: string,
    ip: string,
    hostname?: string,
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const reservation = {
      enabled: '1',
      mac,
      ip,
      hostname: hostname || '',
      descr: description || `Static reservation for ${mac}`,
    };
    return this.addReservation(reservation);
  }

  async enableReservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.toggleReservation(uuid, true);
  }

  async disableReservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.toggleReservation(uuid, false);
  }

  async bulkDeleteLeases(ips: string[]): Promise<ApiResponse<ApiResult>[]> {
    const results: ApiResponse<ApiResult>[] = [];

    for (const ip of ips) {
      try {
        const result = await this.deleteLease(ip);
        results.push(result);
      } catch (error) {
        results.push({
          data: { result: 'failed', error: String(error) },
          status: 'error',
          statusText: 'Error',
          headers: {},
        } as unknown as ApiResponse<ApiResult>);
      }
    }

    return results;
  }

  async bulkToggleReservations(uuids: string[], enabled: boolean): Promise<ApiResponse<ApiResult>[]> {
    const results: ApiResponse<ApiResult>[] = [];

    for (const uuid of uuids) {
      try {
        const result = await this.toggleReservation(uuid, enabled);
        results.push(result);
      } catch (error) {
        results.push({
          data: { result: 'failed', error: String(error) },
          status: 'error',
          statusText: 'Error',
          headers: {},
        } as unknown as ApiResponse<ApiResult>);
      }
    }

    return results;
  }

  async exportReservations(): Promise<any[]> {
    const result = await this.getAllReservations();
    return result.data?.rows || [];
  }

  async importReservations(reservations: any[]): Promise<ApiResponse<ApiResult>[]> {
    const results: ApiResponse<ApiResult>[] = [];

    for (const reservation of reservations) {
      try {
        const result = await this.addReservation(reservation);
        results.push(result);
      } catch (error) {
        results.push({
          data: { result: 'failed', error: String(error) },
          status: 'error',
          statusText: 'Error',
          headers: {},
        } as unknown as ApiResponse<ApiResult>);
      }
    }

    return results;
  }

  async getServiceInfo(): Promise<{
    status: any;
    leases: any;
    reservations: any;
    timestamp: string;
  }> {
    const [status, leases, reservations] = await Promise.allSettled([
      this.getStatus(),
      this.getAllLeases(),
      this.getAllReservations(),
    ]);

    return {
      status: status.status === 'fulfilled' ? status.value.data : null,
      leases: leases.status === 'fulfilled' ? leases.value.data : null,
      reservations: reservations.status === 'fulfilled' ? reservations.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }

  async clearExpiredLeases(): Promise<any> {
    const expiredLeases = await this.getExpiredLeases();
    const leaseIPs = expiredLeases.data?.rows?.map((lease: any) => lease.ip) || [];

    if (leaseIPs.length > 0) {
      const results = await this.bulkDeleteLeases(leaseIPs);
      return {
        data: { result: 'expired_leases_deleted', count: leaseIPs.length, results },
        status: 'success',
        statusText: 'OK',
        headers: {},
      };
    }

    return {
      data: { result: 'no_expired_leases', count: 0 },
      status: 'success',
      statusText: 'OK',
      headers: {},
    };
  }
}
