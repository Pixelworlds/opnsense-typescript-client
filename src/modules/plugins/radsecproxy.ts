import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class RadsecproxyClients extends BaseModule {
  /**
   * Execute add item for radsecproxy clients
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/clients/add_item`, data);
  }

  /**
   * Execute del item for radsecproxy clients
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/clients/del_item/${uuid}`, data);
  }

  /**
   * Get get for radsecproxy clients
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/radsecproxy/radsecproxy/clients/get`);
  }

  /**
   * Get get item for radsecproxy clients
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/radsecproxy/radsecproxy/clients/get_item/${uuid}`);
  }

  /**
   * Execute set for radsecproxy clients
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/clients/set`, data);
  }

  /**
   * Execute set item for radsecproxy clients
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/clients/set_item/${uuid}`, data);
  }

  /**
   * Execute toggle item for radsecproxy clients
   */
  async toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/clients/toggle_item/${uuid}/${enabled}`, data);
  }
}

export class RadsecproxyGeneral extends BaseModule {
  /**
   * Get get for radsecproxy general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/radsecproxy/radsecproxy/general/get`);
  }

  /**
   * Execute set for radsecproxy general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/general/set`, data);
  }
}

export class RadsecproxyRealms extends BaseModule {
  /**
   * Execute add item for radsecproxy realms
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/realms/add_item`, data);
  }

  /**
   * Execute del item for radsecproxy realms
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/realms/del_item/${uuid}`, data);
  }

  /**
   * Get get for radsecproxy realms
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/radsecproxy/radsecproxy/realms/get`);
  }

  /**
   * Get get item for radsecproxy realms
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/radsecproxy/radsecproxy/realms/get_item/${uuid}`);
  }

  /**
   * Execute set for radsecproxy realms
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/realms/set`, data);
  }

  /**
   * Execute set item for radsecproxy realms
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/realms/set_item/${uuid}`, data);
  }

  /**
   * Execute toggle item for radsecproxy realms
   */
  async toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/realms/toggle_item/${uuid}/${enabled}`, data);
  }
}

export class RadsecproxyRewrites extends BaseModule {
  /**
   * Execute add item for radsecproxy rewrites
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/rewrites/add_item`, data);
  }

  /**
   * Execute del item for radsecproxy rewrites
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/rewrites/del_item/${uuid}`, data);
  }

  /**
   * Get get for radsecproxy rewrites
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/radsecproxy/radsecproxy/rewrites/get`);
  }

  /**
   * Get get item for radsecproxy rewrites
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/radsecproxy/radsecproxy/rewrites/get_item/${uuid}`);
  }

  /**
   * Execute set for radsecproxy rewrites
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/rewrites/set`, data);
  }

  /**
   * Execute set item for radsecproxy rewrites
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/rewrites/set_item/${uuid}`, data);
  }

  /**
   * Execute toggle item for radsecproxy rewrites
   */
  async toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/rewrites/toggle_item/${uuid}/${enabled}`, data);
  }
}

export class RadsecproxyServers extends BaseModule {
  /**
   * Execute add item for radsecproxy servers
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/servers/add_item`, data);
  }

  /**
   * Execute del item for radsecproxy servers
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/servers/del_item/${uuid}`, data);
  }

  /**
   * Get get for radsecproxy servers
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/radsecproxy/radsecproxy/servers/get`);
  }

  /**
   * Get get item for radsecproxy servers
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/radsecproxy/radsecproxy/servers/get_item/${uuid}`);
  }

  /**
   * Execute set for radsecproxy servers
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/servers/set`, data);
  }

  /**
   * Execute set item for radsecproxy servers
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/servers/set_item/${uuid}`, data);
  }

  /**
   * Execute toggle item for radsecproxy servers
   */
  async toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/servers/toggle_item/${uuid}/${enabled}`, data);
  }
}

export class RadsecproxyService extends BaseModule {
  /**
   * Execute reconfigure for radsecproxy service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/service/reconfigure`);
  }

  /**
   * Execute restart for radsecproxy service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/service/restart`);
  }

  /**
   * Execute start for radsecproxy service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/service/start`);
  }

  /**
   * Get status for radsecproxy service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/radsecproxy/radsecproxy/service/status`);
  }

  /**
   * Execute stop for radsecproxy service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/service/stop`);
  }
}

export class RadsecproxyTls extends BaseModule {
  /**
   * Execute add item for radsecproxy tls
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/tls/add_item`, data);
  }

  /**
   * Execute del item for radsecproxy tls
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/tls/del_item/${uuid}`, data);
  }

  /**
   * Get get for radsecproxy tls
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/radsecproxy/radsecproxy/tls/get`);
  }

  /**
   * Get get item for radsecproxy tls
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/radsecproxy/radsecproxy/tls/get_item/${uuid}`);
  }

  /**
   * Execute set for radsecproxy tls
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/tls/set`, data);
  }

  /**
   * Execute set item for radsecproxy tls
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/tls/set_item/${uuid}`, data);
  }

  /**
   * Execute toggle item for radsecproxy tls
   */
  async toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/radsecproxy/radsecproxy/tls/toggle_item/${uuid}/${enabled}`, data);
  }
}

// Main module class
export class RadsecproxyModule extends BaseModule {
  public readonly clients: RadsecproxyClients;
  public readonly general: RadsecproxyGeneral;
  public readonly realms: RadsecproxyRealms;
  public readonly rewrites: RadsecproxyRewrites;
  public readonly servers: RadsecproxyServers;
  public readonly service: RadsecproxyService;
  public readonly tls: RadsecproxyTls;

  constructor(http: any) {
    super(http);
    this.clients = new RadsecproxyClients(http);
    this.general = new RadsecproxyGeneral(http);
    this.realms = new RadsecproxyRealms(http);
    this.rewrites = new RadsecproxyRewrites(http);
    this.servers = new RadsecproxyServers(http);
    this.service = new RadsecproxyService(http);
    this.tls = new RadsecproxyTls(http);
  }

}