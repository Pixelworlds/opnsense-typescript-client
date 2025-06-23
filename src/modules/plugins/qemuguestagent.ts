import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class QemuguestagentModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('qemu-guest-agent', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('qemu-guest-agent', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('qemu-guest-agent', 'stop');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/qemuguestagent/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/qemuguestagent/general/set', config);
  }
}
