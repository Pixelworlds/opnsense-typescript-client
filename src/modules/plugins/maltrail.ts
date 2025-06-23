import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class MaltrailModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('maltrail', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('maltrail', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('maltrail', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('maltrail', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('maltrail', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/maltrail/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/maltrail/general/set', config);
  }

  async getTrails(): Promise<ApiResponse<any>> {
    return this.http.get('/api/maltrail/service/trails');
  }

  async getEvents(): Promise<ApiResponse<any>> {
    return this.http.get('/api/maltrail/service/events');
  }

  async updateTrails(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/maltrail/service/update');
  }
}
