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

export interface Certificate {
  refid: string;
  descr: string;
  type: 'ca' | 'cert' | 'crl';
  subject: string;
  issuer: string;
  serial: string;
  not_before: string;
  not_after: string;
  fingerprint: string;
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
