import type { HttpClient, RequestConfig, ApiResponse } from '../types';

// Type definitions for Postfix module

// Model field types

// Address types
export interface PostfixAddressAddAddressRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixAddressAddAddressResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixAddressDelAddressRequest {
  uuid: string;
}

export interface PostfixAddressDelAddressResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixAddressGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixAddressGetAddressResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixAddressSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixAddressSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixAddressSetAddressRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixAddressSetAddressResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixAddressToggleAddressRequest {
  enabled?: boolean;
}

export interface PostfixAddressToggleAddressResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Antispam types
export interface PostfixAntispamGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixAntispamSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixAntispamSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Domain types
export interface PostfixDomainAddDomainRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixDomainAddDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixDomainDelDomainRequest {
  uuid: string;
}

export interface PostfixDomainDelDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixDomainGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixDomainGetDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixDomainSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixDomainSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixDomainSetDomainRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixDomainSetDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixDomainToggleDomainRequest {
  enabled?: boolean;
}

export interface PostfixDomainToggleDomainResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// General types
export interface PostfixGeneralGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixGeneralSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixGeneralSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Headerchecks types
export interface PostfixHeaderchecksAddHeadercheckRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixHeaderchecksAddHeadercheckResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixHeaderchecksDelHeadercheckRequest {
  uuid: string;
}

export interface PostfixHeaderchecksDelHeadercheckResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixHeaderchecksGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixHeaderchecksGetHeadercheckResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixHeaderchecksSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixHeaderchecksSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixHeaderchecksSetHeadercheckRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixHeaderchecksSetHeadercheckResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixHeaderchecksToggleHeadercheckRequest {
  enabled?: boolean;
}

export interface PostfixHeaderchecksToggleHeadercheckResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Recipient types
export interface PostfixRecipientAddRecipientRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixRecipientAddRecipientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixRecipientDelRecipientRequest {
  uuid: string;
}

export interface PostfixRecipientDelRecipientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixRecipientGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixRecipientGetRecipientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixRecipientSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixRecipientSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixRecipientSetRecipientRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixRecipientSetRecipientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixRecipientToggleRecipientRequest {
  enabled?: boolean;
}

export interface PostfixRecipientToggleRecipientResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Recipientbcc types
export interface PostfixRecipientbccAddRecipientbccRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixRecipientbccAddRecipientbccResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixRecipientbccDelRecipientbccRequest {
  uuid: string;
}

export interface PostfixRecipientbccDelRecipientbccResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixRecipientbccGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixRecipientbccGetRecipientbccResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixRecipientbccSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixRecipientbccSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixRecipientbccSetRecipientbccRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixRecipientbccSetRecipientbccResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixRecipientbccToggleRecipientbccRequest {
  enabled?: boolean;
}

export interface PostfixRecipientbccToggleRecipientbccResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Sender types
export interface PostfixSenderAddSenderRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixSenderAddSenderResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSenderDelSenderRequest {
  uuid: string;
}

export interface PostfixSenderDelSenderResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSenderGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSenderGetSenderResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSenderSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixSenderSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSenderSetSenderRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixSenderSetSenderResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSenderToggleSenderRequest {
  enabled?: boolean;
}

export interface PostfixSenderToggleSenderResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Senderbcc types
export interface PostfixSenderbccAddSenderbccRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixSenderbccAddSenderbccResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSenderbccDelSenderbccRequest {
  uuid: string;
}

export interface PostfixSenderbccDelSenderbccResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSenderbccGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSenderbccGetSenderbccResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSenderbccSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixSenderbccSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSenderbccSetSenderbccRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixSenderbccSetSenderbccResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSenderbccToggleSenderbccRequest {
  enabled?: boolean;
}

export interface PostfixSenderbccToggleSenderbccResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Sendercanonical types
export interface PostfixSendercanonicalAddSendercanonicalRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixSendercanonicalAddSendercanonicalResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSendercanonicalDelSendercanonicalRequest {
  uuid: string;
}

export interface PostfixSendercanonicalDelSendercanonicalResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSendercanonicalGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSendercanonicalGetSendercanonicalResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSendercanonicalSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixSendercanonicalSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSendercanonicalSetSendercanonicalRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixSendercanonicalSetSendercanonicalResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixSendercanonicalToggleSendercanonicalRequest {
  enabled?: boolean;
}

export interface PostfixSendercanonicalToggleSendercanonicalResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface PostfixServiceCheckrspamdResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface PostfixServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface PostfixServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface PostfixAddress {
}

export class PostfixApi {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Address methods
  async addressAddAddress(data?: PostfixAddressAddAddressRequest, config?: RequestConfig): Promise<ApiResponse<PostfixAddressAddAddressResponse>> {
    return this.http.post(`/api/postfix/address/add_address`, data, config);
  }

  async addressDelAddress(uuid: string, data?: PostfixAddressDelAddressRequest, config?: RequestConfig): Promise<ApiResponse<PostfixAddressDelAddressResponse>> {
    return this.http.post(`/api/postfix/address/del_address/${uuid}`, data, config);
  }

  async addressGet(config?: RequestConfig): Promise<ApiResponse<PostfixAddressGetResponse>> {
    return this.http.get(`/api/postfix/address/get`, config);
  }

  async addressGetAddress(uuid?: string, config?: RequestConfig): Promise<ApiResponse<PostfixAddressGetAddressResponse>> {
    return this.http.get(`/api/postfix/address/get_address/${uuid}`, config);
  }

  async addressSet(data?: PostfixAddressSetRequest, config?: RequestConfig): Promise<ApiResponse<PostfixAddressSetResponse>> {
    return this.http.post(`/api/postfix/address/set`, data, config);
  }

  async addressSetAddress(uuid: string, data?: PostfixAddressSetAddressRequest, config?: RequestConfig): Promise<ApiResponse<PostfixAddressSetAddressResponse>> {
    return this.http.post(`/api/postfix/address/set_address/${uuid}`, data, config);
  }

  async addressToggleAddress(uuid: string, data?: PostfixAddressToggleAddressRequest, config?: RequestConfig): Promise<ApiResponse<PostfixAddressToggleAddressResponse>> {
    return this.http.post(`/api/postfix/address/toggle_address/${uuid}`, data, config);
  }


  // Antispam methods
  async antispamGet(config?: RequestConfig): Promise<ApiResponse<PostfixAntispamGetResponse>> {
    return this.http.get(`/api/postfix/antispam/get`, config);
  }

  async antispamSet(data?: PostfixAntispamSetRequest, config?: RequestConfig): Promise<ApiResponse<PostfixAntispamSetResponse>> {
    return this.http.post(`/api/postfix/antispam/set`, data, config);
  }


  // Domain methods
  async domainAddDomain(data?: PostfixDomainAddDomainRequest, config?: RequestConfig): Promise<ApiResponse<PostfixDomainAddDomainResponse>> {
    return this.http.post(`/api/postfix/domain/add_domain`, data, config);
  }

  async domainDelDomain(uuid: string, data?: PostfixDomainDelDomainRequest, config?: RequestConfig): Promise<ApiResponse<PostfixDomainDelDomainResponse>> {
    return this.http.post(`/api/postfix/domain/del_domain/${uuid}`, data, config);
  }

  async domainGet(config?: RequestConfig): Promise<ApiResponse<PostfixDomainGetResponse>> {
    return this.http.get(`/api/postfix/domain/get`, config);
  }

  async domainGetDomain(uuid?: string, config?: RequestConfig): Promise<ApiResponse<PostfixDomainGetDomainResponse>> {
    return this.http.get(`/api/postfix/domain/get_domain/${uuid}`, config);
  }

  async domainSet(data?: PostfixDomainSetRequest, config?: RequestConfig): Promise<ApiResponse<PostfixDomainSetResponse>> {
    return this.http.post(`/api/postfix/domain/set`, data, config);
  }

  async domainSetDomain(uuid: string, data?: PostfixDomainSetDomainRequest, config?: RequestConfig): Promise<ApiResponse<PostfixDomainSetDomainResponse>> {
    return this.http.post(`/api/postfix/domain/set_domain/${uuid}`, data, config);
  }

  async domainToggleDomain(uuid: string, data?: PostfixDomainToggleDomainRequest, config?: RequestConfig): Promise<ApiResponse<PostfixDomainToggleDomainResponse>> {
    return this.http.post(`/api/postfix/domain/toggle_domain/${uuid}`, data, config);
  }


  // General methods
  async generalGet(config?: RequestConfig): Promise<ApiResponse<PostfixGeneralGetResponse>> {
    return this.http.get(`/api/postfix/general/get`, config);
  }

  async generalSet(data?: PostfixGeneralSetRequest, config?: RequestConfig): Promise<ApiResponse<PostfixGeneralSetResponse>> {
    return this.http.post(`/api/postfix/general/set`, data, config);
  }


  // Headerchecks methods
  async headerchecksAddHeadercheck(data?: PostfixHeaderchecksAddHeadercheckRequest, config?: RequestConfig): Promise<ApiResponse<PostfixHeaderchecksAddHeadercheckResponse>> {
    return this.http.post(`/api/postfix/headerchecks/add_headercheck`, data, config);
  }

  async headerchecksDelHeadercheck(uuid: string, data?: PostfixHeaderchecksDelHeadercheckRequest, config?: RequestConfig): Promise<ApiResponse<PostfixHeaderchecksDelHeadercheckResponse>> {
    return this.http.post(`/api/postfix/headerchecks/del_headercheck/${uuid}`, data, config);
  }

  async headerchecksGet(config?: RequestConfig): Promise<ApiResponse<PostfixHeaderchecksGetResponse>> {
    return this.http.get(`/api/postfix/headerchecks/get`, config);
  }

  async headerchecksGetHeadercheck(uuid?: string, config?: RequestConfig): Promise<ApiResponse<PostfixHeaderchecksGetHeadercheckResponse>> {
    return this.http.get(`/api/postfix/headerchecks/get_headercheck/${uuid}`, config);
  }

  async headerchecksSet(data?: PostfixHeaderchecksSetRequest, config?: RequestConfig): Promise<ApiResponse<PostfixHeaderchecksSetResponse>> {
    return this.http.post(`/api/postfix/headerchecks/set`, data, config);
  }

  async headerchecksSetHeadercheck(uuid: string, data?: PostfixHeaderchecksSetHeadercheckRequest, config?: RequestConfig): Promise<ApiResponse<PostfixHeaderchecksSetHeadercheckResponse>> {
    return this.http.post(`/api/postfix/headerchecks/set_headercheck/${uuid}`, data, config);
  }

  async headerchecksToggleHeadercheck(uuid: string, data?: PostfixHeaderchecksToggleHeadercheckRequest, config?: RequestConfig): Promise<ApiResponse<PostfixHeaderchecksToggleHeadercheckResponse>> {
    return this.http.post(`/api/postfix/headerchecks/toggle_headercheck/${uuid}`, data, config);
  }


  // Recipient methods
  async recipientAddRecipient(data?: PostfixRecipientAddRecipientRequest, config?: RequestConfig): Promise<ApiResponse<PostfixRecipientAddRecipientResponse>> {
    return this.http.post(`/api/postfix/recipient/add_recipient`, data, config);
  }

  async recipientDelRecipient(uuid: string, data?: PostfixRecipientDelRecipientRequest, config?: RequestConfig): Promise<ApiResponse<PostfixRecipientDelRecipientResponse>> {
    return this.http.post(`/api/postfix/recipient/del_recipient/${uuid}`, data, config);
  }

  async recipientGet(config?: RequestConfig): Promise<ApiResponse<PostfixRecipientGetResponse>> {
    return this.http.get(`/api/postfix/recipient/get`, config);
  }

  async recipientGetRecipient(uuid?: string, config?: RequestConfig): Promise<ApiResponse<PostfixRecipientGetRecipientResponse>> {
    return this.http.get(`/api/postfix/recipient/get_recipient/${uuid}`, config);
  }

  async recipientSet(data?: PostfixRecipientSetRequest, config?: RequestConfig): Promise<ApiResponse<PostfixRecipientSetResponse>> {
    return this.http.post(`/api/postfix/recipient/set`, data, config);
  }

  async recipientSetRecipient(uuid: string, data?: PostfixRecipientSetRecipientRequest, config?: RequestConfig): Promise<ApiResponse<PostfixRecipientSetRecipientResponse>> {
    return this.http.post(`/api/postfix/recipient/set_recipient/${uuid}`, data, config);
  }

  async recipientToggleRecipient(uuid: string, data?: PostfixRecipientToggleRecipientRequest, config?: RequestConfig): Promise<ApiResponse<PostfixRecipientToggleRecipientResponse>> {
    return this.http.post(`/api/postfix/recipient/toggle_recipient/${uuid}`, data, config);
  }


  // Recipientbcc methods
  async recipientbccAddRecipientbcc(data?: PostfixRecipientbccAddRecipientbccRequest, config?: RequestConfig): Promise<ApiResponse<PostfixRecipientbccAddRecipientbccResponse>> {
    return this.http.post(`/api/postfix/recipientbcc/add_recipientbcc`, data, config);
  }

  async recipientbccDelRecipientbcc(uuid: string, data?: PostfixRecipientbccDelRecipientbccRequest, config?: RequestConfig): Promise<ApiResponse<PostfixRecipientbccDelRecipientbccResponse>> {
    return this.http.post(`/api/postfix/recipientbcc/del_recipientbcc/${uuid}`, data, config);
  }

  async recipientbccGet(config?: RequestConfig): Promise<ApiResponse<PostfixRecipientbccGetResponse>> {
    return this.http.get(`/api/postfix/recipientbcc/get`, config);
  }

  async recipientbccGetRecipientbcc(uuid?: string, config?: RequestConfig): Promise<ApiResponse<PostfixRecipientbccGetRecipientbccResponse>> {
    return this.http.get(`/api/postfix/recipientbcc/get_recipientbcc/${uuid}`, config);
  }

  async recipientbccSet(data?: PostfixRecipientbccSetRequest, config?: RequestConfig): Promise<ApiResponse<PostfixRecipientbccSetResponse>> {
    return this.http.post(`/api/postfix/recipientbcc/set`, data, config);
  }

  async recipientbccSetRecipientbcc(uuid: string, data?: PostfixRecipientbccSetRecipientbccRequest, config?: RequestConfig): Promise<ApiResponse<PostfixRecipientbccSetRecipientbccResponse>> {
    return this.http.post(`/api/postfix/recipientbcc/set_recipientbcc/${uuid}`, data, config);
  }

  async recipientbccToggleRecipientbcc(uuid: string, data?: PostfixRecipientbccToggleRecipientbccRequest, config?: RequestConfig): Promise<ApiResponse<PostfixRecipientbccToggleRecipientbccResponse>> {
    return this.http.post(`/api/postfix/recipientbcc/toggle_recipientbcc/${uuid}`, data, config);
  }


  // Sender methods
  async senderAddSender(data?: PostfixSenderAddSenderRequest, config?: RequestConfig): Promise<ApiResponse<PostfixSenderAddSenderResponse>> {
    return this.http.post(`/api/postfix/sender/add_sender`, data, config);
  }

  async senderDelSender(uuid: string, data?: PostfixSenderDelSenderRequest, config?: RequestConfig): Promise<ApiResponse<PostfixSenderDelSenderResponse>> {
    return this.http.post(`/api/postfix/sender/del_sender/${uuid}`, data, config);
  }

  async senderGet(config?: RequestConfig): Promise<ApiResponse<PostfixSenderGetResponse>> {
    return this.http.get(`/api/postfix/sender/get`, config);
  }

  async senderGetSender(uuid?: string, config?: RequestConfig): Promise<ApiResponse<PostfixSenderGetSenderResponse>> {
    return this.http.get(`/api/postfix/sender/get_sender/${uuid}`, config);
  }

  async senderSet(data?: PostfixSenderSetRequest, config?: RequestConfig): Promise<ApiResponse<PostfixSenderSetResponse>> {
    return this.http.post(`/api/postfix/sender/set`, data, config);
  }

  async senderSetSender(uuid: string, data?: PostfixSenderSetSenderRequest, config?: RequestConfig): Promise<ApiResponse<PostfixSenderSetSenderResponse>> {
    return this.http.post(`/api/postfix/sender/set_sender/${uuid}`, data, config);
  }

  async senderToggleSender(uuid: string, data?: PostfixSenderToggleSenderRequest, config?: RequestConfig): Promise<ApiResponse<PostfixSenderToggleSenderResponse>> {
    return this.http.post(`/api/postfix/sender/toggle_sender/${uuid}`, data, config);
  }


  // Senderbcc methods
  async senderbccAddSenderbcc(data?: PostfixSenderbccAddSenderbccRequest, config?: RequestConfig): Promise<ApiResponse<PostfixSenderbccAddSenderbccResponse>> {
    return this.http.post(`/api/postfix/senderbcc/add_senderbcc`, data, config);
  }

  async senderbccDelSenderbcc(uuid: string, data?: PostfixSenderbccDelSenderbccRequest, config?: RequestConfig): Promise<ApiResponse<PostfixSenderbccDelSenderbccResponse>> {
    return this.http.post(`/api/postfix/senderbcc/del_senderbcc/${uuid}`, data, config);
  }

  async senderbccGet(config?: RequestConfig): Promise<ApiResponse<PostfixSenderbccGetResponse>> {
    return this.http.get(`/api/postfix/senderbcc/get`, config);
  }

  async senderbccGetSenderbcc(uuid?: string, config?: RequestConfig): Promise<ApiResponse<PostfixSenderbccGetSenderbccResponse>> {
    return this.http.get(`/api/postfix/senderbcc/get_senderbcc/${uuid}`, config);
  }

  async senderbccSet(data?: PostfixSenderbccSetRequest, config?: RequestConfig): Promise<ApiResponse<PostfixSenderbccSetResponse>> {
    return this.http.post(`/api/postfix/senderbcc/set`, data, config);
  }

  async senderbccSetSenderbcc(uuid: string, data?: PostfixSenderbccSetSenderbccRequest, config?: RequestConfig): Promise<ApiResponse<PostfixSenderbccSetSenderbccResponse>> {
    return this.http.post(`/api/postfix/senderbcc/set_senderbcc/${uuid}`, data, config);
  }

  async senderbccToggleSenderbcc(uuid: string, data?: PostfixSenderbccToggleSenderbccRequest, config?: RequestConfig): Promise<ApiResponse<PostfixSenderbccToggleSenderbccResponse>> {
    return this.http.post(`/api/postfix/senderbcc/toggle_senderbcc/${uuid}`, data, config);
  }


  // Sendercanonical methods
  async sendercanonicalAddSendercanonical(data?: PostfixSendercanonicalAddSendercanonicalRequest, config?: RequestConfig): Promise<ApiResponse<PostfixSendercanonicalAddSendercanonicalResponse>> {
    return this.http.post(`/api/postfix/sendercanonical/add_sendercanonical`, data, config);
  }

  async sendercanonicalDelSendercanonical(uuid: string, data?: PostfixSendercanonicalDelSendercanonicalRequest, config?: RequestConfig): Promise<ApiResponse<PostfixSendercanonicalDelSendercanonicalResponse>> {
    return this.http.post(`/api/postfix/sendercanonical/del_sendercanonical/${uuid}`, data, config);
  }

  async sendercanonicalGet(config?: RequestConfig): Promise<ApiResponse<PostfixSendercanonicalGetResponse>> {
    return this.http.get(`/api/postfix/sendercanonical/get`, config);
  }

  async sendercanonicalGetSendercanonical(uuid?: string, config?: RequestConfig): Promise<ApiResponse<PostfixSendercanonicalGetSendercanonicalResponse>> {
    return this.http.get(`/api/postfix/sendercanonical/get_sendercanonical/${uuid}`, config);
  }

  async sendercanonicalSet(data?: PostfixSendercanonicalSetRequest, config?: RequestConfig): Promise<ApiResponse<PostfixSendercanonicalSetResponse>> {
    return this.http.post(`/api/postfix/sendercanonical/set`, data, config);
  }

  async sendercanonicalSetSendercanonical(uuid: string, data?: PostfixSendercanonicalSetSendercanonicalRequest, config?: RequestConfig): Promise<ApiResponse<PostfixSendercanonicalSetSendercanonicalResponse>> {
    return this.http.post(`/api/postfix/sendercanonical/set_sendercanonical/${uuid}`, data, config);
  }

  async sendercanonicalToggleSendercanonical(uuid: string, data?: PostfixSendercanonicalToggleSendercanonicalRequest, config?: RequestConfig): Promise<ApiResponse<PostfixSendercanonicalToggleSendercanonicalResponse>> {
    return this.http.post(`/api/postfix/sendercanonical/toggle_sendercanonical/${uuid}`, data, config);
  }


  // Service methods
  async serviceCheckrspamd(config?: RequestConfig): Promise<ApiResponse<PostfixServiceCheckrspamdResponse>> {
    return this.http.get(`/api/postfix/service/checkrspamd`, config);
  }

  async serviceReconfigure(data?: PostfixServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<PostfixServiceReconfigureResponse>> {
    return this.http.post(`/api/postfix/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: PostfixServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<PostfixServiceRestartResponse>> {
    return this.http.post(`/api/postfix/service/restart`, data, config);
  }

  async serviceStart(data?: PostfixServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<PostfixServiceStartResponse>> {
    return this.http.post(`/api/postfix/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<PostfixServiceStatusResponse>> {
    return this.http.get(`/api/postfix/service/status`, config);
  }

  async serviceStop(data?: PostfixServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<PostfixServiceStopResponse>> {
    return this.http.post(`/api/postfix/service/stop`, data, config);
  }

}
