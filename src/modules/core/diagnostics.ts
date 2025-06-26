import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class DiagnosticsActivity extends BaseModule {
  /**
   * Get get activity for diagnostics activity
   */
  async getActivity(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/activity/get_activity`);
  }
}

export class DiagnosticsCpuUsage extends BaseModule {
  /**
   * Get get c p u type for diagnostics cpu_usage
   */
  async getCPUType(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/cpu_usage/get_c_p_u_type`);
  }

  /**
   * Get stream for diagnostics cpu_usage
   */
  async stream(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/cpu_usage/stream`);
  }
}

export class DiagnosticsDns extends BaseModule {
  /**
   * Get reverse lookup for diagnostics dns
   */
  async reverseLookup(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/dns/reverse_lookup`);
  }
}

export class DiagnosticsDnsDiagnostics extends BaseModule {
  /**
   * Get get for diagnostics dns_diagnostics
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/dns_diagnostics/get`);
  }

  /**
   * Execute set for diagnostics dns_diagnostics
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/dns_diagnostics/set`, data);
  }
}

export class DiagnosticsFirewall extends BaseModule {
  /**
   * Execute del state for diagnostics firewall
   */
  async delState(stateid: string, creatorid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/firewall/del_state/${stateid}/${creatorid}`, data);
  }

  /**
   * Execute flush sources for diagnostics firewall
   */
  async flushSources(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/firewall/flush_sources`, data);
  }

  /**
   * Execute flush states for diagnostics firewall
   */
  async flushStates(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/firewall/flush_states`, data);
  }

  /**
   * Execute kill states for diagnostics firewall
   */
  async killStates(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/firewall/kill_states`, data);
  }

  /**
   * Get list rule ids for diagnostics firewall
   */
  async listRuleIds(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/firewall/list_rule_ids`);
  }

  /**
   * Get log for diagnostics firewall
   */
  async log(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/firewall/log`);
  }

  /**
   * Get log filters for diagnostics firewall
   */
  async logFilters(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/firewall/log_filters`);
  }

  /**
   * Get pf states for diagnostics firewall
   */
  async pfStates(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/firewall/pf_states`);
  }

  /**
   * Get pf statistics for diagnostics firewall
   */
  async pfStatistics(section: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/firewall/pf_statistics/${section}`);
  }

  /**
   * Execute query pf top for diagnostics firewall
   */
  async queryPfTop(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/firewall/query_pf_top`, data);
  }

  /**
   * Execute query states for diagnostics firewall
   */
  async queryStates(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/firewall/query_states`, data);
  }

  /**
   * Get stats for diagnostics firewall
   */
  async stats(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/firewall/stats`);
  }

  /**
   * Get stream log for diagnostics firewall
   */
  async streamLog(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/firewall/stream_log`);
  }
}

export class DiagnosticsInterface extends BaseModule {
  /**
   * Execute  carp status for diagnostics interface
   */
  async carpStatus(status: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/interface/_carp_status/${status}`, data);
  }

  /**
   * Execute del route for diagnostics interface
   */
  async delRoute(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/interface/del_route`, data);
  }

  /**
   * Execute flush arp for diagnostics interface
   */
  async flushArp(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/interface/flush_arp`, data);
  }

  /**
   * Get get arp for diagnostics interface
   */
  async getArp(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/interface/get_arp`);
  }

  /**
   * Get get bpf statistics for diagnostics interface
   */
  async getBpfStatistics(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/interface/get_bpf_statistics`);
  }

  /**
   * Get get interface config for diagnostics interface
   */
  async getInterfaceConfig(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/interface/get_interface_config`);
  }

  /**
   * Get get interface names for diagnostics interface
   */
  async getInterfaceNames(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/interface/get_interface_names`);
  }

  /**
   * Get get interface statistics for diagnostics interface
   */
  async getInterfaceStatistics(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/interface/get_interface_statistics`);
  }

  /**
   * Get get memory statistics for diagnostics interface
   */
  async getMemoryStatistics(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/interface/get_memory_statistics`);
  }

  /**
   * Get get ndp for diagnostics interface
   */
  async getNdp(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/interface/get_ndp`);
  }

  /**
   * Get get netisr statistics for diagnostics interface
   */
  async getNetisrStatistics(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/interface/get_netisr_statistics`);
  }

  /**
   * Get get pfsync nodes for diagnostics interface
   */
  async getPfsyncNodes(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/interface/get_pfsync_nodes`);
  }

  /**
   * Get get protocol statistics for diagnostics interface
   */
  async getProtocolStatistics(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/interface/get_protocol_statistics`);
  }

  /**
   * Get get routes for diagnostics interface
   */
  async getRoutes(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/interface/get_routes`);
  }

  /**
   * Get get socket statistics for diagnostics interface
   */
  async getSocketStatistics(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/interface/get_socket_statistics`);
  }

  /**
   * Get get vip status for diagnostics interface
   */
  async getVipStatus(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/interface/get_vip_status`);
  }

  /**
   * Get search arp for diagnostics interface
   */
  async searchArp(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/diagnostics/diagnostics/interface/search_arp`);
  }

  /**
   * Get search ndp for diagnostics interface
   */
  async searchNdp(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/diagnostics/diagnostics/interface/search_ndp`);
  }
}

export class DiagnosticsLvtemplate extends BaseModule {
  /**
   * Execute add item for diagnostics lvtemplate
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/lvtemplate/add_item`, data);
  }

  /**
   * Execute del item for diagnostics lvtemplate
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/lvtemplate/del_item/${uuid}`, data);
  }

  /**
   * Get get for diagnostics lvtemplate
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/lvtemplate/get`);
  }

  /**
   * Get get item for diagnostics lvtemplate
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/lvtemplate/get_item/${uuid}`);
  }

  /**
   * Execute set for diagnostics lvtemplate
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/lvtemplate/set`, data);
  }

  /**
   * Execute set item for diagnostics lvtemplate
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/lvtemplate/set_item/${uuid}`, data);
  }
}

export class DiagnosticsNetflow extends BaseModule {
  /**
   * Get cache stats for diagnostics netflow
   */
  async cacheStats(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/netflow/cache_stats`);
  }

  /**
   * Get getconfig for diagnostics netflow
   */
  async getconfig(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/netflow/getconfig`);
  }

  /**
   * Get is enabled for diagnostics netflow
   */
  async isEnabled(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/netflow/is_enabled`);
  }

  /**
   * Execute reconfigure for diagnostics netflow
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/diagnostics/diagnostics/netflow/reconfigure`, data);
  }

  /**
   * Get setconfig for diagnostics netflow
   */
  async setconfig(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/netflow/setconfig`);
  }

  /**
   * Get status for diagnostics netflow
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/diagnostics/diagnostics/netflow/status`);
  }
}

export class DiagnosticsNetworkinsight extends BaseModule {
  /**
   * Get export for diagnostics networkinsight
   */
  async export(provider: string, from_date: string, to_date: string, resolution: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/networkinsight/export/${provider}/${from_date}/${to_date}/${resolution}`);
  }

  /**
   * Get get interfaces for diagnostics networkinsight
   */
  async getInterfaces(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/networkinsight/get_interfaces`);
  }

  /**
   * Get get metadata for diagnostics networkinsight
   */
  async getMetadata(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/networkinsight/get_metadata`);
  }

  /**
   * Get get protocols for diagnostics networkinsight
   */
  async getProtocols(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/networkinsight/get_protocols`);
  }

  /**
   * Get get services for diagnostics networkinsight
   */
  async getServices(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/networkinsight/get_services`);
  }

  /**
   * Get timeserie for diagnostics networkinsight
   */
  async timeserie(provider: string, measure: string, from_date: string, to_date: string, resolution: string, field: string, emulation: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/networkinsight/timeserie/${provider}/${measure}/${from_date}/${to_date}/${resolution}/${field}/${emulation}`);
  }

  /**
   * Get top for diagnostics networkinsight
   */
  async top(provider: string, from_date: string, to_date: string, field: string, measure: string, max_hits: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/networkinsight/top/${provider}/${from_date}/${to_date}/${field}/${measure}/${max_hits}`);
  }
}

export class DiagnosticsPacketCapture extends BaseModule {
  /**
   * Get download for diagnostics packet_capture
   */
  async download(jobid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/packet_capture/download/${jobid}`);
  }

  /**
   * Get get for diagnostics packet_capture
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/packet_capture/get`);
  }

  /**
   * Get mac info for diagnostics packet_capture
   */
  async macInfo(macaddr: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/packet_capture/mac_info/${macaddr}`);
  }

  /**
   * Execute remove for diagnostics packet_capture
   */
  async remove(jobid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/packet_capture/remove/${jobid}`, data);
  }

  /**
   * Get search jobs for diagnostics packet_capture
   */
  async searchJobs(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/diagnostics/diagnostics/packet_capture/search_jobs`);
  }

  /**
   * Execute set for diagnostics packet_capture
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/packet_capture/set`, data);
  }

  /**
   * Execute start for diagnostics packet_capture
   */
  async start(jobid: string, data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/diagnostics/diagnostics/packet_capture/start/${jobid}`, data);
  }

  /**
   * Execute stop for diagnostics packet_capture
   */
  async stop(jobid: string, data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/diagnostics/diagnostics/packet_capture/stop/${jobid}`, data);
  }

  /**
   * Get view for diagnostics packet_capture
   */
  async view(jobid: string, detail: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/packet_capture/view/${jobid}/${detail}`);
  }
}

export class DiagnosticsPing extends BaseModule {
  /**
   * Get get for diagnostics ping
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/ping/get`);
  }

  /**
   * Execute remove for diagnostics ping
   */
  async remove(jobid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/ping/remove/${jobid}`, data);
  }

  /**
   * Get search jobs for diagnostics ping
   */
  async searchJobs(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/diagnostics/diagnostics/ping/search_jobs`);
  }

  /**
   * Execute set for diagnostics ping
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/ping/set`, data);
  }

  /**
   * Execute start for diagnostics ping
   */
  async start(jobid: string, data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/diagnostics/diagnostics/ping/start/${jobid}`, data);
  }

  /**
   * Execute stop for diagnostics ping
   */
  async stop(jobid: string, data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/diagnostics/diagnostics/ping/stop/${jobid}`, data);
  }
}

export class DiagnosticsPortprobe extends BaseModule {
  /**
   * Get get for diagnostics portprobe
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/portprobe/get`);
  }

  /**
   * Execute set for diagnostics portprobe
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/portprobe/set`, data);
  }
}

export class DiagnosticsSystem extends BaseModule {
  /**
   * Get memory for diagnostics system
   */
  async memory(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/system/memory`);
  }

  /**
   * Get system disk for diagnostics system
   */
  async systemDisk(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/system/system_disk`);
  }

  /**
   * Get system information for diagnostics system
   */
  async systemInformation(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/system/system_information`);
  }

  /**
   * Get system mbuf for diagnostics system
   */
  async systemMbuf(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/system/system_mbuf`);
  }

  /**
   * Get system resources for diagnostics system
   */
  async systemResources(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/system/system_resources`);
  }

  /**
   * Get system swap for diagnostics system
   */
  async systemSwap(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/system/system_swap`);
  }

  /**
   * Get system temperature for diagnostics system
   */
  async systemTemperature(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/system/system_temperature`);
  }

  /**
   * Get system time for diagnostics system
   */
  async systemTime(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/system/system_time`);
  }
}

export class DiagnosticsSystemhealth extends BaseModule {
  /**
   * Get export as c s v for diagnostics systemhealth
   */
  async exportAsCSV(rrd: string, detail: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/systemhealth/export_as_c_s_v/${rrd}/${detail}`);
  }

  /**
   * Get get interfaces for diagnostics systemhealth
   */
  async getInterfaces(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/systemhealth/get_interfaces`);
  }

  /**
   * Get get r r dlist for diagnostics systemhealth
   */
  async getRRDlist(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/systemhealth/get_r_r_dlist`);
  }

  /**
   * Get get system health for diagnostics systemhealth
   */
  async getSystemHealth(rrd: string, unused: string, detail: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/systemhealth/get_system_health/${rrd}/${unused}/${detail}`);
  }
}

export class DiagnosticsTraceroute extends BaseModule {
  /**
   * Get get for diagnostics traceroute
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/traceroute/get`);
  }

  /**
   * Execute set for diagnostics traceroute
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/diagnostics/traceroute/set`, data);
  }
}

export class DiagnosticsTraffic extends BaseModule {
  /**
   * Get  interface for diagnostics traffic
   */
  async interface(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/traffic/_interface`);
  }

  /**
   * Get  top for diagnostics traffic
   */
  async top(interfaces: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/traffic/_top/${interfaces}`);
  }

  /**
   * Get stream for diagnostics traffic
   */
  async stream(poll_interval: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/diagnostics/traffic/stream/${poll_interval}`);
  }
}

// Main module class
export class DiagnosticsModule extends BaseModule {
  public readonly activity: DiagnosticsActivity;
  public readonly cpuUsage: DiagnosticsCpuUsage;
  public readonly dns: DiagnosticsDns;
  public readonly dnsDiagnostics: DiagnosticsDnsDiagnostics;
  public readonly firewall: DiagnosticsFirewall;
  public readonly interface: DiagnosticsInterface;
  public readonly lvtemplate: DiagnosticsLvtemplate;
  public readonly netflow: DiagnosticsNetflow;
  public readonly networkinsight: DiagnosticsNetworkinsight;
  public readonly packetCapture: DiagnosticsPacketCapture;
  public readonly ping: DiagnosticsPing;
  public readonly portprobe: DiagnosticsPortprobe;
  public readonly system: DiagnosticsSystem;
  public readonly systemhealth: DiagnosticsSystemhealth;
  public readonly traceroute: DiagnosticsTraceroute;
  public readonly traffic: DiagnosticsTraffic;

  constructor(http: any) {
    super(http);
    this.activity = new DiagnosticsActivity(http);
    this.cpuUsage = new DiagnosticsCpuUsage(http);
    this.dns = new DiagnosticsDns(http);
    this.dnsDiagnostics = new DiagnosticsDnsDiagnostics(http);
    this.firewall = new DiagnosticsFirewall(http);
    this.interface = new DiagnosticsInterface(http);
    this.lvtemplate = new DiagnosticsLvtemplate(http);
    this.netflow = new DiagnosticsNetflow(http);
    this.networkinsight = new DiagnosticsNetworkinsight(http);
    this.packetCapture = new DiagnosticsPacketCapture(http);
    this.ping = new DiagnosticsPing(http);
    this.portprobe = new DiagnosticsPortprobe(http);
    this.system = new DiagnosticsSystem(http);
    this.systemhealth = new DiagnosticsSystemhealth(http);
    this.traceroute = new DiagnosticsTraceroute(http);
    this.traffic = new DiagnosticsTraffic(http);
  }

}