import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class CaptivePortalModule extends BaseModule {
  async getZones(): Promise<ApiResponse<any>> {
    return this.http.get('/api/captiveportal/session/zones');
  }

  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/captiveportal/settings/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/captiveportal/settings/set', config);
  }

  async searchZones(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/captiveportal/settings/search_zones', params);
  }

  async addZone(zone: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/captiveportal/settings/add_zone', zone);
  }

  async getZone(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/captiveportal/settings/get_zone/${uuid}` : '/api/captiveportal/settings/get_zone';
    return this.http.get(path);
  }

  async updateZone(uuid: string, zone: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/settings/set_zone/${uuid}`, zone);
  }

  async deleteZone(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/settings/del_zone/${uuid}`);
  }

  async toggleZone(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.toggle('/api/captiveportal/settings/toggle_zone', uuid, enabled);
  }

  async listSessions(zoneid: number = 0): Promise<ApiResponse<any>> {
    return this.http.get(`/api/captiveportal/session/list/${zoneid}`);
  }

  async searchSessions(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/captiveportal/session/search', params);
  }

  async connectSession(zoneid: number = 0): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/session/connect/${zoneid}`);
  }

  async disconnectSession(zoneid?: number): Promise<ApiResponse<ApiResult>> {
    const path =
      zoneid !== undefined
        ? `/api/captiveportal/session/disconnect/${zoneid}`
        : '/api/captiveportal/session/disconnect';
    return this.http.post(path);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('captiveportal', 'reconfigure');
  }
}
