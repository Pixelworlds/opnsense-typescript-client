import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class ZerotierModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('zerotier', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('zerotier', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('zerotier', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('zerotier', 'restart');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/zerotier/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/zerotier/general/set', config);
  }

  async searchNetworks(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/zerotier/settings/search_network', params);
  }

  async addNetwork(network: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/zerotier/settings/add_network', network);
  }

  async getNetwork(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/zerotier/settings/get_network/${uuid}` : '/api/zerotier/settings/get_network';
    return this.http.get(path);
  }

  async updateNetwork(uuid: string, network: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zerotier/settings/set_network/${uuid}`, network);
  }

  async deleteNetwork(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zerotier/settings/del_network/${uuid}`);
  }

  async toggleNetwork(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/zerotier/settings/toggle_network', uuid, enabled);
  }

  async joinNetwork(networkId: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zerotier/service/join/${networkId}`);
  }

  async leaveNetwork(networkId: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zerotier/service/leave/${networkId}`);
  }

  async getNetworkInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/zerotier/service/info');
  }

  async getPeers(): Promise<ApiResponse<any>> {
    return this.http.get('/api/zerotier/service/peers');
  }
}
