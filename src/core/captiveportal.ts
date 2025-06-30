import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Captiveportal module

// Model field types

// Access types
export interface CaptiveportalAccessApiResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalAccessLogoffResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalAccessLogonRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaptiveportalAccessLogonResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface CaptiveportalServiceDelTemplateRequest {
  uuid: string;
}

export interface CaptiveportalServiceDelTemplateResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalServiceGetTemplateResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaptiveportalServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalServiceSaveTemplateRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaptiveportalServiceSaveTemplateResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalServiceSearchTemplatesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Session types
export interface CaptiveportalSessionConnectRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaptiveportalSessionConnectResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalSessionDisconnectRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaptiveportalSessionDisconnectResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalSessionListResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalSessionSearchResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalSessionZonesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface CaptiveportalSettingsAddZoneRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaptiveportalSettingsAddZoneResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalSettingsDelZoneRequest {
  uuid: string;
}

export interface CaptiveportalSettingsDelZoneResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalSettingsGetZoneResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaptiveportalSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalSettingsSetZoneRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaptiveportalSettingsSetZoneResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalSettingsToggleZoneRequest {
  enabled?: boolean;
}

export interface CaptiveportalSettingsToggleZoneResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Voucher types
export interface CaptiveportalVoucherDropExpiredVouchersRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaptiveportalVoucherDropExpiredVouchersResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalVoucherDropVoucherGroupRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaptiveportalVoucherDropVoucherGroupResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalVoucherExpireVoucherRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaptiveportalVoucherExpireVoucherResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalVoucherGenerateVouchersRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface CaptiveportalVoucherGenerateVouchersResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalVoucherListProvidersResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalVoucherListVoucherGroupsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface CaptiveportalVoucherListVouchersResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface CaptiveportalZone {
}

export interface CaptiveportalTemplate {
}

export class CaptiveportalApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Access methods
  async accessApi(config?: RequestConfig): Promise<ApiResponse<CaptiveportalAccessApiResponse>> {
    return this.http.get(`/api/captiveportal/access/api`, config);
  }

  async accessLogoff(zoneid?: string, config?: RequestConfig): Promise<ApiResponse<CaptiveportalAccessLogoffResponse>> {
    return this.http.get(`/api/captiveportal/access/logoff/${zoneid}`, config);
  }

  async accessLogon(zoneid?: string, data?: CaptiveportalAccessLogonRequest, config?: RequestConfig): Promise<ApiResponse<CaptiveportalAccessLogonResponse>> {
    return this.http.post(`/api/captiveportal/access/logon/${zoneid}`, data, config);
  }


  // Service methods
  async serviceDelTemplate(uuid: string, data?: CaptiveportalServiceDelTemplateRequest, config?: RequestConfig): Promise<ApiResponse<CaptiveportalServiceDelTemplateResponse>> {
    return this.http.post(`/api/captiveportal/service/del_template/${uuid}`, data, config);
  }

  async serviceGetTemplate(fileid?: string, config?: RequestConfig): Promise<ApiResponse<CaptiveportalServiceGetTemplateResponse>> {
    return this.http.get(`/api/captiveportal/service/get_template/${fileid}`, config);
  }

  async serviceReconfigure(data?: CaptiveportalServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<CaptiveportalServiceReconfigureResponse>> {
    return this.http.post(`/api/captiveportal/service/reconfigure`, data, config);
  }

  async serviceSaveTemplate(data?: CaptiveportalServiceSaveTemplateRequest, config?: RequestConfig): Promise<ApiResponse<CaptiveportalServiceSaveTemplateResponse>> {
    return this.http.post(`/api/captiveportal/service/save_template`, data, config);
  }

  async serviceSearchTemplates(config?: RequestConfig): Promise<ApiResponse<CaptiveportalServiceSearchTemplatesResponse>> {
    return this.http.get(`/api/captiveportal/service/search_templates`, config);
  }


  // Session methods
  async sessionConnect(zoneid?: string, data?: CaptiveportalSessionConnectRequest, config?: RequestConfig): Promise<ApiResponse<CaptiveportalSessionConnectResponse>> {
    return this.http.post(`/api/captiveportal/session/connect/${zoneid}`, data, config);
  }

  async sessionDisconnect(zoneid?: string, data?: CaptiveportalSessionDisconnectRequest, config?: RequestConfig): Promise<ApiResponse<CaptiveportalSessionDisconnectResponse>> {
    return this.http.post(`/api/captiveportal/session/disconnect/${zoneid}`, data, config);
  }

  async sessionList(zoneid?: string, config?: RequestConfig): Promise<ApiResponse<CaptiveportalSessionListResponse>> {
    return this.http.get(`/api/captiveportal/session/list/${zoneid}`, config);
  }

  async sessionSearch(config?: RequestConfig): Promise<ApiResponse<CaptiveportalSessionSearchResponse>> {
    return this.http.get(`/api/captiveportal/session/search`, config);
  }

  async sessionZones(config?: RequestConfig): Promise<ApiResponse<CaptiveportalSessionZonesResponse>> {
    return this.http.get(`/api/captiveportal/session/zones`, config);
  }


  // Settings methods
  async settingsAddZone(data?: CaptiveportalSettingsAddZoneRequest, config?: RequestConfig): Promise<ApiResponse<CaptiveportalSettingsAddZoneResponse>> {
    return this.http.post(`/api/captiveportal/settings/add_zone`, data, config);
  }

  async settingsDelZone(uuid: string, data?: CaptiveportalSettingsDelZoneRequest, config?: RequestConfig): Promise<ApiResponse<CaptiveportalSettingsDelZoneResponse>> {
    return this.http.post(`/api/captiveportal/settings/del_zone/${uuid}`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<CaptiveportalSettingsGetResponse>> {
    return this.http.get(`/api/captiveportal/settings/get`, config);
  }

  async settingsGetZone(uuid?: string, config?: RequestConfig): Promise<ApiResponse<CaptiveportalSettingsGetZoneResponse>> {
    return this.http.get(`/api/captiveportal/settings/get_zone/${uuid}`, config);
  }

  async settingsSet(data?: CaptiveportalSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<CaptiveportalSettingsSetResponse>> {
    return this.http.post(`/api/captiveportal/settings/set`, data, config);
  }

  async settingsSetZone(uuid: string, data?: CaptiveportalSettingsSetZoneRequest, config?: RequestConfig): Promise<ApiResponse<CaptiveportalSettingsSetZoneResponse>> {
    return this.http.post(`/api/captiveportal/settings/set_zone/${uuid}`, data, config);
  }

  async settingsToggleZone(uuid: string, enabled?: string, data?: CaptiveportalSettingsToggleZoneRequest, config?: RequestConfig): Promise<ApiResponse<CaptiveportalSettingsToggleZoneResponse>> {
    return this.http.post(`/api/captiveportal/settings/toggle_zone/${uuid}/${enabled}`, data, config);
  }


  // Voucher methods
  async voucherDropExpiredVouchers(provider: string, group: string, data?: CaptiveportalVoucherDropExpiredVouchersRequest, config?: RequestConfig): Promise<ApiResponse<CaptiveportalVoucherDropExpiredVouchersResponse>> {
    return this.http.post(`/api/captiveportal/voucher/drop_expired_vouchers/${provider}/${group}`, data, config);
  }

  async voucherDropVoucherGroup(provider: string, group: string, data?: CaptiveportalVoucherDropVoucherGroupRequest, config?: RequestConfig): Promise<ApiResponse<CaptiveportalVoucherDropVoucherGroupResponse>> {
    return this.http.post(`/api/captiveportal/voucher/drop_voucher_group/${provider}/${group}`, data, config);
  }

  async voucherExpireVoucher(provider: string, data?: CaptiveportalVoucherExpireVoucherRequest, config?: RequestConfig): Promise<ApiResponse<CaptiveportalVoucherExpireVoucherResponse>> {
    return this.http.post(`/api/captiveportal/voucher/expire_voucher/${provider}`, data, config);
  }

  async voucherGenerateVouchers(provider: string, data?: CaptiveportalVoucherGenerateVouchersRequest, config?: RequestConfig): Promise<ApiResponse<CaptiveportalVoucherGenerateVouchersResponse>> {
    return this.http.post(`/api/captiveportal/voucher/generate_vouchers/${provider}`, data, config);
  }

  async voucherListProviders(config?: RequestConfig): Promise<ApiResponse<CaptiveportalVoucherListProvidersResponse>> {
    return this.http.get(`/api/captiveportal/voucher/list_providers`, config);
  }

  async voucherListVoucherGroups(provider: string, config?: RequestConfig): Promise<ApiResponse<CaptiveportalVoucherListVoucherGroupsResponse>> {
    return this.http.get(`/api/captiveportal/voucher/list_voucher_groups/${provider}`, config);
  }

  async voucherListVouchers(provider: string, group: string, config?: RequestConfig): Promise<ApiResponse<CaptiveportalVoucherListVouchersResponse>> {
    return this.http.get(`/api/captiveportal/voucher/list_vouchers/${provider}/${group}`, config);
  }

}
