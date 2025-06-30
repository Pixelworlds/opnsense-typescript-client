import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Crowdsec module

// Model field types

// Alerts types
export interface CrowdsecAlertsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Bouncers types
export interface CrowdsecBouncersGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Decisions types
export interface CrowdsecDecisionsDeleteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CrowdsecDecisionsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// General types
export interface CrowdsecGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CrowdsecGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CrowdsecGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Hub types
export interface CrowdsecHubGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Machines types
export interface CrowdsecMachinesGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface CrowdsecServiceDebugResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CrowdsecServiceReloadRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CrowdsecServiceReloadResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CrowdsecServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Version types
export interface CrowdsecVersionGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class CrowdsecApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Alerts methods
  async alertsGet(config?: RequestConfig): Promise<ApiResponse<CrowdsecAlertsGetResponse>> {
    return this.http.get(`/api/crowdsec/alerts/get`, config);
  }


  // Bouncers methods
  async bouncersGet(config?: RequestConfig): Promise<ApiResponse<CrowdsecBouncersGetResponse>> {
    return this.http.get(`/api/crowdsec/bouncers/get`, config);
  }


  // Decisions methods
  async decisionsDelete(decisionId: string, config?: RequestConfig): Promise<ApiResponse<CrowdsecDecisionsDeleteResponse>> {
    return this.http.get(`/api/crowdsec/decisions/delete/${decisionId}`, config);
  }

  async decisionsGet(config?: RequestConfig): Promise<ApiResponse<CrowdsecDecisionsGetResponse>> {
    return this.http.get(`/api/crowdsec/decisions/get`, config);
  }


  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<CrowdsecGeneralGetResponse>> {
    return this.http.get(`/api/crowdsec/general/get`, config);
  }

  async generalSet(data?: CrowdsecGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<CrowdsecGeneralSetResponse>> {
    return this.http.post(`/api/crowdsec/general/set`, data, config);
  }


  // Hub methods
  async hubGet(config?: RequestConfig): Promise<ApiResponse<CrowdsecHubGetResponse>> {
    return this.http.get(`/api/crowdsec/hub/get`, config);
  }


  // Machines methods
  async machinesGet(config?: RequestConfig): Promise<ApiResponse<CrowdsecMachinesGetResponse>> {
    return this.http.get(`/api/crowdsec/machines/get`, config);
  }


  // Service methods
  async serviceDebug(config?: RequestConfig): Promise<ApiResponse<CrowdsecServiceDebugResponse>> {
    return this.http.get(`/api/crowdsec/service/debug`, config);
  }

  async serviceReload(data?: CrowdsecServiceReloadRequest, config?: RequestConfig): Promise<ApiResponse<CrowdsecServiceReloadResponse>> {
    return this.http.post(`/api/crowdsec/service/reload`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<CrowdsecServiceStatusResponse>> {
    return this.http.get(`/api/crowdsec/service/status`, config);
  }


  // Version methods
  async versionGet(config?: RequestConfig): Promise<ApiResponse<CrowdsecVersionGetResponse>> {
    return this.http.get(`/api/crowdsec/version/get`, config);
  }

}
