import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class FirmwareInfo {
  constructor(private http: any) {}

  async getInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/firmware/info');
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/firmware/status');
  }

  async getUpgradeStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/firmware/upgradestatus');
  }

  async getChangelog(version: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/firmware/changelog/${version}`);
  }

  async getConnection(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/firmware/connection');
  }

  async getHealth(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/firmware/health');
  }

  async getLog(clear?: boolean): Promise<ApiResponse<any>> {
    const path = clear ? '/api/core/firmware/log/1' : '/api/core/firmware/log/0';
    return this.http.get(path);
  }

  async getRunning(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/firmware/running');
  }
}

export class FirmwarePackages {
  constructor(private http: any) {}

  async install(packageName: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/firmware/install/${packageName}`);
  }

  async remove(packageName: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/firmware/remove/${packageName}`);
  }

  async reinstall(packageName: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/firmware/reinstall/${packageName}`);
  }

  async lock(packageName: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/firmware/lock/${packageName}`);
  }

  async unlock(packageName: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/firmware/unlock/${packageName}`);
  }

  async getDetails(packageName: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/firmware/details/${packageName}`);
  }

  async getLicense(packageName: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/firmware/license/${packageName}`);
  }
}

export class FirmwarePlugins {
  constructor(private http: any) {}

  async resync(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/resyncPlugins');
  }

  async sync(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/syncPlugins');
  }
}

export class FirmwareService {
  constructor(private http: any) {}

  async check(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/check');
  }

  async update(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/update');
  }

  async upgrade(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/upgrade');
  }

  async audit(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/audit');
  }

  async poweroff(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/poweroff');
  }

  async reboot(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/reboot');
  }
}

export class FirmwareSettings {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/firmware/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/set', config);
  }

  async getOptions(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/firmware/getOptions');
  }
}

export class FirmwareModule extends BaseModule {
  public readonly info: FirmwareInfo;
  public readonly packages: FirmwarePackages;
  public readonly plugins: FirmwarePlugins;
  public readonly service: FirmwareService;
  public readonly settings: FirmwareSettings;

  constructor(httpClient: any) {
    super(httpClient);
    this.info = new FirmwareInfo(this.http);
    this.packages = new FirmwarePackages(this.http);
    this.plugins = new FirmwarePlugins(this.http);
    this.service = new FirmwareService(this.http);
    this.settings = new FirmwareSettings(this.http);
  }

  // Legacy methods for backward compatibility
  async getInfo(): Promise<ApiResponse<any>> {
    return this.info.getInfo();
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.info.getStatus();
  }

  async checkUpdates(): Promise<ApiResponse<ApiResult>> {
    return this.service.check();
  }

  async update(): Promise<ApiResponse<ApiResult>> {
    return this.service.update();
  }

  async upgrade(): Promise<ApiResponse<ApiResult>> {
    return this.service.upgrade();
  }

  async getUpgradeStatus(): Promise<ApiResponse<any>> {
    return this.info.getUpgradeStatus();
  }

  async audit(): Promise<ApiResponse<ApiResult>> {
    return this.service.audit();
  }

  async getChangelog(version: string): Promise<ApiResponse<any>> {
    return this.info.getChangelog(version);
  }

  async getConnection(): Promise<ApiResponse<any>> {
    return this.info.getConnection();
  }

  async getHealth(): Promise<ApiResponse<any>> {
    return this.info.getHealth();
  }

  async getLog(clear?: boolean): Promise<ApiResponse<any>> {
    return this.info.getLog(clear);
  }

  async getRunning(): Promise<ApiResponse<any>> {
    return this.info.getRunning();
  }

  async installPackage(packageName: string): Promise<ApiResponse<ApiResult>> {
    return this.packages.install(packageName);
  }

  async removePackage(packageName: string): Promise<ApiResponse<ApiResult>> {
    return this.packages.remove(packageName);
  }

  async reinstallPackage(packageName: string): Promise<ApiResponse<ApiResult>> {
    return this.packages.reinstall(packageName);
  }

  async lockPackage(packageName: string): Promise<ApiResponse<ApiResult>> {
    return this.packages.lock(packageName);
  }

  async unlockPackage(packageName: string): Promise<ApiResponse<ApiResult>> {
    return this.packages.unlock(packageName);
  }

  async getPackageDetails(packageName: string): Promise<ApiResponse<any>> {
    return this.packages.getDetails(packageName);
  }

  async getPackageLicense(packageName: string): Promise<ApiResponse<any>> {
    return this.packages.getLicense(packageName);
  }

  async resyncPlugins(): Promise<ApiResponse<ApiResult>> {
    return this.plugins.resync();
  }

  async syncPlugins(): Promise<ApiResponse<ApiResult>> {
    return this.plugins.sync();
  }

  async poweroff(): Promise<ApiResponse<ApiResult>> {
    return this.service.poweroff();
  }

  async reboot(): Promise<ApiResponse<ApiResult>> {
    return this.service.reboot();
  }

  async getConfig(): Promise<ApiResponse<any>> {
    return this.settings.get();
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.set(config);
  }

  async getOptions(): Promise<ApiResponse<any>> {
    return this.settings.getOptions();
  }

  // New convenience methods
  async checkForUpdates(): Promise<ApiResponse<ApiResult>> {
    return this.service.check();
  }

  async performUpdate(): Promise<ApiResponse<ApiResult>> {
    return this.service.update();
  }

  async performUpgrade(): Promise<ApiResponse<ApiResult>> {
    return this.service.upgrade();
  }

  async getSystemInfo(): Promise<{
    info: any;
    status: any;
    health: any;
    connection: any;
    running: any;
    timestamp: string;
  }> {
    const [info, status, health, connection, running] = await Promise.allSettled([
      this.getInfo(),
      this.getStatus(),
      this.getHealth(),
      this.getConnection(),
      this.getRunning(),
    ]);

    return {
      info: info.status === 'fulfilled' ? info.value.data : null,
      status: status.status === 'fulfilled' ? status.value.data : null,
      health: health.status === 'fulfilled' ? health.value.data : null,
      connection: connection.status === 'fulfilled' ? connection.value.data : null,
      running: running.status === 'fulfilled' ? running.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }

  async installMultiplePackages(packages: string[]): Promise<{
    results: Array<{ package: string; success: boolean; error?: any }>;
    summary: { installed: number; failed: number };
  }> {
    const results = [];
    let installed = 0;
    let failed = 0;

    for (const pkg of packages) {
      try {
        const result = await this.installPackage(pkg);
        results.push({ package: pkg, success: true });
        installed++;
      } catch (error) {
        results.push({ package: pkg, success: false, error });
        failed++;
      }
    }

    return {
      results,
      summary: { installed, failed },
    };
  }

  async getPackageInfo(packageName: string): Promise<{
    details: any;
    license: any;
    timestamp: string;
  }> {
    const [details, license] = await Promise.allSettled([
      this.getPackageDetails(packageName),
      this.getPackageLicense(packageName),
    ]);

    return {
      details: details.status === 'fulfilled' ? details.value.data : null,
      license: license.status === 'fulfilled' ? license.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }

  async clearAndGetLog(): Promise<ApiResponse<any>> {
    return this.getLog(true);
  }

  async restartSystem(): Promise<ApiResponse<ApiResult>> {
    return this.reboot();
  }

  async shutdownSystem(): Promise<ApiResponse<ApiResult>> {
    return this.poweroff();
  }
}
