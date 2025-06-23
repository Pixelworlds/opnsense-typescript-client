import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class FreeradiusModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('freeradius', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('freeradius', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('freeradius', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('freeradius', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('freeradius', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/freeradius/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/freeradius/general/set', config);
  }

  async searchClients(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/freeradius/settings/search_client', params);
  }

  async addClient(client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/freeradius/settings/add_client', client);
  }

  async getClient(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/freeradius/settings/get_client/${uuid}` : '/api/freeradius/settings/get_client';
    return this.http.get(path);
  }

  async updateClient(uuid: string, client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/settings/set_client/${uuid}`, client);
  }

  async deleteClient(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/settings/del_client/${uuid}`);
  }

  async toggleClient(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/freeradius/settings/toggle_client', uuid, enabled);
  }

  async searchUsers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/freeradius/settings/search_user', params);
  }

  async addUser(user: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/freeradius/settings/add_user', user);
  }

  async getUser(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/freeradius/settings/get_user/${uuid}` : '/api/freeradius/settings/get_user';
    return this.http.get(path);
  }

  async updateUser(uuid: string, user: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/settings/set_user/${uuid}`, user);
  }

  async deleteUser(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/settings/del_user/${uuid}`);
  }

  async toggleUser(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/freeradius/settings/toggle_user', uuid, enabled);
  }

  async testUser(username: string, password: string): Promise<ApiResponse<any>> {
    return this.http.post('/api/freeradius/service/test_user', { username, password });
  }
}
