import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class ClamavModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('clamav', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('clamav', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('clamav', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('clamav', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('clamav', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/clamav/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/clamav/general/set', config);
  }

  async updateDatabase(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/clamav/service/update');
  }

  async getDatabaseStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/clamav/service/database_status');
  }

  async scanPath(path: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/clamav/service/scan', { path });
  }

  async getScanResults(): Promise<ApiResponse<any>> {
    return this.http.get('/api/clamav/service/scan_results');
  }

  async getQuarantine(): Promise<ApiResponse<any>> {
    return this.http.get('/api/clamav/service/quarantine');
  }

  async deleteQuarantineFile(fileId: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/clamav/service/delete_quarantine/${fileId}`);
  }

  async restoreQuarantineFile(fileId: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/clamav/service/restore_quarantine/${fileId}`);
  }
}
