import type { OPNsenseConfig, ApiResponse, ApiResult } from './types';
import { HttpClient } from './http-client';
import { ValidationError } from './errors';

/**
 * Main OPNsense API client
 */
export class OPNsenseClient {
  private http: HttpClient;

  constructor(config: OPNsenseConfig) {
    this.http = new HttpClient(config);
  }

  /**
   * Get the underlying HTTP client for direct access
   */
  get httpClient(): HttpClient {
    return this.http;
  }

  /**
   * System API endpoints
   */
  get system() {
    return {
      /**
       * Get system status
       */
      getStatus: () => this.http.get<any>('/api/core/system/status'),

      /**
       * Get system firmware info
       */
      getFirmware: () => this.http.get<any>('/api/core/firmware/info'),

      /**
       * Reboot the system
       */
      reboot: () => this.http.post<ApiResult>('/api/core/system/reboot'),

      /**
       * Halt the system
       */
      halt: () => this.http.post<ApiResult>('/api/core/system/halt')
    };
  }

  /**
   * Firewall API endpoints
   */
  get firewall() {
    