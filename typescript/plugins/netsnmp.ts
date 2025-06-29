import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/netsnmp';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<NetsnmpGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: NetsnmpGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NetsnmpGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: NetsnmpServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NetsnmpServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NetsnmpServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NetsnmpServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: NetsnmpServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NetsnmpServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<NetsnmpServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: NetsnmpServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NetsnmpServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // User methods
  async userAddUser(data?: NetsnmpUserAddUserRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NetsnmpUserAddUserResponse>> {
    return this.client.post(`${this.basePath}/user/add_user`, data, config);
  }

  async userDelUser(uuid: string, data?: NetsnmpUserDelUserRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NetsnmpUserDelUserResponse>> {
    return this.client.post(`${this.basePath}/user/del_user/${uuid}`, data, config);
  }

  async userGet(config?: AxiosRequestConfig): Promise<AxiosResponse<NetsnmpUserGetResponse>> {
    return this.client.get(`${this.basePath}/user/get`, config);
  }

  async userGetUser(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NetsnmpUserGetUserResponse>> {
    return this.client.get(`${this.basePath}/user/get_user/${uuid}`, config);
  }

  async userSet(data?: NetsnmpUserSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NetsnmpUserSetResponse>> {
    return this.client.post(`${this.basePath}/user/set`, data, config);
  }

  async userSetUser(uuid: string, data?: NetsnmpUserSetUserRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NetsnmpUserSetUserResponse>> {
    return this.client.post(`${this.basePath}/user/set_user/${uuid}`, data, config);
  }

  async userToggleUser(uuid: string, data?: NetsnmpUserToggleUserRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NetsnmpUserToggleUserResponse>> {
    return this.client.post(`${this.basePath}/user/toggle_user/${uuid}`, data, config);
  }

}
