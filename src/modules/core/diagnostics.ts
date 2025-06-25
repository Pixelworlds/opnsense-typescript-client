import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class DiagnosticsActivity {
  constructor(private http: any) {}

  async getActivity(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/activity/get_activity');
  }
}

export class DiagnosticsCpuUsage {
  constructor(private http: any) {}

  async getCpuType(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/cpu_usage/get_c_p_u_type');
  }

  async stream(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/cpu_usage/stream');
  }
}

export class DiagnosticsDns {
  constructor(private http: any) {}

  async reverseLookup(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/dns/reverse_lookup', params);
  }
}

export class DiagnosticsDnsDiagnostics {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/dns_diagnostics/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/diagnostics/dns_diagnostics/set', config);
  }
}

export class DiagnosticsFirewall {
  constructor(private http: any) {}

  async deleteState(stateId: string, creatorId: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/firewall/del_state/${stateId}/${creatorId}`);
  }

  async flushStates(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/diagnostics/firewall/flush_states');
  }

  async getLog(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/firewall/log', params);
  }

  async getPfStates(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/firewall/pf_states', params);
  }

  async queryStates(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/firewall/query_states', params);
  }

  async getPfStatistics(section?: string): Promise<ApiResponse<any>> {
    const path = section
      ? `/api/diagnostics/firewall/pf_statistics/${section}`
      : '/api/diagnostics/firewall/pf_statistics';
    return this.http.get(path);
  }

  async killStates(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/firewall/kill_states', params);
  }

  async streamLog(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/firewall/stream_log');
  }

  async getLogFilters(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/firewall/log_filters');
  }

  async getStats(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/firewall/stats');
  }
}

export class DiagnosticsInterface {
  constructor(private http: any) {}

  async flushArp(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/diagnostics/interface/flush_arp');
  }

  async getArp(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/interface/get_arp');
  }

  async searchArp(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/interface/search_arp', params);
  }

  async getNdp(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/interface/get_ndp');
  }

  async searchNdp(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/interface/search_ndp', params);
  }

  async getRoutes(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/interface/get_routes');
  }

  async deleteRoute(params: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/diagnostics/interface/del_route', params);
  }

  async getInterfaceStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/interface/get_interface_statistics');
  }

  async getInterfaceConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/interface/get_interface_config');
  }
}

export class DiagnosticsLvtemplate {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/lvtemplate/search_item', params);
  }

  async add(template: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/diagnostics/lvtemplate/add_item', template);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/diagnostics/lvtemplate/get_item/${uuid}` : '/api/diagnostics/lvtemplate/get';
    return this.http.get(path);
  }

  async set(uuid: string, template: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/lvtemplate/set_item/${uuid}`, template);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/lvtemplate/del_item/${uuid}`);
  }
}

export class DiagnosticsNetflow {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/netflow/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/diagnostics/netflow/set', config);
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/netflow/status');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/diagnostics/netflow/reconfigure');
  }
}

export class DiagnosticsNetworkinsight {
  constructor(private http: any) {}

  async getMetadata(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/networkinsight/get_metadata');
  }

  async getInterfaces(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/networkinsight/get_interfaces');
  }

  async getServices(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/networkinsight/get_services');
  }

  async getTimeseries(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/networkinsight/get_timeseries', params);
  }

  async getTopFlows(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/networkinsight/get_top_flows', params);
  }
}

export class DiagnosticsPacketCapture {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/packet_capture/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/diagnostics/packet_capture/set', config);
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/diagnostics/packet_capture/start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/diagnostics/packet_capture/stop');
  }

  async getStatus(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/packet_capture/status');
  }

  async download(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/packet_capture/download');
  }

  async remove(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/diagnostics/packet_capture/remove');
  }
}

export class DiagnosticsPing {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/ping/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/diagnostics/ping/set', config);
  }

  async ping(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/ping/ping', params);
  }

  async getJob(jobId: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/ping/get_job/${jobId}`);
  }

  async stopJob(jobId: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/ping/stop_job/${jobId}`);
  }
}

export class DiagnosticsPortprobe {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/portprobe/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/diagnostics/portprobe/set', config);
  }
}

export class DiagnosticsSystem {
  constructor(private http: any) {}

  async getSystemInformation(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/system_information');
  }

  async getMemory(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/memory');
  }

  async getDisk(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/system_disk');
  }

  async getSystemResources(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/system_resources');
  }

  async getTemperature(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/system_temperature');
  }

  async getSystemTime(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/system_time');
  }

  async getSwap(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/system_swap');
  }

  async getMbuf(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/system_mbuf');
  }

  async getLoad(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/system_load');
  }
}

export class DiagnosticsSystemhealth {
  constructor(private http: any) {}

  async getRrdList(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/systemhealth/get_rrd_list');
  }

  async getRrdData(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/systemhealth/get_rrd_data', params);
  }

  async exportRrd(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/systemhealth/export_rrd', params);
  }

  async getInfo(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/systemhealth/get_info');
  }
}

export class DiagnosticsTraceroute {
  constructor(private http: any) {}

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/traceroute/get');
  }

  async set(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/diagnostics/traceroute/set', config);
  }

  async traceroute(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/traceroute/traceroute', params);
  }

  async getJob(jobId: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/traceroute/get_job/${jobId}`);
  }

  async stopJob(jobId: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/diagnostics/traceroute/stop_job/${jobId}`);
  }
}

export class DiagnosticsTraffic {
  constructor(private http: any) {}

  async getInterface(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/traffic/interface');
  }

  async getTop(interfaces: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/traffic/top/${interfaces}`);
  }

  async stream(pollInterval: number = 1): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/traffic/stream/${pollInterval}`);
  }
}

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

  constructor(httpClient: any) {
    super(httpClient);
    this.activity = new DiagnosticsActivity(this.http);
    this.cpuUsage = new DiagnosticsCpuUsage(this.http);
    this.dns = new DiagnosticsDns(this.http);
    this.dnsDiagnostics = new DiagnosticsDnsDiagnostics(this.http);
    this.firewall = new DiagnosticsFirewall(this.http);
    this.interface = new DiagnosticsInterface(this.http);
    this.lvtemplate = new DiagnosticsLvtemplate(this.http);
    this.netflow = new DiagnosticsNetflow(this.http);
    this.networkinsight = new DiagnosticsNetworkinsight(this.http);
    this.packetCapture = new DiagnosticsPacketCapture(this.http);
    this.ping = new DiagnosticsPing(this.http);
    this.portprobe = new DiagnosticsPortprobe(this.http);
    this.system = new DiagnosticsSystem(this.http);
    this.systemhealth = new DiagnosticsSystemhealth(this.http);
    this.traceroute = new DiagnosticsTraceroute(this.http);
    this.traffic = new DiagnosticsTraffic(this.http);
  }

  // Legacy methods for backward compatibility
  async getSystemInformation(): Promise<ApiResponse<any>> {
    return this.system.getSystemInformation();
  }

  async getMemory(): Promise<ApiResponse<any>> {
    return this.system.getMemory();
  }

  async getDisk(): Promise<ApiResponse<any>> {
    return this.system.getDisk();
  }

  async getSystemResources(): Promise<ApiResponse<any>> {
    return this.system.getSystemResources();
  }

  async getTemperature(): Promise<ApiResponse<any>> {
    return this.system.getTemperature();
  }

  async getSystemTime(): Promise<ApiResponse<any>> {
    return this.system.getSystemTime();
  }

  async getSwap(): Promise<ApiResponse<any>> {
    return this.system.getSwap();
  }

  async getMbuf(): Promise<ApiResponse<any>> {
    return this.system.getMbuf();
  }

  async getFirewallStats(): Promise<ApiResponse<any>> {
    return this.firewall.getStats();
  }

  async getFirewallLogs(): Promise<ApiResponse<any>> {
    return this.firewall.getLog();
  }

  async streamFirewallLogs(): Promise<ApiResponse<any>> {
    return this.firewall.streamLog();
  }

  async getFirewallLogFilters(): Promise<ApiResponse<any>> {
    return this.firewall.getLogFilters();
  }

  async getPfStates(): Promise<ApiResponse<any>> {
    return this.firewall.getPfStates();
  }

  async queryPfStates(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.firewall.queryStates(params);
  }

  async getPfStatistics(section?: string): Promise<ApiResponse<any>> {
    return this.firewall.getPfStatistics(section);
  }

  async flushFirewallStates(): Promise<ApiResponse<any>> {
    return this.firewall.flushStates();
  }

  async killFirewallStates(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.firewall.killStates(params);
  }

  async deleteFirewallState(stateId: string, creatorId: string): Promise<ApiResponse<any>> {
    return this.firewall.deleteState(stateId, creatorId);
  }

  async getInterfaceStatistics(): Promise<ApiResponse<any>> {
    return this.interface.getInterfaceStatistics();
  }

  async getInterfaceConfig(): Promise<ApiResponse<any>> {
    return this.interface.getInterfaceConfig();
  }

  async getArp(): Promise<ApiResponse<any>> {
    return this.interface.getArp();
  }

  async searchArp(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.interface.searchArp(params);
  }

  async flushArp(): Promise<ApiResponse<any>> {
    return this.interface.flushArp();
  }

  async getNdp(): Promise<ApiResponse<any>> {
    return this.interface.getNdp();
  }

  async searchNdp(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.interface.searchNdp(params);
  }

  async getRoutes(): Promise<ApiResponse<any>> {
    return this.interface.getRoutes();
  }

  async deleteRoute(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.interface.deleteRoute(params);
  }

  async getCpuUsageStream(): Promise<ApiResponse<any>> {
    return this.cpuUsage.stream();
  }

  async getCpuType(): Promise<ApiResponse<any>> {
    return this.cpuUsage.getCpuType();
  }

  async getTrafficInterface(): Promise<ApiResponse<any>> {
    return this.traffic.getInterface();
  }

  async getTopTraffic(interfaces: string): Promise<ApiResponse<any>> {
    return this.traffic.getTop(interfaces);
  }

  async streamTraffic(pollInterval: number = 1): Promise<ApiResponse<any>> {
    return this.traffic.stream(pollInterval);
  }

  async dnsLookup(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.dns.reverseLookup(params);
  }

  async getActivity(): Promise<ApiResponse<any>> {
    return this.activity.getActivity();
  }

  // New convenience methods
  async getSystemOverview(): Promise<{
    system: any;
    memory: any;
    disk: any;
    temperature: any;
    load: any;
    timestamp: string;
  }> {
    const [system, memory, disk, temperature, load] = await Promise.allSettled([
      this.getSystemInformation(),
      this.getMemory(),
      this.getDisk(),
      this.getTemperature(),
      this.system.getLoad().catch(() => ({ data: null })),
    ]);

    return {
      system: system.status === 'fulfilled' ? system.value.data : null,
      memory: memory.status === 'fulfilled' ? memory.value.data : null,
      disk: disk.status === 'fulfilled' ? disk.value.data : null,
      temperature: temperature.status === 'fulfilled' ? temperature.value.data : null,
      load: load.status === 'fulfilled' ? load.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }

  async getNetworkOverview(): Promise<{
    interfaces: any;
    arp: any;
    routes: any;
    traffic: any;
    timestamp: string;
  }> {
    const [interfaces, arp, routes, traffic] = await Promise.allSettled([
      this.getInterfaceStatistics(),
      this.getArp(),
      this.getRoutes(),
      this.getTrafficInterface(),
    ]);

    return {
      interfaces: interfaces.status === 'fulfilled' ? interfaces.value.data : null,
      arp: arp.status === 'fulfilled' ? arp.value.data : null,
      routes: routes.status === 'fulfilled' ? routes.value.data : null,
      traffic: traffic.status === 'fulfilled' ? traffic.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }

  async startPacketCapture(interface_name: string, filter?: string): Promise<ApiResponse<ApiResult>> {
    await this.packetCapture.set({
      interface: interface_name,
      filter: filter || '',
      count: 100,
    });
    return this.packetCapture.start();
  }

  async stopAndDownloadCapture(): Promise<{
    stop: ApiResponse<ApiResult>;
    download: ApiResponse<any>;
  }> {
    const stop = await this.packetCapture.stop();
    const download = await this.packetCapture.download();

    return { stop, download };
  }

  async quickPing(host: string, count: number = 4): Promise<ApiResponse<any>> {
    await this.ping.set({
      hostname: host,
      count: count.toString(),
    });
    return this.ping.ping({ hostname: host });
  }

  async quickTraceroute(host: string, maxHops: number = 30): Promise<ApiResponse<any>> {
    await this.traceroute.set({
      hostname: host,
      max_hops: maxHops.toString(),
    });
    return this.traceroute.traceroute({ hostname: host });
  }
}
