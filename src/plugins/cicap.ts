import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Cicap module

// Model field types

// Antivirus types
export interface CicapAntivirusGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CicapAntivirusSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CicapAntivirusSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// General types
export interface CicapGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CicapGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CicapGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface CicapServiceCheckclamavResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CicapServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CicapServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CicapServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CicapServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CicapServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CicapServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CicapServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CicapServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CicapServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class CicapApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Antivirus methods
  async antivirusGet(config?: RequestConfig): Promise<ApiResponse<CicapAntivirusGetResponse>> {
    return this.http.get(`/api/cicap/antivirus/get`, config);
  }

  async antivirusSet(data?: CicapAntivirusSetRequest, config?: RequestConfig): Promise<ApiResponse<CicapAntivirusSetResponse>> {
    return this.http.post(`/api/cicap/antivirus/set`, data, config);
  }


  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<CicapGeneralGetResponse>> {
    return this.http.get(`/api/cicap/general/get`, config);
  }

  async generalSet(data?: CicapGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<CicapGeneralSetResponse>> {
    return this.http.post(`/api/cicap/general/set`, data, config);
  }


  // Service methods
  async serviceCheckclamav(config?: RequestConfig): Promise<ApiResponse<CicapServiceCheckclamavResponse>> {
    return this.http.get(`/api/cicap/service/checkclamav`, config);
  }

  async serviceReconfigure(data?: CicapServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<CicapServiceReconfigureResponse>> {
    return this.http.post(`/api/cicap/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: CicapServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<CicapServiceRestartResponse>> {
    return this.http.post(`/api/cicap/service/restart`, data, config);
  }

  async serviceStart(data?: CicapServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<CicapServiceStartResponse>> {
    return this.http.post(`/api/cicap/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<CicapServiceStatusResponse>> {
    return this.http.get(`/api/cicap/service/status`, config);
  }

  async serviceStop(data?: CicapServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<CicapServiceStopResponse>> {
    return this.http.post(`/api/cicap/service/stop`, data, config);
  }

}
