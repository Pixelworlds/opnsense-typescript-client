import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class UnboundDiagnostics extends BaseModule {
  /**
   * Get dumpcache for unbound diagnostics
   */
  async dumpcache(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/diagnostics/dumpcache`);
  }

  /**
   * Get dumpinfra for unbound diagnostics
   */
  async dumpinfra(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/diagnostics/dumpinfra`);
  }

  /**
   * Get listinsecure for unbound diagnostics
   */
  async listinsecure(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/diagnostics/listinsecure`);
  }

  /**
   * Get listlocaldata for unbound diagnostics
   */
  async listlocaldata(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/diagnostics/listlocaldata`);
  }

  /**
   * Get listlocalzones for unbound diagnostics
   */
  async listlocalzones(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/diagnostics/listlocalzones`);
  }

  /**
   * Get stats for unbound diagnostics
   */
  async stats(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/diagnostics/stats`);
  }
}

export class UnboundOverview extends BaseModule {
  /**
   * Get  rolling for unbound overview
   */
  async rolling(timeperiod: string, clients: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/overview/_rolling/${timeperiod}/${clients}`);
  }

  /**
   * Get is block list enabled for unbound overview
   */
  async isBlockListEnabled(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/overview/is_block_list_enabled`);
  }

  /**
   * Get is enabled for unbound overview
   */
  async isEnabled(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/overview/is_enabled`);
  }

  /**
   * Get search queries for unbound overview
   */
  async searchQueries(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/unbound/unbound/overview/search_queries`);
  }

  /**
   * Get totals for unbound overview
   */
  async totals(maximum: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/overview/totals/${maximum}`);
  }
}

export class UnboundService extends BaseModule {
  /**
   * Get dnsbl for unbound service
   */
  async dnsbl(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/service/dnsbl`);
  }

  /**
   * Execute reconfigure for unbound service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/unbound/unbound/service/reconfigure`, data);
  }

  /**
   * Get reconfigure general for unbound service
   */
  async reconfigureGeneral(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/service/reconfigure_general`);
  }

  /**
   * Execute restart for unbound service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/unbound/unbound/service/restart`, data);
  }

  /**
   * Execute start for unbound service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/unbound/unbound/service/start`, data);
  }

  /**
   * Get status for unbound service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/unbound/unbound/service/status`);
  }

  /**
   * Execute stop for unbound service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/unbound/unbound/service/stop`, data);
  }
}

export class UnboundSettings extends BaseModule {
  /**
   * Execute add acl for unbound settings
   */
  async addAcl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/add_acl`, data);
  }

  /**
   * Execute add forward for unbound settings
   */
  async addForward(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/add_forward`, data);
  }

  /**
   * Execute add host alias for unbound settings
   */
  async addHostAlias(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/add_host_alias`, data);
  }

  /**
   * Execute add host override for unbound settings
   */
  async addHostOverride(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/add_host_override`, data);
  }

  /**
   * Execute del acl for unbound settings
   */
  async delAcl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/del_acl/${uuid}`, data);
  }

  /**
   * Execute del forward for unbound settings
   */
  async delForward(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/del_forward/${uuid}`, data);
  }

  /**
   * Execute del host alias for unbound settings
   */
  async delHostAlias(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/del_host_alias/${uuid}`, data);
  }

  /**
   * Execute del host override for unbound settings
   */
  async delHostOverride(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/del_host_override/${uuid}`, data);
  }

  /**
   * Get get for unbound settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/settings/get`);
  }

  /**
   * Get get acl for unbound settings
   */
  async getAcl(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/settings/get_acl/${uuid}`);
  }

  /**
   * Get get forward for unbound settings
   */
  async getForward(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/settings/get_forward/${uuid}`);
  }

  /**
   * Get get host alias for unbound settings
   */
  async getHostAlias(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/settings/get_host_alias/${uuid}`);
  }

  /**
   * Get get host override for unbound settings
   */
  async getHostOverride(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/settings/get_host_override/${uuid}`);
  }

  /**
   * Get get nameservers for unbound settings
   */
  async getNameservers(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/unbound/unbound/settings/get_nameservers`);
  }

  /**
   * Execute set for unbound settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/set`, data);
  }

  /**
   * Execute set acl for unbound settings
   */
  async setAcl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/set_acl/${uuid}`, data);
  }

  /**
   * Execute set forward for unbound settings
   */
  async setForward(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/set_forward/${uuid}`, data);
  }

  /**
   * Execute set host alias for unbound settings
   */
  async setHostAlias(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/set_host_alias/${uuid}`, data);
  }

  /**
   * Execute set host override for unbound settings
   */
  async setHostOverride(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/set_host_override/${uuid}`, data);
  }

  /**
   * Execute toggle acl for unbound settings
   */
  async toggleAcl(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/toggle_acl/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle forward for unbound settings
   */
  async toggleForward(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/toggle_forward/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle host alias for unbound settings
   */
  async toggleHostAlias(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/toggle_host_alias/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle host override for unbound settings
   */
  async toggleHostOverride(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/toggle_host_override/${uuid}/${enabled}`, data);
  }

  /**
   * Execute update blocklist for unbound settings
   */
  async updateBlocklist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/unbound/unbound/settings/update_blocklist`, data);
  }
}

// Main module class
export class UnboundModule extends BaseModule {
  public readonly diagnostics: UnboundDiagnostics;
  public readonly overview: UnboundOverview;
  public readonly service: UnboundService;
  public readonly settings: UnboundSettings;

  constructor(http: any) {
    super(http);
    this.diagnostics = new UnboundDiagnostics(http);
    this.overview = new UnboundOverview(http);
    this.service = new UnboundService(http);
    this.settings = new UnboundSettings(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/unbound/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/unbound/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/unbound/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/unbound/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/unbound/service/reconfigure');
  }
}