import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class ZabbixproxyGeneral extends BaseModule {
  /**
   * Get get for zabbixproxy general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/zabbixproxy/zabbixproxy/general/get`);
  }

  /**
   * Execute set for zabbixproxy general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/zabbixproxy/zabbixproxy/general/set`, data);
  }
}

export class ZabbixproxyService extends BaseModule {
  /**
   * Execute reconfigure for zabbixproxy service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/zabbixproxy/zabbixproxy/service/reconfigure`);
  }

  /**
   * Execute restart for zabbixproxy service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/zabbixproxy/zabbixproxy/service/restart`);
  }

  /**
   * Execute start for zabbixproxy service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/zabbixproxy/zabbixproxy/service/start`);
  }

  /**
   * Get status for zabbixproxy service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/zabbixproxy/zabbixproxy/service/status`);
  }

  /**
   * Execute stop for zabbixproxy service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/zabbixproxy/zabbixproxy/service/stop`);
  }
}

// Main module class
export class ZabbixproxyModule extends BaseModule {
  public readonly general: ZabbixproxyGeneral;
  public readonly service: ZabbixproxyService;

  constructor(http: any) {
    super(http);
    this.general = new ZabbixproxyGeneral(http);
    this.service = new ZabbixproxyService(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/zabbixproxy/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/zabbixproxy/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/zabbixproxy/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/zabbixproxy/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/zabbixproxy/service/reconfigure');
  }
}