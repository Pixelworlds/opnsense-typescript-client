import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Telegraf module

// Model field types

// General types
export interface TelegrafGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TelegrafGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TelegrafGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Input types
export interface TelegrafInputGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TelegrafInputSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TelegrafInputSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Key types
export interface TelegrafKeyAddKeyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TelegrafKeyAddKeyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TelegrafKeyDelKeyRequest {
  uuid: string;
}

export interface TelegrafKeyDelKeyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TelegrafKeyGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TelegrafKeyGetKeyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TelegrafKeySetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TelegrafKeySetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TelegrafKeySetKeyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TelegrafKeySetKeyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TelegrafKeyToggleKeyRequest {
  enabled?: boolean;
}

export interface TelegrafKeyToggleKeyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Output types
export interface TelegrafOutputGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TelegrafOutputSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TelegrafOutputSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface TelegrafServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TelegrafServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TelegrafServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TelegrafServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TelegrafServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TelegrafServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TelegrafServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TelegrafServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TelegrafServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface TelegrafKey {
}

export class TelegrafApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/telegraf';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: TelegrafGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Input methods
  async inputGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafInputGetResponse>> {
    return this.client.get(`${this.basePath}/input/get`, config);
  }

  async inputSet(data?: TelegrafInputSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafInputSetResponse>> {
    return this.client.post(`${this.basePath}/input/set`, data, config);
  }


  // Key methods
  async keyAddKey(data?: TelegrafKeyAddKeyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafKeyAddKeyResponse>> {
    return this.client.post(`${this.basePath}/key/add_key`, data, config);
  }

  async keyDelKey(uuid: string, data?: TelegrafKeyDelKeyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafKeyDelKeyResponse>> {
    return this.client.post(`${this.basePath}/key/del_key/${uuid}`, data, config);
  }

  async keyGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafKeyGetResponse>> {
    return this.client.get(`${this.basePath}/key/get`, config);
  }

  async keyGetKey(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafKeyGetKeyResponse>> {
    return this.client.get(`${this.basePath}/key/get_key/${uuid}`, config);
  }

  async keySet(data?: TelegrafKeySetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafKeySetResponse>> {
    return this.client.post(`${this.basePath}/key/set`, data, config);
  }

  async keySetKey(uuid: string, data?: TelegrafKeySetKeyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafKeySetKeyResponse>> {
    return this.client.post(`${this.basePath}/key/set_key/${uuid}`, data, config);
  }

  async keyToggleKey(uuid: string, data?: TelegrafKeyToggleKeyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafKeyToggleKeyResponse>> {
    return this.client.post(`${this.basePath}/key/toggle_key/${uuid}`, data, config);
  }


  // Output methods
  async outputGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafOutputGetResponse>> {
    return this.client.get(`${this.basePath}/output/get`, config);
  }

  async outputSet(data?: TelegrafOutputSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafOutputSetResponse>> {
    return this.client.post(`${this.basePath}/output/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: TelegrafServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: TelegrafServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: TelegrafServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: TelegrafServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TelegrafServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
