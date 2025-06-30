import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Dyndns module

// Model field types

// Accounts types
export interface DyndnsAccountsAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsAccountsAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsAccountsDelItemRequest {
  uuid: string;
}

export interface DyndnsAccountsDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsAccountsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsAccountsGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsAccountsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsAccountsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsAccountsSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsAccountsSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsAccountsToggleItemRequest {
  enabled?: boolean;
}

export interface DyndnsAccountsToggleItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface DyndnsServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface DyndnsSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DyndnsSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DyndnsSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class DyndnsApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Accounts methods
  async accountsAddItem(data?: DyndnsAccountsAddItemRequest, config?: RequestConfig): Promise<ApiResponse<DyndnsAccountsAddItemResponse>> {
    return this.http.post(`/api/dyndns/accounts/add_item`, data, config);
  }

  async accountsDelItem(uuid: string, data?: DyndnsAccountsDelItemRequest, config?: RequestConfig): Promise<ApiResponse<DyndnsAccountsDelItemResponse>> {
    return this.http.post(`/api/dyndns/accounts/del_item/${uuid}`, data, config);
  }

  async accountsGet(config?: RequestConfig): Promise<ApiResponse<DyndnsAccountsGetResponse>> {
    return this.http.get(`/api/dyndns/accounts/get`, config);
  }

  async accountsGetItem(uuid?: string, config?: RequestConfig): Promise<ApiResponse<DyndnsAccountsGetItemResponse>> {
    return this.http.get(`/api/dyndns/accounts/get_item/${uuid}`, config);
  }

  async accountsSet(data?: DyndnsAccountsSetRequest, config?: RequestConfig): Promise<ApiResponse<DyndnsAccountsSetResponse>> {
    return this.http.post(`/api/dyndns/accounts/set`, data, config);
  }

  async accountsSetItem(uuid: string, data?: DyndnsAccountsSetItemRequest, config?: RequestConfig): Promise<ApiResponse<DyndnsAccountsSetItemResponse>> {
    return this.http.post(`/api/dyndns/accounts/set_item/${uuid}`, data, config);
  }

  async accountsToggleItem(uuid: string, enabled?: string, data?: DyndnsAccountsToggleItemRequest, config?: RequestConfig): Promise<ApiResponse<DyndnsAccountsToggleItemResponse>> {
    return this.http.post(`/api/dyndns/accounts/toggle_item/${uuid}/${enabled}`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: DyndnsServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<DyndnsServiceReconfigureResponse>> {
    return this.http.post(`/api/dyndns/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: DyndnsServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<DyndnsServiceRestartResponse>> {
    return this.http.post(`/api/dyndns/service/restart`, data, config);
  }

  async serviceStart(data?: DyndnsServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<DyndnsServiceStartResponse>> {
    return this.http.post(`/api/dyndns/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<DyndnsServiceStatusResponse>> {
    return this.http.get(`/api/dyndns/service/status`, config);
  }

  async serviceStop(data?: DyndnsServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<DyndnsServiceStopResponse>> {
    return this.http.post(`/api/dyndns/service/stop`, data, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<DyndnsSettingsGetResponse>> {
    return this.http.get(`/api/dyndns/settings/get`, config);
  }

  async settingsSet(data?: DyndnsSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<DyndnsSettingsSetResponse>> {
    return this.http.post(`/api/dyndns/settings/set`, data, config);
  }

}
