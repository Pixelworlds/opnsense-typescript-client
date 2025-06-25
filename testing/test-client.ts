#!/usr/bin/env bun

import { OPNsenseClient } from '../src/client';

console.log('Testing OPNsense Client initialization...');

try {
  const client = new OPNsenseClient({
    baseUrl: 'https://test.local',
    apiKey: 'test-key',
    apiSecret: 'test-secret'
  });

  console.log('✓ Client initialized successfully');
  console.log(`✓ Core modules available: ${Object.keys(client).filter(k => k !== 'plugins' && k !== 'httpClient').length}`);
  console.log(`✓ Plugin modules available: ${Object.keys(client.plugins).length}`);

  const pluginNames = Object.keys(client.plugins);
  console.log('\nAvailable plugin modules:');
  pluginNames.forEach(name => {
    const module = client.plugins[name as keyof typeof client.plugins];
    console.log(`  - ${name}: ${module ? '✓' : '✗'}`);
  });

  console.log('\n✅ All tests passed!');
} catch (error) {
  console.error('❌ Test failed:', error);
  process.exit(1);
}