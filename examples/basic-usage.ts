/**
 * Basic example showing how to use the OPNsense API SDK with new module structure
 */
import { OPNsenseClient } from '../src/index';

async function main() {
  // Initialize the client
  const client = new OPNsenseClient({
    baseUrl: 'https://192.168.1.1', // Replace with your OPNsense URL
    apiKey: 'your-api-key',         // Replace with your API key
    apiSecret: 'your-api-secret',   // Replace with your API secret
    verifySsl: false,               // Set to true for production
    debug: true                     // Enable debug logging
  });

  try {
    // Test connection
    console.log('Testing connection...');
    const isConnected = await client.testConnection();
    if (!isConnected) {
      console.error('Failed to connect to OPNsense API');
      return;
    }
    console.log('✅ Connected to OPNsense API');

    // Get system status (core module)
    console.log('\n📊 Getting system status...');
    const status = await client.system.getStatus();
    console.log('System uptime:', status.data.uptime);
    console.log('Load average:', status.data.load);

    // Get firmware info (core module)
    console.log('\n🔧 Getting firmware info...');
    try {
      const firmware = await client.firmware.getInfo();
      console.log('OPNsense version:', firmware.data.product_version);
    } catch (error) {
      console.log('Firmware info not accessible (permission required)');
    }

    // Search firewall rules (core module)
    console.log('\n🔥 Searching firewall rules...');
    const rules = await client.firewall.rules.search({
      searchPhrase: '',
      rowCount: 5
    });
    console.log(`Found ${rules.data.rowCount} firewall rules`);
    
    if (rules.data.rows?.length > 0) {
      console.log('First rule:', {
        description: rules.data.rows[0].description,
        action: rules.data.rows[0].action,
        enabled: rules.data.rows[0].enabled
      });
    }

    // Get interfaces (core module)
    console.log('\n🌐 Getting interface information...');
    const interfaces = await client.interfaces.getInterfacesInfo();
    console.log('Available interfaces:', Object.keys(interfaces.data));

    // Get captive portal zones (core module)
    console.log('\n🏨 Getting Captive Portal zones...');
    try {
      const zones = await client.captivePortal.getZones();
      console.log('Captive Portal zones:', zones.data);
    } catch (error) {
      console.log('Captive Portal zones not accessible (may require configuration)');
    }

    // Check available plugins
    console.log('\n🔌 Checking available plugins...');
    const availablePlugins = await client.getAvailablePlugins();
    console.log('Available plugins:', availablePlugins);

    // Test WireGuard plugin if available
    const hasWireGuard = await client.isPluginAvailable('wireGuard');
    if (hasWireGuard) {
      console.log('\n🔒 WireGuard plugin is available, getting status...');
      try {
        const wgStatus = await client.plugins.wireGuard.getStatus();
        console.log('WireGuard status:', wgStatus.data);
      } catch (error) {
        console.log('WireGuard status not accessible');
      }
    } else {
      console.log('\n🔒 WireGuard plugin not available or not installed');
    }

    // Test Nginx plugin if available
    const hasNginx = await client.isPluginAvailable('nginx');
    if (hasNginx) {
      console.log('\n🌐 Nginx plugin is available, getting status...');
      try {
        const nginxStatus = await client.plugins.nginx.getStatus();
        console.log('Nginx status:', nginxStatus.data);
      } catch (error) {
        console.log('Nginx status not accessible');
      }
    } else {
      console.log('\n🌐 Nginx plugin not available or not installed');
    }

    // Search services (core module)
    console.log('\n⚙️ Searching services...');
    const services = await client.service.search({
      searchPhrase: 'ssh',
      rowCount: 3
    });
    console.log('SSH-related services:', services.data.rows?.map(s => s.name));

    // Get system health summary (core modules)
    console.log('\n🏥 Getting system health...');
    const health = await client.getSystemHealth();
    console.log('System health summary collected');

    console.log('\n🎉 Basic usage example completed successfully!');

  } catch (error) {
    console.error('❌ Error occurred:', error.message);
    if (error.status) {
      console.error('HTTP Status:', error.status);
    }
  }
}

// Run the example
main().catch(console.error);
