import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class DmidecodeService extends BaseModule {
  /**
   * Get get for dmidecode service
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dmidecode/dmidecode/service/get`);
  }
}

// Main module class
export class DmidecodeModule extends BaseModule {
  public readonly service: DmidecodeService;

  constructor(http: any) {
    super(http);
    this.service = new DmidecodeService(http);
  }

}