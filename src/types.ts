// Shared types for OPNsense TypeScript SDK

export interface HttpClient {
  get<T = any>(url: string, config?: RequestConfig): Promise<ApiResponse<T>>;
  post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>>;
  put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>>;
  delete<T = any>(url: string, config?: RequestConfig): Promise<ApiResponse<T>>;
  patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>>;
}

export interface RequestConfig {
  headers?: Record<string, string>;
  timeout?: number;
  [key: string]: any;
}

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export interface OPNsenseConfig {
  baseUrl: string;
  apiKey: string;
  apiSecret: string;
  verifySsl?: boolean;
  timeout?: number;
}

export interface ApiResult {
  result: string;
  status?: string;
  message?: string;
  [key: string]: any;
}
