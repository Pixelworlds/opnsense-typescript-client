import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class SiproxydModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('siproxyd', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('siproxyd', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('siproxyd', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('siproxyd', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('siproxyd', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/siproxyd/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/siproxyd/general/set', config);
  }

  async searchUsers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/siproxyd/settings/search_user', params);
  }

  async addUser(user: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/siproxyd/settings/add_user', user);
  }

  async getUser(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/siproxyd/settings/get_user/${uuid}` : '/api/siproxyd/settings/get_user';
    return this.http.get(path);
  }

  async updateUser(uuid: string, user: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/siproxyd/settings/set_user/${uuid}`, user);
  }

  async deleteUser(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/siproxyd/settings/del_user/${uuid}`);
  }

  async toggleUser(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/siproxyd/settings/toggle_user', uuid, enabled);
  }

  async getRegistrations(): Promise<ApiResponse<any>> {
    return this.http.get('/api/siproxyd/service/registrations');
  }

  async getActiveCalls(): Promise<ApiResponse<any>> {
    return this.http.get('/api/siproxyd/service/active_calls');
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/siproxyd/service/statistics');
  }
}
