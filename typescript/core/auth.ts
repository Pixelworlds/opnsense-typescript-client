import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Auth module

// Model field types

// Group types
export interface AuthGroupAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AuthGroupAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthGroupDelRequest {
  uuid: string;
}

export interface AuthGroupDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthGroupGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthGroupSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AuthGroupSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Priv types
export interface AuthPrivGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthPrivGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthPrivSearchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthPrivSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AuthPrivSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthPrivSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AuthPrivSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// User types
export interface AuthUserAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AuthUserAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthUserAddApiKeyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AuthUserAddApiKeyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthUserDelRequest {
  uuid: string;
}

export interface AuthUserDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthUserDelApiKeyRequest {
  uuid: string;
}

export interface AuthUserDelApiKeyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthUserDownloadResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthUserGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthUserNewOtpSeedResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthUserSearchApiKeyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthUserSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AuthUserSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AuthUserUploadRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AuthUserUploadResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface AuthGroup {
}

export class AuthApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/auth';
  }

  // Group methods
  async groupAdd(data?: AuthGroupAddRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AuthGroupAddResponse>> {
    return this.client.post(`${this.basePath}/group/add`, data, config);
  }

  async groupDel(uuid: string, data?: AuthGroupDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AuthGroupDelResponse>> {
    return this.client.post(`${this.basePath}/group/del/${uuid}`, data, config);
  }

  async groupGet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<AuthGroupGetResponse>> {
    return this.client.get(`${this.basePath}/group/get/${uuid}`, config);
  }

  async groupSet(uuid?: string, data?: AuthGroupSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AuthGroupSetResponse>> {
    return this.client.post(`${this.basePath}/group/set/${uuid}`, data, config);
  }


  // Priv methods
  async privGet(config?: AxiosRequestConfig): Promise<AxiosResponse<AuthPrivGetResponse>> {
    return this.client.get(`${this.basePath}/priv/get`, config);
  }

  async privGetItem(id: string, config?: AxiosRequestConfig): Promise<AxiosResponse<AuthPrivGetItemResponse>> {
    return this.client.get(`${this.basePath}/priv/get_item/${id}`, config);
  }

  async privSearch(config?: AxiosRequestConfig): Promise<AxiosResponse<AuthPrivSearchResponse>> {
    return this.client.get(`${this.basePath}/priv/search`, config);
  }

  async privSet(data?: AuthPrivSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AuthPrivSetResponse>> {
    return this.client.post(`${this.basePath}/priv/set`, data, config);
  }

  async privSetItem(id: string, data?: AuthPrivSetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AuthPrivSetItemResponse>> {
    return this.client.post(`${this.basePath}/priv/set_item/${id}`, data, config);
  }


  // User methods
  async userAdd(data?: AuthUserAddRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AuthUserAddResponse>> {
    return this.client.post(`${this.basePath}/user/add`, data, config);
  }

  async userAddApiKey(username: string, data?: AuthUserAddApiKeyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AuthUserAddApiKeyResponse>> {
    return this.client.post(`${this.basePath}/user/add_api_key/${username}`, data, config);
  }

  async userDel(uuid: string, data?: AuthUserDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AuthUserDelResponse>> {
    return this.client.post(`${this.basePath}/user/del/${uuid}`, data, config);
  }

  async userDelApiKey(id: string, data?: AuthUserDelApiKeyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AuthUserDelApiKeyResponse>> {
    return this.client.post(`${this.basePath}/user/del_api_key/${id}`, data, config);
  }

  async userDownload(config?: AxiosRequestConfig): Promise<AxiosResponse<AuthUserDownloadResponse>> {
    return this.client.get(`${this.basePath}/user/download`, config);
  }

  async userGet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<AuthUserGetResponse>> {
    return this.client.get(`${this.basePath}/user/get/${uuid}`, config);
  }

  async userNewOtpSeed(config?: AxiosRequestConfig): Promise<AxiosResponse<AuthUserNewOtpSeedResponse>> {
    return this.client.get(`${this.basePath}/user/new_otp_seed`, config);
  }

  async userSearchApiKey(config?: AxiosRequestConfig): Promise<AxiosResponse<AuthUserSearchApiKeyResponse>> {
    return this.client.get(`${this.basePath}/user/search_api_key`, config);
  }

  async userSet(uuid?: string, data?: AuthUserSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AuthUserSetResponse>> {
    return this.client.post(`${this.basePath}/user/set/${uuid}`, data, config);
  }

  async userUpload(data?: AuthUserUploadRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AuthUserUploadResponse>> {
    return this.client.post(`${this.basePath}/user/upload`, data, config);
  }

}
