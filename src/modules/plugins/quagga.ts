import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class QuaggaModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('quagga', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('quagga', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('quagga', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('quagga', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('quagga', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/quagga/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/quagga/general/set', config);
  }

  async getBgpConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/quagga/bgp/get');
  }

  async setBgpConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/quagga/bgp/set', config);
  }

  async getOspfConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/quagga/ospf/get');
  }

  async setOspfConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/quagga/ospf/set', config);
  }

  async getRipConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/quagga/rip/get');
  }

  async setRipConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/quagga/rip/set', config);
  }

  async getRoutingTable(): Promise<ApiResponse<any>> {
    return this.http.get('/api/quagga/service/routes');
  }

  async getNeighbors(): Promise<ApiResponse<any>> {
    return this.http.get('/api/quagga/service/neighbors');
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/quagga/service/statistics');
  }
}
