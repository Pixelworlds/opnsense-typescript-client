import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class TrustCa extends BaseModule {
  /**
   * Get ca info for trust ca
   */
  async caInfo(caref: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/trust/ca/ca_info/${caref}`);
  }

  /**
   * Get ca list for trust ca
   */
  async caList(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/trust/ca/ca_list`);
  }

  /**
   * Execute del for trust ca
   */
  async del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/trust/ca/del/${uuid}`, data);
  }

  /**
   * Execute generate file for trust ca
   */
  async generateFile(uuid: string, type: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/trust/ca/generate_file/${uuid}/${type}`, data);
  }

  /**
   * Get get for trust ca
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/trust/ca/get`);
  }

  /**
   * Get raw dump for trust ca
   */
  async rawDump(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/trust/ca/raw_dump/${uuid}`);
  }

  /**
   * Execute set for trust ca
   */
  async set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/trust/ca/set/${uuid}`, data);
  }
}

export class TrustCert extends BaseModule {
  /**
   * Execute add for trust cert
   */
  async add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/trust/cert/add`, data);
  }

  /**
   * Get ca info for trust cert
   */
  async caInfo(caref: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/trust/cert/ca_info/${caref}`);
  }

  /**
   * Get ca list for trust cert
   */
  async caList(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/trust/cert/ca_list`);
  }

  /**
   * Execute del for trust cert
   */
  async del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/trust/cert/del/${uuid}`, data);
  }

  /**
   * Execute generate file for trust cert
   */
  async generateFile(uuid: string, type: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/trust/cert/generate_file/${uuid}/${type}`, data);
  }

  /**
   * Get get for trust cert
   */
  async get(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/trust/cert/get/${uuid}`);
  }

  /**
   * Get raw dump for trust cert
   */
  async rawDump(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/trust/cert/raw_dump/${uuid}`);
  }

  /**
   * Execute set for trust cert
   */
  async set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/trust/cert/set/${uuid}`, data);
  }

  /**
   * Get user list for trust cert
   */
  async userList(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/trust/cert/user_list`);
  }
}

export class TrustCrl extends BaseModule {
  /**
   * Execute del for trust crl
   */
  async del(caref: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/trust/crl/del/${caref}`, data);
  }

  /**
   * Get get for trust crl
   */
  async get(caref: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/trust/crl/get/${caref}`);
  }

  /**
   * Get get ocsp info data for trust crl
   */
  async getOcspInfoData(caref: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/trust/crl/get_ocsp_info_data/${caref}`);
  }

  /**
   * Get raw dump for trust crl
   */
  async rawDump(caref: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/trust/crl/raw_dump/${caref}`);
  }

  /**
   * Get search for trust crl
   */
  async search(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/trust/trust/crl/search`);
  }

  /**
   * Execute set for trust crl
   */
  async set(caref: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/trust/crl/set/${caref}`, data);
  }
}

export class TrustSettings extends BaseModule {
  /**
   * Get get for trust settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/trust/settings/get`);
  }

  /**
   * Execute reconfigure for trust settings
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/trust/trust/settings/reconfigure`, data);
  }

  /**
   * Execute set for trust settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/trust/settings/set`, data);
  }
}

// Main module class
export class TrustModule extends BaseModule {
  public readonly ca: TrustCa;
  public readonly cert: TrustCert;
  public readonly crl: TrustCrl;
  public readonly settings: TrustSettings;

  constructor(http: any) {
    super(http);
    this.ca = new TrustCa(http);
    this.cert = new TrustCert(http);
    this.crl = new TrustCrl(http);
    this.settings = new TrustSettings(http);
  }

}