import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class HwprobeModule extends BaseModule {
  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/hwprobe/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/hwprobe/general/set', config);
  }

  async getHardwareInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/hwprobe/service/info');
  }

  async runProbe(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/hwprobe/service/probe');
  }
}
