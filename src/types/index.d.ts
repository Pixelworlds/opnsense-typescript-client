export * from './auth';
export * from './common';
export * from './core';
export * from './diagnostics';
export * from './firewall';
export * from './firmware';
export * from './interfaces';
export * from './ipsec';
export * from './openvpn';
export * from './keygen';

export type {
  ApiError,
  ApiResponse,
  ApiResult,
  Certificate,
  Group,
  HttpMethod,
  InterfaceInfo,
  OPNsenseConfig,
  RequestOptions,
  SearchParams,
  User,
} from './common';

export type { ServiceStatus, SystemStatus } from './core';

export type { FirewallAlias, FirewallRule } from './firewall';

export type { VpnConnection } from './openvpn';

export type {
  WireguardKeypair,
  WireguardPresharedKey,
  WireguardKeys
} from './keygen';
