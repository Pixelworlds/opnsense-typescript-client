import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class IperfInstance extends BaseModule {
  /**
   * Get get for iperf instance
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/iperf/iperf/instance/get`);
  }

  /**
   * Get query for iperf instance
   */
  async query(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/iperf/iperf/instance/query`);
  }

  /**
   * Execute set for iperf instance
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/iperf/iperf/instance/set`, data);
  }
}

export class IperfService extends BaseModule {
  /**
   * Get restart for iperf service
   */
  async restart(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/iperf/iperf/service/restart`);
  }

  /**
   * Get start for iperf service
   */
  async start(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/iperf/iperf/service/start`);
  }

  /**
   * Get status for iperf service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/iperf/iperf/service/status`);
  }

  /**
   * Get stop for iperf service
   */
  async stop(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/iperf/iperf/service/stop`);
  }
}

// Main module class
export class IperfModule extends BaseModule {
  public readonly instance: IperfInstance;
  public readonly service: IperfService;

  constructor(http: any) {
    super(http);
    this.instance = new IperfInstance(http);
    this.service = new IperfService(http);
  }

}