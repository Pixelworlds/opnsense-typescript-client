import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class AuthUsers {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    // Support both GET and POST methods as per documentation
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/auth/user/search');
    }
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
    // Support both GET and POST methods as per documentation
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/auth/user/search_api_key');
    }
    return this.http.post('/api/auth/user/search_api_key', params);
  }

  async download(): Promise<ApiResponse<any>> {
    return this.http.get('/api/auth/user/download');
  }

  async upload(data: any): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/auth/user/upload', data);
  }

  async newOtpSeed(): Promise<ApiResponse<any>> {
    return this.http.get('/api/auth/user/new_otp_seed');
  }
}

export class AuthGroups {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    // Support both GET and POST methods as per documentation
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/auth/group/search');
    }
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
    // Support both GET and POST methods as per documentation
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/auth/priv/search');
    }
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

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/auth/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/auth/general/set', config);
  }

  async searchUsers(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.users.search(params);
  }

  async searchGroups(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.groups.search(params);
  }

  async searchPrivileges(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.privileges.search(params);
  }

  async addUser(user: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.users.add(user);
  }

  async addGroup(group: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.groups.add(group);
  }

  async getUser(uuid?: string): Promise<ApiResponse<any>> {
    return this.users.get(uuid);
  }

  async getGroup(uuid?: string): Promise<ApiResponse<any>> {
    return this.groups.get(uuid);
  }

  async updateUser(uuid: string, user: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.users.update(uuid, user);
  }

  async updateGroup(uuid: string, group: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.groups.update(uuid, group);
  }

  async deleteUser(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.users.delete(uuid);
  }

  async deleteGroup(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.groups.delete(uuid);
  }

  /**
   * Test authentication by attempting to retrieve current user privileges
   * This is useful for validating API credentials
   */
  async testAuthentication(): Promise<ApiResponse<any>> {
    return this.privileges.get();
  }

  /**
   * Get comprehensive authentication status including users, groups, and privileges
   */
  async getAuthenticationStatus(): Promise<{
    users: any;
    groups: any;
    privileges: any;
    timestamp: string;
  }> {
    const [users, groups, privileges] = await Promise.allSettled([
      this.users.search(),
      this.groups.search(),
      this.privileges.search(),
    ]);

    return {
      users: users.status === 'fulfilled' ? users.value.data : null,
      groups: groups.status === 'fulfilled' ? groups.value.data : null,
      privileges: privileges.status === 'fulfilled' ? privileges.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Create a complete user with group assignment
   */
  async createUserWithGroup(userData: Record<string, any>, groupUuid: string): Promise<ApiResponse<ApiResult>> {
    const userWithGroup = {
      ...userData,
      groupid: groupUuid,
    };
    return this.users.add(userWithGroup);
  }

  /**
   * Generate and retrieve a new OTP seed for a user
   */
  async generateUserOtpSeed(): Promise<ApiResponse<any>> {
    return this.users.newOtpSeed();
  }

  /**
   * Get all API keys for a specific user
   */
  async getUserApiKeys(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.users.searchApiKeys(params);
  }

  /**
   * Create an API key for a user and return the key details
   */
  async createUserApiKey(username: string): Promise<ApiResponse<any>> {
    return this.users.addApiKey(username);
  }

  /**
   * Revoke (delete) an API key by its ID
   */
  async revokeApiKey(keyId: string): Promise<ApiResponse<ApiResult>> {
    return this.users.deleteApiKey(keyId);
  }

  /**
   * Export all user data for backup purposes
   */
  async exportUserData(): Promise<ApiResponse<any>> {
    return this.users.download();
  }

  /**
   * Import user data from a backup
   */
  async importUserData(userData: any): Promise<ApiResponse<ApiResult>> {
    return this.users.upload(userData);
  }
}
