import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Ca methods
  async caCaInfo(caref: string, config?: RequestConfig): Promise<ApiResponse<TrustCaCaInfoResponse>> {
    return this.http.get(`/api/trust/ca/ca_info/${caref}`, config);
  }

  async caCaList(config?: RequestConfig): Promise<ApiResponse<TrustCaCaListResponse>> {
    return this.http.get(`/api/trust/ca/ca_list`, config);
  }

  async caDel(uuid: string, data?: TrustCaDelRequest, config?: RequestConfig): Promise<ApiResponse<TrustCaDelResponse>> {
    return this.http.post(`/api/trust/ca/del/${uuid}`, data, config);
  }

  async caGenerateFile(uuid?: string, type?: string, data?: TrustCaGenerateFileRequest, config?: RequestConfig): Promise<ApiResponse<TrustCaGenerateFileResponse>> {
    return this.http.post(`/api/trust/ca/generate_file/${uuid}/${type}`, data, config);
  }

  async caGet(config?: RequestConfig): Promise<ApiResponse<TrustCaGetResponse>> {
    return this.http.get(`/api/trust/ca/get`, config);
  }

  async caRawDump(uuid: string, config?: RequestConfig): Promise<ApiResponse<TrustCaRawDumpResponse>> {
    return this.http.get(`/api/trust/ca/raw_dump/${uuid}`, config);
  }

  async caSet(uuid?: string, data?: TrustCaSetRequest, config?: RequestConfig): Promise<ApiResponse<TrustCaSetResponse>> {
    return this.http.post(`/api/trust/ca/set/${uuid}`, data, config);
  }


  // Cert methods
  async certAdd(data?: TrustCertAddRequest, config?: RequestConfig): Promise<ApiResponse<TrustCertAddResponse>> {
    return this.http.post(`/api/trust/cert/add`, data, config);
  }

  async certCaInfo(caref?: string, config?: RequestConfig): Promise<ApiResponse<TrustCertCaInfoResponse>> {
    return this.http.get(`/api/trust/cert/ca_info/${caref}`, config);
  }

  async certCaList(config?: RequestConfig): Promise<ApiResponse<TrustCertCaListResponse>> {
    return this.http.get(`/api/trust/cert/ca_list`, config);
  }

  async certDel(uuid: string, data?: TrustCertDelRequest, config?: RequestConfig): Promise<ApiResponse<TrustCertDelResponse>> {
    return this.http.post(`/api/trust/cert/del/${uuid}`, data, config);
  }

  async certGenerateFile(uuid?: string, type?: string, data?: TrustCertGenerateFileRequest, config?: RequestConfig): Promise<ApiResponse<TrustCertGenerateFileResponse>> {
    return this.http.post(`/api/trust/cert/generate_file/${uuid}/${type}`, data, config);
  }

  async certGet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<TrustCertGetResponse>> {
    return this.http.get(`/api/trust/cert/get/${uuid}`, config);
  }

  async certRawDump(uuid: string, config?: RequestConfig): Promise<ApiResponse<TrustCertRawDumpResponse>> {
    return this.http.get(`/api/trust/cert/raw_dump/${uuid}`, config);
  }

  async certSet(uuid?: string, data?: TrustCertSetRequest, config?: RequestConfig): Promise<ApiResponse<TrustCertSetResponse>> {
    return this.http.post(`/api/trust/cert/set/${uuid}`, data, config);
  }

  async certUserList(config?: RequestConfig): Promise<ApiResponse<TrustCertUserListResponse>> {
    return this.http.get(`/api/trust/cert/user_list`, config);
  }


  // Crl methods
  async crlDel(caref: string, data?: TrustCrlDelRequest, config?: RequestConfig): Promise<ApiResponse<TrustCrlDelResponse>> {
    return this.http.post(`/api/trust/crl/del/${caref}`, data, config);
  }

  async crlGet(caref: string, config?: RequestConfig): Promise<ApiResponse<TrustCrlGetResponse>> {
    return this.http.get(`/api/trust/crl/get/${caref}`, config);
  }

  async crlGetOcspInfoData(caref: string, config?: RequestConfig): Promise<ApiResponse<TrustCrlGetOcspInfoDataResponse>> {
    return this.http.get(`/api/trust/crl/get_ocsp_info_data/${caref}`, config);
  }

  async crlRawDump(caref: string, config?: RequestConfig): Promise<ApiResponse<TrustCrlRawDumpResponse>> {
    return this.http.get(`/api/trust/crl/raw_dump/${caref}`, config);
  }

  async crlSearch(config?: RequestConfig): Promise<ApiResponse<TrustCrlSearchResponse>> {
    return this.http.get(`/api/trust/crl/search`, config);
  }

  async crlSet(caref: string, data?: TrustCrlSetRequest, config?: RequestConfig): Promise<ApiResponse<TrustCrlSetResponse>> {
    return this.http.post(`/api/trust/crl/set/${caref}`, data, config);
  }


  // Settings methods
  async settingsGet(config?: RequestConfig): Promise<ApiResponse<TrustSettingsGetResponse>> {
    return this.http.get(`/api/trust/settings/get`, config);
  }

  async settingsReconfigure(data?: TrustSettingsReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<TrustSettingsReconfigureResponse>> {
    return this.http.post(`/api/trust/settings/reconfigure`, data, config);
  }

  async settingsSet(data?: TrustSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<TrustSettingsSetResponse>> {
    return this.http.post(`/api/trust/settings/set`, data, config);
  }

}
