import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class ApcupsdModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('apcupsd', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('apcupsd', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('apcupsd', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('apcupsd', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('apcupsd', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/apcupsd/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/apcupsd/general/set', config);
  }

  async getUpsStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/apcupsd/service/status');
  }

  async getUpsInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/apcupsd/service/info');
  }

  async getUpsBattery(): Promise<ApiResponse<any>> {
    return this.http.get('/api/apcupsd/service/battery');
  }

  async shutdownUps(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/apcupsd/service/shutdown');
  }

  async testBattery(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/apcupsd/service/test');
  }

  async calibrateBattery(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/apcupsd/service/calibrate');
  }
}
