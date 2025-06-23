export namespace Auth {
  export interface BaseResponse {
    result: string;
    status: string;
  }

  export interface ErrorResponse {
    result: string;
    status: string;
    message?: string;
  }

  export namespace User {
    export interface UserInfo {
      uuid?: string;
      enabled: boolean;
      username: string;
      password?: string;
      full_name: string;
      email: string;
      comment: string;
      expires: string;
      groups: string[];
      privileges: string[];
      shell: '/bin/sh' | '/bin/csh' | '/bin/tcsh' | '/usr/local/bin/bash';
      home_directory: string;
      uid: number;
      landing_page: string;
      otp_seed: string;
      api_keys: APIKey[];
      created: string;
      last_login: string;
    }

    export interface APIKey {
      id: string;
      key: string;
      secret: string;
      created: string;
      last_used?: string;
    }

    export interface UserResponse extends BaseResponse {
      user: UserInfo;
    }

    export interface UserSearchRequest {
      searchPhrase?: string;
      current?: number;
      rowCount?: number;
      sort?: Record<string, string>;
    }

    export interface UserSearchResponse extends BaseResponse {
      current: number;
      rowCount: number;
      total: number;
      rows: UserInfo[];
    }

    export interface AddUserRequest {
      user: Partial<UserInfo>;
    }

    export interface SetUserRequest {
      user: Partial<UserInfo>;
    }

    export interface AddAPIKeyRequest {
      username: string;
    }

    export interface AddAPIKeyResponse extends BaseResponse {
      api_key: APIKey;
    }

    export interface DeleteAPIKeyRequest {
      id: string;
    }
  }

  export namespace Group {
    export interface GroupInfo {
      uuid?: string;
      name: string;
      description: string;
      privileges: string[];
      members: string[];
      created: string;
    }

    export interface GroupResponse extends BaseResponse {
      group: GroupInfo;
    }

    export interface GroupSearchRequest {
      searchPhrase?: string;
      current?: number;
      rowCount?: number;
      sort?: Record<string, string>;
    }

    export interface GroupSearchResponse extends BaseResponse {
      current: number;
      rowCount: number;
      total: number;
      rows: GroupInfo[];
    }

    export interface AddGroupRequest {
      group: Partial<GroupInfo>;
    }

    export interface SetGroupRequest {
      group: Partial<GroupInfo>;
    }
  }

  export type UserShell = '/bin/sh' | '/bin/csh' | '/bin/tcsh' | '/usr/local/bin/bash';
  export type PrivilegeScope = 'system' | 'interface' | 'firewall' | 'vpn' | 'service' | 'diagnostic';
}
