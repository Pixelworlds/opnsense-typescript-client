import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/maltrail';
  }

  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: MaltrailGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Sensor methods
  async sensorGet(config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailSensorGetResponse>> {
    return this.client.get(`${this.basePath}/sensor/get`, config);
  }

  async sensorSet(data?: MaltrailSensorSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailSensorSetResponse>> {
    return this.client.post(`${this.basePath}/sensor/set`, data, config);
  }


  // Server methods
  async serverGet(config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailServerGetResponse>> {
    return this.client.get(`${this.basePath}/server/get`, config);
  }

  async serverSet(data?: MaltrailServerSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailServerSetResponse>> {
    return this.client.post(`${this.basePath}/server/set`, data, config);
  }


  // Serverservice methods
  async serverserviceReconfigure(data?: MaltrailServerserviceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailServerserviceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/serverservice/reconfigure`, data, config);
  }

  async serverserviceRestart(data?: MaltrailServerserviceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailServerserviceRestartResponse>> {
    return this.client.post(`${this.basePath}/serverservice/restart`, data, config);
  }

  async serverserviceStart(data?: MaltrailServerserviceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailServerserviceStartResponse>> {
    return this.client.post(`${this.basePath}/serverservice/start`, data, config);
  }

  async serverserviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailServerserviceStatusResponse>> {
    return this.client.get(`${this.basePath}/serverservice/status`, config);
  }

  async serverserviceStop(data?: MaltrailServerserviceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailServerserviceStopResponse>> {
    return this.client.post(`${this.basePath}/serverservice/stop`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: MaltrailServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: MaltrailServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: MaltrailServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: MaltrailServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MaltrailServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
