import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/stunnel';
  }

  // Service methods
  async serviceReconfigure(data?: StunnelServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<StunnelServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: StunnelServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<StunnelServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: StunnelServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<StunnelServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<StunnelServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: StunnelServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<StunnelServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Services methods
  async servicesAddItem(data?: StunnelServicesAddItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<StunnelServicesAddItemResponse>> {
    return this.client.post(`${this.basePath}/services/add_item`, data, config);
  }

  async servicesDelItem(uuid: string, data?: StunnelServicesDelItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<StunnelServicesDelItemResponse>> {
    return this.client.post(`${this.basePath}/services/del_item/${uuid}`, data, config);
  }

  async servicesGet(config?: AxiosRequestConfig): Promise<AxiosResponse<StunnelServicesGetResponse>> {
    return this.client.get(`${this.basePath}/services/get`, config);
  }

  async servicesGetItem(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<StunnelServicesGetItemResponse>> {
    return this.client.get(`${this.basePath}/services/get_item/${uuid}`, config);
  }

  async servicesSet(data?: StunnelServicesSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<StunnelServicesSetResponse>> {
    return this.client.post(`${this.basePath}/services/set`, data, config);
  }

  async servicesSetItem(uuid: string, data?: StunnelServicesSetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<StunnelServicesSetItemResponse>> {
    return this.client.post(`${this.basePath}/services/set_item/${uuid}`, data, config);
  }

  async servicesToggleItem(uuid: string, enabled?: string, data?: StunnelServicesToggleItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<StunnelServicesToggleItemResponse>> {
    return this.client.post(`${this.basePath}/services/toggle_item/${uuid}/${enabled}`, data, config);
  }

}
