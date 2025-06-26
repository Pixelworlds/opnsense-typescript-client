import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class DnscryptproxyCloak extends BaseModule {
  /**
   * Execute add cloak for dnscryptproxy cloak
   */
  async addCloak(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/cloak/add_cloak`, data);
  }

  /**
   * Execute del cloak for dnscryptproxy cloak
   */
  async delCloak(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/cloak/del_cloak/${uuid}`, data);
  }

  /**
   * Get get for dnscryptproxy cloak
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnscryptproxy/dnscryptproxy/cloak/get`);
  }

  /**
   * Get get cloak for dnscryptproxy cloak
   */
  async getCloak(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnscryptproxy/dnscryptproxy/cloak/get_cloak/${uuid}`);
  }

  /**
   * Execute set for dnscryptproxy cloak
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/cloak/set`, data);
  }

  /**
   * Execute set cloak for dnscryptproxy cloak
   */
  async setCloak(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/cloak/set_cloak/${uuid}`, data);
  }

  /**
   * Execute toggle cloak for dnscryptproxy cloak
   */
  async toggleCloak(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/cloak/toggle_cloak/${uuid}`, data);
  }
}

export class DnscryptproxyDnsbl extends BaseModule {
  /**
   * Get get for dnscryptproxy dnsbl
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnscryptproxy/dnscryptproxy/dnsbl/get`);
  }

  /**
   * Execute set for dnscryptproxy dnsbl
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/dnsbl/set`, data);
  }
}

export class DnscryptproxyForward extends BaseModule {
  /**
   * Execute add forward for dnscryptproxy forward
   */
  async addForward(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/forward/add_forward`, data);
  }

  /**
   * Execute del forward for dnscryptproxy forward
   */
  async delForward(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/forward/del_forward/${uuid}`, data);
  }

  /**
   * Get get for dnscryptproxy forward
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnscryptproxy/dnscryptproxy/forward/get`);
  }

  /**
   * Get get forward for dnscryptproxy forward
   */
  async getForward(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnscryptproxy/dnscryptproxy/forward/get_forward/${uuid}`);
  }

  /**
   * Execute set for dnscryptproxy forward
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/forward/set`, data);
  }

  /**
   * Execute set forward for dnscryptproxy forward
   */
  async setForward(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/forward/set_forward/${uuid}`, data);
  }

  /**
   * Execute toggle forward for dnscryptproxy forward
   */
  async toggleForward(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/forward/toggle_forward/${uuid}`, data);
  }
}

export class DnscryptproxyGeneral extends BaseModule {
  /**
   * Get get for dnscryptproxy general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnscryptproxy/dnscryptproxy/general/get`);
  }

  /**
   * Execute set for dnscryptproxy general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/general/set`, data);
  }
}

export class DnscryptproxyServer extends BaseModule {
  /**
   * Execute add server for dnscryptproxy server
   */
  async addServer(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/server/add_server`, data);
  }

  /**
   * Execute del server for dnscryptproxy server
   */
  async delServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/server/del_server/${uuid}`, data);
  }

  /**
   * Get get for dnscryptproxy server
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnscryptproxy/dnscryptproxy/server/get`);
  }

  /**
   * Get get server for dnscryptproxy server
   */
  async getServer(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnscryptproxy/dnscryptproxy/server/get_server/${uuid}`);
  }

  /**
   * Execute set for dnscryptproxy server
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/server/set`, data);
  }

  /**
   * Execute set server for dnscryptproxy server
   */
  async setServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/server/set_server/${uuid}`, data);
  }

  /**
   * Execute toggle server for dnscryptproxy server
   */
  async toggleServer(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/server/toggle_server/${uuid}`, data);
  }
}

export class DnscryptproxyService extends BaseModule {
  /**
   * Get dnsbl for dnscryptproxy service
   */
  async dnsbl(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnscryptproxy/dnscryptproxy/service/dnsbl`);
  }

  /**
   * Execute reconfigure for dnscryptproxy service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/service/reconfigure`);
  }

  /**
   * Execute restart for dnscryptproxy service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/service/restart`);
  }

  /**
   * Execute start for dnscryptproxy service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/service/start`);
  }

  /**
   * Get status for dnscryptproxy service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/dnscryptproxy/dnscryptproxy/service/status`);
  }

  /**
   * Execute stop for dnscryptproxy service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/service/stop`);
  }
}

export class DnscryptproxyWhitelist extends BaseModule {
  /**
   * Execute add whitelist for dnscryptproxy whitelist
   */
  async addWhitelist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/whitelist/add_whitelist`, data);
  }

  /**
   * Execute del whitelist for dnscryptproxy whitelist
   */
  async delWhitelist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/whitelist/del_whitelist/${uuid}`, data);
  }

  /**
   * Get get for dnscryptproxy whitelist
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnscryptproxy/dnscryptproxy/whitelist/get`);
  }

  /**
   * Get get whitelist for dnscryptproxy whitelist
   */
  async getWhitelist(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dnscryptproxy/dnscryptproxy/whitelist/get_whitelist/${uuid}`);
  }

  /**
   * Execute set for dnscryptproxy whitelist
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/whitelist/set`, data);
  }

  /**
   * Execute set whitelist for dnscryptproxy whitelist
   */
  async setWhitelist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/whitelist/set_whitelist/${uuid}`, data);
  }

  /**
   * Execute toggle whitelist for dnscryptproxy whitelist
   */
  async toggleWhitelist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/dnscryptproxy/dnscryptproxy/whitelist/toggle_whitelist/${uuid}`, data);
  }
}

// Main module class
export class DnscryptproxyModule extends BaseModule {
  public readonly cloak: DnscryptproxyCloak;
  public readonly dnsbl: DnscryptproxyDnsbl;
  public readonly forward: DnscryptproxyForward;
  public readonly general: DnscryptproxyGeneral;
  public readonly server: DnscryptproxyServer;
  public readonly service: DnscryptproxyService;
  public readonly whitelist: DnscryptproxyWhitelist;

  constructor(http: any) {
    super(http);
    this.cloak = new DnscryptproxyCloak(http);
    this.dnsbl = new DnscryptproxyDnsbl(http);
    this.forward = new DnscryptproxyForward(http);
    this.general = new DnscryptproxyGeneral(http);
    this.server = new DnscryptproxyServer(http);
    this.service = new DnscryptproxyService(http);
    this.whitelist = new DnscryptproxyWhitelist(http);
  }

}