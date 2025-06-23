import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class NginxModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('nginx', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('nginx', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('nginx', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('nginx', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('nginx', 'reconfigure');
  }

  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/nginx/settings/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/nginx/settings/set', config);
  }

  async searchHttpServers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/nginx/settings/searchhttpserver', params);
  }

  async addHttpServer(server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/nginx/settings/addhttpserver', server);
  }

  async getHttpServer(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/nginx/settings/gethttpserver/${uuid}` : '/api/nginx/settings/gethttpserver';
    return this.http.get(path);
  }

  async updateHttpServer(uuid: string, server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/settings/sethttpserver/${uuid}`, server);
  }

  async deleteHttpServer(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/settings/delhttpserver/${uuid}`);
  }

  async searchLocations(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/nginx/settings/searchlocation', params);
  }

  async addLocation(location: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/nginx/settings/addlocation', location);
  }

  async getLocation(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/nginx/settings/getlocation/${uuid}` : '/api/nginx/settings/getlocation';
    return this.http.get(path);
  }

  async updateLocation(uuid: string, location: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/settings/setlocation/${uuid}`, location);
  }

  async deleteLocation(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/settings/dellocation/${uuid}`);
  }

  async searchUpstreams(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/nginx/settings/searchupstream', params);
  }

  async addUpstream(upstream: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/nginx/settings/addupstream', upstream);
  }

  async getUpstream(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/nginx/settings/getupstream/${uuid}` : '/api/nginx/settings/getupstream';
    return this.http.get(path);
  }

  async updateUpstream(uuid: string, upstream: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/settings/setupstream/${uuid}`, upstream);
  }

  async deleteUpstream(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/settings/delupstream/${uuid}`);
  }

  async getAccessLogs(
    uuid?: string,
    fileno?: number,
    page?: number,
    perPage?: number,
    query?: string
  ): Promise<ApiResponse<any>> {
    let path = '/api/nginx/logs/accesses';
    const pathParams = [uuid, fileno, page, perPage, query].filter(p => p !== undefined);
    if (pathParams.length > 0) {
      path += '/' + pathParams.join('/');
    }
    return this.http.get(path);
  }

  async getErrorLogs(
    uuid?: string,
    fileno?: number,
    page?: number,
    perPage?: number,
    query?: string
  ): Promise<ApiResponse<any>> {
    let path = '/api/nginx/logs/errors';
    const pathParams = [uuid, fileno, page, perPage, query].filter(p => p !== undefined);
    if (pathParams.length > 0) {
      path += '/' + pathParams.join('/');
    }
    return this.http.get(path);
  }

  async testConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/nginx/settings/testconfig');
  }

  async showConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/nginx/settings/showconfig');
  }

  async getVts(): Promise<ApiResponse<any>> {
    return this.http.get('/api/nginx/service/vts');
  }
}
