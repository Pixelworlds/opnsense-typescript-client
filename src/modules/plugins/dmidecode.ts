import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class DmidecodeModule extends BaseModule {
  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dmidecode/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dmidecode/general/set', config);
  }

  async getHardwareInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dmidecode/service/info');
  }

  async getBiosInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dmidecode/service/bios');
  }

  async getSystemInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dmidecode/service/system');
  }
}
