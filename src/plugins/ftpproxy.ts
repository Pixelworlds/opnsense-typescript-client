import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Ftpproxy module

// Service types
export interface FtpproxyServiceConfigResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FtpproxyServiceReloadResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FtpproxyServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FtpproxyServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FtpproxyServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FtpproxyServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface FtpproxySettingsAddProxyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FtpproxySettingsAddProxyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FtpproxySettingsDelProxyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FtpproxySettingsDelProxyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FtpproxySettingsGetProxyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FtpproxySettingsSearchProxyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FtpproxySettingsSetProxyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FtpproxySettingsSetProxyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FtpproxySettingsToggleProxyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FtpproxySettingsToggleProxyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class FtpproxyApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceConfig(config?: RequestConfig): Promise<ApiResponse<FtpproxyServiceConfigResponse>> {
    return this.http.get(`/api/ftpproxy/service/config`, config);
  }

  async serviceReload(config?: RequestConfig): Promise<ApiResponse<FtpproxyServiceReloadResponse>> {
    return this.http.get(`/api/ftpproxy/service/reload`, config);
  }

  async serviceRestart(uuid: string, config?: RequestConfig): Promise<ApiResponse<FtpproxyServiceRestartResponse>> {
    return this.http.get(`/api/ftpproxy/service/restart/${uuid}`, config);
  }

  async serviceStart(uuid: string, config?: RequestConfig): Promise<ApiResponse<FtpproxyServiceStartResponse>> {
    return this.http.get(`/api/ftpproxy/service/start/${uuid}`, config);
  }

  async serviceStatus(uuid: string, config?: RequestConfig): Promise<ApiResponse<FtpproxyServiceStatusResponse>> {
    return this.http.get(`/api/ftpproxy/service/status/${uuid}`, config);
  }

  async serviceStop(uuid: string, config?: RequestConfig): Promise<ApiResponse<FtpproxyServiceStopResponse>> {
    return this.http.get(`/api/ftpproxy/service/stop/${uuid}`, config);
  }


  // Settings methods
  async settingsAddProxy(data?: FtpproxySettingsAddProxyRequest, config?: RequestConfig): Promise<ApiResponse<FtpproxySettingsAddProxyResponse>> {
    return this.http.post(`/api/ftpproxy/settings/add_proxy`, data, config);
  }

  async settingsDelProxy(uuid: string, data?: FtpproxySettingsDelProxyRequest, config?: RequestConfig): Promise<ApiResponse<FtpproxySettingsDelProxyResponse>> {
    return this.http.post(`/api/ftpproxy/settings/del_proxy/${uuid}`, data, config);
  }

  async settingsGetProxy(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FtpproxySettingsGetProxyResponse>> {
    return this.http.get(`/api/ftpproxy/settings/get_proxy/${uuid}`, config);
  }

  async settingsSearchProxy(config?: RequestConfig): Promise<ApiResponse<FtpproxySettingsSearchProxyResponse>> {
    return this.http.get(`/api/ftpproxy/settings/search_proxy`, config);
  }

  async settingsSetProxy(uuid: string, data?: FtpproxySettingsSetProxyRequest, config?: RequestConfig): Promise<ApiResponse<FtpproxySettingsSetProxyResponse>> {
    return this.http.post(`/api/ftpproxy/settings/set_proxy/${uuid}`, data, config);
  }

  async settingsToggleProxy(uuid: string, data?: FtpproxySettingsToggleProxyRequest, config?: RequestConfig): Promise<ApiResponse<FtpproxySettingsToggleProxyResponse>> {
    return this.http.post(`/api/ftpproxy/settings/toggle_proxy/${uuid}`, data, config);
  }

}
