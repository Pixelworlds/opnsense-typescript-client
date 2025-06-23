import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class NrpeModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('nrpe', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('nrpe', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('nrpe', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('nrpe', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('nrpe', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/nrpe/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/nrpe/general/set', config);
  }

  async searchCommands(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/nrpe/settings/search_command', params);
  }

  async addCommand(command: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/nrpe/settings/add_command', command);
  }

  async getCommand(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/nrpe/settings/get_command/${uuid}` : '/api/nrpe/settings/get_command';
    return this.http.get(path);
  }

  async updateCommand(uuid: string, command: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nrpe/settings/set_command/${uuid}`, command);
  }

  async deleteCommand(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nrpe/settings/del_command/${uuid}`);
  }

  async toggleCommand(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/nrpe/settings/toggle_command', uuid, enabled);
  }

  async testCommand(command: string): Promise<ApiResponse<any>> {
    return this.http.post('/api/nrpe/service/test', { command });
  }
}
