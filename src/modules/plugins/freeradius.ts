import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class FreeradiusAvpair extends BaseModule {
  /**
   * Execute add avpair for freeradius avpair
   */
  async addAvpair(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/avpair/add_avpair`, data);
  }

  /**
   * Execute del avpair for freeradius avpair
   */
  async delAvpair(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/avpair/del_avpair/${uuid}`, data);
  }

  /**
   * Get get for freeradius avpair
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/avpair/get`);
  }

  /**
   * Get get avpair for freeradius avpair
   */
  async getAvpair(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/avpair/get_avpair/${uuid}`);
  }

  /**
   * Execute set for freeradius avpair
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/avpair/set`, data);
  }

  /**
   * Execute set avpair for freeradius avpair
   */
  async setAvpair(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/avpair/set_avpair/${uuid}`, data);
  }

  /**
   * Execute toggle avpair for freeradius avpair
   */
  async toggleAvpair(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/avpair/toggle_avpair/${uuid}`, data);
  }
}

export class FreeradiusClient extends BaseModule {
  /**
   * Execute add client for freeradius client
   */
  async addClient(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/client/add_client`, data);
  }

  /**
   * Execute del client for freeradius client
   */
  async delClient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/client/del_client/${uuid}`, data);
  }

  /**
   * Get get for freeradius client
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/client/get`);
  }

  /**
   * Get get client for freeradius client
   */
  async getClient(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/client/get_client/${uuid}`);
  }

  /**
   * Get search client for freeradius client
   */
  async searchClient(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/freeradius/freeradius/client/search_client`);
  }

  /**
   * Execute set for freeradius client
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/client/set`, data);
  }

  /**
   * Execute set client for freeradius client
   */
  async setClient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/client/set_client/${uuid}`, data);
  }

  /**
   * Get toggle client for freeradius client
   */
  async toggleClient(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/client/toggle_client/${uuid}`);
  }
}

export class FreeradiusDhcp extends BaseModule {
  /**
   * Execute add dhcp for freeradius dhcp
   */
  async addDhcp(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/dhcp/add_dhcp`, data);
  }

  /**
   * Execute del dhcp for freeradius dhcp
   */
  async delDhcp(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/dhcp/del_dhcp/${uuid}`, data);
  }

  /**
   * Get get for freeradius dhcp
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/dhcp/get`);
  }

  /**
   * Get get dhcp for freeradius dhcp
   */
  async getDhcp(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/dhcp/get_dhcp/${uuid}`);
  }

  /**
   * Execute set for freeradius dhcp
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/dhcp/set`, data);
  }

  /**
   * Execute set dhcp for freeradius dhcp
   */
  async setDhcp(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/dhcp/set_dhcp/${uuid}`, data);
  }

  /**
   * Execute toggle dhcp for freeradius dhcp
   */
  async toggleDhcp(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/dhcp/toggle_dhcp/${uuid}`, data);
  }
}

export class FreeradiusEap extends BaseModule {
  /**
   * Get get for freeradius eap
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/eap/get`);
  }

  /**
   * Execute set for freeradius eap
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/eap/set`, data);
  }
}

export class FreeradiusGeneral extends BaseModule {
  /**
   * Get get for freeradius general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/general/get`);
  }

  /**
   * Execute set for freeradius general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/general/set`, data);
  }
}

export class FreeradiusLdap extends BaseModule {
  /**
   * Get get for freeradius ldap
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/ldap/get`);
  }

  /**
   * Execute set for freeradius ldap
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/ldap/set`, data);
  }
}

export class FreeradiusLease extends BaseModule {
  /**
   * Execute add lease for freeradius lease
   */
  async addLease(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/lease/add_lease`, data);
  }

  /**
   * Execute del lease for freeradius lease
   */
  async delLease(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/lease/del_lease/${uuid}`, data);
  }

  /**
   * Get get for freeradius lease
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/lease/get`);
  }

  /**
   * Get get lease for freeradius lease
   */
  async getLease(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/lease/get_lease/${uuid}`);
  }

  /**
   * Execute set for freeradius lease
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/lease/set`, data);
  }

  /**
   * Execute set lease for freeradius lease
   */
  async setLease(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/lease/set_lease/${uuid}`, data);
  }

  /**
   * Execute toggle lease for freeradius lease
   */
  async toggleLease(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/lease/toggle_lease/${uuid}`, data);
  }
}

export class FreeradiusProxy extends BaseModule {
  /**
   * Execute add homeserver for freeradius proxy
   */
  async addHomeserver(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/proxy/add_homeserver`, data);
  }

  /**
   * Execute add homeserverpool for freeradius proxy
   */
  async addHomeserverpool(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/proxy/add_homeserverpool`, data);
  }

  /**
   * Execute add realm for freeradius proxy
   */
  async addRealm(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/proxy/add_realm`, data);
  }

  /**
   * Execute del homeserver for freeradius proxy
   */
  async delHomeserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/proxy/del_homeserver/${uuid}`, data);
  }

  /**
   * Execute del homeserverpool for freeradius proxy
   */
  async delHomeserverpool(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/proxy/del_homeserverpool/${uuid}`, data);
  }

  /**
   * Execute del realm for freeradius proxy
   */
  async delRealm(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/proxy/del_realm/${uuid}`, data);
  }

  /**
   * Get get for freeradius proxy
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/proxy/get`);
  }

  /**
   * Get get homeserver for freeradius proxy
   */
  async getHomeserver(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/proxy/get_homeserver/${uuid}`);
  }

  /**
   * Get get homeserverpool for freeradius proxy
   */
  async getHomeserverpool(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/proxy/get_homeserverpool/${uuid}`);
  }

  /**
   * Get get realm for freeradius proxy
   */
  async getRealm(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/proxy/get_realm/${uuid}`);
  }

  /**
   * Get search homeserver for freeradius proxy
   */
  async searchHomeserver(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/freeradius/freeradius/proxy/search_homeserver`);
  }

  /**
   * Get search homeserverpool for freeradius proxy
   */
  async searchHomeserverpool(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/freeradius/freeradius/proxy/search_homeserverpool`);
  }

  /**
   * Get search realm for freeradius proxy
   */
  async searchRealm(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/freeradius/freeradius/proxy/search_realm`);
  }

  /**
   * Execute set for freeradius proxy
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/proxy/set`, data);
  }

  /**
   * Execute set homeserver for freeradius proxy
   */
  async setHomeserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/proxy/set_homeserver/${uuid}`, data);
  }

  /**
   * Execute set homeserverpool for freeradius proxy
   */
  async setHomeserverpool(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/proxy/set_homeserverpool/${uuid}`, data);
  }

  /**
   * Execute set realm for freeradius proxy
   */
  async setRealm(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/proxy/set_realm/${uuid}`, data);
  }

  /**
   * Get toggle homeserver for freeradius proxy
   */
  async toggleHomeserver(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/proxy/toggle_homeserver/${uuid}`);
  }

  /**
   * Get toggle homeserverpool for freeradius proxy
   */
  async toggleHomeserverpool(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/proxy/toggle_homeserverpool/${uuid}`);
  }

  /**
   * Get toggle realm for freeradius proxy
   */
  async toggleRealm(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/proxy/toggle_realm/${uuid}`);
  }
}

export class FreeradiusService extends BaseModule {
  /**
   * Execute reconfigure for freeradius service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/freeradius/freeradius/service/reconfigure`);
  }

  /**
   * Execute restart for freeradius service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/freeradius/freeradius/service/restart`);
  }

  /**
   * Execute start for freeradius service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/freeradius/freeradius/service/start`);
  }

  /**
   * Get status for freeradius service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/freeradius/freeradius/service/status`);
  }

  /**
   * Execute stop for freeradius service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/freeradius/freeradius/service/stop`);
  }
}

export class FreeradiusUser extends BaseModule {
  /**
   * Execute add user for freeradius user
   */
  async addUser(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/user/add_user`, data);
  }

  /**
   * Execute del user for freeradius user
   */
  async delUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/user/del_user/${uuid}`, data);
  }

  /**
   * Get get for freeradius user
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/user/get`);
  }

  /**
   * Get get user for freeradius user
   */
  async getUser(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/user/get_user/${uuid}`);
  }

  /**
   * Get search user for freeradius user
   */
  async searchUser(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/freeradius/freeradius/user/search_user`);
  }

  /**
   * Execute set for freeradius user
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/user/set`, data);
  }

  /**
   * Execute set user for freeradius user
   */
  async setUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/freeradius/freeradius/user/set_user/${uuid}`, data);
  }

  /**
   * Get toggle user for freeradius user
   */
  async toggleUser(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/freeradius/freeradius/user/toggle_user/${uuid}`);
  }
}

// Main module class
export class FreeradiusModule extends BaseModule {
  public readonly avpair: FreeradiusAvpair;
  public readonly client: FreeradiusClient;
  public readonly dhcp: FreeradiusDhcp;
  public readonly eap: FreeradiusEap;
  public readonly general: FreeradiusGeneral;
  public readonly ldap: FreeradiusLdap;
  public readonly lease: FreeradiusLease;
  public readonly proxy: FreeradiusProxy;
  public readonly service: FreeradiusService;
  public readonly user: FreeradiusUser;

  constructor(http: any) {
    super(http);
    this.avpair = new FreeradiusAvpair(http);
    this.client = new FreeradiusClient(http);
    this.dhcp = new FreeradiusDhcp(http);
    this.eap = new FreeradiusEap(http);
    this.general = new FreeradiusGeneral(http);
    this.ldap = new FreeradiusLdap(http);
    this.lease = new FreeradiusLease(http);
    this.proxy = new FreeradiusProxy(http);
    this.service = new FreeradiusService(http);
    this.user = new FreeradiusUser(http);
  }

}