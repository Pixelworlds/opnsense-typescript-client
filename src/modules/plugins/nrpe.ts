import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class NrpeCommand extends BaseModule {
  /**
   * Execute add command for nrpe command
   */
  async addCommand(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nrpe/nrpe/command/add_command`, data);
  }

  /**
   * Execute del command for nrpe command
   */
  async delCommand(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nrpe/nrpe/command/del_command/${uuid}`, data);
  }

  /**
   * Get get for nrpe command
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nrpe/nrpe/command/get`);
  }

  /**
   * Get get command for nrpe command
   */
  async getCommand(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nrpe/nrpe/command/get_command/${uuid}`);
  }

  /**
   * Execute set for nrpe command
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nrpe/nrpe/command/set`, data);
  }

  /**
   * Execute set command for nrpe command
   */
  async setCommand(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nrpe/nrpe/command/set_command/${uuid}`, data);
  }

  /**
   * Execute toggle command for nrpe command
   */
  async toggleCommand(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nrpe/nrpe/command/toggle_command/${uuid}`, data);
  }
}

export class NrpeGeneral extends BaseModule {
  /**
   * Get get for nrpe general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nrpe/nrpe/general/get`);
  }

  /**
   * Execute set for nrpe general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nrpe/nrpe/general/set`, data);
  }
}

export class NrpeService extends BaseModule {
  /**
   * Execute reconfigure for nrpe service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/nrpe/nrpe/service/reconfigure`);
  }

  /**
   * Execute restart for nrpe service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/nrpe/nrpe/service/restart`);
  }

  /**
   * Execute start for nrpe service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/nrpe/nrpe/service/start`);
  }

  /**
   * Get status for nrpe service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/nrpe/nrpe/service/status`);
  }

  /**
   * Execute stop for nrpe service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/nrpe/nrpe/service/stop`);
  }
}

// Main module class
export class NrpeModule extends BaseModule {
  public readonly command: NrpeCommand;
  public readonly general: NrpeGeneral;
  public readonly service: NrpeService;

  constructor(http: any) {
    super(http);
    this.command = new NrpeCommand(http);
    this.general = new NrpeGeneral(http);
    this.service = new NrpeService(http);
  }

}