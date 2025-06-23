import { HttpClient } from './http-client';
import {
    AuthModule, BackupModule, CaptivePortalModule, CronModule, DiagnosticsModule, FirewallModule, FirmwareModule,
    InterfacesModule, IPsecModule, MonitModule, OpenVPNModule, ServiceModule, SystemModule, TrustModule
} from './modules/core';
import {
    BindModule, CaddyModule, CrowdsecModule, HAProxyModule, NetdataModule, NetsnmpModule, NginxModule, WireGuardModule
} from './modules/plugins';

import type { ApiResponse, ApiResult, OPNsenseConfig } from './types';

/**
 * Main OPNsense API client
 *
 * Provides a comprehensive interface to the OPNsense API with organized modules
 * for different functionality areas, separated into core and plugin modules.
 */
export class OPNsenseClient {
  private http: HttpClient;

  // Core modules (built into OPNsense)
  public readonly system: SystemModule;
  public readonly firmware: FirmwareModule;
  public readonly firewall: FirewallModule;
  public readonly diagnostics: DiagnosticsModule;
  public readonly interfaces: InterfacesModule;
  public readonly service: ServiceModule;
  public readonly captivePortal: CaptivePortalModule;
  public readonly openVPN: OpenVPNModule;
  public readonly ipsec: IPsecModule;
  public readonly auth: AuthModule;
  public readonly trust: TrustModule;
  public readonly cron: CronModule;
  public readonly backup: BackupModule;
  public readonly monit: MonitModule;

  // Plugin modules (require plugin installation)
  public readonly plugins: {
    wireGuard: WireGuardModule;
    nginx: NginxModule;
    haproxy: HAProxyModule;
    bind: BindModule;
    caddy: CaddyModule;
    crowdsec: CrowdsecModule;
    netsnmp: NetsnmpModule;
    netdata: NetdataModule;
  };

  constructor(config: OPNsenseConfig) {
    this.http = new HttpClient(config);

    // Initialize core modules
    this.system = new SystemModule(this.http);
    this.firmware = new FirmwareModule(this.http);
    this.firewall = new FirewallModule(this.http);
    this.diagnostics = new DiagnosticsModule(this.http);
    this.interfaces = new InterfacesModule(this.http);
    this.service = new ServiceModule(this.http);
    this.captivePortal = new CaptivePortalModule(this.http);
    this.openVPN = new OpenVPNModule(this.http);
    this.ipsec = new IPsecModule(this.http);
    this.auth = new AuthModule(this.http);
    this.trust = new TrustModule(this.http);
    this.cron = new CronModule(this.http);
    this.backup = new BackupModule(this.http);
    this.monit = new MonitModule(this.http);

    // Initialize plugin modules
    this.plugins = {
      wireGuard: new WireGuardModule(this.http),
      nginx: new NginxModule(this.http),
      haproxy: new HAProxyModule(this.http),
      bind: new BindModule(this.http),
      caddy: new CaddyModule(this.http),
      crowdsec: new CrowdsecModule(this.http),
      netsnmp: new NetsnmpModule(this.http),
      netdata: new NetdataModule(this.http),
    };
  }

  /**
   * Get the underlying HTTP client for direct access
   *
   * @example
   * ```typescript
   * const response = await client.httpClient.get('/api/custom/endpoint');
   * ```
   */
  get httpClient(): HttpClient {
    return this.http;
  }

  /**
   * Test the connection to the OPNsense API
   *
   * @returns Promise resolving to true if connection is successful
   * @throws {OPNsenseApiError} If connection fails
   *
   * @example
   * ```typescript
   * const isConnected = await client.testConnection();
   * console.log('Connected:', isConnected);
   * ```
   */
  async testConnection(): Promise<boolean> {
    try {
      await this.system.getStatus();
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get basic system information
   *
   * @returns Promise with system info including version, uptime, etc.
   *
   * @example
   * ```typescript
   * const info = await client.getSystemInfo();
   * console.log('OPNsense version:', info.version);
   * ```
   */
  async getSystemInfo(): Promise<any> {
    const [status, firmwareInfo] = await Promise.all([
      this.system.getStatus(),
      this.firmware.getInfo().catch(() => null), // Firmware endpoint might not be accessible
    ]);

    return {
      status: status.data,
      firmware: firmwareInfo?.data || null,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Apply configuration changes and restart services if needed
   *
   * @param services - Optional array of service names to restart
   * @returns Promise with operation results
   *
   * @example
   * ```typescript
   * // Apply all pending changes
   * await client.applyConfiguration();
   *
   * // Apply changes and restart specific services
   * await client.applyConfiguration(['firewall', 'openssh']);
   * ```
   */
  async applyConfiguration(services?: string[]): Promise<ApiResult[]> {
    const results: ApiResult[] = [];

    // Apply firewall configuration
    try {
      const firewallResult = await this.firewall.apply();
      results.push(firewallResult.data);
    } catch (error) {
      // Firewall apply might not be needed
    }

    // Restart specified services
    if (services && services.length > 0) {
      for (const serviceName of services) {
        try {
          const serviceResult = await this.service.restart(serviceName);
          results.push(serviceResult.data);
        } catch (error) {
          results.push({
            result: 'error',
            service: serviceName,
            error: error instanceof Error ? error.message : 'Unknown error',
          });
        }
      }
    }

    return results;
  }

  /**
   * Create a backup of the current configuration
   *
   * @returns Promise with backup download URL or data
   *
   * @example
   * ```typescript
   * const backup = await client.createBackup();
   * console.log('Backup created:', backup);
   * ```
   */
  async createBackup(): Promise<ApiResponse<any>> {
    return this.backup.download();
  }

  /**
   * Get comprehensive system health status
   *
   * @returns Promise with system health information
   *
   * @example
   * ```typescript
   * const health = await client.getSystemHealth();
   * console.log('System load:', health.system.load);
   * console.log('Memory usage:', health.system.memory);
   * ```
   */
  async getSystemHealth(): Promise<any> {
    const [systemStatus, interfaceStats, firewallStats] = await Promise.allSettled([
      this.system.getStatus(),
      this.diagnostics.getSystemInformation(),
      this.diagnostics.getFirewallStats(),
    ]);

    return {
      system: systemStatus.status === 'fulfilled' ? systemStatus.value.data : null,
      interfaces: interfaceStats.status === 'fulfilled' ? interfaceStats.value.data : null,
      firewall: firewallStats.status === 'fulfilled' ? firewallStats.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Check if a plugin is available (installed and accessible)
   *
   * @param pluginName - Name of the plugin to check
   * @returns Promise resolving to true if plugin is available
   *
   * @example
   * ```typescript
   * const hasWireGuard = await client.isPluginAvailable('wireGuard');
   * if (hasWireGuard) {
   *   await client.plugins.wireGuard.getStatus();
   * }
   * ```
   */
  async isPluginAvailable(pluginName: string): Promise<boolean> {
    try {
      // Try to access the plugin's status endpoint
      const pluginModule = this.plugins[pluginName as keyof typeof this.plugins];
      if (!pluginModule) return false;

      if ('getStatus' in pluginModule) {
        await (pluginModule as any).getStatus();
        return true;
      }

      // For plugins without status endpoint, try a basic GET
      await this.http.get(`/api/${pluginName}/general/get`);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get a list of available (installed) plugins
   *
   * @returns Promise with array of available plugin names
   *
   * @example
   * ```typescript
   * const plugins = await client.getAvailablePlugins();
   * console.log('Available plugins:', plugins);
   * ```
   */
  async getAvailablePlugins(): Promise<string[]> {
    const pluginNames = Object.keys(this.plugins);
    const availablePlugins: string[] = [];

    for (const pluginName of pluginNames) {
      const isAvailable = await this.isPluginAvailable(pluginName);
      if (isAvailable) {
        availablePlugins.push(pluginName);
      }
    }

    return availablePlugins;
  }
}
