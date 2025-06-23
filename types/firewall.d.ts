export namespace Firewall {
  export interface BaseResponse {
    result: string;
    status: string;
  }

  export interface ErrorResponse {
    result: string;
    status: string;
    message?: string;
  }

  export namespace Filter {
    export interface Rule {
      uuid?: string;
      enabled: boolean;
      sequence: number;
      action: 'pass' | 'block' | 'reject';
      quick: boolean;
      interface: string;
      direction: 'in' | 'out';
      ipprotocol: 'inet' | 'inet6' | 'inet46';
      protocol: string;
      source_net: string;
      source_port: string;
      source_not: boolean;
      destination_net: string;
      destination_port: string;
      destination_not: boolean;
      description: string;
      log: boolean;
      category: string;
    }

    export interface RuleResponse extends BaseResponse {
      rule: Rule;
    }

    export interface RuleSearchRequest {
      searchPhrase?: string;
      current?: number;
      rowCount?: number;
      sort?: Record<string, string>;
    }

    export interface RuleSearchResponse extends BaseResponse {
      current: number;
      rowCount: number;
      total: number;
      rows: Rule[];
    }

    export interface AddRuleRequest {
      rule: Partial<Rule>;
    }

    export interface SetRuleRequest {
      rule: Partial<Rule>;
    }

    export interface ToggleRuleRequest {
      enabled: boolean;
    }

    export interface InterfaceInfo {
      value: string;
      text: string;
    }

    export interface InterfaceListResponse extends BaseResponse {
      interfaces: InterfaceInfo[];
    }
  }

  export namespace Alias {
    export type AliasType =
      | 'host'
      | 'network'
      | 'port'
      | 'url'
      | 'url_ports'
      | 'urltable'
      | 'urltable_ports'
      | 'geoip'
      | 'networkgroup'
      | 'mac'
      | 'dynipv6host'
      | 'authgroup';

    export interface AliasItem {
      uuid?: string;
      enabled: boolean;
      name: string;
      type: AliasType;
      proto: string;
      interface: string;
      counters: boolean;
      updatefreq: number;
      content: string[];
      description: string;
    }

    export interface AliasResponse extends BaseResponse {
      alias: AliasItem;
    }

    export interface AliasSearchRequest {
      searchPhrase?: string;
      current?: number;
      rowCount?: number;
      sort?: Record<string, string>;
    }

    export interface AliasSearchResponse extends BaseResponse {
      current: number;
      rowCount: number;
      total: number;
      rows: AliasItem[];
    }

    export interface AddAliasRequest {
      alias: Partial<AliasItem>;
    }

    export interface SetAliasRequest {
      alias: Partial<AliasItem>;
    }
  }

  export namespace AliasUtil {
    export interface AliasEntry {
      ip: string;
      description?: string;
    }

    export interface AliasListResponse extends BaseResponse {
      alias: string;
      entries: AliasEntry[];
    }

    export interface AliasInfo {
      name: string;
      type: string;
      description: string;
    }

    export interface AllAliasesResponse extends BaseResponse {
      aliases: Record<string, AliasInfo>;
    }

    export interface AddToAliasRequest {
      address: string;
      description?: string;
    }

    export interface DeleteFromAliasRequest {
      address: string;
    }

    export interface AliasActionResponse extends BaseResponse {
      message: string;
    }
  }

  export interface ReconfigureResponse extends BaseResponse {
    status: string;
  }

  export type FirewallAction = 'pass' | 'block' | 'reject';
  export type Direction = 'in' | 'out';
  export type IPProtocol = 'inet' | 'inet6' | 'inet46';
}
