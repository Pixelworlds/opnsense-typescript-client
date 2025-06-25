import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class AuthGroup extends BaseModule {
  /**
   * Execute add for auth group
   */
  async add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/auth/group/add`, data);
  }

  /**
   * Execute del for auth group
   */
  async del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/auth/group/del/${uuid}`, data);
  }

  /**
   * Get get for auth group
   */
  async get(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/auth/auth/group/get/${uuid}`);
  }

  /**
   * Execute set for auth group
   */
  async set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/auth/group/set/${uuid}`, data);
  }
}

export class AuthPriv extends BaseModule {
  /**
   * Get get for auth priv
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/auth/auth/priv/get`);
  }

  /**
   * Get get item for auth priv
   */
  async getItem(id: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/auth/auth/priv/get_item/${id}`);
  }

  /**
   * Get search for auth priv
   */
  async search(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/auth/auth/priv/search`);
  }

  /**
   * Execute set for auth priv
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/auth/priv/set`, data);
  }

  /**
   * Execute set item for auth priv
   */
  async setItem(id: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/auth/priv/set_item/${id}`, data);
  }
}

export class AuthUser extends BaseModule {
  /**
   * Execute add for auth user
   */
  async add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/auth/user/add`, data);
  }

  /**
   * Execute add api key for auth user
   */
  async addApiKey(username: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/auth/user/add_api_key/${username}`, data);
  }

  /**
   * Execute del for auth user
   */
  async del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/auth/user/del/${uuid}`, data);
  }

  /**
   * Execute del api key for auth user
   */
  async delApiKey(id: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/auth/user/del_api_key/${id}`, data);
  }

  /**
   * Get download for auth user
   */
  async download(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/auth/auth/user/download`);
  }

  /**
   * Get get for auth user
   */
  async get(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/auth/auth/user/get/${uuid}`);
  }

  /**
   * Get new otp seed for auth user
   */
  async newOtpSeed(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/auth/auth/user/new_otp_seed`);
  }

  /**
   * Get search api key for auth user
   */
  async searchApiKey(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/auth/auth/user/search_api_key`);
  }

  /**
   * Execute set for auth user
   */
  async set(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/auth/user/set/${uuid}`, data);
  }

  /**
   * Execute upload for auth user
   */
  async upload(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/auth/user/upload`, data);
  }
}

// Main module class
export class AuthModule extends BaseModule {
  public readonly group: AuthGroup;
  public readonly priv: AuthPriv;
  public readonly user: AuthUser;

  constructor(http: any) {
    super(http);
    this.group = new AuthGroup(http);
    this.priv = new AuthPriv(http);
    this.user = new AuthUser(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/auth/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/auth/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/auth/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/auth/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/auth/service/reconfigure');
  }
}