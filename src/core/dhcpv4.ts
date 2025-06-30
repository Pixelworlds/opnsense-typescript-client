import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Dhcpv4 module

// Leases types
export interface Dhcpv4LeasesDelLeaseRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface Dhcpv4LeasesDelLeaseResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface Dhcpv4LeasesSearchLeaseResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface Dhcpv4ServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface Dhcpv4ServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface Dhcpv4ServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface Dhcpv4ServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface Dhcpv4ServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface Dhcpv4ServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface Dhcpv4ServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface Dhcpv4ServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface Dhcpv4ServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class Dhcpv4Api {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Leases methods
  async leasesDelLease(ip: string, data?: Dhcpv4LeasesDelLeaseRequest, config?: RequestConfig): Promise<ApiResponse<Dhcpv4LeasesDelLeaseResponse>> {
    return this.http.post(`/api/dhcpv4/leases/del_lease/${ip}`, data, config);
  }

  async leasesSearchLease(config?: RequestConfig): Promise<ApiResponse<Dhcpv4LeasesSearchLeaseResponse>> {
    return this.http.get(`/api/dhcpv4/leases/search_lease`, config);
  }


  // Service methods
  async serviceReconfigure(data?: Dhcpv4ServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<Dhcpv4ServiceReconfigureResponse>> {
    return this.http.post(`/api/dhcpv4/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: Dhcpv4ServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<Dhcpv4ServiceRestartResponse>> {
    return this.http.post(`/api/dhcpv4/service/restart`, data, config);
  }

  async serviceStart(data?: Dhcpv4ServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<Dhcpv4ServiceStartResponse>> {
    return this.http.post(`/api/dhcpv4/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<Dhcpv4ServiceStatusResponse>> {
    return this.http.get(`/api/dhcpv4/service/status`, config);
  }

  async serviceStop(data?: Dhcpv4ServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<Dhcpv4ServiceStopResponse>> {
    return this.http.post(`/api/dhcpv4/service/stop`, data, config);
  }

}
