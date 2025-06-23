import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class TorModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('tor', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tor', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tor', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tor', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tor', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tor/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/tor/general/set', config);
  }

  async getCircuits(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tor/service/circuits');
  }

  async newIdentity(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/tor/service/new_identity');
  }

  async getRelayInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tor/service/relay_info');
  }
}
