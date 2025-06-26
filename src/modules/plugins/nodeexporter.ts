import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class NodeexporterGeneral extends BaseModule {
  /**
   * Get get for nodeexporter general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nodeexporter/nodeexporter/general/get`);
  }

  /**
   * Execute set for nodeexporter general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nodeexporter/nodeexporter/general/set`, data);
  }
}

export class NodeexporterService extends BaseModule {
  /**
   * Execute reconfigure for nodeexporter service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/nodeexporter/nodeexporter/service/reconfigure`);
  }

  /**
   * Execute restart for nodeexporter service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/nodeexporter/nodeexporter/service/restart`);
  }

  /**
   * Execute start for nodeexporter service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/nodeexporter/nodeexporter/service/start`);
  }

  /**
   * Get status for nodeexporter service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/nodeexporter/nodeexporter/service/status`);
  }

  /**
   * Execute stop for nodeexporter service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/nodeexporter/nodeexporter/service/stop`);
  }
}

// Main module class
export class NodeexporterModule extends BaseModule {
  public readonly general: NodeexporterGeneral;
  public readonly service: NodeexporterService;

  constructor(http: any) {
    super(http);
    this.general = new NodeexporterGeneral(http);
    this.service = new NodeexporterService(http);
  }

}