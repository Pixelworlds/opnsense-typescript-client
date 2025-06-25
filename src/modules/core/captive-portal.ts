import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class CaptivePortalAccess {
  constructor(private http: any) {}

  async getApi(): Promise<ApiResponse<any>> {
    return this.http.get('/api/captiveportal/access/api');
  }

  async logoff(zoneid?: string): Promise<ApiResponse<any>> {
    const path = zoneid ? `/api/captiveportal/access/logoff/${zoneid}` : '/api/captiveportal/access/logoff';
    return this.http.get(path);
  }

  async logon(zoneid?: string, credentials?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    const path = zoneid ? `/api/captiveportal/access/logon/${zoneid}` : '/api/captiveportal/access/logon';
    return this.http.post(path, credentials);
  }

  async getStatus(zoneid?: string, params?: Record<string, any>): Promise<ApiResponse<any>> {
    const path = zoneid ? `/api/captiveportal/access/status/${zoneid}` : '/api/captiveportal/access/status';

    // Support both GET and POST methods
    if (params && Object.keys(params).length > 0) {
      return this.http.post(path, params);
    }
    return this.http.get(path);
  }
}

export class CaptivePortalService {
  constructor(private http: any) {}

  async deleteTemplate(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/service/del_template/${uuid}`);
  }

  async getTemplate(fileid?: string): Promise<ApiResponse<any>> {
    const path = fileid
      ? `/api/captiveportal/service/get_template/${fileid}`
      : '/api/captiveportal/service/get_template';
    return this.http.get(path);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/captiveportal/service/reconfigure');
  }

  async saveTemplate(template: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/captiveportal/service/save_template', template);
  }

  async searchTemplates(): Promise<ApiResponse<any>> {
    return this.http.get('/api/captiveportal/service/search_templates');
  }
}

export class CaptivePortalSessions {
  constructor(private http: any) {}

  async connect(zoneid?: string, sessionData?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    const path = zoneid ? `/api/captiveportal/session/connect/${zoneid}` : '/api/captiveportal/session/connect';
    return this.http.post(path, sessionData);
  }

  async disconnect(zoneid?: string): Promise<ApiResponse<ApiResult>> {
    const path = zoneid ? `/api/captiveportal/session/disconnect/${zoneid}` : '/api/captiveportal/session/disconnect';
    return this.http.post(path);
  }

  async list(zoneid?: string): Promise<ApiResponse<any>> {
    const path = zoneid ? `/api/captiveportal/session/list/${zoneid}` : '/api/captiveportal/session/list';
    return this.http.get(path);
  }

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.get('/api/captiveportal/session/search', params);
  }

  async getZones(): Promise<ApiResponse<any>> {
    return this.http.get('/api/captiveportal/session/zones');
  }
}

export class CaptivePortalSettings {
  constructor(private http: any) {}

  async addZone(zone: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/captiveportal/settings/add_zone', zone);
  }

  async deleteZone(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/settings/del_zone/${uuid}`);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/captiveportal/settings/get');
  }

  async getZone(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/captiveportal/settings/get_zone/${uuid}` : '/api/captiveportal/settings/get_zone';
    return this.http.get(path);
  }

  async searchZones(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    // Support both GET and POST methods
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/captiveportal/settings/search_zones');
    }
    return this.http.post('/api/captiveportal/settings/search_zones', params);
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/captiveportal/settings/set', config);
  }

  async setZone(uuid: string, zone: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/captiveportal/settings/set_zone/${uuid}`, zone);
  }

  async toggleZone(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/captiveportal/settings/toggle_zone/${uuid}/${enabled ? '1' : '0'}`
        : `/api/captiveportal/settings/toggle_zone/${uuid}`;
    return this.http.post(path);
  }
}

export class CaptivePortalVouchers {
  constructor(private http: any) {}

  async drop(data: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/captiveportal/voucher/drop', data);
  }

  async expire(data: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/captiveportal/voucher/expire', data);
  }

  async generate(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/captiveportal/voucher/generate', params);
  }

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/captiveportal/voucher/search', params);
  }
}

export class CaptivePortalModule extends BaseModule {
  public readonly access: CaptivePortalAccess;
  public readonly service: CaptivePortalService;
  public readonly sessions: CaptivePortalSessions;
  public readonly settings: CaptivePortalSettings;
  public readonly vouchers: CaptivePortalVouchers;

  constructor(httpClient: any) {
    super(httpClient);
    this.access = new CaptivePortalAccess(this.http);
    this.service = new CaptivePortalService(this.http);
    this.sessions = new CaptivePortalSessions(this.http);
    this.settings = new CaptivePortalSettings(this.http);
    this.vouchers = new CaptivePortalVouchers(this.http);
  }

  // Legacy methods for backward compatibility
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
