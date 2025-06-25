# OPNsense TypeScript Client

A comprehensive TypeScript client for interacting with the OPNsense API. This client provides a clean, type-safe interface for managing your OPNsense firewall through code, supporting both browser and Node.js environments.

## Features

- 🔒 **Full TypeScript Support** - Complete type definitions for all API endpoints
- 🌐 **Universal Compatibility** - Works in both browser and Node.js environments
- 🛡️ **Comprehensive Coverage** - Supports all major OPNsense core modules and 62+ plugin modules
- ⚡ **Modern HTTP Client** - Built on the Fetch API with automatic retry and error handling
- 🎯 **Modular Architecture** - Organized by functionality with clear separation between core and plugin modules
- 📚 **Extensive Documentation** - Complete API reference with examples
- 🔧 **Flexible Configuration** - Support for custom headers, timeouts, and SSL settings

## Installation

Install the package from npm:

```bash
npm install @richard-stovall/opnsense-typescript-client
```

### Using npm
```bash
npm install @richard-stovall/opnsense-typescript-client
```

### Using yarn
```bash
yarn add @richard-stovall/opnsense-typescript-client
```

### Using pnpm
```bash
pnpm add @richard-stovall/opnsense-typescript-client
```

### Using bun
```bash
bun add @richard-stovall/opnsense-typescript-client
```

### TypeScript Support

This package includes comprehensive TypeScript definitions. Import types for better development experience:

```typescript
import { 
  OPNsenseClient, 
  type OPNsenseConfig, 
  type ApiResponse,
  type Firewall,
  type Core 
} from '@richard-stovall/opnsense-typescript-client';

// Configure with full type safety
const config: OPNsenseConfig = {
  baseUrl: 'https://192.168.1.1',
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
  verifySsl: false
};

// Get typed responses
const status: ApiResponse<Core.System.SystemStatus> = await client.system.getStatus();
```

## Quick Start

```typescript
import { OPNsenseClient } from '@richard-stovall/opnsense-typescript-client';

// Initialize the client
const client = new OPNsenseClient({
  baseUrl: 'https://192.168.1.1',
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
  verifySsl: false, // Set to true for production with valid certificates
  debug: true // Enable debug logging
});

// Core modules are always available
const status = await client.system.getStatus();

console.log('System uptime:', status.data.uptime);

// Plugin modules require the plugin to be installed
const hasWireGuard = await client.isPluginAvailable('wireGuard');

if (hasWireGuard) {
  const wgStatus = await client.plugins.wireGuard.getStatus();
  console.log('WireGuard status:', wgStatus.data);
}

// Firewall management
const rules = await client.firewall.rules.search({
  searchPhrase: 'ssh',
  rowCount: 50
});

await client.firewall.apply();
```

## Module Architecture

The SDK is organized into two main categories with complete refactored structure:

### Core Modules (25 modules - Always Available)

All core modules have been refactored into individual files for better maintainability:

- **`client.auth`** - User and group management
- **`client.backup`** - Configuration backup and restore  
- **`client.captivePortal`** - Guest network management
- **`client.core`** - Basic system operations
- **`client.cron`** - Scheduled task management
- **`client.dhcpv4`** - IPv4 DHCP service management
- **`client.dhcpv6`** - IPv6 DHCP service management
- **`client.dhcrelay`** - DHCP relay service management
- **`client.diagnostics`** - System monitoring, logs, traffic analysis
- **`client.dnsmasq`** - DNS and DHCP service management
- **`client.firewall`** - Rules, aliases, NAT configuration
- **`client.firmware`** - Firmware updates and package management
- **`client.ids`** - Intrusion Detection System management
- **`client.interfaces`** - Network interface management
- **`client.ipsec`** - IPsec VPN configuration
- **`client.kea`** - ISC Kea DHCP server management
- **`client.monit`** - Service monitoring and management
- **`client.openVPN`** - OpenVPN server and client management
- **`client.routes`** - Static route management
- **`client.routing`** - Dynamic routing protocols management
- **`client.service`** - System service control
- **`client.syslog`** - System logging management
- **`client.system`** - System information, reboot, halt
- **`client.trafficshaper`** - Bandwidth management and QoS
- **`client.trust`** - Certificate and CA management
- **`client.unbound`** - DNS resolver management
- **`client.wireguard`** - WireGuard VPN management (core)

### Plugin Modules (62 modules - Require Installation)

All plugin modules have been completely refactored into individual files. Each plugin requires the corresponding OPNsense plugin to be installed:

**Security & Authentication:**
- **`client.plugins.acmeclient`** - ACME/Let's Encrypt certificate management
- **`client.plugins.clamav`** - Antivirus scanning
- **`client.plugins.crowdsec`** - Security engine and threat detection
- **`client.plugins.freeradius`** - RADIUS authentication server
- **`client.plugins.radsecproxy`** - RADIUS over TLS proxy
- **`client.plugins.rspamd`** - Advanced spam filtering
- **`client.plugins.tor`** - Anonymous networking

**Network & VPN:**
- **`client.plugins.bind`** - BIND DNS server
- **`client.plugins.dnscryptproxy`** - DNS encryption
- **`client.plugins.dyndns`** - Dynamic DNS updates
- **`client.plugins.ndproxy`** - IPv6 neighbor discovery proxy
- **`client.plugins.openconnect`** - OpenConnect VPN client
- **`client.plugins.shadowsocks`** - Secure proxy
- **`client.plugins.softether`** - SoftEther VPN server
- **`client.plugins.tailscale`** - Mesh VPN networking
- **`client.plugins.tayga`** - NAT64 translation
- **`client.plugins.tinc`** - Mesh VPN
- **`client.plugins.zerotier`** - Virtual network management

**Web Services & Proxy:**
- **`client.plugins.caddy`** - Modern web server with automatic HTTPS
- **`client.plugins.haproxy`** - Load balancer and high availability
- **`client.plugins.nginx`** - Web server and reverse proxy
- **`client.plugins.proxy`** - Web proxy (Squid)
- **`client.plugins.proxysso`** - Proxy SSO authentication
- **`client.plugins.sslh`** - SSL/SSH multiplexer
- **`client.plugins.stunnel`** - SSL tunneling

**Monitoring & Metrics:**
- **`client.plugins.collectd`** - System statistics collection
- **`client.plugins.netdata`** - Real-time performance monitoring
- **`client.plugins.netsnmp`** - SNMP agent
- **`client.plugins.nodeexporter`** - Prometheus metrics exporter
- **`client.plugins.ntopng`** - Network traffic monitoring
- **`client.plugins.telegraf`** - Metrics collection and reporting
- **`client.plugins.vnstat`** - Network statistics
- **`client.plugins.zabbixagent`** - Zabbix monitoring agent
- **`client.plugins.zabbixproxy`** - Zabbix monitoring proxy

**Infrastructure & Hardware:**
- **`client.plugins.apcupsd`** - APC UPS monitoring
- **`client.plugins.chrony`** - NTP time synchronization
- **`client.plugins.nut`** - Network UPS Tools
- **`client.plugins.smart`** - Disk health monitoring

**Routing & Load Balancing:**
- **`client.plugins.quagga`** - Dynamic routing protocols (BGP, OSPF, RIP)
- **`client.plugins.relayd`** - Load balancing and high availability

**Communication & VoIP:**
- **`client.plugins.maltrail`** - Malicious traffic detection
- **`client.plugins.mdnsrepeater`** - mDNS repeating
- **`client.plugins.postfix`** - Mail server
- **`client.plugins.siproxyd`** - SIP proxy for VoIP
- **`client.plugins.turnserver`** - NAT traversal for WebRTC

**Network Tools:**
- **`client.plugins.iperf`** - Network performance testing
- **`client.plugins.lldpd`** - Link Layer Discovery Protocol
- **`client.plugins.udpbroadcastrelay`** - UDP broadcast relay
- **`client.plugins.wol`** - Wake on LAN

**File Transfer & Services:**
- **`client.plugins.ftpproxy`** - FTP proxy
- **`client.plugins.tftp`** - TFTP server

**System Management:**
- **`client.plugins.puppetagent`** - Puppet configuration management
- **`client.plugins.qemuguestagent`** - QEMU guest agent
- **`client.plugins.wazuhagent`** - Security monitoring agent

**System Information & Diagnostics:**
- **`client.plugins.dechw`** - Hardware debugging
- **`client.plugins.diagnostics`** - Enhanced system diagnostics
- **`client.plugins.dmidecode`** - Hardware information
- **`client.plugins.hwprobe`** - Hardware probing

**Database & Storage:**
- **`client.plugins.redis`** - In-memory data structure store

**Development & Examples:**
- **`client.plugins.gridexample`** - Grid example plugin
- **`client.plugins.helloworld`** - Hello world example plugin

**Additional Services:**
- **`client.plugins.cicap`** - ICAP server
- **`client.plugins.muninnode`** - Munin monitoring node
- **`client.plugins.nrpe`** - Nagios remote plugin executor

## Configuration

### Basic Configuration

```typescript
const client = new OPNsenseClient({
  baseUrl: 'https://your-opnsense-instance',
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret'
});
```

### Advanced Configuration

```typescript
const client = new OPNsenseClient({
  baseUrl: 'https://your-opnsense-instance',
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
  verifySsl: true,
  timeout: 30000,
  headers: {
    'User-Agent': 'MyApp/1.0'
  },
  debug: false
});
```

## Usage Examples

### Core Module Usage

```typescript
// System Management
const status = await client.system.getStatus();
console.log('System uptime:', status.data.uptime);

// Firewall Management
const rules = await client.firewall.rules.search({
  searchPhrase: 'web',
  rowCount: 20
});

const newRule = await client.firewall.rules.add({
  enabled: true,
  action: 'pass',
  interface: 'lan',
  protocol: 'tcp',
  destination_port: '80,443',
  description: 'Allow web traffic'
});

await client.firewall.apply();

// DHCP Management
const dhcpConfig = await client.dhcpv4.getConfig();
const reservations = await client.dhcpv4.searchReservations();

// DNS Management
const unboundConfig = await client.unbound.getConfig();
const hostOverrides = await client.unbound.searchHostOverrides();

// IDS Management
const idsRules = await client.ids.searchRules();
await client.ids.updateRules();

// User Management
const user = await client.auth.users.add({
  username: 'newuser',
  email: 'user@example.com',
  full_name: 'New User',
  groups: ['admins']
});
```

### Plugin Module Usage

```typescript
// Check if plugins are available before using them
const availablePlugins = await client.getAvailablePlugins();
console.log('Available plugins:', availablePlugins);

// ACME Client for SSL certificates
if (await client.isPluginAvailable('acmeclient')) {
  const certificates = await client.plugins.acmeclient.searchCertificates();
  await client.plugins.acmeclient.issueCertificate('cert-uuid');
}

// Tailscale mesh VPN
if (await client.isPluginAvailable('tailscale')) {
  await client.plugins.tailscale.login();
  const peers = await client.plugins.tailscale.getPeers();
  const routes = await client.plugins.tailscale.getRoutes();
}

// Zabbix monitoring
if (await client.isPluginAvailable('zabbixagent')) {
  const agentInfo = await client.plugins.zabbixagent.getAgentInfo();
  await client.plugins.zabbixagent.testConnection();
}

// Redis database
if (await client.isPluginAvailable('redis')) {
  const info = await client.plugins.redis.getInfo();
  const stats = await client.plugins.redis.getStatistics();
  await client.plugins.redis.flushDatabase();
}

// Postfix mail server
if (await client.isPluginAvailable('postfix')) {
  const domains = await client.plugins.postfix.searchDomains();
  const queue = await client.plugins.postfix.getQueue();
  await client.plugins.postfix.flushQueue();
}

// HAProxy load balancer
if (await client.isPluginAvailable('haproxy')) {
  const backends = await client.plugins.haproxy.searchBackends();
  const stats = await client.plugins.haproxy.getStatistics();
  const configTest = await client.plugins.haproxy.configTest();
}
```

## Error Handling

The SDK provides comprehensive error handling with custom error types:

```typescript
import { OPNsenseApiError, ValidationError } from 'opnsense-typescript-client';

try {
  const status = await client.system.getStatus();
} catch (error) {
  if (error instanceof OPNsenseApiError) {
    console.error('API Error:', error.message);
    console.error('Status Code:', error.status);
    console.error('Response Data:', error.data);
  } else if (error instanceof ValidationError) {
    console.error('Validation Error:', error.message);
  } else {
    console.error('Unexpected Error:', error);
  }
}
```

## Plugin Management

### Checking Plugin Availability

```typescript
// Check if a specific plugin is available
const hasWireGuard = await client.isPluginAvailable('wireGuard');

// Get all available plugins
const plugins = await client.getAvailablePlugins();
console.log('Available plugins:', plugins);

// Conditional plugin usage
if (plugins.includes('nginx')) {
  await client.plugins.nginx.reconfigure();
}
```

## TypeScript Support

The SDK is built with TypeScript and provides complete type definitions:

```typescript
import type { 
  FirewallRule, 
  FirewallAlias, 
  SystemStatus,
  ApiResponse,
  SearchParams 
} from 'opnsense-typescript-client';

// Type-safe rule creation
const rule: FirewallRule = {
  enabled: true,
  action: 'pass', // TypeScript ensures valid values
  interface: 'lan',
  protocol: 'tcp',
  destination_port: '22',
  description: 'SSH access'
};

// Type-safe API responses
const response: ApiResponse<SystemStatus> = await client.system.getStatus();
```

## API Coverage

### Core API Coverage (✅ Complete - 25 modules)
All core modules have been completely refactored into individual files:
- ✅ System management (system.ts)
- ✅ Firmware and package management (firmware.ts)
- ✅ Firewall rules and aliases (firewall.ts)
- ✅ Diagnostics and monitoring (diagnostics.ts)
- ✅ Interface management (interfaces.ts)
- ✅ Service control (service.ts)
- ✅ User and group management (auth.ts)
- ✅ Certificate management (trust.ts)
- ✅ VPN (openvpn.ts, ipsec.ts, wireguard.ts)
- ✅ DHCP services (dhcpv4.ts, dhcpv6.ts, dhcrelay.ts, kea.ts)
- ✅ DNS services (dnsmasq.ts, unbound.ts)
- ✅ Security (ids.ts)
- ✅ Captive portal (captive-portal.ts)
- ✅ Scheduled tasks (cron.ts)
- ✅ Configuration backup (backup.ts)
- ✅ Service monitoring (monit.ts)
- ✅ Routing (routes.ts, routing.ts)
- ✅ Traffic shaping (trafficshaper.ts)
- ✅ System logging (syslog.ts)
- ✅ Core operations (core.ts)

### Plugin API Coverage (✅ Complete - 62 modules)
All plugin modules have been completely refactored into individual files:
- ✅ Security plugins (12 modules)
- ✅ Network & VPN plugins (11 modules)
- ✅ Web services & proxy plugins (7 modules)
- ✅ Monitoring & metrics plugins (9 modules)
- ✅ Infrastructure & hardware plugins (4 modules)
- ✅ Communication & VoIP plugins (5 modules)
- ✅ Network tools plugins (4 modules)
- ✅ System management plugins (3 modules)
- ✅ File transfer & services plugins (2 modules)
- ✅ Database & storage plugins (1 module)
- ✅ Development examples (2 modules)
- ✅ Additional services (2 modules)

## Architecture Benefits

The new refactored architecture provides:

1. **📁 Individual Module Files** - Each core and plugin module is in its own file
2. **🔧 Better Maintainability** - Easier to update and extend individual modules
3. **📦 Modular Imports** - Import only the modules you need
4. **🎯 Clear Separation** - Core vs plugin modules are clearly distinguished
5. **🚀 Consistent Patterns** - All modules follow the same BaseModule pattern
6. **📚 Complete Coverage** - Support for all major OPNsense functionality

## Contributing

Contributions are welcome! The refactored architecture makes it easy to add new modules:

### Adding New Core Modules
1. Create a new file in `src/modules/core/`
2. Extend the `BaseModule` class
3. Add to `src/modules/core/index.ts`

### Adding New Plugin Modules
1. Create a new file in `src/modules/plugins/`
2. Extend the `BaseModule` class
3. Add to `src/modules/plugins/index.ts`

## Testing

This project includes comprehensive testing utilities in the `testing/` folder:

### Quick Validation
```bash
# Test basic client functionality
bun testing/test-client.ts

# Validate all module implementations
bun testing/module-validator.ts

# Demonstrate complete coverage
bun testing/demo-test.ts
```

### Live API Testing
```bash
# Set your OPNsense credentials
export OPNSENSE_URL="https://your-opnsense.local"
export OPNSENSE_API_KEY="your-api-key"
export OPNSENSE_API_SECRET="your-api-secret"

# Test against live instance
bun testing/comprehensive-test.ts
```

See [`testing/README.md`](testing/README.md) for complete testing documentation.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/your-repo/opnsense-typescript-client.git

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Start development mode
npm run dev
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

- [Issue Tracker](https://github.com/your-repo/opnsense-typescript-client/issues)
- [OPNsense API Documentation](https://docs.opnsense.org/development/api.html)
- [OPNsense Community](https://forum.opnsense.org/)

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.

---

### Key Differences: Core vs Plugin Modules

**Core Modules** (25 modules)
- Built into every OPNsense installation
- Always available via the API
- No additional installation required
- Cover fundamental firewall functionality
- Each module in its own file for better organization

**Plugin Modules** (62 modules)
- Require separate plugin installation
- Must be checked for availability before use
- Provide extended functionality beyond core features
- Can be installed/removed via the firmware module or web interface
- Complete refactored architecture with individual files

This refactored architecture ensures better maintainability, clearer organization, and easier extension while providing comprehensive coverage of both core and plugin functionality.

## Utilities

### Wireguard Key Generation

The SDK includes a command-line utility for generating Wireguard keys locally without requiring network connectivity to OPNsense:

```bash
# Generate a keypair (public and private keys)
bun src/utils/keygen.ts keypair

# Generate a preshared key
bun src/utils/keygen.ts preshared

# Generate all keys (keypair + preshared key)
bun src/utils/keygen.ts keys

# Validate a Base64-encoded Wireguard key
echo "KwSMLdpVKmjtJ/EsL3aAm3d7VA3mzpB5yHlnXnVwBWw=" | bun src/utils/keygen.ts validate
# or
bun src/utils/keygen.ts validate "KwSMLdpVKmjtJ/EsL3aAm3d7VA3mzpB5yHlnXnVwBWw="

# Show help
bun src/utils/keygen.ts help
```

**Key Features:**
- Uses Curve25519 elliptic curve cryptography
- Generates cryptographically secure random keys using Node.js `crypto.randomBytes()`
- Produces standard Wireguard-compatible Base64-encoded keys
- Works completely offline without requiring OPNsense connectivity
- Validates key format and structure

**Example Output:**
```json
{
  "publicKey": "KwSMLdpVKmjtJ/EsL3aAm3d7VA3mzpB5yHlnXnVwBWw=",
  "privateKey": "YHkJNduyK7YPxTeHbaYLdGaMwJFKdDGdW2UKGFy1H28="
}
```
