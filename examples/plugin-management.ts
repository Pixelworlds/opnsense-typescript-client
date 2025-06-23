/**
 * Plugin management example showing how to work with OPNsense plugins
 */
import { OPNsenseClient } from '../src/index';

async function pluginExample() {
  const client = new OPNsenseClient({
    baseUrl: 'https://192.168.1.1',
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    verifySsl: false,
    debug: true
  });

  try {
    console.log('🔌 OPNsense Plugin Management Example');
    console.log('=====================================');

    // Check all available plugins
    console.log('\n📋 Checking available plugins...');
    const availablePlugins = await client.getAvailablePlugins();
    console.log('Available plugins:', availablePlugins);

    if (availablePlugins.length === 0) {
      console.log('⚠️  No plugins appear to be installed or accessible.');
      console.log('Make sure you have plugins installed and API access configured.');
      return;
    }

    // WireGuard Plugin Example
    if (availablePlugins.includes('wireGuard')) {
      console.log('\n🔒 WireGuard Plugin Management');
      console.log('------------------------------');

      // Get WireGuard general settings
      const wgGeneral = await client.plugins.wireGuard.getGeneral();
      console.log('WireGuard enabled:', wgGeneral.data.general?.enabled);

      // Search WireGuard servers
      const servers = await client.plugins.wireGuard.searchServers();
      console.log(`Found ${servers.data.rowCount} WireGuard servers`);

      // Search WireGuard clients
      const clients = await client.plugins.wireGuard.searchClients();
      console.log(`Found ${clients.data.rowCount} WireGuard clients`);

      // Get service status
      try {
        const status = await client.plugins.wireGuard.getStatus();
        console.log('WireGuard service status:', status.data);
      } catch (error) {
        console.log('WireGuard service not running or accessible');
      }
    }

    // Nginx Plugin Example
    if (availablePlugins.includes('nginx')) {
      console.log('\n🌐 Nginx Plugin Management');
      console.log('---------------------------');

      // Get Nginx configuration
      const nginxConfig = await client.plugins.nginx.getConfig();
      console.log('Nginx configuration loaded');

      // Search HTTP servers
      const httpServers = await client.plugins.nginx.searchHttpServers();
      console.log(`Found ${httpServers.data.rowCount} HTTP servers`);

      // Test configuration
      try {
        const configTest = await client.plugins.nginx.testConfig();
        console.log('Nginx config test result:', configTest.data);
      } catch (error) {
        console.log('Nginx config test not available');
      }

      // Get access logs (if available)
      try {
        const accessLogs = await client.plugins.nginx.getAccessLogs();
        console.log('Access logs retrieved');
      } catch (error) {
        console.log('Access logs not available');
      }
    }

    // HAProxy Plugin Example
    if (availablePlugins.includes('haproxy')) {
      console.log('\n⚖️ HAProxy Plugin Management');
      console.log('-----------------------------');

      // Get HAProxy configuration
      const haproxyConfig = await client.plugins.haproxy.getConfig();
      console.log('HAProxy configuration loaded');

      // Search backends
      const backends = await client.plugins.haproxy.searchBackends();
      console.log(`Found ${backends.data.rowCount} backends`);

      // Search frontends
      const frontends = await client.plugins.haproxy.searchFrontends();
      console.log(`Found ${frontends.data.rowCount} frontends`);

      // Test configuration
      try {
        const configTest = await client.plugins.haproxy.configTest();
        console.log('HAProxy config test result:', configTest.data);
      } catch (error) {
        console.log('HAProxy config test not available');
      }

      // Get statistics
      try {
        const stats = await client.plugins.haproxy.getStatistics();
        console.log('HAProxy statistics retrieved');
      } catch (error) {
        console.log('HAProxy statistics not available');
      }
    }

    // BIND DNS Plugin Example
    if (availablePlugins.includes('bind')) {
      console.log('\n🌍 BIND DNS Plugin Management');
      console.log('------------------------------');

      // Get BIND general settings
      const bindGeneral = await client.plugins.bind.getGeneral();
      console.log('BIND general settings loaded');

      // Search primary domains
      const primaryDomains = await client.plugins.bind.searchPrimaryDomains();
      console.log(`Found ${primaryDomains.data.rowCount} primary domains`);

      // Search DNS records
      const dnsRecords = await client.plugins.bind.searchRecords();
      console.log(`Found ${dnsRecords.data.rowCount} DNS records`);

      // Get service status
      try {
        const status = await client.plugins.bind.getStatus();
        console.log('BIND service status:', status.data);
      } catch (error) {
        console.log('BIND service not running or accessible');
      }
    }

    // Caddy Plugin Example
    if (availablePlugins.includes('caddy')) {
      console.log('\n🚀 Caddy Plugin Management');
      console.log('---------------------------');

      // Get Caddy general settings
      const caddyGeneral = await client.plugins.caddy.getGeneral();
      console.log('Caddy general settings loaded');

      // Search reverse proxies
      const reverseProxies = await client.plugins.caddy.searchReverseProxies();
      console.log(`Found ${reverseProxies.data.rowCount} reverse proxies`);

      // Validate configuration
      try {
        const validation = await client.plugins.caddy.validate();
        console.log('Caddy config validation:', validation.data);
      } catch (error) {
        console.log('Caddy config validation not available');
      }

      // Get generated Caddyfile
      try {
        const caddyfile = await client.plugins.caddy.getCaddyfile();
        console.log('Generated Caddyfile retrieved');
      } catch (error) {
        console.log('Caddyfile not available');
      }
    }

    // Monitoring Plugins Example
    if (availablePlugins.includes('netdata')) {
      console.log('\n📊 Netdata Monitoring Plugin');
      console.log('-----------------------------');

      const netdataConfig = await client.plugins.netdata.getGeneral();
      console.log('Netdata configuration loaded');

      try {
        const status = await client.plugins.netdata.getStatus();
        console.log('Netdata service status:', status.data);
      } catch (error) {
        console.log('Netdata service not running');
      }
    }

    if (availablePlugins.includes('crowdsec')) {
      console.log('\n🛡️ CrowdSec Security Plugin');
      console.log('----------------------------');

      const crowdsecGeneral = await client.plugins.crowdsec.getGeneral();
      console.log('CrowdSec configuration loaded');

      try {
        const alerts = await client.plugins.crowdsec.getAlerts();
        console.log('CrowdSec alerts retrieved');
      } catch (error) {
        console.log('CrowdSec alerts not available');
      }

      try {
        const decisions = await client.plugins.crowdsec.getDecisions();
        console.log('CrowdSec decisions retrieved');
      } catch (error) {
        console.log('CrowdSec decisions not available');
      }
    }

    console.log('\n🎉 Plugin management example completed successfully!');
    console.log('\nRemember:');
    console.log('- Core modules are always available');
    console.log('- Plugin modules require the plugin to be installed');
    console.log('- Use client.isPluginAvailable() to check before using plugins');
    console.log('- Some plugin features may require additional permissions');

  } catch (error) {
    console.error('❌ Error in plugin management:', error.message);
    if (error.status) {
      console.error('HTTP Status:', error.status);
    }
    if (error.data) {
      console.error('Response data:', error.data);
    }
  }
}

// Export function for use
export { pluginExample };

// Run if executed directly
if (require.main === module) {
  pluginExample().catch(console.error);
}
