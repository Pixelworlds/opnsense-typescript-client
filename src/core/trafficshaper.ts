import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Trafficshaper module

// Model field types

// Service types
export interface TrafficshaperServiceFlushreloadRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrafficshaperServiceFlushreloadResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrafficshaperServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperServiceStatisticsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface TrafficshaperSettingsAddPipeRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrafficshaperSettingsAddPipeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsAddQueueRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrafficshaperSettingsAddQueueResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsAddRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrafficshaperSettingsAddRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsDelPipeRequest {
  uuid: string;
}

export interface TrafficshaperSettingsDelPipeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsDelQueueRequest {
  uuid: string;
}

export interface TrafficshaperSettingsDelQueueResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsDelRuleRequest {
  uuid: string;
}

export interface TrafficshaperSettingsDelRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsGetPipeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsGetQueueResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsGetRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrafficshaperSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsSetPipeRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrafficshaperSettingsSetPipeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsSetQueueRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrafficshaperSettingsSetQueueResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsSetRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface TrafficshaperSettingsSetRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsTogglePipeRequest {
  enabled?: boolean;
}

export interface TrafficshaperSettingsTogglePipeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsToggleQueueRequest {
  enabled?: boolean;
}

export interface TrafficshaperSettingsToggleQueueResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface TrafficshaperSettingsToggleRuleRequest {
  enabled?: boolean;
}

export interface TrafficshaperSettingsToggleRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface TrafficshaperPipe {
}

export interface TrafficshaperQueue {
}

export interface TrafficshaperRule {
}

export class TrafficshaperApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceFlushreload(data?: TrafficshaperServiceFlushreloadRequest, config?: RequestConfig): Promise<ApiResponse<TrafficshaperServiceFlushreloadResponse>> {
    return this.http.post(`/api/trafficshaper/service/flushreload`, data, config);
  }

  async serviceReconfigure(data?: TrafficshaperServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<TrafficshaperServiceReconfigureResponse>> {
    return this.http.post(`/api/trafficshaper/service/reconfigure`, data, config);
  }

  async serviceStatistics(config?: RequestConfig): Promise<ApiResponse<TrafficshaperServiceStatisticsResponse>> {
    return this.http.get(`/api/trafficshaper/service/statistics`, config);
  }


  // Settings methods
  async settingsAddPipe(data?: TrafficshaperSettingsAddPipeRequest, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsAddPipeResponse>> {
    return this.http.post(`/api/trafficshaper/settings/add_pipe`, data, config);
  }

  async settingsAddQueue(data?: TrafficshaperSettingsAddQueueRequest, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsAddQueueResponse>> {
    return this.http.post(`/api/trafficshaper/settings/add_queue`, data, config);
  }

  async settingsAddRule(data?: TrafficshaperSettingsAddRuleRequest, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsAddRuleResponse>> {
    return this.http.post(`/api/trafficshaper/settings/add_rule`, data, config);
  }

  async settingsDelPipe(uuid: string, data?: TrafficshaperSettingsDelPipeRequest, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsDelPipeResponse>> {
    return this.http.post(`/api/trafficshaper/settings/del_pipe/${uuid}`, data, config);
  }

  async settingsDelQueue(uuid: string, data?: TrafficshaperSettingsDelQueueRequest, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsDelQueueResponse>> {
    return this.http.post(`/api/trafficshaper/settings/del_queue/${uuid}`, data, config);
  }

  async settingsDelRule(uuid: string, data?: TrafficshaperSettingsDelRuleRequest, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsDelRuleResponse>> {
    return this.http.post(`/api/trafficshaper/settings/del_rule/${uuid}`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsGetResponse>> {
    return this.http.get(`/api/trafficshaper/settings/get`, config);
  }

  async settingsGetPipe(uuid?: string, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsGetPipeResponse>> {
    return this.http.get(`/api/trafficshaper/settings/get_pipe/${uuid}`, config);
  }

  async settingsGetQueue(uuid?: string, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsGetQueueResponse>> {
    return this.http.get(`/api/trafficshaper/settings/get_queue/${uuid}`, config);
  }

  async settingsGetRule(uuid?: string, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsGetRuleResponse>> {
    return this.http.get(`/api/trafficshaper/settings/get_rule/${uuid}`, config);
  }

  async settingsSet(data?: TrafficshaperSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsSetResponse>> {
    return this.http.post(`/api/trafficshaper/settings/set`, data, config);
  }

  async settingsSetPipe(uuid: string, data?: TrafficshaperSettingsSetPipeRequest, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsSetPipeResponse>> {
    return this.http.post(`/api/trafficshaper/settings/set_pipe/${uuid}`, data, config);
  }

  async settingsSetQueue(uuid: string, data?: TrafficshaperSettingsSetQueueRequest, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsSetQueueResponse>> {
    return this.http.post(`/api/trafficshaper/settings/set_queue/${uuid}`, data, config);
  }

  async settingsSetRule(uuid: string, data?: TrafficshaperSettingsSetRuleRequest, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsSetRuleResponse>> {
    return this.http.post(`/api/trafficshaper/settings/set_rule/${uuid}`, data, config);
  }

  async settingsTogglePipe(uuid: string, enabled?: string, data?: TrafficshaperSettingsTogglePipeRequest, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsTogglePipeResponse>> {
    return this.http.post(`/api/trafficshaper/settings/toggle_pipe/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleQueue(uuid: string, enabled?: string, data?: TrafficshaperSettingsToggleQueueRequest, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsToggleQueueResponse>> {
    return this.http.post(`/api/trafficshaper/settings/toggle_queue/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleRule(uuid: string, enabled?: string, data?: TrafficshaperSettingsToggleRuleRequest, config?: RequestConfig): Promise<ApiResponse<TrafficshaperSettingsToggleRuleResponse>> {
    return this.http.post(`/api/trafficshaper/settings/toggle_rule/${uuid}/${enabled}`, data, config);
  }

}
