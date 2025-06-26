import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class QuaggaBfd extends BaseModule {
  /**
   * Execute add neighbor for quagga bfd
   */
  async addNeighbor(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bfd/add_neighbor`, data);
  }

  /**
   * Execute del neighbor for quagga bfd
   */
  async delNeighbor(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bfd/del_neighbor/${uuid}`, data);
  }

  /**
   * Get get for quagga bfd
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/bfd/get`);
  }

  /**
   * Get get neighbor for quagga bfd
   */
  async getNeighbor(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/bfd/get_neighbor/${uuid}`);
  }

  /**
   * Execute set for quagga bfd
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bfd/set`, data);
  }

  /**
   * Execute set neighbor for quagga bfd
   */
  async setNeighbor(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bfd/set_neighbor/${uuid}`, data);
  }

  /**
   * Execute toggle neighbor for quagga bfd
   */
  async toggleNeighbor(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bfd/toggle_neighbor/${uuid}`, data);
  }
}

export class QuaggaBgp extends BaseModule {
  /**
   * Execute add aspath for quagga bgp
   */
  async addAspath(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/add_aspath`, data);
  }

  /**
   * Execute add communitylist for quagga bgp
   */
  async addCommunitylist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/add_communitylist`, data);
  }

  /**
   * Execute add neighbor for quagga bgp
   */
  async addNeighbor(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/add_neighbor`, data);
  }

  /**
   * Execute add peergroup for quagga bgp
   */
  async addPeergroup(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/add_peergroup`, data);
  }

  /**
   * Execute add prefixlist for quagga bgp
   */
  async addPrefixlist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/add_prefixlist`, data);
  }

  /**
   * Execute add redistribution for quagga bgp
   */
  async addRedistribution(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/add_redistribution`, data);
  }

  /**
   * Execute add routemap for quagga bgp
   */
  async addRoutemap(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/add_routemap`, data);
  }

  /**
   * Execute del aspath for quagga bgp
   */
  async delAspath(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/del_aspath/${uuid}`, data);
  }

  /**
   * Execute del communitylist for quagga bgp
   */
  async delCommunitylist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/del_communitylist/${uuid}`, data);
  }

  /**
   * Execute del neighbor for quagga bgp
   */
  async delNeighbor(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/del_neighbor/${uuid}`, data);
  }

  /**
   * Execute del peergroup for quagga bgp
   */
  async delPeergroup(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/del_peergroup/${uuid}`, data);
  }

  /**
   * Execute del prefixlist for quagga bgp
   */
  async delPrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/del_prefixlist/${uuid}`, data);
  }

  /**
   * Execute del redistribution for quagga bgp
   */
  async delRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/del_redistribution/${uuid}`, data);
  }

  /**
   * Execute del routemap for quagga bgp
   */
  async delRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/del_routemap/${uuid}`, data);
  }

  /**
   * Get get for quagga bgp
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/bgp/get`);
  }

  /**
   * Get get aspath for quagga bgp
   */
  async getAspath(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/bgp/get_aspath/${uuid}`);
  }

  /**
   * Get get communitylist for quagga bgp
   */
  async getCommunitylist(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/bgp/get_communitylist/${uuid}`);
  }

  /**
   * Get get neighbor for quagga bgp
   */
  async getNeighbor(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/bgp/get_neighbor/${uuid}`);
  }

  /**
   * Get get peergroup for quagga bgp
   */
  async getPeergroup(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/bgp/get_peergroup/${uuid}`);
  }

  /**
   * Get get prefixlist for quagga bgp
   */
  async getPrefixlist(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/bgp/get_prefixlist/${uuid}`);
  }

  /**
   * Get get redistribution for quagga bgp
   */
  async getRedistribution(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/bgp/get_redistribution/${uuid}`);
  }

  /**
   * Get get routemap for quagga bgp
   */
  async getRoutemap(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/bgp/get_routemap/${uuid}`);
  }

  /**
   * Execute set for quagga bgp
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/set`, data);
  }

  /**
   * Execute set aspath for quagga bgp
   */
  async setAspath(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/set_aspath/${uuid}`, data);
  }

  /**
   * Execute set communitylist for quagga bgp
   */
  async setCommunitylist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/set_communitylist/${uuid}`, data);
  }

  /**
   * Execute set neighbor for quagga bgp
   */
  async setNeighbor(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/set_neighbor/${uuid}`, data);
  }

  /**
   * Execute set peergroup for quagga bgp
   */
  async setPeergroup(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/set_peergroup/${uuid}`, data);
  }

  /**
   * Execute set prefixlist for quagga bgp
   */
  async setPrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/set_prefixlist/${uuid}`, data);
  }

  /**
   * Execute set redistribution for quagga bgp
   */
  async setRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/set_redistribution/${uuid}`, data);
  }

  /**
   * Execute set routemap for quagga bgp
   */
  async setRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/set_routemap/${uuid}`, data);
  }

  /**
   * Execute toggle aspath for quagga bgp
   */
  async toggleAspath(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/toggle_aspath/${uuid}`, data);
  }

  /**
   * Execute toggle communitylist for quagga bgp
   */
  async toggleCommunitylist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/toggle_communitylist/${uuid}`, data);
  }

  /**
   * Execute toggle neighbor for quagga bgp
   */
  async toggleNeighbor(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/toggle_neighbor/${uuid}`, data);
  }

  /**
   * Execute toggle peergroup for quagga bgp
   */
  async togglePeergroup(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/toggle_peergroup/${uuid}`, data);
  }

  /**
   * Execute toggle prefixlist for quagga bgp
   */
  async togglePrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/toggle_prefixlist/${uuid}`, data);
  }

  /**
   * Execute toggle redistribution for quagga bgp
   */
  async toggleRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/toggle_redistribution/${uuid}`, data);
  }

  /**
   * Execute toggle routemap for quagga bgp
   */
  async toggleRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/bgp/toggle_routemap/${uuid}`, data);
  }
}

export class QuaggaDiagnostics extends BaseModule {
  /**
   * Get bfdcounters for quagga diagnostics
   */
  async bfdcounters(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/bfdcounters`);
  }

  /**
   * Get bfdneighbors for quagga diagnostics
   */
  async bfdneighbors(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/bfdneighbors`);
  }

  /**
   * Get bfdsummary for quagga diagnostics
   */
  async bfdsummary(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/bfdsummary`);
  }

  /**
   * Get bgpneighbors for quagga diagnostics
   */
  async bgpneighbors(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/bgpneighbors`);
  }

  /**
   * Get bgpsummary for quagga diagnostics
   */
  async bgpsummary(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/bgpsummary`);
  }

  /**
   * Get generalrunningconfig for quagga diagnostics
   */
  async generalrunningconfig(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/generalrunningconfig`);
  }

  /**
   * Get ospfdatabase for quagga diagnostics
   */
  async ospfdatabase(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/ospfdatabase`);
  }

  /**
   * Get ospfinterface for quagga diagnostics
   */
  async ospfinterface(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/ospfinterface`);
  }

  /**
   * Get ospfoverview for quagga diagnostics
   */
  async ospfoverview(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/ospfoverview`);
  }

  /**
   * Get ospfv3interface for quagga diagnostics
   */
  async ospfv3interface(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/ospfv3interface`);
  }

  /**
   * Get ospfv3overview for quagga diagnostics
   */
  async ospfv3overview(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/ospfv3overview`);
  }

  /**
   * Get search bgproute4 for quagga diagnostics
   */
  async searchBgproute4(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/search_bgproute4`);
  }

  /**
   * Get search bgproute6 for quagga diagnostics
   */
  async searchBgproute6(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/search_bgproute6`);
  }

  /**
   * Get search generalroute4 for quagga diagnostics
   */
  async searchGeneralroute4(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/search_generalroute4`);
  }

  /**
   * Get search generalroute6 for quagga diagnostics
   */
  async searchGeneralroute6(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/search_generalroute6`);
  }

  /**
   * Get search ospfneighbor for quagga diagnostics
   */
  async searchOspfneighbor(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/search_ospfneighbor`);
  }

  /**
   * Get search ospfroute for quagga diagnostics
   */
  async searchOspfroute(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/search_ospfroute`);
  }

  /**
   * Get search ospfv3database for quagga diagnostics
   */
  async searchOspfv3database(): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/search_ospfv3database`);
  }

  /**
   * Get search ospfv3route for quagga diagnostics
   */
  async searchOspfv3route(format: string): Promise<ApiResponse<SearchResult>> {
    return this.http.get(`/api/quagga/quagga/diagnostics/search_ospfv3route/${format}`);
  }
}

export class QuaggaGeneral extends BaseModule {
  /**
   * Get get for quagga general
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/general/get`);
  }

  /**
   * Execute set for quagga general
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/general/set`, data);
  }
}

export class QuaggaOspf6settings extends BaseModule {
  /**
   * Execute add interface for quagga ospf6settings
   */
  async addInterface(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/add_interface`, data);
  }

  /**
   * Execute add network for quagga ospf6settings
   */
  async addNetwork(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/add_network`, data);
  }

  /**
   * Execute add prefixlist for quagga ospf6settings
   */
  async addPrefixlist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/add_prefixlist`, data);
  }

  /**
   * Execute add redistribution for quagga ospf6settings
   */
  async addRedistribution(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/add_redistribution`, data);
  }

  /**
   * Execute add routemap for quagga ospf6settings
   */
  async addRoutemap(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/add_routemap`, data);
  }

  /**
   * Execute del interface for quagga ospf6settings
   */
  async delInterface(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/del_interface/${uuid}`, data);
  }

  /**
   * Execute del network for quagga ospf6settings
   */
  async delNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/del_network/${uuid}`, data);
  }

  /**
   * Execute del prefixlist for quagga ospf6settings
   */
  async delPrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/del_prefixlist/${uuid}`, data);
  }

  /**
   * Execute del redistribution for quagga ospf6settings
   */
  async delRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/del_redistribution/${uuid}`, data);
  }

  /**
   * Execute del routemap for quagga ospf6settings
   */
  async delRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/del_routemap/${uuid}`, data);
  }

  /**
   * Get get for quagga ospf6settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/ospf6settings/get`);
  }

  /**
   * Get get interface for quagga ospf6settings
   */
  async getInterface(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/ospf6settings/get_interface/${uuid}`);
  }

  /**
   * Get get network for quagga ospf6settings
   */
  async getNetwork(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/ospf6settings/get_network/${uuid}`);
  }

  /**
   * Get get prefixlist for quagga ospf6settings
   */
  async getPrefixlist(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/ospf6settings/get_prefixlist/${uuid}`);
  }

  /**
   * Get get redistribution for quagga ospf6settings
   */
  async getRedistribution(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/ospf6settings/get_redistribution/${uuid}`);
  }

  /**
   * Get get routemap for quagga ospf6settings
   */
  async getRoutemap(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/ospf6settings/get_routemap/${uuid}`);
  }

  /**
   * Execute set for quagga ospf6settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/set`, data);
  }

  /**
   * Execute set interface for quagga ospf6settings
   */
  async setInterface(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/set_interface/${uuid}`, data);
  }

  /**
   * Execute set network for quagga ospf6settings
   */
  async setNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/set_network/${uuid}`, data);
  }

  /**
   * Execute set prefixlist for quagga ospf6settings
   */
  async setPrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/set_prefixlist/${uuid}`, data);
  }

  /**
   * Execute set redistribution for quagga ospf6settings
   */
  async setRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/set_redistribution/${uuid}`, data);
  }

  /**
   * Execute set routemap for quagga ospf6settings
   */
  async setRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/set_routemap/${uuid}`, data);
  }

  /**
   * Execute toggle interface for quagga ospf6settings
   */
  async toggleInterface(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/toggle_interface/${uuid}`, data);
  }

  /**
   * Execute toggle network for quagga ospf6settings
   */
  async toggleNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/toggle_network/${uuid}`, data);
  }

  /**
   * Execute toggle prefixlist for quagga ospf6settings
   */
  async togglePrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/toggle_prefixlist/${uuid}`, data);
  }

  /**
   * Execute toggle redistribution for quagga ospf6settings
   */
  async toggleRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/toggle_redistribution/${uuid}`, data);
  }

  /**
   * Execute toggle routemap for quagga ospf6settings
   */
  async toggleRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospf6settings/toggle_routemap/${uuid}`, data);
  }
}

export class QuaggaOspfsettings extends BaseModule {
  /**
   * Execute add interface for quagga ospfsettings
   */
  async addInterface(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/add_interface`, data);
  }

  /**
   * Execute add network for quagga ospfsettings
   */
  async addNetwork(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/add_network`, data);
  }

  /**
   * Execute add prefixlist for quagga ospfsettings
   */
  async addPrefixlist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/add_prefixlist`, data);
  }

  /**
   * Execute add redistribution for quagga ospfsettings
   */
  async addRedistribution(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/add_redistribution`, data);
  }

  /**
   * Execute add routemap for quagga ospfsettings
   */
  async addRoutemap(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/add_routemap`, data);
  }

  /**
   * Execute del interface for quagga ospfsettings
   */
  async delInterface(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/del_interface/${uuid}`, data);
  }

  /**
   * Execute del network for quagga ospfsettings
   */
  async delNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/del_network/${uuid}`, data);
  }

  /**
   * Execute del prefixlist for quagga ospfsettings
   */
  async delPrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/del_prefixlist/${uuid}`, data);
  }

  /**
   * Execute del redistribution for quagga ospfsettings
   */
  async delRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/del_redistribution/${uuid}`, data);
  }

  /**
   * Execute del routemap for quagga ospfsettings
   */
  async delRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/del_routemap/${uuid}`, data);
  }

  /**
   * Get get for quagga ospfsettings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/ospfsettings/get`);
  }

  /**
   * Get get interface for quagga ospfsettings
   */
  async getInterface(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/ospfsettings/get_interface/${uuid}`);
  }

  /**
   * Get get network for quagga ospfsettings
   */
  async getNetwork(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/ospfsettings/get_network/${uuid}`);
  }

  /**
   * Get get prefixlist for quagga ospfsettings
   */
  async getPrefixlist(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/ospfsettings/get_prefixlist/${uuid}`);
  }

  /**
   * Get get redistribution for quagga ospfsettings
   */
  async getRedistribution(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/ospfsettings/get_redistribution/${uuid}`);
  }

  /**
   * Get get routemap for quagga ospfsettings
   */
  async getRoutemap(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/ospfsettings/get_routemap/${uuid}`);
  }

  /**
   * Execute set for quagga ospfsettings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/set`, data);
  }

  /**
   * Execute set interface for quagga ospfsettings
   */
  async setInterface(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/set_interface/${uuid}`, data);
  }

  /**
   * Execute set network for quagga ospfsettings
   */
  async setNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/set_network/${uuid}`, data);
  }

  /**
   * Execute set prefixlist for quagga ospfsettings
   */
  async setPrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/set_prefixlist/${uuid}`, data);
  }

  /**
   * Execute set redistribution for quagga ospfsettings
   */
  async setRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/set_redistribution/${uuid}`, data);
  }

  /**
   * Execute set routemap for quagga ospfsettings
   */
  async setRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/set_routemap/${uuid}`, data);
  }

  /**
   * Execute toggle interface for quagga ospfsettings
   */
  async toggleInterface(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/toggle_interface/${uuid}`, data);
  }

  /**
   * Execute toggle network for quagga ospfsettings
   */
  async toggleNetwork(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/toggle_network/${uuid}`, data);
  }

  /**
   * Execute toggle prefixlist for quagga ospfsettings
   */
  async togglePrefixlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/toggle_prefixlist/${uuid}`, data);
  }

  /**
   * Execute toggle redistribution for quagga ospfsettings
   */
  async toggleRedistribution(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/toggle_redistribution/${uuid}`, data);
  }

  /**
   * Execute toggle routemap for quagga ospfsettings
   */
  async toggleRoutemap(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/ospfsettings/toggle_routemap/${uuid}`, data);
  }
}

export class QuaggaRip extends BaseModule {
  /**
   * Get get for quagga rip
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/rip/get`);
  }

  /**
   * Execute set for quagga rip
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/rip/set`, data);
  }
}

export class QuaggaService extends BaseModule {
  /**
   * Execute reconfigure for quagga service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/quagga/quagga/service/reconfigure`);
  }

  /**
   * Execute restart for quagga service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/quagga/quagga/service/restart`);
  }

  /**
   * Execute start for quagga service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/quagga/quagga/service/start`);
  }

  /**
   * Get status for quagga service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/quagga/quagga/service/status`);
  }

  /**
   * Execute stop for quagga service
   */
  async stop(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/quagga/quagga/service/stop`);
  }
}

export class QuaggaStatic extends BaseModule {
  /**
   * Execute add route for quagga static
   */
  async addRoute(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/static/add_route`, data);
  }

  /**
   * Execute del route for quagga static
   */
  async delRoute(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/static/del_route/${uuid}`, data);
  }

  /**
   * Get get for quagga static
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/static/get`);
  }

  /**
   * Get get route for quagga static
   */
  async getRoute(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/quagga/quagga/static/get_route/${uuid}`);
  }

  /**
   * Execute set for quagga static
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/static/set`, data);
  }

  /**
   * Execute set route for quagga static
   */
  async setRoute(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/static/set_route/${uuid}`, data);
  }

  /**
   * Execute toggle route for quagga static
   */
  async toggleRoute(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/quagga/quagga/static/toggle_route/${uuid}`, data);
  }
}

// Main module class
export class QuaggaModule extends BaseModule {
  public readonly bfd: QuaggaBfd;
  public readonly bgp: QuaggaBgp;
  public readonly diagnostics: QuaggaDiagnostics;
  public readonly general: QuaggaGeneral;
  public readonly ospf6settings: QuaggaOspf6settings;
  public readonly ospfsettings: QuaggaOspfsettings;
  public readonly rip: QuaggaRip;
  public readonly service: QuaggaService;
  public readonly static: QuaggaStatic;

  constructor(http: any) {
    super(http);
    this.bfd = new QuaggaBfd(http);
    this.bgp = new QuaggaBgp(http);
    this.diagnostics = new QuaggaDiagnostics(http);
    this.general = new QuaggaGeneral(http);
    this.ospf6settings = new QuaggaOspf6settings(http);
    this.ospfsettings = new QuaggaOspfsettings(http);
    this.rip = new QuaggaRip(http);
    this.service = new QuaggaService(http);
    this.static = new QuaggaStatic(http);
  }

}