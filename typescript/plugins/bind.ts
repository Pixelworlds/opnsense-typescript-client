import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/bind';
  }

  // Acl methods
  async aclAddAcl(data?: BindAclAddAclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindAclAddAclResponse>> {
    return this.client.post(`${this.basePath}/acl/add_acl`, data, config);
  }

  async aclDelAcl(uuid: string, data?: BindAclDelAclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindAclDelAclResponse>> {
    return this.client.post(`${this.basePath}/acl/del_acl/${uuid}`, data, config);
  }

  async aclGet(config?: AxiosRequestConfig): Promise<AxiosResponse<BindAclGetResponse>> {
    return this.client.get(`${this.basePath}/acl/get`, config);
  }

  async aclGetAcl(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<BindAclGetAclResponse>> {
    return this.client.get(`${this.basePath}/acl/get_acl/${uuid}`, config);
  }

  async aclSet(data?: BindAclSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindAclSetResponse>> {
    return this.client.post(`${this.basePath}/acl/set`, data, config);
  }

  async aclSetAcl(uuid: string, data?: BindAclSetAclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindAclSetAclResponse>> {
    return this.client.post(`${this.basePath}/acl/set_acl/${uuid}`, data, config);
  }

  async aclToggleAcl(uuid: string, data?: BindAclToggleAclRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindAclToggleAclResponse>> {
    return this.client.post(`${this.basePath}/acl/toggle_acl/${uuid}`, data, config);
  }


  // Dnsbl methods
  async dnsblGet(config?: AxiosRequestConfig): Promise<AxiosResponse<BindDnsblGetResponse>> {
    return this.client.get(`${this.basePath}/dnsbl/get`, config);
  }

  async dnsblSet(data?: BindDnsblSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindDnsblSetResponse>> {
    return this.client.post(`${this.basePath}/dnsbl/set`, data, config);
  }


  // Domain methods
  async domainAddPrimaryDomain(uuid?: string, data?: BindDomainAddPrimaryDomainRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindDomainAddPrimaryDomainResponse>> {
    return this.client.post(`${this.basePath}/domain/add_primary_domain/${uuid}`, data, config);
  }

  async domainAddSecondaryDomain(uuid?: string, data?: BindDomainAddSecondaryDomainRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindDomainAddSecondaryDomainResponse>> {
    return this.client.post(`${this.basePath}/domain/add_secondary_domain/${uuid}`, data, config);
  }

  async domainDelDomain(uuid: string, data?: BindDomainDelDomainRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindDomainDelDomainResponse>> {
    return this.client.post(`${this.basePath}/domain/del_domain/${uuid}`, data, config);
  }

  async domainGet(config?: AxiosRequestConfig): Promise<AxiosResponse<BindDomainGetResponse>> {
    return this.client.get(`${this.basePath}/domain/get`, config);
  }

  async domainGetDomain(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<BindDomainGetDomainResponse>> {
    return this.client.get(`${this.basePath}/domain/get_domain/${uuid}`, config);
  }

  async domainSearchMasterDomain(config?: AxiosRequestConfig): Promise<AxiosResponse<BindDomainSearchMasterDomainResponse>> {
    return this.client.get(`${this.basePath}/domain/search_master_domain`, config);
  }

  async domainSearchSlaveDomain(config?: AxiosRequestConfig): Promise<AxiosResponse<BindDomainSearchSlaveDomainResponse>> {
    return this.client.get(`${this.basePath}/domain/search_slave_domain`, config);
  }

  async domainSet(data?: BindDomainSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindDomainSetResponse>> {
    return this.client.post(`${this.basePath}/domain/set`, data, config);
  }

  async domainSetDomain(uuid?: string, data?: BindDomainSetDomainRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindDomainSetDomainResponse>> {
    return this.client.post(`${this.basePath}/domain/set_domain/${uuid}`, data, config);
  }

  async domainToggleDomain(uuid: string, data?: BindDomainToggleDomainRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindDomainToggleDomainResponse>> {
    return this.client.post(`${this.basePath}/domain/toggle_domain/${uuid}`, data, config);
  }


  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<BindGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: BindGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }

  async generalZoneshow(zonename?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<BindGeneralZoneshowResponse>> {
    return this.client.get(`${this.basePath}/general/zoneshow/${zonename}`, config);
  }

  async generalZonetest(zonename?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<BindGeneralZonetestResponse>> {
    return this.client.get(`${this.basePath}/general/zonetest/${zonename}`, config);
  }


  // Record methods
  async recordAddRecord(data?: BindRecordAddRecordRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindRecordAddRecordResponse>> {
    return this.client.post(`${this.basePath}/record/add_record`, data, config);
  }

  async recordDelRecord(uuid: string, data?: BindRecordDelRecordRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindRecordDelRecordResponse>> {
    return this.client.post(`${this.basePath}/record/del_record/${uuid}`, data, config);
  }

  async recordGet(config?: AxiosRequestConfig): Promise<AxiosResponse<BindRecordGetResponse>> {
    return this.client.get(`${this.basePath}/record/get`, config);
  }

  async recordGetRecord(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<BindRecordGetRecordResponse>> {
    return this.client.get(`${this.basePath}/record/get_record/${uuid}`, config);
  }

  async recordSet(data?: BindRecordSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindRecordSetResponse>> {
    return this.client.post(`${this.basePath}/record/set`, data, config);
  }

  async recordSetRecord(uuid?: string, data?: BindRecordSetRecordRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindRecordSetRecordResponse>> {
    return this.client.post(`${this.basePath}/record/set_record/${uuid}`, data, config);
  }

  async recordToggleRecord(uuid: string, data?: BindRecordToggleRecordRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindRecordToggleRecordResponse>> {
    return this.client.post(`${this.basePath}/record/toggle_record/${uuid}`, data, config);
  }


  // Service methods
  async serviceDnsbl(config?: AxiosRequestConfig): Promise<AxiosResponse<BindServiceDnsblResponse>> {
    return this.client.get(`${this.basePath}/service/dnsbl`, config);
  }

  async serviceReconfigure(data?: BindServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: BindServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: BindServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<BindServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: BindServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<BindServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
