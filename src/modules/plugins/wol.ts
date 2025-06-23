import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class WolModule extends BaseModule {
  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wol/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wol/general/set', config);
  }

  async searchEntries(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/wol/settings/search_entry', params);
  }

  async addEntry(entry: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wol/settings/add_entry', entry);
  }

  async getEntry(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/wol/settings/get_entry/${uuid}` : '/api/wol/settings/get_entry';
    return this.http.get(path);
  }

  async updateEntry(uuid: string, entry: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wol/settings/set_entry/${uuid}`, entry);
  }

  async deleteEntry(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wol/settings/del_entry/${uuid}`);
  }

  async wakeup(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wol/service/wakeup/${uuid}`);
  }

  async wakeupMac(mac: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wol/service/wakeup_mac', { mac });
  }
}
