import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class BindModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('bind', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('bind', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('bind', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('bind', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('bind', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/bind/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/bind/general/set', config);
  }

  async getDomains(): Promise<ApiResponse<any>> {
    return this.http.get('/api/bind/domain/get');
  }

  async setDomains(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/bind/domain/set', config);
  }

  async searchPrimaryDomains(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/bind/domain/search_primary_domain', params);
  }

  async searchSecondaryDomains(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/bind/domain/search_secondary_domain', params);
  }

  async addPrimaryDomain(domain: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/bind/domain/add_primary_domain', domain);
  }

  async addSecondaryDomain(domain: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/bind/domain/add_secondary_domain', domain);
  }

  async getDomain(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/bind/domain/get_domain/${uuid}` : '/api/bind/domain/get_domain';
    return this.http.get(path);
  }

  async updateDomain(uuid: string, domain: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/domain/set_domain/${uuid}`, domain);
  }

  async deleteDomain(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/domain/del_domain/${uuid}`);
  }

  async toggleDomain(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/domain/toggle_domain/${uuid}`);
  }

  async getRecords(): Promise<ApiResponse<any>> {
    return this.http.get('/api/bind/record/get');
  }

  async setRecords(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/bind/record/set', config);
  }

  async searchRecords(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/bind/record/search_record', params);
  }

  async addRecord(record: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/bind/record/add_record', record);
  }

  async getRecord(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/bind/record/get_record/${uuid}` : '/api/bind/record/get_record';
    return this.http.get(path);
  }

  async updateRecord(uuid: string, record: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/record/set_record/${uuid}`, record);
  }

  async deleteRecord(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/record/del_record/${uuid}`);
  }

  async toggleRecord(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/record/toggle_record/${uuid}`);
  }

  async zoneShow(zonename?: string): Promise<ApiResponse<any>> {
    const path = zonename ? `/api/bind/general/zoneshow/${zonename}` : '/api/bind/general/zoneshow';
    return this.http.get(path);
  }

  async zoneTest(zonename?: string): Promise<ApiResponse<any>> {
    const path = zonename ? `/api/bind/general/zonetest/${zonename}` : '/api/bind/general/zonetest';
    return this.http.get(path);
  }

  async getDnsbl(): Promise<ApiResponse<any>> {
    return this.http.get('/api/bind/dnsbl/get');
  }

  async setDnsbl(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/bind/dnsbl/set', config);
  }

  async updateDnsbl(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/bind/service/dnsbl');
  }

  async getAcl(): Promise<ApiResponse<any>> {
    return this.http.get('/api/bind/acl/get');
  }

  async setAcl(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/bind/acl/set', config);
  }

  async searchAcl(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/bind/acl/search_acl', params);
  }

  async addAcl(acl: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/bind/acl/add_acl', acl);
  }

  async getAclItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/bind/acl/get_acl/${uuid}` : '/api/bind/acl/get_acl';
    return this.http.get(path);
  }

  async updateAclItem(uuid: string, acl: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/acl/set_acl/${uuid}`, acl);
  }

  async deleteAcl(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/acl/del_acl/${uuid}`);
  }

  async toggleAcl(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/bind/acl/toggle_acl/${uuid}`);
  }
}
