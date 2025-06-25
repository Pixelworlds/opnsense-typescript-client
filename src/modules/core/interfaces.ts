import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class InterfacesOverview {
  constructor(private http: any) {}

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
}

export class InterfacesGif {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/interfaces/gif_settings/search_item', params);
  }

  async add(gif: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/gif_settings/add_item', gif);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/interfaces/gif_settings/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/interfaces/gif_settings/get_item/${uuid}` : '/api/interfaces/gif_settings/get_item';
    return this.http.get(path);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/gif_settings/set', config);
  }

  async setItem(uuid: string, gif: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/gif_settings/set_item/${uuid}`, gif);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/gif_settings/del_item/${uuid}`);
  }

  async getIfOptions(): Promise<ApiResponse<any>> {
    return this.http.get('/api/interfaces/gif_settings/get_if_options');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/gif_settings/reconfigure');
  }
}

export class InterfacesGre {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/interfaces/gre_settings/search_item', params);
  }

  async add(gre: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/gre_settings/add_item', gre);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/interfaces/gre_settings/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/interfaces/gre_settings/get_item/${uuid}` : '/api/interfaces/gre_settings/get_item';
    return this.http.get(path);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/gre_settings/set', config);
  }

  async setItem(uuid: string, gre: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/gre_settings/set_item/${uuid}`, gre);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/gre_settings/del_item/${uuid}`);
  }

  async getIfOptions(): Promise<ApiResponse<any>> {
    return this.http.get('/api/interfaces/gre_settings/get_if_options');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/gre_settings/reconfigure');
  }
}

export class InterfacesLagg {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/interfaces/lagg_settings/search_item', params);
  }

  async add(lagg: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/lagg_settings/add_item', lagg);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/interfaces/lagg_settings/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/interfaces/lagg_settings/get_item/${uuid}` : '/api/interfaces/lagg_settings/get_item';
    return this.http.get(path);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/lagg_settings/set', config);
  }

  async setItem(uuid: string, lagg: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/lagg_settings/set_item/${uuid}`, lagg);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/lagg_settings/del_item/${uuid}`);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/lagg_settings/reconfigure');
  }
}

export class InterfacesLoopback {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/interfaces/loopback_settings/search_item', params);
  }

  async add(loopback: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/loopback_settings/add_item', loopback);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/interfaces/loopback_settings/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid
      ? `/api/interfaces/loopback_settings/get_item/${uuid}`
      : '/api/interfaces/loopback_settings/get_item';
    return this.http.get(path);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/loopback_settings/set', config);
  }

  async setItem(uuid: string, loopback: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/loopback_settings/set_item/${uuid}`, loopback);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/loopback_settings/del_item/${uuid}`);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/loopback_settings/reconfigure');
  }
}

export class InterfacesNeighbor {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/interfaces/neighbor_settings/search_item', params);
  }

  async add(neighbor: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/neighbor_settings/add_item', neighbor);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/interfaces/neighbor_settings/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid
      ? `/api/interfaces/neighbor_settings/get_item/${uuid}`
      : '/api/interfaces/neighbor_settings/get_item';
    return this.http.get(path);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/neighbor_settings/set', config);
  }

  async setItem(uuid: string, neighbor: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/neighbor_settings/set_item/${uuid}`, neighbor);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/neighbor_settings/del_item/${uuid}`);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/neighbor_settings/reconfigure');
  }
}

export class InterfacesVip {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/interfaces/vip_settings/search_item', params);
  }

  async add(vip: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/vip_settings/add_item', vip);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/interfaces/vip_settings/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/interfaces/vip_settings/get_item/${uuid}` : '/api/interfaces/vip_settings/get_item';
    return this.http.get(path);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/vip_settings/set', config);
  }

  async setItem(uuid: string, vip: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/vip_settings/set_item/${uuid}`, vip);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/vip_settings/del_item/${uuid}`);
  }

  async getUnusedVhid(): Promise<ApiResponse<any>> {
    return this.http.get('/api/interfaces/vip_settings/get_unused_vhid');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/vip_settings/reconfigure');
  }
}

export class InterfacesVlan {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/interfaces/vlan_settings/search_item', params);
  }

  async add(vlan: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/vlan_settings/add_item', vlan);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/interfaces/vlan_settings/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/interfaces/vlan_settings/get_item/${uuid}` : '/api/interfaces/vlan_settings/get_item';
    return this.http.get(path);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/vlan_settings/set', config);
  }

  async setItem(uuid: string, vlan: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/vlan_settings/set_item/${uuid}`, vlan);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/vlan_settings/del_item/${uuid}`);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/vlan_settings/reconfigure');
  }
}

export class InterfacesVxlan {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/interfaces/vxlan_settings/search_item', params);
  }

  async add(vxlan: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/vxlan_settings/add_item', vxlan);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/interfaces/vxlan_settings/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/interfaces/vxlan_settings/get_item/${uuid}` : '/api/interfaces/vxlan_settings/get_item';
    return this.http.get(path);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/vxlan_settings/set', config);
  }

  async setItem(uuid: string, vxlan: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/vxlan_settings/set_item/${uuid}`, vxlan);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/interfaces/vxlan_settings/del_item/${uuid}`);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/interfaces/vxlan_settings/reconfigure');
  }
}

export class InterfacesModule extends BaseModule {
  public readonly overview: InterfacesOverview;
  public readonly gif: InterfacesGif;
  public readonly gre: InterfacesGre;
  public readonly lagg: InterfacesLagg;
  public readonly loopback: InterfacesLoopback;
  public readonly neighbor: InterfacesNeighbor;
  public readonly vip: InterfacesVip;
  public readonly vlan: InterfacesVlan;
  public readonly vxlan: InterfacesVxlan;

  constructor(httpClient: any) {
    super(httpClient);
    this.overview = new InterfacesOverview(this.http);
    this.gif = new InterfacesGif(this.http);
    this.gre = new InterfacesGre(this.http);
    this.lagg = new InterfacesLagg(this.http);
    this.loopback = new InterfacesLoopback(this.http);
    this.neighbor = new InterfacesNeighbor(this.http);
    this.vip = new InterfacesVip(this.http);
    this.vlan = new InterfacesVlan(this.http);
    this.vxlan = new InterfacesVxlan(this.http);
  }

  // Legacy methods for backward compatibility
  async getInterface(interfaceName?: string): Promise<ApiResponse<any>> {
    return this.overview.getInterface(interfaceName);
  }

  async getInterfacesInfo(details: boolean = false): Promise<ApiResponse<any>> {
    return this.overview.getInterfacesInfo(details);
  }

  async reloadInterface(identifier?: string): Promise<ApiResponse<any>> {
    return this.overview.reloadInterface(identifier);
  }

  async export(): Promise<ApiResponse<any>> {
    return this.overview.export();
  }

  async searchVlans(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.vlan.search(params);
  }

  async addVlan(vlan: Record<string, any>): Promise<ApiResponse<any>> {
    return this.vlan.add(vlan);
  }

  async getVlan(uuid?: string): Promise<ApiResponse<any>> {
    return uuid ? this.vlan.getItem(uuid) : this.vlan.get();
  }

  async updateVlan(uuid: string, vlan: Record<string, any>): Promise<ApiResponse<any>> {
    return this.vlan.setItem(uuid, vlan);
  }

  async deleteVlan(uuid: string): Promise<ApiResponse<any>> {
    return this.vlan.delete(uuid);
  }

  async reconfigureVlans(): Promise<ApiResponse<any>> {
    return this.vlan.reconfigure();
  }

  async searchLaggs(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.lagg.search(params);
  }

  async addLagg(lagg: Record<string, any>): Promise<ApiResponse<any>> {
    return this.lagg.add(lagg);
  }

  async getLagg(uuid?: string): Promise<ApiResponse<any>> {
    return uuid ? this.lagg.getItem(uuid) : this.lagg.get();
  }

  async updateLagg(uuid: string, lagg: Record<string, any>): Promise<ApiResponse<any>> {
    return this.lagg.setItem(uuid, lagg);
  }

  async deleteLagg(uuid: string): Promise<ApiResponse<any>> {
    return this.lagg.delete(uuid);
  }

  async reconfigureLaggs(): Promise<ApiResponse<any>> {
    return this.lagg.reconfigure();
  }

  async searchVips(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.vip.search(params);
  }

  async addVip(vip: Record<string, any>): Promise<ApiResponse<any>> {
    return this.vip.add(vip);
  }

  async getVip(uuid?: string): Promise<ApiResponse<any>> {
    return uuid ? this.vip.getItem(uuid) : this.vip.get();
  }

  async updateVip(uuid: string, vip: Record<string, any>): Promise<ApiResponse<any>> {
    return this.vip.setItem(uuid, vip);
  }

  async deleteVip(uuid: string): Promise<ApiResponse<any>> {
    return this.vip.delete(uuid);
  }

  async getUnusedVhid(): Promise<ApiResponse<any>> {
    return this.vip.getUnusedVhid();
  }

  async reconfigureVips(): Promise<ApiResponse<any>> {
    return this.vip.reconfigure();
  }

  // New convenience methods
  async getAllInterfaces(): Promise<ApiResponse<any>> {
    return this.getInterfacesInfo(true);
  }

  async getAllVlans(): Promise<ApiResponse<any>> {
    return this.vlan.search();
  }

  async getAllLaggs(): Promise<ApiResponse<any>> {
    return this.lagg.search();
  }

  async getAllVips(): Promise<ApiResponse<any>> {
    return this.vip.search();
  }

  async getAllGifTunnels(): Promise<ApiResponse<any>> {
    return this.gif.search();
  }

  async getAllGreTunnels(): Promise<ApiResponse<any>> {
    return this.gre.search();
  }

  async getAllLoopbacks(): Promise<ApiResponse<any>> {
    return this.loopback.search();
  }

  async getAllNeighbors(): Promise<ApiResponse<any>> {
    return this.neighbor.search();
  }

  async getAllVxlans(): Promise<ApiResponse<any>> {
    return this.vxlan.search();
  }

  async createVlan(interface_name: string, tag: number, description?: string): Promise<ApiResponse<ApiResult>> {
    const vlan = {
      if: interface_name,
      tag: tag.toString(),
      descr: description || `VLAN ${tag} on ${interface_name}`,
    };
    return this.vlan.add(vlan);
  }

  async createLagg(
    interfaces: string[],
    proto: string = 'lacp',
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const lagg = {
      members: interfaces.join(','),
      proto,
      descr: description || `LAGG with ${interfaces.join(', ')}`,
    };
    return this.lagg.add(lagg);
  }

  async createVip(
    interface_name: string,
    address: string,
    type: string = 'single',
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const vip = {
      interface: interface_name,
      type,
      subnet_bits: type === 'single' ? '32' : '24',
      address,
      descr: description || `VIP ${address} on ${interface_name}`,
    };
    return this.vip.add(vip);
  }

  async createGifTunnel(local: string, remote: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const gif = {
      tunnel_local: local,
      tunnel_remote: remote,
      descr: description || `GIF tunnel ${local} -> ${remote}`,
    };
    return this.gif.add(gif);
  }

  async createGreTunnel(local: string, remote: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const gre = {
      tunnel_local: local,
      tunnel_remote: remote,
      descr: description || `GRE tunnel ${local} -> ${remote}`,
    };
    return this.gre.add(gre);
  }

  async createLoopback(description?: string): Promise<ApiResponse<ApiResult>> {
    const loopback = {
      descr: description || 'Loopback interface',
    };
    return this.loopback.add(loopback);
  }

  async createVxlan(vni: number, local: string, remote: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const vxlan = {
      vxlanid: vni.toString(),
      local: local,
      remote: remote,
      descr: description || `VXLAN ${vni}: ${local} -> ${remote}`,
    };
    return this.vxlan.add(vxlan);
  }

  async getInterfaceOverview(): Promise<{
    interfaces: any;
    vlans: any;
    laggs: any;
    vips: any;
    tunnels: { gif: any; gre: any };
    virtual: { loopbacks: any; vxlans: any };
    neighbors: any;
    timestamp: string;
  }> {
    const [interfaces, vlans, laggs, vips, gif, gre, loopbacks, vxlans, neighbors] = await Promise.allSettled([
      this.getAllInterfaces(),
      this.getAllVlans(),
      this.getAllLaggs(),
      this.getAllVips(),
      this.getAllGifTunnels(),
      this.getAllGreTunnels(),
      this.getAllLoopbacks(),
      this.getAllVxlans(),
      this.getAllNeighbors(),
    ]);

    return {
      interfaces: interfaces.status === 'fulfilled' ? interfaces.value.data : null,
      vlans: vlans.status === 'fulfilled' ? vlans.value.data : null,
      laggs: laggs.status === 'fulfilled' ? laggs.value.data : null,
      vips: vips.status === 'fulfilled' ? vips.value.data : null,
      tunnels: {
        gif: gif.status === 'fulfilled' ? gif.value.data : null,
        gre: gre.status === 'fulfilled' ? gre.value.data : null,
      },
      virtual: {
        loopbacks: loopbacks.status === 'fulfilled' ? loopbacks.value.data : null,
        vxlans: vxlans.status === 'fulfilled' ? vxlans.value.data : null,
      },
      neighbors: neighbors.status === 'fulfilled' ? neighbors.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }

  async reconfigureAllInterfaces(): Promise<{
    results: Array<{ type: string; success: boolean; error?: any }>;
    summary: { successful: number; failed: number };
  }> {
    const reconfigureOps = [
      { type: 'vlans', op: () => this.vlan.reconfigure() },
      { type: 'laggs', op: () => this.lagg.reconfigure() },
      { type: 'vips', op: () => this.vip.reconfigure() },
      { type: 'gif', op: () => this.gif.reconfigure() },
      { type: 'gre', op: () => this.gre.reconfigure() },
      { type: 'loopbacks', op: () => this.loopback.reconfigure() },
      { type: 'neighbors', op: () => this.neighbor.reconfigure() },
      { type: 'vxlans', op: () => this.vxlan.reconfigure() },
    ];

    const results = [];
    let successful = 0;
    let failed = 0;

    for (const { type, op } of reconfigureOps) {
      try {
        await op();
        results.push({ type, success: true });
        successful++;
      } catch (error) {
        results.push({ type, success: false, error });
        failed++;
      }
    }

    return {
      results,
      summary: { successful, failed },
    };
  }
}
