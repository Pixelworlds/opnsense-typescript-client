import { OPNsenseApiError, ValidationError } from './errors';

import type { ApiResponse, OPNsenseConfig, RequestOptions } from './types';

/**
 * HTTP client for making requests to the OPNsense API
 * Works in both Node.js and browser environments using the Fetch API
 */
export class HttpClient {
  private config: Required<OPNsenseConfig>;
  private authHeader: string;

  constructor(config: OPNsenseConfig) {
    this.validateConfig(config);

    // Set defaults
    this.config = {
      baseUrl: config.baseUrl.replace(/\/$/, ''), // Remove trailing slash
      apiKey: config.apiKey,
      apiSecret: config.apiSecret,
      verifySsl: config.verifySsl ?? true,
      timeout: config.timeout ?? 30000,
      headers: config.headers ?? {},
      debug: config.debug ?? false,
    };

    // Create base64 auth header
    const credentials = `${this.config.apiKey}:${this.config.apiSecret}`;
    this.authHeader = `Basic ${this.base64Encode(credentials)}`;
  }

  /**
   * Validate configuration
   */
  private validateConfig(config: OPNsenseConfig): void {
    if (!config.baseUrl) {
      throw new ValidationError('baseUrl is required');
    }
    if (!config.apiKey) {
      throw new ValidationError('apiKey is required');
    }
    if (!config.apiSecret) {
      throw new ValidationError('apiSecret is required');
    }

    // Validate URL format
    try {
      new URL(config.baseUrl);
    } catch {
      throw new ValidationError('Invalid baseUrl format');
    }
  }

  /**
   * Base64 encode for both Node.js and browser
   */
  private base64Encode(str: string): string {
    if (typeof btoa !== 'undefined') {
      // Browser
      return btoa(str);
    } else if (typeof Buffer !== 'undefined') {
      // Node.js
      return Buffer.from(str).toString('base64');
    } else {
      throw new Error('No base64 encoding method available');
    }
  }

  /**
   * Build full URL with query parameters
   */
  private buildUrl(path: string, params?: Record<string, any>): string {
    const url = new URL(path, this.config.baseUrl);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    return url.toString();
  }

  /**
   * Create abort controller with timeout
   */
  private createAbortController(timeout?: number): AbortController {
    const controller = new AbortController();
    const timeoutMs = timeout ?? this.config.timeout;

    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeoutMs);

    // Clean up timeout on abort
    controller.signal.addEventListener('abort', () => {
      clearTimeout(timeoutId);
    });

    return controller;
  }

  /**
   * Log debug information
   */
  private log(...args: any[]): void {
    if (this.config.debug) {
      console.log('[OPNsense SDK]', ...args);
    }
  }

  /**
   * Make an API request
   */
  async request<T = any>(options: RequestOptions): Promise<ApiResponse<T>> {
    const url = this.buildUrl(options.path, options.params);
    const controller = this.createAbortController(options.timeout);

    // Prepare headers
    const headers: Record<string, string> = {
      Authorization: this.authHeader,
      Accept: 'application/json',
      ...this.config.headers,
      ...options.headers,
    };

    // Add content-type for requests with body
    if (options.data && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }

    // Prepare fetch options
    const fetchOptions: RequestInit = {
      method: options.method,
      headers,
      signal: controller.signal,
    };

    // Add body if present
    if (options.data) {
      if (headers['Content-Type'] === 'application/json') {
        fetchOptions.body = JSON.stringify(options.data);
      } else {
        fetchOptions.body = options.data;
      }
    }

    // Handle SSL verification (Node.js only)
    if (!this.config.verifySsl && typeof process !== 'undefined') {
      // @ts-expect-error - Node.js specific
      fetchOptions.agent = new (await import('https')).Agent({
        rejectUnauthorized: false,
      });
    }

    this.log(`${options.method} ${url}`, { headers, body: options.data });

    try {
      const response = await fetch(url, fetchOptions);

      // Parse response
      let data: T;
      const contentType = response.headers.get('content-type');

      if (contentType?.includes('application/json')) {
        data = (await response.json()) as T;
      } else {
        data = (await response.text()) as any;
      }

      this.log(`Response ${response.status}:`, data);

      // Check for errors
      if (!response.ok) {
        throw await OPNsenseApiError.fromResponse(response, options);
      }

      // Convert headers to plain object
      const responseHeaders: Record<string, string> = {};
      response.headers.forEach((value, key) => {
        responseHeaders[key] = value;
      });

      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      };
    } catch (error: any) {
      // Handle abort/timeout
      if (error.name === 'AbortError') {
        throw new OPNsenseApiError('Request timeout', undefined, undefined, options);
      }

      // Re-throw OPNsenseApiError
      if (error instanceof OPNsenseApiError) {
        throw error;
      }

      // Wrap other errors
      throw OPNsenseApiError.fromError(error, options);
    }
  }

  /**
   * Convenience methods
   */
  async get<T = any>(path: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    return this.request<T>({ path, method: 'GET', params });
  }

  async post<T = any>(path: string, data?: any, params?: Record<string, any>): Promise<ApiResponse<T>> {
    return this.request<T>({ path, method: 'POST', data, params });
  }

  async put<T = any>(path: string, data?: any, params?: Record<string, any>): Promise<ApiResponse<T>> {
    return this.request<T>({ path, method: 'PUT', data, params });
  }

  async delete<T = any>(path: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    return this.request<T>({ path, method: 'DELETE', params });
  }

  async patch<T = any>(path: string, data?: any, params?: Record<string, any>): Promise<ApiResponse<T>> {
    return this.request<T>({ path, method: 'PATCH', data, params });
  }
}
