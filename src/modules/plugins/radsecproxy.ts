import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class RadsecproxyModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('radsecproxy', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('radsecproxy', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('radsecproxy', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('radsecproxy', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('radsecproxy', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/radsecproxy/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/radsecproxy/general/set', config);
  }

  async searchClients(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/radsecproxy/settings/search_client', params);
  }

  async addClient(client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/radsecproxy/settings/add_client', client);
  }

  async getClient(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/radsecproxy/settings/get_client/${uuid}` : '/api/radsecproxy/settings/get_client';
    return this.http.get(path);
  }

  async updateClient(uuid: string, client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/settings/set_client/${uuid}`, client);
  }

  async deleteClient(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/settings/del_client/${uuid}`);
  }

  async toggleClient(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/radsecproxy/settings/toggle_client', uuid, enabled);
  }

  async searchServers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/radsecproxy/settings/search_server', params);
  }

  async addServer(server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/radsecproxy/settings/add_server', server);
  }

  async getServer(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/radsecproxy/settings/get_server/${uuid}` : '/api/radsecproxy/settings/get_server';
    return this.http.get(path);
  }

  async updateServer(uuid: string, server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/settings/set_server/${uuid}`, server);
  }

  async deleteServer(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/settings/del_server/${uuid}`);
  }

  async toggleServer(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/radsecproxy/settings/toggle_server', uuid, enabled);
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/radsecproxy/service/statistics');
  }

  async getConnections(): Promise<ApiResponse<any>> {
    return this.http.get('/api/radsecproxy/service/connections');
  }
}
