# OPNsense Core Modules API Documentation

## Overview

This documentation covers the Core modules of the OPNsense API. There are 24 core modules with a total of 752 endpoints.

## Table of Contents

- [Auth](#Auth)
- [Captiveportal](#Captiveportal)
- [Core](#Core)
- [Cron](#Cron)
- [Dhcpv4](#Dhcpv4)
- [Dhcpv6](#Dhcpv6)
- [Dhcrelay](#Dhcrelay)
- [Diagnostics](#Diagnostics)
- [Dnsmasq](#Dnsmasq)
- [Firewall](#Firewall)
- [Firmware](#Firmware)
- [Ids](#Ids)
- [Interfaces](#Interfaces)
- [Ipsec](#Ipsec)
- [Kea](#Kea)
- [Monit](#Monit)
- [Openvpn](#Openvpn)
- [Routes](#Routes)
- [Routing](#Routing)
- [Syslog](#Syslog)
- [Trafficshaper](#Trafficshaper)
- [Trust](#Trust)
- [Unbound](#Unbound)
- [Wireguard](#Wireguard)

## Auth

**Module:** Auth  
**Type:** core  
**Endpoints:** 19

### Endpoints

| Controller | Command        | Method | Parameters | Description |
| ---------- | -------------- | ------ | ---------- | ----------- |
| group      | add            | POST   | -          | -           |
| group      | del            | POST   | $uuid      | -           |
| group      | get            | GET    | $uuid=null | -           |
| group      | set            | POST   | $uuid=null | -           |
| priv       | get            | GET    | -          | -           |
| priv       | get_item       | GET    | $id        | -           |
| priv       | search         | GET    | -          | -           |
| priv       | set            | POST   | -          | -           |
| priv       | set_item       | POST   | $id        | -           |
| user       | add            | POST   | -          | -           |
| user       | add_api_key    | POST   | $username  | -           |
| user       | del            | POST   | $uuid      | -           |
| user       | del_api_key    | POST   | $id        | -           |
| user       | download       | GET    | -          | -           |
| user       | get            | GET    | $uuid=null | -           |
| user       | new_otp_seed   | GET    | -          | -           |
| user       | search_api_key | GET    | -          | -           |
| user       | set            | POST   | $uuid=null | -           |
| user       | upload         | POST   | -          | -           |

### Model Structure

#### Containers

**group**

_No fields defined_

---

## Captiveportal

**Module:** Captiveportal  
**Type:** core  
**Endpoints:** 27

### Endpoints

| Controller | Command               | Method | Parameters          | Description |
| ---------- | --------------------- | ------ | ------------------- | ----------- |
| access     | api                   | GET    | -                   | -           |
| access     | logoff                | GET    | $zoneid=0           | -           |
| access     | logon                 | POST   | $zoneid=0           | -           |
| service    | del_template          | POST   | $uuid               | -           |
| service    | get_template          | GET    | $fileid=null        | -           |
| service    | reconfigure           | POST   | -                   | -           |
| service    | save_template         | POST   | -                   | -           |
| service    | search_templates      | GET    | -                   | -           |
| session    | connect               | POST   | $zoneid=0           | -           |
| session    | disconnect            | POST   | $zoneid=’’          | -           |
| session    | list                  | GET    | $zoneid=0           | -           |
| session    | search                | GET    | -                   | -           |
| session    | zones                 | GET    | -                   | -           |
| settings   | add_zone              | POST   | -                   | -           |
| settings   | del_zone              | POST   | $uuid               | -           |
| settings   | get                   | GET    | -                   | -           |
| settings   | get_zone              | GET    | $uuid=null          | -           |
| settings   | set                   | POST   | -                   | -           |
| settings   | set_zone              | POST   | $uuid               | -           |
| settings   | toggle_zone           | POST   | $uuid,$enabled=null | -           |
| voucher    | drop_expired_vouchers | POST   | $provider,$group    | -           |
| voucher    | drop_voucher_group    | POST   | $provider,$group    | -           |
| voucher    | expire_voucher        | POST   | $provider           | -           |
| voucher    | generate_vouchers     | POST   | $provider           | -           |
| voucher    | list_providers        | GET    | -                   | -           |
| voucher    | list_voucher_groups   | GET    | $provider           | -           |
| voucher    | list_vouchers         | GET    | $provider,$group    | -           |

### Model Structure

#### Containers

**zone**

_No fields defined_

**template**

_No fields defined_

---

## Core

**Module:** Core  
**Type:** core  
**Endpoints:** 46

### Endpoints

| Controller    | Command           | Method | Parameters                     | Description |
| ------------- | ----------------- | ------ | ------------------------------ | ----------- |
| backup        | backups           | GET    | $host                          | -           |
| backup        | delete_backup     | GET    | $backup                        | -           |
| backup        | diff              | GET    | $host,$backup1,$backup2        | -           |
| backup        | download          | GET    | $host,$backup=null             | -           |
| backup        | providers         | GET    | -                              | -           |
| backup        | revert_backup     | GET    | $backup                        | -           |
| dashboard     | get_dashboard     | GET    | -                              | -           |
| dashboard     | picture           | GET    | -                              | -           |
| dashboard     | product_info_feed | GET    | -                              | -           |
| dashboard     | restore_defaults  | POST   | -                              | -           |
| dashboard     | save_widgets      | POST   | -                              | -           |
| hasync        | get               | GET    | -                              | -           |
| hasync        | reconfigure       | POST   | -                              | -           |
| hasync        | set               | POST   | -                              | -           |
| hasync_status | remote_service    | GET    | $action,$service,$service_id   | -           |
| hasync_status | restart           | POST   | $service=null,$service_id=null | -           |
| hasync_status | restart_all       | POST   | $service=null,$service_id=null | -           |
| hasync_status | services          | GET    | -                              | -           |
| hasync_status | start             | POST   | $service=null,$service_id=null | -           |
| hasync_status | stop              | POST   | $service=null,$service_id=null | -           |
| hasync_status | version           | GET    | -                              | -           |
| menu          | search            | GET    | -                              | -           |
| menu          | tree              | GET    | -                              | -           |
| service       | restart           | POST   | $name,$id=’’                   | -           |
| service       | search            | GET    | -                              | -           |
| service       | start             | POST   | $name,$id=’’                   | -           |
| service       | stop              | POST   | $name,$id=’’                   | -           |
| snapshots     | activate          | POST   | $uuid                          | -           |
| snapshots     | add               | POST   | -                              | -           |
| snapshots     | del               | POST   | $uuid                          | -           |
| snapshots     | get               | GET    | $uuid=null                     | -           |
| snapshots     | is_supported      | GET    | -                              | -           |
| snapshots     | search            | GET    | -                              | -           |
| snapshots     | set               | POST   | $uuid                          | -           |
| system        | dismiss_status    | POST   | -                              | -           |
| system        | halt              | POST   | -                              | -           |
| system        | reboot            | POST   | -                              | -           |
| system        | status            | GET    | -                              | -           |
| tunables      | add_item          | POST   | -                              | -           |
| tunables      | del_item          | POST   | $uuid                          | -           |
| tunables      | get               | GET    | -                              | -           |
| tunables      | get_item          | GET    | $uuid=null                     | -           |
| tunables      | reconfigure       | POST   | -                              | -           |
| tunables      | reset             | POST   | -                              | -           |
| tunables      | set               | POST   | -                              | -           |
| tunables      | set_item          | POST   | $uuid                          | -           |

### Model Structure

---

## Cron

**Module:** Cron  
**Type:** core  
**Endpoints:** 8

### Endpoints

| Controller | Command     | Method | Parameters          | Description |
| ---------- | ----------- | ------ | ------------------- | ----------- |
| service    | reconfigure | POST   | -                   | -           |
| settings   | add_job     | POST   | -                   | -           |
| settings   | del_job     | POST   | $uuid               | -           |
| settings   | get         | GET    | -                   | -           |
| settings   | get_job     | GET    | $uuid=null          | -           |
| settings   | set         | POST   | -                   | -           |
| settings   | set_job     | POST   | $uuid               | -           |
| settings   | toggle_job  | POST   | $uuid,$enabled=null | -           |

### Model Structure

#### Containers

**job**

_No fields defined_

---

## Dhcpv4

**Module:** Dhcpv4  
**Type:** core  
**Endpoints:** 7

### Endpoints

| Controller | Command      | Method | Parameters | Description |
| ---------- | ------------ | ------ | ---------- | ----------- |
| leases     | del_lease    | POST   | $ip        | -           |
| leases     | search_lease | GET    | -          | -           |
| service    | reconfigure  | POST   | -          | -           |
| service    | restart      | POST   | -          | -           |
| service    | start        | POST   | -          | -           |
| service    | status       | GET    | -          | -           |
| service    | stop         | POST   | -          | -           |

---

## Dhcpv6

**Module:** Dhcpv6  
**Type:** core  
**Endpoints:** 8

### Endpoints

| Controller | Command       | Method | Parameters | Description |
| ---------- | ------------- | ------ | ---------- | ----------- |
| leases     | del_lease     | POST   | $ip        | -           |
| leases     | search_lease  | GET    | -          | -           |
| leases     | search_prefix | GET    | -          | -           |
| service    | reconfigure   | POST   | -          | -           |
| service    | restart       | POST   | -          | -           |
| service    | start         | POST   | -          | -           |
| service    | status        | GET    | -          | -           |
| service    | stop          | POST   | -          | -           |

---

## Dhcrelay

**Module:** Dhcrelay  
**Type:** core  
**Endpoints:** 12

### Endpoints

| Controller | Command      | Method | Parameters          | Description |
| ---------- | ------------ | ------ | ------------------- | ----------- |
| service    | reconfigure  | POST   | -                   | -           |
| settings   | add_dest     | POST   | -                   | -           |
| settings   | add_relay    | POST   | -                   | -           |
| settings   | del_dest     | POST   | $uuid               | -           |
| settings   | del_relay    | POST   | $uuid               | -           |
| settings   | get          | GET    | -                   | -           |
| settings   | get_dest     | GET    | $uuid=null          | -           |
| settings   | get_relay    | GET    | $uuid=null          | -           |
| settings   | set          | POST   | -                   | -           |
| settings   | set_dest     | POST   | $uuid               | -           |
| settings   | set_relay    | POST   | $uuid               | -           |
| settings   | toggle_relay | POST   | $uuid,$enabled=null | -           |

### Model Structure

#### Containers

**relays**

_No fields defined_

**destinations**

_No fields defined_

---

## Diagnostics

**Module:** Diagnostics  
**Type:** core  
**Endpoints:** 90

### Endpoints

| Controller      | Command                  | Method | Parameters                                                                                              | Description |
| --------------- | ------------------------ | ------ | ------------------------------------------------------------------------------------------------------- | ----------- |
| activity        | get_activity             | GET    | -                                                                                                       | -           |
| cpu_usage       | get_c_p_u_type           | GET    | -                                                                                                       | -           |
| cpu_usage       | stream                   | GET    | -                                                                                                       | -           |
| dns             | reverse_lookup           | GET    | -                                                                                                       | -           |
| dns_diagnostics | get                      | GET    | -                                                                                                       | -           |
| dns_diagnostics | set                      | POST   | -                                                                                                       | -           |
| firewall        | del_state                | POST   | $stateid,$creatorid                                                                                     | -           |
| firewall        | flush_sources            | POST   | -                                                                                                       | -           |
| firewall        | flush_states             | POST   | -                                                                                                       | -           |
| firewall        | kill_states              | POST   | -                                                                                                       | -           |
| firewall        | list_rule_ids            | GET    | -                                                                                                       | -           |
| firewall        | log                      | GET    | -                                                                                                       | -           |
| firewall        | log_filters              | GET    | -                                                                                                       | -           |
| firewall        | pf_states                | GET    | -                                                                                                       | -           |
| firewall        | pf_statistics            | GET    | $section=null                                                                                           | -           |
| firewall        | query_pf_top             | POST   | -                                                                                                       | -           |
| firewall        | query_states             | POST   | -                                                                                                       | -           |
| firewall        | stats                    | GET    | -                                                                                                       | -           |
| firewall        | stream_log               | GET    | -                                                                                                       | -           |
| interface       | \_carp_status            | POST   | $status                                                                                                 | -           |
| interface       | del_route                | POST   | -                                                                                                       | -           |
| interface       | flush_arp                | POST   | -                                                                                                       | -           |
| interface       | get_arp                  | GET    | -                                                                                                       | -           |
| interface       | get_bpf_statistics       | GET    | -                                                                                                       | -           |
| interface       | get_interface_config     | GET    | -                                                                                                       | -           |
| interface       | get_interface_names      | GET    | -                                                                                                       | -           |
| interface       | get_interface_statistics | GET    | -                                                                                                       | -           |
| interface       | get_memory_statistics    | GET    | -                                                                                                       | -           |
| interface       | get_ndp                  | GET    | -                                                                                                       | -           |
| interface       | get_netisr_statistics    | GET    | -                                                                                                       | -           |
| interface       | get_pfsync_nodes         | GET    | -                                                                                                       | -           |
| interface       | get_protocol_statistics  | GET    | -                                                                                                       | -           |
| interface       | get_routes               | GET    | -                                                                                                       | -           |
| interface       | get_socket_statistics    | GET    | -                                                                                                       | -           |
| interface       | get_vip_status           | GET    | -                                                                                                       | -           |
| interface       | search_arp               | GET    | -                                                                                                       | -           |
| interface       | search_ndp               | GET    | -                                                                                                       | -           |
| lvtemplate      | add_item                 | POST   | -                                                                                                       | -           |
| lvtemplate      | del_item                 | POST   | $uuid                                                                                                   | -           |
| lvtemplate      | get                      | GET    | -                                                                                                       | -           |
| lvtemplate      | get_item                 | GET    | $uuid=null                                                                                              | -           |
| lvtemplate      | set                      | POST   | -                                                                                                       | -           |
| lvtemplate      | set_item                 | POST   | $uuid                                                                                                   | -           |
| netflow         | cache_stats              | GET    | -                                                                                                       | -           |
| netflow         | getconfig                | GET    | -                                                                                                       | -           |
| netflow         | is_enabled               | GET    | -                                                                                                       | -           |
| netflow         | reconfigure              | POST   | -                                                                                                       | -           |
| netflow         | setconfig                | GET    | -                                                                                                       | -           |
| netflow         | status                   | GET    | -                                                                                                       | -           |
| networkinsight  | export                   | GET    | $provider=null,$from_date=null,$to_date=null,$resolution=null                                           | -           |
| networkinsight  | get_interfaces           | GET    | -                                                                                                       | -           |
| networkinsight  | get_metadata             | GET    | -                                                                                                       | -           |
| networkinsight  | get_protocols            | GET    | -                                                                                                       | -           |
| networkinsight  | get_services             | GET    | -                                                                                                       | -           |
| networkinsight  | timeserie                | GET    | $provider=null,$measure=null,$from_date=null,$to_date=null,$resolution=null,$field=null,$emulation=null | -           |
| networkinsight  | top                      | GET    | $provider=null,$from_date=null,$to_date=null,$field=null,$measure=null,$max_hits=null                   | -           |
| packet_capture  | download                 | GET    | $jobid                                                                                                  | -           |
| packet_capture  | get                      | GET    | -                                                                                                       | -           |
| packet_capture  | mac_info                 | GET    | $macaddr                                                                                                | -           |
| packet_capture  | remove                   | POST   | $jobid                                                                                                  | -           |
| packet_capture  | search_jobs              | GET    | -                                                                                                       | -           |
| packet_capture  | set                      | POST   | -                                                                                                       | -           |
| packet_capture  | start                    | POST   | $jobid                                                                                                  | -           |
| packet_capture  | stop                     | POST   | $jobid                                                                                                  | -           |
| packet_capture  | view                     | GET    | $jobid,$detail=normal                                                                                   | -           |
| ping            | get                      | GET    | -                                                                                                       | -           |
| ping            | remove                   | POST   | $jobid                                                                                                  | -           |
| ping            | search_jobs              | GET    | -                                                                                                       | -           |
| ping            | set                      | POST   | -                                                                                                       | -           |
| ping            | start                    | POST   | $jobid                                                                                                  | -           |
| ping            | stop                     | POST   | $jobid                                                                                                  | -           |
| portprobe       | get                      | GET    | -                                                                                                       | -           |
| portprobe       | set                      | POST   | -                                                                                                       | -           |
| system          | memory                   | GET    | -                                                                                                       | -           |
| system          | system_disk              | GET    | -                                                                                                       | -           |
| system          | system_information       | GET    | -                                                                                                       | -           |
| system          | system_mbuf              | GET    | -                                                                                                       | -           |
| system          | system_resources         | GET    | -                                                                                                       | -           |
| system          | system_swap              | GET    | -                                                                                                       | -           |
| system          | system_temperature       | GET    | -                                                                                                       | -           |
| system          | system_time              | GET    | -                                                                                                       | -           |
| systemhealth    | export_as_c_s_v          | GET    | $rrd=’’,$detail=-1                                                                                      | -           |
| systemhealth    | get_interfaces           | GET    | -                                                                                                       | -           |
| systemhealth    | get_r_r_dlist            | GET    | -                                                                                                       | -           |
| systemhealth    | get_system_health        | GET    | $rrd=’’,$unused=0,$detail=-1                                                                            | -           |
| traceroute      | get                      | GET    | -                                                                                                       | -           |
| traceroute      | set                      | POST   | -                                                                                                       | -           |
| traffic         | \_interface              | GET    | -                                                                                                       | -           |
| traffic         | \_top                    | GET    | $interfaces                                                                                             | -           |
| traffic         | stream                   | GET    | $poll_interval=1                                                                                        | -           |

### Model Structure

---

## Dnsmasq

**Module:** Dnsmasq  
**Type:** core  
**Endpoints:** 35

### Endpoints

| Controller | Command        | Method | Parameters | Description |
| ---------- | -------------- | ------ | ---------- | ----------- |
| leases     | search         | GET    | -          | -           |
| service    | reconfigure    | POST   | -          | -           |
| service    | restart        | POST   | -          | -           |
| service    | start          | POST   | -          | -           |
| service    | status         | GET    | -          | -           |
| service    | stop           | POST   | -          | -           |
| settings   | add_boot       | POST   | -          | -           |
| settings   | add_domain     | POST   | -          | -           |
| settings   | add_host       | POST   | -          | -           |
| settings   | add_option     | POST   | -          | -           |
| settings   | add_range      | POST   | -          | -           |
| settings   | add_tag        | POST   | -          | -           |
| settings   | del_boot       | POST   | $uuid      | -           |
| settings   | del_domain     | POST   | $uuid      | -           |
| settings   | del_host       | POST   | $uuid      | -           |
| settings   | del_option     | POST   | $uuid      | -           |
| settings   | del_range      | POST   | $uuid      | -           |
| settings   | del_tag        | POST   | $uuid      | -           |
| settings   | download_hosts | GET    | -          | -           |
| settings   | get            | GET    | -          | -           |
| settings   | get_boot       | GET    | $uuid=null | -           |
| settings   | get_domain     | GET    | $uuid=null | -           |
| settings   | get_host       | GET    | $uuid=null | -           |
| settings   | get_option     | GET    | $uuid=null | -           |
| settings   | get_range      | GET    | $uuid=null | -           |
| settings   | get_tag        | GET    | $uuid=null | -           |
| settings   | get_tag_list   | GET    | -          | -           |
| settings   | set            | POST   | -          | -           |
| settings   | set_boot       | POST   | $uuid      | -           |
| settings   | set_domain     | POST   | $uuid      | -           |
| settings   | set_host       | POST   | $uuid      | -           |
| settings   | set_option     | POST   | $uuid      | -           |
| settings   | set_range      | POST   | $uuid      | -           |
| settings   | set_tag        | POST   | $uuid      | -           |
| settings   | upload_hosts   | POST   | -          | -           |

### Model Structure

#### Containers

**hosts**

_No fields defined_

**domainoverrides**

_No fields defined_

**dhcp_tags**

_No fields defined_

**dhcp_ranges**

_No fields defined_

**dhcp_options**

_No fields defined_

**dhcp_boot**

_No fields defined_

---

## Firewall

**Module:** Firewall  
**Type:** core  
**Endpoints:** 67

### Endpoints

| Controller  | Command                     | Method | Parameters                  | Description |
| ----------- | --------------------------- | ------ | --------------------------- | ----------- |
| alias       | add_item                    | POST   | -                           | -           |
| alias       | del_item                    | POST   | $uuid                       | -           |
| alias       | get                         | GET    | -                           | -           |
| alias       | get_alias_u_u_i_d           | GET    | $name                       | -           |
| alias       | get_geo_i_p                 | GET    | -                           | -           |
| alias       | get_item                    | GET    | $uuid=null                  | -           |
| alias       | get_table_size              | GET    | -                           | -           |
| alias       | import                      | POST   | -                           | -           |
| alias       | list_categories             | GET    | -                           | -           |
| alias       | list_countries              | GET    | -                           | -           |
| alias       | list_network_aliases        | GET    | -                           | -           |
| alias       | list_user_groups            | GET    | -                           | -           |
| alias       | reconfigure                 | POST   | -                           | -           |
| alias       | set                         | POST   | -                           | -           |
| alias       | set_item                    | POST   | $uuid                       | -           |
| alias       | toggle_item                 | POST   | $uuid,$enabled=null         | -           |
| alias_util  | add                         | POST   | $alias                      | -           |
| alias_util  | aliases                     | GET    | -                           | -           |
| alias_util  | delete                      | POST   | $alias                      | -           |
| alias_util  | find_references             | POST   | -                           | -           |
| alias_util  | flush                       | POST   | $alias                      | -           |
| alias_util  | list                        | GET    | $alias                      | -           |
| alias_util  | update_bogons               | GET    | -                           | -           |
| category    | add_item                    | POST   | -                           | -           |
| category    | del_item                    | POST   | $uuid                       | -           |
| category    | get                         | GET    | -                           | -           |
| category    | get_item                    | GET    | $uuid=null                  | -           |
| category    | set                         | POST   | -                           | -           |
| category    | set_item                    | POST   | $uuid                       | -           |
| filter_base | apply                       | POST   | $rollback_revision=null     | -           |
| filter_base | cancel_rollback             | POST   | $rollback_revision          | -           |
| filter_base | get                         | GET    | -                           | -           |
| filter_base | list_categories             | GET    | -                           | -           |
| filter_base | list_network_select_options | GET    | -                           | -           |
| filter_base | revert                      | POST   | $revision                   | -           |
| filter_base | savepoint                   | POST   | -                           | -           |
| filter_base | set                         | POST   | -                           | -           |
| filter      | add_rule                    | POST   | -                           | -           |
| filter      | del_rule                    | POST   | $uuid                       | -           |
| filter      | get_interface_list          | GET    | -                           | -           |
| filter      | get_rule                    | GET    | $uuid=null                  | -           |
| filter      | move_rule_before            | POST   | $selected_uuid,$target_uuid | -           |
| filter      | set_rule                    | POST   | $uuid                       | -           |
| filter      | toggle_rule                 | POST   | $uuid,$enabled=null         | -           |
| filter_util | rule_stats                  | GET    | -                           | -           |
| group       | add_item                    | POST   | -                           | -           |
| group       | del_item                    | POST   | $uuid                       | -           |
| group       | get                         | GET    | -                           | -           |
| group       | get_item                    | GET    | $uuid=null                  | -           |
| group       | reconfigure                 | POST   | -                           | -           |
| group       | set                         | POST   | -                           | -           |
| group       | set_item                    | POST   | $uuid                       | -           |
| npt         | add_rule                    | POST   | -                           | -           |
| npt         | del_rule                    | POST   | $uuid                       | -           |
| npt         | get_rule                    | GET    | $uuid=null                  | -           |
| npt         | set_rule                    | POST   | $uuid                       | -           |
| npt         | toggle_rule                 | POST   | $uuid,$enabled=null         | -           |
| one_to_one  | add_rule                    | POST   | -                           | -           |
| one_to_one  | del_rule                    | POST   | $uuid                       | -           |
| one_to_one  | get_rule                    | GET    | $uuid=null                  | -           |
| one_to_one  | set_rule                    | POST   | $uuid                       | -           |
| one_to_one  | toggle_rule                 | POST   | $uuid,$enabled=null         | -           |
| source_nat  | add_rule                    | POST   | -                           | -           |
| source_nat  | del_rule                    | POST   | $uuid                       | -           |
| source_nat  | get_rule                    | GET    | $uuid=null                  | -           |
| source_nat  | set_rule                    | POST   | $uuid                       | -           |
| source_nat  | toggle_rule                 | POST   | $uuid,$enabled=null         | -           |

### Model Structure

---

## Firmware

**Module:** Firmware  
**Type:** core  
**Endpoints:** 26

### Endpoints

| Controller | Command       | Method | Parameters | Description |
| ---------- | ------------- | ------ | ---------- | ----------- |
| firmware   | audit         | POST   | -          | -           |
| firmware   | changelog     | POST   | $version   | -           |
| firmware   | check         | POST   | -          | -           |
| firmware   | connection    | POST   | -          | -           |
| firmware   | get           | GET    | -          | -           |
| firmware   | getOptions    | GET    | -          | -           |
| firmware   | health        | POST   | -          | -           |
| firmware   | info          | GET    | -          | -           |
| firmware   | log           | POST   | $clear     | -           |
| firmware   | poweroff      | POST   | -          | -           |
| firmware   | reboot        | POST   | -          | -           |
| firmware   | resyncPlugins | POST   | -          | -           |
| firmware   | running       | GET    | -          | -           |
| firmware   | set           | POST   | -          | -           |
| firmware   | status        | POST   | -          | -           |
| firmware   | syncPlugins   | POST   | -          | -           |
| firmware   | update        | POST   | -          | -           |
| firmware   | upgrade       | POST   | -          | -           |
| firmware   | upgradestatus | GET    | -          | -           |
| firmware   | details       | POST   | $pkg_name  | -           |
| firmware   | install       | POST   | $pkg_name  | -           |
| firmware   | license       | POST   | $pkg_name  | -           |
| firmware   | lock          | POST   | $pkg_name  | -           |
| firmware   | remove        | POST   | $pkg_name  | -           |
| firmware   | reinstall     | POST   | $pkg_name  | -           |
| firmware   | unlock        | POST   | $pkg_name  | -           |

---

## Ids

**Module:** Ids  
**Type:** core  
**Endpoints:** 40

### Endpoints

| Controller | Command                | Method | Parameters               | Description |
| ---------- | ---------------------- | ------ | ------------------------ | ----------- |
| service    | drop_alert_log         | POST   | -                        | -           |
| service    | get_alert_info         | GET    | $alertId,$fileid=’’      | -           |
| service    | get_alert_logs         | GET    | -                        | -           |
| service    | query_alerts           | POST   | -                        | -           |
| service    | reconfigure            | POST   | -                        | -           |
| service    | reload_rules           | POST   | -                        | -           |
| service    | restart                | POST   | -                        | -           |
| service    | start                  | POST   | -                        | -           |
| service    | status                 | GET    | -                        | -           |
| service    | stop                   | POST   | -                        | -           |
| service    | update_rules           | POST   | $wait=null               | -           |
| settings   | add_policy             | POST   | -                        | -           |
| settings   | add_policy_rule        | POST   | -                        | -           |
| settings   | add_user_rule          | POST   | -                        | -           |
| settings   | check_policy_rule      | GET    | -                        | -           |
| settings   | del_policy             | POST   | $uuid                    | -           |
| settings   | del_policy_rule        | POST   | $uuid                    | -           |
| settings   | del_user_rule          | POST   | $uuid                    | -           |
| settings   | get                    | GET    | -                        | -           |
| settings   | get_policy             | GET    | $uuid=null               | -           |
| settings   | get_policy_rule        | GET    | $uuid=null               | -           |
| settings   | get_rule_info          | GET    | $sid=null                | -           |
| settings   | get_ruleset            | GET    | $id                      | -           |
| settings   | get_rulesetproperties  | GET    | -                        | -           |
| settings   | get_user_rule          | GET    | $uuid=null               | -           |
| settings   | list_rule_metadata     | GET    | -                        | -           |
| settings   | list_rulesets          | GET    | -                        | -           |
| settings   | search_installed_rules | POST   | -                        | -           |
| settings   | set                    | POST   | -                        | -           |
| settings   | set_policy             | POST   | $uuid                    | -           |
| settings   | set_policy_rule        | POST   | $uuid                    | -           |
| settings   | set_rule               | POST   | $sid                     | -           |
| settings   | set_ruleset            | POST   | $filename                | -           |
| settings   | set_rulesetproperties  | POST   | -                        | -           |
| settings   | set_user_rule          | POST   | $uuid                    | -           |
| settings   | toggle_policy          | POST   | $uuid,$enabled=null      | -           |
| settings   | toggle_policy_rule     | POST   | $uuid,$enabled=null      | -           |
| settings   | toggle_rule            | POST   | $sids,$enabled=null      | -           |
| settings   | toggle_ruleset         | POST   | $filenames,$enabled=null | -           |
| settings   | toggle_user_rule       | POST   | $uuid,$enabled=null      | -           |

### Model Structure

#### Containers

**policy**

_No fields defined_

**rule**

_No fields defined_

**file**

_No fields defined_

**tag**

_No fields defined_

---

## Interfaces

**Module:** Interfaces  
**Type:** core  
**Endpoints:** 63

### Endpoints

| Controller        | Command          | Method | Parameters       | Description |
| ----------------- | ---------------- | ------ | ---------------- | ----------- |
| gif_settings      | add_item         | POST   | -                | -           |
| gif_settings      | del_item         | POST   | $uuid            | -           |
| gif_settings      | get              | GET    | -                | -           |
| gif_settings      | get_if_options   | GET    | -                | -           |
| gif_settings      | get_item         | GET    | $uuid=null       | -           |
| gif_settings      | reconfigure      | POST   | -                | -           |
| gif_settings      | set              | POST   | -                | -           |
| gif_settings      | set_item         | POST   | $uuid            | -           |
| gre_settings      | add_item         | POST   | -                | -           |
| gre_settings      | del_item         | POST   | $uuid            | -           |
| gre_settings      | get              | GET    | -                | -           |
| gre_settings      | get_if_options   | GET    | -                | -           |
| gre_settings      | get_item         | GET    | $uuid=null       | -           |
| gre_settings      | reconfigure      | POST   | -                | -           |
| gre_settings      | set              | POST   | -                | -           |
| gre_settings      | set_item         | POST   | $uuid            | -           |
| lagg_settings     | add_item         | POST   | -                | -           |
| lagg_settings     | del_item         | POST   | $uuid            | -           |
| lagg_settings     | get              | GET    | -                | -           |
| lagg_settings     | get_item         | GET    | $uuid=null       | -           |
| lagg_settings     | reconfigure      | POST   | -                | -           |
| lagg_settings     | set              | POST   | -                | -           |
| lagg_settings     | set_item         | POST   | $uuid            | -           |
| loopback_settings | add_item         | POST   | -                | -           |
| loopback_settings | del_item         | POST   | $uuid            | -           |
| loopback_settings | get              | GET    | -                | -           |
| loopback_settings | get_item         | GET    | $uuid=null       | -           |
| loopback_settings | reconfigure      | POST   | -                | -           |
| loopback_settings | set              | POST   | -                | -           |
| loopback_settings | set_item         | POST   | $uuid            | -           |
| neighbor_settings | add_item         | POST   | -                | -           |
| neighbor_settings | del_item         | POST   | $uuid            | -           |
| neighbor_settings | get              | GET    | -                | -           |
| neighbor_settings | get_item         | GET    | $uuid=null       | -           |
| neighbor_settings | reconfigure      | POST   | -                | -           |
| neighbor_settings | set              | POST   | -                | -           |
| neighbor_settings | set_item         | POST   | $uuid            | -           |
| overview          | export           | GET    | -                | -           |
| overview          | get_interface    | GET    | $if=null         | -           |
| overview          | interfaces_info  | GET    | $details=false   | -           |
| overview          | reload_interface | GET    | $identifier=null | -           |
| vip_settings      | add_item         | POST   | -                | -           |
| vip_settings      | del_item         | POST   | $uuid            | -           |
| vip_settings      | get              | GET    | -                | -           |
| vip_settings      | get_item         | GET    | $uuid=null       | -           |
| vip_settings      | get_unused_vhid  | GET    | -                | -           |
| vip_settings      | reconfigure      | POST   | -                | -           |
| vip_settings      | set              | POST   | -                | -           |
| vip_settings      | set_item         | POST   | $uuid            | -           |
| vlan_settings     | add_item         | POST   | -                | -           |
| vlan_settings     | del_item         | POST   | $uuid            | -           |
| vlan_settings     | get              | GET    | -                | -           |
| vlan_settings     | get_item         | GET    | $uuid=null       | -           |
| vlan_settings     | reconfigure      | POST   | -                | -           |
| vlan_settings     | set              | POST   | -                | -           |
| vlan_settings     | set_item         | POST   | $uuid            | -           |
| vxlan_settings    | add_item         | POST   | -                | -           |
| vxlan_settings    | del_item         | POST   | $uuid            | -           |
| vxlan_settings    | get              | GET    | -                | -           |
| vxlan_settings    | get_item         | GET    | $uuid=null       | -           |
| vxlan_settings    | reconfigure      | POST   | -                | -           |
| vxlan_settings    | set              | POST   | -                | -           |
| vxlan_settings    | set_item         | POST   | $uuid            | -           |

### Model Structure

#### Containers

**gif**

_No fields defined_

---

## Ipsec

**Module:** Ipsec  
**Type:** core  
**Endpoints:** 80

### Endpoints

| Controller       | Command           | Method | Parameters           | Description |
| ---------------- | ----------------- | ------ | -------------------- | ----------- |
| connections      | add_child         | POST   | -                    | -           |
| connections      | add_connection    | POST   | -                    | -           |
| connections      | add_local         | POST   | -                    | -           |
| connections      | add_remote        | POST   | -                    | -           |
| connections      | connection_exists | GET    | $uuid                | -           |
| connections      | del_child         | POST   | $uuid                | -           |
| connections      | del_connection    | POST   | $uuid                | -           |
| connections      | del_local         | POST   | $uuid                | -           |
| connections      | del_remote        | POST   | $uuid                | -           |
| connections      | get               | GET    | -                    | -           |
| connections      | get_child         | GET    | $uuid=null           | -           |
| connections      | get_connection    | GET    | $uuid=null           | -           |
| connections      | get_local         | GET    | $uuid=null           | -           |
| connections      | get_remote        | GET    | $uuid=null           | -           |
| connections      | is_enabled        | GET    | -                    | -           |
| connections      | set               | POST   | -                    | -           |
| connections      | set_child         | POST   | $uuid=null           | -           |
| connections      | set_connection    | POST   | $uuid=null           | -           |
| connections      | set_local         | POST   | $uuid=null           | -           |
| connections      | set_remote        | POST   | $uuid=null           | -           |
| connections      | swanctl           | GET    | -                    | -           |
| connections      | toggle            | POST   | $enabled=null        | -           |
| connections      | toggle_child      | POST   | $uuid,$enabled=null  | -           |
| connections      | toggle_connection | POST   | $uuid,$enabled=null  | -           |
| connections      | toggle_local      | POST   | $uuid,$enabled=null  | -           |
| connections      | toggle_remote     | POST   | $uuid,$enabled=null  | -           |
| key_pairs        | add_item          | POST   | -                    | -           |
| key_pairs        | del_item          | POST   | $uuid                | -           |
| key_pairs        | gen_key_pair      | GET    | $type,$size=null     | -           |
| key_pairs        | get               | GET    | -                    | -           |
| key_pairs        | get_item          | GET    | $uuid=null           | -           |
| key_pairs        | set               | POST   | -                    | -           |
| key_pairs        | set_item          | POST   | $uuid=null           | -           |
| leases           | pools             | GET    | -                    | -           |
| leases           | search            | GET    | -                    | -           |
| legacy_subsystem | apply_config      | POST   | -                    | -           |
| legacy_subsystem | status            | GET    | -                    | -           |
| manual_spd       | add               | POST   | -                    | -           |
| manual_spd       | del               | POST   | $uuid                | -           |
| manual_spd       | get               | GET    | $uuid=null           | -           |
| manual_spd       | set               | POST   | $uuid=null           | -           |
| manual_spd       | toggle            | POST   | $uuid,$enabled=null  | -           |
| pools            | add               | POST   | -                    | -           |
| pools            | del               | POST   | $uuid                | -           |
| pools            | get               | GET    | $uuid=null           | -           |
| pools            | set               | POST   | $uuid=null           | -           |
| pools            | toggle            | POST   | $uuid,$enabled=null  | -           |
| pre_shared_keys  | add_item          | POST   | -                    | -           |
| pre_shared_keys  | del_item          | POST   | $uuid                | -           |
| pre_shared_keys  | get               | GET    | -                    | -           |
| pre_shared_keys  | get_item          | GET    | $uuid=null           | -           |
| pre_shared_keys  | set               | POST   | -                    | -           |
| pre_shared_keys  | set_item          | POST   | $uuid=null           | -           |
| sad              | delete            | POST   | $id                  | -           |
| sad              | search            | GET    | -                    | -           |
| service          | reconfigure       | POST   | -                    | -           |
| service          | restart           | POST   | -                    | -           |
| service          | start             | POST   | -                    | -           |
| service          | status            | GET    | -                    | -           |
| service          | stop              | POST   | -                    | -           |
| sessions         | connect           | POST   | $id                  | -           |
| sessions         | disconnect        | POST   | $id                  | -           |
| sessions         | search_phase1     | GET    | -                    | -           |
| sessions         | search_phase2     | GET    | -                    | -           |
| settings         | get               | GET    | -                    | -           |
| settings         | set               | POST   | -                    | -           |
| spd              | delete            | POST   | $id                  | -           |
| spd              | search            | GET    | -                    | -           |
| tunnel           | del_phase1        | POST   | $ikeid               | -           |
| tunnel           | del_phase2        | POST   | $seqid               | -           |
| tunnel           | search_phase1     | GET    | -                    | -           |
| tunnel           | search_phase2     | GET    | -                    | -           |
| tunnel           | toggle            | POST   | $enabled=null        | -           |
| tunnel           | toggle_phase1     | POST   | $ikeid,$enabled=null | -           |
| tunnel           | toggle_phase2     | POST   | $seqid,$enabled=null | -           |
| vti              | add               | POST   | -                    | -           |
| vti              | del               | POST   | $uuid                | -           |
| vti              | get               | GET    | $uuid=null           | -           |
| vti              | set               | POST   | $uuid=null           | -           |
| vti              | toggle            | POST   | $uuid,$enabled=null  | -           |

### Model Structure

#### Containers

**local**

_No fields defined_

**remote**

_No fields defined_

**child**

_No fields defined_

**Pool**

_No fields defined_

---

## Kea

**Module:** Kea  
**Type:** core  
**Endpoints:** 24

### Endpoints

| Controller | Command               | Method | Parameters | Description |
| ---------- | --------------------- | ------ | ---------- | ----------- |
| ctrl_agent | get                   | GET    | -          | -           |
| ctrl_agent | set                   | POST   | -          | -           |
| dhcpv4     | add_peer              | POST   | -          | -           |
| dhcpv4     | add_reservation       | POST   | -          | -           |
| dhcpv4     | add_subnet            | POST   | -          | -           |
| dhcpv4     | del_peer              | POST   | $uuid      | -           |
| dhcpv4     | del_reservation       | POST   | $uuid      | -           |
| dhcpv4     | del_subnet            | POST   | $uuid      | -           |
| dhcpv4     | download_reservations | GET    | -          | -           |
| dhcpv4     | get                   | GET    | -          | -           |
| dhcpv4     | get_peer              | GET    | $uuid=null | -           |
| dhcpv4     | get_reservation       | GET    | $uuid=null | -           |
| dhcpv4     | get_subnet            | GET    | $uuid=null | -           |
| dhcpv4     | set                   | POST   | -          | -           |
| dhcpv4     | set_peer              | POST   | $uuid      | -           |
| dhcpv4     | set_reservation       | POST   | $uuid      | -           |
| dhcpv4     | set_subnet            | POST   | $uuid      | -           |
| dhcpv4     | upload_reservations   | POST   | -          | -           |
| leases4    | search                | GET    | -          | -           |
| service    | reconfigure           | POST   | -          | -           |
| service    | restart               | POST   | -          | -           |
| service    | start                 | POST   | -          | -           |
| service    | status                | GET    | -          | -           |
| service    | stop                  | POST   | -          | -           |

### Model Structure

---

## Monit

**Module:** Monit  
**Type:** core  
**Endpoints:** 25

### Endpoints

| Controller | Command        | Method | Parameters          | Description |
| ---------- | -------------- | ------ | ------------------- | ----------- |
| service    | check          | POST   | -                   | -           |
| service    | reconfigure    | POST   | -                   | -           |
| service    | restart        | POST   | -                   | -           |
| service    | start          | POST   | -                   | -           |
| service    | status         | GET    | -                   | -           |
| service    | stop           | POST   | -                   | -           |
| settings   | add_alert      | POST   | -                   | -           |
| settings   | add_service    | POST   | -                   | -           |
| settings   | add_test       | POST   | -                   | -           |
| settings   | del_alert      | POST   | $uuid               | -           |
| settings   | del_service    | POST   | $uuid               | -           |
| settings   | del_test       | POST   | $uuid               | -           |
| settings   | dirty          | GET    | -                   | -           |
| settings   | get            | GET    | -                   | -           |
| settings   | get_alert      | GET    | $uuid=null          | -           |
| settings   | get_general    | GET    | -                   | -           |
| settings   | get_service    | GET    | $uuid=null          | -           |
| settings   | get_test       | GET    | $uuid=null          | -           |
| settings   | set            | POST   | -                   | -           |
| settings   | set_alert      | POST   | $uuid               | -           |
| settings   | set_service    | POST   | $uuid               | -           |
| settings   | set_test       | POST   | $uuid               | -           |
| settings   | toggle_alert   | POST   | $uuid,$enabled=null | -           |
| settings   | toggle_service | POST   | $uuid,$enabled=null | -           |
| status     | get            | GET    | $format=xml         | -           |

### Model Structure

#### Containers

**alert**

_No fields defined_

**service**

_No fields defined_

**test**

_No fields defined_

---

## Openvpn

**Module:** Openvpn  
**Type:** core  
**Endpoints:** 28

### Endpoints

| Controller        | Command          | Method | Parameters           | Description |
| ----------------- | ---------------- | ------ | -------------------- | ----------- |
| client_overwrites | add              | POST   | -                    | -           |
| client_overwrites | del              | POST   | $uuid                | -           |
| client_overwrites | get              | GET    | $uuid=null           | -           |
| client_overwrites | set              | POST   | $uuid=null           | -           |
| client_overwrites | toggle           | POST   | $uuid,$enabled=null  | -           |
| export            | accounts         | GET    | $vpnid=null          | -           |
| export            | download         | POST   | $vpnid,$certref=null | -           |
| export            | providers        | GET    | -                    | -           |
| export            | store_presets    | POST   | $vpnid               | -           |
| export            | templates        | GET    | -                    | -           |
| export            | validate_presets | POST   | $vpnid               | -           |
| instances         | add              | POST   | -                    | -           |
| instances         | add_static_key   | POST   | -                    | -           |
| instances         | del              | POST   | $uuid                | -           |
| instances         | del_static_key   | POST   | $uuid                | -           |
| instances         | gen_key          | GET    | $type=secret         | -           |
| instances         | get              | GET    | $uuid=null           | -           |
| instances         | get_static_key   | GET    | $uuid=null           | -           |
| instances         | set              | POST   | $uuid=null           | -           |
| instances         | set_static_key   | POST   | $uuid=null           | -           |
| instances         | toggle           | POST   | $uuid,$enabled=null  | -           |
| service           | kill_session     | POST   | -                    | -           |
| service           | reconfigure      | POST   | -                    | -           |
| service           | restart_service  | POST   | $id=null             | -           |
| service           | search_routes    | GET    | -                    | -           |
| service           | search_sessions  | GET    | -                    | -           |
| service           | start_service    | POST   | $id=null             | -           |
| service           | stop_service     | POST   | $id=null             | -           |

### Model Structure

#### Containers

**Overwrite**

_No fields defined_

**StaticKey**

_No fields defined_

---

## Routes

**Module:** Routes  
**Type:** core  
**Endpoints:** 9

### Endpoints

| Controller | Command     | Method | Parameters           | Description |
| ---------- | ----------- | ------ | -------------------- | ----------- |
| gateway    | status      | GET    | -                    | -           |
| routes     | addroute    | POST   | -                    | -           |
| routes     | delroute    | POST   | $uuid                | -           |
| routes     | get         | GET    | -                    | -           |
| routes     | getroute    | GET    | $uuid=null           | -           |
| routes     | reconfigure | POST   | -                    | -           |
| routes     | set         | POST   | -                    | -           |
| routes     | setroute    | POST   | $uuid                | -           |
| routes     | toggleroute | POST   | $uuid,$disabled=null | -           |

### Model Structure

#### Containers

**route**

_No fields defined_

---

## Routing

**Module:** Routing  
**Type:** core  
**Endpoints:** 9

### Endpoints

| Controller | Command        | Method | Parameters          | Description |
| ---------- | -------------- | ------ | ------------------- | ----------- |
| settings   | add_gateway    | POST   | -                   | -           |
| settings   | del_gateway    | POST   | $uuid               | -           |
| settings   | get            | GET    | -                   | -           |
| settings   | get_gateway    | GET    | $uuid=null          | -           |
| settings   | reconfigure    | POST   | -                   | -           |
| settings   | search_gateway | GET    | -                   | -           |
| settings   | set            | POST   | -                   | -           |
| settings   | set_gateway    | POST   | $uuid               | -           |
| settings   | toggle_gateway | POST   | $uuid,$enabled=null | -           |

### Model Structure

---

## Syslog

**Module:** Syslog  
**Type:** core  
**Endpoints:** 14

### Endpoints

| Controller | Command            | Method | Parameters          | Description |
| ---------- | ------------------ | ------ | ------------------- | ----------- |
| service    | reconfigure        | POST   | -                   | -           |
| service    | reset              | POST   | -                   | -           |
| service    | restart            | POST   | -                   | -           |
| service    | start              | POST   | -                   | -           |
| service    | stats              | GET    | -                   | -           |
| service    | status             | GET    | -                   | -           |
| service    | stop               | POST   | -                   | -           |
| settings   | add_destination    | POST   | -                   | -           |
| settings   | del_destination    | POST   | $uuid               | -           |
| settings   | get                | GET    | -                   | -           |
| settings   | get_destination    | GET    | $uuid=null          | -           |
| settings   | set                | POST   | -                   | -           |
| settings   | set_destination    | POST   | $uuid               | -           |
| settings   | toggle_destination | POST   | $uuid,$enabled=null | -           |

### Model Structure

#### Containers

**destination**

_No fields defined_

---

## Trafficshaper

**Module:** Trafficshaper  
**Type:** core  
**Endpoints:** 20

### Endpoints

| Controller | Command      | Method | Parameters          | Description |
| ---------- | ------------ | ------ | ------------------- | ----------- |
| service    | flushreload  | POST   | -                   | -           |
| service    | reconfigure  | POST   | -                   | -           |
| service    | statistics   | GET    | -                   | -           |
| settings   | add_pipe     | POST   | -                   | -           |
| settings   | add_queue    | POST   | -                   | -           |
| settings   | add_rule     | POST   | -                   | -           |
| settings   | del_pipe     | POST   | $uuid               | -           |
| settings   | del_queue    | POST   | $uuid               | -           |
| settings   | del_rule     | POST   | $uuid               | -           |
| settings   | get          | GET    | -                   | -           |
| settings   | get_pipe     | GET    | $uuid=null          | -           |
| settings   | get_queue    | GET    | $uuid=null          | -           |
| settings   | get_rule     | GET    | $uuid=null          | -           |
| settings   | set          | POST   | -                   | -           |
| settings   | set_pipe     | POST   | $uuid               | -           |
| settings   | set_queue    | POST   | $uuid               | -           |
| settings   | set_rule     | POST   | $uuid               | -           |
| settings   | toggle_pipe  | POST   | $uuid,$enabled=null | -           |
| settings   | toggle_queue | POST   | $uuid,$enabled=null | -           |
| settings   | toggle_rule  | POST   | $uuid,$enabled=null | -           |

### Model Structure

#### Containers

**pipe**

_No fields defined_

**queue**

_No fields defined_

**rule**

_No fields defined_

---

## Trust

**Module:** Trust  
**Type:** core  
**Endpoints:** 25

### Endpoints

| Controller | Command            | Method | Parameters           | Description |
| ---------- | ------------------ | ------ | -------------------- | ----------- |
| ca         | ca_info            | GET    | $caref               | -           |
| ca         | ca_list            | GET    | -                    | -           |
| ca         | del                | POST   | $uuid                | -           |
| ca         | generate_file      | POST   | $uuid=null,$type=crt | -           |
| ca         | get                | GET    | -                    | -           |
| ca         | raw_dump           | GET    | $uuid                | -           |
| ca         | set                | POST   | $uuid=null           | -           |
| cert       | add                | POST   | -                    | -           |
| cert       | ca_info            | GET    | $caref=null          | -           |
| cert       | ca_list            | GET    | -                    | -           |
| cert       | del                | POST   | $uuid                | -           |
| cert       | generate_file      | POST   | $uuid=null,$type=crt | -           |
| cert       | get                | GET    | $uuid=null           | -           |
| cert       | raw_dump           | GET    | $uuid                | -           |
| cert       | set                | POST   | $uuid=null           | -           |
| cert       | user_list          | GET    | -                    | -           |
| crl        | del                | POST   | $caref               | -           |
| crl        | get                | GET    | $caref               | -           |
| crl        | get_ocsp_info_data | GET    | $caref               | -           |
| crl        | raw_dump           | GET    | $caref               | -           |
| crl        | search             | GET    | -                    | -           |
| crl        | set                | POST   | $caref               | -           |
| settings   | get                | GET    | -                    | -           |
| settings   | reconfigure        | POST   | -                    | -           |
| settings   | set                | POST   | -                    | -           |

### Model Structure

---

## Unbound

**Module:** Unbound  
**Type:** core  
**Endpoints:** 42

### Endpoints

| Controller  | Command               | Method | Parameters             | Description |
| ----------- | --------------------- | ------ | ---------------------- | ----------- |
| diagnostics | dumpcache             | GET    | -                      | -           |
| diagnostics | dumpinfra             | GET    | -                      | -           |
| diagnostics | listinsecure          | GET    | -                      | -           |
| diagnostics | listlocaldata         | GET    | -                      | -           |
| diagnostics | listlocalzones        | GET    | -                      | -           |
| diagnostics | stats                 | GET    | -                      | -           |
| overview    | \_rolling             | GET    | $timeperiod,$clients=0 | -           |
| overview    | is_block_list_enabled | GET    | -                      | -           |
| overview    | is_enabled            | GET    | -                      | -           |
| overview    | search_queries        | GET    | -                      | -           |
| overview    | totals                | GET    | $maximum               | -           |
| service     | dnsbl                 | GET    | -                      | -           |
| service     | reconfigure           | POST   | -                      | -           |
| service     | reconfigure_general   | GET    | -                      | -           |
| service     | restart               | POST   | -                      | -           |
| service     | start                 | POST   | -                      | -           |
| service     | status                | GET    | -                      | -           |
| service     | stop                  | POST   | -                      | -           |
| settings    | add_acl               | POST   | -                      | -           |
| settings    | add_forward           | POST   | -                      | -           |
| settings    | add_host_alias        | POST   | -                      | -           |
| settings    | add_host_override     | POST   | -                      | -           |
| settings    | del_acl               | POST   | $uuid                  | -           |
| settings    | del_forward           | POST   | $uuid                  | -           |
| settings    | del_host_alias        | POST   | $uuid                  | -           |
| settings    | del_host_override     | POST   | $uuid                  | -           |
| settings    | get                   | GET    | -                      | -           |
| settings    | get_acl               | GET    | $uuid=null             | -           |
| settings    | get_forward           | GET    | $uuid=null             | -           |
| settings    | get_host_alias        | GET    | $uuid=null             | -           |
| settings    | get_host_override     | GET    | $uuid=null             | -           |
| settings    | get_nameservers       | GET    | -                      | -           |
| settings    | set                   | POST   | -                      | -           |
| settings    | set_acl               | POST   | $uuid                  | -           |
| settings    | set_forward           | POST   | $uuid                  | -           |
| settings    | set_host_alias        | POST   | $uuid                  | -           |
| settings    | set_host_override     | POST   | $uuid                  | -           |
| settings    | toggle_acl            | POST   | $uuid,$enabled=null    | -           |
| settings    | toggle_forward        | POST   | $uuid,$enabled=null    | -           |
| settings    | toggle_host_alias     | POST   | $uuid,$enabled=null    | -           |
| settings    | toggle_host_override  | POST   | $uuid,$enabled=null    | -           |
| settings    | update_blocklist      | POST   | -                      | -           |

### Model Structure

#### Containers

**acl**

_No fields defined_

**dot**

_No fields defined_

**host**

_No fields defined_

**alias**

_No fields defined_

---

## Wireguard

**Module:** Wireguard  
**Type:** core  
**Endpoints:** 28

### Endpoints

| Controller | Command            | Method | Parameters | Description |
| ---------- | ------------------ | ------ | ---------- | ----------- |
| client     | add_client         | GET    | -          | -           |
| client     | add_client_builder | POST   | -          | -           |
| client     | del_client         | POST   | $uuid      | -           |
| client     | get                | GET    | -          | -           |
| client     | get_client         | GET    | $uuid=null | -           |
| client     | get_client_builder | GET    | -          | -           |
| client     | get_server_info    | GET    | $uuid=null | -           |
| client     | list_servers       | GET    | -          | -           |
| client     | psk                | GET    | -          | -           |
| client     | set                | POST   | -          | -           |
| client     | set_client         | POST   | $uuid      | -           |
| client     | toggle_client      | POST   | $uuid      | -           |
| general    | get                | GET    | -          | -           |
| general    | set                | POST   | -          | -           |
| server     | add_server         | POST   | $uuid=null | -           |
| server     | del_server         | POST   | $uuid      | -           |
| server     | get                | GET    | -          | -           |
| server     | get_server         | GET    | $uuid=null | -           |
| server     | key_pair           | GET    | -          | -           |
| server     | set                | POST   | -          | -           |
| server     | set_server         | POST   | $uuid=null | -           |
| server     | toggle_server      | POST   | $uuid      | -           |
| service    | reconfigure        | POST   | -          | -           |
| service    | restart            | POST   | -          | -           |
| service    | show               | GET    | -          | -           |
| service    | start              | POST   | -          | -           |
| service    | status             | GET    | -          | -           |
| service    | stop               | POST   | -          | -           |

### Model Structure

---

## Statistics

| Metric                  | Value |
| ----------------------- | ----- |
| Total Core Modules      | 24    |
| Total Endpoints         | 752   |
| Modules with XML Models | 0     |
