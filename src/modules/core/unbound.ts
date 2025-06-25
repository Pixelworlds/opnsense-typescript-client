import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class UnboundDiagnostics {
  constructor(private http: any) {}

  async dumpcache(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/diagnostics/dumpcache');
  }

  async dumpinfra(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/diagnostics/dumpinfra');
  }

  async listinsecure(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/diagnostics/listinsecure');
  }

  async listlocaldata(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/diagnostics/listlocaldata');
  }

  async listlocalzones(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/diagnostics/listlocalzones');
  }

  async stats(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/diagnostics/stats');
  }
}

export class UnboundOverview {
  constructor(private http: any) {}

  async rolling(timeperiod?: string, clients?: string): Promise<ApiResponse<any>> {
    const params = new URLSearchParams();
    if (timeperiod) params.append('timeperiod', timeperiod);
    if (clients) params.append('clients', clients);
    const query = params.toString();
    return this.http.get(`/api/unbound/overview/_rolling${query ? `?${query}` : ''}`);
  }

  async isBlockListEnabled(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/overview/is_block_list_enabled');
  }

  async isEnabled(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/overview/is_enabled');
  }

  async searchQueries(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/unbound/overview/search_queries');
    }
    return this.http.post('/api/unbound/overview/search_queries', params);
  }

  async totals(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/overview/totals');
  }
}

export class UnboundService {
  constructor(private http: any) {}

  async dnsbl(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/service/dnsbl');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/service/reconfigure');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/service/restart');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/service/start');
  }

  async status(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/service/status');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/service/stop');
  }
}

export class UnboundSettings {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/unbound/settings/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/settings/set', config);
  }

  // ACLs management
  async searchAcls(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/unbound/settings/search_acl');
    }
    return this.http.post('/api/unbound/settings/search_acl', params);
  }

  async addAcl(acl: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/settings/add_acl', acl);
  }

  async getAcl(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/unbound/settings/get_acl/${uuid}` : '/api/unbound/settings/get_acl';
    return this.http.get(path);
  }

  async setAcl(uuid: string, acl: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/set_acl/${uuid}`, acl);
  }

  async delAcl(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/del_acl/${uuid}`);
  }

  async toggleAcl(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/unbound/settings/toggle_acl/${uuid}/${enabled ? '1' : '0'}`
      : `/api/unbound/settings/toggle_acl/${uuid}`;
    return this.http.post(path);
  }

  // Forwards management
  async searchForwards(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/unbound/settings/search_forward');
    }
    return this.http.post('/api/unbound/settings/search_forward', params);
  }

  async addForward(forward: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/settings/add_forward', forward);
  }

  async getForward(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/unbound/settings/get_forward/${uuid}` : '/api/unbound/settings/get_forward';
    return this.http.get(path);
  }

  async setForward(uuid: string, forward: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/set_forward/${uuid}`, forward);
  }

  async delForward(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/del_forward/${uuid}`);
  }

  async toggleForward(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/unbound/settings/toggle_forward/${uuid}/${enabled ? '1' : '0'}`
      : `/api/unbound/settings/toggle_forward/${uuid}`;
    return this.http.post(path);
  }

  // Host aliases management
  async searchHostAliases(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/unbound/settings/search_host_alias');
    }
    return this.http.post('/api/unbound/settings/search_host_alias', params);
  }

  async addHostAlias(alias: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/settings/add_host_alias', alias);
  }

  async getHostAlias(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/unbound/settings/get_host_alias/${uuid}` : '/api/unbound/settings/get_host_alias';
    return this.http.get(path);
  }

  async setHostAlias(uuid: string, alias: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/set_host_alias/${uuid}`, alias);
  }

  async delHostAlias(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/del_host_alias/${uuid}`);
  }

  async toggleHostAlias(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/unbound/settings/toggle_host_alias/${uuid}/${enabled ? '1' : '0'}`
      : `/api/unbound/settings/toggle_host_alias/${uuid}`;
    return this.http.post(path);
  }

  // Host overrides management
  async searchHostOverrides(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/unbound/settings/search_host_override');
    }
    return this.http.post('/api/unbound/settings/search_host_override', params);
  }

  async addHostOverride(override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/settings/add_host_override', override);
  }

  async getHostOverride(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/unbound/settings/get_host_override/${uuid}` : '/api/unbound/settings/get_host_override';
    return this.http.get(path);
  }

  async setHostOverride(uuid: string, override: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/set_host_override/${uuid}`, override);
  }

  async delHostOverride(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/del_host_override/${uuid}`);
  }

  async toggleHostOverride(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/unbound/settings/toggle_host_override/${uuid}/${enabled ? '1' : '0'}`
      : `/api/unbound/settings/toggle_host_override/${uuid}`;
    return this.http.post(path);
  }

  // Nameservers management
  async searchNameservers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/unbound/settings/search_nameserver');
    }
    return this.http.post('/api/unbound/settings/search_nameserver', params);
  }

  async addNameserver(nameserver: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/unbound/settings/add_nameserver', nameserver);
  }

  async getNameserver(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/unbound/settings/get_nameserver/${uuid}` : '/api/unbound/settings/get_nameserver';
    return this.http.get(path);
  }

  async setNameserver(uuid: string, nameserver: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/set_nameserver/${uuid}`, nameserver);
  }

  async delNameserver(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/settings/del_nameserver/${uuid}`);
  }

  async toggleNameserver(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/unbound/settings/toggle_nameserver/${uuid}/${enabled ? '1' : '0'}`
      : `/api/unbound/settings/toggle_nameserver/${uuid}`;
    return this.http.post(path);
  }
}

export class UnboundModule extends BaseModule {
  public readonly diagnostics: UnboundDiagnostics;
  public readonly overview: UnboundOverview;
  public readonly service: UnboundService;
  public readonly settings: UnboundSettings;

  constructor(httpClient: any) {
    super(httpClient);
    this.diagnostics = new UnboundDiagnostics(this.http);
    this.overview = new UnboundOverview(this.http);
    this.service = new UnboundService(this.http);
    this.settings = new UnboundSettings(this.http);
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
    return this.settings.delHostOverride(uuid);
  }

  async toggleHostOverride(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleHostOverride(uuid, enabled);
  }

  async searchHostAliases(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.settings.searchHostAliases(params);
  }

  async addHostAlias(alias: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.addHostAlias(alias);
  }

  async getHostAlias(uuid?: string): Promise<ApiResponse<any>> {
    return this.settings.getHostAlias(uuid);
  }

  async updateHostAlias(uuid: string, alias: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.setHostAlias(uuid, alias);
  }

  async deleteHostAlias(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.delHostAlias(uuid);
  }

  async toggleHostAlias(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleHostAlias(uuid, enabled);
  }

  async searchForwards(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.settings.searchForwards(params);
  }

  async addForward(forward: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.addForward(forward);
  }

  async getForward(uuid?: string): Promise<ApiResponse<any>> {
    return this.settings.getForward(uuid);
  }

  async updateForward(uuid: string, forward: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.setForward(uuid, forward);
  }

  async deleteForward(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.delForward(uuid);
  }

  async toggleForward(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleForward(uuid, enabled);
  }

  async searchAccessLists(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.settings.searchAcls(params);
  }

  async addAccessList(acl: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.addAcl(acl);
  }

  async getAccessList(uuid?: string): Promise<ApiResponse<any>> {
    return this.settings.getAcl(uuid);
  }

  async updateAccessList(uuid: string, acl: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.setAcl(uuid, acl);
  }

  async deleteAccessList(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.delAcl(uuid);
  }

  async toggleAccessList(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleAcl(uuid, enabled);
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
    return this.service.status();
  }

  // New API-compliant methods
  async searchNameservers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.settings.searchNameservers(params);
  }

  async addNameserver(nameserver: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.addNameserver(nameserver);
  }

  async getNameserver(uuid?: string): Promise<ApiResponse<any>> {
    return this.settings.getNameserver(uuid);
  }

  async updateNameserver(uuid: string, nameserver: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.setNameserver(uuid, nameserver);
  }

  async deleteNameserver(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.delNameserver(uuid);
  }

  async toggleNameserver(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleNameserver(uuid, enabled);
  }

  // Diagnostics methods
  async dumpCache(): Promise<ApiResponse<any>> {
    return this.diagnostics.dumpcache();
  }

  async dumpInfra(): Promise<ApiResponse<any>> {
    return this.diagnostics.dumpinfra();
  }

  async listLocalData(): Promise<ApiResponse<any>> {
    return this.diagnostics.listlocaldata();
  }

  async listLocalZones(): Promise<ApiResponse<any>> {
    return this.diagnostics.listlocalzones();
  }

  async listInsecure(): Promise<ApiResponse<any>> {
    return this.diagnostics.listinsecure();
  }

  async getDiagnosticsStats(): Promise<ApiResponse<any>> {
    return this.diagnostics.stats();
  }

  // Overview methods  
  async getRolling(timeperiod?: string, clients?: string): Promise<ApiResponse<any>> {
    return this.overview.rolling(timeperiod, clients);
  }

  async isBlockListEnabled(): Promise<ApiResponse<any>> {
    return this.overview.isBlockListEnabled();
  }

  async isEnabled(): Promise<ApiResponse<any>> {
    return this.overview.isEnabled();
  }

  async searchQueries(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.overview.searchQueries(params);
  }

  async getTotals(): Promise<ApiResponse<any>> {
    return this.overview.totals();
  }

  async getDnsbl(): Promise<ApiResponse<any>> {
    return this.service.dnsbl();
  }

  // New convenience methods
  async getAllHostOverrides(): Promise<ApiResponse<any>> {
    return this.settings.searchHostOverrides();
  }

  async getAllHostAliases(): Promise<ApiResponse<any>> {
    return this.settings.searchHostAliases();
  }

  async getAllForwards(): Promise<ApiResponse<any>> {
    return this.settings.searchForwards();
  }

  async getAllAccessLists(): Promise<ApiResponse<any>> {
    return this.settings.searchAcls();
  }

  async getAllNameservers(): Promise<ApiResponse<any>> {
    return this.settings.searchNameservers();
  }

  async enableHostOverride(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleHostOverride(uuid, true);
  }

  async disableHostOverride(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleHostOverride(uuid, false);
  }

  async enableForward(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleForward(uuid, true);
  }

  async disableForward(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleForward(uuid, false);
  }

  async createHostOverride(
    hostname: string,
    domain: string,
    server: string,
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const override = {
      enabled: '1',
      hostname,
      domain,
      server,
      description: description || `Override for ${hostname}.${domain}`
    };
    return this.settings.addHostOverride(override);
  }

  async createForwardZone(
    domain: string,
    servers: string[],
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const forward = {
      enabled: '1',
      domain,
      server: servers.join(','),
      description: description || `Forward zone for ${domain}`
    };
    return this.settings.addForward(forward);
  }

  async getUnboundOverview(): Promise<{
    config: any;
    status: any;
    isEnabled: any;
    isBlockListEnabled: any;
    totals: any;
    hostOverrides: any;
    forwards: any;
    acls: any;
    diagnosticsStats: any;
    timestamp: string;
  }> {
    const [
      config,
      status,
      isEnabled,
      isBlockListEnabled,
      totals,
      hostOverrides,
      forwards,
      acls,
      diagnosticsStats
    ] = await Promise.allSettled([
      this.getConfig(),
      this.getStatus(),
      this.isEnabled(),
      this.isBlockListEnabled(),
      this.getTotals(),
      this.getAllHostOverrides(),
      this.getAllForwards(),
      this.getAllAccessLists(),
      this.getDiagnosticsStats()
    ]);

    return {
      config: config.status === 'fulfilled' ? config.value.data : null,
      status: status.status === 'fulfilled' ? status.value.data : null,
      isEnabled: isEnabled.status === 'fulfilled' ? isEnabled.value.data : null,
      isBlockListEnabled: isBlockListEnabled.status === 'fulfilled' ? isBlockListEnabled.value.data : null,
      totals: totals.status === 'fulfilled' ? totals.value.data : null,
      hostOverrides: hostOverrides.status === 'fulfilled' ? hostOverrides.value.data : null,
      forwards: forwards.status === 'fulfilled' ? forwards.value.data : null,
      acls: acls.status === 'fulfilled' ? acls.value.data : null,
      diagnosticsStats: diagnosticsStats.status === 'fulfilled' ? diagnosticsStats.value.data : null,
      timestamp: new Date().toISOString()
    };
  }
}