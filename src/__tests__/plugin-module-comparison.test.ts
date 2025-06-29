import { test, expect, describe } from "vitest";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

interface PostmanCollection {
  info: { name: string };
  item: PostmanItem[];
}

interface PostmanItem {
  name: string;
  item?: PostmanItem[];
  request?: {
    method?: string;
    url: {
      raw?: string;
      path?: string[];
    };
  };
}

interface ModuleEndpoint {
  module: string;
  controller?: string;
  action?: string;
  method: string;
  path: string;
  fullPath: string;
}

interface ModuleEndpoints {
  [moduleName: string]: ModuleEndpoint[];
}

interface PluginAnalysis {
  moduleName: string;
  postmanEndpoints: number;
  typescriptEndpoints: number;
  commonEndpoints: number;
  coveragePercentage: number;
  perfectMatch: boolean;
  onlyInPostman: string[];
  onlyInTypeScript: string[];
  commonPaths: string[];
}

describe("Plugin Module Comparison Tests", () => {
  function extractPostmanPluginEndpoints(): ModuleEndpoints {
    const postmanDir = join(process.cwd(), "postman");
    const moduleEndpoints: ModuleEndpoints = {};
    
    try {
      // Focus on the plugins collection
      const pluginFile = join(postmanDir, "OPNsense Plugins API Collection.postman_collection.json");
      const content = readFileSync(pluginFile, 'utf-8');
      const collection: PostmanCollection = JSON.parse(content);
      
      if (collection.item) {
        extractEndpointsFromItems(collection.item, moduleEndpoints, []);
      }
    } catch (error) {
      console.error(`Error reading Postman plugin collection: ${error}`);
    }
    
    return moduleEndpoints;
  }

  function extractEndpointsFromItems(
    items: PostmanItem[], 
    moduleEndpoints: ModuleEndpoints, 
    pathContext: string[]
  ) {
    for (const item of items) {
      const currentPath = [...pathContext, item.name];
      
      if (item.request?.url) {
        // This is an actual endpoint
        const method = item.request.method || 'GET';
        let fullPath = '';
        let moduleName = '';
        let controller = '';
        let action = '';
        
        if (item.request.url.path && item.request.url.path.length > 0) {
          const pathSegments = item.request.url.path.filter(p => !p.startsWith('{{'));
          fullPath = '/' + pathSegments.join('/');
          
          if (pathSegments.length > 0) {
            moduleName = pathSegments[0].toLowerCase();
            if (pathSegments.length > 1) {
              controller = pathSegments[1].toLowerCase();
            }
            if (pathSegments.length > 2) {
              action = pathSegments[2].toLowerCase();
            }
          }
        }
        
        // Use the top-level item name as module if we can't extract from path
        if (!moduleName && currentPath.length > 0) {
          moduleName = currentPath[0].toLowerCase().replace(/\s+/g, '');
        }
        
        if (moduleName) {
          if (!moduleEndpoints[moduleName]) {
            moduleEndpoints[moduleName] = [];
          }
          
          moduleEndpoints[moduleName].push({
            module: moduleName,
            controller,
            action,
            method,
            path: fullPath,
            fullPath: `/api${fullPath}`
          });
        }
      }
      
      // Recursively process nested items
      if (item.item) {
        extractEndpointsFromItems(item.item, moduleEndpoints, currentPath);
      }
    }
  }

  function extractTypeScriptPluginEndpoints(): ModuleEndpoints {
    const moduleEndpoints: ModuleEndpoints = {};
    const pluginsDir = join(process.cwd(), "src", "modules", "plugins");
    
    try {
      const pluginFiles = readdirSync(pluginsDir)
        .filter(f => f.endsWith('.ts') && f !== 'index.ts');
      
      for (const file of pluginFiles) {
        const moduleName = file.replace('.ts', '');
        const filePath = join(pluginsDir, file);
        const endpoints = extractEndpointsFromTSFile(filePath, moduleName);
        if (endpoints.length > 0) {
          moduleEndpoints[moduleName] = endpoints;
        }
      }
    } catch (error) {
      console.error(`Error reading TypeScript plugin files: ${error}`);
    }
    
    return moduleEndpoints;
  }

  function extractEndpointsFromTSFile(filePath: string, moduleName: string): ModuleEndpoint[] {
    const endpoints: ModuleEndpoint[] = [];
    
    try {
      const content = readFileSync(filePath, 'utf-8');
      
      // Extract API endpoints from the TypeScript source code
      // Look for patterns like: this.http.get('/api/module/controller/action')
      const httpCallRegex = /this\.http\.(get|post|put|delete|patch)\(['"`]([^'"`]+)['"`]/g;
      let match;
      
      while ((match = httpCallRegex.exec(content)) !== null) {
        const method = match[1].toUpperCase();
        const path = match[2];
        
        // Parse the path to extract controller and action
        const pathParts = path.split('/').filter(p => p && !p.startsWith('$'));
        let controller = '';
        let action = '';
        
        if (pathParts.length >= 3 && pathParts[0] === 'api' && pathParts[1]) {
          // Standard API path: /api/module/controller/action
          if (pathParts.length >= 4) {
            controller = pathParts[2];
            action = pathParts[3];
          } else if (pathParts.length === 3) {
            controller = pathParts[2];
          }
        }
        
        endpoints.push({
          module: moduleName,
          controller,
          action,
          method,
          path,
          fullPath: path
        });
      }
      
      // Also look for serviceAction calls
      const serviceActionRegex = /this\.serviceAction\(['"`]([^'"`]+)['"`],\s*['"`]([^'"`]+)['"`]/g;
      while ((match = serviceActionRegex.exec(content)) !== null) {
        const serviceModule = match[1];
        const serviceAction = match[2];
        const path = `/api/${serviceModule}/service/${serviceAction}`;
        
        endpoints.push({
          module: moduleName,
          controller: 'service',
          action: serviceAction,
          method: 'POST',
          path,
          fullPath: path
        });
      }
    } catch (error) {
      console.error(`Error reading file ${filePath}: ${error}`);
    }
    
    return endpoints;
  }

  function getTypeScriptPluginModules(): string[] {
    const pluginsDir = join(process.cwd(), "src", "modules", "plugins");
    
    try {
      return readdirSync(pluginsDir)
        .filter(f => f.endsWith('.ts') && f !== 'index.ts')
        .map(f => f.replace('.ts', ''))
        .sort();
    } catch (error) {
      console.error(`Error reading TypeScript plugin modules: ${error}`);
      return [];
    }
  }

  function analyzePluginModule(
    moduleName: string,
    postmanEndpoints: ModuleEndpoints,
    tsEndpoints: ModuleEndpoints
  ): PluginAnalysis {
    const postmanPaths = new Set(postmanEndpoints[moduleName]?.map(e => `${e.method} ${e.fullPath}`) || []);
    const tsPaths = new Set(tsEndpoints[moduleName]?.map(e => `${e.method} ${e.fullPath}`) || []);
    
    const onlyInPostman = [...postmanPaths].filter(x => !tsPaths.has(x));
    const onlyInTS = [...tsPaths].filter(x => !postmanPaths.has(x));
    const common = [...postmanPaths].filter(x => tsPaths.has(x));
    
    return {
      moduleName,
      postmanEndpoints: postmanPaths.size,
      typescriptEndpoints: tsPaths.size,
      commonEndpoints: common.length,
      coveragePercentage: postmanPaths.size > 0 ? Math.round((common.length / postmanPaths.size) * 100) : 0,
      perfectMatch: onlyInPostman.length === 0 && onlyInTS.length === 0,
      onlyInPostman: onlyInPostman.sort(),
      onlyInTypeScript: onlyInTS.sort(),
      commonPaths: common.sort()
    };
  }

  function categorizePluginsByQuality(analyses: PluginAnalysis[]): {
    perfect: PluginAnalysis[];
    excellent: PluginAnalysis[];
    good: PluginAnalysis[];
    needsWork: PluginAnalysis[];
    missing: PluginAnalysis[];
  } {
    return {
      perfect: analyses.filter(a => a.perfectMatch && a.postmanEndpoints > 0),
      excellent: analyses.filter(a => a.coveragePercentage >= 90 && !a.perfectMatch && a.postmanEndpoints > 0),
      good: analyses.filter(a => a.coveragePercentage >= 70 && a.coveragePercentage < 90 && a.postmanEndpoints > 0),
      needsWork: analyses.filter(a => a.coveragePercentage < 70 && a.postmanEndpoints > 0),
      missing: analyses.filter(a => a.postmanEndpoints === 0 && a.typescriptEndpoints > 0)
    };
  }

  test("should analyze all plugin module endpoint coverage", () => {
    console.log("\n🔍 Starting Comprehensive Plugin Module Analysis...");
    
    const postmanEndpoints = extractPostmanPluginEndpoints();
    const tsEndpoints = extractTypeScriptPluginEndpoints();
    const allPluginModules = getTypeScriptPluginModules();
    
    console.log(`\n📊 Plugin Module Overview:`);
    console.log(`Total TypeScript plugin modules: ${allPluginModules.length}`);
    console.log(`Postman plugin modules with endpoints: ${Object.keys(postmanEndpoints).length}`);
    console.log(`TypeScript plugin modules with endpoints: ${Object.keys(tsEndpoints).length}`);
    
    // Analyze each plugin module
    const analyses: PluginAnalysis[] = allPluginModules.map(module => 
      analyzePluginModule(module, postmanEndpoints, tsEndpoints)
    );
    
    // Categorize by quality
    const categories = categorizePluginsByQuality(analyses);
    
    console.log(`\n🏆 Plugin Module Quality Analysis:`);
    console.log(`Perfect matches (100%): ${categories.perfect.length}`);
    console.log(`Excellent coverage (90-99%): ${categories.excellent.length}`);
    console.log(`Good coverage (70-89%): ${categories.good.length}`);
    console.log(`Needs work (<70%): ${categories.needsWork.length}`);
    console.log(`Missing from Postman: ${categories.missing.length}`);
    
    // Calculate overall statistics
    const totalPostmanEndpoints = analyses.reduce((sum, a) => sum + a.postmanEndpoints, 0);
    const totalTSEndpoints = analyses.reduce((sum, a) => sum + a.typescriptEndpoints, 0);
    const totalCommonEndpoints = analyses.reduce((sum, a) => sum + a.commonEndpoints, 0);
    const overallCoverage = totalPostmanEndpoints > 0 ? Math.round((totalCommonEndpoints / totalPostmanEndpoints) * 100) : 0;
    
    console.log(`\n📈 Overall Plugin Statistics:`);
    console.log(`Total plugin endpoints in Postman: ${totalPostmanEndpoints}`);
    console.log(`Total plugin endpoints in TypeScript: ${totalTSEndpoints}`);
    console.log(`Total matching endpoints: ${totalCommonEndpoints}`);
    console.log(`Overall coverage: ${overallCoverage}%`);
    
    expect(allPluginModules.length).toBeGreaterThan(0);
    expect(totalPostmanEndpoints).toBeGreaterThan(0);
    expect(totalTSEndpoints).toBeGreaterThan(0);
  });

  test("should display perfect match plugin modules", () => {
    console.log("\n✅ Perfect Match Plugin Modules Analysis...");
    
    const postmanEndpoints = extractPostmanPluginEndpoints();
    const tsEndpoints = extractTypeScriptPluginEndpoints();
    const allPluginModules = getTypeScriptPluginModules();
    
    const analyses = allPluginModules.map(module => 
      analyzePluginModule(module, postmanEndpoints, tsEndpoints)
    );
    
    const perfectMatches = analyses.filter(a => a.perfectMatch && a.postmanEndpoints > 0);
    
    console.log(`\n🎯 Perfect Match Plugins (${perfectMatches.length} modules):`);
    perfectMatches.forEach(analysis => {
      console.log(`\n  ✅ ${analysis.moduleName.toUpperCase()}:`);
      console.log(`     Endpoints: ${analysis.postmanEndpoints} (all matching)`);
      console.log(`     Coverage: 100%`);
      
      if (analysis.commonPaths.length <= 5) {
        console.log(`     Sample endpoints:`);
        analysis.commonPaths.forEach(path => console.log(`       ${path}`));
      } else {
        console.log(`     Sample endpoints (showing first 3):`);
        analysis.commonPaths.slice(0, 3).forEach(path => console.log(`       ${path}`));
        console.log(`       ... and ${analysis.commonPaths.length - 3} more`);
      }
    });
    
    if (perfectMatches.length === 0) {
      console.log("     No perfect matches found - all plugins have some discrepancies");
    }
    
    expect(perfectMatches.length).toBeGreaterThanOrEqual(0);
  });

  test("should display problematic plugin modules", () => {
    console.log("\n❌ Problematic Plugin Modules Analysis...");
    
    const postmanEndpoints = extractPostmanPluginEndpoints();
    const tsEndpoints = extractTypeScriptPluginEndpoints();
    const allPluginModules = getTypeScriptPluginModules();
    
    const analyses = allPluginModules.map(module => 
      analyzePluginModule(module, postmanEndpoints, tsEndpoints)
    );
    
    const problematic = analyses.filter(a => a.coveragePercentage < 70 && a.postmanEndpoints > 0);
    const missing = analyses.filter(a => a.postmanEndpoints === 0 && a.typescriptEndpoints > 0);
    
    console.log(`\n⚠️  Plugins Needing Work (${problematic.length} modules with <70% coverage):`);
    problematic.sort((a, b) => a.coveragePercentage - b.coveragePercentage).forEach(analysis => {
      console.log(`\n  ❌ ${analysis.moduleName.toUpperCase()}:`);
      console.log(`     Postman: ${analysis.postmanEndpoints}, TypeScript: ${analysis.typescriptEndpoints}`);
      console.log(`     Common: ${analysis.commonEndpoints}, Coverage: ${analysis.coveragePercentage}%`);
      
      if (analysis.onlyInPostman.length > 0) {
        console.log(`     Missing from TypeScript (${analysis.onlyInPostman.length}):`);
        analysis.onlyInPostman.slice(0, 3).forEach(path => console.log(`       ${path}`));
        if (analysis.onlyInPostman.length > 3) {
          console.log(`       ... and ${analysis.onlyInPostman.length - 3} more`);
        }
      }
      
      if (analysis.onlyInTypeScript.length > 0) {
        console.log(`     Extra in TypeScript (${analysis.onlyInTypeScript.length}):`);
        analysis.onlyInTypeScript.slice(0, 2).forEach(path => console.log(`       ${path}`));
        if (analysis.onlyInTypeScript.length > 2) {
          console.log(`       ... and ${analysis.onlyInTypeScript.length - 2} more`);
        }
      }
    });
    
    console.log(`\n🚫 Plugins Missing from Postman (${missing.length} modules):`);
    missing.forEach(analysis => {
      console.log(`  - ${analysis.moduleName} (${analysis.typescriptEndpoints} TS endpoints)`);
    });
    
    expect(analyses.length).toBeGreaterThan(0);
  });

  test("should analyze plugin modules by category", () => {
    console.log("\n📦 Plugin Modules by Category Analysis...");
    
    const postmanEndpoints = extractPostmanPluginEndpoints();
    const tsEndpoints = extractTypeScriptPluginEndpoints();
    const allPluginModules = getTypeScriptPluginModules();
    
    const analyses = allPluginModules.map(module => 
      analyzePluginModule(module, postmanEndpoints, tsEndpoints)
    );
    
    // Group plugins by logical categories (based on CLAUDE.md documentation)
    const categories = {
      'Security & Auth': ['acmeclient', 'clamav', 'crowdsec', 'freeradius', 'radsecproxy', 'rspamd', 'shadowsocks', 'stunnel', 'tor', 'wazuhagent', 'cicap', 'sslh'],
      'Network & VPN': ['bind', 'dnscryptproxy', 'dyndns', 'ndproxy', 'openconnect', 'softether', 'tailscale', 'tayga', 'tinc', 'zerotier', 'udpbroadcastrelay'],
      'Web Services': ['caddy', 'haproxy', 'nginx', 'proxy', 'proxysso', 'ftpproxy', 'siproxd'],
      'Monitoring': ['collectd', 'netdata', 'netsnmp', 'nodeexporter', 'ntopng', 'telegraf', 'vnstat', 'zabbixagent', 'zabbixproxy'],
      'Infrastructure': ['apcupsd', 'chrony', 'nut', 'smart'],
      'Communication': ['maltrail', 'mdnsrepeater', 'postfix', 'turnserver', 'muninnode'],
      'Tools & Utilities': ['iperf', 'lldpd', 'wol', 'nrpe'],
      'System Management': ['puppetagent', 'qemuguestagent'],
      'Examples & Dev': ['gridexample', 'helloworld'],
      'Hardware & Info': ['dechw', 'dmidecode', 'hwprobe'],
      'Storage & Services': ['redis', 'tftp', 'relayd', 'quagga']
    };
    
    console.log(`\n📊 Coverage by Plugin Category:`);
    
    for (const [categoryName, moduleNames] of Object.entries(categories)) {
      const categoryAnalyses = analyses.filter(a => moduleNames.includes(a.moduleName));
      const totalEndpoints = categoryAnalyses.reduce((sum, a) => sum + a.postmanEndpoints, 0);
      const totalMatching = categoryAnalyses.reduce((sum, a) => sum + a.commonEndpoints, 0);
      const avgCoverage = totalEndpoints > 0 ? Math.round((totalMatching / totalEndpoints) * 100) : 0;
      const perfectCount = categoryAnalyses.filter(a => a.perfectMatch && a.postmanEndpoints > 0).length;
      
      console.log(`\n  📁 ${categoryName}:`);
      console.log(`     Modules: ${categoryAnalyses.length}/${moduleNames.length}`);
      console.log(`     Total endpoints: ${totalEndpoints}`);
      console.log(`     Average coverage: ${avgCoverage}%`);
      console.log(`     Perfect matches: ${perfectCount}`);
      
      // Show best and worst in category
      const withEndpoints = categoryAnalyses.filter(a => a.postmanEndpoints > 0);
      if (withEndpoints.length > 0) {
        const best = withEndpoints.reduce((prev, curr) => prev.coveragePercentage > curr.coveragePercentage ? prev : curr);
        const worst = withEndpoints.reduce((prev, curr) => prev.coveragePercentage < curr.coveragePercentage ? prev : curr);
        
        if (withEndpoints.length > 1) {
          console.log(`     Best: ${best.moduleName} (${best.coveragePercentage}%)`);
          console.log(`     Worst: ${worst.moduleName} (${worst.coveragePercentage}%)`);
        } else {
          console.log(`     Only module: ${best.moduleName} (${best.coveragePercentage}%)`);
        }
      }
    }
    
    expect(analyses.length).toBeGreaterThan(0);
  });

  test("should identify common endpoint patterns in plugins", () => {
    console.log("\n🔍 Common Plugin Endpoint Patterns Analysis...");
    
    const postmanEndpoints = extractPostmanPluginEndpoints();
    const tsEndpoints = extractTypeScriptPluginEndpoints();
    const allPluginModules = getTypeScriptPluginModules();
    
    const analyses = allPluginModules.map(module => 
      analyzePluginModule(module, postmanEndpoints, tsEndpoints)
    );
    
    // Analyze common patterns in mismatched endpoints
    const allMismatchedPostman: string[] = [];
    const allMismatchedTS: string[] = [];
    
    analyses.forEach(analysis => {
      allMismatchedPostman.push(...analysis.onlyInPostman);
      allMismatchedTS.push(...analysis.onlyInTypeScript);
    });
    
    // Find common patterns
    const duplicatePathPattern = allMismatchedTS.filter(path => path.includes('/api/') && path.split('/').filter(p => p).length > 3);
    const missingParamsPattern = allMismatchedPostman.filter(path => !path.includes('${'));
    const extraParamsPattern = allMismatchedTS.filter(path => path.includes('${'));
    
    console.log(`\n🔧 Pattern Analysis Results:`);
    console.log(`Total mismatched Postman endpoints: ${allMismatchedPostman.length}`);
    console.log(`Total mismatched TypeScript endpoints: ${allMismatchedTS.length}`);
    
    console.log(`\n📋 Common Issues Identified:`);
    console.log(`Potential duplicate path segments: ${duplicatePathPattern.length} endpoints`);
    console.log(`Missing parameters in Postman: ${missingParamsPattern.length} endpoints`);
    console.log(`Extra parameters in TypeScript: ${extraParamsPattern.length} endpoints`);
    
    if (duplicatePathPattern.length > 0) {
      console.log(`\n🔍 Sample Duplicate Path Issues:`);
      duplicatePathPattern.slice(0, 5).forEach(path => console.log(`  ${path}`));
      if (duplicatePathPattern.length > 5) {
        console.log(`  ... and ${duplicatePathPattern.length - 5} more`);
      }
    }
    
    // Look for the most common modules with issues
    const moduleIssueCount = analyses
      .filter(a => !a.perfectMatch && a.postmanEndpoints > 0)
      .sort((a, b) => (b.onlyInPostman.length + b.onlyInTypeScript.length) - (a.onlyInPostman.length + a.onlyInTypeScript.length))
      .slice(0, 10);
    
    console.log(`\n📊 Top 10 Modules with Most Endpoint Discrepancies:`);
    moduleIssueCount.forEach((analysis, index) => {
      const totalIssues = analysis.onlyInPostman.length + analysis.onlyInTypeScript.length;
      console.log(`  ${index + 1}. ${analysis.moduleName}: ${totalIssues} discrepancies (${analysis.coveragePercentage}% coverage)`);
    });
    
    expect(analyses.length).toBeGreaterThan(0);
  });
});