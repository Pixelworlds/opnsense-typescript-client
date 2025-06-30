import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Group methods
  async groupAdd(data?: AuthGroupAddRequest, config?: RequestConfig): Promise<ApiResponse<AuthGroupAddResponse>> {
    return this.http.post(`/api/auth/group/add`, data, config);
  }

  async groupDel(uuid: string, data?: AuthGroupDelRequest, config?: RequestConfig): Promise<ApiResponse<AuthGroupDelResponse>> {
    return this.http.post(`/api/auth/group/del/${uuid}`, data, config);
  }

  async groupGet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<AuthGroupGetResponse>> {
    return this.http.get(`/api/auth/group/get/${uuid}`, config);
  }

  async groupSet(uuid?: string, data?: AuthGroupSetRequest, config?: RequestConfig): Promise<ApiResponse<AuthGroupSetResponse>> {
    return this.http.post(`/api/auth/group/set/${uuid}`, data, config);
  }


  // Priv methods
  async privGet(config?: RequestConfig): Promise<ApiResponse<AuthPrivGetResponse>> {
    return this.http.get(`/api/auth/priv/get`, config);
  }

  async privGetItem(id: string, config?: RequestConfig): Promise<ApiResponse<AuthPrivGetItemResponse>> {
    return this.http.get(`/api/auth/priv/get_item/${id}`, config);
  }

  async privSearch(config?: RequestConfig): Promise<ApiResponse<AuthPrivSearchResponse>> {
    return this.http.get(`/api/auth/priv/search`, config);
  }

  async privSet(data?: AuthPrivSetRequest, config?: RequestConfig): Promise<ApiResponse<AuthPrivSetResponse>> {
    return this.http.post(`/api/auth/priv/set`, data, config);
  }

  async privSetItem(id: string, data?: AuthPrivSetItemRequest, config?: RequestConfig): Promise<ApiResponse<AuthPrivSetItemResponse>> {
    return this.http.post(`/api/auth/priv/set_item/${id}`, data, config);
  }


  // User methods
  async userAdd(data?: AuthUserAddRequest, config?: RequestConfig): Promise<ApiResponse<AuthUserAddResponse>> {
    return this.http.post(`/api/auth/user/add`, data, config);
  }

  async userAddApiKey(username: string, data?: AuthUserAddApiKeyRequest, config?: RequestConfig): Promise<ApiResponse<AuthUserAddApiKeyResponse>> {
    return this.http.post(`/api/auth/user/add_api_key/${username}`, data, config);
  }

  async userDel(uuid: string, data?: AuthUserDelRequest, config?: RequestConfig): Promise<ApiResponse<AuthUserDelResponse>> {
    return this.http.post(`/api/auth/user/del/${uuid}`, data, config);
  }

  async userDelApiKey(id: string, data?: AuthUserDelApiKeyRequest, config?: RequestConfig): Promise<ApiResponse<AuthUserDelApiKeyResponse>> {
    return this.http.post(`/api/auth/user/del_api_key/${id}`, data, config);
  }

  async userDownload(config?: RequestConfig): Promise<ApiResponse<AuthUserDownloadResponse>> {
    return this.http.get(`/api/auth/user/download`, config);
  }

  async userGet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<AuthUserGetResponse>> {
    return this.http.get(`/api/auth/user/get/${uuid}`, config);
  }

  async userNewOtpSeed(config?: RequestConfig): Promise<ApiResponse<AuthUserNewOtpSeedResponse>> {
    return this.http.get(`/api/auth/user/new_otp_seed`, config);
  }

  async userSearchApiKey(config?: RequestConfig): Promise<ApiResponse<AuthUserSearchApiKeyResponse>> {
    return this.http.get(`/api/auth/user/search_api_key`, config);
  }

  async userSet(uuid?: string, data?: AuthUserSetRequest, config?: RequestConfig): Promise<ApiResponse<AuthUserSetResponse>> {
    return this.http.post(`/api/auth/user/set/${uuid}`, data, config);
  }

  async userUpload(data?: AuthUserUploadRequest, config?: RequestConfig): Promise<ApiResponse<AuthUserUploadResponse>> {
    return this.http.post(`/api/auth/user/upload`, data, config);
  }

}
