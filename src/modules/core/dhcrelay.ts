import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class DhcrelayModule extends BaseModule {
  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dhcrelay/settings/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcrelay/settings/set', config);
  }

  async searchDestinations(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/dhcrelay/settings/search_destination', params);
  }

  async addDestination(destination: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcrelay/settings/add_destination', destination);
  }

  async getDestination(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/dhcrelay/settings/get_destination/${uuid}` : '/api/dhcrelay/settings/get_destination';
    return this.http.get(path);
  }

  async updateDestination(uuid: string, destination: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcrelay/settings/set_destination/${uuid}`, destination);
  }

  async deleteDestination(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcrelay/settings/del_destination/${uuid}`);
  }

  async toggleDestination(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/dhcrelay/settings/toggle_destination', uuid, enabled);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dhcrelay', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dhcrelay', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dhcrelay', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dhcrelay', 'reconfigure');
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('dhcrelay', 'status');
  }
}
