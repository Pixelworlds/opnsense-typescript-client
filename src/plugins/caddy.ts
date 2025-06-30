import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Caddy module

// Model field types

// Diagnostics types
export interface CaddyDiagnosticsCaddyfileResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyDiagnosticsConfigResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyDiagnosticsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyDiagnosticsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyDiagnosticsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// General types
export interface CaddyGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// ReverseProxy types
export interface CaddyReverseProxyAddAccessListRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxyAddAccessListResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyAddBasicAuthRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxyAddBasicAuthResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyAddHandleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxyAddHandleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyAddHeaderRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxyAddHeaderResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyAddLayer4Request {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxyAddLayer4Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyAddLayer4OpenvpnRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxyAddLayer4OpenvpnResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyAddReverseProxyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxyAddReverseProxyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyAddSubdomainRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxyAddSubdomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyDelAccessListRequest {
  uuid: string;
}

export interface CaddyReverseProxyDelAccessListResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyDelBasicAuthRequest {
  uuid: string;
}

export interface CaddyReverseProxyDelBasicAuthResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyDelHandleRequest {
  uuid: string;
}

export interface CaddyReverseProxyDelHandleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyDelHeaderRequest {
  uuid: string;
}

export interface CaddyReverseProxyDelHeaderResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyDelLayer4Request {
  uuid: string;
}

export interface CaddyReverseProxyDelLayer4Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyDelLayer4OpenvpnRequest {
  uuid: string;
}

export interface CaddyReverseProxyDelLayer4OpenvpnResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyDelReverseProxyRequest {
  uuid: string;
}

export interface CaddyReverseProxyDelReverseProxyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyDelSubdomainRequest {
  uuid: string;
}

export interface CaddyReverseProxyDelSubdomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyGetAccessListResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyGetAllReverseDomainsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyGetBasicAuthResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyGetHandleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyGetHeaderResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyGetLayer4Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyGetLayer4OpenvpnResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyGetReverseProxyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyGetSubdomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxySetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxySetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxySetAccessListRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxySetAccessListResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxySetBasicAuthRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxySetBasicAuthResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxySetHandleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxySetHandleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxySetHeaderRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxySetHeaderResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxySetLayer4Request {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxySetLayer4Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxySetLayer4OpenvpnRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxySetLayer4OpenvpnResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxySetReverseProxyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxySetReverseProxyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxySetSubdomainRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyReverseProxySetSubdomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyToggleHandleRequest {
  enabled?: boolean;
}

export interface CaddyReverseProxyToggleHandleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyToggleLayer4Request {
  enabled?: boolean;
}

export interface CaddyReverseProxyToggleLayer4Response {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyToggleLayer4OpenvpnRequest {
  enabled?: boolean;
}

export interface CaddyReverseProxyToggleLayer4OpenvpnResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyToggleReverseProxyRequest {
  enabled?: boolean;
}

export interface CaddyReverseProxyToggleReverseProxyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyReverseProxyToggleSubdomainRequest {
  enabled?: boolean;
}

export interface CaddyReverseProxyToggleSubdomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface CaddyServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaddyServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaddyServiceValidateResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface CaddyReverse {
}

export interface CaddySubdomain {
}

export interface CaddyHandle {
}

export interface CaddyAccesslist {
}

export interface CaddyBasicauth {
}

export interface CaddyHeader {
}

export interface CaddyLayer4 {
}

export interface CaddyLayer4openvpn {
}

export class CaddyApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Diagnostics methods
  async diagnosticsCaddyfile(config?: RequestConfig): Promise<ApiResponse<CaddyDiagnosticsCaddyfileResponse>> {
    return this.http.get(`/api/caddy/diagnostics/caddyfile`, config);
  }

  async diagnosticsConfig(config?: RequestConfig): Promise<ApiResponse<CaddyDiagnosticsConfigResponse>> {
    return this.http.get(`/api/caddy/diagnostics/config`, config);
  }

  async diagnosticsGet(config?: RequestConfig): Promise<ApiResponse<CaddyDiagnosticsGetResponse>> {
    return this.http.get(`/api/caddy/diagnostics/get`, config);
  }

  async diagnosticsSet(data?: CaddyDiagnosticsSetRequest, config?: RequestConfig): Promise<ApiResponse<CaddyDiagnosticsSetResponse>> {
    return this.http.post(`/api/caddy/diagnostics/set`, data, config);
  }


  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<CaddyGeneralGetResponse>> {
    return this.http.get(`/api/caddy/general/get`, config);
  }

  async generalSet(data?: CaddyGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<CaddyGeneralSetResponse>> {
    return this.http.post(`/api/caddy/general/set`, data, config);
  }


  // ReverseProxy methods
  async reverseProxyAddAccessList(data?: CaddyReverseProxyAddAccessListRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyAddAccessListResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/add_access_list`, data, config);
  }

  async reverseProxyAddBasicAuth(data?: CaddyReverseProxyAddBasicAuthRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyAddBasicAuthResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/add_basic_auth`, data, config);
  }

  async reverseProxyAddHandle(data?: CaddyReverseProxyAddHandleRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyAddHandleResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/add_handle`, data, config);
  }

  async reverseProxyAddHeader(data?: CaddyReverseProxyAddHeaderRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyAddHeaderResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/add_header`, data, config);
  }

  async reverseProxyAddLayer4(data?: CaddyReverseProxyAddLayer4Request, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyAddLayer4Response>> {
    return this.http.post(`/api/caddy/reverse_proxy/add_layer4`, data, config);
  }

  async reverseProxyAddLayer4Openvpn(data?: CaddyReverseProxyAddLayer4OpenvpnRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyAddLayer4OpenvpnResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/add_layer4_openvpn`, data, config);
  }

  async reverseProxyAddReverseProxy(data?: CaddyReverseProxyAddReverseProxyRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyAddReverseProxyResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/add_reverse_proxy`, data, config);
  }

  async reverseProxyAddSubdomain(data?: CaddyReverseProxyAddSubdomainRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyAddSubdomainResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/add_subdomain`, data, config);
  }

  async reverseProxyDelAccessList(uuid: string, data?: CaddyReverseProxyDelAccessListRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyDelAccessListResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/del_access_list/${uuid}`, data, config);
  }

  async reverseProxyDelBasicAuth(uuid: string, data?: CaddyReverseProxyDelBasicAuthRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyDelBasicAuthResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/del_basic_auth/${uuid}`, data, config);
  }

  async reverseProxyDelHandle(uuid: string, data?: CaddyReverseProxyDelHandleRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyDelHandleResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/del_handle/${uuid}`, data, config);
  }

  async reverseProxyDelHeader(uuid: string, data?: CaddyReverseProxyDelHeaderRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyDelHeaderResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/del_header/${uuid}`, data, config);
  }

  async reverseProxyDelLayer4(uuid: string, data?: CaddyReverseProxyDelLayer4Request, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyDelLayer4Response>> {
    return this.http.post(`/api/caddy/reverse_proxy/del_layer4/${uuid}`, data, config);
  }

  async reverseProxyDelLayer4Openvpn(uuid: string, data?: CaddyReverseProxyDelLayer4OpenvpnRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyDelLayer4OpenvpnResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/del_layer4_openvpn/${uuid}`, data, config);
  }

  async reverseProxyDelReverseProxy(uuid: string, data?: CaddyReverseProxyDelReverseProxyRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyDelReverseProxyResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/del_reverse_proxy/${uuid}`, data, config);
  }

  async reverseProxyDelSubdomain(uuid: string, data?: CaddyReverseProxyDelSubdomainRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyDelSubdomainResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/del_subdomain/${uuid}`, data, config);
  }

  async reverseProxyGet(config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyGetResponse>> {
    return this.http.get(`/api/caddy/reverse_proxy/get`, config);
  }

  async reverseProxyGetAccessList(uuid?: string, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyGetAccessListResponse>> {
    return this.http.get(`/api/caddy/reverse_proxy/get_access_list/${uuid}`, config);
  }

  async reverseProxyGetAllReverseDomains(config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyGetAllReverseDomainsResponse>> {
    return this.http.get(`/api/caddy/reverse_proxy/get_all_reverse_domains`, config);
  }

  async reverseProxyGetBasicAuth(uuid?: string, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyGetBasicAuthResponse>> {
    return this.http.get(`/api/caddy/reverse_proxy/get_basic_auth/${uuid}`, config);
  }

  async reverseProxyGetHandle(uuid?: string, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyGetHandleResponse>> {
    return this.http.get(`/api/caddy/reverse_proxy/get_handle/${uuid}`, config);
  }

  async reverseProxyGetHeader(uuid?: string, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyGetHeaderResponse>> {
    return this.http.get(`/api/caddy/reverse_proxy/get_header/${uuid}`, config);
  }

  async reverseProxyGetLayer4(uuid?: string, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyGetLayer4Response>> {
    return this.http.get(`/api/caddy/reverse_proxy/get_layer4/${uuid}`, config);
  }

  async reverseProxyGetLayer4Openvpn(uuid?: string, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyGetLayer4OpenvpnResponse>> {
    return this.http.get(`/api/caddy/reverse_proxy/get_layer4_openvpn/${uuid}`, config);
  }

  async reverseProxyGetReverseProxy(uuid?: string, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyGetReverseProxyResponse>> {
    return this.http.get(`/api/caddy/reverse_proxy/get_reverse_proxy/${uuid}`, config);
  }

  async reverseProxyGetSubdomain(uuid?: string, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyGetSubdomainResponse>> {
    return this.http.get(`/api/caddy/reverse_proxy/get_subdomain/${uuid}`, config);
  }

  async reverseProxySet(data?: CaddyReverseProxySetRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxySetResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/set`, data, config);
  }

  async reverseProxySetAccessList(uuid: string, data?: CaddyReverseProxySetAccessListRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxySetAccessListResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/set_access_list/${uuid}`, data, config);
  }

  async reverseProxySetBasicAuth(uuid: string, data?: CaddyReverseProxySetBasicAuthRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxySetBasicAuthResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/set_basic_auth/${uuid}`, data, config);
  }

  async reverseProxySetHandle(uuid: string, data?: CaddyReverseProxySetHandleRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxySetHandleResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/set_handle/${uuid}`, data, config);
  }

  async reverseProxySetHeader(uuid: string, data?: CaddyReverseProxySetHeaderRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxySetHeaderResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/set_header/${uuid}`, data, config);
  }

  async reverseProxySetLayer4(uuid: string, data?: CaddyReverseProxySetLayer4Request, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxySetLayer4Response>> {
    return this.http.post(`/api/caddy/reverse_proxy/set_layer4/${uuid}`, data, config);
  }

  async reverseProxySetLayer4Openvpn(uuid: string, data?: CaddyReverseProxySetLayer4OpenvpnRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxySetLayer4OpenvpnResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/set_layer4_openvpn/${uuid}`, data, config);
  }

  async reverseProxySetReverseProxy(uuid: string, data?: CaddyReverseProxySetReverseProxyRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxySetReverseProxyResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/set_reverse_proxy/${uuid}`, data, config);
  }

  async reverseProxySetSubdomain(uuid: string, data?: CaddyReverseProxySetSubdomainRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxySetSubdomainResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/set_subdomain/${uuid}`, data, config);
  }

  async reverseProxyToggleHandle(uuid: string, enabled?: string, data?: CaddyReverseProxyToggleHandleRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyToggleHandleResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/toggle_handle/${uuid}/${enabled}`, data, config);
  }

  async reverseProxyToggleLayer4(uuid: string, enabled?: string, data?: CaddyReverseProxyToggleLayer4Request, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyToggleLayer4Response>> {
    return this.http.post(`/api/caddy/reverse_proxy/toggle_layer4/${uuid}/${enabled}`, data, config);
  }

  async reverseProxyToggleLayer4Openvpn(uuid: string, enabled?: string, data?: CaddyReverseProxyToggleLayer4OpenvpnRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyToggleLayer4OpenvpnResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/toggle_layer4_openvpn/${uuid}/${enabled}`, data, config);
  }

  async reverseProxyToggleReverseProxy(uuid: string, enabled?: string, data?: CaddyReverseProxyToggleReverseProxyRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyToggleReverseProxyResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/toggle_reverse_proxy/${uuid}/${enabled}`, data, config);
  }

  async reverseProxyToggleSubdomain(uuid: string, enabled?: string, data?: CaddyReverseProxyToggleSubdomainRequest, config?: RequestConfig): Promise<ApiResponse<CaddyReverseProxyToggleSubdomainResponse>> {
    return this.http.post(`/api/caddy/reverse_proxy/toggle_subdomain/${uuid}/${enabled}`, data, config);
  }


  // Service methods
  async serviceReconfigure(data?: CaddyServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<CaddyServiceReconfigureResponse>> {
    return this.http.post(`/api/caddy/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: CaddyServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<CaddyServiceRestartResponse>> {
    return this.http.post(`/api/caddy/service/restart`, data, config);
  }

  async serviceStart(data?: CaddyServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<CaddyServiceStartResponse>> {
    return this.http.post(`/api/caddy/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<CaddyServiceStatusResponse>> {
    return this.http.get(`/api/caddy/service/status`, config);
  }

  async serviceStop(data?: CaddyServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<CaddyServiceStopResponse>> {
    return this.http.post(`/api/caddy/service/stop`, data, config);
  }

  async serviceValidate(config?: RequestConfig): Promise<ApiResponse<CaddyServiceValidateResponse>> {
    return this.http.get(`/api/caddy/service/validate`, config);
  }

}
