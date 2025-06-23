import { BaseModule } from '../base';

import type { ApiResponse } from '../../types';

export class InterfacesModule extends BaseModule {
  async getInterface(interfaceName?: string): Promise<ApiResponse<any>> {
    const path = interfaceName
      ? `/api/interfaces/overview/get_interface/${interfaceName}`
      : '/api/interfaces/overview/get_interface';
    return this.http.get(path);
  }

  async getInterfacesInfo(details: boolean = false): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/overview/interfaces_info/${details}`);
  }

  async reloadInterface(identifier?: string): Promise<ApiResponse<any>> {
    const path = identifier
      ? `/api/interfaces/overview/reload_interface/${identifier}`
      : '/api/interfaces/overview/reload_interface';
    return this.http.post(path);
  }

  async export(): Promise<ApiResponse<any>> {
    return this.http.get('/api/interfaces/overview/export');
  }

  async searchVlans(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/interfaces/vlan_settings/search_item', params);
  }

  async addVlan(vlan: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/interfaces/vlan_settings/add_item', vlan);
  }

  async getVlan(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/interfaces/vlan_settings/get_item/${uuid}` : '/api/interfaces/vlan_settings/get';
    return this.http.get(path);
  }

  async updateVlan(uuid: string, vlan: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post(`/api/interfaces/vlan_settings/set_item/${uuid}`, vlan);
  }

  async deleteVlan(uuid: string): Promise<ApiResponse<any>> {
    return this.http.post(`/api/interfaces/vlan_settings/del_item/${uuid}`);
  }

  async reconfigureVlans(): Promise<ApiResponse<any>> {
    return this.http.post('/api/interfaces/vlan_settings/reconfigure');
  }

  async searchLaggs(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/interfaces/lagg_settings/search_item', params);
  }

  async addLagg(lagg: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/interfaces/lagg_settings/add_item', lagg);
  }

  async getLagg(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/interfaces/lagg_settings/get_item/${uuid}` : '/api/interfaces/lagg_settings/get';
    return this.http.get(path);
  }

  async updateLagg(uuid: string, lagg: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post(`/api/interfaces/lagg_settings/set_item/${uuid}`, lagg);
  }

  async deleteLagg(uuid: string): Promise<ApiResponse<any>> {
    return this.http.post(`/api/interfaces/lagg_settings/del_item/${uuid}`);
  }

  async reconfigureLaggs(): Promise<ApiResponse<any>> {
    return this.http.post('/api/interfaces/lagg_settings/reconfigure');
  }

  async searchVips(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/interfaces/vip_settings/search_item', params);
  }

  async addVip(vip: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/interfaces/vip_settings/add_item', vip);
  }

  async getVip(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/interfaces/vip_settings/get_item/${uuid}` : '/api/interfaces/vip_settings/get';
    return this.http.get(path);
  }

  async updateVip(uuid: string, vip: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post(`/api/interfaces/vip_settings/set_item/${uuid}`, vip);
  }

  async deleteVip(uuid: string): Promise<ApiResponse<any>> {
    return this.http.post(`/api/interfaces/vip_settings/del_item/${uuid}`);
  }

  async getUnusedVhid(): Promise<ApiResponse<any>> {
    return this.http.get('/api/interfaces/vip_settings/get_unused_vhid');
  }

  async reconfigureVips(): Promise<ApiResponse<any>> {
    return this.http.post('/api/interfaces/vip_settings/reconfigure');
  }
}
