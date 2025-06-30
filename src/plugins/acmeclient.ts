import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Accounts methods
  async accountsAdd(data?: AcmeclientAccountsAddRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientAccountsAddResponse>> {
    return this.http.post(`/api/acmeclient/accounts/add`, data, config);
  }

  async accountsDel(uuid: string, data?: AcmeclientAccountsDelRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientAccountsDelResponse>> {
    return this.http.post(`/api/acmeclient/accounts/del/${uuid}`, data, config);
  }

  async accountsGet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<AcmeclientAccountsGetResponse>> {
    return this.http.get(`/api/acmeclient/accounts/get/${uuid}`, config);
  }

  async accountsRegister(uuid: string, data?: AcmeclientAccountsRegisterRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientAccountsRegisterResponse>> {
    return this.http.post(`/api/acmeclient/accounts/register/${uuid}`, data, config);
  }

  async accountsSet(data?: AcmeclientAccountsSetRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientAccountsSetResponse>> {
    return this.http.post(`/api/acmeclient/accounts/set`, data, config);
  }

  async accountsToggle(uuid: string, enabled?: string, data?: AcmeclientAccountsToggleRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientAccountsToggleResponse>> {
    return this.http.post(`/api/acmeclient/accounts/toggle/${uuid}/${enabled}`, data, config);
  }

  async accountsUpdate(uuid: string, data?: AcmeclientAccountsUpdateRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientAccountsUpdateResponse>> {
    return this.http.post(`/api/acmeclient/accounts/update/${uuid}`, data, config);
  }


  // Actions methods
  async actionsAdd(data?: AcmeclientActionsAddRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientActionsAddResponse>> {
    return this.http.post(`/api/acmeclient/actions/add`, data, config);
  }

  async actionsDel(uuid: string, data?: AcmeclientActionsDelRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientActionsDelResponse>> {
    return this.http.post(`/api/acmeclient/actions/del/${uuid}`, data, config);
  }

  async actionsGet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<AcmeclientActionsGetResponse>> {
    return this.http.get(`/api/acmeclient/actions/get/${uuid}`, config);
  }

  async actionsSet(data?: AcmeclientActionsSetRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientActionsSetResponse>> {
    return this.http.post(`/api/acmeclient/actions/set`, data, config);
  }

  async actionsSftpGetIdentity(config?: RequestConfig): Promise<ApiResponse<AcmeclientActionsSftpGetIdentityResponse>> {
    return this.http.get(`/api/acmeclient/actions/sftp_get_identity`, config);
  }

  async actionsSftpTestConnection(config?: RequestConfig): Promise<ApiResponse<AcmeclientActionsSftpTestConnectionResponse>> {
    return this.http.get(`/api/acmeclient/actions/sftp_test_connection`, config);
  }

  async actionsSshGetIdentity(config?: RequestConfig): Promise<ApiResponse<AcmeclientActionsSshGetIdentityResponse>> {
    return this.http.get(`/api/acmeclient/actions/ssh_get_identity`, config);
  }

  async actionsSshTestConnection(config?: RequestConfig): Promise<ApiResponse<AcmeclientActionsSshTestConnectionResponse>> {
    return this.http.get(`/api/acmeclient/actions/ssh_test_connection`, config);
  }

  async actionsToggle(uuid: string, enabled?: string, data?: AcmeclientActionsToggleRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientActionsToggleResponse>> {
    return this.http.post(`/api/acmeclient/actions/toggle/${uuid}/${enabled}`, data, config);
  }

  async actionsUpdate(uuid: string, data?: AcmeclientActionsUpdateRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientActionsUpdateResponse>> {
    return this.http.post(`/api/acmeclient/actions/update/${uuid}`, data, config);
  }


  // Certificates methods
  async certificatesAdd(data?: AcmeclientCertificatesAddRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientCertificatesAddResponse>> {
    return this.http.post(`/api/acmeclient/certificates/add`, data, config);
  }

  async certificatesAutomation(uuid: string, config?: RequestConfig): Promise<ApiResponse<AcmeclientCertificatesAutomationResponse>> {
    return this.http.get(`/api/acmeclient/certificates/automation/${uuid}`, config);
  }

  async certificatesDel(uuid: string, data?: AcmeclientCertificatesDelRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientCertificatesDelResponse>> {
    return this.http.post(`/api/acmeclient/certificates/del/${uuid}`, data, config);
  }

  async certificatesGet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<AcmeclientCertificatesGetResponse>> {
    return this.http.get(`/api/acmeclient/certificates/get/${uuid}`, config);
  }

  async certificatesImport(uuid: string, config?: RequestConfig): Promise<ApiResponse<AcmeclientCertificatesImportResponse>> {
    return this.http.get(`/api/acmeclient/certificates/import/${uuid}`, config);
  }

  async certificatesRemovekey(uuid: string, config?: RequestConfig): Promise<ApiResponse<AcmeclientCertificatesRemovekeyResponse>> {
    return this.http.get(`/api/acmeclient/certificates/removekey/${uuid}`, config);
  }

  async certificatesRevoke(uuid: string, data?: AcmeclientCertificatesRevokeRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientCertificatesRevokeResponse>> {
    return this.http.post(`/api/acmeclient/certificates/revoke/${uuid}`, data, config);
  }

  async certificatesSet(data?: AcmeclientCertificatesSetRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientCertificatesSetResponse>> {
    return this.http.post(`/api/acmeclient/certificates/set`, data, config);
  }

  async certificatesSign(uuid: string, data?: AcmeclientCertificatesSignRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientCertificatesSignResponse>> {
    return this.http.post(`/api/acmeclient/certificates/sign/${uuid}`, data, config);
  }

  async certificatesToggle(uuid: string, enabled?: string, data?: AcmeclientCertificatesToggleRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientCertificatesToggleResponse>> {
    return this.http.post(`/api/acmeclient/certificates/toggle/${uuid}/${enabled}`, data, config);
  }

  async certificatesUpdate(uuid: string, data?: AcmeclientCertificatesUpdateRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientCertificatesUpdateResponse>> {
    return this.http.post(`/api/acmeclient/certificates/update/${uuid}`, data, config);
  }


  // Service methods
  async serviceConfigtest(config?: RequestConfig): Promise<ApiResponse<AcmeclientServiceConfigtestResponse>> {
    return this.http.get(`/api/acmeclient/service/configtest`, config);
  }

  async serviceReconfigure(data?: AcmeclientServiceReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientServiceReconfigureResponse>> {
    return this.http.post(`/api/acmeclient/service/reconfigure`, data, config);
  }

  async serviceReset(config?: RequestConfig): Promise<ApiResponse<AcmeclientServiceResetResponse>> {
    return this.http.get(`/api/acmeclient/service/reset`, config);
  }

  async serviceRestart(data?: AcmeclientServiceRestartRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientServiceRestartResponse>> {
    return this.http.post(`/api/acmeclient/service/restart`, data, config);
  }

  async serviceSignallcerts(config?: RequestConfig): Promise<ApiResponse<AcmeclientServiceSignallcertsResponse>> {
    return this.http.get(`/api/acmeclient/service/signallcerts`, config);
  }

  async serviceStart(data?: AcmeclientServiceStartRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientServiceStartResponse>> {
    return this.http.post(`/api/acmeclient/service/start`, data, config);
  }

  async serviceStatus(config?: RequestConfig): Promise<ApiResponse<AcmeclientServiceStatusResponse>> {
    return this.http.get(`/api/acmeclient/service/status`, config);
  }

  async serviceStop(data?: AcmeclientServiceStopRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientServiceStopResponse>> {
    return this.http.post(`/api/acmeclient/service/stop`, data, config);
  }


  // Settings methods
  async settingsFetchCronIntegration(data?: AcmeclientSettingsFetchCronIntegrationRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientSettingsFetchCronIntegrationResponse>> {
    return this.http.post(`/api/acmeclient/settings/fetch_cron_integration`, data, config);
  }

  async settingsFetchHAProxyIntegration(data?: AcmeclientSettingsFetchHAProxyIntegrationRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientSettingsFetchHAProxyIntegrationResponse>> {
    return this.http.post(`/api/acmeclient/settings/fetch_h_a_proxy_integration`, data, config);
  }

  async settingsGet(config?: RequestConfig): Promise<ApiResponse<AcmeclientSettingsGetResponse>> {
    return this.http.get(`/api/acmeclient/settings/get`, config);
  }

  async settingsGetBindPluginStatus(config?: RequestConfig): Promise<ApiResponse<AcmeclientSettingsGetBindPluginStatusResponse>> {
    return this.http.get(`/api/acmeclient/settings/get_bind_plugin_status`, config);
  }

  async settingsGetGcloudPluginStatus(config?: RequestConfig): Promise<ApiResponse<AcmeclientSettingsGetGcloudPluginStatusResponse>> {
    return this.http.get(`/api/acmeclient/settings/get_gcloud_plugin_status`, config);
  }

  async settingsSet(data?: AcmeclientSettingsSetRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientSettingsSetResponse>> {
    return this.http.post(`/api/acmeclient/settings/set`, data, config);
  }


  // Validations methods
  async validationsAdd(data?: AcmeclientValidationsAddRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientValidationsAddResponse>> {
    return this.http.post(`/api/acmeclient/validations/add`, data, config);
  }

  async validationsDel(uuid: string, data?: AcmeclientValidationsDelRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientValidationsDelResponse>> {
    return this.http.post(`/api/acmeclient/validations/del/${uuid}`, data, config);
  }

  async validationsGet(uuid?: string, config?: RequestConfig): Promise<ApiResponse<AcmeclientValidationsGetResponse>> {
    return this.http.get(`/api/acmeclient/validations/get/${uuid}`, config);
  }

  async validationsSet(data?: AcmeclientValidationsSetRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientValidationsSetResponse>> {
    return this.http.post(`/api/acmeclient/validations/set`, data, config);
  }

  async validationsToggle(uuid: string, enabled?: string, data?: AcmeclientValidationsToggleRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientValidationsToggleResponse>> {
    return this.http.post(`/api/acmeclient/validations/toggle/${uuid}/${enabled}`, data, config);
  }

  async validationsUpdate(uuid: string, data?: AcmeclientValidationsUpdateRequest, config?: RequestConfig): Promise<ApiResponse<AcmeclientValidationsUpdateResponse>> {
    return this.http.post(`/api/acmeclient/validations/update/${uuid}`, data, config);
  }

}
