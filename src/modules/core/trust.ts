import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class TrustModule extends BaseModule {
  async searchCAs(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/trust/ca/search', params);
  }

  async getCA(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/trust/ca/get/${uuid}` : '/api/trust/ca/get';
    return this.http.get(path);
  }

  async setCA(uuid: string, ca: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/ca/set/${uuid}`, ca);
  }

  async deleteCA(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/ca/del/${uuid}`);
  }

  async getCAInfo(caref: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/ca/ca_info/${caref}`);
  }

  async getCAList(): Promise<ApiResponse<any>> {
    return this.http.get('/api/trust/ca/ca_list');
  }

  async generateCAFile(uuid?: string, type: string = 'crt'): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/trust/ca/generate_file/${uuid}/${type}` : `/api/trust/ca/generate_file/${type}`;
    return this.http.get(path);
  }

  async rawDumpCA(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/ca/raw_dump/${uuid}`);
  }

  async searchCerts(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/trust/cert/search', params);
  }

  async addCert(cert: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trust/cert/add', cert);
  }

  async getCert(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/trust/cert/get/${uuid}` : '/api/trust/cert/get';
    return this.http.get(path);
  }

  async setCert(uuid: string, cert: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/cert/set/${uuid}`, cert);
  }

  async deleteCert(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/cert/del/${uuid}`);
  }

  async getCertCAInfo(caref?: string): Promise<ApiResponse<any>> {
    const path = caref ? `/api/trust/cert/ca_info/${caref}` : '/api/trust/cert/ca_info';
    return this.http.get(path);
  }

  async getCertCAList(): Promise<ApiResponse<any>> {
    return this.http.get('/api/trust/cert/ca_list');
  }

  async generateCertFile(uuid?: string, type: string = 'crt'): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/trust/cert/generate_file/${uuid}/${type}` : `/api/trust/cert/generate_file/${type}`;
    return this.http.get(path);
  }

  async rawDumpCert(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/cert/raw_dump/${uuid}`);
  }

  async getUserList(): Promise<ApiResponse<any>> {
    return this.http.get('/api/trust/cert/user_list');
  }

  async searchCRLs(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/trust/crl/search', params);
  }

  async getCRL(caref: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/crl/get/${caref}`);
  }

  async setCRL(caref: string, crl: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/crl/set/${caref}`, crl);
  }

  async deleteCRL(caref: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/trust/crl/del/${caref}`);
  }

  async getOCSPInfo(caref: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/crl/get_ocsp_info_data/${caref}`);
  }

  async rawDumpCRL(caref: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/trust/crl/raw_dump/${caref}`);
  }

  async getSettings(): Promise<ApiResponse<any>> {
    return this.http.get('/api/trust/settings/get');
  }

  async setSettings(settings: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trust/settings/set', settings);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/trust/settings/reconfigure');
  }
}
