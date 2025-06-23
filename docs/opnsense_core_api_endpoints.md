# OPNsense Core API Endpoints

Base URL: `https://10.0.1.1/api`

## Authentication
All endpoints require HTTP Basic Authentication using API key/secret pairs.

## Core Module Endpoints

### Backup
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/core/backup/backups/{host}` | host |
| POST | `/core/backup/delete_backup/{backup}` | backup |
| POST | `/core/backup/diff/{host}/{backup1}/{backup2}` | host, backup1, backup2 |
| GET | `/core/backup/download/{host}/{backup?}` | host, backup (optional) |
| GET | `/core/backup/providers` | - |
| POST | `/core/backup/revert_backup/{backup}` | backup |

### Dashboard
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/core/dashboard/get_dashboard` | - |
| GET | `/core/dashboard/picture` | - |
| GET | `/core/dashboard/product_info_feed` | - |
| POST | `/core/dashboard/restore_defaults` | - |
| POST | `/core/dashboard/save_widgets` | - |

### HA Sync
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/core/hasync/get` | - |
| POST | `/core/hasync/reconfigure` | - |
| POST | `/core/hasync/set` | - |

### HA Sync Status
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/core/hasync_status/remote_service/{action}/{service}/{service_id}` | action, service, service_id |
| POST | `/core/hasync_status/restart/{service?}/{service_id?}` | service (optional), service_id (optional) |
| POST | `/core/hasync_status/restart_all/{service?}/{service_id?}` | service (optional), service_id (optional) |
| GET | `/core/hasync_status/services` | - |
| POST | `/core/hasync_status/start/{service?}/{service_id?}` | service (optional), service_id (optional) |
| POST | `/core/hasync_status/stop/{service?}/{service_id?}` | service (optional), service_id (optional) |
| GET | `/core/hasync_status/version` | - |

### Menu
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/core/menu/search` | - |
| GET | `/core/menu/tree` | - |

### Service
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/core/service/restart/{name}/{id?}` | name, id (optional) |
| POST | `/core/service/search` | - |
| POST | `/core/service/start/{name}/{id?}` | name, id (optional) |
| POST | `/core/service/stop/{name}/{id?}` | name, id (optional) |

### Snapshots
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/core/snapshots/activate/{uuid}` | uuid |
| POST | `/core/snapshots/add` | - |
| POST | `/core/snapshots/del/{uuid}` | uuid |
| GET | `/core/snapshots/get/{uuid?}` | uuid (optional) |
| GET | `/core/snapshots/is_supported` | - |
| POST | `/core/snapshots/search` | - |
| POST | `/core/snapshots/set/{uuid}` | uuid |

### System
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/core/system/dismiss_status` | - |
| POST | `/core/system/halt` | - |
| POST | `/core/system/reboot` | - |
| GET | `/core/system/status` | - |

### Tunables
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/core/tunables/add_item` | - |
| POST | `/core/tunables/del_item/{uuid}` | uuid |
| GET | `/core/tunables/get` | - |
| GET | `/core/tunables/get_item/{uuid?}` | uuid (optional) |
| POST | `/core/tunables/reconfigure` | - |
| POST | `/core/tunables/reset` | - |
| POST | `/core/tunables/search_item` | - |
| POST | `/core/tunables/set` | - |
| POST | `/core/tunables/set_item/{uuid}` | uuid |

## Firmware Module Endpoints

### Firmware Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/core/firmware/audit` | - |
| POST | `/core/firmware/changelog/{version}` | version |
| POST | `/core/firmware/check` | - |
| GET | `/core/firmware/connection` | - |
| GET | `/core/firmware/get` | - |
| GET | `/core/firmware/getOptions` | - |
| GET | `/core/firmware/health` | - |
| GET | `/core/firmware/info` | - |
| GET | `/core/firmware/log/{clear}` | clear |
| POST | `/core/firmware/poweroff` | - |
| POST | `/core/firmware/reboot` | - |
| POST | `/core/firmware/resyncPlugins` | - |
| GET | `/core/firmware/running` | - |
| POST | `/core/firmware/set` | - |
| GET | `/core/firmware/status` | - |
| POST | `/core/firmware/syncPlugins` | - |
| POST | `/core/firmware/update` | - |
| POST | `/core/firmware/upgrade` | - |
| GET | `/core/firmware/upgradestatus` | - |

### Package Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/core/firmware/details/{pkg_name}` | pkg_name |
| POST | `/core/firmware/install/{pkg_name}` | pkg_name |
| GET | `/core/firmware/license/{pkg_name}` | pkg_name |
| POST | `/core/firmware/lock/{pkg_name}` | pkg_name |
| POST | `/core/firmware/remove/{pkg_name}` | pkg_name |
| POST | `/core/firmware/reinstall/{pkg_name}` | pkg_name |
| POST | `/core/firmware/unlock/{pkg_name}` | pkg_name |

## Firewall Module Endpoints

### Alias Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/firewall/alias/add_item` | - |
| POST | `/firewall/alias/del_item/{uuid}` | uuid |
| GET | `/firewall/alias/export` | - |
| GET | `/firewall/alias/get` | - |
| GET | `/firewall/alias/get_alias_uuid/{name}` | name |
| GET | `/firewall/alias/get_geoip` | - |
| GET | `/firewall/alias/get_item/{uuid?}` | uuid (optional) |
| GET | `/firewall/alias/get_table_size` | - |
| POST | `/firewall/alias/import` | - |
| GET | `/firewall/alias/list_categories` | - |
| GET | `/firewall/alias/list_countries` | - |
| GET | `/firewall/alias/list_network_aliases` | - |
| GET | `/firewall/alias/list_user_groups` | - |
| POST | `/firewall/alias/reconfigure` | - |
| POST | `/firewall/alias/search_item` | - |
| POST | `/firewall/alias/set` | - |
| POST | `/firewall/alias/set_item/{uuid}` | uuid |
| POST | `/firewall/alias/toggle_item/{uuid}/{enabled?}` | uuid, enabled (optional) |

### Alias Utilities
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/firewall/alias_util/add/{alias}` | alias |
| GET | `/firewall/alias_util/aliases` | - |
| POST | `/firewall/alias_util/delete/{alias}` | alias |
| GET | `/firewall/alias_util/find_references` | - |
| POST | `/firewall/alias_util/flush/{alias}` | alias |
| GET | `/firewall/alias_util/list/{alias}` | alias |
| POST | `/firewall/alias_util/update_bogons` | - |

### Category Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/firewall/category/add_item` | - |
| POST | `/firewall/category/del_item/{uuid}` | uuid |
| GET | `/firewall/category/get` | - |
| GET | `/firewall/category/get_item/{uuid?}` | uuid (optional) |
| POST | `/firewall/category/search_item/{add_empty?}` | add_empty (optional, default: 0) |
| POST | `/firewall/category/set` | - |
| POST | `/firewall/category/set_item/{uuid}` | uuid |

### Filter Base
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/firewall/filter_base/apply/{rollback_revision?}` | rollback_revision (optional) |
| POST | `/firewall/filter_base/cancel_rollback/{rollback_revision}` | rollback_revision |
| GET | `/firewall/filter_base/get` | - |
| GET | `/firewall/filter_base/list_categories` | - |
| GET | `/firewall/filter_base/list_network_select_options` | - |
| POST | `/firewall/filter_base/revert/{revision}` | revision |
| POST | `/firewall/filter_base/savepoint` | - |
| POST | `/firewall/filter_base/set` | - |

### Filter Rules
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/firewall/filter/add_rule` | - |
| POST | `/firewall/filter/del_rule/{uuid}` | uuid |
| GET | `/firewall/filter/get_interface_list` | - |
| GET | `/firewall/filter/get_rule/{uuid?}` | uuid (optional) |
| POST | `/firewall/filter/move_rule_before/{selected_uuid}/{target_uuid}` | selected_uuid, target_uuid |
| POST | `/firewall/filter/search_rule` | - |
| POST | `/firewall/filter/set_rule/{uuid}` | uuid |
| POST | `/firewall/filter/toggle_rule/{uuid}/{enabled?}` | uuid, enabled (optional) |

### Filter Utilities
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/firewall/filter_util/rule_stats` | - |

### Group Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/firewall/group/add_item` | - |
| POST | `/firewall/group/del_item/{uuid}` | uuid |
| GET | `/firewall/group/get` | - |
| GET | `/firewall/group/get_item/{uuid?}` | uuid (optional) |
| POST | `/firewall/group/reconfigure` | - |
| POST | `/firewall/group/search_item` | - |
| POST | `/firewall/group/set` | - |
| POST | `/firewall/group/set_item/{uuid}` | uuid |

### NPT Rules
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/firewall/npt/add_rule` | - |
| POST | `/firewall/npt/del_rule/{uuid}` | uuid |
| GET | `/firewall/npt/get_rule/{uuid?}` | uuid (optional) |
| POST | `/firewall/npt/search_rule` | - |
| POST | `/firewall/npt/set_rule/{uuid}` | uuid |
| POST | `/firewall/npt/toggle_rule/{uuid}/{enabled?}` | uuid, enabled (optional) |

### One-to-One NAT
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/firewall/one_to_one/add_rule` | - |
| POST | `/firewall/one_to_one/del_rule/{uuid}` | uuid |
| GET | `/firewall/one_to_one/get_rule/{uuid?}` | uuid (optional) |
| POST | `/firewall/one_to_one/search_rule` | - |
| POST | `/firewall/one_to_one/set_rule/{uuid}` | uuid |
| POST | `/firewall/one_to_one/toggle_rule/{uuid}/{enabled?}` | uuid, enabled (optional) |

### Source NAT
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/firewall/source_nat/add_rule` | - |
| POST | `/firewall/source_nat/del_rule/{uuid}` | uuid |
| GET | `/firewall/source_nat/get_rule/{uuid?}` | uuid (optional) |
| POST | `/firewall/source_nat/search_rule` | - |
| POST | `/firewall/source_nat/set_rule/{uuid}` | uuid |
| POST | `/firewall/source_nat/toggle_rule/{uuid}/{enabled?}` | uuid, enabled (optional) |

## Diagnostics Module Endpoints

### Activity
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/diagnostics/activity/get_activity` | - |

### CPU Usage
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/diagnostics/cpu_usage/get_cpu_type` | - |
| GET | `/diagnostics/cpu_usage/stream` | - |

### DNS
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/diagnostics/dns/reverse_lookup` | - |

### DNS Diagnostics
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/diagnostics/dns_diagnostics/get` | - |
| POST | `/diagnostics/dns_diagnostics/set` | - |

### Firewall Diagnostics
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/diagnostics/firewall/del_state/{stateid}/{creatorid}` | stateid, creatorid |
| POST | `/diagnostics/firewall/flush_sources` | - |
| POST | `/diagnostics/firewall/flush_states` | - |
| POST | `/diagnostics/firewall/kill_states` | - |
| GET | `/diagnostics/firewall/list_rule_ids` | - |
| GET | `/diagnostics/firewall/log` | - |
| GET | `/diagnostics/firewall/log_filters` | - |
| GET | `/diagnostics/firewall/pf_states` | - |
| GET | `/diagnostics/firewall/pf_statistics/{section?}` | section (optional) |
| GET | `/diagnostics/firewall/query_pf_top` | - |
| POST | `/diagnostics/firewall/query_states` | - |
| GET | `/diagnostics/firewall/stats` | - |
| GET | `/diagnostics/firewall/stream_log` | - |

### Interface Diagnostics
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/diagnostics/interface/carp_status/{status}` | status |
| POST | `/diagnostics/interface/del_route` | - |
| POST | `/diagnostics/interface/flush_arp` | - |
| GET | `/diagnostics/interface/get_arp` | - |
| GET | `/diagnostics/interface/get_bpf_statistics` | - |
| GET | `/diagnostics/interface/get_interface_config` | - |
| GET | `/diagnostics/interface/get_interface_names` | - |
| GET | `/diagnostics/interface/get_interface_statistics` | - |
| GET | `/diagnostics/interface/get_memory_statistics` | - |
| GET | `/diagnostics/interface/get_ndp` | - |
| GET | `/diagnostics/interface/get_netisr_statistics` | - |
| GET | `/diagnostics/interface/get_pfsync_nodes` | - |
| GET | `/diagnostics/interface/get_protocol_statistics` | - |
| GET | `/diagnostics/interface/get_routes` | - |
| GET | `/diagnostics/interface/get_socket_statistics` | - |
| GET | `/diagnostics/interface/get_vip_status` | - |
| POST | `/diagnostics/interface/search_arp` | - |
| POST | `/diagnostics/interface/search_ndp` | - |

### Log Templates
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/diagnostics/lvtemplate/add_item` | - |
| POST | `/diagnostics/lvtemplate/del_item/{uuid}` | uuid |
| GET | `/diagnostics/lvtemplate/get` | - |
| GET | `/diagnostics/lvtemplate/get_item/{uuid?}` | uuid (optional) |
| POST | `/diagnostics/lvtemplate/search_item` | - |
| POST | `/diagnostics/lvtemplate/set` | - |
| POST | `/diagnostics/lvtemplate/set_item/{uuid}` | uuid |

### Netflow
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/diagnostics/netflow/cache_stats` | - |
| GET | `/diagnostics/netflow/getconfig` | - |
| GET | `/diagnostics/netflow/is_enabled` | - |
| POST | `/diagnostics/netflow/reconfigure` | - |
| POST | `/diagnostics/netflow/setconfig` | - |
| GET | `/diagnostics/netflow/status` | - |

### Network Insight
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/diagnostics/networkinsight/export/{provider?}/{from_date?}/{to_date?}/{resolution?}` | provider, from_date, to_date, resolution (all optional) |
| GET | `/diagnostics/networkinsight/get_interfaces` | - |
| GET | `/diagnostics/networkinsight/get_metadata` | - |
| GET | `/diagnostics/networkinsight/get_protocols` | - |
| GET | `/diagnostics/networkinsight/get_services` | - |
| GET | `/diagnostics/networkinsight/timeserie/{provider?}/{measure?}/{from_date?}/{to_date?}/{resolution?}/{field?}/{emulation?}` | provider, measure, from_date, to_date, resolution, field, emulation (all optional) |
| GET | `/diagnostics/networkinsight/top/{provider?}/{from_date?}/{to_date?}/{field?}/{measure?}/{max_hits?}` | provider, from_date, to_date, field, measure, max_hits (all optional) |

### Packet Capture
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/diagnostics/packet_capture/download/{jobid}` | jobid |
| GET | `/diagnostics/packet_capture/get` | - |
| GET | `/diagnostics/packet_capture/mac_info/{macaddr}` | macaddr |
| POST | `/diagnostics/packet_capture/remove/{jobid}` | jobid |
| POST | `/diagnostics/packet_capture/search_jobs` | - |
| POST | `/diagnostics/packet_capture/set` | - |
| POST | `/diagnostics/packet_capture/start/{jobid}` | jobid |
| POST | `/diagnostics/packet_capture/stop/{jobid}` | jobid |
| GET | `/diagnostics/packet_capture/view/{jobid}/{detail?}` | jobid, detail (optional, default: normal) |

### Ping
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/diagnostics/ping/get` | - |
| POST | `/diagnostics/ping/remove/{jobid}` | jobid |
| POST | `/diagnostics/ping/search_jobs` | - |
| POST | `/diagnostics/ping/set` | - |
| POST | `/diagnostics/ping/start/{jobid}` | jobid |
| POST | `/diagnostics/ping/stop/{jobid}` | jobid |

### Port Probe
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/diagnostics/portprobe/get` | - |
| POST | `/diagnostics/portprobe/set` | - |

### System Diagnostics
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/diagnostics/system/memory` | - |
| GET | `/diagnostics/system/system_disk` | - |
| GET | `/diagnostics/system/system_information` | - |
| GET | `/diagnostics/system/system_mbuf` | - |
| GET | `/diagnostics/system/system_resources` | - |
| GET | `/diagnostics/system/system_swap` | - |
| GET | `/diagnostics/system/system_temperature` | - |
| GET | `/diagnostics/system/system_time` | - |

### System Health
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/diagnostics/systemhealth/export_as_csv/{rrd?}/{detail?}` | rrd (optional), detail (optional, default: -1) |
| GET | `/diagnostics/systemhealth/get_interfaces` | - |
| GET | `/diagnostics/systemhealth/get_rrdlist` | - |
| GET | `/diagnostics/systemhealth/get_system_health/{rrd?}/{unused?}/{detail?}` | rrd (optional), unused (optional, default: 0), detail (optional, default: -1) |

### Traceroute
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/diagnostics/traceroute/get` | - |
| POST | `/diagnostics/traceroute/set` | - |

### Traffic
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/diagnostics/traffic/interface` | - |
| GET | `/diagnostics/traffic/top/{interfaces}` | interfaces |
| GET | `/diagnostics/traffic/stream/{poll_interval?}` | poll_interval (optional, default: 1) |

## Interfaces Module Endpoints

### GIF Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/interfaces/gif_settings/add_item` | - |
| POST | `/interfaces/gif_settings/del_item/{uuid}` | uuid |
| GET | `/interfaces/gif_settings/get` | - |
| GET | `/interfaces/gif_settings/get_if_options` | - |
| GET | `/interfaces/gif_settings/get_item/{uuid?}` | uuid (optional) |
| POST | `/interfaces/gif_settings/reconfigure` | - |
| POST | `/interfaces/gif_settings/search_item` | - |
| POST | `/interfaces/gif_settings/set` | - |
| POST | `/interfaces/gif_settings/set_item/{uuid}` | uuid |

### GRE Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/interfaces/gre_settings/add_item` | - |
| POST | `/interfaces/gre_settings/del_item/{uuid}` | uuid |
| GET | `/interfaces/gre_settings/get` | - |
| GET | `/interfaces/gre_settings/get_if_options` | - |
| GET | `/interfaces/gre_settings/get_item/{uuid?}` | uuid (optional) |
| POST | `/interfaces/gre_settings/reconfigure` | - |
| POST | `/interfaces/gre_settings/search_item` | - |
| POST | `/interfaces/gre_settings/set` | - |
| POST | `/interfaces/gre_settings/set_item/{uuid}` | uuid |

### LAGG Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/interfaces/lagg_settings/add_item` | - |
| POST | `/interfaces/lagg_settings/del_item/{uuid}` | uuid |
| GET | `/interfaces/lagg_settings/get` | - |
| GET | `/interfaces/lagg_settings/get_item/{uuid?}` | uuid (optional) |
| POST | `/interfaces/lagg_settings/reconfigure` | - |
| POST | `/interfaces/lagg_settings/search_item` | - |
| POST | `/interfaces/lagg_settings/set` | - |
| POST | `/interfaces/lagg_settings/set_item/{uuid}` | uuid |

### Loopback Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/interfaces/loopback_settings/add_item` | - |
| POST | `/interfaces/loopback_settings/del_item/{uuid}` | uuid |
| GET | `/interfaces/loopback_settings/get` | - |
| GET | `/interfaces/loopback_settings/get_item/{uuid?}` | uuid (optional) |
| POST | `/interfaces/loopback_settings/reconfigure` | - |
| POST | `/interfaces/loopback_settings/search_item` | - |
| POST | `/interfaces/loopback_settings/set` | - |
| POST | `/interfaces/loopback_settings/set_item/{uuid}` | uuid |

### Neighbor Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/interfaces/neighbor_settings/add_item` | - |
| POST | `/interfaces/neighbor_settings/del_item/{uuid}` | uuid |
| GET | `/interfaces/neighbor_settings/get` | - |
| GET | `/interfaces/neighbor_settings/get_item/{uuid?}` | uuid (optional) |
| POST | `/interfaces/neighbor_settings/reconfigure` | - |
| POST | `/interfaces/neighbor_settings/search_item` | - |
| POST | `/interfaces/neighbor_settings/set` | - |
| POST | `/interfaces/neighbor_settings/set_item/{uuid}` | uuid |

### Overview
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/interfaces/overview/export` | - |
| GET | `/interfaces/overview/get_interface/{if?}` | if (optional) |
| GET | `/interfaces/overview/interfaces_info/{details?}` | details (optional, default: false) |
| POST | `/interfaces/overview/reload_interface/{identifier?}` | identifier (optional) |

### VIP Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/interfaces/vip_settings/add_item` | - |
| POST | `/interfaces/vip_settings/del_item/{uuid}` | uuid |
| GET | `/interfaces/vip_settings/get` | - |
| GET | `/interfaces/vip_settings/get_item/{uuid?}` | uuid (optional) |
| GET | `/interfaces/vip_settings/get_unused_vhid` | - |
| POST | `/interfaces/vip_settings/reconfigure` | - |
| POST | `/interfaces/vip_settings/search_item` | - |
| POST | `/interfaces/vip_settings/set` | - |
| POST | `/interfaces/vip_settings/set_item/{uuid}` | uuid |

### VLAN Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/interfaces/vlan_settings/add_item` | - |
| POST | `/interfaces/vlan_settings/del_item/{uuid}` | uuid |
| GET | `/interfaces/vlan_settings/get` | - |
| GET | `/interfaces/vlan_settings/get_item/{uuid?}` | uuid (optional) |
| POST | `/interfaces/vlan_settings/reconfigure` | - |
| POST | `/interfaces/vlan_settings/search_item` | - |
| POST | `/interfaces/vlan_settings/set` | - |
| POST | `/interfaces/vlan_settings/set_item/{uuid}` | uuid |

### VXLAN Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/interfaces/vxlan_settings/add_item` | - |
| POST | `/interfaces/vxlan_settings/del_item/{uuid}` | uuid |
| GET | `/interfaces/vxlan_settings/get` | - |
| GET | `/interfaces/vxlan_settings/get_item/{uuid?}` | uuid (optional) |
| POST | `/interfaces/vxlan_settings/reconfigure` | - |
| POST | `/interfaces/vxlan_settings/search_item` | - |
| POST | `/interfaces/vxlan_settings/set` | - |
| POST | `/interfaces/vxlan_settings/set_item/{uuid}` | uuid |

## Auth Module Endpoints

### Group Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/auth/group/add` | - |
| POST | `/auth/group/del/{uuid}` | uuid |
| GET | `/auth/group/get/{uuid?}` | uuid (optional) |
| POST | `/auth/group/search` | - |
| POST | `/auth/group/set/{uuid?}` | uuid (optional) |

### Privilege Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/auth/priv/get` | - |
| GET | `/auth/priv/get_item/{id}` | id |
| POST | `/auth/priv/search` | - |
| POST | `/auth/priv/set` | - |
| POST | `/auth/priv/set_item/{id}` | id |

### User Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/auth/user/add` | - |
| POST | `/auth/user/add_api_key/{username}` | username |
| POST | `/auth/user/del/{uuid}` | uuid |
| POST | `/auth/user/del_api_key/{id}` | id |
| GET | `/auth/user/download` | - |
| GET | `/auth/user/get/{uuid?}` | uuid (optional) |
| POST | `/auth/user/new_otp_seed` | - |
| POST | `/auth/user/search` | - |
| POST | `/auth/user/search_api_key` | - |
| POST | `/auth/user/set/{uuid?}` | uuid (optional) |
| POST | `/auth/user/upload` | - |

## Cron Module Endpoints

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/cron/service/reconfigure` | - |

### Job Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/cron/settings/add_job` | - |
| POST | `/cron/settings/del_job/{uuid}` | uuid |
| GET | `/cron/settings/get` | - |
| GET | `/cron/settings/get_job/{uuid?}` | uuid (optional) |
| POST | `/cron/settings/search_jobs` | - |
| POST | `/cron/settings/set` | - |
| POST | `/cron/settings/set_job/{uuid}` | uuid |
| POST | `/cron/settings/toggle_job/{uuid}/{enabled?}` | uuid, enabled (optional) |

## DHCP Relay Module Endpoints

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/dhcrelay/service/reconfigure` | - |

### Relay Configuration
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/dhcrelay/settings/add_dest` | - |
| POST | `/dhcrelay/settings/add_relay` | - |
| POST | `/dhcrelay/settings/del_dest/{uuid}` | uuid |
| POST | `/dhcrelay/settings/del_relay/{uuid}` | uuid |
| GET | `/dhcrelay/settings/get` | - |
| GET | `/dhcrelay/settings/get_dest/{uuid?}` | uuid (optional) |
| GET | `/dhcrelay/settings/get_relay/{uuid?}` | uuid (optional) |
| POST | `/dhcrelay/settings/search_dest` | - |
| POST | `/dhcrelay/settings/search_relay` | - |
| POST | `/dhcrelay/settings/set` | - |
| POST | `/dhcrelay/settings/set_dest/{uuid}` | uuid |
| POST | `/dhcrelay/settings/set_relay/{uuid}` | uuid |
| POST | `/dhcrelay/settings/toggle_relay/{uuid}/{enabled?}` | uuid, enabled (optional) |

## Kea DHCP Module Endpoints

### Control Agent
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/kea/ctrl_agent/get` | - |
| POST | `/kea/ctrl_agent/set` | - |

### DHCPv4 Server
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/kea/dhcpv4/add_peer` | - |
| POST | `/kea/dhcpv4/add_reservation` | - |
| POST | `/kea/dhcpv4/add_subnet` | - |
| POST | `/kea/dhcpv4/del_peer/{uuid}` | uuid |
| POST | `/kea/dhcpv4/del_reservation/{uuid}` | uuid |
| POST | `/kea/dhcpv4/del_subnet/{uuid}` | uuid |
| GET | `/kea/dhcpv4/download_reservations` | - |
| GET | `/kea/dhcpv4/get` | - |
| GET | `/kea/dhcpv4/get_peer/{uuid?}` | uuid (optional) |
| GET | `/kea/dhcpv4/get_reservation/{uuid?}` | uuid (optional) |
| GET | `/kea/dhcpv4/get_subnet/{uuid?}` | uuid (optional) |
| POST | `/kea/dhcpv4/search_peer` | - |
| POST | `/kea/dhcpv4/search_reservation` | - |
| POST | `/kea/dhcpv4/search_subnet` | - |
| POST | `/kea/dhcpv4/set` | - |
| POST | `/kea/dhcpv4/set_peer/{uuid}` | uuid |
| POST | `/kea/dhcpv4/set_reservation/{uuid}` | uuid |
| POST | `/kea/dhcpv4/set_subnet/{uuid}` | uuid |
| POST | `/kea/dhcpv4/upload_reservations` | - |

### Lease Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/kea/leases4/search` | - |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/kea/service/reconfigure` | - |
| POST | `/kea/service/restart` | - |
| POST | `/kea/service/start` | - |
| GET | `/kea/service/status` | - |
| POST | `/kea/service/stop` | - |

## OpenVPN Module Endpoints

### Client Overrides
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/openvpn/client_overwrites/add` | - |
| POST | `/openvpn/client_overwrites/del/{uuid}` | uuid |
| GET | `/openvpn/client_overwrites/get/{uuid?}` | uuid (optional) |
| POST | `/openvpn/client_overwrites/search` | - |
| POST | `/openvpn/client_overwrites/set/{uuid?}` | uuid (optional) |
| POST | `/openvpn/client_overwrites/toggle/{uuid}/{enabled?}` | uuid, enabled (optional) |

### Export Functions
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/openvpn/export/accounts/{vpnid?}` | vpnid (optional) |
| GET | `/openvpn/export/download/{vpnid}/{certref?}` | vpnid, certref (optional) |
| GET | `/openvpn/export/providers` | - |
| POST | `/openvpn/export/store_presets/{vpnid}` | vpnid |
| GET | `/openvpn/export/templates` | - |
| POST | `/openvpn/export/validate_presets/{vpnid}` | vpnid |

### Instance Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/openvpn/instances/add` | - |
| POST | `/openvpn/instances/add_static_key` | - |
| POST | `/openvpn/instances/del/{uuid}` | uuid |
| POST | `/openvpn/instances/del_static_key/{uuid}` | uuid |
| GET | `/openvpn/instances/gen_key/{type?}` | type (optional, default: secret) |
| GET | `/openvpn/instances/get/{uuid?}` | uuid (optional) |
| GET | `/openvpn/instances/get_static_key/{uuid?}` | uuid (optional) |
| POST | `/openvpn/instances/search` | - |
| POST | `/openvpn/instances/search_static_key` | - |
| POST | `/openvpn/instances/set/{uuid?}` | uuid (optional) |
| POST | `/openvpn/instances/set_static_key/{uuid?}` | uuid (optional) |
| POST | `/openvpn/instances/toggle/{uuid}/{enabled?}` | uuid, enabled (optional) |

### Service Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/openvpn/service/kill_session` | - |
| POST | `/openvpn/service/reconfigure` | - |
| POST | `/openvpn/service/restart_service/{id?}` | id (optional) |
| POST | `/openvpn/service/search_routes` | - |
| POST | `/openvpn/service/search_sessions` | - |
| POST | `/openvpn/service/start_service/{id?}` | id (optional) |
| POST | `/openvpn/service/stop_service/{id?}` | id (optional) |

## Syslog Module Endpoints

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/syslog/service/reconfigure` | - |
| POST | `/syslog/service/reset` | - |
| POST | `/syslog/service/restart` | - |
| POST | `/syslog/service/start` | - |
| GET | `/syslog/service/stats` | - |
| GET | `/syslog/service/status` | - |
| POST | `/syslog/service/stop` | - |

### Destination Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/syslog/settings/add_destination` | - |
| POST | `/syslog/settings/del_destination/{uuid}` | uuid |
| GET | `/syslog/settings/get` | - |
| GET | `/syslog/settings/get_destination/{uuid?}` | uuid (optional) |
| POST | `/syslog/settings/search_destinations` | - |
| POST | `/syslog/settings/set` | - |
| POST | `/syslog/settings/set_destination/{uuid}` | uuid |
| POST | `/syslog/settings/toggle_destination/{uuid}/{enabled?}` | uuid, enabled (optional) |

## Trust Module Endpoints

### Certificate Authority
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/trust/ca/ca_info/{caref}` | caref |
| GET | `/trust/ca/ca_list` | - |
| POST | `/trust/ca/del/{uuid}` | uuid |
| GET | `/trust/ca/generate_file/{uuid?}/{type?}` | uuid (optional), type (optional, default: crt) |
| GET | `/trust/ca/get` | - |
| GET | `/trust/ca/raw_dump/{uuid}` | uuid |
| POST | `/trust/ca/search` | - |
| POST | `/trust/ca/set/{uuid?}` | uuid (optional) |

### Certificate Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/trust/cert/add` | - |
| GET | `/trust/cert/ca_info/{caref?}` | caref (optional) |
| GET | `/trust/cert/ca_list` | - |
| POST | `/trust/cert/del/{uuid}` | uuid |
| GET | `/trust/cert/generate_file/{uuid?}/{type?}` | uuid (optional), type (optional, default: crt) |
| GET | `/trust/cert/get/{uuid?}` | uuid (optional) |
| GET | `/trust/cert/raw_dump/{uuid}` | uuid |
| POST | `/trust/cert/search` | - |
| POST | `/trust/cert/set/{uuid?}` | uuid (optional) |
| GET | `/trust/cert/user_list` | - |

### Certificate Revocation List
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/trust/crl/del/{caref}` | caref |
| GET | `/trust/crl/get/{caref}` | caref |
| GET | `/trust/crl/get_ocsp_info_data/{caref}` | caref |
| GET | `/trust/crl/raw_dump/{caref}` | caref |
| POST | `/trust/crl/search` | - |
| POST | `/trust/crl/set/{caref}` | caref |

### Trust Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/trust/settings/get` | - |
| POST | `/trust/settings/reconfigure` | - |
| POST | `/trust/settings/set` | - |

## WireGuard Module Endpoints

### Client Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/wireguard/client/add_client` | - |
| POST | `/wireguard/client/add_client_builder` | - |
| POST | `/wireguard/client/del_client/{uuid}` | uuid |
| GET | `/wireguard/client/get` | - |
| GET | `/wireguard/client/get_client/{uuid?}` | uuid (optional) |
| GET | `/wireguard/client/get_client_builder` | - |
| GET | `/wireguard/client/get_server_info/{uuid?}` | uuid (optional) |
| GET | `/wireguard/client/list_servers` | - |
| GET | `/wireguard/client/psk` | - |
| POST | `/wireguard/client/search_client` | - |
| POST | `/wireguard/client/set` | - |
| POST | `/wireguard/client/set_client/{uuid}` | uuid |
| POST | `/wireguard/client/toggle_client/{uuid}` | uuid |

### General Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/wireguard/general/get` | - |
| POST | `/wireguard/general/set` | - |

### Server Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/wireguard/server/add_server/{uuid?}` | uuid (optional) |
| POST | `/wireguard/server/del_server/{uuid}` | uuid |
| GET | `/wireguard/server/get` | - |
| GET | `/wireguard/server/get_server/{uuid?}` | uuid (optional) |
| GET | `/wireguard/server/key_pair` | - |
| POST | `/wireguard/server/search_server` | - |
| POST | `/wireguard/server/set` | - |
| POST | `/wireguard/server/set_server/{uuid?}` | uuid (optional) |
| POST | `/wireguard/server/toggle_server/{uuid}` | uuid |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/wireguard/service/reconfigure` | - |
| POST | `/wireguard/service/restart` | - |
| GET | `/wireguard/service/show` | - |
| POST | `/wireguard/service/start` | - |
| GET | `/wireguard/service/status` | - |
| POST | `/wireguard/service/stop` | - |

## Captive Portal Module Endpoints

### Access Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/captiveportal/access/api` | - |
| POST | `/captiveportal/access/logoff/{zoneid?}` | zoneid (optional, default: 0) |
| POST | `/captiveportal/access/logon/{zoneid?}` | zoneid (optional, default: 0) |
| GET | `/captiveportal/access/status/{zoneid?}` | zoneid (optional, default: 0) |

### Service Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/captiveportal/service/del_template/{uuid}` | uuid |
| GET | `/captiveportal/service/get_template/{fileid?}` | fileid (optional) |
| POST | `/captiveportal/service/reconfigure` | - |
| POST | `/captiveportal/service/save_template` | - |
| POST | `/captiveportal/service/search_templates` | - |

### Session Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/captiveportal/session/connect/{zoneid?}` | zoneid (optional, default: 0) |
| POST | `/captiveportal/session/disconnect/{zoneid?}` | zoneid (optional) |
| GET | `/captiveportal/session/list/{zoneid?}` | zoneid (optional, default: 0) |
| POST | `/captiveportal/session/search` | - |
| GET | `/captiveportal/session/zones` | - |

### Zone Configuration
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/captiveportal/settings/add_zone` | - |
| POST | `/captiveportal/settings/del_zone/{uuid}` | uuid |
| GET | `/captiveportal/settings/get` | - |
| GET | `/captiveportal/settings/get_zone/{uuid?}` | uuid (optional) |
| POST | `/captiveportal/settings/search_zones` | - |
| POST | `/captiveportal/settings/set` | - |
| POST | `/captiveportal/settings/set_zone/{uuid}` | uuid |
| POST | `/captiveportal/settings/toggle_zone/{uuid}/{enabled?}` | uuid, enabled (optional) |

### Voucher Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/captiveportal/voucher/drop_expired_vouchers/{provider}/{group}` | provider, group |
| POST | `/captiveportal/voucher/drop_voucher_group/{provider}/{group}` | provider, group |
| POST | `/captiveportal/voucher/expire_voucher/{provider}` | provider |
| POST | `/captiveportal/voucher/generate_vouchers/{provider}` | provider |
| GET | `/captiveportal/voucher/list_providers` | - |
| GET | `/captiveportal/voucher/list_voucher_groups/{provider}` | provider |
| GET | `/captiveportal/voucher/list_vouchers/{provider}/{group}` | provider, group |

## IDS (Intrusion Detection System) Module Endpoints

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/ids/service/drop_alert_log` | - |
| GET | `/ids/service/get_alert_info/{alertId}/{fileid?}` | alertId, fileid (optional) |
| GET | `/ids/service/get_alert_logs` | - |
| POST | `/ids/service/query_alerts` | - |
| POST | `/ids/service/reconfigure` | - |
| POST | `/ids/service/reload_rules` | - |
| POST | `/ids/service/restart` | - |
| POST | `/ids/service/start` | - |
| GET | `/ids/service/status` | - |
| POST | `/ids/service/stop` | - |
| POST | `/ids/service/update_rules/{wait?}` | wait (optional) |

### Settings Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/ids/settings/add_policy` | - |
| POST | `/ids/settings/add_policy_rule` | - |
| POST | `/ids/settings/add_user_rule` | - |
| POST | `/ids/settings/check_policy_rule` | - |
| POST | `/ids/settings/del_policy/{uuid}` | uuid |
| POST | `/ids/settings/del_policy_rule/{uuid}` | uuid |
| POST | `/ids/settings/del_user_rule/{uuid}` | uuid |
| GET | `/ids/settings/get` | - |
| GET | `/ids/settings/get_policy/{uuid?}` | uuid (optional) |
| GET | `/ids/settings/get_policy_rule/{uuid?}` | uuid (optional) |
| GET | `/ids/settings/get_rule_info/{sid?}` | sid (optional) |
| GET | `/ids/settings/get_ruleset/{id}` | id |
| GET | `/ids/settings/get_rulesetproperties` | - |
| GET | `/ids/settings/get_user_rule/{uuid?}` | uuid (optional) |
| GET | `/ids/settings/list_rule_metadata` | - |
| GET | `/ids/settings/list_rulesets` | - |
| POST | `/ids/settings/search_installed_rules` | - |
| POST | `/ids/settings/search_policy` | - |
| POST | `/ids/settings/search_policy_rule` | - |
| POST | `/ids/settings/search_user_rule` | - |
| POST | `/ids/settings/set` | - |
| POST | `/ids/settings/set_policy/{uuid}` | uuid |
| POST | `/ids/settings/set_policy_rule/{uuid}` | uuid |
| POST | `/ids/settings/set_rule/{sid}` | sid |
| POST | `/ids/settings/set_ruleset/{filename}` | filename |
| POST | `/ids/settings/set_rulesetproperties` | - |
| POST | `/ids/settings/set_user_rule/{uuid}` | uuid |
| POST | `/ids/settings/toggle_policy/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/ids/settings/toggle_policy_rule/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/ids/settings/toggle_rule/{sids}/{enabled?}` | sids, enabled (optional) |
| POST | `/ids/settings/toggle_ruleset/{filenames}/{enabled?}` | filenames, enabled (optional) |
| POST | `/ids/settings/toggle_user_rule/{uuid}/{enabled?}` | uuid, enabled (optional) |

## IPsec Module Endpoints

### Connection Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/ipsec/connections/add_child` | - |
| POST | `/ipsec/connections/add_connection` | - |
| POST | `/ipsec/connections/add_local` | - |
| POST | `/ipsec/connections/add_remote` | - |
| GET | `/ipsec/connections/connection_exists/{uuid}` | uuid |
| POST | `/ipsec/connections/del_child/{uuid}` | uuid |
| POST | `/ipsec/connections/del_connection/{uuid}` | uuid |
| POST | `/ipsec/connections/del_local/{uuid}` | uuid |
| POST | `/ipsec/connections/del_remote/{uuid}` | uuid |
| GET | `/ipsec/connections/get` | - |
| GET | `/ipsec/connections/get_child/{uuid?}` | uuid (optional) |
| GET | `/ipsec/connections/get_connection/{uuid?}` | uuid (optional) |
| GET | `/ipsec/connections/get_local/{uuid?}` | uuid (optional) |
| GET | `/ipsec/connections/get_remote/{uuid?}` | uuid (optional) |
| GET | `/ipsec/connections/is_enabled` | - |
| POST | `/ipsec/connections/search_child` | - |
| POST | `/ipsec/connections/search_connection` | - |
| POST | `/ipsec/connections/search_local` | - |
| POST | `/ipsec/connections/search_remote` | - |
| POST | `/ipsec/connections/set` | - |
| POST | `/ipsec/connections/set_child/{uuid?}` | uuid (optional) |
| POST | `/ipsec/connections/set_connection/{uuid?}` | uuid (optional) |
| POST | `/ipsec/connections/set_local/{uuid?}` | uuid (optional) |
| POST | `/ipsec/connections/set_remote/{uuid?}` | uuid (optional) |
| GET | `/ipsec/connections/swanctl` | - |
| POST | `/ipsec/connections/toggle/{enabled?}` | enabled (optional) |
| POST | `/ipsec/connections/toggle_child/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/ipsec/connections/toggle_connection/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/ipsec/connections/toggle_local/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/ipsec/connections/toggle_remote/{uuid}/{enabled?}` | uuid, enabled (optional) |

### Key Pair Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/ipsec/key_pairs/add_item` | - |
| POST | `/ipsec/key_pairs/del_item/{uuid}` | uuid |
| GET | `/ipsec/key_pairs/gen_key_pair/{type}/{size?}` | type, size (optional) |
| GET | `/ipsec/key_pairs/get` | - |
| GET | `/ipsec/key_pairs/get_item/{uuid?}` | uuid (optional) |
| POST | `/ipsec/key_pairs/search_item` | - |
| POST | `/ipsec/key_pairs/set` | - |
| POST | `/ipsec/key_pairs/set_item/{uuid?}` | uuid (optional) |

### Lease Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/ipsec/leases/pools` | - |
| POST | `/ipsec/leases/search` | - |

### Legacy Subsystem
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/ipsec/legacy_subsystem/apply_config` | - |
| GET | `/ipsec/legacy_subsystem/status` | - |

### Manual SPD
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/ipsec/manual_spd/add` | - |
| POST | `/ipsec/manual_spd/del/{uuid}` | uuid |
| GET | `/ipsec/manual_spd/get/{uuid?}` | uuid (optional) |
| POST | `/ipsec/manual_spd/search` | - |
| POST | `/ipsec/manual_spd/set/{uuid?}` | uuid (optional) |
| POST | `/ipsec/manual_spd/toggle/{uuid}/{enabled?}` | uuid, enabled (optional) |

### Pool Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/ipsec/pools/add` | - |
| POST | `/ipsec/pools/del/{uuid}` | uuid |
| GET | `/ipsec/pools/get/{uuid?}` | uuid (optional) |
| POST | `/ipsec/pools/search` | - |
| POST | `/ipsec/pools/set/{uuid?}` | uuid (optional) |
| POST | `/ipsec/pools/toggle/{uuid}/{enabled?}` | uuid, enabled (optional) |

### Pre-Shared Keys
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/ipsec/pre_shared_keys/add_item` | - |
| POST | `/ipsec/pre_shared_keys/del_item/{uuid}` | uuid |
| GET | `/ipsec/pre_shared_keys/get` | - |
| GET | `/ipsec/pre_shared_keys/get_item/{uuid?}` | uuid (optional) |
| POST | `/ipsec/pre_shared_keys/search_item` | - |
| POST | `/ipsec/pre_shared_keys/set` | - |
| POST | `/ipsec/pre_shared_keys/set_item/{uuid?}` | uuid (optional) |

### SAD (Security Association Database)
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/ipsec/sad/delete/{id}` | id |
| POST | `/ipsec/sad/search` | - |

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/ipsec/service/reconfigure` | - |
| POST | `/ipsec/service/restart` | - |
| POST | `/ipsec/service/start` | - |
| GET | `/ipsec/service/status` | - |
| POST | `/ipsec/service/stop` | - |

### Session Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/ipsec/sessions/connect/{id}` | id |
| POST | `/ipsec/sessions/disconnect/{id}` | id |
| POST | `/ipsec/sessions/search_phase1` | - |
| POST | `/ipsec/sessions/search_phase2` | - |

### Settings
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/ipsec/settings/get` | - |
| POST | `/ipsec/settings/set` | - |

### SPD (Security Policy Database)
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/ipsec/spd/delete/{id}` | id |
| POST | `/ipsec/spd/search` | - |

### Legacy Tunnel Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/ipsec/tunnel/del_phase1/{ikeid}` | ikeid |
| POST | `/ipsec/tunnel/del_phase2/{seqid}` | seqid |
| POST | `/ipsec/tunnel/search_phase1` | - |
| POST | `/ipsec/tunnel/search_phase2` | - |
| POST | `/ipsec/tunnel/toggle/{enabled?}` | enabled (optional) |
| POST | `/ipsec/tunnel/toggle_phase1/{ikeid}/{enabled?}` | ikeid, enabled (optional) |
| POST | `/ipsec/tunnel/toggle_phase2/{seqid}/{enabled?}` | seqid, enabled (optional) |

### VTI (Virtual Tunnel Interface)
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/ipsec/vti/add` | - |
| POST | `/ipsec/vti/del/{uuid}` | uuid |
| GET | `/ipsec/vti/get/{uuid?}` | uuid (optional) |
| POST | `/ipsec/vti/search` | - |
| POST | `/ipsec/vti/set/{uuid?}` | uuid (optional) |
| POST | `/ipsec/vti/toggle/{uuid}/{enabled?}` | uuid, enabled (optional) |

## Monit Module Endpoints

### Service Control
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/monit/service/check` | - |
| POST | `/monit/service/reconfigure` | - |
| POST | `/monit/service/restart` | - |
| POST | `/monit/service/start` | - |
| GET | `/monit/service/status` | - |
| POST | `/monit/service/stop` | - |

### Settings Management
| Method | Endpoint | Parameters |
|--------|----------|------------|
| POST | `/monit/settings/add_alert` | - |
| POST | `/monit/settings/add_service` | - |
| POST | `/monit/settings/add_test` | - |
| POST | `/monit/settings/del_alert/{uuid}` | uuid |
| POST | `/monit/settings/del_service/{uuid}` | uuid |
| POST | `/monit/settings/del_test/{uuid}` | uuid |
| GET | `/monit/settings/dirty` | - |
| GET | `/monit/settings/get` | - |
| GET | `/monit/settings/get_alert/{uuid?}` | uuid (optional) |
| GET | `/monit/settings/get_general` | - |
| GET | `/monit/settings/get_service/{uuid?}` | uuid (optional) |
| GET | `/monit/settings/get_test/{uuid?}` | uuid (optional) |
| POST | `/monit/settings/search_alert` | - |
| POST | `/monit/settings/search_service` | - |
| POST | `/monit/settings/search_test` | - |
| POST | `/monit/settings/set` | - |
| POST | `/monit/settings/set_alert/{uuid}` | uuid |
| POST | `/monit/settings/set_service/{uuid}` | uuid |
| POST | `/monit/settings/set_test/{uuid}` | uuid |
| POST | `/monit/settings/toggle_alert/{uuid}/{enabled?}` | uuid, enabled (optional) |
| POST | `/monit/settings/toggle_service/{uuid}/{enabled?}` | uuid, enabled (optional) |

### Status Monitoring
| Method | Endpoint | Parameters |
|--------|----------|------------|
| GET | `/monit/status/get/{format?}` | format (optional, default: xml) |

## Additional Core API Modules

The following modules are also part of the Core API but specific endpoint details were not fully accessible during documentation review:

### Captiveportal Module  
- Captive portal configuration
- User session management
- Authentication backend settings

### DHCP Modules
- **DHCPv4**: IPv4 DHCP server configuration (legacy ISC DHCP)
- **DHCPv6**: IPv6 DHCP server configuration (legacy ISC DHCP)

### DNS Modules
- **Dnsmasq**: DNS forwarder and DHCP configuration
- **Unbound**: DNS resolver configuration

### IDS Module
- Intrusion Detection System configuration
- Rule management
- Alert handling

### IPsec Module
- VPN tunnel configuration
- Certificate management
- Connection settings

### Monit Module
- Service monitoring configuration
- Health checks and alerts

### Routes/Routing Module
- Static route configuration
- Gateway management
- Routing table management

### Traffic Shaper Module
- Bandwidth management
- QoS configuration
- Traffic prioritization

## Common Endpoint Patterns

Most OPNsense API modules follow standard MVC patterns with these common endpoints:

### CRUD Operations (for modules with model data)
- `GET /{module}/{controller}/get` - Get configuration
- `POST /{module}/{controller}/set` - Set configuration  
- `POST /{module}/{controller}/add_item` - Add new item
- `GET /{module}/{controller}/get_item/{uuid?}` - Get specific item
- `POST /{module}/{controller}/set_item/{uuid}` - Update specific item
- `POST /{module}/{controller}/del_item/{uuid}` - Delete specific item
- `POST /{module}/{controller}/search_item` - Search items
- `POST /{module}/{controller}/reconfigure` - Apply configuration changes

### Service Control (for service-based modules)
- `POST /{module}/{controller}/start` - Start service
- `POST /{module}/{controller}/stop` - Stop service  
- `POST /{module}/{controller}/restart` - Restart service
- `GET /{module}/{controller}/status` - Get service status

## Usage Examples

### Get system status
```bash
curl -k -u "api_key:api_secret" https://10.0.1.1/api/core/system/status
```

### Search firewall rules
```bash
curl -k -u "api_key:api_secret" -X POST https://10.0.1.1/api/firewall/filter/search_rule \
  -H "Content-Type: application/json" \
  -d '{"current":1,"rowCount":7,"sort":{},"searchPhrase":""}'
```

### Get firmware status
```bash
curl -k -u "api_key:api_secret" https://10.0.1.1/api/core/firmware/status
```

### Restart a service
```bash
curl -k -u "api_key:api_secret" -X POST https://10.0.1.1/api/core/service/restart/openssh
```

### Add firewall alias entry
```bash
curl -k -u "api_key:api_secret" -X POST https://10.0.1.1/api/firewall/alias_util/add/my_alias \
  -H "Content-Type: application/json" \
  -d '{"address": "192.168.1.100"}'
```

## Notes

1. **Authentication**: All endpoints require HTTP Basic Authentication using API key/secret pairs generated in the OPNsense web interface.

2. **HTTPS Required**: OPNsense API only works over HTTPS. Use `-k` flag with curl to ignore certificate warnings in test environments.

3. **Content-Type**: POST requests typically require `Content-Type: application/json` header.

4. **Response Format**: All responses are in JSON format.

5. **Parameter Formats**: 
   - Path parameters are included in the URL
   - Query parameters use standard URL query syntax
   - POST data should be sent as JSON in the request body

6. **UUID Parameters**: Many endpoints use UUID identifiers which can be obtained from search or list endpoints.

7. **Optional Parameters**: Parameters marked with `?` are optional and can be omitted from the request.

8. **Rollback Support**: Some modules (like firewall) support savepoint/rollback functionality for safe configuration changes.