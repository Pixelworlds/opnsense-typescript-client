import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class WireguardClient {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/wireguard/client/search_client');
    }
    return this.http.post('/api/wireguard/client/search_client', params);
  }

  async add(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/client/add_client');
  }

  async addBuilder(client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wireguard/client/add_client_builder', client);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/wireguard/client/get_client/${uuid}` : '/api/wireguard/client/get_client';
    return this.http.get(path);
  }

  async getBuilder(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/client/get_client_builder');
  }

  async set(client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wireguard/client/set', client);
  }

  async setClient(uuid: string, client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/client/set_client/${uuid}`, client);
  }

  async del(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/client/del_client/${uuid}`);
  }

  async toggle(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/client/toggle_client/${uuid}`);
  }

  async getServerInfo(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/wireguard/client/get_server_info/${uuid}` : '/api/wireguard/client/get_server_info';
    return this.http.get(path);
  }

  async listServers(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/client/list_servers');
  }

  async psk(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/client/psk');
  }
}

export class WireguardServer {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/wireguard/server/search_server');
    }
    return this.http.post('/api/wireguard/server/search_server', params);
  }

  async add(uuid?: string): Promise<ApiResponse<ApiResult>> {
    const path = uuid ? `/api/wireguard/server/add_server/${uuid}` : '/api/wireguard/server/add_server';
    return this.http.post(path);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/wireguard/server/get_server/${uuid}` : '/api/wireguard/server/get_server';
    return this.http.get(path);
  }

  async set(server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wireguard/server/set', server);
  }

  async setServer(uuid: string, server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/server/set_server/${uuid}`, server);
  }

  async del(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/server/del_server/${uuid}`);
  }

  async toggle(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/server/toggle_server/${uuid}`);
  }

  async keyPair(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/server/key_pair');
  }
}

export class WireguardGeneral {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/general/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wireguard/general/set', config);
  }
}

export class WireguardService {
  constructor(private http: any) {}

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wireguard/service/start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wireguard/service/stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wireguard/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/wireguard/service/reconfigure');
  }

  async status(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/service/status');
  }

  async show(): Promise<ApiResponse<any>> {
    return this.http.get('/api/wireguard/service/show');
  }
}

export class WireguardModule extends BaseModule {
  public readonly client: WireguardClient;
  public readonly server: WireguardServer;
  public readonly general: WireguardGeneral;
  public readonly service: WireguardService;

  constructor(httpClient: any) {
    super(httpClient);
    this.client = new WireguardClient(this.http);
    this.server = new WireguardServer(this.http);
    this.general = new WireguardGeneral(this.http);
    this.service = new WireguardService(this.http);
  }

  // Legacy methods for backward compatibility
  async getConfig(): Promise<ApiResponse<any>> {
    return this.general.get();
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.general.set(config);
  }

  async searchServers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.server.search(params);
  }

  async addServer(uuid?: string): Promise<ApiResponse<ApiResult>> {
    return this.server.add(uuid);
  }

  async getServer(uuid?: string): Promise<ApiResponse<any>> {
    return this.server.get(uuid);
  }

  async updateServer(uuid: string, server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.server.setServer(uuid, server);
  }

  async deleteServer(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.server.del(uuid);
  }

  async toggleServer(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.server.toggle(uuid);
  }

  async searchClients(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.client.search(params);
  }

  async addClient(): Promise<ApiResponse<any>> {
    return this.client.add();
  }

  async addClientBuilder(client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.client.addBuilder(client);
  }

  async getClient(uuid?: string): Promise<ApiResponse<any>> {
    return this.client.get(uuid);
  }

  async updateClient(uuid: string, client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.client.setClient(uuid, client);
  }

  async deleteClient(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.client.del(uuid);
  }

  async toggleClient(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.client.toggle(uuid);
  }

  async keyPair(): Promise<ApiResponse<any>> {
    return this.server.keyPair();
  }

  async presharedKey(): Promise<ApiResponse<any>> {
    return this.client.psk();
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

  async show(): Promise<ApiResponse<any>> {
    return this.service.show();
  }

  async getServerInfo(uuid?: string): Promise<ApiResponse<any>> {
    return this.client.getServerInfo(uuid);
  }

  async listServers(): Promise<ApiResponse<any>> {
    return this.client.listServers();
  }

  // New convenience methods
  async getAllServers(): Promise<ApiResponse<any>> {
    return this.server.search();
  }

  async getAllClients(): Promise<ApiResponse<any>> {
    return this.client.search();
  }

  async createServer(server: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.server.set(server);
  }

  async createClient(client: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.client.set(client);
  }

  async getWireguardOverview(): Promise<{
    config: any;
    servers: any;
    clients: any;
    status: any;
    timestamp: string;
  }> {
    const [config, servers, clients, status] = await Promise.allSettled([
      this.getConfig(),
      this.getAllServers(),
      this.getAllClients(),
      this.getStatus()
    ]);

    return {
      config: config.status === 'fulfilled' ? config.value.data : null,
      servers: servers.status === 'fulfilled' ? servers.value.data : null,
      clients: clients.status === 'fulfilled' ? clients.value.data : null,
      status: status.status === 'fulfilled' ? status.value.data : null,
      timestamp: new Date().toISOString()
    };
  }

  // Legacy method aliases for backward compatibility
  async generateKeyPair(): Promise<ApiResponse<any>> {
    return this.keyPair();
  }

  async generatePresharedKey(): Promise<ApiResponse<any>> {
    return this.presharedKey();
  }

  async searchPeers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    console.warn('searchPeers is deprecated - peers are now managed as clients');
    return this.searchClients(params);
  }

  async addPeer(peer: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    console.warn('addPeer is deprecated - use addClientBuilder instead');
    return this.addClientBuilder(peer);
  }

  async getPeer(uuid?: string): Promise<ApiResponse<any>> {
    console.warn('getPeer is deprecated - use getClient instead');
    return this.getClient(uuid);
  }

  async updatePeer(uuid: string, peer: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    console.warn('updatePeer is deprecated - use updateClient instead');
    return this.updateClient(uuid, peer);
  }

  async deletePeer(uuid: string): Promise<ApiResponse<ApiResult>> {
    console.warn('deletePeer is deprecated - use deleteClient instead');
    return this.deleteClient(uuid);
  }

  async togglePeer(uuid: string): Promise<ApiResponse<ApiResult>> {
    console.warn('togglePeer is deprecated - use toggleClient instead');
    return this.toggleClient(uuid);
  }
}
