import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class WireguardClient extends BaseModule {
  /**
   * Get add client for wireguard client
   */
  async addClient(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wireguard/wireguard/client/add_client`);
  }

  /**
   * Execute add client builder for wireguard client
   */
  async addClientBuilder(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/wireguard/client/add_client_builder`, data);
  }

  /**
   * Execute del client for wireguard client
   */
  async delClient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/wireguard/client/del_client/${uuid}`, data);
  }

  /**
   * Get get for wireguard client
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wireguard/wireguard/client/get`);
  }

  /**
   * Get get client for wireguard client
   */
  async getClient(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wireguard/wireguard/client/get_client/${uuid}`);
  }

  /**
   * Get get client builder for wireguard client
   */
  async getClientBuilder(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wireguard/wireguard/client/get_client_builder`);
  }

  /**
   * Get get server info for wireguard client
   */
  async getServerInfo(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wireguard/wireguard/client/get_server_info/${uuid}`);
  }

  /**
   * Get list servers for wireguard client
   */
  async listServers(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wireguard/wireguard/client/list_servers`);
  }

  /**
   * Get psk for wireguard client
   */
  async psk(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wireguard/wireguard/client/psk`);
  }

  /**
   * Execute set for wireguard client
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/wireguard/client/set`, data);
  }

  /**
   * Execute set client for wireguard client
   */
  async setClient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/wireguard/client/set_client/${uuid}`, data);
  }

  /**
   * Execute toggle client for wireguard client
   */
  async toggleClient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/wireguard/client/toggle_client/${uuid}`, data);
  }
}

export class WireguardGeneral extends BaseModule {
  /**
   * Get get for wireguard general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wireguard/wireguard/general/get`);
  }

  /**
   * Execute set for wireguard general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/wireguard/general/set`, data);
  }
}

export class WireguardServer extends BaseModule {
  /**
   * Execute add server for wireguard server
   */
  async addServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/wireguard/server/add_server/${uuid}`, data);
  }

  /**
   * Execute del server for wireguard server
   */
  async delServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/wireguard/server/del_server/${uuid}`, data);
  }

  /**
   * Get get for wireguard server
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wireguard/wireguard/server/get`);
  }

  /**
   * Get get server for wireguard server
   */
  async getServer(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wireguard/wireguard/server/get_server/${uuid}`);
  }

  /**
   * Get key pair for wireguard server
   */
  async keyPair(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wireguard/wireguard/server/key_pair`);
  }

  /**
   * Execute set for wireguard server
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/wireguard/server/set`, data);
  }

  /**
   * Execute set server for wireguard server
   */
  async setServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/wireguard/server/set_server/${uuid}`, data);
  }

  /**
   * Execute toggle server for wireguard server
   */
  async toggleServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/wireguard/wireguard/server/toggle_server/${uuid}`, data);
  }
}

export class WireguardService extends BaseModule {
  /**
   * Execute reconfigure for wireguard service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/wireguard/wireguard/service/reconfigure`, data);
  }

  /**
   * Execute restart for wireguard service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/wireguard/wireguard/service/restart`, data);
  }

  /**
   * Get show for wireguard service
   */
  async show(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/wireguard/wireguard/service/show`);
  }

  /**
   * Execute start for wireguard service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/wireguard/wireguard/service/start`, data);
  }

  /**
   * Get status for wireguard service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/wireguard/wireguard/service/status`);
  }

  /**
   * Execute stop for wireguard service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/wireguard/wireguard/service/stop`, data);
  }
}

// Main module class
export class WireguardModule extends BaseModule {
  public readonly client: WireguardClient;
  public readonly general: WireguardGeneral;
  public readonly server: WireguardServer;
  public readonly service: WireguardService;

  constructor(http: any) {
    super(http);
    this.client = new WireguardClient(http);
    this.general = new WireguardGeneral(http);
    this.server = new WireguardServer(http);
    this.service = new WireguardService(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/wireguard/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/wireguard/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/wireguard/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/wireguard/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/wireguard/service/reconfigure');
  }
}