import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class SyslogModule extends BaseModule {
  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/syslog/settings/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/syslog/settings/set', config);
  }

  async searchDestinations(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/syslog/settings/search_destination', params);
  }

  async addDestination(destination: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/syslog/settings/add_destination', destination);
  }

  async getDestination(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/syslog/settings/get_destination/${uuid}` : '/api/syslog/settings/get_destination';
    return this.http.get(path);
  }

  async updateDestination(uuid: string, destination: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/syslog/settings/set_destination/${uuid}`, destination);
  }

  async deleteDestination(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/syslog/settings/del_destination/${uuid}`);
  }

  async toggleDestination(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/syslog/settings/toggle_destination', uuid, enabled);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('syslog-ng', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('syslog-ng', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('syslog-ng', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('syslog-ng', 'reconfigure');
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('syslog-ng', 'status');
  }

  async getLogFiles(): Promise<ApiResponse<any>> {
    return this.http.get('/api/syslog/service/log_files');
  }

  async getLogContent(filename: string, offset?: number, limit?: number): Promise<ApiResponse<any>> {
    let path = `/api/syslog/service/log_content/${filename}`;
    if (offset !== undefined || limit !== undefined) {
      const params = new URLSearchParams();
      if (offset !== undefined) params.append('offset', offset.toString());
      if (limit !== undefined) params.append('limit', limit.toString());
      path += `?${params.toString()}`;
    }
    return this.http.get(path);
  }

  async clearLog(filename: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/syslog/service/clear_log/${filename}`);
  }

  async downloadLog(filename: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/syslog/service/download_log/${filename}`);
  }
}
