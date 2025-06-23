import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class NodeexporterModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('node_exporter', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('node_exporter', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('node_exporter', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('node_exporter', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('node_exporter', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/nodeexporter/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/nodeexporter/general/set', config);
  }

  async getMetrics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/nodeexporter/service/metrics');
  }
}
