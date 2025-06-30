import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Bans methods
  async bansDelban(uuid: string, data?: NginxBansDelbanRequest, config?: RequestConfig): Promise<ApiResponse<NginxBansDelbanResponse>> {
    return this.http.post(`/api/nginx/bans/delban/${uuid}`, data, config);
  }

  async bansGet(config?: RequestConfig): Promise<ApiResponse<NginxBansGetResponse>> {
    return this.http.get(`/api/nginx/bans/get`, config);
  }

  async bansSet(data?: NginxBansSetRequest, config?: RequestConfig): Promise<ApiResponse<NginxBansSetResponse>> {
    return this.http.post(`/api/nginx/bans/set`, data, config);
  }


  // Logs methods
  async logsAccesses(uuid?: string, fileno?: string, page?: string, perPage?: string, query?: string, config?: RequestConfig): Promise<ApiResponse<NginxLogsAccessesResponse>> {
    return this.http.get(`/api/nginx/logs/accesses/${uuid}/${fileno}/${page}/${perPage}/${query}`, config);
  }

  async logsErrors(uuid?: string, fileno?: string, page?: string, perPage?: string, query?: string, config?: RequestConfig): Promise<ApiResponse<NginxLogsErrorsResponse>> {
    return this.http.get(`/api/nginx/logs/errors/${uuid}/${fileno}/${page}/${perPage}/${query}`, config);
  }

  async logsStreamaccesses(uuid?: string, fileno?: string, page?: string, perPage?: string, query?: string, config?: RequestConfig): Promise<ApiResponse<NginxLogsStreamaccessesResponse>> {
    return this.http.get(`/api/nginx/logs/streamaccesses/${uuid}/${fileno}/${page}/${perPage}/${query}`, config);
  }

  async logsStreamerrors(uuid?: string, fileno?: string, page?: string, perPage?: string, query?: string, config?: RequestConfig): Promise<ApiResponse<NginxLogsStreamerrorsResponse>> {
    return this.http.get(`/api/nginx/logs/streamerrors/${uuid}/${fileno}/${page}/${perPage}/${query}`, config);
  }

  async logsTlsHandshakes(config?: RequestConfig): Promise<ApiResponse<NginxLogsTlsHandshakesResponse>> {
    return this.http.get(`/api/nginx/logs/tls_handshakes`, config);
  }


  // Service methods
  async serviceReconfigure(data?: NginxServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<NginxServiceReconfigureResponse>> {
    return this.http.post(`/api/nginx/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: NginxServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<NginxServiceRestartResponse>> {
    return this.http.post(`/api/nginx/service/restart`, data, config);
  }

  async serviceStart(data?: NginxServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<NginxServiceStartResponse>> {
    return this.http.post(`/api/nginx/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<NginxServiceStatusResponse>> {
    return this.http.get(`/api/nginx/service/status`, config);
  }

  async serviceStop(config?: RequestConfig): Promise<ApiResponse<NginxServiceStopResponse>> {
    return this.http.get(`/api/nginx/service/stop`, config);
  }

  async serviceVts(config?: RequestConfig): Promise<ApiResponse<NginxServiceVtsResponse>> {
    return this.http.get(`/api/nginx/service/vts`, config);
  }


  // Settings methods
  async settingsAddcachePath(data?: NginxSettingsAddcachePathRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddcachePathResponse>> {
    return this.http.post(`/api/nginx/settings/addcache_path`, data, config);
  }

  async settingsAddcredential(data?: NginxSettingsAddcredentialRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddcredentialResponse>> {
    return this.http.post(`/api/nginx/settings/addcredential`, data, config);
  }

  async settingsAddcustompolicy(data?: NginxSettingsAddcustompolicyRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddcustompolicyResponse>> {
    return this.http.post(`/api/nginx/settings/addcustompolicy`, data, config);
  }

  async settingsAdderrorpage(data?: NginxSettingsAdderrorpageRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAdderrorpageResponse>> {
    return this.http.post(`/api/nginx/settings/adderrorpage`, data, config);
  }

  async settingsAddhttprewrite(data?: NginxSettingsAddhttprewriteRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddhttprewriteResponse>> {
    return this.http.post(`/api/nginx/settings/addhttprewrite`, data, config);
  }

  async settingsAddhttpserver(data?: NginxSettingsAddhttpserverRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddhttpserverResponse>> {
    return this.http.post(`/api/nginx/settings/addhttpserver`, data, config);
  }

  async settingsAddipacl(data?: NginxSettingsAddipaclRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddipaclResponse>> {
    return this.http.post(`/api/nginx/settings/addipacl`, data, config);
  }

  async settingsAddlimitRequestConnection(data?: NginxSettingsAddlimitRequestConnectionRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddlimitRequestConnectionResponse>> {
    return this.http.post(`/api/nginx/settings/addlimit_request_connection`, data, config);
  }

  async settingsAddlimitZone(data?: NginxSettingsAddlimitZoneRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddlimitZoneResponse>> {
    return this.http.post(`/api/nginx/settings/addlimit_zone`, data, config);
  }

  async settingsAddlocation(data?: NginxSettingsAddlocationRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddlocationResponse>> {
    return this.http.post(`/api/nginx/settings/addlocation`, data, config);
  }

  async settingsAddnaxsirule(data?: NginxSettingsAddnaxsiruleRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddnaxsiruleResponse>> {
    return this.http.post(`/api/nginx/settings/addnaxsirule`, data, config);
  }

  async settingsAddresolver(data?: NginxSettingsAddresolverRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddresolverResponse>> {
    return this.http.post(`/api/nginx/settings/addresolver`, data, config);
  }

  async settingsAddsecurityHeader(data?: NginxSettingsAddsecurityHeaderRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddsecurityHeaderResponse>> {
    return this.http.post(`/api/nginx/settings/addsecurity_header`, data, config);
  }

  async settingsAddsnifwd(data?: NginxSettingsAddsnifwdRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddsnifwdResponse>> {
    return this.http.post(`/api/nginx/settings/addsnifwd`, data, config);
  }

  async settingsAddstreamserver(data?: NginxSettingsAddstreamserverRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddstreamserverResponse>> {
    return this.http.post(`/api/nginx/settings/addstreamserver`, data, config);
  }

  async settingsAddsyslogTarget(data?: NginxSettingsAddsyslogTargetRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddsyslogTargetResponse>> {
    return this.http.post(`/api/nginx/settings/addsyslog_target`, data, config);
  }

  async settingsAddtlsFingerprint(data?: NginxSettingsAddtlsFingerprintRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddtlsFingerprintResponse>> {
    return this.http.post(`/api/nginx/settings/addtls_fingerprint`, data, config);
  }

  async settingsAddupstream(data?: NginxSettingsAddupstreamRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddupstreamResponse>> {
    return this.http.post(`/api/nginx/settings/addupstream`, data, config);
  }

  async settingsAddupstreamserver(data?: NginxSettingsAddupstreamserverRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAddupstreamserverResponse>> {
    return this.http.post(`/api/nginx/settings/addupstreamserver`, data, config);
  }

  async settingsAdduserlist(data?: NginxSettingsAdduserlistRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsAdduserlistResponse>> {
    return this.http.post(`/api/nginx/settings/adduserlist`, data, config);
  }

  async settingsDelcachePath(uuid: string, data?: NginxSettingsDelcachePathRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDelcachePathResponse>> {
    return this.http.post(`/api/nginx/settings/delcache_path/${uuid}`, data, config);
  }

  async settingsDelcredential(uuid: string, data?: NginxSettingsDelcredentialRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDelcredentialResponse>> {
    return this.http.post(`/api/nginx/settings/delcredential/${uuid}`, data, config);
  }

  async settingsDelcustompolicy(uuid: string, data?: NginxSettingsDelcustompolicyRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDelcustompolicyResponse>> {
    return this.http.post(`/api/nginx/settings/delcustompolicy/${uuid}`, data, config);
  }

  async settingsDelerrorpage(uuid: string, data?: NginxSettingsDelerrorpageRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDelerrorpageResponse>> {
    return this.http.post(`/api/nginx/settings/delerrorpage/${uuid}`, data, config);
  }

  async settingsDelhttprewrite(uuid: string, data?: NginxSettingsDelhttprewriteRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDelhttprewriteResponse>> {
    return this.http.post(`/api/nginx/settings/delhttprewrite/${uuid}`, data, config);
  }

  async settingsDelhttpserver(uuid: string, data?: NginxSettingsDelhttpserverRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDelhttpserverResponse>> {
    return this.http.post(`/api/nginx/settings/delhttpserver/${uuid}`, data, config);
  }

  async settingsDelipacl(uuid: string, data?: NginxSettingsDelipaclRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDelipaclResponse>> {
    return this.http.post(`/api/nginx/settings/delipacl/${uuid}`, data, config);
  }

  async settingsDellimitRequestConnection(uuid: string, data?: NginxSettingsDellimitRequestConnectionRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDellimitRequestConnectionResponse>> {
    return this.http.post(`/api/nginx/settings/dellimit_request_connection/${uuid}`, data, config);
  }

  async settingsDellimitZone(uuid: string, data?: NginxSettingsDellimitZoneRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDellimitZoneResponse>> {
    return this.http.post(`/api/nginx/settings/dellimit_zone/${uuid}`, data, config);
  }

  async settingsDellocation(uuid: string, data?: NginxSettingsDellocationRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDellocationResponse>> {
    return this.http.post(`/api/nginx/settings/dellocation/${uuid}`, data, config);
  }

  async settingsDelnaxsirule(uuid: string, data?: NginxSettingsDelnaxsiruleRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDelnaxsiruleResponse>> {
    return this.http.post(`/api/nginx/settings/delnaxsirule/${uuid}`, data, config);
  }

  async settingsDelresolver(uuid: string, data?: NginxSettingsDelresolverRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDelresolverResponse>> {
    return this.http.post(`/api/nginx/settings/delresolver/${uuid}`, data, config);
  }

  async settingsDelsecurityHeader(uuid: string, data?: NginxSettingsDelsecurityHeaderRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDelsecurityHeaderResponse>> {
    return this.http.post(`/api/nginx/settings/delsecurity_header/${uuid}`, data, config);
  }

  async settingsDelsnifwd(uuid: string, data?: NginxSettingsDelsnifwdRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDelsnifwdResponse>> {
    return this.http.post(`/api/nginx/settings/delsnifwd/${uuid}`, data, config);
  }

  async settingsDelstreamserver(uuid: string, data?: NginxSettingsDelstreamserverRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDelstreamserverResponse>> {
    return this.http.post(`/api/nginx/settings/delstreamserver/${uuid}`, data, config);
  }

  async settingsDelsyslogTarget(uuid: string, data?: NginxSettingsDelsyslogTargetRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDelsyslogTargetResponse>> {
    return this.http.post(`/api/nginx/settings/delsyslog_target/${uuid}`, data, config);
  }

  async settingsDeltlsFingerprint(uuid: string, data?: NginxSettingsDeltlsFingerprintRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDeltlsFingerprintResponse>> {
    return this.http.post(`/api/nginx/settings/deltls_fingerprint/${uuid}`, data, config);
  }

  async settingsDelupstream(uuid: string, data?: NginxSettingsDelupstreamRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDelupstreamResponse>> {
    return this.http.post(`/api/nginx/settings/delupstream/${uuid}`, data, config);
  }

  async settingsDelupstreamserver(uuid: string, data?: NginxSettingsDelupstreamserverRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDelupstreamserverResponse>> {
    return this.http.post(`/api/nginx/settings/delupstreamserver/${uuid}`, data, config);
  }

  async settingsDeluserlist(uuid: string, data?: NginxSettingsDeluserlistRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDeluserlistResponse>> {
    return this.http.post(`/api/nginx/settings/deluserlist/${uuid}`, data, config);
  }

  async settingsDownloadrules(data?: NginxSettingsDownloadrulesRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsDownloadrulesResponse>> {
    return this.http.post(`/api/nginx/settings/downloadrules`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetResponse>> {
    return this.http.get(`/api/nginx/settings/get`, config);
  }

  async settingsGetcachePath(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetcachePathResponse>> {
    return this.http.get(`/api/nginx/settings/getcache_path/${uuid}`, config);
  }

  async settingsGetcredential(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetcredentialResponse>> {
    return this.http.get(`/api/nginx/settings/getcredential/${uuid}`, config);
  }

  async settingsGetcustompolicy(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetcustompolicyResponse>> {
    return this.http.get(`/api/nginx/settings/getcustompolicy/${uuid}`, config);
  }

  async settingsGeterrorpage(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGeterrorpageResponse>> {
    return this.http.get(`/api/nginx/settings/geterrorpage/${uuid}`, config);
  }

  async settingsGethttprewrite(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGethttprewriteResponse>> {
    return this.http.get(`/api/nginx/settings/gethttprewrite/${uuid}`, config);
  }

  async settingsGethttpserver(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGethttpserverResponse>> {
    return this.http.get(`/api/nginx/settings/gethttpserver/${uuid}`, config);
  }

  async settingsGetipacl(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetipaclResponse>> {
    return this.http.get(`/api/nginx/settings/getipacl/${uuid}`, config);
  }

  async settingsGetlimitRequestConnection(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetlimitRequestConnectionResponse>> {
    return this.http.get(`/api/nginx/settings/getlimit_request_connection/${uuid}`, config);
  }

  async settingsGetlimitZone(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetlimitZoneResponse>> {
    return this.http.get(`/api/nginx/settings/getlimit_zone/${uuid}`, config);
  }

  async settingsGetlocation(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetlocationResponse>> {
    return this.http.get(`/api/nginx/settings/getlocation/${uuid}`, config);
  }

  async settingsGetnaxsirule(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetnaxsiruleResponse>> {
    return this.http.get(`/api/nginx/settings/getnaxsirule/${uuid}`, config);
  }

  async settingsGetresolver(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetresolverResponse>> {
    return this.http.get(`/api/nginx/settings/getresolver/${uuid}`, config);
  }

  async settingsGetsecurityHeader(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetsecurityHeaderResponse>> {
    return this.http.get(`/api/nginx/settings/getsecurity_header/${uuid}`, config);
  }

  async settingsGetsnifwd(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetsnifwdResponse>> {
    return this.http.get(`/api/nginx/settings/getsnifwd/${uuid}`, config);
  }

  async settingsGetstreamserver(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetstreamserverResponse>> {
    return this.http.get(`/api/nginx/settings/getstreamserver/${uuid}`, config);
  }

  async settingsGetsyslogTarget(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetsyslogTargetResponse>> {
    return this.http.get(`/api/nginx/settings/getsyslog_target/${uuid}`, config);
  }

  async settingsGettlsFingerprint(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGettlsFingerprintResponse>> {
    return this.http.get(`/api/nginx/settings/gettls_fingerprint/${uuid}`, config);
  }

  async settingsGetupstream(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetupstreamResponse>> {
    return this.http.get(`/api/nginx/settings/getupstream/${uuid}`, config);
  }

  async settingsGetupstreamserver(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetupstreamserverResponse>> {
    return this.http.get(`/api/nginx/settings/getupstreamserver/${uuid}`, config);
  }

  async settingsGetuserlist(uuid?: string, config?: RequestConfig): Promise<ApiResponse<NginxSettingsGetuserlistResponse>> {
    return this.http.get(`/api/nginx/settings/getuserlist/${uuid}`, config);
  }

  async settingsSet(data?: NginxSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetResponse>> {
    return this.http.post(`/api/nginx/settings/set`, data, config);
  }

  async settingsSetcachePath(uuid: string, data?: NginxSettingsSetcachePathRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetcachePathResponse>> {
    return this.http.post(`/api/nginx/settings/setcache_path/${uuid}`, data, config);
  }

  async settingsSetcredential(uuid: string, data?: NginxSettingsSetcredentialRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetcredentialResponse>> {
    return this.http.post(`/api/nginx/settings/setcredential/${uuid}`, data, config);
  }

  async settingsSetcustompolicy(uuid: string, data?: NginxSettingsSetcustompolicyRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetcustompolicyResponse>> {
    return this.http.post(`/api/nginx/settings/setcustompolicy/${uuid}`, data, config);
  }

  async settingsSeterrorpage(uuid: string, data?: NginxSettingsSeterrorpageRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSeterrorpageResponse>> {
    return this.http.post(`/api/nginx/settings/seterrorpage/${uuid}`, data, config);
  }

  async settingsSethttprewrite(uuid: string, data?: NginxSettingsSethttprewriteRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSethttprewriteResponse>> {
    return this.http.post(`/api/nginx/settings/sethttprewrite/${uuid}`, data, config);
  }

  async settingsSethttpserver(uuid: string, data?: NginxSettingsSethttpserverRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSethttpserverResponse>> {
    return this.http.post(`/api/nginx/settings/sethttpserver/${uuid}`, data, config);
  }

  async settingsSetipacl(uuid: string, data?: NginxSettingsSetipaclRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetipaclResponse>> {
    return this.http.post(`/api/nginx/settings/setipacl/${uuid}`, data, config);
  }

  async settingsSetlimitRequestConnection(uuid: string, data?: NginxSettingsSetlimitRequestConnectionRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetlimitRequestConnectionResponse>> {
    return this.http.post(`/api/nginx/settings/setlimit_request_connection/${uuid}`, data, config);
  }

  async settingsSetlimitZone(uuid: string, data?: NginxSettingsSetlimitZoneRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetlimitZoneResponse>> {
    return this.http.post(`/api/nginx/settings/setlimit_zone/${uuid}`, data, config);
  }

  async settingsSetlocation(uuid: string, data?: NginxSettingsSetlocationRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetlocationResponse>> {
    return this.http.post(`/api/nginx/settings/setlocation/${uuid}`, data, config);
  }

  async settingsSetnaxsirule(uuid: string, data?: NginxSettingsSetnaxsiruleRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetnaxsiruleResponse>> {
    return this.http.post(`/api/nginx/settings/setnaxsirule/${uuid}`, data, config);
  }

  async settingsSetresolver(uuid: string, data?: NginxSettingsSetresolverRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetresolverResponse>> {
    return this.http.post(`/api/nginx/settings/setresolver/${uuid}`, data, config);
  }

  async settingsSetsecurityHeader(uuid: string, data?: NginxSettingsSetsecurityHeaderRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetsecurityHeaderResponse>> {
    return this.http.post(`/api/nginx/settings/setsecurity_header/${uuid}`, data, config);
  }

  async settingsSetsnifwd(uuid: string, data?: NginxSettingsSetsnifwdRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetsnifwdResponse>> {
    return this.http.post(`/api/nginx/settings/setsnifwd/${uuid}`, data, config);
  }

  async settingsSetstreamserver(uuid: string, data?: NginxSettingsSetstreamserverRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetstreamserverResponse>> {
    return this.http.post(`/api/nginx/settings/setstreamserver/${uuid}`, data, config);
  }

  async settingsSetsyslogTarget(uuid: string, data?: NginxSettingsSetsyslogTargetRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetsyslogTargetResponse>> {
    return this.http.post(`/api/nginx/settings/setsyslog_target/${uuid}`, data, config);
  }

  async settingsSettlsFingerprint(uuid: string, data?: NginxSettingsSettlsFingerprintRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSettlsFingerprintResponse>> {
    return this.http.post(`/api/nginx/settings/settls_fingerprint/${uuid}`, data, config);
  }

  async settingsSetupstream(uuid: string, data?: NginxSettingsSetupstreamRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetupstreamResponse>> {
    return this.http.post(`/api/nginx/settings/setupstream/${uuid}`, data, config);
  }

  async settingsSetupstreamserver(uuid: string, data?: NginxSettingsSetupstreamserverRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetupstreamserverResponse>> {
    return this.http.post(`/api/nginx/settings/setupstreamserver/${uuid}`, data, config);
  }

  async settingsSetuserlist(uuid: string, data?: NginxSettingsSetuserlistRequest, config?: RequestConfig): Promise<ApiResponse<NginxSettingsSetuserlistResponse>> {
    return this.http.post(`/api/nginx/settings/setuserlist/${uuid}`, data, config);
  }

  async settingsShowconfig(config?: RequestConfig): Promise<ApiResponse<NginxSettingsShowconfigResponse>> {
    return this.http.get(`/api/nginx/settings/showconfig`, config);
  }

  async settingsTestconfig(config?: RequestConfig): Promise<ApiResponse<NginxSettingsTestconfigResponse>> {
    return this.http.get(`/api/nginx/settings/testconfig`, config);
  }

}
