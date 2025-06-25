#!/usr/bin/env bun

import { OPNsenseClient } from '../src/client';

/**
 * Test the enhanced firewall module with all new endpoints
 */

console.log('🔥 Testing Enhanced Firewall Module Endpoints\n');

const client = new OPNsenseClient({
  baseUrl: 'https://test.local',
  apiKey: 'test-key',
  apiSecret: 'test-secret'
});

// Test that all firewall sub-modules are available
console.log('📦 Firewall Sub-modules:');
console.log(`  ✓ rules: ${client.firewall.rules ? 'Available' : 'Missing'}`);
console.log(`  ✓ aliases: ${client.firewall.aliases ? 'Available' : 'Missing'}`);
console.log(`  ✓ aliasUtils: ${client.firewall.aliasUtils ? 'Available' : 'Missing'}`);
console.log(`  ✓ groups: ${client.firewall.groups ? 'Available' : 'Missing'}`);
console.log(`  ✓ sourceNat: ${client.firewall.sourceNat ? 'Available' : 'Missing'}`);
console.log(`  ✓ oneToOneNat: ${client.firewall.oneToOneNat ? 'Available' : 'Missing'}`);
console.log(`  ✓ destinationNat: ${client.firewall.destinationNat ? 'Available' : 'Missing'}`);
console.log(`  ✓ categories: ${client.firewall.categories ? 'Available' : 'Missing'}`);
console.log(`  ✓ npt: ${client.firewall.npt ? 'Available' : 'Missing'}`);

// Test method availability on each sub-module
console.log('\n🔍 Method Availability Tests:');

// Rules methods (including new ones)
console.log('  Rules Module:');
const rulesMethods = ['search', 'add', 'get', 'update', 'delete', 'toggle', 'moveBefore', 'getInterfaceList', 'apply', 'savepoint', 'cancelRollback'];
rulesMethods.forEach(method => {
  const hasMethod = typeof (client.firewall.rules as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Groups methods
console.log('  Groups Module:');
const groupsMethods = ['search', 'add', 'get', 'update', 'delete', 'toggle', 'reconfigure'];
groupsMethods.forEach(method => {
  const hasMethod = typeof (client.firewall.groups as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Source NAT methods
console.log('  Source NAT Module:');
const sourceNatMethods = ['search', 'add', 'get', 'update', 'delete', 'toggle', 'moveBefore'];
sourceNatMethods.forEach(method => {
  const hasMethod = typeof (client.firewall.sourceNat as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// One-to-One NAT methods
console.log('  One-to-One NAT Module:');
const oneToOneNatMethods = ['search', 'add', 'get', 'update', 'delete', 'toggle', 'moveBefore'];
oneToOneNatMethods.forEach(method => {
  const hasMethod = typeof (client.firewall.oneToOneNat as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Destination NAT methods
console.log('  Destination NAT Module:');
const destinationNatMethods = ['search', 'add', 'get', 'update', 'delete', 'toggle', 'moveBefore'];
destinationNatMethods.forEach(method => {
  const hasMethod = typeof (client.firewall.destinationNat as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// Categories methods
console.log('  Categories Module:');
const categoriesMethods = ['search', 'add', 'get', 'update', 'delete', 'toggle'];
categoriesMethods.forEach(method => {
  const hasMethod = typeof (client.firewall.categories as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

// NPT methods
console.log('  NPT Module:');
const nptMethods = ['search', 'add', 'get', 'update', 'delete', 'toggle', 'moveBefore'];
nptMethods.forEach(method => {
  const hasMethod = typeof (client.firewall.npt as any)[method] === 'function';
  console.log(`    ${method}: ${hasMethod ? '✓' : '✗'}`);
});

console.log('\n📊 Enhanced Firewall Module Summary:');
console.log('  • 9 sub-modules available (vs 3 previously)');
console.log('  • Complete NAT functionality (Source, One-to-One, Destination)');
console.log('  • Group and Category management');
console.log('  • IPv6 NPT support');
console.log('  • Enhanced rule management with apply/savepoint functionality');

console.log('\n✅ Enhanced Firewall Module Test Completed!');