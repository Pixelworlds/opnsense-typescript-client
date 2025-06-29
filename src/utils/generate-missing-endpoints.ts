#!/usr/bin/env bun

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
  controller?: string;
  action?: string;
  description?: string;
}

interface ModuleEndpoints {
  [moduleName: string]: ParameterizedEndpoint[];
}

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
        ).map(param => param.slice(2, -2));
        
        // Only include endpoints that have parameters
        if (params.length > 0) {
          if (pathSegments.length > 0) {
            moduleName = pathSegments[0].toLowerCase();
          }
          
          // Extract controller and action
          let controller = '';
          let action = '';
          if (pathSegments.length >= 2) {
            controller = pathSegments[1];
          }
          if (pathSegments.length >= 3) {
            // Extract action (remove parameters)
            const actionSegment = pathSegments[2];
            if (!actionSegment.startsWith('{{')) {
              action = actionSegment;
            }
          }
          
          if (moduleName) {
            endpoints.push({
              module: moduleName,
              method,
              postmanUrl: fullPath,
              postmanParams: params,
              controller,
              action,
              description: `${method} ${fullPath}`
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
    
    const httpCallRegex = /this\.http\.(get|post|put|delete|patch)\(['\"`]([^'\"`]+)['\"`]/g;
    let match;
    
    while ((match = httpCallRegex.exec(content)) !== null) {
      const method = match[1].toUpperCase();
      const path = match[2];
      
      const paramMatches = path.match(/\$\{([^}]+)\}/g);
      if (paramMatches) {
        const params = paramMatches.map(param => param.slice(2, -1));
        
        endpoints.push({
          module: moduleName,
          method,
          postmanUrl: '',
          postmanParams: [],
          typescriptUrl: path,
          typescriptParams: params
        } as any);
      }
    }
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error}`);
  }
  
  return endpoints;
}

function findMissingImplementations(): ModuleEndpoints {
  const postmanEndpoints = extractPostmanParameterizedEndpoints();
  const typescriptEndpoints = extractTypeScriptParameterizedEndpoints();
  const missing: ModuleEndpoints = {};
  
  for (const postmanEndpoint of postmanEndpoints) {
    const moduleEndpoints = typescriptEndpoints[postmanEndpoint.module] || [];
    
    const postmanBase = postmanEndpoint.postmanUrl.replace(/\/\{\{[^}]+\}\}/g, '');
    
    const tsMatch = moduleEndpoints.find(tsEndpoint => {
      const tsBase = (tsEndpoint as any).typescriptUrl!.replace(/\/\$\{[^}]+\}/g, '');
      return tsBase === postmanBase && (tsEndpoint as any).method === postmanEndpoint.method;
    });
    
    if (!tsMatch) {
      if (!missing[postmanEndpoint.module]) {
        missing[postmanEndpoint.module] = [];
      }
      missing[postmanEndpoint.module].push(postmanEndpoint);
    }
  }
  
  return missing;
}

function generateTypeScriptMethod(endpoint: ParameterizedEndpoint): string {
  const methodName = generateMethodName(endpoint);
  const params = generateParameters(endpoint);
  const returnType = endpoint.method === 'GET' ? 'Promise<ApiResponse<any>>' : 'Promise<ApiResponse<ApiResult>>';
  const urlPath = generateUrlPath(endpoint);
  const httpMethod = endpoint.method.toLowerCase();
  
  const dataParam = endpoint.method !== 'GET' ? ', data' : '';
  
  return `  /**
   * ${endpoint.description || `${endpoint.method} ${endpoint.action || 'operation'} for ${endpoint.module} ${endpoint.controller}`}
   */
  async ${methodName}(${params}): ${returnType} {
    return this.http.${httpMethod}(\`${urlPath}\`${dataParam});
  }`;
}

function generateMethodName(endpoint: ParameterizedEndpoint): string {
  const action = endpoint.action || 'operation';
  
  // Convert action to camelCase
  let methodName = action.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  
  // Add appropriate prefix based on HTTP method
  if (endpoint.method === 'GET' && !methodName.startsWith('get')) {
    methodName = 'get' + methodName.charAt(0).toUpperCase() + methodName.slice(1);
  } else if (endpoint.method === 'POST' && action.startsWith('del')) {
    // Keep 'del' as is for delete operations
  } else if (endpoint.method === 'POST' && !['add', 'set', 'del', 'toggle'].some(prefix => methodName.startsWith(prefix))) {
    methodName = 'execute' + methodName.charAt(0).toUpperCase() + methodName.slice(1);
  }
  
  return methodName;
}

function generateParameters(endpoint: ParameterizedEndpoint): string {
  const params: string[] = [];
  
  // Add path parameters
  for (const param of endpoint.postmanParams) {
    params.push(`${param}: string`);
  }
  
  // Add data parameter for non-GET requests
  if (endpoint.method !== 'GET') {
    params.push(`data?: Record<string, any>`);
  }
  
  return params.join(', ');
}

function generateUrlPath(endpoint: ParameterizedEndpoint): string {
  let path = endpoint.postmanUrl;
  
  // Replace {{param}} with ${param}
  for (const param of endpoint.postmanParams) {
    path = path.replace(`{{${param}}}`, `\${${param}}`);
  }
  
  return path;
}

function groupByModule(missingEndpoints: ModuleEndpoints): void {
  console.log('📊 Missing Implementations by Module:\n');
  
  // Sort modules by number of missing endpoints (descending)
  const sortedModules = Object.entries(missingEndpoints)
    .sort(([,a], [,b]) => b.length - a.length);
  
  for (const [moduleName, endpoints] of sortedModules) {
    console.log(`📦 ${moduleName.toUpperCase()}: ${endpoints.length} missing endpoints`);
    
    // Group by controller
    const byController: { [controller: string]: ParameterizedEndpoint[] } = {};
    for (const endpoint of endpoints) {
      const controller = endpoint.controller || 'unknown';
      if (!byController[controller]) {
        byController[controller] = [];
      }
      byController[controller].push(endpoint);
    }
    
    for (const [controller, controllerEndpoints] of Object.entries(byController)) {
      console.log(`  📁 ${controller}: ${controllerEndpoints.length} endpoints`);
      
      // Show first few endpoints as examples
      const examples = controllerEndpoints.slice(0, 3);
      for (const endpoint of examples) {
        console.log(`    - ${endpoint.method} ${endpoint.postmanUrl}`);
      }
      if (controllerEndpoints.length > 3) {
        console.log(`    ... and ${controllerEndpoints.length - 3} more`);
      }
    }
    console.log('');
  }
}

function generateImplementationFile(moduleName: string, endpoints: ParameterizedEndpoint[]): void {
  console.log(`\n🔧 Generated methods for ${moduleName.toUpperCase()} module:\n`);
  
  // Group by controller
  const byController: { [controller: string]: ParameterizedEndpoint[] } = {};
  for (const endpoint of endpoints) {
    const controller = endpoint.controller || 'main';
    if (!byController[controller]) {
      byController[controller] = [];
    }
    byController[controller].push(endpoint);
  }
  
  for (const [controller, controllerEndpoints] of Object.entries(byController)) {
    console.log(`// ${controller.toUpperCase()} Controller Methods`);
    
    for (const endpoint of controllerEndpoints.slice(0, 5)) { // Show first 5 as examples
      console.log(generateTypeScriptMethod(endpoint));
      console.log('');
    }
    
    if (controllerEndpoints.length > 5) {
      console.log(`// ... and ${controllerEndpoints.length - 5} more methods for ${controller}`);
    }
    console.log('');
  }
}

// Main execution
function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'analyze';
  
  console.log('🔍 Analyzing missing parameterized endpoint implementations...\n');
  
  const missingEndpoints = findMissingImplementations();
  const totalMissing = Object.values(missingEndpoints).reduce((sum, endpoints) => sum + endpoints.length, 0);
  
  console.log(`📊 Total missing implementations: ${totalMissing}\n`);
  
  if (command === 'analyze' || command === 'summary') {
    groupByModule(missingEndpoints);
  }
  
  if (command === 'generate' && args[1]) {
    const moduleName = args[1].toLowerCase();
    const moduleEndpoints = missingEndpoints[moduleName];
    
    if (moduleEndpoints) {
      generateImplementationFile(moduleName, moduleEndpoints);
    } else {
      console.log(`❌ Module '${moduleName}' not found or has no missing endpoints.`);
      console.log(`Available modules: ${Object.keys(missingEndpoints).join(', ')}`);
    }
  }
  
  if (command === 'help') {
    console.log(`Usage:
  bun src/utils/generate-missing-endpoints.ts [command] [module]
  
Commands:
  analyze (default) - Show summary of missing implementations by module
  generate <module> - Generate TypeScript methods for a specific module
  help             - Show this help message
  
Examples:
  bun src/utils/generate-missing-endpoints.ts
  bun src/utils/generate-missing-endpoints.ts generate dhcrelay
  bun src/utils/generate-missing-endpoints.ts generate ipsec`);
  }
}

if (import.meta.main) {
  main();
}