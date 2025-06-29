import { test, expect, describe } from "vitest";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

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

describe("Debug Diagnostics Endpoint Detection", () => {
  function extractEndpointsFromTSFile(filePath: string, moduleName: string): ModuleEndpoint[] {
    const endpoints: ModuleEndpoint[] = [];
    
    try {
      const content = readFileSync(filePath, 'utf-8');
      
      console.log(`📁 Debug: Processing ${moduleName}`);
      console.log(`📏 Debug: File size ${content.length} characters`);
      console.log(`🔍 Debug: First 200 chars: ${content.substring(0, 200)}`);
      
      // Extract API endpoints from the TypeScript source code
      const httpCallRegex = /this\.http\.(get|post|put|delete|patch)\(['"`]([^'"`]+)['"`]/g;
      let match;
      let count = 0;
      
      while ((match = httpCallRegex.exec(content)) !== null) {
        count++;
        const method = match[1].toUpperCase();
        const path = match[2];
        
        if (count <= 5) {
          console.log(`🎯 Debug: Found endpoint ${count}: ${method} ${path}`);
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
      
      console.log(`📊 Debug: Total endpoints found: ${endpoints.length}`);
      
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
      console.error(`❌ Debug: Error reading file ${filePath}: ${error}`);
    }
    
    return endpoints;
  }

  function extractTypeScriptEndpoints(): ModuleEndpoints {
    const moduleEndpoints: ModuleEndpoints = {};
    const coreDir = join(process.cwd(), "src", "modules", "core");
    
    try {
      // Process core modules
      const coreFiles = readdirSync(coreDir)
        .filter(f => f.endsWith('.ts') && f !== 'index.ts');
      
      console.log(`🔍 Debug: Found core files: ${coreFiles.join(', ')}`);
      
      for (const file of coreFiles) {
        const moduleName = file.replace('.ts', '');
        const filePath = join(coreDir, file);
        
        if (moduleName === 'diagnostics') {
          console.log(`🩺 Debug: Processing diagnostics module at ${filePath}`);
        }
        
        const endpoints = extractEndpointsFromTSFile(filePath, moduleName);
        if (endpoints.length > 0) {
          moduleEndpoints[moduleName] = endpoints;
        }
        
        if (moduleName === 'diagnostics') {
          console.log(`🩺 Debug: Diagnostics module result: ${endpoints.length} endpoints`);
        }
      }
      
    } catch (error) {
      console.error(`❌ Debug: Error reading TypeScript module files: ${error}`);
    }
    
    return moduleEndpoints;
  }

  test("should debug diagnostics endpoint extraction", () => {
    console.log("🔬 Debug: Starting diagnostics endpoint extraction test...");
    
    const moduleEndpoints = extractTypeScriptEndpoints();
    
    console.log(`📊 Debug: Total modules with endpoints: ${Object.keys(moduleEndpoints).length}`);
    
    // Check specifically for diagnostics
    if (moduleEndpoints.diagnostics) {
      console.log(`✅ Debug: Diagnostics module found with ${moduleEndpoints.diagnostics.length} endpoints`);
      
      // Show first few endpoints
      console.log("🔍 Debug: First 5 diagnostics endpoints:");
      moduleEndpoints.diagnostics.slice(0, 5).forEach((ep, i) => {
        console.log(`  ${i + 1}. ${ep.method} ${ep.fullPath}`);
      });
      
      expect(moduleEndpoints.diagnostics.length).toBeGreaterThan(80);
    } else {
      console.log("❌ Debug: No diagnostics module found in results!");
      console.log("📋 Debug: Available modules:", Object.keys(moduleEndpoints));
      expect(true).toBe(false); // Force test to fail
    }
  });
});