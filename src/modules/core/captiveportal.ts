import type { ApiResponse, ApiResult, SearchResult, ServiceControl } from '../../types/common';
import { BaseModule } from '../base';

// Controller classes
export class CaptiveportalAccess extends BaseModule {
  /**
   * Get api for captiveportal access
   */
  async api(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/captiveportal/captiveportal/access/api`);
  }

  /**
   * Get logoff for captiveportal access
   */
  async logoff(zoneid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/captiveportal/captiveportal/access/logoff/${zoneid}`);
  }

  /**
   * Execute logon for captiveportal access
   */
  async logon(zoneid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/captiveportal/access/logon/${zoneid}`, data);
  }
}

export class CaptiveportalService extends BaseModule {
  /**
   * Execute del template for captiveportal service
   */
  async delTemplate(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/captiveportal/service/del_template/${uuid}`, data);
  }

  /**
   * Get get template for captiveportal service
   */
  async getTemplate(fileid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/captiveportal/captiveportal/service/get_template/${fileid}`);
  }

  /**
   * Execute reconfigure for captiveportal service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/captiveportal/captiveportal/service/reconfigure`, data);
  }

  /**
   * Execute save template for captiveportal service
   */
  async saveTemplate(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/captiveportal/service/save_template`, data);
  }

  /**
   * Get search templates for captiveportal service
   */
  async searchTemplates(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/captiveportal/captiveportal/service/search_templates`);
  }
}

export class CaptiveportalSession extends BaseModule {
  /**
   * Execute connect for captiveportal session
   */
  async connect(zoneid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/captiveportal/session/connect/${zoneid}`, data);
  }

  /**
   * Execute disconnect for captiveportal session
   */
  async disconnect(zoneid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/captiveportal/session/disconnect/${zoneid}`, data);
  }

  /**
   * Get list for captiveportal session
   */
  async list(zoneid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/captiveportal/captiveportal/session/list/${zoneid}`);
  }

  /**
   * Get search for captiveportal session
   */
  override async search<T = any>(
    path: string = '/api/captiveportal/captiveportal/session/search',
    searchParams: Record<string, any> = {}
  ): Promise<ApiResponse<T>> {
    return super.search<T>(path, searchParams);
  }

  /**
   * Get zones for captiveportal session
   */
  async zones(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/captiveportal/captiveportal/session/zones`);
  }
}

export class CaptiveportalSettings extends BaseModule {
  /**
   * Execute add zone for captiveportal settings
   */
  async addZone(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/captiveportal/settings/add_zone`, data);
  }

  /**
   * Execute del zone for captiveportal settings
   */
  async delZone(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/captiveportal/settings/del_zone/${uuid}`, data);
  }

  /**
   * Get get for captiveportal settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/captiveportal/captiveportal/settings/get`);
  }

  /**
   * Get get zone for captiveportal settings
   */
  async getZone(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/captiveportal/captiveportal/settings/get_zone/${uuid}`);
  }

  /**
   * Execute set for captiveportal settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/captiveportal/settings/set`, data);
  }

  /**
   * Execute set zone for captiveportal settings
   */
  async setZone(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/captiveportal/settings/set_zone/${uuid}`, data);
  }

  /**
   * Execute toggle zone for captiveportal settings
   */
  async toggleZone(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/captiveportal/settings/toggle_zone/${uuid}/${enabled}`, data);
  }
}

export class CaptiveportalVoucher extends BaseModule {
  /**
   * Execute drop expired vouchers for captiveportal voucher
   */
  async dropExpiredVouchers(
    provider: string,
    group: string,
    data?: Record<string, any>
  ): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/captiveportal/voucher/drop_expired_vouchers/${provider}/${group}`, data);
  }

  /**
   * Execute drop voucher group for captiveportal voucher
   */
  async dropVoucherGroup(provider: string, group: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/captiveportal/voucher/drop_voucher_group/${provider}/${group}`, data);
  }

  /**
   * Execute expire voucher for captiveportal voucher
   */
  async expireVoucher(provider: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/captiveportal/voucher/expire_voucher/${provider}`, data);
  }

  /**
   * Execute generate vouchers for captiveportal voucher
   */
  async generateVouchers(provider: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/captiveportal/voucher/generate_vouchers/${provider}`, data);
  }

  /**
   * Get list providers for captiveportal voucher
   */
  async listProviders(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/captiveportal/captiveportal/voucher/list_providers`);
  }

  /**
   * Get list voucher groups for captiveportal voucher
   */
  async listVoucherGroups(provider: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/captiveportal/captiveportal/voucher/list_voucher_groups/${provider}`);
  }

  /**
   * Get list vouchers for captiveportal voucher
   */
  async listVouchers(provider: string, group: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/captiveportal/captiveportal/voucher/list_vouchers/${provider}/${group}`);
  }
}

// Main module class
export class CaptiveportalModule extends BaseModule {
  public readonly access: CaptiveportalAccess;
  public readonly service: CaptiveportalService;
  public readonly session: CaptiveportalSession;
  public readonly settings: CaptiveportalSettings;
  public readonly voucher: CaptiveportalVoucher;

  constructor(http: any) {
    super(http);
    this.access = new CaptiveportalAccess(http);
    this.service = new CaptiveportalService(http);
    this.session = new CaptiveportalSession(http);
    this.settings = new CaptiveportalSettings(http);
    this.voucher = new CaptiveportalVoucher(http);
  }
}
