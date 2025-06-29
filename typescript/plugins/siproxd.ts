import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Siproxd module

// Model field types

// Domain types
export interface SiproxdDomainAddDomainRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SiproxdDomainAddDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdDomainDelDomainRequest {
  uuid: string;
}

export interface SiproxdDomainDelDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdDomainGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdDomainGetDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdDomainSearchDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdDomainSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SiproxdDomainSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdDomainSetDomainRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SiproxdDomainSetDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdDomainToggleDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// General types
export interface SiproxdGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SiproxdGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface SiproxdServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SiproxdServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SiproxdServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdServiceShowregistrationsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SiproxdServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SiproxdServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// User types
export interface SiproxdUserAddUserRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SiproxdUserAddUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdUserDelUserRequest {
  uuid: string;
}

export interface SiproxdUserDelUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdUserGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdUserGetUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdUserSearchUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdUserSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SiproxdUserSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdUserSetUserRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface SiproxdUserSetUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface SiproxdUserToggleUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface SiproxdDomain {
}

export class SiproxdApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/siproxd';
  }

  // Domain methods
  async domainAddDomain(data?: SiproxdDomainAddDomainRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdDomainAddDomainResponse>> {
    return this.client.post(`${this.basePath}/domain/add_domain`, data, config);
  }

  async domainDelDomain(uuid: string, data?: SiproxdDomainDelDomainRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdDomainDelDomainResponse>> {
    return this.client.post(`${this.basePath}/domain/del_domain/${uuid}`, data, config);
  }

  async domainGet(config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdDomainGetResponse>> {
    return this.client.get(`${this.basePath}/domain/get`, config);
  }

  async domainGetDomain(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdDomainGetDomainResponse>> {
    return this.client.get(`${this.basePath}/domain/get_domain/${uuid}`, config);
  }

  async domainSearchDomain(config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdDomainSearchDomainResponse>> {
    return this.client.get(`${this.basePath}/domain/search_domain`, config);
  }

  async domainSet(data?: SiproxdDomainSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdDomainSetResponse>> {
    return this.client.post(`${this.basePath}/domain/set`, data, config);
  }

  async domainSetDomain(uuid: string, data?: SiproxdDomainSetDomainRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdDomainSetDomainResponse>> {
    return this.client.post(`${this.basePath}/domain/set_domain/${uuid}`, data, config);
  }

  async domainToggleDomain(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdDomainToggleDomainResponse>> {
    return this.client.get(`${this.basePath}/domain/toggle_domain/${uuid}`, config);
  }


  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: SiproxdGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: SiproxdServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: SiproxdServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceShowregistrations(config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdServiceShowregistrationsResponse>> {
    return this.client.get(`${this.basePath}/service/showregistrations`, config);
  }

  async serviceStart(data?: SiproxdServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: SiproxdServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // User methods
  async userAddUser(data?: SiproxdUserAddUserRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdUserAddUserResponse>> {
    return this.client.post(`${this.basePath}/user/add_user`, data, config);
  }

  async userDelUser(uuid: string, data?: SiproxdUserDelUserRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdUserDelUserResponse>> {
    return this.client.post(`${this.basePath}/user/del_user/${uuid}`, data, config);
  }

  async userGet(config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdUserGetResponse>> {
    return this.client.get(`${this.basePath}/user/get`, config);
  }

  async userGetUser(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdUserGetUserResponse>> {
    return this.client.get(`${this.basePath}/user/get_user/${uuid}`, config);
  }

  async userSearchUser(config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdUserSearchUserResponse>> {
    return this.client.get(`${this.basePath}/user/search_user`, config);
  }

  async userSet(data?: SiproxdUserSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdUserSetResponse>> {
    return this.client.post(`${this.basePath}/user/set`, data, config);
  }

  async userSetUser(uuid: string, data?: SiproxdUserSetUserRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdUserSetUserResponse>> {
    return this.client.post(`${this.basePath}/user/set_user/${uuid}`, data, config);
  }

  async userToggleUser(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<SiproxdUserToggleUserResponse>> {
    return this.client.get(`${this.basePath}/user/toggle_user/${uuid}`, config);
  }

}
