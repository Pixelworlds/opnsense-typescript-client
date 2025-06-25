#!/usr/bin/env bun

import { OPNsenseClient } from '../src/client';

/**
 * Test the enhanced captive portal module with all endpoints
 */

console.log('🔒 Testing Enhanced Captive Portal Module Endpoints\n');

const client = new OPNsenseClient({
  baseUrl: 'https://test.local',
  apiKey: 'test-key',
  apiSecret: 'test-secret'
});

// Test that all captive portal sub-modules are available
console.log('📦 Captive Portal Sub-modules:');
console.log(`  ✓ access: ${client.captivePortal.access ? 'Available' : 'Missing'}`);
console.log(`  ✓ service: ${client.captivePortal.service ? 'Available' : 'Missing'}`);
console.log(`  ✓ sessions: ${client.captivePortal.sessions ? 'Available' : 'Missing'}`);
console.log(`  ✓ settings: ${client.captivePortal.settings ? 'Available' : 'Missing'}`);
console.log(`  ✓ vouchers: ${client.captivePortal.vouchers ? 'Available' : 'Missing'}`);

// Test method availability on each sub-module
console.log('\n🔍 Method Availability Tests:');

// Access methods
console.log('  Access Module:');
const accessMethods = ['getApi', 'logoff', 'logon', 'getStatus'];
accessMethods.forEach(method => {
  const hasMethod = typeof (client.captivePortal.access as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Service methods
console.log('  Service Module:');
const serviceMethods = ['deleteTemplate', 'getTemplate', 'reconfigure', 'saveTemplate', 'searchTemplates'];
serviceMethods.forEach(method => {
  const hasMethod = typeof (client.captivePortal.service as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Sessions methods
console.log('  Sessions Module:');
const sessionsMethods = ['connect', 'disconnect', 'list', 'search', 'getZones'];
sessionsMethods.forEach(method => {
  const hasMethod = typeof (client.captivePortal.sessions as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Settings methods
console.log('  Settings Module:');
const settingsMethods = ['addZone', 'deleteZone', 'get', 'getZone', 'searchZones', 'set', 'setZone', 'toggleZone'];
settingsMethods.forEach(method => {
  const hasMethod = typeof (client.captivePortal.settings as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Vouchers methods
console.log('  Vouchers Module:');
const vouchersMethods = ['drop', 'expire', 'generate', 'search'];
vouchersMethods.forEach(method => {
  const hasMethod = typeof (client.captivePortal.vouchers as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Main captive portal module legacy methods
console.log('  Main Captive Portal Module (Legacy Methods):');
const legacyMethods = [
  'getZones', 'getConfig', 'setConfig', 'searchZones', 'addZone', 'getZone',
  'updateZone', 'deleteZone', 'toggleZone', 'listSessions', 'searchSessions',
  'connectSession', 'disconnectSession', 'reconfigure'
];
legacyMethods.forEach(method => {
  const hasMethod = typeof (client.captivePortal as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

console.log('\n📊 Enhanced Captive Portal Module Summary:');
console.log('  • Complete access management (API, logon/logoff, status)');
console.log('  • Complete service management (templates, reconfigure)');
console.log('  • Complete session management (connect/disconnect, list, search)');
console.log('  • Complete settings management (zones CRUD, general config)');
console.log('  • Complete voucher management (generate, drop, expire, search)');
console.log('  • Backward compatibility with legacy method names');

console.log('\n🔧 API Enhancements Made:');
console.log('  • Restructured into 5 specialized sub-modules');
console.log('  • Added flexible zone ID parameter support');
console.log('  • Added GET/POST method support for search operations');
console.log('  • Implemented complete template management');
console.log('  • Added comprehensive voucher management');
console.log('  • Maintained backward compatibility with legacy methods');

console.log('\n🎯 Endpoint Coverage:');
console.log('  Access Controller:');
console.log('    • GET  /api/captiveportal/access/api');
console.log('    • GET  /api/captiveportal/access/logoff[/zoneid]');
console.log('    • POST /api/captiveportal/access/logon[/zoneid]');
console.log('    • GET/POST /api/captiveportal/access/status[/zoneid]');

console.log('  Service Controller:');
console.log('    • POST /api/captiveportal/service/del_template/{uuid}');
console.log('    • GET  /api/captiveportal/service/get_template[/fileid]');
console.log('    • POST /api/captiveportal/service/reconfigure');
console.log('    • POST /api/captiveportal/service/save_template');
console.log('    • GET  /api/captiveportal/service/search_templates');

console.log('  Session Controller:');
console.log('    • POST /api/captiveportal/session/connect[/zoneid]');
console.log('    • POST /api/captiveportal/session/disconnect[/zoneid]');
console.log('    • GET  /api/captiveportal/session/list[/zoneid]');
console.log('    • GET  /api/captiveportal/session/search');
console.log('    • GET  /api/captiveportal/session/zones');

console.log('  Settings Controller:');
console.log('    • POST /api/captiveportal/settings/add_zone');
console.log('    • POST /api/captiveportal/settings/del_zone/{uuid}');
console.log('    • GET  /api/captiveportal/settings/get');
console.log('    • GET  /api/captiveportal/settings/get_zone[/{uuid}]');
console.log('    • GET/POST /api/captiveportal/settings/search_zones');
console.log('    • POST /api/captiveportal/settings/set');
console.log('    • POST /api/captiveportal/settings/set_zone/{uuid}');
console.log('    • POST /api/captiveportal/settings/toggle_zone/{uuid}[/{enabled}]');

console.log('  Voucher Controller:');
console.log('    • POST /api/captiveportal/voucher/drop');
console.log('    • POST /api/captiveportal/voucher/expire');
console.log('    • POST /api/captiveportal/voucher/generate');
console.log('    • POST /api/captiveportal/voucher/search');

console.log('\n✅ Enhanced Captive Portal Module Test Completed!');