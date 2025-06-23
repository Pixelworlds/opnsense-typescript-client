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

export class FirewallModule extends BaseModule {
  public readonly rules: FirewallRules;
  public readonly aliases: FirewallAliases;
  public readonly aliasUtils: FirewallAliasUtils;

  constructor(httpClient: any) {
    super(httpClient);
    this.rules = new FirewallRules(this.http);
    this.aliases = new FirewallAliases(this.http);
    this.aliasUtils = new FirewallAliasUtils(this.http);
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
