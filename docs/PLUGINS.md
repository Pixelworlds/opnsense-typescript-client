# OPNsense Plugin Modules API Documentation

## Overview

This documentation covers the Plugin modules of the OPNsense API. There are 64 plugin modules with a total of 1271 endpoints.

## Table of Contents

- [Acmeclient](#Acmeclient)
- [Apcupsd](#Apcupsd)
- [Bind](#Bind)
- [Caddy](#Caddy)
- [Chrony](#Chrony)
- [Cicap](#Cicap)
- [Clamav](#Clamav)
- [Collectd](#Collectd)
- [Crowdsec](#Crowdsec)
- [Dechw](#Dechw)
- [Diagnostics](#Diagnostics)
- [Dmidecode](#Dmidecode)
- [Dnscryptproxy](#Dnscryptproxy)
- [Dyndns](#Dyndns)
- [Freeradius](#Freeradius)
- [Ftpproxy](#Ftpproxy)
- [Gridexample](#Gridexample)
- [Haproxy](#Haproxy)
- [Helloworld](#Helloworld)
- [Hwprobe](#Hwprobe)
- [Iperf](#Iperf)
- [Lldpd](#Lldpd)
- [Maltrail](#Maltrail)
- [Mdnsrepeater](#Mdnsrepeater)
- [Muninnode](#Muninnode)
- [Ndproxy](#Ndproxy)
- [Netdata](#Netdata)
- [Netsnmp](#Netsnmp)
- [Nginx](#Nginx)
- [Nodeexporter](#Nodeexporter)
- [Nrpe](#Nrpe)
- [Ntopng](#Ntopng)
- [Nut](#Nut)
- [Openconnect](#Openconnect)
- [Postfix](#Postfix)
- [Proxy](#Proxy)
- [Proxysso](#Proxysso)
- [Puppetagent](#Puppetagent)
- [Qemuguestagent](#Qemuguestagent)
- [Quagga](#Quagga)
- [Radsecproxy](#Radsecproxy)
- [Redis](#Redis)
- [Relayd](#Relayd)
- [Rspamd](#Rspamd)
- [Shadowsocks](#Shadowsocks)
- [Siproxd](#Siproxd)
- [Smart](#Smart)
- [Softether](#Softether)
- [Sslh](#Sslh)
- [Stunnel](#Stunnel)
- [Tailscale](#Tailscale)
- [Tayga](#Tayga)
- [Telegraf](#Telegraf)
- [Tftp](#Tftp)
- [Tinc](#Tinc)
- [Tor](#Tor)
- [Turnserver](#Turnserver)
- [Udpbroadcastrelay](#Udpbroadcastrelay)
- [Vnstat](#Vnstat)
- [Wazuhagent](#Wazuhagent)
- [Wol](#Wol)
- [Zabbixagent](#Zabbixagent)
- [Zabbixproxy](#Zabbixproxy)
- [Zerotier](#Zerotier)

## Acmeclient

**Module:** Acmeclient  
**Type:** plugin  
**Endpoints:** 48

### Endpoints

| Controller   | Command                     | Method | Parameters          | Description |
| ------------ | --------------------------- | ------ | ------------------- | ----------- |
| accounts     | add                         | POST   | -                   | -           |
| accounts     | del                         | POST   | $uuid               | -           |
| accounts     | get                         | GET    | $uuid=null          | -           |
| accounts     | register                    | POST   | $uuid               | -           |
| accounts     | set                         | POST   | -                   | -           |
| accounts     | toggle                      | POST   | $uuid,$enabled=null | -           |
| accounts     | update                      | POST   | $uuid               | -           |
| actions      | add                         | POST   | -                   | -           |
| actions      | del                         | POST   | $uuid               | -           |
| actions      | get                         | GET    | $uuid=null          | -           |
| actions      | set                         | POST   | -                   | -           |
| actions      | sftp_get_identity           | GET    | -                   | -           |
| actions      | sftp_test_connection        | GET    | -                   | -           |
| actions      | ssh_get_identity            | GET    | -                   | -           |
| actions      | ssh_test_connection         | GET    | -                   | -           |
| actions      | toggle                      | POST   | $uuid,$enabled=null | -           |
| actions      | update                      | POST   | $uuid               | -           |
| certificates | add                         | POST   | -                   | -           |
| certificates | automation                  | GET    | $uuid               | -           |
| certificates | del                         | POST   | $uuid               | -           |
| certificates | get                         | GET    | $uuid=null          | -           |
| certificates | import                      | GET    | $uuid               | -           |
| certificates | removekey                   | GET    | $uuid               | -           |
| certificates | revoke                      | POST   | $uuid               | -           |
| certificates | set                         | POST   | -                   | -           |
| certificates | sign                        | POST   | $uuid               | -           |
| certificates | toggle                      | POST   | $uuid,$enabled=null | -           |
| certificates | update                      | POST   | $uuid               | -           |
| service      | configtest                  | GET    | -                   | -           |
| service      | reconfigure                 | POST   | -                   | -           |
| service      | reset                       | GET    | -                   | -           |
| service      | restart                     | POST   | -                   | -           |
| service      | signallcerts                | GET    | -                   | -           |
| service      | start                       | POST   | -                   | -           |
| service      | status                      | GET    | -                   | -           |
| service      | stop                        | POST   | -                   | -           |
| settings     | fetch_cron_integration      | POST   | -                   | -           |
| settings     | fetch_h_a_proxy_integration | POST   | -                   | -           |
| settings     | get                         | GET    | -                   | -           |
| settings     | get_bind_plugin_status      | GET    | -                   | -           |
| settings     | get_gcloud_plugin_status    | GET    | -                   | -           |
| settings     | set                         | POST   | -                   | -           |
| validations  | add                         | POST   | -                   | -           |
| validations  | del                         | POST   | $uuid               | -           |
| validations  | get                         | GET    | $uuid=null          | -           |
| validations  | set                         | POST   | -                   | -           |
| validations  | toggle                      | POST   | $uuid,$enabled=null | -           |
| validations  | update                      | POST   | $uuid               | -           |

### Model Structure

#### Containers

**account**

_No fields defined_

**certificate**

_No fields defined_

**validation**

_No fields defined_

**action**

_No fields defined_

---

## Apcupsd

**Module:** Apcupsd  
**Type:** plugin  
**Endpoints:** 8

### Endpoints

| Controller | Command        | Method | Parameters | Description |
| ---------- | -------------- | ------ | ---------- | ----------- |
| service    | get_ups_status | GET    | -          | -           |
| service    | reconfigure    | POST   | -          | -           |
| service    | restart        | POST   | -          | -           |
| service    | start          | POST   | -          | -           |
| service    | status         | GET    | -          | -           |
| service    | stop           | POST   | -          | -           |
| settings   | get            | GET    | -          | -           |
| settings   | set            | POST   | -          | -           |

### Model Structure

---

## Bind

**Module:** Bind  
**Type:** plugin  
**Endpoints:** 36

### Endpoints

| Controller | Command              | Method | Parameters     | Description |
| ---------- | -------------------- | ------ | -------------- | ----------- |
| acl        | add_acl              | POST   | -              | -           |
| acl        | del_acl              | POST   | $uuid          | -           |
| acl        | get                  | GET    | -              | -           |
| acl        | get_acl              | GET    | $uuid=null     | -           |
| acl        | set                  | POST   | -              | -           |
| acl        | set_acl              | POST   | $uuid          | -           |
| acl        | toggle_acl           | POST   | $uuid          | -           |
| dnsbl      | get                  | GET    | -              | -           |
| dnsbl      | set                  | POST   | -              | -           |
| domain     | add_primary_domain   | POST   | $uuid=null     | -           |
| domain     | add_secondary_domain | POST   | $uuid=null     | -           |
| domain     | del_domain           | POST   | $uuid          | -           |
| domain     | get                  | GET    | -              | -           |
| domain     | get_domain           | GET    | $uuid=null     | -           |
| domain     | search_master_domain | GET    | -              | -           |
| domain     | search_slave_domain  | GET    | -              | -           |
| domain     | set                  | POST   | -              | -           |
| domain     | set_domain           | POST   | $uuid=null     | -           |
| domain     | toggle_domain        | POST   | $uuid          | -           |
| general    | get                  | GET    | -              | -           |
| general    | set                  | POST   | -              | -           |
| general    | zoneshow             | GET    | $zonename=null | -           |
| general    | zonetest             | GET    | $zonename=null | -           |
| record     | add_record           | POST   | -              | -           |
| record     | del_record           | POST   | $uuid          | -           |
| record     | get                  | GET    | -              | -           |
| record     | get_record           | GET    | $uuid=null     | -           |
| record     | set                  | POST   | -              | -           |
| record     | set_record           | POST   | $uuid=null     | -           |
| record     | toggle_record        | POST   | $uuid          | -           |
| service    | dnsbl                | GET    | -              | -           |
| service    | reconfigure          | POST   | -              | -           |
| service    | restart              | POST   | -              | -           |
| service    | start                | POST   | -              | -           |
| service    | status               | GET    | -              | -           |
| service    | stop                 | POST   | -              | -           |

### Model Structure

#### Containers

**acl**

_No fields defined_

---

## Caddy

**Module:** Caddy  
**Type:** plugin  
**Endpoints:** 52

### Endpoints

| Controller    | Command                 | Method | Parameters          | Description |
| ------------- | ----------------------- | ------ | ------------------- | ----------- |
| diagnostics   | caddyfile               | GET    | -                   | -           |
| diagnostics   | config                  | GET    | -                   | -           |
| diagnostics   | get                     | GET    | -                   | -           |
| diagnostics   | set                     | POST   | -                   | -           |
| general       | get                     | GET    | -                   | -           |
| general       | set                     | POST   | -                   | -           |
| reverse_proxy | add_access_list         | POST   | -                   | -           |
| reverse_proxy | add_basic_auth          | POST   | -                   | -           |
| reverse_proxy | add_handle              | POST   | -                   | -           |
| reverse_proxy | add_header              | POST   | -                   | -           |
| reverse_proxy | add_layer4              | POST   | -                   | -           |
| reverse_proxy | add_layer4_openvpn      | POST   | -                   | -           |
| reverse_proxy | add_reverse_proxy       | POST   | -                   | -           |
| reverse_proxy | add_subdomain           | POST   | -                   | -           |
| reverse_proxy | del_access_list         | POST   | $uuid               | -           |
| reverse_proxy | del_basic_auth          | POST   | $uuid               | -           |
| reverse_proxy | del_handle              | POST   | $uuid               | -           |
| reverse_proxy | del_header              | POST   | $uuid               | -           |
| reverse_proxy | del_layer4              | POST   | $uuid               | -           |
| reverse_proxy | del_layer4_openvpn      | POST   | $uuid               | -           |
| reverse_proxy | del_reverse_proxy       | POST   | $uuid               | -           |
| reverse_proxy | del_subdomain           | POST   | $uuid               | -           |
| reverse_proxy | get                     | GET    | -                   | -           |
| reverse_proxy | get_access_list         | GET    | $uuid=null          | -           |
| reverse_proxy | get_all_reverse_domains | GET    | -                   | -           |
| reverse_proxy | get_basic_auth          | GET    | $uuid=null          | -           |
| reverse_proxy | get_handle              | GET    | $uuid=null          | -           |
| reverse_proxy | get_header              | GET    | $uuid=null          | -           |
| reverse_proxy | get_layer4              | GET    | $uuid=null          | -           |
| reverse_proxy | get_layer4_openvpn      | GET    | $uuid=null          | -           |
| reverse_proxy | get_reverse_proxy       | GET    | $uuid=null          | -           |
| reverse_proxy | get_subdomain           | GET    | $uuid=null          | -           |
| reverse_proxy | set                     | POST   | -                   | -           |
| reverse_proxy | set_access_list         | POST   | $uuid               | -           |
| reverse_proxy | set_basic_auth          | POST   | $uuid               | -           |
| reverse_proxy | set_handle              | POST   | $uuid               | -           |
| reverse_proxy | set_header              | POST   | $uuid               | -           |
| reverse_proxy | set_layer4              | POST   | $uuid               | -           |
| reverse_proxy | set_layer4_openvpn      | POST   | $uuid               | -           |
| reverse_proxy | set_reverse_proxy       | POST   | $uuid               | -           |
| reverse_proxy | set_subdomain           | POST   | $uuid               | -           |
| reverse_proxy | toggle_handle           | POST   | $uuid,$enabled=null | -           |
| reverse_proxy | toggle_layer4           | POST   | $uuid,$enabled=null | -           |
| reverse_proxy | toggle_layer4_openvpn   | POST   | $uuid,$enabled=null | -           |
| reverse_proxy | toggle_reverse_proxy    | POST   | $uuid,$enabled=null | -           |
| reverse_proxy | toggle_subdomain        | POST   | $uuid,$enabled=null | -           |
| service       | reconfigure             | POST   | -                   | -           |
| service       | restart                 | POST   | -                   | -           |
| service       | start                   | POST   | -                   | -           |
| service       | status                  | GET    | -                   | -           |
| service       | stop                    | POST   | -                   | -           |
| service       | validate                | GET    | -                   | -           |

### Model Structure

#### Containers

**reverse**

_No fields defined_

**subdomain**

_No fields defined_

**handle**

_No fields defined_

**accesslist**

_No fields defined_

**basicauth**

_No fields defined_

**header**

_No fields defined_

**layer4**

_No fields defined_

**layer4openvpn**

_No fields defined_

---

## Chrony

**Module:** Chrony  
**Type:** plugin  
**Endpoints:** 11

### Endpoints

| Controller | Command           | Method | Parameters | Description |
| ---------- | ----------------- | ------ | ---------- | ----------- |
| general    | get               | GET    | -          | -           |
| general    | set               | POST   | -          | -           |
| service    | chronyauthdata    | GET    | -          | -           |
| service    | chronysources     | GET    | -          | -           |
| service    | chronysourcestats | GET    | -          | -           |
| service    | chronytracking    | GET    | -          | -           |
| service    | reconfigure       | POST   | -          | -           |
| service    | restart           | POST   | -          | -           |
| service    | start             | POST   | -          | -           |
| service    | status            | GET    | -          | -           |
| service    | stop              | POST   | -          | -           |

### Model Structure

---

## Cicap

**Module:** Cicap  
**Type:** plugin  
**Endpoints:** 10

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| antivirus  | get         | GET    | -          | -           |
| antivirus  | set         | POST   | -          | -           |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | checkclamav | GET    | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |

### Model Structure

---

## Clamav

**Module:** Clamav  
**Type:** plugin  
**Endpoints:** 16

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | freshclam   | POST   | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |
| service    | version     | GET    | -          | -           |
| url        | add_url     | POST   | -          | -           |
| url        | del_url     | POST   | $uuid      | -           |
| url        | get         | GET    | -          | -           |
| url        | get_url     | GET    | $uuid=null | -           |
| url        | set         | POST   | -          | -           |
| url        | set_url     | POST   | $uuid      | -           |
| url        | toggle_url  | POST   | $uuid      | -           |

### Model Structure

---

## Collectd

**Module:** Collectd  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |

---

## Crowdsec

**Module:** Crowdsec  
**Type:** plugin  
**Endpoints:** 12

### Endpoints

| Controller | Command | Method | Parameters   | Description |
| ---------- | ------- | ------ | ------------ | ----------- |
| alerts     | get     | GET    | -            | -           |
| bouncers   | get     | GET    | -            | -           |
| decisions  | delete  | GET    | $decision_id | -           |
| decisions  | get     | GET    | -            | -           |
| general    | get     | GET    | -            | -           |
| general    | set     | POST   | -            | -           |
| hub        | get     | GET    | -            | -           |
| machines   | get     | GET    | -            | -           |
| service    | debug   | GET    | -            | -           |
| service    | reload  | POST   | -            | -           |
| service    | status  | GET    | -            | -           |
| version    | get     | GET    | -            | -           |

### Model Structure

---

## Dechw

**Module:** Dechw  
**Type:** plugin  
**Endpoints:** 1

### Endpoints

| Controller | Command      | Method | Parameters | Description |
| ---------- | ------------ | ------ | ---------- | ----------- |
| info       | power_status | GET    | -          | -           |

---

## Diagnostics

**Module:** Diagnostics  
**Type:** plugin  
**Endpoints:** 1

### Endpoints

| Controller    | Command | Method | Parameters | Description |
| ------------- | ------- | ------ | ---------- | ----------- |
| proofpoint_et | status  | GET    | -          | -           |

---

## Dmidecode

**Module:** Dmidecode  
**Type:** plugin  
**Endpoints:** 1

### Endpoints

| Controller | Command | Method | Parameters | Description |
| ---------- | ------- | ------ | ---------- | ----------- |
| service    | get     | GET    | -          | -           |

---

## Dnscryptproxy

**Module:** Dnscryptproxy  
**Type:** plugin  
**Endpoints:** 38

### Endpoints

| Controller | Command          | Method | Parameters | Description |
| ---------- | ---------------- | ------ | ---------- | ----------- |
| cloak      | add_cloak        | POST   | -          | -           |
| cloak      | del_cloak        | POST   | $uuid      | -           |
| cloak      | get              | GET    | -          | -           |
| cloak      | get_cloak        | GET    | $uuid=null | -           |
| cloak      | set              | POST   | -          | -           |
| cloak      | set_cloak        | POST   | $uuid      | -           |
| cloak      | toggle_cloak     | POST   | $uuid      | -           |
| dnsbl      | get              | GET    | -          | -           |
| dnsbl      | set              | POST   | -          | -           |
| forward    | add_forward      | POST   | -          | -           |
| forward    | del_forward      | POST   | $uuid      | -           |
| forward    | get              | GET    | -          | -           |
| forward    | get_forward      | GET    | $uuid=null | -           |
| forward    | set              | POST   | -          | -           |
| forward    | set_forward      | POST   | $uuid      | -           |
| forward    | toggle_forward   | POST   | $uuid      | -           |
| general    | get              | GET    | -          | -           |
| general    | set              | POST   | -          | -           |
| server     | add_server       | POST   | -          | -           |
| server     | del_server       | POST   | $uuid      | -           |
| server     | get              | GET    | -          | -           |
| server     | get_server       | GET    | $uuid=null | -           |
| server     | set              | POST   | -          | -           |
| server     | set_server       | POST   | $uuid      | -           |
| server     | toggle_server    | POST   | $uuid      | -           |
| service    | dnsbl            | GET    | -          | -           |
| service    | reconfigure      | POST   | -          | -           |
| service    | restart          | POST   | -          | -           |
| service    | start            | POST   | -          | -           |
| service    | status           | GET    | -          | -           |
| service    | stop             | POST   | -          | -           |
| whitelist  | add_whitelist    | POST   | -          | -           |
| whitelist  | del_whitelist    | POST   | $uuid      | -           |
| whitelist  | get              | GET    | -          | -           |
| whitelist  | get_whitelist    | GET    | $uuid=null | -           |
| whitelist  | set              | POST   | -          | -           |
| whitelist  | set_whitelist    | POST   | $uuid      | -           |
| whitelist  | toggle_whitelist | POST   | $uuid      | -           |

### Model Structure

#### Containers

**cloak**

_No fields defined_

---

## Dyndns

**Module:** Dyndns  
**Type:** plugin  
**Endpoints:** 14

### Endpoints

| Controller | Command     | Method | Parameters          | Description |
| ---------- | ----------- | ------ | ------------------- | ----------- |
| accounts   | add_item    | POST   | -                   | -           |
| accounts   | del_item    | POST   | $uuid               | -           |
| accounts   | get         | GET    | -                   | -           |
| accounts   | get_item    | GET    | $uuid=null          | -           |
| accounts   | set         | POST   | -                   | -           |
| accounts   | set_item    | POST   | $uuid               | -           |
| accounts   | toggle_item | POST   | $uuid,$enabled=null | -           |
| service    | reconfigure | POST   | -                   | -           |
| service    | restart     | POST   | -                   | -           |
| service    | start       | POST   | -                   | -           |
| service    | status      | GET    | -                   | -           |
| service    | stop        | POST   | -                   | -           |
| settings   | get         | GET    | -                   | -           |
| settings   | set         | POST   | -                   | -           |

### Model Structure

---

## Freeradius

**Module:** Freeradius  
**Type:** plugin  
**Endpoints:** 68

### Endpoints

| Controller | Command               | Method | Parameters | Description |
| ---------- | --------------------- | ------ | ---------- | ----------- |
| avpair     | add_avpair            | POST   | -          | -           |
| avpair     | del_avpair            | POST   | $uuid      | -           |
| avpair     | get                   | GET    | -          | -           |
| avpair     | get_avpair            | GET    | $uuid=null | -           |
| avpair     | set                   | POST   | -          | -           |
| avpair     | set_avpair            | POST   | $uuid      | -           |
| avpair     | toggle_avpair         | POST   | $uuid      | -           |
| client     | add_client            | POST   | -          | -           |
| client     | del_client            | POST   | $uuid      | -           |
| client     | get                   | GET    | -          | -           |
| client     | get_client            | GET    | $uuid=null | -           |
| client     | search_client         | GET    | -          | -           |
| client     | set                   | POST   | -          | -           |
| client     | set_client            | POST   | $uuid      | -           |
| client     | toggle_client         | GET    | $uuid      | -           |
| dhcp       | add_dhcp              | POST   | -          | -           |
| dhcp       | del_dhcp              | POST   | $uuid      | -           |
| dhcp       | get                   | GET    | -          | -           |
| dhcp       | get_dhcp              | GET    | $uuid=null | -           |
| dhcp       | set                   | POST   | -          | -           |
| dhcp       | set_dhcp              | POST   | $uuid      | -           |
| dhcp       | toggle_dhcp           | POST   | $uuid      | -           |
| eap        | get                   | GET    | -          | -           |
| eap        | set                   | POST   | -          | -           |
| general    | get                   | GET    | -          | -           |
| general    | set                   | POST   | -          | -           |
| ldap       | get                   | GET    | -          | -           |
| ldap       | set                   | POST   | -          | -           |
| lease      | add_lease             | POST   | -          | -           |
| lease      | del_lease             | POST   | $uuid      | -           |
| lease      | get                   | GET    | -          | -           |
| lease      | get_lease             | GET    | $uuid=null | -           |
| lease      | set                   | POST   | -          | -           |
| lease      | set_lease             | POST   | $uuid      | -           |
| lease      | toggle_lease          | POST   | $uuid      | -           |
| proxy      | add_homeserver        | POST   | -          | -           |
| proxy      | add_homeserverpool    | POST   | -          | -           |
| proxy      | add_realm             | POST   | -          | -           |
| proxy      | del_homeserver        | POST   | $uuid      | -           |
| proxy      | del_homeserverpool    | POST   | $uuid      | -           |
| proxy      | del_realm             | POST   | $uuid      | -           |
| proxy      | get                   | GET    | -          | -           |
| proxy      | get_homeserver        | GET    | $uuid=null | -           |
| proxy      | get_homeserverpool    | GET    | $uuid=null | -           |
| proxy      | get_realm             | GET    | $uuid=null | -           |
| proxy      | search_homeserver     | GET    | -          | -           |
| proxy      | search_homeserverpool | GET    | -          | -           |
| proxy      | search_realm          | GET    | -          | -           |
| proxy      | set                   | POST   | -          | -           |
| proxy      | set_homeserver        | POST   | $uuid      | -           |
| proxy      | set_homeserverpool    | POST   | $uuid      | -           |
| proxy      | set_realm             | POST   | $uuid      | -           |
| proxy      | toggle_homeserver     | GET    | $uuid      | -           |
| proxy      | toggle_homeserverpool | GET    | $uuid      | -           |
| proxy      | toggle_realm          | GET    | $uuid      | -           |
| service    | reconfigure           | POST   | -          | -           |
| service    | restart               | POST   | -          | -           |
| service    | start                 | POST   | -          | -           |
| service    | status                | GET    | -          | -           |
| service    | stop                  | POST   | -          | -           |
| user       | add_user              | POST   | -          | -           |
| user       | del_user              | POST   | $uuid      | -           |
| user       | get                   | GET    | -          | -           |
| user       | get_user              | GET    | $uuid=null | -           |
| user       | search_user           | GET    | -          | -           |
| user       | set                   | POST   | -          | -           |
| user       | set_user              | POST   | $uuid      | -           |
| user       | toggle_user           | GET    | $uuid      | -           |

### Model Structure

#### Containers

**avpair**

_No fields defined_

---

## Ftpproxy

**Module:** Ftpproxy  
**Type:** plugin  
**Endpoints:** 12

### Endpoints

| Controller | Command      | Method | Parameters | Description |
| ---------- | ------------ | ------ | ---------- | ----------- |
| service    | config       | GET    | -          | -           |
| service    | reload       | GET    | -          | -           |
| service    | restart      | GET    | $uuid      | -           |
| service    | start        | GET    | $uuid      | -           |
| service    | status       | GET    | $uuid      | -           |
| service    | stop         | GET    | $uuid      | -           |
| settings   | add_proxy    | POST   | -          | -           |
| settings   | del_proxy    | POST   | $uuid      | -           |
| settings   | get_proxy    | GET    | $uuid=null | -           |
| settings   | search_proxy | GET    | -          | -           |
| settings   | set_proxy    | POST   | $uuid      | -           |
| settings   | toggle_proxy | POST   | $uuid      | -           |

---

## Gridexample

**Module:** Gridexample  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters          | Description |
| ---------- | ----------- | ------ | ------------------- | ----------- |
| settings   | add_item    | POST   | -                   | -           |
| settings   | del_item    | POST   | $uuid               | -           |
| settings   | get         | GET    | -                   | -           |
| settings   | get_item    | GET    | $uuid=null          | -           |
| settings   | set         | POST   | -                   | -           |
| settings   | set_item    | POST   | $uuid               | -           |
| settings   | toggle_item | POST   | $uuid,$enabled=null | -           |

### Model Structure

#### Containers

**address**

_No fields defined_

---

## Haproxy

**Module:** Haproxy  
**Type:** plugin  
**Endpoints:** 96

### Endpoints

| Controller  | Command                 | Method | Parameters          | Description |
| ----------- | ----------------------- | ------ | ------------------- | ----------- |
| export      | config                  | GET    | -                   | -           |
| export      | diff                    | GET    | -                   | -           |
| export      | download                | GET    | $type               | -           |
| maintenance | cert_actions            | GET    | -                   | -           |
| maintenance | cert_diff               | GET    | -                   | -           |
| maintenance | cert_sync               | GET    | -                   | -           |
| maintenance | cert_sync_bulk          | GET    | -                   | -           |
| maintenance | fetch_cron_integration  | POST   | -                   | -           |
| maintenance | get                     | GET    | -                   | -           |
| maintenance | search_certificate_diff | GET    | -                   | -           |
| maintenance | search_server           | GET    | -                   | -           |
| maintenance | server_state            | GET    | -                   | -           |
| maintenance | server_state_bulk       | GET    | -                   | -           |
| maintenance | server_weight           | GET    | -                   | -           |
| maintenance | server_weight_bulk      | GET    | -                   | -           |
| maintenance | set                     | POST   | -                   | -           |
| service     | configtest              | GET    | -                   | -           |
| service     | reconfigure             | POST   | -                   | -           |
| service     | restart                 | POST   | -                   | -           |
| service     | start                   | POST   | -                   | -           |
| service     | status                  | GET    | -                   | -           |
| service     | stop                    | POST   | -                   | -           |
| settings    | add_acl                 | POST   | -                   | -           |
| settings    | add_action              | POST   | -                   | -           |
| settings    | add_backend             | POST   | -                   | -           |
| settings    | add_cpu                 | POST   | -                   | -           |
| settings    | add_errorfile           | POST   | -                   | -           |
| settings    | add_fcgi                | POST   | -                   | -           |
| settings    | add_frontend            | POST   | -                   | -           |
| settings    | add_group               | POST   | -                   | -           |
| settings    | add_healthcheck         | POST   | -                   | -           |
| settings    | add_lua                 | POST   | -                   | -           |
| settings    | add_mapfile             | POST   | -                   | -           |
| settings    | add_server              | POST   | -                   | -           |
| settings    | add_user                | POST   | -                   | -           |
| settings    | addmailer               | POST   | -                   | -           |
| settings    | addresolver             | POST   | -                   | -           |
| settings    | del_acl                 | POST   | $uuid               | -           |
| settings    | del_action              | POST   | $uuid               | -           |
| settings    | del_backend             | POST   | $uuid               | -           |
| settings    | del_cpu                 | POST   | $uuid               | -           |
| settings    | del_errorfile           | POST   | $uuid               | -           |
| settings    | del_fcgi                | POST   | $uuid               | -           |
| settings    | del_frontend            | POST   | $uuid               | -           |
| settings    | del_group               | POST   | $uuid               | -           |
| settings    | del_healthcheck         | POST   | $uuid               | -           |
| settings    | del_lua                 | POST   | $uuid               | -           |
| settings    | del_mapfile             | POST   | $uuid               | -           |
| settings    | del_server              | POST   | $uuid               | -           |
| settings    | del_user                | POST   | $uuid               | -           |
| settings    | delmailer               | POST   | $uuid               | -           |
| settings    | delresolver             | POST   | $uuid               | -           |
| settings    | get                     | GET    | -                   | -           |
| settings    | get_acl                 | GET    | $uuid=null          | -           |
| settings    | get_action              | GET    | $uuid=null          | -           |
| settings    | get_backend             | GET    | $uuid=null          | -           |
| settings    | get_cpu                 | GET    | $uuid=null          | -           |
| settings    | get_errorfile           | GET    | $uuid=null          | -           |
| settings    | get_fcgi                | GET    | $uuid=null          | -           |
| settings    | get_frontend            | GET    | $uuid=null          | -           |
| settings    | get_group               | GET    | $uuid=null          | -           |
| settings    | get_healthcheck         | GET    | $uuid=null          | -           |
| settings    | get_lua                 | GET    | $uuid=null          | -           |
| settings    | get_mapfile             | GET    | $uuid=null          | -           |
| settings    | get_server              | GET    | $uuid=null          | -           |
| settings    | get_user                | GET    | $uuid=null          | -           |
| settings    | getmailer               | GET    | $uuid=null          | -           |
| settings    | getresolver             | GET    | $uuid=null          | -           |
| settings    | set                     | POST   | -                   | -           |
| settings    | set_acl                 | POST   | $uuid               | -           |
| settings    | set_action              | POST   | $uuid               | -           |
| settings    | set_backend             | POST   | $uuid               | -           |
| settings    | set_cpu                 | POST   | $uuid               | -           |
| settings    | set_errorfile           | POST   | $uuid               | -           |
| settings    | set_fcgi                | POST   | $uuid               | -           |
| settings    | set_frontend            | POST   | $uuid               | -           |
| settings    | set_group               | POST   | $uuid               | -           |
| settings    | set_healthcheck         | POST   | $uuid               | -           |
| settings    | set_lua                 | POST   | $uuid               | -           |
| settings    | set_mapfile             | POST   | $uuid               | -           |
| settings    | set_server              | POST   | $uuid               | -           |
| settings    | set_user                | POST   | $uuid               | -           |
| settings    | setmailer               | POST   | $uuid               | -           |
| settings    | setresolver             | POST   | $uuid               | -           |
| settings    | toggle_backend          | POST   | $uuid,$enabled=null | -           |
| settings    | toggle_cpu              | POST   | $uuid,$enabled=null | -           |
| settings    | toggle_frontend         | POST   | $uuid               | -           |
| settings    | toggle_group            | POST   | $uuid,$enabled=null | -           |
| settings    | toggle_lua              | POST   | $uuid,$enabled=null | -           |
| settings    | toggle_server           | POST   | $uuid,$enabled=null | -           |
| settings    | toggle_user             | POST   | $uuid,$enabled=null | -           |
| settings    | togglemailer            | POST   | $uuid,$enabled=null | -           |
| settings    | toggleresolver          | POST   | $uuid,$enabled=null | -           |
| statistics  | counters                | GET    | -                   | -           |
| statistics  | info                    | GET    | -                   | -           |
| statistics  | tables                  | GET    | -                   | -           |

### Model Structure

#### Containers

**frontend**

_No fields defined_

**backend**

_No fields defined_

**server**

_No fields defined_

**healthcheck**

_No fields defined_

**acl**

_No fields defined_

**action**

_No fields defined_

**lua**

_No fields defined_

**fcgi**

_No fields defined_

**errorfile**

_No fields defined_

**mapfile**

_No fields defined_

**group**

_No fields defined_

**user**

_No fields defined_

**cpu**

_No fields defined_

**resolver**

_No fields defined_

**mailer**

_No fields defined_

---

## Helloworld

**Module:** Helloworld  
**Type:** plugin  
**Endpoints:** 4

### Endpoints

| Controller | Command | Method | Parameters | Description |
| ---------- | ------- | ------ | ---------- | ----------- |
| service    | reload  | POST   | -          | -           |
| service    | test    | POST   | -          | -           |
| settings   | get     | GET    | -          | -           |
| settings   | set     | POST   | -          | -           |

### Model Structure

---

## Hwprobe

**Module:** Hwprobe  
**Type:** plugin  
**Endpoints:** 8

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | report      | GET    | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |

### Model Structure

---

## Iperf

**Module:** Iperf  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command | Method | Parameters | Description |
| ---------- | ------- | ------ | ---------- | ----------- |
| instance   | get     | GET    | -          | -           |
| instance   | query   | GET    | -          | -           |
| instance   | set     | POST   | -          | -           |
| service    | restart | GET    | -          | -           |
| service    | start   | GET    | -          | -           |
| service    | status  | GET    | -          | -           |
| service    | stop    | GET    | -          | -           |

### Model Structure

---

## Lldpd

**Module:** Lldpd  
**Type:** plugin  
**Endpoints:** 8

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | neighbor    | GET    | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |

### Model Structure

---

## Maltrail

**Module:** Maltrail  
**Type:** plugin  
**Endpoints:** 16

### Endpoints

| Controller    | Command     | Method | Parameters | Description |
| ------------- | ----------- | ------ | ---------- | ----------- |
| general       | get         | GET    | -          | -           |
| general       | set         | POST   | -          | -           |
| sensor        | get         | GET    | -          | -           |
| sensor        | set         | POST   | -          | -           |
| server        | get         | GET    | -          | -           |
| server        | set         | POST   | -          | -           |
| serverservice | reconfigure | POST   | -          | -           |
| serverservice | restart     | POST   | -          | -           |
| serverservice | start       | POST   | -          | -           |
| serverservice | status      | GET    | -          | -           |
| serverservice | stop        | POST   | -          | -           |
| service       | reconfigure | POST   | -          | -           |
| service       | restart     | POST   | -          | -           |
| service       | start       | POST   | -          | -           |
| service       | status      | GET    | -          | -           |
| service       | stop        | POST   | -          | -           |

### Model Structure

---

## Mdnsrepeater

**Module:** Mdnsrepeater  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |
| settings   | get         | GET    | -          | -           |
| settings   | set         | POST   | -          | -           |

### Model Structure

---

## Muninnode

**Module:** Muninnode  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |

### Model Structure

---

## Ndproxy

**Module:** Ndproxy  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |

### Model Structure

---

## Netdata

**Module:** Netdata  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |

### Model Structure

---

## Netsnmp

**Module:** Netsnmp  
**Type:** plugin  
**Endpoints:** 14

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |
| user       | add_user    | POST   | -          | -           |
| user       | del_user    | POST   | $uuid      | -           |
| user       | get         | GET    | -          | -           |
| user       | get_user    | GET    | $uuid=null | -           |
| user       | set         | POST   | -          | -           |
| user       | set_user    | POST   | $uuid      | -           |
| user       | toggle_user | POST   | $uuid      | -           |

### Model Structure

---

## Nginx

**Module:** Nginx  
**Type:** plugin  
**Endpoints:** 99

### Endpoints

| Controller | Command                     | Method | Parameters                                           | Description |
| ---------- | --------------------------- | ------ | ---------------------------------------------------- | ----------- |
| bans       | delban                      | POST   | $uuid                                                | -           |
| bans       | get                         | GET    | -                                                    | -           |
| bans       | set                         | POST   | -                                                    | -           |
| logs       | accesses                    | GET    | $uuid=null,$fileno=null,$page=0,$perPage=0,$query=’’ | -           |
| logs       | errors                      | GET    | $uuid=null,$fileno=null,$page=0,$perPage=0,$query=’’ | -           |
| logs       | streamaccesses              | GET    | $uuid=null,$fileno=null,$page=0,$perPage=0,$query=’’ | -           |
| logs       | streamerrors                | GET    | $uuid=null,$fileno=null,$page=0,$perPage=0,$query=’’ | -           |
| logs       | tls_handshakes              | GET    | -                                                    | -           |
| service    | reconfigure                 | POST   | -                                                    | -           |
| service    | restart                     | POST   | -                                                    | -           |
| service    | start                       | POST   | -                                                    | -           |
| service    | status                      | GET    | -                                                    | -           |
| service    | stop                        | GET    | -                                                    | -           |
| service    | vts                         | GET    | -                                                    | -           |
| settings   | addcache_path               | POST   | -                                                    | -           |
| settings   | addcredential               | POST   | -                                                    | -           |
| settings   | addcustompolicy             | POST   | -                                                    | -           |
| settings   | adderrorpage                | POST   | -                                                    | -           |
| settings   | addhttprewrite              | POST   | -                                                    | -           |
| settings   | addhttpserver               | POST   | -                                                    | -           |
| settings   | addipacl                    | POST   | -                                                    | -           |
| settings   | addlimit_request_connection | POST   | -                                                    | -           |
| settings   | addlimit_zone               | POST   | -                                                    | -           |
| settings   | addlocation                 | POST   | -                                                    | -           |
| settings   | addnaxsirule                | POST   | -                                                    | -           |
| settings   | addresolver                 | POST   | -                                                    | -           |
| settings   | addsecurity_header          | POST   | -                                                    | -           |
| settings   | addsnifwd                   | POST   | -                                                    | -           |
| settings   | addstreamserver             | POST   | -                                                    | -           |
| settings   | addsyslog_target            | POST   | -                                                    | -           |
| settings   | addtls_fingerprint          | POST   | -                                                    | -           |
| settings   | addupstream                 | POST   | -                                                    | -           |
| settings   | addupstreamserver           | POST   | -                                                    | -           |
| settings   | adduserlist                 | POST   | -                                                    | -           |
| settings   | delcache_path               | POST   | $uuid                                                | -           |
| settings   | delcredential               | POST   | $uuid                                                | -           |
| settings   | delcustompolicy             | POST   | $uuid                                                | -           |
| settings   | delerrorpage                | POST   | $uuid                                                | -           |
| settings   | delhttprewrite              | POST   | $uuid                                                | -           |
| settings   | delhttpserver               | POST   | $uuid                                                | -           |
| settings   | delipacl                    | POST   | $uuid                                                | -           |
| settings   | dellimit_request_connection | POST   | $uuid                                                | -           |
| settings   | dellimit_zone               | POST   | $uuid                                                | -           |
| settings   | dellocation                 | POST   | $uuid                                                | -           |
| settings   | delnaxsirule                | POST   | $uuid                                                | -           |
| settings   | delresolver                 | POST   | $uuid                                                | -           |
| settings   | delsecurity_header          | POST   | $uuid                                                | -           |
| settings   | delsnifwd                   | POST   | $uuid                                                | -           |
| settings   | delstreamserver             | POST   | $uuid                                                | -           |
| settings   | delsyslog_target            | POST   | $uuid                                                | -           |
| settings   | deltls_fingerprint          | POST   | $uuid                                                | -           |
| settings   | delupstream                 | POST   | $uuid                                                | -           |
| settings   | delupstreamserver           | POST   | $uuid                                                | -           |
| settings   | deluserlist                 | POST   | $uuid                                                | -           |
| settings   | downloadrules               | POST   | -                                                    | -           |
| settings   | get                         | GET    | -                                                    | -           |
| settings   | getcache_path               | GET    | $uuid=null                                           | -           |
| settings   | getcredential               | GET    | $uuid=null                                           | -           |
| settings   | getcustompolicy             | GET    | $uuid=null                                           | -           |
| settings   | geterrorpage                | GET    | $uuid=null                                           | -           |
| settings   | gethttprewrite              | GET    | $uuid=null                                           | -           |
| settings   | gethttpserver               | GET    | $uuid=null                                           | -           |
| settings   | getipacl                    | GET    | $uuid=null                                           | -           |
| settings   | getlimit_request_connection | GET    | $uuid=null                                           | -           |
| settings   | getlimit_zone               | GET    | $uuid=null                                           | -           |
| settings   | getlocation                 | GET    | $uuid=null                                           | -           |
| settings   | getnaxsirule                | GET    | $uuid=null                                           | -           |
| settings   | getresolver                 | GET    | $uuid=null                                           | -           |
| settings   | getsecurity_header          | GET    | $uuid=null                                           | -           |
| settings   | getsnifwd                   | GET    | $uuid=null                                           | -           |
| settings   | getstreamserver             | GET    | $uuid=null                                           | -           |
| settings   | getsyslog_target            | GET    | $uuid=null                                           | -           |
| settings   | gettls_fingerprint          | GET    | $uuid=null                                           | -           |
| settings   | getupstream                 | GET    | $uuid=null                                           | -           |
| settings   | getupstreamserver           | GET    | $uuid=null                                           | -           |
| settings   | getuserlist                 | GET    | $uuid=null                                           | -           |
| settings   | set                         | POST   | -                                                    | -           |
| settings   | setcache_path               | POST   | $uuid                                                | -           |
| settings   | setcredential               | POST   | $uuid                                                | -           |
| settings   | setcustompolicy             | POST   | $uuid                                                | -           |
| settings   | seterrorpage                | POST   | $uuid                                                | -           |
| settings   | sethttprewrite              | POST   | $uuid                                                | -           |
| settings   | sethttpserver               | POST   | $uuid                                                | -           |
| settings   | setipacl                    | POST   | $uuid                                                | -           |
| settings   | setlimit_request_connection | POST   | $uuid                                                | -           |
| settings   | setlimit_zone               | POST   | $uuid                                                | -           |
| settings   | setlocation                 | POST   | $uuid                                                | -           |
| settings   | setnaxsirule                | POST   | $uuid                                                | -           |
| settings   | setresolver                 | POST   | $uuid                                                | -           |
| settings   | setsecurity_header          | POST   | $uuid                                                | -           |
| settings   | setsnifwd                   | POST   | $uuid                                                | -           |
| settings   | setstreamserver             | POST   | $uuid                                                | -           |
| settings   | setsyslog_target            | POST   | $uuid                                                | -           |
| settings   | settls_fingerprint          | POST   | $uuid                                                | -           |
| settings   | setupstream                 | POST   | $uuid                                                | -           |
| settings   | setupstreamserver           | POST   | $uuid                                                | -           |
| settings   | setuserlist                 | POST   | $uuid                                                | -           |
| settings   | showconfig                  | GET    | -                                                    | -           |
| settings   | testconfig                  | GET    | -                                                    | -           |

### Model Structure

#### Containers

**userlist**

_No fields defined_

**credential**

_No fields defined_

**upstream**

_No fields defined_

**upstream_server**

_No fields defined_

**location**

_No fields defined_

**custom_policy**

_No fields defined_

**naxsi_rule**

_No fields defined_

**http_server**

_No fields defined_

**stream_server**

_No fields defined_

**sni_hostname_upstream_map**

_No fields defined_

**sni_hostname_upstream_map_item**

_No fields defined_

**ip_acl**

_No fields defined_

**ip_acl_item**

_No fields defined_

**resolver**

_No fields defined_

**http_rewrite**

_No fields defined_

**security_header**

_No fields defined_

**limit_zone**

_No fields defined_

**errorpage**

_No fields defined_

**tls_fingerprint**

_No fields defined_

**limit_request_connection**

_No fields defined_

**ban**

_No fields defined_

**cache_path**

_No fields defined_

**syslog_target**

_No fields defined_

---

## Nodeexporter

**Module:** Nodeexporter  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |

### Model Structure

---

## Nrpe

**Module:** Nrpe  
**Type:** plugin  
**Endpoints:** 14

### Endpoints

| Controller | Command        | Method | Parameters | Description |
| ---------- | -------------- | ------ | ---------- | ----------- |
| command    | add_command    | POST   | -          | -           |
| command    | del_command    | POST   | $uuid      | -           |
| command    | get            | GET    | -          | -           |
| command    | get_command    | GET    | $uuid=null | -           |
| command    | set            | POST   | -          | -           |
| command    | set_command    | POST   | $uuid      | -           |
| command    | toggle_command | POST   | $uuid      | -           |
| general    | get            | GET    | -          | -           |
| general    | set            | POST   | -          | -           |
| service    | reconfigure    | POST   | -          | -           |
| service    | restart        | POST   | -          | -           |
| service    | start          | POST   | -          | -           |
| service    | status         | GET    | -          | -           |
| service    | stop           | POST   | -          | -           |

### Model Structure

#### Containers

**command**

_No fields defined_

---

## Ntopng

**Module:** Ntopng  
**Type:** plugin  
**Endpoints:** 8

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | checkredis  | GET    | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |

### Model Structure

---

## Nut

**Module:** Nut  
**Type:** plugin  
**Endpoints:** 8

### Endpoints

| Controller  | Command     | Method | Parameters | Description |
| ----------- | ----------- | ------ | ---------- | ----------- |
| diagnostics | upsstatus   | GET    | -          | -           |
| service     | reconfigure | POST   | -          | -           |
| service     | restart     | POST   | -          | -           |
| service     | start       | POST   | -          | -           |
| service     | status      | GET    | -          | -           |
| service     | stop        | POST   | -          | -           |
| settings    | get         | GET    | -          | -           |
| settings    | set         | POST   | -          | -           |

### Model Structure

---

## Openconnect

**Module:** Openconnect  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |

### Model Structure

---

## Postfix

**Module:** Postfix  
**Type:** plugin  
**Endpoints:** 66

### Endpoints

| Controller      | Command                | Method | Parameters | Description |
| --------------- | ---------------------- | ------ | ---------- | ----------- |
| address         | add_address            | POST   | -          | -           |
| address         | del_address            | POST   | $uuid      | -           |
| address         | get                    | GET    | -          | -           |
| address         | get_address            | GET    | $uuid=null | -           |
| address         | set                    | POST   | -          | -           |
| address         | set_address            | POST   | $uuid      | -           |
| address         | toggle_address         | POST   | $uuid      | -           |
| antispam        | get                    | GET    | -          | -           |
| antispam        | set                    | POST   | -          | -           |
| domain          | add_domain             | POST   | -          | -           |
| domain          | del_domain             | POST   | $uuid      | -           |
| domain          | get                    | GET    | -          | -           |
| domain          | get_domain             | GET    | $uuid=null | -           |
| domain          | set                    | POST   | -          | -           |
| domain          | set_domain             | POST   | $uuid      | -           |
| domain          | toggle_domain          | POST   | $uuid      | -           |
| general         | get                    | GET    | -          | -           |
| general         | set                    | POST   | -          | -           |
| headerchecks    | add_headercheck        | POST   | -          | -           |
| headerchecks    | del_headercheck        | POST   | $uuid      | -           |
| headerchecks    | get                    | GET    | -          | -           |
| headerchecks    | get_headercheck        | GET    | $uuid=null | -           |
| headerchecks    | set                    | POST   | -          | -           |
| headerchecks    | set_headercheck        | POST   | $uuid      | -           |
| headerchecks    | toggle_headercheck     | POST   | $uuid      | -           |
| recipient       | add_recipient          | POST   | -          | -           |
| recipient       | del_recipient          | POST   | $uuid      | -           |
| recipient       | get                    | GET    | -          | -           |
| recipient       | get_recipient          | GET    | $uuid=null | -           |
| recipient       | set                    | POST   | -          | -           |
| recipient       | set_recipient          | POST   | $uuid      | -           |
| recipient       | toggle_recipient       | POST   | $uuid      | -           |
| recipientbcc    | add_recipientbcc       | POST   | -          | -           |
| recipientbcc    | del_recipientbcc       | POST   | $uuid      | -           |
| recipientbcc    | get                    | GET    | -          | -           |
| recipientbcc    | get_recipientbcc       | GET    | $uuid=null | -           |
| recipientbcc    | set                    | POST   | -          | -           |
| recipientbcc    | set_recipientbcc       | POST   | $uuid      | -           |
| recipientbcc    | toggle_recipientbcc    | POST   | $uuid      | -           |
| sender          | add_sender             | POST   | -          | -           |
| sender          | del_sender             | POST   | $uuid      | -           |
| sender          | get                    | GET    | -          | -           |
| sender          | get_sender             | GET    | $uuid=null | -           |
| sender          | set                    | POST   | -          | -           |
| sender          | set_sender             | POST   | $uuid      | -           |
| sender          | toggle_sender          | POST   | $uuid      | -           |
| senderbcc       | add_senderbcc          | POST   | -          | -           |
| senderbcc       | del_senderbcc          | POST   | $uuid      | -           |
| senderbcc       | get                    | GET    | -          | -           |
| senderbcc       | get_senderbcc          | GET    | $uuid=null | -           |
| senderbcc       | set                    | POST   | -          | -           |
| senderbcc       | set_senderbcc          | POST   | $uuid      | -           |
| senderbcc       | toggle_senderbcc       | POST   | $uuid      | -           |
| sendercanonical | add_sendercanonical    | POST   | -          | -           |
| sendercanonical | del_sendercanonical    | POST   | $uuid      | -           |
| sendercanonical | get                    | GET    | -          | -           |
| sendercanonical | get_sendercanonical    | GET    | $uuid=null | -           |
| sendercanonical | set                    | POST   | -          | -           |
| sendercanonical | set_sendercanonical    | POST   | $uuid      | -           |
| sendercanonical | toggle_sendercanonical | POST   | $uuid      | -           |
| service         | checkrspamd            | GET    | -          | -           |
| service         | reconfigure            | POST   | -          | -           |
| service         | restart                | POST   | -          | -           |
| service         | start                  | POST   | -          | -           |
| service         | status                 | GET    | -          | -           |
| service         | stop                   | POST   | -          | -           |

### Model Structure

#### Containers

**address**

_No fields defined_

---

## Proxy

**Module:** Proxy  
**Type:** plugin  
**Endpoints:** 48

### Endpoints

| Controller | Command                  | Method | Parameters          | Description |
| ---------- | ------------------------ | ------ | ------------------- | ----------- |
| service    | downloadacls             | POST   | -                   | -           |
| service    | fetchacls                | POST   | -                   | -           |
| service    | reconfigure              | POST   | -                   | -           |
| service    | refresh_template         | POST   | -                   | -           |
| service    | reset                    | POST   | -                   | -           |
| service    | restart                  | GET    | -                   | -           |
| service    | start                    | GET    | -                   | -           |
| service    | status                   | GET    | -                   | -           |
| service    | stop                     | POST   | -                   | -           |
| settings   | add_p_a_c_match          | POST   | -                   | -           |
| settings   | add_p_a_c_proxy          | POST   | -                   | -           |
| settings   | add_p_a_c_rule           | POST   | -                   | -           |
| settings   | add_remote_blacklist     | POST   | -                   | -           |
| settings   | del_p_a_c_match          | POST   | $uuid               | -           |
| settings   | del_p_a_c_proxy          | POST   | $uuid               | -           |
| settings   | del_p_a_c_rule           | POST   | $uuid               | -           |
| settings   | del_remote_blacklist     | POST   | $uuid               | -           |
| settings   | fetch_r_b_cron           | POST   | -                   | -           |
| settings   | get                      | GET    | -                   | -           |
| settings   | get_p_a_c_match          | GET    | $uuid=null          | -           |
| settings   | get_p_a_c_proxy          | GET    | $uuid=null          | -           |
| settings   | get_p_a_c_rule           | GET    | $uuid=null          | -           |
| settings   | get_remote_blacklist     | GET    | $uuid=null          | -           |
| settings   | search_remote_blacklists | GET    | -                   | -           |
| settings   | set                      | POST   | -                   | -           |
| settings   | set_p_a_c_match          | POST   | $uuid               | -           |
| settings   | set_p_a_c_proxy          | POST   | $uuid               | -           |
| settings   | set_p_a_c_rule           | POST   | $uuid               | -           |
| settings   | set_remote_blacklist     | POST   | $uuid               | -           |
| settings   | toggle_p_a_c_rule        | POST   | $uuid               | -           |
| settings   | toggle_remote_blacklist  | POST   | $uuid               | -           |
| template   | get                      | GET    | -                   | -           |
| template   | reset                    | POST   | -                   | -           |
| template   | set                      | POST   | -                   | -           |
| acl        | add_custom_policy        | POST   | -                   | -           |
| acl        | add_policy               | POST   | -                   | -           |
| acl        | apply                    | POST   | -                   | -           |
| acl        | del_custom_policy        | POST   | $uuid               | -           |
| acl        | del_policy               | POST   | $uuid               | -           |
| acl        | get                      | GET    | -                   | -           |
| acl        | get_custom_policy        | GET    | $uuid=null          | -           |
| acl        | get_policy               | GET    | $uuid=null          | -           |
| acl        | set                      | POST   | -                   | -           |
| acl        | set_custom_policy        | POST   | $uuid               | -           |
| acl        | set_policy               | POST   | $uuid               | -           |
| acl        | test                     | POST   | -                   | -           |
| acl        | toggle_custom_policy     | POST   | $uuid,$enabled=null | -           |
| acl        | toggle_policy            | POST   | $uuid,$enabled=null | -           |

### Model Structure

#### Containers

**blacklist**

_No fields defined_

**proxy**

_No fields defined_

**match**

_No fields defined_

**rule**

_No fields defined_

---

## Proxysso

**Module:** Proxysso  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command        | Method | Parameters | Description |
| ---------- | -------------- | ------ | ---------- | ----------- |
| service    | createkeytab   | POST   | -          | -           |
| service    | deletekeytab   | GET    | -          | -           |
| service    | get_check_list | GET    | -          | -           |
| service    | showkeytab     | GET    | -          | -           |
| service    | testkerblogin  | POST   | -          | -           |
| settings   | get            | GET    | -          | -           |
| settings   | set            | POST   | -          | -           |

---

## Puppetagent

**Module:** Puppetagent  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |
| settings   | get         | GET    | -          | -           |
| settings   | set         | POST   | -          | -           |

### Model Structure

---

## Qemuguestagent

**Module:** Qemuguestagent  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |
| settings   | get         | GET    | -          | -           |
| settings   | set         | POST   | -          | -           |

### Model Structure

---

## Quagga

**Module:** Quagga  
**Type:** plugin  
**Endpoints:** 133

### Endpoints

| Controller    | Command               | Method | Parameters   | Description |
| ------------- | --------------------- | ------ | ------------ | ----------- |
| bfd           | add_neighbor          | POST   | -            | -           |
| bfd           | del_neighbor          | POST   | $uuid        | -           |
| bfd           | get                   | GET    | -            | -           |
| bfd           | get_neighbor          | GET    | $uuid=null   | -           |
| bfd           | set                   | POST   | -            | -           |
| bfd           | set_neighbor          | POST   | $uuid        | -           |
| bfd           | toggle_neighbor       | POST   | $uuid        | -           |
| bgp           | add_aspath            | POST   | -            | -           |
| bgp           | add_communitylist     | POST   | -            | -           |
| bgp           | add_neighbor          | POST   | -            | -           |
| bgp           | add_peergroup         | POST   | -            | -           |
| bgp           | add_prefixlist        | POST   | -            | -           |
| bgp           | add_redistribution    | POST   | -            | -           |
| bgp           | add_routemap          | POST   | -            | -           |
| bgp           | del_aspath            | POST   | $uuid        | -           |
| bgp           | del_communitylist     | POST   | $uuid        | -           |
| bgp           | del_neighbor          | POST   | $uuid        | -           |
| bgp           | del_peergroup         | POST   | $uuid        | -           |
| bgp           | del_prefixlist        | POST   | $uuid        | -           |
| bgp           | del_redistribution    | POST   | $uuid        | -           |
| bgp           | del_routemap          | POST   | $uuid        | -           |
| bgp           | get                   | GET    | -            | -           |
| bgp           | get_aspath            | GET    | $uuid=null   | -           |
| bgp           | get_communitylist     | GET    | $uuid=null   | -           |
| bgp           | get_neighbor          | GET    | $uuid=null   | -           |
| bgp           | get_peergroup         | GET    | $uuid=null   | -           |
| bgp           | get_prefixlist        | GET    | $uuid=null   | -           |
| bgp           | get_redistribution    | GET    | $uuid=null   | -           |
| bgp           | get_routemap          | GET    | $uuid=null   | -           |
| bgp           | set                   | POST   | -            | -           |
| bgp           | set_aspath            | POST   | $uuid        | -           |
| bgp           | set_communitylist     | POST   | $uuid        | -           |
| bgp           | set_neighbor          | POST   | $uuid        | -           |
| bgp           | set_peergroup         | POST   | $uuid        | -           |
| bgp           | set_prefixlist        | POST   | $uuid        | -           |
| bgp           | set_redistribution    | POST   | $uuid        | -           |
| bgp           | set_routemap          | POST   | $uuid        | -           |
| bgp           | toggle_aspath         | POST   | $uuid        | -           |
| bgp           | toggle_communitylist  | POST   | $uuid        | -           |
| bgp           | toggle_neighbor       | POST   | $uuid        | -           |
| bgp           | toggle_peergroup      | POST   | $uuid        | -           |
| bgp           | toggle_prefixlist     | POST   | $uuid        | -           |
| bgp           | toggle_redistribution | POST   | $uuid        | -           |
| bgp           | toggle_routemap       | POST   | $uuid        | -           |
| diagnostics   | bfdcounters           | GET    | -            | -           |
| diagnostics   | bfdneighbors          | GET    | -            | -           |
| diagnostics   | bfdsummary            | GET    | -            | -           |
| diagnostics   | bgpneighbors          | GET    | -            | -           |
| diagnostics   | bgpsummary            | GET    | -            | -           |
| diagnostics   | generalrunningconfig  | GET    | -            | -           |
| diagnostics   | ospfdatabase          | GET    | -            | -           |
| diagnostics   | ospfinterface         | GET    | -            | -           |
| diagnostics   | ospfoverview          | GET    | -            | -           |
| diagnostics   | ospfv3interface       | GET    | -            | -           |
| diagnostics   | ospfv3overview        | GET    | -            | -           |
| diagnostics   | search_bgproute4      | GET    | -            | -           |
| diagnostics   | search_bgproute6      | GET    | -            | -           |
| diagnostics   | search_generalroute4  | GET    | -            | -           |
| diagnostics   | search_generalroute6  | GET    | -            | -           |
| diagnostics   | search_ospfneighbor   | GET    | -            | -           |
| diagnostics   | search_ospfroute      | GET    | -            | -           |
| diagnostics   | search_ospfv3database | GET    | -            | -           |
| diagnostics   | search_ospfv3route    | GET    | $format=json | -           |
| general       | get                   | GET    | -            | -           |
| general       | set                   | POST   | -            | -           |
| ospf6settings | add_interface         | POST   | -            | -           |
| ospf6settings | add_network           | POST   | -            | -           |
| ospf6settings | add_prefixlist        | POST   | -            | -           |
| ospf6settings | add_redistribution    | POST   | -            | -           |
| ospf6settings | add_routemap          | POST   | -            | -           |
| ospf6settings | del_interface         | POST   | $uuid        | -           |
| ospf6settings | del_network           | POST   | $uuid        | -           |
| ospf6settings | del_prefixlist        | POST   | $uuid        | -           |
| ospf6settings | del_redistribution    | POST   | $uuid        | -           |
| ospf6settings | del_routemap          | POST   | $uuid        | -           |
| ospf6settings | get                   | GET    | -            | -           |
| ospf6settings | get_interface         | GET    | $uuid=null   | -           |
| ospf6settings | get_network           | GET    | $uuid=null   | -           |
| ospf6settings | get_prefixlist        | GET    | $uuid=null   | -           |
| ospf6settings | get_redistribution    | GET    | $uuid=null   | -           |
| ospf6settings | get_routemap          | GET    | $uuid=null   | -           |
| ospf6settings | set                   | POST   | -            | -           |
| ospf6settings | set_interface         | POST   | $uuid        | -           |
| ospf6settings | set_network           | POST   | $uuid        | -           |
| ospf6settings | set_prefixlist        | POST   | $uuid        | -           |
| ospf6settings | set_redistribution    | POST   | $uuid        | -           |
| ospf6settings | set_routemap          | POST   | $uuid        | -           |
| ospf6settings | toggle_interface      | POST   | $uuid        | -           |
| ospf6settings | toggle_network        | POST   | $uuid        | -           |
| ospf6settings | toggle_prefixlist     | POST   | $uuid        | -           |
| ospf6settings | toggle_redistribution | POST   | $uuid        | -           |
| ospf6settings | toggle_routemap       | POST   | $uuid        | -           |
| ospfsettings  | add_interface         | POST   | -            | -           |
| ospfsettings  | add_network           | POST   | -            | -           |
| ospfsettings  | add_prefixlist        | POST   | -            | -           |
| ospfsettings  | add_redistribution    | POST   | -            | -           |
| ospfsettings  | add_routemap          | POST   | -            | -           |
| ospfsettings  | del_interface         | POST   | $uuid        | -           |
| ospfsettings  | del_network           | POST   | $uuid        | -           |
| ospfsettings  | del_prefixlist        | POST   | $uuid        | -           |
| ospfsettings  | del_redistribution    | POST   | $uuid        | -           |
| ospfsettings  | del_routemap          | POST   | $uuid        | -           |
| ospfsettings  | get                   | GET    | -            | -           |
| ospfsettings  | get_interface         | GET    | $uuid=null   | -           |
| ospfsettings  | get_network           | GET    | $uuid=null   | -           |
| ospfsettings  | get_prefixlist        | GET    | $uuid=null   | -           |
| ospfsettings  | get_redistribution    | GET    | $uuid=null   | -           |
| ospfsettings  | get_routemap          | GET    | $uuid=null   | -           |
| ospfsettings  | set                   | POST   | -            | -           |
| ospfsettings  | set_interface         | POST   | $uuid        | -           |
| ospfsettings  | set_network           | POST   | $uuid        | -           |
| ospfsettings  | set_prefixlist        | POST   | $uuid        | -           |
| ospfsettings  | set_redistribution    | POST   | $uuid        | -           |
| ospfsettings  | set_routemap          | POST   | $uuid        | -           |
| ospfsettings  | toggle_interface      | POST   | $uuid        | -           |
| ospfsettings  | toggle_network        | POST   | $uuid        | -           |
| ospfsettings  | toggle_prefixlist     | POST   | $uuid        | -           |
| ospfsettings  | toggle_redistribution | POST   | $uuid        | -           |
| ospfsettings  | toggle_routemap       | POST   | $uuid        | -           |
| rip           | get                   | GET    | -            | -           |
| rip           | set                   | POST   | -            | -           |
| service       | reconfigure           | POST   | -            | -           |
| service       | restart               | POST   | -            | -           |
| service       | start                 | POST   | -            | -           |
| service       | status                | GET    | -            | -           |
| service       | stop                  | POST   | -            | -           |
| static        | add_route             | POST   | -            | -           |
| static        | del_route             | POST   | $uuid        | -           |
| static        | get                   | GET    | -            | -           |
| static        | get_route             | GET    | $uuid=null   | -           |
| static        | set                   | POST   | -            | -           |
| static        | set_route             | POST   | $uuid        | -           |
| static        | toggle_route          | POST   | $uuid        | -           |

### Model Structure

#### Containers

**neighbor**

_No fields defined_

---

## Radsecproxy

**Module:** Radsecproxy  
**Type:** plugin  
**Endpoints:** 42

### Endpoints

| Controller | Command     | Method | Parameters          | Description |
| ---------- | ----------- | ------ | ------------------- | ----------- |
| clients    | add_item    | POST   | -                   | -           |
| clients    | del_item    | POST   | $uuid               | -           |
| clients    | get         | GET    | -                   | -           |
| clients    | get_item    | GET    | $uuid=null          | -           |
| clients    | set         | POST   | -                   | -           |
| clients    | set_item    | POST   | $uuid               | -           |
| clients    | toggle_item | POST   | $uuid,$enabled=null | -           |
| general    | get         | GET    | -                   | -           |
| general    | set         | POST   | -                   | -           |
| realms     | add_item    | POST   | -                   | -           |
| realms     | del_item    | POST   | $uuid               | -           |
| realms     | get         | GET    | -                   | -           |
| realms     | get_item    | GET    | $uuid=null          | -           |
| realms     | set         | POST   | -                   | -           |
| realms     | set_item    | POST   | $uuid               | -           |
| realms     | toggle_item | POST   | $uuid,$enabled=null | -           |
| rewrites   | add_item    | POST   | -                   | -           |
| rewrites   | del_item    | POST   | $uuid               | -           |
| rewrites   | get         | GET    | -                   | -           |
| rewrites   | get_item    | GET    | $uuid=null          | -           |
| rewrites   | set         | POST   | -                   | -           |
| rewrites   | set_item    | POST   | $uuid               | -           |
| rewrites   | toggle_item | POST   | $uuid,$enabled=null | -           |
| servers    | add_item    | POST   | -                   | -           |
| servers    | del_item    | POST   | $uuid               | -           |
| servers    | get         | GET    | -                   | -           |
| servers    | get_item    | GET    | $uuid=null          | -           |
| servers    | set         | POST   | -                   | -           |
| servers    | set_item    | POST   | $uuid               | -           |
| servers    | toggle_item | POST   | $uuid,$enabled=null | -           |
| service    | reconfigure | POST   | -                   | -           |
| service    | restart     | POST   | -                   | -           |
| service    | start       | POST   | -                   | -           |
| service    | status      | GET    | -                   | -           |
| service    | stop        | POST   | -                   | -           |
| tls        | add_item    | POST   | -                   | -           |
| tls        | del_item    | POST   | $uuid               | -           |
| tls        | get         | GET    | -                   | -           |
| tls        | get_item    | GET    | $uuid=null          | -           |
| tls        | set         | POST   | -                   | -           |
| tls        | set_item    | POST   | $uuid               | -           |
| tls        | toggle_item | POST   | $uuid,$enabled=null | -           |

### Model Structure

#### Containers

**client**

_No fields defined_

**server**

_No fields defined_

**tlsConfig**

_No fields defined_

**realm**

_No fields defined_

**rewrite**

_No fields defined_

---

## Redis

**Module:** Redis  
**Type:** plugin  
**Endpoints:** 8

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| service    | reconfigure | POST   | -          | -           |
| service    | resetdb     | GET    | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |
| settings   | get         | GET    | -          | -           |
| settings   | set         | POST   | -          | -           |

### Model Structure

---

## Relayd

**Module:** Relayd  
**Type:** plugin  
**Endpoints:** 14

### Endpoints

| Controller | Command     | Method | Parameters                           | Description |
| ---------- | ----------- | ------ | ------------------------------------ | ----------- |
| service    | configtest  | POST   | -                                    | -           |
| service    | reconfigure | POST   | -                                    | -           |
| service    | restart     | POST   | -                                    | -           |
| service    | start       | POST   | -                                    | -           |
| service    | status      | GET    | -                                    | -           |
| service    | stop        | POST   | -                                    | -           |
| settings   | del         | GET    | $nodeType=null,$uuid=null            | -           |
| settings   | dirty       | GET    | -                                    | -           |
| settings   | get         | GET    | $nodeType=null,$uuid=null            | -           |
| settings   | search      | POST   | $nodeType=null                       | -           |
| settings   | set         | POST   | $nodeType=null,$uuid=null            | -           |
| settings   | toggle      | POST   | $nodeType,$uuid,$enabled=null        | -           |
| status     | sum         | GET    | $wait=0                              | -           |
| status     | toggle      | POST   | $nodeType=null,$id=null,$action=null | -           |

### Model Structure

#### Containers

**host**

_No fields defined_

**table**

_No fields defined_

**tablecheck**

_No fields defined_

**virtualserver**

_No fields defined_

**protocol**

_No fields defined_

---

## Rspamd

**Module:** Rspamd  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |
| settings   | get         | GET    | -          | -           |
| settings   | set         | POST   | -          | -           |

### Model Structure

---

## Shadowsocks

**Module:** Shadowsocks  
**Type:** plugin  
**Endpoints:** 14

### Endpoints

| Controller   | Command     | Method | Parameters | Description |
| ------------ | ----------- | ------ | ---------- | ----------- |
| general      | get         | GET    | -          | -           |
| general      | set         | POST   | -          | -           |
| local        | get         | GET    | -          | -           |
| local        | set         | POST   | -          | -           |
| localservice | reconfigure | POST   | -          | -           |
| localservice | restart     | POST   | -          | -           |
| localservice | start       | POST   | -          | -           |
| localservice | status      | GET    | -          | -           |
| localservice | stop        | POST   | -          | -           |
| service      | reconfigure | POST   | -          | -           |
| service      | restart     | POST   | -          | -           |
| service      | start       | POST   | -          | -           |
| service      | status      | GET    | -          | -           |
| service      | stop        | POST   | -          | -           |

### Model Structure

---

## Siproxd

**Module:** Siproxd  
**Type:** plugin  
**Endpoints:** 24

### Endpoints

| Controller | Command           | Method | Parameters | Description |
| ---------- | ----------------- | ------ | ---------- | ----------- |
| domain     | add_domain        | POST   | -          | -           |
| domain     | del_domain        | POST   | $uuid      | -           |
| domain     | get               | GET    | -          | -           |
| domain     | get_domain        | GET    | $uuid=null | -           |
| domain     | search_domain     | GET    | -          | -           |
| domain     | set               | POST   | -          | -           |
| domain     | set_domain        | POST   | $uuid      | -           |
| domain     | toggle_domain     | GET    | $uuid      | -           |
| general    | get               | GET    | -          | -           |
| general    | set               | POST   | -          | -           |
| service    | reconfigure       | POST   | -          | -           |
| service    | restart           | POST   | -          | -           |
| service    | showregistrations | GET    | -          | -           |
| service    | start             | POST   | -          | -           |
| service    | status            | GET    | -          | -           |
| service    | stop              | POST   | -          | -           |
| user       | add_user          | POST   | -          | -           |
| user       | del_user          | POST   | $uuid      | -           |
| user       | get               | GET    | -          | -           |
| user       | get_user          | GET    | $uuid=null | -           |
| user       | search_user       | GET    | -          | -           |
| user       | set               | POST   | -          | -           |
| user       | set_user          | POST   | $uuid      | -           |
| user       | toggle_user       | GET    | $uuid      | -           |

### Model Structure

#### Containers

**domain**

_No fields defined_

---

## Smart

**Module:** Smart  
**Type:** plugin  
**Endpoints:** 5

### Endpoints

| Controller | Command | Method | Parameters    | Description |
| ---------- | ------- | ------ | ------------- | ----------- |
| service    | abort   | POST   | -             | -           |
| service    | info    | POST   | -             | -           |
| service    | list    | POST   | $details=null | -           |
| service    | logs    | POST   | -             | -           |
| service    | test    | POST   | -             | -           |

---

## Softether

**Module:** Softether  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |

### Model Structure

---

## Sslh

**Module:** Sslh  
**Type:** plugin  
**Endpoints:** 8

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |
| settings   | get         | GET    | -          | -           |
| settings   | index       | GET    | -          | -           |
| settings   | set         | POST   | -          | -           |

### Model Structure

---

## Stunnel

**Module:** Stunnel  
**Type:** plugin  
**Endpoints:** 12

### Endpoints

| Controller | Command     | Method | Parameters          | Description |
| ---------- | ----------- | ------ | ------------------- | ----------- |
| service    | reconfigure | POST   | -                   | -           |
| service    | restart     | POST   | -                   | -           |
| service    | start       | POST   | -                   | -           |
| service    | status      | GET    | -                   | -           |
| service    | stop        | POST   | -                   | -           |
| services   | add_item    | POST   | -                   | -           |
| services   | del_item    | POST   | $uuid               | -           |
| services   | get         | GET    | -                   | -           |
| services   | get_item    | GET    | $uuid=null          | -           |
| services   | set         | POST   | -                   | -           |
| services   | set_item    | POST   | $uuid               | -           |
| services   | toggle_item | POST   | $uuid,$enabled=null | -           |

### Model Structure

#### Containers

**service**

_No fields defined_

---

## Tailscale

**Module:** Tailscale  
**Type:** plugin  
**Endpoints:** 19

### Endpoints

| Controller     | Command     | Method | Parameters | Description |
| -------------- | ----------- | ------ | ---------- | ----------- |
| authentication | get         | GET    | -          | -           |
| authentication | set         | POST   | -          | -           |
| service        | reconfigure | POST   | -          | -           |
| service        | restart     | POST   | -          | -           |
| service        | start       | POST   | -          | -           |
| service        | status      | GET    | -          | -           |
| service        | stop        | POST   | -          | -           |
| settings       | add_subnet  | POST   | -          | -           |
| settings       | del_subnet  | POST   | $uuid      | -           |
| settings       | get         | GET    | -          | -           |
| settings       | get_subnet  | GET    | $uuid=null | -           |
| settings       | reload      | GET    | -          | -           |
| settings       | set         | POST   | -          | -           |
| settings       | set_subnet  | POST   | $uuid      | -           |
| status         | get         | GET    | -          | -           |
| status         | ip          | GET    | -          | -           |
| status         | net         | GET    | -          | -           |
| status         | set         | POST   | -          | -           |
| status         | status      | GET    | -          | -           |

### Model Structure

---

## Tayga

**Module:** Tayga  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |

### Model Structure

---

## Telegraf

**Module:** Telegraf  
**Type:** plugin  
**Endpoints:** 18

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| input      | get         | GET    | -          | -           |
| input      | set         | POST   | -          | -           |
| key        | add_key     | POST   | -          | -           |
| key        | del_key     | POST   | $uuid      | -           |
| key        | get         | GET    | -          | -           |
| key        | get_key     | GET    | $uuid=null | -           |
| key        | set         | POST   | -          | -           |
| key        | set_key     | POST   | $uuid      | -           |
| key        | toggle_key  | POST   | $uuid      | -           |
| output     | get         | GET    | -          | -           |
| output     | set         | POST   | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |

### Model Structure

#### Containers

**key**

_No fields defined_

---

## Tftp

**Module:** Tftp  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |

### Model Structure

---

## Tinc

**Module:** Tinc  
**Type:** plugin  
**Endpoints:** 16

### Endpoints

| Controller | Command        | Method | Parameters          | Description |
| ---------- | -------------- | ------ | ------------------- | ----------- |
| service    | reconfigure    | POST   | -                   | -           |
| service    | restart        | POST   | -                   | -           |
| service    | start          | POST   | -                   | -           |
| service    | stop           | POST   | -                   | -           |
| settings   | del_host       | POST   | $uuid               | -           |
| settings   | del_network    | POST   | $uuid               | -           |
| settings   | get            | GET    | -                   | -           |
| settings   | get_host       | GET    | $uuid=null          | -           |
| settings   | get_network    | GET    | $uuid=null          | -           |
| settings   | search_host    | GET    | -                   | -           |
| settings   | search_network | GET    | -                   | -           |
| settings   | set            | POST   | -                   | -           |
| settings   | set_host       | POST   | $uuid=null          | -           |
| settings   | set_network    | POST   | $uuid=null          | -           |
| settings   | toggle_host    | POST   | $uuid,$enabled=null | -           |
| settings   | toggle_network | POST   | $uuid,$enabled=null | -           |

### Model Structure

#### Containers

**network**

_No fields defined_

**host**

_No fields defined_

---

## Tor

**Module:** Tor  
**Type:** plugin  
**Endpoints:** 45

### Endpoints

| Controller       | Command             | Method | Parameters | Description |
| ---------------- | ------------------- | ------ | ---------- | ----------- |
| exitacl          | addacl              | POST   | -          | -           |
| exitacl          | delacl              | POST   | $uuid      | -           |
| exitacl          | get                 | GET    | -          | -           |
| exitacl          | getacl              | GET    | $uuid=null | -           |
| exitacl          | set                 | POST   | -          | -           |
| exitacl          | setacl              | POST   | $uuid      | -           |
| exitacl          | toggleacl           | POST   | $uuid      | -           |
| general          | addhidservauth      | POST   | -          | -           |
| general          | delhidservauth      | POST   | $uuid      | -           |
| general          | get                 | GET    | -          | -           |
| general          | gethidservauth      | GET    | $uuid=null | -           |
| general          | set                 | POST   | -          | -           |
| general          | sethidservauth      | POST   | $uuid      | -           |
| general          | togglehidservauth   | POST   | $uuid      | -           |
| hiddenservice    | addservice          | POST   | -          | -           |
| hiddenservice    | delservice          | POST   | $uuid      | -           |
| hiddenservice    | get                 | GET    | -          | -           |
| hiddenservice    | getservice          | GET    | $uuid=null | -           |
| hiddenservice    | set                 | POST   | -          | -           |
| hiddenservice    | setservice          | POST   | $uuid      | -           |
| hiddenservice    | toggleservice       | POST   | $uuid      | -           |
| hiddenserviceacl | addacl              | POST   | -          | -           |
| hiddenserviceacl | delacl              | POST   | $uuid      | -           |
| hiddenserviceacl | get                 | GET    | -          | -           |
| hiddenserviceacl | getacl              | GET    | $uuid=null | -           |
| hiddenserviceacl | set                 | POST   | -          | -           |
| hiddenserviceacl | setacl              | POST   | $uuid      | -           |
| hiddenserviceacl | toggleacl           | POST   | $uuid      | -           |
| relay            | get                 | GET    | -          | -           |
| relay            | set                 | POST   | -          | -           |
| service          | circuits            | GET    | -          | -           |
| service          | get_hidden_services | GET    | -          | -           |
| service          | reconfigure         | POST   | -          | -           |
| service          | restart             | POST   | -          | -           |
| service          | start               | POST   | -          | -           |
| service          | status              | GET    | -          | -           |
| service          | stop                | POST   | -          | -           |
| service          | streams             | GET    | -          | -           |
| socksacl         | addacl              | POST   | -          | -           |
| socksacl         | delacl              | POST   | $uuid      | -           |
| socksacl         | get                 | GET    | -          | -           |
| socksacl         | getacl              | GET    | $uuid=null | -           |
| socksacl         | set                 | POST   | -          | -           |
| socksacl         | setacl              | POST   | $uuid      | -           |
| socksacl         | toggleacl           | POST   | $uuid      | -           |

### Model Structure

#### Containers

**policy**

_No fields defined_

---

## Turnserver

**Module:** Turnserver  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |
| settings   | get         | GET    | -          | -           |
| settings   | set         | POST   | -          | -           |

### Model Structure

---

## Udpbroadcastrelay

**Module:** Udpbroadcastrelay  
**Type:** plugin  
**Endpoints:** 16

### Endpoints

| Controller | Command      | Method | Parameters | Description |
| ---------- | ------------ | ------ | ---------- | ----------- |
| service    | config       | GET    | -          | -           |
| service    | get          | GET    | -          | -           |
| service    | reload       | GET    | -          | -           |
| service    | restart      | GET    | $uuid      | -           |
| service    | set          | POST   | -          | -           |
| service    | start        | GET    | $uuid      | -           |
| service    | status       | GET    | $uuid      | -           |
| service    | stop         | GET    | $uuid      | -           |
| settings   | add_relay    | POST   | -          | -           |
| settings   | del_relay    | POST   | $uuid      | -           |
| settings   | get          | GET    | -          | -           |
| settings   | get_relay    | GET    | $uuid=null | -           |
| settings   | search_relay | GET    | -          | -           |
| settings   | set          | POST   | -          | -           |
| settings   | set_relay    | POST   | $uuid      | -           |
| settings   | toggle_relay | POST   | $uuid      | -           |

### Model Structure

#### Containers

**udpbroadcastrelay**

_No fields defined_

---

## Vnstat

**Module:** Vnstat  
**Type:** plugin  
**Endpoints:** 12

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | daily       | GET    | -          | -           |
| service    | hourly      | GET    | -          | -           |
| service    | monthly     | GET    | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | resetdb     | GET    | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |
| service    | yearly      | GET    | -          | -           |

### Model Structure

---

## Wazuhagent

**Module:** Wazuhagent  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |
| settings   | get         | GET    | -          | -           |
| settings   | set         | POST   | -          | -           |

### Model Structure

---

## Wol

**Module:** Wol  
**Type:** plugin  
**Endpoints:** 8

### Endpoints

| Controller | Command  | Method | Parameters | Description |
| ---------- | -------- | ------ | ---------- | ----------- |
| wol        | add_host | POST   | -          | -           |
| wol        | del_host | POST   | $uuid      | -           |
| wol        | get      | GET    | -          | -           |
| wol        | get_host | GET    | $uuid=null | -           |
| wol        | getwake  | GET    | -          | -           |
| wol        | set      | POST   | -          | -           |
| wol        | set_host | POST   | $uuid      | -           |
| wol        | wakeall  | POST   | -          | -           |

### Model Structure

#### Containers

**wolentry**

_No fields defined_

---

## Zabbixagent

**Module:** Zabbixagent  
**Type:** plugin  
**Endpoints:** 17

### Endpoints

| Controller | Command              | Method | Parameters | Description |
| ---------- | -------------------- | ------ | ---------- | ----------- |
| service    | reconfigure          | POST   | -          | -           |
| service    | restart              | POST   | -          | -           |
| service    | start                | POST   | -          | -           |
| service    | status               | GET    | -          | -           |
| service    | stop                 | POST   | -          | -           |
| settings   | add_alias            | POST   | -          | -           |
| settings   | add_userparameter    | POST   | -          | -           |
| settings   | del_alias            | POST   | $uuid      | -           |
| settings   | del_userparameter    | POST   | $uuid      | -           |
| settings   | get                  | GET    | -          | -           |
| settings   | get_alias            | GET    | $uuid=null | -           |
| settings   | get_userparameter    | GET    | $uuid=null | -           |
| settings   | set                  | POST   | -          | -           |
| settings   | set_alias            | POST   | $uuid      | -           |
| settings   | set_userparameter    | POST   | $uuid      | -           |
| settings   | toggle_alias         | POST   | $uuid      | -           |
| settings   | toggle_userparameter | POST   | $uuid      | -           |

### Model Structure

#### Containers

**userparameter**

_No fields defined_

**alias**

_No fields defined_

---

## Zabbixproxy

**Module:** Zabbixproxy  
**Type:** plugin  
**Endpoints:** 7

### Endpoints

| Controller | Command     | Method | Parameters | Description |
| ---------- | ----------- | ------ | ---------- | ----------- |
| general    | get         | GET    | -          | -           |
| general    | set         | POST   | -          | -           |
| service    | reconfigure | POST   | -          | -           |
| service    | restart     | POST   | -          | -           |
| service    | start       | POST   | -          | -           |
| service    | status      | GET    | -          | -           |
| service    | stop        | POST   | -          | -           |

### Model Structure

---

## Zerotier

**Module:** Zerotier  
**Type:** plugin  
**Endpoints:** 10

### Endpoints

| Controller | Command | Method | Parameters | Description |
| ---------- | ------- | ------ | ---------- | ----------- |
| network    | add     | POST   | -          | -           |
| network    | del     | POST   | $uuid=null | -           |
| network    | get     | GET    | $uuid=null | -           |
| network    | info    | GET    | $uuid=null | -           |
| network    | search  | GET    | -          | -           |
| network    | set     | POST   | $uuid=null | -           |
| network    | toggle  | POST   | $uuid=null | -           |
| settings   | get     | GET    | -          | -           |
| settings   | set     | POST   | -          | -           |
| settings   | status  | GET    | -          | -           |

### Model Structure

#### Containers

**network**

_No fields defined_

---

## Statistics

| Metric                  | Value |
| ----------------------- | ----- |
| Total Plugin Modules    | 64    |
| Total Endpoints         | 1271  |
| Modules with XML Models | 0     |
