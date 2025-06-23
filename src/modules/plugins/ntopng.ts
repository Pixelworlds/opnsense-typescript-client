import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class NtopngModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('ntopng', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ntopng', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ntopng', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ntopng', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ntopng', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ntopng/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ntopng/general/set', config);
  }

  async getInterfaces(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ntopng/service/interfaces');
  }

  async getFlows(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ntopng/service/flows');
  }

  async getHosts(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ntopng/service/hosts');
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ntopng/service/statistics');
  }
}
