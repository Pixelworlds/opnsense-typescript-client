import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class RoutingModule extends BaseModule {
  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routing/general/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routing/general/set', config);
  }

  async searchGateways(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/routing/gateways/search_item', params);
  }

  async addGateway(gateway: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routing/gateways/add_item', gateway);
  }

  async getGateway(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/routing/gateways/get_item/${uuid}` : '/api/routing/gateways/get';
    return this.http.get(path);
  }

  async updateGateway(uuid: string, gateway: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routing/gateways/set_item/${uuid}`, gateway);
  }

  async deleteGateway(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routing/gateways/del_item/${uuid}`);
  }

  async toggleGateway(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/routing/gateways/toggle_item', uuid, enabled);
  }

  async searchGatewayGroups(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/routing/gateways/search_group', params);
  }

  async addGatewayGroup(group: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routing/gateways/add_group', group);
  }

  async getGatewayGroup(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/routing/gateways/get_group/${uuid}` : '/api/routing/gateways/get_group';
    return this.http.get(path);
  }

  async updateGatewayGroup(uuid: string, group: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routing/gateways/set_group/${uuid}`, group);
  }

  async deleteGatewayGroup(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routing/gateways/del_group/${uuid}`);
  }

  async toggleGatewayGroup(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/routing/gateways/toggle_group', uuid, enabled);
  }

  async getGatewayStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routing/gateways/status');
  }

  async getGatewayStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routing/gateways/statistics');
  }

  async getOspfConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routing/ospf/get');
  }

  async setOspfConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routing/ospf/set', config);
  }

  async getBgpConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routing/bgp/get');
  }

  async setBgpConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routing/bgp/set', config);
  }

  async getRipConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routing/rip/get');
  }

  async setRipConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routing/rip/set', config);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routing/service/reconfigure');
  }
}
