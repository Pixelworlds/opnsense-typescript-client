/**
 * Advanced example showing firewall management
 */
import { OPNsenseClient } from '../src/index';
import type { FirewallRule } from '../src/types';

async function firewallManagementExample() {
  const client = new OPNsenseClient({
    baseUrl: 'https://192.168.1.1',
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    verifySsl: false,
    debug: true
  });

  try {
    console.log('🔥 Firewall Management Example');
    console.log('================================');

    // 1. Create a backup before making changes
    console.log('\n📦 Creating configuration backup...');
    await client.createBackup();
    console.log('✅ Backup created');

    // 2. Search existing rules
    console.log('\n🔍 Searching existing firewall rules...');
    const existingRules = await client.firewall.rules.search({
      searchPhrase: 'example',
      rowCount: 10
    });
    console.log(`Found ${existingRules.data.rowCount} existing example rules`);

    // 3. Create a new firewall alias for web servers
    console.log('\n📝 Creating firewall alias...');
    const alias = await client.firewall.aliases.add({
      name: 'example_web_servers',
      type: 'host',
      content: ['192.168.1.10', '192.168.1.11'],
      description: 'Example web servers'
    });
    console.log('✅ Alias created:', alias.data.uuid);

    // 4. Add entries to the alias using utility functions
    console.log('\n➕ Adding entry to alias...');
    await client.firewall.aliasUtils.add('example_web_servers', {
      address: '192.168.1.12'
    });
    console.log('✅ Entry added to alias');

    // 5. Create firewall rules
    console.log('\n🛡️ Creating firewall rules...');
    
    // Allow HTTP traffic to web servers
    const httpRule: Partial<FirewallRule> = {
      enabled: true,
      action: 'pass',
      interface: 'lan',
      direction: 'in',
      ipprotocol: 'inet',
      protocol: 'tcp',
      source: 'any',
      destination: 'example_web_servers',
      destination_port: '80',
      description: 'Example: Allow HTTP to web servers',
      log: true
    };

    const httpRuleResult = await client.firewall.rules.add(httpRule);
    console.log('✅ HTTP rule created:', httpRuleResult.data.uuid);

    // Allow HTTPS traffic to web servers
    const httpsRule: Partial<FirewallRule> = {
      enabled: true,
      action: 'pass',
      interface: 'lan',
      direction: 'in',
      ipprotocol: 'inet',
      protocol: 'tcp',
      source: 'any',
      destination: 'example_web_servers',
      destination_port: '443',
      description: 'Example: Allow HTTPS to web servers',
      log: true
    };

    const httpsRuleResult = await client.firewall.rules.add(httpsRule);
    console.log('✅ HTTPS rule created:', httpsRuleResult.data.uuid);

    // 6. Apply firewall configuration
    console.log('\n🔄 Applying firewall configuration...');
    await client.firewall.apply();
    console.log('✅ Firewall configuration applied');

    // 7. Verify the rules were created
    console.log('\n✅ Verifying created rules...');
    const newRules = await client.firewall.rules.search({
      searchPhrase: 'Example:',
      rowCount: 10
    });
    console.log(`Found ${newRules.data.rowCount} example rules after creation`);

    // 8. List alias contents
    console.log('\n📋 Listing alias contents...');
    const aliasContents = await client.firewall.aliasUtils.list('example_web_servers');
    console.log('Alias contents:', aliasContents.data);

    // 9. Demonstrate rule modification
    console.log('\n✏️ Modifying HTTP rule...');
    await client.firewall.rules.update(httpRuleResult.data.uuid, {
      description: 'Example: Allow HTTP to web servers (Modified)',
      log: false // Disable logging
    });
    console.log('✅ Rule modified');

    // 10. Apply changes again
    console.log('\n🔄 Applying changes...');
    await client.firewall.apply();
    console.log('✅ Changes applied');

    console.log('\n🎉 Firewall management example completed successfully!');
    console.log('\nCreated resources:');
    console.log(`- Alias: example_web_servers (${alias.data.uuid})`);
    console.log(`- HTTP Rule: ${httpRuleResult.data.uuid}`);
    console.log(`- HTTPS Rule: ${httpsRuleResult.data.uuid}`);
    console.log('\n⚠️  Remember to clean up these example resources when done!');

  } catch (error) {
    console.error('❌ Error in firewall management:', error.message);
    if (error.status) {
      console.error('HTTP Status:', error.status);
    }
    if (error.data) {
      console.error('Response data:', error.data);
    }
  }
}

async function cleanupExample() {
  const client = new OPNsenseClient({
    baseUrl: 'https://192.168.1.1',
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    verifySsl: false,
    debug: true
  });

  try {
    console.log('🧹 Cleaning up example resources...');

    // Find and delete example rules
    const rules = await client.firewall.rules.search({
      searchPhrase: 'Example:',
      rowCount: 50
    });

    for (const rule of rules.data.rows || []) {
      console.log(`Deleting rule: ${rule.description}`);
      await client.firewall.rules.delete(rule.uuid);
    }

    // Find and delete example alias
    const aliases = await client.firewall.aliases.search({
      searchPhrase: 'example_web_servers'
    });

    for (const alias of aliases.data.rows || []) {
      console.log(`Deleting alias: ${alias.name}`);
      await client.firewall.aliases.delete(alias.uuid);
    }

    // Apply changes
    await client.firewall.apply();
    console.log('✅ Cleanup completed');

  } catch (error) {
    console.error('❌ Error during cleanup:', error.message);
  }
}

// Export functions for use
export { firewallManagementExample, cleanupExample };

// Run if executed directly
if (require.main === module) {
  const command = process.argv[2];
  
  if (command === 'cleanup') {
    cleanupExample().catch(console.error);
  } else {
    firewallManagementExample().catch(console.error);
  }
}
