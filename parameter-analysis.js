#!/usr/bin/env bun

/**
 * Parameter Analysis Tool for OPNsense TypeScript Client
 * Analyzes all modules to identify missing UUID parameters and provide recommendations
 */

import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

// Completed modules with their endpoint counts
const COMPLETED_MODULES = {
  'ipsec': 46,
  'postfix': 32, 
  'freeradius': 32,
  'caddy': 29,
  'firewall': 31,
  'diagnostics': 22,
  'core': 20,
  'interfaces': 24,
  'ids': 20,
  'quagga': 77,
  'radsecproxy': 24,
  'nginx': 4,
  'dnscryptproxy': 20
};

const TOTAL_COMPLETED_ENDPOINTS = Object.values(COMPLETED_MODULES).reduce((sum, count) => sum + count, 0);

// Methods that typically require UUID parameters
const UUID_METHODS = [
  'get', 'getItem', 'getDetail', 'getDetails',
  'set', 'setItem', 'update', 'updateItem', 'edit', 'editItem',
  'delete', 'deleteItem', 'del', 'delItem', 'remove', 'removeItem',
  'toggle', 'toggleItem', 'enable', 'disable',
  'copy', 'copyItem', 'clone', 'cloneItem'
];

function analyzeModuleFile(filePath, moduleName) {
  try {
    const content = readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    const methods = [];
    const missingUuidParams = [];
    
    let currentMethod = null;
    let inMethod = false;
    let methodParams = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Detect method definitions
      const methodMatch = line.match(/async\s+(\w+)\s*\(/);
      if (methodMatch) {
        // Save previous method if it exists
        if (currentMethod) {
          methods.push({
            name: currentMethod,
            params: methodParams,
            line: i
          });
        }
        
        currentMethod = methodMatch[1];
        inMethod = true;
        methodParams = [];
        
        // Extract parameters from the same line
        const paramMatch = line.match(/\(([^)]*)\)/);
        if (paramMatch && paramMatch[1]) {
          const params = paramMatch[1].split(',').map(p => p.trim().split(':')[0].trim()).filter(p => p);
          methodParams.push(...params);
        }
      }
      
      // Continue collecting parameters if method spans multiple lines
      if (inMethod && line.includes(')') && !methodMatch) {
        inMethod = false;
        if (currentMethod) {
          methods.push({
            name: currentMethod,
            params: methodParams,
            line: i
          });
        }
      }
    }
    
    // Check for missing UUID parameters
    methods.forEach(method => {
      const needsUuid = UUID_METHODS.some(pattern => {
        if (pattern === 'get' && method.name === 'get') return true;
        if (pattern !== 'get' && method.name.toLowerCase().includes(pattern.toLowerCase())) return true;
        return false;
      });
      
      if (needsUuid) {
        const hasUuidParam = method.params.some(param => 
          param.toLowerCase().includes('uuid') || 
          param.toLowerCase().includes('id') ||
          param === 'key'
        );
        
        if (!hasUuidParam) {
          missingUuidParams.push({
            method: method.name,
            params: method.params,
            line: method.line + 1
          });
        }
      }
    });
    
    return {
      moduleName,
      filePath,
      totalMethods: methods.length,
      missingUuidParams,
      methodsNeedingUuid: methods.filter(m => 
        UUID_METHODS.some(pattern => 
          pattern === 'get' && m.name === 'get' || 
          pattern !== 'get' && m.name.toLowerCase().includes(pattern.toLowerCase())
        )
      ).length
    };
    
  } catch (error) {
    console.error(`Error analyzing ${filePath}:`, error.message);
    return null;
  }
}

function analyzeAllModules() {
  const results = [];
  const coreDir = 'src/modules/core';
  const pluginsDir = 'src/modules/plugins';
  
  // Analyze core modules
  try {
    const coreFiles = readdirSync(coreDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
    for (const file of coreFiles) {
      const moduleName = file.replace('.ts', '');
      const result = analyzeModuleFile(join(coreDir, file), moduleName);
      if (result) results.push(result);
    }
  } catch (error) {
    console.error('Error reading core modules:', error.message);
  }
  
  // Analyze plugin modules
  try {
    const pluginFiles = readdirSync(pluginsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
    for (const file of pluginFiles) {
      const moduleName = file.replace('.ts', '');
      const result = analyzeModuleFile(join(pluginsDir, file), moduleName);
      if (result) results.push(result);
    }
  } catch (error) {
    console.error('Error reading plugin modules:', error.message);
  }
  
  return results.filter(r => r !== null);
}

function generateReport(results) {
  // Calculate overall statistics
  const totalMethods = results.reduce((sum, r) => sum + r.totalMethods, 0);
  const totalMissingParams = results.reduce((sum, r) => sum + r.missingUuidParams.length, 0);
  const totalMethodsNeedingUuid = results.reduce((sum, r) => sum + r.methodsNeedingUuid, 0);
  
  const overallAccuracy = totalMethodsNeedingUuid > 0 
    ? ((totalMethodsNeedingUuid - totalMissingParams) / totalMethodsNeedingUuid * 100).toFixed(1)
    : 100;
  
  // Sort modules by missing parameters (descending)
  const sortedByMissing = [...results]
    .filter(r => r.missingUuidParams.length > 0)
    .sort((a, b) => b.missingUuidParams.length - a.missingUuidParams.length);
  
  // Calculate module priorities
  const moduleWithPriorities = sortedByMissing.map(module => {
    const strategicScore = getStrategicImportance(module.moduleName);
    const complexityScore = getImplementationComplexity(module.moduleName);
    const missingCount = module.missingUuidParams.length;
    
    // Priority score: higher is better candidate
    // Factors: missing count (40%), strategic importance (35%), inverse complexity (25%)
    const priorityScore = (missingCount * 0.4) + (strategicScore * 0.35) + ((10 - complexityScore) * 0.25);
    
    return {
      ...module,
      strategicScore,
      complexityScore,
      priorityScore: priorityScore.toFixed(2)
    };
  }).sort((a, b) => b.priorityScore - a.priorityScore);
  
  console.log('\n🔍 OPNsense TypeScript Client - Parameter Analysis Report');
  console.log('=' .repeat(60));
  
  console.log('\n📊 OVERALL STATUS');
  console.log(`Total Methods Analyzed: ${totalMethods}`);
  console.log(`Methods Needing UUID: ${totalMethodsNeedingUuid}`);
  console.log(`Missing UUID Parameters: ${totalMissingParams}`);
  console.log(`Overall Parameter Accuracy: ${overallAccuracy}%`);
  
  console.log('\n✅ COMPLETED MODULES');
  Object.entries(COMPLETED_MODULES).forEach(([module, endpoints]) => {
    console.log(`  ${module.toUpperCase()}: ${endpoints} endpoints - 100% complete`);
  });
  console.log(`\nTotal Completed Endpoints: ${TOTAL_COMPLETED_ENDPOINTS}`);
  
  console.log('\n🎯 TOP 5 MODULES WITH MISSING PARAMETERS');
  const top5 = moduleWithPriorities.slice(0, 5);
  top5.forEach((module, index) => {
    const isCompleted = COMPLETED_MODULES.hasOwnProperty(module.moduleName);
    const status = isCompleted ? '✅ COMPLETED' : '❌ PENDING';
    
    console.log(`${index + 1}. ${module.moduleName.toUpperCase()} ${status}`);
    console.log(`   Missing Parameters: ${module.missingUuidParams.length}`);
    console.log(`   Strategic Score: ${module.strategicScore}/10`);
    console.log(`   Complexity Score: ${module.complexityScore}/10`);
    console.log(`   Priority Score: ${module.priorityScore}`);
    
    if (!isCompleted && module.missingUuidParams.length > 0) {
      console.log(`   Sample Missing Methods:`);
      module.missingUuidParams.slice(0, 3).forEach(missing => {
        console.log(`     - ${missing.method}() at line ${missing.line}`);
      });
    }
    console.log('');
  });
  
  console.log('\n🚀 NEXT PRIORITY RECOMMENDATION');
  const nextModule = moduleWithPriorities.find(m => !COMPLETED_MODULES.hasOwnProperty(m.moduleName));
  
  if (nextModule) {
    console.log(`Recommended Next Module: ${nextModule.moduleName.toUpperCase()}`);
    console.log(`Justification:`);
    console.log(`  • Missing Parameters: ${nextModule.missingUuidParams.length} (impact factor)`);
    console.log(`  • Strategic Importance: ${nextModule.strategicScore}/10 (${getStrategicReason(nextModule.moduleName)})`);
    console.log(`  • Implementation Complexity: ${nextModule.complexityScore}/10 (${getComplexityReason(nextModule.moduleName)})`);
    console.log(`  • Overall Priority Score: ${nextModule.priorityScore}`);
    
    console.log(`\n📋 Methods Requiring UUID Parameters:`);
    nextModule.missingUuidParams.forEach((missing, i) => {
      console.log(`  ${i + 1}. ${missing.method}() - line ${missing.line}`);
      console.log(`     Current params: [${missing.params.join(', ') || 'none'}]`);
    });
  } else {
    console.log('🎉 All high-priority modules have been completed!');
  }
  
  console.log('\n📈 PROGRESS SUMMARY');
  const completedModulesCount = Object.keys(COMPLETED_MODULES).length;
  const totalModulesWithIssues = sortedByMissing.length;
  const remainingModules = totalModulesWithIssues - completedModulesCount;
  
  console.log(`Modules Completed: ${completedModulesCount}`);
  console.log(`Modules Remaining: ${remainingModules}`);
  console.log(`Total Progress: ${((completedModulesCount / totalModulesWithIssues) * 100).toFixed(1)}%`);
}

function getStrategicImportance(moduleName) {
  const importanceMap = {
    // Core networking and security (9-10)
    'dhcpv4': 10,
    'dhcpv6': 9, 
    'unbound': 9,
    'openvpn': 10,
    'wireguard': 9,
    'backup': 10,
    'system': 10,
    'routes': 9,
    'routing': 9,
    
    // Important services (7-8)
    'nginx': 8,
    'haproxy': 8,
    'bind': 8,
    'cron': 8,
    'monit': 8,
    'captive-portal': 7,
    'trafficshaper': 7,
    'dnsmasq': 7,
    'syslog': 7,
    
    // Useful but not critical (5-6)
    'acmeclient': 6,
    'collectd': 6,
    'netdata': 6,
    'ntopng': 6,
    'tailscale': 6,
    'zerotier': 6,
    'clamav': 5,
    'rspamd': 5,
    
    // Specialized/niche (3-4)
    'stunnel': 4,
    'tor': 3,
    'tayga': 3,
    'tinc': 4,
    'wol': 3,
    'tftp': 3,
    'redis': 4,
    
    // Development/testing (1-2)
    'helloworld': 1,
    'gridexample': 1
  };
  
  return importanceMap[moduleName] || 5;
}

function getImplementationComplexity(moduleName) {
  const complexityMap = {
    // Simple modules (1-3)
    'wol': 2,
    'tftp': 2,
    'mdnsrepeater': 2,
    'helloworld': 1,
    'gridexample': 1,
    'redis': 3,
    'stunnel': 3,
    
    // Moderate complexity (4-6)
    'cron': 4,
    'backup': 5,
    'acmeclient': 5,
    'collectd': 4,
    'netdata': 4,
    'tailscale': 4,
    'zerotier': 4,
    'dnsmasq': 5,
    'syslog': 4,
    'monit': 5,
    
    // High complexity (7-8)
    'dhcpv4': 7,
    'dhcpv6': 7,
    'unbound': 8,
    'openvpn': 8,
    'nginx': 7,
    'haproxy': 8,
    'bind': 8,
    'captive-portal': 7,
    'trafficshaper': 8,
    'routing': 8,
    'clamav': 7,
    'rspamd': 7,
    
    // Very high complexity (9-10)
    'system': 9,
    'wireguard': 9,
    'routes': 8,
    'ntopng': 8
  };
  
  return complexityMap[moduleName] || 6;
}

function getStrategicReason(moduleName) {
  const reasons = {
    'dhcpv4': 'core network service',
    'dhcpv6': 'IPv6 infrastructure', 
    'unbound': 'DNS resolver foundation',
    'openvpn': 'primary VPN solution',
    'wireguard': 'modern VPN protocol',
    'backup': 'system recovery critical',
    'system': 'fundamental operations',
    'nginx': 'web server/proxy',
    'haproxy': 'load balancing',
    'bind': 'DNS server',
    'cron': 'task scheduling',
    'monit': 'service monitoring',
    'acmeclient': 'SSL automation',
    'tailscale': 'mesh networking'
  };
  
  return reasons[moduleName] || 'standard functionality';
}

function getComplexityReason(moduleName) {
  const reasons = {
    'system': 'many subsystems',
    'wireguard': 'complex key management',
    'unbound': 'DNS complexity',
    'openvpn': 'certificate handling',
    'haproxy': 'load balancer config',
    'bind': 'zone management',
    'trafficshaper': 'QoS rules',
    'routing': 'protocol complexity',
    'dhcpv4': 'lease management',
    'dhcpv6': 'IPv6 specifics',
    'backup': 'config handling',
    'cron': 'simple scheduling',
    'acmeclient': 'certificate workflow',
    'wol': 'basic functionality'
  };
  
  return reasons[moduleName] || 'moderate implementation';
}

// Run the analysis
const results = analyzeAllModules();
generateReport(results);