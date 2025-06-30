import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Dechw module

// Info types
export interface DechwInfoPowerStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class DechwApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Info methods
  async infoPowerStatus(config?: RequestConfig): Promise<ApiResponse<DechwInfoPowerStatusResponse>> {
    return this.http.get(`/api/dechw/info/power_status`, config);
  }

}
