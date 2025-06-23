import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class TincModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('tinc', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tinc', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tinc', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tinc', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tinc', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tinc/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/tinc/general/set', config);
  }

  async searchNetworks(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/tinc/settings/search_network', params);
  }

  async addNetwork(network: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/tinc/settings/add_network', network);
  }

  async getNetwork(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/tinc/settings/get_network/${uuid}` : '/api/tinc/settings/get_network';
    return this.http.get(path);
  }

  async updateNetwork(uuid: string, network: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tinc/settings/set_network/${uuid}`, network);
  }

  async deleteNetwork(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tinc/settings/del_network/${uuid}`);
  }

  async toggleNetwork(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/tinc/settings/toggle_network', uuid, enabled);
  }

  async searchHosts(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/tinc/settings/search_host', params);
  }

  async addHost(host: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/tinc/settings/add_host', host);
  }

  async getHost(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/tinc/settings/get_host/${uuid}` : '/api/tinc/settings/get_host';
    return this.http.get(path);
  }

  async updateHost(uuid: string, host: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tinc/settings/set_host/${uuid}`, host);
  }

  async deleteHost(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tinc/settings/del_host/${uuid}`);
  }

  async toggleHost(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/tinc/settings/toggle_host', uuid, enabled);
  }

  async generateKeyPair(networkName: string): Promise<ApiResponse<any>> {
    return this.http.post(`/api/tinc/service/generate_keypair/${networkName}`);
  }

  async getPublicKey(networkName: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tinc/service/public_key/${networkName}`);
  }

  async connectNetwork(networkName: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tinc/service/connect/${networkName}`);
  }

  async disconnectNetwork(networkName: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tinc/service/disconnect/${networkName}`);
  }

  async getConnections(networkName?: string): Promise<ApiResponse<any>> {
    const path = networkName ? `/api/tinc/service/connections/${networkName}` : '/api/tinc/service/connections';
    return this.http.get(path);
  }

  async getNodes(networkName?: string): Promise<ApiResponse<any>> {
    const path = networkName ? `/api/tinc/service/nodes/${networkName}` : '/api/tinc/service/nodes';
    return this.http.get(path);
  }

  async getEdges(networkName?: string): Promise<ApiResponse<any>> {
    const path = networkName ? `/api/tinc/service/edges/${networkName}` : '/api/tinc/service/edges';
    return this.http.get(path);
  }

  async getSubnets(networkName?: string): Promise<ApiResponse<any>> {
    const path = networkName ? `/api/tinc/service/subnets/${networkName}` : '/api/tinc/service/subnets';
    return this.http.get(path);
  }
}
