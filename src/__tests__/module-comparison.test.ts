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

describe("Module Comparison Tests", () => {
  function extractPostmanModules(): Set<string> {
    const postmanDir = join(process.cwd(), "postman");
    const modules = new Set<string>();
    
    try {
      const files = readdirSync(postmanDir).filter(f => f.endsWith('.json'));
      
      for (const file of files) {
        const filePath = join(postmanDir, file);
        const content = readFileSync(filePath, 'utf-8');
        const collection: PostmanCollection = JSON.parse(content);
        
        // Extract modules from collection items
        if (collection.item) {
          extractModulesFromItems(collection.item, modules);
        }
      }
    } catch (error) {
      console.error(`Error reading Postman collections: ${error}`);
    }
    
    return modules;
  }

  function extractPostmanEndpoints(): ModuleEndpoints {
    const postmanDir = join(process.cwd(), "postman");
    const moduleEndpoints: ModuleEndpoints = {};
    
    try {
      const files = readdirSync(postmanDir).filter(f => f.endsWith('.json'));
      
      for (const file of files) {
        const filePath = join(postmanDir, file);
        const content = readFileSync(filePath, 'utf-8');
        const collection: PostmanCollection = JSON.parse(content);
        
        if (collection.item) {
          extractEndpointsFromItems(collection.item, moduleEndpoints, []);
        }
      }
    } catch (error) {
      console.error(`Error reading Postman collections: ${error}`);
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

  function extractModulesFromItems(items: PostmanItem[], modules: Set<string>) {
    for (const item of items) {
      // Check if this item has a request with API path
      if (item.request?.url) {
        let apiPath = '';
        
        if (item.request.url.raw) {
          apiPath = item.request.url.raw;
        } else if (item.request.url.path) {
          apiPath = '/' + item.request.url.path.join('/');
        }
        
        // Extract module from API path patterns:
        // Pattern 1: /api/{module}/... (full API path)
        // Pattern 2: /{module}/... (Postman collection format)
        let moduleMatch = apiPath.match(/\/api\/([^\/]+)\//);
        if (!moduleMatch && item.request.url.path && item.request.url.path.length > 0) {
          // Try extracting first path segment as module name
          const firstSegment = item.request.url.path[0];
          if (firstSegment && !firstSegment.startsWith('{{')) {
            modules.add(firstSegment.toLowerCase());
          }
        } else if (moduleMatch && moduleMatch[1]) {
          modules.add(moduleMatch[1]);
        }
      }
      
      // Also check if the item name itself represents a module (top-level items)
      if (!item.request && item.item && item.name) {
        const moduleName = item.name.toLowerCase().replace(/\s+/g, '');
        // Only add if it looks like a valid module name (no spaces, reasonable length)
        if (moduleName.length > 0 && moduleName.length < 20 && /^[a-z0-9]+$/.test(moduleName)) {
          modules.add(moduleName);
        }
      }
      
      // Recursively check nested items
      if (item.item) {
        extractModulesFromItems(item.item, modules);
      }
    }
  }

  function extractTypeScriptCoreModules(): Set<string> {
    const coreModulesDir = join(process.cwd(), "src", "modules", "core");
    const modules = new Set<string>();
    
    try {
      const files = readdirSync(coreModulesDir)
        .filter(f => f.endsWith('.ts') && f !== 'index.ts')
        .map(f => f.replace('.ts', ''));
      
      files.forEach(module => modules.add(module));
    } catch (error) {
      console.error(`Error reading TypeScript core modules: ${error}`);
    }
    
    return modules;
  }

  function extractTypeScriptPluginModules(): Set<string> {
    const pluginModulesDir = join(process.cwd(), "src", "modules", "plugins");
    const modules = new Set<string>();
    
    try {
      const files = readdirSync(pluginModulesDir)
        .filter(f => f.endsWith('.ts') && f !== 'index.ts')
        .map(f => f.replace('.ts', ''));
      
      files.forEach(module => modules.add(module));
    } catch (error) {
      console.error(`Error reading TypeScript plugin modules: ${error}`);
    }
    
    return modules;
  }

  function extractTypeScriptEndpoints(): ModuleEndpoints {
    const moduleEndpoints: ModuleEndpoints = {};
    const coreDir = join(process.cwd(), "src", "modules", "core");
    const pluginsDir = join(process.cwd(), "src", "modules", "plugins");
    
    try {
      // Process core modules
      const coreFiles = readdirSync(coreDir)
        .filter(f => f.endsWith('.ts') && f !== 'index.ts');
      
      for (const file of coreFiles) {
        const moduleName = file.replace('.ts', '');
        const filePath = join(coreDir, file);
        const endpoints = extractEndpointsFromTSFile(filePath, moduleName);
        if (endpoints.length > 0) {
          moduleEndpoints[moduleName] = endpoints;
        }
      }
      
      // Process plugin modules
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
      console.error(`Error reading TypeScript module files: ${error}`);
    }
    
    return moduleEndpoints;
  }

  function extractEndpointsFromTSFile(filePath: string, moduleName: string): ModuleEndpoint[] {
    const endpoints: ModuleEndpoint[] = [];
    
    try {
      const content = readFileSync(filePath, 'utf-8');
      
      // Debug output for diagnostics module
      if (moduleName === 'diagnostics') {
        console.log(`🩺 DEBUG: Processing diagnostics module`);
        console.log(`📁 DEBUG: File path: ${filePath}`);
        console.log(`📏 DEBUG: File size: ${content.length} characters`);
        console.log(`🔍 DEBUG: First 200 chars: ${content.substring(0, 200)}`);
      }
      
      // Extract API endpoints from the TypeScript source code
      // Look for patterns like: this.http.get('/api/module/controller/action')
      const httpCallRegex = /this\.http\.(get|post|put|delete|patch)\(['"`]([^'"`]+)['"`]/g;
      let match;
      
      while ((match = httpCallRegex.exec(content)) !== null) {
        const method = match[1].toUpperCase();
        const path = match[2];
        
        // Debug output for diagnostics module
        if (moduleName === 'diagnostics' && endpoints.length < 5) {
          console.log(`🎯 DEBUG: Found endpoint ${endpoints.length + 1}: ${method} ${path}`);
        }
        
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
      
      // Debug output for diagnostics module
      if (moduleName === 'diagnostics') {
        console.log(`📊 DEBUG: Total diagnostics endpoints found: ${endpoints.length}`);
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

  function compareModuleSets(set1: Set<string>, set2: Set<string>, name1: string, name2: string) {
    const onlyInSet1 = new Set([...set1].filter(x => !set2.has(x)));
    const onlyInSet2 = new Set([...set2].filter(x => !set1.has(x)));
    const common = new Set([...set1].filter(x => set2.has(x)));
    
    console.log(`\n📊 ${name1} vs ${name2} Comparison:`);
    console.log(`${name1} modules: ${set1.size}`);
    console.log(`${name2} modules: ${set2.size}`);
    console.log(`Common modules: ${common.size}`);
    
    if (onlyInSet1.size > 0) {
      console.log(`\n❌ Only in ${name1} (${onlyInSet1.size}):`);
      [...onlyInSet1].sort().forEach(module => console.log(`  - ${module}`));
    }
    
    if (onlyInSet2.size > 0) {
      console.log(`\n❌ Only in ${name2} (${onlyInSet2.size}):`);
      [...onlyInSet2].sort().forEach(module => console.log(`  - ${module}`));
    }
    
    if (onlyInSet1.size === 0 && onlyInSet2.size === 0) {
      console.log(`\n✅ Perfect match! All modules are identical.`);
    }
    
    console.log(`\n📝 Common modules (${common.size}):`);
    [...common].sort().forEach(module => console.log(`  ✓ ${module}`));
    
    return {
      set1Count: set1.size,
      set2Count: set2.size,
      commonCount: common.size,
      onlyInSet1: onlyInSet1,
      onlyInSet2: onlyInSet2,
      isMatch: onlyInSet1.size === 0 && onlyInSet2.size === 0
    };
  }

  function compareModuleEndpoints(
    postmanEndpoints: ModuleEndpoints,
    tsEndpoints: ModuleEndpoints,
    moduleName: string
  ) {
    const postmanPaths = new Set(postmanEndpoints[moduleName]?.map(e => `${e.method} ${e.fullPath}`) || []);
    const tsPaths = new Set(tsEndpoints[moduleName]?.map(e => `${e.method} ${e.fullPath}`) || []);
    
    const onlyInPostman = new Set([...postmanPaths].filter(x => !tsPaths.has(x)));
    const onlyInTS = new Set([...tsPaths].filter(x => !postmanPaths.has(x)));
    const common = new Set([...postmanPaths].filter(x => tsPaths.has(x)));
    
    return {
      postmanCount: postmanPaths.size,
      tsCount: tsPaths.size,
      commonCount: common.size,
      onlyInPostman,
      onlyInTS,
      common,
      isMatch: onlyInPostman.size === 0 && onlyInTS.size === 0
    };
  }

  function normalizeEndpointPath(path: string): string {
    // Normalize paths by removing parameter placeholders and standardizing format
    return path
      .replace(/\$\{[^}]+\}/g, '{param}') // Replace ${param} with {param}
      .replace(/\/\{[^}]+\}/g, '/{param}') // Standardize parameter format
      .toLowerCase();
  }

  function compareAllModuleEndpoints(postmanEndpoints: ModuleEndpoints, tsEndpoints: ModuleEndpoints) {
    const allModules = new Set([...Object.keys(postmanEndpoints), ...Object.keys(tsEndpoints)]);
    const results: { [module: string]: any } = {};
    
    console.log(`\n🔍 Detailed Endpoint Comparison by Module:`);
    
    for (const moduleName of allModules) {
      const comparison = compareModuleEndpoints(postmanEndpoints, tsEndpoints, moduleName);
      results[moduleName] = comparison;
      
      if (comparison.postmanCount > 0 || comparison.tsCount > 0) {
        console.log(`\n📦 ${moduleName.toUpperCase()} Module:`);
        console.log(`  Postman endpoints: ${comparison.postmanCount}`);
        console.log(`  TypeScript endpoints: ${comparison.tsCount}`);
        console.log(`  Common endpoints: ${comparison.commonCount}`);
        console.log(`  Match: ${comparison.isMatch ? '✅' : '❌'}`);
        
        if (comparison.onlyInPostman.size > 0) {
          console.log(`  Only in Postman (${comparison.onlyInPostman.size}):`);
          [...comparison.onlyInPostman].sort().slice(0, 5).forEach(endpoint => 
            console.log(`    - ${endpoint}`)
          );
          if (comparison.onlyInPostman.size > 5) {
            console.log(`    ... and ${comparison.onlyInPostman.size - 5} more`);
          }
        }
        
        if (comparison.onlyInTS.size > 0) {
          console.log(`  Only in TypeScript (${comparison.onlyInTS.size}):`);
          [...comparison.onlyInTS].sort().slice(0, 5).forEach(endpoint => 
            console.log(`    - ${endpoint}`)
          );
          if (comparison.onlyInTS.size > 5) {
            console.log(`    ... and ${comparison.onlyInTS.size - 5} more`);
          }
        }
      }
    }
    
    return results;
  }

  test("should extract and compare Postman vs TypeScript core modules", () => {
    console.log("\n🔍 Starting Module Comparison Analysis...");
    
    const postmanModules = extractPostmanModules();
    const tsCore = extractTypeScriptCoreModules();
    const tsPlugins = extractTypeScriptPluginModules();
    const tsAll = new Set([...tsCore, ...tsPlugins]);
    
    console.log(`\n📋 Module Extraction Results:`);
    console.log(`Postman collection modules: ${postmanModules.size}`);
    console.log(`TypeScript core modules: ${tsCore.size}`);
    console.log(`TypeScript plugin modules: ${tsPlugins.size}`);
    console.log(`TypeScript total modules: ${tsAll.size}`);
    
    // Compare Postman vs TypeScript core modules
    const coreComparison = compareModuleSets(
      postmanModules, 
      tsCore, 
      "Postman Collection", 
      "TypeScript Core"
    );
    
    // Compare Postman vs all TypeScript modules
    const allComparison = compareModuleSets(
      postmanModules, 
      tsAll, 
      "Postman Collection", 
      "TypeScript All Modules"
    );
    
    // Assertions
    expect(postmanModules.size).toBeGreaterThan(0);
    expect(tsCore.size).toBeGreaterThan(0);
    expect(tsPlugins.size).toBeGreaterThan(0);
    
    // Log final summary
    console.log(`\n🎯 Final Analysis Summary:`);
    console.log(`Core modules match: ${coreComparison.isMatch ? '✅' : '❌'}`);
    console.log(`All modules coverage: ${allComparison.commonCount}/${postmanModules.size} (${Math.round(allComparison.commonCount / postmanModules.size * 100)}%)`);
    
    if (!coreComparison.isMatch) {
      console.log(`\n⚠️  Core module discrepancies found:`);
      if (coreComparison.onlyInSet1.size > 0) {
        console.log(`   Missing from TypeScript: ${[...coreComparison.onlyInSet1].join(', ')}`);
      }
      if (coreComparison.onlyInSet2.size > 0) {
        console.log(`   Extra in TypeScript: ${[...coreComparison.onlyInSet2].join(', ')}`);
      }
    }
  });

  test("should validate all TypeScript modules have corresponding files", () => {
    const tsCore = extractTypeScriptCoreModules();
    const tsPlugins = extractTypeScriptPluginModules();
    
    // Verify core module files exist
    for (const module of tsCore) {
      const filePath = join(process.cwd(), "src", "modules", "core", `${module}.ts`);
      expect(() => readFileSync(filePath, 'utf-8')).not.toThrow();
    }
    
    // Verify plugin module files exist
    for (const module of tsPlugins) {
      const filePath = join(process.cwd(), "src", "modules", "plugins", `${module}.ts`);
      expect(() => readFileSync(filePath, 'utf-8')).not.toThrow();
    }
    
    console.log(`\n✅ All ${tsCore.size + tsPlugins.size} TypeScript module files validated`);
  });

  test("should extract module statistics", () => {
    const postmanModules = extractPostmanModules();
    const tsCore = extractTypeScriptCoreModules();
    const tsPlugins = extractTypeScriptPluginModules();
    
    const stats = {
      postman: {
        total: postmanModules.size,
        modules: [...postmanModules].sort()
      },
      typescript: {
        core: tsCore.size,
        plugins: tsPlugins.size,
        total: tsCore.size + tsPlugins.size,
        coreModules: [...tsCore].sort(),
        pluginModules: [...tsPlugins].sort()
      }
    };
    
    console.log(`\n📈 Detailed Module Statistics:`);
    console.log(JSON.stringify(stats, null, 2));
    
    expect(stats.postman.total).toBeGreaterThan(0);
    expect(stats.typescript.total).toBeGreaterThan(0);
  });

  test("should extract and compare endpoint coverage", () => {
    console.log("\n🔍 Starting Endpoint Coverage Analysis...");
    
    const postmanEndpoints = extractPostmanEndpoints();
    const tsEndpoints = extractTypeScriptEndpoints();
    
    console.log(`\n📊 Endpoint Extraction Summary:`);
    console.log(`Postman modules with endpoints: ${Object.keys(postmanEndpoints).length}`);
    console.log(`TypeScript modules with endpoints: ${Object.keys(tsEndpoints).length}`);
    
    const postmanTotal = Object.values(postmanEndpoints).reduce((sum, endpoints) => sum + endpoints.length, 0);
    const tsTotal = Object.values(tsEndpoints).reduce((sum, endpoints) => sum + endpoints.length, 0);
    
    console.log(`Total Postman endpoints: ${postmanTotal}`);
    console.log(`Total TypeScript endpoints: ${tsTotal}`);
    
    // Compare all module endpoints
    const comparisonResults = compareAllModuleEndpoints(postmanEndpoints, tsEndpoints);
    
    // Calculate overall statistics
    const totalMatches = Object.values(comparisonResults).reduce((sum: number, result: any) => sum + result.commonCount, 0);
    const totalPostmanOnly = Object.values(comparisonResults).reduce((sum: number, result: any) => sum + result.onlyInPostman.size, 0);
    const totalTSOnly = Object.values(comparisonResults).reduce((sum: number, result: any) => sum + result.onlyInTS.size, 0);
    
    console.log(`\n🎯 Overall Endpoint Coverage:`);
    console.log(`Matching endpoints: ${totalMatches}`);
    console.log(`Only in Postman: ${totalPostmanOnly}`);
    console.log(`Only in TypeScript: ${totalTSOnly}`);
    console.log(`Coverage percentage: ${postmanTotal > 0 ? Math.round((totalMatches / postmanTotal) * 100) : 0}%`);
    
    expect(postmanTotal).toBeGreaterThan(0);
    expect(tsTotal).toBeGreaterThan(0);
    expect(totalMatches).toBeGreaterThan(0);
  });

  test("should analyze core module endpoint coverage", () => {
    console.log("\n🔍 Analyzing Core Module Endpoint Coverage...");
    
    const postmanEndpoints = extractPostmanEndpoints();
    const tsEndpoints = extractTypeScriptEndpoints();
    const coreModules = extractTypeScriptCoreModules();
    
    let totalCoreMatches = 0;
    let totalCorePostman = 0;
    let totalCoreTS = 0;
    
    console.log(`\n📦 Core Module Endpoint Analysis:`);
    
    for (const module of coreModules) {
      const comparison = compareModuleEndpoints(postmanEndpoints, tsEndpoints, module);
      
      totalCoreMatches += comparison.commonCount;
      totalCorePostman += comparison.postmanCount;
      totalCoreTS += comparison.tsCount;
      
      if (comparison.postmanCount > 0 || comparison.tsCount > 0) {
        console.log(`\n  ${module.toUpperCase()}:`);
        console.log(`    Postman: ${comparison.postmanCount}, TypeScript: ${comparison.tsCount}, Common: ${comparison.commonCount}`);
        console.log(`    Coverage: ${comparison.postmanCount > 0 ? Math.round((comparison.commonCount / comparison.postmanCount) * 100) : 0}%`);
      }
    }
    
    console.log(`\n🎯 Core Modules Summary:`);
    console.log(`Total core endpoints in Postman: ${totalCorePostman}`);
    console.log(`Total core endpoints in TypeScript: ${totalCoreTS}`);
    console.log(`Total matching core endpoints: ${totalCoreMatches}`);
    console.log(`Core module coverage: ${totalCorePostman > 0 ? Math.round((totalCoreMatches / totalCorePostman) * 100) : 0}%`);
    
    expect(totalCorePostman).toBeGreaterThan(0);
    expect(totalCoreTS).toBeGreaterThan(0);
  });

  test("should analyze plugin module endpoint coverage", () => {
    console.log("\n🔍 Analyzing Plugin Module Endpoint Coverage...");
    
    const postmanEndpoints = extractPostmanEndpoints();
    const tsEndpoints = extractTypeScriptEndpoints();
    const pluginModules = extractTypeScriptPluginModules();
    
    let totalPluginMatches = 0;
    let totalPluginPostman = 0;
    let totalPluginTS = 0;
    let pluginsWithEndpoints = 0;
    
    console.log(`\n📦 Plugin Module Endpoint Analysis (showing modules with endpoints):`);
    
    for (const module of pluginModules) {
      const comparison = compareModuleEndpoints(postmanEndpoints, tsEndpoints, module);
      
      totalPluginMatches += comparison.commonCount;
      totalPluginPostman += comparison.postmanCount;
      totalPluginTS += comparison.tsCount;
      
      if (comparison.postmanCount > 0 || comparison.tsCount > 0) {
        pluginsWithEndpoints++;
        
        // Only show first 10 plugins with endpoints to avoid too much output
        if (pluginsWithEndpoints <= 10) {
          console.log(`\n  ${module.toUpperCase()}:`);
          console.log(`    Postman: ${comparison.postmanCount}, TypeScript: ${comparison.tsCount}, Common: ${comparison.commonCount}`);
          console.log(`    Coverage: ${comparison.postmanCount > 0 ? Math.round((comparison.commonCount / comparison.postmanCount) * 100) : 0}%`);
        }
      }
    }
    
    if (pluginsWithEndpoints > 10) {
      console.log(`\n  ... and ${pluginsWithEndpoints - 10} more plugins with endpoints`);
    }
    
    console.log(`\n🎯 Plugin Modules Summary:`);
    console.log(`Plugins with endpoints: ${pluginsWithEndpoints}/${pluginModules.size}`);
    console.log(`Total plugin endpoints in Postman: ${totalPluginPostman}`);
    console.log(`Total plugin endpoints in TypeScript: ${totalPluginTS}`);
    console.log(`Total matching plugin endpoints: ${totalPluginMatches}`);
    console.log(`Plugin module coverage: ${totalPluginPostman > 0 ? Math.round((totalPluginMatches / totalPluginPostman) * 100) : 0}%`);
    
    expect(pluginModules.size).toBeGreaterThan(0);
  });
});