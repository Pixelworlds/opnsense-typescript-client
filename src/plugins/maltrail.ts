import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Maltrail module

// Model field types

// General types
export interface MaltrailGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MaltrailGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MaltrailGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Sensor types
export interface MaltrailSensorGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MaltrailSensorSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MaltrailSensorSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Server types
export interface MaltrailServerGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MaltrailServerSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MaltrailServerSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Serverservice types
export interface MaltrailServerserviceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MaltrailServerserviceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MaltrailServerserviceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MaltrailServerserviceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MaltrailServerserviceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MaltrailServerserviceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MaltrailServerserviceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MaltrailServerserviceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MaltrailServerserviceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface MaltrailServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MaltrailServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MaltrailServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MaltrailServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MaltrailServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MaltrailServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MaltrailServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MaltrailServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MaltrailServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class MaltrailApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<MaltrailGeneralGetResponse>> {
    return this.http.get(`/api/maltrail/general/get`, config);
  }

  async generalSet(data?: MaltrailGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<MaltrailGeneralSetResponse>> {
    return this.http.post(`/api/maltrail/general/set`, data, config);
  }


  // Sensor methods
  async sensorGet(config?: RequestConfig): Promise<ApiResponse<MaltrailSensorGetResponse>> {
    return this.http.get(`/api/maltrail/sensor/get`, config);
  }

  async sensorSet(data?: MaltrailSensorSetRequest, config?: RequestConfig): Promise<ApiResponse<MaltrailSensorSetResponse>> {
    return this.http.post(`/api/maltrail/sensor/set`, data, config);
  }


  // Server methods
  async serverGet(config?: RequestConfig): Promise<ApiResponse<MaltrailServerGetResponse>> {
    return this.http.get(`/api/maltrail/server/get`, config);
  }

  async serverSet(data?: MaltrailServerSetRequest, config?: RequestConfig): Promise<ApiResponse<MaltrailServerSetResponse>> {
    return this.http.post(`/api/maltrail/server/set`, data, config);
  }


  // Serverservice methods
  async serverserviceReconfigure(data?: MaltrailServerserviceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<MaltrailServerserviceReconfigureResponse>> {
    return this.http.post(`/api/maltrail/serverservice/reconfigure`, data, config);
  }

  async serverserviceRestart(data?: MaltrailServerserviceRestartRequest, config?: RequestConfig): Promise<ApiResponse<MaltrailServerserviceRestartResponse>> {
    return this.http.post(`/api/maltrail/serverservice/restart`, data, config);
  }

  async serverserviceStart(data?: MaltrailServerserviceStartRequest, config?: RequestConfig): Promise<ApiResponse<MaltrailServerserviceStartResponse>> {
    return this.http.post(`/api/maltrail/serverservice/start`, data, config);
  }

  async serverserviceStatus(config?: RequestConfig): Promise<ApiResponse<MaltrailServerserviceStatusResponse>> {
    return this.http.get(`/api/maltrail/serverservice/status`, config);
  }

  async serverserviceStop(data?: MaltrailServerserviceStopRequest, config?: RequestConfig): Promise<ApiResponse<MaltrailServerserviceStopResponse>> {
    return this.http.post(`/api/maltrail/serverservice/stop`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: MaltrailServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<MaltrailServiceReconfigureResponse>> {
    return this.http.post(`/api/maltrail/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: MaltrailServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<MaltrailServiceRestartResponse>> {
    return this.http.post(`/api/maltrail/service/restart`, data, config);
  }

  async serviceStart(data?: MaltrailServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<MaltrailServiceStartResponse>> {
    return this.http.post(`/api/maltrail/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<MaltrailServiceStatusResponse>> {
    return this.http.get(`/api/maltrail/service/status`, config);
  }

  async serviceStop(data?: MaltrailServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<MaltrailServiceStopResponse>> {
    return this.http.post(`/api/maltrail/service/stop`, data, config);
  }

}
