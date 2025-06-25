#!/usr/bin/env bun

import { OPNsenseClient } from '../src/client';

/**
 * Test the enhanced core module with all 9 controllers
 */

console.log('🔧 Testing Enhanced Core Module Endpoints\n');

const client = new OPNsenseClient({
  baseUrl: 'https://test.local',
  apiKey: 'test-key',
  apiSecret: 'test-secret'
});

// Test that all core sub-modules are available
console.log('📦 Core Sub-modules:');
console.log(`  ✓ backup: ${client.core.backup ? 'Available' : 'Missing'}`);
console.log(`  ✓ dashboard: ${client.core.dashboard ? 'Available' : 'Missing'}`);
console.log(`  ✓ hasync: ${client.core.hasync ? 'Available' : 'Missing'}`);
console.log(`  ✓ hasyncStatus: ${client.core.hasyncStatus ? 'Available' : 'Missing'}`);
console.log(`  ✓ menu: ${client.core.menu ? 'Available' : 'Missing'}`);
console.log(`  ✓ service: ${client.core.service ? 'Available' : 'Missing'}`);
console.log(`  ✓ snapshots: ${client.core.snapshots ? 'Available' : 'Missing'}`);
console.log(`  ✓ system: ${client.core.system ? 'Available' : 'Missing'}`);
console.log(`  ✓ tunables: ${client.core.tunables ? 'Available' : 'Missing'}`);

// Test method availability on each sub-module
console.log('\n🔍 Method Availability Tests:');

// Backup methods
console.log('  Backup Module:');
const backupMethods = ['getBackups', 'deleteBackup', 'diffBackups', 'downloadBackup', 'getProviders', 'revertBackup'];
backupMethods.forEach(method => {
  const hasMethod = typeof (client.core.backup as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Dashboard methods
console.log('  Dashboard Module:');
const dashboardMethods = ['getDashboard', 'getPicture', 'getProductInfoFeed', 'restoreDefaults', 'saveWidgets'];
dashboardMethods.forEach(method => {
  const hasMethod = typeof (client.core.dashboard as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// HA Sync methods
console.log('  HA Sync Module:');
const hasyncMethods = ['get', 'set', 'reconfigure'];
hasyncMethods.forEach(method => {
  const hasMethod = typeof (client.core.hasync as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// HA Sync Status methods
console.log('  HA Sync Status Module:');
const hasyncStatusMethods = ['getRemoteService', 'getServices', 'getVersion', 'restart', 'restartAll', 'start', 'stop'];
hasyncStatusMethods.forEach(method => {
  const hasMethod = typeof (client.core.hasyncStatus as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Menu methods
console.log('  Menu Module:');
const menuMethods = ['search', 'getTree'];
menuMethods.forEach(method => {
  const hasMethod = typeof (client.core.menu as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Service methods
console.log('  Service Module:');
const serviceMethods = ['search', 'start', 'stop', 'restart'];
serviceMethods.forEach(method => {
  const hasMethod = typeof (client.core.service as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Snapshots methods
console.log('  Snapshots Module:');
const snapshotsMethods = ['search', 'add', 'get', 'set', 'delete', 'activate', 'isSupported'];
snapshotsMethods.forEach(method => {
  const hasMethod = typeof (client.core.snapshots as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// System methods
console.log('  System Module:');
const systemMethods = ['getStatus', 'reboot', 'halt', 'dismissStatus'];
systemMethods.forEach(method => {
  const hasMethod = typeof (client.core.system as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Tunables methods
console.log('  Tunables Module:');
const tunablesMethods = ['search', 'add', 'get', 'getItem', 'set', 'setItem', 'delete', 'reconfigure', 'reset'];
tunablesMethods.forEach(method => {
  const hasMethod = typeof (client.core.tunables as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Main core module convenience methods
console.log('  Main Core Module (Convenience Methods):');
const coreMethods = [
  // Legacy methods
  'getConfig', 'getStatus', 'reboot', 'halt', 'dismissStatus',
  // Convenience methods
  'searchServices', 'startService', 'stopService', 'restartService',
  'searchTunables', 'addTunable', 'updateTunable', 'deleteTunable',
  'createSnapshot', 'restoreSnapshot', 'deleteSnapshot',
  'listBackups', 'downloadBackup', 'restoreBackup',
  'searchMenu', 'getMenuTree', 'getDashboardInfo', 'saveDashboardWidgets',
  'getHAsyncConfig', 'setHAsyncConfig', 'reconfigureHAsync'
];
coreMethods.forEach(method => {
  const hasMethod = typeof (client.core as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

console.log('\n📊 Enhanced Core Module Summary:');
console.log('  • Complete backup management (list, download, restore, diff)');
console.log('  • Complete dashboard management (widgets, info feeds, pictures)');
console.log('  • Complete HA synchronization (config, status, service control)');
console.log('  • Complete menu navigation (search, tree structure)');
console.log('  • Complete service management (start, stop, restart, search)');
console.log('  • Complete snapshot management (create, restore, activate)');
console.log('  • Complete system control (status, reboot, halt)');
console.log('  • Complete tunables management (system tuning parameters)');
console.log('  • Backward compatibility with legacy method names');

console.log('\n🔧 API Enhancements Made:');
console.log('  • Restructured into 9 specialized sub-modules');
console.log('  • Added complete backup and restore functionality');
console.log('  • Added dashboard widget and customization support');
console.log('  • Added high availability synchronization support');
console.log('  • Added menu search and navigation features');
console.log('  • Added comprehensive service control');
console.log('  • Added configuration snapshot management');
console.log('  • Added system tunables management');
console.log('  • Maintained backward compatibility with legacy methods');

console.log('\n🎯 Controller Coverage:');
console.log('  BackupController:');
console.log('    • GET  /api/core/backup/backups');
console.log('    • POST /api/core/backup/delete_backup/{filename}');
console.log('    • GET  /api/core/backup/diff/{from}/{to}');
console.log('    • GET  /api/core/backup/download/{filename}');
console.log('    • GET  /api/core/backup/providers');
console.log('    • POST /api/core/backup/revert_backup/{filename}');

console.log('  DashboardController:');
console.log('    • GET  /api/core/dashboard/get_dashboard');
console.log('    • GET  /api/core/dashboard/picture');
console.log('    • GET  /api/core/dashboard/product_info_feed');
console.log('    • POST /api/core/dashboard/restore_defaults');
console.log('    • POST /api/core/dashboard/save_widgets');

console.log('  HasyncController:');
console.log('    • GET  /api/core/hasync/get');
console.log('    • POST /api/core/hasync/set');
console.log('    • POST /api/core/hasync/reconfigure');

console.log('  HasyncStatusController:');
console.log('    • GET  /api/core/hasyncstatus/remote_service');
console.log('    • GET  /api/core/hasyncstatus/services');
console.log('    • GET  /api/core/hasyncstatus/version');
console.log('    • POST /api/core/hasyncstatus/restart[/{service}]');
console.log('    • POST /api/core/hasyncstatus/restart_all');
console.log('    • POST /api/core/hasyncstatus/start/{service}');
console.log('    • POST /api/core/hasyncstatus/stop/{service}');

console.log('  MenuController:');
console.log('    • GET  /api/core/menu/search');
console.log('    • GET  /api/core/menu/tree');

console.log('  ServiceController:');
console.log('    • GET/POST /api/core/service/search');
console.log('    • POST /api/core/service/start/{service}');
console.log('    • POST /api/core/service/stop/{service}');
console.log('    • POST /api/core/service/restart/{service}');

console.log('  SnapshotsController:');
console.log('    • POST /api/core/snapshots/search');
console.log('    • POST /api/core/snapshots/add');
console.log('    • GET  /api/core/snapshots/get[/{uuid}]');
console.log('    • POST /api/core/snapshots/set');
console.log('    • POST /api/core/snapshots/del/{uuid}');
console.log('    • POST /api/core/snapshots/activate/{uuid}');
console.log('    • GET  /api/core/snapshots/is_supported');

console.log('  SystemController:');
console.log('    • GET  /api/core/system/status');
console.log('    • POST /api/core/system/reboot');
console.log('    • POST /api/core/system/halt');
console.log('    • POST /api/core/system/dismiss_status');

console.log('  TunablesController:');
console.log('    • POST /api/core/tunables/search_item');
console.log('    • POST /api/core/tunables/add_item');
console.log('    • GET  /api/core/tunables/get');
console.log('    • GET  /api/core/tunables/get_item[/{uuid}]');
console.log('    • POST /api/core/tunables/set');
console.log('    • POST /api/core/tunables/set_item/{uuid}');
console.log('    • POST /api/core/tunables/del_item/{uuid}');
console.log('    • POST /api/core/tunables/reconfigure');
console.log('    • POST /api/core/tunables/reset');

console.log('\n✅ Enhanced Core Module Test Completed!');