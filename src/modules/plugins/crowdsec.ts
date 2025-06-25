import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class CrowdsecModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/crowdsec/service/status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('crowdsec', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('crowdsec', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('crowdsec', 'restart');
  }

  async reload(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/crowdsec/service/reload');
  }

  async getDebug(): Promise<ApiResponse<any>> {
    return this.http.get('/api/crowdsec/service/debug');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/crowdsec/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/crowdsec/general/set', config);
  }

  async getAlerts(): Promise<ApiResponse<any>> {
    return this.http.get('/api/crowdsec/alerts/get');
  }

  async getDecisions(): Promise<ApiResponse<any>> {
    return this.http.get('/api/crowdsec/decisions/get');
  }

  async deleteDecision(decisionId: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/crowdsec/decisions/delete/${decisionId}`);
  }

  async getMachines(): Promise<ApiResponse<any>> {
    return this.http.get('/api/crowdsec/machines/get');
  }

  async getBouncers(): Promise<ApiResponse<any>> {
    return this.http.get('/api/crowdsec/bouncers/get');
  }

  async getHub(): Promise<ApiResponse<any>> {
    return this.http.get('/api/crowdsec/hub/get');
  }

  async getVersion(): Promise<ApiResponse<any>> {
    return this.http.get('/api/crowdsec/version/get');
  }
}
