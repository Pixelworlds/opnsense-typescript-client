import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class DyndnsModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('dyndns', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dyndns', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dyndns', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dyndns', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dyndns', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dyndns/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dyndns/general/set', config);
  }

  async searchAccounts(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/dyndns/settings/search_account', params);
  }

  async addAccount(account: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dyndns/settings/add_account', account);
  }

  async getAccount(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/dyndns/settings/get_account/${uuid}` : '/api/dyndns/settings/get_account';
    return this.http.get(path);
  }

  async updateAccount(uuid: string, account: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dyndns/settings/set_account/${uuid}`, account);
  }

  async deleteAccount(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dyndns/settings/del_account/${uuid}`);
  }

  async toggleAccount(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/dyndns/settings/toggle_account', uuid, enabled);
  }

  async forceUpdate(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dyndns/service/force_update/${uuid}`);
  }
}
