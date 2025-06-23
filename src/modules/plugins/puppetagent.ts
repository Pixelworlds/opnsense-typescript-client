import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class PuppetagentModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('puppet', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('puppet', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('puppet', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('puppet', 'restart');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/puppetagent/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/puppetagent/general/set', config);
  }

  async runAgent(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/puppetagent/service/run');
  }

  async getLastRun(): Promise<ApiResponse<any>> {
    return this.http.get('/api/puppetagent/service/lastrun');
  }
}
