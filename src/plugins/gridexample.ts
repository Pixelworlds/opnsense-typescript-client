import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Gridexample module

// Model field types

// Settings types
export interface GridexampleSettingsAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface GridexampleSettingsAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface GridexampleSettingsDelItemRequest {
  uuid: string;
}

export interface GridexampleSettingsDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface GridexampleSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface GridexampleSettingsGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface GridexampleSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface GridexampleSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface GridexampleSettingsSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface GridexampleSettingsSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface GridexampleSettingsToggleItemRequest {
  enabled?: boolean;
}

export interface GridexampleSettingsToggleItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface GridexampleAddress {
}

export class GridexampleApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Settings methods
  async settingsAddItem(data?: GridexampleSettingsAddItemRequest, config?: RequestConfig): Promise<ApiResponse<GridexampleSettingsAddItemResponse>> {
    return this.http.post(`/api/gridexample/settings/add_item`, data, config);
  }

  async settingsDelItem(uuid: string, data?: GridexampleSettingsDelItemRequest, config?: RequestConfig): Promise<ApiResponse<GridexampleSettingsDelItemResponse>> {
    return this.http.post(`/api/gridexample/settings/del_item/${uuid}`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<GridexampleSettingsGetResponse>> {
    return this.http.get(`/api/gridexample/settings/get`, config);
  }

  async settingsGetItem(uuid?: string, config?: RequestConfig): Promise<ApiResponse<GridexampleSettingsGetItemResponse>> {
    return this.http.get(`/api/gridexample/settings/get_item/${uuid}`, config);
  }

  async settingsSet(data?: GridexampleSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<GridexampleSettingsSetResponse>> {
    return this.http.post(`/api/gridexample/settings/set`, data, config);
  }

  async settingsSetItem(uuid: string, data?: GridexampleSettingsSetItemRequest, config?: RequestConfig): Promise<ApiResponse<GridexampleSettingsSetItemResponse>> {
    return this.http.post(`/api/gridexample/settings/set_item/${uuid}`, data, config);
  }

  async settingsToggleItem(uuid: string, enabled?: string, data?: GridexampleSettingsToggleItemRequest, config?: RequestConfig): Promise<ApiResponse<GridexampleSettingsToggleItemResponse>> {
    return this.http.post(`/api/gridexample/settings/toggle_item/${uuid}/${enabled}`, data, config);
  }

}
