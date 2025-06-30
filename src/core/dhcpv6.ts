import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Dhcpv6 module

// Leases types
export interface Dhcpv6LeasesDelLeaseRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface Dhcpv6LeasesDelLeaseResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface Dhcpv6LeasesSearchLeaseResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface Dhcpv6LeasesSearchPrefixResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface Dhcpv6ServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface Dhcpv6ServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface Dhcpv6ServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface Dhcpv6ServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface Dhcpv6ServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface Dhcpv6ServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface Dhcpv6ServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface Dhcpv6ServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface Dhcpv6ServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class Dhcpv6Api {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Leases methods
  async leasesDelLease(ip: string, data?: Dhcpv6LeasesDelLeaseRequest, config?: RequestConfig): Promise<ApiResponse<Dhcpv6LeasesDelLeaseResponse>> {
    return this.http.post(`/api/dhcpv6/leases/del_lease/${ip}`, data, config);
  }

  async leasesSearchLease(config?: RequestConfig): Promise<ApiResponse<Dhcpv6LeasesSearchLeaseResponse>> {
    return this.http.get(`/api/dhcpv6/leases/search_lease`, config);
  }

  async leasesSearchPrefix(config?: RequestConfig): Promise<ApiResponse<Dhcpv6LeasesSearchPrefixResponse>> {
    return this.http.get(`/api/dhcpv6/leases/search_prefix`, config);
  }


  // Service methods
  async serviceReconfigure(data?: Dhcpv6ServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<Dhcpv6ServiceReconfigureResponse>> {
    return this.http.post(`/api/dhcpv6/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: Dhcpv6ServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<Dhcpv6ServiceRestartResponse>> {
    return this.http.post(`/api/dhcpv6/service/restart`, data, config);
  }

  async serviceStart(data?: Dhcpv6ServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<Dhcpv6ServiceStartResponse>> {
    return this.http.post(`/api/dhcpv6/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<Dhcpv6ServiceStatusResponse>> {
    return this.http.get(`/api/dhcpv6/service/status`, config);
  }

  async serviceStop(data?: Dhcpv6ServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<Dhcpv6ServiceStopResponse>> {
    return this.http.post(`/api/dhcpv6/service/stop`, data, config);
  }

}
