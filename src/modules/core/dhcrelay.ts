import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class DhcrelayService {
  constructor(private http: any) {}

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcrelay/service/reconfigure');
  }
}

export class DhcrelaySettings {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/dhcrelay/settings/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcrelay/settings/set', config);
  }

  // Destination management
  async searchDestinations(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/dhcrelay/settings/search_dest');
    }
    return this.http.post('/api/dhcrelay/settings/search_dest', params);
  }

  async addDestination(destination: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcrelay/settings/add_dest', destination);
  }

  async getDestination(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/dhcrelay/settings/get_dest/${uuid}` : '/api/dhcrelay/settings/get_dest';
    return this.http.get(path);
  }

  async setDestination(uuid: string, destination: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcrelay/settings/set_dest/${uuid}`, destination);
  }

  async deleteDestination(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcrelay/settings/del_dest/${uuid}`);
  }

  // Relay management
  async searchRelays(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/dhcrelay/settings/search_relay');
    }
    return this.http.post('/api/dhcrelay/settings/search_relay', params);
  }

  async addRelay(relay: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/dhcrelay/settings/add_relay', relay);
  }

  async getRelay(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/dhcrelay/settings/get_relay/${uuid}` : '/api/dhcrelay/settings/get_relay';
    return this.http.get(path);
  }

  async setRelay(uuid: string, relay: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcrelay/settings/set_relay/${uuid}`, relay);
  }

  async deleteRelay(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dhcrelay/settings/del_relay/${uuid}`);
  }

  async toggleRelay(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/dhcrelay/settings/toggle_relay/${uuid}/${enabled ? '1' : '0'}`
        : `/api/dhcrelay/settings/toggle_relay/${uuid}`;
    return this.http.post(path);
  }
}

export class DhcrelayModule extends BaseModule {
  public readonly service: DhcrelayService;
  public readonly settings: DhcrelaySettings;

  constructor(httpClient: any) {
    super(httpClient);
    this.service = new DhcrelayService(this.http);
    this.settings = new DhcrelaySettings(this.http);
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
    // Note: Destinations don't have toggle in the API, using relay toggle pattern
    return this.settings.toggleRelay(uuid, enabled);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dhcrelay', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dhcrelay', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('dhcrelay', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.service.reconfigure();
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('dhcrelay', 'status');
  }

  // New convenience methods
  async searchRelays(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.settings.searchRelays(params);
  }

  async addRelay(relay: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.addRelay(relay);
  }

  async getRelay(uuid?: string): Promise<ApiResponse<any>> {
    return this.settings.getRelay(uuid);
  }

  async updateRelay(uuid: string, relay: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.setRelay(uuid, relay);
  }

  async deleteRelay(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.settings.deleteRelay(uuid);
  }

  async toggleRelay(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.settings.toggleRelay(uuid, enabled);
  }

  async enableRelay(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.toggleRelay(uuid, true);
  }

  async disableRelay(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.toggleRelay(uuid, false);
  }

  async getAllDestinations(): Promise<ApiResponse<any>> {
    return this.searchDestinations();
  }

  async getAllRelays(): Promise<ApiResponse<any>> {
    return this.searchRelays();
  }

  async getEnabledRelays(): Promise<ApiResponse<any>> {
    return this.searchRelays({ enabled: '1' });
  }

  async getDisabledRelays(): Promise<ApiResponse<any>> {
    return this.searchRelays({ enabled: '0' });
  }

  async createDestination(server: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const destination = {
      server,
      descr: description || `DHCP server ${server}`,
    };
    return this.addDestination(destination);
  }

  async createRelay(
    interface_name: string,
    destinations: string[],
    description?: string
  ): Promise<ApiResponse<ApiResult>> {
    const relay = {
      enabled: '1',
      interface: interface_name,
      destination: destinations,
      descr: description || `DHCP relay on ${interface_name}`,
    };
    return this.addRelay(relay);
  }

  async getRelayInfo(): Promise<{
    destinations: any;
    relays: any;
    config: any;
    timestamp: string;
  }> {
    const [destinations, relays, config] = await Promise.allSettled([
      this.getAllDestinations(),
      this.getAllRelays(),
      this.getConfig(),
    ]);

    return {
      destinations: destinations.status === 'fulfilled' ? destinations.value.data : null,
      relays: relays.status === 'fulfilled' ? relays.value.data : null,
      config: config.status === 'fulfilled' ? config.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }
}
