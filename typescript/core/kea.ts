import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Kea module

// Model field types

// CtrlAgent types
export interface KeaCtrlAgentGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaCtrlAgentSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeaCtrlAgentSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Dhcpv4 types
export interface KeaDhcpv4AddPeerRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeaDhcpv4AddPeerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaDhcpv4AddReservationRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeaDhcpv4AddReservationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaDhcpv4AddSubnetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeaDhcpv4AddSubnetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaDhcpv4DelPeerRequest {
  uuid: string;
}

export interface KeaDhcpv4DelPeerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaDhcpv4DelReservationRequest {
  uuid: string;
}

export interface KeaDhcpv4DelReservationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaDhcpv4DelSubnetRequest {
  uuid: string;
}

export interface KeaDhcpv4DelSubnetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaDhcpv4DownloadReservationsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaDhcpv4GetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaDhcpv4GetPeerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaDhcpv4GetReservationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaDhcpv4GetSubnetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaDhcpv4SetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeaDhcpv4SetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaDhcpv4SetPeerRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeaDhcpv4SetPeerResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaDhcpv4SetReservationRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeaDhcpv4SetReservationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaDhcpv4SetSubnetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeaDhcpv4SetSubnetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaDhcpv4UploadReservationsRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeaDhcpv4UploadReservationsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Leases4 types
export interface KeaLeases4SearchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface KeaServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeaServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeaServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeaServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeaServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeaServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class KeaApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/kea';
  }

  // CtrlAgent methods
  async ctrlAgentGet(config?: AxiosRequestConfig): Promise<AxiosResponse<KeaCtrlAgentGetResponse>> {
    return this.client.get(`${this.basePath}/ctrl_agent/get`, config);
  }

  async ctrlAgentSet(data?: KeaCtrlAgentSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaCtrlAgentSetResponse>> {
    return this.client.post(`${this.basePath}/ctrl_agent/set`, data, config);
  }


  // Dhcpv4 methods
  async dhcpv4AddPeer(data?: KeaDhcpv4AddPeerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4AddPeerResponse>> {
    return this.client.post(`${this.basePath}/dhcpv4/add_peer`, data, config);
  }

  async dhcpv4AddReservation(data?: KeaDhcpv4AddReservationRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4AddReservationResponse>> {
    return this.client.post(`${this.basePath}/dhcpv4/add_reservation`, data, config);
  }

  async dhcpv4AddSubnet(data?: KeaDhcpv4AddSubnetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4AddSubnetResponse>> {
    return this.client.post(`${this.basePath}/dhcpv4/add_subnet`, data, config);
  }

  async dhcpv4DelPeer(uuid: string, data?: KeaDhcpv4DelPeerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4DelPeerResponse>> {
    return this.client.post(`${this.basePath}/dhcpv4/del_peer/${uuid}`, data, config);
  }

  async dhcpv4DelReservation(uuid: string, data?: KeaDhcpv4DelReservationRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4DelReservationResponse>> {
    return this.client.post(`${this.basePath}/dhcpv4/del_reservation/${uuid}`, data, config);
  }

  async dhcpv4DelSubnet(uuid: string, data?: KeaDhcpv4DelSubnetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4DelSubnetResponse>> {
    return this.client.post(`${this.basePath}/dhcpv4/del_subnet/${uuid}`, data, config);
  }

  async dhcpv4DownloadReservations(config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4DownloadReservationsResponse>> {
    return this.client.get(`${this.basePath}/dhcpv4/download_reservations`, config);
  }

  async dhcpv4Get(config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4GetResponse>> {
    return this.client.get(`${this.basePath}/dhcpv4/get`, config);
  }

  async dhcpv4GetPeer(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4GetPeerResponse>> {
    return this.client.get(`${this.basePath}/dhcpv4/get_peer/${uuid}`, config);
  }

  async dhcpv4GetReservation(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4GetReservationResponse>> {
    return this.client.get(`${this.basePath}/dhcpv4/get_reservation/${uuid}`, config);
  }

  async dhcpv4GetSubnet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4GetSubnetResponse>> {
    return this.client.get(`${this.basePath}/dhcpv4/get_subnet/${uuid}`, config);
  }

  async dhcpv4Set(data?: KeaDhcpv4SetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4SetResponse>> {
    return this.client.post(`${this.basePath}/dhcpv4/set`, data, config);
  }

  async dhcpv4SetPeer(uuid: string, data?: KeaDhcpv4SetPeerRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4SetPeerResponse>> {
    return this.client.post(`${this.basePath}/dhcpv4/set_peer/${uuid}`, data, config);
  }

  async dhcpv4SetReservation(uuid: string, data?: KeaDhcpv4SetReservationRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4SetReservationResponse>> {
    return this.client.post(`${this.basePath}/dhcpv4/set_reservation/${uuid}`, data, config);
  }

  async dhcpv4SetSubnet(uuid: string, data?: KeaDhcpv4SetSubnetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4SetSubnetResponse>> {
    return this.client.post(`${this.basePath}/dhcpv4/set_subnet/${uuid}`, data, config);
  }

  async dhcpv4UploadReservations(data?: KeaDhcpv4UploadReservationsRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaDhcpv4UploadReservationsResponse>> {
    return this.client.post(`${this.basePath}/dhcpv4/upload_reservations`, data, config);
  }


  // Leases4 methods
  async leases4Search(config?: AxiosRequestConfig): Promise<AxiosResponse<KeaLeases4SearchResponse>> {
    return this.client.get(`${this.basePath}/leases4/search`, config);
  }


  // Service methods
  async serviceReconfigure(data?: KeaServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: KeaServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: KeaServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<KeaServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: KeaServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeaServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
