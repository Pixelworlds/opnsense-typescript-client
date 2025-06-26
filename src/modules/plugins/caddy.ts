import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class CaddyDiagnostics extends BaseModule {
  /**
   * Get caddyfile for caddy diagnostics
   */
  async caddyfile(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/caddy/caddy/diagnostics/caddyfile`);
  }

  /**
   * Get config for caddy diagnostics
   */
  async config(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/caddy/caddy/diagnostics/config`);
  }

  /**
   * Get get for caddy diagnostics
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/caddy/caddy/diagnostics/get`);
  }

  /**
   * Execute set for caddy diagnostics
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/diagnostics/set`, data);
  }
}

export class CaddyGeneral extends BaseModule {
  /**
   * Get get for caddy general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/caddy/caddy/general/get`);
  }

  /**
   * Execute set for caddy general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/general/set`, data);
  }
}

export class CaddyReverseProxy extends BaseModule {
  /**
   * Execute add access list for caddy reverse_proxy
   */
  async addAccessList(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/add_access_list`, data);
  }

  /**
   * Execute add basic auth for caddy reverse_proxy
   */
  async addBasicAuth(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/add_basic_auth`, data);
  }

  /**
   * Execute add handle for caddy reverse_proxy
   */
  async addHandle(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/add_handle`, data);
  }

  /**
   * Execute add header for caddy reverse_proxy
   */
  async addHeader(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/add_header`, data);
  }

  /**
   * Execute add layer4 for caddy reverse_proxy
   */
  async addLayer4(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/add_layer4`, data);
  }

  /**
   * Execute add layer4 openvpn for caddy reverse_proxy
   */
  async addLayer4Openvpn(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/add_layer4_openvpn`, data);
  }

  /**
   * Execute add reverse proxy for caddy reverse_proxy
   */
  async addReverseProxy(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/add_reverse_proxy`, data);
  }

  /**
   * Execute add subdomain for caddy reverse_proxy
   */
  async addSubdomain(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/add_subdomain`, data);
  }

  /**
   * Execute del access list for caddy reverse_proxy
   */
  async delAccessList(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/del_access_list/${uuid}`, data);
  }

  /**
   * Execute del basic auth for caddy reverse_proxy
   */
  async delBasicAuth(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/del_basic_auth/${uuid}`, data);
  }

  /**
   * Execute del handle for caddy reverse_proxy
   */
  async delHandle(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/del_handle/${uuid}`, data);
  }

  /**
   * Execute del header for caddy reverse_proxy
   */
  async delHeader(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/del_header/${uuid}`, data);
  }

  /**
   * Execute del layer4 for caddy reverse_proxy
   */
  async delLayer4(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/del_layer4/${uuid}`, data);
  }

  /**
   * Execute del layer4 openvpn for caddy reverse_proxy
   */
  async delLayer4Openvpn(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/del_layer4_openvpn/${uuid}`, data);
  }

  /**
   * Execute del reverse proxy for caddy reverse_proxy
   */
  async delReverseProxy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/del_reverse_proxy/${uuid}`, data);
  }

  /**
   * Execute del subdomain for caddy reverse_proxy
   */
  async delSubdomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/del_subdomain/${uuid}`, data);
  }

  /**
   * Get get for caddy reverse_proxy
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/caddy/caddy/reverse_proxy/get`);
  }

  /**
   * Get get access list for caddy reverse_proxy
   */
  async getAccessList(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/caddy/caddy/reverse_proxy/get_access_list/${uuid}`);
  }

  /**
   * Get get all reverse domains for caddy reverse_proxy
   */
  async getAllReverseDomains(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/caddy/caddy/reverse_proxy/get_all_reverse_domains`);
  }

  /**
   * Get get basic auth for caddy reverse_proxy
   */
  async getBasicAuth(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/caddy/caddy/reverse_proxy/get_basic_auth/${uuid}`);
  }

  /**
   * Get get handle for caddy reverse_proxy
   */
  async getHandle(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/caddy/caddy/reverse_proxy/get_handle/${uuid}`);
  }

  /**
   * Get get header for caddy reverse_proxy
   */
  async getHeader(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/caddy/caddy/reverse_proxy/get_header/${uuid}`);
  }

  /**
   * Get get layer4 for caddy reverse_proxy
   */
  async getLayer4(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/caddy/caddy/reverse_proxy/get_layer4/${uuid}`);
  }

  /**
   * Get get layer4 openvpn for caddy reverse_proxy
   */
  async getLayer4Openvpn(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/caddy/caddy/reverse_proxy/get_layer4_openvpn/${uuid}`);
  }

  /**
   * Get get reverse proxy for caddy reverse_proxy
   */
  async getReverseProxy(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/caddy/caddy/reverse_proxy/get_reverse_proxy/${uuid}`);
  }

  /**
   * Get get subdomain for caddy reverse_proxy
   */
  async getSubdomain(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/caddy/caddy/reverse_proxy/get_subdomain/${uuid}`);
  }

  /**
   * Execute set for caddy reverse_proxy
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/set`, data);
  }

  /**
   * Execute set access list for caddy reverse_proxy
   */
  async setAccessList(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/set_access_list/${uuid}`, data);
  }

  /**
   * Execute set basic auth for caddy reverse_proxy
   */
  async setBasicAuth(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/set_basic_auth/${uuid}`, data);
  }

  /**
   * Execute set handle for caddy reverse_proxy
   */
  async setHandle(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/set_handle/${uuid}`, data);
  }

  /**
   * Execute set header for caddy reverse_proxy
   */
  async setHeader(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/set_header/${uuid}`, data);
  }

  /**
   * Execute set layer4 for caddy reverse_proxy
   */
  async setLayer4(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/set_layer4/${uuid}`, data);
  }

  /**
   * Execute set layer4 openvpn for caddy reverse_proxy
   */
  async setLayer4Openvpn(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/set_layer4_openvpn/${uuid}`, data);
  }

  /**
   * Execute set reverse proxy for caddy reverse_proxy
   */
  async setReverseProxy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/set_reverse_proxy/${uuid}`, data);
  }

  /**
   * Execute set subdomain for caddy reverse_proxy
   */
  async setSubdomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/set_subdomain/${uuid}`, data);
  }

  /**
   * Execute toggle handle for caddy reverse_proxy
   */
  async toggleHandle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/toggle_handle/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle layer4 for caddy reverse_proxy
   */
  async toggleLayer4(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/toggle_layer4/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle layer4 openvpn for caddy reverse_proxy
   */
  async toggleLayer4Openvpn(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/toggle_layer4_openvpn/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle reverse proxy for caddy reverse_proxy
   */
  async toggleReverseProxy(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/toggle_reverse_proxy/${uuid}/${enabled}`, data);
  }

  /**
   * Execute toggle subdomain for caddy reverse_proxy
   */
  async toggleSubdomain(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/caddy/caddy/reverse_proxy/toggle_subdomain/${uuid}/${enabled}`, data);
  }
}

export class CaddyService extends BaseModule {
  /**
   * Execute reconfigure for caddy service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/caddy/caddy/service/reconfigure`);
  }

  /**
   * Execute restart for caddy service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/caddy/caddy/service/restart`);
  }

  /**
   * Execute start for caddy service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/caddy/caddy/service/start`);
  }

  /**
   * Get status for caddy service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/caddy/caddy/service/status`);
  }

  /**
   * Execute stop for caddy service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/caddy/caddy/service/stop`);
  }

  /**
   * Get validate for caddy service
   */
  async validate(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/caddy/caddy/service/validate`);
  }
}

// Main module class
export class CaddyModule extends BaseModule {
  public readonly diagnostics: CaddyDiagnostics;
  public readonly general: CaddyGeneral;
  public readonly reverseProxy: CaddyReverseProxy;
  public readonly service: CaddyService;

  constructor(http: any) {
    super(http);
    this.diagnostics = new CaddyDiagnostics(http);
    this.general = new CaddyGeneral(http);
    this.reverseProxy = new CaddyReverseProxy(http);
    this.service = new CaddyService(http);
  }

}