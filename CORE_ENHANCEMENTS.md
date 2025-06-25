# Core Module Enhancements

## 🔧 **Complete Core API Transformation**

The core module has been completely restructured and enhanced to provide **comprehensive coverage** of all OPNsense core API endpoints, transforming from a basic system control class to **9 specialized sub-modules** with complete functionality across all core controllers.

## 📦 **New Modular Architecture**

### 1. **Backup Controller** (`client.core.backup`)
Complete backup and configuration management:
```typescript
// List all available backups
const backups = await client.core.backup.getBackups();

// Download a specific backup
const backupData = await client.core.backup.downloadBackup('config-20241225.xml');

// Compare two backups
const diff = await client.core.backup.diffBackups('config-old.xml', 'config-new.xml');

// Restore from backup
await client.core.backup.revertBackup('config-backup.xml');

// Delete old backup
await client.core.backup.deleteBackup('old-config.xml');

// Get backup providers
const providers = await client.core.backup.getProviders();
```

### 2. **Dashboard Controller** (`client.core.dashboard`)
Dashboard customization and information feeds:
```typescript
// Get dashboard configuration
const dashboard = await client.core.dashboard.getDashboard();

// Save custom widget configuration
await client.core.dashboard.saveWidgets({
  widgets: [
    { type: 'system-info', position: { x: 0, y: 0 } },
    { type: 'services', position: { x: 1, y: 0 } }
  ]
});

// Get system picture/logo
const picture = await client.core.dashboard.getPicture();

// Get product information feed
const productInfo = await client.core.dashboard.getProductInfoFeed();

// Restore dashboard to defaults
await client.core.dashboard.restoreDefaults();
```

### 3. **HA Sync Controller** (`client.core.hasync`)
High Availability synchronization management:
```typescript
// Get HA sync configuration
const haConfig = await client.core.hasync.get();

// Configure HA synchronization
await client.core.hasync.set({
  enabled: true,
  peer_ip: '192.168.1.2',
  sync_services: ['firewall', 'interfaces', 'users'],
  automatic_backup: true
});

// Reconfigure HA sync
await client.core.hasync.reconfigure();
```

### 4. **HA Sync Status Controller** (`client.core.hasyncStatus`)
HA synchronization status and control:
```typescript
// Get remote service status
const remoteStatus = await client.core.hasyncStatus.getRemoteService();

// List all synchronized services
const services = await client.core.hasyncStatus.getServices();

// Get remote system version
const version = await client.core.hasyncStatus.getVersion();

// Control individual services
await client.core.hasyncStatus.start('firewall');
await client.core.hasyncStatus.stop('unbound');
await client.core.hasyncStatus.restart('nginx');

// Restart all services
await client.core.hasyncStatus.restartAll();
```

### 5. **Menu Controller** (`client.core.menu`)
Navigation and menu management:
```typescript
// Search menu items
const searchResults = await client.core.menu.search('firewall');

// Get complete menu tree
const menuTree = await client.core.menu.getTree();

// Find specific menu items
const firewallMenus = await client.core.menu.search('firewall rules');
```

### 6. **Service Controller** (`client.core.service`)
System service management:
```typescript
// Search all services
const allServices = await client.core.service.search();

// Search services with filters
const filteredServices = await client.core.service.search({
  searchPhrase: 'web',
  status: 'running'
});

// Control services
await client.core.service.start('nginx');
await client.core.service.stop('apache24');
await client.core.service.restart('unbound');

// Check service status in search results
const webServices = await client.core.service.search({ name: 'nginx' });
```

### 7. **Snapshots Controller** (`client.core.snapshots`)
Configuration snapshot management:
```typescript
// Check if snapshots are supported
const supported = await client.core.snapshots.isSupported();

// Create new snapshot
const snapshot = await client.core.snapshots.add({
  description: 'Before firewall changes',
  automatic: false
});

// Search snapshots
const snapshots = await client.core.snapshots.search({
  searchPhrase: 'firewall'
});

// Get snapshot details
const snapshotDetails = await client.core.snapshots.get(uuid);

// Activate (restore) snapshot
await client.core.snapshots.activate(uuid);

// Delete snapshot
await client.core.snapshots.delete(uuid);

// Update snapshot configuration
await client.core.snapshots.set({
  retention_days: 30,
  max_snapshots: 50
});
```

### 8. **System Controller** (`client.core.system`)
Core system operations:
```typescript
// Get system status
const status = await client.core.system.getStatus();

// System power operations
await client.core.system.reboot();
await client.core.system.halt();

// Dismiss system status notifications
await client.core.system.dismissStatus();
```

### 9. **Tunables Controller** (`client.core.tunables`)
System tuning parameters:
```typescript
// Search system tunables
const tunables = await client.core.tunables.search({
  searchPhrase: 'kernel'
});

// Get tunables configuration
const config = await client.core.tunables.get();

// Add new tunable
await client.core.tunables.add({
  tunable: 'net.inet.tcp.delayed_ack',
  value: '0',
  description: 'Disable TCP delayed ACK'
});

// Get specific tunable
const tunable = await client.core.tunables.getItem(uuid);

// Update tunable
await client.core.tunables.setItem(uuid, {
  value: '1',
  description: 'Enable TCP delayed ACK'
});

// Delete tunable
await client.core.tunables.delete(uuid);

// Apply tunable changes
await client.core.tunables.reconfigure();

// Reset tunables to defaults
await client.core.tunables.reset();
```

## 🔄 **Backward Compatibility & Convenience Methods**

Legacy methods are maintained on the main module for seamless migration, plus many new convenience methods:

```typescript
// Legacy methods still work
const status = await client.core.getStatus();
await client.core.reboot();
await client.core.halt();

// New convenience methods (recommended)
const services = await client.core.searchServices();
await client.core.startService('nginx');
await client.core.stopService('apache24');
await client.core.restartService('unbound');

const tunables = await client.core.searchTunables({ type: 'sysctl' });
await client.core.addTunable({
  tunable: 'kern.ipc.maxsockbuf',
  value: '2097152'
});

const snapshot = await client.core.createSnapshot('Before major changes');
await client.core.restoreSnapshot(snapshotUuid);

const backups = await client.core.listBackups();
await client.core.restoreBackup('config-backup.xml');

const menuTree = await client.core.getMenuTree();
const dashboardInfo = await client.core.getDashboardInfo();
```

## 🎯 **Complete API Coverage**

### **Backup Controller** - 6 endpoints
- ✅ `GET /api/core/backup/backups` - List backups
- ✅ `POST /api/core/backup/delete_backup/{filename}` - Delete backup
- ✅ `GET /api/core/backup/diff/{from}/{to}` - Compare backups
- ✅ `GET /api/core/backup/download/{filename}` - Download backup
- ✅ `GET /api/core/backup/providers` - List backup sources
- ✅ `POST /api/core/backup/revert_backup/{filename}` - Restore backup

### **Dashboard Controller** - 5 endpoints
- ✅ `GET /api/core/dashboard/get_dashboard` - Get dashboard config
- ✅ `GET /api/core/dashboard/picture` - Get system picture
- ✅ `GET /api/core/dashboard/product_info_feed` - Get product info
- ✅ `POST /api/core/dashboard/restore_defaults` - Restore defaults
- ✅ `POST /api/core/dashboard/save_widgets` - Save widget config

### **HA Sync Controller** - 3 endpoints
- ✅ `GET /api/core/hasync/get` - Get HA configuration
- ✅ `POST /api/core/hasync/set` - Set HA configuration
- ✅ `POST /api/core/hasync/reconfigure` - Reconfigure HA

### **HA Sync Status Controller** - 7 endpoints
- ✅ `GET /api/core/hasyncstatus/remote_service` - Remote service status
- ✅ `GET /api/core/hasyncstatus/services` - List services
- ✅ `GET /api/core/hasyncstatus/version` - Get remote version
- ✅ `POST /api/core/hasyncstatus/restart[/{service}]` - Restart service
- ✅ `POST /api/core/hasyncstatus/restart_all` - Restart all services
- ✅ `POST /api/core/hasyncstatus/start/{service}` - Start service
- ✅ `POST /api/core/hasyncstatus/stop/{service}` - Stop service

### **Menu Controller** - 2 endpoints
- ✅ `GET /api/core/menu/search` - Search menu items
- ✅ `GET /api/core/menu/tree` - Get menu tree

### **Service Controller** - 4 endpoints
- ✅ `GET|POST /api/core/service/search` - Search services
- ✅ `POST /api/core/service/start/{service}` - Start service
- ✅ `POST /api/core/service/stop/{service}` - Stop service
- ✅ `POST /api/core/service/restart/{service}` - Restart service

### **Snapshots Controller** - 7 endpoints
- ✅ `POST /api/core/snapshots/search` - Search snapshots
- ✅ `POST /api/core/snapshots/add` - Create snapshot
- ✅ `GET /api/core/snapshots/get[/{uuid}]` - Get snapshot
- ✅ `POST /api/core/snapshots/set` - Set snapshot config
- ✅ `POST /api/core/snapshots/del/{uuid}` - Delete snapshot
- ✅ `POST /api/core/snapshots/activate/{uuid}` - Activate snapshot
- ✅ `GET /api/core/snapshots/is_supported` - Check support

### **System Controller** - 4 endpoints
- ✅ `GET /api/core/system/status` - Get system status
- ✅ `POST /api/core/system/reboot` - Reboot system
- ✅ `POST /api/core/system/halt` - Halt system
- ✅ `POST /api/core/system/dismiss_status` - Dismiss status

### **Tunables Controller** - 9 endpoints
- ✅ `POST /api/core/tunables/search_item` - Search tunables
- ✅ `POST /api/core/tunables/add_item` - Add tunable
- ✅ `GET /api/core/tunables/get` - Get tunables config
- ✅ `GET /api/core/tunables/get_item[/{uuid}]` - Get tunable item
- ✅ `POST /api/core/tunables/set` - Set tunables config
- ✅ `POST /api/core/tunables/set_item/{uuid}` - Update tunable
- ✅ `POST /api/core/tunables/del_item/{uuid}` - Delete tunable
- ✅ `POST /api/core/tunables/reconfigure` - Apply changes
- ✅ `POST /api/core/tunables/reset` - Reset to defaults

### **Legacy & Convenience Methods** - 22 methods
- ✅ All existing methods maintained for backward compatibility
- ✅ 17 new convenience methods for common operations

## 🚀 **Usage Examples**

### **Complete System Administration Workflow**
```typescript
import { OPNsenseClient } from '@richard-stovall/opnsense-typescript-client';

const client = new OPNsenseClient({
  baseUrl: 'https://your-opnsense.local',
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret'
});

// 1. Get system status
const status = await client.core.getStatus();
console.log('System uptime:', status.data.uptime);

// 2. Create backup before changes
const backups = await client.core.listBackups();
console.log('Available backups:', backups.data.length);

// 3. Create configuration snapshot
const snapshot = await client.core.createSnapshot('Before tuning changes');
console.log('Snapshot created:', snapshot.data.uuid);

// 4. Add system tunable for performance
await client.core.addTunable({
  tunable: 'net.inet.tcp.sendspace',
  value: '65536',
  description: 'Increase TCP send buffer'
});

// 5. Apply tunable changes
await client.core.tunables.reconfigure();

// 6. Restart affected service
await client.core.restartService('network');

// 7. Check if reboot is needed
const newStatus = await client.core.getStatus();
if (newStatus.data.needs_reboot) {
  console.log('System reboot required');
  // await client.core.reboot();
}
```

### **Service Management**
```typescript
// Get all running services
const services = await client.core.searchServices({ status: 'running' });

// Find web services
const webServices = await client.core.searchServices({ 
  searchPhrase: 'nginx|apache|lighttpd' 
});

// Service control workflow
for (const service of webServices.data) {
  console.log(`Restarting ${service.name}...`);
  await client.core.restartService(service.name);
  
  // Wait and verify
  await new Promise(resolve => setTimeout(resolve, 2000));
  const updated = await client.core.searchServices({ name: service.name });
  console.log(`${service.name} status:`, updated.data[0].status);
}
```

### **Backup and Restore Management**
```typescript
// List and analyze backups
const backups = await client.core.listBackups();
console.log('Available backups:');

for (const backup of backups.data) {
  console.log(`- ${backup.filename} (${backup.size} bytes, ${backup.date})`);
}

// Compare configurations
const latest = backups.data[0];
const previous = backups.data[1];

if (latest && previous) {
  const diff = await client.core.backup.diffBackups(
    previous.filename, 
    latest.filename
  );
  console.log('Configuration changes:', diff.data);
}

// Download backup for external storage
const backupData = await client.core.downloadBackup(latest.filename);
// Save to external system...

// Restore if needed
// await client.core.restoreBackup(latest.filename);
```

### **High Availability Setup**
```typescript
// Configure HA synchronization
await client.core.setHAsyncConfig({
  enabled: true,
  peer_ip: '192.168.1.2',
  sync_services: [
    'firewall', 
    'interfaces', 
    'users', 
    'certificates'
  ],
  automatic_backup: true,
  backup_count: 10
});

// Apply HA configuration
await client.core.reconfigureHAsync();

// Monitor HA status
const haServices = await client.core.hasyncStatus.getServices();
const remoteVersion = await client.core.hasyncStatus.getVersion();

console.log('HA Services:', haServices.data);
console.log('Remote version:', remoteVersion.data);

// Sync specific service if needed
await client.core.hasyncStatus.restart('firewall');
```

### **System Tunables Management**
```typescript
// Find network-related tunables
const networkTunables = await client.core.searchTunables({
  searchPhrase: 'net.inet'
});

console.log('Network tunables:', networkTunables.data.length);

// Performance tuning for high-traffic scenarios
const performanceTunables = [
  {
    tunable: 'net.inet.tcp.sendspace',
    value: '65536',
    description: 'TCP send buffer size'
  },
  {
    tunable: 'net.inet.tcp.recvspace', 
    value: '65536',
    description: 'TCP receive buffer size'
  },
  {
    tunable: 'kern.ipc.maxsockbuf',
    value: '2097152', 
    description: 'Maximum socket buffer size'
  }
];

// Apply performance tunables
for (const tunable of performanceTunables) {
  await client.core.addTunable(tunable);
}

// Reconfigure to apply changes
await client.core.tunables.reconfigure();
```

### **Dashboard Customization**
```typescript
// Get current dashboard
const dashboard = await client.core.getDashboardInfo();

// Custom widget layout
const customWidgets = {
  widgets: [
    {
      type: 'system-info',
      position: { x: 0, y: 0, width: 2, height: 1 },
      settings: { show_uptime: true, show_load: true }
    },
    {
      type: 'services',
      position: { x: 2, y: 0, width: 2, height: 2 },
      settings: { show_status: true, auto_refresh: 30 }
    },
    {
      type: 'interface-stats',
      position: { x: 0, y: 1, width: 2, height: 1 },
      settings: { interfaces: ['wan', 'lan'] }
    }
  ],
  layout: 'grid',
  refresh_interval: 30
};

await client.core.saveDashboardWidgets(customWidgets);

// Get product information for dashboard
const productInfo = await client.core.dashboard.getProductInfoFeed();
console.log('Latest product updates:', productInfo.data);
```

## 📊 **Enhancement Summary**

| **Feature** | **Before** | **After** | **Improvement** |
|-------------|------------|-----------|--------------------|
| **Module Structure** | Single class | 9 specialized modules | +800% |
| **Endpoint Coverage** | 5 endpoints | 47 endpoints | +840% |
| **Backup Management** | None | Complete CRUD | +100% |
| **Dashboard Control** | None | Full customization | +100% |
| **HA Synchronization** | None | Complete management | +100% |
| **Service Control** | None | Full management | +100% |
| **Snapshot Management** | None | Complete lifecycle | +100% |
| **Tunables Management** | None | Full CRUD + apply | +100% |
| **Menu Navigation** | None | Search + tree | +100% |
| **Convenience Methods** | 5 | 22 | +340% |
| **Legacy Support** | N/A | 100% backward compatible | Maintained |

## 🎉 **Benefits**

1. **🎯 Complete API Coverage**: All 47 core endpoints implemented across 9 controllers
2. **🏗️ Modular Architecture**: Specialized controllers for different functionality areas
3. **💾 Backup Management**: Complete backup, restore, and diff capabilities
4. **📊 Dashboard Control**: Full widget customization and info feeds
5. **🔄 HA Synchronization**: Complete high availability management
6. **⚙️ Service Control**: Comprehensive service start/stop/restart/search
7. **📸 Snapshot Management**: Configuration snapshots with rollback
8. **🔧 System Tuning**: Complete tunables management with apply/reset
9. **🧭 Navigation Support**: Menu search and tree structure access
10. **🔒 Backward Compatibility**: All existing methods preserved
11. **📖 Type Safety**: Full TypeScript support for all endpoints
12. **🚀 Developer Experience**: Intuitive, controller-based organization

The enhanced core module now provides **complete system administration** functionality, covering every aspect of OPNsense core operations from basic system control to advanced high availability setups, while maintaining full backward compatibility! 🔧✨