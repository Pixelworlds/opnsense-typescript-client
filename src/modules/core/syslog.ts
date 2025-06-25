import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class SyslogSettings {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/syslog/settings/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/syslog/settings/set', config);
  }

  async searchDestinations(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/syslog/settings/search_destinations');
    }
    return this.http.post('/api/syslog/settings/search_destinations', params);
  }

  async addDestination(destination: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/syslog/settings/add_destination', destination);
  }

  async getDestination(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/syslog/settings/get_destination/${uuid}` : '/api/syslog/settings/get_destination';
    return this.http.get(path);
  }

  async setDestination(uuid: string, destination: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/syslog/settings/set_destination/${uuid}`, destination);
  }

  async deleteDestination(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/syslog/settings/del_destination/${uuid}`);
  }

  async toggleDestination(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/syslog/settings/toggle_destination/${uuid}/${enabled ? '1' : '0'}`
      : `/api/syslog/settings/toggle_destination/${uuid}`;
    return this.http.post(path);
  }
}

export class SyslogService {
  constructor(private http: any) {}

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/syslog/service/reconfigure');
  }

  async reset(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/syslog/service/reset');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/syslog/service/restart');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/syslog/service/start');
  }

  async stats(): Promise<ApiResponse<any>> {
    return this.http.get('/api/syslog/service/stats');
  }

  async status(): Promise<ApiResponse<any>> {
    return this.http.get('/api/syslog/service/status');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/syslog/service/stop');
  }
}

export class SyslogModule extends BaseModule {
  public readonly settings: SyslogSettings;
  public readonly service: SyslogService;

  constructor(httpClient: any) {
    super(httpClient);
    this.settings = new SyslogSettings(this.http);
    this.service = new SyslogService(this.http);
  }

  // Legacy methods for backward compatibility
  async getConfig(): Promise<ApiResponse<any>> {
    return this.settings.get();
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.set(config);
  }

  async searchDestinations(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.settings.searchDestinations(params);
  }

  async addDestination(destination: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.addDestination(destination);
  }

  async getDestination(uuid?: string): Promise<ApiResponse<any>> {
    return this.settings.getDestination(uuid);
  }

  async updateDestination(uuid: string, destination: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.setDestination(uuid, destination);
  }

  async deleteDestination(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.deleteDestination(uuid);
  }

  async toggleDestination(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleDestination(uuid, enabled);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.service.start();
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.service.stop();
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.service.restart();
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.service.reconfigure();
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.service.status();
  }

  async reset(): Promise<ApiResponse<ApiResult>> {
    return this.service.reset();
  }

  async getStats(): Promise<ApiResponse<any>> {
    return this.service.stats();
  }

  // New convenience methods
  async getAllDestinations(): Promise<ApiResponse<any>> {
    return this.settings.searchDestinations();
  }

  async enableDestination(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleDestination(uuid, true);
  }

  async disableDestination(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleDestination(uuid, false);
  }

  async createDestination(
    hostname: string,
    port: number,
    transport: string = 'udp4',
    facility: string = 'kern',
    level: string = 'info',
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const destination = {
      enabled: '1',
      hostname,
      port: port.toString(),
      transport,
      facility,
      level,
      description: description || `Syslog destination ${hostname}:${port}`
    };
    return this.settings.addDestination(destination);
  }

  async getSyslogOverview(): Promise<{
    config: any;
    destinations: any;
    status: any;
    stats: any;
    timestamp: string;
  }> {
    const [config, destinations, status, stats] = await Promise.allSettled([
      this.getConfig(),
      this.getAllDestinations(),
      this.getStatus(),
      this.getStats()
    ]);

    return {
      config: config.status === 'fulfilled' ? config.value.data : null,
      destinations: destinations.status === 'fulfilled' ? destinations.value.data : null,
      status: status.status === 'fulfilled' ? status.value.data : null,
      stats: stats.status === 'fulfilled' ? stats.value.data : null,
      timestamp: new Date().toISOString()
    };
  }
}
