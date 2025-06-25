import type {
      ApiResponse,
      ApiResult,
      SearchResult,
      BaseRecord,
      ServiceStatus,
      ServiceControl,
      ConfigTest,
      CrudOperations,
      ServiceOperations,
      SettingsOperations
    } from './common';

// Controller interfaces
export interface PostfixAddressController {
  /** Execute add address for postfix address */
  addAddress(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del address for postfix address */
  delAddress(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for postfix address */
  get(): Promise<ApiResponse<any>>;
  /** Get get address for postfix address */
  getAddress(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for postfix address */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set address for postfix address */
  setAddress(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle address for postfix address */
  toggleAddress(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface PostfixAntispamController {
  /** Get get for postfix antispam */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for postfix antispam */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface PostfixDomainController {
  /** Execute add domain for postfix domain */
  addDomain(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del domain for postfix domain */
  delDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for postfix domain */
  get(): Promise<ApiResponse<any>>;
  /** Get get domain for postfix domain */
  getDomain(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for postfix domain */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set domain for postfix domain */
  setDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle domain for postfix domain */
  toggleDomain(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface PostfixGeneralController {
  /** Get get for postfix general */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for postfix general */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface PostfixHeaderchecksController {
  /** Execute add headercheck for postfix headerchecks */
  addHeadercheck(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del headercheck for postfix headerchecks */
  delHeadercheck(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for postfix headerchecks */
  get(): Promise<ApiResponse<any>>;
  /** Get get headercheck for postfix headerchecks */
  getHeadercheck(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for postfix headerchecks */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set headercheck for postfix headerchecks */
  setHeadercheck(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle headercheck for postfix headerchecks */
  toggleHeadercheck(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface PostfixRecipientController {
  /** Execute add recipient for postfix recipient */
  addRecipient(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del recipient for postfix recipient */
  delRecipient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for postfix recipient */
  get(): Promise<ApiResponse<any>>;
  /** Get get recipient for postfix recipient */
  getRecipient(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for postfix recipient */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set recipient for postfix recipient */
  setRecipient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle recipient for postfix recipient */
  toggleRecipient(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface PostfixRecipientbccController {
  /** Execute add recipientbcc for postfix recipientbcc */
  addRecipientbcc(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del recipientbcc for postfix recipientbcc */
  delRecipientbcc(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for postfix recipientbcc */
  get(): Promise<ApiResponse<any>>;
  /** Get get recipientbcc for postfix recipientbcc */
  getRecipientbcc(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for postfix recipientbcc */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set recipientbcc for postfix recipientbcc */
  setRecipientbcc(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle recipientbcc for postfix recipientbcc */
  toggleRecipientbcc(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface PostfixSenderController {
  /** Execute add sender for postfix sender */
  addSender(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del sender for postfix sender */
  delSender(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for postfix sender */
  get(): Promise<ApiResponse<any>>;
  /** Get get sender for postfix sender */
  getSender(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for postfix sender */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set sender for postfix sender */
  setSender(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle sender for postfix sender */
  toggleSender(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface PostfixSenderbccController {
  /** Execute add senderbcc for postfix senderbcc */
  addSenderbcc(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del senderbcc for postfix senderbcc */
  delSenderbcc(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for postfix senderbcc */
  get(): Promise<ApiResponse<any>>;
  /** Get get senderbcc for postfix senderbcc */
  getSenderbcc(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for postfix senderbcc */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set senderbcc for postfix senderbcc */
  setSenderbcc(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle senderbcc for postfix senderbcc */
  toggleSenderbcc(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface PostfixSendercanonicalController {
  /** Execute add sendercanonical for postfix sendercanonical */
  addSendercanonical(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute del sendercanonical for postfix sendercanonical */
  delSendercanonical(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for postfix sendercanonical */
  get(): Promise<ApiResponse<any>>;
  /** Get get sendercanonical for postfix sendercanonical */
  getSendercanonical(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for postfix sendercanonical */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute set sendercanonical for postfix sendercanonical */
  setSendercanonical(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute toggle sendercanonical for postfix sendercanonical */
  toggleSendercanonical(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface PostfixServiceController {
  /** Get checkrspamd for postfix service */
  checkrspamd(): Promise<ApiResponse<any>>;
  /** Execute reconfigure for postfix service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for postfix service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for postfix service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for postfix service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Execute stop for postfix service */
  stop(): Promise<ApiResponse<ServiceControl>>;
}

// Main module interface
export interface PostfixModule {
  address: PostfixAddressController;
  antispam: PostfixAntispamController;
  domain: PostfixDomainController;
  general: PostfixGeneralController;
  headerchecks: PostfixHeaderchecksController;
  recipient: PostfixRecipientController;
  recipientbcc: PostfixRecipientbccController;
  sender: PostfixSenderController;
  senderbcc: PostfixSenderbccController;
  sendercanonical: PostfixSendercanonicalController;
  service: PostfixServiceController;
}

// Record interfaces
export interface PostfixRecord extends BaseRecord {
 
  [key: string]: any;
}