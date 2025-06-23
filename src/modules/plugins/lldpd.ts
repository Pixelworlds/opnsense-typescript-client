import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class LldpdModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('lldpd', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('lldpd', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('lldpd', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('lldpd', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('lldpd', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/lldpd/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/lldpd/general/set', config);
  }

  async getNeighbors(): Promise<ApiResponse<any>> {
    return this.http.get('/api/lldpd/service/neighbors');
  }

  async getLocalChassis(): Promise<ApiResponse<any>> {
    return this.http.get('/api/lldpd/service/chassis');
  }
}
