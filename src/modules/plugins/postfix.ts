import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class PostfixAddress extends BaseModule {
  /**
   * Execute add address for postfix address
   */
  async addAddress(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/address/add_address`, data);
  }

  /**
   * Execute del address for postfix address
   */
  async delAddress(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/address/del_address/${uuid}`, data);
  }

  /**
   * Get get for postfix address
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/address/get`);
  }

  /**
   * Get get address for postfix address
   */
  async getAddress(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/address/get_address/${uuid}`);
  }

  /**
   * Execute set for postfix address
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/address/set`, data);
  }

  /**
   * Execute set address for postfix address
   */
  async setAddress(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/address/set_address/${uuid}`, data);
  }

  /**
   * Execute toggle address for postfix address
   */
  async toggleAddress(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/address/toggle_address/${uuid}`, data);
  }
}

export class PostfixAntispam extends BaseModule {
  /**
   * Get get for postfix antispam
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/antispam/get`);
  }

  /**
   * Execute set for postfix antispam
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/antispam/set`, data);
  }
}

export class PostfixDomain extends BaseModule {
  /**
   * Execute add domain for postfix domain
   */
  async addDomain(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/domain/add_domain`, data);
  }

  /**
   * Execute del domain for postfix domain
   */
  async delDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/domain/del_domain/${uuid}`, data);
  }

  /**
   * Get get for postfix domain
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/domain/get`);
  }

  /**
   * Get get domain for postfix domain
   */
  async getDomain(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/domain/get_domain/${uuid}`);
  }

  /**
   * Execute set for postfix domain
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/domain/set`, data);
  }

  /**
   * Execute set domain for postfix domain
   */
  async setDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/domain/set_domain/${uuid}`, data);
  }

  /**
   * Execute toggle domain for postfix domain
   */
  async toggleDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/domain/toggle_domain/${uuid}`, data);
  }
}

export class PostfixGeneral extends BaseModule {
  /**
   * Get get for postfix general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/general/get`);
  }

  /**
   * Execute set for postfix general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/general/set`, data);
  }
}

export class PostfixHeaderchecks extends BaseModule {
  /**
   * Execute add headercheck for postfix headerchecks
   */
  async addHeadercheck(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/headerchecks/add_headercheck`, data);
  }

  /**
   * Execute del headercheck for postfix headerchecks
   */
  async delHeadercheck(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/headerchecks/del_headercheck/${uuid}`, data);
  }

  /**
   * Get get for postfix headerchecks
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/headerchecks/get`);
  }

  /**
   * Get get headercheck for postfix headerchecks
   */
  async getHeadercheck(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/headerchecks/get_headercheck/${uuid}`);
  }

  /**
   * Execute set for postfix headerchecks
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/headerchecks/set`, data);
  }

  /**
   * Execute set headercheck for postfix headerchecks
   */
  async setHeadercheck(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/headerchecks/set_headercheck/${uuid}`, data);
  }

  /**
   * Execute toggle headercheck for postfix headerchecks
   */
  async toggleHeadercheck(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/headerchecks/toggle_headercheck/${uuid}`, data);
  }
}

export class PostfixRecipient extends BaseModule {
  /**
   * Execute add recipient for postfix recipient
   */
  async addRecipient(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/recipient/add_recipient`, data);
  }

  /**
   * Execute del recipient for postfix recipient
   */
  async delRecipient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/recipient/del_recipient/${uuid}`, data);
  }

  /**
   * Get get for postfix recipient
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/recipient/get`);
  }

  /**
   * Get get recipient for postfix recipient
   */
  async getRecipient(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/recipient/get_recipient/${uuid}`);
  }

  /**
   * Execute set for postfix recipient
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/recipient/set`, data);
  }

  /**
   * Execute set recipient for postfix recipient
   */
  async setRecipient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/recipient/set_recipient/${uuid}`, data);
  }

  /**
   * Execute toggle recipient for postfix recipient
   */
  async toggleRecipient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/recipient/toggle_recipient/${uuid}`, data);
  }
}

export class PostfixRecipientbcc extends BaseModule {
  /**
   * Execute add recipientbcc for postfix recipientbcc
   */
  async addRecipientbcc(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/recipientbcc/add_recipientbcc`, data);
  }

  /**
   * Execute del recipientbcc for postfix recipientbcc
   */
  async delRecipientbcc(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/recipientbcc/del_recipientbcc/${uuid}`, data);
  }

  /**
   * Get get for postfix recipientbcc
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/recipientbcc/get`);
  }

  /**
   * Get get recipientbcc for postfix recipientbcc
   */
  async getRecipientbcc(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/recipientbcc/get_recipientbcc/${uuid}`);
  }

  /**
   * Execute set for postfix recipientbcc
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/recipientbcc/set`, data);
  }

  /**
   * Execute set recipientbcc for postfix recipientbcc
   */
  async setRecipientbcc(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/recipientbcc/set_recipientbcc/${uuid}`, data);
  }

  /**
   * Execute toggle recipientbcc for postfix recipientbcc
   */
  async toggleRecipientbcc(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/recipientbcc/toggle_recipientbcc/${uuid}`, data);
  }
}

export class PostfixSender extends BaseModule {
  /**
   * Execute add sender for postfix sender
   */
  async addSender(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/sender/add_sender`, data);
  }

  /**
   * Execute del sender for postfix sender
   */
  async delSender(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/sender/del_sender/${uuid}`, data);
  }

  /**
   * Get get for postfix sender
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/sender/get`);
  }

  /**
   * Get get sender for postfix sender
   */
  async getSender(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/sender/get_sender/${uuid}`);
  }

  /**
   * Execute set for postfix sender
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/sender/set`, data);
  }

  /**
   * Execute set sender for postfix sender
   */
  async setSender(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/sender/set_sender/${uuid}`, data);
  }

  /**
   * Execute toggle sender for postfix sender
   */
  async toggleSender(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/sender/toggle_sender/${uuid}`, data);
  }
}

export class PostfixSenderbcc extends BaseModule {
  /**
   * Execute add senderbcc for postfix senderbcc
   */
  async addSenderbcc(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/senderbcc/add_senderbcc`, data);
  }

  /**
   * Execute del senderbcc for postfix senderbcc
   */
  async delSenderbcc(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/senderbcc/del_senderbcc/${uuid}`, data);
  }

  /**
   * Get get for postfix senderbcc
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/senderbcc/get`);
  }

  /**
   * Get get senderbcc for postfix senderbcc
   */
  async getSenderbcc(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/senderbcc/get_senderbcc/${uuid}`);
  }

  /**
   * Execute set for postfix senderbcc
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/senderbcc/set`, data);
  }

  /**
   * Execute set senderbcc for postfix senderbcc
   */
  async setSenderbcc(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/senderbcc/set_senderbcc/${uuid}`, data);
  }

  /**
   * Execute toggle senderbcc for postfix senderbcc
   */
  async toggleSenderbcc(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/senderbcc/toggle_senderbcc/${uuid}`, data);
  }
}

export class PostfixSendercanonical extends BaseModule {
  /**
   * Execute add sendercanonical for postfix sendercanonical
   */
  async addSendercanonical(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/sendercanonical/add_sendercanonical`, data);
  }

  /**
   * Execute del sendercanonical for postfix sendercanonical
   */
  async delSendercanonical(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/sendercanonical/del_sendercanonical/${uuid}`, data);
  }

  /**
   * Get get for postfix sendercanonical
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/sendercanonical/get`);
  }

  /**
   * Get get sendercanonical for postfix sendercanonical
   */
  async getSendercanonical(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/sendercanonical/get_sendercanonical/${uuid}`);
  }

  /**
   * Execute set for postfix sendercanonical
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/sendercanonical/set`, data);
  }

  /**
   * Execute set sendercanonical for postfix sendercanonical
   */
  async setSendercanonical(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/sendercanonical/set_sendercanonical/${uuid}`, data);
  }

  /**
   * Execute toggle sendercanonical for postfix sendercanonical
   */
  async toggleSendercanonical(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/postfix/postfix/sendercanonical/toggle_sendercanonical/${uuid}`, data);
  }
}

export class PostfixService extends BaseModule {
  /**
   * Get checkrspamd for postfix service
   */
  async checkrspamd(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/postfix/postfix/service/checkrspamd`);
  }

  /**
   * Execute reconfigure for postfix service
   */
  async reconfigure(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/postfix/postfix/service/reconfigure`);
  }

  /**
   * Execute restart for postfix service
   */
  async restart(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/postfix/postfix/service/restart`);
  }

  /**
   * Execute start for postfix service
   */
  async start(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/postfix/postfix/service/start`);
  }

  /**
   * Get status for postfix service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/postfix/postfix/service/status`);
  }

  /**
   * Execute stop for postfix service
   */
  async stop(data?: Record<string, any>): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/postfix/postfix/service/stop`);
  }
}

// Main module class
export class PostfixModule extends BaseModule {
  public readonly address: PostfixAddress;
  public readonly antispam: PostfixAntispam;
  public readonly domain: PostfixDomain;
  public readonly general: PostfixGeneral;
  public readonly headerchecks: PostfixHeaderchecks;
  public readonly recipient: PostfixRecipient;
  public readonly recipientbcc: PostfixRecipientbcc;
  public readonly sender: PostfixSender;
  public readonly senderbcc: PostfixSenderbcc;
  public readonly sendercanonical: PostfixSendercanonical;
  public readonly service: PostfixService;

  constructor(http: any) {
    super(http);
    this.address = new PostfixAddress(http);
    this.antispam = new PostfixAntispam(http);
    this.domain = new PostfixDomain(http);
    this.general = new PostfixGeneral(http);
    this.headerchecks = new PostfixHeaderchecks(http);
    this.recipient = new PostfixRecipient(http);
    this.recipientbcc = new PostfixRecipientbcc(http);
    this.sender = new PostfixSender(http);
    this.senderbcc = new PostfixSenderbcc(http);
    this.sendercanonical = new PostfixSendercanonical(http);
    this.service = new PostfixService(http);
  }

}