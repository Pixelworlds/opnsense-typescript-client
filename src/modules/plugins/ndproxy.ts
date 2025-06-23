import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class NdproxyModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('ndproxy', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ndproxy', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ndproxy', 'stop');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ndproxy/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ndproxy/general/set', config);
  }
}
