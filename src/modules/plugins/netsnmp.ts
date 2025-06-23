import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class NetsnmpModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('netsnmp', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('netsnmp', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('netsnmp', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('netsnmp', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('netsnmp', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/netsnmp/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/netsnmp/general/set', config);
  }

  async getUsers(): Promise<ApiResponse<any>> {
    return this.http.get('/api/netsnmp/user/get');
  }

  async setUsers(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/netsnmp/user/set', config);
  }

  async searchUsers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/netsnmp/user/search_user', params);
  }

  async addUser(user: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/netsnmp/user/add_user', user);
  }

  async getUser(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/netsnmp/user/get_user/${uuid}` : '/api/netsnmp/user/get_user';
    return this.http.get(path);
  }

  async updateUser(uuid: string, user: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/netsnmp/user/set_user/${uuid}`, user);
  }

  async deleteUser(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/netsnmp/user/del_user/${uuid}`);
  }

  async toggleUser(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/netsnmp/user/toggle_user/${uuid}`);
  }
}
