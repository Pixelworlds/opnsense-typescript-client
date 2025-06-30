import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Netsnmp module

// Model field types

// General types
export interface NetsnmpGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetsnmpGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetsnmpGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface NetsnmpServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetsnmpServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetsnmpServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetsnmpServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetsnmpServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetsnmpServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetsnmpServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetsnmpServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetsnmpServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// User types
export interface NetsnmpUserAddUserRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetsnmpUserAddUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetsnmpUserDelUserRequest {
  uuid: string;
}

export interface NetsnmpUserDelUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetsnmpUserGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetsnmpUserGetUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetsnmpUserSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetsnmpUserSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetsnmpUserSetUserRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NetsnmpUserSetUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NetsnmpUserToggleUserRequest {
  enabled?: boolean;
}

export interface NetsnmpUserToggleUserResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class NetsnmpApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<NetsnmpGeneralGetResponse>> {
    return this.http.get(`/api/netsnmp/general/get`, config);
  }

  async generalSet(data?: NetsnmpGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<NetsnmpGeneralSetResponse>> {
    return this.http.post(`/api/netsnmp/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: NetsnmpServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<NetsnmpServiceReconfigureResponse>> {
    return this.http.post(`/api/netsnmp/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NetsnmpServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<NetsnmpServiceRestartResponse>> {
    return this.http.post(`/api/netsnmp/service/restart`, data, config);
  }

  async serviceStart(data?: NetsnmpServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<NetsnmpServiceStartResponse>> {
    return this.http.post(`/api/netsnmp/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<NetsnmpServiceStatusResponse>> {
    return this.http.get(`/api/netsnmp/service/status`, config);
  }

  async serviceStop(data?: NetsnmpServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<NetsnmpServiceStopResponse>> {
    return this.http.post(`/api/netsnmp/service/stop`, data, config);
  }


  // User methods
  async userAddUser(data?: NetsnmpUserAddUserRequest, config?: RequestConfig): Promise<ApiResponse<NetsnmpUserAddUserResponse>> {
    return this.http.post(`/api/netsnmp/user/add_user`, data, config);
  }

  async userDelUser(uuid: string, data?: NetsnmpUserDelUserRequest, config?: RequestConfig): Promise<ApiResponse<NetsnmpUserDelUserResponse>> {
    return this.http.post(`/api/netsnmp/user/del_user/${uuid}`, data, config);
  }

  async userGet(config?: RequestConfig): Promise<ApiResponse<NetsnmpUserGetResponse>> {
    return this.http.get(`/api/netsnmp/user/get`, config);
  }

  async userGetUser(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NetsnmpUserGetUserResponse>> {
    return this.http.get(`/api/netsnmp/user/get_user/${uuid}`, config);
  }

  async userSet(data?: NetsnmpUserSetRequest, config?: RequestConfig): Promise<ApiResponse<NetsnmpUserSetResponse>> {
    return this.http.post(`/api/netsnmp/user/set`, data, config);
  }

  async userSetUser(uuid: string, data?: NetsnmpUserSetUserRequest, config?: RequestConfig): Promise<ApiResponse<NetsnmpUserSetUserResponse>> {
    return this.http.post(`/api/netsnmp/user/set_user/${uuid}`, data, config);
  }

  async userToggleUser(uuid: string, data?: NetsnmpUserToggleUserRequest, config?: RequestConfig): Promise<ApiResponse<NetsnmpUserToggleUserResponse>> {
    return this.http.post(`/api/netsnmp/user/toggle_user/${uuid}`, data, config);
  }

}
