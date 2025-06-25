import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class TrustCa {
  constructor(private http: any) {}

  async caInfo(caref: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/ca/ca_info/${caref}`);
  }

  async caList(): Promise<ApiResponse<any>> {
    return this.http.get('/api/trust/ca/ca_list');
  }

  async del(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/ca/del/${uuid}`);
  }

  async generateFile(uuid?: string, type: string = 'crt'): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/trust/ca/generate_file/${uuid}/${type}` : `/api/trust/ca/generate_file/${type}`;
    return this.http.get(path);
  }

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/trust/ca/search');
    }
    return this.http.post('/api/trust/ca/search', params);
  }

  async set(ca: Record<string, any>, uuid?: string): Promise<ApiResponse<ApiResult>> {
    // For adding new CA, no UUID is used
    if (!uuid) {
      return this.http.post('/api/trust/ca/set', ca);
    }
    // For updating existing CA
    return this.http.post(`/api/trust/ca/set/${uuid}`, ca);
  }
}

export class TrustCert {
  constructor(private http: any) {}

  async add(cert: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trust/cert/add', cert);
  }

  async caInfo(caref?: string): Promise<ApiResponse<any>> {
    const path = caref ? `/api/trust/cert/ca_info/${caref}` : '/api/trust/cert/ca_info';
    return this.http.get(path);
  }

  async del(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/cert/del/${uuid}`);
  }

  async generateFile(uuid?: string, type: string = 'crt'): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/trust/cert/generate_file/${uuid}/${type}` : `/api/trust/cert/generate_file/${type}`;
    return this.http.get(path);
  }

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/trust/cert/search');
    }
    return this.http.post('/api/trust/cert/search', params);
  }

  async userList(): Promise<ApiResponse<any>> {
    return this.http.get('/api/trust/cert/user_list');
  }
}

export class TrustCrl {
  constructor(private http: any) {}

  async del(caref: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/crl/del/${caref}`);
  }

  async get(caref: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/crl/get/${caref}`);
  }

  async getOcspInfoData(caref: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/crl/get_ocsp_info_data/${caref}`);
  }

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/trust/crl/search');
    }
    return this.http.post('/api/trust/crl/search', params);
  }
}

export class TrustSettings {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/trust/settings/get');
  }

  async set(settings: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trust/settings/set', settings);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trust/settings/reconfigure');
  }
}

export class TrustModule extends BaseModule {
  public readonly ca: TrustCa;
  public readonly cert: TrustCert;
  public readonly crl: TrustCrl;
  public readonly settings: TrustSettings;

  constructor(httpClient: any) {
    super(httpClient);
    this.ca = new TrustCa(this.http);
    this.cert = new TrustCert(this.http);
    this.crl = new TrustCrl(this.http);
    this.settings = new TrustSettings(this.http);
  }

  // Legacy methods for backward compatibility
  async searchCAs(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.ca.search(params);
  }

  async getCA(uuid?: string): Promise<ApiResponse<any>> {
    // Note: API documentation doesn't show a get endpoint, only search
    return this.ca.search({ uuid });
  }

  async setCA(uuid: string, ca: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.ca.set(ca, uuid);
  }

  async addCA(ca: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.ca.set(ca);
  }

  async deleteCA(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.ca.del(uuid);
  }

  async getCAInfo(caref: string): Promise<ApiResponse<any>> {
    return this.ca.caInfo(caref);
  }

  async getCAList(): Promise<ApiResponse<any>> {
    return this.ca.caList();
  }

  async generateCAFile(uuid?: string, type: string = 'crt'): Promise<ApiResponse<any>> {
    return this.ca.generateFile(uuid, type);
  }

  async searchCerts(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.cert.search(params);
  }

  async addCert(cert: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.cert.add(cert);
  }

  async getCert(uuid?: string): Promise<ApiResponse<any>> {
    // Note: API documentation doesn't show a get endpoint, only search
    return this.cert.search({ uuid });
  }

  async deleteCert(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.cert.del(uuid);
  }

  async getCertCAInfo(caref?: string): Promise<ApiResponse<any>> {
    return this.cert.caInfo(caref);
  }

  async generateCertFile(uuid?: string, type: string = 'crt'): Promise<ApiResponse<any>> {
    return this.cert.generateFile(uuid, type);
  }

  async getUserList(): Promise<ApiResponse<any>> {
    return this.cert.userList();
  }

  async searchCRLs(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.crl.search(params);
  }

  async getCRL(caref: string): Promise<ApiResponse<any>> {
    return this.crl.get(caref);
  }

  async deleteCRL(caref: string): Promise<ApiResponse<ApiResult>> {
    return this.crl.del(caref);
  }

  async getOCSPInfo(caref: string): Promise<ApiResponse<any>> {
    return this.crl.getOcspInfoData(caref);
  }

  async getSettings(): Promise<ApiResponse<any>> {
    return this.settings.get();
  }

  async setSettings(settings: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.set(settings);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.settings.reconfigure();
  }

  // New convenience methods
  async getAllCAs(): Promise<ApiResponse<any>> {
    return this.ca.search();
  }

  async getAllCerts(): Promise<ApiResponse<any>> {
    return this.cert.search();
  }

  async getAllCRLs(): Promise<ApiResponse<any>> {
    return this.crl.search();
  }

  async createSelfSignedCA(
    commonName: string,
    organization?: string,
    country?: string,
    keyLength: number = 2048
  ): Promise<ApiResponse<ApiResult>> {
    const ca = {
      method: 'internal',
      keylen: keyLength.toString(),
      lifetime: '3650',
      dn_commonname: commonName,
      dn_organization: organization || '',
      dn_country: country || 'US',
      digest_alg: 'sha256'
    };
    return this.ca.set(ca);
  }

  async importCA(certData: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const ca = {
      method: 'import',
      cert: certData,
      descr: description || 'Imported CA'
    };
    return this.ca.set(ca);
  }

  async importCertificate(
    certData: string,
    privateKey?: string,
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const cert = {
      method: 'import',
      cert: certData,
      prv: privateKey || '',
      descr: description || 'Imported Certificate'
    };
    return this.cert.add(cert);
  }

  async getTrustOverview(): Promise<{
    cas: any;
    certificates: any;
    crls: any;
    settings: any;
    timestamp: string;
  }> {
    const [cas, certificates, crls, settings] = await Promise.allSettled([
      this.getAllCAs(),
      this.getAllCerts(),
      this.getAllCRLs(),
      this.getSettings()
    ]);

    return {
      cas: cas.status === 'fulfilled' ? cas.value.data : null,
      certificates: certificates.status === 'fulfilled' ? certificates.value.data : null,
      crls: crls.status === 'fulfilled' ? crls.value.data : null,
      settings: settings.status === 'fulfilled' ? settings.value.data : null,
      timestamp: new Date().toISOString()
    };
  }
}
