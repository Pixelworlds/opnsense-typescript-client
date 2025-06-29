import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/captiveportal';
  }

  // Access methods
  async accessApi(config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalAccessApiResponse>> {
    return this.client.get(`${this.basePath}/access/api`, config);
  }

  async accessLogoff(zoneid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalAccessLogoffResponse>> {
    return this.client.get(`${this.basePath}/access/logoff/${zoneid}`, config);
  }

  async accessLogon(zoneid?: string, data?: CaptiveportalAccessLogonRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalAccessLogonResponse>> {
    return this.client.post(`${this.basePath}/access/logon/${zoneid}`, data, config);
  }


  // Service methods
  async serviceDelTemplate(uuid: string, data?: CaptiveportalServiceDelTemplateRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalServiceDelTemplateResponse>> {
    return this.client.post(`${this.basePath}/service/del_template/${uuid}`, data, config);
  }

  async serviceGetTemplate(fileid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalServiceGetTemplateResponse>> {
    return this.client.get(`${this.basePath}/service/get_template/${fileid}`, config);
  }

  async serviceReconfigure(data?: CaptiveportalServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceSaveTemplate(data?: CaptiveportalServiceSaveTemplateRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalServiceSaveTemplateResponse>> {
    return this.client.post(`${this.basePath}/service/save_template`, data, config);
  }

  async serviceSearchTemplates(config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalServiceSearchTemplatesResponse>> {
    return this.client.get(`${this.basePath}/service/search_templates`, config);
  }


  // Session methods
  async sessionConnect(zoneid?: string, data?: CaptiveportalSessionConnectRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalSessionConnectResponse>> {
    return this.client.post(`${this.basePath}/session/connect/${zoneid}`, data, config);
  }

  async sessionDisconnect(zoneid?: string, data?: CaptiveportalSessionDisconnectRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalSessionDisconnectResponse>> {
    return this.client.post(`${this.basePath}/session/disconnect/${zoneid}`, data, config);
  }

  async sessionList(zoneid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalSessionListResponse>> {
    return this.client.get(`${this.basePath}/session/list/${zoneid}`, config);
  }

  async sessionSearch(config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalSessionSearchResponse>> {
    return this.client.get(`${this.basePath}/session/search`, config);
  }

  async sessionZones(config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalSessionZonesResponse>> {
    return this.client.get(`${this.basePath}/session/zones`, config);
  }


  // Settings methods
  async settingsAddZone(data?: CaptiveportalSettingsAddZoneRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalSettingsAddZoneResponse>> {
    return this.client.post(`${this.basePath}/settings/add_zone`, data, config);
  }

  async settingsDelZone(uuid: string, data?: CaptiveportalSettingsDelZoneRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalSettingsDelZoneResponse>> {
    return this.client.post(`${this.basePath}/settings/del_zone/${uuid}`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetZone(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalSettingsGetZoneResponse>> {
    return this.client.get(`${this.basePath}/settings/get_zone/${uuid}`, config);
  }

  async settingsSet(data?: CaptiveportalSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }

  async settingsSetZone(uuid: string, data?: CaptiveportalSettingsSetZoneRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalSettingsSetZoneResponse>> {
    return this.client.post(`${this.basePath}/settings/set_zone/${uuid}`, data, config);
  }

  async settingsToggleZone(uuid: string, enabled?: string, data?: CaptiveportalSettingsToggleZoneRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalSettingsToggleZoneResponse>> {
    return this.client.post(`${this.basePath}/settings/toggle_zone/${uuid}/${enabled}`, data, config);
  }


  // Voucher methods
  async voucherDropExpiredVouchers(provider: string, group: string, data?: CaptiveportalVoucherDropExpiredVouchersRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalVoucherDropExpiredVouchersResponse>> {
    return this.client.post(`${this.basePath}/voucher/drop_expired_vouchers/${provider}/${group}`, data, config);
  }

  async voucherDropVoucherGroup(provider: string, group: string, data?: CaptiveportalVoucherDropVoucherGroupRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalVoucherDropVoucherGroupResponse>> {
    return this.client.post(`${this.basePath}/voucher/drop_voucher_group/${provider}/${group}`, data, config);
  }

  async voucherExpireVoucher(provider: string, data?: CaptiveportalVoucherExpireVoucherRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalVoucherExpireVoucherResponse>> {
    return this.client.post(`${this.basePath}/voucher/expire_voucher/${provider}`, data, config);
  }

  async voucherGenerateVouchers(provider: string, data?: CaptiveportalVoucherGenerateVouchersRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalVoucherGenerateVouchersResponse>> {
    return this.client.post(`${this.basePath}/voucher/generate_vouchers/${provider}`, data, config);
  }

  async voucherListProviders(config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalVoucherListProvidersResponse>> {
    return this.client.get(`${this.basePath}/voucher/list_providers`, config);
  }

  async voucherListVoucherGroups(provider: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalVoucherListVoucherGroupsResponse>> {
    return this.client.get(`${this.basePath}/voucher/list_voucher_groups/${provider}`, config);
  }

  async voucherListVouchers(provider: string, group: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CaptiveportalVoucherListVouchersResponse>> {
    return this.client.get(`${this.basePath}/voucher/list_vouchers/${provider}/${group}`, config);
  }

}
