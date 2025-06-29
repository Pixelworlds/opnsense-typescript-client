# OPNsense Core API Documentation

Generated on: 2025-06-29T10:47:29.658Z

This document contains detailed API documentation for all 24 OPNsense core modules.

## Table of Contents

- [Auth](#auth)
- [Captiveportal](#captiveportal)
- [Core](#core)
- [Cron](#cron)
- [Dhcpv4](#dhcpv4)
- [Dhcpv6](#dhcpv6)
- [Dhcrelay](#dhcrelay)
- [Diagnostics](#diagnostics)
- [Dnsmasq](#dnsmasq)
- [Firewall](#firewall)
- [Firmware](#firmware)
- [Ids](#ids)
- [Interfaces](#interfaces)
- [Ipsec](#ipsec)
- [Kea](#kea)
- [Monit](#monit)
- [Openvpn](#openvpn)
- [Routes](#routes)
- [Routing](#routing)
- [Syslog](#syslog)
- [Trafficshaper](#trafficshaper)
- [Trust](#trust)
- [Unbound](#unbound)
- [Wireguard](#wireguard)

---

## Auth

**Base URL**: `/api/auth/`

**Documentation**: https://docs.opnsense.org/development/api/core/auth.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Auth/Group.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Auth/Group.xml)

**Description**: Authentication and user/group management

### Statistics

- **Total Endpoints**: 19
- **Methods**: POST (11), GET (8)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | group | add | - | `/api/auth/group/add` |
| POST | group | del | `$uuid` | `/api/auth/group/del/{uuid}` |
| GET | group | get | `$uuid=null` | `/api/auth/group/get/{uuid}` |
| POST | group | set | `$uuid=null` | `/api/auth/group/set/{uuid}` |
| GET | priv | get | - | `/api/auth/priv/get` |
| GET | priv | get_item | `$id` | `/api/auth/priv/get_item/{id}` |
| GET | priv | search | - | `/api/auth/priv/search` |
| POST | priv | set | - | `/api/auth/priv/set` |
| POST | priv | set_item | `$id` | `/api/auth/priv/set_item/{id}` |
| POST | user | add | - | `/api/auth/user/add` |
| POST | user | add_api_key | `$username` | `/api/auth/user/add_api_key/{username}` |
| POST | user | del | `$uuid` | `/api/auth/user/del/{uuid}` |
| POST | user | del_api_key | `$id` | `/api/auth/user/del_api_key/{id}` |
| GET | user | download | - | `/api/auth/user/download` |
| GET | user | get | `$uuid=null` | `/api/auth/user/get/{uuid}` |
| GET | user | new_otp_seed | - | `/api/auth/user/new_otp_seed` |
| GET | user | search_api_key | - | `/api/auth/user/search_api_key` |
| POST | user | set | `$uuid=null` | `/api/auth/user/set/{uuid}` |
| POST | user | upload | - | `/api/auth/user/upload` |

### Array Fields (Containers)

#### group

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Captiveportal

**Base URL**: `/api/captiveportal/`

**Documentation**: https://docs.opnsense.org/development/api/core/captiveportal.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/CaptivePortal/CaptivePortal.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/CaptivePortal/CaptivePortal.xml)

**Description**: Captive portal for guest network access control

### Statistics

- **Total Endpoints**: 27
- **Methods**: GET (12), POST (15)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | access | api | - | `/api/captiveportal/access/api` |
| GET | access | logoff | `$zoneid=0` | `/api/captiveportal/access/logoff/{zoneid}` |
| POST | access | logon | `$zoneid=0` | `/api/captiveportal/access/logon/{zoneid}` |
| POST | service | del_template | `$uuid` | `/api/captiveportal/service/del_template/{uuid}` |
| GET | service | get_template | `$fileid=null` | `/api/captiveportal/service/get_template/{fileid}` |
| POST | service | reconfigure | - | `/api/captiveportal/service/reconfigure` |
| POST | service | save_template | - | `/api/captiveportal/service/save_template` |
| GET | service | search_templates | - | `/api/captiveportal/service/search_templates` |
| POST | session | connect | `$zoneid=0` | `/api/captiveportal/session/connect/{zoneid}` |
| POST | session | disconnect | `$zoneid=’’` | `/api/captiveportal/session/disconnect/{zoneid}` |
| GET | session | list | `$zoneid=0` | `/api/captiveportal/session/list/{zoneid}` |
| GET | session | search | - | `/api/captiveportal/session/search` |
| GET | session | zones | - | `/api/captiveportal/session/zones` |
| POST | settings | add_zone | - | `/api/captiveportal/settings/add_zone` |
| POST | settings | del_zone | `$uuid` | `/api/captiveportal/settings/del_zone/{uuid}` |
| GET | settings | get | - | `/api/captiveportal/settings/get` |
| GET | settings | get_zone | `$uuid=null` | `/api/captiveportal/settings/get_zone/{uuid}` |
| POST | settings | set | - | `/api/captiveportal/settings/set` |
| POST | settings | set_zone | `$uuid` | `/api/captiveportal/settings/set_zone/{uuid}` |
| POST | settings | toggle_zone | `$uuid,$enabled=null` | `/api/captiveportal/settings/toggle_zone/{uuid}/{enabled}` |
| POST | voucher | drop_expired_vouchers | `$provider,$group` | `/api/captiveportal/voucher/drop_expired_vouchers/{provider}/{group}` |
| POST | voucher | drop_voucher_group | `$provider,$group` | `/api/captiveportal/voucher/drop_voucher_group/{provider}/{group}` |
| POST | voucher | expire_voucher | `$provider` | `/api/captiveportal/voucher/expire_voucher/{provider}` |
| POST | voucher | generate_vouchers | `$provider` | `/api/captiveportal/voucher/generate_vouchers/{provider}` |
| GET | voucher | list_providers | - | `/api/captiveportal/voucher/list_providers` |
| GET | voucher | list_voucher_groups | `$provider` | `/api/captiveportal/voucher/list_voucher_groups/{provider}` |
| GET | voucher | list_vouchers | `$provider,$group` | `/api/captiveportal/voucher/list_vouchers/{provider}/{group}` |

### Array Fields (Containers)

#### zone

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### template

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Core

**Base URL**: `/api/core/`

**Documentation**: https://docs.opnsense.org/development/api/core/core.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Core/Hasync.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Core/Hasync.xml)

**Description**: Core system functionality and high availability

### Statistics

- **Total Endpoints**: 46
- **Methods**: GET (22), POST (24)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | backup | backups | `$host` | `/api/core/backup/backups/{host}` |
| GET | backup | delete_backup | `$backup` | `/api/core/backup/delete_backup/{backup}` |
| GET | backup | diff | `$host,$backup1,$backup2` | `/api/core/backup/diff/{host}/{backup1}/{backup2}` |
| GET | backup | download | `$host,$backup=null` | `/api/core/backup/download/{host}/{backup}` |
| GET | backup | providers | - | `/api/core/backup/providers` |
| GET | backup | revert_backup | `$backup` | `/api/core/backup/revert_backup/{backup}` |
| GET | dashboard | get_dashboard | - | `/api/core/dashboard/get_dashboard` |
| GET | dashboard | picture | - | `/api/core/dashboard/picture` |
| GET | dashboard | product_info_feed | - | `/api/core/dashboard/product_info_feed` |
| POST | dashboard | restore_defaults | - | `/api/core/dashboard/restore_defaults` |
| POST | dashboard | save_widgets | - | `/api/core/dashboard/save_widgets` |
| GET | hasync | get | - | `/api/core/hasync/get` |
| POST | hasync | reconfigure | - | `/api/core/hasync/reconfigure` |
| POST | hasync | set | - | `/api/core/hasync/set` |
| GET | hasync_status | remote_service | `$action,$service,$service_id` | `/api/core/hasync_status/remote_service/{action}/{service}/{service_id}` |
| POST | hasync_status | restart | `$service=null,$service_id=null` | `/api/core/hasync_status/restart/{service}/{service_id}` |
| POST | hasync_status | restart_all | `$service=null,$service_id=null` | `/api/core/hasync_status/restart_all/{service}/{service_id}` |
| GET | hasync_status | services | - | `/api/core/hasync_status/services` |
| POST | hasync_status | start | `$service=null,$service_id=null` | `/api/core/hasync_status/start/{service}/{service_id}` |
| POST | hasync_status | stop | `$service=null,$service_id=null` | `/api/core/hasync_status/stop/{service}/{service_id}` |
| GET | hasync_status | version | - | `/api/core/hasync_status/version` |
| GET | menu | search | - | `/api/core/menu/search` |
| GET | menu | tree | - | `/api/core/menu/tree` |
| POST | service | restart | `$name,$id=’’` | `/api/core/service/restart/{name}/{id}` |
| GET | service | search | - | `/api/core/service/search` |
| POST | service | start | `$name,$id=’’` | `/api/core/service/start/{name}/{id}` |
| POST | service | stop | `$name,$id=’’` | `/api/core/service/stop/{name}/{id}` |
| POST | snapshots | activate | `$uuid` | `/api/core/snapshots/activate/{uuid}` |
| POST | snapshots | add | - | `/api/core/snapshots/add` |
| POST | snapshots | del | `$uuid` | `/api/core/snapshots/del/{uuid}` |
| GET | snapshots | get | `$uuid=null` | `/api/core/snapshots/get/{uuid}` |
| GET | snapshots | is_supported | - | `/api/core/snapshots/is_supported` |
| GET | snapshots | search | - | `/api/core/snapshots/search` |
| POST | snapshots | set | `$uuid` | `/api/core/snapshots/set/{uuid}` |
| POST | system | dismiss_status | - | `/api/core/system/dismiss_status` |
| POST | system | halt | - | `/api/core/system/halt` |
| POST | system | reboot | - | `/api/core/system/reboot` |
| GET | system | status | - | `/api/core/system/status` |
| POST | tunables | add_item | - | `/api/core/tunables/add_item` |
| POST | tunables | del_item | `$uuid` | `/api/core/tunables/del_item/{uuid}` |
| GET | tunables | get | - | `/api/core/tunables/get` |
| GET | tunables | get_item | `$uuid=null` | `/api/core/tunables/get_item/{uuid}` |
| POST | tunables | reconfigure | - | `/api/core/tunables/reconfigure` |
| POST | tunables | reset | - | `/api/core/tunables/reset` |
| POST | tunables | set | - | `/api/core/tunables/set` |
| POST | tunables | set_item | `$uuid` | `/api/core/tunables/set_item/{uuid}` |

---

## Cron

**Base URL**: `/api/cron/`

**Documentation**: https://docs.opnsense.org/development/api/core/cron.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Cron/Cron.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Cron/Cron.xml)

**Description**: Cron job scheduler for automated tasks

### Statistics

- **Total Endpoints**: 8
- **Methods**: POST (6), GET (2)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | reconfigure | - | `/api/cron/service/reconfigure` |
| POST | settings | add_job | - | `/api/cron/settings/add_job` |
| POST | settings | del_job | `$uuid` | `/api/cron/settings/del_job/{uuid}` |
| GET | settings | get | - | `/api/cron/settings/get` |
| GET | settings | get_job | `$uuid=null` | `/api/cron/settings/get_job/{uuid}` |
| POST | settings | set | - | `/api/cron/settings/set` |
| POST | settings | set_job | `$uuid` | `/api/cron/settings/set_job/{uuid}` |
| POST | settings | toggle_job | `$uuid,$enabled=null` | `/api/cron/settings/toggle_job/{uuid}/{enabled}` |

### Array Fields (Containers)

#### job

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Dhcpv4

**Base URL**: `/api/dhcpv4/`

**Documentation**: https://docs.opnsense.org/development/api/core/dhcpv4.html

**Description**: DHCPv4 server for IPv4 address management

### Statistics

- **Total Endpoints**: 7
- **Methods**: POST (5), GET (2)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | leases | del_lease | `$ip` | `/api/dhcpv4/leases/del_lease/{ip}` |
| GET | leases | search_lease | - | `/api/dhcpv4/leases/search_lease` |
| POST | service | reconfigure | - | `/api/dhcpv4/service/reconfigure` |
| POST | service | restart | - | `/api/dhcpv4/service/restart` |
| POST | service | start | - | `/api/dhcpv4/service/start` |
| GET | service | status | - | `/api/dhcpv4/service/status` |
| POST | service | stop | - | `/api/dhcpv4/service/stop` |

---

## Dhcpv6

**Base URL**: `/api/dhcpv6/`

**Documentation**: https://docs.opnsense.org/development/api/core/dhcpv6.html

**Description**: DHCPv6 server for IPv6 address management

### Statistics

- **Total Endpoints**: 8
- **Methods**: POST (5), GET (3)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | leases | del_lease | `$ip` | `/api/dhcpv6/leases/del_lease/{ip}` |
| GET | leases | search_lease | - | `/api/dhcpv6/leases/search_lease` |
| GET | leases | search_prefix | - | `/api/dhcpv6/leases/search_prefix` |
| POST | service | reconfigure | - | `/api/dhcpv6/service/reconfigure` |
| POST | service | restart | - | `/api/dhcpv6/service/restart` |
| POST | service | start | - | `/api/dhcpv6/service/start` |
| GET | service | status | - | `/api/dhcpv6/service/status` |
| POST | service | stop | - | `/api/dhcpv6/service/stop` |

---

## Dhcrelay

**Base URL**: `/api/dhcrelay/`

**Documentation**: https://docs.opnsense.org/development/api/core/dhcrelay.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/DHCRelay/DHCRelay.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/DHCRelay/DHCRelay.xml)

**Description**: DHCP relay agent for forwarding DHCP requests

### Statistics

- **Total Endpoints**: 12
- **Methods**: POST (9), GET (3)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | reconfigure | - | `/api/dhcrelay/service/reconfigure` |
| POST | settings | add_dest | - | `/api/dhcrelay/settings/add_dest` |
| POST | settings | add_relay | - | `/api/dhcrelay/settings/add_relay` |
| POST | settings | del_dest | `$uuid` | `/api/dhcrelay/settings/del_dest/{uuid}` |
| POST | settings | del_relay | `$uuid` | `/api/dhcrelay/settings/del_relay/{uuid}` |
| GET | settings | get | - | `/api/dhcrelay/settings/get` |
| GET | settings | get_dest | `$uuid=null` | `/api/dhcrelay/settings/get_dest/{uuid}` |
| GET | settings | get_relay | `$uuid=null` | `/api/dhcrelay/settings/get_relay/{uuid}` |
| POST | settings | set | - | `/api/dhcrelay/settings/set` |
| POST | settings | set_dest | `$uuid` | `/api/dhcrelay/settings/set_dest/{uuid}` |
| POST | settings | set_relay | `$uuid` | `/api/dhcrelay/settings/set_relay/{uuid}` |
| POST | settings | toggle_relay | `$uuid,$enabled=null` | `/api/dhcrelay/settings/toggle_relay/{uuid}/{enabled}` |

### Array Fields (Containers)

#### relays

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### destinations

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Diagnostics

**Base URL**: `/api/diagnostics/`

**Documentation**: https://docs.opnsense.org/development/api/core/diagnostics.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Diagnostics/DnsDiagnostics.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Diagnostics/DnsDiagnostics.xml)

**Description**: System diagnostics and troubleshooting tools

### Statistics

- **Total Endpoints**: 90
- **Methods**: GET (65), POST (25)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | activity | get_activity | - | `/api/diagnostics/activity/get_activity` |
| GET | cpu_usage | get_c_p_u_type | - | `/api/diagnostics/cpu_usage/get_c_p_u_type` |
| GET | cpu_usage | stream | - | `/api/diagnostics/cpu_usage/stream` |
| GET | dns | reverse_lookup | - | `/api/diagnostics/dns/reverse_lookup` |
| GET | dns_diagnostics | get | - | `/api/diagnostics/dns_diagnostics/get` |
| POST | dns_diagnostics | set | - | `/api/diagnostics/dns_diagnostics/set` |
| POST | firewall | del_state | `$stateid,$creatorid` | `/api/diagnostics/firewall/del_state/{stateid}/{creatorid}` |
| POST | firewall | flush_sources | - | `/api/diagnostics/firewall/flush_sources` |
| POST | firewall | flush_states | - | `/api/diagnostics/firewall/flush_states` |
| POST | firewall | kill_states | - | `/api/diagnostics/firewall/kill_states` |
| GET | firewall | list_rule_ids | - | `/api/diagnostics/firewall/list_rule_ids` |
| GET | firewall | log | - | `/api/diagnostics/firewall/log` |
| GET | firewall | log_filters | - | `/api/diagnostics/firewall/log_filters` |
| GET | firewall | pf_states | - | `/api/diagnostics/firewall/pf_states` |
| GET | firewall | pf_statistics | `$section=null` | `/api/diagnostics/firewall/pf_statistics/{section}` |
| POST | firewall | query_pf_top | - | `/api/diagnostics/firewall/query_pf_top` |
| POST | firewall | query_states | - | `/api/diagnostics/firewall/query_states` |
| GET | firewall | stats | - | `/api/diagnostics/firewall/stats` |
| GET | firewall | stream_log | - | `/api/diagnostics/firewall/stream_log` |
| POST | interface | _carp_status | `$status` | `/api/diagnostics/interface/_carp_status/{status}` |
| POST | interface | del_route | - | `/api/diagnostics/interface/del_route` |
| POST | interface | flush_arp | - | `/api/diagnostics/interface/flush_arp` |
| GET | interface | get_arp | - | `/api/diagnostics/interface/get_arp` |
| GET | interface | get_bpf_statistics | - | `/api/diagnostics/interface/get_bpf_statistics` |
| GET | interface | get_interface_config | - | `/api/diagnostics/interface/get_interface_config` |
| GET | interface | get_interface_names | - | `/api/diagnostics/interface/get_interface_names` |
| GET | interface | get_interface_statistics | - | `/api/diagnostics/interface/get_interface_statistics` |
| GET | interface | get_memory_statistics | - | `/api/diagnostics/interface/get_memory_statistics` |
| GET | interface | get_ndp | - | `/api/diagnostics/interface/get_ndp` |
| GET | interface | get_netisr_statistics | - | `/api/diagnostics/interface/get_netisr_statistics` |
| GET | interface | get_pfsync_nodes | - | `/api/diagnostics/interface/get_pfsync_nodes` |
| GET | interface | get_protocol_statistics | - | `/api/diagnostics/interface/get_protocol_statistics` |
| GET | interface | get_routes | - | `/api/diagnostics/interface/get_routes` |
| GET | interface | get_socket_statistics | - | `/api/diagnostics/interface/get_socket_statistics` |
| GET | interface | get_vip_status | - | `/api/diagnostics/interface/get_vip_status` |
| GET | interface | search_arp | - | `/api/diagnostics/interface/search_arp` |
| GET | interface | search_ndp | - | `/api/diagnostics/interface/search_ndp` |
| POST | lvtemplate | add_item | - | `/api/diagnostics/lvtemplate/add_item` |
| POST | lvtemplate | del_item | `$uuid` | `/api/diagnostics/lvtemplate/del_item/{uuid}` |
| GET | lvtemplate | get | - | `/api/diagnostics/lvtemplate/get` |
| GET | lvtemplate | get_item | `$uuid=null` | `/api/diagnostics/lvtemplate/get_item/{uuid}` |
| POST | lvtemplate | set | - | `/api/diagnostics/lvtemplate/set` |
| POST | lvtemplate | set_item | `$uuid` | `/api/diagnostics/lvtemplate/set_item/{uuid}` |
| GET | netflow | cache_stats | - | `/api/diagnostics/netflow/cache_stats` |
| GET | netflow | getconfig | - | `/api/diagnostics/netflow/getconfig` |
| GET | netflow | is_enabled | - | `/api/diagnostics/netflow/is_enabled` |
| POST | netflow | reconfigure | - | `/api/diagnostics/netflow/reconfigure` |
| GET | netflow | setconfig | - | `/api/diagnostics/netflow/setconfig` |
| GET | netflow | status | - | `/api/diagnostics/netflow/status` |
| GET | networkinsight | export | `$provider=null,$from_date=null,$to_date=null,$resolution=null` | `/api/diagnostics/networkinsight/export/{provider}/{from_date}/{to_date}/{resolution}` |
| GET | networkinsight | get_interfaces | - | `/api/diagnostics/networkinsight/get_interfaces` |
| GET | networkinsight | get_metadata | - | `/api/diagnostics/networkinsight/get_metadata` |
| GET | networkinsight | get_protocols | - | `/api/diagnostics/networkinsight/get_protocols` |
| GET | networkinsight | get_services | - | `/api/diagnostics/networkinsight/get_services` |
| GET | networkinsight | timeserie | `$provider=null,$measure=null,$from_date=null,$to_date=null,$resolution=null,$field=null,$emulation=null` | `/api/diagnostics/networkinsight/timeserie/{provider}/{measure}/{from_date}/{to_date}/{resolution}/{field}/{emulation}` |
| GET | networkinsight | top | `$provider=null,$from_date=null,$to_date=null,$field=null,$measure=null,$max_hits=null` | `/api/diagnostics/networkinsight/top/{provider}/{from_date}/{to_date}/{field}/{measure}/{max_hits}` |
| GET | packet_capture | download | `$jobid` | `/api/diagnostics/packet_capture/download/{jobid}` |
| GET | packet_capture | get | - | `/api/diagnostics/packet_capture/get` |
| GET | packet_capture | mac_info | `$macaddr` | `/api/diagnostics/packet_capture/mac_info/{macaddr}` |
| POST | packet_capture | remove | `$jobid` | `/api/diagnostics/packet_capture/remove/{jobid}` |
| GET | packet_capture | search_jobs | - | `/api/diagnostics/packet_capture/search_jobs` |
| POST | packet_capture | set | - | `/api/diagnostics/packet_capture/set` |
| POST | packet_capture | start | `$jobid` | `/api/diagnostics/packet_capture/start/{jobid}` |
| POST | packet_capture | stop | `$jobid` | `/api/diagnostics/packet_capture/stop/{jobid}` |
| GET | packet_capture | view | `$jobid,$detail=normal` | `/api/diagnostics/packet_capture/view/{jobid}/{detail}` |
| GET | ping | get | - | `/api/diagnostics/ping/get` |
| POST | ping | remove | `$jobid` | `/api/diagnostics/ping/remove/{jobid}` |
| GET | ping | search_jobs | - | `/api/diagnostics/ping/search_jobs` |
| POST | ping | set | - | `/api/diagnostics/ping/set` |
| POST | ping | start | `$jobid` | `/api/diagnostics/ping/start/{jobid}` |
| POST | ping | stop | `$jobid` | `/api/diagnostics/ping/stop/{jobid}` |
| GET | portprobe | get | - | `/api/diagnostics/portprobe/get` |
| POST | portprobe | set | - | `/api/diagnostics/portprobe/set` |
| GET | system | memory | - | `/api/diagnostics/system/memory` |
| GET | system | system_disk | - | `/api/diagnostics/system/system_disk` |
| GET | system | system_information | - | `/api/diagnostics/system/system_information` |
| GET | system | system_mbuf | - | `/api/diagnostics/system/system_mbuf` |
| GET | system | system_resources | - | `/api/diagnostics/system/system_resources` |
| GET | system | system_swap | - | `/api/diagnostics/system/system_swap` |
| GET | system | system_temperature | - | `/api/diagnostics/system/system_temperature` |
| GET | system | system_time | - | `/api/diagnostics/system/system_time` |
| GET | systemhealth | export_as_c_s_v | `$rrd=’’,$detail=-1` | `/api/diagnostics/systemhealth/export_as_c_s_v/{rrd}/{detail}` |
| GET | systemhealth | get_interfaces | - | `/api/diagnostics/systemhealth/get_interfaces` |
| GET | systemhealth | get_r_r_dlist | - | `/api/diagnostics/systemhealth/get_r_r_dlist` |
| GET | systemhealth | get_system_health | `$rrd=’’,$unused=0,$detail=-1` | `/api/diagnostics/systemhealth/get_system_health/{rrd}/{unused}/{detail}` |
| GET | traceroute | get | - | `/api/diagnostics/traceroute/get` |
| POST | traceroute | set | - | `/api/diagnostics/traceroute/set` |
| GET | traffic | _interface | - | `/api/diagnostics/traffic/_interface` |
| GET | traffic | _top | `$interfaces` | `/api/diagnostics/traffic/_top/{interfaces}` |
| GET | traffic | stream | `$poll_interval=1` | `/api/diagnostics/traffic/stream/{poll_interval}` |

---

## Dnsmasq

**Base URL**: `/api/dnsmasq/`

**Documentation**: https://docs.opnsense.org/development/api/core/dnsmasq.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Dnsmasq/Dnsmasq.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Dnsmasq/Dnsmasq.xml)

**Description**: DNS forwarder and DHCP server

### Statistics

- **Total Endpoints**: 35
- **Methods**: GET (11), POST (24)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | leases | search | - | `/api/dnsmasq/leases/search` |
| POST | service | reconfigure | - | `/api/dnsmasq/service/reconfigure` |
| POST | service | restart | - | `/api/dnsmasq/service/restart` |
| POST | service | start | - | `/api/dnsmasq/service/start` |
| GET | service | status | - | `/api/dnsmasq/service/status` |
| POST | service | stop | - | `/api/dnsmasq/service/stop` |
| POST | settings | add_boot | - | `/api/dnsmasq/settings/add_boot` |
| POST | settings | add_domain | - | `/api/dnsmasq/settings/add_domain` |
| POST | settings | add_host | - | `/api/dnsmasq/settings/add_host` |
| POST | settings | add_option | - | `/api/dnsmasq/settings/add_option` |
| POST | settings | add_range | - | `/api/dnsmasq/settings/add_range` |
| POST | settings | add_tag | - | `/api/dnsmasq/settings/add_tag` |
| POST | settings | del_boot | `$uuid` | `/api/dnsmasq/settings/del_boot/{uuid}` |
| POST | settings | del_domain | `$uuid` | `/api/dnsmasq/settings/del_domain/{uuid}` |
| POST | settings | del_host | `$uuid` | `/api/dnsmasq/settings/del_host/{uuid}` |
| POST | settings | del_option | `$uuid` | `/api/dnsmasq/settings/del_option/{uuid}` |
| POST | settings | del_range | `$uuid` | `/api/dnsmasq/settings/del_range/{uuid}` |
| POST | settings | del_tag | `$uuid` | `/api/dnsmasq/settings/del_tag/{uuid}` |
| GET | settings | download_hosts | - | `/api/dnsmasq/settings/download_hosts` |
| GET | settings | get | - | `/api/dnsmasq/settings/get` |
| GET | settings | get_boot | `$uuid=null` | `/api/dnsmasq/settings/get_boot/{uuid}` |
| GET | settings | get_domain | `$uuid=null` | `/api/dnsmasq/settings/get_domain/{uuid}` |
| GET | settings | get_host | `$uuid=null` | `/api/dnsmasq/settings/get_host/{uuid}` |
| GET | settings | get_option | `$uuid=null` | `/api/dnsmasq/settings/get_option/{uuid}` |
| GET | settings | get_range | `$uuid=null` | `/api/dnsmasq/settings/get_range/{uuid}` |
| GET | settings | get_tag | `$uuid=null` | `/api/dnsmasq/settings/get_tag/{uuid}` |
| GET | settings | get_tag_list | - | `/api/dnsmasq/settings/get_tag_list` |
| POST | settings | set | - | `/api/dnsmasq/settings/set` |
| POST | settings | set_boot | `$uuid` | `/api/dnsmasq/settings/set_boot/{uuid}` |
| POST | settings | set_domain | `$uuid` | `/api/dnsmasq/settings/set_domain/{uuid}` |
| POST | settings | set_host | `$uuid` | `/api/dnsmasq/settings/set_host/{uuid}` |
| POST | settings | set_option | `$uuid` | `/api/dnsmasq/settings/set_option/{uuid}` |
| POST | settings | set_range | `$uuid` | `/api/dnsmasq/settings/set_range/{uuid}` |
| POST | settings | set_tag | `$uuid` | `/api/dnsmasq/settings/set_tag/{uuid}` |
| POST | settings | upload_hosts | - | `/api/dnsmasq/settings/upload_hosts` |

### Array Fields (Containers)

#### hosts

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### domainoverrides

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### dhcp_tags

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### dhcp_ranges

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### dhcp_options

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### dhcp_boot

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Firewall

**Base URL**: `/api/firewall/`

**Documentation**: https://docs.opnsense.org/development/api/core/firewall.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Firewall/Alias.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Firewall/Alias.xml)

**Description**: Firewall rules, aliases, and NAT configuration

### Statistics

- **Total Endpoints**: 67
- **Methods**: POST (42), GET (25)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | alias | add_item | - | `/api/firewall/alias/add_item` |
| POST | alias | del_item | `$uuid` | `/api/firewall/alias/del_item/{uuid}` |
| GET | alias | get | - | `/api/firewall/alias/get` |
| GET | alias | get_alias_u_u_i_d | `$name` | `/api/firewall/alias/get_alias_u_u_i_d/{name}` |
| GET | alias | get_geo_i_p | - | `/api/firewall/alias/get_geo_i_p` |
| GET | alias | get_item | `$uuid=null` | `/api/firewall/alias/get_item/{uuid}` |
| GET | alias | get_table_size | - | `/api/firewall/alias/get_table_size` |
| POST | alias | import | - | `/api/firewall/alias/import` |
| GET | alias | list_categories | - | `/api/firewall/alias/list_categories` |
| GET | alias | list_countries | - | `/api/firewall/alias/list_countries` |
| GET | alias | list_network_aliases | - | `/api/firewall/alias/list_network_aliases` |
| GET | alias | list_user_groups | - | `/api/firewall/alias/list_user_groups` |
| POST | alias | reconfigure | - | `/api/firewall/alias/reconfigure` |
| POST | alias | set | - | `/api/firewall/alias/set` |
| POST | alias | set_item | `$uuid` | `/api/firewall/alias/set_item/{uuid}` |
| POST | alias | toggle_item | `$uuid,$enabled=null` | `/api/firewall/alias/toggle_item/{uuid}/{enabled}` |
| POST | alias_util | add | `$alias` | `/api/firewall/alias_util/add/{alias}` |
| GET | alias_util | aliases | - | `/api/firewall/alias_util/aliases` |
| POST | alias_util | delete | `$alias` | `/api/firewall/alias_util/delete/{alias}` |
| POST | alias_util | find_references | - | `/api/firewall/alias_util/find_references` |
| POST | alias_util | flush | `$alias` | `/api/firewall/alias_util/flush/{alias}` |
| GET | alias_util | list | `$alias` | `/api/firewall/alias_util/list/{alias}` |
| GET | alias_util | update_bogons | - | `/api/firewall/alias_util/update_bogons` |
| POST | category | add_item | - | `/api/firewall/category/add_item` |
| POST | category | del_item | `$uuid` | `/api/firewall/category/del_item/{uuid}` |
| GET | category | get | - | `/api/firewall/category/get` |
| GET | category | get_item | `$uuid=null` | `/api/firewall/category/get_item/{uuid}` |
| POST | category | set | - | `/api/firewall/category/set` |
| POST | category | set_item | `$uuid` | `/api/firewall/category/set_item/{uuid}` |
| POST | filter_base | apply | `$rollback_revision=null` | `/api/firewall/filter_base/apply/{rollback_revision}` |
| POST | filter_base | cancel_rollback | `$rollback_revision` | `/api/firewall/filter_base/cancel_rollback/{rollback_revision}` |
| GET | filter_base | get | - | `/api/firewall/filter_base/get` |
| GET | filter_base | list_categories | - | `/api/firewall/filter_base/list_categories` |
| GET | filter_base | list_network_select_options | - | `/api/firewall/filter_base/list_network_select_options` |
| POST | filter_base | revert | `$revision` | `/api/firewall/filter_base/revert/{revision}` |
| POST | filter_base | savepoint | - | `/api/firewall/filter_base/savepoint` |
| POST | filter_base | set | - | `/api/firewall/filter_base/set` |
| POST | filter | add_rule | - | `/api/firewall/filter/add_rule` |
| POST | filter | del_rule | `$uuid` | `/api/firewall/filter/del_rule/{uuid}` |
| GET | filter | get_interface_list | - | `/api/firewall/filter/get_interface_list` |
| GET | filter | get_rule | `$uuid=null` | `/api/firewall/filter/get_rule/{uuid}` |
| POST | filter | move_rule_before | `$selected_uuid,$target_uuid` | `/api/firewall/filter/move_rule_before/{selected_uuid}/{target_uuid}` |
| POST | filter | set_rule | `$uuid` | `/api/firewall/filter/set_rule/{uuid}` |
| POST | filter | toggle_rule | `$uuid,$enabled=null` | `/api/firewall/filter/toggle_rule/{uuid}/{enabled}` |
| GET | filter_util | rule_stats | - | `/api/firewall/filter_util/rule_stats` |
| POST | group | add_item | - | `/api/firewall/group/add_item` |
| POST | group | del_item | `$uuid` | `/api/firewall/group/del_item/{uuid}` |
| GET | group | get | - | `/api/firewall/group/get` |
| GET | group | get_item | `$uuid=null` | `/api/firewall/group/get_item/{uuid}` |
| POST | group | reconfigure | - | `/api/firewall/group/reconfigure` |
| POST | group | set | - | `/api/firewall/group/set` |
| POST | group | set_item | `$uuid` | `/api/firewall/group/set_item/{uuid}` |
| POST | npt | add_rule | - | `/api/firewall/npt/add_rule` |
| POST | npt | del_rule | `$uuid` | `/api/firewall/npt/del_rule/{uuid}` |
| GET | npt | get_rule | `$uuid=null` | `/api/firewall/npt/get_rule/{uuid}` |
| POST | npt | set_rule | `$uuid` | `/api/firewall/npt/set_rule/{uuid}` |
| POST | npt | toggle_rule | `$uuid,$enabled=null` | `/api/firewall/npt/toggle_rule/{uuid}/{enabled}` |
| POST | one_to_one | add_rule | - | `/api/firewall/one_to_one/add_rule` |
| POST | one_to_one | del_rule | `$uuid` | `/api/firewall/one_to_one/del_rule/{uuid}` |
| GET | one_to_one | get_rule | `$uuid=null` | `/api/firewall/one_to_one/get_rule/{uuid}` |
| POST | one_to_one | set_rule | `$uuid` | `/api/firewall/one_to_one/set_rule/{uuid}` |
| POST | one_to_one | toggle_rule | `$uuid,$enabled=null` | `/api/firewall/one_to_one/toggle_rule/{uuid}/{enabled}` |
| POST | source_nat | add_rule | - | `/api/firewall/source_nat/add_rule` |
| POST | source_nat | del_rule | `$uuid` | `/api/firewall/source_nat/del_rule/{uuid}` |
| GET | source_nat | get_rule | `$uuid=null` | `/api/firewall/source_nat/get_rule/{uuid}` |
| POST | source_nat | set_rule | `$uuid` | `/api/firewall/source_nat/set_rule/{uuid}` |
| POST | source_nat | toggle_rule | `$uuid,$enabled=null` | `/api/firewall/source_nat/toggle_rule/{uuid}/{enabled}` |

---

## Firmware

**Base URL**: `/api/firmware/`

**Documentation**: https://docs.opnsense.org/development/api/core/firmware.html

**Description**: Firmware updates and package management

### Statistics

- **Total Endpoints**: 26
- **Methods**: POST (21), GET (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | firmware | audit | - | `/api/core/firmware/audit` |
| POST | firmware | changelog | `$version` | `/api/core/firmware/changelog/{version}` |
| POST | firmware | check | - | `/api/core/firmware/check` |
| POST | firmware | connection | - | `/api/core/firmware/connection` |
| GET | firmware | get | - | `/api/core/firmware/get` |
| GET | firmware | getOptions | - | `/api/core/firmware/getOptions` |
| POST | firmware | health | - | `/api/core/firmware/health` |
| GET | firmware | info | - | `/api/core/firmware/info` |
| POST | firmware | log | `$clear` | `/api/core/firmware/log/{clear}` |
| POST | firmware | poweroff | - | `/api/core/firmware/poweroff` |
| POST | firmware | reboot | - | `/api/core/firmware/reboot` |
| POST | firmware | resyncPlugins | - | `/api/core/firmware/resyncPlugins` |
| GET | firmware | running | - | `/api/core/firmware/running` |
| POST | firmware | set | - | `/api/core/firmware/set` |
| POST | firmware | status | - | `/api/core/firmware/status` |
| POST | firmware | syncPlugins | - | `/api/core/firmware/syncPlugins` |
| POST | firmware | update | - | `/api/core/firmware/update` |
| POST | firmware | upgrade | - | `/api/core/firmware/upgrade` |
| GET | firmware | upgradestatus | - | `/api/core/firmware/upgradestatus` |
| POST | firmware | details | `$pkg_name` | `/api/core/firmware/details/{pkg_name}` |
| POST | firmware | install | `$pkg_name` | `/api/core/firmware/install/{pkg_name}` |
| POST | firmware | license | `$pkg_name` | `/api/core/firmware/license/{pkg_name}` |
| POST | firmware | lock | `$pkg_name` | `/api/core/firmware/lock/{pkg_name}` |
| POST | firmware | remove | `$pkg_name` | `/api/core/firmware/remove/{pkg_name}` |
| POST | firmware | reinstall | `$pkg_name` | `/api/core/firmware/reinstall/{pkg_name}` |
| POST | firmware | unlock | `$pkg_name` | `/api/core/firmware/unlock/{pkg_name}` |

---

## Ids

**Base URL**: `/api/ids/`

**Documentation**: https://docs.opnsense.org/development/api/core/ids.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/IDS/IDS.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/IDS/IDS.xml)

**Description**: Intrusion Detection System (IDS/IPS)

### Statistics

- **Total Endpoints**: 40
- **Methods**: POST (27), GET (13)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | drop_alert_log | - | `/api/ids/service/drop_alert_log` |
| GET | service | get_alert_info | `$alertId,$fileid=’’` | `/api/ids/service/get_alert_info/{alertId}/{fileid}` |
| GET | service | get_alert_logs | - | `/api/ids/service/get_alert_logs` |
| POST | service | query_alerts | - | `/api/ids/service/query_alerts` |
| POST | service | reconfigure | - | `/api/ids/service/reconfigure` |
| POST | service | reload_rules | - | `/api/ids/service/reload_rules` |
| POST | service | restart | - | `/api/ids/service/restart` |
| POST | service | start | - | `/api/ids/service/start` |
| GET | service | status | - | `/api/ids/service/status` |
| POST | service | stop | - | `/api/ids/service/stop` |
| POST | service | update_rules | `$wait=null` | `/api/ids/service/update_rules/{wait}` |
| POST | settings | add_policy | - | `/api/ids/settings/add_policy` |
| POST | settings | add_policy_rule | - | `/api/ids/settings/add_policy_rule` |
| POST | settings | add_user_rule | - | `/api/ids/settings/add_user_rule` |
| GET | settings | check_policy_rule | - | `/api/ids/settings/check_policy_rule` |
| POST | settings | del_policy | `$uuid` | `/api/ids/settings/del_policy/{uuid}` |
| POST | settings | del_policy_rule | `$uuid` | `/api/ids/settings/del_policy_rule/{uuid}` |
| POST | settings | del_user_rule | `$uuid` | `/api/ids/settings/del_user_rule/{uuid}` |
| GET | settings | get | - | `/api/ids/settings/get` |
| GET | settings | get_policy | `$uuid=null` | `/api/ids/settings/get_policy/{uuid}` |
| GET | settings | get_policy_rule | `$uuid=null` | `/api/ids/settings/get_policy_rule/{uuid}` |
| GET | settings | get_rule_info | `$sid=null` | `/api/ids/settings/get_rule_info/{sid}` |
| GET | settings | get_ruleset | `$id` | `/api/ids/settings/get_ruleset/{id}` |
| GET | settings | get_rulesetproperties | - | `/api/ids/settings/get_rulesetproperties` |
| GET | settings | get_user_rule | `$uuid=null` | `/api/ids/settings/get_user_rule/{uuid}` |
| GET | settings | list_rule_metadata | - | `/api/ids/settings/list_rule_metadata` |
| GET | settings | list_rulesets | - | `/api/ids/settings/list_rulesets` |
| POST | settings | search_installed_rules | - | `/api/ids/settings/search_installed_rules` |
| POST | settings | set | - | `/api/ids/settings/set` |
| POST | settings | set_policy | `$uuid` | `/api/ids/settings/set_policy/{uuid}` |
| POST | settings | set_policy_rule | `$uuid` | `/api/ids/settings/set_policy_rule/{uuid}` |
| POST | settings | set_rule | `$sid` | `/api/ids/settings/set_rule/{sid}` |
| POST | settings | set_ruleset | `$filename` | `/api/ids/settings/set_ruleset/{filename}` |
| POST | settings | set_rulesetproperties | - | `/api/ids/settings/set_rulesetproperties` |
| POST | settings | set_user_rule | `$uuid` | `/api/ids/settings/set_user_rule/{uuid}` |
| POST | settings | toggle_policy | `$uuid,$enabled=null` | `/api/ids/settings/toggle_policy/{uuid}/{enabled}` |
| POST | settings | toggle_policy_rule | `$uuid,$enabled=null` | `/api/ids/settings/toggle_policy_rule/{uuid}/{enabled}` |
| POST | settings | toggle_rule | `$sids,$enabled=null` | `/api/ids/settings/toggle_rule/{sids}/{enabled}` |
| POST | settings | toggle_ruleset | `$filenames,$enabled=null` | `/api/ids/settings/toggle_ruleset/{filenames}/{enabled}` |
| POST | settings | toggle_user_rule | `$uuid,$enabled=null` | `/api/ids/settings/toggle_user_rule/{uuid}/{enabled}` |

### Array Fields (Containers)

#### policy

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### rule

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### file

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### tag

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Interfaces

**Base URL**: `/api/interfaces/`

**Documentation**: https://docs.opnsense.org/development/api/core/interfaces.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Interfaces/Gif.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Interfaces/Gif.xml)

**Description**: Network interface configuration and management

### Statistics

- **Total Endpoints**: 63
- **Methods**: POST (40), GET (23)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | gif_settings | add_item | - | `/api/interfaces/gif_settings/add_item` |
| POST | gif_settings | del_item | `$uuid` | `/api/interfaces/gif_settings/del_item/{uuid}` |
| GET | gif_settings | get | - | `/api/interfaces/gif_settings/get` |
| GET | gif_settings | get_if_options | - | `/api/interfaces/gif_settings/get_if_options` |
| GET | gif_settings | get_item | `$uuid=null` | `/api/interfaces/gif_settings/get_item/{uuid}` |
| POST | gif_settings | reconfigure | - | `/api/interfaces/gif_settings/reconfigure` |
| POST | gif_settings | set | - | `/api/interfaces/gif_settings/set` |
| POST | gif_settings | set_item | `$uuid` | `/api/interfaces/gif_settings/set_item/{uuid}` |
| POST | gre_settings | add_item | - | `/api/interfaces/gre_settings/add_item` |
| POST | gre_settings | del_item | `$uuid` | `/api/interfaces/gre_settings/del_item/{uuid}` |
| GET | gre_settings | get | - | `/api/interfaces/gre_settings/get` |
| GET | gre_settings | get_if_options | - | `/api/interfaces/gre_settings/get_if_options` |
| GET | gre_settings | get_item | `$uuid=null` | `/api/interfaces/gre_settings/get_item/{uuid}` |
| POST | gre_settings | reconfigure | - | `/api/interfaces/gre_settings/reconfigure` |
| POST | gre_settings | set | - | `/api/interfaces/gre_settings/set` |
| POST | gre_settings | set_item | `$uuid` | `/api/interfaces/gre_settings/set_item/{uuid}` |
| POST | lagg_settings | add_item | - | `/api/interfaces/lagg_settings/add_item` |
| POST | lagg_settings | del_item | `$uuid` | `/api/interfaces/lagg_settings/del_item/{uuid}` |
| GET | lagg_settings | get | - | `/api/interfaces/lagg_settings/get` |
| GET | lagg_settings | get_item | `$uuid=null` | `/api/interfaces/lagg_settings/get_item/{uuid}` |
| POST | lagg_settings | reconfigure | - | `/api/interfaces/lagg_settings/reconfigure` |
| POST | lagg_settings | set | - | `/api/interfaces/lagg_settings/set` |
| POST | lagg_settings | set_item | `$uuid` | `/api/interfaces/lagg_settings/set_item/{uuid}` |
| POST | loopback_settings | add_item | - | `/api/interfaces/loopback_settings/add_item` |
| POST | loopback_settings | del_item | `$uuid` | `/api/interfaces/loopback_settings/del_item/{uuid}` |
| GET | loopback_settings | get | - | `/api/interfaces/loopback_settings/get` |
| GET | loopback_settings | get_item | `$uuid=null` | `/api/interfaces/loopback_settings/get_item/{uuid}` |
| POST | loopback_settings | reconfigure | - | `/api/interfaces/loopback_settings/reconfigure` |
| POST | loopback_settings | set | - | `/api/interfaces/loopback_settings/set` |
| POST | loopback_settings | set_item | `$uuid` | `/api/interfaces/loopback_settings/set_item/{uuid}` |
| POST | neighbor_settings | add_item | - | `/api/interfaces/neighbor_settings/add_item` |
| POST | neighbor_settings | del_item | `$uuid` | `/api/interfaces/neighbor_settings/del_item/{uuid}` |
| GET | neighbor_settings | get | - | `/api/interfaces/neighbor_settings/get` |
| GET | neighbor_settings | get_item | `$uuid=null` | `/api/interfaces/neighbor_settings/get_item/{uuid}` |
| POST | neighbor_settings | reconfigure | - | `/api/interfaces/neighbor_settings/reconfigure` |
| POST | neighbor_settings | set | - | `/api/interfaces/neighbor_settings/set` |
| POST | neighbor_settings | set_item | `$uuid` | `/api/interfaces/neighbor_settings/set_item/{uuid}` |
| GET | overview | export | - | `/api/interfaces/overview/export` |
| GET | overview | get_interface | `$if=null` | `/api/interfaces/overview/get_interface/{if}` |
| GET | overview | interfaces_info | `$details=false` | `/api/interfaces/overview/interfaces_info/{details}` |
| GET | overview | reload_interface | `$identifier=null` | `/api/interfaces/overview/reload_interface/{identifier}` |
| POST | vip_settings | add_item | - | `/api/interfaces/vip_settings/add_item` |
| POST | vip_settings | del_item | `$uuid` | `/api/interfaces/vip_settings/del_item/{uuid}` |
| GET | vip_settings | get | - | `/api/interfaces/vip_settings/get` |
| GET | vip_settings | get_item | `$uuid=null` | `/api/interfaces/vip_settings/get_item/{uuid}` |
| GET | vip_settings | get_unused_vhid | - | `/api/interfaces/vip_settings/get_unused_vhid` |
| POST | vip_settings | reconfigure | - | `/api/interfaces/vip_settings/reconfigure` |
| POST | vip_settings | set | - | `/api/interfaces/vip_settings/set` |
| POST | vip_settings | set_item | `$uuid` | `/api/interfaces/vip_settings/set_item/{uuid}` |
| POST | vlan_settings | add_item | - | `/api/interfaces/vlan_settings/add_item` |
| POST | vlan_settings | del_item | `$uuid` | `/api/interfaces/vlan_settings/del_item/{uuid}` |
| GET | vlan_settings | get | - | `/api/interfaces/vlan_settings/get` |
| GET | vlan_settings | get_item | `$uuid=null` | `/api/interfaces/vlan_settings/get_item/{uuid}` |
| POST | vlan_settings | reconfigure | - | `/api/interfaces/vlan_settings/reconfigure` |
| POST | vlan_settings | set | - | `/api/interfaces/vlan_settings/set` |
| POST | vlan_settings | set_item | `$uuid` | `/api/interfaces/vlan_settings/set_item/{uuid}` |
| POST | vxlan_settings | add_item | - | `/api/interfaces/vxlan_settings/add_item` |
| POST | vxlan_settings | del_item | `$uuid` | `/api/interfaces/vxlan_settings/del_item/{uuid}` |
| GET | vxlan_settings | get | - | `/api/interfaces/vxlan_settings/get` |
| GET | vxlan_settings | get_item | `$uuid=null` | `/api/interfaces/vxlan_settings/get_item/{uuid}` |
| POST | vxlan_settings | reconfigure | - | `/api/interfaces/vxlan_settings/reconfigure` |
| POST | vxlan_settings | set | - | `/api/interfaces/vxlan_settings/set` |
| POST | vxlan_settings | set_item | `$uuid` | `/api/interfaces/vxlan_settings/set_item/{uuid}` |

### Array Fields (Containers)

#### gif

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Ipsec

**Base URL**: `/api/ipsec/`

**Documentation**: https://docs.opnsense.org/development/api/core/ipsec.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/IPsec/Swanctl.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/IPsec/Swanctl.xml)

**Description**: IPsec VPN configuration and management

### Statistics

- **Total Endpoints**: 80
- **Methods**: POST (53), GET (27)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | connections | add_child | - | `/api/ipsec/connections/add_child` |
| POST | connections | add_connection | - | `/api/ipsec/connections/add_connection` |
| POST | connections | add_local | - | `/api/ipsec/connections/add_local` |
| POST | connections | add_remote | - | `/api/ipsec/connections/add_remote` |
| GET | connections | connection_exists | `$uuid` | `/api/ipsec/connections/connection_exists/{uuid}` |
| POST | connections | del_child | `$uuid` | `/api/ipsec/connections/del_child/{uuid}` |
| POST | connections | del_connection | `$uuid` | `/api/ipsec/connections/del_connection/{uuid}` |
| POST | connections | del_local | `$uuid` | `/api/ipsec/connections/del_local/{uuid}` |
| POST | connections | del_remote | `$uuid` | `/api/ipsec/connections/del_remote/{uuid}` |
| GET | connections | get | - | `/api/ipsec/connections/get` |
| GET | connections | get_child | `$uuid=null` | `/api/ipsec/connections/get_child/{uuid}` |
| GET | connections | get_connection | `$uuid=null` | `/api/ipsec/connections/get_connection/{uuid}` |
| GET | connections | get_local | `$uuid=null` | `/api/ipsec/connections/get_local/{uuid}` |
| GET | connections | get_remote | `$uuid=null` | `/api/ipsec/connections/get_remote/{uuid}` |
| GET | connections | is_enabled | - | `/api/ipsec/connections/is_enabled` |
| POST | connections | set | - | `/api/ipsec/connections/set` |
| POST | connections | set_child | `$uuid=null` | `/api/ipsec/connections/set_child/{uuid}` |
| POST | connections | set_connection | `$uuid=null` | `/api/ipsec/connections/set_connection/{uuid}` |
| POST | connections | set_local | `$uuid=null` | `/api/ipsec/connections/set_local/{uuid}` |
| POST | connections | set_remote | `$uuid=null` | `/api/ipsec/connections/set_remote/{uuid}` |
| GET | connections | swanctl | - | `/api/ipsec/connections/swanctl` |
| POST | connections | toggle | `$enabled=null` | `/api/ipsec/connections/toggle/{enabled}` |
| POST | connections | toggle_child | `$uuid,$enabled=null` | `/api/ipsec/connections/toggle_child/{uuid}/{enabled}` |
| POST | connections | toggle_connection | `$uuid,$enabled=null` | `/api/ipsec/connections/toggle_connection/{uuid}/{enabled}` |
| POST | connections | toggle_local | `$uuid,$enabled=null` | `/api/ipsec/connections/toggle_local/{uuid}/{enabled}` |
| POST | connections | toggle_remote | `$uuid,$enabled=null` | `/api/ipsec/connections/toggle_remote/{uuid}/{enabled}` |
| POST | key_pairs | add_item | - | `/api/ipsec/key_pairs/add_item` |
| POST | key_pairs | del_item | `$uuid` | `/api/ipsec/key_pairs/del_item/{uuid}` |
| GET | key_pairs | gen_key_pair | `$type,$size=null` | `/api/ipsec/key_pairs/gen_key_pair/{type}/{size}` |
| GET | key_pairs | get | - | `/api/ipsec/key_pairs/get` |
| GET | key_pairs | get_item | `$uuid=null` | `/api/ipsec/key_pairs/get_item/{uuid}` |
| POST | key_pairs | set | - | `/api/ipsec/key_pairs/set` |
| POST | key_pairs | set_item | `$uuid=null` | `/api/ipsec/key_pairs/set_item/{uuid}` |
| GET | leases | pools | - | `/api/ipsec/leases/pools` |
| GET | leases | search | - | `/api/ipsec/leases/search` |
| POST | legacy_subsystem | apply_config | - | `/api/ipsec/legacy_subsystem/apply_config` |
| GET | legacy_subsystem | status | - | `/api/ipsec/legacy_subsystem/status` |
| POST | manual_spd | add | - | `/api/ipsec/manual_spd/add` |
| POST | manual_spd | del | `$uuid` | `/api/ipsec/manual_spd/del/{uuid}` |
| GET | manual_spd | get | `$uuid=null` | `/api/ipsec/manual_spd/get/{uuid}` |
| POST | manual_spd | set | `$uuid=null` | `/api/ipsec/manual_spd/set/{uuid}` |
| POST | manual_spd | toggle | `$uuid,$enabled=null` | `/api/ipsec/manual_spd/toggle/{uuid}/{enabled}` |
| POST | pools | add | - | `/api/ipsec/pools/add` |
| POST | pools | del | `$uuid` | `/api/ipsec/pools/del/{uuid}` |
| GET | pools | get | `$uuid=null` | `/api/ipsec/pools/get/{uuid}` |
| POST | pools | set | `$uuid=null` | `/api/ipsec/pools/set/{uuid}` |
| POST | pools | toggle | `$uuid,$enabled=null` | `/api/ipsec/pools/toggle/{uuid}/{enabled}` |
| POST | pre_shared_keys | add_item | - | `/api/ipsec/pre_shared_keys/add_item` |
| POST | pre_shared_keys | del_item | `$uuid` | `/api/ipsec/pre_shared_keys/del_item/{uuid}` |
| GET | pre_shared_keys | get | - | `/api/ipsec/pre_shared_keys/get` |
| GET | pre_shared_keys | get_item | `$uuid=null` | `/api/ipsec/pre_shared_keys/get_item/{uuid}` |
| POST | pre_shared_keys | set | - | `/api/ipsec/pre_shared_keys/set` |
| POST | pre_shared_keys | set_item | `$uuid=null` | `/api/ipsec/pre_shared_keys/set_item/{uuid}` |
| POST | sad | delete | `$id` | `/api/ipsec/sad/delete/{id}` |
| GET | sad | search | - | `/api/ipsec/sad/search` |
| POST | service | reconfigure | - | `/api/ipsec/service/reconfigure` |
| POST | service | restart | - | `/api/ipsec/service/restart` |
| POST | service | start | - | `/api/ipsec/service/start` |
| GET | service | status | - | `/api/ipsec/service/status` |
| POST | service | stop | - | `/api/ipsec/service/stop` |
| POST | sessions | connect | `$id` | `/api/ipsec/sessions/connect/{id}` |
| POST | sessions | disconnect | `$id` | `/api/ipsec/sessions/disconnect/{id}` |
| GET | sessions | search_phase1 | - | `/api/ipsec/sessions/search_phase1` |
| GET | sessions | search_phase2 | - | `/api/ipsec/sessions/search_phase2` |
| GET | settings | get | - | `/api/ipsec/settings/get` |
| POST | settings | set | - | `/api/ipsec/settings/set` |
| POST | spd | delete | `$id` | `/api/ipsec/spd/delete/{id}` |
| GET | spd | search | - | `/api/ipsec/spd/search` |
| POST | tunnel | del_phase1 | `$ikeid` | `/api/ipsec/tunnel/del_phase1/{ikeid}` |
| POST | tunnel | del_phase2 | `$seqid` | `/api/ipsec/tunnel/del_phase2/{seqid}` |
| GET | tunnel | search_phase1 | - | `/api/ipsec/tunnel/search_phase1` |
| GET | tunnel | search_phase2 | - | `/api/ipsec/tunnel/search_phase2` |
| POST | tunnel | toggle | `$enabled=null` | `/api/ipsec/tunnel/toggle/{enabled}` |
| POST | tunnel | toggle_phase1 | `$ikeid,$enabled=null` | `/api/ipsec/tunnel/toggle_phase1/{ikeid}/{enabled}` |
| POST | tunnel | toggle_phase2 | `$seqid,$enabled=null` | `/api/ipsec/tunnel/toggle_phase2/{seqid}/{enabled}` |
| POST | vti | add | - | `/api/ipsec/vti/add` |
| POST | vti | del | `$uuid` | `/api/ipsec/vti/del/{uuid}` |
| GET | vti | get | `$uuid=null` | `/api/ipsec/vti/get/{uuid}` |
| POST | vti | set | `$uuid=null` | `/api/ipsec/vti/set/{uuid}` |
| POST | vti | toggle | `$uuid,$enabled=null` | `/api/ipsec/vti/toggle/{uuid}/{enabled}` |

### Array Fields (Containers)

#### local

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### remote

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### child

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### Pool

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Kea

**Base URL**: `/api/kea/`

**Documentation**: https://docs.opnsense.org/development/api/core/kea.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Kea/KeaCtrlAgent.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Kea/KeaCtrlAgent.xml)

**Description**: Kea DHCP server (modern DHCP implementation)

### Statistics

- **Total Endpoints**: 24
- **Methods**: GET (8), POST (16)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | ctrl_agent | get | - | `/api/kea/ctrl_agent/get` |
| POST | ctrl_agent | set | - | `/api/kea/ctrl_agent/set` |
| POST | dhcpv4 | add_peer | - | `/api/kea/dhcpv4/add_peer` |
| POST | dhcpv4 | add_reservation | - | `/api/kea/dhcpv4/add_reservation` |
| POST | dhcpv4 | add_subnet | - | `/api/kea/dhcpv4/add_subnet` |
| POST | dhcpv4 | del_peer | `$uuid` | `/api/kea/dhcpv4/del_peer/{uuid}` |
| POST | dhcpv4 | del_reservation | `$uuid` | `/api/kea/dhcpv4/del_reservation/{uuid}` |
| POST | dhcpv4 | del_subnet | `$uuid` | `/api/kea/dhcpv4/del_subnet/{uuid}` |
| GET | dhcpv4 | download_reservations | - | `/api/kea/dhcpv4/download_reservations` |
| GET | dhcpv4 | get | - | `/api/kea/dhcpv4/get` |
| GET | dhcpv4 | get_peer | `$uuid=null` | `/api/kea/dhcpv4/get_peer/{uuid}` |
| GET | dhcpv4 | get_reservation | `$uuid=null` | `/api/kea/dhcpv4/get_reservation/{uuid}` |
| GET | dhcpv4 | get_subnet | `$uuid=null` | `/api/kea/dhcpv4/get_subnet/{uuid}` |
| POST | dhcpv4 | set | - | `/api/kea/dhcpv4/set` |
| POST | dhcpv4 | set_peer | `$uuid` | `/api/kea/dhcpv4/set_peer/{uuid}` |
| POST | dhcpv4 | set_reservation | `$uuid` | `/api/kea/dhcpv4/set_reservation/{uuid}` |
| POST | dhcpv4 | set_subnet | `$uuid` | `/api/kea/dhcpv4/set_subnet/{uuid}` |
| POST | dhcpv4 | upload_reservations | - | `/api/kea/dhcpv4/upload_reservations` |
| GET | leases4 | search | - | `/api/kea/leases4/search` |
| POST | service | reconfigure | - | `/api/kea/service/reconfigure` |
| POST | service | restart | - | `/api/kea/service/restart` |
| POST | service | start | - | `/api/kea/service/start` |
| GET | service | status | - | `/api/kea/service/status` |
| POST | service | stop | - | `/api/kea/service/stop` |

---

## Monit

**Base URL**: `/api/monit/`

**Documentation**: https://docs.opnsense.org/development/api/core/monit.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Monit/Monit.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Monit/Monit.xml)

**Description**: Service monitoring and automatic recovery

### Statistics

- **Total Endpoints**: 25
- **Methods**: POST (17), GET (8)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | check | - | `/api/monit/service/check` |
| POST | service | reconfigure | - | `/api/monit/service/reconfigure` |
| POST | service | restart | - | `/api/monit/service/restart` |
| POST | service | start | - | `/api/monit/service/start` |
| GET | service | status | - | `/api/monit/service/status` |
| POST | service | stop | - | `/api/monit/service/stop` |
| POST | settings | add_alert | - | `/api/monit/settings/add_alert` |
| POST | settings | add_service | - | `/api/monit/settings/add_service` |
| POST | settings | add_test | - | `/api/monit/settings/add_test` |
| POST | settings | del_alert | `$uuid` | `/api/monit/settings/del_alert/{uuid}` |
| POST | settings | del_service | `$uuid` | `/api/monit/settings/del_service/{uuid}` |
| POST | settings | del_test | `$uuid` | `/api/monit/settings/del_test/{uuid}` |
| GET | settings | dirty | - | `/api/monit/settings/dirty` |
| GET | settings | get | - | `/api/monit/settings/get` |
| GET | settings | get_alert | `$uuid=null` | `/api/monit/settings/get_alert/{uuid}` |
| GET | settings | get_general | - | `/api/monit/settings/get_general` |
| GET | settings | get_service | `$uuid=null` | `/api/monit/settings/get_service/{uuid}` |
| GET | settings | get_test | `$uuid=null` | `/api/monit/settings/get_test/{uuid}` |
| POST | settings | set | - | `/api/monit/settings/set` |
| POST | settings | set_alert | `$uuid` | `/api/monit/settings/set_alert/{uuid}` |
| POST | settings | set_service | `$uuid` | `/api/monit/settings/set_service/{uuid}` |
| POST | settings | set_test | `$uuid` | `/api/monit/settings/set_test/{uuid}` |
| POST | settings | toggle_alert | `$uuid,$enabled=null` | `/api/monit/settings/toggle_alert/{uuid}/{enabled}` |
| POST | settings | toggle_service | `$uuid,$enabled=null` | `/api/monit/settings/toggle_service/{uuid}/{enabled}` |
| GET | status | get | `$format=xml` | `/api/monit/status/get/{format}` |

### Array Fields (Containers)

#### alert

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### service

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### test

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Openvpn

**Base URL**: `/api/openvpn/`

**Documentation**: https://docs.opnsense.org/development/api/core/openvpn.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/OpenVPN/OpenVPN.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/OpenVPN/OpenVPN.xml)

**Description**: OpenVPN server and client configuration

### Statistics

- **Total Endpoints**: 28
- **Methods**: POST (19), GET (9)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | client_overwrites | add | - | `/api/openvpn/client_overwrites/add` |
| POST | client_overwrites | del | `$uuid` | `/api/openvpn/client_overwrites/del/{uuid}` |
| GET | client_overwrites | get | `$uuid=null` | `/api/openvpn/client_overwrites/get/{uuid}` |
| POST | client_overwrites | set | `$uuid=null` | `/api/openvpn/client_overwrites/set/{uuid}` |
| POST | client_overwrites | toggle | `$uuid,$enabled=null` | `/api/openvpn/client_overwrites/toggle/{uuid}/{enabled}` |
| GET | export | accounts | `$vpnid=null` | `/api/openvpn/export/accounts/{vpnid}` |
| POST | export | download | `$vpnid,$certref=null` | `/api/openvpn/export/download/{vpnid}/{certref}` |
| GET | export | providers | - | `/api/openvpn/export/providers` |
| POST | export | store_presets | `$vpnid` | `/api/openvpn/export/store_presets/{vpnid}` |
| GET | export | templates | - | `/api/openvpn/export/templates` |
| POST | export | validate_presets | `$vpnid` | `/api/openvpn/export/validate_presets/{vpnid}` |
| POST | instances | add | - | `/api/openvpn/instances/add` |
| POST | instances | add_static_key | - | `/api/openvpn/instances/add_static_key` |
| POST | instances | del | `$uuid` | `/api/openvpn/instances/del/{uuid}` |
| POST | instances | del_static_key | `$uuid` | `/api/openvpn/instances/del_static_key/{uuid}` |
| GET | instances | gen_key | `$type=secret` | `/api/openvpn/instances/gen_key/{type}` |
| GET | instances | get | `$uuid=null` | `/api/openvpn/instances/get/{uuid}` |
| GET | instances | get_static_key | `$uuid=null` | `/api/openvpn/instances/get_static_key/{uuid}` |
| POST | instances | set | `$uuid=null` | `/api/openvpn/instances/set/{uuid}` |
| POST | instances | set_static_key | `$uuid=null` | `/api/openvpn/instances/set_static_key/{uuid}` |
| POST | instances | toggle | `$uuid,$enabled=null` | `/api/openvpn/instances/toggle/{uuid}/{enabled}` |
| POST | service | kill_session | - | `/api/openvpn/service/kill_session` |
| POST | service | reconfigure | - | `/api/openvpn/service/reconfigure` |
| POST | service | restart_service | `$id=null` | `/api/openvpn/service/restart_service/{id}` |
| GET | service | search_routes | - | `/api/openvpn/service/search_routes` |
| GET | service | search_sessions | - | `/api/openvpn/service/search_sessions` |
| POST | service | start_service | `$id=null` | `/api/openvpn/service/start_service/{id}` |
| POST | service | stop_service | `$id=null` | `/api/openvpn/service/stop_service/{id}` |

### Array Fields (Containers)

#### Overwrite

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### StaticKey

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Routes

**Base URL**: `/api/routes/`

**Documentation**: https://docs.opnsense.org/development/api/core/routes.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Routes/Route.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Routes/Route.xml)

**Description**: Static route configuration

### Statistics

- **Total Endpoints**: 9
- **Methods**: GET (3), POST (6)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | gateway | status | - | `/api/routes/gateway/status` |
| POST | routes | addroute | - | `/api/routes/routes/addroute` |
| POST | routes | delroute | `$uuid` | `/api/routes/routes/delroute/{uuid}` |
| GET | routes | get | - | `/api/routes/routes/get` |
| GET | routes | getroute | `$uuid=null` | `/api/routes/routes/getroute/{uuid}` |
| POST | routes | reconfigure | - | `/api/routes/routes/reconfigure` |
| POST | routes | set | - | `/api/routes/routes/set` |
| POST | routes | setroute | `$uuid` | `/api/routes/routes/setroute/{uuid}` |
| POST | routes | toggleroute | `$uuid,$disabled=null` | `/api/routes/routes/toggleroute/{uuid}/{disabled}` |

### Array Fields (Containers)

#### route

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Routing

**Base URL**: `/api/routing/`

**Documentation**: https://docs.opnsense.org/development/api/core/routing.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Routing/Gateways.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Routing/Gateways.xml)

**Description**: Dynamic routing protocols and gateways

### Statistics

- **Total Endpoints**: 9
- **Methods**: POST (6), GET (3)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | settings | add_gateway | - | `/api/routing/settings/add_gateway` |
| POST | settings | del_gateway | `$uuid` | `/api/routing/settings/del_gateway/{uuid}` |
| GET | settings | get | - | `/api/routing/settings/get` |
| GET | settings | get_gateway | `$uuid=null` | `/api/routing/settings/get_gateway/{uuid}` |
| POST | settings | reconfigure | - | `/api/routing/settings/reconfigure` |
| GET | settings | search_gateway | - | `/api/routing/settings/search_gateway` |
| POST | settings | set | - | `/api/routing/settings/set` |
| POST | settings | set_gateway | `$uuid` | `/api/routing/settings/set_gateway/{uuid}` |
| POST | settings | toggle_gateway | `$uuid,$enabled=null` | `/api/routing/settings/toggle_gateway/{uuid}/{enabled}` |

---

## Syslog

**Base URL**: `/api/syslog/`

**Documentation**: https://docs.opnsense.org/development/api/core/syslog.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Syslog/Syslog.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Syslog/Syslog.xml)

**Description**: System logging configuration

### Statistics

- **Total Endpoints**: 14
- **Methods**: POST (10), GET (4)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | reconfigure | - | `/api/syslog/service/reconfigure` |
| POST | service | reset | - | `/api/syslog/service/reset` |
| POST | service | restart | - | `/api/syslog/service/restart` |
| POST | service | start | - | `/api/syslog/service/start` |
| GET | service | stats | - | `/api/syslog/service/stats` |
| GET | service | status | - | `/api/syslog/service/status` |
| POST | service | stop | - | `/api/syslog/service/stop` |
| POST | settings | add_destination | - | `/api/syslog/settings/add_destination` |
| POST | settings | del_destination | `$uuid` | `/api/syslog/settings/del_destination/{uuid}` |
| GET | settings | get | - | `/api/syslog/settings/get` |
| GET | settings | get_destination | `$uuid=null` | `/api/syslog/settings/get_destination/{uuid}` |
| POST | settings | set | - | `/api/syslog/settings/set` |
| POST | settings | set_destination | `$uuid` | `/api/syslog/settings/set_destination/{uuid}` |
| POST | settings | toggle_destination | `$uuid,$enabled=null` | `/api/syslog/settings/toggle_destination/{uuid}/{enabled}` |

### Array Fields (Containers)

#### destination

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Trafficshaper

**Base URL**: `/api/trafficshaper/`

**Documentation**: https://docs.opnsense.org/development/api/core/trafficshaper.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/TrafficShaper/TrafficShaper.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/TrafficShaper/TrafficShaper.xml)

**Description**: Traffic shaping and QoS management

### Statistics

- **Total Endpoints**: 20
- **Methods**: POST (15), GET (5)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| POST | service | flushreload | - | `/api/trafficshaper/service/flushreload` |
| POST | service | reconfigure | - | `/api/trafficshaper/service/reconfigure` |
| GET | service | statistics | - | `/api/trafficshaper/service/statistics` |
| POST | settings | add_pipe | - | `/api/trafficshaper/settings/add_pipe` |
| POST | settings | add_queue | - | `/api/trafficshaper/settings/add_queue` |
| POST | settings | add_rule | - | `/api/trafficshaper/settings/add_rule` |
| POST | settings | del_pipe | `$uuid` | `/api/trafficshaper/settings/del_pipe/{uuid}` |
| POST | settings | del_queue | `$uuid` | `/api/trafficshaper/settings/del_queue/{uuid}` |
| POST | settings | del_rule | `$uuid` | `/api/trafficshaper/settings/del_rule/{uuid}` |
| GET | settings | get | - | `/api/trafficshaper/settings/get` |
| GET | settings | get_pipe | `$uuid=null` | `/api/trafficshaper/settings/get_pipe/{uuid}` |
| GET | settings | get_queue | `$uuid=null` | `/api/trafficshaper/settings/get_queue/{uuid}` |
| GET | settings | get_rule | `$uuid=null` | `/api/trafficshaper/settings/get_rule/{uuid}` |
| POST | settings | set | - | `/api/trafficshaper/settings/set` |
| POST | settings | set_pipe | `$uuid` | `/api/trafficshaper/settings/set_pipe/{uuid}` |
| POST | settings | set_queue | `$uuid` | `/api/trafficshaper/settings/set_queue/{uuid}` |
| POST | settings | set_rule | `$uuid` | `/api/trafficshaper/settings/set_rule/{uuid}` |
| POST | settings | toggle_pipe | `$uuid,$enabled=null` | `/api/trafficshaper/settings/toggle_pipe/{uuid}/{enabled}` |
| POST | settings | toggle_queue | `$uuid,$enabled=null` | `/api/trafficshaper/settings/toggle_queue/{uuid}/{enabled}` |
| POST | settings | toggle_rule | `$uuid,$enabled=null` | `/api/trafficshaper/settings/toggle_rule/{uuid}/{enabled}` |

### Array Fields (Containers)

#### pipe

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### queue

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### rule

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Trust

**Base URL**: `/api/trust/`

**Documentation**: https://docs.opnsense.org/development/api/core/trust.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Trust/Ca.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Trust/Ca.xml)

**Description**: Certificate authority and certificate management

### Statistics

- **Total Endpoints**: 25
- **Methods**: GET (14), POST (11)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | ca | ca_info | `$caref` | `/api/trust/ca/ca_info/{caref}` |
| GET | ca | ca_list | - | `/api/trust/ca/ca_list` |
| POST | ca | del | `$uuid` | `/api/trust/ca/del/{uuid}` |
| POST | ca | generate_file | `$uuid=null,$type=crt` | `/api/trust/ca/generate_file/{uuid}/{type}` |
| GET | ca | get | - | `/api/trust/ca/get` |
| GET | ca | raw_dump | `$uuid` | `/api/trust/ca/raw_dump/{uuid}` |
| POST | ca | set | `$uuid=null` | `/api/trust/ca/set/{uuid}` |
| POST | cert | add | - | `/api/trust/cert/add` |
| GET | cert | ca_info | `$caref=null` | `/api/trust/cert/ca_info/{caref}` |
| GET | cert | ca_list | - | `/api/trust/cert/ca_list` |
| POST | cert | del | `$uuid` | `/api/trust/cert/del/{uuid}` |
| POST | cert | generate_file | `$uuid=null,$type=crt` | `/api/trust/cert/generate_file/{uuid}/{type}` |
| GET | cert | get | `$uuid=null` | `/api/trust/cert/get/{uuid}` |
| GET | cert | raw_dump | `$uuid` | `/api/trust/cert/raw_dump/{uuid}` |
| POST | cert | set | `$uuid=null` | `/api/trust/cert/set/{uuid}` |
| GET | cert | user_list | - | `/api/trust/cert/user_list` |
| POST | crl | del | `$caref` | `/api/trust/crl/del/{caref}` |
| GET | crl | get | `$caref` | `/api/trust/crl/get/{caref}` |
| GET | crl | get_ocsp_info_data | `$caref` | `/api/trust/crl/get_ocsp_info_data/{caref}` |
| GET | crl | raw_dump | `$caref` | `/api/trust/crl/raw_dump/{caref}` |
| GET | crl | search | - | `/api/trust/crl/search` |
| POST | crl | set | `$caref` | `/api/trust/crl/set/{caref}` |
| GET | settings | get | - | `/api/trust/settings/get` |
| POST | settings | reconfigure | - | `/api/trust/settings/reconfigure` |
| POST | settings | set | - | `/api/trust/settings/set` |

---

## Unbound

**Base URL**: `/api/unbound/`

**Documentation**: https://docs.opnsense.org/development/api/core/unbound.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Unbound/Unbound.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Unbound/Unbound.xml)

**Description**: Unbound DNS resolver configuration

### Statistics

- **Total Endpoints**: 42
- **Methods**: GET (20), POST (22)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | diagnostics | dumpcache | - | `/api/unbound/diagnostics/dumpcache` |
| GET | diagnostics | dumpinfra | - | `/api/unbound/diagnostics/dumpinfra` |
| GET | diagnostics | listinsecure | - | `/api/unbound/diagnostics/listinsecure` |
| GET | diagnostics | listlocaldata | - | `/api/unbound/diagnostics/listlocaldata` |
| GET | diagnostics | listlocalzones | - | `/api/unbound/diagnostics/listlocalzones` |
| GET | diagnostics | stats | - | `/api/unbound/diagnostics/stats` |
| GET | overview | _rolling | `$timeperiod,$clients=0` | `/api/unbound/overview/_rolling/{timeperiod}/{clients}` |
| GET | overview | is_block_list_enabled | - | `/api/unbound/overview/is_block_list_enabled` |
| GET | overview | is_enabled | - | `/api/unbound/overview/is_enabled` |
| GET | overview | search_queries | - | `/api/unbound/overview/search_queries` |
| GET | overview | totals | `$maximum` | `/api/unbound/overview/totals/{maximum}` |
| GET | service | dnsbl | - | `/api/unbound/service/dnsbl` |
| POST | service | reconfigure | - | `/api/unbound/service/reconfigure` |
| GET | service | reconfigure_general | - | `/api/unbound/service/reconfigure_general` |
| POST | service | restart | - | `/api/unbound/service/restart` |
| POST | service | start | - | `/api/unbound/service/start` |
| GET | service | status | - | `/api/unbound/service/status` |
| POST | service | stop | - | `/api/unbound/service/stop` |
| POST | settings | add_acl | - | `/api/unbound/settings/add_acl` |
| POST | settings | add_forward | - | `/api/unbound/settings/add_forward` |
| POST | settings | add_host_alias | - | `/api/unbound/settings/add_host_alias` |
| POST | settings | add_host_override | - | `/api/unbound/settings/add_host_override` |
| POST | settings | del_acl | `$uuid` | `/api/unbound/settings/del_acl/{uuid}` |
| POST | settings | del_forward | `$uuid` | `/api/unbound/settings/del_forward/{uuid}` |
| POST | settings | del_host_alias | `$uuid` | `/api/unbound/settings/del_host_alias/{uuid}` |
| POST | settings | del_host_override | `$uuid` | `/api/unbound/settings/del_host_override/{uuid}` |
| GET | settings | get | - | `/api/unbound/settings/get` |
| GET | settings | get_acl | `$uuid=null` | `/api/unbound/settings/get_acl/{uuid}` |
| GET | settings | get_forward | `$uuid=null` | `/api/unbound/settings/get_forward/{uuid}` |
| GET | settings | get_host_alias | `$uuid=null` | `/api/unbound/settings/get_host_alias/{uuid}` |
| GET | settings | get_host_override | `$uuid=null` | `/api/unbound/settings/get_host_override/{uuid}` |
| GET | settings | get_nameservers | - | `/api/unbound/settings/get_nameservers` |
| POST | settings | set | - | `/api/unbound/settings/set` |
| POST | settings | set_acl | `$uuid` | `/api/unbound/settings/set_acl/{uuid}` |
| POST | settings | set_forward | `$uuid` | `/api/unbound/settings/set_forward/{uuid}` |
| POST | settings | set_host_alias | `$uuid` | `/api/unbound/settings/set_host_alias/{uuid}` |
| POST | settings | set_host_override | `$uuid` | `/api/unbound/settings/set_host_override/{uuid}` |
| POST | settings | toggle_acl | `$uuid,$enabled=null` | `/api/unbound/settings/toggle_acl/{uuid}/{enabled}` |
| POST | settings | toggle_forward | `$uuid,$enabled=null` | `/api/unbound/settings/toggle_forward/{uuid}/{enabled}` |
| POST | settings | toggle_host_alias | `$uuid,$enabled=null` | `/api/unbound/settings/toggle_host_alias/{uuid}/{enabled}` |
| POST | settings | toggle_host_override | `$uuid,$enabled=null` | `/api/unbound/settings/toggle_host_override/{uuid}/{enabled}` |
| POST | settings | update_blocklist | - | `/api/unbound/settings/update_blocklist` |

### Array Fields (Containers)

#### acl

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### dot

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### host

| Field | Type | Required | Description |
|-------|------|----------|-------------|

#### alias

| Field | Type | Required | Description |
|-------|------|----------|-------------|

---

## Wireguard

**Base URL**: `/api/wireguard/`

**Documentation**: https://docs.opnsense.org/development/api/core/wireguard.html

**Model XML**: [https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Wireguard/Client.xml](https://github.com/opnsense/core/blob/master/src/opnsense/mvc/app/models/OPNsense/Wireguard/Client.xml)

**Description**: WireGuard VPN configuration

### Statistics

- **Total Endpoints**: 28
- **Methods**: GET (13), POST (15)

### Endpoints

| Method | Controller | Command | Parameters | Full URL |
|--------|------------|---------|------------|----------|
| GET | client | add_client | - | `/api/wireguard/client/add_client` |
| POST | client | add_client_builder | - | `/api/wireguard/client/add_client_builder` |
| POST | client | del_client | `$uuid` | `/api/wireguard/client/del_client/{uuid}` |
| GET | client | get | - | `/api/wireguard/client/get` |
| GET | client | get_client | `$uuid=null` | `/api/wireguard/client/get_client/{uuid}` |
| GET | client | get_client_builder | - | `/api/wireguard/client/get_client_builder` |
| GET | client | get_server_info | `$uuid=null` | `/api/wireguard/client/get_server_info/{uuid}` |
| GET | client | list_servers | - | `/api/wireguard/client/list_servers` |
| GET | client | psk | - | `/api/wireguard/client/psk` |
| POST | client | set | - | `/api/wireguard/client/set` |
| POST | client | set_client | `$uuid` | `/api/wireguard/client/set_client/{uuid}` |
| POST | client | toggle_client | `$uuid` | `/api/wireguard/client/toggle_client/{uuid}` |
| GET | general | get | - | `/api/wireguard/general/get` |
| POST | general | set | - | `/api/wireguard/general/set` |
| POST | server | add_server | `$uuid=null` | `/api/wireguard/server/add_server/{uuid}` |
| POST | server | del_server | `$uuid` | `/api/wireguard/server/del_server/{uuid}` |
| GET | server | get | - | `/api/wireguard/server/get` |
| GET | server | get_server | `$uuid=null` | `/api/wireguard/server/get_server/{uuid}` |
| GET | server | key_pair | - | `/api/wireguard/server/key_pair` |
| POST | server | set | - | `/api/wireguard/server/set` |
| POST | server | set_server | `$uuid=null` | `/api/wireguard/server/set_server/{uuid}` |
| POST | server | toggle_server | `$uuid` | `/api/wireguard/server/toggle_server/{uuid}` |
| POST | service | reconfigure | - | `/api/wireguard/service/reconfigure` |
| POST | service | restart | - | `/api/wireguard/service/restart` |
| GET | service | show | - | `/api/wireguard/service/show` |
| POST | service | start | - | `/api/wireguard/service/start` |
| GET | service | status | - | `/api/wireguard/service/status` |
| POST | service | stop | - | `/api/wireguard/service/stop` |

---

## Notes

- All API endpoints require authentication using API key and secret
- Core modules provide essential OPNsense functionality
- Base URL format: `/api/{module}/{controller}/{command}`
- Parameters in URLs are denoted with `{parameter}` syntax
- For detailed usage examples, refer to the official OPNsense documentation

## Authentication

All API requests must include authentication credentials:
- **API Key**: Generated in System → Access → Users
- **API Secret**: Provided when creating the API key
- **Method**: Basic Authentication (key:secret)
