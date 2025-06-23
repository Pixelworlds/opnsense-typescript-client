import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class AcmeclientModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('acme', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('acme', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('acme', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('acme', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('acme', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/acme/settings/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/acme/settings/set', config);
  }

  async searchAccounts(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/acme/settings/search_account', params);
  }

  async addAccount(account: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/acme/settings/add_account', account);
  }

  async getAccount(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/acme/settings/get_account/${uuid}` : '/api/acme/settings/get_account';
    return this.http.get(path);
  }

  async updateAccount(uuid: string, account: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acme/settings/set_account/${uuid}`, account);
  }

  async deleteAccount(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acme/settings/del_account/${uuid}`);
  }

  async toggleAccount(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/acme/settings/toggle_account', uuid, enabled);
  }

  async searchCertificates(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/acme/settings/search_certificate', params);
  }

  async addCertificate(certificate: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/acme/settings/add_certificate', certificate);
  }

  async getCertificate(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/acme/settings/get_certificate/${uuid}` : '/api/acme/settings/get_certificate';
    return this.http.get(path);
  }

  async updateCertificate(uuid: string, certificate: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acme/settings/set_certificate/${uuid}`, certificate);
  }

  async deleteCertificate(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acme/settings/del_certificate/${uuid}`);
  }

  async toggleCertificate(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/acme/settings/toggle_certificate', uuid, enabled);
  }

  async issueCertificate(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acme/service/issue/${uuid}`);
  }

  async renewCertificate(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acme/service/renew/${uuid}`);
  }

  async revokeCertificate(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acme/service/revoke/${uuid}`);
  }

  async getAutomation(): Promise<ApiResponse<any>> {
    return this.http.get('/api/acme/settings/get_automation');
  }

  async setAutomation(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/acme/settings/set_automation', config);
  }

  async runAutomation(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/acme/service/automation');
  }
}
