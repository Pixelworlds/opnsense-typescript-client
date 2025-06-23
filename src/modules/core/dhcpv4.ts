import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class Dhcpv4Module extends BaseModule {
  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dhcpv4/settings/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcpv4/settings/set', config);
  }

  async searchLeases(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/dhcpv4/leases/search_lease', params);
  }

  async searchReservations(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/dhcpv4/settings/search_reservation', params);
  }

  async addReservation(reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcpv4/settings/add_reservation', reservation);
  }

  async getReservation(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/dhcpv4/settings/get_reservation/${uuid}` : '/api/dhcpv4/settings/get_reservation';
    return this.http.get(path);
  }

  async updateReservation(uuid: string, reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcpv4/settings/set_reservation/${uuid}`, reservation);
  }

  async deleteReservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcpv4/settings/del_reservation/${uuid}`);
  }

  async toggleReservation(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/dhcpv4/settings/toggle_reservation', uuid, enabled);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dhcpd', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dhcpd', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dhcpd', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dhcpd', 'reconfigure');
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('dhcpd', 'status');
  }
}
