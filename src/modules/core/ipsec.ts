import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class IpsecConnections {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/ipsec/connections/search_connection');
    }
    return this.http.post('/api/ipsec/connections/search_connection', params);
  }

  async add(connection: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/connections/add_connection', connection);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ipsec/connections/get_connection/${uuid}` : '/api/ipsec/connections/get';
    return this.http.get(path);
  }

  async set(uuid: string, connection: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/connections/set_connection/${uuid}`, connection);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/connections/del_connection/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/ipsec/connections/toggle_connection/${uuid}/${enabled ? '1' : '0'}`
        : `/api/ipsec/connections/toggle_connection/${uuid}`;
    return this.http.post(path);
  }

  async isEnabled(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ipsec/connections/is_enabled');
  }

  async toggleService(enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined ? `/api/ipsec/connections/toggle/${enabled ? '1' : '0'}` : '/api/ipsec/connections/toggle';
    return this.http.post(path);
  }

  async getSwanctl(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ipsec/connections/swanctl');
  }

  // Local endpoint management
  async addLocal(local: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/connections/add_local', local);
  }

  async deleteLocal(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/connections/del_local/${uuid}`);
  }

  async getLocal(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ipsec/connections/get_local/${uuid}` : '/api/ipsec/connections/get_local';
    return this.http.get(path);
  }

  async setLocal(uuid: string, local: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/connections/set_local/${uuid}`, local);
  }

  // Remote endpoint management
  async addRemote(remote: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/connections/add_remote', remote);
  }

  async deleteRemote(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/connections/del_remote/${uuid}`);
  }

  async getRemote(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ipsec/connections/get_remote/${uuid}` : '/api/ipsec/connections/get_remote';
    return this.http.get(path);
  }

  async setRemote(uuid: string, remote: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/connections/set_remote/${uuid}`, remote);
  }
}

export class IpsecChildren {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/ipsec/connections/search_child');
    }
    return this.http.post('/api/ipsec/connections/search_child', params);
  }

  async add(child: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/connections/add_child', child);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ipsec/connections/get_child/${uuid}` : '/api/ipsec/connections/get_child';
    return this.http.get(path);
  }

  async set(uuid: string, child: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/connections/set_child/${uuid}`, child);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/connections/del_child/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/ipsec/connections/toggle_child/${uuid}/${enabled ? '1' : '0'}`
        : `/api/ipsec/connections/toggle_child/${uuid}`;
    return this.http.post(path);
  }
}

export class IpsecKeyPairs {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/ipsec/key_pairs/search_item');
    }
    return this.http.post('/api/ipsec/key_pairs/search_item', params);
  }

  async add(keyPair: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/key_pairs/add_item', keyPair);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ipsec/key_pairs/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ipsec/key_pairs/get_item/${uuid}` : '/api/ipsec/key_pairs/get_item';
    return this.http.get(path);
  }

  async setItem(uuid: string, keyPair: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/key_pairs/set_item/${uuid}`, keyPair);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/key_pairs/del_item/${uuid}`);
  }

  async generate(type: string, size?: number): Promise<ApiResponse<any>> {
    const path = size
      ? `/api/ipsec/key_pairs/gen_key_pair/${type}/${size}`
      : `/api/ipsec/key_pairs/gen_key_pair/${type}`;
    return this.http.get(path);
  }
}

export class IpsecLeases {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/ipsec/leases/search', params);
  }

  async getPools(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ipsec/leases/pools');
  }
}

export class IpsecManualSpd {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/ipsec/manual_spd/search_item', params);
  }

  async add(spd: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/manual_spd/add_item', spd);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ipsec/manual_spd/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ipsec/manual_spd/get_item/${uuid}` : '/api/ipsec/manual_spd/get_item';
    return this.http.get(path);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/manual_spd/set', config);
  }

  async setItem(uuid: string, spd: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/manual_spd/set_item/${uuid}`, spd);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/manual_spd/del_item/${uuid}`);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/manual_spd/reconfigure');
  }
}

export class IpsecPools {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/ipsec/pools/search_item', params);
  }

  async add(pool: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/pools/add_item', pool);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ipsec/pools/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ipsec/pools/get_item/${uuid}` : '/api/ipsec/pools/get_item';
    return this.http.get(path);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/pools/set', config);
  }

  async setItem(uuid: string, pool: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/pools/set_item/${uuid}`, pool);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/pools/del_item/${uuid}`);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/pools/reconfigure');
  }
}

export class IpsecPreSharedKeys {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/ipsec/pre_shared_keys/search_item', params);
  }

  async add(psk: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/pre_shared_keys/add_item', psk);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ipsec/pre_shared_keys/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ipsec/pre_shared_keys/get_item/${uuid}` : '/api/ipsec/pre_shared_keys/get_item';
    return this.http.get(path);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/pre_shared_keys/set', config);
  }

  async setItem(uuid: string, psk: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/pre_shared_keys/set_item/${uuid}`, psk);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/pre_shared_keys/del_item/${uuid}`);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/pre_shared_keys/reconfigure');
  }
}

export class IpsecSessions {
  constructor(private http: any) {}

  async searchPhase1(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/ipsec/sessions/search_phase1', params);
  }

  async searchPhase2(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/ipsec/sessions/search_phase2', params);
  }

  async connect(id: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/sessions/connect/${id}`);
  }

  async disconnect(id: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/sessions/disconnect/${id}`);
  }
}

export class IpsecService {
  constructor(private http: any) {}

  async getStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ipsec/service/status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/service/start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/service/stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/service/reconfigure');
  }
}

export class IpsecTunnel {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/ipsec/tunnel/search_item', params);
  }

  async add(tunnel: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/tunnel/add_item', tunnel);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ipsec/tunnel/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ipsec/tunnel/get_item/${uuid}` : '/api/ipsec/tunnel/get_item';
    return this.http.get(path);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/tunnel/set', config);
  }

  async setItem(uuid: string, tunnel: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/tunnel/set_item/${uuid}`, tunnel);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/tunnel/del_item/${uuid}`);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/tunnel/reconfigure');
  }
}

export class IpsecVti {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/ipsec/vti/search_item', params);
  }

  async add(vti: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/vti/add_item', vti);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/ipsec/vti/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/ipsec/vti/get_item/${uuid}` : '/api/ipsec/vti/get_item';
    return this.http.get(path);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/vti/set', config);
  }

  async setItem(uuid: string, vti: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/vti/set_item/${uuid}`, vti);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/vti/del_item/${uuid}`);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/ipsec/vti/reconfigure');
  }
}

export class IPsecModule extends BaseModule {
  public readonly connections: IpsecConnections;
  public readonly children: IpsecChildren;
  public readonly keyPairs: IpsecKeyPairs;
  public readonly leases: IpsecLeases;
  public readonly manualSpd: IpsecManualSpd;
  public readonly pools: IpsecPools;
  public readonly preSharedKeys: IpsecPreSharedKeys;
  public readonly sessions: IpsecSessions;
  public readonly service: IpsecService;
  public readonly tunnel: IpsecTunnel;
  public readonly vti: IpsecVti;

  constructor(httpClient: any) {
    super(httpClient);
    this.connections = new IpsecConnections(this.http);
    this.children = new IpsecChildren(this.http);
    this.keyPairs = new IpsecKeyPairs(this.http);
    this.leases = new IpsecLeases(this.http);
    this.manualSpd = new IpsecManualSpd(this.http);
    this.pools = new IpsecPools(this.http);
    this.preSharedKeys = new IpsecPreSharedKeys(this.http);
    this.sessions = new IpsecSessions(this.http);
    this.service = new IpsecService(this.http);
    this.tunnel = new IpsecTunnel(this.http);
    this.vti = new IpsecVti(this.http);
  }

  // Legacy methods for backward compatibility
  async isEnabled(): Promise<ApiResponse<any>> {
    return this.connections.isEnabled();
  }

  async toggleService(enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.connections.toggleService(enabled);
  }

  async searchConnections(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.connections.search(params);
  }

  async addConnection(connection: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.connections.add(connection);
  }

  async getConnection(uuid?: string): Promise<ApiResponse<any>> {
    return this.connections.get(uuid);
  }

  async updateConnection(uuid: string, connection: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.connections.set(uuid, connection);
  }

  async deleteConnection(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.connections.delete(uuid);
  }

  async toggleConnection(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.connections.toggle(uuid, enabled);
  }

  async searchChildren(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.children.search(params);
  }

  async addChild(child: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.children.add(child);
  }

  async getChild(uuid?: string): Promise<ApiResponse<any>> {
    return this.children.get(uuid);
  }

  async updateChild(uuid: string, child: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.children.set(uuid, child);
  }

  async deleteChild(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.children.delete(uuid);
  }

  async toggleChild(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.children.toggle(uuid, enabled);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.service.start();
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.service.stop();
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.service.restart();
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.service.reconfigure();
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.service.getStatus();
  }

  async searchPhase1Sessions(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.sessions.searchPhase1(params);
  }

  async searchPhase2Sessions(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.sessions.searchPhase2(params);
  }

  async connectSession(id: string): Promise<ApiResponse<ApiResult>> {
    return this.sessions.connect(id);
  }

  async disconnectSession(id: string): Promise<ApiResponse<ApiResult>> {
    return this.sessions.disconnect(id);
  }

  async searchLeases(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.leases.search(params);
  }

  async getPools(): Promise<ApiResponse<any>> {
    return this.leases.getPools();
  }

  async generateKeyPair(type: string, size?: number): Promise<ApiResponse<any>> {
    return this.keyPairs.generate(type, size);
  }

  async searchKeyPairs(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.keyPairs.search(params);
  }

  async addKeyPair(keyPair: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.keyPairs.add(keyPair);
  }

  async getSwanctl(): Promise<ApiResponse<any>> {
    return this.connections.getSwanctl();
  }

  // New convenience methods
  async getAllConnections(): Promise<ApiResponse<any>> {
    return this.connections.search();
  }

  async getAllChildren(): Promise<ApiResponse<any>> {
    return this.children.search();
  }

  async getAllKeyPairs(): Promise<ApiResponse<any>> {
    return this.keyPairs.search();
  }

  async getAllPreSharedKeys(): Promise<ApiResponse<any>> {
    return this.preSharedKeys.search();
  }

  async getAllPools(): Promise<ApiResponse<any>> {
    return this.pools.search();
  }

  async getAllTunnels(): Promise<ApiResponse<any>> {
    return this.tunnel.search();
  }

  async getAllVtis(): Promise<ApiResponse<any>> {
    return this.vti.search();
  }

  async enableConnection(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.connections.toggle(uuid, true);
  }

  async disableConnection(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.connections.toggle(uuid, false);
  }

  async enableChild(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.children.toggle(uuid, true);
  }

  async disableChild(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.children.toggle(uuid, false);
  }

  async createConnection(
    name: string,
    local: string,
    remote: string,
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const connection = {
      enabled: '1',
      description: description || `IPsec connection ${name}`,
      local_addrs: local,
      remote_addrs: remote,
      version: '2',
      aggressive: '0',
    };
    return this.connections.add(connection);
  }

  async createPreSharedKey(ident: string, secret: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const psk = {
      enabled: '1',
      ident,
      secret,
      description: description || `PSK for ${ident}`,
    };
    return this.preSharedKeys.add(psk);
  }

  async createPool(name: string, addrs: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const pool = {
      enabled: '1',
      name,
      addrs,
      description: description || `IP pool ${name}`,
    };
    return this.pools.add(pool);
  }

  async createVti(reqid: string, local: string, remote: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const vti = {
      enabled: '1',
      reqid,
      local_addr: local,
      remote_addr: remote,
      description: description || `VTI ${reqid}: ${local} -> ${remote}`,
    };
    return this.vti.add(vti);
  }

  async getIpsecOverview(): Promise<{
    status: any;
    connections: any;
    children: any;
    sessions: { phase1: any; phase2: any };
    leases: any;
    pools: any;
    keyPairs: any;
    preSharedKeys: any;
    timestamp: string;
  }> {
    const [status, connections, children, phase1, phase2, leases, pools, keyPairs, preSharedKeys] =
      await Promise.allSettled([
        this.getStatus(),
        this.getAllConnections(),
        this.getAllChildren(),
        this.searchPhase1Sessions(),
        this.searchPhase2Sessions(),
        this.searchLeases(),
        this.getAllPools(),
        this.getAllKeyPairs(),
        this.getAllPreSharedKeys(),
      ]);

    return {
      status: status.status === 'fulfilled' ? status.value.data : null,
      connections: connections.status === 'fulfilled' ? connections.value.data : null,
      children: children.status === 'fulfilled' ? children.value.data : null,
      sessions: {
        phase1: phase1.status === 'fulfilled' ? phase1.value.data : null,
        phase2: phase2.status === 'fulfilled' ? phase2.value.data : null,
      },
      leases: leases.status === 'fulfilled' ? leases.value.data : null,
      pools: pools.status === 'fulfilled' ? pools.value.data : null,
      keyPairs: keyPairs.status === 'fulfilled' ? keyPairs.value.data : null,
      preSharedKeys: preSharedKeys.status === 'fulfilled' ? preSharedKeys.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }

  async disconnectAllSessions(): Promise<{
    results: Array<{ session: string; success: boolean; error?: any }>;
    summary: { disconnected: number; failed: number };
  }> {
    const phase1Sessions = await this.searchPhase1Sessions();
    const sessions = phase1Sessions.data?.rows || [];

    const results = [];
    let disconnected = 0;
    let failed = 0;

    for (const session of sessions) {
      try {
        await this.disconnectSession(session.id);
        results.push({ session: session.id, success: true });
        disconnected++;
      } catch (error) {
        results.push({ session: session.id, success: false, error });
        failed++;
      }
    }

    return {
      results,
      summary: { disconnected, failed },
    };
  }

  async generateRsaKeyPair(size: number = 2048): Promise<ApiResponse<any>> {
    return this.keyPairs.generate('rsa', size);
  }

  async generateEcdsaKeyPair(): Promise<ApiResponse<any>> {
    return this.keyPairs.generate('ecdsa');
  }

  async reconfigureAll(): Promise<{
    results: Array<{ component: string; success: boolean; error?: any }>;
    summary: { successful: number; failed: number };
  }> {
    const components = [
      { name: 'service', op: () => this.reconfigure() },
      { name: 'pools', op: () => this.pools.reconfigure() },
      { name: 'preSharedKeys', op: () => this.preSharedKeys.reconfigure() },
      { name: 'manualSpd', op: () => this.manualSpd.reconfigure() },
      { name: 'tunnel', op: () => this.tunnel.reconfigure() },
      { name: 'vti', op: () => this.vti.reconfigure() },
    ];

    const results = [];
    let successful = 0;
    let failed = 0;

    for (const { name, op } of components) {
      try {
        await op();
        results.push({ component: name, success: true });
        successful++;
      } catch (error) {
        results.push({ component: name, success: false, error });
        failed++;
      }
    }

    return {
      results,
      summary: { successful, failed },
    };
  }
}
