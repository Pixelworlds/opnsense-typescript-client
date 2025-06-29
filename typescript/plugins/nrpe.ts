import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Nrpe module

// Model field types

// Command types
export interface NrpeCommandAddCommandRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NrpeCommandAddCommandResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NrpeCommandDelCommandRequest {
  uuid: string;
}

export interface NrpeCommandDelCommandResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NrpeCommandGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NrpeCommandGetCommandResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NrpeCommandSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NrpeCommandSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NrpeCommandSetCommandRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NrpeCommandSetCommandResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NrpeCommandToggleCommandRequest {
  enabled?: boolean;
}

export interface NrpeCommandToggleCommandResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// General types
export interface NrpeGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NrpeGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NrpeGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface NrpeServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NrpeServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NrpeServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NrpeServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NrpeServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NrpeServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NrpeServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NrpeServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NrpeServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface NrpeCommand {
}

export class NrpeApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/nrpe';
  }

  // Command methods
  async commandAddCommand(data?: NrpeCommandAddCommandRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NrpeCommandAddCommandResponse>> {
    return this.client.post(`${this.basePath}/command/add_command`, data, config);
  }

  async commandDelCommand(uuid: string, data?: NrpeCommandDelCommandRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NrpeCommandDelCommandResponse>> {
    return this.client.post(`${this.basePath}/command/del_command/${uuid}`, data, config);
  }

  async commandGet(config?: AxiosRequestConfig): Promise<AxiosResponse<NrpeCommandGetResponse>> {
    return this.client.get(`${this.basePath}/command/get`, config);
  }

  async commandGetCommand(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NrpeCommandGetCommandResponse>> {
    return this.client.get(`${this.basePath}/command/get_command/${uuid}`, config);
  }

  async commandSet(data?: NrpeCommandSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NrpeCommandSetResponse>> {
    return this.client.post(`${this.basePath}/command/set`, data, config);
  }

  async commandSetCommand(uuid: string, data?: NrpeCommandSetCommandRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NrpeCommandSetCommandResponse>> {
    return this.client.post(`${this.basePath}/command/set_command/${uuid}`, data, config);
  }

  async commandToggleCommand(uuid: string, data?: NrpeCommandToggleCommandRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NrpeCommandToggleCommandResponse>> {
    return this.client.post(`${this.basePath}/command/toggle_command/${uuid}`, data, config);
  }


  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<NrpeGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: NrpeGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NrpeGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: NrpeServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NrpeServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NrpeServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NrpeServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: NrpeServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NrpeServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<NrpeServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: NrpeServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NrpeServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
