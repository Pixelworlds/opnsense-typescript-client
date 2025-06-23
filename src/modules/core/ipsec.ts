import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class IPsecModule extends BaseModule {
  async isEnabled(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ipsec/connections/is_enabled');
  }

  async toggle(enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined ? `/api/ipsec/connections/toggle/${enabled ? '1' : '0'}` : '/api/ipsec/connections/toggle';
    return this.http.post(path);
  }

  async searchConnections(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/ipsec/connections/search_connection', params);
  }

  async addConnection(connection: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/connections/add_connection', connection);
  }

  async getConnection(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ipsec/connections/get_connection/${uuid}` : '/api/ipsec/connections/get';
    return this.http.get(path);
  }

  async updateConnection(uuid: string, connection: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/connections/set_connection/${uuid}`, connection);
  }

  async deleteConnection(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/connections/del_connection/${uuid}`);
  }

  async toggleConnection(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/ipsec/connections/toggle_connection', uuid, enabled);
  }

  async searchChildren(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/ipsec/connections/search_child', params);
  }

  async addChild(child: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/connections/add_child', child);
  }

  async getChild(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ipsec/connections/get_child/${uuid}` : '/api/ipsec/connections/get_child';
    return this.http.get(path);
  }

  async updateChild(uuid: string, child: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/connections/set_child/${uuid}`, child);
  }

  async deleteChild(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/connections/del_child/${uuid}`);
  }

  async toggleChild(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/ipsec/connections/toggle_child', uuid, enabled);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ipsec', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ipsec', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ipsec', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('ipsec', 'reconfigure');
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('ipsec', 'status');
  }

  async searchPhase1Sessions(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/ipsec/sessions/search_phase1', params);
  }

  async searchPhase2Sessions(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/ipsec/sessions/search_phase2', params);
  }

  async connectSession(id: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/sessions/connect/${id}`);
  }

  async disconnectSession(id: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/sessions/disconnect/${id}`);
  }

  async searchLeases(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/ipsec/leases/search', params);
  }

  async getPools(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ipsec/leases/pools');
  }

  async generateKeyPair(type: string, size?: number): Promise<ApiResponse<any>> {
    const path = size
      ? `/api/ipsec/key_pairs/gen_key_pair/${type}/${size}`
      : `/api/ipsec/key_pairs/gen_key_pair/${type}`;
    return this.http.get(path);
  }

  async searchKeyPairs(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/ipsec/key_pairs/search_item', params);
  }

  async addKeyPair(keyPair: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/key_pairs/add_item', keyPair);
  }

  async getSwanctl(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ipsec/connections/swanctl');
  }
}
