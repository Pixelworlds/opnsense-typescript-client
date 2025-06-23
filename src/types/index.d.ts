// Export all types from individual modules via re-export
export * from './auth';
export * from './common';
export * from './core';
export * from './diagnostics';
export * from './firewall';
export * from './firmware';
export * from './interfaces';
export * from './ipsec';
export * from './keygen';
export * from './openvpn';

// Re-export key common types for convenience
export type {
  ApiError,
  ApiResponse,
  ApiResult,
  Certificate,
  Group,
  HttpMethod,
  OPNsenseConfig,
  RequestOptions,
  SearchParams,
  User,
} from './common';

// Export namespaces for structured access to types
export type { Auth } from './auth';
export type { Core } from './core';
export type { Diagnostics } from './diagnostics';
export type { Firewall } from './firewall';
export type { Firmware } from './firmware';
export type { Interfaces } from './interfaces';
export type { IPsec } from './ipsec';
export type { OpenVPN } from './openvpn';
