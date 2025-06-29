#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Replicate the exact test logic
function extractEndpointsFromTSFile(filePath, moduleName) {
  const endpoints = [];
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    console.log(`📁 File: ${path.basename(filePath)}`);
    console.log(`📏 Content length: ${content.length} characters`);
    
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

function extractTypeScriptEndpoints() {
  const moduleEndpoints = {};
  const coreDir = path.join(__dirname, "src", "modules", "core");
  
  try {
    // Process core modules
    const coreFiles = fs.readdirSync(coreDir)
      .filter(f => f.endsWith('.ts') && f !== 'index.ts');
    
    console.log(`🔍 Found ${coreFiles.length} core module files:`);
    coreFiles.forEach(f => console.log(`  - ${f}`));
    console.log('');
    
    for (const file of coreFiles) {
      const moduleName = file.replace('.ts', '');
      const filePath = path.join(coreDir, file);
      
      console.log(`📝 Processing: ${moduleName}`);
      const endpoints = extractEndpointsFromTSFile(filePath, moduleName);
      
      if (endpoints.length > 0) {
        moduleEndpoints[moduleName] = endpoints;
        console.log(`✅ Found ${endpoints.length} endpoints`);
      } else {
        console.log(`❌ No endpoints found`);
      }
      console.log('');
    }
    
  } catch (error) {
    console.error(`Error reading TypeScript module files: ${error}`);
  }
  
  return moduleEndpoints;
}

console.log('🔬 Debugging Test Endpoint Extraction Logic...\n');

const moduleEndpoints = extractTypeScriptEndpoints();

console.log('📊 Results Summary:');
console.log(`Total modules processed: ${Object.keys(moduleEndpoints).length}`);

Object.entries(moduleEndpoints).forEach(([moduleName, endpoints]) => {
  console.log(`  ${moduleName}: ${endpoints.length} endpoints`);
});

if (moduleEndpoints.diagnostics) {
  console.log('\n🩺 Diagnostics Module Details:');
  console.log(`  Endpoints found: ${moduleEndpoints.diagnostics.length}`);
  
  if (moduleEndpoints.diagnostics.length > 0) {
    console.log('  Sample endpoints:');
    moduleEndpoints.diagnostics.slice(0, 5).forEach((ep, i) => {
      console.log(`    ${i + 1}. ${ep.method} ${ep.fullPath}`);
    });
  }
} else {
  console.log('\n❌ No diagnostics module found in results!');
}