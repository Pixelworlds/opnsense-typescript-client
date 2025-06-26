import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class DnsmasqLeases extends BaseModule {
  /**
   * Get search for dnsmasq leases
   */
  async search(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/dnsmasq/dnsmasq/leases/search`);
  }
}

export class DnsmasqService extends BaseModule {
  /**
   * Execute reconfigure for dnsmasq service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/service/reconfigure`, data);
  }

  /**
   * Execute restart for dnsmasq service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/service/restart`, data);
  }

  /**
   * Execute start for dnsmasq service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/service/start`, data);
  }

  /**
   * Get status for dnsmasq service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/dnsmasq/dnsmasq/service/status`);
  }

  /**
   * Execute stop for dnsmasq service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/service/stop`, data);
  }
}

export class DnsmasqSettings extends BaseModule {
  /**
   * Execute add boot for dnsmasq settings
   */
  async addBoot(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/add_boot`, data);
  }

  /**
   * Execute add domain for dnsmasq settings
   */
  async addDomain(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/add_domain`, data);
  }

  /**
   * Execute add host for dnsmasq settings
   */
  async addHost(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/add_host`, data);
  }

  /**
   * Execute add option for dnsmasq settings
   */
  async addOption(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/add_option`, data);
  }

  /**
   * Execute add range for dnsmasq settings
   */
  async addRange(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/add_range`, data);
  }

  /**
   * Execute add tag for dnsmasq settings
   */
  async addTag(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/add_tag`, data);
  }

  /**
   * Execute del boot for dnsmasq settings
   */
  async delBoot(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/del_boot/${uuid}`, data);
  }

  /**
   * Execute del domain for dnsmasq settings
   */
  async delDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/del_domain/${uuid}`, data);
  }

  /**
   * Execute del host for dnsmasq settings
   */
  async delHost(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/del_host/${uuid}`, data);
  }

  /**
   * Execute del option for dnsmasq settings
   */
  async delOption(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/del_option/${uuid}`, data);
  }

  /**
   * Execute del range for dnsmasq settings
   */
  async delRange(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/del_range/${uuid}`, data);
  }

  /**
   * Execute del tag for dnsmasq settings
   */
  async delTag(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/del_tag/${uuid}`, data);
  }

  /**
   * Get download hosts for dnsmasq settings
   */
  async downloadHosts(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnsmasq/dnsmasq/settings/download_hosts`);
  }

  /**
   * Get get for dnsmasq settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnsmasq/dnsmasq/settings/get`);
  }

  /**
   * Get get boot for dnsmasq settings
   */
  async getBoot(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnsmasq/dnsmasq/settings/get_boot/${uuid}`);
  }

  /**
   * Get get domain for dnsmasq settings
   */
  async getDomain(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnsmasq/dnsmasq/settings/get_domain/${uuid}`);
  }

  /**
   * Get get host for dnsmasq settings
   */
  async getHost(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnsmasq/dnsmasq/settings/get_host/${uuid}`);
  }

  /**
   * Get get option for dnsmasq settings
   */
  async getOption(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnsmasq/dnsmasq/settings/get_option/${uuid}`);
  }

  /**
   * Get get range for dnsmasq settings
   */
  async getRange(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnsmasq/dnsmasq/settings/get_range/${uuid}`);
  }

  /**
   * Get get tag for dnsmasq settings
   */
  async getTag(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnsmasq/dnsmasq/settings/get_tag/${uuid}`);
  }

  /**
   * Get get tag list for dnsmasq settings
   */
  async getTagList(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnsmasq/dnsmasq/settings/get_tag_list`);
  }

  /**
   * Execute set for dnsmasq settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/set`, data);
  }

  /**
   * Execute set boot for dnsmasq settings
   */
  async setBoot(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/set_boot/${uuid}`, data);
  }

  /**
   * Execute set domain for dnsmasq settings
   */
  async setDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/set_domain/${uuid}`, data);
  }

  /**
   * Execute set host for dnsmasq settings
   */
  async setHost(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/set_host/${uuid}`, data);
  }

  /**
   * Execute set option for dnsmasq settings
   */
  async setOption(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/set_option/${uuid}`, data);
  }

  /**
   * Execute set range for dnsmasq settings
   */
  async setRange(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/set_range/${uuid}`, data);
  }

  /**
   * Execute set tag for dnsmasq settings
   */
  async setTag(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/set_tag/${uuid}`, data);
  }

  /**
   * Execute upload hosts for dnsmasq settings
   */
  async uploadHosts(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnsmasq/dnsmasq/settings/upload_hosts`, data);
  }
}

// Main module class
export class DnsmasqModule extends BaseModule {
  public readonly leases: DnsmasqLeases;
  public readonly service: DnsmasqService;
  public readonly settings: DnsmasqSettings;

  constructor(http: any) {
    super(http);
    this.leases = new DnsmasqLeases(http);
    this.service = new DnsmasqService(http);
    this.settings = new DnsmasqSettings(http);
  }

}