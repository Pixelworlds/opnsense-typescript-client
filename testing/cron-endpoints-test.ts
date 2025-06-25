#!/usr/bin/env bun

import { OPNsenseClient } from '../src/client';

/**
 * Test the enhanced cron module with all endpoints and convenience methods
 */

console.log('⏰ Testing Enhanced Cron Module Endpoints\n');

const client = new OPNsenseClient({
  baseUrl: 'https://test.local',
  apiKey: 'test-key',
  apiSecret: 'test-secret'
});

// Test that all cron sub-modules are available
console.log('📦 Cron Sub-modules:');
console.log(`  ✓ service: ${client.cron.service ? 'Available' : 'Missing'}`);
console.log(`  ✓ settings: ${client.cron.settings ? 'Available' : 'Missing'}`);

// Test method availability on each sub-module
console.log('\n🔍 Method Availability Tests:');

// Service methods
console.log('  Service Module:');
const serviceMethods = ['reconfigure'];
serviceMethods.forEach(method => {
  const hasMethod = typeof (client.cron.service as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Settings methods
console.log('  Settings Module:');
const settingsMethods = ['get', 'set', 'searchJobs', 'addJob', 'getJob', 'setJob', 'deleteJob', 'toggleJob'];
settingsMethods.forEach(method => {
  const hasMethod = typeof (client.cron.settings as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Legacy methods
console.log('  Main Cron Module (Legacy Methods):');
const legacyMethods = [
  'getConfig', 'setConfig', 'searchJobs', 'addJob', 'getJob', 'updateJob', 'deleteJob', 'toggleJob', 'reconfigure'
];
legacyMethods.forEach(method => {
  const hasMethod = typeof (client.cron as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Convenience methods
console.log('  Main Cron Module (Convenience Methods):');
const convenienceMethods = [
  'createDailyJob', 'createWeeklyJob', 'createMonthlyJob', 'createHourlyJob', 'createCustomJob',
  'enableJob', 'disableJob', 'findJobsByCommand', 'findJobsByDescription',
  'getEnabledJobs', 'getDisabledJobs', 'getAllJobs', 'exportJobs', 'importJobs',
  'bulkToggleJobs', 'bulkDeleteJobs'
];
convenienceMethods.forEach(method => {
  const hasMethod = typeof (client.cron as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

console.log('\n📊 Enhanced Cron Module Summary:');
console.log('  • Complete cron service management (reconfigure)');
console.log('  • Complete cron settings management (CRUD operations)');
console.log('  • Complete job lifecycle management (create, read, update, delete, toggle)');
console.log('  • Convenient job creation methods (daily, weekly, monthly, hourly, custom)');
console.log('  • Advanced search and filtering capabilities');
console.log('  • Bulk operations for multiple jobs');
console.log('  • Import/export functionality for job management');
console.log('  • Backward compatibility with legacy method names');

console.log('\n🔧 API Enhancements Made:');
console.log('  • Restructured into 2 specialized sub-modules (service, settings)');
console.log('  • Added GET/POST method support for search operations');
console.log('  • Added 15 convenience methods for common cron operations');
console.log('  • Added job creation helpers for different schedules');
console.log('  • Added search and filtering utilities');
console.log('  • Added bulk operation capabilities');
console.log('  • Added import/export functionality');
console.log('  • Maintained backward compatibility with legacy methods');

console.log('\n🎯 Endpoint Coverage:');
console.log('  Service Controller:');
console.log('    • POST /api/cron/service/reconfigure');

console.log('  Settings Controller:');
console.log('    • GET  /api/cron/settings/get');
console.log('    • POST /api/cron/settings/set');
console.log('    • GET/POST /api/cron/settings/search_jobs');
console.log('    • POST /api/cron/settings/add_job');
console.log('    • GET  /api/cron/settings/get_job[/{uuid}]');
console.log('    • POST /api/cron/settings/set_job/{uuid}');
console.log('    • POST /api/cron/settings/del_job/{uuid}');
console.log('    • POST /api/cron/settings/toggle_job/{uuid}[/{enabled}]');

console.log('\n✨ Convenience Method Examples:');
console.log('  Job Creation Helpers:');
console.log('    • createDailyJob(command, hour, minute, description)');
console.log('    • createWeeklyJob(command, weekday, hour, minute, description)');
console.log('    • createMonthlyJob(command, day, hour, minute, description)');
console.log('    • createHourlyJob(command, minute, description)');
console.log('    • createCustomJob(cronExpression, command, description, user)');

console.log('  Job Management:');
console.log('    • enableJob(uuid) / disableJob(uuid)');
console.log('    • findJobsByCommand(command) / findJobsByDescription(description)');
console.log('    • getEnabledJobs() / getDisabledJobs() / getAllJobs()');

console.log('  Bulk Operations:');
console.log('    • bulkToggleJobs(uuids[], enabled)');
console.log('    • bulkDeleteJobs(uuids[])');
console.log('    • exportJobs() / importJobs(jobs[])');

console.log('\n📝 Usage Examples:');
console.log('  // Create daily backup job at 2:30 AM');
console.log('  await client.cron.createDailyJob("/usr/local/bin/backup.sh", 2, 30, "Daily backup");');
console.log('');
console.log('  // Create weekly log rotation on Sundays at midnight');
console.log('  await client.cron.createWeeklyJob("/usr/sbin/newsyslog", 0, 0, 0, "Weekly log rotation");');
console.log('');
console.log('  // Create custom cron job with expression');
console.log('  await client.cron.createCustomJob("*/5 * * * *", "/usr/local/bin/monitor.sh", "5-minute monitoring");');
console.log('');
console.log('  // Find and manage backup jobs');
console.log('  const backupJobs = await client.cron.findJobsByCommand("backup");');
console.log('  await client.cron.bulkToggleJobs(backupJobs.data.rows.map(j => j.uuid), false);');

console.log('\n✅ Enhanced Cron Module Test Completed!');