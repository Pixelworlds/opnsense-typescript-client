import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class DiagnosticsModule extends BaseModule {
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
}
