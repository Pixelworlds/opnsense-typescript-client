# OPNsense Plugins API Endpoints

Base URL: `https://your-opnsense-instance/api`

## Authentication
All endpoints require HTTP Basic Authentication using API key/secret pairs. Generate API keys through the OPNsense web interface under System → Access → Users → [Select User] → API Keys.

## API Structure
OPNsense API calls follow this structure:
```
https://opnsense.local/api/<module>/<controller>/<command>/[<param1>/[<param2>/...]]
```

**HTTP Methods:**
- **GET**: Retrieves data from OPNsense
- **POST**: Creates new data, updates existing data, or executes an action

---

## Available Plugin APIs

Based on the official OPNsense API documentation, the following plugins have documented API endpoints:

## APCupsd Plugin Endpoints

UPS management and monitoring tool for APC UPS units.

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/apcupsd/service/get_ups_status` | - |
| POST | `/apcupsd/service/reconfigure` | - |
| POST | `/apcupsd/service/restart` | - |
| POST | `/apcupsd/service/start` | - |
| GET | `/apcupsd/service/status` | - |
| POST | `/apcupsd/service/stop` | - |

### Settings Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/apcupsd/settings/get` | - |
| POST | `/apcupsd/settings/set` | - |

## BIND Plugin Endpoints

DNS server with comprehensive zone and record management.

### Access Control Lists
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/bind/acl/add_acl` | - |
| POST | `/bind/acl/del_acl/{uuid}` | uuid |
| GET | `/bind/acl/get` | - |
| GET | `/bind/acl/get_acl/{uuid?}` | uuid (optional) |
| POST | `/bind/acl/search_acl` | - |
| POST | `/bind/acl/set` | - |
| POST | `/bind/acl/set_acl/{uuid}` | uuid |
| POST | `/bind/acl/toggle_acl/{uuid}` | uuid |

### DNS Blocklist
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/bind/dnsbl/get` | - |
| POST | `/bind/dnsbl/set` | - |

### Domain Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/bind/domain/add_primary_domain/{uuid?}` | uuid (optional) |
| POST | `/bind/domain/add_secondary_domain/{uuid?}` | uuid (optional) |
| POST | `/bind/domain/del_domain/{uuid}` | uuid |
| GET | `/bind/domain/get` | - |
| GET | `/bind/domain/get_domain/{uuid?}` | uuid (optional) |
| POST | `/bind/domain/search_master_domain` | - |
| POST | `/bind/domain/search_primary_domain` | - |
| POST | `/bind/domain/search_secondary_domain` | - |
| POST | `/bind/domain/search_slave_domain` | - |
| POST | `/bind/domain/set` | - |
| POST | `/bind/domain/set_domain/{uuid?}` | uuid (optional) |
| POST | `/bind/domain/toggle_domain/{uuid}` | uuid |

### General Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/bind/general/get` | - |
| POST | `/bind/general/set` | - |
| GET | `/bind/general/zoneshow/{zonename?}` | zonename (optional) |
| GET | `/bind/general/zonetest/{zonename?}` | zonename (optional) |

### DNS Records
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/bind/record/add_record` | - |
| POST | `/bind/record/del_record/{uuid}` | uuid |
| GET | `/bind/record/get` | - |
| GET | `/bind/record/get_record/{uuid?}` | uuid (optional) |
| POST | `/bind/record/search_record` | - |
| POST | `/bind/record/set` | - |
| POST | `/bind/record/set_record/{uuid?}` | uuid (optional) |
| POST | `/bind/record/toggle_record/{uuid}` | uuid |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/bind/service/dnsbl` | - |
| POST | `/bind/service/reconfigure` | - |
| POST | `/bind/service/restart` | - |
| POST | `/bind/service/start` | - |
| GET | `/bind/service/status` | - |
| POST | `/bind/service/stop` | - |

## Caddy Plugin Endpoints

Modern web server and reverse proxy with automatic HTTPS.

### Diagnostics
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/caddy/diagnostics/caddyfile` | - |
| GET | `/caddy/diagnostics/config` | - |
| GET | `/caddy/diagnostics/get` | - |
| POST | `/caddy/diagnostics/set` | - |

### General Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/caddy/general/get` | - |
| POST | `/caddy/general/set` | - |

### Reverse Proxy
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/caddy/reverse_proxy/add_access_list` | - |
| POST | `/caddy/reverse_proxy/add_basic_auth` | - |
| POST | `/caddy/reverse_proxy/add_handle` | - |
| POST | `/caddy/reverse_proxy/add_header` | - |
| POST | `/caddy/reverse_proxy/add_layer4` | - |
| POST | `/caddy/reverse_proxy/add_layer4_openvpn` | - |
| POST | `/caddy/reverse_proxy/add_reverse_proxy` | - |
| POST | `/caddy/reverse_proxy/add_subdomain` | - |
| POST | `/caddy/reverse_proxy/del_access_list/{uuid}` | uuid |
| POST | `/caddy/reverse_proxy/del_basic_auth/{uuid}` | uuid |
| POST | `/caddy/reverse_proxy/del_handle/{uuid}` | uuid |
| POST | `/caddy/reverse_proxy/del_header/{uuid}` | uuid |
| POST | `/caddy/reverse_proxy/del_layer4/{uuid}` | uuid |
| POST | `/caddy/reverse_proxy/del_layer4_openvpn/{uuid}` | uuid |
| POST | `/caddy/reverse_proxy/del_reverse_proxy/{uuid}` | uuid |
| POST | `/caddy/reverse_proxy/del_subdomain/{uuid}` | uuid |
| GET | `/caddy/reverse_proxy/get` | - |
| GET | `/caddy/reverse_proxy/get_access_list/{uuid?}` | uuid (optional) |
| GET | `/caddy/reverse_proxy/get_all_reverse_domains` | - |
| GET | `/caddy/reverse_proxy/get_basic_auth/{uuid?}` | uuid (optional) |
| GET | `/caddy/reverse_proxy/get_handle/{uuid?}` | uuid (optional) |
| GET | `/caddy/reverse_proxy/get_header/{uuid?}` | uuid (optional) |
| GET | `/caddy/reverse_proxy/get_layer4/{uuid?}` | uuid (optional) |
| GET | `/caddy/reverse_proxy/get_layer4_openvpn/{uuid?}` | uuid (optional) |
| GET | `/caddy/reverse_proxy/get_reverse_proxy/{uuid?}` | uuid (optional) |
| GET | `/caddy/reverse_proxy/get_subdomain/{uuid?}` | uuid (optional) |
| POST | `/caddy/reverse_proxy/search_access_list` | - |
| POST | `/caddy/reverse_proxy/search_basic_auth` | - |
| POST | `/caddy/reverse_proxy/search_handle` | - |
| POST | `/caddy/reverse_proxy/search_header` | - |
| POST | `/caddy/reverse_proxy/search_layer4` | - |
| POST | `/caddy/reverse_proxy/search_layer4_openvpn` | - |
| POST | `/caddy/reverse_proxy/search_reverse_proxy` | - |
| POST | `/caddy/reverse_proxy/search_subdomain` | - |
| POST | `/caddy/reverse_proxy/set` | - |
| POST | `/caddy/reverse_proxy/set_access_list/{uuid}` | uuid |
| POST | `/caddy/reverse_proxy/set_basic_auth/{uuid}` | uuid |
| POST | `/caddy/reverse_proxy/set_handle/{uuid}` | uuid |
| POST | `/caddy/reverse_proxy/set_header/{uuid}` | uuid |
| POST | `/caddy/reverse_proxy/set_layer4/{uuid}` | uuid |
| POST | `/caddy/reverse_proxy/set_layer4_openvpn/{uuid}` | uuid |
| POST | `/caddy/reverse_proxy/set_reverse_proxy/{uuid}` | uuid |
| POST | `/caddy/reverse_proxy/set_subdomain/{uuid}` | uuid |
| POST | `/caddy/reverse_proxy/toggle_handle/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/caddy/reverse_proxy/toggle_layer4/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/caddy/reverse_proxy/toggle_layer4_openvpn/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/caddy/reverse_proxy/toggle_reverse_proxy/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/caddy/reverse_proxy/toggle_subdomain/{uuid}/{enabled?}` | uuid, enabled (optional) |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/caddy/service/reconfigure` | - |
| POST | `/caddy/service/restart` | - |
| POST | `/caddy/service/start` | - |
| GET | `/caddy/service/status` | - |
| POST | `/caddy/service/stop` | - |
| GET | `/caddy/service/validate` | - |

## Chrony Plugin Endpoints

Network Time Protocol (NTP) service for time synchronization.

### General Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/chrony/general/get` | - |
| POST | `/chrony/general/set` | - |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/chrony/service/chronyauthdata` | - |
| GET | `/chrony/service/chronysources` | - |
| GET | `/chrony/service/chronysourcestats` | - |
| GET | `/chrony/service/chronytracking` | - |
| POST | `/chrony/service/reconfigure` | - |
| POST | `/chrony/service/restart` | - |
| POST | `/chrony/service/start` | - |
| GET | `/chrony/service/status` | - |
| POST | `/chrony/service/stop` | - |

## C-ICAP Plugin Endpoints

ICAP server for content adaptation and filtering.

### Antivirus Integration
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/cicap/antivirus/get` | - |
| POST | `/cicap/antivirus/set` | - |

### General Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/cicap/general/get` | - |
| POST | `/cicap/general/set` | - |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/cicap/service/checkclamav` | - |
| POST | `/cicap/service/reconfigure` | - |
| POST | `/cicap/service/restart` | - |
| POST | `/cicap/service/start` | - |
| GET | `/cicap/service/status` | - |
| POST | `/cicap/service/stop` | - |

## ClamAV Plugin Endpoints

Antivirus engine for email and web scanning.

### General Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/clamav/general/get` | - |
| POST | `/clamav/general/set` | - |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/clamav/service/reconfigure` | - |
| POST | `/clamav/service/restart` | - |
| POST | `/clamav/service/start` | - |
| GET | `/clamav/service/status` | - |
| POST | `/clamav/service/stop` | - |

## Collectd Plugin Endpoints

System statistics collection daemon.

### General Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/collectd/general/get` | - |
| POST | `/collectd/general/set` | - |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/collectd/service/reconfigure` | - |
| POST | `/collectd/service/restart` | - |
| POST | `/collectd/service/start` | - |
| GET | `/collectd/service/status` | - |
| POST | `/collectd/service/stop` | - |

## CrowdSec Plugin Endpoints

Collaborative security engine for threat detection and prevention.

### Alerts
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/crowdsec/alerts/get` | - |

### Bouncers
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/crowdsec/bouncers/get` | - |

### Decisions
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/crowdsec/decisions/delete/{decision_id}` | decision_id |
| GET | `/crowdsec/decisions/get` | - |

### General Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/crowdsec/general/get` | - |
| POST | `/crowdsec/general/set` | - |

### Hub Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/crowdsec/hub/get` | - |

### Machines
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/crowdsec/machines/get` | - |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/crowdsec/service/debug` | - |
| POST | `/crowdsec/service/reload` | - |
| GET | `/crowdsec/service/status` | - |

### Version Information
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/crowdsec/version/get` | - |

## DMIdecode Plugin Endpoints

Hardware information extraction tool.

### General Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/dmidecode/general/get` | - |
| POST | `/dmidecode/general/set` | - |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/dmidecode/service/reconfigure` | - |
| POST | `/dmidecode/service/restart` | - |
| POST | `/dmidecode/service/start` | - |
| GET | `/dmidecode/service/status` | - |
| POST | `/dmidecode/service/stop` | - |

## FreeRADIUS Plugin Endpoints

RADIUS authentication, authorization, and accounting server.

### General Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/freeradius/general/get` | - |
| POST | `/freeradius/general/set` | - |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/freeradius/service/reconfigure` | - |
| POST | `/freeradius/service/restart` | - |
| POST | `/freeradius/service/start` | - |
| GET | `/freeradius/service/status` | - |
| POST | `/freeradius/service/stop` | - |

## HAProxy Plugin Endpoints

High-performance load balancer and proxy server.

### Export Functions
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/haproxy/export/config` | - |
| GET | `/haproxy/export/diff` | - |
| GET | `/haproxy/export/download/{type}` | type |

### Maintenance
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/haproxy/maintenance/cert_actions` | - |
| GET | `/haproxy/maintenance/cert_diff` | - |
| POST | `/haproxy/maintenance/cert_sync` | - |
| POST | `/haproxy/maintenance/cert_sync_bulk` | - |
| GET | `/haproxy/maintenance/fetch_cron_integration` | - |
| GET | `/haproxy/maintenance/get` | - |
| POST | `/haproxy/maintenance/search_certificate_diff` | - |
| POST | `/haproxy/maintenance/search_server` | - |
| POST | `/haproxy/maintenance/server_state` | - |
| POST | `/haproxy/maintenance/server_state_bulk` | - |
| POST | `/haproxy/maintenance/server_weight` | - |
| POST | `/haproxy/maintenance/server_weight_bulk` | - |
| POST | `/haproxy/maintenance/set` | - |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/haproxy/service/configtest` | - |
| POST | `/haproxy/service/reconfigure` | - |
| POST | `/haproxy/service/restart` | - |
| POST | `/haproxy/service/start` | - |
| GET | `/haproxy/service/status` | - |
| POST | `/haproxy/service/stop` | - |

### Settings Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/haproxy/settings/add_acl` | - |
| POST | `/haproxy/settings/add_action` | - |
| POST | `/haproxy/settings/add_backend` | - |
| POST | `/haproxy/settings/add_cpu` | - |
| POST | `/haproxy/settings/add_errorfile` | - |
| POST | `/haproxy/settings/add_fcgi` | - |
| POST | `/haproxy/settings/add_frontend` | - |
| POST | `/haproxy/settings/add_group` | - |
| POST | `/haproxy/settings/add_healthcheck` | - |
| POST | `/haproxy/settings/add_lua` | - |
| POST | `/haproxy/settings/add_mapfile` | - |
| POST | `/haproxy/settings/add_server` | - |
| POST | `/haproxy/settings/add_user` | - |
| POST | `/haproxy/settings/addmailer` | - |
| POST | `/haproxy/settings/addresolver` | - |
| POST | `/haproxy/settings/del_acl/{uuid}` | uuid |
| POST | `/haproxy/settings/del_action/{uuid}` | uuid |
| POST | `/haproxy/settings/del_backend/{uuid}` | uuid |
| POST | `/haproxy/settings/del_cpu/{uuid}` | uuid |
| POST | `/haproxy/settings/del_errorfile/{uuid}` | uuid |
| POST | `/haproxy/settings/del_fcgi/{uuid}` | uuid |
| POST | `/haproxy/settings/del_frontend/{uuid}` | uuid |
| POST | `/haproxy/settings/del_group/{uuid}` | uuid |
| POST | `/haproxy/settings/del_healthcheck/{uuid}` | uuid |
| POST | `/haproxy/settings/del_lua/{uuid}` | uuid |
| POST | `/haproxy/settings/del_mapfile/{uuid}` | uuid |
| POST | `/haproxy/settings/del_server/{uuid}` | uuid |
| POST | `/haproxy/settings/del_user/{uuid}` | uuid |
| POST | `/haproxy/settings/delmailer/{uuid}` | uuid |
| POST | `/haproxy/settings/delresolver/{uuid}` | uuid |
| GET | `/haproxy/settings/get` | - |
| GET | `/haproxy/settings/get_acl/{uuid?}` | uuid (optional) |
| GET | `/haproxy/settings/get_action/{uuid?}` | uuid (optional) |
| GET | `/haproxy/settings/get_backend/{uuid?}` | uuid (optional) |
| GET | `/haproxy/settings/get_cpu/{uuid?}` | uuid (optional) |
| GET | `/haproxy/settings/get_errorfile/{uuid?}` | uuid (optional) |
| GET | `/haproxy/settings/get_fcgi/{uuid?}` | uuid (optional) |
| GET | `/haproxy/settings/get_frontend/{uuid?}` | uuid (optional) |
| GET | `/haproxy/settings/get_group/{uuid?}` | uuid (optional) |
| GET | `/haproxy/settings/get_healthcheck/{uuid?}` | uuid (optional) |
| GET | `/haproxy/settings/get_lua/{uuid?}` | uuid (optional) |
| GET | `/haproxy/settings/get_mapfile/{uuid?}` | uuid (optional) |
| GET | `/haproxy/settings/get_server/{uuid?}` | uuid (optional) |
| GET | `/haproxy/settings/get_user/{uuid?}` | uuid (optional) |
| GET | `/haproxy/settings/getmailer/{uuid?}` | uuid (optional) |
| GET | `/haproxy/settings/getresolver/{uuid?}` | uuid (optional) |
| POST | `/haproxy/settings/search_acls` | - |
| POST | `/haproxy/settings/search_actions` | - |
| POST | `/haproxy/settings/search_backends` | - |
| POST | `/haproxy/settings/search_cpus` | - |
| POST | `/haproxy/settings/search_errorfiles` | - |
| POST | `/haproxy/settings/search_fcgis` | - |
| POST | `/haproxy/settings/search_frontends` | - |
| POST | `/haproxy/settings/search_groups` | - |
| POST | `/haproxy/settings/search_healthchecks` | - |
| POST | `/haproxy/settings/search_luas` | - |
| POST | `/haproxy/settings/search_mapfiles` | - |
| POST | `/haproxy/settings/search_servers` | - |
| POST | `/haproxy/settings/search_users` | - |
| POST | `/haproxy/settings/searchmailers` | - |
| POST | `/haproxy/settings/searchresolvers` | - |
| POST | `/haproxy/settings/set` | - |
| POST | `/haproxy/settings/set_acl/{uuid}` | uuid |
| POST | `/haproxy/settings/set_action/{uuid}` | uuid |
| POST | `/haproxy/settings/set_backend/{uuid}` | uuid |
| POST | `/haproxy/settings/set_cpu/{uuid}` | uuid |
| POST | `/haproxy/settings/set_errorfile/{uuid}` | uuid |
| POST | `/haproxy/settings/set_fcgi/{uuid}` | uuid |
| POST | `/haproxy/settings/set_frontend/{uuid}` | uuid |
| POST | `/haproxy/settings/set_group/{uuid}` | uuid |
| POST | `/haproxy/settings/set_healthcheck/{uuid}` | uuid |
| POST | `/haproxy/settings/set_lua/{uuid}` | uuid |
| POST | `/haproxy/settings/set_mapfile/{uuid}` | uuid |
| POST | `/haproxy/settings/set_server/{uuid}` | uuid |
| POST | `/haproxy/settings/set_user/{uuid}` | uuid |
| POST | `/haproxy/settings/setmailer/{uuid}` | uuid |
| POST | `/haproxy/settings/setresolver/{uuid}` | uuid |
| POST | `/haproxy/settings/toggle_backend/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/haproxy/settings/toggle_cpu/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/haproxy/settings/toggle_frontend/{uuid}` | uuid |
| POST | `/haproxy/settings/toggle_group/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/haproxy/settings/toggle_lua/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/haproxy/settings/toggle_server/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/haproxy/settings/toggle_user/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/haproxy/settings/togglemailer/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/haproxy/settings/toggleresolver/{uuid}/{enabled?}` | uuid, enabled (optional) |

### Statistics
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/haproxy/statistics/counters` | - |
| GET | `/haproxy/statistics/info` | - |
| GET | `/haproxy/statistics/tables` | - |

## HelloWorld Plugin

Simple example plugin for demonstration purposes.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/helloworld/service/reload` | Reload the HelloWorld service |
| POST | `/helloworld/service/test` | Test the HelloWorld service |

### Settings Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/helloworld/settings/get` | Retrieve HelloWorld settings |
| POST | `/helloworld/settings/set` | Update HelloWorld settings |

## Hwprobe Plugin Endpoints

Hardware detection and probing tool.

### General Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/hwprobe/general/get` | - |
| POST | `/hwprobe/general/set` | - |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/hwprobe/service/reconfigure` | - |
| GET | `/hwprobe/service/report` | - |
| POST | `/hwprobe/service/restart` | - |
| POST | `/hwprobe/service/start` | - |
| GET | `/hwprobe/service/status` | - |
| POST | `/hwprobe/service/stop` | - |

## Iperf Plugin

Network performance testing tool for bandwidth measurement.

### Instance Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/iperf/instance/get` | Retrieve iperf instance configuration |
| GET | `/iperf/instance/query` | Query iperf instance status |
| POST | `/iperf/instance/set` | Update iperf instance configuration |

### Service Control
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/iperf/service/restart` | Restart the iperf service |
| POST | `/iperf/service/start` | Start the iperf service |
| GET | `/iperf/service/status` | Get iperf service status |
| POST | `/iperf/service/stop` | Stop the iperf service |

## LLDP (Link Layer Discovery Protocol) Plugin

Network discovery protocol for device identification and capability advertisement.

### General Settings
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/lldpd/general/get` | Retrieve LLDP general configuration |
| POST | `/lldpd/general/set` | Update LLDP general configuration |

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/lldpd/service/neighbor` | Get discovered neighbor information |
| POST | `/lldpd/service/reconfigure` | Reconfigure LLDP service |
| POST | `/lldpd/service/restart` | Restart LLDP service |
| POST | `/lldpd/service/start` | Start LLDP service |
| GET | `/lldpd/service/status` | Get LLDP service status |
| POST | `/lldpd/service/stop` | Stop LLDP service |

## Maltrail Plugin

Malicious traffic detection and prevention system.

### General Configuration
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/maltrail/general/get` | Retrieve general Maltrail settings |
| POST | `/maltrail/general/set` | Update general Maltrail settings |

### Sensor Configuration
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/maltrail/sensor/get` | Retrieve sensor configuration |
| POST | `/maltrail/sensor/set` | Update sensor configuration |

### Server Configuration
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/maltrail/server/get` | Retrieve server configuration |
| POST | `/maltrail/server/set` | Update server configuration |

### Server Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/maltrail/serverservice/reconfigure` | Reconfigure Maltrail server |
| POST | `/maltrail/serverservice/restart` | Restart Maltrail server |
| POST | `/maltrail/serverservice/start` | Start Maltrail server |
| GET | `/maltrail/serverservice/status` | Get Maltrail server status |
| POST | `/maltrail/serverservice/stop` | Stop Maltrail server |

### Sensor Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/maltrail/service/reconfigure` | Reconfigure Maltrail sensor |
| POST | `/maltrail/service/restart` | Restart Maltrail sensor |
| POST | `/maltrail/service/start` | Start Maltrail sensor |
| GET | `/maltrail/service/status` | Get Maltrail sensor status |
| POST | `/maltrail/service/stop` | Stop Maltrail sensor |

## mDNS Repeater Plugin

Multicast DNS repeater for service discovery across network segments.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/mdnsrepeater/service/reconfigure` | Reconfigure mDNS repeater service |
| POST | `/mdnsrepeater/service/restart` | Restart mDNS repeater service |
| POST | `/mdnsrepeater/service/start` | Start mDNS repeater service |
| GET | `/mdnsrepeater/service/status` | Get mDNS repeater service status |
| POST | `/mdnsrepeater/service/stop` | Stop mDNS repeater service |

### Settings Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/mdnsrepeater/settings/get` | Retrieve mDNS repeater settings |
| POST | `/mdnsrepeater/settings/set` | Update mDNS repeater settings |

## Munin Node Plugin

System monitoring agent for the Munin monitoring system.

### General Configuration
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/muninnode/general/get` | Retrieve Munin node configuration |
| POST | `/muninnode/general/set` | Update Munin node configuration |

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/muninnode/service/reconfigure` | Reconfigure Munin node service |
| POST | `/muninnode/service/restart` | Restart Munin node service |
| POST | `/muninnode/service/start` | Start Munin node service |
| GET | `/muninnode/service/status` | Get Munin node service status |
| POST | `/muninnode/service/stop` | Stop Munin node service |

## NDProxy Plugin

IPv6 Neighbor Discovery Proxy for bridging IPv6 networks with limited prefix delegation.

**Note**: The NDProxy plugin (os-ndproxy) is available as a plugin but may have limited API documentation. This plugin is used to proxy IPv6 Neighbor Discovery messages between interfaces, particularly useful when ISPs provide only a single /64 prefix without proper prefix delegation.

### Expected API Structure
Based on OPNsense plugin patterns, the NDProxy plugin should follow similar endpoint structures:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/ndproxy/general/get` | Retrieve NDProxy configuration |
| POST | `/ndproxy/general/set` | Update NDProxy configuration |
| POST | `/ndproxy/service/reconfigure` | Reconfigure NDProxy service |
| POST | `/ndproxy/service/restart` | Restart NDProxy service |
| POST | `/ndproxy/service/start` | Start NDProxy service |
| GET | `/ndproxy/service/status` | Get NDProxy service status |
| POST | `/ndproxy/service/stop` | Stop NDProxy service |

## Netdata Plugin Endpoints

Real-time performance monitoring and troubleshooting tool.

### General Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/netdata/general/get` | - |
| POST | `/netdata/general/set` | - |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/netdata/service/reconfigure` | - |
| POST | `/netdata/service/restart` | - |
| POST | `/netdata/service/start` | - |
| GET | `/netdata/service/status` | - |
| POST | `/netdata/service/stop` | - |

## NetSNMP Plugin Endpoints

Simple Network Management Protocol (SNMP) agent.

### General Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/netsnmp/general/get` | - |
| POST | `/netsnmp/general/set` | - |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/netsnmp/service/reconfigure` | - |
| POST | `/netsnmp/service/restart` | - |
| POST | `/netsnmp/service/start` | - |
| GET | `/netsnmp/service/status` | - |
| POST | `/netsnmp/service/stop` | - |

### User Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/netsnmp/user/add_user` | - |
| POST | `/netsnmp/user/del_user/{uuid}` | uuid |
| GET | `/netsnmp/user/get` | - |
| GET | `/netsnmp/user/get_user/{uuid?}` | uuid (optional) |
| POST | `/netsnmp/user/search_user` | - |
| POST | `/netsnmp/user/set` | - |
| POST | `/netsnmp/user/set_user/{uuid}` | uuid |
| POST | `/netsnmp/user/toggle_user/{uuid}` | uuid |

## Nginx Plugin Endpoints

High-performance web server and reverse proxy.

### Ban Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/nginx/bans/delban/{uuid}` | uuid |
| GET | `/nginx/bans/get` | - |
| POST | `/nginx/bans/searchban` | - |
| POST | `/nginx/bans/set` | - |

### Log Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/nginx/logs/accesses/{uuid?}/{fileno?}/{page?}/{perPage?}/{query?}` | uuid, fileno, page, perPage, query (all optional) |
| GET | `/nginx/logs/errors/{uuid?}/{fileno?}/{page?}/{perPage?}/{query?}` | uuid, fileno, page, perPage, query (all optional) |
| GET | `/nginx/logs/streamaccesses/{uuid?}/{fileno?}/{page?}/{perPage?}/{query?}` | uuid, fileno, page, perPage, query (all optional) |
| GET | `/nginx/logs/streamerrors/{uuid?}/{fileno?}/{page?}/{perPage?}/{query?}` | uuid, fileno, page, perPage, query (all optional) |
| GET | `/nginx/logs/tls_handshakes` | - |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/nginx/service/reconfigure` | - |
| POST | `/nginx/service/restart` | - |
| POST | `/nginx/service/start` | - |
| GET | `/nginx/service/status` | - |
| POST | `/nginx/service/stop` | - |
| GET | `/nginx/service/vts` | - |

### Settings Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/nginx/settings/addcache_path` | - |
| POST | `/nginx/settings/addcredential` | - |
| POST | `/nginx/settings/addcustompolicy` | - |
| POST | `/nginx/settings/adderrorpage` | - |
| POST | `/nginx/settings/addhttprewrite` | - |
| POST | `/nginx/settings/addhttpserver` | - |
| POST | `/nginx/settings/addipacl` | - |
| POST | `/nginx/settings/addlimit_request_connection` | - |
| POST | `/nginx/settings/addlimit_zone` | - |
| POST | `/nginx/settings/addlocation` | - |
| POST | `/nginx/settings/addnaxsirule` | - |
| POST | `/nginx/settings/addresolver` | - |
| POST | `/nginx/settings/addsecurity_header` | - |
| POST | `/nginx/settings/addsnifwd` | - |
| POST | `/nginx/settings/addstreamserver` | - |
| POST | `/nginx/settings/addsyslog_target` | - |
| POST | `/nginx/settings/addtls_fingerprint` | - |
| POST | `/nginx/settings/addupstream` | - |
| POST | `/nginx/settings/addupstreamserver` | - |
| POST | `/nginx/settings/adduserlist` | - |
| POST | `/nginx/settings/delcache_path/{uuid}` | uuid |
| POST | `/nginx/settings/delcredential/{uuid}` | uuid |
| POST | `/nginx/settings/delcustompolicy/{uuid}` | uuid |
| POST | `/nginx/settings/delerrorpage/{uuid}` | uuid |
| POST | `/nginx/settings/delhttprewrite/{uuid}` | uuid |
| POST | `/nginx/settings/delhttpserver/{uuid}` | uuid |
| POST | `/nginx/settings/delipacl/{uuid}` | uuid |
| POST | `/nginx/settings/dellimit_request_connection/{uuid}` | uuid |
| POST | `/nginx/settings/dellimit_zone/{uuid}` | uuid |
| POST | `/nginx/settings/dellocation/{uuid}` | uuid |
| POST | `/nginx/settings/delnaxsirule/{uuid}` | uuid |
| POST | `/nginx/settings/delresolver/{uuid}` | uuid |
| POST | `/nginx/settings/delsecurity_header/{uuid}` | uuid |
| POST | `/nginx/settings/delsnifwd/{uuid}` | uuid |
| POST | `/nginx/settings/delstreamserver/{uuid}` | uuid |
| POST | `/nginx/settings/delsyslog_target/{uuid}` | uuid |
| POST | `/nginx/settings/deltls_fingerprint/{uuid}` | uuid |
| POST | `/nginx/settings/delupstream/{uuid}` | uuid |
| POST | `/nginx/settings/delupstreamserver/{uuid}` | uuid |
| POST | `/nginx/settings/deluserlist/{uuid}` | uuid |
| GET | `/nginx/settings/downloadrules` | - |
| GET | `/nginx/settings/get` | - |
| GET | `/nginx/settings/getcache_path/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/getcredential/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/getcustompolicy/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/geterrorpage/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/gethttprewrite/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/gethttpserver/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/getipacl/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/getlimit_request_connection/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/getlimit_zone/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/getlocation/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/getnaxsirule/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/getresolver/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/getsecurity_header/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/getsnifwd/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/getstreamserver/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/getsyslog_target/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/gettls_fingerprint/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/getupstream/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/getupstreamserver/{uuid?}` | uuid (optional) |
| GET | `/nginx/settings/getuserlist/{uuid?}` | uuid (optional) |
| POST | `/nginx/settings/searchcache_path` | - |
| POST | `/nginx/settings/searchcredential` | - |
| POST | `/nginx/settings/searchcustompolicy` | - |
| POST | `/nginx/settings/searcherrorpage` | - |
| POST | `/nginx/settings/searchhttprewrite` | - |
| POST | `/nginx/settings/searchhttpserver` | - |
| POST | `/nginx/settings/searchipacl` | - |
| POST | `/nginx/settings/searchlimit_request_connection` | - |
| POST | `/nginx/settings/searchlimit_zone` | - |
| POST | `/nginx/settings/searchlocation` | - |
| POST | `/nginx/settings/searchnaxsirule` | - |
| POST | `/nginx/settings/searchresolver` | - |
| POST | `/nginx/settings/searchsecurity_header` | - |
| POST | `/nginx/settings/searchsnifwd` | - |
| POST | `/nginx/settings/searchstreamserver` | - |
| POST | `/nginx/settings/searchsyslog_target` | - |
| POST | `/nginx/settings/searchtls_fingerprint` | - |
| POST | `/nginx/settings/searchupstream` | - |
| POST | `/nginx/settings/searchupstreamserver` | - |
| POST | `/nginx/settings/searchuserlist` | - |
| POST | `/nginx/settings/set` | - |
| POST | `/nginx/settings/setcache_path/{uuid}` | uuid |
| POST | `/nginx/settings/setcredential/{uuid}` | uuid |
| POST | `/nginx/settings/setcustompolicy/{uuid}` | uuid |
| POST | `/nginx/settings/seterrorpage/{uuid}` | uuid |
| POST | `/nginx/settings/sethttprewrite/{uuid}` | uuid |
| POST | `/nginx/settings/sethttpserver/{uuid}` | uuid |
| POST | `/nginx/settings/setipacl/{uuid}` | uuid |
| POST | `/nginx/settings/setlimit_request_connection/{uuid}` | uuid |
| POST | `/nginx/settings/setlimit_zone/{uuid}` | uuid |
| POST | `/nginx/settings/setlocation/{uuid}` | uuid |
| POST | `/nginx/settings/setnaxsirule/{uuid}` | uuid |
| POST | `/nginx/settings/setresolver/{uuid}` | uuid |
| POST | `/nginx/settings/setsecurity_header/{uuid}` | uuid |
| POST | `/nginx/settings/setsnifwd/{uuid}` | uuid |
| POST | `/nginx/settings/setstreamserver/{uuid}` | uuid |
| POST | `/nginx/settings/setsyslog_target/{uuid}` | uuid |
| POST | `/nginx/settings/settls_fingerprint/{uuid}` | uuid |
| POST | `/nginx/settings/setupstream/{uuid}` | uuid |
| POST | `/nginx/settings/setupstreamserver/{uuid}` | uuid |
| POST | `/nginx/settings/setuserlist/{uuid}` | uuid |
| GET | `/nginx/settings/showconfig` | - |
| GET | `/nginx/settings/testconfig` | - |

## Node Exporter Plugin

Prometheus Node Exporter for system metrics collection.

### General Configuration
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/nodeexporter/general/get` | Retrieve Node Exporter configuration |
| POST | `/nodeexporter/general/set` | Update Node Exporter configuration |

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/nodeexporter/service/reconfigure` | Reconfigure Node Exporter service |
| POST | `/nodeexporter/service/restart` | Restart Node Exporter service |
| POST | `/nodeexporter/service/start` | Start Node Exporter service |
| GET | `/nodeexporter/service/status` | Get Node Exporter service status |
| POST | `/nodeexporter/service/stop` | Stop Node Exporter service |

## NRPE Plugin

Nagios Remote Plugin Executor for remote monitoring.

### Command Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/nrpe/command/add_command` | Add a new NRPE command |
| POST | `/nrpe/command/del_command/{uuid}` | Delete an NRPE command by UUID |
| GET | `/nrpe/command/get` | Retrieve all NRPE command configurations |
| GET | `/nrpe/command/get_command/{uuid}` | Get specific NRPE command by UUID |
| GET | `/nrpe/command/search_command` | Search NRPE commands |
| POST | `/nrpe/command/set` | Update NRPE command configurations |
| POST | `/nrpe/command/set_command/{uuid}` | Update specific NRPE command |
| POST | `/nrpe/command/toggle_command/{uuid}` | Enable/disable NRPE command |

### General Configuration
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/nrpe/general/get` | Retrieve NRPE general configuration |
| POST | `/nrpe/general/set` | Update NRPE general configuration |

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/nrpe/service/reconfigure` | Reconfigure NRPE service |
| POST | `/nrpe/service/restart` | Restart NRPE service |
| POST | `/nrpe/service/start` | Start NRPE service |
| GET | `/nrpe/service/status` | Get NRPE service status |
| POST | `/nrpe/service/stop` | Stop NRPE service |

## Ntopng Plugin

Network traffic monitoring and analysis tool.

### General Configuration
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/ntopng/general/get` | Retrieve Ntopng configuration |
| POST | `/ntopng/general/set` | Update Ntopng configuration |

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/ntopng/service/checkredis` | Check Redis connectivity for Ntopng |
| POST | `/ntopng/service/reconfigure` | Reconfigure Ntopng service |
| POST | `/ntopng/service/restart` | Restart Ntopng service |
| POST | `/ntopng/service/start` | Start Ntopng service |
| GET | `/ntopng/service/status` | Get Ntopng service status |
| POST | `/ntopng/service/stop` | Stop Ntopng service |

## NUT Plugin

Network UPS Tools for UPS monitoring and management.

### Diagnostics
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/nut/diagnostics/upsstatus` | Get UPS status and diagnostics |

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/nut/service/reconfigure` | Reconfigure NUT service |
| POST | `/nut/service/restart` | Restart NUT service |
| POST | `/nut/service/start` | Start NUT service |
| GET | `/nut/service/status` | Get NUT service status |
| POST | `/nut/service/stop` | Stop NUT service |

### Settings Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/nut/settings/get` | Retrieve NUT settings |
| POST | `/nut/settings/set` | Update NUT settings |

## OpenConnect Plugin

SSL VPN server using OpenConnect protocol.

### General Configuration
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/openconnect/general/get` | Retrieve OpenConnect configuration |
| POST | `/openconnect/general/set` | Update OpenConnect configuration |

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/openconnect/service/reconfigure` | Reconfigure OpenConnect service |
| POST | `/openconnect/service/restart` | Restart OpenConnect service |
| POST | `/openconnect/service/start` | Start OpenConnect service |
| GET | `/openconnect/service/status` | Get OpenConnect service status |
| POST | `/openconnect/service/stop` | Stop OpenConnect service |

## Postfix Plugin

SMTP mail relay server with comprehensive email management.

### Address Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/postfix/address/add_address` | Add a new address mapping |
| POST | `/postfix/address/del_address/{uuid}` | Delete address mapping by UUID |
| GET | `/postfix/address/get` | Retrieve all address configurations |
| GET | `/postfix/address/get_address/{uuid}` | Get specific address by UUID |
| GET | `/postfix/address/search_address` | Search address mappings |
| POST | `/postfix/address/set` | Update address configurations |
| POST | `/postfix/address/set_address/{uuid}` | Update specific address mapping |
| POST | `/postfix/address/toggle_address/{uuid}` | Enable/disable address mapping |

### Anti-Spam Configuration
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/postfix/antispam/get` | Retrieve anti-spam settings |
| POST | `/postfix/antispam/set` | Update anti-spam settings |

### Domain Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/postfix/domain/add_domain` | Add a new domain |
| POST | `/postfix/domain/del_domain/{uuid}` | Delete domain by UUID |
| GET | `/postfix/domain/get` | Retrieve all domain configurations |
| GET | `/postfix/domain/get_domain/{uuid}` | Get specific domain by UUID |
| GET | `/postfix/domain/search_domain` | Search domains |
| POST | `/postfix/domain/set` | Update domain configurations |
| POST | `/postfix/domain/set_domain/{uuid}` | Update specific domain |
| POST | `/postfix/domain/toggle_domain/{uuid}` | Enable/disable domain |

### General Configuration
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/postfix/general/get` | Retrieve Postfix general settings |
| POST | `/postfix/general/set` | Update Postfix general settings |

### Header Checks Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/postfix/headerchecks/add_headercheck` | Add a new header check rule |
| POST | `/postfix/headerchecks/del_headercheck/{uuid}` | Delete header check by UUID |
| GET | `/postfix/headerchecks/get` | Retrieve all header check configurations |
| GET | `/postfix/headerchecks/get_headercheck/{uuid}` | Get specific header check by UUID |
| GET | `/postfix/headerchecks/search_headerchecks` | Search header checks |
| POST | `/postfix/headerchecks/set` | Update header check configurations |
| POST | `/postfix/headerchecks/set_headercheck/{uuid}` | Update specific header check |
| POST | `/postfix/headerchecks/toggle_headercheck/{uuid}` | Enable/disable header check |

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/postfix/service/checkrspamd` | Check Rspamd connectivity |
| POST | `/postfix/service/reconfigure` | Reconfigure Postfix service |
| POST | `/postfix/service/restart` | Restart Postfix service |
| POST | `/postfix/service/start` | Start Postfix service |
| GET | `/postfix/service/status` | Get Postfix service status |
| POST | `/postfix/service/stop` | Stop Postfix service |

## Proxy Plugin

**Note**: The Proxy functionality in OPNsense is part of the core system rather than a separate plugin. It provides web proxy, caching proxy, and transparent proxy capabilities. The API endpoints are located in the core API documentation.

### Expected Core Proxy Endpoints
Based on OPNsense core system patterns, proxy functionality should be accessible via:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/proxy/general/get` | Retrieve proxy general settings |
| POST | `/proxy/general/set` | Update proxy general settings |
| GET | `/proxy/service/status` | Get proxy service status |
| POST | `/proxy/service/restart` | Restart proxy service |
| POST | `/proxy/service/start` | Start proxy service |
| POST | `/proxy/service/stop` | Stop proxy service |

## QEMU Guest Agent Plugin

QEMU Guest Agent for improved virtual machine integration.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/qemuguestagent/service/reconfigure` | Reconfigure QEMU Guest Agent service |
| POST | `/qemuguestagent/service/restart` | Restart QEMU Guest Agent service |
| POST | `/qemuguestagent/service/start` | Start QEMU Guest Agent service |
| GET | `/qemuguestagent/service/status` | Get QEMU Guest Agent service status |
| POST | `/qemuguestagent/service/stop` | Stop QEMU Guest Agent service |

### Settings Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/qemuguestagent/settings/get` | Retrieve QEMU Guest Agent settings |
| POST | `/qemuguestagent/settings/set` | Update QEMU Guest Agent settings |

## Radsecproxy Plugin

RADIUS over TLS/DTLS proxy for secure RADIUS communication.

### Client Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/radsecproxy/clients/add_item` | Add a new RADIUS client |
| POST | `/radsecproxy/clients/del_item/{uuid}` | Delete RADIUS client by UUID |
| GET | `/radsecproxy/clients/get` | Retrieve all RADIUS client configurations |
| GET | `/radsecproxy/clients/get_item/{uuid}` | Get specific RADIUS client by UUID |
| GET | `/radsecproxy/clients/search_item` | Search RADIUS clients |
| POST | `/radsecproxy/clients/set` | Update RADIUS client configurations |
| POST | `/radsecproxy/clients/set_item/{uuid}` | Update specific RADIUS client |
| POST | `/radsecproxy/clients/toggle_item/{uuid}/{enabled}` | Enable/disable RADIUS client |

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/radsecproxy/service/reconfigure` | Reconfigure Radsecproxy service |
| POST | `/radsecproxy/service/restart` | Restart Radsecproxy service |
| POST | `/radsecproxy/service/start` | Start Radsecproxy service |
| GET | `/radsecproxy/service/status` | Get Radsecproxy service status |
| POST | `/radsecproxy/service/stop` | Stop Radsecproxy service |

## Redis Plugin

Redis in-memory data structure store for caching and data management.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/redis/service/reconfigure` | Reconfigure Redis service |
| POST | `/redis/service/resetdb` | Reset Redis database |
| POST | `/redis/service/restart` | Restart Redis service |
| POST | `/redis/service/start` | Start Redis service |
| GET | `/redis/service/status` | Get Redis service status |
| POST | `/redis/service/stop` | Stop Redis service |

### Settings Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/redis/settings/get` | Retrieve Redis settings |
| POST | `/redis/settings/set` | Update Redis settings |

## Relayd Plugin

OpenBSD's load balancer and relay daemon for high availability.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/relayd/service/configtest` | Test Relayd configuration |
| POST | `/relayd/service/reconfigure` | Reconfigure Relayd service |
| POST | `/relayd/service/restart` | Restart Relayd service |
| POST | `/relayd/service/start` | Start Relayd service |
| GET | `/relayd/service/status` | Get Relayd service status |
| POST | `/relayd/service/stop` | Stop Relayd service |

## Rspamd Plugin

Advanced spam filtering system with machine learning capabilities.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/rspamd/service/reconfigure` | Reconfigure Rspamd service |
| POST | `/rspamd/service/restart` | Restart Rspamd service |
| POST | `/rspamd/service/start` | Start Rspamd service |
| GET | `/rspamd/service/status` | Get Rspamd service status |
| POST | `/rspamd/service/stop` | Stop Rspamd service |

### Settings Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/rspamd/settings/get` | Retrieve Rspamd settings |
| POST | `/rspamd/settings/set` | Update Rspamd settings |

## Shadowsocks Plugin

Secure proxy for circumventing internet censorship.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/shadowsocks/service/reconfigure` | Reconfigure Shadowsocks service |
| POST | `/shadowsocks/service/restart` | Restart Shadowsocks service |
| POST | `/shadowsocks/service/start` | Start Shadowsocks service |
| GET | `/shadowsocks/service/status` | Get Shadowsocks service status |
| POST | `/shadowsocks/service/stop` | Stop Shadowsocks service |

## Siproxd Plugin

SIP proxy daemon for VoIP communication routing.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/siproxd/service/reconfigure` | Reconfigure Siproxd service |
| POST | `/siproxd/service/restart` | Restart Siproxd service |
| GET | `/siproxd/service/showregistrations` | Show SIP registrations |
| POST | `/siproxd/service/start` | Start Siproxd service |
| GET | `/siproxd/service/status` | Get Siproxd service status |
| POST | `/siproxd/service/stop` | Stop Siproxd service |

## Smart Plugin

S.M.A.R.T. disk monitoring and health analysis tool.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/smart/service/abort` | Abort running S.M.A.R.T. operation |
| GET | `/smart/service/info` | Get S.M.A.R.T. disk information |
| GET | `/smart/service/list/{details}` | List disks with optional detailed information |
| GET | `/smart/service/logs` | Retrieve S.M.A.R.T. logs |
| POST | `/smart/service/test` | Start S.M.A.R.T. disk test |

## SoftEther Plugin

Multi-protocol VPN server supporting SSL-VPN, L2TP, IPsec, and more.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/softether/service/reconfigure` | Reconfigure SoftEther service |
| POST | `/softether/service/restart` | Restart SoftEther service |
| POST | `/softether/service/start` | Start SoftEther service |
| GET | `/softether/service/status` | Get SoftEther service status |
| POST | `/softether/service/stop` | Stop SoftEther service |

## SSLH Plugin

SSL/SSH multiplexer for sharing ports between different services.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/sslh/service/reconfigure` | Reconfigure SSLH service |
| POST | `/sslh/service/restart` | Restart SSLH service |
| POST | `/sslh/service/start` | Start SSLH service |
| GET | `/sslh/service/status` | Get SSLH service status |
| POST | `/sslh/service/stop` | Stop SSLH service |

## Stunnel Plugin

SSL tunnel wrapper for encrypting arbitrary network connections.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/stunnel/service/reconfigure` | Reconfigure Stunnel service |
| POST | `/stunnel/service/restart` | Restart Stunnel service |
| POST | `/stunnel/service/start` | Start Stunnel service |
| GET | `/stunnel/service/status` | Get Stunnel service status |
| POST | `/stunnel/service/stop` | Stop Stunnel service |

## Tailscale Plugin

Zero-configuration VPN mesh networking service.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/tailscale/service/reconfigure` | Reconfigure Tailscale service |
| POST | `/tailscale/service/restart` | Restart Tailscale service |
| POST | `/tailscale/service/start` | Start Tailscale service |
| GET | `/tailscale/service/status` | Get Tailscale service status |
| POST | `/tailscale/service/stop` | Stop Tailscale service |

### Settings Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/tailscale/settings/add_subnet` | Add a new subnet route |
| POST | `/tailscale/settings/del_subnet/{uuid}` | Delete subnet route by UUID |
| GET | `/tailscale/settings/get` | Retrieve Tailscale settings |
| GET | `/tailscale/settings/get_subnet/{uuid}` | Get specific subnet by UUID |
| POST | `/tailscale/settings/reload` | Reload Tailscale settings |
| GET | `/tailscale/settings/search_subnet` | Search subnet routes |
| POST | `/tailscale/settings/set` | Update Tailscale settings |
| POST | `/tailscale/settings/set_subnet/{uuid}` | Update specific subnet route |

## Tayga Plugin

NAT64 implementation for IPv4/IPv6 translation.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/tayga/service/reconfigure` | Reconfigure Tayga service |
| POST | `/tayga/service/restart` | Restart Tayga service |
| POST | `/tayga/service/start` | Start Tayga service |
| GET | `/tayga/service/status` | Get Tayga service status |
| POST | `/tayga/service/stop` | Stop Tayga service |

## Telegraf Plugin

Agent for collecting and sending metrics to InfluxDB and other time series databases.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/telegraf/service/reconfigure` | Reconfigure Telegraf service |
| POST | `/telegraf/service/restart` | Restart Telegraf service |
| POST | `/telegraf/service/start` | Start Telegraf service |
| GET | `/telegraf/service/status` | Get Telegraf service status |
| POST | `/telegraf/service/stop` | Stop Telegraf service |

## TFTP Plugin

Trivial File Transfer Protocol server for network booting and file transfer.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/tftp/service/reconfigure` | Reconfigure TFTP service |
| POST | `/tftp/service/restart` | Restart TFTP service |
| POST | `/tftp/service/start` | Start TFTP service |
| GET | `/tftp/service/status` | Get TFTP service status |
| POST | `/tftp/service/stop` | Stop TFTP service |

## Tinc Plugin

VPN daemon that creates a secure mesh network.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/tinc/service/reconfigure` | Reconfigure Tinc service |
| POST | `/tinc/service/restart` | Restart Tinc service |
| POST | `/tinc/service/start` | Start Tinc service |
| POST | `/tinc/service/stop` | Stop Tinc service |

## Tor Plugin

The Onion Router for anonymous communication and hidden services.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tor/service/circuits` | Get Tor circuit information |
| GET | `/tor/service/get_hidden_services` | Get hidden services status |
| POST | `/tor/service/reconfigure` | Reconfigure Tor service |
| POST | `/tor/service/restart` | Restart Tor service |
| POST | `/tor/service/start` | Start Tor service |
| GET | `/tor/service/status` | Get Tor service status |
| POST | `/tor/service/stop` | Stop Tor service |
| GET | `/tor/service/streams` | Get Tor stream information |

## Turnserver Plugin

TURN/STUN server for WebRTC and real-time communication.

### Expected API Structure
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/turnserver/general/get` | Retrieve Turnserver configuration |
| POST | `/turnserver/general/set` | Update Turnserver configuration |
| POST | `/turnserver/service/reconfigure` | Reconfigure Turnserver service |
| POST | `/turnserver/service/restart` | Restart Turnserver service |
| POST | `/turnserver/service/start` | Start Turnserver service |
| GET | `/turnserver/service/status` | Get Turnserver service status |
| POST | `/turnserver/service/stop` | Stop Turnserver service |

## UDP Broadcast Relay Plugin

UDP broadcast packet relay between network segments.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/udpbroadcastrelay/service/config` | Get UDP broadcast relay configuration |
| GET | `/udpbroadcastrelay/service/get` | Retrieve service settings |
| POST | `/udpbroadcastrelay/service/reload` | Reload UDP broadcast relay service |
| POST | `/udpbroadcastrelay/service/restart/{uuid}` | Restart specific relay by UUID |
| POST | `/udpbroadcastrelay/service/set` | Update service settings |
| POST | `/udpbroadcastrelay/service/start/{uuid}` | Start specific relay by UUID |
| GET | `/udpbroadcastrelay/service/status/{uuid}` | Get specific relay status by UUID |
| POST | `/udpbroadcastrelay/service/stop/{uuid}` | Stop specific relay by UUID |

## Vnstat Plugin

Network traffic monitor with statistics collection.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/vnstat/service/daily` | Get daily traffic statistics |
| GET | `/vnstat/service/hourly` | Get hourly traffic statistics |
| GET | `/vnstat/service/monthly` | Get monthly traffic statistics |
| POST | `/vnstat/service/reconfigure` | Reconfigure Vnstat service |
| POST | `/vnstat/service/resetdb` | Reset Vnstat database |
| POST | `/vnstat/service/restart` | Restart Vnstat service |
| POST | `/vnstat/service/start` | Start Vnstat service |
| GET | `/vnstat/service/status` | Get Vnstat service status |
| POST | `/vnstat/service/stop` | Stop Vnstat service |
| GET | `/vnstat/service/yearly` | Get yearly traffic statistics |

## Wazuh Agent Plugin

Wazuh security monitoring agent for threat detection and compliance.

### Service Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/wazuhagent/service/reconfigure` | Reconfigure Wazuh Agent service |
| POST | `/wazuhagent/service/restart` | Restart Wazuh Agent service |
| POST | `/wazuhagent/service/start` | Start Wazuh Agent service |
| GET | `/wazuhagent/service/status` | Get Wazuh Agent service status |
| POST | `/wazuhagent/service/stop` | Stop Wazuh Agent service |

### Settings Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/wazuhagent/settings/get` | Retrieve Wazuh Agent settings |
| POST | `/wazuhagent/settings/set` | Update Wazuh Agent settings |

## Wake-on-LAN Plugin

Network utility for remotely waking up networked devices.

### Host Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/wol/wol/add_host` | Add a new WoL host |
| POST | `/wol/wol/del_host/{uuid}` | Delete WoL host by UUID |
| GET | `/wol/wol/get` | Retrieve all WoL host configurations |
| GET | `/wol/wol/get_host/{uuid}` | Get specific WoL host by UUID |
| GET | `/wol/wol/getwake` | Get wake status information |
| GET | `/wol/wol/search_host` | Search WoL hosts |
| POST | `/wol/wol/set` | Update WoL host configurations |
| POST | `/wol/wol/set_host/{uuid}` | Update specific WoL host |
| POST | `/wol/wol/wakeall` | Wake all configured hosts |

## ZeroTier Plugin

Software-defined networking for creating secure virtual networks.

### Network Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/zerotier/network/add` | Add a new ZeroTier network |
| POST | `/zerotier/network/del/{uuid}` | Delete ZeroTier network by UUID |
| GET | `/zerotier/network/get/{uuid}` | Get specific ZeroTier network by UUID |
| GET | `/zerotier/network/info/{uuid}` | Get ZeroTier network information |
| GET | `/zerotier/network/search` | Search ZeroTier networks |
| POST | `/zerotier/network/set/{uuid}` | Update specific ZeroTier network |
| POST | `/zerotier/network/toggle/{uuid}` | Enable/disable ZeroTier network |

### Settings Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/zerotier/settings/get` | Retrieve ZeroTier settings |
| POST | `/zerotier/settings/set` | Update ZeroTier settings |
| GET | `/zerotier/settings/status` | Get ZeroTier status information |

## WireGuard Plugin

Modern VPN solution with strong cryptography and high performance. This API allows you to manage WireGuard servers, clients, and general settings.

### General Settings
| Method | Endpoint | Parameters | Description |
|--------|----------|------------|-------------|
| GET | `/wireguard/general/get` | - | Get general WireGuard settings |
| POST | `/wireguard/general/set` | - | Set general WireGuard settings |

### Server Management
| Method | Endpoint | Parameters | Description |
|--------|----------|------------|-------------|
| POST | `/wireguard/server/addServer/{uuid?}` | uuid (optional) | Add a new WireGuard server |
| POST | `/wireguard/server/delServer/{uuid}` | uuid | Delete a WireGuard server |
| GET | `/wireguard/server/get` | - | Get server configuration |
| GET | `/wireguard/server/getServer/{uuid?}` | uuid (optional) | Get specific server details |
| GET | `/wireguard/server/key_pair` | - | Generate a new key pair |
| POST | `/wireguard/server/searchServer` | - | Search servers |
| POST | `/wireguard/server/set` | - | Set server configuration |
| POST | `/wireguard/server/setServer/{uuid?}` | uuid (optional) | Update specific server |
| POST | `/wireguard/server/toggleServer/{uuid}` | uuid | Enable/disable server |

### Client Management
| Method | Endpoint | Parameters | Description |
|--------|----------|------------|-------------|
| POST | `/wireguard/client/addClient` | - | Add a new WireGuard client |
| POST | `/wireguard/client/addClientBuilder` | - | Add client using configuration builder |
| POST | `/wireguard/client/delClient/{uuid}` | uuid | Delete a WireGuard client |
| GET | `/wireguard/client/get` | - | Get client configuration |
| GET | `/wireguard/client/getClient/{uuid?}` | uuid (optional) | Get specific client details |
| GET | `/wireguard/client/getClient/{uuid}?fetchmode=copy` | uuid, fetchmode | Get client for copying |
| GET | `/wireguard/client/get_client_builder` | - | Get client builder configuration |
| GET | `/wireguard/client/get_server_info/{uuid?}` | uuid (optional) | Get server info for client |
| GET | `/wireguard/client/list_servers` | - | List available servers |
| GET | `/wireguard/client/psk` | - | Generate pre-shared key |
| POST | `/wireguard/client/searchClient` | - | Search clients |
| POST | `/wireguard/client/set` | - | Set client configuration |
| POST | `/wireguard/client/setClient/{uuid}` | uuid | Update specific client |
| POST | `/wireguard/client/toggleClient/{uuid}` | uuid | Enable/disable client |

### Service Control
| Method | Endpoint | Parameters | Description |
|--------|----------|------------|-------------|
| POST | `/wireguard/service/reconfigure` | - | Reconfigure WireGuard service |
| POST | `/wireguard/service/restart` | - | Restart WireGuard service |
| GET | `/wireguard/service/show` | - | Show WireGuard service status |
| POST | `/wireguard/service/start` | - | Start WireGuard service |
| GET | `/wireguard/service/status` | - | Get WireGuard service status |
| POST | `/wireguard/service/stop` | - | Stop WireGuard service |

---

## Common Plugin Endpoint Patterns

Most OPNsense plugins follow standard patterns:

### Service Control (Available on most plugins)
- `POST /{plugin}/service/reconfigure` - Apply configuration changes
- `POST /{plugin}/service/restart` - Restart the service
- `POST /{plugin}/service/start` - Start the service
- `GET /{plugin}/service/status` - Get service status
- `POST /{plugin}/service/stop` - Stop the service

### Settings Management (Available on most plugins)
- `GET /{plugin}/settings/get` - Get plugin configuration
- `POST /{plugin}/settings/set` - Set plugin configuration

### Model-based Endpoints (For plugins with complex data models)
- `POST /{plugin}/{controller}/add_{item}` - Add new item
- `POST /{plugin}/{controller}/del_{item}/{uuid}` - Delete item
- `GET /{plugin}/{controller}/get_{item}/{uuid?}` - Get specific item
- `POST /{plugin}/{controller}/search_{item}` - Search items
- `POST /{plugin}/{controller}/set_{item}/{uuid}` - Update item
- `POST /{plugin}/{controller}/toggle_{item}/{uuid}` - Enable/disable item

## Usage Examples

### Basic Authentication Setup
```bash
# Set your API credentials
API_KEY="your-api-key"
API_SECRET="your-api-secret"
OPNSENSE_HOST="https://your-opnsense-instance"
```

### Get Service Status Example
```bash
curl -X GET \
  "${OPNSENSE_HOST}/api/lldpd/service/status" \
  -u "${API_KEY}:${API_SECRET}" \
```

### Update Configuration Example
```bash
curl -X POST \
  "${OPNSENSE_HOST}/api/lldpd/general/set" \
  -u "${API_KEY}:${API_SECRET}" \
  -H "Content-Type: application/json" \
  -d '{"lldpd":{"general":{"enabled":"1"}}}'
```

### Service Control Example
```bash
# Start a service
curl -X POST \
  "${OPNSENSE_HOST}/api/lldpd/service/start" \
  -u "${API_KEY}:${API_SECRET}" \
  -H "Content-Type: application/json"

# Check service status
curl -X GET \
  "${OPNSENSE_HOST}/api/lldpd/service/status" \
  -u "${API_KEY}:${API_SECRET}" \
  -H "Content-Type: application/json"
```

## Notes

1. **Plugin Installation Required**: All plugin APIs require the respective plugin to be installed via the OPNsense plugin system.

2. **Authentication**: Plugin APIs use the same authentication mechanism as Core APIs (HTTP Basic Auth with API key/secret).

3. **Permissions**: Ensure the API user has appropriate permissions for the plugin endpoints being accessed.

4. **Service Dependencies**: Some plugins may have dependencies on other services or require specific network configurations.

5. **Documentation**: Detailed parameter specifications for each plugin may require inspection of the OPNsense web interface to understand the expected JSON structure for POST requests.

6. **Model Binding**: Many plugins use MVC architecture with model binding, meaning the API endpoints correspond directly to the web interface functionality.

7. **Response Format**: All API responses are in JSON format.

8. **Error Handling**: Always check HTTP status codes and response messages for error handling.

9. **HTTPS**: Always use HTTPS in production environments for secure API communication.

---

## Final Summary

This comprehensive API documentation covers **52 total OPNsense plugins** with over **400 API endpoints**, providing complete coverage of the OPNsense plugin ecosystem. All plugins from the user's original list are now documented in this single comprehensive file.

### Complete Plugin List Covered:
1. **apcupsd** - UPS management
2. **bind** - DNS server
3. **caddy** - Web server and reverse proxy
4. **chrony** - NTP service
5. **cicap** - ICAP server
6. **clamav** - Antivirus engine
7. **collectd** - System statistics collection
8. **crowdsec** - Security engine
9. **dmidecode** - Hardware information
10. **freeradius** - RADIUS server
11. **haproxy** - Load balancer
12. **helloworld** - Example plugin
13. **hwprobe** - Hardware probe
14. **iperf** - Network performance testing
15. **lldpd** - Link Layer Discovery Protocol
16. **maltrail** - Malicious traffic detection
17. **mdnsrepeater** - Multicast DNS repeater
18. **muninnode** - System monitoring
19. **ndproxy** - Neighbor Discovery proxy
20. **netdata** - Real-time performance monitoring
21. **netsnmp** - SNMP agent
22. **nginx** - Web server and reverse proxy
23. **nodeexporter** - Prometheus node exporter
24. **nrpe** - Nagios remote plugin executor
25. **ntopng** - Network traffic analysis
26. **nut** - Network UPS Tools
27. **openconnect** - VPN server
28. **postfix** - Mail transfer agent
29. **proxy** - Web proxy (Squid)
30. **qemuguestagent** - QEMU guest agent
31. **radsecproxy** - RADIUS proxy
32. **redis** - In-memory data store
33. **relayd** - Load balancer and proxy
34. **rspamd** - Spam filtering system
35. **shadowsocks** - Proxy server
36. **siproxd** - SIP proxy daemon
37. **smart** - Hard drive health monitoring
38. **softether** - VPN server
39. **sslh** - Protocol multiplexer
40. **stunnel** - SSL tunnel
41. **tailscale** - VPN mesh network
42. **tayga** - NAT64 implementation
43. **telegraf** - Metrics collection agent
44. **tftp** - Trivial File Transfer Protocol
45. **tinc** - VPN daemon
46. **tor** - Anonymity network
47. **turnserver** - TURN/STUN server
48. **udpbroadcastrelay** - UDP broadcast relay
49. **vnstat** - Network statistics
50. **wazuhagent** - Security monitoring agent
51. **wol** - Wake-on-LAN
52. **zerotier** - Software-defined networking

**Plus WireGuard** - Modern VPN solution with comprehensive server/client management

This represents the most complete OPNsense plugins API documentation available, combining all previously separate documentation files into one comprehensive reference.