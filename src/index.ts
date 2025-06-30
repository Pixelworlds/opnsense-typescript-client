// OPNsense TypeScript SDK
// Auto-generated from TypeScript modules

import { OPNsenseHttpClient } from './http-client';
import type { OPNsenseConfig, HttpClient } from './types';

// Core module imports
import { CaptiveportalApi, CronApi, Dhcpv4Api, Dhcpv6Api, DhcrelayApi, DiagnosticsApi, DnsmasqApi, FirmwareApi, IdsApi, IpsecApi, KeaApi, MonitApi, OpenvpnApi, RoutesApi, RoutingApi, SyslogApi, TrafficshaperApi, TrustApi, UnboundApi, WireguardApi, CoreApi, AuthApi, FirewallApi, InterfacesApi } from './core';

// Plugin module imports
import { AcmeclientApi, ApcupsdApi, BindApi, CaddyApi, ChronyApi, CicapApi, ClamavApi, CollectdApi, CrowdsecApi, DechwApi, DiagnosticsApi as DiagnosticsApiPlugin, DmidecodeApi, DnscryptproxyApi, DyndnsApi, FreeradiusApi, FtpproxyApi, GridexampleApi, HaproxyApi, HelloworldApi, HwprobeApi, IperfApi, LldpdApi, MaltrailApi, MdnsrepeaterApi, MuninnodeApi, NdproxyApi, NetdataApi, NetsnmpApi, NginxApi, NodeexporterApi, NrpeApi, NtopngApi, NutApi, OpenconnectApi, PostfixApi, ProxyApi, ProxyssoApi, PuppetagentApi, QemuguestagentApi, QuaggaApi, RadsecproxyApi, RedisApi, RelaydApi, RspamdApi, ShadowsocksApi, SiproxdApi, SmartApi, SoftetherApi, SslhApi, StunnelApi, TailscaleApi, TaygaApi, TelegrafApi, TftpApi, TincApi, TorApi, TurnserverApi, UdpbroadcastrelayApi, VnstatApi, WazuhagentApi, WolApi, ZabbixagentApi, ZabbixproxyApi, ZerotierApi } from './plugins';

// Export types
export type { OPNsenseConfig, RequestConfig, ApiResponse, ApiResult } from './types';

// Export individual modules for tree-shaking (without re-exporting to avoid conflicts)
// Use explicit imports above instead of export * to handle naming conflicts

/**
 * Main OPNsense API Client
 * 
 * Provides access to all OPNsense core and plugin modules.
 * Handles authentication, SSL verification, and request/response management.
 */
export class OPNsenseClient {
  private http: HttpClient;

  // Core modules
  public readonly captiveportal: CaptiveportalApi;
  public readonly cron: CronApi;
  public readonly dhcpv4: Dhcpv4Api;
  public readonly dhcpv6: Dhcpv6Api;
  public readonly dhcrelay: DhcrelayApi;
  public readonly diagnostics: DiagnosticsApi;
  public readonly dnsmasq: DnsmasqApi;
  public readonly firmware: FirmwareApi;
  public readonly ids: IdsApi;
  public readonly ipsec: IpsecApi;
  public readonly kea: KeaApi;
  public readonly monit: MonitApi;
  public readonly openvpn: OpenvpnApi;
  public readonly routes: RoutesApi;
  public readonly routing: RoutingApi;
  public readonly syslog: SyslogApi;
  public readonly trafficshaper: TrafficshaperApi;
  public readonly trust: TrustApi;
  public readonly unbound: UnboundApi;
  public readonly wireguard: WireguardApi;
  public readonly core: CoreApi;
  public readonly auth: AuthApi;
  public readonly firewall: FirewallApi;
  public readonly interfaces: InterfacesApi;

  // Plugin modules
  public readonly plugins: {
    acmeclient: AcmeclientApi;
    apcupsd: ApcupsdApi;
    bind: BindApi;
    caddy: CaddyApi;
    chrony: ChronyApi;
    cicap: CicapApi;
    clamav: ClamavApi;
    collectd: CollectdApi;
    crowdsec: CrowdsecApi;
    dechw: DechwApi;
    diagnostics: DiagnosticsApiPlugin;
    dmidecode: DmidecodeApi;
    dnscryptproxy: DnscryptproxyApi;
    dyndns: DyndnsApi;
    freeradius: FreeradiusApi;
    ftpproxy: FtpproxyApi;
    gridexample: GridexampleApi;
    haproxy: HaproxyApi;
    helloworld: HelloworldApi;
    hwprobe: HwprobeApi;
    iperf: IperfApi;
    lldpd: LldpdApi;
    maltrail: MaltrailApi;
    mdnsrepeater: MdnsrepeaterApi;
    muninnode: MuninnodeApi;
    ndproxy: NdproxyApi;
    netdata: NetdataApi;
    netsnmp: NetsnmpApi;
    nginx: NginxApi;
    nodeexporter: NodeexporterApi;
    nrpe: NrpeApi;
    ntopng: NtopngApi;
    nut: NutApi;
    openconnect: OpenconnectApi;
    postfix: PostfixApi;
    proxy: ProxyApi;
    proxysso: ProxyssoApi;
    puppetagent: PuppetagentApi;
    qemuguestagent: QemuguestagentApi;
    quagga: QuaggaApi;
    radsecproxy: RadsecproxyApi;
    redis: RedisApi;
    relayd: RelaydApi;
    rspamd: RspamdApi;
    shadowsocks: ShadowsocksApi;
    siproxd: SiproxdApi;
    smart: SmartApi;
    softether: SoftetherApi;
    sslh: SslhApi;
    stunnel: StunnelApi;
    tailscale: TailscaleApi;
    tayga: TaygaApi;
    telegraf: TelegrafApi;
    tftp: TftpApi;
    tinc: TincApi;
    tor: TorApi;
    turnserver: TurnserverApi;
    udpbroadcastrelay: UdpbroadcastrelayApi;
    vnstat: VnstatApi;
    wazuhagent: WazuhagentApi;
    wol: WolApi;
    zabbixagent: ZabbixagentApi;
    zabbixproxy: ZabbixproxyApi;
    zerotier: ZerotierApi;
  };

  /**
   * Create a new OPNsense API client
   * 
   * @param config Configuration object with connection details
   */
  constructor(config: OPNsenseConfig) {
    this.http = new OPNsenseHttpClient(config);

    // Initialize core modules
    this.captiveportal = new CaptiveportalApi(this.http);
    this.cron = new CronApi(this.http);
    this.dhcpv4 = new Dhcpv4Api(this.http);
    this.dhcpv6 = new Dhcpv6Api(this.http);
    this.dhcrelay = new DhcrelayApi(this.http);
    this.diagnostics = new DiagnosticsApi(this.http);
    this.dnsmasq = new DnsmasqApi(this.http);
    this.firmware = new FirmwareApi(this.http);
    this.ids = new IdsApi(this.http);
    this.ipsec = new IpsecApi(this.http);
    this.kea = new KeaApi(this.http);
    this.monit = new MonitApi(this.http);
    this.openvpn = new OpenvpnApi(this.http);
    this.routes = new RoutesApi(this.http);
    this.routing = new RoutingApi(this.http);
    this.syslog = new SyslogApi(this.http);
    this.trafficshaper = new TrafficshaperApi(this.http);
    this.trust = new TrustApi(this.http);
    this.unbound = new UnboundApi(this.http);
    this.wireguard = new WireguardApi(this.http);
    this.core = new CoreApi(this.http);
    this.auth = new AuthApi(this.http);
    this.firewall = new FirewallApi(this.http);
    this.interfaces = new InterfacesApi(this.http);

    // Initialize plugin modules
    this.plugins = {
      acmeclient: new AcmeclientApi(this.http),
      apcupsd: new ApcupsdApi(this.http),
      bind: new BindApi(this.http),
      caddy: new CaddyApi(this.http),
      chrony: new ChronyApi(this.http),
      cicap: new CicapApi(this.http),
      clamav: new ClamavApi(this.http),
      collectd: new CollectdApi(this.http),
      crowdsec: new CrowdsecApi(this.http),
      dechw: new DechwApi(this.http),
      diagnostics: new DiagnosticsApiPlugin(this.http),
      dmidecode: new DmidecodeApi(this.http),
      dnscryptproxy: new DnscryptproxyApi(this.http),
      dyndns: new DyndnsApi(this.http),
      freeradius: new FreeradiusApi(this.http),
      ftpproxy: new FtpproxyApi(this.http),
      gridexample: new GridexampleApi(this.http),
      haproxy: new HaproxyApi(this.http),
      helloworld: new HelloworldApi(this.http),
      hwprobe: new HwprobeApi(this.http),
      iperf: new IperfApi(this.http),
      lldpd: new LldpdApi(this.http),
      maltrail: new MaltrailApi(this.http),
      mdnsrepeater: new MdnsrepeaterApi(this.http),
      muninnode: new MuninnodeApi(this.http),
      ndproxy: new NdproxyApi(this.http),
      netdata: new NetdataApi(this.http),
      netsnmp: new NetsnmpApi(this.http),
      nginx: new NginxApi(this.http),
      nodeexporter: new NodeexporterApi(this.http),
      nrpe: new NrpeApi(this.http),
      ntopng: new NtopngApi(this.http),
      nut: new NutApi(this.http),
      openconnect: new OpenconnectApi(this.http),
      postfix: new PostfixApi(this.http),
      proxy: new ProxyApi(this.http),
      proxysso: new ProxyssoApi(this.http),
      puppetagent: new PuppetagentApi(this.http),
      qemuguestagent: new QemuguestagentApi(this.http),
      quagga: new QuaggaApi(this.http),
      radsecproxy: new RadsecproxyApi(this.http),
      redis: new RedisApi(this.http),
      relayd: new RelaydApi(this.http),
      rspamd: new RspamdApi(this.http),
      shadowsocks: new ShadowsocksApi(this.http),
      siproxd: new SiproxdApi(this.http),
      smart: new SmartApi(this.http),
      softether: new SoftetherApi(this.http),
      sslh: new SslhApi(this.http),
      stunnel: new StunnelApi(this.http),
      tailscale: new TailscaleApi(this.http),
      tayga: new TaygaApi(this.http),
      telegraf: new TelegrafApi(this.http),
      tftp: new TftpApi(this.http),
      tinc: new TincApi(this.http),
      tor: new TorApi(this.http),
      turnserver: new TurnserverApi(this.http),
      udpbroadcastrelay: new UdpbroadcastrelayApi(this.http),
      vnstat: new VnstatApi(this.http),
      wazuhagent: new WazuhagentApi(this.http),
      wol: new WolApi(this.http),
      zabbixagent: new ZabbixagentApi(this.http),
      zabbixproxy: new ZabbixproxyApi(this.http),
      zerotier: new ZerotierApi(this.http),
    };
  }

  /**
   * Test the connection to the OPNsense API
   */
  async testConnection() {
    try {
      await this.core.systemStatus();
      return { success: true, message: 'Connection successful' };
    } catch (error) {
      return { 
        success: false, 
        message: error instanceof Error ? error.message : 'Connection failed' 
      };
    }
  }
}

// Default export
export default OPNsenseClient;
