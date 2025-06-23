import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class ProxyssoModule extends BaseModule {
  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/proxysso/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/proxysso/general/set', config);
  }

  async getAuthentication(): Promise<ApiResponse<any>> {
    return this.http.get('/api/proxysso/authentication/get');
  }

  async setAuthentication(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/proxysso/authentication/set', config);
  }
}
