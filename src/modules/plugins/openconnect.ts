import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class OpenconnectModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('openconnect', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('openconnect', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('openconnect', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('openconnect', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('openconnect', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/openconnect/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/openconnect/general/set', config);
  }

  async searchClients(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/openconnect/settings/search_client', params);
  }

  async addClient(client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/openconnect/settings/add_client', client);
  }

  async getClient(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/openconnect/settings/get_client/${uuid}` : '/api/openconnect/settings/get_client';
    return this.http.get(path);
  }

  async updateClient(uuid: string, client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openconnect/settings/set_client/${uuid}`, client);
  }

  async deleteClient(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openconnect/settings/del_client/${uuid}`);
  }

  async toggleClient(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/openconnect/settings/toggle_client', uuid, enabled);
  }

  async getSessions(): Promise<ApiResponse<any>> {
    return this.http.get('/api/openconnect/service/sessions');
  }

  async disconnectSession(sessionId: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openconnect/service/disconnect/${sessionId}`);
  }
}
