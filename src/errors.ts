import type { ApiError } from './types';

/**
 * Custom error class for OPNsense API errors
 */
export class OPNsenseApiError extends Error implements ApiError {
  public status?: number;
  public data?: any;
  public request?: any;

  constructor(message: string, status?: number, data?: any, request?: any) {
    super(message);
    this.name = 'OPNsenseApiError';
    this.status = status;
    this.data = data;
    this.request = request;

    // Maintain proper stack trace in V8
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, OPNsenseApiError);
    }
  }

  /**
   * Create error from fetch response
   */
  static async fromResponse(response: Response, request?: any): Promise<OPNsenseApiError> {
    let data: any;
    const contentType = response.headers.get('content-type');

    try {
      if (contentType?.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }
    } catch {
      data = 'Failed to parse response';
    }

    const message = data?.message || data?.error || `HTTP ${response.status}: ${response.statusText}`;
    return new OPNsenseApiError(message, response.status, data, request);
  }

  /**
   * Create error from network or other errors
   */
  static fromError(error: any, request?: any): OPNsenseApiError {
    if (error instanceof OPNsenseApiError) {
      return error;
    }

    const message = error?.message || 'An unknown error occurred';
    return new OPNsenseApiError(message, undefined, undefined, request);
  }
}

/**
 * Validation error for invalid configuration or parameters
 */
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}
