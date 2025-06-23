import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class CaddyModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('caddy', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('caddy', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('caddy', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('caddy', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('caddy', 'reconfigure');
  }

  async validate(): Promise<ApiResponse<any>> {
    return this.http.get('/api/caddy/service/validate');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/caddy/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/caddy/general/set', config);
  }

  async searchReverseProxies(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/caddy/reverse_proxy/search_reverse_proxy', params);
  }

  async addReverseProxy(proxy: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/caddy/reverse_proxy/add_reverse_proxy', proxy);
  }

  async getReverseProxy(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid
      ? `/api/caddy/reverse_proxy/get_reverse_proxy/${uuid}`
      : '/api/caddy/reverse_proxy/get_reverse_proxy';
    return this.http.get(path);
  }

  async updateReverseProxy(uuid: string, proxy: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/reverse_proxy/set_reverse_proxy/${uuid}`, proxy);
  }

  async deleteReverseProxy(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/reverse_proxy/del_reverse_proxy/${uuid}`);
  }

  async toggleReverseProxy(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/caddy/reverse_proxy/toggle_reverse_proxy', uuid, enabled);
  }

  async searchSubdomains(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/caddy/reverse_proxy/search_subdomain', params);
  }

  async addSubdomain(subdomain: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/caddy/reverse_proxy/add_subdomain', subdomain);
  }

  async getSubdomain(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/caddy/reverse_proxy/get_subdomain/${uuid}` : '/api/caddy/reverse_proxy/get_subdomain';
    return this.http.get(path);
  }

  async updateSubdomain(uuid: string, subdomain: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/reverse_proxy/set_subdomain/${uuid}`, subdomain);
  }

  async deleteSubdomain(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/reverse_proxy/del_subdomain/${uuid}`);
  }

  async toggleSubdomain(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/caddy/reverse_proxy/toggle_subdomain', uuid, enabled);
  }

  async searchHandles(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/caddy/reverse_proxy/search_handle', params);
  }

  async addHandle(handle: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/caddy/reverse_proxy/add_handle', handle);
  }

  async getHandle(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/caddy/reverse_proxy/get_handle/${uuid}` : '/api/caddy/reverse_proxy/get_handle';
    return this.http.get(path);
  }

  async updateHandle(uuid: string, handle: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/reverse_proxy/set_handle/${uuid}`, handle);
  }

  async deleteHandle(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/reverse_proxy/del_handle/${uuid}`);
  }

  async toggleHandle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/caddy/reverse_proxy/toggle_handle', uuid, enabled);
  }

  async searchAccessLists(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/caddy/reverse_proxy/search_access_list', params);
  }

  async addAccessList(accessList: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/caddy/reverse_proxy/add_access_list', accessList);
  }

  async getAccessList(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/caddy/reverse_proxy/get_access_list/${uuid}` : '/api/caddy/reverse_proxy/get_access_list';
    return this.http.get(path);
  }

  async updateAccessList(uuid: string, accessList: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/reverse_proxy/set_access_list/${uuid}`, accessList);
  }

  async deleteAccessList(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/reverse_proxy/del_access_list/${uuid}`);
  }

  async searchBasicAuth(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/caddy/reverse_proxy/search_basic_auth', params);
  }

  async addBasicAuth(basicAuth: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/caddy/reverse_proxy/add_basic_auth', basicAuth);
  }

  async getBasicAuth(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/caddy/reverse_proxy/get_basic_auth/${uuid}` : '/api/caddy/reverse_proxy/get_basic_auth';
    return this.http.get(path);
  }

  async updateBasicAuth(uuid: string, basicAuth: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/reverse_proxy/set_basic_auth/${uuid}`, basicAuth);
  }

  async deleteBasicAuth(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/reverse_proxy/del_basic_auth/${uuid}`);
  }

  async searchHeaders(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/caddy/reverse_proxy/search_header', params);
  }

  async addHeader(header: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/caddy/reverse_proxy/add_header', header);
  }

  async getHeader(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/caddy/reverse_proxy/get_header/${uuid}` : '/api/caddy/reverse_proxy/get_header';
    return this.http.get(path);
  }

  async updateHeader(uuid: string, header: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/reverse_proxy/set_header/${uuid}`, header);
  }

  async deleteHeader(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/reverse_proxy/del_header/${uuid}`);
  }

  async searchLayer4(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/caddy/reverse_proxy/search_layer4', params);
  }

  async addLayer4(layer4: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/caddy/reverse_proxy/add_layer4', layer4);
  }

  async getLayer4(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/caddy/reverse_proxy/get_layer4/${uuid}` : '/api/caddy/reverse_proxy/get_layer4';
    return this.http.get(path);
  }

  async updateLayer4(uuid: string, layer4: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/reverse_proxy/set_layer4/${uuid}`, layer4);
  }

  async deleteLayer4(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/reverse_proxy/del_layer4/${uuid}`);
  }

  async toggleLayer4(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/caddy/reverse_proxy/toggle_layer4', uuid, enabled);
  }

  async getCaddyfile(): Promise<ApiResponse<any>> {
    return this.http.get('/api/caddy/diagnostics/caddyfile');
  }

  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/caddy/diagnostics/config');
  }

  async getDiagnostics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/caddy/diagnostics/get');
  }

  async setDiagnostics(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/caddy/diagnostics/set', config);
  }

  async getAllReverseDomains(): Promise<ApiResponse<any>> {
    return this.http.get('/api/caddy/reverse_proxy/get_all_reverse_domains');
  }
}
