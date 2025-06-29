import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Diagnostics module

// Model field types

// Activity types
export interface DiagnosticsActivityGetActivityResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// CpuUsage types
export interface DiagnosticsCpuUsageGetCPUTypeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsCpuUsageStreamResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Dns types
export interface DiagnosticsDnsReverseLookupResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// DnsDiagnostics types
export interface DiagnosticsDnsDiagnosticsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsDnsDiagnosticsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsDnsDiagnosticsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Firewall types
export interface DiagnosticsFirewallDelStateRequest {
  uuid: string;
}

export interface DiagnosticsFirewallDelStateResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsFirewallFlushSourcesRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsFirewallFlushSourcesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsFirewallFlushStatesRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsFirewallFlushStatesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsFirewallKillStatesRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsFirewallKillStatesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsFirewallListRuleIdsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsFirewallLogResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsFirewallLogFiltersResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsFirewallPfStatesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsFirewallPfStatisticsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsFirewallQueryPfTopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsFirewallQueryPfTopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsFirewallQueryStatesRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsFirewallQueryStatesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsFirewallStatsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsFirewallStreamLogResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Interface types
export interface DiagnosticsInterfaceCarpStatusRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsInterfaceCarpStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceDelRouteRequest {
  uuid: string;
}

export interface DiagnosticsInterfaceDelRouteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceFlushArpRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsInterfaceFlushArpResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceGetArpResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceGetBpfStatisticsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceGetInterfaceConfigResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceGetInterfaceNamesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceGetInterfaceStatisticsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceGetMemoryStatisticsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceGetNdpResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceGetNetisrStatisticsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceGetPfsyncNodesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceGetProtocolStatisticsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceGetRoutesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceGetSocketStatisticsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceGetVipStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceSearchArpResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsInterfaceSearchNdpResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Lvtemplate types
export interface DiagnosticsLvtemplateAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsLvtemplateAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsLvtemplateDelItemRequest {
  uuid: string;
}

export interface DiagnosticsLvtemplateDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsLvtemplateGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsLvtemplateGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsLvtemplateSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsLvtemplateSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsLvtemplateSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsLvtemplateSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Netflow types
export interface DiagnosticsNetflowCacheStatsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsNetflowGetconfigResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsNetflowIsEnabledResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsNetflowReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsNetflowReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsNetflowSetconfigResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsNetflowStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Networkinsight types
export interface DiagnosticsNetworkinsightExportResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsNetworkinsightGetInterfacesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsNetworkinsightGetMetadataResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsNetworkinsightGetProtocolsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsNetworkinsightGetServicesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsNetworkinsightTimeserieResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsNetworkinsightTopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// PacketCapture types
export interface DiagnosticsPacketCaptureDownloadResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsPacketCaptureGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsPacketCaptureMacInfoResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsPacketCaptureRemoveRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsPacketCaptureRemoveResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsPacketCaptureSearchJobsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsPacketCaptureSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsPacketCaptureSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsPacketCaptureStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsPacketCaptureStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsPacketCaptureStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsPacketCaptureStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsPacketCaptureViewResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Ping types
export interface DiagnosticsPingGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsPingRemoveRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsPingRemoveResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsPingSearchJobsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsPingSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsPingSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsPingStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsPingStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsPingStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsPingStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Portprobe types
export interface DiagnosticsPortprobeGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsPortprobeSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsPortprobeSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// System types
export interface DiagnosticsSystemMemoryResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsSystemSystemDiskResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsSystemSystemInformationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsSystemSystemMbufResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsSystemSystemResourcesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsSystemSystemSwapResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsSystemSystemTemperatureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsSystemSystemTimeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Systemhealth types
export interface DiagnosticsSystemhealthExportAsCSVResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsSystemhealthGetInterfacesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsSystemhealthGetRRDlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsSystemhealthGetSystemHealthResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Traceroute types
export interface DiagnosticsTracerouteGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsTracerouteSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface DiagnosticsTracerouteSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Traffic types
export interface DiagnosticsTrafficInterfaceResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsTrafficTopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface DiagnosticsTrafficStreamResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class DiagnosticsApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/diagnostics';
  }

  // Activity methods
  async activityGetActivity(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsActivityGetActivityResponse>> {
    return this.client.get(`${this.basePath}/activity/get_activity`, config);
  }


  // CpuUsage methods
  async cpuUsageGetCPUType(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsCpuUsageGetCPUTypeResponse>> {
    return this.client.get(`${this.basePath}/cpu_usage/get_c_p_u_type`, config);
  }

  async cpuUsageStream(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsCpuUsageStreamResponse>> {
    return this.client.get(`${this.basePath}/cpu_usage/stream`, config);
  }


  // Dns methods
  async dnsReverseLookup(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsDnsReverseLookupResponse>> {
    return this.client.get(`${this.basePath}/dns/reverse_lookup`, config);
  }


  // DnsDiagnostics methods
  async dnsDiagnosticsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsDnsDiagnosticsGetResponse>> {
    return this.client.get(`${this.basePath}/dns_diagnostics/get`, config);
  }

  async dnsDiagnosticsSet(data?: DiagnosticsDnsDiagnosticsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsDnsDiagnosticsSetResponse>> {
    return this.client.post(`${this.basePath}/dns_diagnostics/set`, data, config);
  }


  // Firewall methods
  async firewallDelState(stateid: string, creatorid: string, data?: DiagnosticsFirewallDelStateRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsFirewallDelStateResponse>> {
    return this.client.post(`${this.basePath}/firewall/del_state/${stateid}/${creatorid}`, data, config);
  }

  async firewallFlushSources(data?: DiagnosticsFirewallFlushSourcesRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsFirewallFlushSourcesResponse>> {
    return this.client.post(`${this.basePath}/firewall/flush_sources`, data, config);
  }

  async firewallFlushStates(data?: DiagnosticsFirewallFlushStatesRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsFirewallFlushStatesResponse>> {
    return this.client.post(`${this.basePath}/firewall/flush_states`, data, config);
  }

  async firewallKillStates(data?: DiagnosticsFirewallKillStatesRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsFirewallKillStatesResponse>> {
    return this.client.post(`${this.basePath}/firewall/kill_states`, data, config);
  }

  async firewallListRuleIds(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsFirewallListRuleIdsResponse>> {
    return this.client.get(`${this.basePath}/firewall/list_rule_ids`, config);
  }

  async firewallLog(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsFirewallLogResponse>> {
    return this.client.get(`${this.basePath}/firewall/log`, config);
  }

  async firewallLogFilters(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsFirewallLogFiltersResponse>> {
    return this.client.get(`${this.basePath}/firewall/log_filters`, config);
  }

  async firewallPfStates(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsFirewallPfStatesResponse>> {
    return this.client.get(`${this.basePath}/firewall/pf_states`, config);
  }

  async firewallPfStatistics(section?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsFirewallPfStatisticsResponse>> {
    return this.client.get(`${this.basePath}/firewall/pf_statistics/${section}`, config);
  }

  async firewallQueryPfTop(data?: DiagnosticsFirewallQueryPfTopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsFirewallQueryPfTopResponse>> {
    return this.client.post(`${this.basePath}/firewall/query_pf_top`, data, config);
  }

  async firewallQueryStates(data?: DiagnosticsFirewallQueryStatesRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsFirewallQueryStatesResponse>> {
    return this.client.post(`${this.basePath}/firewall/query_states`, data, config);
  }

  async firewallStats(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsFirewallStatsResponse>> {
    return this.client.get(`${this.basePath}/firewall/stats`, config);
  }

  async firewallStreamLog(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsFirewallStreamLogResponse>> {
    return this.client.get(`${this.basePath}/firewall/stream_log`, config);
  }


  // Interface methods
  async interfaceCarpStatus(status: string, data?: DiagnosticsInterfaceCarpStatusRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceCarpStatusResponse>> {
    return this.client.post(`${this.basePath}/interface/_carp_status/${status}`, data, config);
  }

  async interfaceDelRoute(data?: DiagnosticsInterfaceDelRouteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceDelRouteResponse>> {
    return this.client.post(`${this.basePath}/interface/del_route`, data, config);
  }

  async interfaceFlushArp(data?: DiagnosticsInterfaceFlushArpRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceFlushArpResponse>> {
    return this.client.post(`${this.basePath}/interface/flush_arp`, data, config);
  }

  async interfaceGetArp(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceGetArpResponse>> {
    return this.client.get(`${this.basePath}/interface/get_arp`, config);
  }

  async interfaceGetBpfStatistics(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceGetBpfStatisticsResponse>> {
    return this.client.get(`${this.basePath}/interface/get_bpf_statistics`, config);
  }

  async interfaceGetInterfaceConfig(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceGetInterfaceConfigResponse>> {
    return this.client.get(`${this.basePath}/interface/get_interface_config`, config);
  }

  async interfaceGetInterfaceNames(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceGetInterfaceNamesResponse>> {
    return this.client.get(`${this.basePath}/interface/get_interface_names`, config);
  }

  async interfaceGetInterfaceStatistics(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceGetInterfaceStatisticsResponse>> {
    return this.client.get(`${this.basePath}/interface/get_interface_statistics`, config);
  }

  async interfaceGetMemoryStatistics(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceGetMemoryStatisticsResponse>> {
    return this.client.get(`${this.basePath}/interface/get_memory_statistics`, config);
  }

  async interfaceGetNdp(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceGetNdpResponse>> {
    return this.client.get(`${this.basePath}/interface/get_ndp`, config);
  }

  async interfaceGetNetisrStatistics(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceGetNetisrStatisticsResponse>> {
    return this.client.get(`${this.basePath}/interface/get_netisr_statistics`, config);
  }

  async interfaceGetPfsyncNodes(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceGetPfsyncNodesResponse>> {
    return this.client.get(`${this.basePath}/interface/get_pfsync_nodes`, config);
  }

  async interfaceGetProtocolStatistics(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceGetProtocolStatisticsResponse>> {
    return this.client.get(`${this.basePath}/interface/get_protocol_statistics`, config);
  }

  async interfaceGetRoutes(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceGetRoutesResponse>> {
    return this.client.get(`${this.basePath}/interface/get_routes`, config);
  }

  async interfaceGetSocketStatistics(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceGetSocketStatisticsResponse>> {
    return this.client.get(`${this.basePath}/interface/get_socket_statistics`, config);
  }

  async interfaceGetVipStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceGetVipStatusResponse>> {
    return this.client.get(`${this.basePath}/interface/get_vip_status`, config);
  }

  async interfaceSearchArp(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceSearchArpResponse>> {
    return this.client.get(`${this.basePath}/interface/search_arp`, config);
  }

  async interfaceSearchNdp(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsInterfaceSearchNdpResponse>> {
    return this.client.get(`${this.basePath}/interface/search_ndp`, config);
  }


  // Lvtemplate methods
  async lvtemplateAddItem(data?: DiagnosticsLvtemplateAddItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsLvtemplateAddItemResponse>> {
    return this.client.post(`${this.basePath}/lvtemplate/add_item`, data, config);
  }

  async lvtemplateDelItem(uuid: string, data?: DiagnosticsLvtemplateDelItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsLvtemplateDelItemResponse>> {
    return this.client.post(`${this.basePath}/lvtemplate/del_item/${uuid}`, data, config);
  }

  async lvtemplateGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsLvtemplateGetResponse>> {
    return this.client.get(`${this.basePath}/lvtemplate/get`, config);
  }

  async lvtemplateGetItem(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsLvtemplateGetItemResponse>> {
    return this.client.get(`${this.basePath}/lvtemplate/get_item/${uuid}`, config);
  }

  async lvtemplateSet(data?: DiagnosticsLvtemplateSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsLvtemplateSetResponse>> {
    return this.client.post(`${this.basePath}/lvtemplate/set`, data, config);
  }

  async lvtemplateSetItem(uuid: string, data?: DiagnosticsLvtemplateSetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsLvtemplateSetItemResponse>> {
    return this.client.post(`${this.basePath}/lvtemplate/set_item/${uuid}`, data, config);
  }


  // Netflow methods
  async netflowCacheStats(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsNetflowCacheStatsResponse>> {
    return this.client.get(`${this.basePath}/netflow/cache_stats`, config);
  }

  async netflowGetconfig(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsNetflowGetconfigResponse>> {
    return this.client.get(`${this.basePath}/netflow/getconfig`, config);
  }

  async netflowIsEnabled(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsNetflowIsEnabledResponse>> {
    return this.client.get(`${this.basePath}/netflow/is_enabled`, config);
  }

  async netflowReconfigure(data?: DiagnosticsNetflowReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsNetflowReconfigureResponse>> {
    return this.client.post(`${this.basePath}/netflow/reconfigure`, data, config);
  }

  async netflowSetconfig(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsNetflowSetconfigResponse>> {
    return this.client.get(`${this.basePath}/netflow/setconfig`, config);
  }

  async netflowStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsNetflowStatusResponse>> {
    return this.client.get(`${this.basePath}/netflow/status`, config);
  }


  // Networkinsight methods
  async networkinsightExport(provider?: string, fromDate?: string, toDate?: string, resolution?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsNetworkinsightExportResponse>> {
    return this.client.get(`${this.basePath}/networkinsight/export/${provider}/${fromDate}/${toDate}/${resolution}`, config);
  }

  async networkinsightGetInterfaces(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsNetworkinsightGetInterfacesResponse>> {
    return this.client.get(`${this.basePath}/networkinsight/get_interfaces`, config);
  }

  async networkinsightGetMetadata(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsNetworkinsightGetMetadataResponse>> {
    return this.client.get(`${this.basePath}/networkinsight/get_metadata`, config);
  }

  async networkinsightGetProtocols(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsNetworkinsightGetProtocolsResponse>> {
    return this.client.get(`${this.basePath}/networkinsight/get_protocols`, config);
  }

  async networkinsightGetServices(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsNetworkinsightGetServicesResponse>> {
    return this.client.get(`${this.basePath}/networkinsight/get_services`, config);
  }

  async networkinsightTimeserie(provider?: string, measure?: string, fromDate?: string, toDate?: string, resolution?: string, field?: string, emulation?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsNetworkinsightTimeserieResponse>> {
    return this.client.get(`${this.basePath}/networkinsight/timeserie/${provider}/${measure}/${fromDate}/${toDate}/${resolution}/${field}/${emulation}`, config);
  }

  async networkinsightTop(provider?: string, fromDate?: string, toDate?: string, field?: string, measure?: string, maxHits?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsNetworkinsightTopResponse>> {
    return this.client.get(`${this.basePath}/networkinsight/top/${provider}/${fromDate}/${toDate}/${field}/${measure}/${maxHits}`, config);
  }


  // PacketCapture methods
  async packetCaptureDownload(jobid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPacketCaptureDownloadResponse>> {
    return this.client.get(`${this.basePath}/packet_capture/download/${jobid}`, config);
  }

  async packetCaptureGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPacketCaptureGetResponse>> {
    return this.client.get(`${this.basePath}/packet_capture/get`, config);
  }

  async packetCaptureMacInfo(macaddr: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPacketCaptureMacInfoResponse>> {
    return this.client.get(`${this.basePath}/packet_capture/mac_info/${macaddr}`, config);
  }

  async packetCaptureRemove(jobid: string, data?: DiagnosticsPacketCaptureRemoveRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPacketCaptureRemoveResponse>> {
    return this.client.post(`${this.basePath}/packet_capture/remove/${jobid}`, data, config);
  }

  async packetCaptureSearchJobs(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPacketCaptureSearchJobsResponse>> {
    return this.client.get(`${this.basePath}/packet_capture/search_jobs`, config);
  }

  async packetCaptureSet(data?: DiagnosticsPacketCaptureSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPacketCaptureSetResponse>> {
    return this.client.post(`${this.basePath}/packet_capture/set`, data, config);
  }

  async packetCaptureStart(jobid: string, data?: DiagnosticsPacketCaptureStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPacketCaptureStartResponse>> {
    return this.client.post(`${this.basePath}/packet_capture/start/${jobid}`, data, config);
  }

  async packetCaptureStop(jobid: string, data?: DiagnosticsPacketCaptureStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPacketCaptureStopResponse>> {
    return this.client.post(`${this.basePath}/packet_capture/stop/${jobid}`, data, config);
  }

  async packetCaptureView(jobid: string, detail?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPacketCaptureViewResponse>> {
    return this.client.get(`${this.basePath}/packet_capture/view/${jobid}/${detail}`, config);
  }


  // Ping methods
  async pingGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPingGetResponse>> {
    return this.client.get(`${this.basePath}/ping/get`, config);
  }

  async pingRemove(jobid: string, data?: DiagnosticsPingRemoveRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPingRemoveResponse>> {
    return this.client.post(`${this.basePath}/ping/remove/${jobid}`, data, config);
  }

  async pingSearchJobs(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPingSearchJobsResponse>> {
    return this.client.get(`${this.basePath}/ping/search_jobs`, config);
  }

  async pingSet(data?: DiagnosticsPingSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPingSetResponse>> {
    return this.client.post(`${this.basePath}/ping/set`, data, config);
  }

  async pingStart(jobid: string, data?: DiagnosticsPingStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPingStartResponse>> {
    return this.client.post(`${this.basePath}/ping/start/${jobid}`, data, config);
  }

  async pingStop(jobid: string, data?: DiagnosticsPingStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPingStopResponse>> {
    return this.client.post(`${this.basePath}/ping/stop/${jobid}`, data, config);
  }


  // Portprobe methods
  async portprobeGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPortprobeGetResponse>> {
    return this.client.get(`${this.basePath}/portprobe/get`, config);
  }

  async portprobeSet(data?: DiagnosticsPortprobeSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsPortprobeSetResponse>> {
    return this.client.post(`${this.basePath}/portprobe/set`, data, config);
  }


  // System methods
  async systemMemory(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsSystemMemoryResponse>> {
    return this.client.get(`${this.basePath}/system/memory`, config);
  }

  async systemSystemDisk(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsSystemSystemDiskResponse>> {
    return this.client.get(`${this.basePath}/system/system_disk`, config);
  }

  async systemSystemInformation(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsSystemSystemInformationResponse>> {
    return this.client.get(`${this.basePath}/system/system_information`, config);
  }

  async systemSystemMbuf(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsSystemSystemMbufResponse>> {
    return this.client.get(`${this.basePath}/system/system_mbuf`, config);
  }

  async systemSystemResources(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsSystemSystemResourcesResponse>> {
    return this.client.get(`${this.basePath}/system/system_resources`, config);
  }

  async systemSystemSwap(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsSystemSystemSwapResponse>> {
    return this.client.get(`${this.basePath}/system/system_swap`, config);
  }

  async systemSystemTemperature(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsSystemSystemTemperatureResponse>> {
    return this.client.get(`${this.basePath}/system/system_temperature`, config);
  }

  async systemSystemTime(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsSystemSystemTimeResponse>> {
    return this.client.get(`${this.basePath}/system/system_time`, config);
  }


  // Systemhealth methods
  async systemhealthExportAsCSV(rrd?: string, detail?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsSystemhealthExportAsCSVResponse>> {
    return this.client.get(`${this.basePath}/systemhealth/export_as_c_s_v/${rrd}/${detail}`, config);
  }

  async systemhealthGetInterfaces(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsSystemhealthGetInterfacesResponse>> {
    return this.client.get(`${this.basePath}/systemhealth/get_interfaces`, config);
  }

  async systemhealthGetRRDlist(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsSystemhealthGetRRDlistResponse>> {
    return this.client.get(`${this.basePath}/systemhealth/get_r_r_dlist`, config);
  }

  async systemhealthGetSystemHealth(rrd?: string, unused?: string, detail?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsSystemhealthGetSystemHealthResponse>> {
    return this.client.get(`${this.basePath}/systemhealth/get_system_health/${rrd}/${unused}/${detail}`, config);
  }


  // Traceroute methods
  async tracerouteGet(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsTracerouteGetResponse>> {
    return this.client.get(`${this.basePath}/traceroute/get`, config);
  }

  async tracerouteSet(data?: DiagnosticsTracerouteSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsTracerouteSetResponse>> {
    return this.client.post(`${this.basePath}/traceroute/set`, data, config);
  }


  // Traffic methods
  async trafficInterface(config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsTrafficInterfaceResponse>> {
    return this.client.get(`${this.basePath}/traffic/_interface`, config);
  }

  async trafficTop(interfaces: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsTrafficTopResponse>> {
    return this.client.get(`${this.basePath}/traffic/_top/${interfaces}`, config);
  }

  async trafficStream(pollInterval?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<DiagnosticsTrafficStreamResponse>> {
    return this.client.get(`${this.basePath}/traffic/stream/${pollInterval}`, config);
  }

}
