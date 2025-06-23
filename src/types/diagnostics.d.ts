export namespace Diagnostics {
  export interface BaseResponse {
    result: string;
    status: string;
  }

  export interface ErrorResponse {
    result: string;
    status: string;
    message?: string;
  }

  export namespace Activity {
    export interface ProcessInfo {
      pid: number;
      username: string;
      cpu: number;
      memory: number;
      vsz: number;
      rss: number;
      tty: string;
      stat: string;
      started: string;
      time: string;
      command: string;
    }

    export interface ActivityResponse extends BaseResponse {
      processes: ProcessInfo[];
    }
  }

  export namespace CPUUsage {
    export interface CPUInfo {
      model: string;
      cores: number;
      frequency: number;
      temperature?: number;
    }

    export interface CPUTypeResponse extends BaseResponse {
      cpu: CPUInfo;
    }

    export interface CPUUsageData {
      timestamp: number;
      usage: number;
      cores: number[];
    }

    export interface CPUStreamResponse {
      data: CPUUsageData;
    }
  }

  export namespace System {
    export interface MemoryInfo {
      total: number;
      available: number;
      used: number;
      cached: number;
      buffers: number;
      swap_total: number;
      swap_used: number;
      swap_free: number;
    }

    export interface MemoryResponse extends BaseResponse {
      memory: MemoryInfo;
    }

    export interface SystemInfo {
      hostname: string;
      version: string;
      platform: string;
      uptime: string;
      datetime: string;
      loadavg: number[];
      cpu_model: string;
      cpu_count: number;
      memory_total: number;
      diskspace: Record<
        string,
        {
          total: number;
          used: number;
          available: number;
        }
      >;
    }

    export interface SystemInfoResponse extends BaseResponse {
      system: SystemInfo;
    }
  }

  export namespace Firewall {
    export interface LogEntry {
      timestamp: string;
      interface: string;
      reason: string;
      action: string;
      direction: string;
      version: number;
      protocol: string;
      source_ip: string;
      source_port?: number;
      destination_ip: string;
      destination_port?: number;
      length: number;
    }

    export interface LogResponse extends BaseResponse {
      logs: LogEntry[];
    }

    export interface PFState {
      id: string;
      creatorid: string;
      direction: string;
      interface: string;
      protocol: string;
      source: string;
      destination: string;
      state: string;
      age: number;
      expires: number;
      packets: number;
      bytes: number;
    }

    export interface PFStatesResponse extends BaseResponse {
      states: PFState[];
    }

    export interface StateQuery {
      interface?: string;
      protocol?: string;
      source?: string;
      destination?: string;
      state?: string;
    }

    export interface QueryStatesResponse extends BaseResponse {
      states: PFState[];
      total: number;
    }

    export interface FirewallStats {
      counters: Record<string, number>;
      info: Record<string, any>;
      timeouts: Record<string, number>;
      limits: Record<string, number>;
    }

    export interface StatsResponse extends BaseResponse {
      stats: FirewallStats;
    }
  }

  export namespace Interface {
    export interface ARPEntry {
      interface: string;
      ip: string;
      mac: string;
      hostname?: string;
      expires: number;
      type: 'dynamic' | 'static';
    }

    export interface ARPResponse extends BaseResponse {
      arp_table: ARPEntry[];
    }

    export interface RouteEntry {
      destination: string;
      gateway: string;
      flags: string;
      refs: number;
      use: number;
      mtu: number;
      interface: string;
      expire?: number;
    }

    export interface RoutesResponse extends BaseResponse {
      routes: RouteEntry[];
    }

    export interface InterfaceStats {
      name: string;
      description: string;
      status: 'up' | 'down';
      mac: string;
      mtu: number;
      packets_in: number;
      packets_out: number;
      bytes_in: number;
      bytes_out: number;
      errors_in: number;
      errors_out: number;
      collisions: number;
    }

    export interface InterfaceStatsResponse extends BaseResponse {
      interfaces: InterfaceStats[];
    }
  }

  export namespace NetworkTools {
    export interface PingConfig {
      host: string;
      count: number;
      interval: number;
      size: number;
      timeout: number;
      source?: string;
    }

    export interface PingResponse extends BaseResponse {
      config: PingConfig;
    }

    export interface TracerouteConfig {
      host: string;
      max_hops: number;
      port: number;
      timeout: number;
      source?: string;
    }

    export interface TracerouteResponse extends BaseResponse {
      config: TracerouteConfig;
    }

    export interface JobStatus {
      status: 'running' | 'finished' | 'error';
      output: string[];
      progress?: number;
    }

    export interface JobResponse extends BaseResponse {
      job: JobStatus;
    }
  }

  export type LogLevel = 'emergency' | 'alert' | 'critical' | 'error' | 'warning' | 'notice' | 'info' | 'debug';
  export type InterfaceStatus = 'up' | 'down' | 'unknown';
  export type ProtocolType = 'tcp' | 'udp' | 'icmp' | 'esp' | 'ah' | 'gre';
}
