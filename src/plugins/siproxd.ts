import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Domain methods
  async domainAddDomain(data?: SiproxdDomainAddDomainRequest, config?: RequestConfig): Promise<ApiResponse<SiproxdDomainAddDomainResponse>> {
    return this.http.post(`/api/siproxd/domain/add_domain`, data, config);
  }

  async domainDelDomain(uuid: string, data?: SiproxdDomainDelDomainRequest, config?: RequestConfig): Promise<ApiResponse<SiproxdDomainDelDomainResponse>> {
    return this.http.post(`/api/siproxd/domain/del_domain/${uuid}`, data, config);
  }

  async domainGet(config?: RequestConfig): Promise<ApiResponse<SiproxdDomainGetResponse>> {
    return this.http.get(`/api/siproxd/domain/get`, config);
  }

  async domainGetDomain(uuid?: string, config?: RequestConfig): Promise<ApiResponse<SiproxdDomainGetDomainResponse>> {
    return this.http.get(`/api/siproxd/domain/get_domain/${uuid}`, config);
  }

  async domainSearchDomain(config?: RequestConfig): Promise<ApiResponse<SiproxdDomainSearchDomainResponse>> {
    return this.http.get(`/api/siproxd/domain/search_domain`, config);
  }

  async domainSet(data?: SiproxdDomainSetRequest, config?: RequestConfig): Promise<ApiResponse<SiproxdDomainSetResponse>> {
    return this.http.post(`/api/siproxd/domain/set`, data, config);
  }

  async domainSetDomain(uuid: string, data?: SiproxdDomainSetDomainRequest, config?: RequestConfig): Promise<ApiResponse<SiproxdDomainSetDomainResponse>> {
    return this.http.post(`/api/siproxd/domain/set_domain/${uuid}`, data, config);
  }

  async domainToggleDomain(uuid: string, config?: RequestConfig): Promise<ApiResponse<SiproxdDomainToggleDomainResponse>> {
    return this.http.get(`/api/siproxd/domain/toggle_domain/${uuid}`, config);
  }


  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<SiproxdGeneralGetResponse>> {
    return this.http.get(`/api/siproxd/general/get`, config);
  }

  async generalSet(data?: SiproxdGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<SiproxdGeneralSetResponse>> {
    return this.http.post(`/api/siproxd/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: SiproxdServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<SiproxdServiceReconfigureResponse>> {
    return this.http.post(`/api/siproxd/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: SiproxdServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<SiproxdServiceRestartResponse>> {
    return this.http.post(`/api/siproxd/service/restart`, data, config);
  }

  async serviceShowregistrations(config?: RequestConfig): Promise<ApiResponse<SiproxdServiceShowregistrationsResponse>> {
    return this.http.get(`/api/siproxd/service/showregistrations`, config);
  }

  async serviceStart(data?: SiproxdServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<SiproxdServiceStartResponse>> {
    return this.http.post(`/api/siproxd/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<SiproxdServiceStatusResponse>> {
    return this.http.get(`/api/siproxd/service/status`, config);
  }

  async serviceStop(data?: SiproxdServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<SiproxdServiceStopResponse>> {
    return this.http.post(`/api/siproxd/service/stop`, data, config);
  }


  // User methods
  async userAddUser(data?: SiproxdUserAddUserRequest, config?: RequestConfig): Promise<ApiResponse<SiproxdUserAddUserResponse>> {
    return this.http.post(`/api/siproxd/user/add_user`, data, config);
  }

  async userDelUser(uuid: string, data?: SiproxdUserDelUserRequest, config?: RequestConfig): Promise<ApiResponse<SiproxdUserDelUserResponse>> {
    return this.http.post(`/api/siproxd/user/del_user/${uuid}`, data, config);
  }

  async userGet(config?: RequestConfig): Promise<ApiResponse<SiproxdUserGetResponse>> {
    return this.http.get(`/api/siproxd/user/get`, config);
  }

  async userGetUser(uuid?: string, config?: RequestConfig): Promise<ApiResponse<SiproxdUserGetUserResponse>> {
    return this.http.get(`/api/siproxd/user/get_user/${uuid}`, config);
  }

  async userSearchUser(config?: RequestConfig): Promise<ApiResponse<SiproxdUserSearchUserResponse>> {
    return this.http.get(`/api/siproxd/user/search_user`, config);
  }

  async userSet(data?: SiproxdUserSetRequest, config?: RequestConfig): Promise<ApiResponse<SiproxdUserSetResponse>> {
    return this.http.post(`/api/siproxd/user/set`, data, config);
  }

  async userSetUser(uuid: string, data?: SiproxdUserSetUserRequest, config?: RequestConfig): Promise<ApiResponse<SiproxdUserSetUserResponse>> {
    return this.http.post(`/api/siproxd/user/set_user/${uuid}`, data, config);
  }

  async userToggleUser(uuid: string, config?: RequestConfig): Promise<ApiResponse<SiproxdUserToggleUserResponse>> {
    return this.http.get(`/api/siproxd/user/toggle_user/${uuid}`, config);
  }

}
