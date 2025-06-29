import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/trafficshaper';
  }

  // Service methods
  async serviceFlushreload(data?: TrafficshaperServiceFlushreloadRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperServiceFlushreloadResponse>> {
    return this.client.post(`${this.basePath}/service/flushreload`, data, config);
  }

  async serviceReconfigure(data?: TrafficshaperServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceStatistics(config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperServiceStatisticsResponse>> {
    return this.client.get(`${this.basePath}/service/statistics`, config);
  }


  // Settings methods
  async settingsAddPipe(data?: TrafficshaperSettingsAddPipeRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsAddPipeResponse>> {
    return this.client.post(`${this.basePath}/settings/add_pipe`, data, config);
  }

  async settingsAddQueue(data?: TrafficshaperSettingsAddQueueRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsAddQueueResponse>> {
    return this.client.post(`${this.basePath}/settings/add_queue`, data, config);
  }

  async settingsAddRule(data?: TrafficshaperSettingsAddRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsAddRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/add_rule`, data, config);
  }

  async settingsDelPipe(uuid: string, data?: TrafficshaperSettingsDelPipeRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsDelPipeResponse>> {
    return this.client.post(`${this.basePath}/settings/del_pipe/${uuid}`, data, config);
  }

  async settingsDelQueue(uuid: string, data?: TrafficshaperSettingsDelQueueRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsDelQueueResponse>> {
    return this.client.post(`${this.basePath}/settings/del_queue/${uuid}`, data, config);
  }

  async settingsDelRule(uuid: string, data?: TrafficshaperSettingsDelRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsDelRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/del_rule/${uuid}`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetPipe(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsGetPipeResponse>> {
    return this.client.get(`${this.basePath}/settings/get_pipe/${uuid}`, config);
  }

  async settingsGetQueue(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsGetQueueResponse>> {
    return this.client.get(`${this.basePath}/settings/get_queue/${uuid}`, config);
  }

  async settingsGetRule(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsGetRuleResponse>> {
    return this.client.get(`${this.basePath}/settings/get_rule/${uuid}`, config);
  }

  async settingsSet(data?: TrafficshaperSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetPipe(uuid: string, data?: TrafficshaperSettingsSetPipeRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsSetPipeResponse>> {
    return this.client.post(`${this.basePath}/settings/set_pipe/${uuid}`, data, config);
  }

  async settingsSetQueue(uuid: string, data?: TrafficshaperSettingsSetQueueRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsSetQueueResponse>> {
    return this.client.post(`${this.basePath}/settings/set_queue/${uuid}`, data, config);
  }

  async settingsSetRule(uuid: string, data?: TrafficshaperSettingsSetRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsSetRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/set_rule/${uuid}`, data, config);
  }

  async settingsTogglePipe(uuid: string, enabled?: string, data?: TrafficshaperSettingsTogglePipeRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsTogglePipeResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_pipe/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleQueue(uuid: string, enabled?: string, data?: TrafficshaperSettingsToggleQueueRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsToggleQueueResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_queue/${uuid}/${enabled}`, data, config);
  }

  async settingsToggleRule(uuid: string, enabled?: string, data?: TrafficshaperSettingsToggleRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<TrafficshaperSettingsToggleRuleResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_rule/${uuid}/${enabled}`, data, config);
  }

}
