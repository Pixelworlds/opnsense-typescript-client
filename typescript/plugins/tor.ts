import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/tor';
  }

  // Exitacl methods
  async exitaclAddacl(data?: TorExitaclAddaclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorExitaclAddaclResponse>> {
    return this.client.post(`${this.basePath}/exitacl/addacl`, data, config);
  }

  async exitaclDelacl(uuid: string, data?: TorExitaclDelaclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorExitaclDelaclResponse>> {
    return this.client.post(`${this.basePath}/exitacl/delacl/${uuid}`, data, config);
  }

  async exitaclGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TorExitaclGetResponse>> {
    return this.client.get(`${this.basePath}/exitacl/get`, config);
  }

  async exitaclGetacl(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TorExitaclGetaclResponse>> {
    return this.client.get(`${this.basePath}/exitacl/getacl/${uuid}`, config);
  }

  async exitaclSet(data?: TorExitaclSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorExitaclSetResponse>> {
    return this.client.post(`${this.basePath}/exitacl/set`, data, config);
  }

  async exitaclSetacl(uuid: string, data?: TorExitaclSetaclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorExitaclSetaclResponse>> {
    return this.client.post(`${this.basePath}/exitacl/setacl/${uuid}`, data, config);
  }

  async exitaclToggleacl(uuid: string, data?: TorExitaclToggleaclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorExitaclToggleaclResponse>> {
    return this.client.post(`${this.basePath}/exitacl/toggleacl/${uuid}`, data, config);
  }


  // General methods
  async generalAddhidservauth(data?: TorGeneralAddhidservauthRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorGeneralAddhidservauthResponse>> {
    return this.client.post(`${this.basePath}/general/addhidservauth`, data, config);
  }

  async generalDelhidservauth(uuid: string, data?: TorGeneralDelhidservauthRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorGeneralDelhidservauthResponse>> {
    return this.client.post(`${this.basePath}/general/delhidservauth/${uuid}`, data, config);
  }

  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TorGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalGethidservauth(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TorGeneralGethidservauthResponse>> {
    return this.client.get(`${this.basePath}/general/gethidservauth/${uuid}`, config);
  }

  async generalSet(data?: TorGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }

  async generalSethidservauth(uuid: string, data?: TorGeneralSethidservauthRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorGeneralSethidservauthResponse>> {
    return this.client.post(`${this.basePath}/general/sethidservauth/${uuid}`, data, config);
  }

  async generalTogglehidservauth(uuid: string, data?: TorGeneralTogglehidservauthRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorGeneralTogglehidservauthResponse>> {
    return this.client.post(`${this.basePath}/general/togglehidservauth/${uuid}`, data, config);
  }


  // Hiddenservice methods
  async hiddenserviceAddservice(data?: TorHiddenserviceAddserviceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorHiddenserviceAddserviceResponse>> {
    return this.client.post(`${this.basePath}/hiddenservice/addservice`, data, config);
  }

  async hiddenserviceDelservice(uuid: string, data?: TorHiddenserviceDelserviceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorHiddenserviceDelserviceResponse>> {
    return this.client.post(`${this.basePath}/hiddenservice/delservice/${uuid}`, data, config);
  }

  async hiddenserviceGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TorHiddenserviceGetResponse>> {
    return this.client.get(`${this.basePath}/hiddenservice/get`, config);
  }

  async hiddenserviceGetservice(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TorHiddenserviceGetserviceResponse>> {
    return this.client.get(`${this.basePath}/hiddenservice/getservice/${uuid}`, config);
  }

  async hiddenserviceSet(data?: TorHiddenserviceSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorHiddenserviceSetResponse>> {
    return this.client.post(`${this.basePath}/hiddenservice/set`, data, config);
  }

  async hiddenserviceSetservice(uuid: string, data?: TorHiddenserviceSetserviceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorHiddenserviceSetserviceResponse>> {
    return this.client.post(`${this.basePath}/hiddenservice/setservice/${uuid}`, data, config);
  }

  async hiddenserviceToggleservice(uuid: string, data?: TorHiddenserviceToggleserviceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorHiddenserviceToggleserviceResponse>> {
    return this.client.post(`${this.basePath}/hiddenservice/toggleservice/${uuid}`, data, config);
  }


  // Hiddenserviceacl methods
  async hiddenserviceaclAddacl(data?: TorHiddenserviceaclAddaclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorHiddenserviceaclAddaclResponse>> {
    return this.client.post(`${this.basePath}/hiddenserviceacl/addacl`, data, config);
  }

  async hiddenserviceaclDelacl(uuid: string, data?: TorHiddenserviceaclDelaclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorHiddenserviceaclDelaclResponse>> {
    return this.client.post(`${this.basePath}/hiddenserviceacl/delacl/${uuid}`, data, config);
  }

  async hiddenserviceaclGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TorHiddenserviceaclGetResponse>> {
    return this.client.get(`${this.basePath}/hiddenserviceacl/get`, config);
  }

  async hiddenserviceaclGetacl(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TorHiddenserviceaclGetaclResponse>> {
    return this.client.get(`${this.basePath}/hiddenserviceacl/getacl/${uuid}`, config);
  }

  async hiddenserviceaclSet(data?: TorHiddenserviceaclSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorHiddenserviceaclSetResponse>> {
    return this.client.post(`${this.basePath}/hiddenserviceacl/set`, data, config);
  }

  async hiddenserviceaclSetacl(uuid: string, data?: TorHiddenserviceaclSetaclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorHiddenserviceaclSetaclResponse>> {
    return this.client.post(`${this.basePath}/hiddenserviceacl/setacl/${uuid}`, data, config);
  }

  async hiddenserviceaclToggleacl(uuid: string, data?: TorHiddenserviceaclToggleaclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorHiddenserviceaclToggleaclResponse>> {
    return this.client.post(`${this.basePath}/hiddenserviceacl/toggleacl/${uuid}`, data, config);
  }


  // Relay methods
  async relayGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TorRelayGetResponse>> {
    return this.client.get(`${this.basePath}/relay/get`, config);
  }

  async relaySet(data?: TorRelaySetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorRelaySetResponse>> {
    return this.client.post(`${this.basePath}/relay/set`, data, config);
  }


  // Service methods
  async serviceCircuits(config?: AxiosRequestConfig): Promise<AxiosResponse<TorServiceCircuitsResponse>> {
    return this.client.get(`${this.basePath}/service/circuits`, config);
  }

  async serviceGetHiddenServices(config?: AxiosRequestConfig): Promise<AxiosResponse<TorServiceGetHiddenServicesResponse>> {
    return this.client.get(`${this.basePath}/service/get_hidden_services`, config);
  }

  async serviceReconfigure(data?: TorServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: TorServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: TorServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<TorServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: TorServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

  async serviceStreams(config?: AxiosRequestConfig): Promise<AxiosResponse<TorServiceStreamsResponse>> {
    return this.client.get(`${this.basePath}/service/streams`, config);
  }


  // Socksacl methods
  async socksaclAddacl(data?: TorSocksaclAddaclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorSocksaclAddaclResponse>> {
    return this.client.post(`${this.basePath}/socksacl/addacl`, data, config);
  }

  async socksaclDelacl(uuid: string, data?: TorSocksaclDelaclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorSocksaclDelaclResponse>> {
    return this.client.post(`${this.basePath}/socksacl/delacl/${uuid}`, data, config);
  }

  async socksaclGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TorSocksaclGetResponse>> {
    return this.client.get(`${this.basePath}/socksacl/get`, config);
  }

  async socksaclGetacl(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TorSocksaclGetaclResponse>> {
    return this.client.get(`${this.basePath}/socksacl/getacl/${uuid}`, config);
  }

  async socksaclSet(data?: TorSocksaclSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorSocksaclSetResponse>> {
    return this.client.post(`${this.basePath}/socksacl/set`, data, config);
  }

  async socksaclSetacl(uuid: string, data?: TorSocksaclSetaclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorSocksaclSetaclResponse>> {
    return this.client.post(`${this.basePath}/socksacl/setacl/${uuid}`, data, config);
  }

  async socksaclToggleacl(uuid: string, data?: TorSocksaclToggleaclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TorSocksaclToggleaclResponse>> {
    return this.client.post(`${this.basePath}/socksacl/toggleacl/${uuid}`, data, config);
  }

}
