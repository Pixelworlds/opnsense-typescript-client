import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class NetsnmpGeneral extends BaseModule {
  /**
   * Get get for netsnmp general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/netsnmp/netsnmp/general/get`);
  }

  /**
   * Execute set for netsnmp general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/netsnmp/netsnmp/general/set`, data);
  }
}

export class NetsnmpService extends BaseModule {
  /**
   * Execute reconfigure for netsnmp service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/netsnmp/netsnmp/service/reconfigure`);
  }

  /**
   * Execute restart for netsnmp service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/netsnmp/netsnmp/service/restart`);
  }

  /**
   * Execute start for netsnmp service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/netsnmp/netsnmp/service/start`);
  }

  /**
   * Get status for netsnmp service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/netsnmp/netsnmp/service/status`);
  }

  /**
   * Execute stop for netsnmp service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/netsnmp/netsnmp/service/stop`);
  }
}

export class NetsnmpUser extends BaseModule {
  /**
   * Execute add user for netsnmp user
   */
  async addUser(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/netsnmp/netsnmp/user/add_user`, data);
  }

  /**
   * Execute del user for netsnmp user
   */
  async delUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/netsnmp/netsnmp/user/del_user/${uuid}`, data);
  }

  /**
   * Get get for netsnmp user
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/netsnmp/netsnmp/user/get`);
  }

  /**
   * Get get user for netsnmp user
   */
  async getUser(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/netsnmp/netsnmp/user/get_user/${uuid}`);
  }

  /**
   * Execute set for netsnmp user
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/netsnmp/netsnmp/user/set`, data);
  }

  /**
   * Execute set user for netsnmp user
   */
  async setUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/netsnmp/netsnmp/user/set_user/${uuid}`, data);
  }

  /**
   * Execute toggle user for netsnmp user
   */
  async toggleUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/netsnmp/netsnmp/user/toggle_user/${uuid}`, data);
  }
}

// Main module class
export class NetsnmpModule extends BaseModule {
  public readonly general: NetsnmpGeneral;
  public readonly service: NetsnmpService;
  public readonly user: NetsnmpUser;

  constructor(http: any) {
    super(http);
    this.general = new NetsnmpGeneral(http);
    this.service = new NetsnmpService(http);
    this.user = new NetsnmpUser(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/netsnmp/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/netsnmp/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/netsnmp/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/netsnmp/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/netsnmp/service/reconfigure');
  }
}