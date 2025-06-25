import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class DnsmasqLeases {
  constructor(private http: any) {}

  async search(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dnsmasq/leases/search');
  }
}

export class DnsmasqService {
  constructor(private http: any) {}

  async getStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dnsmasq/service/status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnsmasq/service/start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnsmasq/service/stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnsmasq/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnsmasq/service/reconfigure');
  }
}

export class DnsmasqSettings {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dnsmasq/settings/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnsmasq/settings/set', config);
  }

  // Host management
  async searchHosts(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/dnsmasq/settings/search_host');
    }
    return this.http.post('/api/dnsmasq/settings/search_host', params);
  }

  async addHost(host: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnsmasq/settings/add_host', host);
  }

  async getHost(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/dnsmasq/settings/get_host/${uuid}` : '/api/dnsmasq/settings/get_host';
    return this.http.get(path);
  }

  async setHost(uuid: string, host: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/set_host/${uuid}`, host);
  }

  async deleteHost(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/del_host/${uuid}`);
  }

  async toggleHost(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/dnsmasq/settings/toggle_host/${uuid}/${enabled ? '1' : '0'}`
        : `/api/dnsmasq/settings/toggle_host/${uuid}`;
    return this.http.post(path);
  }

  // Domain management
  async searchDomains(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/dnsmasq/settings/search_domain');
    }
    return this.http.post('/api/dnsmasq/settings/search_domain', params);
  }

  async addDomain(domain: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnsmasq/settings/add_domain', domain);
  }

  async getDomain(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/dnsmasq/settings/get_domain/${uuid}` : '/api/dnsmasq/settings/get_domain';
    return this.http.get(path);
  }

  async setDomain(uuid: string, domain: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/set_domain/${uuid}`, domain);
  }

  async deleteDomain(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/del_domain/${uuid}`);
  }

  async toggleDomain(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/dnsmasq/settings/toggle_domain/${uuid}/${enabled ? '1' : '0'}`
        : `/api/dnsmasq/settings/toggle_domain/${uuid}`;
    return this.http.post(path);
  }

  // Boot management
  async searchBoots(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/dnsmasq/settings/search_boot');
    }
    return this.http.post('/api/dnsmasq/settings/search_boot', params);
  }

  async addBoot(boot: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnsmasq/settings/add_boot', boot);
  }

  async getBoot(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/dnsmasq/settings/get_boot/${uuid}` : '/api/dnsmasq/settings/get_boot';
    return this.http.get(path);
  }

  async setBoot(uuid: string, boot: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/set_boot/${uuid}`, boot);
  }

  async deleteBoot(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/del_boot/${uuid}`);
  }

  // Option management
  async searchOptions(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/dnsmasq/settings/search_option');
    }
    return this.http.post('/api/dnsmasq/settings/search_option', params);
  }

  async addOption(option: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnsmasq/settings/add_option', option);
  }

  async getOption(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/dnsmasq/settings/get_option/${uuid}` : '/api/dnsmasq/settings/get_option';
    return this.http.get(path);
  }

  async setOption(uuid: string, option: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/set_option/${uuid}`, option);
  }

  async deleteOption(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/del_option/${uuid}`);
  }

  // Range management
  async searchRanges(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/dnsmasq/settings/search_range');
    }
    return this.http.post('/api/dnsmasq/settings/search_range', params);
  }

  async addRange(range: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnsmasq/settings/add_range', range);
  }

  async getRange(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/dnsmasq/settings/get_range/${uuid}` : '/api/dnsmasq/settings/get_range';
    return this.http.get(path);
  }

  async setRange(uuid: string, range: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/set_range/${uuid}`, range);
  }

  async deleteRange(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/del_range/${uuid}`);
  }

  // Tag management
  async searchTags(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/dnsmasq/settings/search_tag');
    }
    return this.http.post('/api/dnsmasq/settings/search_tag', params);
  }

  async addTag(tag: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnsmasq/settings/add_tag', tag);
  }

  async getTag(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/dnsmasq/settings/get_tag/${uuid}` : '/api/dnsmasq/settings/get_tag';
    return this.http.get(path);
  }

  async setTag(uuid: string, tag: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/set_tag/${uuid}`, tag);
  }

  async deleteTag(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/settings/del_tag/${uuid}`);
  }

  // Hosts file management
  async downloadHosts(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dnsmasq/settings/download_hosts');
  }

  async uploadHosts(hostsData: any): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dnsmasq/settings/upload_hosts', hostsData);
  }

  // Legacy host/domain override methods for backward compatibility
  async searchHostOverrides(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.searchHosts(params);
  }

  async addHostOverride(override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.addHost(override);
  }

  async getHostOverride(uuid?: string): Promise<ApiResponse<any>> {
    return this.getHost(uuid);
  }

  async setHostOverride(uuid: string, override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.setHost(uuid, override);
  }

  async deleteHostOverride(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.deleteHost(uuid);
  }

  async toggleHostOverride(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggleHost(uuid, enabled);
  }

  async searchDomainOverrides(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.searchDomains(params);
  }

  async addDomainOverride(override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.addDomain(override);
  }

  async getDomainOverride(uuid?: string): Promise<ApiResponse<any>> {
    return this.getDomain(uuid);
  }

  async setDomainOverride(uuid: string, override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.setDomain(uuid, override);
  }

  async deleteDomainOverride(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.deleteDomain(uuid);
  }

  async toggleDomainOverride(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggleDomain(uuid, enabled);
  }
}

export class DnsmasqModule extends BaseModule {
  public readonly leases: DnsmasqLeases;
  public readonly service: DnsmasqService;
  public readonly settings: DnsmasqSettings;

  constructor(httpClient: any) {
    super(httpClient);
    this.leases = new DnsmasqLeases(this.http);
    this.service = new DnsmasqService(this.http);
    this.settings = new DnsmasqSettings(this.http);
  }

  // Legacy methods for backward compatibility
  async getConfig(): Promise<ApiResponse<any>> {
    return this.settings.get();
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.set(config);
  }

  async searchHostOverrides(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.settings.searchHostOverrides(params);
  }

  async addHostOverride(override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.addHostOverride(override);
  }

  async getHostOverride(uuid?: string): Promise<ApiResponse<any>> {
    return this.settings.getHostOverride(uuid);
  }

  async updateHostOverride(uuid: string, override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.setHostOverride(uuid, override);
  }

  async deleteHostOverride(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.deleteHostOverride(uuid);
  }

  async toggleHostOverride(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleHostOverride(uuid, enabled);
  }

  async searchDomainOverrides(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.settings.searchDomainOverrides(params);
  }

  async addDomainOverride(override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.addDomainOverride(override);
  }

  async getDomainOverride(uuid?: string): Promise<ApiResponse<any>> {
    return this.settings.getDomainOverride(uuid);
  }

  async updateDomainOverride(uuid: string, override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.setDomainOverride(uuid, override);
  }

  async deleteDomainOverride(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.deleteDomainOverride(uuid);
  }

  async toggleDomainOverride(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleDomainOverride(uuid, enabled);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.service.start();
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.service.stop();
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.service.restart();
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.service.reconfigure();
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.service.getStatus();
  }

  // New convenience methods
  async searchLeases(): Promise<ApiResponse<any>> {
    return this.leases.search();
  }

  async getAllHosts(): Promise<ApiResponse<any>> {
    return this.settings.searchHosts();
  }

  async getAllDomains(): Promise<ApiResponse<any>> {
    return this.settings.searchDomains();
  }

  async getAllRanges(): Promise<ApiResponse<any>> {
    return this.settings.searchRanges();
  }

  async getAllOptions(): Promise<ApiResponse<any>> {
    return this.settings.searchOptions();
  }

  async getAllTags(): Promise<ApiResponse<any>> {
    return this.settings.searchTags();
  }

  async getAllBoots(): Promise<ApiResponse<any>> {
    return this.settings.searchBoots();
  }

  async createHostRecord(hostname: string, ip: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const host = {
      enabled: '1',
      hostname,
      rr: 'A',
      ip,
      descr: description || `Host record for ${hostname}`,
    };
    return this.settings.addHost(host);
  }

  async createDomainForward(domain: string, server: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const domainForward = {
      enabled: '1',
      domain,
      server,
      descr: description || `Forward ${domain} to ${server}`,
    };
    return this.settings.addDomain(domainForward);
  }

  async createDhcpRange(
    interface_name: string,
    start: string,
    end: string,
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const range = {
      enabled: '1',
      interface: interface_name,
      start,
      end,
      descr: description || `DHCP range ${start}-${end} on ${interface_name}`,
    };
    return this.settings.addRange(range);
  }

  async enableHost(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleHost(uuid, true);
  }

  async disableHost(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleHost(uuid, false);
  }

  async enableDomain(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleDomain(uuid, true);
  }

  async disableDomain(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleDomain(uuid, false);
  }

  async getServiceInfo(): Promise<{
    status: any;
    leases: any;
    hosts: any;
    domains: any;
    ranges: any;
    config: any;
    timestamp: string;
  }> {
    const [status, leases, hosts, domains, ranges, config] = await Promise.allSettled([
      this.getStatus(),
      this.searchLeases(),
      this.getAllHosts(),
      this.getAllDomains(),
      this.getAllRanges(),
      this.getConfig(),
    ]);

    return {
      status: status.status === 'fulfilled' ? status.value.data : null,
      leases: leases.status === 'fulfilled' ? leases.value.data : null,
      hosts: hosts.status === 'fulfilled' ? hosts.value.data : null,
      domains: domains.status === 'fulfilled' ? domains.value.data : null,
      ranges: ranges.status === 'fulfilled' ? ranges.value.data : null,
      config: config.status === 'fulfilled' ? config.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }
}
