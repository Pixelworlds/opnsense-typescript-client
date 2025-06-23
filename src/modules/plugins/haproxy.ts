import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class HAProxyModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('haproxy', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('haproxy', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('haproxy', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('haproxy', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('haproxy', 'reconfigure');
  }

  async configTest(): Promise<ApiResponse<any>> {
    return this.http.get('/api/haproxy/service/configtest');
  }

  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/haproxy/settings/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/haproxy/settings/set', config);
  }

  async searchBackends(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/haproxy/settings/search_backends', params);
  }

  async addBackend(backend: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/haproxy/settings/add_backend', backend);
  }

  async getBackend(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/haproxy/settings/get_backend/${uuid}` : '/api/haproxy/settings/get_backend';
    return this.http.get(path);
  }

  async updateBackend(uuid: string, backend: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/settings/set_backend/${uuid}`, backend);
  }

  async deleteBackend(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/settings/del_backend/${uuid}`);
  }

  async toggleBackend(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/haproxy/settings/toggle_backend', uuid, enabled);
  }

  async searchFrontends(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/haproxy/settings/search_frontends', params);
  }

  async addFrontend(frontend: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/haproxy/settings/add_frontend', frontend);
  }

  async getFrontend(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/haproxy/settings/get_frontend/${uuid}` : '/api/haproxy/settings/get_frontend';
    return this.http.get(path);
  }

  async updateFrontend(uuid: string, frontend: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/settings/set_frontend/${uuid}`, frontend);
  }

  async deleteFrontend(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/settings/del_frontend/${uuid}`);
  }

  async toggleFrontend(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/settings/toggle_frontend/${uuid}`);
  }

  async searchServers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/haproxy/settings/search_servers', params);
  }

  async addServer(server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/haproxy/settings/add_server', server);
  }

  async getServer(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/haproxy/settings/get_server/${uuid}` : '/api/haproxy/settings/get_server';
    return this.http.get(path);
  }

  async updateServer(uuid: string, server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/settings/set_server/${uuid}`, server);
  }

  async deleteServer(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/settings/del_server/${uuid}`);
  }

  async toggleServer(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/haproxy/settings/toggle_server', uuid, enabled);
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/haproxy/statistics/info');
  }

  async getCounters(): Promise<ApiResponse<any>> {
    return this.http.get('/api/haproxy/statistics/counters');
  }

  async getTables(): Promise<ApiResponse<any>> {
    return this.http.get('/api/haproxy/statistics/tables');
  }

  async searchMaintenanceServers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/haproxy/maintenance/search_server', params);
  }

  async setServerState(stateData: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/haproxy/maintenance/server_state', stateData);
  }

  async setServerWeight(weightData: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/haproxy/maintenance/server_weight', weightData);
  }

  async exportConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/haproxy/export/config');
  }

  async downloadConfig(type: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/export/download/${type}`);
  }
}
