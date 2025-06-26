import { HttpClient } from './http-client';
import {
    AuthModule, CaptiveportalModule, CoreModule, CronModule, Dhcpv4Module, Dhcpv6Module, DhcrelayModule,
    DiagnosticsModule, DnsmasqModule, FirewallModule, FirmwareModule, IdsModule, InterfacesModule, IpsecModule,
    KeaModule, MonitModule, OpenvpnModule, RoutesModule, RoutingModule, ServiceModule, SyslogModule, SystemModule,
    TrafficshaperModule, TrustModule, UnboundModule, WireguardModule
} from './modules/core';
import {
    AcmeclientModule, ApcupsdModule, BindModule, CaddyModule, ChronyModule, CicapModule, ClamavModule, CollectdModule,
    CrowdsecModule, DechwModule, DiagnosticsPluginModule, DmidecodeModule, DnscryptproxyModule, DyndnsModule,
    FreeradiusModule, FtpproxyModule, GridexampleModule, HaproxyModule, HelloworldModule, HwprobeModule, IperfModule,
    LldpdModule, MaltrailModule, MdnsrepeaterModule, MuninnodeModule, NdproxyModule, NetdataModule, NetsnmpModule,
    NginxModule, NodeexporterModule, NrpeModule, NtopngModule, NutModule, OpenconnectModule, PostfixModule, ProxyModule,
    ProxyssoModule, PuppetagentModule, QemuguestagentModule, QuaggaModule, RadsecproxyModule, RedisModule, RelaydModule,
    RspamdModule, ShadowsocksModule, SiproxdModule, SmartModule, SoftetherModule, SslhModule, StunnelModule,
    TailscaleModule, TaygaModule, TelegrafModule, TftpModule, TincModule, TorModule, TurnserverModule,
    UdpbroadcastrelayModule, VnstatModule, WazuhagentModule, WolModule, ZabbixagentModule, ZabbixproxyModule,
    ZerotierModule
} from './modules/plugins';

import type { ApiResponse, ApiResult, OPNsenseConfig } from './types';

export class OPNsenseClient {
  private http: HttpClient;

  public readonly firmware: FirmwareModule;
  public readonly firewall: FirewallModule;
  public readonly diagnostics: DiagnosticsModule;
  public readonly interfaces: InterfacesModule;
  public readonly captivePortal: CaptiveportalModule;
  public readonly openVPN: OpenvpnModule;
  public readonly ipsec: IpsecModule;
  public readonly auth: AuthModule;
  public readonly trust: TrustModule;
  public readonly cron: CronModule;
  public readonly monit: MonitModule;
  public readonly core: CoreModule;
  public readonly dhcpv4: Dhcpv4Module;
  public readonly dhcpv6: Dhcpv6Module;
  public readonly dhcrelay: DhcrelayModule;
  public readonly dnsmasq: DnsmasqModule;
  public readonly ids: IdsModule;
  public readonly kea: KeaModule;
  public readonly routes: RoutesModule;
  public readonly routing: RoutingModule;
  public readonly service: ServiceModule;
  public readonly syslog: SyslogModule;
  public readonly system: SystemModule;
  public readonly trafficshaper: TrafficshaperModule;
  public readonly unbound: UnboundModule;
  public readonly wireguard: WireguardModule;

  public readonly plugins: {
    acmeclient: AcmeclientModule;
    apcupsd: ApcupsdModule;
    bind: BindModule;
    caddy: CaddyModule;
    chrony: ChronyModule;
    cicap: CicapModule;
    clamav: ClamavModule;
    collectd: CollectdModule;
    crowdsec: CrowdsecModule;
    dechw: DechwModule;
    diagnostics: DiagnosticsPluginModule;
    dmidecode: DmidecodeModule;
    dnscryptproxy: DnscryptproxyModule;
    dyndns: DyndnsModule;
    freeradius: FreeradiusModule;
    ftpproxy: FtpproxyModule;
    gridexample: GridexampleModule;
    haproxy: HaproxyModule;
    helloworld: HelloworldModule;
    hwprobe: HwprobeModule;
    iperf: IperfModule;
    lldpd: LldpdModule;
    maltrail: MaltrailModule;
    mdnsrepeater: MdnsrepeaterModule;
    muninnode: MuninnodeModule;
    ndproxy: NdproxyModule;
    netdata: NetdataModule;
    netsnmp: NetsnmpModule;
    nginx: NginxModule;
    nodeexporter: NodeexporterModule;
    nrpe: NrpeModule;
    ntopng: NtopngModule;
    nut: NutModule;
    openconnect: OpenconnectModule;
    postfix: PostfixModule;
    proxy: ProxyModule;
    proxysso: ProxyssoModule;
    puppetagent: PuppetagentModule;
    qemuguestagent: QemuguestagentModule;
    quagga: QuaggaModule;
    radsecproxy: RadsecproxyModule;
    redis: RedisModule;
    relayd: RelaydModule;
    rspamd: RspamdModule;
    shadowsocks: ShadowsocksModule;
    siproxyd: SiproxdModule;
    smart: SmartModule;
    softether: SoftetherModule;
    sslh: SslhModule;
    stunnel: StunnelModule;
    tailscale: TailscaleModule;
    tayga: TaygaModule;
    telegraf: TelegrafModule;
    tftp: TftpModule;
    tinc: TincModule;
    tor: TorModule;
    turnserver: TurnserverModule;
    udpbroadcastrelay: UdpbroadcastrelayModule;
    vnstat: VnstatModule;
    wazuhagent: WazuhagentModule;
    wol: WolModule;
    zabbixagent: ZabbixagentModule;
    zabbixproxy: ZabbixproxyModule;
    zerotier: ZerotierModule;
  };

  constructor(config: OPNsenseConfig) {
    this.http = new HttpClient(config);

    this.firmware = new FirmwareModule(this.http);
    this.firewall = new FirewallModule(this.http);
    this.diagnostics = new DiagnosticsModule(this.http);
    this.interfaces = new InterfacesModule(this.http);
    this.captivePortal = new CaptiveportalModule(this.http);
    this.openVPN = new OpenvpnModule(this.http);
    this.ipsec = new IpsecModule(this.http);
    this.auth = new AuthModule(this.http);
    this.trust = new TrustModule(this.http);
    this.cron = new CronModule(this.http);
    this.monit = new MonitModule(this.http);
    this.core = new CoreModule(this.http);
    this.dhcpv4 = new Dhcpv4Module(this.http);
    this.dhcpv6 = new Dhcpv6Module(this.http);
    this.dhcrelay = new DhcrelayModule(this.http);
    this.dnsmasq = new DnsmasqModule(this.http);
    this.ids = new IdsModule(this.http);
    this.kea = new KeaModule(this.http);
    this.routes = new RoutesModule(this.http);
    this.routing = new RoutingModule(this.http);
    this.service = new ServiceModule(this.http);
    this.syslog = new SyslogModule(this.http);
    this.system = new SystemModule(this.http);
    this.trafficshaper = new TrafficshaperModule(this.http);
    this.unbound = new UnboundModule(this.http);
    this.wireguard = new WireguardModule(this.http);

    this.plugins = {
      acmeclient: new AcmeclientModule(this.http),
      apcupsd: new ApcupsdModule(this.http),
      bind: new BindModule(this.http),
      caddy: new CaddyModule(this.http),
      chrony: new ChronyModule(this.http),
      cicap: new CicapModule(this.http),
      clamav: new ClamavModule(this.http),
      collectd: new CollectdModule(this.http),
      crowdsec: new CrowdsecModule(this.http),
      dechw: new DechwModule(this.http),
      diagnostics: new DiagnosticsPluginModule(this.http),
      dmidecode: new DmidecodeModule(this.http),
      dnscryptproxy: new DnscryptproxyModule(this.http),
      dyndns: new DyndnsModule(this.http),
      freeradius: new FreeradiusModule(this.http),
      ftpproxy: new FtpproxyModule(this.http),
      gridexample: new GridexampleModule(this.http),
      haproxy: new HaproxyModule(this.http),
      helloworld: new HelloworldModule(this.http),
      hwprobe: new HwprobeModule(this.http),
      iperf: new IperfModule(this.http),
      lldpd: new LldpdModule(this.http),
      maltrail: new MaltrailModule(this.http),
      mdnsrepeater: new MdnsrepeaterModule(this.http),
      muninnode: new MuninnodeModule(this.http),
      ndproxy: new NdproxyModule(this.http),
      netdata: new NetdataModule(this.http),
      netsnmp: new NetsnmpModule(this.http),
      nginx: new NginxModule(this.http),
      nodeexporter: new NodeexporterModule(this.http),
      nrpe: new NrpeModule(this.http),
      ntopng: new NtopngModule(this.http),
      nut: new NutModule(this.http),
      openconnect: new OpenconnectModule(this.http),
      postfix: new PostfixModule(this.http),
      proxy: new ProxyModule(this.http),
      proxysso: new ProxyssoModule(this.http),
      puppetagent: new PuppetagentModule(this.http),
      qemuguestagent: new QemuguestagentModule(this.http),
      quagga: new QuaggaModule(this.http),
      radsecproxy: new RadsecproxyModule(this.http),
      redis: new RedisModule(this.http),
      relayd: new RelaydModule(this.http),
      rspamd: new RspamdModule(this.http),
      shadowsocks: new ShadowsocksModule(this.http),
      siproxyd: new SiproxdModule(this.http),
      smart: new SmartModule(this.http),
      softether: new SoftetherModule(this.http),
      sslh: new SslhModule(this.http),
      stunnel: new StunnelModule(this.http),
      tailscale: new TailscaleModule(this.http),
      tayga: new TaygaModule(this.http),
      telegraf: new TelegrafModule(this.http),
      tftp: new TftpModule(this.http),
      tinc: new TincModule(this.http),
      tor: new TorModule(this.http),
      turnserver: new TurnserverModule(this.http),
      udpbroadcastrelay: new UdpbroadcastrelayModule(this.http),
      vnstat: new VnstatModule(this.http),
      wazuhagent: new WazuhagentModule(this.http),
      wol: new WolModule(this.http),
      zabbixagent: new ZabbixagentModule(this.http),
      zabbixproxy: new ZabbixproxyModule(this.http),
      zerotier: new ZerotierModule(this.http),
    };
  }

  get httpClient(): HttpClient {
    return this.http;
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.firmware.firmware.status();
      return true;
    } catch (error) {
      return false;
    }
  }

  async getSystemInfo(): Promise<any> {
    const [status, firmwareInfo] = await Promise.all([
      this.firmware.firmware.status(),
      this.firmware.firmware.info().catch(() => null),
    ]);

    return {
      status: status.data,
      firmware: firmwareInfo?.data || null,
      timestamp: new Date().toISOString(),
    };
  }

  async applyConfiguration(services?: string[]): Promise<ApiResult[]> {
    const results: ApiResult[] = [];

    try {
      const firewallResult = await this.firewall.filterBase.apply('');
      results.push(firewallResult.data || { result: 'ok', message: 'Firewall configuration applied' });
    } catch (error) {
      results.push({ result: 'failed', message: 'Failed to apply firewall configuration' });
    }

    if (services && services.length > 0) {
      for (const serviceName of services) {
        try {
          const serviceResult = await this.service.restart(serviceName);
          results.push(serviceResult.data || { result: 'ok', message: `Service ${serviceName} restarted` });
        } catch (error) {
          results.push({
            result: 'failed',
            message: error instanceof Error ? error.message : `Failed to restart service ${serviceName}`,
          });
        }
      }
    }

    return results;
  }

  async createBackup(): Promise<ApiResponse<any>> {
    return this.core.backup.download('', '');
  }

  async getSystemHealth(): Promise<any> {
    const [systemStatus, interfaceStats, firewallStats] = await Promise.allSettled([
      this.firmware.firmware.status(),
      this.diagnostics.system.systemInformation(),
      this.diagnostics.firewall.log().catch(() => null),
    ]);

    return {
      system: systemStatus.status === 'fulfilled' ? systemStatus.value.data : null,
      interfaces: interfaceStats.status === 'fulfilled' ? interfaceStats.value.data : null,
      firewall: firewallStats.status === 'fulfilled' && firewallStats.value ? firewallStats.value.data : null,
      timestamp: new Date().toISOString(),
    };
  }

  async isPluginAvailable(pluginName: string): Promise<boolean> {
    try {
      const pluginModule = this.plugins[pluginName as keyof typeof this.plugins];
      if (!pluginModule) return false;

      if ('getStatus' in pluginModule) {
        await (pluginModule as any).getStatus();
        return true;
      }

      await this.http.get(`/api/${pluginName}/general/get`);
      return true;
    } catch (error) {
      return false;
    }
  }

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
