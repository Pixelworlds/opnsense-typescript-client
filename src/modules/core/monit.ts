import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class MonitServices {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/monit/settings/search_service');
    }
    return this.http.post('/api/monit/settings/search_service', params);
  }

  async add(service: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/monit/settings/add_service', service);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/monit/settings/get_service/${uuid}` : '/api/monit/settings/get_service';
    return this.http.get(path);
  }

  async set(uuid: string, service: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/settings/set_service/${uuid}`, service);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/settings/del_service/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/monit/settings/toggle_service/${uuid}/${enabled ? '1' : '0'}`
      : `/api/monit/settings/toggle_service/${uuid}`;
    return this.http.post(path);
  }
}

export class MonitTests {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/monit/settings/search_test');
    }
    return this.http.post('/api/monit/settings/search_test', params);
  }

  async add(test: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/monit/settings/add_test', test);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/monit/settings/get_test/${uuid}` : '/api/monit/settings/get_test';
    return this.http.get(path);
  }

  async set(uuid: string, test: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/settings/set_test/${uuid}`, test);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/settings/del_test/${uuid}`);
  }

  // Note: No toggle endpoint exists for tests in the API documentation
  // This would need to be added to OPNsense core if toggle functionality is needed
}

export class MonitAlerts {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/monit/settings/search_alert');
    }
    return this.http.post('/api/monit/settings/search_alert', params);
  }

  async add(alert: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/monit/settings/add_alert', alert);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/monit/settings/get_alert/${uuid}` : '/api/monit/settings/get_alert';
    return this.http.get(path);
  }

  async set(uuid: string, alert: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/settings/set_alert/${uuid}`, alert);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/monit/settings/del_alert/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/monit/settings/toggle_alert/${uuid}/${enabled ? '1' : '0'}`
      : `/api/monit/settings/toggle_alert/${uuid}`;
    return this.http.post(path);
  }
}

export class MonitSettings {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/monit/settings/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/monit/settings/set', config);
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/monit/settings/get_general');
  }

  async isDirty(): Promise<ApiResponse<any>> {
    return this.http.get('/api/monit/settings/dirty');
  }
}

export class MonitService {
  constructor(private http: any) {}

  async getStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/monit/service/status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/monit/service/start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/monit/service/stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/monit/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/monit/service/reconfigure');
  }

  async check(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/monit/service/check');
  }
}

export class MonitStatus {
  constructor(private http: any) {}

  async get(format: string = 'xml'): Promise<ApiResponse<any>> {
    const path = format ? `/api/monit/status/get/${format}` : '/api/monit/status/get';
    return this.http.get(path);
  }
}

export class MonitModule extends BaseModule {
  public readonly services: MonitServices;
  public readonly tests: MonitTests;
  public readonly alerts: MonitAlerts;
  public readonly settings: MonitSettings;
  public readonly service: MonitService;
  public readonly status: MonitStatus;

  constructor(httpClient: any) {
    super(httpClient);
    this.services = new MonitServices(this.http);
    this.tests = new MonitTests(this.http);
    this.alerts = new MonitAlerts(this.http);
    this.settings = new MonitSettings(this.http);
    this.service = new MonitService(this.http);
    this.status = new MonitStatus(this.http);
  }

  // Legacy methods for backward compatibility
  async getConfig(): Promise<ApiResponse<any>> {
    return this.settings.get();
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.settings.set(config);
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.settings.getGeneral();
  }

  async isDirty(): Promise<ApiResponse<any>> {
    return this.settings.isDirty();
  }

  async searchServices(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.services.search(params);
  }

  async addService(service: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.services.add(service);
  }

  async getService(uuid?: string): Promise<ApiResponse<any>> {
    return this.services.get(uuid);
  }

  async updateService(uuid: string, service: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.services.set(uuid, service);
  }

  async deleteService(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.services.delete(uuid);
  }

  async toggleService(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.services.toggle(uuid, enabled);
  }

  async searchTests(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.tests.search(params);
  }

  async addTest(test: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.tests.add(test);
  }

  async getTest(uuid?: string): Promise<ApiResponse<any>> {
    return this.tests.get(uuid);
  }

  async updateTest(uuid: string, test: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.tests.set(uuid, test);
  }

  async deleteTest(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.tests.delete(uuid);
  }

  async searchAlerts(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.alerts.search(params);
  }

  async addAlert(alert: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.alerts.add(alert);
  }

  async getAlert(uuid?: string): Promise<ApiResponse<any>> {
    return this.alerts.get(uuid);
  }

  async updateAlert(uuid: string, alert: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.alerts.set(uuid, alert);
  }

  async deleteAlert(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.alerts.delete(uuid);
  }

  async toggleAlert(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.alerts.toggle(uuid, enabled);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.service.start();
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.service.stop();
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.service.restart();
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.service.reconfigure();
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.service.getStatus();
  }

  async check(): Promise<ApiResponse<ApiResult>> {
    return this.service.check();
  }

  async getMonitStatus(format: string = 'xml'): Promise<ApiResponse<any>> {
    return this.status.get(format);
  }

  // New convenience methods
  async getAllServices(): Promise<ApiResponse<any>> {
    return this.services.search();
  }

  async getAllTests(): Promise<ApiResponse<any>> {
    return this.tests.search();
  }

  async getAllAlerts(): Promise<ApiResponse<any>> {
    return this.alerts.search();
  }

  async enableService(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.services.toggle(uuid, true);
  }

  async disableService(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.services.toggle(uuid, false);
  }

  async enableAlert(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.alerts.toggle(uuid, true);
  }

  async disableAlert(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.alerts.toggle(uuid, false);
  }

  async createService(name: string, type: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const service = {
      enabled: '1',
      name,
      type,
      description: description || `Monit service ${name}`
    };
    return this.services.add(service);
  }

  async createAlert(recipient: string, events: string[], description?: string): Promise<ApiResponse<ApiResult>> {
    const alert = {
      enabled: '1',
      recipient,
      events: events.join(','),
      description: description || `Alert for ${recipient}`
    };
    return this.alerts.add(alert);
  }

  async createTest(service: string, type: string, condition: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const test = {
      enabled: '1',
      service,
      type,
      condition,
      description: description || `Test for ${service}`
    };
    return this.tests.add(test);
  }

  async getMonitOverview(): Promise<{
    status: any;
    services: any;
    tests: any;
    alerts: any;
    settings: any;
    monitStatus: any;
    timestamp: string;
  }> {
    const [status, services, tests, alerts, settings, monitStatus] = await Promise.allSettled([
      this.getStatus(),
      this.getAllServices(),
      this.getAllTests(),
      this.getAllAlerts(),
      this.getConfig(),
      this.getMonitStatus('json').catch(() => ({ data: null })),
    ]);

    return {
      status: status.status === 'fulfilled' ? status.value.data : null,
      services: services.status === 'fulfilled' ? services.value.data : null,
      tests: tests.status === 'fulfilled' ? tests.value.data : null,
      alerts: alerts.status === 'fulfilled' ? alerts.value.data : null,
      settings: settings.status === 'fulfilled' ? settings.value.data : null,
      monitStatus: monitStatus.status === 'fulfilled' ? monitStatus.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }

  async performSystemCheck(): Promise<{
    checkResult: any;
    status: any;
    summary: { services: number; tests: number; alerts: number };
  }> {
    const [checkResult, status, services, tests, alerts] = await Promise.allSettled([
      this.check(),
      this.getMonitStatus('json').catch(() => ({ data: null })),
      this.getAllServices(),
      this.getAllTests(),
      this.getAllAlerts(),
    ]);

    const servicesData = services.status === 'fulfilled' ? services.value.data : { rows: [] };
    const testsData = tests.status === 'fulfilled' ? tests.value.data : { rows: [] };
    const alertsData = alerts.status === 'fulfilled' ? alerts.value.data : { rows: [] };

    return {
      checkResult: checkResult.status === 'fulfilled' ? checkResult.value.data : null,
      status: status.status === 'fulfilled' ? status.value.data : null,
      summary: {
        services: servicesData.rows?.length || 0,
        tests: testsData.rows?.length || 0,
        alerts: alertsData.rows?.length || 0,
      },
    };
  }
}