import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceCheck(data?: MonitServiceCheckRequest, config?: RequestConfig): Promise<ApiResponse<MonitServiceCheckResponse>> {
    return this.http.post(`/api/monit/service/check`, data, config);
  }

  async serviceReconfigure(data?: MonitServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<MonitServiceReconfigureResponse>> {
    return this.http.post(`/api/monit/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: MonitServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<MonitServiceRestartResponse>> {
    return this.http.post(`/api/monit/service/restart`, data, config);
  }

  async serviceStart(data?: MonitServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<MonitServiceStartResponse>> {
    return this.http.post(`/api/monit/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<MonitServiceStatusResponse>> {
    return this.http.get(`/api/monit/service/status`, config);
  }

  async serviceStop(data?: MonitServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<MonitServiceStopResponse>> {
    return this.http.post(`/api/monit/service/stop`, data, config);
  }


  // Settings methods
  async settingsAddAlert(data?: MonitSettingsAddAlertRequest, config?: RequestConfig): Promise<ApiResponse<MonitSettingsAddAlertResponse>> {
    return this.http.post(`/api/monit/settings/add_alert`, data, config);
  }

  async settingsAddService(data?: MonitSettingsAddServiceRequest, config?: RequestConfig): Promise<ApiResponse<MonitSettingsAddServiceResponse>> {
    return this.http.post(`/api/monit/settings/add_service`, data, config);
  }

  async settingsAddTest(data?: MonitSettingsAddTestRequest, config?: RequestConfig): Promise<ApiResponse<MonitSettingsAddTestResponse>> {
    return this.http.post(`/api/monit/settings/add_test`, data, config);
  }

  async settingsDelAlert(uuid: string, data?: MonitSettingsDelAlertRequest, config?: RequestConfig): Promise<ApiResponse<MonitSettingsDelAlertResponse>> {
    return this.http.post(`/api/monit/settings/del_alert/${uuid}`, data, config);
  }

  async settingsDelService(uuid: string, data?: MonitSettingsDelServiceRequest, config?: RequestConfig): Promise<ApiResponse<MonitSettingsDelServiceResponse>> {
    return this.http.post(`/api/monit/settings/del_service/${uuid}`, data, config);
  }

  async settingsDelTest(uuid: string, data?: MonitSettingsDelTestRequest, config?: RequestConfig): Promise<ApiResponse<MonitSettingsDelTestResponse>> {
    return this.http.post(`/api/monit/settings/del_test/${uuid}`, data, config);
  }

  async settingsDirty(config?: RequestConfig): Promise<ApiResponse<MonitSettingsDirtyResponse>> {
    return this.http.get(`/api/monit/settings/dirty`, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<MonitSettingsGetResponse>> {
    return this.http.get(`/api/monit/settings/get`, config);
  }

  async settingsGetAlert(uuid?: string, config?: RequestConfig): Promise<ApiResponse<MonitSettingsGetAlertResponse>> {
    return this.http.get(`/api/monit/settings/get_alert/${uuid}`, config);
  }

  async settingsGetGeneral(config?: RequestConfig): Promise<ApiResponse<MonitSettingsGetGeneralResponse>> {
    return this.http.get(`/api/monit/settings/get_general`, config);
  }

  async settingsGetService(uuid?: string, config?: RequestConfig): Promise<ApiResponse<MonitSettingsGetServiceResponse>> {
    return this.http.get(`/api/monit/settings/get_service/${uuid}`, config);
  }

  async settingsGetTest(uuid?: string, config?: RequestConfig): Promise<ApiResponse<MonitSettingsGetTestResponse>> {
    return this.http.get(`/api/monit/settings/get_test/${uuid}`, config);
  }

  async settingsSet(data?: MonitSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<MonitSettingsSetResponse>> {
    return this.http.post(`/api/monit/settings/set`, data, config);
  }

  async settingsSetAlert(uuid: string, data?: MonitSettingsSetAlertRequest, config?: RequestConfig): Promise<ApiResponse<MonitSettingsSetAlertResponse>> {
    return this.http.post(`/api/monit/settings/set_alert/${uuid}`, data, config);
  }

  async settingsSetService(uuid: string, data?: MonitSettingsSetServiceRequest, config?: RequestConfig): Promise<ApiResponse<MonitSettingsSetServiceResponse>> {
    return this.http.post(`/api/monit/settings/set_service/${uuid}`, data, config);
  }

  async settingsSetTest(uuid: string, data?: MonitSettingsSetTestRequest, config?: RequestConfig): Promise<ApiResponse<MonitSettingsSetTestResponse>> {
    return this.http.post(`/api/monit/settings/set_test/${uuid}`, data, config);
  }

  async settingsToggleAlert(uuid: string, enabled?: string, data?: MonitSettingsToggleAlertRequest, config?: RequestConfig): Promise<ApiResponse<MonitSettingsToggleAlertResponse>> {
    return this.http.post(`/api/monit/settings/toggle_alert/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleService(uuid: string, enabled?: string, data?: MonitSettingsToggleServiceRequest, config?: RequestConfig): Promise<ApiResponse<MonitSettingsToggleServiceResponse>> {
    return this.http.post(`/api/monit/settings/toggle_service/${uuid}/${enabled}`, data, config);
  }


  // Status methods
  async statusGet(format?: string, config?: RequestConfig): Promise<ApiResponse<MonitStatusGetResponse>> {
    return this.http.get(`/api/monit/status/get/${format}`, config);
  }

}
