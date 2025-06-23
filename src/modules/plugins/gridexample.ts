import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class GridexampleModule extends BaseModule {
  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/gridexample/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/gridexample/general/set', config);
  }
}
