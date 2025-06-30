import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Dmidecode module

// Service types
export interface DmidecodeServiceGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export class DmidecodeApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Service methods
  async serviceGet(config?: RequestConfig): Promise<ApiResponse<DmidecodeServiceGetResponse>> {
    return this.http.get(`/api/dmidecode/service/get`, config);
  }

}
