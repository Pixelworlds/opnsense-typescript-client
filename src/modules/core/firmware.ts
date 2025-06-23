import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class FirmwareModule extends BaseModule {
  async getInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/firmware/info');
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/firmware/status');
  }

  async checkUpdates(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/check');
  }

  async update(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/update');
  }

  async upgrade(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/upgrade');
  }

  async getUpgradeStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/firmware/upgradestatus');
  }

  async audit(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/audit');
  }

  async getChangelog(version: string): Promise<ApiResponse<any>> {
    return this.http.post(`/api/core/firmware/changelog/${version}`);
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

  async installPackage(packageName: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/firmware/install/${packageName}`);
  }

  async removePackage(packageName: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/firmware/remove/${packageName}`);
  }

  async reinstallPackage(packageName: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/firmware/reinstall/${packageName}`);
  }

  async lockPackage(packageName: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/firmware/lock/${packageName}`);
  }

  async unlockPackage(packageName: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/firmware/unlock/${packageName}`);
  }

  async getPackageDetails(packageName: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/firmware/details/${packageName}`);
  }

  async getPackageLicense(packageName: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/firmware/license/${packageName}`);
  }

  async resyncPlugins(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/resyncPlugins');
  }

  async syncPlugins(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/syncPlugins');
  }

  async poweroff(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/poweroff');
  }

  async reboot(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/reboot');
  }

  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/firmware/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/core/firmware/set', config);
  }

  async getOptions(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/firmware/getOptions');
  }
}
