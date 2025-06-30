#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const typescriptDir = path.join(__dirname, '../typescript');
const coreDir = path.join(typescriptDir, 'core');
const pluginsDir = path.join(typescriptDir, 'plugins');
const utilitiesDir = path.join(typescriptDir, 'utilities');
const srcDir = path.join(__dirname, '../src');

// Get list of modules in a directory
function getModules(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter(file => file.endsWith('.ts'))
    .map(file => file.replace('.ts', ''))
    .sort();
}

// Generate build config
function generateBuildConfig(coreModules, pluginModules, utilityModules) {
  // Define required modules that cannot be disabled
  const requiredCoreModules = ['core', 'auth', 'firewall', 'interfaces'];
  const requiredUtilityModules = ['keygen'];

  const buildConfig = {
    description: 'Build configuration for OPNsense TypeScript SDK',
    generated: new Date().toISOString(),
    note: 'Required modules (core, auth, firewall, interfaces, keygen) are always included and not configurable',
    modules: {
      core: {},
      plugins: {},
      utilities: {},
    },
  };

  // Add core modules (excluding required ones)
  for (const module of coreModules) {
    if (!requiredCoreModules.includes(module)) {
      buildConfig.modules.core[module] = {
        include: true,
        description: `Core ${module} module`,
      };
    }
  }

  // Add all plugin modules (none are required)
  for (const module of pluginModules) {
    buildConfig.modules.plugins[module] = {
      include: true,
      description: `Plugin ${module} module`,
    };
  }

  // Add utility modules (excluding required ones)
  for (const module of utilityModules) {
    if (!requiredUtilityModules.includes(module)) {
      buildConfig.modules.utilities[module] = {
        include: true,
        description: `Utility ${module} module`,
      };
    }
  }

  return buildConfig;
}

// Main function
async function main() {
  // Get all modules
  const coreModules = getModules(coreDir);
  const pluginModules = getModules(pluginsDir);
  const utilityModules = getModules(utilitiesDir);

  // Generate build config
  const buildConfig = generateBuildConfig(coreModules, pluginModules, utilityModules);

  // Ensure src directory exists
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
  }

  // Write build config file
  const buildConfigPath = path.join(srcDir, 'build-config.json');
  fs.writeFileSync(buildConfigPath, JSON.stringify(buildConfig, null, 2), 'utf-8');

  // Generate markdown content
  let markdown = '# OPNsense TypeScript API Client - Intermediate Stage Modules\n\n';

  // Add generation timestamp

  // Add overview
  markdown += '## Overview\n\n';
  markdown += 'This directory contains TypeScript API client modules for interacting with the OPNsense firewall API. ';
  markdown +=
    'The modules are automatically generated from the OPNsense API documentation and provide type-safe methods for all available endpoints.\n\n';

  // Add installation section
  markdown += '## Installation\n\n';
  markdown += 'To use these modules in your project:\n\n';
  markdown += '```bash\n';
  markdown += 'yarn add axios\n';
  markdown += '```\n\n';

  // Add usage section
  markdown += '## Usage\n\n';
  markdown += '### Basic Example\n\n';
  markdown += '```typescript\n';
  markdown += "import { Firewall } from './core/firewall';\n\n";
  markdown += '// Initialize the client\n';
  markdown += 'const firewall = new Firewall({\n';
  markdown += "  baseURL: 'https://your-opnsense-host',\n";
  markdown += '  auth: {\n';
  markdown += "    username: 'your-api-key',\n";
  markdown += "    password: 'your-api-secret'\n";
  markdown += '  }\n';
  markdown += '});\n\n';
  markdown += '// Use the client\n';
  markdown += 'const aliases = await firewall.alias.searchItem();\n';
  markdown += 'console.log(aliases);\n';
  markdown += '```\n\n';

  // Add authentication section
  markdown += '### Authentication\n\n';
  markdown += 'All modules require API credentials. You can obtain these from your OPNsense web interface:\n\n';
  markdown += '1. Navigate to System → Access → Users\n';
  markdown += '2. Create or edit a user\n';
  markdown += '3. Under "API keys", click the + button to generate a new key/secret pair\n\n';

  // Add module structure section
  markdown += '## Module Structure\n\n';
  markdown += 'The TypeScript modules are organized into three categories:\n\n';
  markdown += '- **Core Modules**: Essential OPNsense functionality\n';
  markdown += '- **Plugin Modules**: Extended functionality through OPNsense plugins\n';
  markdown += '- **Utility Modules**: Helper utilities for API operations\n\n';

  // Add core modules section
  markdown += `## Core Modules (${coreModules.length})\n\n`;
  markdown += 'Core modules provide access to built-in OPNsense functionality:\n\n';

  // Create a table for core modules
  markdown += '| Module | Description | Import |\n';
  markdown += '|--------|-------------|--------|\n';

  const coreDescriptions = {
    auth: 'Authentication and authorization management',
    captiveportal: 'Captive portal configuration and management',
    core: 'Core system functions and settings',
    cron: 'Cron job scheduling and management',
    dhcpv4: 'DHCPv4 server configuration',
    dhcpv6: 'DHCPv6 server configuration',
    dhcrelay: 'DHCP relay service configuration',
    diagnostics: 'System diagnostics and troubleshooting tools',
    dnsmasq: 'DNS forwarder configuration',
    firewall: 'Firewall rules, aliases, and NAT configuration',
    firmware: 'Firmware updates and package management',
    ids: 'Intrusion Detection System (IDS) configuration',
    interfaces: 'Network interface configuration',
    ipsec: 'IPsec VPN configuration',
    kea: 'Kea DHCP server configuration',
    monit: 'Service monitoring configuration',
    openvpn: 'OpenVPN server and client configuration',
    routes: 'Static route configuration',
    routing: 'Dynamic routing protocols configuration',
    syslog: 'System logging configuration',
    trafficshaper: 'Traffic shaping and QoS configuration',
    trust: 'Certificate and trust store management',
    unbound: 'DNS resolver configuration',
    wireguard: 'WireGuard VPN configuration',
  };

  for (const module of coreModules) {
    const description = coreDescriptions[module] || 'OPNsense core module';
    const className = module.charAt(0).toUpperCase() + module.slice(1);
    markdown += `| ${module} | ${description} | \`import { ${className} } from './core/${module}'\` |\n`;
  }

  // Add plugin modules section
  markdown += `\n## Plugin Modules (${pluginModules.length})\n\n`;
  markdown += 'Plugin modules provide access to optional OPNsense plugins:\n\n';

  // Create a table for plugin modules (showing first 20)
  markdown += '| Module | Description | Import |\n';
  markdown += '|--------|-------------|--------|\n';

  const pluginDescriptions = {
    acmeclient: "ACME protocol client for Let's Encrypt certificates",
    apcupsd: 'APC UPS monitoring daemon',
    bind: 'BIND DNS server',
    caddy: 'Caddy web server',
    chrony: 'Chrony NTP daemon',
    cicap: 'C-ICAP server for content adaptation',
    clamav: 'ClamAV antivirus',
    collectd: 'System statistics collection daemon',
    crowdsec: 'CrowdSec collaborative security',
    haproxy: 'HAProxy load balancer',
    nginx: 'Nginx web server and reverse proxy',
    ntopng: 'Network traffic analysis',
    openvpn: 'OpenVPN client/server',
    postfix: 'Postfix mail server',
    proxy: 'Proxy server configuration',
    quagga: 'Quagga routing suite',
    redis: 'Redis in-memory data store',
    stunnel: 'SSL encryption wrapper',
    tailscale: 'Tailscale VPN',
    telegraf: 'Metrics collection agent',
    tor: 'Tor anonymity network',
    wireguard: 'WireGuard VPN',
    zerotier: 'ZeroTier virtual networking',
  };

  // Show first 20 plugins in table
  const displayPlugins = pluginModules.slice(0, 20);
  for (const module of displayPlugins) {
    const description = pluginDescriptions[module] || 'OPNsense plugin module';
    const className = module.charAt(0).toUpperCase() + module.slice(1);
    markdown += `| ${module} | ${description} | \`import { ${className} } from './plugins/${module}'\` |\n`;
  }

  if (pluginModules.length > 20) {
    markdown += `\n*... and ${pluginModules.length - 20} more plugin modules*\n`;
  }

  // Add complete list of all plugins
  markdown += '\n### Complete Plugin List\n\n';
  markdown += pluginModules.join(', ') + '\n';

  // Add utility modules section
  markdown += `\n## Utility Modules (${utilityModules.length})\n\n`;
  markdown += 'Utility modules provide helper functions:\n\n';

  markdown += '| Module | Description | Import |\n';
  markdown += '|--------|-------------|--------|\n';

  for (const module of utilityModules) {
    const className = module.charAt(0).toUpperCase() + module.slice(1);
    markdown += `| ${module} | API key generation utility | \`import { ${className} } from './utilities/${module}'\` |\n`;
  }

  // Add build configuration section
  markdown += '\n## Build Configuration\n\n';
  markdown +=
    'The SDK uses a build configuration file (`src/build-config.json`) to control which modules are included when building. ';
  markdown += 'Each optional module has an `include` flag that can be set to `true` or `false`.\n\n';
  markdown += '**Required modules** (always included):\n';
  markdown += '- `core` - Essential core functionality\n';
  markdown += '- `auth` - Authentication and authorization\n';
  markdown += '- `firewall` - Basic firewall operations\n';
  markdown += '- `interfaces` - Network interface management\n';
  markdown += '- `keygen` - API key generation utility\n\n';
  markdown += '**Optional modules** can be configured:\n\n';
  markdown += '```json\n';
  markdown += '{\n';
  markdown += '  "modules": {\n';
  markdown += '    "core": {\n';
  markdown += '      "diagnostics": { "include": true },\n';
  markdown += '      "firmware": { "include": false }\n';
  markdown += '    },\n';
  markdown += '    "plugins": {\n';
  markdown += '      "nginx": { "include": true },\n';
  markdown += '      "haproxy": { "include": false }\n';
  markdown += '    }\n';
  markdown += '  }\n';
  markdown += '}\n';
  markdown += '```\n\n';
  markdown +=
    'This allows you to create custom builds with only the modules you need while ensuring essential functionality is always available.\n\n';

  // Add common patterns section
  markdown += '## Common Patterns\n\n';
  markdown += '### Error Handling\n\n';
  markdown += '```typescript\n';
  markdown += 'try {\n';
  markdown += '  const result = await firewall.alias.searchItem();\n';
  markdown += '} catch (error) {\n';
  markdown += '  if (error.response) {\n';
  markdown += '    // API returned an error response\n';
  markdown += "    console.error('API Error:', error.response.status, error.response.data);\n";
  markdown += '  } else {\n';
  markdown += '    // Network or other error\n';
  markdown += "    console.error('Error:', error.message);\n";
  markdown += '  }\n';
  markdown += '}\n';
  markdown += '```\n\n';

  markdown += '### Working with UUIDs\n\n';
  markdown += 'Many endpoints require UUIDs for specific resources:\n\n';
  markdown += '```typescript\n';
  markdown += '// Get all items\n';
  markdown += 'const items = await firewall.alias.searchItem();\n\n';
  markdown += '// Get specific item by UUID\n';
  markdown += 'const uuid = items.rows[0].uuid;\n';
  markdown += 'const item = await firewall.alias.getItem(uuid);\n\n';
  markdown += '// Update item\n';
  markdown += "await firewall.alias.setItem(uuid, { description: 'Updated' });\n\n";
  markdown += '// Delete item\n';
  markdown += 'await firewall.alias.delItem(uuid);\n';
  markdown += '```\n\n';

  markdown += '### Applying Changes\n\n';
  markdown += 'Many modules require applying changes after modifications:\n\n';
  markdown += '```typescript\n';
  markdown += '// Make changes\n';
  markdown += "await firewall.alias.addItem({ name: 'test', type: 'host' });\n\n";
  markdown += '// Apply configuration\n';
  markdown += 'await firewall.alias.reconfigure();\n';
  markdown += '```\n\n';

  // Add type safety section
  markdown += '## Type Safety\n\n';
  markdown += 'All modules include TypeScript type definitions for:\n\n';
  markdown += '- Request parameters\n';
  markdown += '- Response data structures\n';
  markdown += '- Method signatures\n\n';
  markdown += 'This provides compile-time type checking and IDE autocomplete support.\n\n';

  // Add regeneration section
  markdown += '## Regenerating Modules\n\n';
  markdown += 'These modules are automatically generated. To regenerate them:\n\n';
  markdown += '```bash\n';
  markdown += '# Crawl the latest API documentation\n';
  markdown += 'cd crawler && yarn start\n\n';
  markdown += '# Generate TypeScript modules\n';
  markdown += 'yarn generate:typescript:core\n';
  markdown += 'yarn generate:typescript:plugin\n';
  markdown += '```\n\n';

  // Add contributing section
  markdown += '## Contributing\n\n';
  markdown += 'Since these modules are auto-generated, manual edits will be overwritten. ';
  markdown += 'To make changes:\n\n';
  markdown += '1. Update the generator scripts in `generators/`\n';
  markdown += '2. Regenerate the modules\n';
  markdown += '3. Test your changes\n';
  markdown += '4. Submit a pull request\n\n';

  // Add license section
  markdown += '## License\n\n';
  markdown +=
    'These modules are generated from the OPNsense API documentation and are subject to the same license terms.\n';

  // Write to file
  const outputPath = path.join(typescriptDir, 'README.md');
  fs.writeFileSync(outputPath, markdown, 'utf-8');

  console.log(`\nTypeScript README generated successfully!`);
  console.log(`Output: ${outputPath}`);
  console.log(`\nBuild configuration generated successfully!`);
  console.log(`Output: ${buildConfigPath}`);
  console.log(`\nDocumented:`);
  console.log(`- ${coreModules.length} core modules`);
  console.log(`- ${pluginModules.length} plugin modules`);
  console.log(`- ${utilityModules.length} utility modules`);
}

// Run the script
main().catch(console.error);
