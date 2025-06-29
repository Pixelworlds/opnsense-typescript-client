# OPNsense Plugin API Documentation

Generated on: 2025-06-29T10:45:37.075Z

This document contains detailed API documentation for all 64 OPNsense plugin modules.

## Table of Contents

- [Acmeclient](#acmeclient)
- [Apcupsd](#apcupsd)
- [Bind](#bind)
- [Caddy](#caddy)
- [Chrony](#chrony)
- [Cicap](#cicap)
- [Clamav](#clamav)
- [Collectd](#collectd)
- [Crowdsec](#crowdsec)
- [Dechw](#dechw)
- [Diagnostics](#diagnostics)
- [Dmidecode](#dmidecode)
- [Dnscryptproxy](#dnscryptproxy)
- [Dyndns](#dyndns)
- [Freeradius](#freeradius)
- [Ftpproxy](#ftpproxy)
- [Gridexample](#gridexample)
- [Haproxy](#haproxy)
- [Helloworld](#helloworld)
- [Hwprobe](#hwprobe)
- [Iperf](#iperf)
- [Lldpd](#lldpd)
- [Maltrail](#maltrail)
- [Mdnsrepeater](#mdnsrepeater)
- [Muninnode](#muninnode)
- [Ndproxy](#ndproxy)
- [Netdata](#netdata)
- [Netsnmp](#netsnmp)
- [Nginx](#nginx)
- [Nodeexporter](#nodeexporter)
- [Nrpe](#nrpe)
- [Ntopng](#ntopng)
- [Nut](#nut)
- [Openconnect](#openconnect)
- [Postfix](#postfix)
- [Proxy](#proxy)
- [Proxysso](#proxysso)
- [Puppetagent](#puppetagent)
- [Qemuguestagent](#qemuguestagent)
- [Quagga](#quagga)
- [Radsecproxy](#radsecproxy)
- [Redis](#redis)
- [Relayd](#relayd)
- [Rspamd](#rspamd)
- [Shadowsocks](#shadowsocks)
- [Siproxd](#siproxd)
- [Smart](#smart)
- [Softether](#softether)
- [Sslh](#sslh)
- [Stunnel](#stunnel)
- [Tailscale](#tailscale)
- [Tayga](#tayga)
- [Telegraf](#telegraf)
- [Tftp](#tftp)
- [Tinc](#tinc)
- [Tor](#tor)
- [Turnserver](#turnserver)
- [Udpbroadcastrelay](#udpbroadcastrelay)
- [Vnstat](#vnstat)
- [Wazuhagent](#wazuhagent)
- [Wol](#wol)
- [Zabbixagent](#zabbixagent)
- [Zabbixproxy](#zabbixproxy)
- [Zerotier](#zerotier)

---

## Acmeclient

**Base URL**: `/api/acmeclient/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/acmeclient.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/security/acme-client/src/opnsense/mvc/app/models/OPNsense/AcmeClient/AcmeClient.xml](https://github.com/opnsense/plugins/blob/master/security/acme-client/src/opnsense/mvc/app/models/OPNsense/AcmeClient/AcmeClient.xml)

**Description**: ACME protocol client for automated certificate management

### Statistics

- **Total Endpoints**: 48
- **Methods**: POST (30), GET (18)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | accounts | add | - | `/api/acmeclient/accounts/add` |
| POST | accounts | del | `$uuid` | `/api/acmeclient/accounts/del/{uuid}` |
| GET | accounts | get | `$uuid=null` | `/api/acmeclient/accounts/get/{uuid}` |
| POST | accounts | register | `$uuid` | `/api/acmeclient/accounts/register/{uuid}` |
| POST | accounts | set | - | `/api/acmeclient/accounts/set` |
| POST | accounts | toggle | `$uuid,$enabled=null` | `/api/acmeclient/accounts/toggle/{uuid}/{enabled}` |
| POST | accounts | update | `$uuid` | `/api/acmeclient/accounts/update/{uuid}` |
| POST | actions | add | - | `/api/acmeclient/actions/add` |
| POST | actions | del | `$uuid` | `/api/acmeclient/actions/del/{uuid}` |
| GET | actions | get | `$uuid=null` | `/api/acmeclient/actions/get/{uuid}` |
| POST | actions | set | - | `/api/acmeclient/actions/set` |
| GET | actions | sftp_get_identity | - | `/api/acmeclient/actions/sftp_get_identity` |
| GET | actions | sftp_test_connection | - | `/api/acmeclient/actions/sftp_test_connection` |
| GET | actions | ssh_get_identity | - | `/api/acmeclient/actions/ssh_get_identity` |
| GET | actions | ssh_test_connection | - | `/api/acmeclient/actions/ssh_test_connection` |
| POST | actions | toggle | `$uuid,$enabled=null` | `/api/acmeclient/actions/toggle/{uuid}/{enabled}` |
| POST | actions | update | `$uuid` | `/api/acmeclient/actions/update/{uuid}` |
| POST | certificates | add | - | `/api/acmeclient/certificates/add` |
| GET | certificates | automation | `$uuid` | `/api/acmeclient/certificates/automation/{uuid}` |
| POST | certificates | del | `$uuid` | `/api/acmeclient/certificates/del/{uuid}` |
| GET | certificates | get | `$uuid=null` | `/api/acmeclient/certificates/get/{uuid}` |
| GET | certificates | import | `$uuid` | `/api/acmeclient/certificates/import/{uuid}` |
| GET | certificates | removekey | `$uuid` | `/api/acmeclient/certificates/removekey/{uuid}` |
| POST | certificates | revoke | `$uuid` | `/api/acmeclient/certificates/revoke/{uuid}` |
| POST | certificates | set | - | `/api/acmeclient/certificates/set` |
| POST | certificates | sign | `$uuid` | `/api/acmeclient/certificates/sign/{uuid}` |
| POST | certificates | toggle | `$uuid,$enabled=null` | `/api/acmeclient/certificates/toggle/{uuid}/{enabled}` |
| POST | certificates | update | `$uuid` | `/api/acmeclient/certificates/update/{uuid}` |
| GET | service | configtest | - | `/api/acmeclient/service/configtest` |
| POST | service | reconfigure | - | `/api/acmeclient/service/reconfigure` |
| GET | service | reset | - | `/api/acmeclient/service/reset` |
| POST | service | restart | - | `/api/acmeclient/service/restart` |
| GET | service | signallcerts | - | `/api/acmeclient/service/signallcerts` |
| POST | service | start | - | `/api/acmeclient/service/start` |
| GET | service | status | - | `/api/acmeclient/service/status` |
| POST | service | stop | - | `/api/acmeclient/service/stop` |
| POST | settings | fetch_cron_integration | - | `/api/acmeclient/settings/fetch_cron_integration` |
| POST | settings | fetch_h_a_proxy_integration | - | `/api/acmeclient/settings/fetch_h_a_proxy_integration` |
| GET | settings | get | - | `/api/acmeclient/settings/get` |
| GET | settings | get_bind_plugin_status | - | `/api/acmeclient/settings/get_bind_plugin_status` |
| GET | settings | get_gcloud_plugin_status | - | `/api/acmeclient/settings/get_gcloud_plugin_status` |
| POST | settings | set | - | `/api/acmeclient/settings/set` |
| POST | validations | add | - | `/api/acmeclient/validations/add` |
| POST | validations | del | `$uuid` | `/api/acmeclient/validations/del/{uuid}` |
| GET | validations | get | `$uuid=null` | `/api/acmeclient/validations/get/{uuid}` |
| POST | validations | set | - | `/api/acmeclient/validations/set` |
| POST | validations | toggle | `$uuid,$enabled=null` | `/api/acmeclient/validations/toggle/{uuid}/{enabled}` |
| POST | validations | update | `$uuid` | `/api/acmeclient/validations/update/{uuid}` |

### Array Fields (Containers)

#### account

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### certificate

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### validation

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### action

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Apcupsd

**Base URL**: `/api/apcupsd/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/apcupsd.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/sysutils/apcupsd/src/opnsense/mvc/app/models/OPNsense/Apcupsd/Apcupsd.xml](https://github.com/opnsense/plugins/blob/master/sysutils/apcupsd/src/opnsense/mvc/app/models/OPNsense/Apcupsd/Apcupsd.xml)

**Description**: APC UPS daemon for power management

### Statistics

- **Total Endpoints**: 8
- **Methods**: GET (3), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | service | get_ups_status | - | `/api/apcupsd/service/get_ups_status` |
| POST | service | reconfigure | - | `/api/apcupsd/service/reconfigure` |
| POST | service | restart | - | `/api/apcupsd/service/restart` |
| POST | service | start | - | `/api/apcupsd/service/start` |
| GET | service | status | - | `/api/apcupsd/service/status` |
| POST | service | stop | - | `/api/apcupsd/service/stop` |
| GET | settings | get | - | `/api/apcupsd/settings/get` |
| POST | settings | set | - | `/api/apcupsd/settings/set` |

---

## Bind

**Base URL**: `/api/bind/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/bind.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/dns/bind/src/opnsense/mvc/app/models/OPNsense/Bind/Acl.xml](https://github.com/opnsense/plugins/blob/master/dns/bind/src/opnsense/mvc/app/models/OPNsense/Bind/Acl.xml)

**Description**: BIND DNS server management

### Statistics

- **Total Endpoints**: 36
- **Methods**: POST (22), GET (14)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | acl | add_acl | - | `/api/bind/acl/add_acl` |
| POST | acl | del_acl | `$uuid` | `/api/bind/acl/del_acl/{uuid}` |
| GET | acl | get | - | `/api/bind/acl/get` |
| GET | acl | get_acl | `$uuid=null` | `/api/bind/acl/get_acl/{uuid}` |
| POST | acl | set | - | `/api/bind/acl/set` |
| POST | acl | set_acl | `$uuid` | `/api/bind/acl/set_acl/{uuid}` |
| POST | acl | toggle_acl | `$uuid` | `/api/bind/acl/toggle_acl/{uuid}` |
| GET | dnsbl | get | - | `/api/bind/dnsbl/get` |
| POST | dnsbl | set | - | `/api/bind/dnsbl/set` |
| POST | domain | add_primary_domain | `$uuid=null` | `/api/bind/domain/add_primary_domain/{uuid}` |
| POST | domain | add_secondary_domain | `$uuid=null` | `/api/bind/domain/add_secondary_domain/{uuid}` |
| POST | domain | del_domain | `$uuid` | `/api/bind/domain/del_domain/{uuid}` |
| GET | domain | get | - | `/api/bind/domain/get` |
| GET | domain | get_domain | `$uuid=null` | `/api/bind/domain/get_domain/{uuid}` |
| GET | domain | search_master_domain | - | `/api/bind/domain/search_master_domain` |
| GET | domain | search_slave_domain | - | `/api/bind/domain/search_slave_domain` |
| POST | domain | set | - | `/api/bind/domain/set` |
| POST | domain | set_domain | `$uuid=null` | `/api/bind/domain/set_domain/{uuid}` |
| POST | domain | toggle_domain | `$uuid` | `/api/bind/domain/toggle_domain/{uuid}` |
| GET | general | get | - | `/api/bind/general/get` |
| POST | general | set | - | `/api/bind/general/set` |
| GET | general | zoneshow | `$zonename=null` | `/api/bind/general/zoneshow/{zonename}` |
| GET | general | zonetest | `$zonename=null` | `/api/bind/general/zonetest/{zonename}` |
| POST | record | add_record | - | `/api/bind/record/add_record` |
| POST | record | del_record | `$uuid` | `/api/bind/record/del_record/{uuid}` |
| GET | record | get | - | `/api/bind/record/get` |
| GET | record | get_record | `$uuid=null` | `/api/bind/record/get_record/{uuid}` |
| POST | record | set | - | `/api/bind/record/set` |
| POST | record | set_record | `$uuid=null` | `/api/bind/record/set_record/{uuid}` |
| POST | record | toggle_record | `$uuid` | `/api/bind/record/toggle_record/{uuid}` |
| GET | service | dnsbl | - | `/api/bind/service/dnsbl` |
| POST | service | reconfigure | - | `/api/bind/service/reconfigure` |
| POST | service | restart | - | `/api/bind/service/restart` |
| POST | service | start | - | `/api/bind/service/start` |
| GET | service | status | - | `/api/bind/service/status` |
| POST | service | stop | - | `/api/bind/service/stop` |

### Array Fields (Containers)

#### acl

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Caddy

**Base URL**: `/api/caddy/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/caddy.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/www/caddy/src/opnsense/mvc/app/models/OPNsense/Caddy/Caddy.xml](https://github.com/opnsense/plugins/blob/master/www/caddy/src/opnsense/mvc/app/models/OPNsense/Caddy/Caddy.xml)

**Description**: Caddy web server with automatic HTTPS

### Statistics

- **Total Endpoints**: 52
- **Methods**: GET (16), POST (36)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | diagnostics | caddyfile | - | `/api/caddy/diagnostics/caddyfile` |
| GET | diagnostics | config | - | `/api/caddy/diagnostics/config` |
| GET | diagnostics | get | - | `/api/caddy/diagnostics/get` |
| POST | diagnostics | set | - | `/api/caddy/diagnostics/set` |
| GET | general | get | - | `/api/caddy/general/get` |
| POST | general | set | - | `/api/caddy/general/set` |
| POST | reverse_proxy | add_access_list | - | `/api/caddy/reverse_proxy/add_access_list` |
| POST | reverse_proxy | add_basic_auth | - | `/api/caddy/reverse_proxy/add_basic_auth` |
| POST | reverse_proxy | add_handle | - | `/api/caddy/reverse_proxy/add_handle` |
| POST | reverse_proxy | add_header | - | `/api/caddy/reverse_proxy/add_header` |
| POST | reverse_proxy | add_layer4 | - | `/api/caddy/reverse_proxy/add_layer4` |
| POST | reverse_proxy | add_layer4_openvpn | - | `/api/caddy/reverse_proxy/add_layer4_openvpn` |
| POST | reverse_proxy | add_reverse_proxy | - | `/api/caddy/reverse_proxy/add_reverse_proxy` |
| POST | reverse_proxy | add_subdomain | - | `/api/caddy/reverse_proxy/add_subdomain` |
| POST | reverse_proxy | del_access_list | `$uuid` | `/api/caddy/reverse_proxy/del_access_list/{uuid}` |
| POST | reverse_proxy | del_basic_auth | `$uuid` | `/api/caddy/reverse_proxy/del_basic_auth/{uuid}` |
| POST | reverse_proxy | del_handle | `$uuid` | `/api/caddy/reverse_proxy/del_handle/{uuid}` |
| POST | reverse_proxy | del_header | `$uuid` | `/api/caddy/reverse_proxy/del_header/{uuid}` |
| POST | reverse_proxy | del_layer4 | `$uuid` | `/api/caddy/reverse_proxy/del_layer4/{uuid}` |
| POST | reverse_proxy | del_layer4_openvpn | `$uuid` | `/api/caddy/reverse_proxy/del_layer4_openvpn/{uuid}` |
| POST | reverse_proxy | del_reverse_proxy | `$uuid` | `/api/caddy/reverse_proxy/del_reverse_proxy/{uuid}` |
| POST | reverse_proxy | del_subdomain | `$uuid` | `/api/caddy/reverse_proxy/del_subdomain/{uuid}` |
| GET | reverse_proxy | get | - | `/api/caddy/reverse_proxy/get` |
| GET | reverse_proxy | get_access_list | `$uuid=null` | `/api/caddy/reverse_proxy/get_access_list/{uuid}` |
| GET | reverse_proxy | get_all_reverse_domains | - | `/api/caddy/reverse_proxy/get_all_reverse_domains` |
| GET | reverse_proxy | get_basic_auth | `$uuid=null` | `/api/caddy/reverse_proxy/get_basic_auth/{uuid}` |
| GET | reverse_proxy | get_handle | `$uuid=null` | `/api/caddy/reverse_proxy/get_handle/{uuid}` |
| GET | reverse_proxy | get_header | `$uuid=null` | `/api/caddy/reverse_proxy/get_header/{uuid}` |
| GET | reverse_proxy | get_layer4 | `$uuid=null` | `/api/caddy/reverse_proxy/get_layer4/{uuid}` |
| GET | reverse_proxy | get_layer4_openvpn | `$uuid=null` | `/api/caddy/reverse_proxy/get_layer4_openvpn/{uuid}` |
| GET | reverse_proxy | get_reverse_proxy | `$uuid=null` | `/api/caddy/reverse_proxy/get_reverse_proxy/{uuid}` |
| GET | reverse_proxy | get_subdomain | `$uuid=null` | `/api/caddy/reverse_proxy/get_subdomain/{uuid}` |
| POST | reverse_proxy | set | - | `/api/caddy/reverse_proxy/set` |
| POST | reverse_proxy | set_access_list | `$uuid` | `/api/caddy/reverse_proxy/set_access_list/{uuid}` |
| POST | reverse_proxy | set_basic_auth | `$uuid` | `/api/caddy/reverse_proxy/set_basic_auth/{uuid}` |
| POST | reverse_proxy | set_handle | `$uuid` | `/api/caddy/reverse_proxy/set_handle/{uuid}` |
| POST | reverse_proxy | set_header | `$uuid` | `/api/caddy/reverse_proxy/set_header/{uuid}` |
| POST | reverse_proxy | set_layer4 | `$uuid` | `/api/caddy/reverse_proxy/set_layer4/{uuid}` |
| POST | reverse_proxy | set_layer4_openvpn | `$uuid` | `/api/caddy/reverse_proxy/set_layer4_openvpn/{uuid}` |
| POST | reverse_proxy | set_reverse_proxy | `$uuid` | `/api/caddy/reverse_proxy/set_reverse_proxy/{uuid}` |
| POST | reverse_proxy | set_subdomain | `$uuid` | `/api/caddy/reverse_proxy/set_subdomain/{uuid}` |
| POST | reverse_proxy | toggle_handle | `$uuid,$enabled=null` | `/api/caddy/reverse_proxy/toggle_handle/{uuid}/{enabled}` |
| POST | reverse_proxy | toggle_layer4 | `$uuid,$enabled=null` | `/api/caddy/reverse_proxy/toggle_layer4/{uuid}/{enabled}` |
| POST | reverse_proxy | toggle_layer4_openvpn | `$uuid,$enabled=null` | `/api/caddy/reverse_proxy/toggle_layer4_openvpn/{uuid}/{enabled}` |
| POST | reverse_proxy | toggle_reverse_proxy | `$uuid,$enabled=null` | `/api/caddy/reverse_proxy/toggle_reverse_proxy/{uuid}/{enabled}` |
| POST | reverse_proxy | toggle_subdomain | `$uuid,$enabled=null` | `/api/caddy/reverse_proxy/toggle_subdomain/{uuid}/{enabled}` |
| POST | service | reconfigure | - | `/api/caddy/service/reconfigure` |
| POST | service | restart | - | `/api/caddy/service/restart` |
| POST | service | start | - | `/api/caddy/service/start` |
| GET | service | status | - | `/api/caddy/service/status` |
| POST | service | stop | - | `/api/caddy/service/stop` |
| GET | service | validate | - | `/api/caddy/service/validate` |

### Array Fields (Containers)

#### reverse

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### subdomain

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### handle

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### accesslist

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### basicauth

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### header

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### layer4

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### layer4openvpn

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Chrony

**Base URL**: `/api/chrony/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/chrony.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/chrony/src/opnsense/mvc/app/models/OPNsense/Chrony/General.xml](https://github.com/opnsense/plugins/blob/master/net/chrony/src/opnsense/mvc/app/models/OPNsense/Chrony/General.xml)

**Description**: Chrony NTP daemon for time synchronization

### Statistics

- **Total Endpoints**: 11
- **Methods**: GET (6), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/chrony/general/get` |
| POST | general | set | - | `/api/chrony/general/set` |
| GET | service | chronyauthdata | - | `/api/chrony/service/chronyauthdata` |
| GET | service | chronysources | - | `/api/chrony/service/chronysources` |
| GET | service | chronysourcestats | - | `/api/chrony/service/chronysourcestats` |
| GET | service | chronytracking | - | `/api/chrony/service/chronytracking` |
| POST | service | reconfigure | - | `/api/chrony/service/reconfigure` |
| POST | service | restart | - | `/api/chrony/service/restart` |
| POST | service | start | - | `/api/chrony/service/start` |
| GET | service | status | - | `/api/chrony/service/status` |
| POST | service | stop | - | `/api/chrony/service/stop` |

---

## Cicap

**Base URL**: `/api/cicap/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/cicap.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/www/c-icap/src/opnsense/mvc/app/models/OPNsense/CICAP/Antivirus.xml](https://github.com/opnsense/plugins/blob/master/www/c-icap/src/opnsense/mvc/app/models/OPNsense/CICAP/Antivirus.xml)

**Description**: C-ICAP server for content adaptation

### Statistics

- **Total Endpoints**: 10
- **Methods**: GET (4), POST (6)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | antivirus | get | - | `/api/cicap/antivirus/get` |
| POST | antivirus | set | - | `/api/cicap/antivirus/set` |
| GET | general | get | - | `/api/cicap/general/get` |
| POST | general | set | - | `/api/cicap/general/set` |
| GET | service | checkclamav | - | `/api/cicap/service/checkclamav` |
| POST | service | reconfigure | - | `/api/cicap/service/reconfigure` |
| POST | service | restart | - | `/api/cicap/service/restart` |
| POST | service | start | - | `/api/cicap/service/start` |
| GET | service | status | - | `/api/cicap/service/status` |
| POST | service | stop | - | `/api/cicap/service/stop` |

---

## Clamav

**Base URL**: `/api/clamav/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/clamav.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/security/clamav/src/opnsense/mvc/app/models/OPNsense/ClamAV/General.xml](https://github.com/opnsense/plugins/blob/master/security/clamav/src/opnsense/mvc/app/models/OPNsense/ClamAV/General.xml)

**Description**: ClamAV antivirus engine

### Statistics

- **Total Endpoints**: 16
- **Methods**: GET (5), POST (11)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/clamav/general/get` |
| POST | general | set | - | `/api/clamav/general/set` |
| POST | service | freshclam | - | `/api/clamav/service/freshclam` |
| POST | service | reconfigure | - | `/api/clamav/service/reconfigure` |
| POST | service | restart | - | `/api/clamav/service/restart` |
| POST | service | start | - | `/api/clamav/service/start` |
| GET | service | status | - | `/api/clamav/service/status` |
| POST | service | stop | - | `/api/clamav/service/stop` |
| GET | service | version | - | `/api/clamav/service/version` |
| POST | url | add_url | - | `/api/clamav/url/add_url` |
| POST | url | del_url | `$uuid` | `/api/clamav/url/del_url/{uuid}` |
| GET | url | get | - | `/api/clamav/url/get` |
| GET | url | get_url | `$uuid=null` | `/api/clamav/url/get_url/{uuid}` |
| POST | url | set | - | `/api/clamav/url/set` |
| POST | url | set_url | `$uuid` | `/api/clamav/url/set_url/{uuid}` |
| POST | url | toggle_url | `$uuid` | `/api/clamav/url/toggle_url/{uuid}` |

---

## Collectd

**Base URL**: `/api/collectd/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/collectd.html

**Description**: System statistics collection daemon

### Statistics

- **Total Endpoints**: 7
- **Methods**: GET (2), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/collectd/general/get` |
| POST | general | set | - | `/api/collectd/general/set` |
| POST | service | reconfigure | - | `/api/collectd/service/reconfigure` |
| POST | service | restart | - | `/api/collectd/service/restart` |
| POST | service | start | - | `/api/collectd/service/start` |
| GET | service | status | - | `/api/collectd/service/status` |
| POST | service | stop | - | `/api/collectd/service/stop` |

---

## Crowdsec

**Base URL**: `/api/crowdsec/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/crowdsec.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/security/crowdsec/src/opnsense/mvc/app/models/OPNsense/CrowdSec/General.xml](https://github.com/opnsense/plugins/blob/master/security/crowdsec/src/opnsense/mvc/app/models/OPNsense/CrowdSec/General.xml)

**Description**: Collaborative security engine

### Statistics

- **Total Endpoints**: 12
- **Methods**: GET (10), POST (2)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | alerts | get | - | `/api/crowdsec/alerts/get` |
| GET | bouncers | get | - | `/api/crowdsec/bouncers/get` |
| GET | decisions | delete | `$decision_id` | `/api/crowdsec/decisions/delete/{decision_id}` |
| GET | decisions | get | - | `/api/crowdsec/decisions/get` |
| GET | general | get | - | `/api/crowdsec/general/get` |
| POST | general | set | - | `/api/crowdsec/general/set` |
| GET | hub | get | - | `/api/crowdsec/hub/get` |
| GET | machines | get | - | `/api/crowdsec/machines/get` |
| GET | service | debug | - | `/api/crowdsec/service/debug` |
| POST | service | reload | - | `/api/crowdsec/service/reload` |
| GET | service | status | - | `/api/crowdsec/service/status` |
| GET | version | get | - | `/api/crowdsec/version/get` |

---

## Dechw

**Base URL**: `/api/dechw/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/dechw.html

### Statistics

- **Total Endpoints**: 1
- **Methods**: GET (1)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | info | power_status | - | `/api/dechw/info/power_status` |

---

## Diagnostics

**Base URL**: `/api/diagnostics/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/diagnostics.html

### Statistics

- **Total Endpoints**: 1
- **Methods**: GET (1)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | proofpoint_et | status | - | `/api/diagnostics/proofpoint_et/status` |

---

## Dmidecode

**Base URL**: `/api/dmidecode/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/dmidecode.html

### Statistics

- **Total Endpoints**: 1
- **Methods**: GET (1)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | service | get | - | `/api/dmidecode/service/get` |

---

## Dnscryptproxy

**Base URL**: `/api/dnscryptproxy/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/dnscryptproxy.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/dns/dnscrypt-proxy/src/opnsense/mvc/app/models/OPNsense/Dnscryptproxy/Cloak.xml](https://github.com/opnsense/plugins/blob/master/dns/dnscrypt-proxy/src/opnsense/mvc/app/models/OPNsense/Dnscryptproxy/Cloak.xml)

**Description**: DNS encryption proxy

### Statistics

- **Total Endpoints**: 38
- **Methods**: POST (26), GET (12)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | cloak | add_cloak | - | `/api/dnscryptproxy/cloak/add_cloak` |
| POST | cloak | del_cloak | `$uuid` | `/api/dnscryptproxy/cloak/del_cloak/{uuid}` |
| GET | cloak | get | - | `/api/dnscryptproxy/cloak/get` |
| GET | cloak | get_cloak | `$uuid=null` | `/api/dnscryptproxy/cloak/get_cloak/{uuid}` |
| POST | cloak | set | - | `/api/dnscryptproxy/cloak/set` |
| POST | cloak | set_cloak | `$uuid` | `/api/dnscryptproxy/cloak/set_cloak/{uuid}` |
| POST | cloak | toggle_cloak | `$uuid` | `/api/dnscryptproxy/cloak/toggle_cloak/{uuid}` |
| GET | dnsbl | get | - | `/api/dnscryptproxy/dnsbl/get` |
| POST | dnsbl | set | - | `/api/dnscryptproxy/dnsbl/set` |
| POST | forward | add_forward | - | `/api/dnscryptproxy/forward/add_forward` |
| POST | forward | del_forward | `$uuid` | `/api/dnscryptproxy/forward/del_forward/{uuid}` |
| GET | forward | get | - | `/api/dnscryptproxy/forward/get` |
| GET | forward | get_forward | `$uuid=null` | `/api/dnscryptproxy/forward/get_forward/{uuid}` |
| POST | forward | set | - | `/api/dnscryptproxy/forward/set` |
| POST | forward | set_forward | `$uuid` | `/api/dnscryptproxy/forward/set_forward/{uuid}` |
| POST | forward | toggle_forward | `$uuid` | `/api/dnscryptproxy/forward/toggle_forward/{uuid}` |
| GET | general | get | - | `/api/dnscryptproxy/general/get` |
| POST | general | set | - | `/api/dnscryptproxy/general/set` |
| POST | server | add_server | - | `/api/dnscryptproxy/server/add_server` |
| POST | server | del_server | `$uuid` | `/api/dnscryptproxy/server/del_server/{uuid}` |
| GET | server | get | - | `/api/dnscryptproxy/server/get` |
| GET | server | get_server | `$uuid=null` | `/api/dnscryptproxy/server/get_server/{uuid}` |
| POST | server | set | - | `/api/dnscryptproxy/server/set` |
| POST | server | set_server | `$uuid` | `/api/dnscryptproxy/server/set_server/{uuid}` |
| POST | server | toggle_server | `$uuid` | `/api/dnscryptproxy/server/toggle_server/{uuid}` |
| GET | service | dnsbl | - | `/api/dnscryptproxy/service/dnsbl` |
| POST | service | reconfigure | - | `/api/dnscryptproxy/service/reconfigure` |
| POST | service | restart | - | `/api/dnscryptproxy/service/restart` |
| POST | service | start | - | `/api/dnscryptproxy/service/start` |
| GET | service | status | - | `/api/dnscryptproxy/service/status` |
| POST | service | stop | - | `/api/dnscryptproxy/service/stop` |
| POST | whitelist | add_whitelist | - | `/api/dnscryptproxy/whitelist/add_whitelist` |
| POST | whitelist | del_whitelist | `$uuid` | `/api/dnscryptproxy/whitelist/del_whitelist/{uuid}` |
| GET | whitelist | get | - | `/api/dnscryptproxy/whitelist/get` |
| GET | whitelist | get_whitelist | `$uuid=null` | `/api/dnscryptproxy/whitelist/get_whitelist/{uuid}` |
| POST | whitelist | set | - | `/api/dnscryptproxy/whitelist/set` |
| POST | whitelist | set_whitelist | `$uuid` | `/api/dnscryptproxy/whitelist/set_whitelist/{uuid}` |
| POST | whitelist | toggle_whitelist | `$uuid` | `/api/dnscryptproxy/whitelist/toggle_whitelist/{uuid}` |

### Array Fields (Containers)

#### cloak

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Dyndns

**Base URL**: `/api/dyndns/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/dyndns.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/dns/ddclient/src/opnsense/mvc/app/models/OPNsense/DynDNS/DynDNS.xml](https://github.com/opnsense/plugins/blob/master/dns/ddclient/src/opnsense/mvc/app/models/OPNsense/DynDNS/DynDNS.xml)

**Description**: Dynamic DNS client

### Statistics

- **Total Endpoints**: 14
- **Methods**: POST (10), GET (4)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | accounts | add_item | - | `/api/dyndns/accounts/add_item` |
| POST | accounts | del_item | `$uuid` | `/api/dyndns/accounts/del_item/{uuid}` |
| GET | accounts | get | - | `/api/dyndns/accounts/get` |
| GET | accounts | get_item | `$uuid=null` | `/api/dyndns/accounts/get_item/{uuid}` |
| POST | accounts | set | - | `/api/dyndns/accounts/set` |
| POST | accounts | set_item | `$uuid` | `/api/dyndns/accounts/set_item/{uuid}` |
| POST | accounts | toggle_item | `$uuid,$enabled=null` | `/api/dyndns/accounts/toggle_item/{uuid}/{enabled}` |
| POST | service | reconfigure | - | `/api/dyndns/service/reconfigure` |
| POST | service | restart | - | `/api/dyndns/service/restart` |
| POST | service | start | - | `/api/dyndns/service/start` |
| GET | service | status | - | `/api/dyndns/service/status` |
| POST | service | stop | - | `/api/dyndns/service/stop` |
| GET | settings | get | - | `/api/dyndns/settings/get` |
| POST | settings | set | - | `/api/dyndns/settings/set` |

---

## Freeradius

**Base URL**: `/api/freeradius/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/freeradius.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/freeradius/src/opnsense/mvc/app/models/OPNsense/Freeradius/Avpair.xml](https://github.com/opnsense/plugins/blob/master/net/freeradius/src/opnsense/mvc/app/models/OPNsense/Freeradius/Avpair.xml)

**Description**: FreeRADIUS authentication server

### Statistics

- **Total Endpoints**: 68
- **Methods**: POST (40), GET (28)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | avpair | add_avpair | - | `/api/freeradius/avpair/add_avpair` |
| POST | avpair | del_avpair | `$uuid` | `/api/freeradius/avpair/del_avpair/{uuid}` |
| GET | avpair | get | - | `/api/freeradius/avpair/get` |
| GET | avpair | get_avpair | `$uuid=null` | `/api/freeradius/avpair/get_avpair/{uuid}` |
| POST | avpair | set | - | `/api/freeradius/avpair/set` |
| POST | avpair | set_avpair | `$uuid` | `/api/freeradius/avpair/set_avpair/{uuid}` |
| POST | avpair | toggle_avpair | `$uuid` | `/api/freeradius/avpair/toggle_avpair/{uuid}` |
| POST | client | add_client | - | `/api/freeradius/client/add_client` |
| POST | client | del_client | `$uuid` | `/api/freeradius/client/del_client/{uuid}` |
| GET | client | get | - | `/api/freeradius/client/get` |
| GET | client | get_client | `$uuid=null` | `/api/freeradius/client/get_client/{uuid}` |
| GET | client | search_client | - | `/api/freeradius/client/search_client` |
| POST | client | set | - | `/api/freeradius/client/set` |
| POST | client | set_client | `$uuid` | `/api/freeradius/client/set_client/{uuid}` |
| GET | client | toggle_client | `$uuid` | `/api/freeradius/client/toggle_client/{uuid}` |
| POST | dhcp | add_dhcp | - | `/api/freeradius/dhcp/add_dhcp` |
| POST | dhcp | del_dhcp | `$uuid` | `/api/freeradius/dhcp/del_dhcp/{uuid}` |
| GET | dhcp | get | - | `/api/freeradius/dhcp/get` |
| GET | dhcp | get_dhcp | `$uuid=null` | `/api/freeradius/dhcp/get_dhcp/{uuid}` |
| POST | dhcp | set | - | `/api/freeradius/dhcp/set` |
| POST | dhcp | set_dhcp | `$uuid` | `/api/freeradius/dhcp/set_dhcp/{uuid}` |
| POST | dhcp | toggle_dhcp | `$uuid` | `/api/freeradius/dhcp/toggle_dhcp/{uuid}` |
| GET | eap | get | - | `/api/freeradius/eap/get` |
| POST | eap | set | - | `/api/freeradius/eap/set` |
| GET | general | get | - | `/api/freeradius/general/get` |
| POST | general | set | - | `/api/freeradius/general/set` |
| GET | ldap | get | - | `/api/freeradius/ldap/get` |
| POST | ldap | set | - | `/api/freeradius/ldap/set` |
| POST | lease | add_lease | - | `/api/freeradius/lease/add_lease` |
| POST | lease | del_lease | `$uuid` | `/api/freeradius/lease/del_lease/{uuid}` |
| GET | lease | get | - | `/api/freeradius/lease/get` |
| GET | lease | get_lease | `$uuid=null` | `/api/freeradius/lease/get_lease/{uuid}` |
| POST | lease | set | - | `/api/freeradius/lease/set` |
| POST | lease | set_lease | `$uuid` | `/api/freeradius/lease/set_lease/{uuid}` |
| POST | lease | toggle_lease | `$uuid` | `/api/freeradius/lease/toggle_lease/{uuid}` |
| POST | proxy | add_homeserver | - | `/api/freeradius/proxy/add_homeserver` |
| POST | proxy | add_homeserverpool | - | `/api/freeradius/proxy/add_homeserverpool` |
| POST | proxy | add_realm | - | `/api/freeradius/proxy/add_realm` |
| POST | proxy | del_homeserver | `$uuid` | `/api/freeradius/proxy/del_homeserver/{uuid}` |
| POST | proxy | del_homeserverpool | `$uuid` | `/api/freeradius/proxy/del_homeserverpool/{uuid}` |
| POST | proxy | del_realm | `$uuid` | `/api/freeradius/proxy/del_realm/{uuid}` |
| GET | proxy | get | - | `/api/freeradius/proxy/get` |
| GET | proxy | get_homeserver | `$uuid=null` | `/api/freeradius/proxy/get_homeserver/{uuid}` |
| GET | proxy | get_homeserverpool | `$uuid=null` | `/api/freeradius/proxy/get_homeserverpool/{uuid}` |
| GET | proxy | get_realm | `$uuid=null` | `/api/freeradius/proxy/get_realm/{uuid}` |
| GET | proxy | search_homeserver | - | `/api/freeradius/proxy/search_homeserver` |
| GET | proxy | search_homeserverpool | - | `/api/freeradius/proxy/search_homeserverpool` |
| GET | proxy | search_realm | - | `/api/freeradius/proxy/search_realm` |
| POST | proxy | set | - | `/api/freeradius/proxy/set` |
| POST | proxy | set_homeserver | `$uuid` | `/api/freeradius/proxy/set_homeserver/{uuid}` |
| POST | proxy | set_homeserverpool | `$uuid` | `/api/freeradius/proxy/set_homeserverpool/{uuid}` |
| POST | proxy | set_realm | `$uuid` | `/api/freeradius/proxy/set_realm/{uuid}` |
| GET | proxy | toggle_homeserver | `$uuid` | `/api/freeradius/proxy/toggle_homeserver/{uuid}` |
| GET | proxy | toggle_homeserverpool | `$uuid` | `/api/freeradius/proxy/toggle_homeserverpool/{uuid}` |
| GET | proxy | toggle_realm | `$uuid` | `/api/freeradius/proxy/toggle_realm/{uuid}` |
| POST | service | reconfigure | - | `/api/freeradius/service/reconfigure` |
| POST | service | restart | - | `/api/freeradius/service/restart` |
| POST | service | start | - | `/api/freeradius/service/start` |
| GET | service | status | - | `/api/freeradius/service/status` |
| POST | service | stop | - | `/api/freeradius/service/stop` |
| POST | user | add_user | - | `/api/freeradius/user/add_user` |
| POST | user | del_user | `$uuid` | `/api/freeradius/user/del_user/{uuid}` |
| GET | user | get | - | `/api/freeradius/user/get` |
| GET | user | get_user | `$uuid=null` | `/api/freeradius/user/get_user/{uuid}` |
| GET | user | search_user | - | `/api/freeradius/user/search_user` |
| POST | user | set | - | `/api/freeradius/user/set` |
| POST | user | set_user | `$uuid` | `/api/freeradius/user/set_user/{uuid}` |
| GET | user | toggle_user | `$uuid` | `/api/freeradius/user/toggle_user/{uuid}` |

### Array Fields (Containers)

#### avpair

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Ftpproxy

**Base URL**: `/api/ftpproxy/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/ftpproxy.html

**Description**: FTP proxy server

### Statistics

- **Total Endpoints**: 12
- **Methods**: GET (8), POST (4)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | service | config | - | `/api/ftpproxy/service/config` |
| GET | service | reload | - | `/api/ftpproxy/service/reload` |
| GET | service | restart | `$uuid` | `/api/ftpproxy/service/restart/{uuid}` |
| GET | service | start | `$uuid` | `/api/ftpproxy/service/start/{uuid}` |
| GET | service | status | `$uuid` | `/api/ftpproxy/service/status/{uuid}` |
| GET | service | stop | `$uuid` | `/api/ftpproxy/service/stop/{uuid}` |
| POST | settings | add_proxy | - | `/api/ftpproxy/settings/add_proxy` |
| POST | settings | del_proxy | `$uuid` | `/api/ftpproxy/settings/del_proxy/{uuid}` |
| GET | settings | get_proxy | `$uuid=null` | `/api/ftpproxy/settings/get_proxy/{uuid}` |
| GET | settings | search_proxy | - | `/api/ftpproxy/settings/search_proxy` |
| POST | settings | set_proxy | `$uuid` | `/api/ftpproxy/settings/set_proxy/{uuid}` |
| POST | settings | toggle_proxy | `$uuid` | `/api/ftpproxy/settings/toggle_proxy/{uuid}` |

---

## Gridexample

**Base URL**: `/api/gridexample/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/gridexample.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/devel/grid_example/src/opnsense/mvc/app/models/OPNsense/GridExample/GridExample.xml](https://github.com/opnsense/plugins/blob/master/devel/grid_example/src/opnsense/mvc/app/models/OPNsense/GridExample/GridExample.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: POST (5), GET (2)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | settings | add_item | - | `/api/gridexample/settings/add_item` |
| POST | settings | del_item | `$uuid` | `/api/gridexample/settings/del_item/{uuid}` |
| GET | settings | get | - | `/api/gridexample/settings/get` |
| GET | settings | get_item | `$uuid=null` | `/api/gridexample/settings/get_item/{uuid}` |
| POST | settings | set | - | `/api/gridexample/settings/set` |
| POST | settings | set_item | `$uuid` | `/api/gridexample/settings/set_item/{uuid}` |
| POST | settings | toggle_item | `$uuid,$enabled=null` | `/api/gridexample/settings/toggle_item/{uuid}/{enabled}` |

### Array Fields (Containers)

#### address

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Haproxy

**Base URL**: `/api/haproxy/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/haproxy.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/haproxy/src/opnsense/mvc/app/models/OPNsense/HAProxy/HAProxy.xml](https://github.com/opnsense/plugins/blob/master/net/haproxy/src/opnsense/mvc/app/models/OPNsense/HAProxy/HAProxy.xml)

**Description**: HAProxy load balancer

### Statistics

- **Total Endpoints**: 96
- **Methods**: GET (35), POST (61)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | export | config | - | `/api/haproxy/export/config` |
| GET | export | diff | - | `/api/haproxy/export/diff` |
| GET | export | download | `$type` | `/api/haproxy/export/download/{type}` |
| GET | maintenance | cert_actions | - | `/api/haproxy/maintenance/cert_actions` |
| GET | maintenance | cert_diff | - | `/api/haproxy/maintenance/cert_diff` |
| GET | maintenance | cert_sync | - | `/api/haproxy/maintenance/cert_sync` |
| GET | maintenance | cert_sync_bulk | - | `/api/haproxy/maintenance/cert_sync_bulk` |
| POST | maintenance | fetch_cron_integration | - | `/api/haproxy/maintenance/fetch_cron_integration` |
| GET | maintenance | get | - | `/api/haproxy/maintenance/get` |
| GET | maintenance | search_certificate_diff | - | `/api/haproxy/maintenance/search_certificate_diff` |
| GET | maintenance | search_server | - | `/api/haproxy/maintenance/search_server` |
| GET | maintenance | server_state | - | `/api/haproxy/maintenance/server_state` |
| GET | maintenance | server_state_bulk | - | `/api/haproxy/maintenance/server_state_bulk` |
| GET | maintenance | server_weight | - | `/api/haproxy/maintenance/server_weight` |
| GET | maintenance | server_weight_bulk | - | `/api/haproxy/maintenance/server_weight_bulk` |
| POST | maintenance | set | - | `/api/haproxy/maintenance/set` |
| GET | service | configtest | - | `/api/haproxy/service/configtest` |
| POST | service | reconfigure | - | `/api/haproxy/service/reconfigure` |
| POST | service | restart | - | `/api/haproxy/service/restart` |
| POST | service | start | - | `/api/haproxy/service/start` |
| GET | service | status | - | `/api/haproxy/service/status` |
| POST | service | stop | - | `/api/haproxy/service/stop` |
| POST | settings | add_acl | - | `/api/haproxy/settings/add_acl` |
| POST | settings | add_action | - | `/api/haproxy/settings/add_action` |
| POST | settings | add_backend | - | `/api/haproxy/settings/add_backend` |
| POST | settings | add_cpu | - | `/api/haproxy/settings/add_cpu` |
| POST | settings | add_errorfile | - | `/api/haproxy/settings/add_errorfile` |
| POST | settings | add_fcgi | - | `/api/haproxy/settings/add_fcgi` |
| POST | settings | add_frontend | - | `/api/haproxy/settings/add_frontend` |
| POST | settings | add_group | - | `/api/haproxy/settings/add_group` |
| POST | settings | add_healthcheck | - | `/api/haproxy/settings/add_healthcheck` |
| POST | settings | add_lua | - | `/api/haproxy/settings/add_lua` |
| POST | settings | add_mapfile | - | `/api/haproxy/settings/add_mapfile` |
| POST | settings | add_server | - | `/api/haproxy/settings/add_server` |
| POST | settings | add_user | - | `/api/haproxy/settings/add_user` |
| POST | settings | addmailer | - | `/api/haproxy/settings/addmailer` |
| POST | settings | addresolver | - | `/api/haproxy/settings/addresolver` |
| POST | settings | del_acl | `$uuid` | `/api/haproxy/settings/del_acl/{uuid}` |
| POST | settings | del_action | `$uuid` | `/api/haproxy/settings/del_action/{uuid}` |
| POST | settings | del_backend | `$uuid` | `/api/haproxy/settings/del_backend/{uuid}` |
| POST | settings | del_cpu | `$uuid` | `/api/haproxy/settings/del_cpu/{uuid}` |
| POST | settings | del_errorfile | `$uuid` | `/api/haproxy/settings/del_errorfile/{uuid}` |
| POST | settings | del_fcgi | `$uuid` | `/api/haproxy/settings/del_fcgi/{uuid}` |
| POST | settings | del_frontend | `$uuid` | `/api/haproxy/settings/del_frontend/{uuid}` |
| POST | settings | del_group | `$uuid` | `/api/haproxy/settings/del_group/{uuid}` |
| POST | settings | del_healthcheck | `$uuid` | `/api/haproxy/settings/del_healthcheck/{uuid}` |
| POST | settings | del_lua | `$uuid` | `/api/haproxy/settings/del_lua/{uuid}` |
| POST | settings | del_mapfile | `$uuid` | `/api/haproxy/settings/del_mapfile/{uuid}` |
| POST | settings | del_server | `$uuid` | `/api/haproxy/settings/del_server/{uuid}` |
| POST | settings | del_user | `$uuid` | `/api/haproxy/settings/del_user/{uuid}` |
| POST | settings | delmailer | `$uuid` | `/api/haproxy/settings/delmailer/{uuid}` |
| POST | settings | delresolver | `$uuid` | `/api/haproxy/settings/delresolver/{uuid}` |
| GET | settings | get | - | `/api/haproxy/settings/get` |
| GET | settings | get_acl | `$uuid=null` | `/api/haproxy/settings/get_acl/{uuid}` |
| GET | settings | get_action | `$uuid=null` | `/api/haproxy/settings/get_action/{uuid}` |
| GET | settings | get_backend | `$uuid=null` | `/api/haproxy/settings/get_backend/{uuid}` |
| GET | settings | get_cpu | `$uuid=null` | `/api/haproxy/settings/get_cpu/{uuid}` |
| GET | settings | get_errorfile | `$uuid=null` | `/api/haproxy/settings/get_errorfile/{uuid}` |
| GET | settings | get_fcgi | `$uuid=null` | `/api/haproxy/settings/get_fcgi/{uuid}` |
| GET | settings | get_frontend | `$uuid=null` | `/api/haproxy/settings/get_frontend/{uuid}` |
| GET | settings | get_group | `$uuid=null` | `/api/haproxy/settings/get_group/{uuid}` |
| GET | settings | get_healthcheck | `$uuid=null` | `/api/haproxy/settings/get_healthcheck/{uuid}` |
| GET | settings | get_lua | `$uuid=null` | `/api/haproxy/settings/get_lua/{uuid}` |
| GET | settings | get_mapfile | `$uuid=null` | `/api/haproxy/settings/get_mapfile/{uuid}` |
| GET | settings | get_server | `$uuid=null` | `/api/haproxy/settings/get_server/{uuid}` |
| GET | settings | get_user | `$uuid=null` | `/api/haproxy/settings/get_user/{uuid}` |
| GET | settings | getmailer | `$uuid=null` | `/api/haproxy/settings/getmailer/{uuid}` |
| GET | settings | getresolver | `$uuid=null` | `/api/haproxy/settings/getresolver/{uuid}` |
| POST | settings | set | - | `/api/haproxy/settings/set` |
| POST | settings | set_acl | `$uuid` | `/api/haproxy/settings/set_acl/{uuid}` |
| POST | settings | set_action | `$uuid` | `/api/haproxy/settings/set_action/{uuid}` |
| POST | settings | set_backend | `$uuid` | `/api/haproxy/settings/set_backend/{uuid}` |
| POST | settings | set_cpu | `$uuid` | `/api/haproxy/settings/set_cpu/{uuid}` |
| POST | settings | set_errorfile | `$uuid` | `/api/haproxy/settings/set_errorfile/{uuid}` |
| POST | settings | set_fcgi | `$uuid` | `/api/haproxy/settings/set_fcgi/{uuid}` |
| POST | settings | set_frontend | `$uuid` | `/api/haproxy/settings/set_frontend/{uuid}` |
| POST | settings | set_group | `$uuid` | `/api/haproxy/settings/set_group/{uuid}` |
| POST | settings | set_healthcheck | `$uuid` | `/api/haproxy/settings/set_healthcheck/{uuid}` |
| POST | settings | set_lua | `$uuid` | `/api/haproxy/settings/set_lua/{uuid}` |
| POST | settings | set_mapfile | `$uuid` | `/api/haproxy/settings/set_mapfile/{uuid}` |
| POST | settings | set_server | `$uuid` | `/api/haproxy/settings/set_server/{uuid}` |
| POST | settings | set_user | `$uuid` | `/api/haproxy/settings/set_user/{uuid}` |
| POST | settings | setmailer | `$uuid` | `/api/haproxy/settings/setmailer/{uuid}` |
| POST | settings | setresolver | `$uuid` | `/api/haproxy/settings/setresolver/{uuid}` |
| POST | settings | toggle_backend | `$uuid,$enabled=null` | `/api/haproxy/settings/toggle_backend/{uuid}/{enabled}` |
| POST | settings | toggle_cpu | `$uuid,$enabled=null` | `/api/haproxy/settings/toggle_cpu/{uuid}/{enabled}` |
| POST | settings | toggle_frontend | `$uuid` | `/api/haproxy/settings/toggle_frontend/{uuid}` |
| POST | settings | toggle_group | `$uuid,$enabled=null` | `/api/haproxy/settings/toggle_group/{uuid}/{enabled}` |
| POST | settings | toggle_lua | `$uuid,$enabled=null` | `/api/haproxy/settings/toggle_lua/{uuid}/{enabled}` |
| POST | settings | toggle_server | `$uuid,$enabled=null` | `/api/haproxy/settings/toggle_server/{uuid}/{enabled}` |
| POST | settings | toggle_user | `$uuid,$enabled=null` | `/api/haproxy/settings/toggle_user/{uuid}/{enabled}` |
| POST | settings | togglemailer | `$uuid,$enabled=null` | `/api/haproxy/settings/togglemailer/{uuid}/{enabled}` |
| POST | settings | toggleresolver | `$uuid,$enabled=null` | `/api/haproxy/settings/toggleresolver/{uuid}/{enabled}` |
| GET | statistics | counters | - | `/api/haproxy/statistics/counters` |
| GET | statistics | info | - | `/api/haproxy/statistics/info` |
| GET | statistics | tables | - | `/api/haproxy/statistics/tables` |

### Array Fields (Containers)

#### frontend

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### backend

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### server

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### healthcheck

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### acl

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### action

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### lua

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### fcgi

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### errorfile

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### mapfile

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### group

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### user

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### cpu

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### resolver

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### mailer

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Helloworld

**Base URL**: `/api/helloworld/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/helloworld.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/devel/helloworld/src/opnsense/mvc/app/models/OPNsense/HelloWorld/HelloWorld.xml](https://github.com/opnsense/plugins/blob/master/devel/helloworld/src/opnsense/mvc/app/models/OPNsense/HelloWorld/HelloWorld.xml)

### Statistics

- **Total Endpoints**: 4
- **Methods**: POST (3), GET (1)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | reload | - | `/api/helloworld/service/reload` |
| POST | service | test | - | `/api/helloworld/service/test` |
| GET | settings | get | - | `/api/helloworld/settings/get` |
| POST | settings | set | - | `/api/helloworld/settings/set` |

---

## Hwprobe

**Base URL**: `/api/hwprobe/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/hwprobe.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/sysutils/hw-probe/src/opnsense/mvc/app/models/OPNsense/Hwprobe/General.xml](https://github.com/opnsense/plugins/blob/master/sysutils/hw-probe/src/opnsense/mvc/app/models/OPNsense/Hwprobe/General.xml)

### Statistics

- **Total Endpoints**: 8
- **Methods**: GET (3), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/hwprobe/general/get` |
| POST | general | set | - | `/api/hwprobe/general/set` |
| POST | service | reconfigure | - | `/api/hwprobe/service/reconfigure` |
| GET | service | report | - | `/api/hwprobe/service/report` |
| POST | service | restart | - | `/api/hwprobe/service/restart` |
| POST | service | start | - | `/api/hwprobe/service/start` |
| GET | service | status | - | `/api/hwprobe/service/status` |
| POST | service | stop | - | `/api/hwprobe/service/stop` |

---

## Iperf

**Base URL**: `/api/iperf/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/iperf.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/benchmarks/iperf/src/opnsense/mvc/app/models/OPNsense/iperf/FakeInstance.xml](https://github.com/opnsense/plugins/blob/master/benchmarks/iperf/src/opnsense/mvc/app/models/OPNsense/iperf/FakeInstance.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: GET (6), POST (1)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | instance | get | - | `/api/iperf/instance/get` |
| GET | instance | query | - | `/api/iperf/instance/query` |
| POST | instance | set | - | `/api/iperf/instance/set` |
| GET | service | restart | - | `/api/iperf/service/restart` |
| GET | service | start | - | `/api/iperf/service/start` |
| GET | service | status | - | `/api/iperf/service/status` |
| GET | service | stop | - | `/api/iperf/service/stop` |

---

## Lldpd

**Base URL**: `/api/lldpd/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/lldpd.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net-mgmt/lldpd/src/opnsense/mvc/app/models/OPNsense/Lldpd/General.xml](https://github.com/opnsense/plugins/blob/master/net-mgmt/lldpd/src/opnsense/mvc/app/models/OPNsense/Lldpd/General.xml)

### Statistics

- **Total Endpoints**: 8
- **Methods**: GET (3), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/lldpd/general/get` |
| POST | general | set | - | `/api/lldpd/general/set` |
| GET | service | neighbor | - | `/api/lldpd/service/neighbor` |
| POST | service | reconfigure | - | `/api/lldpd/service/reconfigure` |
| POST | service | restart | - | `/api/lldpd/service/restart` |
| POST | service | start | - | `/api/lldpd/service/start` |
| GET | service | status | - | `/api/lldpd/service/status` |
| POST | service | stop | - | `/api/lldpd/service/stop` |

---

## Maltrail

**Base URL**: `/api/maltrail/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/maltrail.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/security/maltrail/src/opnsense/mvc/app/models/OPNsense/Maltrail/General.xml](https://github.com/opnsense/plugins/blob/master/security/maltrail/src/opnsense/mvc/app/models/OPNsense/Maltrail/General.xml)

**Description**: Malicious traffic detection system

### Statistics

- **Total Endpoints**: 16
- **Methods**: GET (5), POST (11)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/maltrail/general/get` |
| POST | general | set | - | `/api/maltrail/general/set` |
| GET | sensor | get | - | `/api/maltrail/sensor/get` |
| POST | sensor | set | - | `/api/maltrail/sensor/set` |
| GET | server | get | - | `/api/maltrail/server/get` |
| POST | server | set | - | `/api/maltrail/server/set` |
| POST | serverservice | reconfigure | - | `/api/maltrail/serverservice/reconfigure` |
| POST | serverservice | restart | - | `/api/maltrail/serverservice/restart` |
| POST | serverservice | start | - | `/api/maltrail/serverservice/start` |
| GET | serverservice | status | - | `/api/maltrail/serverservice/status` |
| POST | serverservice | stop | - | `/api/maltrail/serverservice/stop` |
| POST | service | reconfigure | - | `/api/maltrail/service/reconfigure` |
| POST | service | restart | - | `/api/maltrail/service/restart` |
| POST | service | start | - | `/api/maltrail/service/start` |
| GET | service | status | - | `/api/maltrail/service/status` |
| POST | service | stop | - | `/api/maltrail/service/stop` |

---

## Mdnsrepeater

**Base URL**: `/api/mdnsrepeater/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/mdnsrepeater.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/mdns-repeater/src/opnsense/mvc/app/models/OPNsense/MDNSRepeater/MDNSRepeater.xml](https://github.com/opnsense/plugins/blob/master/net/mdns-repeater/src/opnsense/mvc/app/models/OPNsense/MDNSRepeater/MDNSRepeater.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: POST (5), GET (2)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | reconfigure | - | `/api/mdnsrepeater/service/reconfigure` |
| POST | service | restart | - | `/api/mdnsrepeater/service/restart` |
| POST | service | start | - | `/api/mdnsrepeater/service/start` |
| GET | service | status | - | `/api/mdnsrepeater/service/status` |
| POST | service | stop | - | `/api/mdnsrepeater/service/stop` |
| GET | settings | get | - | `/api/mdnsrepeater/settings/get` |
| POST | settings | set | - | `/api/mdnsrepeater/settings/set` |

---

## Muninnode

**Base URL**: `/api/muninnode/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/muninnode.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/sysutils/munin-node/src/opnsense/mvc/app/models/OPNsense/Muninnode/General.xml](https://github.com/opnsense/plugins/blob/master/sysutils/munin-node/src/opnsense/mvc/app/models/OPNsense/Muninnode/General.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: GET (2), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/muninnode/general/get` |
| POST | general | set | - | `/api/muninnode/general/set` |
| POST | service | reconfigure | - | `/api/muninnode/service/reconfigure` |
| POST | service | restart | - | `/api/muninnode/service/restart` |
| POST | service | start | - | `/api/muninnode/service/start` |
| GET | service | status | - | `/api/muninnode/service/status` |
| POST | service | stop | - | `/api/muninnode/service/stop` |

---

## Ndproxy

**Base URL**: `/api/ndproxy/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/ndproxy.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/ndproxy/src/opnsense/mvc/app/models/OPNsense/Ndproxy/Ndproxy.xml](https://github.com/opnsense/plugins/blob/master/net/ndproxy/src/opnsense/mvc/app/models/OPNsense/Ndproxy/Ndproxy.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: GET (2), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/ndproxy/general/get` |
| POST | general | set | - | `/api/ndproxy/general/set` |
| POST | service | reconfigure | - | `/api/ndproxy/service/reconfigure` |
| POST | service | restart | - | `/api/ndproxy/service/restart` |
| POST | service | start | - | `/api/ndproxy/service/start` |
| GET | service | status | - | `/api/ndproxy/service/status` |
| POST | service | stop | - | `/api/ndproxy/service/stop` |

---

## Netdata

**Base URL**: `/api/netdata/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/netdata.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net-mgmt/netdata/src/opnsense/mvc/app/models/OPNsense/Netdata/General.xml](https://github.com/opnsense/plugins/blob/master/net-mgmt/netdata/src/opnsense/mvc/app/models/OPNsense/Netdata/General.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: GET (2), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/netdata/general/get` |
| POST | general | set | - | `/api/netdata/general/set` |
| POST | service | reconfigure | - | `/api/netdata/service/reconfigure` |
| POST | service | restart | - | `/api/netdata/service/restart` |
| POST | service | start | - | `/api/netdata/service/start` |
| GET | service | status | - | `/api/netdata/service/status` |
| POST | service | stop | - | `/api/netdata/service/stop` |

---

## Netsnmp

**Base URL**: `/api/netsnmp/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/netsnmp.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net-mgmt/net-snmp/src/opnsense/mvc/app/models/OPNsense/Netsnmp/General.xml](https://github.com/opnsense/plugins/blob/master/net-mgmt/net-snmp/src/opnsense/mvc/app/models/OPNsense/Netsnmp/General.xml)

### Statistics

- **Total Endpoints**: 14
- **Methods**: GET (4), POST (10)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/netsnmp/general/get` |
| POST | general | set | - | `/api/netsnmp/general/set` |
| POST | service | reconfigure | - | `/api/netsnmp/service/reconfigure` |
| POST | service | restart | - | `/api/netsnmp/service/restart` |
| POST | service | start | - | `/api/netsnmp/service/start` |
| GET | service | status | - | `/api/netsnmp/service/status` |
| POST | service | stop | - | `/api/netsnmp/service/stop` |
| POST | user | add_user | - | `/api/netsnmp/user/add_user` |
| POST | user | del_user | `$uuid` | `/api/netsnmp/user/del_user/{uuid}` |
| GET | user | get | - | `/api/netsnmp/user/get` |
| GET | user | get_user | `$uuid=null` | `/api/netsnmp/user/get_user/{uuid}` |
| POST | user | set | - | `/api/netsnmp/user/set` |
| POST | user | set_user | `$uuid` | `/api/netsnmp/user/set_user/{uuid}` |
| POST | user | toggle_user | `$uuid` | `/api/netsnmp/user/toggle_user/{uuid}` |

---

## Nginx

**Base URL**: `/api/nginx/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/nginx.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/www/nginx/src/opnsense/mvc/app/models/OPNsense/Nginx/Nginx.xml](https://github.com/opnsense/plugins/blob/master/www/nginx/src/opnsense/mvc/app/models/OPNsense/Nginx/Nginx.xml)

**Description**: Nginx web server and reverse proxy

### Statistics

- **Total Endpoints**: 99
- **Methods**: POST (67), GET (32)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | bans | delban | `$uuid` | `/api/nginx/bans/delban/{uuid}` |
| GET | bans | get | - | `/api/nginx/bans/get` |
| POST | bans | set | - | `/api/nginx/bans/set` |
| GET | logs | accesses | `$uuid=null,$fileno=null,$page=0,$perPage=0,$query=’’` | `/api/nginx/logs/accesses/{uuid}/{fileno}/{page}/{perPage}/{query}` |
| GET | logs | errors | `$uuid=null,$fileno=null,$page=0,$perPage=0,$query=’’` | `/api/nginx/logs/errors/{uuid}/{fileno}/{page}/{perPage}/{query}` |
| GET | logs | streamaccesses | `$uuid=null,$fileno=null,$page=0,$perPage=0,$query=’’` | `/api/nginx/logs/streamaccesses/{uuid}/{fileno}/{page}/{perPage}/{query}` |
| GET | logs | streamerrors | `$uuid=null,$fileno=null,$page=0,$perPage=0,$query=’’` | `/api/nginx/logs/streamerrors/{uuid}/{fileno}/{page}/{perPage}/{query}` |
| GET | logs | tls_handshakes | - | `/api/nginx/logs/tls_handshakes` |
| POST | service | reconfigure | - | `/api/nginx/service/reconfigure` |
| POST | service | restart | - | `/api/nginx/service/restart` |
| POST | service | start | - | `/api/nginx/service/start` |
| GET | service | status | - | `/api/nginx/service/status` |
| GET | service | stop | - | `/api/nginx/service/stop` |
| GET | service | vts | - | `/api/nginx/service/vts` |
| POST | settings | addcache_path | - | `/api/nginx/settings/addcache_path` |
| POST | settings | addcredential | - | `/api/nginx/settings/addcredential` |
| POST | settings | addcustompolicy | - | `/api/nginx/settings/addcustompolicy` |
| POST | settings | adderrorpage | - | `/api/nginx/settings/adderrorpage` |
| POST | settings | addhttprewrite | - | `/api/nginx/settings/addhttprewrite` |
| POST | settings | addhttpserver | - | `/api/nginx/settings/addhttpserver` |
| POST | settings | addipacl | - | `/api/nginx/settings/addipacl` |
| POST | settings | addlimit_request_connection | - | `/api/nginx/settings/addlimit_request_connection` |
| POST | settings | addlimit_zone | - | `/api/nginx/settings/addlimit_zone` |
| POST | settings | addlocation | - | `/api/nginx/settings/addlocation` |
| POST | settings | addnaxsirule | - | `/api/nginx/settings/addnaxsirule` |
| POST | settings | addresolver | - | `/api/nginx/settings/addresolver` |
| POST | settings | addsecurity_header | - | `/api/nginx/settings/addsecurity_header` |
| POST | settings | addsnifwd | - | `/api/nginx/settings/addsnifwd` |
| POST | settings | addstreamserver | - | `/api/nginx/settings/addstreamserver` |
| POST | settings | addsyslog_target | - | `/api/nginx/settings/addsyslog_target` |
| POST | settings | addtls_fingerprint | - | `/api/nginx/settings/addtls_fingerprint` |
| POST | settings | addupstream | - | `/api/nginx/settings/addupstream` |
| POST | settings | addupstreamserver | - | `/api/nginx/settings/addupstreamserver` |
| POST | settings | adduserlist | - | `/api/nginx/settings/adduserlist` |
| POST | settings | delcache_path | `$uuid` | `/api/nginx/settings/delcache_path/{uuid}` |
| POST | settings | delcredential | `$uuid` | `/api/nginx/settings/delcredential/{uuid}` |
| POST | settings | delcustompolicy | `$uuid` | `/api/nginx/settings/delcustompolicy/{uuid}` |
| POST | settings | delerrorpage | `$uuid` | `/api/nginx/settings/delerrorpage/{uuid}` |
| POST | settings | delhttprewrite | `$uuid` | `/api/nginx/settings/delhttprewrite/{uuid}` |
| POST | settings | delhttpserver | `$uuid` | `/api/nginx/settings/delhttpserver/{uuid}` |
| POST | settings | delipacl | `$uuid` | `/api/nginx/settings/delipacl/{uuid}` |
| POST | settings | dellimit_request_connection | `$uuid` | `/api/nginx/settings/dellimit_request_connection/{uuid}` |
| POST | settings | dellimit_zone | `$uuid` | `/api/nginx/settings/dellimit_zone/{uuid}` |
| POST | settings | dellocation | `$uuid` | `/api/nginx/settings/dellocation/{uuid}` |
| POST | settings | delnaxsirule | `$uuid` | `/api/nginx/settings/delnaxsirule/{uuid}` |
| POST | settings | delresolver | `$uuid` | `/api/nginx/settings/delresolver/{uuid}` |
| POST | settings | delsecurity_header | `$uuid` | `/api/nginx/settings/delsecurity_header/{uuid}` |
| POST | settings | delsnifwd | `$uuid` | `/api/nginx/settings/delsnifwd/{uuid}` |
| POST | settings | delstreamserver | `$uuid` | `/api/nginx/settings/delstreamserver/{uuid}` |
| POST | settings | delsyslog_target | `$uuid` | `/api/nginx/settings/delsyslog_target/{uuid}` |
| POST | settings | deltls_fingerprint | `$uuid` | `/api/nginx/settings/deltls_fingerprint/{uuid}` |
| POST | settings | delupstream | `$uuid` | `/api/nginx/settings/delupstream/{uuid}` |
| POST | settings | delupstreamserver | `$uuid` | `/api/nginx/settings/delupstreamserver/{uuid}` |
| POST | settings | deluserlist | `$uuid` | `/api/nginx/settings/deluserlist/{uuid}` |
| POST | settings | downloadrules | - | `/api/nginx/settings/downloadrules` |
| GET | settings | get | - | `/api/nginx/settings/get` |
| GET | settings | getcache_path | `$uuid=null` | `/api/nginx/settings/getcache_path/{uuid}` |
| GET | settings | getcredential | `$uuid=null` | `/api/nginx/settings/getcredential/{uuid}` |
| GET | settings | getcustompolicy | `$uuid=null` | `/api/nginx/settings/getcustompolicy/{uuid}` |
| GET | settings | geterrorpage | `$uuid=null` | `/api/nginx/settings/geterrorpage/{uuid}` |
| GET | settings | gethttprewrite | `$uuid=null` | `/api/nginx/settings/gethttprewrite/{uuid}` |
| GET | settings | gethttpserver | `$uuid=null` | `/api/nginx/settings/gethttpserver/{uuid}` |
| GET | settings | getipacl | `$uuid=null` | `/api/nginx/settings/getipacl/{uuid}` |
| GET | settings | getlimit_request_connection | `$uuid=null` | `/api/nginx/settings/getlimit_request_connection/{uuid}` |
| GET | settings | getlimit_zone | `$uuid=null` | `/api/nginx/settings/getlimit_zone/{uuid}` |
| GET | settings | getlocation | `$uuid=null` | `/api/nginx/settings/getlocation/{uuid}` |
| GET | settings | getnaxsirule | `$uuid=null` | `/api/nginx/settings/getnaxsirule/{uuid}` |
| GET | settings | getresolver | `$uuid=null` | `/api/nginx/settings/getresolver/{uuid}` |
| GET | settings | getsecurity_header | `$uuid=null` | `/api/nginx/settings/getsecurity_header/{uuid}` |
| GET | settings | getsnifwd | `$uuid=null` | `/api/nginx/settings/getsnifwd/{uuid}` |
| GET | settings | getstreamserver | `$uuid=null` | `/api/nginx/settings/getstreamserver/{uuid}` |
| GET | settings | getsyslog_target | `$uuid=null` | `/api/nginx/settings/getsyslog_target/{uuid}` |
| GET | settings | gettls_fingerprint | `$uuid=null` | `/api/nginx/settings/gettls_fingerprint/{uuid}` |
| GET | settings | getupstream | `$uuid=null` | `/api/nginx/settings/getupstream/{uuid}` |
| GET | settings | getupstreamserver | `$uuid=null` | `/api/nginx/settings/getupstreamserver/{uuid}` |
| GET | settings | getuserlist | `$uuid=null` | `/api/nginx/settings/getuserlist/{uuid}` |
| POST | settings | set | - | `/api/nginx/settings/set` |
| POST | settings | setcache_path | `$uuid` | `/api/nginx/settings/setcache_path/{uuid}` |
| POST | settings | setcredential | `$uuid` | `/api/nginx/settings/setcredential/{uuid}` |
| POST | settings | setcustompolicy | `$uuid` | `/api/nginx/settings/setcustompolicy/{uuid}` |
| POST | settings | seterrorpage | `$uuid` | `/api/nginx/settings/seterrorpage/{uuid}` |
| POST | settings | sethttprewrite | `$uuid` | `/api/nginx/settings/sethttprewrite/{uuid}` |
| POST | settings | sethttpserver | `$uuid` | `/api/nginx/settings/sethttpserver/{uuid}` |
| POST | settings | setipacl | `$uuid` | `/api/nginx/settings/setipacl/{uuid}` |
| POST | settings | setlimit_request_connection | `$uuid` | `/api/nginx/settings/setlimit_request_connection/{uuid}` |
| POST | settings | setlimit_zone | `$uuid` | `/api/nginx/settings/setlimit_zone/{uuid}` |
| POST | settings | setlocation | `$uuid` | `/api/nginx/settings/setlocation/{uuid}` |
| POST | settings | setnaxsirule | `$uuid` | `/api/nginx/settings/setnaxsirule/{uuid}` |
| POST | settings | setresolver | `$uuid` | `/api/nginx/settings/setresolver/{uuid}` |
| POST | settings | setsecurity_header | `$uuid` | `/api/nginx/settings/setsecurity_header/{uuid}` |
| POST | settings | setsnifwd | `$uuid` | `/api/nginx/settings/setsnifwd/{uuid}` |
| POST | settings | setstreamserver | `$uuid` | `/api/nginx/settings/setstreamserver/{uuid}` |
| POST | settings | setsyslog_target | `$uuid` | `/api/nginx/settings/setsyslog_target/{uuid}` |
| POST | settings | settls_fingerprint | `$uuid` | `/api/nginx/settings/settls_fingerprint/{uuid}` |
| POST | settings | setupstream | `$uuid` | `/api/nginx/settings/setupstream/{uuid}` |
| POST | settings | setupstreamserver | `$uuid` | `/api/nginx/settings/setupstreamserver/{uuid}` |
| POST | settings | setuserlist | `$uuid` | `/api/nginx/settings/setuserlist/{uuid}` |
| GET | settings | showconfig | - | `/api/nginx/settings/showconfig` |
| GET | settings | testconfig | - | `/api/nginx/settings/testconfig` |

### Array Fields (Containers)

#### userlist

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### credential

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### upstream

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### upstream_server

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### location

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### custom_policy

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### naxsi_rule

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### http_server

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### stream_server

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### sni_hostname_upstream_map

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### sni_hostname_upstream_map_item

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### ip_acl

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### ip_acl_item

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### resolver

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### http_rewrite

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### security_header

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### limit_zone

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### errorpage

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### tls_fingerprint

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### limit_request_connection

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### ban

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### cache_path

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### syslog_target

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Nodeexporter

**Base URL**: `/api/nodeexporter/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/nodeexporter.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/sysutils/node_exporter/src/opnsense/mvc/app/models/OPNsense/NodeExporter/General.xml](https://github.com/opnsense/plugins/blob/master/sysutils/node_exporter/src/opnsense/mvc/app/models/OPNsense/NodeExporter/General.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: GET (2), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/nodeexporter/general/get` |
| POST | general | set | - | `/api/nodeexporter/general/set` |
| POST | service | reconfigure | - | `/api/nodeexporter/service/reconfigure` |
| POST | service | restart | - | `/api/nodeexporter/service/restart` |
| POST | service | start | - | `/api/nodeexporter/service/start` |
| GET | service | status | - | `/api/nodeexporter/service/status` |
| POST | service | stop | - | `/api/nodeexporter/service/stop` |

---

## Nrpe

**Base URL**: `/api/nrpe/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/nrpe.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net-mgmt/nrpe/src/opnsense/mvc/app/models/OPNsense/Nrpe/Command.xml](https://github.com/opnsense/plugins/blob/master/net-mgmt/nrpe/src/opnsense/mvc/app/models/OPNsense/Nrpe/Command.xml)

### Statistics

- **Total Endpoints**: 14
- **Methods**: POST (10), GET (4)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | command | add_command | - | `/api/nrpe/command/add_command` |
| POST | command | del_command | `$uuid` | `/api/nrpe/command/del_command/{uuid}` |
| GET | command | get | - | `/api/nrpe/command/get` |
| GET | command | get_command | `$uuid=null` | `/api/nrpe/command/get_command/{uuid}` |
| POST | command | set | - | `/api/nrpe/command/set` |
| POST | command | set_command | `$uuid` | `/api/nrpe/command/set_command/{uuid}` |
| POST | command | toggle_command | `$uuid` | `/api/nrpe/command/toggle_command/{uuid}` |
| GET | general | get | - | `/api/nrpe/general/get` |
| POST | general | set | - | `/api/nrpe/general/set` |
| POST | service | reconfigure | - | `/api/nrpe/service/reconfigure` |
| POST | service | restart | - | `/api/nrpe/service/restart` |
| POST | service | start | - | `/api/nrpe/service/start` |
| GET | service | status | - | `/api/nrpe/service/status` |
| POST | service | stop | - | `/api/nrpe/service/stop` |

### Array Fields (Containers)

#### command

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Ntopng

**Base URL**: `/api/ntopng/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/ntopng.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/ntopng/src/opnsense/mvc/app/models/OPNsense/Ntopng/General.xml](https://github.com/opnsense/plugins/blob/master/net/ntopng/src/opnsense/mvc/app/models/OPNsense/Ntopng/General.xml)

**Description**: Web-based traffic analysis tool

### Statistics

- **Total Endpoints**: 8
- **Methods**: GET (3), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/ntopng/general/get` |
| POST | general | set | - | `/api/ntopng/general/set` |
| GET | service | checkredis | - | `/api/ntopng/service/checkredis` |
| POST | service | reconfigure | - | `/api/ntopng/service/reconfigure` |
| POST | service | restart | - | `/api/ntopng/service/restart` |
| POST | service | start | - | `/api/ntopng/service/start` |
| GET | service | status | - | `/api/ntopng/service/status` |
| POST | service | stop | - | `/api/ntopng/service/stop` |

---

## Nut

**Base URL**: `/api/nut/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/nut.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/sysutils/nut/src/opnsense/mvc/app/models/OPNsense/Nut/Nut.xml](https://github.com/opnsense/plugins/blob/master/sysutils/nut/src/opnsense/mvc/app/models/OPNsense/Nut/Nut.xml)

### Statistics

- **Total Endpoints**: 8
- **Methods**: GET (3), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | diagnostics | upsstatus | - | `/api/nut/diagnostics/upsstatus` |
| POST | service | reconfigure | - | `/api/nut/service/reconfigure` |
| POST | service | restart | - | `/api/nut/service/restart` |
| POST | service | start | - | `/api/nut/service/start` |
| GET | service | status | - | `/api/nut/service/status` |
| POST | service | stop | - | `/api/nut/service/stop` |
| GET | settings | get | - | `/api/nut/settings/get` |
| POST | settings | set | - | `/api/nut/settings/set` |

---

## Openconnect

**Base URL**: `/api/openconnect/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/openconnect.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/security/openconnect/src/opnsense/mvc/app/models/OPNsense/Openconnect/General.xml](https://github.com/opnsense/plugins/blob/master/security/openconnect/src/opnsense/mvc/app/models/OPNsense/Openconnect/General.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: GET (2), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/openconnect/general/get` |
| POST | general | set | - | `/api/openconnect/general/set` |
| POST | service | reconfigure | - | `/api/openconnect/service/reconfigure` |
| POST | service | restart | - | `/api/openconnect/service/restart` |
| POST | service | start | - | `/api/openconnect/service/start` |
| GET | service | status | - | `/api/openconnect/service/status` |
| POST | service | stop | - | `/api/openconnect/service/stop` |

---

## Postfix

**Base URL**: `/api/postfix/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/postfix.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/mail/postfix/src/opnsense/mvc/app/models/OPNsense/Postfix/Address.xml](https://github.com/opnsense/plugins/blob/master/mail/postfix/src/opnsense/mvc/app/models/OPNsense/Postfix/Address.xml)

**Description**: Postfix mail server

### Statistics

- **Total Endpoints**: 66
- **Methods**: POST (46), GET (20)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | address | add_address | - | `/api/postfix/address/add_address` |
| POST | address | del_address | `$uuid` | `/api/postfix/address/del_address/{uuid}` |
| GET | address | get | - | `/api/postfix/address/get` |
| GET | address | get_address | `$uuid=null` | `/api/postfix/address/get_address/{uuid}` |
| POST | address | set | - | `/api/postfix/address/set` |
| POST | address | set_address | `$uuid` | `/api/postfix/address/set_address/{uuid}` |
| POST | address | toggle_address | `$uuid` | `/api/postfix/address/toggle_address/{uuid}` |
| GET | antispam | get | - | `/api/postfix/antispam/get` |
| POST | antispam | set | - | `/api/postfix/antispam/set` |
| POST | domain | add_domain | - | `/api/postfix/domain/add_domain` |
| POST | domain | del_domain | `$uuid` | `/api/postfix/domain/del_domain/{uuid}` |
| GET | domain | get | - | `/api/postfix/domain/get` |
| GET | domain | get_domain | `$uuid=null` | `/api/postfix/domain/get_domain/{uuid}` |
| POST | domain | set | - | `/api/postfix/domain/set` |
| POST | domain | set_domain | `$uuid` | `/api/postfix/domain/set_domain/{uuid}` |
| POST | domain | toggle_domain | `$uuid` | `/api/postfix/domain/toggle_domain/{uuid}` |
| GET | general | get | - | `/api/postfix/general/get` |
| POST | general | set | - | `/api/postfix/general/set` |
| POST | headerchecks | add_headercheck | - | `/api/postfix/headerchecks/add_headercheck` |
| POST | headerchecks | del_headercheck | `$uuid` | `/api/postfix/headerchecks/del_headercheck/{uuid}` |
| GET | headerchecks | get | - | `/api/postfix/headerchecks/get` |
| GET | headerchecks | get_headercheck | `$uuid=null` | `/api/postfix/headerchecks/get_headercheck/{uuid}` |
| POST | headerchecks | set | - | `/api/postfix/headerchecks/set` |
| POST | headerchecks | set_headercheck | `$uuid` | `/api/postfix/headerchecks/set_headercheck/{uuid}` |
| POST | headerchecks | toggle_headercheck | `$uuid` | `/api/postfix/headerchecks/toggle_headercheck/{uuid}` |
| POST | recipient | add_recipient | - | `/api/postfix/recipient/add_recipient` |
| POST | recipient | del_recipient | `$uuid` | `/api/postfix/recipient/del_recipient/{uuid}` |
| GET | recipient | get | - | `/api/postfix/recipient/get` |
| GET | recipient | get_recipient | `$uuid=null` | `/api/postfix/recipient/get_recipient/{uuid}` |
| POST | recipient | set | - | `/api/postfix/recipient/set` |
| POST | recipient | set_recipient | `$uuid` | `/api/postfix/recipient/set_recipient/{uuid}` |
| POST | recipient | toggle_recipient | `$uuid` | `/api/postfix/recipient/toggle_recipient/{uuid}` |
| POST | recipientbcc | add_recipientbcc | - | `/api/postfix/recipientbcc/add_recipientbcc` |
| POST | recipientbcc | del_recipientbcc | `$uuid` | `/api/postfix/recipientbcc/del_recipientbcc/{uuid}` |
| GET | recipientbcc | get | - | `/api/postfix/recipientbcc/get` |
| GET | recipientbcc | get_recipientbcc | `$uuid=null` | `/api/postfix/recipientbcc/get_recipientbcc/{uuid}` |
| POST | recipientbcc | set | - | `/api/postfix/recipientbcc/set` |
| POST | recipientbcc | set_recipientbcc | `$uuid` | `/api/postfix/recipientbcc/set_recipientbcc/{uuid}` |
| POST | recipientbcc | toggle_recipientbcc | `$uuid` | `/api/postfix/recipientbcc/toggle_recipientbcc/{uuid}` |
| POST | sender | add_sender | - | `/api/postfix/sender/add_sender` |
| POST | sender | del_sender | `$uuid` | `/api/postfix/sender/del_sender/{uuid}` |
| GET | sender | get | - | `/api/postfix/sender/get` |
| GET | sender | get_sender | `$uuid=null` | `/api/postfix/sender/get_sender/{uuid}` |
| POST | sender | set | - | `/api/postfix/sender/set` |
| POST | sender | set_sender | `$uuid` | `/api/postfix/sender/set_sender/{uuid}` |
| POST | sender | toggle_sender | `$uuid` | `/api/postfix/sender/toggle_sender/{uuid}` |
| POST | senderbcc | add_senderbcc | - | `/api/postfix/senderbcc/add_senderbcc` |
| POST | senderbcc | del_senderbcc | `$uuid` | `/api/postfix/senderbcc/del_senderbcc/{uuid}` |
| GET | senderbcc | get | - | `/api/postfix/senderbcc/get` |
| GET | senderbcc | get_senderbcc | `$uuid=null` | `/api/postfix/senderbcc/get_senderbcc/{uuid}` |
| POST | senderbcc | set | - | `/api/postfix/senderbcc/set` |
| POST | senderbcc | set_senderbcc | `$uuid` | `/api/postfix/senderbcc/set_senderbcc/{uuid}` |
| POST | senderbcc | toggle_senderbcc | `$uuid` | `/api/postfix/senderbcc/toggle_senderbcc/{uuid}` |
| POST | sendercanonical | add_sendercanonical | - | `/api/postfix/sendercanonical/add_sendercanonical` |
| POST | sendercanonical | del_sendercanonical | `$uuid` | `/api/postfix/sendercanonical/del_sendercanonical/{uuid}` |
| GET | sendercanonical | get | - | `/api/postfix/sendercanonical/get` |
| GET | sendercanonical | get_sendercanonical | `$uuid=null` | `/api/postfix/sendercanonical/get_sendercanonical/{uuid}` |
| POST | sendercanonical | set | - | `/api/postfix/sendercanonical/set` |
| POST | sendercanonical | set_sendercanonical | `$uuid` | `/api/postfix/sendercanonical/set_sendercanonical/{uuid}` |
| POST | sendercanonical | toggle_sendercanonical | `$uuid` | `/api/postfix/sendercanonical/toggle_sendercanonical/{uuid}` |
| GET | service | checkrspamd | - | `/api/postfix/service/checkrspamd` |
| POST | service | reconfigure | - | `/api/postfix/service/reconfigure` |
| POST | service | restart | - | `/api/postfix/service/restart` |
| POST | service | start | - | `/api/postfix/service/start` |
| GET | service | status | - | `/api/postfix/service/status` |
| POST | service | stop | - | `/api/postfix/service/stop` |

### Array Fields (Containers)

#### address

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Proxy

**Base URL**: `/api/proxy/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/proxy.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/www/squid/src/opnsense/mvc/app/models/OPNsense/Proxy/Proxy.xml](https://github.com/opnsense/plugins/blob/master/www/squid/src/opnsense/mvc/app/models/OPNsense/Proxy/Proxy.xml)

**Description**: Squid proxy server

### Statistics

- **Total Endpoints**: 48
- **Methods**: POST (35), GET (13)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | downloadacls | - | `/api/proxy/service/downloadacls` |
| POST | service | fetchacls | - | `/api/proxy/service/fetchacls` |
| POST | service | reconfigure | - | `/api/proxy/service/reconfigure` |
| POST | service | refresh_template | - | `/api/proxy/service/refresh_template` |
| POST | service | reset | - | `/api/proxy/service/reset` |
| GET | service | restart | - | `/api/proxy/service/restart` |
| GET | service | start | - | `/api/proxy/service/start` |
| GET | service | status | - | `/api/proxy/service/status` |
| POST | service | stop | - | `/api/proxy/service/stop` |
| POST | settings | add_p_a_c_match | - | `/api/proxy/settings/add_p_a_c_match` |
| POST | settings | add_p_a_c_proxy | - | `/api/proxy/settings/add_p_a_c_proxy` |
| POST | settings | add_p_a_c_rule | - | `/api/proxy/settings/add_p_a_c_rule` |
| POST | settings | add_remote_blacklist | - | `/api/proxy/settings/add_remote_blacklist` |
| POST | settings | del_p_a_c_match | `$uuid` | `/api/proxy/settings/del_p_a_c_match/{uuid}` |
| POST | settings | del_p_a_c_proxy | `$uuid` | `/api/proxy/settings/del_p_a_c_proxy/{uuid}` |
| POST | settings | del_p_a_c_rule | `$uuid` | `/api/proxy/settings/del_p_a_c_rule/{uuid}` |
| POST | settings | del_remote_blacklist | `$uuid` | `/api/proxy/settings/del_remote_blacklist/{uuid}` |
| POST | settings | fetch_r_b_cron | - | `/api/proxy/settings/fetch_r_b_cron` |
| GET | settings | get | - | `/api/proxy/settings/get` |
| GET | settings | get_p_a_c_match | `$uuid=null` | `/api/proxy/settings/get_p_a_c_match/{uuid}` |
| GET | settings | get_p_a_c_proxy | `$uuid=null` | `/api/proxy/settings/get_p_a_c_proxy/{uuid}` |
| GET | settings | get_p_a_c_rule | `$uuid=null` | `/api/proxy/settings/get_p_a_c_rule/{uuid}` |
| GET | settings | get_remote_blacklist | `$uuid=null` | `/api/proxy/settings/get_remote_blacklist/{uuid}` |
| GET | settings | search_remote_blacklists | - | `/api/proxy/settings/search_remote_blacklists` |
| POST | settings | set | - | `/api/proxy/settings/set` |
| POST | settings | set_p_a_c_match | `$uuid` | `/api/proxy/settings/set_p_a_c_match/{uuid}` |
| POST | settings | set_p_a_c_proxy | `$uuid` | `/api/proxy/settings/set_p_a_c_proxy/{uuid}` |
| POST | settings | set_p_a_c_rule | `$uuid` | `/api/proxy/settings/set_p_a_c_rule/{uuid}` |
| POST | settings | set_remote_blacklist | `$uuid` | `/api/proxy/settings/set_remote_blacklist/{uuid}` |
| POST | settings | toggle_p_a_c_rule | `$uuid` | `/api/proxy/settings/toggle_p_a_c_rule/{uuid}` |
| POST | settings | toggle_remote_blacklist | `$uuid` | `/api/proxy/settings/toggle_remote_blacklist/{uuid}` |
| GET | template | get | - | `/api/proxy/template/get` |
| POST | template | reset | - | `/api/proxy/template/reset` |
| POST | template | set | - | `/api/proxy/template/set` |
| POST | acl | add_custom_policy | - | `/api/proxy/acl/add_custom_policy` |
| POST | acl | add_policy | - | `/api/proxy/acl/add_policy` |
| POST | acl | apply | - | `/api/proxy/acl/apply` |
| POST | acl | del_custom_policy | `$uuid` | `/api/proxy/acl/del_custom_policy/{uuid}` |
| POST | acl | del_policy | `$uuid` | `/api/proxy/acl/del_policy/{uuid}` |
| GET | acl | get | - | `/api/proxy/acl/get` |
| GET | acl | get_custom_policy | `$uuid=null` | `/api/proxy/acl/get_custom_policy/{uuid}` |
| GET | acl | get_policy | `$uuid=null` | `/api/proxy/acl/get_policy/{uuid}` |
| POST | acl | set | - | `/api/proxy/acl/set` |
| POST | acl | set_custom_policy | `$uuid` | `/api/proxy/acl/set_custom_policy/{uuid}` |
| POST | acl | set_policy | `$uuid` | `/api/proxy/acl/set_policy/{uuid}` |
| POST | acl | test | - | `/api/proxy/acl/test` |
| POST | acl | toggle_custom_policy | `$uuid,$enabled=null` | `/api/proxy/acl/toggle_custom_policy/{uuid}/{enabled}` |
| POST | acl | toggle_policy | `$uuid,$enabled=null` | `/api/proxy/acl/toggle_policy/{uuid}/{enabled}` |

### Array Fields (Containers)

#### blacklist

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### proxy

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### match

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### rule

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Proxysso

**Base URL**: `/api/proxysso/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/proxysso.html

### Statistics

- **Total Endpoints**: 7
- **Methods**: POST (3), GET (4)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | createkeytab | - | `/api/proxysso/service/createkeytab` |
| GET | service | deletekeytab | - | `/api/proxysso/service/deletekeytab` |
| GET | service | get_check_list | - | `/api/proxysso/service/get_check_list` |
| GET | service | showkeytab | - | `/api/proxysso/service/showkeytab` |
| POST | service | testkerblogin | - | `/api/proxysso/service/testkerblogin` |
| GET | settings | get | - | `/api/proxysso/settings/get` |
| POST | settings | set | - | `/api/proxysso/settings/set` |

---

## Puppetagent

**Base URL**: `/api/puppetagent/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/puppetagent.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/sysutils/puppet-agent/src/opnsense/mvc/app/models/OPNsense/PuppetAgent/PuppetAgent.xml](https://github.com/opnsense/plugins/blob/master/sysutils/puppet-agent/src/opnsense/mvc/app/models/OPNsense/PuppetAgent/PuppetAgent.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: POST (5), GET (2)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | reconfigure | - | `/api/puppetagent/service/reconfigure` |
| POST | service | restart | - | `/api/puppetagent/service/restart` |
| POST | service | start | - | `/api/puppetagent/service/start` |
| GET | service | status | - | `/api/puppetagent/service/status` |
| POST | service | stop | - | `/api/puppetagent/service/stop` |
| GET | settings | get | - | `/api/puppetagent/settings/get` |
| POST | settings | set | - | `/api/puppetagent/settings/set` |

---

## Qemuguestagent

**Base URL**: `/api/qemuguestagent/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/qemuguestagent.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/emulators/qemu-guest-agent/src/opnsense/mvc/app/models/OPNsense/QemuGuestAgent/QemuGuestAgent.xml](https://github.com/opnsense/plugins/blob/master/emulators/qemu-guest-agent/src/opnsense/mvc/app/models/OPNsense/QemuGuestAgent/QemuGuestAgent.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: POST (5), GET (2)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | reconfigure | - | `/api/qemuguestagent/service/reconfigure` |
| POST | service | restart | - | `/api/qemuguestagent/service/restart` |
| POST | service | start | - | `/api/qemuguestagent/service/start` |
| GET | service | status | - | `/api/qemuguestagent/service/status` |
| POST | service | stop | - | `/api/qemuguestagent/service/stop` |
| GET | settings | get | - | `/api/qemuguestagent/settings/get` |
| POST | settings | set | - | `/api/qemuguestagent/settings/set` |

---

## Quagga

**Base URL**: `/api/quagga/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/quagga.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/frr/src/opnsense/mvc/app/models/OPNsense/Quagga/BFD.xml](https://github.com/opnsense/plugins/blob/master/net/frr/src/opnsense/mvc/app/models/OPNsense/Quagga/BFD.xml)

**Description**: Routing protocol suite (BGP, OSPF, RIP)

### Statistics

- **Total Endpoints**: 133
- **Methods**: POST (87), GET (46)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | bfd | add_neighbor | - | `/api/quagga/bfd/add_neighbor` |
| POST | bfd | del_neighbor | `$uuid` | `/api/quagga/bfd/del_neighbor/{uuid}` |
| GET | bfd | get | - | `/api/quagga/bfd/get` |
| GET | bfd | get_neighbor | `$uuid=null` | `/api/quagga/bfd/get_neighbor/{uuid}` |
| POST | bfd | set | - | `/api/quagga/bfd/set` |
| POST | bfd | set_neighbor | `$uuid` | `/api/quagga/bfd/set_neighbor/{uuid}` |
| POST | bfd | toggle_neighbor | `$uuid` | `/api/quagga/bfd/toggle_neighbor/{uuid}` |
| POST | bgp | add_aspath | - | `/api/quagga/bgp/add_aspath` |
| POST | bgp | add_communitylist | - | `/api/quagga/bgp/add_communitylist` |
| POST | bgp | add_neighbor | - | `/api/quagga/bgp/add_neighbor` |
| POST | bgp | add_peergroup | - | `/api/quagga/bgp/add_peergroup` |
| POST | bgp | add_prefixlist | - | `/api/quagga/bgp/add_prefixlist` |
| POST | bgp | add_redistribution | - | `/api/quagga/bgp/add_redistribution` |
| POST | bgp | add_routemap | - | `/api/quagga/bgp/add_routemap` |
| POST | bgp | del_aspath | `$uuid` | `/api/quagga/bgp/del_aspath/{uuid}` |
| POST | bgp | del_communitylist | `$uuid` | `/api/quagga/bgp/del_communitylist/{uuid}` |
| POST | bgp | del_neighbor | `$uuid` | `/api/quagga/bgp/del_neighbor/{uuid}` |
| POST | bgp | del_peergroup | `$uuid` | `/api/quagga/bgp/del_peergroup/{uuid}` |
| POST | bgp | del_prefixlist | `$uuid` | `/api/quagga/bgp/del_prefixlist/{uuid}` |
| POST | bgp | del_redistribution | `$uuid` | `/api/quagga/bgp/del_redistribution/{uuid}` |
| POST | bgp | del_routemap | `$uuid` | `/api/quagga/bgp/del_routemap/{uuid}` |
| GET | bgp | get | - | `/api/quagga/bgp/get` |
| GET | bgp | get_aspath | `$uuid=null` | `/api/quagga/bgp/get_aspath/{uuid}` |
| GET | bgp | get_communitylist | `$uuid=null` | `/api/quagga/bgp/get_communitylist/{uuid}` |
| GET | bgp | get_neighbor | `$uuid=null` | `/api/quagga/bgp/get_neighbor/{uuid}` |
| GET | bgp | get_peergroup | `$uuid=null` | `/api/quagga/bgp/get_peergroup/{uuid}` |
| GET | bgp | get_prefixlist | `$uuid=null` | `/api/quagga/bgp/get_prefixlist/{uuid}` |
| GET | bgp | get_redistribution | `$uuid=null` | `/api/quagga/bgp/get_redistribution/{uuid}` |
| GET | bgp | get_routemap | `$uuid=null` | `/api/quagga/bgp/get_routemap/{uuid}` |
| POST | bgp | set | - | `/api/quagga/bgp/set` |
| POST | bgp | set_aspath | `$uuid` | `/api/quagga/bgp/set_aspath/{uuid}` |
| POST | bgp | set_communitylist | `$uuid` | `/api/quagga/bgp/set_communitylist/{uuid}` |
| POST | bgp | set_neighbor | `$uuid` | `/api/quagga/bgp/set_neighbor/{uuid}` |
| POST | bgp | set_peergroup | `$uuid` | `/api/quagga/bgp/set_peergroup/{uuid}` |
| POST | bgp | set_prefixlist | `$uuid` | `/api/quagga/bgp/set_prefixlist/{uuid}` |
| POST | bgp | set_redistribution | `$uuid` | `/api/quagga/bgp/set_redistribution/{uuid}` |
| POST | bgp | set_routemap | `$uuid` | `/api/quagga/bgp/set_routemap/{uuid}` |
| POST | bgp | toggle_aspath | `$uuid` | `/api/quagga/bgp/toggle_aspath/{uuid}` |
| POST | bgp | toggle_communitylist | `$uuid` | `/api/quagga/bgp/toggle_communitylist/{uuid}` |
| POST | bgp | toggle_neighbor | `$uuid` | `/api/quagga/bgp/toggle_neighbor/{uuid}` |
| POST | bgp | toggle_peergroup | `$uuid` | `/api/quagga/bgp/toggle_peergroup/{uuid}` |
| POST | bgp | toggle_prefixlist | `$uuid` | `/api/quagga/bgp/toggle_prefixlist/{uuid}` |
| POST | bgp | toggle_redistribution | `$uuid` | `/api/quagga/bgp/toggle_redistribution/{uuid}` |
| POST | bgp | toggle_routemap | `$uuid` | `/api/quagga/bgp/toggle_routemap/{uuid}` |
| GET | diagnostics | bfdcounters | - | `/api/quagga/diagnostics/bfdcounters` |
| GET | diagnostics | bfdneighbors | - | `/api/quagga/diagnostics/bfdneighbors` |
| GET | diagnostics | bfdsummary | - | `/api/quagga/diagnostics/bfdsummary` |
| GET | diagnostics | bgpneighbors | - | `/api/quagga/diagnostics/bgpneighbors` |
| GET | diagnostics | bgpsummary | - | `/api/quagga/diagnostics/bgpsummary` |
| GET | diagnostics | generalrunningconfig | - | `/api/quagga/diagnostics/generalrunningconfig` |
| GET | diagnostics | ospfdatabase | - | `/api/quagga/diagnostics/ospfdatabase` |
| GET | diagnostics | ospfinterface | - | `/api/quagga/diagnostics/ospfinterface` |
| GET | diagnostics | ospfoverview | - | `/api/quagga/diagnostics/ospfoverview` |
| GET | diagnostics | ospfv3interface | - | `/api/quagga/diagnostics/ospfv3interface` |
| GET | diagnostics | ospfv3overview | - | `/api/quagga/diagnostics/ospfv3overview` |
| GET | diagnostics | search_bgproute4 | - | `/api/quagga/diagnostics/search_bgproute4` |
| GET | diagnostics | search_bgproute6 | - | `/api/quagga/diagnostics/search_bgproute6` |
| GET | diagnostics | search_generalroute4 | - | `/api/quagga/diagnostics/search_generalroute4` |
| GET | diagnostics | search_generalroute6 | - | `/api/quagga/diagnostics/search_generalroute6` |
| GET | diagnostics | search_ospfneighbor | - | `/api/quagga/diagnostics/search_ospfneighbor` |
| GET | diagnostics | search_ospfroute | - | `/api/quagga/diagnostics/search_ospfroute` |
| GET | diagnostics | search_ospfv3database | - | `/api/quagga/diagnostics/search_ospfv3database` |
| GET | diagnostics | search_ospfv3route | `$format=json` | `/api/quagga/diagnostics/search_ospfv3route/{format}` |
| GET | general | get | - | `/api/quagga/general/get` |
| POST | general | set | - | `/api/quagga/general/set` |
| POST | ospf6settings | add_interface | - | `/api/quagga/ospf6settings/add_interface` |
| POST | ospf6settings | add_network | - | `/api/quagga/ospf6settings/add_network` |
| POST | ospf6settings | add_prefixlist | - | `/api/quagga/ospf6settings/add_prefixlist` |
| POST | ospf6settings | add_redistribution | - | `/api/quagga/ospf6settings/add_redistribution` |
| POST | ospf6settings | add_routemap | - | `/api/quagga/ospf6settings/add_routemap` |
| POST | ospf6settings | del_interface | `$uuid` | `/api/quagga/ospf6settings/del_interface/{uuid}` |
| POST | ospf6settings | del_network | `$uuid` | `/api/quagga/ospf6settings/del_network/{uuid}` |
| POST | ospf6settings | del_prefixlist | `$uuid` | `/api/quagga/ospf6settings/del_prefixlist/{uuid}` |
| POST | ospf6settings | del_redistribution | `$uuid` | `/api/quagga/ospf6settings/del_redistribution/{uuid}` |
| POST | ospf6settings | del_routemap | `$uuid` | `/api/quagga/ospf6settings/del_routemap/{uuid}` |
| GET | ospf6settings | get | - | `/api/quagga/ospf6settings/get` |
| GET | ospf6settings | get_interface | `$uuid=null` | `/api/quagga/ospf6settings/get_interface/{uuid}` |
| GET | ospf6settings | get_network | `$uuid=null` | `/api/quagga/ospf6settings/get_network/{uuid}` |
| GET | ospf6settings | get_prefixlist | `$uuid=null` | `/api/quagga/ospf6settings/get_prefixlist/{uuid}` |
| GET | ospf6settings | get_redistribution | `$uuid=null` | `/api/quagga/ospf6settings/get_redistribution/{uuid}` |
| GET | ospf6settings | get_routemap | `$uuid=null` | `/api/quagga/ospf6settings/get_routemap/{uuid}` |
| POST | ospf6settings | set | - | `/api/quagga/ospf6settings/set` |
| POST | ospf6settings | set_interface | `$uuid` | `/api/quagga/ospf6settings/set_interface/{uuid}` |
| POST | ospf6settings | set_network | `$uuid` | `/api/quagga/ospf6settings/set_network/{uuid}` |
| POST | ospf6settings | set_prefixlist | `$uuid` | `/api/quagga/ospf6settings/set_prefixlist/{uuid}` |
| POST | ospf6settings | set_redistribution | `$uuid` | `/api/quagga/ospf6settings/set_redistribution/{uuid}` |
| POST | ospf6settings | set_routemap | `$uuid` | `/api/quagga/ospf6settings/set_routemap/{uuid}` |
| POST | ospf6settings | toggle_interface | `$uuid` | `/api/quagga/ospf6settings/toggle_interface/{uuid}` |
| POST | ospf6settings | toggle_network | `$uuid` | `/api/quagga/ospf6settings/toggle_network/{uuid}` |
| POST | ospf6settings | toggle_prefixlist | `$uuid` | `/api/quagga/ospf6settings/toggle_prefixlist/{uuid}` |
| POST | ospf6settings | toggle_redistribution | `$uuid` | `/api/quagga/ospf6settings/toggle_redistribution/{uuid}` |
| POST | ospf6settings | toggle_routemap | `$uuid` | `/api/quagga/ospf6settings/toggle_routemap/{uuid}` |
| POST | ospfsettings | add_interface | - | `/api/quagga/ospfsettings/add_interface` |
| POST | ospfsettings | add_network | - | `/api/quagga/ospfsettings/add_network` |
| POST | ospfsettings | add_prefixlist | - | `/api/quagga/ospfsettings/add_prefixlist` |
| POST | ospfsettings | add_redistribution | - | `/api/quagga/ospfsettings/add_redistribution` |
| POST | ospfsettings | add_routemap | - | `/api/quagga/ospfsettings/add_routemap` |
| POST | ospfsettings | del_interface | `$uuid` | `/api/quagga/ospfsettings/del_interface/{uuid}` |
| POST | ospfsettings | del_network | `$uuid` | `/api/quagga/ospfsettings/del_network/{uuid}` |
| POST | ospfsettings | del_prefixlist | `$uuid` | `/api/quagga/ospfsettings/del_prefixlist/{uuid}` |
| POST | ospfsettings | del_redistribution | `$uuid` | `/api/quagga/ospfsettings/del_redistribution/{uuid}` |
| POST | ospfsettings | del_routemap | `$uuid` | `/api/quagga/ospfsettings/del_routemap/{uuid}` |
| GET | ospfsettings | get | - | `/api/quagga/ospfsettings/get` |
| GET | ospfsettings | get_interface | `$uuid=null` | `/api/quagga/ospfsettings/get_interface/{uuid}` |
| GET | ospfsettings | get_network | `$uuid=null` | `/api/quagga/ospfsettings/get_network/{uuid}` |
| GET | ospfsettings | get_prefixlist | `$uuid=null` | `/api/quagga/ospfsettings/get_prefixlist/{uuid}` |
| GET | ospfsettings | get_redistribution | `$uuid=null` | `/api/quagga/ospfsettings/get_redistribution/{uuid}` |
| GET | ospfsettings | get_routemap | `$uuid=null` | `/api/quagga/ospfsettings/get_routemap/{uuid}` |
| POST | ospfsettings | set | - | `/api/quagga/ospfsettings/set` |
| POST | ospfsettings | set_interface | `$uuid` | `/api/quagga/ospfsettings/set_interface/{uuid}` |
| POST | ospfsettings | set_network | `$uuid` | `/api/quagga/ospfsettings/set_network/{uuid}` |
| POST | ospfsettings | set_prefixlist | `$uuid` | `/api/quagga/ospfsettings/set_prefixlist/{uuid}` |
| POST | ospfsettings | set_redistribution | `$uuid` | `/api/quagga/ospfsettings/set_redistribution/{uuid}` |
| POST | ospfsettings | set_routemap | `$uuid` | `/api/quagga/ospfsettings/set_routemap/{uuid}` |
| POST | ospfsettings | toggle_interface | `$uuid` | `/api/quagga/ospfsettings/toggle_interface/{uuid}` |
| POST | ospfsettings | toggle_network | `$uuid` | `/api/quagga/ospfsettings/toggle_network/{uuid}` |
| POST | ospfsettings | toggle_prefixlist | `$uuid` | `/api/quagga/ospfsettings/toggle_prefixlist/{uuid}` |
| POST | ospfsettings | toggle_redistribution | `$uuid` | `/api/quagga/ospfsettings/toggle_redistribution/{uuid}` |
| POST | ospfsettings | toggle_routemap | `$uuid` | `/api/quagga/ospfsettings/toggle_routemap/{uuid}` |
| GET | rip | get | - | `/api/quagga/rip/get` |
| POST | rip | set | - | `/api/quagga/rip/set` |
| POST | service | reconfigure | - | `/api/quagga/service/reconfigure` |
| POST | service | restart | - | `/api/quagga/service/restart` |
| POST | service | start | - | `/api/quagga/service/start` |
| GET | service | status | - | `/api/quagga/service/status` |
| POST | service | stop | - | `/api/quagga/service/stop` |
| POST | static | add_route | - | `/api/quagga/static/add_route` |
| POST | static | del_route | `$uuid` | `/api/quagga/static/del_route/{uuid}` |
| GET | static | get | - | `/api/quagga/static/get` |
| GET | static | get_route | `$uuid=null` | `/api/quagga/static/get_route/{uuid}` |
| POST | static | set | - | `/api/quagga/static/set` |
| POST | static | set_route | `$uuid` | `/api/quagga/static/set_route/{uuid}` |
| POST | static | toggle_route | `$uuid` | `/api/quagga/static/toggle_route/{uuid}` |

### Array Fields (Containers)

#### neighbor

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Radsecproxy

**Base URL**: `/api/radsecproxy/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/radsecproxy.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/radsecproxy/src/opnsense/mvc/app/models/OPNsense/RadSecProxy/RadSecProxy.xml](https://github.com/opnsense/plugins/blob/master/net/radsecproxy/src/opnsense/mvc/app/models/OPNsense/RadSecProxy/RadSecProxy.xml)

### Statistics

- **Total Endpoints**: 42
- **Methods**: POST (30), GET (12)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | clients | add_item | - | `/api/radsecproxy/clients/add_item` |
| POST | clients | del_item | `$uuid` | `/api/radsecproxy/clients/del_item/{uuid}` |
| GET | clients | get | - | `/api/radsecproxy/clients/get` |
| GET | clients | get_item | `$uuid=null` | `/api/radsecproxy/clients/get_item/{uuid}` |
| POST | clients | set | - | `/api/radsecproxy/clients/set` |
| POST | clients | set_item | `$uuid` | `/api/radsecproxy/clients/set_item/{uuid}` |
| POST | clients | toggle_item | `$uuid,$enabled=null` | `/api/radsecproxy/clients/toggle_item/{uuid}/{enabled}` |
| GET | general | get | - | `/api/radsecproxy/general/get` |
| POST | general | set | - | `/api/radsecproxy/general/set` |
| POST | realms | add_item | - | `/api/radsecproxy/realms/add_item` |
| POST | realms | del_item | `$uuid` | `/api/radsecproxy/realms/del_item/{uuid}` |
| GET | realms | get | - | `/api/radsecproxy/realms/get` |
| GET | realms | get_item | `$uuid=null` | `/api/radsecproxy/realms/get_item/{uuid}` |
| POST | realms | set | - | `/api/radsecproxy/realms/set` |
| POST | realms | set_item | `$uuid` | `/api/radsecproxy/realms/set_item/{uuid}` |
| POST | realms | toggle_item | `$uuid,$enabled=null` | `/api/radsecproxy/realms/toggle_item/{uuid}/{enabled}` |
| POST | rewrites | add_item | - | `/api/radsecproxy/rewrites/add_item` |
| POST | rewrites | del_item | `$uuid` | `/api/radsecproxy/rewrites/del_item/{uuid}` |
| GET | rewrites | get | - | `/api/radsecproxy/rewrites/get` |
| GET | rewrites | get_item | `$uuid=null` | `/api/radsecproxy/rewrites/get_item/{uuid}` |
| POST | rewrites | set | - | `/api/radsecproxy/rewrites/set` |
| POST | rewrites | set_item | `$uuid` | `/api/radsecproxy/rewrites/set_item/{uuid}` |
| POST | rewrites | toggle_item | `$uuid,$enabled=null` | `/api/radsecproxy/rewrites/toggle_item/{uuid}/{enabled}` |
| POST | servers | add_item | - | `/api/radsecproxy/servers/add_item` |
| POST | servers | del_item | `$uuid` | `/api/radsecproxy/servers/del_item/{uuid}` |
| GET | servers | get | - | `/api/radsecproxy/servers/get` |
| GET | servers | get_item | `$uuid=null` | `/api/radsecproxy/servers/get_item/{uuid}` |
| POST | servers | set | - | `/api/radsecproxy/servers/set` |
| POST | servers | set_item | `$uuid` | `/api/radsecproxy/servers/set_item/{uuid}` |
| POST | servers | toggle_item | `$uuid,$enabled=null` | `/api/radsecproxy/servers/toggle_item/{uuid}/{enabled}` |
| POST | service | reconfigure | - | `/api/radsecproxy/service/reconfigure` |
| POST | service | restart | - | `/api/radsecproxy/service/restart` |
| POST | service | start | - | `/api/radsecproxy/service/start` |
| GET | service | status | - | `/api/radsecproxy/service/status` |
| POST | service | stop | - | `/api/radsecproxy/service/stop` |
| POST | tls | add_item | - | `/api/radsecproxy/tls/add_item` |
| POST | tls | del_item | `$uuid` | `/api/radsecproxy/tls/del_item/{uuid}` |
| GET | tls | get | - | `/api/radsecproxy/tls/get` |
| GET | tls | get_item | `$uuid=null` | `/api/radsecproxy/tls/get_item/{uuid}` |
| POST | tls | set | - | `/api/radsecproxy/tls/set` |
| POST | tls | set_item | `$uuid` | `/api/radsecproxy/tls/set_item/{uuid}` |
| POST | tls | toggle_item | `$uuid,$enabled=null` | `/api/radsecproxy/tls/toggle_item/{uuid}/{enabled}` |

### Array Fields (Containers)

#### client

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### server

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### tlsConfig

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### realm

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### rewrite

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Redis

**Base URL**: `/api/redis/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/redis.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/databases/redis/src/opnsense/mvc/app/models/OPNsense/Redis/Redis.xml](https://github.com/opnsense/plugins/blob/master/databases/redis/src/opnsense/mvc/app/models/OPNsense/Redis/Redis.xml)

**Description**: Redis in-memory data store

### Statistics

- **Total Endpoints**: 8
- **Methods**: POST (5), GET (3)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | reconfigure | - | `/api/redis/service/reconfigure` |
| GET | service | resetdb | - | `/api/redis/service/resetdb` |
| POST | service | restart | - | `/api/redis/service/restart` |
| POST | service | start | - | `/api/redis/service/start` |
| GET | service | status | - | `/api/redis/service/status` |
| POST | service | stop | - | `/api/redis/service/stop` |
| GET | settings | get | - | `/api/redis/settings/get` |
| POST | settings | set | - | `/api/redis/settings/set` |

---

## Relayd

**Base URL**: `/api/relayd/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/relayd.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/relayd/src/opnsense/mvc/app/models/OPNsense/Relayd/Relayd.xml](https://github.com/opnsense/plugins/blob/master/net/relayd/src/opnsense/mvc/app/models/OPNsense/Relayd/Relayd.xml)

### Statistics

- **Total Endpoints**: 14
- **Methods**: POST (9), GET (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | configtest | - | `/api/relayd/service/configtest` |
| POST | service | reconfigure | - | `/api/relayd/service/reconfigure` |
| POST | service | restart | - | `/api/relayd/service/restart` |
| POST | service | start | - | `/api/relayd/service/start` |
| GET | service | status | - | `/api/relayd/service/status` |
| POST | service | stop | - | `/api/relayd/service/stop` |
| GET | settings | del | `$nodeType=null,$uuid=null` | `/api/relayd/settings/del/{nodeType}/{uuid}` |
| GET | settings | dirty | - | `/api/relayd/settings/dirty` |
| GET | settings | get | `$nodeType=null,$uuid=null` | `/api/relayd/settings/get/{nodeType}/{uuid}` |
| POST | settings | search | `$nodeType=null` | `/api/relayd/settings/search/{nodeType}` |
| POST | settings | set | `$nodeType=null,$uuid=null` | `/api/relayd/settings/set/{nodeType}/{uuid}` |
| POST | settings | toggle | `$nodeType,$uuid,$enabled=null` | `/api/relayd/settings/toggle/{nodeType}/{uuid}/{enabled}` |
| GET | status | sum | `$wait=0` | `/api/relayd/status/sum/{wait}` |
| POST | status | toggle | `$nodeType=null,$id=null,$action=null` | `/api/relayd/status/toggle/{nodeType}/{id}/{action}` |

### Array Fields (Containers)

#### host

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### table

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### tablecheck

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### virtualserver

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### protocol

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Rspamd

**Base URL**: `/api/rspamd/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/rspamd.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/mail/rspamd/src/opnsense/mvc/app/models/OPNsense/Rspamd/RSpamd.xml](https://github.com/opnsense/plugins/blob/master/mail/rspamd/src/opnsense/mvc/app/models/OPNsense/Rspamd/RSpamd.xml)

**Description**: Advanced spam filtering system

### Statistics

- **Total Endpoints**: 7
- **Methods**: POST (5), GET (2)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | reconfigure | - | `/api/rspamd/service/reconfigure` |
| POST | service | restart | - | `/api/rspamd/service/restart` |
| POST | service | start | - | `/api/rspamd/service/start` |
| GET | service | status | - | `/api/rspamd/service/status` |
| POST | service | stop | - | `/api/rspamd/service/stop` |
| GET | settings | get | - | `/api/rspamd/settings/get` |
| POST | settings | set | - | `/api/rspamd/settings/set` |

---

## Shadowsocks

**Base URL**: `/api/shadowsocks/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/shadowsocks.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/shadowsocks/src/opnsense/mvc/app/models/OPNsense/Shadowsocks/General.xml](https://github.com/opnsense/plugins/blob/master/net/shadowsocks/src/opnsense/mvc/app/models/OPNsense/Shadowsocks/General.xml)

### Statistics

- **Total Endpoints**: 14
- **Methods**: GET (4), POST (10)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/shadowsocks/general/get` |
| POST | general | set | - | `/api/shadowsocks/general/set` |
| GET | local | get | - | `/api/shadowsocks/local/get` |
| POST | local | set | - | `/api/shadowsocks/local/set` |
| POST | localservice | reconfigure | - | `/api/shadowsocks/localservice/reconfigure` |
| POST | localservice | restart | - | `/api/shadowsocks/localservice/restart` |
| POST | localservice | start | - | `/api/shadowsocks/localservice/start` |
| GET | localservice | status | - | `/api/shadowsocks/localservice/status` |
| POST | localservice | stop | - | `/api/shadowsocks/localservice/stop` |
| POST | service | reconfigure | - | `/api/shadowsocks/service/reconfigure` |
| POST | service | restart | - | `/api/shadowsocks/service/restart` |
| POST | service | start | - | `/api/shadowsocks/service/start` |
| GET | service | status | - | `/api/shadowsocks/service/status` |
| POST | service | stop | - | `/api/shadowsocks/service/stop` |

---

## Siproxd

**Base URL**: `/api/siproxd/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/siproxd.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/siproxd/src/opnsense/mvc/app/models/OPNsense/Siproxd/Domain.xml](https://github.com/opnsense/plugins/blob/master/net/siproxd/src/opnsense/mvc/app/models/OPNsense/Siproxd/Domain.xml)

### Statistics

- **Total Endpoints**: 24
- **Methods**: POST (13), GET (11)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | domain | add_domain | - | `/api/siproxd/domain/add_domain` |
| POST | domain | del_domain | `$uuid` | `/api/siproxd/domain/del_domain/{uuid}` |
| GET | domain | get | - | `/api/siproxd/domain/get` |
| GET | domain | get_domain | `$uuid=null` | `/api/siproxd/domain/get_domain/{uuid}` |
| GET | domain | search_domain | - | `/api/siproxd/domain/search_domain` |
| POST | domain | set | - | `/api/siproxd/domain/set` |
| POST | domain | set_domain | `$uuid` | `/api/siproxd/domain/set_domain/{uuid}` |
| GET | domain | toggle_domain | `$uuid` | `/api/siproxd/domain/toggle_domain/{uuid}` |
| GET | general | get | - | `/api/siproxd/general/get` |
| POST | general | set | - | `/api/siproxd/general/set` |
| POST | service | reconfigure | - | `/api/siproxd/service/reconfigure` |
| POST | service | restart | - | `/api/siproxd/service/restart` |
| GET | service | showregistrations | - | `/api/siproxd/service/showregistrations` |
| POST | service | start | - | `/api/siproxd/service/start` |
| GET | service | status | - | `/api/siproxd/service/status` |
| POST | service | stop | - | `/api/siproxd/service/stop` |
| POST | user | add_user | - | `/api/siproxd/user/add_user` |
| POST | user | del_user | `$uuid` | `/api/siproxd/user/del_user/{uuid}` |
| GET | user | get | - | `/api/siproxd/user/get` |
| GET | user | get_user | `$uuid=null` | `/api/siproxd/user/get_user/{uuid}` |
| GET | user | search_user | - | `/api/siproxd/user/search_user` |
| POST | user | set | - | `/api/siproxd/user/set` |
| POST | user | set_user | `$uuid` | `/api/siproxd/user/set_user/{uuid}` |
| GET | user | toggle_user | `$uuid` | `/api/siproxd/user/toggle_user/{uuid}` |

### Array Fields (Containers)

#### domain

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Smart

**Base URL**: `/api/smart/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/smart.html

### Statistics

- **Total Endpoints**: 5
- **Methods**: POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | abort | - | `/api/smart/service/abort` |
| POST | service | info | - | `/api/smart/service/info` |
| POST | service | list | `$details=null` | `/api/smart/service/list/{details}` |
| POST | service | logs | - | `/api/smart/service/logs` |
| POST | service | test | - | `/api/smart/service/test` |

---

## Softether

**Base URL**: `/api/softether/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/softether.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/security/softether/src/opnsense/mvc/app/models/OPNsense/Softether/General.xml](https://github.com/opnsense/plugins/blob/master/security/softether/src/opnsense/mvc/app/models/OPNsense/Softether/General.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: GET (2), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/softether/general/get` |
| POST | general | set | - | `/api/softether/general/set` |
| POST | service | reconfigure | - | `/api/softether/service/reconfigure` |
| POST | service | restart | - | `/api/softether/service/restart` |
| POST | service | start | - | `/api/softether/service/start` |
| GET | service | status | - | `/api/softether/service/status` |
| POST | service | stop | - | `/api/softether/service/stop` |

---

## Sslh

**Base URL**: `/api/sslh/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/sslh.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/sslh/src/opnsense/mvc/app/models/OPNsense/Sslh/Settings.xml](https://github.com/opnsense/plugins/blob/master/net/sslh/src/opnsense/mvc/app/models/OPNsense/Sslh/Settings.xml)

### Statistics

- **Total Endpoints**: 8
- **Methods**: POST (5), GET (3)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | reconfigure | - | `/api/sslh/service/reconfigure` |
| POST | service | restart | - | `/api/sslh/service/restart` |
| POST | service | start | - | `/api/sslh/service/start` |
| GET | service | status | - | `/api/sslh/service/status` |
| POST | service | stop | - | `/api/sslh/service/stop` |
| GET | settings | get | - | `/api/sslh/settings/get` |
| GET | settings | index | - | `/api/sslh/settings/index` |
| POST | settings | set | - | `/api/sslh/settings/set` |

---

## Stunnel

**Base URL**: `/api/stunnel/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/stunnel.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/security/stunnel/src/opnsense/mvc/app/models/OPNsense/Stunnel/Stunnel.xml](https://github.com/opnsense/plugins/blob/master/security/stunnel/src/opnsense/mvc/app/models/OPNsense/Stunnel/Stunnel.xml)

**Description**: SSL encryption wrapper

### Statistics

- **Total Endpoints**: 12
- **Methods**: POST (9), GET (3)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | reconfigure | - | `/api/stunnel/service/reconfigure` |
| POST | service | restart | - | `/api/stunnel/service/restart` |
| POST | service | start | - | `/api/stunnel/service/start` |
| GET | service | status | - | `/api/stunnel/service/status` |
| POST | service | stop | - | `/api/stunnel/service/stop` |
| POST | services | add_item | - | `/api/stunnel/services/add_item` |
| POST | services | del_item | `$uuid` | `/api/stunnel/services/del_item/{uuid}` |
| GET | services | get | - | `/api/stunnel/services/get` |
| GET | services | get_item | `$uuid=null` | `/api/stunnel/services/get_item/{uuid}` |
| POST | services | set | - | `/api/stunnel/services/set` |
| POST | services | set_item | `$uuid` | `/api/stunnel/services/set_item/{uuid}` |
| POST | services | toggle_item | `$uuid,$enabled=null` | `/api/stunnel/services/toggle_item/{uuid}/{enabled}` |

### Array Fields (Containers)

#### service

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Tailscale

**Base URL**: `/api/tailscale/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/tailscale.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/security/tailscale/src/opnsense/mvc/app/models/OPNsense/Tailscale/Authentication.xml](https://github.com/opnsense/plugins/blob/master/security/tailscale/src/opnsense/mvc/app/models/OPNsense/Tailscale/Authentication.xml)

**Description**: Zero-config VPN service

### Statistics

- **Total Endpoints**: 19
- **Methods**: GET (9), POST (10)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | authentication | get | - | `/api/tailscale/authentication/get` |
| POST | authentication | set | - | `/api/tailscale/authentication/set` |
| POST | service | reconfigure | - | `/api/tailscale/service/reconfigure` |
| POST | service | restart | - | `/api/tailscale/service/restart` |
| POST | service | start | - | `/api/tailscale/service/start` |
| GET | service | status | - | `/api/tailscale/service/status` |
| POST | service | stop | - | `/api/tailscale/service/stop` |
| POST | settings | add_subnet | - | `/api/tailscale/settings/add_subnet` |
| POST | settings | del_subnet | `$uuid` | `/api/tailscale/settings/del_subnet/{uuid}` |
| GET | settings | get | - | `/api/tailscale/settings/get` |
| GET | settings | get_subnet | `$uuid=null` | `/api/tailscale/settings/get_subnet/{uuid}` |
| GET | settings | reload | - | `/api/tailscale/settings/reload` |
| POST | settings | set | - | `/api/tailscale/settings/set` |
| POST | settings | set_subnet | `$uuid` | `/api/tailscale/settings/set_subnet/{uuid}` |
| GET | status | get | - | `/api/tailscale/status/get` |
| GET | status | ip | - | `/api/tailscale/status/ip` |
| GET | status | net | - | `/api/tailscale/status/net` |
| POST | status | set | - | `/api/tailscale/status/set` |
| GET | status | status | - | `/api/tailscale/status/status` |

---

## Tayga

**Base URL**: `/api/tayga/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/tayga.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/tayga/src/opnsense/mvc/app/models/OPNsense/Tayga/General.xml](https://github.com/opnsense/plugins/blob/master/net/tayga/src/opnsense/mvc/app/models/OPNsense/Tayga/General.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: GET (2), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/tayga/general/get` |
| POST | general | set | - | `/api/tayga/general/set` |
| POST | service | reconfigure | - | `/api/tayga/service/reconfigure` |
| POST | service | restart | - | `/api/tayga/service/restart` |
| POST | service | start | - | `/api/tayga/service/start` |
| GET | service | status | - | `/api/tayga/service/status` |
| POST | service | stop | - | `/api/tayga/service/stop` |

---

## Telegraf

**Base URL**: `/api/telegraf/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/telegraf.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net-mgmt/telegraf/src/opnsense/mvc/app/models/OPNsense/Telegraf/Key.xml](https://github.com/opnsense/plugins/blob/master/net-mgmt/telegraf/src/opnsense/mvc/app/models/OPNsense/Telegraf/Key.xml)

**Description**: Metrics collection agent

### Statistics

- **Total Endpoints**: 18
- **Methods**: GET (6), POST (12)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/telegraf/general/get` |
| POST | general | set | - | `/api/telegraf/general/set` |
| GET | input | get | - | `/api/telegraf/input/get` |
| POST | input | set | - | `/api/telegraf/input/set` |
| POST | key | add_key | - | `/api/telegraf/key/add_key` |
| POST | key | del_key | `$uuid` | `/api/telegraf/key/del_key/{uuid}` |
| GET | key | get | - | `/api/telegraf/key/get` |
| GET | key | get_key | `$uuid=null` | `/api/telegraf/key/get_key/{uuid}` |
| POST | key | set | - | `/api/telegraf/key/set` |
| POST | key | set_key | `$uuid` | `/api/telegraf/key/set_key/{uuid}` |
| POST | key | toggle_key | `$uuid` | `/api/telegraf/key/toggle_key/{uuid}` |
| GET | output | get | - | `/api/telegraf/output/get` |
| POST | output | set | - | `/api/telegraf/output/set` |
| POST | service | reconfigure | - | `/api/telegraf/service/reconfigure` |
| POST | service | restart | - | `/api/telegraf/service/restart` |
| POST | service | start | - | `/api/telegraf/service/start` |
| GET | service | status | - | `/api/telegraf/service/status` |
| POST | service | stop | - | `/api/telegraf/service/stop` |

### Array Fields (Containers)

#### key

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Tftp

**Base URL**: `/api/tftp/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/tftp.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/ftp/tftp/src/opnsense/mvc/app/models/OPNsense/Tftp/General.xml](https://github.com/opnsense/plugins/blob/master/ftp/tftp/src/opnsense/mvc/app/models/OPNsense/Tftp/General.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: GET (2), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/tftp/general/get` |
| POST | general | set | - | `/api/tftp/general/set` |
| POST | service | reconfigure | - | `/api/tftp/service/reconfigure` |
| POST | service | restart | - | `/api/tftp/service/restart` |
| POST | service | start | - | `/api/tftp/service/start` |
| GET | service | status | - | `/api/tftp/service/status` |
| POST | service | stop | - | `/api/tftp/service/stop` |

---

## Tinc

**Base URL**: `/api/tinc/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/tinc.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/security/tinc/src/opnsense/mvc/app/models/OPNsense/Tinc/Tinc.xml](https://github.com/opnsense/plugins/blob/master/security/tinc/src/opnsense/mvc/app/models/OPNsense/Tinc/Tinc.xml)

**Description**: Tinc VPN daemon

### Statistics

- **Total Endpoints**: 16
- **Methods**: POST (11), GET (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | reconfigure | - | `/api/tinc/service/reconfigure` |
| POST | service | restart | - | `/api/tinc/service/restart` |
| POST | service | start | - | `/api/tinc/service/start` |
| POST | service | stop | - | `/api/tinc/service/stop` |
| POST | settings | del_host | `$uuid` | `/api/tinc/settings/del_host/{uuid}` |
| POST | settings | del_network | `$uuid` | `/api/tinc/settings/del_network/{uuid}` |
| GET | settings | get | - | `/api/tinc/settings/get` |
| GET | settings | get_host | `$uuid=null` | `/api/tinc/settings/get_host/{uuid}` |
| GET | settings | get_network | `$uuid=null` | `/api/tinc/settings/get_network/{uuid}` |
| GET | settings | search_host | - | `/api/tinc/settings/search_host` |
| GET | settings | search_network | - | `/api/tinc/settings/search_network` |
| POST | settings | set | - | `/api/tinc/settings/set` |
| POST | settings | set_host | `$uuid=null` | `/api/tinc/settings/set_host/{uuid}` |
| POST | settings | set_network | `$uuid=null` | `/api/tinc/settings/set_network/{uuid}` |
| POST | settings | toggle_host | `$uuid,$enabled=null` | `/api/tinc/settings/toggle_host/{uuid}/{enabled}` |
| POST | settings | toggle_network | `$uuid,$enabled=null` | `/api/tinc/settings/toggle_network/{uuid}/{enabled}` |

### Array Fields (Containers)

#### network

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### host

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Tor

**Base URL**: `/api/tor/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/tor.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/security/tor/src/opnsense/mvc/app/models/OPNsense/Tor/ACLExitPolicy.xml](https://github.com/opnsense/plugins/blob/master/security/tor/src/opnsense/mvc/app/models/OPNsense/Tor/ACLExitPolicy.xml)

**Description**: The Onion Router for anonymous communication

### Statistics

- **Total Endpoints**: 45
- **Methods**: POST (30), GET (15)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | exitacl | addacl | - | `/api/tor/exitacl/addacl` |
| POST | exitacl | delacl | `$uuid` | `/api/tor/exitacl/delacl/{uuid}` |
| GET | exitacl | get | - | `/api/tor/exitacl/get` |
| GET | exitacl | getacl | `$uuid=null` | `/api/tor/exitacl/getacl/{uuid}` |
| POST | exitacl | set | - | `/api/tor/exitacl/set` |
| POST | exitacl | setacl | `$uuid` | `/api/tor/exitacl/setacl/{uuid}` |
| POST | exitacl | toggleacl | `$uuid` | `/api/tor/exitacl/toggleacl/{uuid}` |
| POST | general | addhidservauth | - | `/api/tor/general/addhidservauth` |
| POST | general | delhidservauth | `$uuid` | `/api/tor/general/delhidservauth/{uuid}` |
| GET | general | get | - | `/api/tor/general/get` |
| GET | general | gethidservauth | `$uuid=null` | `/api/tor/general/gethidservauth/{uuid}` |
| POST | general | set | - | `/api/tor/general/set` |
| POST | general | sethidservauth | `$uuid` | `/api/tor/general/sethidservauth/{uuid}` |
| POST | general | togglehidservauth | `$uuid` | `/api/tor/general/togglehidservauth/{uuid}` |
| POST | hiddenservice | addservice | - | `/api/tor/hiddenservice/addservice` |
| POST | hiddenservice | delservice | `$uuid` | `/api/tor/hiddenservice/delservice/{uuid}` |
| GET | hiddenservice | get | - | `/api/tor/hiddenservice/get` |
| GET | hiddenservice | getservice | `$uuid=null` | `/api/tor/hiddenservice/getservice/{uuid}` |
| POST | hiddenservice | set | - | `/api/tor/hiddenservice/set` |
| POST | hiddenservice | setservice | `$uuid` | `/api/tor/hiddenservice/setservice/{uuid}` |
| POST | hiddenservice | toggleservice | `$uuid` | `/api/tor/hiddenservice/toggleservice/{uuid}` |
| POST | hiddenserviceacl | addacl | - | `/api/tor/hiddenserviceacl/addacl` |
| POST | hiddenserviceacl | delacl | `$uuid` | `/api/tor/hiddenserviceacl/delacl/{uuid}` |
| GET | hiddenserviceacl | get | - | `/api/tor/hiddenserviceacl/get` |
| GET | hiddenserviceacl | getacl | `$uuid=null` | `/api/tor/hiddenserviceacl/getacl/{uuid}` |
| POST | hiddenserviceacl | set | - | `/api/tor/hiddenserviceacl/set` |
| POST | hiddenserviceacl | setacl | `$uuid` | `/api/tor/hiddenserviceacl/setacl/{uuid}` |
| POST | hiddenserviceacl | toggleacl | `$uuid` | `/api/tor/hiddenserviceacl/toggleacl/{uuid}` |
| GET | relay | get | - | `/api/tor/relay/get` |
| POST | relay | set | - | `/api/tor/relay/set` |
| GET | service | circuits | - | `/api/tor/service/circuits` |
| GET | service | get_hidden_services | - | `/api/tor/service/get_hidden_services` |
| POST | service | reconfigure | - | `/api/tor/service/reconfigure` |
| POST | service | restart | - | `/api/tor/service/restart` |
| POST | service | start | - | `/api/tor/service/start` |
| GET | service | status | - | `/api/tor/service/status` |
| POST | service | stop | - | `/api/tor/service/stop` |
| GET | service | streams | - | `/api/tor/service/streams` |
| POST | socksacl | addacl | - | `/api/tor/socksacl/addacl` |
| POST | socksacl | delacl | `$uuid` | `/api/tor/socksacl/delacl/{uuid}` |
| GET | socksacl | get | - | `/api/tor/socksacl/get` |
| GET | socksacl | getacl | `$uuid=null` | `/api/tor/socksacl/getacl/{uuid}` |
| POST | socksacl | set | - | `/api/tor/socksacl/set` |
| POST | socksacl | setacl | `$uuid` | `/api/tor/socksacl/setacl/{uuid}` |
| POST | socksacl | toggleacl | `$uuid` | `/api/tor/socksacl/toggleacl/{uuid}` |

### Array Fields (Containers)

#### policy

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Turnserver

**Base URL**: `/api/turnserver/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/turnserver.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/turnserver/src/opnsense/mvc/app/models/OPNsense/Turnserver/Turnserver.xml](https://github.com/opnsense/plugins/blob/master/net/turnserver/src/opnsense/mvc/app/models/OPNsense/Turnserver/Turnserver.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: POST (5), GET (2)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | reconfigure | - | `/api/turnserver/service/reconfigure` |
| POST | service | restart | - | `/api/turnserver/service/restart` |
| POST | service | start | - | `/api/turnserver/service/start` |
| GET | service | status | - | `/api/turnserver/service/status` |
| POST | service | stop | - | `/api/turnserver/service/stop` |
| GET | settings | get | - | `/api/turnserver/settings/get` |
| POST | settings | set | - | `/api/turnserver/settings/set` |

---

## Udpbroadcastrelay

**Base URL**: `/api/udpbroadcastrelay/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/udpbroadcastrelay.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/udpbroadcastrelay/src/opnsense/mvc/app/models/OPNsense/UDPBroadcastRelay/UDPBroadcastRelay.xml](https://github.com/opnsense/plugins/blob/master/net/udpbroadcastrelay/src/opnsense/mvc/app/models/OPNsense/UDPBroadcastRelay/UDPBroadcastRelay.xml)

### Statistics

- **Total Endpoints**: 16
- **Methods**: GET (10), POST (6)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | service | config | - | `/api/udpbroadcastrelay/service/config` |
| GET | service | get | - | `/api/udpbroadcastrelay/service/get` |
| GET | service | reload | - | `/api/udpbroadcastrelay/service/reload` |
| GET | service | restart | `$uuid` | `/api/udpbroadcastrelay/service/restart/{uuid}` |
| POST | service | set | - | `/api/udpbroadcastrelay/service/set` |
| GET | service | start | `$uuid` | `/api/udpbroadcastrelay/service/start/{uuid}` |
| GET | service | status | `$uuid` | `/api/udpbroadcastrelay/service/status/{uuid}` |
| GET | service | stop | `$uuid` | `/api/udpbroadcastrelay/service/stop/{uuid}` |
| POST | settings | add_relay | - | `/api/udpbroadcastrelay/settings/add_relay` |
| POST | settings | del_relay | `$uuid` | `/api/udpbroadcastrelay/settings/del_relay/{uuid}` |
| GET | settings | get | - | `/api/udpbroadcastrelay/settings/get` |
| GET | settings | get_relay | `$uuid=null` | `/api/udpbroadcastrelay/settings/get_relay/{uuid}` |
| GET | settings | search_relay | - | `/api/udpbroadcastrelay/settings/search_relay` |
| POST | settings | set | - | `/api/udpbroadcastrelay/settings/set` |
| POST | settings | set_relay | `$uuid` | `/api/udpbroadcastrelay/settings/set_relay/{uuid}` |
| POST | settings | toggle_relay | `$uuid` | `/api/udpbroadcastrelay/settings/toggle_relay/{uuid}` |

### Array Fields (Containers)

#### udpbroadcastrelay

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Vnstat

**Base URL**: `/api/vnstat/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/vnstat.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/vnstat/src/opnsense/mvc/app/models/OPNsense/Vnstat/General.xml](https://github.com/opnsense/plugins/blob/master/net/vnstat/src/opnsense/mvc/app/models/OPNsense/Vnstat/General.xml)

### Statistics

- **Total Endpoints**: 12
- **Methods**: GET (7), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/vnstat/general/get` |
| POST | general | set | - | `/api/vnstat/general/set` |
| GET | service | daily | - | `/api/vnstat/service/daily` |
| GET | service | hourly | - | `/api/vnstat/service/hourly` |
| GET | service | monthly | - | `/api/vnstat/service/monthly` |
| POST | service | reconfigure | - | `/api/vnstat/service/reconfigure` |
| GET | service | resetdb | - | `/api/vnstat/service/resetdb` |
| POST | service | restart | - | `/api/vnstat/service/restart` |
| POST | service | start | - | `/api/vnstat/service/start` |
| GET | service | status | - | `/api/vnstat/service/status` |
| POST | service | stop | - | `/api/vnstat/service/stop` |
| GET | service | yearly | - | `/api/vnstat/service/yearly` |

---

## Wazuhagent

**Base URL**: `/api/wazuhagent/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/wazuhagent.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/security/wazuh-agent/src/opnsense/mvc/app/models/OPNsense/WazuhAgent/WazuhAgent.xml](https://github.com/opnsense/plugins/blob/master/security/wazuh-agent/src/opnsense/mvc/app/models/OPNsense/WazuhAgent/WazuhAgent.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: POST (5), GET (2)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | reconfigure | - | `/api/wazuhagent/service/reconfigure` |
| POST | service | restart | - | `/api/wazuhagent/service/restart` |
| POST | service | start | - | `/api/wazuhagent/service/start` |
| GET | service | status | - | `/api/wazuhagent/service/status` |
| POST | service | stop | - | `/api/wazuhagent/service/stop` |
| GET | settings | get | - | `/api/wazuhagent/settings/get` |
| POST | settings | set | - | `/api/wazuhagent/settings/set` |

---

## Wol

**Base URL**: `/api/wol/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/wol.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/wol/src/opnsense/mvc/app/models/OPNsense/Wol/Wol.xml](https://github.com/opnsense/plugins/blob/master/net/wol/src/opnsense/mvc/app/models/OPNsense/Wol/Wol.xml)

### Statistics

- **Total Endpoints**: 8
- **Methods**: POST (5), GET (3)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | wol | add_host | - | `/api/wol/wol/add_host` |
| POST | wol | del_host | `$uuid` | `/api/wol/wol/del_host/{uuid}` |
| GET | wol | get | - | `/api/wol/wol/get` |
| GET | wol | get_host | `$uuid=null` | `/api/wol/wol/get_host/{uuid}` |
| GET | wol | getwake | - | `/api/wol/wol/getwake` |
| POST | wol | set | - | `/api/wol/wol/set` |
| POST | wol | set_host | `$uuid` | `/api/wol/wol/set_host/{uuid}` |
| POST | wol | wakeall | - | `/api/wol/wol/wakeall` |

### Array Fields (Containers)

#### wolentry

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Zabbixagent

**Base URL**: `/api/zabbixagent/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/zabbixagent.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net-mgmt/zabbix-agent/src/opnsense/mvc/app/models/OPNsense/ZabbixAgent/ZabbixAgent.xml](https://github.com/opnsense/plugins/blob/master/net-mgmt/zabbix-agent/src/opnsense/mvc/app/models/OPNsense/ZabbixAgent/ZabbixAgent.xml)

### Statistics

- **Total Endpoints**: 17
- **Methods**: POST (13), GET (4)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | reconfigure | - | `/api/zabbixagent/service/reconfigure` |
| POST | service | restart | - | `/api/zabbixagent/service/restart` |
| POST | service | start | - | `/api/zabbixagent/service/start` |
| GET | service | status | - | `/api/zabbixagent/service/status` |
| POST | service | stop | - | `/api/zabbixagent/service/stop` |
| POST | settings | add_alias | - | `/api/zabbixagent/settings/add_alias` |
| POST | settings | add_userparameter | - | `/api/zabbixagent/settings/add_userparameter` |
| POST | settings | del_alias | `$uuid` | `/api/zabbixagent/settings/del_alias/{uuid}` |
| POST | settings | del_userparameter | `$uuid` | `/api/zabbixagent/settings/del_userparameter/{uuid}` |
| GET | settings | get | - | `/api/zabbixagent/settings/get` |
| GET | settings | get_alias | `$uuid=null` | `/api/zabbixagent/settings/get_alias/{uuid}` |
| GET | settings | get_userparameter | `$uuid=null` | `/api/zabbixagent/settings/get_userparameter/{uuid}` |
| POST | settings | set | - | `/api/zabbixagent/settings/set` |
| POST | settings | set_alias | `$uuid` | `/api/zabbixagent/settings/set_alias/{uuid}` |
| POST | settings | set_userparameter | `$uuid` | `/api/zabbixagent/settings/set_userparameter/{uuid}` |
| POST | settings | toggle_alias | `$uuid` | `/api/zabbixagent/settings/toggle_alias/{uuid}` |
| POST | settings | toggle_userparameter | `$uuid` | `/api/zabbixagent/settings/toggle_userparameter/{uuid}` |

### Array Fields (Containers)

#### userparameter

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### alias

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Zabbixproxy

**Base URL**: `/api/zabbixproxy/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/zabbixproxy.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net-mgmt/zabbix-proxy/src/opnsense/mvc/app/models/OPNsense/Zabbixproxy/General.xml](https://github.com/opnsense/plugins/blob/master/net-mgmt/zabbix-proxy/src/opnsense/mvc/app/models/OPNsense/Zabbixproxy/General.xml)

### Statistics

- **Total Endpoints**: 7
- **Methods**: GET (2), POST (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | general | get | - | `/api/zabbixproxy/general/get` |
| POST | general | set | - | `/api/zabbixproxy/general/set` |
| POST | service | reconfigure | - | `/api/zabbixproxy/service/reconfigure` |
| POST | service | restart | - | `/api/zabbixproxy/service/restart` |
| POST | service | start | - | `/api/zabbixproxy/service/start` |
| GET | service | status | - | `/api/zabbixproxy/service/status` |
| POST | service | stop | - | `/api/zabbixproxy/service/stop` |

---

## Zerotier

**Base URL**: `/api/zerotier/`

**Documentation**: https://docs.opnsense.org/development/api/plugins/zerotier.html

**Model XML**: [https://github.com/opnsense/plugins/blob/master/net/zerotier/src/opnsense/mvc/app/models/OPNsense/Zerotier/Zerotier.xml](https://github.com/opnsense/plugins/blob/master/net/zerotier/src/opnsense/mvc/app/models/OPNsense/Zerotier/Zerotier.xml)

**Description**: Software-defined networking

### Statistics

- **Total Endpoints**: 10
- **Methods**: POST (5), GET (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | network | add | - | `/api/zerotier/network/add` |
| POST | network | del | `$uuid=null` | `/api/zerotier/network/del/{uuid}` |
| GET | network | get | `$uuid=null` | `/api/zerotier/network/get/{uuid}` |
| GET | network | info | `$uuid=null` | `/api/zerotier/network/info/{uuid}` |
| GET | network | search | - | `/api/zerotier/network/search` |
| POST | network | set | `$uuid=null` | `/api/zerotier/network/set/{uuid}` |
| POST | network | toggle | `$uuid=null` | `/api/zerotier/network/toggle/{uuid}` |
| GET | settings | get | - | `/api/zerotier/settings/get` |
| POST | settings | set | - | `/api/zerotier/settings/set` |
| GET | settings | status | - | `/api/zerotier/settings/status` |

### Array Fields (Containers)

#### network

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Notes

- All API endpoints require authentication
- Base URL format: `/api/{module}/{controller}/{command}`
- Parameters in URLs are denoted with `{parameter}` syntax
- Refer to the official OPNsense documentation for detailed usage examples
