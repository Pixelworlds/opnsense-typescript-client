import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class DiagnosticsModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('diagnostics', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('diagnostics', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('diagnostics', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('diagnostics', 'restart');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/diagnostics/general/set', config);
  }

  async runDiagnostic(type: string): Promise<ApiResponse<any>> {
    return this.http.post(`/api/diagnostics/service/run/${type}`);
  }

  async getResults(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/service/results');
  }

  async getSystemHealth(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/health');
  }

  async getNetworkInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/network/info');
  }

  async ping(host: string): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/network/ping', { host });
  }

  async traceroute(host: string): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/network/traceroute', { host });
  }
}
