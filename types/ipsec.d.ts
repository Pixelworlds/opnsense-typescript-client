export namespace IPsec {
  export interface BaseResponse {
    result: string;
    status: string;
  }

  export interface ErrorResponse {
    result: string;
    status: string;
    message?: string;
  }

  export namespace Connections {
    export type ConnectionType = 'ikev1' | 'ikev2';
    export type AuthMethod = 'pre_shared_key' | 'cert' | 'eap' | 'pubkey';
    export type EncryptionAlgorithm = 'aes128' | 'aes192' | 'aes256' | '3des' | 'blowfish';
    export type HashAlgorithm = 'md5' | 'sha1' | 'sha256' | 'sha384' | 'sha512';
    export type DHGroup = 'modp768' | 'modp1024' | 'modp1536' | 'modp2048' | 'modp3072' | 'modp4096';
    export type PFSGroup = 'modp768' | 'modp1024' | 'modp1536' | 'modp2048' | 'modp3072' | 'modp4096';

    export interface Connection {
      uuid?: string;
      enabled: boolean;
      description: string;
      type: ConnectionType;
      interface: string;
      remote_gateway: string;
      authentication_method: AuthMethod;
      pre_shared_key?: string;
      my_identifier: string;
      peer_identifier: string;
      proposal_encryption: EncryptionAlgorithm[];
      proposal_hash: HashAlgorithm[];
      proposal_dh_group: DHGroup[];
      child_sa_encryption: EncryptionAlgorithm[];
      child_sa_hash: HashAlgorithm[];
      child_sa_pfs_group: PFSGroup[];
      local_subnet: string;
      remote_subnet: string;
      phase1_lifetime: number;
      phase2_lifetime: number;
      rekey_time: number;
      reauth_time: number;
      dpd_delay: number;
      dpd_timeout: number;
      dpd_action: 'none' | 'clear' | 'hold' | 'restart';
      close_action: 'none' | 'clear' | 'hold' | 'restart';
      nat_traversal: boolean;
      compression: boolean;
      pool: string;
      split_connections: boolean;
      prfplus: boolean;
    }

    export interface ConnectionResponse extends BaseResponse {
      connection: Connection;
    }

    export interface ConnectionSearchRequest {
      searchPhrase?: string;
      current?: number;
      rowCount?: number;
      sort?: Record<string, string>;
    }

    export interface ConnectionSearchResponse extends BaseResponse {
      current: number;
      rowCount: number;
      total: number;
      rows: Connection[];
    }

    export interface AddConnectionRequest {
      connection: Partial<Connection>;
    }

    export interface SetConnectionRequest {
      connection: Partial<Connection>;
    }

    export interface ToggleConnectionRequest {
      enabled: boolean;
    }
  }

  export namespace Service {
    export interface ServiceStatus {
      status: 'running' | 'stopped';
      uptime?: string;
      connections?: ConnectionStatus[];
    }

    export interface ConnectionStatus {
      name: string;
      status: 'connected' | 'connecting' | 'disconnected';
      local_ts: string;
      remote_ts: string;
      local_addrs: string[];
      remote_addrs: string[];
      established: number;
      rekey_time: number;
      reauth_time: number;
    }

    export interface ServiceResponse extends BaseResponse {
      service: ServiceStatus;
    }

    export interface ServiceActionResponse extends BaseResponse {
      action: string;
      status: string;
    }
  }

  export type ServiceAction = 'start' | 'stop' | 'restart';
  export type DPDAction = 'none' | 'clear' | 'hold' | 'restart';
}
