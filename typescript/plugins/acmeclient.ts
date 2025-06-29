import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Acmeclient module

// Model field types

// Accounts types
export interface AcmeclientAccountsAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientAccountsAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientAccountsDelRequest {
  uuid: string;
}

export interface AcmeclientAccountsDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientAccountsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientAccountsRegisterRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientAccountsRegisterResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientAccountsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientAccountsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientAccountsToggleRequest {
  enabled?: boolean;
}

export interface AcmeclientAccountsToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientAccountsUpdateRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientAccountsUpdateResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Actions types
export interface AcmeclientActionsAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientActionsAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientActionsDelRequest {
  uuid: string;
}

export interface AcmeclientActionsDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientActionsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientActionsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientActionsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientActionsSftpGetIdentityResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientActionsSftpTestConnectionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientActionsSshGetIdentityResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientActionsSshTestConnectionResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientActionsToggleRequest {
  enabled?: boolean;
}

export interface AcmeclientActionsToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientActionsUpdateRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientActionsUpdateResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Certificates types
export interface AcmeclientCertificatesAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientCertificatesAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientCertificatesAutomationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientCertificatesDelRequest {
  uuid: string;
}

export interface AcmeclientCertificatesDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientCertificatesGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientCertificatesImportResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientCertificatesRemovekeyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientCertificatesRevokeRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientCertificatesRevokeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientCertificatesSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientCertificatesSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientCertificatesSignRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientCertificatesSignResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientCertificatesToggleRequest {
  enabled?: boolean;
}

export interface AcmeclientCertificatesToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientCertificatesUpdateRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientCertificatesUpdateResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Service types
export interface AcmeclientServiceConfigtestResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientServiceReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientServiceReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientServiceResetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientServiceRestartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientServiceRestartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientServiceSignallcertsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientServiceStartRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientServiceStartResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientServiceStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientServiceStopRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientServiceStopResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Settings types
export interface AcmeclientSettingsFetchCronIntegrationRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientSettingsFetchCronIntegrationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientSettingsFetchHAProxyIntegrationRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientSettingsFetchHAProxyIntegrationResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientSettingsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientSettingsGetBindPluginStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientSettingsGetGcloudPluginStatusResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientSettingsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientSettingsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Validations types
export interface AcmeclientValidationsAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientValidationsAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientValidationsDelRequest {
  uuid: string;
}

export interface AcmeclientValidationsDelResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientValidationsGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientValidationsSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientValidationsSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientValidationsToggleRequest {
  enabled?: boolean;
}

export interface AcmeclientValidationsToggleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface AcmeclientValidationsUpdateRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface AcmeclientValidationsUpdateResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface AcmeclientAccount {
}

export interface AcmeclientCertificate {
}

export interface AcmeclientValidation {
}

export interface AcmeclientAction {
}

export class AcmeclientApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/acmeclient';
  }

  // Accounts methods
  async accountsAdd(data?: AcmeclientAccountsAddRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientAccountsAddResponse>> {
    return this.client.post(`${this.basePath}/accounts/add`, data, config);
  }

  async accountsDel(uuid: string, data?: AcmeclientAccountsDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientAccountsDelResponse>> {
    return this.client.post(`${this.basePath}/accounts/del/${uuid}`, data, config);
  }

  async accountsGet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientAccountsGetResponse>> {
    return this.client.get(`${this.basePath}/accounts/get/${uuid}`, config);
  }

  async accountsRegister(uuid: string, data?: AcmeclientAccountsRegisterRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientAccountsRegisterResponse>> {
    return this.client.post(`${this.basePath}/accounts/register/${uuid}`, data, config);
  }

  async accountsSet(data?: AcmeclientAccountsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientAccountsSetResponse>> {
    return this.client.post(`${this.basePath}/accounts/set`, data, config);
  }

  async accountsToggle(uuid: string, enabled?: string, data?: AcmeclientAccountsToggleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientAccountsToggleResponse>> {
    return this.client.post(`${this.basePath}/accounts/toggle/${uuid}/${enabled}`, data, config);
  }

  async accountsUpdate(uuid: string, data?: AcmeclientAccountsUpdateRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientAccountsUpdateResponse>> {
    return this.client.post(`${this.basePath}/accounts/update/${uuid}`, data, config);
  }


  // Actions methods
  async actionsAdd(data?: AcmeclientActionsAddRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientActionsAddResponse>> {
    return this.client.post(`${this.basePath}/actions/add`, data, config);
  }

  async actionsDel(uuid: string, data?: AcmeclientActionsDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientActionsDelResponse>> {
    return this.client.post(`${this.basePath}/actions/del/${uuid}`, data, config);
  }

  async actionsGet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientActionsGetResponse>> {
    return this.client.get(`${this.basePath}/actions/get/${uuid}`, config);
  }

  async actionsSet(data?: AcmeclientActionsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientActionsSetResponse>> {
    return this.client.post(`${this.basePath}/actions/set`, data, config);
  }

  async actionsSftpGetIdentity(config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientActionsSftpGetIdentityResponse>> {
    return this.client.get(`${this.basePath}/actions/sftp_get_identity`, config);
  }

  async actionsSftpTestConnection(config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientActionsSftpTestConnectionResponse>> {
    return this.client.get(`${this.basePath}/actions/sftp_test_connection`, config);
  }

  async actionsSshGetIdentity(config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientActionsSshGetIdentityResponse>> {
    return this.client.get(`${this.basePath}/actions/ssh_get_identity`, config);
  }

  async actionsSshTestConnection(config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientActionsSshTestConnectionResponse>> {
    return this.client.get(`${this.basePath}/actions/ssh_test_connection`, config);
  }

  async actionsToggle(uuid: string, enabled?: string, data?: AcmeclientActionsToggleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientActionsToggleResponse>> {
    return this.client.post(`${this.basePath}/actions/toggle/${uuid}/${enabled}`, data, config);
  }

  async actionsUpdate(uuid: string, data?: AcmeclientActionsUpdateRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientActionsUpdateResponse>> {
    return this.client.post(`${this.basePath}/actions/update/${uuid}`, data, config);
  }


  // Certificates methods
  async certificatesAdd(data?: AcmeclientCertificatesAddRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientCertificatesAddResponse>> {
    return this.client.post(`${this.basePath}/certificates/add`, data, config);
  }

  async certificatesAutomation(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientCertificatesAutomationResponse>> {
    return this.client.get(`${this.basePath}/certificates/automation/${uuid}`, config);
  }

  async certificatesDel(uuid: string, data?: AcmeclientCertificatesDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientCertificatesDelResponse>> {
    return this.client.post(`${this.basePath}/certificates/del/${uuid}`, data, config);
  }

  async certificatesGet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientCertificatesGetResponse>> {
    return this.client.get(`${this.basePath}/certificates/get/${uuid}`, config);
  }

  async certificatesImport(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientCertificatesImportResponse>> {
    return this.client.get(`${this.basePath}/certificates/import/${uuid}`, config);
  }

  async certificatesRemovekey(uuid: string, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientCertificatesRemovekeyResponse>> {
    return this.client.get(`${this.basePath}/certificates/removekey/${uuid}`, config);
  }

  async certificatesRevoke(uuid: string, data?: AcmeclientCertificatesRevokeRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientCertificatesRevokeResponse>> {
    return this.client.post(`${this.basePath}/certificates/revoke/${uuid}`, data, config);
  }

  async certificatesSet(data?: AcmeclientCertificatesSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientCertificatesSetResponse>> {
    return this.client.post(`${this.basePath}/certificates/set`, data, config);
  }

  async certificatesSign(uuid: string, data?: AcmeclientCertificatesSignRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientCertificatesSignResponse>> {
    return this.client.post(`${this.basePath}/certificates/sign/${uuid}`, data, config);
  }

  async certificatesToggle(uuid: string, enabled?: string, data?: AcmeclientCertificatesToggleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientCertificatesToggleResponse>> {
    return this.client.post(`${this.basePath}/certificates/toggle/${uuid}/${enabled}`, data, config);
  }

  async certificatesUpdate(uuid: string, data?: AcmeclientCertificatesUpdateRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientCertificatesUpdateResponse>> {
    return this.client.post(`${this.basePath}/certificates/update/${uuid}`, data, config);
  }


  // Service methods
  async serviceConfigtest(config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientServiceConfigtestResponse>> {
    return this.client.get(`${this.basePath}/service/configtest`, config);
  }

  async serviceReconfigure(data?: AcmeclientServiceReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientServiceReconfigureResponse>> {
    return this.client.post(`${this.basePath}/service/reconfigure`, data, config);
  }

  async serviceReset(config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientServiceResetResponse>> {
    return this.client.get(`${this.basePath}/service/reset`, config);
  }

  async serviceRestart(data?: AcmeclientServiceRestartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientServiceRestartResponse>> {
    return this.client.post(`${this.basePath}/service/restart`, data, config);
  }

  async serviceSignallcerts(config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientServiceSignallcertsResponse>> {
    return this.client.get(`${this.basePath}/service/signallcerts`, config);
  }

  async serviceStart(data?: AcmeclientServiceStartRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientServiceStartResponse>> {
    return this.client.post(`${this.basePath}/service/start`, data, config);
  }

  async serviceStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientServiceStatusResponse>> {
    return this.client.get(`${this.basePath}/service/status`, config);
  }

  async serviceStop(data?: AcmeclientServiceStopRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientServiceStopResponse>> {
    return this.client.post(`${this.basePath}/service/stop`, data, config);
  }


  // Settings methods
  async settingsFetchCronIntegration(data?: AcmeclientSettingsFetchCronIntegrationRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientSettingsFetchCronIntegrationResponse>> {
    return this.client.post(`${this.basePath}/settings/fetch_cron_integration`, data, config);
  }

  async settingsFetchHAProxyIntegration(data?: AcmeclientSettingsFetchHAProxyIntegrationRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientSettingsFetchHAProxyIntegrationResponse>> {
    return this.client.post(`${this.basePath}/settings/fetch_h_a_proxy_integration`, data, config);
  }

  async settingsGet(config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientSettingsGetResponse>> {
    return this.client.get(`${this.basePath}/settings/get`, config);
  }

  async settingsGetBindPluginStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientSettingsGetBindPluginStatusResponse>> {
    return this.client.get(`${this.basePath}/settings/get_bind_plugin_status`, config);
  }

  async settingsGetGcloudPluginStatus(config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientSettingsGetGcloudPluginStatusResponse>> {
    return this.client.get(`${this.basePath}/settings/get_gcloud_plugin_status`, config);
  }

  async settingsSet(data?: AcmeclientSettingsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientSettingsSetResponse>> {
    return this.client.post(`${this.basePath}/settings/set`, data, config);
  }


  // Validations methods
  async validationsAdd(data?: AcmeclientValidationsAddRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientValidationsAddResponse>> {
    return this.client.post(`${this.basePath}/validations/add`, data, config);
  }

  async validationsDel(uuid: string, data?: AcmeclientValidationsDelRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientValidationsDelResponse>> {
    return this.client.post(`${this.basePath}/validations/del/${uuid}`, data, config);
  }

  async validationsGet(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientValidationsGetResponse>> {
    return this.client.get(`${this.basePath}/validations/get/${uuid}`, config);
  }

  async validationsSet(data?: AcmeclientValidationsSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientValidationsSetResponse>> {
    return this.client.post(`${this.basePath}/validations/set`, data, config);
  }

  async validationsToggle(uuid: string, enabled?: string, data?: AcmeclientValidationsToggleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientValidationsToggleResponse>> {
    return this.client.post(`${this.basePath}/validations/toggle/${uuid}/${enabled}`, data, config);
  }

  async validationsUpdate(uuid: string, data?: AcmeclientValidationsUpdateRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<AcmeclientValidationsUpdateResponse>> {
    return this.client.post(`${this.basePath}/validations/update/${uuid}`, data, config);
  }

}
