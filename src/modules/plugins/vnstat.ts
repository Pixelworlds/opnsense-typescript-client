import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class VnstatModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('vnstat', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('vnstat', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('vnstat', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('vnstat', 'restart');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/vnstat/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/vnstat/general/set', config);
  }

  async getStatistics(interfaceName?: string): Promise<ApiResponse<any>> {
    const path = interfaceName ? `/api/vnstat/service/statistics/${interfaceName}` : '/api/vnstat/service/statistics';
    return this.http.get(path);
  }

  async getDatabases(): Promise<ApiResponse<any>> {
    return this.http.get('/api/vnstat/service/databases');
  }

  async resetDatabase(interfaceName: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/vnstat/service/reset/${interfaceName}`);
  }
}
