import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class RspamdModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('rspamd', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('rspamd', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('rspamd', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('rspamd', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('rspamd', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/rspamd/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/rspamd/general/set', config);
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/rspamd/service/statistics');
  }

  async resetStatistics(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/rspamd/service/reset_statistics');
  }

  async scanMessage(message: string): Promise<ApiResponse<any>> {
    return this.http.post('/api/rspamd/service/scan', { message });
  }

  async getSymbols(): Promise<ApiResponse<any>> {
    return this.http.get('/api/rspamd/service/symbols');
  }

  async getActions(): Promise<ApiResponse<any>> {
    return this.http.get('/api/rspamd/service/actions');
  }

  async learnSpam(message: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/rspamd/service/learn_spam', { message });
  }

  async learnHam(message: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/rspamd/service/learn_ham', { message });
  }
}
