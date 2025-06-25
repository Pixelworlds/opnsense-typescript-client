import type {
      ApiResponse,
      ApiResult,
      SearchResult,
      BaseRecord,
      ServiceStatus,
      ServiceControl,
      ConfigTest,
      CrudOperations,
      ServiceOperations,
      SettingsOperations
    } from './common';

// Controller interfaces
export interface QuaggaBfdController {
  /** Execute add neighbor for quagga bfd */
  addNeighbor(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del neighbor for quagga bfd */
  delNeighbor(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for quagga bfd */
  get(): Promise<ApiResponse<any>>;
  /** Get get neighbor for quagga bfd */
  getNeighbor(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for quagga bfd */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set neighbor for quagga bfd */
  setNeighbor(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle neighbor for quagga bfd */
  toggleNeighbor(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface QuaggaBgpController {
  /** Execute add aspath for quagga bgp */
  addAspath(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add communitylist for quagga bgp */
  addCommunitylist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add neighbor for quagga bgp */
  addNeighbor(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add peergroup for quagga bgp */
  addPeergroup(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add prefixlist for quagga bgp */
  addPrefixlist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add redistribution for quagga bgp */
  addRedistribution(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add routemap for quagga bgp */
  addRoutemap(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del aspath for quagga bgp */
  delAspath(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del communitylist for quagga bgp */
  delCommunitylist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del neighbor for quagga bgp */
  delNeighbor(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del peergroup for quagga bgp */
  delPeergroup(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del prefixlist for quagga bgp */
  delPrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del redistribution for quagga bgp */
  delRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del routemap for quagga bgp */
  delRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for quagga bgp */
  get(): Promise<ApiResponse<any>>;
  /** Get get aspath for quagga bgp */
  getAspath(uuid: string): Promise<ApiResponse<any>>;
  /** Get get communitylist for quagga bgp */
  getCommunitylist(uuid: string): Promise<ApiResponse<any>>;
  /** Get get neighbor for quagga bgp */
  getNeighbor(uuid: string): Promise<ApiResponse<any>>;
  /** Get get peergroup for quagga bgp */
  getPeergroup(uuid: string): Promise<ApiResponse<any>>;
  /** Get get prefixlist for quagga bgp */
  getPrefixlist(uuid: string): Promise<ApiResponse<any>>;
  /** Get get redistribution for quagga bgp */
  getRedistribution(uuid: string): Promise<ApiResponse<any>>;
  /** Get get routemap for quagga bgp */
  getRoutemap(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for quagga bgp */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set aspath for quagga bgp */
  setAspath(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set communitylist for quagga bgp */
  setCommunitylist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set neighbor for quagga bgp */
  setNeighbor(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set peergroup for quagga bgp */
  setPeergroup(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set prefixlist for quagga bgp */
  setPrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set redistribution for quagga bgp */
  setRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set routemap for quagga bgp */
  setRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle aspath for quagga bgp */
  toggleAspath(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle communitylist for quagga bgp */
  toggleCommunitylist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle neighbor for quagga bgp */
  toggleNeighbor(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle peergroup for quagga bgp */
  togglePeergroup(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle prefixlist for quagga bgp */
  togglePrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle redistribution for quagga bgp */
  toggleRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle routemap for quagga bgp */
  toggleRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface QuaggaDiagnosticsController {
  /** Get bfdcounters for quagga diagnostics */
  bfdcounters(): Promise<ApiResponse<any>>;
  /** Get bfdneighbors for quagga diagnostics */
  bfdneighbors(): Promise<ApiResponse<any>>;
  /** Get bfdsummary for quagga diagnostics */
  bfdsummary(): Promise<ApiResponse<any>>;
  /** Get bgpneighbors for quagga diagnostics */
  bgpneighbors(): Promise<ApiResponse<any>>;
  /** Get bgpsummary for quagga diagnostics */
  bgpsummary(): Promise<ApiResponse<any>>;
  /** Get generalrunningconfig for quagga diagnostics */
  generalrunningconfig(): Promise<ApiResponse<any>>;
  /** Get ospfdatabase for quagga diagnostics */
  ospfdatabase(): Promise<ApiResponse<any>>;
  /** Get ospfinterface for quagga diagnostics */
  ospfinterface(): Promise<ApiResponse<any>>;
  /** Get ospfoverview for quagga diagnostics */
  ospfoverview(): Promise<ApiResponse<any>>;
  /** Get ospfv3interface for quagga diagnostics */
  ospfv3interface(): Promise<ApiResponse<any>>;
  /** Get ospfv3overview for quagga diagnostics */
  ospfv3overview(): Promise<ApiResponse<any>>;
  /** Get search bgproute4 for quagga diagnostics */
  searchBgproute4(): Promise<ApiResponse<SearchResult>>;
  /** Get search bgproute6 for quagga diagnostics */
  searchBgproute6(): Promise<ApiResponse<SearchResult>>;
  /** Get search generalroute4 for quagga diagnostics */
  searchGeneralroute4(): Promise<ApiResponse<SearchResult>>;
  /** Get search generalroute6 for quagga diagnostics */
  searchGeneralroute6(): Promise<ApiResponse<SearchResult>>;
  /** Get search ospfneighbor for quagga diagnostics */
  searchOspfneighbor(): Promise<ApiResponse<SearchResult>>;
  /** Get search ospfroute for quagga diagnostics */
  searchOspfroute(): Promise<ApiResponse<SearchResult>>;
  /** Get search ospfv3database for quagga diagnostics */
  searchOspfv3database(): Promise<ApiResponse<SearchResult>>;
  /** Get search ospfv3route for quagga diagnostics */
  searchOspfv3route(): Promise<ApiResponse<SearchResult>>;
}
export interface QuaggaGeneralController {
  /** Get get for quagga general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for quagga general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface QuaggaOspf6settingsController {
  /** Execute add interface for quagga ospf6settings */
  addInterface(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add network for quagga ospf6settings */
  addNetwork(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add prefixlist for quagga ospf6settings */
  addPrefixlist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add redistribution for quagga ospf6settings */
  addRedistribution(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add routemap for quagga ospf6settings */
  addRoutemap(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del interface for quagga ospf6settings */
  delInterface(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del network for quagga ospf6settings */
  delNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del prefixlist for quagga ospf6settings */
  delPrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del redistribution for quagga ospf6settings */
  delRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del routemap for quagga ospf6settings */
  delRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for quagga ospf6settings */
  get(): Promise<ApiResponse<any>>;
  /** Get get interface for quagga ospf6settings */
  getInterface(uuid: string): Promise<ApiResponse<any>>;
  /** Get get network for quagga ospf6settings */
  getNetwork(uuid: string): Promise<ApiResponse<any>>;
  /** Get get prefixlist for quagga ospf6settings */
  getPrefixlist(uuid: string): Promise<ApiResponse<any>>;
  /** Get get redistribution for quagga ospf6settings */
  getRedistribution(uuid: string): Promise<ApiResponse<any>>;
  /** Get get routemap for quagga ospf6settings */
  getRoutemap(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for quagga ospf6settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set interface for quagga ospf6settings */
  setInterface(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set network for quagga ospf6settings */
  setNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set prefixlist for quagga ospf6settings */
  setPrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set redistribution for quagga ospf6settings */
  setRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set routemap for quagga ospf6settings */
  setRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle interface for quagga ospf6settings */
  toggleInterface(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle network for quagga ospf6settings */
  toggleNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle prefixlist for quagga ospf6settings */
  togglePrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle redistribution for quagga ospf6settings */
  toggleRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle routemap for quagga ospf6settings */
  toggleRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface QuaggaOspfsettingsController {
  /** Execute add interface for quagga ospfsettings */
  addInterface(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add network for quagga ospfsettings */
  addNetwork(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add prefixlist for quagga ospfsettings */
  addPrefixlist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add redistribution for quagga ospfsettings */
  addRedistribution(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add routemap for quagga ospfsettings */
  addRoutemap(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del interface for quagga ospfsettings */
  delInterface(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del network for quagga ospfsettings */
  delNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del prefixlist for quagga ospfsettings */
  delPrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del redistribution for quagga ospfsettings */
  delRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del routemap for quagga ospfsettings */
  delRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for quagga ospfsettings */
  get(): Promise<ApiResponse<any>>;
  /** Get get interface for quagga ospfsettings */
  getInterface(uuid: string): Promise<ApiResponse<any>>;
  /** Get get network for quagga ospfsettings */
  getNetwork(uuid: string): Promise<ApiResponse<any>>;
  /** Get get prefixlist for quagga ospfsettings */
  getPrefixlist(uuid: string): Promise<ApiResponse<any>>;
  /** Get get redistribution for quagga ospfsettings */
  getRedistribution(uuid: string): Promise<ApiResponse<any>>;
  /** Get get routemap for quagga ospfsettings */
  getRoutemap(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for quagga ospfsettings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set interface for quagga ospfsettings */
  setInterface(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set network for quagga ospfsettings */
  setNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set prefixlist for quagga ospfsettings */
  setPrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set redistribution for quagga ospfsettings */
  setRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set routemap for quagga ospfsettings */
  setRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle interface for quagga ospfsettings */
  toggleInterface(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle network for quagga ospfsettings */
  toggleNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle prefixlist for quagga ospfsettings */
  togglePrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle redistribution for quagga ospfsettings */
  toggleRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle routemap for quagga ospfsettings */
  toggleRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface QuaggaRipController {
  /** Get get for quagga rip */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for quagga rip */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface QuaggaServiceController {
  /** Execute reconfigure for quagga service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for quagga service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for quagga service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for quagga service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for quagga service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface QuaggaStaticController {
  /** Execute add route for quagga static */
  addRoute(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del route for quagga static */
  delRoute(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for quagga static */
  get(): Promise<ApiResponse<any>>;
  /** Get get route for quagga static */
  getRoute(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for quagga static */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set route for quagga static */
  setRoute(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle route for quagga static */
  toggleRoute(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}

// Main module interface
export interface QuaggaModule {
  bfd: QuaggaBfdController;
  bgp: QuaggaBgpController;
  diagnostics: QuaggaDiagnosticsController;
  general: QuaggaGeneralController;
  ospf6settings: QuaggaOspf6settingsController;
  ospfsettings: QuaggaOspfsettingsController;
  rip: QuaggaRipController;
  service: QuaggaServiceController;
  static: QuaggaStaticController;
}

// Record interfaces
export interface QuaggaRecord extends BaseRecord {
 
  [key: string]: any;
}