import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class InterfacesGifSettings extends BaseModule {
  /**
   * Execute add item for interfaces gif_settings
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/gif_settings/add_item`, data);
  }

  /**
   * Execute del item for interfaces gif_settings
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/gif_settings/del_item/${uuid}`, data);
  }

  /**
   * Get get for interfaces gif_settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/gif_settings/get`);
  }

  /**
   * Get get if options for interfaces gif_settings
   */
  async getIfOptions(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/gif_settings/get_if_options`);
  }

  /**
   * Get get item for interfaces gif_settings
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/gif_settings/get_item/${uuid}`);
  }

  /**
   * Execute reconfigure for interfaces gif_settings
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/interfaces/interfaces/gif_settings/reconfigure`, data);
  }

  /**
   * Execute set for interfaces gif_settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/gif_settings/set`, data);
  }

  /**
   * Execute set item for interfaces gif_settings
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/gif_settings/set_item/${uuid}`, data);
  }
}

export class InterfacesGreSettings extends BaseModule {
  /**
   * Execute add item for interfaces gre_settings
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/gre_settings/add_item`, data);
  }

  /**
   * Execute del item for interfaces gre_settings
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/gre_settings/del_item/${uuid}`, data);
  }

  /**
   * Get get for interfaces gre_settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/gre_settings/get`);
  }

  /**
   * Get get if options for interfaces gre_settings
   */
  async getIfOptions(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/gre_settings/get_if_options`);
  }

  /**
   * Get get item for interfaces gre_settings
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/gre_settings/get_item/${uuid}`);
  }

  /**
   * Execute reconfigure for interfaces gre_settings
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/interfaces/interfaces/gre_settings/reconfigure`, data);
  }

  /**
   * Execute set for interfaces gre_settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/gre_settings/set`, data);
  }

  /**
   * Execute set item for interfaces gre_settings
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/gre_settings/set_item/${uuid}`, data);
  }
}

export class InterfacesLaggSettings extends BaseModule {
  /**
   * Execute add item for interfaces lagg_settings
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/lagg_settings/add_item`, data);
  }

  /**
   * Execute del item for interfaces lagg_settings
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/lagg_settings/del_item/${uuid}`, data);
  }

  /**
   * Get get for interfaces lagg_settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/lagg_settings/get`);
  }

  /**
   * Get get item for interfaces lagg_settings
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/lagg_settings/get_item/${uuid}`);
  }

  /**
   * Execute reconfigure for interfaces lagg_settings
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/interfaces/interfaces/lagg_settings/reconfigure`, data);
  }

  /**
   * Execute set for interfaces lagg_settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/lagg_settings/set`, data);
  }

  /**
   * Execute set item for interfaces lagg_settings
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/lagg_settings/set_item/${uuid}`, data);
  }
}

export class InterfacesLoopbackSettings extends BaseModule {
  /**
   * Execute add item for interfaces loopback_settings
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/loopback_settings/add_item`, data);
  }

  /**
   * Execute del item for interfaces loopback_settings
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/loopback_settings/del_item/${uuid}`, data);
  }

  /**
   * Get get for interfaces loopback_settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/loopback_settings/get`);
  }

  /**
   * Get get item for interfaces loopback_settings
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/loopback_settings/get_item/${uuid}`);
  }

  /**
   * Execute reconfigure for interfaces loopback_settings
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/interfaces/interfaces/loopback_settings/reconfigure`, data);
  }

  /**
   * Execute set for interfaces loopback_settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/loopback_settings/set`, data);
  }

  /**
   * Execute set item for interfaces loopback_settings
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/loopback_settings/set_item/${uuid}`, data);
  }
}

export class InterfacesNeighborSettings extends BaseModule {
  /**
   * Execute add item for interfaces neighbor_settings
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/neighbor_settings/add_item`, data);
  }

  /**
   * Execute del item for interfaces neighbor_settings
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/neighbor_settings/del_item/${uuid}`, data);
  }

  /**
   * Get get for interfaces neighbor_settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/neighbor_settings/get`);
  }

  /**
   * Get get item for interfaces neighbor_settings
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/neighbor_settings/get_item/${uuid}`);
  }

  /**
   * Execute reconfigure for interfaces neighbor_settings
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/interfaces/interfaces/neighbor_settings/reconfigure`, data);
  }

  /**
   * Execute set for interfaces neighbor_settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/neighbor_settings/set`, data);
  }

  /**
   * Execute set item for interfaces neighbor_settings
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/neighbor_settings/set_item/${uuid}`, data);
  }
}

export class InterfacesOverview extends BaseModule {
  /**
   * Get export for interfaces overview
   */
  async export(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/overview/export`);
  }

  /**
   * Get get interface for interfaces overview
   */
  async getInterface(ifParam: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/overview/get_interface/${ifParam}`);
  }

  /**
   * Get interfaces info for interfaces overview
   */
  async interfacesInfo(details: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/overview/interfaces_info/${details}`);
  }

  /**
   * Get reload interface for interfaces overview
   */
  async reloadInterface(identifier: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/overview/reload_interface/${identifier}`);
  }
}

export class InterfacesVipSettings extends BaseModule {
  /**
   * Execute add item for interfaces vip_settings
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/vip_settings/add_item`, data);
  }

  /**
   * Execute del item for interfaces vip_settings
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/vip_settings/del_item/${uuid}`, data);
  }

  /**
   * Get get for interfaces vip_settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/vip_settings/get`);
  }

  /**
   * Get get item for interfaces vip_settings
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/vip_settings/get_item/${uuid}`);
  }

  /**
   * Get get unused vhid for interfaces vip_settings
   */
  async getUnusedVhid(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/vip_settings/get_unused_vhid`);
  }

  /**
   * Execute reconfigure for interfaces vip_settings
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/interfaces/interfaces/vip_settings/reconfigure`, data);
  }

  /**
   * Execute set for interfaces vip_settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/vip_settings/set`, data);
  }

  /**
   * Execute set item for interfaces vip_settings
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/vip_settings/set_item/${uuid}`, data);
  }
}

export class InterfacesVlanSettings extends BaseModule {
  /**
   * Execute add item for interfaces vlan_settings
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/vlan_settings/add_item`, data);
  }

  /**
   * Execute del item for interfaces vlan_settings
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/vlan_settings/del_item/${uuid}`, data);
  }

  /**
   * Get get for interfaces vlan_settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/vlan_settings/get`);
  }

  /**
   * Get get item for interfaces vlan_settings
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/vlan_settings/get_item/${uuid}`);
  }

  /**
   * Execute reconfigure for interfaces vlan_settings
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/interfaces/interfaces/vlan_settings/reconfigure`, data);
  }

  /**
   * Execute set for interfaces vlan_settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/vlan_settings/set`, data);
  }

  /**
   * Execute set item for interfaces vlan_settings
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/vlan_settings/set_item/${uuid}`, data);
  }
}

export class InterfacesVxlanSettings extends BaseModule {
  /**
   * Execute add item for interfaces vxlan_settings
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/vxlan_settings/add_item`, data);
  }

  /**
   * Execute del item for interfaces vxlan_settings
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/vxlan_settings/del_item/${uuid}`, data);
  }

  /**
   * Get get for interfaces vxlan_settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/vxlan_settings/get`);
  }

  /**
   * Get get item for interfaces vxlan_settings
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/interfaces/interfaces/vxlan_settings/get_item/${uuid}`);
  }

  /**
   * Execute reconfigure for interfaces vxlan_settings
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/interfaces/interfaces/vxlan_settings/reconfigure`, data);
  }

  /**
   * Execute set for interfaces vxlan_settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/vxlan_settings/set`, data);
  }

  /**
   * Execute set item for interfaces vxlan_settings
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/interfaces/vxlan_settings/set_item/${uuid}`, data);
  }
}

// Main module class
export class InterfacesModule extends BaseModule {
  public readonly gifSettings: InterfacesGifSettings;
  public readonly greSettings: InterfacesGreSettings;
  public readonly laggSettings: InterfacesLaggSettings;
  public readonly loopbackSettings: InterfacesLoopbackSettings;
  public readonly neighborSettings: InterfacesNeighborSettings;
  public readonly overview: InterfacesOverview;
  public readonly vipSettings: InterfacesVipSettings;
  public readonly vlanSettings: InterfacesVlanSettings;
  public readonly vxlanSettings: InterfacesVxlanSettings;

  constructor(http: any) {
    super(http);
    this.gifSettings = new InterfacesGifSettings(http);
    this.greSettings = new InterfacesGreSettings(http);
    this.laggSettings = new InterfacesLaggSettings(http);
    this.loopbackSettings = new InterfacesLoopbackSettings(http);
    this.neighborSettings = new InterfacesNeighborSettings(http);
    this.overview = new InterfacesOverview(http);
    this.vipSettings = new InterfacesVipSettings(http);
    this.vlanSettings = new InterfacesVlanSettings(http);
    this.vxlanSettings = new InterfacesVxlanSettings(http);
  }

}