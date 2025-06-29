import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/postfix';
  }

  // Address methods
  async addressAddAddress(data?: PostfixAddressAddAddressRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixAddressAddAddressResponse>> {
    return this.client.post(`${this.basePath}/address/add_address`, data, config);
  }

  async addressDelAddress(uuid: string, data?: PostfixAddressDelAddressRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixAddressDelAddressResponse>> {
    return this.client.post(`${this.basePath}/address/del_address/${uuid}`, data, config);
  }

  async addressGet(config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixAddressGetResponse>> {
    return this.client.get(`${this.basePath}/address/get`, config);
  }

  async addressGetAddress(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixAddressGetAddressResponse>> {
    return this.client.get(`${this.basePath}/address/get_address/${uuid}`, config);
  }

  async addressSet(data?: PostfixAddressSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixAddressSetResponse>> {
    return this.client.post(`${this.basePath}/address/set`, data, config);
  }

  async addressSetAddress(uuid: string, data?: PostfixAddressSetAddressRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixAddressSetAddressResponse>> {
    return this.client.post(`${this.basePath}/address/set_address/${uuid}`, data, config);
  }

  async addressToggleAddress(uuid: string, data?: PostfixAddressToggleAddressRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixAddressToggleAddressResponse>> {
    return this.client.post(`${this.basePath}/address/toggle_address/${uuid}`, data, config);
  }


  // Antispam methods
  async antispamGet(config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixAntispamGetResponse>> {
    return this.client.get(`${this.basePath}/antispam/get`, config);
  }

  async antispamSet(data?: PostfixAntispamSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixAntispamSetResponse>> {
    return this.client.post(`${this.basePath}/antispam/set`, data, config);
  }


  // Domain methods
  async domainAddDomain(data?: PostfixDomainAddDomainRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixDomainAddDomainResponse>> {
    return this.client.post(`${this.basePath}/domain/add_domain`, data, config);
  }

  async domainDelDomain(uuid: string, data?: PostfixDomainDelDomainRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixDomainDelDomainResponse>> {
    return this.client.post(`${this.basePath}/domain/del_domain/${uuid}`, data, config);
  }

  async domainGet(config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixDomainGetResponse>> {
    return this.client.get(`${this.basePath}/domain/get`, config);
  }

  async domainGetDomain(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixDomainGetDomainResponse>> {
    return this.client.get(`${this.basePath}/domain/get_domain/${uuid}`, config);
  }

  async domainSet(data?: PostfixDomainSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixDomainSetResponse>> {
    return this.client.post(`${this.basePath}/domain/set`, data, config);
  }

  async domainSetDomain(uuid: string, data?: PostfixDomainSetDomainRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixDomainSetDomainResponse>> {
    return this.client.post(`${this.basePath}/domain/set_domain/${uuid}`, data, config);
  }

  async domainToggleDomain(uuid: string, data?: PostfixDomainToggleDomainRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixDomainToggleDomainResponse>> {
    return this.client.post(`${this.basePath}/domain/toggle_domain/${uuid}`, data, config);
  }


  // General methods
  async generalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixGeneralGetResponse>> {
    return this.client.get(`${this.basePath}/general/get`, config);
  }

  async generalSet(data?: PostfixGeneralSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixGeneralSetResponse>> {
    return this.client.post(`${this.basePath}/general/set`, data, config);
  }


  // Headerchecks methods
  async headerchecksAddHeadercheck(data?: PostfixHeaderchecksAddHeadercheckRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixHeaderchecksAddHeadercheckResponse>> {
    return this.client.post(`${this.basePath}/headerchecks/add_headercheck`, data, config);
  }

  async headerchecksDelHeadercheck(uuid: string, data?: PostfixHeaderchecksDelHeadercheckRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixHeaderchecksDelHeadercheckResponse>> {
    return this.client.post(`${this.basePath}/headerchecks/del_headercheck/${uuid}`, data, config);
  }

  async headerchecksGet(config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixHeaderchecksGetResponse>> {
    return this.client.get(`${this.basePath}/headerchecks/get`, config);
  }

  async headerchecksGetHeadercheck(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixHeaderchecksGetHeadercheckResponse>> {
    return this.client.get(`${this.basePath}/headerchecks/get_headercheck/${uuid}`, config);
  }

  async headerchecksSet(data?: PostfixHeaderchecksSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixHeaderchecksSetResponse>> {
    return this.client.post(`${this.basePath}/headerchecks/set`, data, config);
  }

  async headerchecksSetHeadercheck(uuid: string, data?: PostfixHeaderchecksSetHeadercheckRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixHeaderchecksSetHeadercheckResponse>> {
    return this.client.post(`${this.basePath}/headerchecks/set_headercheck/${uuid}`, data, config);
  }

  async headerchecksToggleHeadercheck(uuid: string, data?: PostfixHeaderchecksToggleHeadercheckRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixHeaderchecksToggleHeadercheckResponse>> {
    return this.client.post(`${this.basePath}/headerchecks/toggle_headercheck/${uuid}`, data, config);
  }


  // Recipient methods
  async recipientAddRecipient(data?: PostfixRecipientAddRecipientRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixRecipientAddRecipientResponse>> {
    return this.client.post(`${this.basePath}/recipient/add_recipient`, data, config);
  }

  async recipientDelRecipient(uuid: string, data?: PostfixRecipientDelRecipientRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixRecipientDelRecipientResponse>> {
    return this.client.post(`${this.basePath}/recipient/del_recipient/${uuid}`, data, config);
  }

  async recipientGet(config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixRecipientGetResponse>> {
    return this.client.get(`${this.basePath}/recipient/get`, config);
  }

  async recipientGetRecipient(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixRecipientGetRecipientResponse>> {
    return this.client.get(`${this.basePath}/recipient/get_recipient/${uuid}`, config);
  }

  async recipientSet(data?: PostfixRecipientSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixRecipientSetResponse>> {
    return this.client.post(`${this.basePath}/recipient/set`, data, config);
  }

  async recipientSetRecipient(uuid: string, data?: PostfixRecipientSetRecipientRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixRecipientSetRecipientResponse>> {
    return this.client.post(`${this.basePath}/recipient/set_recipient/${uuid}`, data, config);
  }

  async recipientToggleRecipient(uuid: string, data?: PostfixRecipientToggleRecipientRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixRecipientToggleRecipientResponse>> {
    return this.client.post(`${this.basePath}/recipient/toggle_recipient/${uuid}`, data, config);
  }


  // Recipientbcc methods
  async recipientbccAddRecipientbcc(data?: PostfixRecipientbccAddRecipientbccRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixRecipientbccAddRecipientbccResponse>> {
    return this.client.post(`${this.basePath}/recipientbcc/add_recipientbcc`, data, config);
  }

  async recipientbccDelRecipientbcc(uuid: string, data?: PostfixRecipientbccDelRecipientbccRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixRecipientbccDelRecipientbccResponse>> {
    return this.client.post(`${this.basePath}/recipientbcc/del_recipientbcc/${uuid}`, data, config);
  }

  async recipientbccGet(config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixRecipientbccGetResponse>> {
    return this.client.get(`${this.basePath}/recipientbcc/get`, config);
  }

  async recipientbccGetRecipientbcc(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixRecipientbccGetRecipientbccResponse>> {
    return this.client.get(`${this.basePath}/recipientbcc/get_recipientbcc/${uuid}`, config);
  }

  async recipientbccSet(data?: PostfixRecipientbccSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixRecipientbccSetResponse>> {
    return this.client.post(`${this.basePath}/recipientbcc/set`, data, config);
  }

  async recipientbccSetRecipientbcc(uuid: string, data?: PostfixRecipientbccSetRecipientbccRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixRecipientbccSetRecipientbccResponse>> {
    return this.client.post(`${this.basePath}/recipientbcc/set_recipientbcc/${uuid}`, data, config);
  }

  async recipientbccToggleRecipientbcc(uuid: string, data?: PostfixRecipientbccToggleRecipientbccRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixRecipientbccToggleRecipientbccResponse>> {
    return this.client.post(`${this.basePath}/recipientbcc/toggle_recipientbcc/${uuid}`, data, config);
  }


  // Sender methods
  async senderAddSender(data?: PostfixSenderAddSenderRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSenderAddSenderResponse>> {
    return this.client.post(`${this.basePath}/sender/add_sender`, data, config);
  }

  async senderDelSender(uuid: string, data?: PostfixSenderDelSenderRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSenderDelSenderResponse>> {
    return this.client.post(`${this.basePath}/sender/del_sender/${uuid}`, data, config);
  }

  async senderGet(config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSenderGetResponse>> {
    return this.client.get(`${this.basePath}/sender/get`, config);
  }

  async senderGetSender(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSenderGetSenderResponse>> {
    return this.client.get(`${this.basePath}/sender/get_sender/${uuid}`, config);
  }

  async senderSet(data?: PostfixSenderSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSenderSetResponse>> {
    return this.client.post(`${this.basePath}/sender/set`, data, config);
  }

  async senderSetSender(uuid: string, data?: PostfixSenderSetSenderRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSenderSetSenderResponse>> {
    return this.client.post(`${this.basePath}/sender/set_sender/${uuid}`, data, config);
  }

  async senderToggleSender(uuid: string, data?: PostfixSenderToggleSenderRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSenderToggleSenderResponse>> {
    return this.client.post(`${this.basePath}/sender/toggle_sender/${uuid}`, data, config);
  }


  // Senderbcc methods
  async senderbccAddSenderbcc(data?: PostfixSenderbccAddSenderbccRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSenderbccAddSenderbccResponse>> {
    return this.client.post(`${this.basePath}/senderbcc/add_senderbcc`, data, config);
  }

  async senderbccDelSenderbcc(uuid: string, data?: PostfixSenderbccDelSenderbccRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSenderbccDelSenderbccResponse>> {
    return this.client.post(`${this.basePath}/senderbcc/del_senderbcc/${uuid}`, data, config);
  }

  async senderbccGet(config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSenderbccGetResponse>> {
    return this.client.get(`${this.basePath}/senderbcc/get`, config);
  }

  async senderbccGetSenderbcc(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSenderbccGetSenderbccResponse>> {
    return this.client.get(`${this.basePath}/senderbcc/get_senderbcc/${uuid}`, config);
  }

  async senderbccSet(data?: PostfixSenderbccSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSenderbccSetResponse>> {
    return this.client.post(`${this.basePath}/senderbcc/set`, data, config);
  }

  async senderbccSetSenderbcc(uuid: string, data?: PostfixSenderbccSetSenderbccRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSenderbccSetSenderbccResponse>> {
    return this.client.post(`${this.basePath}/senderbcc/set_senderbcc/${uuid}`, data, config);
  }

  async senderbccToggleSenderbcc(uuid: string, data?: PostfixSenderbccToggleSenderbccRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSenderbccToggleSenderbccResponse>> {
    return this.client.post(`${this.basePath}/senderbcc/toggle_senderbcc/${uuid}`, data, config);
  }


  // Sendercanonical methods
  async sendercanonicalAddSendercanonical(data?: PostfixSendercanonicalAddSendercanonicalRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSendercanonicalAddSendercanonicalResponse>> {
    return this.client.post(`${this.basePath}/sendercanonical/add_sendercanonical`, data, config);
  }

  async sendercanonicalDelSendercanonical(uuid: string, data?: PostfixSendercanonicalDelSendercanonicalRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSendercanonicalDelSendercanonicalResponse>> {
    return this.client.post(`${this.basePath}/sendercanonical/del_sendercanonical/${uuid}`, data, config);
  }

  async sendercanonicalGet(config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSendercanonicalGetResponse>> {
    return this.client.get(`${this.basePath}/sendercanonical/get`, config);
  }

  async sendercanonicalGetSendercanonical(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSendercanonicalGetSendercanonicalResponse>> {
    return this.client.get(`${this.basePath}/sendercanonical/get_sendercanonical/${uuid}`, config);
  }

  async sendercanonicalSet(data?: PostfixSendercanonicalSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSendercanonicalSetResponse>> {
    return this.client.post(`${this.basePath}/sendercanonical/set`, data, config);
  }

  async sendercanonicalSetSendercanonical(uuid: string, data?: PostfixSendercanonicalSetSendercanonicalRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSendercanonicalSetSendercanonicalResponse>> {
    return this.client.post(`${this.basePath}/sendercanonical/set_sendercanonical/${uuid}`, data, config);
  }

  async sendercanonicalToggleSendercanonical(uuid: string, data?: PostfixSendercanonicalToggleSendercanonicalRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixSendercanonicalToggleSendercanonicalResponse>> {
    return this.client.post(`${this.basePath}/sendercanonical/toggle_sendercanonical/${uuid}`, data, config);
  }


  // Service methods
  async serviceCheckrspamd(config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixServiceCheckrspamdResponse>> {
    return this.client.get(`${this.basePath}/service/checkrspamd`, config);
  }

  async serviceReconfigure(data?: PostfixServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceRestart(data?: PostfixServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceStart(data?: PostfixServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: PostfixServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<PostfixServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }

}
