import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class OpenvpnClientOverwrites extends BaseModule {
  /**
   * Execute add for openvpn client_overwrites
   */
  async add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/client_overwrites/add`, data);
  }

  /**
   * Execute del for openvpn client_overwrites
   */
  async del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/client_overwrites/del/${uuid}`, data);
  }

  /**
   * Get get for openvpn client_overwrites
   */
  async get(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/openvpn/openvpn/client_overwrites/get/${uuid}`);
  }

  /**
   * Execute set for openvpn client_overwrites
   */
  async set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/client_overwrites/set/${uuid}`, data);
  }

  /**
   * Execute toggle for openvpn client_overwrites
   */
  async toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/client_overwrites/toggle/${uuid}/${enabled}`, data);
  }
}

export class OpenvpnExport extends BaseModule {
  /**
   * Get accounts for openvpn export
   */
  async accounts(vpnid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/openvpn/openvpn/export/accounts/${vpnid}`);
  }

  /**
   * Execute download for openvpn export
   */
  async download(vpnid: string, certref: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/export/download/${vpnid}/${certref}`, data);
  }

  /**
   * Get providers for openvpn export
   */
  async providers(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/openvpn/openvpn/export/providers`);
  }

  /**
   * Execute store presets for openvpn export
   */
  async storePresets(vpnid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/export/store_presets/${vpnid}`, data);
  }

  /**
   * Get templates for openvpn export
   */
  async templates(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/openvpn/openvpn/export/templates`);
  }

  /**
   * Execute validate presets for openvpn export
   */
  async validatePresets(vpnid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/export/validate_presets/${vpnid}`, data);
  }
}

export class OpenvpnInstances extends BaseModule {
  /**
   * Execute add for openvpn instances
   */
  async add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/instances/add`, data);
  }

  /**
   * Execute add static key for openvpn instances
   */
  async addStaticKey(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/instances/add_static_key`, data);
  }

  /**
   * Execute del for openvpn instances
   */
  async del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/instances/del/${uuid}`, data);
  }

  /**
   * Execute del static key for openvpn instances
   */
  async delStaticKey(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/instances/del_static_key/${uuid}`, data);
  }

  /**
   * Get gen key for openvpn instances
   */
  async genKey(type: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/openvpn/openvpn/instances/gen_key/${type}`);
  }

  /**
   * Get get for openvpn instances
   */
  async get(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/openvpn/openvpn/instances/get/${uuid}`);
  }

  /**
   * Get get static key for openvpn instances
   */
  async getStaticKey(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/openvpn/openvpn/instances/get_static_key/${uuid}`);
  }

  /**
   * Execute set for openvpn instances
   */
  async set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/instances/set/${uuid}`, data);
  }

  /**
   * Execute set static key for openvpn instances
   */
  async setStaticKey(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/instances/set_static_key/${uuid}`, data);
  }

  /**
   * Execute toggle for openvpn instances
   */
  async toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/instances/toggle/${uuid}/${enabled}`, data);
  }
}

export class OpenvpnService extends BaseModule {
  /**
   * Execute kill session for openvpn service
   */
  async killSession(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/service/kill_session`, data);
  }

  /**
   * Execute reconfigure for openvpn service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/openvpn/openvpn/service/reconfigure`, data);
  }

  /**
   * Execute restart service for openvpn service
   */
  async restartService(id: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/service/restart_service/${id}`, data);
  }

  /**
   * Get search routes for openvpn service
   */
  async searchRoutes(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/openvpn/openvpn/service/search_routes`);
  }

  /**
   * Get search sessions for openvpn service
   */
  async searchSessions(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/openvpn/openvpn/service/search_sessions`);
  }

  /**
   * Execute start service for openvpn service
   */
  async startService(id: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/service/start_service/${id}`, data);
  }

  /**
   * Execute stop service for openvpn service
   */
  async stopService(id: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/openvpn/service/stop_service/${id}`, data);
  }
}

// Main module class
export class OpenvpnModule extends BaseModule {
  public readonly clientOverwrites: OpenvpnClientOverwrites;
  public readonly export: OpenvpnExport;
  public readonly instances: OpenvpnInstances;
  public readonly service: OpenvpnService;

  constructor(http: any) {
    super(http);
    this.clientOverwrites = new OpenvpnClientOverwrites(http);
    this.export = new OpenvpnExport(http);
    this.instances = new OpenvpnInstances(http);
    this.service = new OpenvpnService(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/openvpn/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/openvpn/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/openvpn/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/openvpn/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/openvpn/service/reconfigure');
  }
}