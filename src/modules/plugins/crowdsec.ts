import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class CrowdsecAlerts extends BaseModule {
  /**
   * Get get for crowdsec alerts
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/crowdsec/crowdsec/alerts/get`);
  }
}

export class CrowdsecBouncers extends BaseModule {
  /**
   * Get get for crowdsec bouncers
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/crowdsec/crowdsec/bouncers/get`);
  }
}

export class CrowdsecDecisions extends BaseModule {
  /**
   * Get delete for crowdsec decisions
   */
  async delete(decision_id: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/crowdsec/crowdsec/decisions/delete/${decision_id}`);
  }

  /**
   * Get get for crowdsec decisions
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/crowdsec/crowdsec/decisions/get`);
  }
}

export class CrowdsecGeneral extends BaseModule {
  /**
   * Get get for crowdsec general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/crowdsec/crowdsec/general/get`);
  }

  /**
   * Execute set for crowdsec general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/crowdsec/crowdsec/general/set`, data);
  }
}

export class CrowdsecHub extends BaseModule {
  /**
   * Get get for crowdsec hub
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/crowdsec/crowdsec/hub/get`);
  }
}

export class CrowdsecMachines extends BaseModule {
  /**
   * Get get for crowdsec machines
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/crowdsec/crowdsec/machines/get`);
  }
}

export class CrowdsecService extends BaseModule {
  /**
   * Get debug for crowdsec service
   */
  async debug(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/crowdsec/crowdsec/service/debug`);
  }

  /**
   * Execute reload for crowdsec service
   */
  async reload(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/crowdsec/crowdsec/service/reload`);
  }

  /**
   * Get status for crowdsec service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/crowdsec/crowdsec/service/status`);
  }
}

export class CrowdsecVersion extends BaseModule {
  /**
   * Get get for crowdsec version
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/crowdsec/crowdsec/version/get`);
  }
}

// Main module class
export class CrowdsecModule extends BaseModule {
  public readonly alerts: CrowdsecAlerts;
  public readonly bouncers: CrowdsecBouncers;
  public readonly decisions: CrowdsecDecisions;
  public readonly general: CrowdsecGeneral;
  public readonly hub: CrowdsecHub;
  public readonly machines: CrowdsecMachines;
  public readonly service: CrowdsecService;
  public readonly version: CrowdsecVersion;

  constructor(http: any) {
    super(http);
    this.alerts = new CrowdsecAlerts(http);
    this.bouncers = new CrowdsecBouncers(http);
    this.decisions = new CrowdsecDecisions(http);
    this.general = new CrowdsecGeneral(http);
    this.hub = new CrowdsecHub(http);
    this.machines = new CrowdsecMachines(http);
    this.service = new CrowdsecService(http);
    this.version = new CrowdsecVersion(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/crowdsec/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/crowdsec/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/crowdsec/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/crowdsec/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/crowdsec/service/reconfigure');
  }
}