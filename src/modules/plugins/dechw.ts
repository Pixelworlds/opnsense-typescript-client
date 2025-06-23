import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class DechwModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('dechw', 'status');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dechw/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dechw/general/set', config);
  }

  async getHardwareInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dechw/service/info');
  }
}
