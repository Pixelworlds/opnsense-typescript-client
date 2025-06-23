import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class MdnsrepeaterModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('mdnsrepeater', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('mdnsrepeater', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('mdnsrepeater', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('mdnsrepeater', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('mdnsrepeater', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/mdnsrepeater/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/mdnsrepeater/general/set', config);
  }
}
