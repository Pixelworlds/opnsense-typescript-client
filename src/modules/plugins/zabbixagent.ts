import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class ZabbixagentModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('zabbix_agentd', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('zabbix_agentd', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('zabbix_agentd', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('zabbix_agentd', 'restart');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/zabbixagent/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/zabbixagent/general/set', config);
  }

  async testConnection(): Promise<ApiResponse<any>> {
    return this.http.post('/api/zabbixagent/service/test');
  }

  async getAgentInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/zabbixagent/service/info');
  }
}
