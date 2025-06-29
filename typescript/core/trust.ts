import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Trust module

// Model field types

// Ca types
export interface TrustCaCaInfoResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCaCaListResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCaDelRequest {
  uuid: string;
}

export interface TrustCaDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCaGenerateFileRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrustCaGenerateFileResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCaGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCaRawDumpResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCaSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrustCaSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Cert types
export interface TrustCertAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrustCertAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCertCaInfoResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCertCaListResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCertDelRequest {
  uuid: string;
}

export interface TrustCertDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCertGenerateFileRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrustCertGenerateFileResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCertGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCertRawDumpResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCertSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrustCertSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCertUserListResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Crl types
export interface TrustCrlDelRequest {
  uuid: string;
}

export interface TrustCrlDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCrlGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCrlGetOcspInfoDataResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCrlRawDumpResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCrlSearchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustCrlSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrustCrlSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface TrustSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustSettingsReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrustSettingsReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrustSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrustSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class TrustApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/trust';
  }

  // Ca methods
  async caCaInfo(caref: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCaCaInfoResponse>> {
    return this.client.get(`${this.basePath}/ca/ca_info/${caref}`, config);
  }

  async caCaList(config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCaCaListResponse>> {
    return this.client.get(`${this.basePath}/ca/ca_list`, config);
  }

  async caDel(uuid: string, data?: TrustCaDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCaDelResponse>> {
    return this.client.post(`${this.basePath}/ca/del/${uuid}`, data, config);
  }

  async caGenerateFile(uuid?: string, type?: string, data?: TrustCaGenerateFileRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCaGenerateFileResponse>> {
    return this.client.post(`${this.basePath}/ca/generate_file/${uuid}/${type}`, data, config);
  }

  async caGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCaGetResponse>> {
    return this.client.get(`${this.basePath}/ca/get`, config);
  }

  async caRawDump(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCaRawDumpResponse>> {
    return this.client.get(`${this.basePath}/ca/raw_dump/${uuid}`, config);
  }

  async caSet(uuid?: string, data?: TrustCaSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCaSetResponse>> {
    return this.client.post(`${this.basePath}/ca/set/${uuid}`, data, config);
  }


  // Cert methods
  async certAdd(data?: TrustCertAddRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCertAddResponse>> {
    return this.client.post(`${this.basePath}/cert/add`, data, config);
  }

  async certCaInfo(caref?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCertCaInfoResponse>> {
    return this.client.get(`${this.basePath}/cert/ca_info/${caref}`, config);
  }

  async certCaList(config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCertCaListResponse>> {
    return this.client.get(`${this.basePath}/cert/ca_list`, config);
  }

  async certDel(uuid: string, data?: TrustCertDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCertDelResponse>> {
    return this.client.post(`${this.basePath}/cert/del/${uuid}`, data, config);
  }

  async certGenerateFile(uuid?: string, type?: string, data?: TrustCertGenerateFileRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCertGenerateFileResponse>> {
    return this.client.post(`${this.basePath}/cert/generate_file/${uuid}/${type}`, data, config);
  }

  async certGet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCertGetResponse>> {
    return this.client.get(`${this.basePath}/cert/get/${uuid}`, config);
  }

  async certRawDump(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCertRawDumpResponse>> {
    return this.client.get(`${this.basePath}/cert/raw_dump/${uuid}`, config);
  }

  async certSet(uuid?: string, data?: TrustCertSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCertSetResponse>> {
    return this.client.post(`${this.basePath}/cert/set/${uuid}`, data, config);
  }

  async certUserList(config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCertUserListResponse>> {
    return this.client.get(`${this.basePath}/cert/user_list`, config);
  }


  // Crl methods
  async crlDel(caref: string, data?: TrustCrlDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCrlDelResponse>> {
    return this.client.post(`${this.basePath}/crl/del/${caref}`, data, config);
  }

  async crlGet(caref: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCrlGetResponse>> {
    return this.client.get(`${this.basePath}/crl/get/${caref}`, config);
  }

  async crlGetOcspInfoData(caref: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCrlGetOcspInfoDataResponse>> {
    return this.client.get(`${this.basePath}/crl/get_ocsp_info_data/${caref}`, config);
  }

  async crlRawDump(caref: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCrlRawDumpResponse>> {
    return this.client.get(`${this.basePath}/crl/raw_dump/${caref}`, config);
  }

  async crlSearch(config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCrlSearchResponse>> {
    return this.client.get(`${this.basePath}/crl/search`, config);
  }

  async crlSet(caref: string, data?: TrustCrlSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustCrlSetResponse>> {
    return this.client.post(`${this.basePath}/crl/set/${caref}`, data, config);
  }


  // Settings methods
  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TrustSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsReconfigure(data?: TrustSettingsReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustSettingsReconfigureResponse>> {
    return this.client.post(`${this.basePath}/settings/reconfigure`, data, config);
  }

  async settingsSet(data?: TrustSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrustSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

}
