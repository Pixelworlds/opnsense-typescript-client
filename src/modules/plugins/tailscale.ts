import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class TailscaleModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('tailscale', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tailscale', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tailscale', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tailscale', 'restart');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tailscale/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/tailscale/general/set', config);
  }

  async login(): Promise<ApiResponse<any>> {
    return this.http.post('/api/tailscale/service/login');
  }

  async logout(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/tailscale/service/logout');
  }

  async getNetworkStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tailscale/service/status');
  }

  async getPeers(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tailscale/service/peers');
  }

  async getRoutes(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tailscale/service/routes');
  }
}
