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

interface ParameterizedEndpoint {
  module: string;
  method: string;
  postmanUrl: string;
  postmanParams: string[];
  typescriptUrl?: string;
  typescriptParams: string[];
  hasTypescriptMatch: boolean;
  issue?: string;
}

describe("Parameter Handling Analysis", () => {
  function extractPostmanParameterizedEndpoints(): ParameterizedEndpoint[] {
    const postmanDir = join(process.cwd(), "postman");
    const parameterizedEndpoints: ParameterizedEndpoint[] = [];
    
    try {
      const files = readdirSync(postmanDir).filter(f => f.endsWith('.json'));
      
      for (const file of files) {
        const filePath = join(postmanDir, file);
        const content = readFileSync(filePath, 'utf-8');
        const collection: PostmanCollection = JSON.parse(content);
        
        if (collection.item) {
          extractParametersFromItems(collection.item, parameterizedEndpoints, []);
        }
      }
    } catch (error) {
      console.error(`Error reading Postman collections: ${error}`);
    }
    
    return parameterizedEndpoints;
  }

  function extractParametersFromItems(
    items: PostmanItem[], 
    endpoints: ParameterizedEndpoint[], 
    pathContext: string[]
  ) {
    for (const item of items) {
      const currentPath = [...pathContext, item.name];
      
      if (item.request?.url) {
        const method = item.request.method || 'GET';
        let fullPath = '';
        let moduleName = '';
        let params: string[] = [];
        
        if (item.request.url.path && item.request.url.path.length > 0) {
          const pathSegments = item.request.url.path.filter(segment => 
            segment && !segment.startsWith('{{opnsense_base_url}}')
          );
          fullPath = '/api/' + pathSegments.join('/');
          
          // Extract parameters from path segments
          params = pathSegments.filter(segment => 
            segment.startsWith('{{') && segment.endsWith('}}')
          ).map(param => param.slice(2, -2)); // Remove {{ }}
          
          // Only include endpoints that have parameters
          if (params.length > 0) {
            // Extract module name (first segment after filtering)
            if (pathSegments.length > 0) {
              moduleName = pathSegments[0].toLowerCase();
            }
            
            if (moduleName) {
              endpoints.push({
                module: moduleName,
                method,
                postmanUrl: fullPath,
                postmanParams: params,
                typescriptUrl: undefined,
                typescriptParams: [],
                hasTypescriptMatch: false
              });
            }
          }
        }
      }
      
      // Recursively process nested items
      if (item.item) {
        extractParametersFromItems(item.item, endpoints, currentPath);
      }
    }
  }

  function extractTypeScriptParameterizedEndpoints(): { [module: string]: ParameterizedEndpoint[] } {
    const moduleEndpoints: { [module: string]: ParameterizedEndpoint[] } = {};
    const coreDir = join(process.cwd(), "src", "modules", "core");
    const pluginsDir = join(process.cwd(), "src", "modules", "plugins");
    
    try {
      // Process core modules
      const coreFiles = readdirSync(coreDir)
        .filter(f => f.endsWith('.ts') && f !== 'index.ts');
      
      for (const file of coreFiles) {
        const moduleName = file.replace('.ts', '');
        const filePath = join(coreDir, file);
        const endpoints = extractParametersFromTSFile(filePath, moduleName);
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
        const endpoints = extractParametersFromTSFile(filePath, moduleName);
        if (endpoints.length > 0) {
          moduleEndpoints[moduleName] = endpoints;
        }
      }
    } catch (error) {
      console.error(`Error reading TypeScript module files: ${error}`);
    }
    
    return moduleEndpoints;
  }

  function extractParametersFromTSFile(filePath: string, moduleName: string): ParameterizedEndpoint[] {
    const endpoints: ParameterizedEndpoint[] = [];
    
    try {
      const content = readFileSync(filePath, 'utf-8');
      
      // Extract API endpoints from the TypeScript source code
      const httpCallRegex = /this\.http\.(get|post|put|delete|patch)\(`([^`]+)`/g;
      let match;
      
      while ((match = httpCallRegex.exec(content)) !== null) {
        const method = match[1].toUpperCase();
        const path = match[2];
        
        // Extract parameters from TypeScript template literals
        const paramMatches = path.match(/\$\{([^}]+)\}/g);
        if (paramMatches) {
          const params = paramMatches.map(param => {
            const paramContent = param.slice(2, -1); // Remove ${ }
            
            // Handle conditional expressions for boolean-to-string conversion
            if (paramContent.includes(' ? ') && paramContent.includes(" '1' : '0'")) {
              // Extract the variable name from expressions like "enabled ? '1' : '0'"
              const varMatch = paramContent.match(/^(\w+)\s*\?/);
              return varMatch ? varMatch[1] : paramContent;
            }
            
            return paramContent;
          });
          
          endpoints.push({
            module: moduleName,
            method,
            postmanUrl: '',
            postmanParams: [],
            typescriptUrl: path,
            typescriptParams: params,
            hasTypescriptMatch: true
          });
        }
      }
    } catch (error) {
      console.error(`Error reading file ${filePath}: ${error}`);
    }
    
    return endpoints;
  }

  function compareParameterHandling(
    postmanEndpoints: ParameterizedEndpoint[],
    typescriptEndpoints: { [module: string]: ParameterizedEndpoint[] }
  ): {
    mismatches: ParameterizedEndpoint[],
    missingInTypescript: ParameterizedEndpoint[],
    extraInTypescript: ParameterizedEndpoint[],
    correctMatches: ParameterizedEndpoint[]
  } {
    const mismatches: ParameterizedEndpoint[] = [];
    const missingInTypescript: ParameterizedEndpoint[] = [];
    const extraInTypescript: ParameterizedEndpoint[] = [];
    const correctMatches: ParameterizedEndpoint[] = [];
    
    // Check each Postman parameterized endpoint
    for (const postmanEndpoint of postmanEndpoints) {
      const moduleEndpoints = typescriptEndpoints[postmanEndpoint.module] || [];
      
      // Normalize URLs for comparison (remove parameters)
      const postmanBase = postmanEndpoint.postmanUrl.replace(/\/\{\{[^}]+\}\}/g, '');
      
      // Find matching TypeScript endpoint
      const tsMatch = moduleEndpoints.find(tsEndpoint => {
        const tsBase = tsEndpoint.typescriptUrl!.replace(/\/\$\{[^}]+\}/g, '');
        return tsBase === postmanBase && tsEndpoint.method === postmanEndpoint.method;
      });
      
      if (tsMatch) {
        // Check if parameters match
        const postmanParamCount = postmanEndpoint.postmanParams.length;
        const tsParamCount = tsMatch.typescriptParams.length;
        
        if (postmanParamCount === tsParamCount) {
          correctMatches.push({
            ...postmanEndpoint,
            typescriptUrl: tsMatch.typescriptUrl,
            typescriptParams: tsMatch.typescriptParams,
            hasTypescriptMatch: true
          });
        } else {
          mismatches.push({
            ...postmanEndpoint,
            typescriptUrl: tsMatch.typescriptUrl,
            typescriptParams: tsMatch.typescriptParams,
            hasTypescriptMatch: true,
            issue: `Parameter count mismatch: Postman has ${postmanParamCount} params, TypeScript has ${tsParamCount}`
          });
        }
      } else {
        missingInTypescript.push({
          ...postmanEndpoint,
          issue: 'No TypeScript implementation found'
        });
      }
    }
    
    // Check for extra TypeScript endpoints not in Postman
    for (const [moduleName, moduleEndpoints] of Object.entries(typescriptEndpoints)) {
      for (const tsEndpoint of moduleEndpoints) {
        const tsBase = tsEndpoint.typescriptUrl!.replace(/\/\$\{[^}]+\}/g, '');
        
        const postmanMatch = postmanEndpoints.find(postmanEndpoint => {
          const postmanBase = postmanEndpoint.postmanUrl.replace(/\/\{\{[^}]+\}\}/g, '');
          return postmanBase === tsBase && 
                 postmanEndpoint.method === tsEndpoint.method &&
                 postmanEndpoint.module === moduleName;
        });
        
        if (!postmanMatch) {
          extraInTypescript.push({
            ...tsEndpoint,
            module: moduleName,
            postmanUrl: 'Not found in Postman',
            issue: 'TypeScript has parameterized endpoint not in Postman collection'
          });
        }
      }
    }
    
    return { mismatches, missingInTypescript, extraInTypescript, correctMatches };
  }

  test("should identify parameter handling mismatches", () => {
    console.log("\\n🔍 Starting Parameter Handling Analysis...\\n");
    
    const postmanParameterized = extractPostmanParameterizedEndpoints();
    const typescriptParameterized = extractTypeScriptParameterizedEndpoints();
    
    console.log(`📊 Found ${postmanParameterized.length} parameterized endpoints in Postman collection`);
    console.log(`📊 Found ${Object.values(typescriptParameterized).flat().length} parameterized endpoints in TypeScript`);
    
    const comparison = compareParameterHandling(postmanParameterized, typescriptParameterized);
    
    console.log(`\\n📈 Analysis Results:`);
    console.log(`✅ Correct matches: ${comparison.correctMatches.length}`);
    console.log(`❌ Parameter mismatches: ${comparison.mismatches.length}`);
    console.log(`🚫 Missing in TypeScript: ${comparison.missingInTypescript.length}`);
    console.log(`➕ Extra in TypeScript: ${comparison.extraInTypescript.length}`);
    
    // Report parameter mismatches
    if (comparison.mismatches.length > 0) {
      console.log(`\\n❌ Parameter Count Mismatches (${comparison.mismatches.length}):`);
      for (const mismatch of comparison.mismatches.slice(0, 10)) { // Show first 10
        console.log(`  📦 ${mismatch.module.toUpperCase()}: ${mismatch.method} ${mismatch.postmanUrl}`);
        console.log(`    Postman params: [${mismatch.postmanParams.join(', ')}]`);
        console.log(`    TypeScript params: [${mismatch.typescriptParams.join(', ')}]`);
        console.log(`    Issue: ${mismatch.issue}`);
        console.log(``);
      }
      if (comparison.mismatches.length > 10) {
        console.log(`    ... and ${comparison.mismatches.length - 10} more mismatches`);
      }
    }
    
    // Report missing implementations
    if (comparison.missingInTypescript.length > 0) {
      console.log(`\\n🚫 Missing TypeScript Implementations (${comparison.missingInTypescript.length}):`);
      for (const missing of comparison.missingInTypescript.slice(0, 10)) {
        console.log(`  📦 ${missing.module.toUpperCase()}: ${missing.method} ${missing.postmanUrl}`);
        console.log(`    Expected params: [${missing.postmanParams.join(', ')}]`);
        console.log(``);
      }
      if (comparison.missingInTypescript.length > 10) {
        console.log(`    ... and ${comparison.missingInTypescript.length - 10} more missing`);
      }
    }
    
    // Report extra TypeScript endpoints
    if (comparison.extraInTypescript.length > 0) {
      console.log(`\\n➕ Extra TypeScript Endpoints (${comparison.extraInTypescript.length}):`);
      for (const extra of comparison.extraInTypescript.slice(0, 10)) {
        console.log(`  📦 ${extra.module.toUpperCase()}: ${extra.method} ${extra.typescriptUrl}`);
        console.log(`    TypeScript params: [${extra.typescriptParams.join(', ')}]`);
        console.log(``);
      }
      if (comparison.extraInTypescript.length > 10) {
        console.log(`    ... and ${comparison.extraInTypescript.length - 10} more extra`);
      }
    }
    
    // Report some correct matches for reference
    if (comparison.correctMatches.length > 0) {
      console.log(`\\n✅ Example Correct Matches (showing first 5):`);
      for (const correct of comparison.correctMatches.slice(0, 5)) {
        console.log(`  📦 ${correct.module.toUpperCase()}: ${correct.method} ${correct.postmanUrl}`);
        console.log(`    Parameters: [${correct.postmanParams.join(', ')}] ✅`);
        console.log(``);
      }
    }
    
    // Module-specific analysis
    const moduleStats: { [module: string]: { correct: number, mismatched: number, missing: number, extra: number } } = {};
    
    for (const endpoint of postmanParameterized) {
      if (!moduleStats[endpoint.module]) {
        moduleStats[endpoint.module] = { correct: 0, mismatched: 0, missing: 0, extra: 0 };
      }
    }
    
    for (const correct of comparison.correctMatches) {
      moduleStats[correct.module].correct++;
    }
    
    for (const mismatch of comparison.mismatches) {
      moduleStats[mismatch.module].mismatched++;
    }
    
    for (const missing of comparison.missingInTypescript) {
      moduleStats[missing.module].missing++;
    }
    
    for (const extra of comparison.extraInTypescript) {
      if (moduleStats[extra.module]) {
        moduleStats[extra.module].extra++;
      }
    }
    
    console.log(`\\n📊 Module-by-Module Parameter Analysis:`);
    for (const [module, stats] of Object.entries(moduleStats)) {
      const total = stats.correct + stats.mismatched + stats.missing;
      const accuracy = total > 0 ? Math.round((stats.correct / total) * 100) : 0;
      
      if (total > 0) {
        console.log(`  📦 ${module.toUpperCase()}: ${accuracy}% accuracy (${stats.correct}/${total} correct)`);
        if (stats.mismatched > 0) console.log(`    ❌ ${stats.mismatched} parameter mismatches`);
        if (stats.missing > 0) console.log(`    🚫 ${stats.missing} missing implementations`);
        if (stats.extra > 0) console.log(`    ➕ ${stats.extra} extra endpoints`);
      }
    }
    
    // Assertions
    expect(postmanParameterized.length).toBeGreaterThan(0);
    expect(Object.keys(typescriptParameterized).length).toBeGreaterThan(0);
    
    // Log summary for test results
    console.log(`\\n🎯 Parameter Handling Summary:`);
    console.log(`Total parameterized endpoints in Postman: ${postmanParameterized.length}`);
    console.log(`Correctly implemented in TypeScript: ${comparison.correctMatches.length}`);
    console.log(`Parameter handling accuracy: ${postmanParameterized.length > 0 ? Math.round((comparison.correctMatches.length / postmanParameterized.length) * 100) : 0}%`);
  });
});