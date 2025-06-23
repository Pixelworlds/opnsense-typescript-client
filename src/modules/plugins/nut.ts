import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class NutModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('nut', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('nut', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('nut', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('nut', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('nut', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/nut/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/nut/general/set', config);
  }

  async getUpsStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/nut/service/status');
  }

  async getUpsInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/nut/service/info');
  }

  async getUpsVars(): Promise<ApiResponse<any>> {
    return this.http.get('/api/nut/service/vars');
  }

  async getUpsCommands(): Promise<ApiResponse<any>> {
    return this.http.get('/api/nut/service/commands');
  }

  async sendCommand(command: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/nut/service/command', { command });
  }
}
