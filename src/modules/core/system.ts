import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class SystemModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/system/status');
  }

  async reboot(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/system/reboot');
  }

  async halt(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/system/halt');
  }

  async dismissStatus(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/system/dismiss_status');
  }
}
