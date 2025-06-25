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
export interface FreeradiusAvpairController {
  /** Execute add avpair for freeradius avpair */
  addAvpair(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del avpair for freeradius avpair */
  delAvpair(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for freeradius avpair */
  get(): Promise<ApiResponse<any>>;
  /** Get get avpair for freeradius avpair */
  getAvpair(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for freeradius avpair */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set avpair for freeradius avpair */
  setAvpair(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle avpair for freeradius avpair */
  toggleAvpair(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface FreeradiusClientController {
  /** Execute add client for freeradius client */
  addClient(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del client for freeradius client */
  delClient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for freeradius client */
  get(): Promise<ApiResponse<any>>;
  /** Get get client for freeradius client */
  getClient(uuid: string): Promise<ApiResponse<any>>;
  /** Get search client for freeradius client */
  searchClient(): Promise<ApiResponse<SearchResult>>;
  /** Execute set for freeradius client */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set client for freeradius client */
  setClient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get toggle client for freeradius client */
  toggleClient(uuid: string): Promise<ApiResponse<any>>;
}
export interface FreeradiusDhcpController {
  /** Execute add dhcp for freeradius dhcp */
  addDhcp(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del dhcp for freeradius dhcp */
  delDhcp(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for freeradius dhcp */
  get(): Promise<ApiResponse<any>>;
  /** Get get dhcp for freeradius dhcp */
  getDhcp(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for freeradius dhcp */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set dhcp for freeradius dhcp */
  setDhcp(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle dhcp for freeradius dhcp */
  toggleDhcp(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface FreeradiusEapController {
  /** Get get for freeradius eap */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for freeradius eap */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface FreeradiusGeneralController {
  /** Get get for freeradius general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for freeradius general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface FreeradiusLdapController {
  /** Get get for freeradius ldap */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for freeradius ldap */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface FreeradiusLeaseController {
  /** Execute add lease for freeradius lease */
  addLease(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del lease for freeradius lease */
  delLease(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for freeradius lease */
  get(): Promise<ApiResponse<any>>;
  /** Get get lease for freeradius lease */
  getLease(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for freeradius lease */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set lease for freeradius lease */
  setLease(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle lease for freeradius lease */
  toggleLease(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface FreeradiusProxyController {
  /** Execute add homeserver for freeradius proxy */
  addHomeserver(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add homeserverpool for freeradius proxy */
  addHomeserverpool(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute add realm for freeradius proxy */
  addRealm(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del homeserver for freeradius proxy */
  delHomeserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del homeserverpool for freeradius proxy */
  delHomeserverpool(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del realm for freeradius proxy */
  delRealm(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for freeradius proxy */
  get(): Promise<ApiResponse<any>>;
  /** Get get homeserver for freeradius proxy */
  getHomeserver(uuid: string): Promise<ApiResponse<any>>;
  /** Get get homeserverpool for freeradius proxy */
  getHomeserverpool(uuid: string): Promise<ApiResponse<any>>;
  /** Get get realm for freeradius proxy */
  getRealm(uuid: string): Promise<ApiResponse<any>>;
  /** Get search homeserver for freeradius proxy */
  searchHomeserver(): Promise<ApiResponse<SearchResult>>;
  /** Get search homeserverpool for freeradius proxy */
  searchHomeserverpool(): Promise<ApiResponse<SearchResult>>;
  /** Get search realm for freeradius proxy */
  searchRealm(): Promise<ApiResponse<SearchResult>>;
  /** Execute set for freeradius proxy */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set homeserver for freeradius proxy */
  setHomeserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set homeserverpool for freeradius proxy */
  setHomeserverpool(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set realm for freeradius proxy */
  setRealm(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get toggle homeserver for freeradius proxy */
  toggleHomeserver(uuid: string): Promise<ApiResponse<any>>;
  /** Get toggle homeserverpool for freeradius proxy */
  toggleHomeserverpool(uuid: string): Promise<ApiResponse<any>>;
  /** Get toggle realm for freeradius proxy */
  toggleRealm(uuid: string): Promise<ApiResponse<any>>;
}
export interface FreeradiusServiceController {
  /** Execute reconfigure for freeradius service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for freeradius service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for freeradius service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for freeradius service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for freeradius service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}
export interface FreeradiusUserController {
  /** Execute add user for freeradius user */
  addUser(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del user for freeradius user */
  delUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for freeradius user */
  get(): Promise<ApiResponse<any>>;
  /** Get get user for freeradius user */
  getUser(uuid: string): Promise<ApiResponse<any>>;
  /** Get search user for freeradius user */
  searchUser(): Promise<ApiResponse<SearchResult>>;
  /** Execute set for freeradius user */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set user for freeradius user */
  setUser(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get toggle user for freeradius user */
  toggleUser(uuid: string): Promise<ApiResponse<any>>;
}

// Main module interface
export interface FreeradiusModule {
  avpair: FreeradiusAvpairController;
  client: FreeradiusClientController;
  dhcp: FreeradiusDhcpController;
  eap: FreeradiusEapController;
  general: FreeradiusGeneralController;
  ldap: FreeradiusLdapController;
  lease: FreeradiusLeaseController;
  proxy: FreeradiusProxyController;
  service: FreeradiusServiceController;
  user: FreeradiusUserController;
}

// Record interfaces
export interface FreeradiusRecord extends BaseRecord {
 
  [key: string]: any;
}