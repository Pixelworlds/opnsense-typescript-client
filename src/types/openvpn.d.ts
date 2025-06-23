export namespace OpenVPN {
  export interface BaseResponse {
    result: string;
    status: string;
  }

  export interface ErrorResponse {
    result: string;
    status: string;
    message?: string;
  }

  export namespace Instances {
    export type InstanceType = 'server' | 'client';
    export type Protocol = 'udp' | 'tcp';
    export type DeviceType = 'tun' | 'tap';
    export type AuthMode = 'local' | 'radius' | 'ldap';
    export type CipherType = 'AES-256-CBC' | 'AES-128-CBC' | 'BF-CBC' | 'DES-EDE3-CBC';
    export type HashType = 'SHA1' | 'SHA256' | 'SHA512' | 'MD5';

    export interface Instance {
      uuid?: string;
      enabled: boolean;
      role: InstanceType;
      description: string;
      port: number;
      bind: string;
      protocol: Protocol;
      device_type: DeviceType;
      tunnel_network: string;
      tunnel_networkv6: string;
      redirect_gateway: boolean;
      local_network: string;
      local_networkv6: string;
      remote_network: string;
      remote_networkv6: string;
      compression: boolean;
      auth_mode: AuthMode;
      cso_login_matching: boolean;
      cert_depth: number;
      strictusercn: boolean;
      cipher: CipherType;
      auth: HashType;
      reneg_sec: number;
      ca: string;
      cert: string;
      key: string;
      dh: string;
      ta: string;
      ta_direction: number;
      client_to_client: boolean;
      duplicate_cn: boolean;
      dynamic_ip: boolean;
      push_route: string[];
      custom_options: string;
    }

    export interface InstanceResponse extends BaseResponse {
      instance: Instance;
    }

    export interface InstanceSearchRequest {
      searchPhrase?: string;
      current?: number;
      rowCount?: number;
      sort?: Record<string, string>;
    }

    export interface InstanceSearchResponse extends BaseResponse {
      current: number;
      rowCount: number;
      total: number;
      rows: Instance[];
    }

    export interface AddInstanceRequest {
      instance: Partial<Instance>;
    }

    export interface SetInstanceRequest {
      instance: Partial<Instance>;
    }

    export interface ToggleInstanceRequest {
      enabled: boolean;
    }
  }

  export namespace Service {
    export interface ServiceStatus {
      status: 'running' | 'stopped';
      uptime?: string;
      clients?: number;
    }

    export interface ServiceResponse extends BaseResponse {
      service: ServiceStatus;
    }

    export interface ReconfigureResponse extends BaseResponse {
      status: string;
    }

    export interface ServiceActionResponse extends BaseResponse {
      action: string;
      status: string;
    }
  }

  export type ServiceAction = 'start' | 'stop' | 'restart';

  export interface VpnConnection {
    uuid?: string;
    enabled?: boolean;
    name: string;
    type: 'server' | 'client';
    protocol?: string;
    local_address?: string;
    remote_address?: string;
    status?: 'connected' | 'disconnected' | 'connecting';
    [key: string]: any;
  }
}
