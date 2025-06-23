import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class MuninnodeModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('munin-node', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('munin-node', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('munin-node', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('munin-node', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('munin-node', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/muninnode/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/muninnode/general/set', config);
  }

  async getPlugins(): Promise<ApiResponse<any>> {
    return this.http.get('/api/muninnode/service/plugins');
  }

  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/muninnode/service/config');
  }
}
