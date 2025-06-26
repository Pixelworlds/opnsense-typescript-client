import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class BindAcl extends BaseModule {
  /**
   * Execute add acl for bind acl
   */
  async addAcl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/acl/add_acl`, data);
  }

  /**
   * Execute del acl for bind acl
   */
  async delAcl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/acl/del_acl/${uuid}`, data);
  }

  /**
   * Get get for bind acl
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/bind/bind/acl/get`);
  }

  /**
   * Get get acl for bind acl
   */
  async getAcl(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/bind/bind/acl/get_acl/${uuid}`);
  }

  /**
   * Execute set for bind acl
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/acl/set`, data);
  }

  /**
   * Execute set acl for bind acl
   */
  async setAcl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/acl/set_acl/${uuid}`, data);
  }

  /**
   * Execute toggle acl for bind acl
   */
  async toggleAcl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/acl/toggle_acl/${uuid}`, data);
  }
}

export class BindDnsbl extends BaseModule {
  /**
   * Get get for bind dnsbl
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/bind/bind/dnsbl/get`);
  }

  /**
   * Execute set for bind dnsbl
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/dnsbl/set`, data);
  }
}

export class BindDomain extends BaseModule {
  /**
   * Execute add primary domain for bind domain
   */
  async addPrimaryDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/domain/add_primary_domain/${uuid}`, data);
  }

  /**
   * Execute add secondary domain for bind domain
   */
  async addSecondaryDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/domain/add_secondary_domain/${uuid}`, data);
  }

  /**
   * Execute del domain for bind domain
   */
  async delDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/domain/del_domain/${uuid}`, data);
  }

  /**
   * Get get for bind domain
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/bind/bind/domain/get`);
  }

  /**
   * Get get domain for bind domain
   */
  async getDomain(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/bind/bind/domain/get_domain/${uuid}`);
  }

  /**
   * Get search master domain for bind domain
   */
  async searchMasterDomain(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/bind/bind/domain/search_master_domain`);
  }

  /**
   * Get search slave domain for bind domain
   */
  async searchSlaveDomain(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/bind/bind/domain/search_slave_domain`);
  }

  /**
   * Execute set for bind domain
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/domain/set`, data);
  }

  /**
   * Execute set domain for bind domain
   */
  async setDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/domain/set_domain/${uuid}`, data);
  }

  /**
   * Execute toggle domain for bind domain
   */
  async toggleDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/domain/toggle_domain/${uuid}`, data);
  }
}

export class BindGeneral extends BaseModule {
  /**
   * Get get for bind general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/bind/bind/general/get`);
  }

  /**
   * Execute set for bind general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/general/set`, data);
  }

  /**
   * Get zoneshow for bind general
   */
  async zoneshow(zonename: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/bind/bind/general/zoneshow/${zonename}`);
  }

  /**
   * Get zonetest for bind general
   */
  async zonetest(zonename: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/bind/bind/general/zonetest/${zonename}`);
  }
}

export class BindRecord extends BaseModule {
  /**
   * Execute add record for bind record
   */
  async addRecord(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/record/add_record`, data);
  }

  /**
   * Execute del record for bind record
   */
  async delRecord(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/record/del_record/${uuid}`, data);
  }

  /**
   * Get get for bind record
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/bind/bind/record/get`);
  }

  /**
   * Get get record for bind record
   */
  async getRecord(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/bind/bind/record/get_record/${uuid}`);
  }

  /**
   * Execute set for bind record
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/record/set`, data);
  }

  /**
   * Execute set record for bind record
   */
  async setRecord(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/record/set_record/${uuid}`, data);
  }

  /**
   * Execute toggle record for bind record
   */
  async toggleRecord(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/bind/record/toggle_record/${uuid}`, data);
  }
}

export class BindService extends BaseModule {
  /**
   * Get dnsbl for bind service
   */
  async dnsbl(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/bind/bind/service/dnsbl`);
  }

  /**
   * Execute reconfigure for bind service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/bind/bind/service/reconfigure`);
  }

  /**
   * Execute restart for bind service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/bind/bind/service/restart`);
  }

  /**
   * Execute start for bind service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/bind/bind/service/start`);
  }

  /**
   * Get status for bind service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/bind/bind/service/status`);
  }

  /**
   * Execute stop for bind service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/bind/bind/service/stop`);
  }
}

// Main module class
export class BindModule extends BaseModule {
  public readonly acl: BindAcl;
  public readonly dnsbl: BindDnsbl;
  public readonly domain: BindDomain;
  public readonly general: BindGeneral;
  public readonly record: BindRecord;
  public readonly service: BindService;

  constructor(http: any) {
    super(http);
    this.acl = new BindAcl(http);
    this.dnsbl = new BindDnsbl(http);
    this.domain = new BindDomain(http);
    this.general = new BindGeneral(http);
    this.record = new BindRecord(http);
    this.service = new BindService(http);
  }

}