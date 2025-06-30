import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Stunnel module

// Model field types

// Service types
export interface StunnelServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface StunnelServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface StunnelServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface StunnelServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface StunnelServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface StunnelServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface StunnelServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface StunnelServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface StunnelServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Services types
export interface StunnelServicesAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface StunnelServicesAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface StunnelServicesDelItemRequest {
  uuid: string;
}

export interface StunnelServicesDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface StunnelServicesGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface StunnelServicesGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface StunnelServicesSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface StunnelServicesSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface StunnelServicesSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface StunnelServicesSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface StunnelServicesToggleItemRequest {
  enabled?: boolean;
}

export interface StunnelServicesToggleItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface StunnelService {
}

export class StunnelApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceReconfigure(data?: StunnelServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<StunnelServiceReconfigureResponse>> {
    return this.http.post(`/api/stunnel/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: StunnelServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<StunnelServiceRestartResponse>> {
    return this.http.post(`/api/stunnel/service/restart`, data, config);
  }

  async serviceStart(data?: StunnelServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<StunnelServiceStartResponse>> {
    return this.http.post(`/api/stunnel/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<StunnelServiceStatusResponse>> {
    return this.http.get(`/api/stunnel/service/status`, config);
  }

  async serviceStop(data?: StunnelServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<StunnelServiceStopResponse>> {
    return this.http.post(`/api/stunnel/service/stop`, data, config);
  }


  // Services methods
  async servicesAddItem(data?: StunnelServicesAddItemRequest, config?: RequestConfig): Promise<ApiResponse<StunnelServicesAddItemResponse>> {
    return this.http.post(`/api/stunnel/services/add_item`, data, config);
  }

  async servicesDelItem(uuid: string, data?: StunnelServicesDelItemRequest, config?: RequestConfig): Promise<ApiResponse<StunnelServicesDelItemResponse>> {
    return this.http.post(`/api/stunnel/services/del_item/${uuid}`, data, config);
  }

  async servicesGet(config?: RequestConfig): Promise<ApiResponse<StunnelServicesGetResponse>> {
    return this.http.get(`/api/stunnel/services/get`, config);
  }

  async servicesGetItem(uuid?: string, config?: RequestConfig): Promise<ApiResponse<StunnelServicesGetItemResponse>> {
    return this.http.get(`/api/stunnel/services/get_item/${uuid}`, config);
  }

  async servicesSet(data?: StunnelServicesSetRequest, config?: RequestConfig): Promise<ApiResponse<StunnelServicesSetResponse>> {
    return this.http.post(`/api/stunnel/services/set`, data, config);
  }

  async servicesSetItem(uuid: string, data?: StunnelServicesSetItemRequest, config?: RequestConfig): Promise<ApiResponse<StunnelServicesSetItemResponse>> {
    return this.http.post(`/api/stunnel/services/set_item/${uuid}`, data, config);
  }

  async servicesToggleItem(uuid: string, enabled?: string, data?: StunnelServicesToggleItemRequest, config?: RequestConfig): Promise<ApiResponse<StunnelServicesToggleItemResponse>> {
    return this.http.post(`/api/stunnel/services/toggle_item/${uuid}/${enabled}`, data, config);
  }

}
