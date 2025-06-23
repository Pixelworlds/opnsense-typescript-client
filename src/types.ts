/**
 * Configuration options for the OPNsense API client
 */
export interface OPNsenseConfig {
  /** Base URL of the OPNsense instance (e.g., 'https://192.168.1.1') */
  baseUrl: string;
  /** API key for authentication */
  apiKey: string;
  /** API secret for authentication */
  apiSecret: string;
  /** Whether to verify SSL certificates (default: true) */
  verifySsl?: boolean;
  /** Request timeout in milliseconds (default: 30000) */
  timeout?: number;
  /** Custom headers to include in all requests */
  headers?: Record<string, string>;
  /** Enable debug logging (default: false) */
  debug?: boolean;
}

/**
 * HTTP methods supported by the API
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

/**
 * Options for individual API requests
 */
export interface RequestOptions {
  /** URL path (will be appended to baseUrl) */
  path: string;
  /** HTTP method */
  method: HttpMethod;
  /** Query parameters */
  params?: Record<string, any>;
  /** Request body data */
  data?: any;
  /** Additional headers for this request */
  headers?: Record<string, string>;
  /** Override timeout for this request */
  timeout?: number;
}

/**
 * Standard API response wrapper
 */
export interface ApiResponse<T = any> {
  /** Response data */
  data: T;
  /** HTTP status code */
  status: number;
  /** HTTP status text */
  statusText: string;
  /** Response headers */
  headers: Record<string, string>;
}

/**
 * API error response
 */
export interface ApiError extends Error {
  /** HTTP status code */
  status?: number;
  /** Response data */
  data?: any;
  /** Original request options */
  request?: RequestOptions;
}

/**
 * Generic result from API operations
 */
export interface ApiResult<T = any> {
  result?: 'saved' | 'deleted' | 'error';
  uuid?: string;
  validations?: Record<string, string>;
  data?: T;
  [key: string]: any;
}
