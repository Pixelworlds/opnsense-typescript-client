import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class FirmwareFirmware extends BaseModule {
  /**
   * Execute audit for core firmware
   */
  async audit(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/audit`, data);
  }

  /**
   * Execute changelog for core firmware
   */
  async changelog(version: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/changelog/${version}`, data);
  }

  /**
   * Execute check for core firmware
   */
  async check(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/check`, data);
  }

  /**
   * Execute connection for core firmware
   */
  async connection(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/connection`, data);
  }

  /**
   * Get get for core firmware
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firmware/core/firmware/get`);
  }

  /**
   * Get getOptions for core firmware
   */
  async getoptions(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firmware/core/firmware/getOptions`);
  }

  /**
   * Execute health for core firmware
   */
  async health(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/health`, data);
  }

  /**
   * Get info for core firmware
   */
  async info(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firmware/core/firmware/info`);
  }

  /**
   * Execute log for core firmware
   */
  async log(clear: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/log/${clear}`, data);
  }

  /**
   * Execute poweroff for core firmware
   */
  async poweroff(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/poweroff`, data);
  }

  /**
   * Execute reboot for core firmware
   */
  async reboot(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/reboot`, data);
  }

  /**
   * Execute resyncPlugins for core firmware
   */
  async resyncplugins(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/resyncPlugins`, data);
  }

  /**
   * Get running for core firmware
   */
  async running(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firmware/core/firmware/running`);
  }

  /**
   * Execute set for core firmware
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/set`, data);
  }

  /**
   * Execute status for core firmware
   */
  async status(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/status`, data);
  }

  /**
   * Execute syncPlugins for core firmware
   */
  async syncplugins(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/syncPlugins`, data);
  }

  /**
   * Execute update for core firmware
   */
  async update(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/update`, data);
  }

  /**
   * Execute upgrade for core firmware
   */
  async upgrade(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/upgrade`, data);
  }

  /**
   * Get upgradestatus for core firmware
   */
  async upgradestatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/firmware/core/firmware/upgradestatus`);
  }

  /**
   * Execute details for core firmware
   */
  async details(pkg_name: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/details/${pkg_name}`, data);
  }

  /**
   * Execute install for core firmware
   */
  async install(pkg_name: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/install/${pkg_name}`, data);
  }

  /**
   * Execute license for core firmware
   */
  async license(pkg_name: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/license/${pkg_name}`, data);
  }

  /**
   * Execute lock for core firmware
   */
  async lock(pkg_name: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/lock/${pkg_name}`, data);
  }

  /**
   * Execute remove for core firmware
   */
  async remove(pkg_name: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/remove/${pkg_name}`, data);
  }

  /**
   * Execute reinstall for core firmware
   */
  async reinstall(pkg_name: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/reinstall/${pkg_name}`, data);
  }

  /**
   * Execute unlock for core firmware
   */
  async unlock(pkg_name: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firmware/core/firmware/unlock/${pkg_name}`, data);
  }
}

// Main module class
export class FirmwareModule extends BaseModule {
  public readonly firmware: FirmwareFirmware;

  constructor(http: any) {
    super(http);
    this.firmware = new FirmwareFirmware(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/firmware/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/firmware/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/firmware/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/firmware/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/firmware/service/reconfigure');
  }
}