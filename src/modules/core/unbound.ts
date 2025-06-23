import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class UnboundModule extends BaseModule {
  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/settings/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/settings/set', config);
  }

  async searchHostOverrides(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/unbound/settings/search_host_override', params);
  }

  async addHostOverride(override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/settings/add_host_override', override);
  }

  async getHostOverride(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/unbound/settings/get_host_override/${uuid}` : '/api/unbound/settings/get_host_override';
    return this.http.get(path);
  }

  async updateHostOverride(uuid: string, override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/set_host_override/${uuid}`, override);
  }

  async deleteHostOverride(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/del_host_override/${uuid}`);
  }

  async toggleHostOverride(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/unbound/settings/toggle_host_override', uuid, enabled);
  }

  async searchHostAliases(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/unbound/settings/search_host_alias', params);
  }

  async addHostAlias(alias: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/settings/add_host_alias', alias);
  }

  async getHostAlias(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/unbound/settings/get_host_alias/${uuid}` : '/api/unbound/settings/get_host_alias';
    return this.http.get(path);
  }

  async updateHostAlias(uuid: string, alias: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/set_host_alias/${uuid}`, alias);
  }

  async deleteHostAlias(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/del_host_alias/${uuid}`);
  }

  async toggleHostAlias(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/unbound/settings/toggle_host_alias', uuid, enabled);
  }

  async searchDomainOverrides(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/unbound/settings/search_domain_override', params);
  }

  async addDomainOverride(override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/settings/add_domain_override', override);
  }

  async getDomainOverride(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid
      ? `/api/unbound/settings/get_domain_override/${uuid}`
      : '/api/unbound/settings/get_domain_override';
    return this.http.get(path);
  }

  async updateDomainOverride(uuid: string, override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/set_domain_override/${uuid}`, override);
  }

  async deleteDomainOverride(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/del_domain_override/${uuid}`);
  }

  async toggleDomainOverride(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/unbound/settings/toggle_domain_override', uuid, enabled);
  }

  async searchForwards(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/unbound/settings/search_forward', params);
  }

  async addForward(forward: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/settings/add_forward', forward);
  }

  async getForward(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/unbound/settings/get_forward/${uuid}` : '/api/unbound/settings/get_forward';
    return this.http.get(path);
  }

  async updateForward(uuid: string, forward: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/set_forward/${uuid}`, forward);
  }

  async deleteForward(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/del_forward/${uuid}`);
  }

  async toggleForward(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/unbound/settings/toggle_forward', uuid, enabled);
  }

  async searchAccessLists(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/unbound/settings/search_acl', params);
  }

  async addAccessList(acl: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/settings/add_acl', acl);
  }

  async getAccessList(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/unbound/settings/get_acl/${uuid}` : '/api/unbound/settings/get_acl';
    return this.http.get(path);
  }

  async updateAccessList(uuid: string, acl: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/set_acl/${uuid}`, acl);
  }

  async deleteAccessList(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/del_acl/${uuid}`);
  }

  async toggleAccessList(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/unbound/settings/toggle_acl', uuid, enabled);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('unbound', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('unbound', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('unbound', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('unbound', 'reconfigure');
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('unbound', 'status');
  }

  async dnsLookup(hostname: string): Promise<ApiResponse<any>> {
    return this.http.post('/api/unbound/service/dns_lookup', { hostname });
  }

  async flushCache(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/service/flush_cache');
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/service/statistics');
  }

  async listLocalData(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/service/list_local_data');
  }

  async listInsecure(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/service/list_insecure');
  }
}
