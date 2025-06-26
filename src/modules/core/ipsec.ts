import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class IpsecConnections extends BaseModule {
  /**
   * Execute add child for ipsec connections
   */
  async addChild(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/add_child`, data);
  }

  /**
   * Execute add connection for ipsec connections
   */
  async addConnection(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/add_connection`, data);
  }

  /**
   * Execute add local for ipsec connections
   */
  async addLocal(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/add_local`, data);
  }

  /**
   * Execute add remote for ipsec connections
   */
  async addRemote(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/add_remote`, data);
  }

  /**
   * Get connection exists for ipsec connections
   */
  async connectionExists(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/connections/connection_exists/${uuid}`);
  }

  /**
   * Execute del child for ipsec connections
   */
  async delChild(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/del_child/${uuid}`, data);
  }

  /**
   * Execute del connection for ipsec connections
   */
  async delConnection(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/del_connection/${uuid}`, data);
  }

  /**
   * Execute del local for ipsec connections
   */
  async delLocal(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/del_local/${uuid}`, data);
  }

  /**
   * Execute del remote for ipsec connections
   */
  async delRemote(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/del_remote/${uuid}`, data);
  }

  /**
   * Get get for ipsec connections
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/connections/get`);
  }

  /**
   * Get get child for ipsec connections
   */
  async getChild(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/connections/get_child/${uuid}`);
  }

  /**
   * Get get connection for ipsec connections
   */
  async getConnection(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/connections/get_connection/${uuid}`);
  }

  /**
   * Get get local for ipsec connections
   */
  async getLocal(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/connections/get_local/${uuid}`);
  }

  /**
   * Get get remote for ipsec connections
   */
  async getRemote(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/connections/get_remote/${uuid}`);
  }

  /**
   * Get is enabled for ipsec connections
   */
  async isEnabled(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/connections/is_enabled`);
  }

  /**
   * Execute set for ipsec connections
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/set`, data);
  }

  /**
   * Execute set child for ipsec connections
   */
  async setChild(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/set_child/${uuid}`, data);
  }

  /**
   * Execute set connection for ipsec connections
   */
  async setConnection(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/set_connection/${uuid}`, data);
  }

  /**
   * Execute set local for ipsec connections
   */
  async setLocal(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/set_local/${uuid}`, data);
  }

  /**
   * Execute set remote for ipsec connections
   */
  async setRemote(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/set_remote/${uuid}`, data);
  }

  /**
   * Get swanctl for ipsec connections
   */
  async swanctl(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/connections/swanctl`);
  }

  /**
   * Execute toggle for ipsec connections
   */
  async toggle(enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/toggle/${enabled}`, data);
  }

  /**
   * Execute toggle child for ipsec connections
   */
  async toggleChild(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/toggle_child/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle connection for ipsec connections
   */
  async toggleConnection(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/toggle_connection/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle local for ipsec connections
   */
  async toggleLocal(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/toggle_local/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle remote for ipsec connections
   */
  async toggleRemote(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/connections/toggle_remote/${uuid}/${enabled}`, data);
  }
}

export class IpsecKeyPairs extends BaseModule {
  /**
   * Execute add item for ipsec key_pairs
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/key_pairs/add_item`, data);
  }

  /**
   * Execute del item for ipsec key_pairs
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/key_pairs/del_item/${uuid}`, data);
  }

  /**
   * Get gen key pair for ipsec key_pairs
   */
  async genKeyPair(type: string, size: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/key_pairs/gen_key_pair/${type}/${size}`);
  }

  /**
   * Get get for ipsec key_pairs
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/key_pairs/get`);
  }

  /**
   * Get get item for ipsec key_pairs
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/key_pairs/get_item/${uuid}`);
  }

  /**
   * Execute set for ipsec key_pairs
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/key_pairs/set`, data);
  }

  /**
   * Execute set item for ipsec key_pairs
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/key_pairs/set_item/${uuid}`, data);
  }
}

export class IpsecLeases extends BaseModule {
  /**
   * Get pools for ipsec leases
   */
  async pools(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/leases/pools`);
  }

  /**
   * Get search for ipsec leases
   */
  async search(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/ipsec/ipsec/leases/search`);
  }
}

export class IpsecLegacySubsystem extends BaseModule {
  /**
   * Execute apply config for ipsec legacy_subsystem
   */
  async applyConfig(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/legacy_subsystem/apply_config`, data);
  }

  /**
   * Get status for ipsec legacy_subsystem
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/ipsec/ipsec/legacy_subsystem/status`);
  }
}

export class IpsecManualSpd extends BaseModule {
  /**
   * Execute add for ipsec manual_spd
   */
  async add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/manual_spd/add`, data);
  }

  /**
   * Execute del for ipsec manual_spd
   */
  async del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/manual_spd/del/${uuid}`, data);
  }

  /**
   * Get get for ipsec manual_spd
   */
  async get(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/manual_spd/get/${uuid}`);
  }

  /**
   * Execute set for ipsec manual_spd
   */
  async set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/manual_spd/set/${uuid}`, data);
  }

  /**
   * Execute toggle for ipsec manual_spd
   */
  async toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/manual_spd/toggle/${uuid}/${enabled}`, data);
  }
}

export class IpsecPools extends BaseModule {
  /**
   * Execute add for ipsec pools
   */
  async add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/pools/add`, data);
  }

  /**
   * Execute del for ipsec pools
   */
  async del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/pools/del/${uuid}`, data);
  }

  /**
   * Get get for ipsec pools
   */
  async get(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/pools/get/${uuid}`);
  }

  /**
   * Execute set for ipsec pools
   */
  async set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/pools/set/${uuid}`, data);
  }

  /**
   * Execute toggle for ipsec pools
   */
  async toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/pools/toggle/${uuid}/${enabled}`, data);
  }
}

export class IpsecPreSharedKeys extends BaseModule {
  /**
   * Execute add item for ipsec pre_shared_keys
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/pre_shared_keys/add_item`, data);
  }

  /**
   * Execute del item for ipsec pre_shared_keys
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/pre_shared_keys/del_item/${uuid}`, data);
  }

  /**
   * Get get for ipsec pre_shared_keys
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/pre_shared_keys/get`);
  }

  /**
   * Get get item for ipsec pre_shared_keys
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/pre_shared_keys/get_item/${uuid}`);
  }

  /**
   * Execute set for ipsec pre_shared_keys
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/pre_shared_keys/set`, data);
  }

  /**
   * Execute set item for ipsec pre_shared_keys
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/pre_shared_keys/set_item/${uuid}`, data);
  }
}

export class IpsecSad extends BaseModule {
  /**
   * Execute delete for ipsec sad
   */
  async delete(id: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/sad/delete/${id}`, data);
  }

  /**
   * Get search for ipsec sad
   */
  async search(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/ipsec/ipsec/sad/search`);
  }
}

export class IpsecService extends BaseModule {
  /**
   * Execute reconfigure for ipsec service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ipsec/ipsec/service/reconfigure`, data);
  }

  /**
   * Execute restart for ipsec service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ipsec/ipsec/service/restart`, data);
  }

  /**
   * Execute start for ipsec service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ipsec/ipsec/service/start`, data);
  }

  /**
   * Get status for ipsec service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/ipsec/ipsec/service/status`);
  }

  /**
   * Execute stop for ipsec service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/ipsec/ipsec/service/stop`, data);
  }
}

export class IpsecSessions extends BaseModule {
  /**
   * Execute connect for ipsec sessions
   */
  async connect(id: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/sessions/connect/${id}`, data);
  }

  /**
   * Execute disconnect for ipsec sessions
   */
  async disconnect(id: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/sessions/disconnect/${id}`, data);
  }

  /**
   * Get search phase1 for ipsec sessions
   */
  async searchPhase1(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/ipsec/ipsec/sessions/search_phase1`);
  }

  /**
   * Get search phase2 for ipsec sessions
   */
  async searchPhase2(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/ipsec/ipsec/sessions/search_phase2`);
  }
}

export class IpsecSettings extends BaseModule {
  /**
   * Get get for ipsec settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/settings/get`);
  }

  /**
   * Execute set for ipsec settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/settings/set`, data);
  }
}

export class IpsecSpd extends BaseModule {
  /**
   * Execute delete for ipsec spd
   */
  async delete(id: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/spd/delete/${id}`, data);
  }

  /**
   * Get search for ipsec spd
   */
  async search(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/ipsec/ipsec/spd/search`);
  }
}

export class IpsecTunnel extends BaseModule {
  /**
   * Execute del phase1 for ipsec tunnel
   */
  async delPhase1(ikeid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/tunnel/del_phase1/${ikeid}`, data);
  }

  /**
   * Execute del phase2 for ipsec tunnel
   */
  async delPhase2(seqid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/tunnel/del_phase2/${seqid}`, data);
  }

  /**
   * Get search phase1 for ipsec tunnel
   */
  async searchPhase1(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/ipsec/ipsec/tunnel/search_phase1`);
  }

  /**
   * Get search phase2 for ipsec tunnel
   */
  async searchPhase2(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/ipsec/ipsec/tunnel/search_phase2`);
  }

  /**
   * Execute toggle for ipsec tunnel
   */
  async toggle(enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/tunnel/toggle/${enabled}`, data);
  }

  /**
   * Execute toggle phase1 for ipsec tunnel
   */
  async togglePhase1(ikeid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/tunnel/toggle_phase1/${ikeid}/${enabled}`, data);
  }

  /**
   * Execute toggle phase2 for ipsec tunnel
   */
  async togglePhase2(seqid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/tunnel/toggle_phase2/${seqid}/${enabled}`, data);
  }
}

export class IpsecVti extends BaseModule {
  /**
   * Execute add for ipsec vti
   */
  async add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/vti/add`, data);
  }

  /**
   * Execute del for ipsec vti
   */
  async del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/vti/del/${uuid}`, data);
  }

  /**
   * Get get for ipsec vti
   */
  async get(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/ipsec/ipsec/vti/get/${uuid}`);
  }

  /**
   * Execute set for ipsec vti
   */
  async set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/vti/set/${uuid}`, data);
  }

  /**
   * Execute toggle for ipsec vti
   */
  async toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/ipsec/ipsec/vti/toggle/${uuid}/${enabled}`, data);
  }
}

// Main module class
export class IpsecModule extends BaseModule {
  public readonly connections: IpsecConnections;
  public readonly keyPairs: IpsecKeyPairs;
  public readonly leases: IpsecLeases;
  public readonly legacySubsystem: IpsecLegacySubsystem;
  public readonly manualSpd: IpsecManualSpd;
  public readonly pools: IpsecPools;
  public readonly preSharedKeys: IpsecPreSharedKeys;
  public readonly sad: IpsecSad;
  public readonly service: IpsecService;
  public readonly sessions: IpsecSessions;
  public readonly settings: IpsecSettings;
  public readonly spd: IpsecSpd;
  public readonly tunnel: IpsecTunnel;
  public readonly vti: IpsecVti;

  constructor(http: any) {
    super(http);
    this.connections = new IpsecConnections(http);
    this.keyPairs = new IpsecKeyPairs(http);
    this.leases = new IpsecLeases(http);
    this.legacySubsystem = new IpsecLegacySubsystem(http);
    this.manualSpd = new IpsecManualSpd(http);
    this.pools = new IpsecPools(http);
    this.preSharedKeys = new IpsecPreSharedKeys(http);
    this.sad = new IpsecSad(http);
    this.service = new IpsecService(http);
    this.sessions = new IpsecSessions(http);
    this.settings = new IpsecSettings(http);
    this.spd = new IpsecSpd(http);
    this.tunnel = new IpsecTunnel(http);
    this.vti = new IpsecVti(http);
  }

}