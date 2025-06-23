import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class DnsmasqModule extends BaseModule {
  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dnsmasq/settings/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnsmasq/settings/set', config);
  }

  async searchHostOverrides(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/dnsmasq/settings/search_host_override', params);
  }

  async addHostOverride(override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnsmasq/settings/add_host_override', override);
  }

  async getHostOverride(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/dnsmasq/settings/get_host_override/${uuid}` : '/api/dnsmasq/settings/get_host_override';
    return this.http.get(path);
  }

  async updateHostOverride(uuid: string, override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/set_host_override/${uuid}`, override);
  }

  async deleteHostOverride(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/del_host_override/${uuid}`);
  }

  async toggleHostOverride(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/dnsmasq/settings/toggle_host_override', uuid, enabled);
  }

  async searchDomainOverrides(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/dnsmasq/settings/search_domain_override', params);
  }

  async addDomainOverride(override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnsmasq/settings/add_domain_override', override);
  }

  async getDomainOverride(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid
      ? `/api/dnsmasq/settings/get_domain_override/${uuid}`
      : '/api/dnsmasq/settings/get_domain_override';
    return this.http.get(path);
  }

  async updateDomainOverride(uuid: string, override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/set_domain_override/${uuid}`, override);
  }

  async deleteDomainOverride(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/del_domain_override/${uuid}`);
  }

  async toggleDomainOverride(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/dnsmasq/settings/toggle_domain_override', uuid, enabled);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dnsmasq', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dnsmasq', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dnsmasq', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dnsmasq', 'reconfigure');
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('dnsmasq', 'status');
  }
}
