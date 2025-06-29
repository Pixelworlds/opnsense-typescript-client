import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Nginx module

// Model field types

// Bans types
export interface NginxBansDelbanRequest {
  uuid: string;
}

export interface NginxBansDelbanResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxBansGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxBansSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxBansSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Logs types
export interface NginxLogsAccessesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxLogsErrorsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxLogsStreamaccessesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxLogsStreamerrorsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxLogsTlsHandshakesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface NginxServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxServiceVtsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface NginxSettingsAddcachePathRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddcachePathResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddcredentialRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddcredentialResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddcustompolicyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddcustompolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAdderrorpageRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAdderrorpageResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddhttprewriteRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddhttprewriteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddhttpserverRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddhttpserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddipaclRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddipaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddlimitRequestConnectionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddlimitRequestConnectionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddlimitZoneRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddlimitZoneResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddlocationRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddlocationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddnaxsiruleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddnaxsiruleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddresolverRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddresolverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddsecurityHeaderRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddsecurityHeaderResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddsnifwdRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddsnifwdResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddstreamserverRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddstreamserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddsyslogTargetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddsyslogTargetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddtlsFingerprintRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddtlsFingerprintResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddupstreamRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddupstreamResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAddupstreamserverRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAddupstreamserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsAdduserlistRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsAdduserlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDelcachePathRequest {
  uuid: string;
}

export interface NginxSettingsDelcachePathResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDelcredentialRequest {
  uuid: string;
}

export interface NginxSettingsDelcredentialResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDelcustompolicyRequest {
  uuid: string;
}

export interface NginxSettingsDelcustompolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDelerrorpageRequest {
  uuid: string;
}

export interface NginxSettingsDelerrorpageResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDelhttprewriteRequest {
  uuid: string;
}

export interface NginxSettingsDelhttprewriteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDelhttpserverRequest {
  uuid: string;
}

export interface NginxSettingsDelhttpserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDelipaclRequest {
  uuid: string;
}

export interface NginxSettingsDelipaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDellimitRequestConnectionRequest {
  uuid: string;
}

export interface NginxSettingsDellimitRequestConnectionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDellimitZoneRequest {
  uuid: string;
}

export interface NginxSettingsDellimitZoneResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDellocationRequest {
  uuid: string;
}

export interface NginxSettingsDellocationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDelnaxsiruleRequest {
  uuid: string;
}

export interface NginxSettingsDelnaxsiruleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDelresolverRequest {
  uuid: string;
}

export interface NginxSettingsDelresolverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDelsecurityHeaderRequest {
  uuid: string;
}

export interface NginxSettingsDelsecurityHeaderResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDelsnifwdRequest {
  uuid: string;
}

export interface NginxSettingsDelsnifwdResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDelstreamserverRequest {
  uuid: string;
}

export interface NginxSettingsDelstreamserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDelsyslogTargetRequest {
  uuid: string;
}

export interface NginxSettingsDelsyslogTargetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDeltlsFingerprintRequest {
  uuid: string;
}

export interface NginxSettingsDeltlsFingerprintResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDelupstreamRequest {
  uuid: string;
}

export interface NginxSettingsDelupstreamResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDelupstreamserverRequest {
  uuid: string;
}

export interface NginxSettingsDelupstreamserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDeluserlistRequest {
  uuid: string;
}

export interface NginxSettingsDeluserlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsDownloadrulesRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsDownloadrulesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetcachePathResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetcredentialResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetcustompolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGeterrorpageResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGethttprewriteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGethttpserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetipaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetlimitRequestConnectionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetlimitZoneResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetlocationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetnaxsiruleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetresolverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetsecurityHeaderResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetsnifwdResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetstreamserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetsyslogTargetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGettlsFingerprintResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetupstreamResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetupstreamserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsGetuserlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetcachePathRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetcachePathResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetcredentialRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetcredentialResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetcustompolicyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetcustompolicyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSeterrorpageRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSeterrorpageResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSethttprewriteRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSethttprewriteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSethttpserverRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSethttpserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetipaclRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetipaclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetlimitRequestConnectionRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetlimitRequestConnectionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetlimitZoneRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetlimitZoneResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetlocationRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetlocationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetnaxsiruleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetnaxsiruleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetresolverRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetresolverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetsecurityHeaderRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetsecurityHeaderResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetsnifwdRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetsnifwdResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetstreamserverRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetstreamserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetsyslogTargetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetsyslogTargetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSettlsFingerprintRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSettlsFingerprintResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetupstreamRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetupstreamResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetupstreamserverRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetupstreamserverResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsSetuserlistRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface NginxSettingsSetuserlistResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsShowconfigResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface NginxSettingsTestconfigResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface NginxUserlist {
}

export interface NginxCredential {
}

export interface NginxUpstream {
}

export interface NginxUpstreamServer {
}

export interface NginxLocation {
}

export interface NginxCustomPolicy {
}

export interface NginxNaxsiRule {
}

export interface NginxHttpServer {
}

export interface NginxStreamServer {
}

export interface NginxSniHostnameUpstreamMap {
}

export interface NginxSniHostnameUpstreamMapItem {
}

export interface NginxIpAcl {
}

export interface NginxIpAclItem {
}

export interface NginxResolver {
}

export interface NginxHttpRewrite {
}

export interface NginxSecurityHeader {
}

export interface NginxLimitZone {
}

export interface NginxErrorpage {
}

export interface NginxTlsFingerprint {
}

export interface NginxLimitRequestConnection {
}

export interface NginxBan {
}

export interface NginxCachePath {
}

export interface NginxSyslogTarget {
}

export class NginxApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/nginx';
  }

  // Bans methods
  async bansDelban(uuid: string, data?: NginxBansDelbanRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxBansDelbanResponse>> {
    return this.client.post(`${this.basePath}/bans/delban/${uuid}`, data, config);
  }

  async bansGet(config?: AxiosRequestConfig): Promise<AxiosResponse<NginxBansGetResponse>> {
    return this.client.get(`${this.basePath}/bans/get`, config);
  }

  async bansSet(data?: NginxBansSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxBansSetResponse>> {
    return this.client.post(`${this.basePath}/bans/set`, data, config);
  }


  // Logs methods
  async logsAccesses(uuid?: string, fileno?: string, page?: string, perPage?: string, query?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxLogsAccessesResponse>> {
    return this.client.get(`${this.basePath}/logs/accesses/${uuid}/${fileno}/${page}/${perPage}/${query}`, config);
  }

  async logsErrors(uuid?: string, fileno?: string, page?: string, perPage?: string, query?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxLogsErrorsResponse>> {
    return this.client.get(`${this.basePath}/logs/errors/${uuid}/${fileno}/${page}/${perPage}/${query}`, config);
  }

  async logsStreamaccesses(uuid?: string, fileno?: string, page?: string, perPage?: string, query?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxLogsStreamaccessesResponse>> {
    return this.client.get(`${this.basePath}/logs/streamaccesses/${uuid}/${fileno}/${page}/${perPage}/${query}`, config);
  }

  async logsStreamerrors(uuid?: string, fileno?: string, page?: string, perPage?: string, query?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxLogsStreamerrorsResponse>> {
    return this.client.get(`${this.basePath}/logs/streamerrors/${uuid}/${fileno}/${page}/${perPage}/${query}`, config);
  }

  async logsTlsHandshakes(config?: AxiosRequestConfig): Promise<AxiosResponse<NginxLogsTlsHandshakesResponse>> {
    return this.client.get(`${this.basePath}/logs/tls_handshakes`, config);
  }


  // Service methods
  async serviceReconfigure(data?: NginxServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NginxServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: NginxServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<NginxServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(config?: AxiosRequestConfig): Promise<AxiosResponse<NginxServiceStopResponse>> {
    return this.client.get(`${this.basePath}/service/stop`, config);
  }

  async serviceVts(config?: AxiosRequestConfig): Promise<AxiosResponse<NginxServiceVtsResponse>> {
    return this.client.get(`${this.basePath}/service/vts`, config);
  }


  // Settings methods
  async settingsAddcachePath(data?: NginxSettingsAddcachePathRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddcachePathResponse>> {
    return this.client.post(`${this.basePath}/settings/addcache_path`, data, config);
  }

  async settingsAddcredential(data?: NginxSettingsAddcredentialRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddcredentialResponse>> {
    return this.client.post(`${this.basePath}/settings/addcredential`, data, config);
  }

  async settingsAddcustompolicy(data?: NginxSettingsAddcustompolicyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddcustompolicyResponse>> {
    return this.client.post(`${this.basePath}/settings/addcustompolicy`, data, config);
  }

  async settingsAdderrorpage(data?: NginxSettingsAdderrorpageRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAdderrorpageResponse>> {
    return this.client.post(`${this.basePath}/settings/adderrorpage`, data, config);
  }

  async settingsAddhttprewrite(data?: NginxSettingsAddhttprewriteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddhttprewriteResponse>> {
    return this.client.post(`${this.basePath}/settings/addhttprewrite`, data, config);
  }

  async settingsAddhttpserver(data?: NginxSettingsAddhttpserverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddhttpserverResponse>> {
    return this.client.post(`${this.basePath}/settings/addhttpserver`, data, config);
  }

  async settingsAddipacl(data?: NginxSettingsAddipaclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddipaclResponse>> {
    return this.client.post(`${this.basePath}/settings/addipacl`, data, config);
  }

  async settingsAddlimitRequestConnection(data?: NginxSettingsAddlimitRequestConnectionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddlimitRequestConnectionResponse>> {
    return this.client.post(`${this.basePath}/settings/addlimit_request_connection`, data, config);
  }

  async settingsAddlimitZone(data?: NginxSettingsAddlimitZoneRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddlimitZoneResponse>> {
    return this.client.post(`${this.basePath}/settings/addlimit_zone`, data, config);
  }

  async settingsAddlocation(data?: NginxSettingsAddlocationRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddlocationResponse>> {
    return this.client.post(`${this.basePath}/settings/addlocation`, data, config);
  }

  async settingsAddnaxsirule(data?: NginxSettingsAddnaxsiruleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddnaxsiruleResponse>> {
    return this.client.post(`${this.basePath}/settings/addnaxsirule`, data, config);
  }

  async settingsAddresolver(data?: NginxSettingsAddresolverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddresolverResponse>> {
    return this.client.post(`${this.basePath}/settings/addresolver`, data, config);
  }

  async settingsAddsecurityHeader(data?: NginxSettingsAddsecurityHeaderRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddsecurityHeaderResponse>> {
    return this.client.post(`${this.basePath}/settings/addsecurity_header`, data, config);
  }

  async settingsAddsnifwd(data?: NginxSettingsAddsnifwdRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddsnifwdResponse>> {
    return this.client.post(`${this.basePath}/settings/addsnifwd`, data, config);
  }

  async settingsAddstreamserver(data?: NginxSettingsAddstreamserverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddstreamserverResponse>> {
    return this.client.post(`${this.basePath}/settings/addstreamserver`, data, config);
  }

  async settingsAddsyslogTarget(data?: NginxSettingsAddsyslogTargetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddsyslogTargetResponse>> {
    return this.client.post(`${this.basePath}/settings/addsyslog_target`, data, config);
  }

  async settingsAddtlsFingerprint(data?: NginxSettingsAddtlsFingerprintRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddtlsFingerprintResponse>> {
    return this.client.post(`${this.basePath}/settings/addtls_fingerprint`, data, config);
  }

  async settingsAddupstream(data?: NginxSettingsAddupstreamRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddupstreamResponse>> {
    return this.client.post(`${this.basePath}/settings/addupstream`, data, config);
  }

  async settingsAddupstreamserver(data?: NginxSettingsAddupstreamserverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAddupstreamserverResponse>> {
    return this.client.post(`${this.basePath}/settings/addupstreamserver`, data, config);
  }

  async settingsAdduserlist(data?: NginxSettingsAdduserlistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsAdduserlistResponse>> {
    return this.client.post(`${this.basePath}/settings/adduserlist`, data, config);
  }

  async settingsDelcachePath(uuid: string, data?: NginxSettingsDelcachePathRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDelcachePathResponse>> {
    return this.client.post(`${this.basePath}/settings/delcache_path/${uuid}`, data, config);
  }

  async settingsDelcredential(uuid: string, data?: NginxSettingsDelcredentialRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDelcredentialResponse>> {
    return this.client.post(`${this.basePath}/settings/delcredential/${uuid}`, data, config);
  }

  async settingsDelcustompolicy(uuid: string, data?: NginxSettingsDelcustompolicyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDelcustompolicyResponse>> {
    return this.client.post(`${this.basePath}/settings/delcustompolicy/${uuid}`, data, config);
  }

  async settingsDelerrorpage(uuid: string, data?: NginxSettingsDelerrorpageRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDelerrorpageResponse>> {
    return this.client.post(`${this.basePath}/settings/delerrorpage/${uuid}`, data, config);
  }

  async settingsDelhttprewrite(uuid: string, data?: NginxSettingsDelhttprewriteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDelhttprewriteResponse>> {
    return this.client.post(`${this.basePath}/settings/delhttprewrite/${uuid}`, data, config);
  }

  async settingsDelhttpserver(uuid: string, data?: NginxSettingsDelhttpserverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDelhttpserverResponse>> {
    return this.client.post(`${this.basePath}/settings/delhttpserver/${uuid}`, data, config);
  }

  async settingsDelipacl(uuid: string, data?: NginxSettingsDelipaclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDelipaclResponse>> {
    return this.client.post(`${this.basePath}/settings/delipacl/${uuid}`, data, config);
  }

  async settingsDellimitRequestConnection(uuid: string, data?: NginxSettingsDellimitRequestConnectionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDellimitRequestConnectionResponse>> {
    return this.client.post(`${this.basePath}/settings/dellimit_request_connection/${uuid}`, data, config);
  }

  async settingsDellimitZone(uuid: string, data?: NginxSettingsDellimitZoneRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDellimitZoneResponse>> {
    return this.client.post(`${this.basePath}/settings/dellimit_zone/${uuid}`, data, config);
  }

  async settingsDellocation(uuid: string, data?: NginxSettingsDellocationRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDellocationResponse>> {
    return this.client.post(`${this.basePath}/settings/dellocation/${uuid}`, data, config);
  }

  async settingsDelnaxsirule(uuid: string, data?: NginxSettingsDelnaxsiruleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDelnaxsiruleResponse>> {
    return this.client.post(`${this.basePath}/settings/delnaxsirule/${uuid}`, data, config);
  }

  async settingsDelresolver(uuid: string, data?: NginxSettingsDelresolverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDelresolverResponse>> {
    return this.client.post(`${this.basePath}/settings/delresolver/${uuid}`, data, config);
  }

  async settingsDelsecurityHeader(uuid: string, data?: NginxSettingsDelsecurityHeaderRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDelsecurityHeaderResponse>> {
    return this.client.post(`${this.basePath}/settings/delsecurity_header/${uuid}`, data, config);
  }

  async settingsDelsnifwd(uuid: string, data?: NginxSettingsDelsnifwdRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDelsnifwdResponse>> {
    return this.client.post(`${this.basePath}/settings/delsnifwd/${uuid}`, data, config);
  }

  async settingsDelstreamserver(uuid: string, data?: NginxSettingsDelstreamserverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDelstreamserverResponse>> {
    return this.client.post(`${this.basePath}/settings/delstreamserver/${uuid}`, data, config);
  }

  async settingsDelsyslogTarget(uuid: string, data?: NginxSettingsDelsyslogTargetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDelsyslogTargetResponse>> {
    return this.client.post(`${this.basePath}/settings/delsyslog_target/${uuid}`, data, config);
  }

  async settingsDeltlsFingerprint(uuid: string, data?: NginxSettingsDeltlsFingerprintRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDeltlsFingerprintResponse>> {
    return this.client.post(`${this.basePath}/settings/deltls_fingerprint/${uuid}`, data, config);
  }

  async settingsDelupstream(uuid: string, data?: NginxSettingsDelupstreamRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDelupstreamResponse>> {
    return this.client.post(`${this.basePath}/settings/delupstream/${uuid}`, data, config);
  }

  async settingsDelupstreamserver(uuid: string, data?: NginxSettingsDelupstreamserverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDelupstreamserverResponse>> {
    return this.client.post(`${this.basePath}/settings/delupstreamserver/${uuid}`, data, config);
  }

  async settingsDeluserlist(uuid: string, data?: NginxSettingsDeluserlistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDeluserlistResponse>> {
    return this.client.post(`${this.basePath}/settings/deluserlist/${uuid}`, data, config);
  }

  async settingsDownloadrules(data?: NginxSettingsDownloadrulesRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsDownloadrulesResponse>> {
    return this.client.post(`${this.basePath}/settings/downloadrules`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetcachePath(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetcachePathResponse>> {
    return this.client.get(`${this.basePath}/settings/getcache_path/${uuid}`, config);
  }

  async settingsGetcredential(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetcredentialResponse>> {
    return this.client.get(`${this.basePath}/settings/getcredential/${uuid}`, config);
  }

  async settingsGetcustompolicy(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetcustompolicyResponse>> {
    return this.client.get(`${this.basePath}/settings/getcustompolicy/${uuid}`, config);
  }

  async settingsGeterrorpage(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGeterrorpageResponse>> {
    return this.client.get(`${this.basePath}/settings/geterrorpage/${uuid}`, config);
  }

  async settingsGethttprewrite(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGethttprewriteResponse>> {
    return this.client.get(`${this.basePath}/settings/gethttprewrite/${uuid}`, config);
  }

  async settingsGethttpserver(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGethttpserverResponse>> {
    return this.client.get(`${this.basePath}/settings/gethttpserver/${uuid}`, config);
  }

  async settingsGetipacl(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetipaclResponse>> {
    return this.client.get(`${this.basePath}/settings/getipacl/${uuid}`, config);
  }

  async settingsGetlimitRequestConnection(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetlimitRequestConnectionResponse>> {
    return this.client.get(`${this.basePath}/settings/getlimit_request_connection/${uuid}`, config);
  }

  async settingsGetlimitZone(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetlimitZoneResponse>> {
    return this.client.get(`${this.basePath}/settings/getlimit_zone/${uuid}`, config);
  }

  async settingsGetlocation(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetlocationResponse>> {
    return this.client.get(`${this.basePath}/settings/getlocation/${uuid}`, config);
  }

  async settingsGetnaxsirule(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetnaxsiruleResponse>> {
    return this.client.get(`${this.basePath}/settings/getnaxsirule/${uuid}`, config);
  }

  async settingsGetresolver(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetresolverResponse>> {
    return this.client.get(`${this.basePath}/settings/getresolver/${uuid}`, config);
  }

  async settingsGetsecurityHeader(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetsecurityHeaderResponse>> {
    return this.client.get(`${this.basePath}/settings/getsecurity_header/${uuid}`, config);
  }

  async settingsGetsnifwd(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetsnifwdResponse>> {
    return this.client.get(`${this.basePath}/settings/getsnifwd/${uuid}`, config);
  }

  async settingsGetstreamserver(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetstreamserverResponse>> {
    return this.client.get(`${this.basePath}/settings/getstreamserver/${uuid}`, config);
  }

  async settingsGetsyslogTarget(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetsyslogTargetResponse>> {
    return this.client.get(`${this.basePath}/settings/getsyslog_target/${uuid}`, config);
  }

  async settingsGettlsFingerprint(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGettlsFingerprintResponse>> {
    return this.client.get(`${this.basePath}/settings/gettls_fingerprint/${uuid}`, config);
  }

  async settingsGetupstream(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetupstreamResponse>> {
    return this.client.get(`${this.basePath}/settings/getupstream/${uuid}`, config);
  }

  async settingsGetupstreamserver(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetupstreamserverResponse>> {
    return this.client.get(`${this.basePath}/settings/getupstreamserver/${uuid}`, config);
  }

  async settingsGetuserlist(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsGetuserlistResponse>> {
    return this.client.get(`${this.basePath}/settings/getuserlist/${uuid}`, config);
  }

  async settingsSet(data?: NginxSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetcachePath(uuid: string, data?: NginxSettingsSetcachePathRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetcachePathResponse>> {
    return this.client.post(`${this.basePath}/settings/setcache_path/${uuid}`, data, config);
  }

  async settingsSetcredential(uuid: string, data?: NginxSettingsSetcredentialRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetcredentialResponse>> {
    return this.client.post(`${this.basePath}/settings/setcredential/${uuid}`, data, config);
  }

  async settingsSetcustompolicy(uuid: string, data?: NginxSettingsSetcustompolicyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetcustompolicyResponse>> {
    return this.client.post(`${this.basePath}/settings/setcustompolicy/${uuid}`, data, config);
  }

  async settingsSeterrorpage(uuid: string, data?: NginxSettingsSeterrorpageRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSeterrorpageResponse>> {
    return this.client.post(`${this.basePath}/settings/seterrorpage/${uuid}`, data, config);
  }

  async settingsSethttprewrite(uuid: string, data?: NginxSettingsSethttprewriteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSethttprewriteResponse>> {
    return this.client.post(`${this.basePath}/settings/sethttprewrite/${uuid}`, data, config);
  }

  async settingsSethttpserver(uuid: string, data?: NginxSettingsSethttpserverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSethttpserverResponse>> {
    return this.client.post(`${this.basePath}/settings/sethttpserver/${uuid}`, data, config);
  }

  async settingsSetipacl(uuid: string, data?: NginxSettingsSetipaclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetipaclResponse>> {
    return this.client.post(`${this.basePath}/settings/setipacl/${uuid}`, data, config);
  }

  async settingsSetlimitRequestConnection(uuid: string, data?: NginxSettingsSetlimitRequestConnectionRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetlimitRequestConnectionResponse>> {
    return this.client.post(`${this.basePath}/settings/setlimit_request_connection/${uuid}`, data, config);
  }

  async settingsSetlimitZone(uuid: string, data?: NginxSettingsSetlimitZoneRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetlimitZoneResponse>> {
    return this.client.post(`${this.basePath}/settings/setlimit_zone/${uuid}`, data, config);
  }

  async settingsSetlocation(uuid: string, data?: NginxSettingsSetlocationRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetlocationResponse>> {
    return this.client.post(`${this.basePath}/settings/setlocation/${uuid}`, data, config);
  }

  async settingsSetnaxsirule(uuid: string, data?: NginxSettingsSetnaxsiruleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetnaxsiruleResponse>> {
    return this.client.post(`${this.basePath}/settings/setnaxsirule/${uuid}`, data, config);
  }

  async settingsSetresolver(uuid: string, data?: NginxSettingsSetresolverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetresolverResponse>> {
    return this.client.post(`${this.basePath}/settings/setresolver/${uuid}`, data, config);
  }

  async settingsSetsecurityHeader(uuid: string, data?: NginxSettingsSetsecurityHeaderRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetsecurityHeaderResponse>> {
    return this.client.post(`${this.basePath}/settings/setsecurity_header/${uuid}`, data, config);
  }

  async settingsSetsnifwd(uuid: string, data?: NginxSettingsSetsnifwdRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetsnifwdResponse>> {
    return this.client.post(`${this.basePath}/settings/setsnifwd/${uuid}`, data, config);
  }

  async settingsSetstreamserver(uuid: string, data?: NginxSettingsSetstreamserverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetstreamserverResponse>> {
    return this.client.post(`${this.basePath}/settings/setstreamserver/${uuid}`, data, config);
  }

  async settingsSetsyslogTarget(uuid: string, data?: NginxSettingsSetsyslogTargetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetsyslogTargetResponse>> {
    return this.client.post(`${this.basePath}/settings/setsyslog_target/${uuid}`, data, config);
  }

  async settingsSettlsFingerprint(uuid: string, data?: NginxSettingsSettlsFingerprintRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSettlsFingerprintResponse>> {
    return this.client.post(`${this.basePath}/settings/settls_fingerprint/${uuid}`, data, config);
  }

  async settingsSetupstream(uuid: string, data?: NginxSettingsSetupstreamRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetupstreamResponse>> {
    return this.client.post(`${this.basePath}/settings/setupstream/${uuid}`, data, config);
  }

  async settingsSetupstreamserver(uuid: string, data?: NginxSettingsSetupstreamserverRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetupstreamserverResponse>> {
    return this.client.post(`${this.basePath}/settings/setupstreamserver/${uuid}`, data, config);
  }

  async settingsSetuserlist(uuid: string, data?: NginxSettingsSetuserlistRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsSetuserlistResponse>> {
    return this.client.post(`${this.basePath}/settings/setuserlist/${uuid}`, data, config);
  }

  async settingsShowconfig(config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsShowconfigResponse>> {
    return this.client.get(`${this.basePath}/settings/showconfig`, config);
  }

  async settingsTestconfig(config?: AxiosRequestConfig): Promise<AxiosResponse<NginxSettingsTestconfigResponse>> {
    return this.client.get(`${this.basePath}/settings/testconfig`, config);
  }

}
