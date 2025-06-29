import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/dhcpv6';
  }

  // Leases methods
  async leasesDelLease(ip: string, data?: Dhcpv6LeasesDelLeaseRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<Dhcpv6LeasesDelLeaseResponse>> {
    return this.client.post(`${this.basePath}/leases/del_lease/${ip}`, data, config);
  }

  async leasesSearchLease(config?: AxiosRequestConfig): Promise<AxiosResponse<Dhcpv6LeasesSearchLeaseResponse>> {
    return this.client.get(`${this.basePath}/leases/search_lease`, config);
  }

  async leasesSearchPrefix(config?: AxiosRequestConfig): Promise<AxiosResponse<Dhcpv6LeasesSearchPrefixResponse>> {
    return this.client.get(`${this.basePath}/leases/search_prefix`, config);
  }


  // Service methods
  async serviceReconfigure(data?: Dhcpv6ServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<Dhcpv6ServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: Dhcpv6ServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<Dhcpv6ServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: Dhcpv6ServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<Dhcpv6ServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<Dhcpv6ServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: Dhcpv6ServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<Dhcpv6ServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
