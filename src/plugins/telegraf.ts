import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<TelegrafGeneralGetResponse>> {
    return this.http.get(`/api/telegraf/general/get`, config);
  }

  async generalSet(data?: TelegrafGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<TelegrafGeneralSetResponse>> {
    return this.http.post(`/api/telegraf/general/set`, data, config);
  }


  // Input methods
  async inputGet(config?: RequestConfig): Promise<ApiResponse<TelegrafInputGetResponse>> {
    return this.http.get(`/api/telegraf/input/get`, config);
  }

  async inputSet(data?: TelegrafInputSetRequest, config?: RequestConfig): Promise<ApiResponse<TelegrafInputSetResponse>> {
    return this.http.post(`/api/telegraf/input/set`, data, config);
  }


  // Key methods
  async keyAddKey(data?: TelegrafKeyAddKeyRequest, config?: RequestConfig): Promise<ApiResponse<TelegrafKeyAddKeyResponse>> {
    return this.http.post(`/api/telegraf/key/add_key`, data, config);
  }

  async keyDelKey(uuid: string, data?: TelegrafKeyDelKeyRequest, config?: RequestConfig): Promise<ApiResponse<TelegrafKeyDelKeyResponse>> {
    return this.http.post(`/api/telegraf/key/del_key/${uuid}`, data, config);
  }

  async keyGet(config?: RequestConfig): Promise<ApiResponse<TelegrafKeyGetResponse>> {
    return this.http.get(`/api/telegraf/key/get`, config);
  }

  async keyGetKey(uuid?: string, config?: RequestConfig): Promise<ApiResponse<TelegrafKeyGetKeyResponse>> {
    return this.http.get(`/api/telegraf/key/get_key/${uuid}`, config);
  }

  async keySet(data?: TelegrafKeySetRequest, config?: RequestConfig): Promise<ApiResponse<TelegrafKeySetResponse>> {
    return this.http.post(`/api/telegraf/key/set`, data, config);
  }

  async keySetKey(uuid: string, data?: TelegrafKeySetKeyRequest, config?: RequestConfig): Promise<ApiResponse<TelegrafKeySetKeyResponse>> {
    return this.http.post(`/api/telegraf/key/set_key/${uuid}`, data, config);
  }

  async keyToggleKey(uuid: string, data?: TelegrafKeyToggleKeyRequest, config?: RequestConfig): Promise<ApiResponse<TelegrafKeyToggleKeyResponse>> {
    return this.http.post(`/api/telegraf/key/toggle_key/${uuid}`, data, config);
  }


  // Output methods
  async outputGet(config?: RequestConfig): Promise<ApiResponse<TelegrafOutputGetResponse>> {
    return this.http.get(`/api/telegraf/output/get`, config);
  }

  async outputSet(data?: TelegrafOutputSetRequest, config?: RequestConfig): Promise<ApiResponse<TelegrafOutputSetResponse>> {
    return this.http.post(`/api/telegraf/output/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: TelegrafServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<TelegrafServiceReconfigureResponse>> {
    return this.http.post(`/api/telegraf/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: TelegrafServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<TelegrafServiceRestartResponse>> {
    return this.http.post(`/api/telegraf/service/restart`, data, config);
  }

  async serviceStart(data?: TelegrafServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<TelegrafServiceStartResponse>> {
    return this.http.post(`/api/telegraf/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<TelegrafServiceStatusResponse>> {
    return this.http.get(`/api/telegraf/service/status`, config);
  }

  async serviceStop(data?: TelegrafServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<TelegrafServiceStopResponse>> {
    return this.http.post(`/api/telegraf/service/stop`, data, config);
  }

}
