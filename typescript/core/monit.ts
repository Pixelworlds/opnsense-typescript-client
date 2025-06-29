import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Monit module

// Model field types

// Service types
export interface MonitServiceCheckRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MonitServiceCheckResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MonitServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MonitServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MonitServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MonitServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface MonitSettingsAddAlertRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MonitSettingsAddAlertResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsAddServiceRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MonitSettingsAddServiceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsAddTestRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MonitSettingsAddTestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsDelAlertRequest {
  uuid: string;
}

export interface MonitSettingsDelAlertResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsDelServiceRequest {
  uuid: string;
}

export interface MonitSettingsDelServiceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsDelTestRequest {
  uuid: string;
}

export interface MonitSettingsDelTestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsDirtyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsGetAlertResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsGetGeneralResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsGetServiceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsGetTestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MonitSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsSetAlertRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MonitSettingsSetAlertResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsSetServiceRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MonitSettingsSetServiceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsSetTestRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface MonitSettingsSetTestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsToggleAlertRequest {
  enabled?: boolean;
}

export interface MonitSettingsToggleAlertResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface MonitSettingsToggleServiceRequest {
  enabled?: boolean;
}

export interface MonitSettingsToggleServiceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Status types
export interface MonitStatusGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface MonitAlert {
}

export interface MonitService {
}

export interface MonitTest {
}

export class MonitApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/monit';
  }

  // Service methods
  async serviceCheck(data?: MonitServiceCheckRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitServiceCheckResponse>> {
    return this.client.post(`${this.basePath}/service/check`, data, config);
  }

  async serviceReconfigure(data?: MonitServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: MonitServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: MonitServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<MonitServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: MonitServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddAlert(data?: MonitSettingsAddAlertRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsAddAlertResponse>> {
    return this.client.post(`${this.basePath}/settings/add_alert`, data, config);
  }

  async settingsAddService(data?: MonitSettingsAddServiceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsAddServiceResponse>> {
    return this.client.post(`${this.basePath}/settings/add_service`, data, config);
  }

  async settingsAddTest(data?: MonitSettingsAddTestRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsAddTestResponse>> {
    return this.client.post(`${this.basePath}/settings/add_test`, data, config);
  }

  async settingsDelAlert(uuid: string, data?: MonitSettingsDelAlertRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsDelAlertResponse>> {
    return this.client.post(`${this.basePath}/settings/del_alert/${uuid}`, data, config);
  }

  async settingsDelService(uuid: string, data?: MonitSettingsDelServiceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsDelServiceResponse>> {
    return this.client.post(`${this.basePath}/settings/del_service/${uuid}`, data, config);
  }

  async settingsDelTest(uuid: string, data?: MonitSettingsDelTestRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsDelTestResponse>> {
    return this.client.post(`${this.basePath}/settings/del_test/${uuid}`, data, config);
  }

  async settingsDirty(config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsDirtyResponse>> {
    return this.client.get(`${this.basePath}/settings/dirty`, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetAlert(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsGetAlertResponse>> {
    return this.client.get(`${this.basePath}/settings/get_alert/${uuid}`, config);
  }

  async settingsGetGeneral(config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsGetGeneralResponse>> {
    return this.client.get(`${this.basePath}/settings/get_general`, config);
  }

  async settingsGetService(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsGetServiceResponse>> {
    return this.client.get(`${this.basePath}/settings/get_service/${uuid}`, config);
  }

  async settingsGetTest(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsGetTestResponse>> {
    return this.client.get(`${this.basePath}/settings/get_test/${uuid}`, config);
  }

  async settingsSet(data?: MonitSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetAlert(uuid: string, data?: MonitSettingsSetAlertRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsSetAlertResponse>> {
    return this.client.post(`${this.basePath}/settings/set_alert/${uuid}`, data, config);
  }

  async settingsSetService(uuid: string, data?: MonitSettingsSetServiceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsSetServiceResponse>> {
    return this.client.post(`${this.basePath}/settings/set_service/${uuid}`, data, config);
  }

  async settingsSetTest(uuid: string, data?: MonitSettingsSetTestRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsSetTestResponse>> {
    return this.client.post(`${this.basePath}/settings/set_test/${uuid}`, data, config);
  }

  async settingsToggleAlert(uuid: string, enabled?: string, data?: MonitSettingsToggleAlertRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsToggleAlertResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_alert/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleService(uuid: string, enabled?: string, data?: MonitSettingsToggleServiceRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitSettingsToggleServiceResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_service/${uuid}/${enabled}`, data, config);
  }


  // Status methods
  async statusGet(format?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<MonitStatusGetResponse>> {
    return this.client.get(`${this.basePath}/status/get/${format}`, config);
  }

}
