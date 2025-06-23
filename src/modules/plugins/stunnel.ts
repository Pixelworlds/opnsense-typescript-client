import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class StunnelModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('stunnel', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('stunnel', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('stunnel', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('stunnel', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('stunnel', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/stunnel/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/stunnel/general/set', config);
  }

  async searchServices(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/stunnel/settings/search_service', params);
  }

  async addService(service: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/stunnel/settings/add_service', service);
  }

  async getService(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/stunnel/settings/get_service/${uuid}` : '/api/stunnel/settings/get_service';
    return this.http.get(path);
  }

  async updateService(uuid: string, service: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/stunnel/settings/set_service/${uuid}`, service);
  }

  async deleteService(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/stunnel/settings/del_service/${uuid}`);
  }

  async toggleService(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/stunnel/settings/toggle_service', uuid, enabled);
  }

  async getCertificates(): Promise<ApiResponse<any>> {
    return this.http.get('/api/stunnel/service/certificates');
  }

  async generateCertificate(params: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/stunnel/service/generate_cert', params);
  }

  async getConnections(): Promise<ApiResponse<any>> {
    return this.http.get('/api/stunnel/service/connections');
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/stunnel/service/statistics');
  }

  async getLogs(): Promise<ApiResponse<any>> {
    return this.http.get('/api/stunnel/service/logs');
  }
}
