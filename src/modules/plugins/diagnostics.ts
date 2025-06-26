import type { ApiResponse, ServiceStatus } from '../../types/common';
import { BaseModule } from '../base';

// Controller classes
export class DiagnosticsProofpointEt extends BaseModule {
  /**
   * Get status for diagnostics proofpoint_et
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/diagnostics/diagnostics/proofpoint_et/status`);
  }
}

// Main module class
export class DiagnosticsPluginModule extends BaseModule {
  public readonly proofpointEt: DiagnosticsProofpointEt;

  constructor(http: any) {
    super(http);
    this.proofpointEt = new DiagnosticsProofpointEt(http);
  }
}
