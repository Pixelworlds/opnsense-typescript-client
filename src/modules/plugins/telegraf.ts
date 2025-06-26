import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class TelegrafGeneral extends BaseModule {
  /**
   * Get get for telegraf general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/telegraf/telegraf/general/get`);
  }

  /**
   * Execute set for telegraf general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/telegraf/telegraf/general/set`, data);
  }
}

export class TelegrafInput extends BaseModule {
  /**
   * Get get for telegraf input
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/telegraf/telegraf/input/get`);
  }

  /**
   * Execute set for telegraf input
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/telegraf/telegraf/input/set`, data);
  }
}

export class TelegrafKey extends BaseModule {
  /**
   * Execute add key for telegraf key
   */
  async addKey(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/telegraf/telegraf/key/add_key`, data);
  }

  /**
   * Execute del key for telegraf key
   */
  async delKey(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/telegraf/telegraf/key/del_key/${uuid}`, data);
  }

  /**
   * Get get for telegraf key
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/telegraf/telegraf/key/get`);
  }

  /**
   * Get get key for telegraf key
   */
  async getKey(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/telegraf/telegraf/key/get_key/${uuid}`);
  }

  /**
   * Execute set for telegraf key
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/telegraf/telegraf/key/set`, data);
  }

  /**
   * Execute set key for telegraf key
   */
  async setKey(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/telegraf/telegraf/key/set_key/${uuid}`, data);
  }

  /**
   * Execute toggle key for telegraf key
   */
  async toggleKey(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/telegraf/telegraf/key/toggle_key/${uuid}`, data);
  }
}

export class TelegrafOutput extends BaseModule {
  /**
   * Get get for telegraf output
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/telegraf/telegraf/output/get`);
  }

  /**
   * Execute set for telegraf output
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/telegraf/telegraf/output/set`, data);
  }
}

export class TelegrafService extends BaseModule {
  /**
   * Execute reconfigure for telegraf service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/telegraf/telegraf/service/reconfigure`);
  }

  /**
   * Execute restart for telegraf service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/telegraf/telegraf/service/restart`);
  }

  /**
   * Execute start for telegraf service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/telegraf/telegraf/service/start`);
  }

  /**
   * Get status for telegraf service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/telegraf/telegraf/service/status`);
  }

  /**
   * Execute stop for telegraf service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/telegraf/telegraf/service/stop`);
  }
}

// Main module class
export class TelegrafModule extends BaseModule {
  public readonly general: TelegrafGeneral;
  public readonly input: TelegrafInput;
  public readonly key: TelegrafKey;
  public readonly output: TelegrafOutput;
  public readonly service: TelegrafService;

  constructor(http: any) {
    super(http);
    this.general = new TelegrafGeneral(http);
    this.input = new TelegrafInput(http);
    this.key = new TelegrafKey(http);
    this.output = new TelegrafOutput(http);
    this.service = new TelegrafService(http);
  }

}