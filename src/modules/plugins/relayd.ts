import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class RelaydModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('relayd', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('relayd', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('relayd', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('relayd', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('relayd', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/relayd/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/relayd/general/set', config);
  }

  async searchVirtualServers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/relayd/settings/search_virtualserver', params);
  }

  async addVirtualServer(server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/relayd/settings/add_virtualserver', server);
  }

  async getVirtualServer(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/relayd/settings/get_virtualserver/${uuid}` : '/api/relayd/settings/get_virtualserver';
    return this.http.get(path);
  }

  async updateVirtualServer(uuid: string, server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/relayd/settings/set_virtualserver/${uuid}`, server);
  }

  async deleteVirtualServer(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/relayd/settings/del_virtualserver/${uuid}`);
  }

  async toggleVirtualServer(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/relayd/settings/toggle_virtualserver', uuid, enabled);
  }

  async searchTables(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/relayd/settings/search_tablecheck', params);
  }

  async addTable(table: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/relayd/settings/add_tablecheck', table);
  }

  async getTable(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/relayd/settings/get_tablecheck/${uuid}` : '/api/relayd/settings/get_tablecheck';
    return this.http.get(path);
  }

  async updateTable(uuid: string, table: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/relayd/settings/set_tablecheck/${uuid}`, table);
  }

  async deleteTable(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/relayd/settings/del_tablecheck/${uuid}`);
  }

  async toggleTable(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/relayd/settings/toggle_tablecheck', uuid, enabled);
  }

  async searchHosts(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/relayd/settings/search_host', params);
  }

  async addHost(host: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/relayd/settings/add_host', host);
  }

  async getHost(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/relayd/settings/get_host/${uuid}` : '/api/relayd/settings/get_host';
    return this.http.get(path);
  }

  async updateHost(uuid: string, host: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/relayd/settings/set_host/${uuid}`, host);
  }

  async deleteHost(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/relayd/settings/del_host/${uuid}`);
  }

  async toggleHost(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/relayd/settings/toggle_host', uuid, enabled);
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/relayd/service/statistics');
  }

  async getHostStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/relayd/service/host_status');
  }
}
