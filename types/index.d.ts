export * from './auth';
export * from './common';
export * from './core';
export * from './diagnostics';
export * from './firewall';
export * from './firmware';
export * from './interfaces';
export * from './ipsec';
export * from './openvpn';

export interface OPNsenseAPIConfig {
  baseUrl: string;
  apiKey: string;
  apiSecret: string;
  timeout?: number;
  retries?: number;
}

export interface APIError {
  status: number;
  message: string;
  details?: any;
}

export interface PaginationParams {
  current?: number;
  rowCount?: number;
  searchPhrase?: string;
  sort?: Record<string, 'asc' | 'desc'>;
}

export interface PaginatedResponse<T> {
  current: number;
  rowCount: number;
  total: number;
  rows: T[];
}

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type APIEndpoint = string;

export type UUID = string;
