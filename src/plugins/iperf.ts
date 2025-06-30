import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Iperf module

// Model field types

// Instance types
export interface IperfInstanceGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IperfInstanceQueryResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IperfInstanceSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface IperfInstanceSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface IperfServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IperfServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IperfServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface IperfServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class IperfApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Instance methods
  async instanceGet(config?: RequestConfig): Promise<ApiResponse<IperfInstanceGetResponse>> {
    return this.http.get(`/api/iperf/instance/get`, config);
  }

  async instanceQuery(config?: RequestConfig): Promise<ApiResponse<IperfInstanceQueryResponse>> {
    return this.http.get(`/api/iperf/instance/query`, config);
  }

  async instanceSet(data?: IperfInstanceSetRequest, config?: RequestConfig): Promise<ApiResponse<IperfInstanceSetResponse>> {
    return this.http.post(`/api/iperf/instance/set`, data, config);
  }


  // Service methods
  async serviceRestart(config?: RequestConfig): Promise<ApiResponse<IperfServiceRestartResponse>> {
    return this.http.get(`/api/iperf/service/restart`, config);
  }

  async serviceStart(config?: RequestConfig): Promise<ApiResponse<IperfServiceStartResponse>> {
    return this.http.get(`/api/iperf/service/start`, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<IperfServiceStatusResponse>> {
    return this.http.get(`/api/iperf/service/status`, config);
  }

  async serviceStop(config?: RequestConfig): Promise<ApiResponse<IperfServiceStopResponse>> {
    return this.http.get(`/api/iperf/service/stop`, config);
  }

}
