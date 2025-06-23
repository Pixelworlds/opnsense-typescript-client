import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class DnscryptproxyModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('dnscrypt', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dnscrypt', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dnscrypt', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dnscrypt', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dnscrypt', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dnscryptproxy/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnscryptproxy/general/set', config);
  }

  async getServers(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dnscryptproxy/service/servers');
  }

  async updateServers(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnscryptproxy/service/update_servers');
  }
}
