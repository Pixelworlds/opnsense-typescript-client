import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class ProxyModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('squid', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('squid', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('squid', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('squid', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('squid', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/proxy/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/proxy/general/set', config);
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/proxy/service/statistics');
  }

  async getCache(): Promise<ApiResponse<any>> {
    return this.http.get('/api/proxy/service/cache');
  }

  async clearCache(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/proxy/service/clear_cache');
  }

  async getLogs(): Promise<ApiResponse<any>> {
    return this.http.get('/api/proxy/service/logs');
  }

  async downloadLogs(): Promise<ApiResponse<any>> {
    return this.http.get('/api/proxy/service/download_logs');
  }
}
