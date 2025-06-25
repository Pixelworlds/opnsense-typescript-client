import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class OpenVPNInstances {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/openvpn/instances/search');
    }
    return this.http.post('/api/openvpn/instances/search', params);
  }

  async add(instance: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/openvpn/instances/add', instance);
  }

  async get(): Promise<ApiResponse<any>> {
    return this.http.get('/api/openvpn/instances/get');
  }

  async getItem(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/openvpn/instances/get/${uuid}` : '/api/openvpn/instances/get';
    return this.http.get(path);
  }

  async set(uuid: string, instance: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/instances/set/${uuid}`, instance);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/instances/del/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/openvpn/instances/toggle/${uuid}/${enabled ? '1' : '0'}`
      : `/api/openvpn/instances/toggle/${uuid}`;
    return this.http.post(path);
  }

  async generateKey(type: string = 'secret'): Promise<ApiResponse<any>> {
    return this.http.get(`/api/openvpn/instances/gen_key/${type}`);
  }

  // Static key management
  async searchStaticKeys(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/openvpn/instances/search_static_key', params);
  }

  async addStaticKey(key: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/openvpn/instances/add_static_key', key);
  }

  async getStaticKey(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/openvpn/instances/get_static_key/${uuid}` : '/api/openvpn/instances/get_static_key';
    return this.http.get(path);
  }

  async setStaticKey(uuid: string, key: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/instances/set_static_key/${uuid}`, key);
  }

  async deleteStaticKey(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/instances/del_static_key/${uuid}`);
  }
}

export class OpenVPNClientOverwrites {
  constructor(private http: any) {}

  async search(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    if (Object.keys(params).length === 0) {
      return this.http.get('/api/openvpn/client_overwrites/search');
    }
    return this.http.post('/api/openvpn/client_overwrites/search', params);
  }

  async add(overwrite: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/openvpn/client_overwrites/add', overwrite);
  }

  async get(uuid?: string): Promise<ApiResponse<any>> {
    const path = uuid ? `/api/openvpn/client_overwrites/get/${uuid}` : '/api/openvpn/client_overwrites/get';
    return this.http.get(path);
  }

  async set(uuid: string, overwrite: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/client_overwrites/set/${uuid}`, overwrite);
  }

  async delete(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/client_overwrites/del/${uuid}`);
  }

  async toggle(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    const path = enabled !== undefined 
      ? `/api/openvpn/client_overwrites/toggle/${uuid}/${enabled ? '1' : '0'}`
      : `/api/openvpn/client_overwrites/toggle/${uuid}`;
    return this.http.post(path);
  }
}

export class OpenVPNExport {
  constructor(private http: any) {}

  async getAccounts(vpn_id?: string): Promise<ApiResponse<any>> {
    const path = vpn_id ? `/api/openvpn/export/accounts/${vpn_id}` : '/api/openvpn/export/accounts';
    return this.http.get(path);
  }

  async download(vpn_id: string, cert_ref: string): Promise<ApiResponse<any>> {
    return this.http.post(`/api/openvpn/export/download/${vpn_id}/${cert_ref}`);
  }

  async getProviders(): Promise<ApiResponse<any>> {
    return this.http.get('/api/openvpn/export/providers');
  }

  async getTemplates(): Promise<ApiResponse<any>> {
    return this.http.get('/api/openvpn/export/templates');
  }

  async storePresets(vpn_id: string, presets: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/openvpn/export/store_presets/${vpn_id}`, presets);
  }

  async validatePresets(vpn_id: string, presets: Record<string, any>): Promise<ApiResponse<any>> {
    return this.http.post(`/api/openvpn/export/validate_presets/${vpn_id}`, presets);
  }
}

export class OpenVPNService {
  constructor(private http: any) {}

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/openvpn/service/reconfigure');
  }

  async startService(id?: string): Promise<ApiResponse<ApiResult>> {
    const path = id ? `/api/openvpn/service/start_service/${id}` : '/api/openvpn/service/start_service';
    return this.http.post(path);
  }

  async stopService(id?: string): Promise<ApiResponse<ApiResult>> {
    const path = id ? `/api/openvpn/service/stop_service/${id}` : '/api/openvpn/service/stop_service';
    return this.http.post(path);
  }

  async restartService(id?: string): Promise<ApiResponse<ApiResult>> {
    const path = id ? `/api/openvpn/service/restart_service/${id}` : '/api/openvpn/service/restart_service';
    return this.http.post(path);
  }

  async searchSessions(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/openvpn/service/search_sessions', params);
  }

  async killSession(sessionData: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/openvpn/service/kill_session', sessionData);
  }

  async searchRoutes(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.http.post('/api/openvpn/service/search_routes', params);
  }
}

export class OpenVPNModule extends BaseModule {
  public readonly instances: OpenVPNInstances;
  public readonly clientOverwrites: OpenVPNClientOverwrites;
  public readonly export: OpenVPNExport;
  public readonly service: OpenVPNService;

  constructor(httpClient: any) {
    super(httpClient);
    this.instances = new OpenVPNInstances(this.http);
    this.clientOverwrites = new OpenVPNClientOverwrites(this.http);
    this.export = new OpenVPNExport(this.http);
    this.service = new OpenVPNService(this.http);
  }

  // Legacy methods for backward compatibility
  async getInstances(): Promise<ApiResponse<any>> {
    return this.instances.get();
  }

  async searchInstances(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.instances.search(params);
  }

  async addInstance(instance: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.instances.add(instance);
  }

  async updateInstance(uuid: string, instance: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.instances.set(uuid, instance);
  }

  async deleteInstance(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.instances.delete(uuid);
  }

  async toggleInstance(uuid: string, enabled?: boolean): Promise<ApiResponse<ApiResult>> {
    return this.instances.toggle(uuid, enabled);
  }

  async generateKey(type: string = 'secret'): Promise<ApiResponse<any>> {
    return this.instances.generateKey(type);
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.service.reconfigure();
  }

  async startService(id?: string): Promise<ApiResponse<ApiResult>> {
    return this.service.startService(id);
  }

  async stopService(id?: string): Promise<ApiResponse<ApiResult>> {
    return this.service.stopService(id);
  }

  async restartService(id?: string): Promise<ApiResponse<ApiResult>> {
    return this.service.restartService(id);
  }

  async searchSessions(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.service.searchSessions(params);
  }

  async killSession(sessionData: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.service.killSession(sessionData);
  }

  // New convenience methods
  async getAllInstances(): Promise<ApiResponse<any>> {
    return this.instances.search();
  }

  async getAllClientOverwrites(): Promise<ApiResponse<any>> {
    return this.clientOverwrites.search();
  }

  async getAllSessions(): Promise<ApiResponse<any>> {
    return this.service.searchSessions();
  }

  async getAllRoutes(): Promise<ApiResponse<any>> {
    return this.service.searchRoutes();
  }

  async getAllStaticKeys(): Promise<ApiResponse<any>> {
    return this.instances.searchStaticKeys();
  }

  async enableInstance(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.instances.toggle(uuid, true);
  }

  async disableInstance(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.instances.toggle(uuid, false);
  }

  async enableClientOverwrite(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.clientOverwrites.toggle(uuid, true);
  }

  async disableClientOverwrite(uuid: string): Promise<ApiResponse<ApiResult>> {
    return this.clientOverwrites.toggle(uuid, false);
  }

  async createServerInstance(name: string, port: number, protocol: string = 'udp', description?: string): Promise<ApiResponse<ApiResult>> {
    const instance = {
      enabled: '1',
      name,
      role: 'server',
      port: port.toString(),
      proto: protocol,
      description: description || `OpenVPN server ${name}`
    };
    return this.instances.add(instance);
  }

  async createClientInstance(name: string, server: string, port: number, description?: string): Promise<ApiResponse<ApiResult>> {
    const instance = {
      enabled: '1',
      name,
      role: 'client',
      server,
      port: port.toString(),
      description: description || `OpenVPN client ${name}`
    };
    return this.instances.add(instance);
  }

  async createClientOverwrite(commonName: string, server: string, customConfig: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const overwrite = {
      enabled: '1',
      common_name: commonName,
      servers: [server],
      push_reset: '0',
      custom_options: customConfig,
      description: description || `Client overwrite for ${commonName}`
    };
    return this.clientOverwrites.add(overwrite);
  }

  async createStaticKey(name: string, key: string, description?: string): Promise<ApiResponse<ApiResult>> {
    const staticKey = {
      enabled: '1',
      name,
      key,
      description: description || `Static key ${name}`
    };
    return this.instances.addStaticKey(staticKey);
  }

  async generateServerKey(): Promise<ApiResponse<any>> {
    return this.instances.generateKey('tls');
  }

  async generateClientCertificate(): Promise<ApiResponse<any>> {
    return this.instances.generateKey('cert');
  }

  async downloadClientConfig(vpn_id: string, cert_ref: string): Promise<ApiResponse<any>> {
    return this.export.download(vpn_id, cert_ref);
  }

  async getExportAccounts(vpn_id?: string): Promise<ApiResponse<any>> {
    return this.export.getAccounts(vpn_id);
  }

  async getOpenVpnOverview(): Promise<{
    instances: any;
    sessions: any;
    routes: any;
    clientOverwrites: any;
    staticKeys: any;
    exportAccounts: any;
    timestamp: string;
  }> {
    const [instances, sessions, routes, clientOverwrites, staticKeys, exportAccounts] = await Promise.allSettled([
      this.getAllInstances(),
      this.getAllSessions(),
      this.getAllRoutes(),
      this.getAllClientOverwrites(),
      this.getAllStaticKeys(),
      this.export.getAccounts().catch(() => ({ data: null })),
    ]);

    return {
      instances: instances.status === 'fulfilled' ? instances.value.data : null,
      sessions: sessions.status === 'fulfilled' ? sessions.value.data : null,
      routes: routes.status === 'fulfilled' ? routes.value.data : null,
      clientOverwrites: clientOverwrites.status === 'fulfilled' ? clientOverwrites.value.data : null,
      staticKeys: staticKeys.status === 'fulfilled' ? staticKeys.value.data : null,
      exportAccounts: exportAccounts.status === 'fulfilled' ? exportAccounts.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }

  async stopAllServices(): Promise<{
    results: Array<{ service: string; success: boolean; error?: any }>;
    summary: { stopped: number; failed: number };
  }> {
    const instances = await this.getAllInstances();
    const instanceList = instances.data?.rows || [];
    
    const results = [];
    let stopped = 0;
    let failed = 0;

    for (const instance of instanceList) {
      try {
        await this.stopService(instance.uuid);
        results.push({ service: instance.name || instance.uuid, success: true });
        stopped++;
      } catch (error) {
        results.push({ service: instance.name || instance.uuid, success: false, error });
        failed++;
      }
    }

    return {
      results,
      summary: { stopped, failed }
    };
  }

  async startAllServices(): Promise<{
    results: Array<{ service: string; success: boolean; error?: any }>;
    summary: { started: number; failed: number };
  }> {
    const instances = await this.getAllInstances();
    const instanceList = instances.data?.rows || [];
    
    const results = [];
    let started = 0;
    let failed = 0;

    for (const instance of instanceList) {
      if (instance.enabled === '1') {
        try {
          await this.startService(instance.uuid);
          results.push({ service: instance.name || instance.uuid, success: true });
          started++;
        } catch (error) {
          results.push({ service: instance.name || instance.uuid, success: false, error });
          failed++;
        }
      }
    }

    return {
      results,
      summary: { started, failed }
    };
  }

  async killAllSessions(): Promise<{
    results: Array<{ session: string; success: boolean; error?: any }>;
    summary: { killed: number; failed: number };
  }> {
    const sessions = await this.getAllSessions();
    const sessionList = sessions.data?.rows || [];
    
    const results = [];
    let killed = 0;
    let failed = 0;

    for (const session of sessionList) {
      try {
        await this.killSession({ session_id: session.id });
        results.push({ session: session.id, success: true });
        killed++;
      } catch (error) {
        results.push({ session: session.id, success: false, error });
        failed++;
      }
    }

    return {
      results,
      summary: { killed, failed }
    };
  }
}