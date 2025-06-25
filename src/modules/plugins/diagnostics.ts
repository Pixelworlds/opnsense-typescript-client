import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

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
export class DiagnosticsModule extends BaseModule {
  public readonly proofpointEt: DiagnosticsProofpointEt;

  constructor(http: any) {
    super(http);
    this.proofpointEt = new DiagnosticsProofpointEt(http);
  }

  // Legacy methods for backward compatibility
  async getStatus(): Promise<ApiResponse<ServiceStatus>> {
    return this.service?.status() || this.http.get('/api/diagnostics/service/status');
  }

  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.start() || this.http.post('/api/diagnostics/service/start');
  }

  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.stop() || this.http.post('/api/diagnostics/service/stop');
  }

  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.restart() || this.http.post('/api/diagnostics/service/restart');
  }

  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.service?.reconfigure() || this.http.post('/api/diagnostics/service/reconfigure');
  }
}