import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class WireguardModule extends BaseModule {
  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/general/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wireguard/general/set', config);
  }

  async searchServers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/wireguard/server/search_item', params);
  }

  async addServer(server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wireguard/server/add_item', server);
  }

  async getServer(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/wireguard/server/get_item/${uuid}` : '/api/wireguard/server/get';
    return this.http.get(path);
  }

  async updateServer(uuid: string, server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/server/set_item/${uuid}`, server);
  }

  async deleteServer(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/server/del_item/${uuid}`);
  }

  async toggleServer(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/wireguard/server/toggle_item', uuid, enabled);
  }

  async searchClients(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/wireguard/client/search_item', params);
  }

  async addClient(client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wireguard/client/add_item', client);
  }

  async getClient(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/wireguard/client/get_item/${uuid}` : '/api/wireguard/client/get';
    return this.http.get(path);
  }

  async updateClient(uuid: string, client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/client/set_item/${uuid}`, client);
  }

  async deleteClient(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/client/del_item/${uuid}`);
  }

  async toggleClient(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/wireguard/client/toggle_item', uuid, enabled);
  }

  async searchPeers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/wireguard/peer/search_item', params);
  }

  async addPeer(peer: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wireguard/peer/add_item', peer);
  }

  async getPeer(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/wireguard/peer/get_item/${uuid}` : '/api/wireguard/peer/get';
    return this.http.get(path);
  }

  async updatePeer(uuid: string, peer: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/peer/set_item/${uuid}`, peer);
  }

  async deletePeer(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/peer/del_item/${uuid}`);
  }

  async togglePeer(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/wireguard/peer/toggle_item', uuid, enabled);
  }

  async generateKeyPair(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/service/gen_keypair');
  }

  async generatePresharedKey(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/service/gen_psk');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('wireguard', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('wireguard', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('wireguard', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('wireguard', 'reconfigure');
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('wireguard', 'status');
  }

  async getHandshakes(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/service/show_handshake');
  }

  async getConnections(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/service/show_conf');
  }

  async showPeers(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/service/show_peers');
  }

  async exportConfig(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/wireguard/service/export_config/${uuid}` : '/api/wireguard/service/export_config';
    return this.http.get(path);
  }
}
