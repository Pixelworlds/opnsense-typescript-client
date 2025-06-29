import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Type definitions for Firewall module

// Model field types

// Alias types
export interface FirewallAliasAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallAliasAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasDelItemRequest {
  uuid: string;
}

export interface FirewallAliasDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasGetAliasUUIDResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasGetGeoIPResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasGetTableSizeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasImportRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallAliasImportResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasListCategoriesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasListCountriesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasListNetworkAliasesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasListUserGroupsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallAliasReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallAliasSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallAliasSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasToggleItemRequest {
  enabled?: boolean;
}

export interface FirewallAliasToggleItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// AliasUtil types
export interface FirewallAliasUtilAddRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallAliasUtilAddResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasUtilAliasesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasUtilDeleteRequest {
  uuid: string;
}

export interface FirewallAliasUtilDeleteResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasUtilFindReferencesRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallAliasUtilFindReferencesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasUtilFlushRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallAliasUtilFlushResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasUtilListResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallAliasUtilUpdateBogonsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Category types
export interface FirewallCategoryAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallCategoryAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallCategoryDelItemRequest {
  uuid: string;
}

export interface FirewallCategoryDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallCategoryGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallCategoryGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallCategorySetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallCategorySetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallCategorySetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallCategorySetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// FilterBase types
export interface FirewallFilterBaseApplyRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallFilterBaseApplyResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallFilterBaseCancelRollbackRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallFilterBaseCancelRollbackResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallFilterBaseGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallFilterBaseListCategoriesResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallFilterBaseListNetworkSelectOptionsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallFilterBaseRevertRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallFilterBaseRevertResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallFilterBaseSavepointRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallFilterBaseSavepointResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallFilterBaseSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallFilterBaseSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Filter types
export interface FirewallFilterAddRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallFilterAddRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallFilterDelRuleRequest {
  uuid: string;
}

export interface FirewallFilterDelRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallFilterGetInterfaceListResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallFilterGetRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallFilterMoveRuleBeforeRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallFilterMoveRuleBeforeResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallFilterSetRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallFilterSetRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallFilterToggleRuleRequest {
  enabled?: boolean;
}

export interface FirewallFilterToggleRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// FilterUtil types
export interface FirewallFilterUtilRuleStatsResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Group types
export interface FirewallGroupAddItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallGroupAddItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallGroupDelItemRequest {
  uuid: string;
}

export interface FirewallGroupDelItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallGroupGetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallGroupGetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallGroupReconfigureRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallGroupReconfigureResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallGroupSetRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallGroupSetResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallGroupSetItemRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallGroupSetItemResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Npt types
export interface FirewallNptAddRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallNptAddRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallNptDelRuleRequest {
  uuid: string;
}

export interface FirewallNptDelRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallNptGetRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallNptSetRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallNptSetRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallNptToggleRuleRequest {
  enabled?: boolean;
}

export interface FirewallNptToggleRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// OneToOne types
export interface FirewallOneToOneAddRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallOneToOneAddRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallOneToOneDelRuleRequest {
  uuid: string;
}

export interface FirewallOneToOneDelRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallOneToOneGetRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallOneToOneSetRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallOneToOneSetRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallOneToOneToggleRuleRequest {
  enabled?: boolean;
}

export interface FirewallOneToOneToggleRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// SourceNat types
export interface FirewallSourceNatAddRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallSourceNatAddRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallSourceNatDelRuleRequest {
  uuid: string;
}

export interface FirewallSourceNatDelRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallSourceNatGetRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallSourceNatSetRuleRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface FirewallSourceNatSetRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface FirewallSourceNatToggleRuleRequest {
  enabled?: boolean;
}

export interface FirewallSourceNatToggleRuleResponse {
  result?: string;
  status?: string;
  message?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export class FirewallApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/firewall';
  }

  // Alias methods
  async aliasAddItem(data?: FirewallAliasAddItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasAddItemResponse>> {
    return this.client.post(`${this.basePath}/alias/add_item`, data, config);
  }

  async aliasDelItem(uuid: string, data?: FirewallAliasDelItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasDelItemResponse>> {
    return this.client.post(`${this.basePath}/alias/del_item/${uuid}`, data, config);
  }

  async aliasGet(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasGetResponse>> {
    return this.client.get(`${this.basePath}/alias/get`, config);
  }

  async aliasGetAliasUUID(name: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasGetAliasUUIDResponse>> {
    return this.client.get(`${this.basePath}/alias/get_alias_u_u_i_d/${name}`, config);
  }

  async aliasGetGeoIP(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasGetGeoIPResponse>> {
    return this.client.get(`${this.basePath}/alias/get_geo_i_p`, config);
  }

  async aliasGetItem(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasGetItemResponse>> {
    return this.client.get(`${this.basePath}/alias/get_item/${uuid}`, config);
  }

  async aliasGetTableSize(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasGetTableSizeResponse>> {
    return this.client.get(`${this.basePath}/alias/get_table_size`, config);
  }

  async aliasImport(data?: FirewallAliasImportRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasImportResponse>> {
    return this.client.post(`${this.basePath}/alias/import`, data, config);
  }

  async aliasListCategories(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasListCategoriesResponse>> {
    return this.client.get(`${this.basePath}/alias/list_categories`, config);
  }

  async aliasListCountries(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasListCountriesResponse>> {
    return this.client.get(`${this.basePath}/alias/list_countries`, config);
  }

  async aliasListNetworkAliases(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasListNetworkAliasesResponse>> {
    return this.client.get(`${this.basePath}/alias/list_network_aliases`, config);
  }

  async aliasListUserGroups(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasListUserGroupsResponse>> {
    return this.client.get(`${this.basePath}/alias/list_user_groups`, config);
  }

  async aliasReconfigure(data?: FirewallAliasReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasReconfigureResponse>> {
    return this.client.post(`${this.basePath}/alias/reconfigure`, data, config);
  }

  async aliasSet(data?: FirewallAliasSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasSetResponse>> {
    return this.client.post(`${this.basePath}/alias/set`, data, config);
  }

  async aliasSetItem(uuid: string, data?: FirewallAliasSetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasSetItemResponse>> {
    return this.client.post(`${this.basePath}/alias/set_item/${uuid}`, data, config);
  }

  async aliasToggleItem(uuid: string, enabled?: string, data?: FirewallAliasToggleItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasToggleItemResponse>> {
    return this.client.post(`${this.basePath}/alias/toggle_item/${uuid}/${enabled}`, data, config);
  }


  // AliasUtil methods
  async aliasUtilAdd(alias: string, data?: FirewallAliasUtilAddRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasUtilAddResponse>> {
    return this.client.post(`${this.basePath}/alias_util/add/${alias}`, data, config);
  }

  async aliasUtilAliases(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasUtilAliasesResponse>> {
    return this.client.get(`${this.basePath}/alias_util/aliases`, config);
  }

  async aliasUtilDelete(alias: string, data?: FirewallAliasUtilDeleteRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasUtilDeleteResponse>> {
    return this.client.post(`${this.basePath}/alias_util/delete/${alias}`, data, config);
  }

  async aliasUtilFindReferences(data?: FirewallAliasUtilFindReferencesRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasUtilFindReferencesResponse>> {
    return this.client.post(`${this.basePath}/alias_util/find_references`, data, config);
  }

  async aliasUtilFlush(alias: string, data?: FirewallAliasUtilFlushRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasUtilFlushResponse>> {
    return this.client.post(`${this.basePath}/alias_util/flush/${alias}`, data, config);
  }

  async aliasUtilList(alias: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasUtilListResponse>> {
    return this.client.get(`${this.basePath}/alias_util/list/${alias}`, config);
  }

  async aliasUtilUpdateBogons(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallAliasUtilUpdateBogonsResponse>> {
    return this.client.get(`${this.basePath}/alias_util/update_bogons`, config);
  }


  // Category methods
  async categoryAddItem(data?: FirewallCategoryAddItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallCategoryAddItemResponse>> {
    return this.client.post(`${this.basePath}/category/add_item`, data, config);
  }

  async categoryDelItem(uuid: string, data?: FirewallCategoryDelItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallCategoryDelItemResponse>> {
    return this.client.post(`${this.basePath}/category/del_item/${uuid}`, data, config);
  }

  async categoryGet(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallCategoryGetResponse>> {
    return this.client.get(`${this.basePath}/category/get`, config);
  }

  async categoryGetItem(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallCategoryGetItemResponse>> {
    return this.client.get(`${this.basePath}/category/get_item/${uuid}`, config);
  }

  async categorySet(data?: FirewallCategorySetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallCategorySetResponse>> {
    return this.client.post(`${this.basePath}/category/set`, data, config);
  }

  async categorySetItem(uuid: string, data?: FirewallCategorySetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallCategorySetItemResponse>> {
    return this.client.post(`${this.basePath}/category/set_item/${uuid}`, data, config);
  }


  // FilterBase methods
  async filterBaseApply(rollbackRevision?: string, data?: FirewallFilterBaseApplyRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterBaseApplyResponse>> {
    return this.client.post(`${this.basePath}/filter_base/apply/${rollbackRevision}`, data, config);
  }

  async filterBaseCancelRollback(rollbackRevision: string, data?: FirewallFilterBaseCancelRollbackRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterBaseCancelRollbackResponse>> {
    return this.client.post(`${this.basePath}/filter_base/cancel_rollback/${rollbackRevision}`, data, config);
  }

  async filterBaseGet(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterBaseGetResponse>> {
    return this.client.get(`${this.basePath}/filter_base/get`, config);
  }

  async filterBaseListCategories(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterBaseListCategoriesResponse>> {
    return this.client.get(`${this.basePath}/filter_base/list_categories`, config);
  }

  async filterBaseListNetworkSelectOptions(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterBaseListNetworkSelectOptionsResponse>> {
    return this.client.get(`${this.basePath}/filter_base/list_network_select_options`, config);
  }

  async filterBaseRevert(revision: string, data?: FirewallFilterBaseRevertRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterBaseRevertResponse>> {
    return this.client.post(`${this.basePath}/filter_base/revert/${revision}`, data, config);
  }

  async filterBaseSavepoint(data?: FirewallFilterBaseSavepointRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterBaseSavepointResponse>> {
    return this.client.post(`${this.basePath}/filter_base/savepoint`, data, config);
  }

  async filterBaseSet(data?: FirewallFilterBaseSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterBaseSetResponse>> {
    return this.client.post(`${this.basePath}/filter_base/set`, data, config);
  }


  // Filter methods
  async filterAddRule(data?: FirewallFilterAddRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterAddRuleResponse>> {
    return this.client.post(`${this.basePath}/filter/add_rule`, data, config);
  }

  async filterDelRule(uuid: string, data?: FirewallFilterDelRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterDelRuleResponse>> {
    return this.client.post(`${this.basePath}/filter/del_rule/${uuid}`, data, config);
  }

  async filterGetInterfaceList(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterGetInterfaceListResponse>> {
    return this.client.get(`${this.basePath}/filter/get_interface_list`, config);
  }

  async filterGetRule(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterGetRuleResponse>> {
    return this.client.get(`${this.basePath}/filter/get_rule/${uuid}`, config);
  }

  async filterMoveRuleBefore(selectedUuid: string, targetUuid: string, data?: FirewallFilterMoveRuleBeforeRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterMoveRuleBeforeResponse>> {
    return this.client.post(`${this.basePath}/filter/move_rule_before/${selectedUuid}/${targetUuid}`, data, config);
  }

  async filterSetRule(uuid: string, data?: FirewallFilterSetRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterSetRuleResponse>> {
    return this.client.post(`${this.basePath}/filter/set_rule/${uuid}`, data, config);
  }

  async filterToggleRule(uuid: string, enabled?: string, data?: FirewallFilterToggleRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterToggleRuleResponse>> {
    return this.client.post(`${this.basePath}/filter/toggle_rule/${uuid}/${enabled}`, data, config);
  }


  // FilterUtil methods
  async filterUtilRuleStats(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallFilterUtilRuleStatsResponse>> {
    return this.client.get(`${this.basePath}/filter_util/rule_stats`, config);
  }


  // Group methods
  async groupAddItem(data?: FirewallGroupAddItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallGroupAddItemResponse>> {
    return this.client.post(`${this.basePath}/group/add_item`, data, config);
  }

  async groupDelItem(uuid: string, data?: FirewallGroupDelItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallGroupDelItemResponse>> {
    return this.client.post(`${this.basePath}/group/del_item/${uuid}`, data, config);
  }

  async groupGet(config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallGroupGetResponse>> {
    return this.client.get(`${this.basePath}/group/get`, config);
  }

  async groupGetItem(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallGroupGetItemResponse>> {
    return this.client.get(`${this.basePath}/group/get_item/${uuid}`, config);
  }

  async groupReconfigure(data?: FirewallGroupReconfigureRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallGroupReconfigureResponse>> {
    return this.client.post(`${this.basePath}/group/reconfigure`, data, config);
  }

  async groupSet(data?: FirewallGroupSetRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallGroupSetResponse>> {
    return this.client.post(`${this.basePath}/group/set`, data, config);
  }

  async groupSetItem(uuid: string, data?: FirewallGroupSetItemRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallGroupSetItemResponse>> {
    return this.client.post(`${this.basePath}/group/set_item/${uuid}`, data, config);
  }


  // Npt methods
  async nptAddRule(data?: FirewallNptAddRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallNptAddRuleResponse>> {
    return this.client.post(`${this.basePath}/npt/add_rule`, data, config);
  }

  async nptDelRule(uuid: string, data?: FirewallNptDelRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallNptDelRuleResponse>> {
    return this.client.post(`${this.basePath}/npt/del_rule/${uuid}`, data, config);
  }

  async nptGetRule(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallNptGetRuleResponse>> {
    return this.client.get(`${this.basePath}/npt/get_rule/${uuid}`, config);
  }

  async nptSetRule(uuid: string, data?: FirewallNptSetRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallNptSetRuleResponse>> {
    return this.client.post(`${this.basePath}/npt/set_rule/${uuid}`, data, config);
  }

  async nptToggleRule(uuid: string, enabled?: string, data?: FirewallNptToggleRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallNptToggleRuleResponse>> {
    return this.client.post(`${this.basePath}/npt/toggle_rule/${uuid}/${enabled}`, data, config);
  }


  // OneToOne methods
  async oneToOneAddRule(data?: FirewallOneToOneAddRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallOneToOneAddRuleResponse>> {
    return this.client.post(`${this.basePath}/one_to_one/add_rule`, data, config);
  }

  async oneToOneDelRule(uuid: string, data?: FirewallOneToOneDelRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallOneToOneDelRuleResponse>> {
    return this.client.post(`${this.basePath}/one_to_one/del_rule/${uuid}`, data, config);
  }

  async oneToOneGetRule(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallOneToOneGetRuleResponse>> {
    return this.client.get(`${this.basePath}/one_to_one/get_rule/${uuid}`, config);
  }

  async oneToOneSetRule(uuid: string, data?: FirewallOneToOneSetRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallOneToOneSetRuleResponse>> {
    return this.client.post(`${this.basePath}/one_to_one/set_rule/${uuid}`, data, config);
  }

  async oneToOneToggleRule(uuid: string, enabled?: string, data?: FirewallOneToOneToggleRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallOneToOneToggleRuleResponse>> {
    return this.client.post(`${this.basePath}/one_to_one/toggle_rule/${uuid}/${enabled}`, data, config);
  }


  // SourceNat methods
  async sourceNatAddRule(data?: FirewallSourceNatAddRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallSourceNatAddRuleResponse>> {
    return this.client.post(`${this.basePath}/source_nat/add_rule`, data, config);
  }

  async sourceNatDelRule(uuid: string, data?: FirewallSourceNatDelRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallSourceNatDelRuleResponse>> {
    return this.client.post(`${this.basePath}/source_nat/del_rule/${uuid}`, data, config);
  }

  async sourceNatGetRule(uuid?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallSourceNatGetRuleResponse>> {
    return this.client.get(`${this.basePath}/source_nat/get_rule/${uuid}`, config);
  }

  async sourceNatSetRule(uuid: string, data?: FirewallSourceNatSetRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallSourceNatSetRuleResponse>> {
    return this.client.post(`${this.basePath}/source_nat/set_rule/${uuid}`, data, config);
  }

  async sourceNatToggleRule(uuid: string, enabled?: string, data?: FirewallSourceNatToggleRuleRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<FirewallSourceNatToggleRuleResponse>> {
    return this.client.post(`${this.basePath}/source_nat/toggle_rule/${uuid}/${enabled}`, data, config);
  }

}
