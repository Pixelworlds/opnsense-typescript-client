import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class ShadowsocksModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('shadowsocks', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('shadowsocks', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('shadowsocks', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('shadowsocks', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('shadowsocks', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/shadowsocks/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/shadowsocks/general/set', config);
  }

  async searchServers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/shadowsocks/settings/search_server', params);
  }

  async addServer(server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/shadowsocks/settings/add_server', server);
  }

  async getServer(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/shadowsocks/settings/get_server/${uuid}` : '/api/shadowsocks/settings/get_server';
    return this.http.get(path);
  }

  async updateServer(uuid: string, server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/shadowsocks/settings/set_server/${uuid}`, server);
  }

  async deleteServer(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/shadowsocks/settings/del_server/${uuid}`);
  }

  async toggleServer(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/shadowsocks/settings/toggle_server', uuid, enabled);
  }

  async searchClients(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/shadowsocks/settings/search_client', params);
  }

  async addClient(client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/shadowsocks/settings/add_client', client);
  }

  async getClient(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/shadowsocks/settings/get_client/${uuid}` : '/api/shadowsocks/settings/get_client';
    return this.http.get(path);
  }

  async updateClient(uuid: string, client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/shadowsocks/settings/set_client/${uuid}`, client);
  }

  async deleteClient(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/shadowsocks/settings/del_client/${uuid}`);
  }

  async toggleClient(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/shadowsocks/settings/toggle_client', uuid, enabled);
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/shadowsocks/service/statistics');
  }

  async getConnections(): Promise<ApiResponse<any>> {
    return this.http.get('/api/shadowsocks/service/connections');
  }
}
