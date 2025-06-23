import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class IperfModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('iperf', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('iperf', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('iperf', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('iperf', 'restart');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/iperf/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/iperf/general/set', config);
  }

  async runTest(config: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/iperf/service/test', config);
  }

  async getResults(): Promise<ApiResponse<any>> {
    return this.http.get('/api/iperf/service/results');
  }
}
