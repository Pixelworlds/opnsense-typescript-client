import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class ZabbixproxyModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('zabbix_proxy', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('zabbix_proxy', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('zabbix_proxy', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('zabbix_proxy', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('zabbix_proxy', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/zabbixproxy/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/zabbixproxy/general/set', config);
  }

  async getDatabaseInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/zabbixproxy/service/database_info');
  }

  async syncDatabase(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/zabbixproxy/service/sync_database');
  }

  async clearCache(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/zabbixproxy/service/clear_cache');
  }

  async getHosts(): Promise<ApiResponse<any>> {
    return this.http.get('/api/zabbixproxy/service/hosts');
  }

  async getHostDetails(hostId: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/zabbixproxy/service/host/${hostId}`);
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/zabbixproxy/service/statistics');
  }

  async getProxyInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/zabbixproxy/service/proxy_info');
  }

  async getServerConnection(): Promise<ApiResponse<any>> {
    return this.http.get('/api/zabbixproxy/service/server_connection');
  }

  async testConnection(): Promise<ApiResponse<any>> {
    return this.http.post('/api/zabbixproxy/service/test_connection');
  }

  async getQueue(): Promise<ApiResponse<any>> {
    return this.http.get('/api/zabbixproxy/service/queue');
  }

  async clearQueue(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/zabbixproxy/service/clear_queue');
  }

  async getConfiguration(): Promise<ApiResponse<any>> {
    return this.http.get('/api/zabbixproxy/service/configuration');
  }

  async reloadConfiguration(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/zabbixproxy/service/reload_config');
  }
}
