import { BaseModule } from '../base';

import type { ApiResponse } from '../../types';

export class DiagnosticsModule extends BaseModule {
  async getSystemInformation(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/system_information');
  }

  async getMemory(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/memory');
  }

  async getDisk(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/system_disk');
  }

  async getSystemResources(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/system_resources');
  }

  async getTemperature(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/system_temperature');
  }

  async getSystemTime(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/system_time');
  }

  async getSwap(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/system_swap');
  }

  async getMbuf(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/system/system_mbuf');
  }

  async getFirewallStats(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/firewall/stats');
  }

  async getFirewallLogs(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/firewall/log');
  }

  async streamFirewallLogs(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/firewall/stream_log');
  }

  async getFirewallLogFilters(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/firewall/log_filters');
  }

  async getPfStates(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/firewall/pf_states');
  }

  async queryPfStates(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/firewall/query_states', params);
  }

  async getPfStatistics(section?: string): Promise<ApiResponse<any>> {
    const path = section
      ? `/api/diagnostics/firewall/pf_statistics/${section}`
      : '/api/diagnostics/firewall/pf_statistics';
    return this.http.get(path);
  }

  async flushFirewallStates(): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/firewall/flush_states');
  }

  async killFirewallStates(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/firewall/kill_states', params);
  }

  async deleteFirewallState(stateId: string, creatorId: string): Promise<ApiResponse<any>> {
    return this.http.post(`/api/diagnostics/firewall/del_state/${stateId}/${creatorId}`);
  }

  async getInterfaceStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/interface/get_interface_statistics');
  }

  async getInterfaceConfig(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/interface/get_interface_config');
  }

  async getArp(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/interface/get_arp');
  }

  async searchArp(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/interface/search_arp', params);
  }

  async flushArp(): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/interface/flush_arp');
  }

  async getNdp(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/interface/get_ndp');
  }

  async searchNdp(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/interface/search_ndp', params);
  }

  async getRoutes(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/interface/get_routes');
  }

  async deleteRoute(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/interface/del_route', params);
  }

  async getCpuUsageStream(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/cpu_usage/stream');
  }

  async getCpuType(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/cpu_usage/get_cpu_type');
  }

  async getTrafficInterface(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/traffic/interface');
  }

  async getTopTraffic(interfaces: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/traffic/top/${interfaces}`);
  }

  async streamTraffic(pollInterval: number = 1): Promise<ApiResponse<any>> {
    return this.http.get(`/api/diagnostics/traffic/stream/${pollInterval}`);
  }

  async dnsLookup(params: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post('/api/diagnostics/dns/reverse_lookup', params);
  }

  async getActivity(): Promise<ApiResponse<any>> {
    return this.http.get('/api/diagnostics/activity/get_activity');
  }
}
