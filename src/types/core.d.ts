export namespace Core {
  export interface BaseResponse {
    result: string;
    status: string;
  }

  export interface ErrorResponse {
    result: string;
    status: string;
    message?: string;
  }

  export namespace Backup {
    export interface BackupItem {
      id: string;
      name: string;
      date: string;
      size: number;
      host: string;
    }

    export interface BackupListResponse extends BaseResponse {
      backups: BackupItem[];
    }

    export interface BackupDiffRequest {
      host: string;
      backup1: string;
      backup2: string;
    }

    export interface BackupDiffResponse extends BaseResponse {
      diff: string;
    }

    export interface ProvidersResponse extends BaseResponse {
      providers: string[];
    }
  }

  export namespace Dashboard {
    export interface Widget {
      id: string;
      title: string;
      type: string;
      position: {
        x: number;
        y: number;
        width: number;
        height: number;
      };
      settings: Record<string, any>;
    }

    export interface DashboardConfig {
      widgets: Widget[];
      layout: string;
    }

    export interface DashboardResponse extends BaseResponse {
      dashboard: DashboardConfig;
    }

    export interface ProductInfoFeed {
      version: string;
      updates: any[];
      notifications: any[];
    }

    export interface SaveWidgetsRequest {
      widgets: Widget[];
    }
  }

  export namespace HASync {
    export interface HASyncConfig {
      enabled: boolean;
      peerip: string;
      username: string;
      password: string;
      synchronizeusers: boolean;
      synchronizerules: boolean;
      synchronizenat: boolean;
      synchronizealiases: boolean;
      synchronizeschedules: boolean;
      synchronizelimiters: boolean;
      synchronizevirtualip: boolean;
    }

    export interface HASyncResponse extends BaseResponse {
      hasync: HASyncConfig;
    }
  }

  export namespace HASyncStatus {
    export interface ServiceInfo {
      id: string;
      name: string;
      status: 'running' | 'stopped' | 'unknown';
      description: string;
    }

    export interface ServicesResponse extends BaseResponse {
      services: ServiceInfo[];
    }

    export interface VersionResponse extends BaseResponse {
      version: string;
      platform: string;
    }

    export type ServiceAction = 'start' | 'stop' | 'restart';
  }

  export namespace Menu {
    export interface MenuItem {
      id: string;
      title: string;
      url: string;
      cssClass?: string;
      children?: MenuItem[];
    }

    export interface MenuTreeResponse extends BaseResponse {
      menu: MenuItem[];
    }

    export interface MenuSearchRequest {
      query: string;
    }

    export interface MenuSearchResponse extends BaseResponse {
      results: MenuItem[];
    }
  }

  export namespace Service {
    export interface ServiceInfo {
      id: string;
      name: string;
      status: 'running' | 'stopped' | 'unknown';
      description: string;
      locked: boolean;
    }

    export interface ServiceSearchRequest {
      searchPhrase?: string;
      current?: number;
      rowCount?: number;
      sort?: Record<string, string>;
    }

    export interface ServiceSearchResponse extends BaseResponse {
      current: number;
      rowCount: number;
      total: number;
      rows: ServiceInfo[];
    }
  }

  export namespace Snapshots {
    export interface SnapshotInfo {
      uuid: string;
      name: string;
      description: string;
      timestamp: string;
      size: number;
      active: boolean;
    }

    export interface SnapshotResponse extends BaseResponse {
      snapshot: SnapshotInfo;
    }

    export interface SnapshotSearchRequest {
      searchPhrase?: string;
      current?: number;
      rowCount?: number;
    }

    export interface SnapshotSearchResponse extends BaseResponse {
      current: number;
      rowCount: number;
      total: number;
      rows: SnapshotInfo[];
    }

    export interface AddSnapshotRequest {
      name: string;
      description?: string;
    }

    export interface SupportResponse extends BaseResponse {
      supported: boolean;
    }
  }

  export namespace System {
    export interface SystemStatus {
      uptime: string;
      datetime: string;
      loadavg: number[];
      cpu_usage: number;
      memory_usage: number;
      disk_usage: Record<string, number>;
      temperature: number;
      interfaces: Record<string, any>;
    }

    export interface StatusResponse extends BaseResponse {
      system: SystemStatus;
    }

    export interface StatusMessage {
      id: string;
      message: string;
      type: 'info' | 'warning' | 'error';
      timestamp: string;
    }

    export interface DismissStatusRequest {
      id: string;
    }
  }

  export namespace Tunables {
    export interface TunableItem {
      uuid: string;
      tunable: string;
      value: string;
      comment: string;
      enabled: boolean;
    }

    export interface TunableResponse extends BaseResponse {
      tunable: TunableItem;
    }

    export interface TunableSearchRequest {
      searchPhrase?: string;
      current?: number;
      rowCount?: number;
    }

    export interface TunableSearchResponse extends BaseResponse {
      current: number;
      rowCount: number;
      total: number;
      rows: TunableItem[];
    }

    export interface AddTunableRequest {
      tunable: string;
      value: string;
      comment?: string;
      enabled?: boolean;
    }

    export interface SetTunableRequest {
      tunable?: string;
      value?: string;
      comment?: string;
      enabled?: boolean;
    }
  }

  export interface SystemStatus {
    date?: string;
    uptime?: string;
    load_average?: string;
    cpu_usage?: string;
    memory_usage?: string;
    disk_usage?: string;
    temperature?: string;
    [key: string]: any;
  }

  export interface ServiceStatus {
    name: string;
    enabled?: boolean;
    running?: boolean;
    locked?: boolean;
    description?: string;
    [key: string]: any;
  }
}
