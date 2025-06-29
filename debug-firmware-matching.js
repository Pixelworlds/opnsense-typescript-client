#!/usr/bin/env bun

const { readdirSync, readFileSync } = require("fs");
const { join } = require("path");

function extractPostmanParameterizedEndpoints() {
  const postmanDir = join(process.cwd(), "postman");
  const parameterizedEndpoints = [];
  
  try {
    const files = readdirSync(postmanDir).filter(f => f.endsWith('.json'));
    
    for (const file of files) {
      const filePath = join(postmanDir, file);
      const content = readFileSync(filePath, 'utf-8');
      const collection = JSON.parse(content);
      
      if (collection.item) {
        extractParametersFromItems(collection.item, parameterizedEndpoints, []);
      }
    }
  } catch (error) {
    console.error(`Error reading Postman collections: ${error}`);
  }
  
  return parameterizedEndpoints;
}

function extractParametersFromItems(items, endpoints, pathContext) {
  for (const item of items) {
    const currentPath = [...pathContext, item.name];
    
    if (item.request?.url) {
      const method = item.request.method || 'GET';
      let fullPath = '';
      let moduleName = '';
      let params = [];
      
      if (item.request.url.path && item.request.url.path.length > 0) {
        const pathSegments = item.request.url.path.filter(segment => 
          segment && !segment.startsWith('{{opnsense_base_url}}')
        );
        fullPath = '/api/' + pathSegments.join('/');
        
        // Extract parameters from path segments
        params = pathSegments.filter(segment => 
          segment.startsWith('{{') && segment.endsWith('}}')
        ).map(param => param.slice(2, -2)); // Remove {{ }}
        
        // Only include endpoints that have parameters and are firmware related
        if (params.length > 0 && fullPath.includes('/firmware/')) {
          // Extract module name (first segment after filtering)
          if (pathSegments.length > 0) {
            moduleName = pathSegments[0].toLowerCase();
          }
          
          console.log(`Found firmware endpoint:`);
          console.log(`  Raw URL: ${item.request.url.raw}`);
          console.log(`  Path segments: [${pathSegments.join(', ')}]`);
          console.log(`  Full path: ${fullPath}`);
          console.log(`  Module name: ${moduleName}`);
          console.log(`  Parameters: [${params.join(', ')}]`);
          console.log(`  Method: ${method}`);
          console.log('---');
          
          if (moduleName) {
            endpoints.push({
              module: moduleName,
              method,
              postmanUrl: fullPath,
              postmanParams: params,
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

console.log("🔍 Analyzing firmware endpoints in Postman collection...");
const firmwareEndpoints = extractPostmanParameterizedEndpoints();
console.log(`\n📊 Found ${firmwareEndpoints.length} firmware endpoints with parameters:`);

// Group by module
const byModule = {};
for (const endpoint of firmwareEndpoints) {
  if (!byModule[endpoint.module]) {
    byModule[endpoint.module] = [];
  }
  byModule[endpoint.module].push(endpoint);
}

console.log("\n📦 Grouped by module:");
for (const [module, endpoints] of Object.entries(byModule)) {
  console.log(`  ${module.toUpperCase()}: ${endpoints.length} endpoints`);
  for (const endpoint of endpoints) {
    console.log(`    ${endpoint.method} ${endpoint.postmanUrl}`);
  }
}