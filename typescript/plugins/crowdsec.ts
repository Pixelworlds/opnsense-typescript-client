import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/crowdsec';
  }

  // Alerts methods
  async alertsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<CrowdsecAlertsGetResponse>> {
    return this.client.get(`${this.basePath}/alerts/get`, config);
  }


  // Bouncers methods
  async bouncersGet(config?: AxiosRequestConfig): Promise<AxiosResponse<CrowdsecBouncersGetResponse>> {
    return this.client.get(`${this.basePath}/bouncers/get`, config);
  }


  // Decisions methods
  async decisionsDelete(decisionId: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CrowdsecDecisionsDeleteResponse>> {
    return this.client.get(`${this.basePath}/decisions/delete/${decisionId}`, config);
  }

  async decisionsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<CrowdsecDecisionsGetResponse>> {
    return this.client.get(`${this.basePath}/decisions/get`, config);
  }


  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<CrowdsecGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: CrowdsecGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CrowdsecGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Hub methods
  async hubGet(config?: AxiosRequestConfig): Promise<AxiosResponse<CrowdsecHubGetResponse>> {
    return this.client.get(`${this.basePath}/hub/get`, config);
  }


  // Machines methods
  async machinesGet(config?: AxiosRequestConfig): Promise<AxiosResponse<CrowdsecMachinesGetResponse>> {
    return this.client.get(`${this.basePath}/machines/get`, config);
  }


  // Service methods
  async serviceDebug(config?: AxiosRequestConfig): Promise<AxiosResponse<CrowdsecServiceDebugResponse>> {
    return this.client.get(`${this.basePath}/service/debug`, config);
  }

  async serviceReload(data?: CrowdsecServiceReloadRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CrowdsecServiceReloadResponse>> {
    return this.client.post(`${this.basePath}/service/reload`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<CrowdsecServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }


  // Version methods
  async versionGet(config?: AxiosRequestConfig): Promise<AxiosResponse<CrowdsecVersionGetResponse>> {
    return this.client.get(`${this.basePath}/version/get`, config);
  }

}
