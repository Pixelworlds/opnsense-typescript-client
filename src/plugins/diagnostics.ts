import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Diagnostics module

// ProofpointEt types
export interface DiagnosticsProofpointEtStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class DiagnosticsApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // ProofpointEt methods
  async proofpointEtStatus(config?: RequestConfig): Promise<ApiResponse<DiagnosticsProofpointEtStatusResponse>> {
    return this.http.get(`/api/diagnostics/proofpoint_et/status`, config);
  }

}
