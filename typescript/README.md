# OPNsense TypeScript API Client - Intermediate Stage Modules

## Overview

This directory contains TypeScript API client modules for interacting with the OPNsense firewall API. The modules are automatically generated from the OPNsense API documentation and provide type-safe methods for all available endpoints.

## Installation

To use these modules in your project:

```bash
yarn add axios
```

## Usage

### Basic Example

```typescript
import { Firewall } from './core/firewall';

// Initialize the client
const firewall = new Firewall({
  baseURL: 'https://your-opnsense-host',
  auth: {
    username: 'your-api-key',
    password: 'your-api-secret'
  }
});

// Use the client
const aliases = await firewall.alias.searchItem();
console.log(aliases);
```

### Authentication

All modules require API credentials. You can obtain these from your OPNsense web interface:

1. Navigate to System → Access → Users
2. Create or edit a user
3. Under "API keys", click the + button to generate a new key/secret pair

## Module Structure

The TypeScript modules are organized into three categories:

- **Core Modules**: Essential OPNsense functionality
- **Plugin Modules**: Extended functionality through OPNsense plugins
- **Utility Modules**: Helper utilities for API operations

## Core Modules (24)

Core modules provide access to built-in OPNsense functionality:

| Module | Description | Import |
|--------|-------------|--------|
| auth | Authentication and authorization management | `import { Auth } from './core/auth'` |
| captiveportal | Captive portal configuration and management | `import { Captiveportal } from './core/captiveportal'` |
| core | Core system functions and settings | `import { Core } from './core/core'` |
| cron | Cron job scheduling and management | `import { Cron } from './core/cron'` |
| dhcpv4 | DHCPv4 server configuration | `import { Dhcpv4 } from './core/dhcpv4'` |
| dhcpv6 | DHCPv6 server configuration | `import { Dhcpv6 } from './core/dhcpv6'` |
| dhcrelay | DHCP relay service configuration | `import { Dhcrelay } from './core/dhcrelay'` |
| diagnostics | System diagnostics and troubleshooting tools | `import { Diagnostics } from './core/diagnostics'` |
| dnsmasq | DNS forwarder configuration | `import { Dnsmasq } from './core/dnsmasq'` |
| firewall | Firewall rules, aliases, and NAT configuration | `import { Firewall } from './core/firewall'` |
| firmware | Firmware updates and package management | `import { Firmware } from './core/firmware'` |
| ids | Intrusion Detection System (IDS) configuration | `import { Ids } from './core/ids'` |
| interfaces | Network interface configuration | `import { Interfaces } from './core/interfaces'` |
| ipsec | IPsec VPN configuration | `import { Ipsec } from './core/ipsec'` |
| kea | Kea DHCP server configuration | `import { Kea } from './core/kea'` |
| monit | Service monitoring configuration | `import { Monit } from './core/monit'` |
| openvpn | OpenVPN server and client configuration | `import { Openvpn } from './core/openvpn'` |
| routes | Static route configuration | `import { Routes } from './core/routes'` |
| routing | Dynamic routing protocols configuration | `import { Routing } from './core/routing'` |
| syslog | System logging configuration | `import { Syslog } from './core/syslog'` |
| trafficshaper | Traffic shaping and QoS configuration | `import { Trafficshaper } from './core/trafficshaper'` |
| trust | Certificate and trust store management | `import { Trust } from './core/trust'` |
| unbound | DNS resolver configuration | `import { Unbound } from './core/unbound'` |
| wireguard | WireGuard VPN configuration | `import { Wireguard } from './core/wireguard'` |

## Plugin Modules (64)

Plugin modules provide access to optional OPNsense plugins:

| Module | Description | Import |
|--------|-------------|--------|
| acmeclient | ACME protocol client for Let's Encrypt certificates | `import { Acmeclient } from './plugins/acmeclient'` |
| apcupsd | APC UPS monitoring daemon | `import { Apcupsd } from './plugins/apcupsd'` |
| bind | BIND DNS server | `import { Bind } from './plugins/bind'` |
| caddy | Caddy web server | `import { Caddy } from './plugins/caddy'` |
| chrony | Chrony NTP daemon | `import { Chrony } from './plugins/chrony'` |
| cicap | C-ICAP server for content adaptation | `import { Cicap } from './plugins/cicap'` |
| clamav | ClamAV antivirus | `import { Clamav } from './plugins/clamav'` |
| collectd | System statistics collection daemon | `import { Collectd } from './plugins/collectd'` |
| crowdsec | CrowdSec collaborative security | `import { Crowdsec } from './plugins/crowdsec'` |
| dechw | OPNsense plugin module | `import { Dechw } from './plugins/dechw'` |
| diagnostics | OPNsense plugin module | `import { Diagnostics } from './plugins/diagnostics'` |
| dmidecode | OPNsense plugin module | `import { Dmidecode } from './plugins/dmidecode'` |
| dnscryptproxy | OPNsense plugin module | `import { Dnscryptproxy } from './plugins/dnscryptproxy'` |
| dyndns | OPNsense plugin module | `import { Dyndns } from './plugins/dyndns'` |
| freeradius | OPNsense plugin module | `import { Freeradius } from './plugins/freeradius'` |
| ftpproxy | OPNsense plugin module | `import { Ftpproxy } from './plugins/ftpproxy'` |
| gridexample | OPNsense plugin module | `import { Gridexample } from './plugins/gridexample'` |
| haproxy | HAProxy load balancer | `import { Haproxy } from './plugins/haproxy'` |
| helloworld | OPNsense plugin module | `import { Helloworld } from './plugins/helloworld'` |
| hwprobe | OPNsense plugin module | `import { Hwprobe } from './plugins/hwprobe'` |

*... and 44 more plugin modules*

### Complete Plugin List

acmeclient, apcupsd, bind, caddy, chrony, cicap, clamav, collectd, crowdsec, dechw, diagnostics, dmidecode, dnscryptproxy, dyndns, freeradius, ftpproxy, gridexample, haproxy, helloworld, hwprobe, iperf, lldpd, maltrail, mdnsrepeater, muninnode, ndproxy, netdata, netsnmp, nginx, nodeexporter, nrpe, ntopng, nut, openconnect, postfix, proxy, proxysso, puppetagent, qemuguestagent, quagga, radsecproxy, redis, relayd, rspamd, shadowsocks, siproxd, smart, softether, sslh, stunnel, tailscale, tayga, telegraf, tftp, tinc, tor, turnserver, udpbroadcastrelay, vnstat, wazuhagent, wol, zabbixagent, zabbixproxy, zerotier

## Utility Modules (1)

Utility modules provide helper functions:

| Module | Description | Import |
|--------|-------------|--------|
| keygen | API key generation utility | `import { Keygen } from './utilities/keygen'` |

## Build Configuration

The SDK uses a build configuration file (`src/build-config.json`) to control which modules are included when building. Each optional module has an `include` flag that can be set to `true` or `false`.

**Required modules** (always included):
- `core` - Essential core functionality
- `auth` - Authentication and authorization
- `firewall` - Basic firewall operations
- `interfaces` - Network interface management
- `keygen` - API key generation utility

**Optional modules** can be configured:

```json
{
  "modules": {
    "core": {
      "diagnostics": { "include": true },
      "firmware": { "include": false }
    },
    "plugins": {
      "nginx": { "include": true },
      "haproxy": { "include": false }
    }
  }
}
```

This allows you to create custom builds with only the modules you need while ensuring essential functionality is always available.

## Common Patterns

### Error Handling

```typescript
try {
  const result = await firewall.alias.searchItem();
} catch (error) {
  if (error.response) {
    // API returned an error response
    console.error('API Error:', error.response.status, error.response.data);
  } else {
    // Network or other error
    console.error('Error:', error.message);
  }
}
```

### Working with UUIDs

Many endpoints require UUIDs for specific resources:

```typescript
// Get all items
const items = await firewall.alias.searchItem();

// Get specific item by UUID
const uuid = items.rows[0].uuid;
const item = await firewall.alias.getItem(uuid);

// Update item
await firewall.alias.setItem(uuid, { description: 'Updated' });

// Delete item
await firewall.alias.delItem(uuid);
```

### Applying Changes

Many modules require applying changes after modifications:

```typescript
// Make changes
await firewall.alias.addItem({ name: 'test', type: 'host' });

// Apply configuration
await firewall.alias.reconfigure();
```

## Type Safety

All modules include TypeScript type definitions for:

- Request parameters
- Response data structures
- Method signatures

This provides compile-time type checking and IDE autocomplete support.

## Regenerating Modules

These modules are automatically generated. To regenerate them:

```bash
# Crawl the latest API documentation
cd crawler && yarn start

# Generate TypeScript modules
yarn generate:typescript:core
yarn generate:typescript:plugin
```

## Contributing

Since these modules are auto-generated, manual edits will be overwritten. To make changes:

1. Update the generator scripts in `generators/`
2. Regenerate the modules
3. Test your changes
4. Submit a pull request

## License

These modules are generated from the OPNsense API documentation and are subject to the same license terms.
