import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class CollectdModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('collectd', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('collectd', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('collectd', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('collectd', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('collectd', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/collectd/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/collectd/general/set', config);
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/collectd/service/statistics');
  }

  async getValues(): Promise<ApiResponse<any>> {
    return this.http.get('/api/collectd/service/values');
  }
}
