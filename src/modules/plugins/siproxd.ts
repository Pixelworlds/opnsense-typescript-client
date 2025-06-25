import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class SiproxdDomain extends BaseModule {
  /**
   * Execute add domain for siproxd domain
   */
  async addDomain(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/siproxd/siproxd/domain/add_domain`, data);
  }

  /**
   * Execute del domain for siproxd domain
   */
  async delDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/siproxd/siproxd/domain/del_domain/${uuid}`, data);
  }

  /**
   * Get get for siproxd domain
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/siproxd/siproxd/domain/get`);
  }

  /**
   * Get get domain for siproxd domain
   */
  async getDomain(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/siproxd/siproxd/domain/get_domain/${uuid}`);
  }

  /**
   * Get search domain for siproxd domain
   */
  async searchDomain(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/siproxd/siproxd/domain/search_domain`);
  }

  /**
   * Execute set for siproxd domain
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/siproxd/siproxd/domain/set`, data);
  }

  /**
   * Execute set domain for siproxd domain
   */
  async setDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/siproxd/siproxd/domain/set_domain/${uuid}`, data);
  }

  /**
   * Get toggle domain for siproxd domain
   */
  async toggleDomain(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/siproxd/siproxd/domain/toggle_domain/${uuid}`);
  }
}

export class SiproxdGeneral extends BaseModule {
  /**
   * Get get for siproxd general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/siproxd/siproxd/general/get`);
  }

  /**
   * Execute set for siproxd general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/siproxd/siproxd/general/set`, data);
  }
}

export class SiproxdService extends BaseModule {
  /**
   * Execute reconfigure for siproxd service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/siproxd/siproxd/service/reconfigure`);
  }

  /**
   * Execute restart for siproxd service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/siproxd/siproxd/service/restart`);
  }

  /**
   * Get showregistrations for siproxd service
   */
  async showregistrations(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/siproxd/siproxd/service/showregistrations`);
  }

  /**
   * Execute start for siproxd service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/siproxd/siproxd/service/start`);
  }

  /**
   * Get status for siproxd service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/siproxd/siproxd/service/status`);
  }

  /**
   * Execute stop for siproxd service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/siproxd/siproxd/service/stop`);
  }
}

export class SiproxdUser extends BaseModule {
  /**
   * Execute add user for siproxd user
   */
  async addUser(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/siproxd/siproxd/user/add_user`, data);
  }

  /**
   * Execute del user for siproxd user
   */
  async delUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/siproxd/siproxd/user/del_user/${uuid}`, data);
  }

  /**
   * Get get for siproxd user
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/siproxd/siproxd/user/get`);
  }

  /**
   * Get get user for siproxd user
   */
  async getUser(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/siproxd/siproxd/user/get_user/${uuid}`);
  }

  /**
   * Get search user for siproxd user
   */
  async searchUser(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/siproxd/siproxd/user/search_user`);
  }

  /**
   * Execute set for siproxd user
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/siproxd/siproxd/user/set`, data);
  }

  /**
   * Execute set user for siproxd user
   */
  async setUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/siproxd/siproxd/user/set_user/${uuid}`, data);
  }

  /**
   * Get toggle user for siproxd user
   */
  async toggleUser(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/siproxd/siproxd/user/toggle_user/${uuid}`);
  }
}

// Main module class
export class SiproxdModule extends BaseModule {
  public readonly domain: SiproxdDomain;
  public readonly general: SiproxdGeneral;
  public readonly service: SiproxdService;
  public readonly user: SiproxdUser;

  constructor(http: any) {
    super(http);
    this.domain = new SiproxdDomain(http);
    this.general = new SiproxdGeneral(http);
    this.service = new SiproxdService(http);
    this.user = new SiproxdUser(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/siproxd/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/siproxd/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/siproxd/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/siproxd/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/siproxd/service/reconfigure');
  }
}