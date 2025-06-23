import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class SoftetherModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('softether', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('softether', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('softether', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('softether', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('softether', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/softether/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/softether/general/set', config);
  }

  async searchHubs(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/softether/settings/search_hub', params);
  }

  async addHub(hub: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/softether/settings/add_hub', hub);
  }

  async getHub(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/softether/settings/get_hub/${uuid}` : '/api/softether/settings/get_hub';
    return this.http.get(path);
  }

  async updateHub(uuid: string, hub: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/softether/settings/set_hub/${uuid}`, hub);
  }

  async deleteHub(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/softether/settings/del_hub/${uuid}`);
  }

  async toggleHub(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/softether/settings/toggle_hub', uuid, enabled);
  }

  async searchUsers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/softether/settings/search_user', params);
  }

  async addUser(user: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/softether/settings/add_user', user);
  }

  async getUser(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/softether/settings/get_user/${uuid}` : '/api/softether/settings/get_user';
    return this.http.get(path);
  }

  async updateUser(uuid: string, user: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/softether/settings/set_user/${uuid}`, user);
  }

  async deleteUser(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/softether/settings/del_user/${uuid}`);
  }

  async toggleUser(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/softether/settings/toggle_user', uuid, enabled);
  }

  async getSessions(): Promise<ApiResponse<any>> {
    return this.http.get('/api/softether/service/sessions');
  }

  async getConnections(): Promise<ApiResponse<any>> {
    return this.http.get('/api/softether/service/connections');
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/softether/service/statistics');
  }

  async disconnectSession(sessionId: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/softether/service/disconnect/${sessionId}`);
  }
}
