import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class HaproxyExport extends BaseModule {
  /**
   * Get config for haproxy export
   */
  async config(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/export/config`);
  }

  /**
   * Get diff for haproxy export
   */
  async diff(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/export/diff`);
  }

  /**
   * Get download for haproxy export
   */
  async download(type: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/export/download/${type}`);
  }
}

export class HaproxyMaintenance extends BaseModule {
  /**
   * Get cert actions for haproxy maintenance
   */
  async certActions(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/maintenance/cert_actions`);
  }

  /**
   * Get cert diff for haproxy maintenance
   */
  async certDiff(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/maintenance/cert_diff`);
  }

  /**
   * Get cert sync for haproxy maintenance
   */
  async certSync(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/maintenance/cert_sync`);
  }

  /**
   * Get cert sync bulk for haproxy maintenance
   */
  async certSyncBulk(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/maintenance/cert_sync_bulk`);
  }

  /**
   * Execute fetch cron integration for haproxy maintenance
   */
  async fetchCronIntegration(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/maintenance/fetch_cron_integration`, data);
  }

  /**
   * Get get for haproxy maintenance
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/maintenance/get`);
  }

  /**
   * Get search certificate diff for haproxy maintenance
   */
  async searchCertificateDiff(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/haproxy/haproxy/maintenance/search_certificate_diff`);
  }

  /**
   * Get search server for haproxy maintenance
   */
  async searchServer(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/haproxy/haproxy/maintenance/search_server`);
  }

  /**
   * Get server state for haproxy maintenance
   */
  async serverState(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/maintenance/server_state`);
  }

  /**
   * Get server state bulk for haproxy maintenance
   */
  async serverStateBulk(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/maintenance/server_state_bulk`);
  }

  /**
   * Get server weight for haproxy maintenance
   */
  async serverWeight(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/maintenance/server_weight`);
  }

  /**
   * Get server weight bulk for haproxy maintenance
   */
  async serverWeightBulk(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/maintenance/server_weight_bulk`);
  }

  /**
   * Execute set for haproxy maintenance
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/maintenance/set`, data);
  }
}

export class HaproxyService extends BaseModule {
  /**
   * Get configtest for haproxy service
   */
  async configtest(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/service/configtest`);
  }

  /**
   * Execute reconfigure for haproxy service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/haproxy/haproxy/service/reconfigure`);
  }

  /**
   * Execute restart for haproxy service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/haproxy/haproxy/service/restart`);
  }

  /**
   * Execute start for haproxy service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/haproxy/haproxy/service/start`);
  }

  /**
   * Get status for haproxy service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/haproxy/haproxy/service/status`);
  }

  /**
   * Execute stop for haproxy service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/haproxy/haproxy/service/stop`);
  }
}

export class HaproxySettings extends BaseModule {
  /**
   * Execute add acl for haproxy settings
   */
  async addAcl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/add_acl`, data);
  }

  /**
   * Execute add action for haproxy settings
   */
  async addAction(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/add_action`, data);
  }

  /**
   * Execute add backend for haproxy settings
   */
  async addBackend(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/add_backend`, data);
  }

  /**
   * Execute add cpu for haproxy settings
   */
  async addCpu(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/add_cpu`, data);
  }

  /**
   * Execute add errorfile for haproxy settings
   */
  async addErrorfile(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/add_errorfile`, data);
  }

  /**
   * Execute add fcgi for haproxy settings
   */
  async addFcgi(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/add_fcgi`, data);
  }

  /**
   * Execute add frontend for haproxy settings
   */
  async addFrontend(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/add_frontend`, data);
  }

  /**
   * Execute add group for haproxy settings
   */
  async addGroup(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/add_group`, data);
  }

  /**
   * Execute add healthcheck for haproxy settings
   */
  async addHealthcheck(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/add_healthcheck`, data);
  }

  /**
   * Execute add lua for haproxy settings
   */
  async addLua(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/add_lua`, data);
  }

  /**
   * Execute add mapfile for haproxy settings
   */
  async addMapfile(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/add_mapfile`, data);
  }

  /**
   * Execute add server for haproxy settings
   */
  async addServer(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/add_server`, data);
  }

  /**
   * Execute add user for haproxy settings
   */
  async addUser(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/add_user`, data);
  }

  /**
   * Execute addmailer for haproxy settings
   */
  async addmailer(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/addmailer`, data);
  }

  /**
   * Execute addresolver for haproxy settings
   */
  async addresolver(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/addresolver`, data);
  }

  /**
   * Execute del acl for haproxy settings
   */
  async delAcl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/del_acl/${uuid}`, data);
  }

  /**
   * Execute del action for haproxy settings
   */
  async delAction(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/del_action/${uuid}`, data);
  }

  /**
   * Execute del backend for haproxy settings
   */
  async delBackend(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/del_backend/${uuid}`, data);
  }

  /**
   * Execute del cpu for haproxy settings
   */
  async delCpu(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/del_cpu/${uuid}`, data);
  }

  /**
   * Execute del errorfile for haproxy settings
   */
  async delErrorfile(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/del_errorfile/${uuid}`, data);
  }

  /**
   * Execute del fcgi for haproxy settings
   */
  async delFcgi(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/del_fcgi/${uuid}`, data);
  }

  /**
   * Execute del frontend for haproxy settings
   */
  async delFrontend(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/del_frontend/${uuid}`, data);
  }

  /**
   * Execute del group for haproxy settings
   */
  async delGroup(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/del_group/${uuid}`, data);
  }

  /**
   * Execute del healthcheck for haproxy settings
   */
  async delHealthcheck(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/del_healthcheck/${uuid}`, data);
  }

  /**
   * Execute del lua for haproxy settings
   */
  async delLua(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/del_lua/${uuid}`, data);
  }

  /**
   * Execute del mapfile for haproxy settings
   */
  async delMapfile(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/del_mapfile/${uuid}`, data);
  }

  /**
   * Execute del server for haproxy settings
   */
  async delServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/del_server/${uuid}`, data);
  }

  /**
   * Execute del user for haproxy settings
   */
  async delUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/del_user/${uuid}`, data);
  }

  /**
   * Execute delmailer for haproxy settings
   */
  async delmailer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/delmailer/${uuid}`, data);
  }

  /**
   * Execute delresolver for haproxy settings
   */
  async delresolver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/delresolver/${uuid}`, data);
  }

  /**
   * Get get for haproxy settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/get`);
  }

  /**
   * Get get acl for haproxy settings
   */
  async getAcl(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/get_acl/${uuid}`);
  }

  /**
   * Get get action for haproxy settings
   */
  async getAction(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/get_action/${uuid}`);
  }

  /**
   * Get get backend for haproxy settings
   */
  async getBackend(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/get_backend/${uuid}`);
  }

  /**
   * Get get cpu for haproxy settings
   */
  async getCpu(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/get_cpu/${uuid}`);
  }

  /**
   * Get get errorfile for haproxy settings
   */
  async getErrorfile(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/get_errorfile/${uuid}`);
  }

  /**
   * Get get fcgi for haproxy settings
   */
  async getFcgi(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/get_fcgi/${uuid}`);
  }

  /**
   * Get get frontend for haproxy settings
   */
  async getFrontend(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/get_frontend/${uuid}`);
  }

  /**
   * Get get group for haproxy settings
   */
  async getGroup(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/get_group/${uuid}`);
  }

  /**
   * Get get healthcheck for haproxy settings
   */
  async getHealthcheck(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/get_healthcheck/${uuid}`);
  }

  /**
   * Get get lua for haproxy settings
   */
  async getLua(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/get_lua/${uuid}`);
  }

  /**
   * Get get mapfile for haproxy settings
   */
  async getMapfile(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/get_mapfile/${uuid}`);
  }

  /**
   * Get get server for haproxy settings
   */
  async getServer(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/get_server/${uuid}`);
  }

  /**
   * Get get user for haproxy settings
   */
  async getUser(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/get_user/${uuid}`);
  }

  /**
   * Get getmailer for haproxy settings
   */
  async getmailer(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/getmailer/${uuid}`);
  }

  /**
   * Get getresolver for haproxy settings
   */
  async getresolver(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/settings/getresolver/${uuid}`);
  }

  /**
   * Execute set for haproxy settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/set`, data);
  }

  /**
   * Execute set acl for haproxy settings
   */
  async setAcl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/set_acl/${uuid}`, data);
  }

  /**
   * Execute set action for haproxy settings
   */
  async setAction(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/set_action/${uuid}`, data);
  }

  /**
   * Execute set backend for haproxy settings
   */
  async setBackend(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/set_backend/${uuid}`, data);
  }

  /**
   * Execute set cpu for haproxy settings
   */
  async setCpu(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/set_cpu/${uuid}`, data);
  }

  /**
   * Execute set errorfile for haproxy settings
   */
  async setErrorfile(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/set_errorfile/${uuid}`, data);
  }

  /**
   * Execute set fcgi for haproxy settings
   */
  async setFcgi(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/set_fcgi/${uuid}`, data);
  }

  /**
   * Execute set frontend for haproxy settings
   */
  async setFrontend(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/set_frontend/${uuid}`, data);
  }

  /**
   * Execute set group for haproxy settings
   */
  async setGroup(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/set_group/${uuid}`, data);
  }

  /**
   * Execute set healthcheck for haproxy settings
   */
  async setHealthcheck(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/set_healthcheck/${uuid}`, data);
  }

  /**
   * Execute set lua for haproxy settings
   */
  async setLua(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/set_lua/${uuid}`, data);
  }

  /**
   * Execute set mapfile for haproxy settings
   */
  async setMapfile(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/set_mapfile/${uuid}`, data);
  }

  /**
   * Execute set server for haproxy settings
   */
  async setServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/set_server/${uuid}`, data);
  }

  /**
   * Execute set user for haproxy settings
   */
  async setUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/set_user/${uuid}`, data);
  }

  /**
   * Execute setmailer for haproxy settings
   */
  async setmailer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/setmailer/${uuid}`, data);
  }

  /**
   * Execute setresolver for haproxy settings
   */
  async setresolver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/setresolver/${uuid}`, data);
  }

  /**
   * Execute toggle backend for haproxy settings
   */
  async toggleBackend(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/toggle_backend/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle cpu for haproxy settings
   */
  async toggleCpu(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/toggle_cpu/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle frontend for haproxy settings
   */
  async toggleFrontend(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/toggle_frontend/${uuid}`, data);
  }

  /**
   * Execute toggle group for haproxy settings
   */
  async toggleGroup(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/toggle_group/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle lua for haproxy settings
   */
  async toggleLua(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/toggle_lua/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle server for haproxy settings
   */
  async toggleServer(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/toggle_server/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle user for haproxy settings
   */
  async toggleUser(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/toggle_user/${uuid}/${enabled}`, data);
  }

  /**
   * Execute togglemailer for haproxy settings
   */
  async togglemailer(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/togglemailer/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggleresolver for haproxy settings
   */
  async toggleresolver(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/haproxy/haproxy/settings/toggleresolver/${uuid}/${enabled}`, data);
  }
}

export class HaproxyStatistics extends BaseModule {
  /**
   * Get counters for haproxy statistics
   */
  async counters(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/statistics/counters`);
  }

  /**
   * Get info for haproxy statistics
   */
  async info(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/statistics/info`);
  }

  /**
   * Get tables for haproxy statistics
   */
  async tables(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/haproxy/haproxy/statistics/tables`);
  }
}

// Main module class
export class HaproxyModule extends BaseModule {
  public readonly export: HaproxyExport;
  public readonly maintenance: HaproxyMaintenance;
  public readonly service: HaproxyService;
  public readonly settings: HaproxySettings;
  public readonly statistics: HaproxyStatistics;

  constructor(http: any) {
    super(http);
    this.export = new HaproxyExport(http);
    this.maintenance = new HaproxyMaintenance(http);
    this.service = new HaproxyService(http);
    this.settings = new HaproxySettings(http);
    this.statistics = new HaproxyStatistics(http);
  }

}