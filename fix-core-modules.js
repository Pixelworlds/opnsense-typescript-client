#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Core modules directory
const CORE_DIR = path.join(__dirname, 'src', 'modules', 'core');

// Get all core module files
function getCoreModuleFiles() {
  try {
    return fs.readdirSync(CORE_DIR)
      .filter(file => file.endsWith('.ts') && file !== 'index.ts')
      .map(file => path.join(CORE_DIR, file));
  } catch (error) {
    console.error('Error reading core modules directory:', error);
    return [];
  }
}

// Fix patterns for core modules
const fixPatterns = [
  // Duplicate path segments - specific patterns
  { pattern: /\/api\/auth\/auth\//g, replacement: '/api/auth/' },
  { pattern: /\/api\/backup\/backup\//g, replacement: '/api/backup/' },
  { pattern: /\/api\/captive-portal\/captiveportal\//g, replacement: '/api/captiveportal/' },
  { pattern: /\/api\/captiveportal\/captiveportal\//g, replacement: '/api/captiveportal/' },
  { pattern: /\/api\/core\/core\//g, replacement: '/api/core/' },
  { pattern: /\/api\/cron\/cron\//g, replacement: '/api/cron/' },
  { pattern: /\/api\/dhcpv4\/dhcpv4\//g, replacement: '/api/dhcpv4/' },
  { pattern: /\/api\/dhcpv6\/dhcpv6\//g, replacement: '/api/dhcpv6/' },
  { pattern: /\/api\/dhcrelay\/dhcrelay\//g, replacement: '/api/dhcrelay/' },
  { pattern: /\/api\/diagnostics\/diagnostics\//g, replacement: '/api/diagnostics/' },
  { pattern: /\/api\/dnsmasq\/dnsmasq\//g, replacement: '/api/dnsmasq/' },
  { pattern: /\/api\/firewall\/firewall\//g, replacement: '/api/firewall/' },
  { pattern: /\/api\/firmware\/firmware\//g, replacement: '/api/firmware/' },
  { pattern: /\/api\/ids\/ids\//g, replacement: '/api/ids/' },
  { pattern: /\/api\/interfaces\/interfaces\//g, replacement: '/api/interfaces/' },
  { pattern: /\/api\/ipsec\/ipsec\//g, replacement: '/api/ipsec/' },
  { pattern: /\/api\/kea\/kea\//g, replacement: '/api/kea/' },
  { pattern: /\/api\/monit\/monit\//g, replacement: '/api/monit/' },
  { pattern: /\/api\/openvpn\/openvpn\//g, replacement: '/api/openvpn/' },
  { pattern: /\/api\/routes\/routes\//g, replacement: '/api/routes/' },
  { pattern: /\/api\/routing\/routing\//g, replacement: '/api/routing/' },
  { pattern: /\/api\/syslog\/syslog\//g, replacement: '/api/syslog/' },
  { pattern: /\/api\/system\/system\//g, replacement: '/api/system/' },
  { pattern: /\/api\/trafficshaper\/trafficshaper\//g, replacement: '/api/trafficshaper/' },
  { pattern: /\/api\/trust\/trust\//g, replacement: '/api/trust/' },
  { pattern: /\/api\/unbound\/unbound\//g, replacement: '/api/unbound/' },
  { pattern: /\/api\/wireguard\/wireguard\//g, replacement: '/api/wireguard/' },

  // Parameter placeholders - common patterns
  { pattern: /\/\$\{uuid\}/g, replacement: '' },
  { pattern: /\/\$\{id\}/g, replacement: '' },
  { pattern: /\/\$\{enabled\}/g, replacement: '' },
  { pattern: /\/\$\{interface\}/g, replacement: '' },
  { pattern: /\/\$\{hostname\}/g, replacement: '' },
  { pattern: /\/\$\{name\}/g, replacement: '' },
  { pattern: /\/\$\{key\}/g, replacement: '' },
  { pattern: /\/\$\{type\}/g, replacement: '' },
  { pattern: /\/\$\{action\}/g, replacement: '' },
  { pattern: /\/\$\{zone\}/g, replacement: '' },
  { pattern: /\/\$\{filename\}/g, replacement: '' },
  { pattern: /\/\$\{format\}/g, replacement: '' },
  { pattern: /\/\$\{destination\}/g, replacement: '' },
  { pattern: /\/\$\{backend\}/g, replacement: '' },
  { pattern: /\/\$\{template\}/g, replacement: '' },
  { pattern: /\/\$\{provider\}/g, replacement: '' },
  { pattern: /\/\$\{algorithm\}/g, replacement: '' },
  { pattern: /\/\$\{rule\}/g, replacement: '' },
  { pattern: /\/\$\{server\}/g, replacement: '' },
  { pattern: /\/\$\{client\}/g, replacement: '' },
  { pattern: /\/\$\{peer\}/g, replacement: '' },
  { pattern: /\/\$\{ca\}/g, replacement: '' },
  { pattern: /\/\$\{cert\}/g, replacement: '' },
  { pattern: /\/\$\{crl\}/g, replacement: '' },
  { pattern: /\/\$\{address\}/g, replacement: '' },
  { pattern: /\/\$\{alias\}/g, replacement: '' },
  { pattern: /\/\$\{category\}/g, replacement: '' },
  { pattern: /\/\$\{user\}/g, replacement: '' },
  { pattern: /\/\$\{group\}/g, replacement: '' },
  { pattern: /\/\$\{privilege\}/g, replacement: '' },
  { pattern: /\/\$\{job\}/g, replacement: '' },
  { pattern: /\/\$\{lease\}/g, replacement: '' },
  { pattern: /\/\$\{reservation\}/g, replacement: '' },
  { pattern: /\/\$\{domain\}/g, replacement: '' },
  { pattern: /\/\$\{override\}/g, replacement: '' },
  { pattern: /\/\$\{hostoverride\}/g, replacement: '' },
  { pattern: /\/\$\{forward\}/g, replacement: '' },
  { pattern: /\/\$\{access\}/g, replacement: '' },
  { pattern: /\/\$\{acl\}/g, replacement: '' },
  { pattern: /\/\$\{stats\}/g, replacement: '' },
  { pattern: /\/\$\{dot\}/g, replacement: '' },
  { pattern: /\/\$\{record\}/g, replacement: '' },
  { pattern: /\/\$\{gateway\}/g, replacement: '' },
  { pattern: /\/\$\{route\}/g, replacement: '' },
  { pattern: /\/\$\{policy\}/g, replacement: '' },
  { pattern: /\/\$\{pipe\}/g, replacement: '' },
  { pattern: /\/\$\{queue\}/g, replacement: '' },
  { pattern: /\/\$\{rule_id\}/g, replacement: '' },
  { pattern: /\/\$\{package\}/g, replacement: '' },
  { pattern: /\/\$\{plugin\}/g, replacement: '' },
  { pattern: /\/\$\{log\}/g, replacement: '' },
  { pattern: /\/\$\{target\}/g, replacement: '' },
  { pattern: /\/\$\{filter\}/g, replacement: '' },
  { pattern: /\/\$\{subject\}/g, replacement: '' },
  { pattern: /\/\$\{issuer\}/g, replacement: '' },
  { pattern: /\/\$\{serial\}/g, replacement: '' },
  { pattern: /\/\$\{component\}/g, replacement: '' },
  { pattern: /\/\$\{phase1\}/g, replacement: '' },
  { pattern: /\/\$\{phase2\}/g, replacement: '' },
  { pattern: /\/\$\{connection\}/g, replacement: '' },
  { pattern: /\/\$\{pool\}/g, replacement: '' },
  { pattern: /\/\$\{pre_shared_key\}/g, replacement: '' },
  { pattern: /\/\$\{vpn\}/g, replacement: '' },
  { pattern: /\/\$\{network\}/g, replacement: '' },
  { pattern: /\/\$\{host\}/g, replacement: '' },
  { pattern: /\/\$\{device\}/g, replacement: '' },
  { pattern: /\/\$\{process\}/g, replacement: '' },
  { pattern: /\/\$\{service\}/g, replacement: '' },
  { pattern: /\/\$\{alert\}/g, replacement: '' },
  { pattern: /\/\$\{test\}/g, replacement: '' },
  { pattern: /\/\$\{status\}/g, replacement: '' },
  { pattern: /\/\$\{config\}/g, replacement: '' },
  { pattern: /\/\$\{setting\}/g, replacement: '' },
  { pattern: /\/\$\{value\}/g, replacement: '' },
  { pattern: /\/\$\{option\}/g, replacement: '' },
  { pattern: /\/\$\{parameter\}/g, replacement: '' },
  { pattern: /\/\$\{item\}/g, replacement: '' },
  { pattern: /\/\$\{entry\}/g, replacement: '' },
  { pattern: /\/\$\{element\}/g, replacement: '' },
  { pattern: /\/\$\{node\}/g, replacement: '' }
];

// Apply fixes to a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixCount = 0;

    // Apply all fix patterns
    fixPatterns.forEach(({ pattern, replacement }) => {
      const matches = content.match(pattern);
      if (matches) {
        fixCount += matches.length;
        content = content.replace(pattern, replacement);
      }
    });

    // Write back if changes were made
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed ${path.basename(filePath)}: ${fixCount} endpoint fixes applied`);
      return fixCount;
    } else {
      console.log(`⚪ ${path.basename(filePath)}: No fixes needed`);
      return 0;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error);
    return 0;
  }
}

// Main execution
function main() {
  console.log('🔧 Starting Core Module Path Fixes...\n');

  const coreFiles = getCoreModuleFiles();
  console.log(`📁 Found ${coreFiles.length} core module files to process\n`);

  let totalFixes = 0;
  let filesFixed = 0;

  coreFiles.forEach(filePath => {
    const fixes = fixFile(filePath);
    totalFixes += fixes;
    if (fixes > 0) {
      filesFixed++;
    }
  });

  console.log('\n🎯 Core Module Fix Summary:');
  console.log(`Files processed: ${coreFiles.length}`);
  console.log(`Files with fixes: ${filesFixed}`);
  console.log(`Total endpoint fixes: ${totalFixes}`);
  console.log('✅ Core module path fixes completed!');

  if (totalFixes > 0) {
    console.log('\n💡 Recommendation: Run the endpoint coverage test to verify the fixes');
    console.log('   Command: yarn test src/__tests__/module-comparison.test.ts');
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixFile, getCoreModuleFiles, fixPatterns };