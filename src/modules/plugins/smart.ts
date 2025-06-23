import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class SmartModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('smartd', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('smartd', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('smartd', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('smartd', 'restart');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/smart/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/smart/general/set', config);
  }

  async getDevices(): Promise<ApiResponse<any>> {
    return this.http.get('/api/smart/service/devices');
  }

  async getDeviceInfo(device: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/smart/service/device/${device}`);
  }

  async runTest(device: string, testType: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/smart/service/test/${device}/${testType}`);
  }

  async getTestResults(device: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/smart/service/results/${device}`);
  }
}
