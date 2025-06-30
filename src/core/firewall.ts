import type { HttpClient, RequestConfig, ApiResponse } from '../types';

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
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path
  }

  // Alias methods
  async aliasAddItem(data?: FirewallAliasAddItemRequest, config?: RequestConfig): Promise<ApiResponse<FirewallAliasAddItemResponse>> {
    return this.http.post(`/api/firewall/alias/add_item`, data, config);
  }

  async aliasDelItem(uuid: string, data?: FirewallAliasDelItemRequest, config?: RequestConfig): Promise<ApiResponse<FirewallAliasDelItemResponse>> {
    return this.http.post(`/api/firewall/alias/del_item/${uuid}`, data, config);
  }

  async aliasGet(config?: RequestConfig): Promise<ApiResponse<FirewallAliasGetResponse>> {
    return this.http.get(`/api/firewall/alias/get`, config);
  }

  async aliasGetAliasUUID(name: string, config?: RequestConfig): Promise<ApiResponse<FirewallAliasGetAliasUUIDResponse>> {
    return this.http.get(`/api/firewall/alias/get_alias_u_u_i_d/${name}`, config);
  }

  async aliasGetGeoIP(config?: RequestConfig): Promise<ApiResponse<FirewallAliasGetGeoIPResponse>> {
    return this.http.get(`/api/firewall/alias/get_geo_i_p`, config);
  }

  async aliasGetItem(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FirewallAliasGetItemResponse>> {
    return this.http.get(`/api/firewall/alias/get_item/${uuid}`, config);
  }

  async aliasGetTableSize(config?: RequestConfig): Promise<ApiResponse<FirewallAliasGetTableSizeResponse>> {
    return this.http.get(`/api/firewall/alias/get_table_size`, config);
  }

  async aliasImport(data?: FirewallAliasImportRequest, config?: RequestConfig): Promise<ApiResponse<FirewallAliasImportResponse>> {
    return this.http.post(`/api/firewall/alias/import`, data, config);
  }

  async aliasListCategories(config?: RequestConfig): Promise<ApiResponse<FirewallAliasListCategoriesResponse>> {
    return this.http.get(`/api/firewall/alias/list_categories`, config);
  }

  async aliasListCountries(config?: RequestConfig): Promise<ApiResponse<FirewallAliasListCountriesResponse>> {
    return this.http.get(`/api/firewall/alias/list_countries`, config);
  }

  async aliasListNetworkAliases(config?: RequestConfig): Promise<ApiResponse<FirewallAliasListNetworkAliasesResponse>> {
    return this.http.get(`/api/firewall/alias/list_network_aliases`, config);
  }

  async aliasListUserGroups(config?: RequestConfig): Promise<ApiResponse<FirewallAliasListUserGroupsResponse>> {
    return this.http.get(`/api/firewall/alias/list_user_groups`, config);
  }

  async aliasReconfigure(data?: FirewallAliasReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<FirewallAliasReconfigureResponse>> {
    return this.http.post(`/api/firewall/alias/reconfigure`, data, config);
  }

  async aliasSet(data?: FirewallAliasSetRequest, config?: RequestConfig): Promise<ApiResponse<FirewallAliasSetResponse>> {
    return this.http.post(`/api/firewall/alias/set`, data, config);
  }

  async aliasSetItem(uuid: string, data?: FirewallAliasSetItemRequest, config?: RequestConfig): Promise<ApiResponse<FirewallAliasSetItemResponse>> {
    return this.http.post(`/api/firewall/alias/set_item/${uuid}`, data, config);
  }

  async aliasToggleItem(uuid: string, enabled?: string, data?: FirewallAliasToggleItemRequest, config?: RequestConfig): Promise<ApiResponse<FirewallAliasToggleItemResponse>> {
    return this.http.post(`/api/firewall/alias/toggle_item/${uuid}/${enabled}`, data, config);
  }


  // AliasUtil methods
  async aliasUtilAdd(alias: string, data?: FirewallAliasUtilAddRequest, config?: RequestConfig): Promise<ApiResponse<FirewallAliasUtilAddResponse>> {
    return this.http.post(`/api/firewall/alias_util/add/${alias}`, data, config);
  }

  async aliasUtilAliases(config?: RequestConfig): Promise<ApiResponse<FirewallAliasUtilAliasesResponse>> {
    return this.http.get(`/api/firewall/alias_util/aliases`, config);
  }

  async aliasUtilDelete(alias: string, data?: FirewallAliasUtilDeleteRequest, config?: RequestConfig): Promise<ApiResponse<FirewallAliasUtilDeleteResponse>> {
    return this.http.post(`/api/firewall/alias_util/delete/${alias}`, data, config);
  }

  async aliasUtilFindReferences(data?: FirewallAliasUtilFindReferencesRequest, config?: RequestConfig): Promise<ApiResponse<FirewallAliasUtilFindReferencesResponse>> {
    return this.http.post(`/api/firewall/alias_util/find_references`, data, config);
  }

  async aliasUtilFlush(alias: string, data?: FirewallAliasUtilFlushRequest, config?: RequestConfig): Promise<ApiResponse<FirewallAliasUtilFlushResponse>> {
    return this.http.post(`/api/firewall/alias_util/flush/${alias}`, data, config);
  }

  async aliasUtilList(alias: string, config?: RequestConfig): Promise<ApiResponse<FirewallAliasUtilListResponse>> {
    return this.http.get(`/api/firewall/alias_util/list/${alias}`, config);
  }

  async aliasUtilUpdateBogons(config?: RequestConfig): Promise<ApiResponse<FirewallAliasUtilUpdateBogonsResponse>> {
    return this.http.get(`/api/firewall/alias_util/update_bogons`, config);
  }


  // Category methods
  async categoryAddItem(data?: FirewallCategoryAddItemRequest, config?: RequestConfig): Promise<ApiResponse<FirewallCategoryAddItemResponse>> {
    return this.http.post(`/api/firewall/category/add_item`, data, config);
  }

  async categoryDelItem(uuid: string, data?: FirewallCategoryDelItemRequest, config?: RequestConfig): Promise<ApiResponse<FirewallCategoryDelItemResponse>> {
    return this.http.post(`/api/firewall/category/del_item/${uuid}`, data, config);
  }

  async categoryGet(config?: RequestConfig): Promise<ApiResponse<FirewallCategoryGetResponse>> {
    return this.http.get(`/api/firewall/category/get`, config);
  }

  async categoryGetItem(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FirewallCategoryGetItemResponse>> {
    return this.http.get(`/api/firewall/category/get_item/${uuid}`, config);
  }

  async categorySet(data?: FirewallCategorySetRequest, config?: RequestConfig): Promise<ApiResponse<FirewallCategorySetResponse>> {
    return this.http.post(`/api/firewall/category/set`, data, config);
  }

  async categorySetItem(uuid: string, data?: FirewallCategorySetItemRequest, config?: RequestConfig): Promise<ApiResponse<FirewallCategorySetItemResponse>> {
    return this.http.post(`/api/firewall/category/set_item/${uuid}`, data, config);
  }


  // FilterBase methods
  async filterBaseApply(rollbackRevision?: string, data?: FirewallFilterBaseApplyRequest, config?: RequestConfig): Promise<ApiResponse<FirewallFilterBaseApplyResponse>> {
    return this.http.post(`/api/firewall/filter_base/apply/${rollbackRevision}`, data, config);
  }

  async filterBaseCancelRollback(rollbackRevision: string, data?: FirewallFilterBaseCancelRollbackRequest, config?: RequestConfig): Promise<ApiResponse<FirewallFilterBaseCancelRollbackResponse>> {
    return this.http.post(`/api/firewall/filter_base/cancel_rollback/${rollbackRevision}`, data, config);
  }

  async filterBaseGet(config?: RequestConfig): Promise<ApiResponse<FirewallFilterBaseGetResponse>> {
    return this.http.get(`/api/firewall/filter_base/get`, config);
  }

  async filterBaseListCategories(config?: RequestConfig): Promise<ApiResponse<FirewallFilterBaseListCategoriesResponse>> {
    return this.http.get(`/api/firewall/filter_base/list_categories`, config);
  }

  async filterBaseListNetworkSelectOptions(config?: RequestConfig): Promise<ApiResponse<FirewallFilterBaseListNetworkSelectOptionsResponse>> {
    return this.http.get(`/api/firewall/filter_base/list_network_select_options`, config);
  }

  async filterBaseRevert(revision: string, data?: FirewallFilterBaseRevertRequest, config?: RequestConfig): Promise<ApiResponse<FirewallFilterBaseRevertResponse>> {
    return this.http.post(`/api/firewall/filter_base/revert/${revision}`, data, config);
  }

  async filterBaseSavepoint(data?: FirewallFilterBaseSavepointRequest, config?: RequestConfig): Promise<ApiResponse<FirewallFilterBaseSavepointResponse>> {
    return this.http.post(`/api/firewall/filter_base/savepoint`, data, config);
  }

  async filterBaseSet(data?: FirewallFilterBaseSetRequest, config?: RequestConfig): Promise<ApiResponse<FirewallFilterBaseSetResponse>> {
    return this.http.post(`/api/firewall/filter_base/set`, data, config);
  }


  // Filter methods
  async filterAddRule(data?: FirewallFilterAddRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallFilterAddRuleResponse>> {
    return this.http.post(`/api/firewall/filter/add_rule`, data, config);
  }

  async filterDelRule(uuid: string, data?: FirewallFilterDelRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallFilterDelRuleResponse>> {
    return this.http.post(`/api/firewall/filter/del_rule/${uuid}`, data, config);
  }

  async filterGetInterfaceList(config?: RequestConfig): Promise<ApiResponse<FirewallFilterGetInterfaceListResponse>> {
    return this.http.get(`/api/firewall/filter/get_interface_list`, config);
  }

  async filterGetRule(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FirewallFilterGetRuleResponse>> {
    return this.http.get(`/api/firewall/filter/get_rule/${uuid}`, config);
  }

  async filterMoveRuleBefore(selectedUuid: string, targetUuid: string, data?: FirewallFilterMoveRuleBeforeRequest, config?: RequestConfig): Promise<ApiResponse<FirewallFilterMoveRuleBeforeResponse>> {
    return this.http.post(`/api/firewall/filter/move_rule_before/${selectedUuid}/${targetUuid}`, data, config);
  }

  async filterSetRule(uuid: string, data?: FirewallFilterSetRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallFilterSetRuleResponse>> {
    return this.http.post(`/api/firewall/filter/set_rule/${uuid}`, data, config);
  }

  async filterToggleRule(uuid: string, enabled?: string, data?: FirewallFilterToggleRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallFilterToggleRuleResponse>> {
    return this.http.post(`/api/firewall/filter/toggle_rule/${uuid}/${enabled}`, data, config);
  }


  // FilterUtil methods
  async filterUtilRuleStats(config?: RequestConfig): Promise<ApiResponse<FirewallFilterUtilRuleStatsResponse>> {
    return this.http.get(`/api/firewall/filter_util/rule_stats`, config);
  }


  // Group methods
  async groupAddItem(data?: FirewallGroupAddItemRequest, config?: RequestConfig): Promise<ApiResponse<FirewallGroupAddItemResponse>> {
    return this.http.post(`/api/firewall/group/add_item`, data, config);
  }

  async groupDelItem(uuid: string, data?: FirewallGroupDelItemRequest, config?: RequestConfig): Promise<ApiResponse<FirewallGroupDelItemResponse>> {
    return this.http.post(`/api/firewall/group/del_item/${uuid}`, data, config);
  }

  async groupGet(config?: RequestConfig): Promise<ApiResponse<FirewallGroupGetResponse>> {
    return this.http.get(`/api/firewall/group/get`, config);
  }

  async groupGetItem(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FirewallGroupGetItemResponse>> {
    return this.http.get(`/api/firewall/group/get_item/${uuid}`, config);
  }

  async groupReconfigure(data?: FirewallGroupReconfigureRequest, config?: RequestConfig): Promise<ApiResponse<FirewallGroupReconfigureResponse>> {
    return this.http.post(`/api/firewall/group/reconfigure`, data, config);
  }

  async groupSet(data?: FirewallGroupSetRequest, config?: RequestConfig): Promise<ApiResponse<FirewallGroupSetResponse>> {
    return this.http.post(`/api/firewall/group/set`, data, config);
  }

  async groupSetItem(uuid: string, data?: FirewallGroupSetItemRequest, config?: RequestConfig): Promise<ApiResponse<FirewallGroupSetItemResponse>> {
    return this.http.post(`/api/firewall/group/set_item/${uuid}`, data, config);
  }


  // Npt methods
  async nptAddRule(data?: FirewallNptAddRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallNptAddRuleResponse>> {
    return this.http.post(`/api/firewall/npt/add_rule`, data, config);
  }

  async nptDelRule(uuid: string, data?: FirewallNptDelRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallNptDelRuleResponse>> {
    return this.http.post(`/api/firewall/npt/del_rule/${uuid}`, data, config);
  }

  async nptGetRule(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FirewallNptGetRuleResponse>> {
    return this.http.get(`/api/firewall/npt/get_rule/${uuid}`, config);
  }

  async nptSetRule(uuid: string, data?: FirewallNptSetRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallNptSetRuleResponse>> {
    return this.http.post(`/api/firewall/npt/set_rule/${uuid}`, data, config);
  }

  async nptToggleRule(uuid: string, enabled?: string, data?: FirewallNptToggleRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallNptToggleRuleResponse>> {
    return this.http.post(`/api/firewall/npt/toggle_rule/${uuid}/${enabled}`, data, config);
  }


  // OneToOne methods
  async oneToOneAddRule(data?: FirewallOneToOneAddRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallOneToOneAddRuleResponse>> {
    return this.http.post(`/api/firewall/one_to_one/add_rule`, data, config);
  }

  async oneToOneDelRule(uuid: string, data?: FirewallOneToOneDelRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallOneToOneDelRuleResponse>> {
    return this.http.post(`/api/firewall/one_to_one/del_rule/${uuid}`, data, config);
  }

  async oneToOneGetRule(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FirewallOneToOneGetRuleResponse>> {
    return this.http.get(`/api/firewall/one_to_one/get_rule/${uuid}`, config);
  }

  async oneToOneSetRule(uuid: string, data?: FirewallOneToOneSetRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallOneToOneSetRuleResponse>> {
    return this.http.post(`/api/firewall/one_to_one/set_rule/${uuid}`, data, config);
  }

  async oneToOneToggleRule(uuid: string, enabled?: string, data?: FirewallOneToOneToggleRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallOneToOneToggleRuleResponse>> {
    return this.http.post(`/api/firewall/one_to_one/toggle_rule/${uuid}/${enabled}`, data, config);
  }


  // SourceNat methods
  async sourceNatAddRule(data?: FirewallSourceNatAddRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallSourceNatAddRuleResponse>> {
    return this.http.post(`/api/firewall/source_nat/add_rule`, data, config);
  }

  async sourceNatDelRule(uuid: string, data?: FirewallSourceNatDelRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallSourceNatDelRuleResponse>> {
    return this.http.post(`/api/firewall/source_nat/del_rule/${uuid}`, data, config);
  }

  async sourceNatGetRule(uuid?: string, config?: RequestConfig): Promise<ApiResponse<FirewallSourceNatGetRuleResponse>> {
    return this.http.get(`/api/firewall/source_nat/get_rule/${uuid}`, config);
  }

  async sourceNatSetRule(uuid: string, data?: FirewallSourceNatSetRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallSourceNatSetRuleResponse>> {
    return this.http.post(`/api/firewall/source_nat/set_rule/${uuid}`, data, config);
  }

  async sourceNatToggleRule(uuid: string, enabled?: string, data?: FirewallSourceNatToggleRuleRequest, config?: RequestConfig): Promise<ApiResponse<FirewallSourceNatToggleRuleResponse>> {
    return this.http.post(`/api/firewall/source_nat/toggle_rule/${uuid}/${enabled}`, data, config);
  }

}
