import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class TaygaModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('tayga', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tayga', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tayga', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tayga', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tayga', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tayga/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/tayga/general/set', config);
  }

  async searchMappings(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/tayga/settings/search_mapping', params);
  }

  async addMapping(mapping: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/tayga/settings/add_mapping', mapping);
  }

  async getMapping(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/tayga/settings/get_mapping/${uuid}` : '/api/tayga/settings/get_mapping';
    return this.http.get(path);
  }

  async updateMapping(uuid: string, mapping: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tayga/settings/set_mapping/${uuid}`, mapping);
  }

  async deleteMapping(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tayga/settings/del_mapping/${uuid}`);
  }

  async toggleMapping(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/tayga/settings/toggle_mapping', uuid, enabled);
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tayga/service/statistics');
  }

  async getTranslations(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tayga/service/translations');
  }

  async clearTranslations(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/tayga/service/clear_translations');
  }
}
