import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Bind module

// Model field types

// Acl types
export interface BindAclAddAclRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindAclAddAclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindAclDelAclRequest {
  uuid: string;
}

export interface BindAclDelAclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindAclGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindAclGetAclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindAclSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindAclSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindAclSetAclRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindAclSetAclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindAclToggleAclRequest {
  enabled?: boolean;
}

export interface BindAclToggleAclResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Dnsbl types
export interface BindDnsblGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindDnsblSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindDnsblSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Domain types
export interface BindDomainAddPrimaryDomainRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindDomainAddPrimaryDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindDomainAddSecondaryDomainRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindDomainAddSecondaryDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindDomainDelDomainRequest {
  uuid: string;
}

export interface BindDomainDelDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindDomainGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindDomainGetDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindDomainSearchMasterDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindDomainSearchSlaveDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindDomainSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindDomainSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindDomainSetDomainRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindDomainSetDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindDomainToggleDomainRequest {
  enabled?: boolean;
}

export interface BindDomainToggleDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// General types
export interface BindGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindGeneralZoneshowResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindGeneralZonetestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Record types
export interface BindRecordAddRecordRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindRecordAddRecordResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindRecordDelRecordRequest {
  uuid: string;
}

export interface BindRecordDelRecordResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindRecordGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindRecordGetRecordResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindRecordSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindRecordSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindRecordSetRecordRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindRecordSetRecordResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindRecordToggleRecordRequest {
  enabled?: boolean;
}

export interface BindRecordToggleRecordResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface BindServiceDnsblResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface BindServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface BindServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface BindAcl {
}

export class BindApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Acl methods
  async aclAddAcl(data?: BindAclAddAclRequest, config?: RequestConfig): Promise<ApiResponse<BindAclAddAclResponse>> {
    return this.http.post(`/api/bind/acl/add_acl`, data, config);
  }

  async aclDelAcl(uuid: string, data?: BindAclDelAclRequest, config?: RequestConfig): Promise<ApiResponse<BindAclDelAclResponse>> {
    return this.http.post(`/api/bind/acl/del_acl/${uuid}`, data, config);
  }

  async aclGet(config?: RequestConfig): Promise<ApiResponse<BindAclGetResponse>> {
    return this.http.get(`/api/bind/acl/get`, config);
  }

  async aclGetAcl(uuid?: string, config?: RequestConfig): Promise<ApiResponse<BindAclGetAclResponse>> {
    return this.http.get(`/api/bind/acl/get_acl/${uuid}`, config);
  }

  async aclSet(data?: BindAclSetRequest, config?: RequestConfig): Promise<ApiResponse<BindAclSetResponse>> {
    return this.http.post(`/api/bind/acl/set`, data, config);
  }

  async aclSetAcl(uuid: string, data?: BindAclSetAclRequest, config?: RequestConfig): Promise<ApiResponse<BindAclSetAclResponse>> {
    return this.http.post(`/api/bind/acl/set_acl/${uuid}`, data, config);
  }

  async aclToggleAcl(uuid: string, data?: BindAclToggleAclRequest, config?: RequestConfig): Promise<ApiResponse<BindAclToggleAclResponse>> {
    return this.http.post(`/api/bind/acl/toggle_acl/${uuid}`, data, config);
  }


  // Dnsbl methods
  async dnsblGet(config?: RequestConfig): Promise<ApiResponse<BindDnsblGetResponse>> {
    return this.http.get(`/api/bind/dnsbl/get`, config);
  }

  async dnsblSet(data?: BindDnsblSetRequest, config?: RequestConfig): Promise<ApiResponse<BindDnsblSetResponse>> {
    return this.http.post(`/api/bind/dnsbl/set`, data, config);
  }


  // Domain methods
  async domainAddPrimaryDomain(uuid?: string, data?: BindDomainAddPrimaryDomainRequest, config?: RequestConfig): Promise<ApiResponse<BindDomainAddPrimaryDomainResponse>> {
    return this.http.post(`/api/bind/domain/add_primary_domain/${uuid}`, data, config);
  }

  async domainAddSecondaryDomain(uuid?: string, data?: BindDomainAddSecondaryDomainRequest, config?: RequestConfig): Promise<ApiResponse<BindDomainAddSecondaryDomainResponse>> {
    return this.http.post(`/api/bind/domain/add_secondary_domain/${uuid}`, data, config);
  }

  async domainDelDomain(uuid: string, data?: BindDomainDelDomainRequest, config?: RequestConfig): Promise<ApiResponse<BindDomainDelDomainResponse>> {
    return this.http.post(`/api/bind/domain/del_domain/${uuid}`, data, config);
  }

  async domainGet(config?: RequestConfig): Promise<ApiResponse<BindDomainGetResponse>> {
    return this.http.get(`/api/bind/domain/get`, config);
  }

  async domainGetDomain(uuid?: string, config?: RequestConfig): Promise<ApiResponse<BindDomainGetDomainResponse>> {
    return this.http.get(`/api/bind/domain/get_domain/${uuid}`, config);
  }

  async domainSearchMasterDomain(config?: RequestConfig): Promise<ApiResponse<BindDomainSearchMasterDomainResponse>> {
    return this.http.get(`/api/bind/domain/search_master_domain`, config);
  }

  async domainSearchSlaveDomain(config?: RequestConfig): Promise<ApiResponse<BindDomainSearchSlaveDomainResponse>> {
    return this.http.get(`/api/bind/domain/search_slave_domain`, config);
  }

  async domainSet(data?: BindDomainSetRequest, config?: RequestConfig): Promise<ApiResponse<BindDomainSetResponse>> {
    return this.http.post(`/api/bind/domain/set`, data, config);
  }

  async domainSetDomain(uuid?: string, data?: BindDomainSetDomainRequest, config?: RequestConfig): Promise<ApiResponse<BindDomainSetDomainResponse>> {
    return this.http.post(`/api/bind/domain/set_domain/${uuid}`, data, config);
  }

  async domainToggleDomain(uuid: string, data?: BindDomainToggleDomainRequest, config?: RequestConfig): Promise<ApiResponse<BindDomainToggleDomainResponse>> {
    return this.http.post(`/api/bind/domain/toggle_domain/${uuid}`, data, config);
  }


  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<BindGeneralGetResponse>> {
    return this.http.get(`/api/bind/general/get`, config);
  }

  async generalSet(data?: BindGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<BindGeneralSetResponse>> {
    return this.http.post(`/api/bind/general/set`, data, config);
  }

  async generalZoneshow(zonename?: string, config?: RequestConfig): Promise<ApiResponse<BindGeneralZoneshowResponse>> {
    return this.http.get(`/api/bind/general/zoneshow/${zonename}`, config);
  }

  async generalZonetest(zonename?: string, config?: RequestConfig): Promise<ApiResponse<BindGeneralZonetestResponse>> {
    return this.http.get(`/api/bind/general/zonetest/${zonename}`, config);
  }


  // Record methods
  async recordAddRecord(data?: BindRecordAddRecordRequest, config?: RequestConfig): Promise<ApiResponse<BindRecordAddRecordResponse>> {
    return this.http.post(`/api/bind/record/add_record`, data, config);
  }

  async recordDelRecord(uuid: string, data?: BindRecordDelRecordRequest, config?: RequestConfig): Promise<ApiResponse<BindRecordDelRecordResponse>> {
    return this.http.post(`/api/bind/record/del_record/${uuid}`, data, config);
  }

  async recordGet(config?: RequestConfig): Promise<ApiResponse<BindRecordGetResponse>> {
    return this.http.get(`/api/bind/record/get`, config);
  }

  async recordGetRecord(uuid?: string, config?: RequestConfig): Promise<ApiResponse<BindRecordGetRecordResponse>> {
    return this.http.get(`/api/bind/record/get_record/${uuid}`, config);
  }

  async recordSet(data?: BindRecordSetRequest, config?: RequestConfig): Promise<ApiResponse<BindRecordSetResponse>> {
    return this.http.post(`/api/bind/record/set`, data, config);
  }

  async recordSetRecord(uuid?: string, data?: BindRecordSetRecordRequest, config?: RequestConfig): Promise<ApiResponse<BindRecordSetRecordResponse>> {
    return this.http.post(`/api/bind/record/set_record/${uuid}`, data, config);
  }

  async recordToggleRecord(uuid: string, data?: BindRecordToggleRecordRequest, config?: RequestConfig): Promise<ApiResponse<BindRecordToggleRecordResponse>> {
    return this.http.post(`/api/bind/record/toggle_record/${uuid}`, data, config);
  }


  // Service methods
  async serviceDnsbl(config?: RequestConfig): Promise<ApiResponse<BindServiceDnsblResponse>> {
    return this.http.get(`/api/bind/service/dnsbl`, config);
  }

  async serviceReconfigure(data?: BindServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<BindServiceReconfigureResponse>> {
    return this.http.post(`/api/bind/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: BindServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<BindServiceRestartResponse>> {
    return this.http.post(`/api/bind/service/restart`, data, config);
  }

  async serviceStart(data?: BindServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<BindServiceStartResponse>> {
    return this.http.post(`/api/bind/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<BindServiceStatusResponse>> {
    return this.http.get(`/api/bind/service/status`, config);
  }

  async serviceStop(data?: BindServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<BindServiceStopResponse>> {
    return this.http.post(`/api/bind/service/stop`, data, config);
  }

}
