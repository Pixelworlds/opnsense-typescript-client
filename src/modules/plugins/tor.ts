import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class TorExitacl extends BaseModule {
  /**
   * Execute addacl for tor exitacl
   */
  async addacl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/exitacl/addacl`, data);
  }

  /**
   * Execute delacl for tor exitacl
   */
  async delacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/exitacl/delacl/${uuid}`, data);
  }

  /**
   * Get get for tor exitacl
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tor/tor/exitacl/get`);
  }

  /**
   * Get getacl for tor exitacl
   */
  async getacl(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tor/tor/exitacl/getacl/${uuid}`);
  }

  /**
   * Execute set for tor exitacl
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/exitacl/set`, data);
  }

  /**
   * Execute setacl for tor exitacl
   */
  async setacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/exitacl/setacl/${uuid}`, data);
  }

  /**
   * Execute toggleacl for tor exitacl
   */
  async toggleacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/exitacl/toggleacl/${uuid}`, data);
  }
}

export class TorGeneral extends BaseModule {
  /**
   * Execute addhidservauth for tor general
   */
  async addhidservauth(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/general/addhidservauth`, data);
  }

  /**
   * Execute delhidservauth for tor general
   */
  async delhidservauth(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/general/delhidservauth/${uuid}`, data);
  }

  /**
   * Get get for tor general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tor/tor/general/get`);
  }

  /**
   * Get gethidservauth for tor general
   */
  async gethidservauth(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tor/tor/general/gethidservauth/${uuid}`);
  }

  /**
   * Execute set for tor general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/general/set`, data);
  }

  /**
   * Execute sethidservauth for tor general
   */
  async sethidservauth(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/general/sethidservauth/${uuid}`, data);
  }

  /**
   * Execute togglehidservauth for tor general
   */
  async togglehidservauth(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/general/togglehidservauth/${uuid}`, data);
  }
}

export class TorHiddenservice extends BaseModule {
  /**
   * Execute addservice for tor hiddenservice
   */
  async addservice(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/hiddenservice/addservice`, data);
  }

  /**
   * Execute delservice for tor hiddenservice
   */
  async delservice(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/hiddenservice/delservice/${uuid}`, data);
  }

  /**
   * Get get for tor hiddenservice
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tor/tor/hiddenservice/get`);
  }

  /**
   * Get getservice for tor hiddenservice
   */
  async getservice(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tor/tor/hiddenservice/getservice/${uuid}`);
  }

  /**
   * Execute set for tor hiddenservice
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/hiddenservice/set`, data);
  }

  /**
   * Execute setservice for tor hiddenservice
   */
  async setservice(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/hiddenservice/setservice/${uuid}`, data);
  }

  /**
   * Execute toggleservice for tor hiddenservice
   */
  async toggleservice(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/hiddenservice/toggleservice/${uuid}`, data);
  }
}

export class TorHiddenserviceacl extends BaseModule {
  /**
   * Execute addacl for tor hiddenserviceacl
   */
  async addacl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/hiddenserviceacl/addacl`, data);
  }

  /**
   * Execute delacl for tor hiddenserviceacl
   */
  async delacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/hiddenserviceacl/delacl/${uuid}`, data);
  }

  /**
   * Get get for tor hiddenserviceacl
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tor/tor/hiddenserviceacl/get`);
  }

  /**
   * Get getacl for tor hiddenserviceacl
   */
  async getacl(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tor/tor/hiddenserviceacl/getacl/${uuid}`);
  }

  /**
   * Execute set for tor hiddenserviceacl
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/hiddenserviceacl/set`, data);
  }

  /**
   * Execute setacl for tor hiddenserviceacl
   */
  async setacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/hiddenserviceacl/setacl/${uuid}`, data);
  }

  /**
   * Execute toggleacl for tor hiddenserviceacl
   */
  async toggleacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/hiddenserviceacl/toggleacl/${uuid}`, data);
  }
}

export class TorRelay extends BaseModule {
  /**
   * Get get for tor relay
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tor/tor/relay/get`);
  }

  /**
   * Execute set for tor relay
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/relay/set`, data);
  }
}

export class TorService extends BaseModule {
  /**
   * Get circuits for tor service
   */
  async circuits(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tor/tor/service/circuits`);
  }

  /**
   * Get get hidden services for tor service
   */
  async getHiddenServices(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tor/tor/service/get_hidden_services`);
  }

  /**
   * Execute reconfigure for tor service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tor/tor/service/reconfigure`);
  }

  /**
   * Execute restart for tor service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tor/tor/service/restart`);
  }

  /**
   * Execute start for tor service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tor/tor/service/start`);
  }

  /**
   * Get status for tor service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/tor/tor/service/status`);
  }

  /**
   * Execute stop for tor service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/tor/tor/service/stop`);
  }

  /**
   * Get streams for tor service
   */
  async streams(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tor/tor/service/streams`);
  }
}

export class TorSocksacl extends BaseModule {
  /**
   * Execute addacl for tor socksacl
   */
  async addacl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/socksacl/addacl`, data);
  }

  /**
   * Execute delacl for tor socksacl
   */
  async delacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/socksacl/delacl/${uuid}`, data);
  }

  /**
   * Get get for tor socksacl
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tor/tor/socksacl/get`);
  }

  /**
   * Get getacl for tor socksacl
   */
  async getacl(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tor/tor/socksacl/getacl/${uuid}`);
  }

  /**
   * Execute set for tor socksacl
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/socksacl/set`, data);
  }

  /**
   * Execute setacl for tor socksacl
   */
  async setacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/socksacl/setacl/${uuid}`, data);
  }

  /**
   * Execute toggleacl for tor socksacl
   */
  async toggleacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tor/tor/socksacl/toggleacl/${uuid}`, data);
  }
}

// Main module class
export class TorModule extends BaseModule {
  public readonly exitacl: TorExitacl;
  public readonly general: TorGeneral;
  public readonly hiddenservice: TorHiddenservice;
  public readonly hiddenserviceacl: TorHiddenserviceacl;
  public readonly relay: TorRelay;
  public readonly service: TorService;
  public readonly socksacl: TorSocksacl;

  constructor(http: any) {
    super(http);
    this.exitacl = new TorExitacl(http);
    this.general = new TorGeneral(http);
    this.hiddenservice = new TorHiddenservice(http);
    this.hiddenserviceacl = new TorHiddenserviceacl(http);
    this.relay = new TorRelay(http);
    this.service = new TorService(http);
    this.socksacl = new TorSocksacl(http);
  }

}