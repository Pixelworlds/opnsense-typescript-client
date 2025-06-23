export namespace Interfaces {
  export interface BaseResponse {
    result: string;
    status: string;
  }

  export interface ErrorResponse {
    result: string;
    status: string;
    message?: string;
  }

  export namespace Overview {
    export interface InterfaceInfo {
      identifier: string;
      description: string;
      type: string;
      status: 'up' | 'down' | 'no carrier';
      mac: string;
      mtu: number;
      speed?: string;
      duplex?: 'full' | 'half';
      media?: string;
      ipv4?: string[];
      ipv6?: string[];
      statistics: {
        packets_in: number;
        packets_out: number;
        bytes_in: number;
        bytes_out: number;
        errors_in: number;
        errors_out: number;
        dropped_in: number;
        dropped_out: number;
      };
    }

    export interface InterfaceResponse extends BaseResponse {
      interface: InterfaceInfo;
    }

    export interface InterfacesInfoResponse extends BaseResponse {
      interfaces: Record<string, InterfaceInfo>;
    }

    export interface ReloadResponse extends BaseResponse {
      message: string;
    }
  }

  export namespace VLANSettings {
    export interface VLANItem {
      uuid?: string;
      device: string;
      vlan: number;
      priority: number;
      description: string;
      enabled: boolean;
    }

    export interface VLANResponse extends BaseResponse {
      vlan: VLANItem;
    }

    export interface VLANSearchRequest {
      searchPhrase?: string;
      current?: number;
      rowCount?: number;
      sort?: Record<string, string>;
    }

    export interface VLANSearchResponse extends BaseResponse {
      current: number;
      rowCount: number;
      total: number;
      rows: VLANItem[];
    }

    export interface AddVLANRequest {
      vlan: Partial<VLANItem>;
    }

    export interface SetVLANRequest {
      vlan: Partial<VLANItem>;
    }

    export interface ReconfigureResponse extends BaseResponse {
      status: string;
    }
  }

  export type InterfaceStatus = 'up' | 'down' | 'no carrier';
  export type InterfaceType = 'physical' | 'vlan' | 'bridge' | 'lagg' | 'gre' | 'gif' | 'lo' | 'tun' | 'tap';
  export type DuplexMode = 'full' | 'half';
}
