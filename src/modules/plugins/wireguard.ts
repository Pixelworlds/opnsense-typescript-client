import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class WireGuardModule extends BaseModule {
  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wireguard/general/set', config);
  }

  async searchServers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/wireguard/server/search_server', params);
  }

  async addServer(server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wireguard/server/add_server', server);
  }

  async getServer(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/wireguard/server/get_server/${uuid}` : '/api/wireguard/server/get';
    return this.http.get(path);
  }

  async updateServer(uuid: string, server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/server/set_server/${uuid}`, server);
  }

  async deleteServer(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/server/del_server/${uuid}`);
  }

  async toggleServer(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/server/toggle_server/${uuid}`);
  }

  async generateKeyPair(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/server/key_pair');
  }

  async searchClients(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/wireguard/client/search_client', params);
  }

  async addClient(client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wireguard/client/add_client', client);
  }

  async getClient(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/wireguard/client/get_client/${uuid}` : '/api/wireguard/client/get';
    return this.http.get(path);
  }

  async updateClient(uuid: string, client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/client/set_client/${uuid}`, client);
  }

  async deleteClient(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/client/del_client/${uuid}`);
  }

  async toggleClient(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/client/toggle_client/${uuid}`);
  }

  async getServerInfo(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/wireguard/client/get_server_info/${uuid}` : '/api/wireguard/client/get_server_info';
    return this.http.get(path);
  }

  async listServers(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/client/list_servers');
  }

  async generatePsk(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/client/psk');
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

  async show(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/service/show');
  }
}
