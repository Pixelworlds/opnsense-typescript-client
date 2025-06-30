import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Tor module

// Model field types

// Exitacl types
export interface TorExitaclAddaclRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorExitaclAddaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorExitaclDelaclRequest {
  uuid: string;
}

export interface TorExitaclDelaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorExitaclGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorExitaclGetaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorExitaclSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorExitaclSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorExitaclSetaclRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorExitaclSetaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorExitaclToggleaclRequest {
  enabled?: boolean;
}

export interface TorExitaclToggleaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// General types
export interface TorGeneralAddhidservauthRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorGeneralAddhidservauthResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorGeneralDelhidservauthRequest {
  uuid: string;
}

export interface TorGeneralDelhidservauthResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorGeneralGethidservauthResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorGeneralSethidservauthRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorGeneralSethidservauthResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorGeneralTogglehidservauthRequest {
  enabled?: boolean;
}

export interface TorGeneralTogglehidservauthResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Hiddenservice types
export interface TorHiddenserviceAddserviceRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorHiddenserviceAddserviceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorHiddenserviceDelserviceRequest {
  uuid: string;
}

export interface TorHiddenserviceDelserviceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorHiddenserviceGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorHiddenserviceGetserviceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorHiddenserviceSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorHiddenserviceSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorHiddenserviceSetserviceRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorHiddenserviceSetserviceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorHiddenserviceToggleserviceRequest {
  enabled?: boolean;
}

export interface TorHiddenserviceToggleserviceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Hiddenserviceacl types
export interface TorHiddenserviceaclAddaclRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorHiddenserviceaclAddaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorHiddenserviceaclDelaclRequest {
  uuid: string;
}

export interface TorHiddenserviceaclDelaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorHiddenserviceaclGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorHiddenserviceaclGetaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorHiddenserviceaclSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorHiddenserviceaclSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorHiddenserviceaclSetaclRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorHiddenserviceaclSetaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorHiddenserviceaclToggleaclRequest {
  enabled?: boolean;
}

export interface TorHiddenserviceaclToggleaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Relay types
export interface TorRelayGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorRelaySetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorRelaySetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface TorServiceCircuitsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorServiceGetHiddenServicesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorServiceStreamsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Socksacl types
export interface TorSocksaclAddaclRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorSocksaclAddaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorSocksaclDelaclRequest {
  uuid: string;
}

export interface TorSocksaclDelaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorSocksaclGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorSocksaclGetaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorSocksaclSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorSocksaclSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorSocksaclSetaclRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TorSocksaclSetaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TorSocksaclToggleaclRequest {
  enabled?: boolean;
}

export interface TorSocksaclToggleaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface TorPolicy {
}

export class TorApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Exitacl methods
  async exitaclAddacl(data?: TorExitaclAddaclRequest, config?: RequestConfig): Promise<ApiResponse<TorExitaclAddaclResponse>> {
    return this.http.post(`/api/tor/exitacl/addacl`, data, config);
  }

  async exitaclDelacl(uuid: string, data?: TorExitaclDelaclRequest, config?: RequestConfig): Promise<ApiResponse<TorExitaclDelaclResponse>> {
    return this.http.post(`/api/tor/exitacl/delacl/${uuid}`, data, config);
  }

  async exitaclGet(config?: RequestConfig): Promise<ApiResponse<TorExitaclGetResponse>> {
    return this.http.get(`/api/tor/exitacl/get`, config);
  }

  async exitaclGetacl(uuid?: string, config?: RequestConfig): Promise<ApiResponse<TorExitaclGetaclResponse>> {
    return this.http.get(`/api/tor/exitacl/getacl/${uuid}`, config);
  }

  async exitaclSet(data?: TorExitaclSetRequest, config?: RequestConfig): Promise<ApiResponse<TorExitaclSetResponse>> {
    return this.http.post(`/api/tor/exitacl/set`, data, config);
  }

  async exitaclSetacl(uuid: string, data?: TorExitaclSetaclRequest, config?: RequestConfig): Promise<ApiResponse<TorExitaclSetaclResponse>> {
    return this.http.post(`/api/tor/exitacl/setacl/${uuid}`, data, config);
  }

  async exitaclToggleacl(uuid: string, data?: TorExitaclToggleaclRequest, config?: RequestConfig): Promise<ApiResponse<TorExitaclToggleaclResponse>> {
    return this.http.post(`/api/tor/exitacl/toggleacl/${uuid}`, data, config);
  }


  // General methods
  async generalAddhidservauth(data?: TorGeneralAddhidservauthRequest, config?: RequestConfig): Promise<ApiResponse<TorGeneralAddhidservauthResponse>> {
    return this.http.post(`/api/tor/general/addhidservauth`, data, config);
  }

  async generalDelhidservauth(uuid: string, data?: TorGeneralDelhidservauthRequest, config?: RequestConfig): Promise<ApiResponse<TorGeneralDelhidservauthResponse>> {
    return this.http.post(`/api/tor/general/delhidservauth/${uuid}`, data, config);
  }

  async generalGet(config?: RequestConfig): Promise<ApiResponse<TorGeneralGetResponse>> {
    return this.http.get(`/api/tor/general/get`, config);
  }

  async generalGethidservauth(uuid?: string, config?: RequestConfig): Promise<ApiResponse<TorGeneralGethidservauthResponse>> {
    return this.http.get(`/api/tor/general/gethidservauth/${uuid}`, config);
  }

  async generalSet(data?: TorGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<TorGeneralSetResponse>> {
    return this.http.post(`/api/tor/general/set`, data, config);
  }

  async generalSethidservauth(uuid: string, data?: TorGeneralSethidservauthRequest, config?: RequestConfig): Promise<ApiResponse<TorGeneralSethidservauthResponse>> {
    return this.http.post(`/api/tor/general/sethidservauth/${uuid}`, data, config);
  }

  async generalTogglehidservauth(uuid: string, data?: TorGeneralTogglehidservauthRequest, config?: RequestConfig): Promise<ApiResponse<TorGeneralTogglehidservauthResponse>> {
    return this.http.post(`/api/tor/general/togglehidservauth/${uuid}`, data, config);
  }


  // Hiddenservice methods
  async hiddenserviceAddservice(data?: TorHiddenserviceAddserviceRequest, config?: RequestConfig): Promise<ApiResponse<TorHiddenserviceAddserviceResponse>> {
    return this.http.post(`/api/tor/hiddenservice/addservice`, data, config);
  }

  async hiddenserviceDelservice(uuid: string, data?: TorHiddenserviceDelserviceRequest, config?: RequestConfig): Promise<ApiResponse<TorHiddenserviceDelserviceResponse>> {
    return this.http.post(`/api/tor/hiddenservice/delservice/${uuid}`, data, config);
  }

  async hiddenserviceGet(config?: RequestConfig): Promise<ApiResponse<TorHiddenserviceGetResponse>> {
    return this.http.get(`/api/tor/hiddenservice/get`, config);
  }

  async hiddenserviceGetservice(uuid?: string, config?: RequestConfig): Promise<ApiResponse<TorHiddenserviceGetserviceResponse>> {
    return this.http.get(`/api/tor/hiddenservice/getservice/${uuid}`, config);
  }

  async hiddenserviceSet(data?: TorHiddenserviceSetRequest, config?: RequestConfig): Promise<ApiResponse<TorHiddenserviceSetResponse>> {
    return this.http.post(`/api/tor/hiddenservice/set`, data, config);
  }

  async hiddenserviceSetservice(uuid: string, data?: TorHiddenserviceSetserviceRequest, config?: RequestConfig): Promise<ApiResponse<TorHiddenserviceSetserviceResponse>> {
    return this.http.post(`/api/tor/hiddenservice/setservice/${uuid}`, data, config);
  }

  async hiddenserviceToggleservice(uuid: string, data?: TorHiddenserviceToggleserviceRequest, config?: RequestConfig): Promise<ApiResponse<TorHiddenserviceToggleserviceResponse>> {
    return this.http.post(`/api/tor/hiddenservice/toggleservice/${uuid}`, data, config);
  }


  // Hiddenserviceacl methods
  async hiddenserviceaclAddacl(data?: TorHiddenserviceaclAddaclRequest, config?: RequestConfig): Promise<ApiResponse<TorHiddenserviceaclAddaclResponse>> {
    return this.http.post(`/api/tor/hiddenserviceacl/addacl`, data, config);
  }

  async hiddenserviceaclDelacl(uuid: string, data?: TorHiddenserviceaclDelaclRequest, config?: RequestConfig): Promise<ApiResponse<TorHiddenserviceaclDelaclResponse>> {
    return this.http.post(`/api/tor/hiddenserviceacl/delacl/${uuid}`, data, config);
  }

  async hiddenserviceaclGet(config?: RequestConfig): Promise<ApiResponse<TorHiddenserviceaclGetResponse>> {
    return this.http.get(`/api/tor/hiddenserviceacl/get`, config);
  }

  async hiddenserviceaclGetacl(uuid?: string, config?: RequestConfig): Promise<ApiResponse<TorHiddenserviceaclGetaclResponse>> {
    return this.http.get(`/api/tor/hiddenserviceacl/getacl/${uuid}`, config);
  }

  async hiddenserviceaclSet(data?: TorHiddenserviceaclSetRequest, config?: RequestConfig): Promise<ApiResponse<TorHiddenserviceaclSetResponse>> {
    return this.http.post(`/api/tor/hiddenserviceacl/set`, data, config);
  }

  async hiddenserviceaclSetacl(uuid: string, data?: TorHiddenserviceaclSetaclRequest, config?: RequestConfig): Promise<ApiResponse<TorHiddenserviceaclSetaclResponse>> {
    return this.http.post(`/api/tor/hiddenserviceacl/setacl/${uuid}`, data, config);
  }

  async hiddenserviceaclToggleacl(uuid: string, data?: TorHiddenserviceaclToggleaclRequest, config?: RequestConfig): Promise<ApiResponse<TorHiddenserviceaclToggleaclResponse>> {
    return this.http.post(`/api/tor/hiddenserviceacl/toggleacl/${uuid}`, data, config);
  }


  // Relay methods
  async relayGet(config?: RequestConfig): Promise<ApiResponse<TorRelayGetResponse>> {
    return this.http.get(`/api/tor/relay/get`, config);
  }

  async relaySet(data?: TorRelaySetRequest, config?: RequestConfig): Promise<ApiResponse<TorRelaySetResponse>> {
    return this.http.post(`/api/tor/relay/set`, data, config);
  }


  // Service methods
  async serviceCircuits(config?: RequestConfig): Promise<ApiResponse<TorServiceCircuitsResponse>> {
    return this.http.get(`/api/tor/service/circuits`, config);
  }

  async serviceGetHiddenServices(config?: RequestConfig): Promise<ApiResponse<TorServiceGetHiddenServicesResponse>> {
    return this.http.get(`/api/tor/service/get_hidden_services`, config);
  }

  async serviceReconfigure(data?: TorServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<TorServiceReconfigureResponse>> {
    return this.http.post(`/api/tor/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: TorServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<TorServiceRestartResponse>> {
    return this.http.post(`/api/tor/service/restart`, data, config);
  }

  async serviceStart(data?: TorServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<TorServiceStartResponse>> {
    return this.http.post(`/api/tor/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<TorServiceStatusResponse>> {
    return this.http.get(`/api/tor/service/status`, config);
  }

  async serviceStop(data?: TorServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<TorServiceStopResponse>> {
    return this.http.post(`/api/tor/service/stop`, data, config);
  }

  async serviceStreams(config?: RequestConfig): Promise<ApiResponse<TorServiceStreamsResponse>> {
    return this.http.get(`/api/tor/service/streams`, config);
  }


  // Socksacl methods
  async socksaclAddacl(data?: TorSocksaclAddaclRequest, config?: RequestConfig): Promise<ApiResponse<TorSocksaclAddaclResponse>> {
    return this.http.post(`/api/tor/socksacl/addacl`, data, config);
  }

  async socksaclDelacl(uuid: string, data?: TorSocksaclDelaclRequest, config?: RequestConfig): Promise<ApiResponse<TorSocksaclDelaclResponse>> {
    return this.http.post(`/api/tor/socksacl/delacl/${uuid}`, data, config);
  }

  async socksaclGet(config?: RequestConfig): Promise<ApiResponse<TorSocksaclGetResponse>> {
    return this.http.get(`/api/tor/socksacl/get`, config);
  }

  async socksaclGetacl(uuid?: string, config?: RequestConfig): Promise<ApiResponse<TorSocksaclGetaclResponse>> {
    return this.http.get(`/api/tor/socksacl/getacl/${uuid}`, config);
  }

  async socksaclSet(data?: TorSocksaclSetRequest, config?: RequestConfig): Promise<ApiResponse<TorSocksaclSetResponse>> {
    return this.http.post(`/api/tor/socksacl/set`, data, config);
  }

  async socksaclSetacl(uuid: string, data?: TorSocksaclSetaclRequest, config?: RequestConfig): Promise<ApiResponse<TorSocksaclSetaclResponse>> {
    return this.http.post(`/api/tor/socksacl/setacl/${uuid}`, data, config);
  }

  async socksaclToggleacl(uuid: string, data?: TorSocksaclToggleaclRequest, config?: RequestConfig): Promise<ApiResponse<TorSocksaclToggleaclResponse>> {
    return this.http.post(`/api/tor/socksacl/toggleacl/${uuid}`, data, config);
  }

}
