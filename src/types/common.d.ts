export interface OPNsenseConfig {
  baseUrl: string;
  apiKey: string;
  apiSecret: string;
  verifySsl?: boolean;
  timeout?: number;
  headers?: Record<string, string>;
  debug?: boolean;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface RequestOptions {
  path: string;
  method: HttpMethod;
  params?: Record<string, any>;
  data?: any;
  headers?: Record<string, string>;
  timeout?: number;
}

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export interface ApiError extends Error {
  status?: number;
  data?: any;
  request?: RequestOptions;
}

export interface ApiResult<T = any> {
  result?: 'saved' | 'deleted' | 'error' | 'ok' | 'failed';
  uuid?: string;
  validations?: Record<string, string>;
  data?: T;
  service?: string;
  error?: string;
  [key: string]: any;
}

export interface SearchParams {
  current?: number;
  rowCount?: number;
  sort?: Record<string, any>;
  searchPhrase?: string;
  [key: string]: any;
}

export interface BaseResponse {
  result: string;
  status: string;
}

export interface ErrorResponse extends BaseResponse {
  message?: string;
  validations?: Record<string, string[]>;
}

export interface SearchRequest {
  searchPhrase?: string;
  current?: number;
  rowCount?: number;
  sort?: Record<string, 'asc' | 'desc'>;
}

export interface SearchResponse<T> extends BaseResponse {
  current: number;
  rowCount: number;
  total: number;
  rows: T[];
}

export interface ConfigItem {
  uuid?: string;
  enabled: boolean;
  description?: string;
}

export interface ServiceInfo {
  id: string;
  name: string;
  status: ServiceStatus;
  description: string;
  locked?: boolean;
}

export interface ReconfigureResponse extends BaseResponse {
  status: string;
}

export interface JobInfo {
  id: string;
  status: JobStatus;
  progress?: number;
  output?: string[];
  error?: string;
}

export type ServiceStatus = 'running' | 'stopped' | 'unknown' | 'starting' | 'stopping';

export type JobStatus = 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';

export type EnabledStatus = 'enabled' | 'disabled';

export type NetworkProtocol = 'tcp' | 'udp' | 'icmp' | 'esp' | 'ah' | 'gre' | 'any';

export type IPVersion = 'ipv4' | 'ipv6' | 'dual';

export type InterfaceType = 'physical' | 'vlan' | 'bridge' | 'lagg' | 'gre' | 'gif' | 'lo' | 'tun' | 'tap' | 'ppp';

export type LogLevel = 'emergency' | 'alert' | 'critical' | 'error' | 'warning' | 'notice' | 'info' | 'debug';

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  facility: string;
  process: string;
  message: string;
}

export interface NetworkAddress {
  ip: string;
  subnet?: number;
  type: 'host' | 'network' | 'range';
}

export interface PortRange {
  from: number;
  to?: number;
}

export type UUID = string;

export type Timestamp = string;

export type IPAddress = string;

export type MACAddress = string;

export interface Certificate {
  uuid?: string;
  name: string;
  type: 'ca' | 'cert' | 'csr';
  subject?: string;
  issuer?: string;
  valid_from?: string;
  valid_to?: string;
  serial?: string;
  in_use?: boolean;
  [key: string]: any;
}

export interface User {
  uuid?: string;
  enabled?: boolean;
  username: string;
  email?: string;
  full_name?: string;
  groups?: string[];
  shell?: string;
  home_directory?: string;
  expires?: string;
  [key: string]: any;
}

export interface Group {
  uuid?: string;
  name: string;
  description?: string;
  members?: string[];
  privileges?: string[];
  [key: string]: any;
}
