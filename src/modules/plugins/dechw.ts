import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class DechwInfo extends BaseModule {
  /**
   * Get power status for dechw info
   */
  async powerStatus(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/dechw/dechw/info/power_status`);
  }
}

// Main module class
export class DechwModule extends BaseModule {
  public readonly info: DechwInfo;

  constructor(http: any) {
    super(http);
    this.info = new DechwInfo(http);
  }

}