import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class FirewallAlias extends BaseModule {
  /**
   * Execute add item for firewall alias
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/alias/add_item`, data);
  }

  /**
   * Execute del item for firewall alias
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/alias/del_item/${uuid}`, data);
  }

  /**
   * Get get for firewall alias
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/alias/get`);
  }

  /**
   * Get get alias u u i d for firewall alias
   */
  async getAliasUUID(name: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/alias/get_alias_u_u_i_d/${name}`);
  }

  /**
   * Get get geo i p for firewall alias
   */
  async getGeoIP(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/alias/get_geo_i_p`);
  }

  /**
   * Get get item for firewall alias
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/alias/get_item/${uuid}`);
  }

  /**
   * Get get table size for firewall alias
   */
  async getTableSize(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/alias/get_table_size`);
  }

  /**
   * Execute import for firewall alias
   */
  async import(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/alias/import`, data);
  }

  /**
   * Get list categories for firewall alias
   */
  async listCategories(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/alias/list_categories`);
  }

  /**
   * Get list countries for firewall alias
   */
  async listCountries(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/alias/list_countries`);
  }

  /**
   * Get list network aliases for firewall alias
   */
  async listNetworkAliases(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/alias/list_network_aliases`);
  }

  /**
   * Get list user groups for firewall alias
   */
  async listUserGroups(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/alias/list_user_groups`);
  }

  /**
   * Execute reconfigure for firewall alias
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/firewall/firewall/alias/reconfigure`, data);
  }

  /**
   * Execute set for firewall alias
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/alias/set`, data);
  }

  /**
   * Execute set item for firewall alias
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/alias/set_item/${uuid}`, data);
  }

  /**
   * Execute toggle item for firewall alias
   */
  async toggleItem(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/alias/toggle_item/${uuid}/${enabled}`, data);
  }
}

export class FirewallAliasUtil extends BaseModule {
  /**
   * Execute add for firewall alias_util
   */
  async add(alias: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/alias_util/add/${alias}`, data);
  }

  /**
   * Get aliases for firewall alias_util
   */
  async aliases(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/alias_util/aliases`);
  }

  /**
   * Execute delete for firewall alias_util
   */
  async delete(alias: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/alias_util/delete/${alias}`, data);
  }

  /**
   * Execute find references for firewall alias_util
   */
  async findReferences(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/alias_util/find_references`, data);
  }

  /**
   * Execute flush for firewall alias_util
   */
  async flush(alias: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/alias_util/flush/${alias}`, data);
  }

  /**
   * Get list for firewall alias_util
   */
  async list(alias: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/alias_util/list/${alias}`);
  }

  /**
   * Get update bogons for firewall alias_util
   */
  async updateBogons(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/alias_util/update_bogons`);
  }
}

export class FirewallCategory extends BaseModule {
  /**
   * Execute add item for firewall category
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/category/add_item`, data);
  }

  /**
   * Execute del item for firewall category
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/category/del_item/${uuid}`, data);
  }

  /**
   * Get get for firewall category
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/category/get`);
  }

  /**
   * Get get item for firewall category
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/category/get_item/${uuid}`);
  }

  /**
   * Execute set for firewall category
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/category/set`, data);
  }

  /**
   * Execute set item for firewall category
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/category/set_item/${uuid}`, data);
  }
}

export class FirewallFilterBase extends BaseModule {
  /**
   * Execute apply for firewall filter_base
   */
  async apply(rollback_revision: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/filter_base/apply/${rollback_revision}`, data);
  }

  /**
   * Execute cancel rollback for firewall filter_base
   */
  async cancelRollback(rollback_revision: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/filter_base/cancel_rollback/${rollback_revision}`, data);
  }

  /**
   * Get get for firewall filter_base
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/filter_base/get`);
  }

  /**
   * Get list categories for firewall filter_base
   */
  async listCategories(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/filter_base/list_categories`);
  }

  /**
   * Get list network select options for firewall filter_base
   */
  async listNetworkSelectOptions(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/filter_base/list_network_select_options`);
  }

  /**
   * Execute revert for firewall filter_base
   */
  async revert(revision: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/filter_base/revert/${revision}`, data);
  }

  /**
   * Execute savepoint for firewall filter_base
   */
  async savepoint(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/filter_base/savepoint`, data);
  }

  /**
   * Execute set for firewall filter_base
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/filter_base/set`, data);
  }
}

export class FirewallFilter extends BaseModule {
  /**
   * Execute add rule for firewall filter
   */
  async addRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/filter/add_rule`, data);
  }

  /**
   * Execute del rule for firewall filter
   */
  async delRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/filter/del_rule/${uuid}`, data);
  }

  /**
   * Get get interface list for firewall filter
   */
  async getInterfaceList(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/filter/get_interface_list`);
  }

  /**
   * Get get rule for firewall filter
   */
  async getRule(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/filter/get_rule/${uuid}`);
  }

  /**
   * Execute move rule before for firewall filter
   */
  async moveRuleBefore(selected_uuid: string, target_uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/filter/move_rule_before/${selected_uuid}/${target_uuid}`, data);
  }

  /**
   * Execute set rule for firewall filter
   */
  async setRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/filter/set_rule/${uuid}`, data);
  }

  /**
   * Execute toggle rule for firewall filter
   */
  async toggleRule(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/filter/toggle_rule/${uuid}/${enabled}`, data);
  }
}

export class FirewallFilterUtil extends BaseModule {
  /**
   * Get rule stats for firewall filter_util
   */
  async ruleStats(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/filter_util/rule_stats`);
  }
}

export class FirewallGroup extends BaseModule {
  /**
   * Execute add item for firewall group
   */
  async addItem(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/group/add_item`, data);
  }

  /**
   * Execute del item for firewall group
   */
  async delItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/group/del_item/${uuid}`, data);
  }

  /**
   * Get get for firewall group
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/group/get`);
  }

  /**
   * Get get item for firewall group
   */
  async getItem(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/group/get_item/${uuid}`);
  }

  /**
   * Execute reconfigure for firewall group
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/firewall/firewall/group/reconfigure`, data);
  }

  /**
   * Execute set for firewall group
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/group/set`, data);
  }

  /**
   * Execute set item for firewall group
   */
  async setItem(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/group/set_item/${uuid}`, data);
  }
}

export class FirewallNpt extends BaseModule {
  /**
   * Execute add rule for firewall npt
   */
  async addRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/npt/add_rule`, data);
  }

  /**
   * Execute del rule for firewall npt
   */
  async delRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/npt/del_rule/${uuid}`, data);
  }

  /**
   * Get get rule for firewall npt
   */
  async getRule(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/npt/get_rule/${uuid}`);
  }

  /**
   * Execute set rule for firewall npt
   */
  async setRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/npt/set_rule/${uuid}`, data);
  }

  /**
   * Execute toggle rule for firewall npt
   */
  async toggleRule(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/npt/toggle_rule/${uuid}/${enabled}`, data);
  }
}

export class FirewallOneToOne extends BaseModule {
  /**
   * Execute add rule for firewall one_to_one
   */
  async addRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/one_to_one/add_rule`, data);
  }

  /**
   * Execute del rule for firewall one_to_one
   */
  async delRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/one_to_one/del_rule/${uuid}`, data);
  }

  /**
   * Get get rule for firewall one_to_one
   */
  async getRule(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/one_to_one/get_rule/${uuid}`);
  }

  /**
   * Execute set rule for firewall one_to_one
   */
  async setRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/one_to_one/set_rule/${uuid}`, data);
  }

  /**
   * Execute toggle rule for firewall one_to_one
   */
  async toggleRule(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/one_to_one/toggle_rule/${uuid}/${enabled}`, data);
  }
}

export class FirewallSourceNat extends BaseModule {
  /**
   * Execute add rule for firewall source_nat
   */
  async addRule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/source_nat/add_rule`, data);
  }

  /**
   * Execute del rule for firewall source_nat
   */
  async delRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/source_nat/del_rule/${uuid}`, data);
  }

  /**
   * Get get rule for firewall source_nat
   */
  async getRule(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/firewall/source_nat/get_rule/${uuid}`);
  }

  /**
   * Execute set rule for firewall source_nat
   */
  async setRule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/source_nat/set_rule/${uuid}`, data);
  }

  /**
   * Execute toggle rule for firewall source_nat
   */
  async toggleRule(uuid: string, enabled?: boolean, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/firewall/source_nat/toggle_rule/${uuid}/${enabled}`, data);
  }
}

// Main module class
export class FirewallModule extends BaseModule {
  public readonly alias: FirewallAlias;
  public readonly aliasUtil: FirewallAliasUtil;
  public readonly category: FirewallCategory;
  public readonly filterBase: FirewallFilterBase;
  public readonly filter: FirewallFilter;
  public readonly filterUtil: FirewallFilterUtil;
  public readonly group: FirewallGroup;
  public readonly npt: FirewallNpt;
  public readonly oneToOne: FirewallOneToOne;
  public readonly sourceNat: FirewallSourceNat;

  constructor(http: any) {
    super(http);
    this.alias = new FirewallAlias(http);
    this.aliasUtil = new FirewallAliasUtil(http);
    this.category = new FirewallCategory(http);
    this.filterBase = new FirewallFilterBase(http);
    this.filter = new FirewallFilter(http);
    this.filterUtil = new FirewallFilterUtil(http);
    this.group = new FirewallGroup(http);
    this.npt = new FirewallNpt(http);
    this.oneToOne = new FirewallOneToOne(http);
    this.sourceNat = new FirewallSourceNat(http);
  }

}