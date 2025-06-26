import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class ProxyService extends BaseModule {
  /**
   * Execute downloadacls for proxy service
   */
  async downloadacls(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/service/downloadacls`, data);
  }

  /**
   * Execute fetchacls for proxy service
   */
  async fetchacls(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/service/fetchacls`, data);
  }

  /**
   * Execute reconfigure for proxy service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/proxy/proxy/service/reconfigure`);
  }

  /**
   * Execute refresh template for proxy service
   */
  async refreshTemplate(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/service/refresh_template`, data);
  }

  /**
   * Execute reset for proxy service
   */
  async reset(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/service/reset`, data);
  }

  /**
   * Get restart for proxy service
   */
  async restart(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/proxy/proxy/service/restart`);
  }

  /**
   * Get start for proxy service
   */
  async start(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/proxy/proxy/service/start`);
  }

  /**
   * Get status for proxy service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/proxy/proxy/service/status`);
  }

  /**
   * Execute stop for proxy service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/proxy/proxy/service/stop`);
  }
}

export class ProxySettings extends BaseModule {
  /**
   * Execute add p a c match for proxy settings
   */
  async addPACMatch(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/add_p_a_c_match`, data);
  }

  /**
   * Execute add p a c proxy for proxy settings
   */
  async addPACProxy(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/add_p_a_c_proxy`, data);
  }

  /**
   * Execute add p a c rule for proxy settings
   */
  async addPACRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/add_p_a_c_rule`, data);
  }

  /**
   * Execute add remote blacklist for proxy settings
   */
  async addRemoteBlacklist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/add_remote_blacklist`, data);
  }

  /**
   * Execute del p a c match for proxy settings
   */
  async delPACMatch(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/del_p_a_c_match/${uuid}`, data);
  }

  /**
   * Execute del p a c proxy for proxy settings
   */
  async delPACProxy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/del_p_a_c_proxy/${uuid}`, data);
  }

  /**
   * Execute del p a c rule for proxy settings
   */
  async delPACRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/del_p_a_c_rule/${uuid}`, data);
  }

  /**
   * Execute del remote blacklist for proxy settings
   */
  async delRemoteBlacklist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/del_remote_blacklist/${uuid}`, data);
  }

  /**
   * Execute fetch r b cron for proxy settings
   */
  async fetchRBCron(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/fetch_r_b_cron`, data);
  }

  /**
   * Get get for proxy settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/proxy/proxy/settings/get`);
  }

  /**
   * Get get p a c match for proxy settings
   */
  async getPACMatch(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/proxy/proxy/settings/get_p_a_c_match/${uuid}`);
  }

  /**
   * Get get p a c proxy for proxy settings
   */
  async getPACProxy(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/proxy/proxy/settings/get_p_a_c_proxy/${uuid}`);
  }

  /**
   * Get get p a c rule for proxy settings
   */
  async getPACRule(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/proxy/proxy/settings/get_p_a_c_rule/${uuid}`);
  }

  /**
   * Get get remote blacklist for proxy settings
   */
  async getRemoteBlacklist(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/proxy/proxy/settings/get_remote_blacklist/${uuid}`);
  }

  /**
   * Get search remote blacklists for proxy settings
   */
  async searchRemoteBlacklists(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/proxy/proxy/settings/search_remote_blacklists`);
  }

  /**
   * Execute set for proxy settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/set`, data);
  }

  /**
   * Execute set p a c match for proxy settings
   */
  async setPACMatch(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/set_p_a_c_match/${uuid}`, data);
  }

  /**
   * Execute set p a c proxy for proxy settings
   */
  async setPACProxy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/set_p_a_c_proxy/${uuid}`, data);
  }

  /**
   * Execute set p a c rule for proxy settings
   */
  async setPACRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/set_p_a_c_rule/${uuid}`, data);
  }

  /**
   * Execute set remote blacklist for proxy settings
   */
  async setRemoteBlacklist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/set_remote_blacklist/${uuid}`, data);
  }

  /**
   * Execute toggle p a c rule for proxy settings
   */
  async togglePACRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/toggle_p_a_c_rule/${uuid}`, data);
  }

  /**
   * Execute toggle remote blacklist for proxy settings
   */
  async toggleRemoteBlacklist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/settings/toggle_remote_blacklist/${uuid}`, data);
  }
}

export class ProxyTemplate extends BaseModule {
  /**
   * Get get for proxy template
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/proxy/proxy/template/get`);
  }

  /**
   * Execute reset for proxy template
   */
  async reset(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/template/reset`, data);
  }

  /**
   * Execute set for proxy template
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/template/set`, data);
  }
}

export class ProxyAcl extends BaseModule {
  /**
   * Execute add custom policy for proxy acl
   */
  async addCustomPolicy(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/acl/add_custom_policy`, data);
  }

  /**
   * Execute add policy for proxy acl
   */
  async addPolicy(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/acl/add_policy`, data);
  }

  /**
   * Execute apply for proxy acl
   */
  async apply(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/acl/apply`, data);
  }

  /**
   * Execute del custom policy for proxy acl
   */
  async delCustomPolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/acl/del_custom_policy/${uuid}`, data);
  }

  /**
   * Execute del policy for proxy acl
   */
  async delPolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/acl/del_policy/${uuid}`, data);
  }

  /**
   * Get get for proxy acl
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/proxy/proxy/acl/get`);
  }

  /**
   * Get get custom policy for proxy acl
   */
  async getCustomPolicy(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/proxy/proxy/acl/get_custom_policy/${uuid}`);
  }

  /**
   * Get get policy for proxy acl
   */
  async getPolicy(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/proxy/proxy/acl/get_policy/${uuid}`);
  }

  /**
   * Execute set for proxy acl
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/acl/set`, data);
  }

  /**
   * Execute set custom policy for proxy acl
   */
  async setCustomPolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/acl/set_custom_policy/${uuid}`, data);
  }

  /**
   * Execute set policy for proxy acl
   */
  async setPolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/acl/set_policy/${uuid}`, data);
  }

  /**
   * Execute test for proxy acl
   */
  async test(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/acl/test`, data);
  }

  /**
   * Execute toggle custom policy for proxy acl
   */
  async toggleCustomPolicy(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/acl/toggle_custom_policy/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle policy for proxy acl
   */
  async togglePolicy(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/proxy/proxy/acl/toggle_policy/${uuid}/${enabled}`, data);
  }
}

// Main module class
export class ProxyModule extends BaseModule {
  public readonly service: ProxyService;
  public readonly settings: ProxySettings;
  public readonly template: ProxyTemplate;
  public readonly acl: ProxyAcl;

  constructor(http: any) {
    super(http);
    this.service = new ProxyService(http);
    this.settings = new ProxySettings(http);
    this.template = new ProxyTemplate(http);
    this.acl = new ProxyAcl(http);
  }

}