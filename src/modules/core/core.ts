import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class CoreBackup {
  constructor(private http: any) {}

  async getBackups(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/backup/backups');
  }

  async deleteBackup(filename: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/backup/delete_backup/${filename}`);
  }

  async diffBackups(from: string, to: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/backup/diff/${from}/${to}`);
  }

  async downloadBackup(filename: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/backup/download/${filename}`);
  }

  async getProviders(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/backup/providers');
  }

  async revertBackup(filename: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/backup/revert_backup/${filename}`);
  }
}

export class CoreDashboard {
  constructor(private http: any) {}

  async getDashboard(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/dashboard/get_dashboard');
  }

  async getPicture(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/dashboard/picture');
  }

  async getProductInfoFeed(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/dashboard/product_info_feed');
  }

  async restoreDefaults(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/dashboard/restore_defaults');
  }

  async saveWidgets(widgets: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/dashboard/save_widgets', widgets);
  }
}

export class CoreHasync {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/hasync/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/hasync/set', config);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/hasync/reconfigure');
  }
}

export class CoreHasyncStatus {
  constructor(private http: any) {}

  async getRemoteService(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/hasyncstatus/remote_service');
  }

  async getServices(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/hasyncstatus/services');
  }

  async getVersion(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/hasyncstatus/version');
  }

  async restart(service?: string): Promise<ApiResponse<ApiResult>> {
    const path = service ? `/api/core/hasyncstatus/restart/${service}` : '/api/core/hasyncstatus/restart';
    return this.http.post(path);
  }

  async restartAll(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/hasyncstatus/restart_all');
  }

  async start(service: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/hasyncstatus/start/${service}`);
  }

  async stop(service: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/hasyncstatus/stop/${service}`);
  }
}

export class CoreMenu {
  constructor(private http: any) {}

  async search(query?: string): Promise<ApiResponse<any>> {
    const params = query ? { q: query } : {};
    return this.http.get('/api/core/menu/search', params);
  }

  async getTree(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/menu/tree');
  }
}

export class CoreService {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    // Support both GET and POST methods
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/core/service/search');
    }
    return this.http.post('/api/core/service/search', params);
  }

  async start(service: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/service/start/${service}`);
  }

  async stop(service: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/service/stop/${service}`);
  }

  async restart(service: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/service/restart/${service}`);
  }
}

export class CoreSnapshots {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/core/snapshots/search', params);
  }

  async add(snapshot: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/snapshots/add', snapshot);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/core/snapshots/get/${uuid}` : '/api/core/snapshots/get';
    return this.http.get(path);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/snapshots/set', config);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/snapshots/del/${uuid}`);
  }

  async activate(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/snapshots/activate/${uuid}`);
  }

  async isSupported(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/snapshots/is_supported');
  }
}

export class CoreSystem {
  constructor(private http: any) {}

  async getStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/system/status');
  }

  async reboot(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/system/reboot');
  }

  async halt(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/system/halt');
  }

  async dismissStatus(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/system/dismiss_status');
  }
}

export class CoreTunables {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/core/tunables/search_item', params);
  }

  async add(tunable: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/tunables/add_item', tunable);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/tunables/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/core/tunables/get_item/${uuid}` : '/api/core/tunables/get_item';
    return this.http.get(path);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/tunables/set', config);
  }

  async setItem(uuid: string, tunable: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/tunables/set_item/${uuid}`, tunable);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/tunables/del_item/${uuid}`);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/tunables/reconfigure');
  }

  async reset(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/tunables/reset');
  }
}

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

  constructor(httpClient: any) {
    super(httpClient);
    this.backup = new CoreBackup(this.http);
    this.dashboard = new CoreDashboard(this.http);
    this.hasync = new CoreHasync(this.http);
    this.hasyncStatus = new CoreHasyncStatus(this.http);
    this.menu = new CoreMenu(this.http);
    this.service = new CoreService(this.http);
    this.snapshots = new CoreSnapshots(this.http);
    this.system = new CoreSystem(this.http);
    this.tunables = new CoreTunables(this.http);
  }

  // Legacy methods for backward compatibility
  async getConfig(): Promise<ApiResponse<any>> {
    return this.menu.getTree();
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.system.getStatus();
  }

  async reboot(): Promise<ApiResponse<ApiResult>> {
    return this.system.reboot();
  }

  async halt(): Promise<ApiResponse<ApiResult>> {
    return this.system.halt();
  }

  async dismissStatus(): Promise<ApiResponse<ApiResult>> {
    return this.system.dismissStatus();
  }

  // Convenience methods
  async searchServices(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.service.search(params);
  }

  async startService(service: string): Promise<ApiResponse<ApiResult>> {
    return this.service.start(service);
  }

  async stopService(service: string): Promise<ApiResponse<ApiResult>> {
    return this.service.stop(service);
  }

  async restartService(service: string): Promise<ApiResponse<ApiResult>> {
    return this.service.restart(service);
  }

  async searchTunables(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.tunables.search(params);
  }

  async addTunable(tunable: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.tunables.add(tunable);
  }

  async updateTunable(uuid: string, tunable: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.tunables.setItem(uuid, tunable);
  }

  async deleteTunable(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.tunables.delete(uuid);
  }

  async createSnapshot(description: string): Promise<ApiResponse<ApiResult>> {
    return this.snapshots.add({ description });
  }

  async restoreSnapshot(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.snapshots.activate(uuid);
  }

  async deleteSnapshot(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.snapshots.delete(uuid);
  }

  async listBackups(): Promise<ApiResponse<any>> {
    return this.backup.getBackups();
  }

  async downloadBackup(filename: string): Promise<ApiResponse<any>> {
    return this.backup.downloadBackup(filename);
  }

  async restoreBackup(filename: string): Promise<ApiResponse<ApiResult>> {
    return this.backup.revertBackup(filename);
  }

  async searchMenu(query: string): Promise<ApiResponse<any>> {
    return this.menu.search(query);
  }

  async getMenuTree(): Promise<ApiResponse<any>> {
    return this.menu.getTree();
  }

  async getDashboardInfo(): Promise<ApiResponse<any>> {
    return this.dashboard.getDashboard();
  }

  async saveDashboardWidgets(widgets: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.dashboard.saveWidgets(widgets);
  }

  async getHAsyncConfig(): Promise<ApiResponse<any>> {
    return this.hasync.get();
  }

  async setHAsyncConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.hasync.set(config);
  }

  async reconfigureHAsync(): Promise<ApiResponse<ApiResult>> {
    return this.hasync.reconfigure();
  }
}
