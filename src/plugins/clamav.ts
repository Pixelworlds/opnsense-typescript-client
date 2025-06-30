import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Clamav module

// Model field types

// General types
export interface ClamavGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface ClamavServiceFreshclamRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavServiceFreshclamResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavServiceVersionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Url types
export interface ClamavUrlAddUrlRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavUrlAddUrlResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavUrlDelUrlRequest {
  uuid: string;
}

export interface ClamavUrlDelUrlResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavUrlGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavUrlGetUrlResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavUrlSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavUrlSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavUrlSetUrlRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface ClamavUrlSetUrlResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface ClamavUrlToggleUrlRequest {
  enabled?: boolean;
}

export interface ClamavUrlToggleUrlResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class ClamavApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<ClamavGeneralGetResponse>> {
    return this.http.get(`/api/clamav/general/get`, config);
  }

  async generalSet(data?: ClamavGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<ClamavGeneralSetResponse>> {
    return this.http.post(`/api/clamav/general/set`, data, config);
  }


  // Service methods
  async serviceFreshclam(data?: ClamavServiceFreshclamRequest, config?: RequestConfig): Promise<ApiResponse<ClamavServiceFreshclamResponse>> {
    return this.http.post(`/api/clamav/service/freshclam`, data, config);
  }

  async serviceReconfigure(data?: ClamavServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<ClamavServiceReconfigureResponse>> {
    return this.http.post(`/api/clamav/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: ClamavServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<ClamavServiceRestartResponse>> {
    return this.http.post(`/api/clamav/service/restart`, data, config);
  }

  async serviceStart(data?: ClamavServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<ClamavServiceStartResponse>> {
    return this.http.post(`/api/clamav/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<ClamavServiceStatusResponse>> {
    return this.http.get(`/api/clamav/service/status`, config);
  }

  async serviceStop(data?: ClamavServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<ClamavServiceStopResponse>> {
    return this.http.post(`/api/clamav/service/stop`, data, config);
  }

  async serviceVersion(config?: RequestConfig): Promise<ApiResponse<ClamavServiceVersionResponse>> {
    return this.http.get(`/api/clamav/service/version`, config);
  }


  // Url methods
  async urlAddUrl(data?: ClamavUrlAddUrlRequest, config?: RequestConfig): Promise<ApiResponse<ClamavUrlAddUrlResponse>> {
    return this.http.post(`/api/clamav/url/add_url`, data, config);
  }

  async urlDelUrl(uuid: string, data?: ClamavUrlDelUrlRequest, config?: RequestConfig): Promise<ApiResponse<ClamavUrlDelUrlResponse>> {
    return this.http.post(`/api/clamav/url/del_url/${uuid}`, data, config);
  }

  async urlGet(config?: RequestConfig): Promise<ApiResponse<ClamavUrlGetResponse>> {
    return this.http.get(`/api/clamav/url/get`, config);
  }

  async urlGetUrl(uuid?: string, config?: RequestConfig): Promise<ApiResponse<ClamavUrlGetUrlResponse>> {
    return this.http.get(`/api/clamav/url/get_url/${uuid}`, config);
  }

  async urlSet(data?: ClamavUrlSetRequest, config?: RequestConfig): Promise<ApiResponse<ClamavUrlSetResponse>> {
    return this.http.post(`/api/clamav/url/set`, data, config);
  }

  async urlSetUrl(uuid: string, data?: ClamavUrlSetUrlRequest, config?: RequestConfig): Promise<ApiResponse<ClamavUrlSetUrlResponse>> {
    return this.http.post(`/api/clamav/url/set_url/${uuid}`, data, config);
  }

  async urlToggleUrl(uuid: string, data?: ClamavUrlToggleUrlRequest, config?: RequestConfig): Promise<ApiResponse<ClamavUrlToggleUrlResponse>> {
    return this.http.post(`/api/clamav/url/toggle_url/${uuid}`, data, config);
  }

}
