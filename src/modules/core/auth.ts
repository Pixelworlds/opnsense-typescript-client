import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class AuthUsers {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/auth/user/search', params);
  }

  async add(user: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/auth/user/add', user);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/auth/user/get/${uuid}` : '/api/auth/user/get';
    return this.http.get(path);
  }

  async update(uuid: string, user: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/user/set/${uuid}`, user);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/user/del/${uuid}`);
  }

  async addApiKey(username: string): Promise<ApiResponse<any>> {
    return this.http.post(`/api/auth/user/add_api_key/${username}`);
  }

  async deleteApiKey(id: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/user/del_api_key/${id}`);
  }

  async searchApiKeys(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/auth/user/search_api_key', params);
  }

  async download(): Promise<ApiResponse<any>> {
    return this.http.get('/api/auth/user/download');
  }

  async upload(data: any): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/auth/user/upload', data);
  }

  async newOtpSeed(): Promise<ApiResponse<any>> {
    return this.http.post('/api/auth/user/new_otp_seed');
  }
}

export class AuthGroups {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/auth/group/search', params);
  }

  async add(group: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/auth/group/add', group);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/auth/group/get/${uuid}` : '/api/auth/group/get';
    return this.http.get(path);
  }

  async update(uuid: string, group: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/group/set/${uuid}`, group);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/group/del/${uuid}`);
  }
}

export class AuthPrivileges {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/auth/priv/search', params);
  }

  async get(id?: string): Promise<ApiResponse<any>> {
    const path = id ? `/api/auth/priv/get_item/${id}` : '/api/auth/priv/get';
    return this.http.get(path);
  }

  async update(id: string, privilege: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/auth/priv/set_item/${id}`, privilege);
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/auth/priv/set', config);
  }
}

export class AuthModule extends BaseModule {
  public readonly users: AuthUsers;
  public readonly groups: AuthGroups;
  public readonly privileges: AuthPrivileges;

  constructor(httpClient: any) {
    super(httpClient);
    this.users = new AuthUsers(this.http);
    this.groups = new AuthGroups(this.http);
    this.privileges = new AuthPrivileges(this.http);
  }
}
