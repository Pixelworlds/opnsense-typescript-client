import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Diagnostics module

// ProofpointEt types
export interface DiagnosticsProofpointEtStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class DiagnosticsApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/diagnostics';
  }

  // ProofpointEt methods
  async proofpointEtStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsProofpointEtStatusResponse>> {
    return this.client.get(`${this.basePath}/proofpoint_et/status`, config);
  }

}
