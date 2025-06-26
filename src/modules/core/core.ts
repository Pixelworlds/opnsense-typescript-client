import type { ApiResponse, ApiResult, ServiceControl, ServiceStatus } from '../../types/common';
import { BaseModule } from '../base';

// Controller classes
export class CoreBackup extends BaseModule {
  /**
   * Get backups for core backup
   */
  async backups(host: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/backup/backups/${host}`);
  }

  /**
   * Get delete backup for core backup
   */
  async deleteBackup(backup: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/backup/delete_backup/${backup}`);
  }

  /**
   * Get diff for core backup
   */
  async diff(host: string, backup1: string, backup2: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/backup/diff/${host}/${backup1}/${backup2}`);
  }

  /**
   * Get download for core backup
   */
  async download(host: string, backup: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/backup/download/${host}/${backup}`);
  }

  /**
   * Get providers for core backup
   */
  async providers(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/backup/providers`);
  }

  /**
   * Get revert backup for core backup
   */
  async revertBackup(backup: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/backup/revert_backup/${backup}`);
  }
}

export class CoreDashboard extends BaseModule {
  /**
   * Get get dashboard for core dashboard
   */
  async getDashboard(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/dashboard/get_dashboard`);
  }

  /**
   * Get picture for core dashboard
   */
  async picture(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/dashboard/picture`);
  }

  /**
   * Get product info feed for core dashboard
   */
  async productInfoFeed(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/dashboard/product_info_feed`);
  }

  /**
   * Execute restore defaults for core dashboard
   */
  async restoreDefaults(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/dashboard/restore_defaults`, data);
  }

  /**
   * Execute save widgets for core dashboard
   */
  async saveWidgets(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/dashboard/save_widgets`, data);
  }
}

export class CoreHasync extends BaseModule {
  /**
   * Get get for core hasync
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/hasync/get`);
  }

  /**
   * Execute reconfigure for core hasync
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/core/core/hasync/reconfigure`, data);
  }

  /**
   * Execute set for core hasync
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/hasync/set`, data);
  }
}

export class CoreHasyncStatus extends BaseModule {
  /**
   * Get remote service for core hasync_status
   */
  async remoteService(action: string, service: string, service_id: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/hasync_status/remote_service/${action}/${service}/${service_id}`);
  }

  /**
   * Execute restart for core hasync_status
   */
  async restart(service: string, service_id: string, data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/core/core/hasync_status/restart/${service}/${service_id}`, data);
  }

  /**
   * Execute restart all for core hasync_status
   */
  async restartAll(service: string, service_id: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/hasync_status/restart_all/${service}/${service_id}`, data);
  }

  /**
   * Get services for core hasync_status
   */
  async services(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/hasync_status/services`);
  }

  /**
   * Execute start for core hasync_status
   */
  async start(service: string, service_id: string, data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/core/core/hasync_status/start/${service}/${service_id}`, data);
  }

  /**
   * Execute stop for core hasync_status
   */
  async stop(service: string, service_id: string, data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/core/core/hasync_status/stop/${service}/${service_id}`, data);
  }

  /**
   * Get version for core hasync_status
   */
  async version(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/hasync_status/version`);
  }
}

export class CoreMenu extends BaseModule {
  /**
   * Get search for core menu
   */
  override async search<T = any>(path?: string, searchParams: Record<string, any> = {}): Promise<ApiResponse<T>> {
    return super.search<T>(path || '/api/core/core/menu/search', searchParams);
  }

  /**
   * Get tree for core menu
   */
  async tree(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/menu/tree`);
  }
}

export class CoreService extends BaseModule {
  /**
   * Execute restart for core service
   */
  async restart(name: string, id: string, data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/core/core/service/restart/${name}/${id}`, data);
  }

  /**
   * Get search for core service
   */
  override async search<T = any>(path?: string, searchParams: Record<string, any> = {}): Promise<ApiResponse<T>> {
    return super.search<T>(path || '/api/core/core/service/search', searchParams);
  }

  /**
   * Execute start for core service
   */
  async start(name: string, id: string, data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/core/core/service/start/${name}/${id}`, data);
  }

  /**
   * Execute stop for core service
   */
  async stop(name: string, id: string, data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/core/core/service/stop/${name}/${id}`, data);
  }
}

export class CoreSnapshots extends BaseModule {
  /**
   * Execute activate for core snapshots
   */
  async activate(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/snapshots/activate/${uuid}`, data);
  }

  /**
   * Execute add for core snapshots
   */
  async add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/snapshots/add`, data);
  }

  /**
   * Execute del for core snapshots
   */
  async del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/snapshots/del/${uuid}`, data);
  }

  /**
   * Get get for core snapshots
   */
  async get(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/snapshots/get/${uuid}`);
  }

  /**
   * Get is supported for core snapshots
   */
  async isSupported(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/snapshots/is_supported`);
  }

  /**
   * Get search for core snapshots
   */
  override async search<T = any>(path?: string, searchParams: Record<string, any> = {}): Promise<ApiResponse<T>> {
    return super.search<T>(path || '/api/core/core/snapshots/search', searchParams);
  }

  /**
   * Execute set for core snapshots
   */
  async set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/snapshots/set/${uuid}`, data);
  }
}

export class CoreSystem extends BaseModule {
  /**
   * Execute dismiss status for core system
   */
  async dismissStatus(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/system/dismiss_status`, data);
  }

  /**
   * Execute halt for core system
   */
  async halt(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/system/halt`, data);
  }

  /**
   * Execute reboot for core system
   */
  async reboot(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/system/reboot`, data);
  }

  /**
   * Get status for core system
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/core/core/system/status`);
  }
}

export class CoreTunables extends BaseModule {
  /**
   * Execute add item for core tunables
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/tunables/add_item`, data);
  }

  /**
   * Execute del item for core tunables
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/tunables/del_item/${uuid}`, data);
  }

  /**
   * Get get for core tunables
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/tunables/get`);
  }

  /**
   * Get get item for core tunables
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/core/tunables/get_item/${uuid}`);
  }

  /**
   * Execute reconfigure for core tunables
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/core/core/tunables/reconfigure`, data);
  }

  /**
   * Execute reset for core tunables
   */
  async reset(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/tunables/reset`, data);
  }

  /**
   * Execute set for core tunables
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/tunables/set`, data);
  }

  /**
   * Execute set item for core tunables
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/core/tunables/set_item/${uuid}`, data);
  }
}

// Main module class
export class CoreModule extends BaseModule {
  public readonly backup: CoreBackup;
  public readonly dashboard: CoreDashboard;
  public readonly hasync: CoreHasync;
  public readonly hasyncStatus: CoreHasyncStatus;
  public readonly menu: CoreMenu;
  public readonly service: CoreService;
  public readonly snapshots: CoreSnapshots;
  public readonly system: CoreSystem;
  public readonly tunables: CoreTunables;

  constructor(http: any) {
    super(http);
    this.backup = new CoreBackup(http);
    this.dashboard = new CoreDashboard(http);
    this.hasync = new CoreHasync(http);
    this.hasyncStatus = new CoreHasyncStatus(http);
    this.menu = new CoreMenu(http);
    this.service = new CoreService(http);
    this.snapshots = new CoreSnapshots(http);
    this.system = new CoreSystem(http);
    this.tunables = new CoreTunables(http);
  }
}
