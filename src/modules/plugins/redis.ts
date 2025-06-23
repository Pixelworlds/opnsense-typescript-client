import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class RedisModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('redis', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('redis', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('redis', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('redis', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('redis', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/redis/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/redis/general/set', config);
  }

  async getInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/redis/service/info');
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/redis/service/statistics');
  }

  async getMemoryUsage(): Promise<ApiResponse<any>> {
    return this.http.get('/api/redis/service/memory');
  }

  async getClients(): Promise<ApiResponse<any>> {
    return this.http.get('/api/redis/service/clients');
  }

  async flushDatabase(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/redis/service/flush_db');
  }

  async flushAll(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/redis/service/flush_all');
  }

  async saveDatabase(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/redis/service/save');
  }

  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/redis/service/config');
  }

  async setConfigValue(parameter: string, value: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/redis/service/config_set', { parameter, value });
  }
}
