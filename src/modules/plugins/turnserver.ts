import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class TurnserverModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('turnserver', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('turnserver', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('turnserver', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('turnserver', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('turnserver', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/turnserver/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/turnserver/general/set', config);
  }

  async searchUsers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/turnserver/settings/search_user', params);
  }

  async addUser(user: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/turnserver/settings/add_user', user);
  }

  async getUser(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/turnserver/settings/get_user/${uuid}` : '/api/turnserver/settings/get_user';
    return this.http.get(path);
  }

  async updateUser(uuid: string, user: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/turnserver/settings/set_user/${uuid}`, user);
  }

  async deleteUser(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/turnserver/settings/del_user/${uuid}`);
  }

  async toggleUser(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/turnserver/settings/toggle_user', uuid, enabled);
  }

  async getSessions(): Promise<ApiResponse<any>> {
    return this.http.get('/api/turnserver/service/sessions');
  }

  async getConnections(): Promise<ApiResponse<any>> {
    return this.http.get('/api/turnserver/service/connections');
  }

  async disconnectSession(sessionId: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/turnserver/service/disconnect/${sessionId}`);
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/turnserver/service/statistics');
  }

  async getServerInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/turnserver/service/info');
  }

  async resetStatistics(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/turnserver/service/reset_stats');
  }
}
