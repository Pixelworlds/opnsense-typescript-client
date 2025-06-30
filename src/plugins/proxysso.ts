import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Proxysso module

// Service types
export interface ProxyssoServiceCreatekeytabRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyssoServiceCreatekeytabResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyssoServiceDeletekeytabResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyssoServiceGetCheckListResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyssoServiceShowkeytabResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyssoServiceTestkerbloginRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyssoServiceTestkerbloginResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface ProxyssoSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ProxyssoSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ProxyssoSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class ProxyssoApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceCreatekeytab(data?: ProxyssoServiceCreatekeytabRequest, config?: RequestConfig): Promise<ApiResponse<ProxyssoServiceCreatekeytabResponse>> {
    return this.http.post(`/api/proxysso/service/createkeytab`, data, config);
  }

  async serviceDeletekeytab(config?: RequestConfig): Promise<ApiResponse<ProxyssoServiceDeletekeytabResponse>> {
    return this.http.get(`/api/proxysso/service/deletekeytab`, config);
  }

  async serviceGetCheckList(config?: RequestConfig): Promise<ApiResponse<ProxyssoServiceGetCheckListResponse>> {
    return this.http.get(`/api/proxysso/service/get_check_list`, config);
  }

  async serviceShowkeytab(config?: RequestConfig): Promise<ApiResponse<ProxyssoServiceShowkeytabResponse>> {
    return this.http.get(`/api/proxysso/service/showkeytab`, config);
  }

  async serviceTestkerblogin(data?: ProxyssoServiceTestkerbloginRequest, config?: RequestConfig): Promise<ApiResponse<ProxyssoServiceTestkerbloginResponse>> {
    return this.http.post(`/api/proxysso/service/testkerblogin`, data, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<ProxyssoSettingsGetResponse>> {
    return this.http.get(`/api/proxysso/settings/get`, config);
  }

  async settingsSet(data?: ProxyssoSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<ProxyssoSettingsSetResponse>> {
    return this.http.post(`/api/proxysso/settings/set`, data, config);
  }

}
