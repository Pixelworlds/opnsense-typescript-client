import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // CtrlAgent methods
  async ctrlAgentGet(config?: RequestConfig): Promise<ApiResponse<KeaCtrlAgentGetResponse>> {
    return this.http.get(`/api/kea/ctrl_agent/get`, config);
  }

  async ctrlAgentSet(data?: KeaCtrlAgentSetRequest, config?: RequestConfig): Promise<ApiResponse<KeaCtrlAgentSetResponse>> {
    return this.http.post(`/api/kea/ctrl_agent/set`, data, config);
  }


  // Dhcpv4 methods
  async dhcpv4AddPeer(data?: KeaDhcpv4AddPeerRequest, config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4AddPeerResponse>> {
    return this.http.post(`/api/kea/dhcpv4/add_peer`, data, config);
  }

  async dhcpv4AddReservation(data?: KeaDhcpv4AddReservationRequest, config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4AddReservationResponse>> {
    return this.http.post(`/api/kea/dhcpv4/add_reservation`, data, config);
  }

  async dhcpv4AddSubnet(data?: KeaDhcpv4AddSubnetRequest, config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4AddSubnetResponse>> {
    return this.http.post(`/api/kea/dhcpv4/add_subnet`, data, config);
  }

  async dhcpv4DelPeer(uuid: string, data?: KeaDhcpv4DelPeerRequest, config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4DelPeerResponse>> {
    return this.http.post(`/api/kea/dhcpv4/del_peer/${uuid}`, data, config);
  }

  async dhcpv4DelReservation(uuid: string, data?: KeaDhcpv4DelReservationRequest, config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4DelReservationResponse>> {
    return this.http.post(`/api/kea/dhcpv4/del_reservation/${uuid}`, data, config);
  }

  async dhcpv4DelSubnet(uuid: string, data?: KeaDhcpv4DelSubnetRequest, config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4DelSubnetResponse>> {
    return this.http.post(`/api/kea/dhcpv4/del_subnet/${uuid}`, data, config);
  }

  async dhcpv4DownloadReservations(config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4DownloadReservationsResponse>> {
    return this.http.get(`/api/kea/dhcpv4/download_reservations`, config);
  }

  async dhcpv4Get(config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4GetResponse>> {
    return this.http.get(`/api/kea/dhcpv4/get`, config);
  }

  async dhcpv4GetPeer(uuid?: string, config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4GetPeerResponse>> {
    return this.http.get(`/api/kea/dhcpv4/get_peer/${uuid}`, config);
  }

  async dhcpv4GetReservation(uuid?: string, config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4GetReservationResponse>> {
    return this.http.get(`/api/kea/dhcpv4/get_reservation/${uuid}`, config);
  }

  async dhcpv4GetSubnet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4GetSubnetResponse>> {
    return this.http.get(`/api/kea/dhcpv4/get_subnet/${uuid}`, config);
  }

  async dhcpv4Set(data?: KeaDhcpv4SetRequest, config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4SetResponse>> {
    return this.http.post(`/api/kea/dhcpv4/set`, data, config);
  }

  async dhcpv4SetPeer(uuid: string, data?: KeaDhcpv4SetPeerRequest, config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4SetPeerResponse>> {
    return this.http.post(`/api/kea/dhcpv4/set_peer/${uuid}`, data, config);
  }

  async dhcpv4SetReservation(uuid: string, data?: KeaDhcpv4SetReservationRequest, config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4SetReservationResponse>> {
    return this.http.post(`/api/kea/dhcpv4/set_reservation/${uuid}`, data, config);
  }

  async dhcpv4SetSubnet(uuid: string, data?: KeaDhcpv4SetSubnetRequest, config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4SetSubnetResponse>> {
    return this.http.post(`/api/kea/dhcpv4/set_subnet/${uuid}`, data, config);
  }

  async dhcpv4UploadReservations(data?: KeaDhcpv4UploadReservationsRequest, config?: RequestConfig): Promise<ApiResponse<KeaDhcpv4UploadReservationsResponse>> {
    return this.http.post(`/api/kea/dhcpv4/upload_reservations`, data, config);
  }


  // Leases4 methods
  async leases4Search(config?: RequestConfig): Promise<ApiResponse<KeaLeases4SearchResponse>> {
    return this.http.get(`/api/kea/leases4/search`, config);
  }


  // Service methods
  async serviceReconfigure(data?: KeaServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<KeaServiceReconfigureResponse>> {
    return this.http.post(`/api/kea/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: KeaServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<KeaServiceRestartResponse>> {
    return this.http.post(`/api/kea/service/restart`, data, config);
  }

  async serviceStart(data?: KeaServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<KeaServiceStartResponse>> {
    return this.http.post(`/api/kea/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<KeaServiceStatusResponse>> {
    return this.http.get(`/api/kea/service/status`, config);
  }

  async serviceStop(data?: KeaServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<KeaServiceStopResponse>> {
    return this.http.post(`/api/kea/service/stop`, data, config);
  }

}
