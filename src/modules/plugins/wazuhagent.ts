import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class WazuhagentService extends BaseModule {
  /**
   * Execute reconfigure for wazuhagent service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/wazuhagent/wazuhagent/service/reconfigure`);
  }

  /**
   * Execute restart for wazuhagent service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/wazuhagent/wazuhagent/service/restart`);
  }

  /**
   * Execute start for wazuhagent service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/wazuhagent/wazuhagent/service/start`);
  }

  /**
   * Get status for wazuhagent service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/wazuhagent/wazuhagent/service/status`);
  }

  /**
   * Execute stop for wazuhagent service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/wazuhagent/wazuhagent/service/stop`);
  }
}

export class WazuhagentSettings extends BaseModule {
  /**
   * Get get for wazuhagent settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wazuhagent/wazuhagent/settings/get`);
  }

  /**
   * Execute set for wazuhagent settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wazuhagent/wazuhagent/settings/set`, data);
  }
}

// Main module class
export class WazuhagentModule extends BaseModule {
  public readonly service: WazuhagentService;
  public readonly settings: WazuhagentSettings;

  constructor(http: any) {
    super(http);
    this.service = new WazuhagentService(http);
    this.settings = new WazuhagentSettings(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/wazuhagent/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/wazuhagent/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/wazuhagent/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/wazuhagent/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/wazuhagent/service/reconfigure');
  }
}