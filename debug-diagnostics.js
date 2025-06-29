#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIAGNOSTICS_FILE = path.join(__dirname, 'src', 'modules', 'core', 'diagnostics.ts');

function extractEndpointsFromTSFile(filePath, moduleName) {
  const endpoints = [];
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    console.log(`File content length: ${content.length} characters`);
    console.log('First 500 characters:');
    console.log(content.substring(0, 500));
    console.log('\n=== Searching for HTTP calls ===');
    
    // Extract API endpoints from the TypeScript source code
    const httpCallRegex = /this\.http\.(get|post|put|delete|patch)\(['"`]([^'"`]+)['"`]/g;
    let match;
    let count = 0;
    
    while ((match = httpCallRegex.exec(content)) !== null) {
      count++;
      const method = match[1].toUpperCase();
      const path = match[2];
      
      console.log(`${count}. Found: ${method} ${path}`);
      
      endpoints.push({
        module: moduleName,
        method,
        path,
        fullPath: path
      });
    }
    
    console.log(`\nTotal endpoints found: ${endpoints.length}`);
    
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error}`);
  }
  
  return endpoints;
}

console.log('🔍 Debugging Diagnostics Module Endpoint Extraction...\n');

const endpoints = extractEndpointsFromTSFile(DIAGNOSTICS_FILE, 'diagnostics');

console.log('\n📊 Summary:');
console.log(`File: ${DIAGNOSTICS_FILE}`);
console.log(`Total endpoints extracted: ${endpoints.length}`);

if (endpoints.length > 0) {
  console.log('\n📋 Sample endpoints:');
  endpoints.slice(0, 10).forEach((ep, i) => {
    console.log(`  ${i + 1}. ${ep.method} ${ep.path}`);
  });
  
  if (endpoints.length > 10) {
    console.log(`  ... and ${endpoints.length - 10} more endpoints`);
  }
} else {
  console.log('\n❌ No endpoints found - this indicates an issue with the extraction');
}