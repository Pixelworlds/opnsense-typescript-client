import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class RoutingGeneral {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routing/general/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routing/general/set', config);
  }
}

export class RoutingGateways {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/routing/gateways/search_item');
    }
    return this.http.post('/api/routing/gateways/search_item', params);
  }

  async add(gateway: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routing/gateways/add_item', gateway);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routing/gateways/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/routing/gateways/get_item/${uuid}` : '/api/routing/gateways/get_item';
    return this.http.get(path);
  }

  async set(uuid: string, gateway: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routing/gateways/set_item/${uuid}`, gateway);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routing/gateways/del_item/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/routing/gateways/toggle_item/${uuid}/${enabled ? '1' : '0'}`
      : `/api/routing/gateways/toggle_item/${uuid}`;
    return this.http.post(path);
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routing/gateways/status');
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routing/gateways/statistics');
  }

  // Gateway groups
  async searchGroups(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/routing/gateways/search_group');
    }
    return this.http.post('/api/routing/gateways/search_group', params);
  }

  async addGroup(group: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routing/gateways/add_group', group);
  }

  async getGroup(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/routing/gateways/get_group/${uuid}` : '/api/routing/gateways/get_group';
    return this.http.get(path);
  }

  async setGroup(uuid: string, group: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routing/gateways/set_group/${uuid}`, group);
  }

  async deleteGroup(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/routing/gateways/del_group/${uuid}`);
  }

  async toggleGroup(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/routing/gateways/toggle_group/${uuid}/${enabled ? '1' : '0'}`
      : `/api/routing/gateways/toggle_group/${uuid}`;
    return this.http.post(path);
  }
}

export class RoutingProtocols {
  constructor(private http: any) {}

  // OSPF Configuration
  async getOspf(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routing/ospf/get');
  }

  async setOspf(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routing/ospf/set', config);
  }

  // BGP Configuration
  async getBgp(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routing/bgp/get');
  }

  async setBgp(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routing/bgp/set', config);
  }

  // RIP Configuration
  async getRip(): Promise<ApiResponse<any>> {
    return this.http.get('/api/routing/rip/get');
  }

  async setRip(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routing/rip/set', config);
  }
}

export class RoutingService {
  constructor(private http: any) {}

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/routing/service/reconfigure');
  }
}

export class RoutingModule extends BaseModule {
  public readonly general: RoutingGeneral;
  public readonly gateways: RoutingGateways;
  public readonly protocols: RoutingProtocols;
  public readonly service: RoutingService;

  constructor(httpClient: any) {
    super(httpClient);
    this.general = new RoutingGeneral(this.http);
    this.gateways = new RoutingGateways(this.http);
    this.protocols = new RoutingProtocols(this.http);
    this.service = new RoutingService(this.http);
  }

  // Legacy methods for backward compatibility
  async getConfig(): Promise<ApiResponse<any>> {
    return this.general.get();
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.general.set(config);
  }

  async searchGateways(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.gateways.search(params);
  }

  async addGateway(gateway: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.gateways.add(gateway);
  }

  async getGateway(uuid?: string): Promise<ApiResponse<any>> {
    return uuid ? this.gateways.getItem(uuid) : this.gateways.get();
  }

  async updateGateway(uuid: string, gateway: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.gateways.set(uuid, gateway);
  }

  async deleteGateway(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.gateways.delete(uuid);
  }

  async toggleGateway(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.gateways.toggle(uuid, enabled);
  }

  async searchGatewayGroups(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.gateways.searchGroups(params);
  }

  async addGatewayGroup(group: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.gateways.addGroup(group);
  }

  async getGatewayGroup(uuid?: string): Promise<ApiResponse<any>> {
    return this.gateways.getGroup(uuid);
  }

  async updateGatewayGroup(uuid: string, group: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.gateways.setGroup(uuid, group);
  }

  async deleteGatewayGroup(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.gateways.deleteGroup(uuid);
  }

  async toggleGatewayGroup(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.gateways.toggleGroup(uuid, enabled);
  }

  async getGatewayStatus(): Promise<ApiResponse<any>> {
    return this.gateways.getStatus();
  }

  async getGatewayStatistics(): Promise<ApiResponse<any>> {
    return this.gateways.getStatistics();
  }

  async getOspfConfig(): Promise<ApiResponse<any>> {
    return this.protocols.getOspf();
  }

  async setOspfConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.protocols.setOspf(config);
  }

  async getBgpConfig(): Promise<ApiResponse<any>> {
    return this.protocols.getBgp();
  }

  async setBgpConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.protocols.setBgp(config);
  }

  async getRipConfig(): Promise<ApiResponse<any>> {
    return this.protocols.getRip();
  }

  async setRipConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.protocols.setRip(config);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.service.reconfigure();
  }

  // New convenience methods
  async getAllGateways(): Promise<ApiResponse<any>> {
    return this.gateways.search();
  }

  async getAllGatewayGroups(): Promise<ApiResponse<any>> {
    return this.gateways.searchGroups();
  }

  async enableGateway(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.gateways.toggle(uuid, true);
  }

  async disableGateway(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.gateways.toggle(uuid, false);
  }

  async enableGatewayGroup(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.gateways.toggleGroup(uuid, true);
  }

  async disableGatewayGroup(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.gateways.toggleGroup(uuid, false);
  }

  async createGateway(name: string, interface_name: string, gateway: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const gatewayConfig = {
      enabled: '1',
      name,
      interface: interface_name,
      gateway,
      monitor_disable: '0',
      descr: description || `Gateway ${name} via ${interface_name}`
    };
    return this.gateways.add(gatewayConfig);
  }

  async createGatewayGroup(name: string, members: string[], description?: string): Promise<ApiResponse<ApiResult>> {
    const group = {
      enabled: '1',
      name,
      members: members.join(','),
      descr: description || `Gateway group ${name}`
    };
    return this.gateways.addGroup(group);
  }

  async createFailoverGroup(name: string, primary: string, backup: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const group = {
      enabled: '1',
      name,
      members: `${primary}|1,${backup}|2`,
      trigger: 'down',
      descr: description || `Failover group ${name}: ${primary} -> ${backup}`
    };
    return this.gateways.addGroup(group);
  }

  async createLoadBalanceGroup(name: string, gateways: Array<{gateway: string, weight: number}>, description?: string): Promise<ApiResponse<ApiResult>> {
    const members = gateways.map(gw => `${gw.gateway}|${gw.weight}`).join(',');
    const group = {
      enabled: '1',
      name,
      members,
      trigger: 'down',
      descr: description || `Load balance group ${name}`
    };
    return this.gateways.addGroup(group);
  }

  async enableOspf(router_id: string, area: string = '0.0.0.0'): Promise<ApiResponse<ApiResult>> {
    const config = {
      enabled: '1',
      router_id,
      area,
      redistribute: 'connected,static'
    };
    return this.protocols.setOspf(config);
  }

  async enableBgp(asn: string, router_id: string): Promise<ApiResponse<ApiResult>> {
    const config = {
      enabled: '1',
      asn,
      router_id,
      holdtime: '180',
      keepalive: '60'
    };
    return this.protocols.setBgp(config);
  }

  async enableRip(networks: string[]): Promise<ApiResponse<ApiResult>> {
    const config = {
      enabled: '1',
      networks: networks.join(','),
      version: '2'
    };
    return this.protocols.setRip(config);
  }

  async getRoutingOverview(): Promise<{
    config: any;
    gateways: any;
    gatewayGroups: any;
    gatewayStatus: any;
    gatewayStatistics: any;
    protocols: { ospf: any; bgp: any; rip: any };
    timestamp: string;
  }> {
    const [config, gateways, gatewayGroups, gatewayStatus, gatewayStatistics, ospf, bgp, rip] = await Promise.allSettled([
      this.getConfig(),
      this.getAllGateways(),
      this.getAllGatewayGroups(),
      this.getGatewayStatus(),
      this.getGatewayStatistics(),
      this.getOspfConfig(),
      this.getBgpConfig(),
      this.getRipConfig(),
    ]);

    return {
      config: config.status === 'fulfilled' ? config.value.data : null,
      gateways: gateways.status === 'fulfilled' ? gateways.value.data : null,
      gatewayGroups: gatewayGroups.status === 'fulfilled' ? gatewayGroups.value.data : null,
      gatewayStatus: gatewayStatus.status === 'fulfilled' ? gatewayStatus.value.data : null,
      gatewayStatistics: gatewayStatistics.status === 'fulfilled' ? gatewayStatistics.value.data : null,
      protocols: {
        ospf: ospf.status === 'fulfilled' ? ospf.value.data : null,
        bgp: bgp.status === 'fulfilled' ? bgp.value.data : null,
        rip: rip.status === 'fulfilled' ? rip.value.data : null,
      },
      timestamp: new Date().toISOString(),
    };
  }

  async validateGatewayConnectivity(): Promise<{
    results: Array<{ gateway: string; name: string; reachable: boolean; latency?: number; loss?: number }>;
    summary: { total: number; online: number; offline: number };
  }> {
    const [status, gateways] = await Promise.allSettled([
      this.getGatewayStatus(),
      this.getAllGateways(),
    ]);

    const statusData = status.status === 'fulfilled' ? status.value.data : {};
    const gatewayData = gateways.status === 'fulfilled' ? gateways.value.data : { rows: [] };

    const results = [];
    let online = 0;
    let offline = 0;

    for (const gateway of gatewayData.rows || []) {
      const gwStatus = statusData[gateway.name] || {};
      const isOnline = gwStatus.status === 'online' || gwStatus.status === 'none';
      
      results.push({
        gateway: gateway.gateway,
        name: gateway.name,
        reachable: isOnline,
        latency: gwStatus.delay ? parseFloat(gwStatus.delay) : undefined,
        loss: gwStatus.loss ? parseFloat(gwStatus.loss) : undefined,
      });

      if (isOnline) {
        online++;
      } else {
        offline++;
      }
    }

    return {
      results,
      summary: { 
        total: results.length,
        online,
        offline
      }
    };
  }

  async reconfigureAllProtocols(): Promise<{
    results: Array<{ protocol: string; success: boolean; error?: any }>;
    summary: { configured: number; failed: number };
  }> {
    const protocols = [
      { name: 'ospf', config: () => this.getOspfConfig() },
      { name: 'bgp', config: () => this.getBgpConfig() },
      { name: 'rip', config: () => this.getRipConfig() },
    ];

    const results = [];
    let configured = 0;
    let failed = 0;

    // First reconfigure the routing service
    try {
      await this.reconfigure();
    } catch (error) {
      // Continue even if main reconfigure fails
    }

    // Then validate each protocol configuration
    for (const { name, config } of protocols) {
      try {
        const result = await config();
        const isEnabled = result.data?.enabled === '1';
        results.push({ 
          protocol: name, 
          success: true,
          enabled: isEnabled 
        });
        if (isEnabled) configured++;
      } catch (error) {
        results.push({ protocol: name, success: false, error });
        failed++;
      }
    }

    return {
      results,
      summary: { configured, failed }
    };
  }
}