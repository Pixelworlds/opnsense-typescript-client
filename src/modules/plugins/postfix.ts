import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class PostfixModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('postfix', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('postfix', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('postfix', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('postfix', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('postfix', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/postfix/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/postfix/general/set', config);
  }

  async searchDomains(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/postfix/settings/search_domain', params);
  }

  async addDomain(domain: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/postfix/settings/add_domain', domain);
  }

  async getDomain(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/postfix/settings/get_domain/${uuid}` : '/api/postfix/settings/get_domain';
    return this.http.get(path);
  }

  async updateDomain(uuid: string, domain: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/settings/set_domain/${uuid}`, domain);
  }

  async deleteDomain(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/settings/del_domain/${uuid}`);
  }

  async getQueue(): Promise<ApiResponse<any>> {
    return this.http.get('/api/postfix/service/queue');
  }

  async flushQueue(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/postfix/service/flush');
  }

  async getLogs(): Promise<ApiResponse<any>> {
    return this.http.get('/api/postfix/service/logs');
  }
}
