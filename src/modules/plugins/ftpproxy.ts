import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class FtpproxyModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('ftpproxy', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ftpproxy', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ftpproxy', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ftpproxy', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ftpproxy', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ftpproxy/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ftpproxy/general/set', config);
  }
}
