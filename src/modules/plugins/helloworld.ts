import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class HelloworldModule extends BaseModule {
  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/helloworld/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/helloworld/general/set', config);
  }
}
