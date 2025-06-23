import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class ChronyModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('chrony', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('chrony', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('chrony', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('chrony', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('chrony', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/chrony/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/chrony/general/set', config);
  }

  async getSources(): Promise<ApiResponse<any>> {
    return this.http.get('/api/chrony/service/sources');
  }

  async getSourcesStats(): Promise<ApiResponse<any>> {
    return this.http.get('/api/chrony/service/sourcestats');
  }

  async getTracking(): Promise<ApiResponse<any>> {
    return this.http.get('/api/chrony/service/tracking');
  }

  async getActivity(): Promise<ApiResponse<any>> {
    return this.http.get('/api/chrony/service/activity');
  }

  async getClients(): Promise<ApiResponse<any>> {
    return this.http.get('/api/chrony/service/clients');
  }

  async getServerStats(): Promise<ApiResponse<any>> {
    return this.http.get('/api/chrony/service/serverstats');
  }
}
