export namespace Firmware {
  export interface BaseResponse {
    result: string;
    status: string;
  }

  export interface ErrorResponse {
    result: string;
    status: string;
    message?: string;
  }

  export interface FirmwareInfo {
    product_name: string;
    product_version: string;
    product_arch: string;
    product_flavour: string;
    product_mirror: string;
    product_check_url: string;
    product_copyright_url: string;
    product_email: string;
    product_website: string;
  }

  export interface FirmwareInfoResponse extends BaseResponse {
    firmware: FirmwareInfo;
  }

  export interface UpdateInfo {
    has_update: boolean;
    status_msg: string;
    update_size: string;
    download_size: string;
    sets: string[];
    upgrade_needs_reboot: boolean;
    new_packages: PackageInfo[];
    reinstall_packages: PackageInfo[];
    remove_packages: PackageInfo[];
    upgrade_packages: PackageInfo[];
    downgrade_packages: PackageInfo[];
  }

  export interface UpdateCheckResponse extends BaseResponse {
    status_msg?: string;
    updates?: UpdateInfo;
  }

  export interface PackageInfo {
    name: string;
    version: string;
    comment: string;
    flatsize: number;
    locked: boolean;
    automatic: boolean;
    license: string;
    repository: string;
    categories: string[];
    www: string;
    maintainer: string;
    prefix: string;
    vital: boolean;
    provided: boolean;
    path: string;
    conflict: boolean;
  }

  export interface PackageSearchResponse extends BaseResponse {
    packages: PackageInfo[];
  }

  export interface PackageDetailsResponse extends BaseResponse {
    package: PackageInfo;
  }

  export interface ConnectionStatus {
    connected: boolean;
    message?: string;
  }

  export interface ConnectionResponse extends BaseResponse {
    connection: ConnectionStatus;
  }

  export interface FirmwareStatus {
    status: 'none' | 'running' | 'done' | 'error';
    log: string[];
    progress?: number;
  }

  export interface StatusResponse extends BaseResponse {
    firmware_status: FirmwareStatus;
  }

  export interface ChangelogResponse extends BaseResponse {
    changelog: string;
  }

  export interface AuditInfo {
    vulnerable_packages: PackageInfo[];
    total_vulnerable: number;
    audit_message: string;
  }

  export interface AuditResponse extends BaseResponse {
    audit: AuditInfo;
  }

  export interface UpdateRequest {
    type?: 'upgrade' | 'update';
    subscription?: string;
  }

  export interface UpgradeRequest {
    upgrade_action?: 'all' | 'packages';
    subscription?: string;
  }

  export interface PackageActionRequest {
    package: string;
  }

  export type PackageAction = 'install' | 'remove' | 'lock' | 'unlock';
}
