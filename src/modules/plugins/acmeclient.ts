import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class AcmeclientAccounts extends BaseModule {
  /**
   * Execute add for acmeclient accounts
   */
  async add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/accounts/add`, data);
  }

  /**
   * Execute del for acmeclient accounts
   */
  async del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/accounts/del/${uuid}`, data);
  }

  /**
   * Get get for acmeclient accounts
   */
  async get(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/accounts/get/${uuid}`);
  }

  /**
   * Execute register for acmeclient accounts
   */
  async register(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/accounts/register/${uuid}`, data);
  }

  /**
   * Execute set for acmeclient accounts
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/accounts/set`, data);
  }

  /**
   * Execute toggle for acmeclient accounts
   */
  async toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/accounts/toggle/${uuid}/${enabled}`, data);
  }

  /**
   * Execute update for acmeclient accounts
   */
  async update(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/accounts/update/${uuid}`, data);
  }
}

export class AcmeclientActions extends BaseModule {
  /**
   * Execute add for acmeclient actions
   */
  async add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/actions/add`, data);
  }

  /**
   * Execute del for acmeclient actions
   */
  async del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/actions/del/${uuid}`, data);
  }

  /**
   * Get get for acmeclient actions
   */
  async get(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/actions/get/${uuid}`);
  }

  /**
   * Execute set for acmeclient actions
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/actions/set`, data);
  }

  /**
   * Get sftp get identity for acmeclient actions
   */
  async sftpGetIdentity(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/actions/sftp_get_identity`);
  }

  /**
   * Get sftp test connection for acmeclient actions
   */
  async sftpTestConnection(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/actions/sftp_test_connection`);
  }

  /**
   * Get ssh get identity for acmeclient actions
   */
  async sshGetIdentity(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/actions/ssh_get_identity`);
  }

  /**
   * Get ssh test connection for acmeclient actions
   */
  async sshTestConnection(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/actions/ssh_test_connection`);
  }

  /**
   * Execute toggle for acmeclient actions
   */
  async toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/actions/toggle/${uuid}/${enabled}`, data);
  }

  /**
   * Execute update for acmeclient actions
   */
  async update(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/actions/update/${uuid}`, data);
  }
}

export class AcmeclientCertificates extends BaseModule {
  /**
   * Execute add for acmeclient certificates
   */
  async add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/certificates/add`, data);
  }

  /**
   * Get automation for acmeclient certificates
   */
  async automation(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/certificates/automation/${uuid}`);
  }

  /**
   * Execute del for acmeclient certificates
   */
  async del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/certificates/del/${uuid}`, data);
  }

  /**
   * Get get for acmeclient certificates
   */
  async get(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/certificates/get/${uuid}`);
  }

  /**
   * Get import for acmeclient certificates
   */
  async import(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/certificates/import/${uuid}`);
  }

  /**
   * Get removekey for acmeclient certificates
   */
  async removekey(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/certificates/removekey/${uuid}`);
  }

  /**
   * Execute revoke for acmeclient certificates
   */
  async revoke(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/certificates/revoke/${uuid}`, data);
  }

  /**
   * Execute set for acmeclient certificates
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/certificates/set`, data);
  }

  /**
   * Execute sign for acmeclient certificates
   */
  async sign(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/certificates/sign/${uuid}`, data);
  }

  /**
   * Execute toggle for acmeclient certificates
   */
  async toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/certificates/toggle/${uuid}/${enabled}`, data);
  }

  /**
   * Execute update for acmeclient certificates
   */
  async update(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/certificates/update/${uuid}`, data);
  }
}

export class AcmeclientService extends BaseModule {
  /**
   * Get configtest for acmeclient service
   */
  async configtest(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/service/configtest`);
  }

  /**
   * Execute reconfigure for acmeclient service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/acmeclient/acmeclient/service/reconfigure`);
  }

  /**
   * Get reset for acmeclient service
   */
  async reset(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/service/reset`);
  }

  /**
   * Execute restart for acmeclient service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/acmeclient/acmeclient/service/restart`);
  }

  /**
   * Get signallcerts for acmeclient service
   */
  async signallcerts(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/service/signallcerts`);
  }

  /**
   * Execute start for acmeclient service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/acmeclient/acmeclient/service/start`);
  }

  /**
   * Get status for acmeclient service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/acmeclient/acmeclient/service/status`);
  }

  /**
   * Execute stop for acmeclient service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/acmeclient/acmeclient/service/stop`);
  }
}

export class AcmeclientSettings extends BaseModule {
  /**
   * Execute fetch cron integration for acmeclient settings
   */
  async fetchCronIntegration(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/settings/fetch_cron_integration`, data);
  }

  /**
   * Execute fetch h a proxy integration for acmeclient settings
   */
  async fetchHAProxyIntegration(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/settings/fetch_h_a_proxy_integration`, data);
  }

  /**
   * Get get for acmeclient settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/settings/get`);
  }

  /**
   * Get get bind plugin status for acmeclient settings
   */
  async getBindPluginStatus(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/settings/get_bind_plugin_status`);
  }

  /**
   * Get get gcloud plugin status for acmeclient settings
   */
  async getGcloudPluginStatus(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/settings/get_gcloud_plugin_status`);
  }

  /**
   * Execute set for acmeclient settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/settings/set`, data);
  }
}

export class AcmeclientValidations extends BaseModule {
  /**
   * Execute add for acmeclient validations
   */
  async add(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/validations/add`, data);
  }

  /**
   * Execute del for acmeclient validations
   */
  async del(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/validations/del/${uuid}`, data);
  }

  /**
   * Get get for acmeclient validations
   */
  async get(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/acmeclient/acmeclient/validations/get/${uuid}`);
  }

  /**
   * Execute set for acmeclient validations
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/validations/set`, data);
  }

  /**
   * Execute toggle for acmeclient validations
   */
  async toggle(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/validations/toggle/${uuid}/${enabled}`, data);
  }

  /**
   * Execute update for acmeclient validations
   */
  async update(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/acmeclient/acmeclient/validations/update/${uuid}`, data);
  }
}

// Main module class
export class AcmeclientModule extends BaseModule {
  public readonly accounts: AcmeclientAccounts;
  public readonly actions: AcmeclientActions;
  public readonly certificates: AcmeclientCertificates;
  public readonly service: AcmeclientService;
  public readonly settings: AcmeclientSettings;
  public readonly validations: AcmeclientValidations;

  constructor(http: any) {
    super(http);
    this.accounts = new AcmeclientAccounts(http);
    this.actions = new AcmeclientActions(http);
    this.certificates = new AcmeclientCertificates(http);
    this.service = new AcmeclientService(http);
    this.settings = new AcmeclientSettings(http);
    this.validations = new AcmeclientValidations(http);
  }

}