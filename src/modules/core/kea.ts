import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class KeaModule extends BaseModule {
  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/kea/dhcpv4/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/dhcpv4/set', config);
  }

  async searchDhcpv4Subnets(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/kea/dhcpv4/search_subnet', params);
  }

  async addDhcpv4Subnet(subnet: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/dhcpv4/add_subnet', subnet);
  }

  async getDhcpv4Subnet(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/kea/dhcpv4/get_subnet/${uuid}` : '/api/kea/dhcpv4/get_subnet';
    return this.http.get(path);
  }

  async updateDhcpv4Subnet(uuid: string, subnet: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv4/set_subnet/${uuid}`, subnet);
  }

  async deleteDhcpv4Subnet(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv4/del_subnet/${uuid}`);
  }

  async toggleDhcpv4Subnet(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/kea/dhcpv4/toggle_subnet', uuid, enabled);
  }

  async searchDhcpv4Reservations(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/kea/dhcpv4/search_reservation', params);
  }

  async addDhcpv4Reservation(reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/dhcpv4/add_reservation', reservation);
  }

  async getDhcpv4Reservation(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/kea/dhcpv4/get_reservation/${uuid}` : '/api/kea/dhcpv4/get_reservation';
    return this.http.get(path);
  }

  async updateDhcpv4Reservation(uuid: string, reservation: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv4/set_reservation/${uuid}`, reservation);
  }

  async deleteDhcpv4Reservation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv4/del_reservation/${uuid}`);
  }

  async toggleDhcpv4Reservation(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/kea/dhcpv4/toggle_reservation', uuid, enabled);
  }

  async getDhcpv6Config(): Promise<ApiResponse<any>> {
    return this.http.get('/api/kea/dhcpv6/get');
  }

  async setDhcpv6Config(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/dhcpv6/set', config);
  }

  async searchDhcpv6Subnets(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/kea/dhcpv6/search_subnet', params);
  }

  async addDhcpv6Subnet(subnet: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/dhcpv6/add_subnet', subnet);
  }

  async getDhcpv6Subnet(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/kea/dhcpv6/get_subnet/${uuid}` : '/api/kea/dhcpv6/get_subnet';
    return this.http.get(path);
  }

  async updateDhcpv6Subnet(uuid: string, subnet: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv6/set_subnet/${uuid}`, subnet);
  }

  async deleteDhcpv6Subnet(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/kea/dhcpv6/del_subnet/${uuid}`);
  }

  async toggleDhcpv6Subnet(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/kea/dhcpv6/toggle_subnet', uuid, enabled);
  }

  async startDhcpv4(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('kea-dhcp4', 'start');
  }

  async stopDhcpv4(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('kea-dhcp4', 'stop');
  }

  async restartDhcpv4(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('kea-dhcp4', 'restart');
  }

  async getDhcpv4Status(): Promise<ApiResponse<any>> {
    return this.serviceAction('kea-dhcp4', 'status');
  }

  async startDhcpv6(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('kea-dhcp6', 'start');
  }

  async stopDhcpv6(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('kea-dhcp6', 'stop');
  }

  async restartDhcpv6(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('kea-dhcp6', 'restart');
  }

  async getDhcpv6Status(): Promise<ApiResponse<any>> {
    return this.serviceAction('kea-dhcp6', 'status');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/kea/service/reconfigure');
  }

  async searchLeases(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/kea/leases/search_lease', params);
  }

  async getLeaseStats(): Promise<ApiResponse<any>> {
    return this.http.get('/api/kea/leases/stats');
  }
}
