import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class WazuhagentModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('wazuh-agent', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('wazuh-agent', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('wazuh-agent', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('wazuh-agent', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('wazuh-agent', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wazuhagent/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wazuhagent/general/set', config);
  }

  async getAgentInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wazuhagent/service/info');
  }

  async getAgentStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wazuhagent/service/agent_status');
  }

  async registerAgent(serverConfig: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wazuhagent/service/register', serverConfig);
  }

  async getRegistrationKey(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wazuhagent/service/registration_key');
  }

  async getClientKeys(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wazuhagent/service/client_keys');
  }

  async importKey(keyData: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wazuhagent/service/import_key', keyData);
  }

  async exportKey(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wazuhagent/service/export_key');
  }

  async getAlerts(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wazuhagent/service/alerts');
  }

  async getLogs(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wazuhagent/service/logs');
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wazuhagent/service/statistics');
  }

  async testConnection(): Promise<ApiResponse<any>> {
    return this.http.post('/api/wazuhagent/service/test_connection');
  }
}
