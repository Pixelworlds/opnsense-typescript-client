import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/dhcpv4';
  }

  // Leases methods
  async leasesDelLease(ip: string, data?: Dhcpv4LeasesDelLeaseRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<Dhcpv4LeasesDelLeaseResponse>> {
    return this.client.post(`${this.basePath}/leases/del_lease/${ip}`, data, config);
  }

  async leasesSearchLease(config?: AxiosRequestConfig): Promise<AxiosResponse<Dhcpv4LeasesSearchLeaseResponse>> {
    return this.client.get(`${this.basePath}/leases/search_lease`, config);
  }


  // Service methods
  async serviceReconfigure(data?: Dhcpv4ServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<Dhcpv4ServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: Dhcpv4ServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<Dhcpv4ServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: Dhcpv4ServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<Dhcpv4ServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<Dhcpv4ServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: Dhcpv4ServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<Dhcpv4ServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
