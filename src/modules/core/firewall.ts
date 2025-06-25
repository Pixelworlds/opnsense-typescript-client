import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class FirewallAliasUtils {
  constructor(private http: any) {}

  async add(alias: string, data: { address: string }): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/alias_util/add/${alias}`, data);
  }

  async delete(alias: string, data: { address: string }): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/alias_util/delete/${alias}`, data);
  }

  async list(alias: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/alias_util/list/${alias}`);
  }

  async flush(alias: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/alias_util/flush/${alias}`);
  }

  async getAliases(): Promise<ApiResponse<any>> {
    return this.http.get('/api/firewall/alias_util/aliases');
  }

  async findReferences(): Promise<ApiResponse<any>> {
    return this.http.get('/api/firewall/alias_util/find_references');
  }

  async updateBogons(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/alias_util/update_bogons');
  }
}

export class FirewallRules {
  constructor(private http: any) {}

  async search(
    params: {
      current?: number;
      rowCount?: number;
      sort?: Record<string, any>;
      searchPhrase?: string;
    } = {}
  ): Promise<ApiResponse<any>> {
    const defaultParams = {
      current: 1,
      rowCount: 100,
      sort: {},
      searchPhrase: '',
    };
    return this.http.post('/api/firewall/filter/search_rule', { ...defaultParams, ...params });
  }

  async add(rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/filter/add_rule', rule);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/firewall/filter/get_rule/${uuid}` : '/api/firewall/filter/get_rule';
    return this.http.get(path);
  }

  async update(uuid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/filter/set_rule/${uuid}`, rule);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/filter/del_rule/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/firewall/filter/toggle_rule/${uuid}/${enabled ? '1' : '0'}`
        : `/api/firewall/filter/toggle_rule/${uuid}`;
    return this.http.post(path);
  }

  async moveBefore(selectedUuid: string, targetUuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/filter/move_rule_before/${selectedUuid}/${targetUuid}`);
  }

  async getInterfaceList(): Promise<ApiResponse<any>> {
    return this.http.get('/api/firewall/filter/get_interface_list');
  }

  async apply(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/filter/apply');
  }

  async savepoint(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/filter/savepoint');
  }

  async cancelRollback(rollbackRevision: number): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/filter/cancel_rollback/${rollbackRevision}`);
  }
}

export class FirewallAliases {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    const defaultParams = {
      current: 1,
      rowCount: 100,
      sort: {},
      searchPhrase: '',
    };
    return this.http.post('/api/firewall/alias/search_item', { ...defaultParams, ...params });
  }

  async add(alias: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/alias/add_item', alias);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/firewall/alias/get_item/${uuid}` : '/api/firewall/alias/get';
    return this.http.get(path);
  }

  async update(uuid: string, alias: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/alias/set_item/${uuid}`, alias);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/alias/del_item/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/firewall/alias/toggle_item/${uuid}/${enabled ? '1' : '0'}`
        : `/api/firewall/alias/toggle_item/${uuid}`;
    return this.http.post(path);
  }

  async export(): Promise<ApiResponse<any>> {
    return this.http.get('/api/firewall/alias/export');
  }

  async import(data: any): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/alias/import', data);
  }

  async getTableSize(): Promise<ApiResponse<any>> {
    return this.http.get('/api/firewall/alias/get_table_size');
  }

  async getUuidByName(name: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/firewall/alias/get_alias_uuid/${name}`);
  }

  async listCategories(): Promise<ApiResponse<any>> {
    return this.http.get('/api/firewall/alias/list_categories');
  }

  async listCountries(): Promise<ApiResponse<any>> {
    return this.http.get('/api/firewall/alias/list_countries');
  }

  async listNetworkAliases(): Promise<ApiResponse<any>> {
    return this.http.get('/api/firewall/alias/list_network_aliases');
  }

  async getGeoip(): Promise<ApiResponse<any>> {
    return this.http.get('/api/firewall/alias/get_geoip');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/alias/reconfigure');
  }
}

export class FirewallGroups {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    const defaultParams = {
      current: 1,
      rowCount: 100,
      sort: {},
      searchPhrase: '',
    };
    return this.http.post('/api/firewall/group/search_item', { ...defaultParams, ...params });
  }

  async add(group: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/group/add_item', group);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/firewall/group/get_item/${uuid}` : '/api/firewall/group/get';
    return this.http.get(path);
  }

  async update(uuid: string, group: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/group/set_item/${uuid}`, group);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/group/del_item/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/firewall/group/toggle_item/${uuid}/${enabled ? '1' : '0'}`
        : `/api/firewall/group/toggle_item/${uuid}`;
    return this.http.post(path);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/group/reconfigure');
  }
}

export class FirewallSourceNat {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    const defaultParams = {
      current: 1,
      rowCount: 100,
      sort: {},
      searchPhrase: '',
    };
    return this.http.post('/api/firewall/source_nat/search_rule', { ...defaultParams, ...params });
  }

  async add(rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/source_nat/add_rule', rule);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/firewall/source_nat/get_rule/${uuid}` : '/api/firewall/source_nat/get_rule';
    return this.http.get(path);
  }

  async update(uuid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/source_nat/set_rule/${uuid}`, rule);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/source_nat/del_rule/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/firewall/source_nat/toggle_rule/${uuid}/${enabled ? '1' : '0'}`
        : `/api/firewall/source_nat/toggle_rule/${uuid}`;
    return this.http.post(path);
  }

  async moveBefore(selectedUuid: string, targetUuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/source_nat/move_rule_before/${selectedUuid}/${targetUuid}`);
  }
}

export class FirewallOneToOneNat {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    const defaultParams = {
      current: 1,
      rowCount: 100,
      sort: {},
      searchPhrase: '',
    };
    return this.http.post('/api/firewall/nat_onetoone/search_rule', { ...defaultParams, ...params });
  }

  async add(rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/nat_onetoone/add_rule', rule);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/firewall/nat_onetoone/get_rule/${uuid}` : '/api/firewall/nat_onetoone/get_rule';
    return this.http.get(path);
  }

  async update(uuid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/nat_onetoone/set_rule/${uuid}`, rule);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/nat_onetoone/del_rule/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/firewall/nat_onetoone/toggle_rule/${uuid}/${enabled ? '1' : '0'}`
        : `/api/firewall/nat_onetoone/toggle_rule/${uuid}`;
    return this.http.post(path);
  }

  async moveBefore(selectedUuid: string, targetUuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/nat_onetoone/move_rule_before/${selectedUuid}/${targetUuid}`);
  }
}

export class FirewallDestinationNat {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    const defaultParams = {
      current: 1,
      rowCount: 100,
      sort: {},
      searchPhrase: '',
    };
    return this.http.post('/api/firewall/nat_destination/search_rule', { ...defaultParams, ...params });
  }

  async add(rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/nat_destination/add_rule', rule);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/firewall/nat_destination/get_rule/${uuid}` : '/api/firewall/nat_destination/get_rule';
    return this.http.get(path);
  }

  async update(uuid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/nat_destination/set_rule/${uuid}`, rule);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/nat_destination/del_rule/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/firewall/nat_destination/toggle_rule/${uuid}/${enabled ? '1' : '0'}`
        : `/api/firewall/nat_destination/toggle_rule/${uuid}`;
    return this.http.post(path);
  }

  async moveBefore(selectedUuid: string, targetUuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/nat_destination/move_rule_before/${selectedUuid}/${targetUuid}`);
  }
}

export class FirewallCategories {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    const defaultParams = {
      current: 1,
      rowCount: 100,
      sort: {},
      searchPhrase: '',
    };
    return this.http.post('/api/firewall/category/search_item', { ...defaultParams, ...params });
  }

  async add(category: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/category/add_item', category);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/firewall/category/get_item/${uuid}` : '/api/firewall/category/get';
    return this.http.get(path);
  }

  async update(uuid: string, category: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/category/set_item/${uuid}`, category);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/category/del_item/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/firewall/category/toggle_item/${uuid}/${enabled ? '1' : '0'}`
        : `/api/firewall/category/toggle_item/${uuid}`;
    return this.http.post(path);
  }
}

export class FirewallNpt {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    const defaultParams = {
      current: 1,
      rowCount: 100,
      sort: {},
      searchPhrase: '',
    };
    return this.http.post('/api/firewall/npt/search_rule', { ...defaultParams, ...params });
  }

  async add(rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/npt/add_rule', rule);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/firewall/npt/get_rule/${uuid}` : '/api/firewall/npt/get_rule';
    return this.http.get(path);
  }

  async update(uuid: string, rule: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/npt/set_rule/${uuid}`, rule);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/npt/del_rule/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path =
      enabled !== undefined
        ? `/api/firewall/npt/toggle_rule/${uuid}/${enabled ? '1' : '0'}`
        : `/api/firewall/npt/toggle_rule/${uuid}`;
    return this.http.post(path);
  }

  async moveBefore(selectedUuid: string, targetUuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/npt/move_rule_before/${selectedUuid}/${targetUuid}`);
  }
}

export class FirewallModule extends BaseModule {
  public readonly rules: FirewallRules;
  public readonly aliases: FirewallAliases;
  public readonly aliasUtils: FirewallAliasUtils;
  public readonly groups: FirewallGroups;
  public readonly sourceNat: FirewallSourceNat;
  public readonly oneToOneNat: FirewallOneToOneNat;
  public readonly destinationNat: FirewallDestinationNat;
  public readonly categories: FirewallCategories;
  public readonly npt: FirewallNpt;

  constructor(httpClient: any) {
    super(httpClient);
    this.rules = new FirewallRules(this.http);
    this.aliases = new FirewallAliases(this.http);
    this.aliasUtils = new FirewallAliasUtils(this.http);
    this.groups = new FirewallGroups(this.http);
    this.sourceNat = new FirewallSourceNat(this.http);
    this.oneToOneNat = new FirewallOneToOneNat(this.http);
    this.destinationNat = new FirewallDestinationNat(this.http);
    this.categories = new FirewallCategories(this.http);
    this.npt = new FirewallNpt(this.http);
  }

  async apply(rollbackRevision?: number): Promise<ApiResponse<ApiResult>> {
    const path = rollbackRevision
      ? `/api/firewall/filter_base/apply/${rollbackRevision}`
      : '/api/firewall/filter_base/apply';
    return this.http.post(path);
  }

  async savepoint(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/filter_base/savepoint');
  }

  async revert(revision: number): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/filter_base/revert/${revision}`);
  }

  async cancelRollback(rollbackRevision: number): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/firewall/filter_base/cancel_rollback/${rollbackRevision}`);
  }

  async getConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/firewall/filter_base/get');
  }

  async setConfig(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/firewall/filter_base/set', config);
  }

  async listCategories(): Promise<ApiResponse<any>> {
    return this.http.get('/api/firewall/filter_base/list_categories');
  }

  async listNetworkSelectOptions(): Promise<ApiResponse<any>> {
    return this.http.get('/api/firewall/filter_base/list_network_select_options');
  }

  async getRuleStats(): Promise<ApiResponse<any>> {
    return this.http.get('/api/firewall/filter_util/rule_stats');
  }
}
