# OPNsense TypeScript SDK

A comprehensive TypeScript SDK for the OPNsense API, providing type-safe access to all core and plugin modules.

## Documentation

This SDK includes comprehensive documentation across multiple files:

- [OPNsense Documentation Crawler](https://github.com/Pixelworlds/opnsense-typescript-client/tree/master/crawler/README.md) - Automated API documentation extraction
- [OPNsense Core Modules API Documentation](https://github.com/Pixelworlds/opnsense-typescript-client/tree/master/docs/CORE.md) - Complete core modules reference
- [OPNsense Plugin Modules API Documentation](https://github.com/Pixelworlds/opnsense-typescript-client/tree/master/docs/PLUGINS.md) - Complete plugin modules reference
- [WireGuard Key Generation](https://github.com/Pixelworlds/opnsense-typescript-client/tree/master/docs/KEYGEN.md) - Comprehensive keygen utility documentation
- [Generators](https://github.com/Pixelworlds/opnsense-typescript-client/tree/master/generators/README.md) - Code generation tools and scripts
- [OPNsense TypeScript API Client - Intermediate Stage Modules](https://github.com/Pixelworlds/opnsense-typescript-client/tree/master/typescript/README.md) - Intermediate development modules

## Installation

```bash
yarn add opnsense-typescript-client
```

## Quick Start

```typescript
import { OPNsenseClient } from 'opnsense-typescript-client';

const client = new OPNsenseClient({
  baseUrl: 'https://your-opnsense.local',
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
  verifySsl: false, // Set to true in production
});

// Test connection
const result = await client.testConnection();
console.log(result);

// Use core modules
const interfaces = await client.interfaces.get();
const firewallRules = await client.firewall.filterGet();

// Use plugin modules
const caddyStatus = await client.plugins.caddy.serviceStatus();
const nginxConfig = await client.plugins.nginx.generalGet();
```

## Features

- **Type-safe**: Full TypeScript support with detailed type definitions
- **Tree-shakable**: Import only the modules you need
- **Secure**: Built-in authentication and SSL handling
- **Complete**: Covers all 24 core and 64 plugin modules
- **Modern**: Built with async/await and modern JavaScript features

## Configuration

### Basic Configuration

```typescript
import { OPNsenseClient } from 'opnsense-typescript-client';

const client = new OPNsenseClient({
  baseUrl: 'https://opnsense.local', // Do not include '/api' - it's added automatically
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
  verifySsl: true, // Enable SSL verification in production
  timeout: 30000, // Request timeout in milliseconds
});
```

**Important**: The `baseUrl` should only include the protocol and hostname (e.g., `https://opnsense.local`). The `/api` segment is automatically appended by the SDK - do not include it in your base URL.

### Advanced Configuration

```typescript
const client = new OPNsenseClient({
  baseUrl: 'https://opnsense.local',
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
  verifySsl: true,
  timeout: 30000,
  // Additional axios configuration
  httpsAgent: new https.Agent({
    rejectUnauthorized: false, // Only for self-signed certificates
  }),
});
```

## Authentication

The SDK uses HTTP Basic Authentication with API keys. To obtain API credentials:

1. Log into your OPNsense web interface
2. Navigate to **System → Access → Users**
3. Create or edit a user account
4. Under **API keys**, click the **+** button to generate a new key/secret pair
5. Use the generated key as `apiKey` and secret as `apiSecret`

## Core Modules

The SDK provides access to 24 core OPNsense modules:

### System & Configuration

- **core** - Core system functions and settings
- **firmware** - Firmware updates and package management
- **auth** - Authentication and authorization management
- **trust** - Certificate and trust store management

### Networking

- **interfaces** - Network interface configuration
- **routes** - Static route configuration
- **routing** - Dynamic routing protocols configuration
- **dhcpv4** - DHCPv4 server configuration
- **dhcpv6** - DHCPv6 server configuration
- **dhcrelay** - DHCP relay service configuration
- **kea** - Kea DHCP server configuration

### DNS Services

- **dnsmasq** - DNS forwarder configuration
- **unbound** - DNS resolver configuration

### Security & Firewall

- **firewall** - Firewall rules, aliases, and NAT configuration
- **ids** - Intrusion Detection System (IDS) configuration
- **captiveportal** - Captive portal configuration and management

### VPN

- **ipsec** - IPsec VPN configuration
- **openvpn** - OpenVPN server and client configuration
- **wireguard** - WireGuard VPN configuration

### Monitoring & Logging

- **diagnostics** - System diagnostics and troubleshooting tools
- **syslog** - System logging configuration
- **monit** - Service monitoring configuration

### Scheduling & Traffic

- **cron** - Cron job scheduling and management
- **trafficshaper** - Traffic shaping and QoS configuration

## Plugin Modules

The SDK supports 64 plugin modules organized by category:

### Web Services & Reverse Proxy

- **caddy** - Modern web server with automatic HTTPS
- **nginx** - Web server and reverse proxy
- **haproxy** - Load balancer with statistics

### Security & Authentication

- **acmeclient** - ACME/Let's Encrypt certificate management
- **clamav** - Antivirus scanning
- **crowdsec** - Collaborative security engine
- **freeradius** - RADIUS authentication server

### VPN & Networking

- **tailscale** - Mesh VPN networking
- **zerotier** - Virtual network management
- **softether** - SoftEther VPN server
- **openconnect** - OpenConnect VPN client

### Monitoring & Metrics

- **netdata** - Real-time performance monitoring
- **collectd** - System statistics collection
- **telegraf** - Metrics collection with plugins
- **zabbixagent** - Zabbix monitoring agent

### And many more...

For a complete list of all plugin modules, see the [Plugin Modules Documentation](https://github.com/Pixelworlds/opnsense-typescript-client/tree/master/docs/PLUGINS.md).

## Usage Examples

### Firewall Management

```typescript
// Get all firewall aliases
const aliases = await client.firewall.alias.searchItem();

// Add a new alias
const newAlias = await client.firewall.alias.addItem({
  name: 'web_servers',
  type: 'host',
  content: '192.168.1.100,192.168.1.101',
  description: 'Web server hosts',
});

// Apply firewall configuration
await client.firewall.alias.reconfigure();
```

### Interface Configuration

```typescript
// Get all interfaces
const interfaces = await client.interfaces.get();

// Get specific interface configuration
const lanConfig = await client.interfaces.getInterface('lan');

// Update interface settings
await client.interfaces.setInterface('lan', {
  enable: true,
  ipaddr: '192.168.1.1',
  subnet: '24',
  descr: 'LAN Interface',
});
```

### VPN Management

```typescript
// WireGuard configuration
const wgStatus = await client.wireguard.serviceStatus();
const wgConfig = await client.wireguard.generalGet();

// OpenVPN management
const ovpnInstances = await client.openvpn.instancesGet();
await client.openvpn.instanceStart('server1');
```

### Plugin Management

```typescript
// Caddy web server
const caddyStatus = await client.plugins.caddy.serviceStatus();
const caddyConfig = await client.plugins.caddy.generalGet();

// Nginx configuration
const nginxUpstreams = await client.plugins.nginx.upstreamGet();
const nginxLocations = await client.plugins.nginx.locationGet();

// HAProxy load balancer
const haproxyStats = await client.plugins.haproxy.statsGet();
const haproxyServers = await client.plugins.haproxy.serverGet();
```

## Error Handling

```typescript
try {
  const result = await client.firewall.alias.searchItem();
  console.log('Success:', result.data);
} catch (error) {
  if (error.response) {
    // API returned an error response
    console.error('API Error:', error.response.status, error.response.data);
  } else if (error.request) {
    // Network error
    console.error('Network Error:', error.message);
  } else {
    // Other error
    console.error('Error:', error.message);
  }
}
```

## Working with UUIDs

Many OPNsense API endpoints work with UUIDs for resource identification:

```typescript
// Get all items to find UUIDs
const items = await client.firewall.alias.searchItem();

// Work with specific item by UUID
const uuid = items.rows[0].uuid;
const item = await client.firewall.alias.getItem(uuid);

// Update item
await client.firewall.alias.setItem(uuid, {
  description: 'Updated description',
});

// Delete item
await client.firewall.alias.delItem(uuid);
```

## Service Management

Most modules support standard service operations:

```typescript
// Check service status
const status = await client.plugins.nginx.serviceStatus();

// Start/stop/restart services
await client.plugins.nginx.serviceStart();
await client.plugins.nginx.serviceStop();
await client.plugins.nginx.serviceRestart();

// Reload configuration
await client.plugins.nginx.serviceReload();

// Apply configuration changes
await client.plugins.nginx.reconfigure();
```

## Postman Collections

Pre-built Postman collections are available for testing and exploring the API:

- **Core Modules**: `postman/OPNsense_Core_Modules_API_Collection.postman_collection.json`
- **Plugin Modules**: `postman/OPNsense_Plugin_Modules_API_Collection.postman_collection.json`

### Usage

1. Import the collections into Postman
2. Set up environment variables:
   - `opnsense_base_url` - Your OPNsense instance URL
   - `opnsense_api_key` - Your API key
   - `opnsense_secret_key` - Your API secret
3. Start making requests

The collections include all available endpoints with proper authentication and parameter placeholders.

## WireGuard Key Generation

The SDK includes a comprehensive WireGuard key generation utility. See the [WireGuard Key Generation documentation](https://github.com/Pixelworlds/opnsense-typescript-client/tree/master/docs/KEYGEN.md) for detailed usage examples and API reference.

## TypeScript Support

The SDK is built with TypeScript and provides full type definitions:

```typescript
import { OPNsenseClient, FirewallAlias, ApiResponse } from 'opnsense-typescript-client';

const client = new OPNsenseClient({
  baseUrl: 'https://opnsense.local',
  apiKey: 'key',
  apiSecret: 'secret',
});

// TypeScript will provide autocomplete and type checking
const aliases: ApiResponse<FirewallAlias[]> = await client.firewall.alias.searchItem();
```

## Build Configuration

The SDK supports selective module inclusion through build configuration. See the [Intermediate Stage Modules documentation](https://github.com/Pixelworlds/opnsense-typescript-client/tree/master/typescript/README.md) for details on customizing builds.

## Development

To contribute to the SDK or generate updated modules:

```bash
# Install dependencies
yarn install

# Build the SDK
yarn build

# Generate documentation
yarn generate:docs:core
yarn generate:docs:plugin

# Generate TypeScript modules
yarn generate:typescript:core
yarn generate:typescript:plugin

# Generate complete SDK
yarn generate:sdk

# Generate Postman collections
yarn generate:postman:core
yarn generate:postman:plugin
```

## Requirements

- Node.js 16+ or compatible runtime
- OPNsense 20.1+ with API access enabled
- Valid API key and secret

## License

MIT License - see LICENSE file for details.
