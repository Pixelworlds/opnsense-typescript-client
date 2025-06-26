import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class MaltrailGeneral extends BaseModule {
  /**
   * Get get for maltrail general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/maltrail/maltrail/general/get`);
  }

  /**
   * Execute set for maltrail general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/maltrail/maltrail/general/set`, data);
  }
}

export class MaltrailSensor extends BaseModule {
  /**
   * Get get for maltrail sensor
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/maltrail/maltrail/sensor/get`);
  }

  /**
   * Execute set for maltrail sensor
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/maltrail/maltrail/sensor/set`, data);
  }
}

export class MaltrailServer extends BaseModule {
  /**
   * Get get for maltrail server
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/maltrail/maltrail/server/get`);
  }

  /**
   * Execute set for maltrail server
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/maltrail/maltrail/server/set`, data);
  }
}

export class MaltrailServerservice extends BaseModule {
  /**
   * Execute reconfigure for maltrail serverservice
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/maltrail/maltrail/serverservice/reconfigure`);
  }

  /**
   * Execute restart for maltrail serverservice
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/maltrail/maltrail/serverservice/restart`);
  }

  /**
   * Execute start for maltrail serverservice
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/maltrail/maltrail/serverservice/start`);
  }

  /**
   * Get status for maltrail serverservice
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/maltrail/maltrail/serverservice/status`);
  }

  /**
   * Execute stop for maltrail serverservice
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/maltrail/maltrail/serverservice/stop`);
  }
}

export class MaltrailService extends BaseModule {
  /**
   * Execute reconfigure for maltrail service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/maltrail/maltrail/service/reconfigure`);
  }

  /**
   * Execute restart for maltrail service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/maltrail/maltrail/service/restart`);
  }

  /**
   * Execute start for maltrail service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/maltrail/maltrail/service/start`);
  }

  /**
   * Get status for maltrail service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/maltrail/maltrail/service/status`);
  }

  /**
   * Execute stop for maltrail service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/maltrail/maltrail/service/stop`);
  }
}

// Main module class
export class MaltrailModule extends BaseModule {
  public readonly general: MaltrailGeneral;
  public readonly sensor: MaltrailSensor;
  public readonly server: MaltrailServer;
  public readonly serverservice: MaltrailServerservice;
  public readonly service: MaltrailService;

  constructor(http: any) {
    super(http);
    this.general = new MaltrailGeneral(http);
    this.sensor = new MaltrailSensor(http);
    this.server = new MaltrailServer(http);
    this.serverservice = new MaltrailServerservice(http);
    this.service = new MaltrailService(http);
  }

}