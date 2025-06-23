import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class OpenVPNModule extends BaseModule {
  async getInstances(): Promise<ApiResponse<any>> {
    return this.http.get('/api/openvpn/instances/get');
  }

  async searchInstances(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/openvpn/instances/search', params);
  }

  async addInstance(instance: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/openvpn/instances/add', instance);
  }

  async updateInstance(uuid: string, instance: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/instances/set/${uuid}`, instance);
  }

  async deleteInstance(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/instances/del/${uuid}`);
  }

  async toggleInstance(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/openvpn/instances/toggle', uuid, enabled);
  }

  async generateKey(type: string = 'secret'): Promise<ApiResponse<any>> {
    return this.http.get(`/api/openvpn/instances/gen_key/${type}`);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('openvpn', 'reconfigure');
  }

  async startService(id?: string): Promise<ApiResponse<ApiResult>> {
    const path = id ? `/api/openvpn/service/start_service/${id}` : '/api/openvpn/service/start_service';
    return this.http.post(path);
  }

  async stopService(id?: string): Promise<ApiResponse<ApiResult>> {
    const path = id ? `/api/openvpn/service/stop_service/${id}` : '/api/openvpn/service/stop_service';
    return this.http.post(path);
  }

  async restartService(id?: string): Promise<ApiResponse<ApiResult>> {
    const path = id ? `/api/openvpn/service/restart_service/${id}` : '/api/openvpn/service/restart_service';
    return this.http.post(path);
  }

  async searchSessions(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/openvpn/service/search_sessions', params);
  }

  async killSession(sessionData: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/openvpn/service/kill_session', sessionData);
  }
}
