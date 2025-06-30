import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Activity methods
  async activityGetActivity(config?: RequestConfig): Promise<ApiResponse<DiagnosticsActivityGetActivityResponse>> {
    return this.http.get(`/api/diagnostics/activity/get_activity`, config);
  }


  // CpuUsage methods
  async cpuUsageGetCPUType(config?: RequestConfig): Promise<ApiResponse<DiagnosticsCpuUsageGetCPUTypeResponse>> {
    return this.http.get(`/api/diagnostics/cpu_usage/get_c_p_u_type`, config);
  }

  async cpuUsageStream(config?: RequestConfig): Promise<ApiResponse<DiagnosticsCpuUsageStreamResponse>> {
    return this.http.get(`/api/diagnostics/cpu_usage/stream`, config);
  }


  // Dns methods
  async dnsReverseLookup(config?: RequestConfig): Promise<ApiResponse<DiagnosticsDnsReverseLookupResponse>> {
    return this.http.get(`/api/diagnostics/dns/reverse_lookup`, config);
  }


  // DnsDiagnostics methods
  async dnsDiagnosticsGet(config?: RequestConfig): Promise<ApiResponse<DiagnosticsDnsDiagnosticsGetResponse>> {
    return this.http.get(`/api/diagnostics/dns_diagnostics/get`, config);
  }

  async dnsDiagnosticsSet(data?: DiagnosticsDnsDiagnosticsSetRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsDnsDiagnosticsSetResponse>> {
    return this.http.post(`/api/diagnostics/dns_diagnostics/set`, data, config);
  }


  // Firewall methods
  async firewallDelState(stateid: string, creatorid: string, data?: DiagnosticsFirewallDelStateRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsFirewallDelStateResponse>> {
    return this.http.post(`/api/diagnostics/firewall/del_state/${stateid}/${creatorid}`, data, config);
  }

  async firewallFlushSources(data?: DiagnosticsFirewallFlushSourcesRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsFirewallFlushSourcesResponse>> {
    return this.http.post(`/api/diagnostics/firewall/flush_sources`, data, config);
  }

  async firewallFlushStates(data?: DiagnosticsFirewallFlushStatesRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsFirewallFlushStatesResponse>> {
    return this.http.post(`/api/diagnostics/firewall/flush_states`, data, config);
  }

  async firewallKillStates(data?: DiagnosticsFirewallKillStatesRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsFirewallKillStatesResponse>> {
    return this.http.post(`/api/diagnostics/firewall/kill_states`, data, config);
  }

  async firewallListRuleIds(config?: RequestConfig): Promise<ApiResponse<DiagnosticsFirewallListRuleIdsResponse>> {
    return this.http.get(`/api/diagnostics/firewall/list_rule_ids`, config);
  }

  async firewallLog(config?: RequestConfig): Promise<ApiResponse<DiagnosticsFirewallLogResponse>> {
    return this.http.get(`/api/diagnostics/firewall/log`, config);
  }

  async firewallLogFilters(config?: RequestConfig): Promise<ApiResponse<DiagnosticsFirewallLogFiltersResponse>> {
    return this.http.get(`/api/diagnostics/firewall/log_filters`, config);
  }

  async firewallPfStates(config?: RequestConfig): Promise<ApiResponse<DiagnosticsFirewallPfStatesResponse>> {
    return this.http.get(`/api/diagnostics/firewall/pf_states`, config);
  }

  async firewallPfStatistics(section?: string, config?: RequestConfig): Promise<ApiResponse<DiagnosticsFirewallPfStatisticsResponse>> {
    return this.http.get(`/api/diagnostics/firewall/pf_statistics/${section}`, config);
  }

  async firewallQueryPfTop(data?: DiagnosticsFirewallQueryPfTopRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsFirewallQueryPfTopResponse>> {
    return this.http.post(`/api/diagnostics/firewall/query_pf_top`, data, config);
  }

  async firewallQueryStates(data?: DiagnosticsFirewallQueryStatesRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsFirewallQueryStatesResponse>> {
    return this.http.post(`/api/diagnostics/firewall/query_states`, data, config);
  }

  async firewallStats(config?: RequestConfig): Promise<ApiResponse<DiagnosticsFirewallStatsResponse>> {
    return this.http.get(`/api/diagnostics/firewall/stats`, config);
  }

  async firewallStreamLog(config?: RequestConfig): Promise<ApiResponse<DiagnosticsFirewallStreamLogResponse>> {
    return this.http.get(`/api/diagnostics/firewall/stream_log`, config);
  }


  // Interface methods
  async interfaceCarpStatus(status: string, data?: DiagnosticsInterfaceCarpStatusRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceCarpStatusResponse>> {
    return this.http.post(`/api/diagnostics/interface/_carp_status/${status}`, data, config);
  }

  async interfaceDelRoute(data?: DiagnosticsInterfaceDelRouteRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceDelRouteResponse>> {
    return this.http.post(`/api/diagnostics/interface/del_route`, data, config);
  }

  async interfaceFlushArp(data?: DiagnosticsInterfaceFlushArpRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceFlushArpResponse>> {
    return this.http.post(`/api/diagnostics/interface/flush_arp`, data, config);
  }

  async interfaceGetArp(config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceGetArpResponse>> {
    return this.http.get(`/api/diagnostics/interface/get_arp`, config);
  }

  async interfaceGetBpfStatistics(config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceGetBpfStatisticsResponse>> {
    return this.http.get(`/api/diagnostics/interface/get_bpf_statistics`, config);
  }

  async interfaceGetInterfaceConfig(config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceGetInterfaceConfigResponse>> {
    return this.http.get(`/api/diagnostics/interface/get_interface_config`, config);
  }

  async interfaceGetInterfaceNames(config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceGetInterfaceNamesResponse>> {
    return this.http.get(`/api/diagnostics/interface/get_interface_names`, config);
  }

  async interfaceGetInterfaceStatistics(config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceGetInterfaceStatisticsResponse>> {
    return this.http.get(`/api/diagnostics/interface/get_interface_statistics`, config);
  }

  async interfaceGetMemoryStatistics(config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceGetMemoryStatisticsResponse>> {
    return this.http.get(`/api/diagnostics/interface/get_memory_statistics`, config);
  }

  async interfaceGetNdp(config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceGetNdpResponse>> {
    return this.http.get(`/api/diagnostics/interface/get_ndp`, config);
  }

  async interfaceGetNetisrStatistics(config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceGetNetisrStatisticsResponse>> {
    return this.http.get(`/api/diagnostics/interface/get_netisr_statistics`, config);
  }

  async interfaceGetPfsyncNodes(config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceGetPfsyncNodesResponse>> {
    return this.http.get(`/api/diagnostics/interface/get_pfsync_nodes`, config);
  }

  async interfaceGetProtocolStatistics(config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceGetProtocolStatisticsResponse>> {
    return this.http.get(`/api/diagnostics/interface/get_protocol_statistics`, config);
  }

  async interfaceGetRoutes(config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceGetRoutesResponse>> {
    return this.http.get(`/api/diagnostics/interface/get_routes`, config);
  }

  async interfaceGetSocketStatistics(config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceGetSocketStatisticsResponse>> {
    return this.http.get(`/api/diagnostics/interface/get_socket_statistics`, config);
  }

  async interfaceGetVipStatus(config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceGetVipStatusResponse>> {
    return this.http.get(`/api/diagnostics/interface/get_vip_status`, config);
  }

  async interfaceSearchArp(config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceSearchArpResponse>> {
    return this.http.get(`/api/diagnostics/interface/search_arp`, config);
  }

  async interfaceSearchNdp(config?: RequestConfig): Promise<ApiResponse<DiagnosticsInterfaceSearchNdpResponse>> {
    return this.http.get(`/api/diagnostics/interface/search_ndp`, config);
  }


  // Lvtemplate methods
  async lvtemplateAddItem(data?: DiagnosticsLvtemplateAddItemRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsLvtemplateAddItemResponse>> {
    return this.http.post(`/api/diagnostics/lvtemplate/add_item`, data, config);
  }

  async lvtemplateDelItem(uuid: string, data?: DiagnosticsLvtemplateDelItemRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsLvtemplateDelItemResponse>> {
    return this.http.post(`/api/diagnostics/lvtemplate/del_item/${uuid}`, data, config);
  }

  async lvtemplateGet(config?: RequestConfig): Promise<ApiResponse<DiagnosticsLvtemplateGetResponse>> {
    return this.http.get(`/api/diagnostics/lvtemplate/get`, config);
  }

  async lvtemplateGetItem(uuid?: string, config?: RequestConfig): Promise<ApiResponse<DiagnosticsLvtemplateGetItemResponse>> {
    return this.http.get(`/api/diagnostics/lvtemplate/get_item/${uuid}`, config);
  }

  async lvtemplateSet(data?: DiagnosticsLvtemplateSetRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsLvtemplateSetResponse>> {
    return this.http.post(`/api/diagnostics/lvtemplate/set`, data, config);
  }

  async lvtemplateSetItem(uuid: string, data?: DiagnosticsLvtemplateSetItemRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsLvtemplateSetItemResponse>> {
    return this.http.post(`/api/diagnostics/lvtemplate/set_item/${uuid}`, data, config);
  }


  // Netflow methods
  async netflowCacheStats(config?: RequestConfig): Promise<ApiResponse<DiagnosticsNetflowCacheStatsResponse>> {
    return this.http.get(`/api/diagnostics/netflow/cache_stats`, config);
  }

  async netflowGetconfig(config?: RequestConfig): Promise<ApiResponse<DiagnosticsNetflowGetconfigResponse>> {
    return this.http.get(`/api/diagnostics/netflow/getconfig`, config);
  }

  async netflowIsEnabled(config?: RequestConfig): Promise<ApiResponse<DiagnosticsNetflowIsEnabledResponse>> {
    return this.http.get(`/api/diagnostics/netflow/is_enabled`, config);
  }

  async netflowReconfigure(data?: DiagnosticsNetflowReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsNetflowReconfigureResponse>> {
    return this.http.post(`/api/diagnostics/netflow/reconfigure`, data, config);
  }

  async netflowSetconfig(config?: RequestConfig): Promise<ApiResponse<DiagnosticsNetflowSetconfigResponse>> {
    return this.http.get(`/api/diagnostics/netflow/setconfig`, config);
  }

  async netflowStatus(config?: RequestConfig): Promise<ApiResponse<DiagnosticsNetflowStatusResponse>> {
    return this.http.get(`/api/diagnostics/netflow/status`, config);
  }


  // Networkinsight methods
  async networkinsightExport(provider?: string, fromDate?: string, toDate?: string, resolution?: string, config?: RequestConfig): Promise<ApiResponse<DiagnosticsNetworkinsightExportResponse>> {
    return this.http.get(`/api/diagnostics/networkinsight/export/${provider}/${fromDate}/${toDate}/${resolution}`, config);
  }

  async networkinsightGetInterfaces(config?: RequestConfig): Promise<ApiResponse<DiagnosticsNetworkinsightGetInterfacesResponse>> {
    return this.http.get(`/api/diagnostics/networkinsight/get_interfaces`, config);
  }

  async networkinsightGetMetadata(config?: RequestConfig): Promise<ApiResponse<DiagnosticsNetworkinsightGetMetadataResponse>> {
    return this.http.get(`/api/diagnostics/networkinsight/get_metadata`, config);
  }

  async networkinsightGetProtocols(config?: RequestConfig): Promise<ApiResponse<DiagnosticsNetworkinsightGetProtocolsResponse>> {
    return this.http.get(`/api/diagnostics/networkinsight/get_protocols`, config);
  }

  async networkinsightGetServices(config?: RequestConfig): Promise<ApiResponse<DiagnosticsNetworkinsightGetServicesResponse>> {
    return this.http.get(`/api/diagnostics/networkinsight/get_services`, config);
  }

  async networkinsightTimeserie(provider?: string, measure?: string, fromDate?: string, toDate?: string, resolution?: string, field?: string, emulation?: string, config?: RequestConfig): Promise<ApiResponse<DiagnosticsNetworkinsightTimeserieResponse>> {
    return this.http.get(`/api/diagnostics/networkinsight/timeserie/${provider}/${measure}/${fromDate}/${toDate}/${resolution}/${field}/${emulation}`, config);
  }

  async networkinsightTop(provider?: string, fromDate?: string, toDate?: string, field?: string, measure?: string, maxHits?: string, config?: RequestConfig): Promise<ApiResponse<DiagnosticsNetworkinsightTopResponse>> {
    return this.http.get(`/api/diagnostics/networkinsight/top/${provider}/${fromDate}/${toDate}/${field}/${measure}/${maxHits}`, config);
  }


  // PacketCapture methods
  async packetCaptureDownload(jobid: string, config?: RequestConfig): Promise<ApiResponse<DiagnosticsPacketCaptureDownloadResponse>> {
    return this.http.get(`/api/diagnostics/packet_capture/download/${jobid}`, config);
  }

  async packetCaptureGet(config?: RequestConfig): Promise<ApiResponse<DiagnosticsPacketCaptureGetResponse>> {
    return this.http.get(`/api/diagnostics/packet_capture/get`, config);
  }

  async packetCaptureMacInfo(macaddr: string, config?: RequestConfig): Promise<ApiResponse<DiagnosticsPacketCaptureMacInfoResponse>> {
    return this.http.get(`/api/diagnostics/packet_capture/mac_info/${macaddr}`, config);
  }

  async packetCaptureRemove(jobid: string, data?: DiagnosticsPacketCaptureRemoveRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsPacketCaptureRemoveResponse>> {
    return this.http.post(`/api/diagnostics/packet_capture/remove/${jobid}`, data, config);
  }

  async packetCaptureSearchJobs(config?: RequestConfig): Promise<ApiResponse<DiagnosticsPacketCaptureSearchJobsResponse>> {
    return this.http.get(`/api/diagnostics/packet_capture/search_jobs`, config);
  }

  async packetCaptureSet(data?: DiagnosticsPacketCaptureSetRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsPacketCaptureSetResponse>> {
    return this.http.post(`/api/diagnostics/packet_capture/set`, data, config);
  }

  async packetCaptureStart(jobid: string, data?: DiagnosticsPacketCaptureStartRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsPacketCaptureStartResponse>> {
    return this.http.post(`/api/diagnostics/packet_capture/start/${jobid}`, data, config);
  }

  async packetCaptureStop(jobid: string, data?: DiagnosticsPacketCaptureStopRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsPacketCaptureStopResponse>> {
    return this.http.post(`/api/diagnostics/packet_capture/stop/${jobid}`, data, config);
  }

  async packetCaptureView(jobid: string, detail?: string, config?: RequestConfig): Promise<ApiResponse<DiagnosticsPacketCaptureViewResponse>> {
    return this.http.get(`/api/diagnostics/packet_capture/view/${jobid}/${detail}`, config);
  }


  // Ping methods
  async pingGet(config?: RequestConfig): Promise<ApiResponse<DiagnosticsPingGetResponse>> {
    return this.http.get(`/api/diagnostics/ping/get`, config);
  }

  async pingRemove(jobid: string, data?: DiagnosticsPingRemoveRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsPingRemoveResponse>> {
    return this.http.post(`/api/diagnostics/ping/remove/${jobid}`, data, config);
  }

  async pingSearchJobs(config?: RequestConfig): Promise<ApiResponse<DiagnosticsPingSearchJobsResponse>> {
    return this.http.get(`/api/diagnostics/ping/search_jobs`, config);
  }

  async pingSet(data?: DiagnosticsPingSetRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsPingSetResponse>> {
    return this.http.post(`/api/diagnostics/ping/set`, data, config);
  }

  async pingStart(jobid: string, data?: DiagnosticsPingStartRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsPingStartResponse>> {
    return this.http.post(`/api/diagnostics/ping/start/${jobid}`, data, config);
  }

  async pingStop(jobid: string, data?: DiagnosticsPingStopRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsPingStopResponse>> {
    return this.http.post(`/api/diagnostics/ping/stop/${jobid}`, data, config);
  }


  // Portprobe methods
  async portprobeGet(config?: RequestConfig): Promise<ApiResponse<DiagnosticsPortprobeGetResponse>> {
    return this.http.get(`/api/diagnostics/portprobe/get`, config);
  }

  async portprobeSet(data?: DiagnosticsPortprobeSetRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsPortprobeSetResponse>> {
    return this.http.post(`/api/diagnostics/portprobe/set`, data, config);
  }


  // System methods
  async systemMemory(config?: RequestConfig): Promise<ApiResponse<DiagnosticsSystemMemoryResponse>> {
    return this.http.get(`/api/diagnostics/system/memory`, config);
  }

  async systemSystemDisk(config?: RequestConfig): Promise<ApiResponse<DiagnosticsSystemSystemDiskResponse>> {
    return this.http.get(`/api/diagnostics/system/system_disk`, config);
  }

  async systemSystemInformation(config?: RequestConfig): Promise<ApiResponse<DiagnosticsSystemSystemInformationResponse>> {
    return this.http.get(`/api/diagnostics/system/system_information`, config);
  }

  async systemSystemMbuf(config?: RequestConfig): Promise<ApiResponse<DiagnosticsSystemSystemMbufResponse>> {
    return this.http.get(`/api/diagnostics/system/system_mbuf`, config);
  }

  async systemSystemResources(config?: RequestConfig): Promise<ApiResponse<DiagnosticsSystemSystemResourcesResponse>> {
    return this.http.get(`/api/diagnostics/system/system_resources`, config);
  }

  async systemSystemSwap(config?: RequestConfig): Promise<ApiResponse<DiagnosticsSystemSystemSwapResponse>> {
    return this.http.get(`/api/diagnostics/system/system_swap`, config);
  }

  async systemSystemTemperature(config?: RequestConfig): Promise<ApiResponse<DiagnosticsSystemSystemTemperatureResponse>> {
    return this.http.get(`/api/diagnostics/system/system_temperature`, config);
  }

  async systemSystemTime(config?: RequestConfig): Promise<ApiResponse<DiagnosticsSystemSystemTimeResponse>> {
    return this.http.get(`/api/diagnostics/system/system_time`, config);
  }


  // Systemhealth methods
  async systemhealthExportAsCSV(rrd?: string, detail?: string, config?: RequestConfig): Promise<ApiResponse<DiagnosticsSystemhealthExportAsCSVResponse>> {
    return this.http.get(`/api/diagnostics/systemhealth/export_as_c_s_v/${rrd}/${detail}`, config);
  }

  async systemhealthGetInterfaces(config?: RequestConfig): Promise<ApiResponse<DiagnosticsSystemhealthGetInterfacesResponse>> {
    return this.http.get(`/api/diagnostics/systemhealth/get_interfaces`, config);
  }

  async systemhealthGetRRDlist(config?: RequestConfig): Promise<ApiResponse<DiagnosticsSystemhealthGetRRDlistResponse>> {
    return this.http.get(`/api/diagnostics/systemhealth/get_r_r_dlist`, config);
  }

  async systemhealthGetSystemHealth(rrd?: string, unused?: string, detail?: string, config?: RequestConfig): Promise<ApiResponse<DiagnosticsSystemhealthGetSystemHealthResponse>> {
    return this.http.get(`/api/diagnostics/systemhealth/get_system_health/${rrd}/${unused}/${detail}`, config);
  }


  // Traceroute methods
  async tracerouteGet(config?: RequestConfig): Promise<ApiResponse<DiagnosticsTracerouteGetResponse>> {
    return this.http.get(`/api/diagnostics/traceroute/get`, config);
  }

  async tracerouteSet(data?: DiagnosticsTracerouteSetRequest, config?: RequestConfig): Promise<ApiResponse<DiagnosticsTracerouteSetResponse>> {
    return this.http.post(`/api/diagnostics/traceroute/set`, data, config);
  }


  // Traffic methods
  async trafficInterface(config?: RequestConfig): Promise<ApiResponse<DiagnosticsTrafficInterfaceResponse>> {
    return this.http.get(`/api/diagnostics/traffic/_interface`, config);
  }

  async trafficTop(interfaces: string, config?: RequestConfig): Promise<ApiResponse<DiagnosticsTrafficTopResponse>> {
    return this.http.get(`/api/diagnostics/traffic/_top/${interfaces}`, config);
  }

  async trafficStream(pollInterval?: string, config?: RequestConfig): Promise<ApiResponse<DiagnosticsTrafficStreamResponse>> {
    return this.http.get(`/api/diagnostics/traffic/stream/${pollInterval}`, config);
  }

}
