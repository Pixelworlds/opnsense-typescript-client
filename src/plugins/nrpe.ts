import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Command methods
  async commandAddCommand(data?: NrpeCommandAddCommandRequest, config?: RequestConfig): Promise<ApiResponse<NrpeCommandAddCommandResponse>> {
    return this.http.post(`/api/nrpe/command/add_command`, data, config);
  }

  async commandDelCommand(uuid: string, data?: NrpeCommandDelCommandRequest, config?: RequestConfig): Promise<ApiResponse<NrpeCommandDelCommandResponse>> {
    return this.http.post(`/api/nrpe/command/del_command/${uuid}`, data, config);
  }

  async commandGet(config?: RequestConfig): Promise<ApiResponse<NrpeCommandGetResponse>> {
    return this.http.get(`/api/nrpe/command/get`, config);
  }

  async commandGetCommand(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NrpeCommandGetCommandResponse>> {
    return this.http.get(`/api/nrpe/command/get_command/${uuid}`, config);
  }

  async commandSet(data?: NrpeCommandSetRequest, config?: RequestConfig): Promise<ApiResponse<NrpeCommandSetResponse>> {
    return this.http.post(`/api/nrpe/command/set`, data, config);
  }

  async commandSetCommand(uuid: string, data?: NrpeCommandSetCommandRequest, config?: RequestConfig): Promise<ApiResponse<NrpeCommandSetCommandResponse>> {
    return this.http.post(`/api/nrpe/command/set_command/${uuid}`, data, config);
  }

  async commandToggleCommand(uuid: string, data?: NrpeCommandToggleCommandRequest, config?: RequestConfig): Promise<ApiResponse<NrpeCommandToggleCommandResponse>> {
    return this.http.post(`/api/nrpe/command/toggle_command/${uuid}`, data, config);
  }


  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<NrpeGeneralGetResponse>> {
    return this.http.get(`/api/nrpe/general/get`, config);
  }

  async generalSet(data?: NrpeGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<NrpeGeneralSetResponse>> {
    return this.http.post(`/api/nrpe/general/set`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: NrpeServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<NrpeServiceReconfigureResponse>> {
    return this.http.post(`/api/nrpe/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NrpeServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<NrpeServiceRestartResponse>> {
    return this.http.post(`/api/nrpe/service/restart`, data, config);
  }

  async serviceStart(data?: NrpeServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<NrpeServiceStartResponse>> {
    return this.http.post(`/api/nrpe/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<NrpeServiceStatusResponse>> {
    return this.http.get(`/api/nrpe/service/status`, config);
  }

  async serviceStop(data?: NrpeServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<NrpeServiceStopResponse>> {
    return this.http.post(`/api/nrpe/service/stop`, data, config);
  }

}
