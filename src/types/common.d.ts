// Common API response types for OPNsense
export interface ApiResponse<T = any> {
  result: 'ok' | 'failed';
  data?: T;
  message?: string;
  validations?: Record<string, string>;
}

export interface ApiResult {
  result: 'ok' | 'failed';
  message?: string;
}

export interface SearchResult<T = any> {
  rows: T[];
  rowCount: number;
  total: number;
  current: number;
}

export interface BaseRecord {
  uuid?: string;
  enabled?: string | boolean;
  description?: string;
}

export interface ServiceStatus {
  status: 'running' | 'stopped' | 'unknown';
  description?: string;
}

export interface ServiceControl {
  result: 'ok' | 'failed';
  message?: string;
}

export interface ConfigTest {
  result: 'ok' | 'failed';
  message?: string;
}

// Generic CRUD operations
export interface CrudOperations<T extends BaseRecord> {
  search?: (params?: Record<string, any>) => Promise<ApiResponse<SearchResult<T>>>;
  get?: (uuid?: string) => Promise<ApiResponse<T>>;
  add?: (item: Partial<T>) => Promise<ApiResponse<ApiResult>>;
  update?: (uuid: string, item: Partial<T>) => Promise<ApiResponse<ApiResult>>;
  delete?: (uuid: string) => Promise<ApiResponse<ApiResult>>;
  toggle?: (uuid: string, enabled?: boolean) => Promise<ApiResponse<ApiResult>>;
}

// Service operations
export interface ServiceOperations {
  status?: () => Promise<ApiResponse<ServiceStatus>>;
  start?: () => Promise<ApiResponse<ServiceControl>>;
  stop?: () => Promise<ApiResponse<ServiceControl>>;
  restart?: () => Promise<ApiResponse<ServiceControl>>;
  reconfigure?: () => Promise<ApiResponse<ServiceControl>>;
  configtest?: () => Promise<ApiResponse<ConfigTest>>;
}

// Settings operations
export interface SettingsOperations<T = any> {
  get?: () => Promise<ApiResponse<T>>;
  set?: (config: Partial<T>) => Promise<ApiResponse<ApiResult>>;
}
