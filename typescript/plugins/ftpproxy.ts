import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/ftpproxy';
  }

  // Service methods
  async serviceConfig(config?: AxiosRequestConfig): Promise<AxiosResponse<FtpproxyServiceConfigResponse>> {
    return this.client.get(`${this.basePath}/service/config`, config);
  }

  async serviceReload(config?: AxiosRequestConfig): Promise<AxiosResponse<FtpproxyServiceReloadResponse>> {
    return this.client.get(`${this.basePath}/service/reload`, config);
  }

  async serviceRestart(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FtpproxyServiceRestartResponse>> {
    return this.client.get(`${this.basePath}/service/restart/${uuid}`, config);
  }

  async serviceStart(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FtpproxyServiceStartResponse>> {
    return this.client.get(`${this.basePath}/service/start/${uuid}`, config);
  }

  async serviceStatus(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FtpproxyServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status/${uuid}`, config);
  }

  async serviceStop(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FtpproxyServiceStopResponse>> {
    return this.client.get(`${this.basePath}/service/stop/${uuid}`, config);
  }


  // Settings methods
  async settingsAddProxy(data?: FtpproxySettingsAddProxyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FtpproxySettingsAddProxyResponse>> {
    return this.client.post(`${this.basePath}/settings/add_proxy`, data, config);
  }

  async settingsDelProxy(uuid: string, data?: FtpproxySettingsDelProxyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FtpproxySettingsDelProxyResponse>> {
    return this.client.post(`${this.basePath}/settings/del_proxy/${uuid}`, data, config);
  }

  async settingsGetProxy(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FtpproxySettingsGetProxyResponse>> {
    return this.client.get(`${this.basePath}/settings/get_proxy/${uuid}`, config);
  }

  async settingsSearchProxy(config?: AxiosRequestConfig): Promise<AxiosResponse<FtpproxySettingsSearchProxyResponse>> {
    return this.client.get(`${this.basePath}/settings/search_proxy`, config);
  }

  async settingsSetProxy(uuid: string, data?: FtpproxySettingsSetProxyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FtpproxySettingsSetProxyResponse>> {
    return this.client.post(`${this.basePath}/settings/set_proxy/${uuid}`, data, config);
  }

  async settingsToggleProxy(uuid: string, data?: FtpproxySettingsToggleProxyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FtpproxySettingsToggleProxyResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_proxy/${uuid}`, data, config);
  }

}
